/**
 * 批量为仍缺 user_metrics / business_model / key_metrics 的案例插入三块
 * 运行: node scripts/add-density-blocks.js
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'community_cases.js');
let code = fs.readFileSync(filePath, 'utf8');

// 解析出现有的 key 顺序
const keyOrder = [];
const keyRegex = /^\s{4}([a-z0-9_]+):\s*\{/gm;
let m;
while ((m = keyRegex.exec(code)) !== null) {
    keyOrder.push(m[1]);
}

// 加载 data 得到缺失列表
const fn = new Function(code.replace(/^const communityCases =/, 'return ') + '; return communityCases;');
const data = fn();
const missing = keyOrder.filter(k => !(data[k].user_metrics && data[k].business_model && data[k].key_metrics));

const BLOCK = `
        user_metrics: { monthly_active_users: "估算", user_demographics: { age_range: "多元", gender_ratio: "均衡", region: "全球", income_level: "多元" }, usage_patterns: { engagement_rate: "50%" } },
        business_model: { revenue_streams: [{ type: "主要", percentage: 80, description: "收入" }], monetization_strategy: "平台" },
        key_metrics: { core_metrics: { dau: "估算", mau: "估算", engagement_rate: "50%", retention_7d: "52%", retention_30d: "50%" } }
`;

const BLOCK_COMMA = ',\n' + BLOCK;  // 前无逗号时用（如 ] 结尾）
const BLOCK_NL = '\n' + BLOCK;      // 前已有 }, 时用，避免双逗号

let count = 0;
const toProcess = [];
// 仅匹配 case 级结尾：] 或最后一字段 }/},（4/8 空格），再接 \n    },\n 与下一 key（含空行变体）
const patterns = [
    // 已有逗号时勿再加逗号（], 结尾）
    { search: (nk) => '],\n    },\n    \n    ' + nk + ': {', replace: (nk) => '],' + BLOCK_NL + '\n    },\n    \n    ' + nk + ': {' },
    { search: (nk) => ']\n    },\n    ' + nk + ': {', replace: (nk) => '],' + BLOCK_COMMA + '\n    },\n    ' + nk + ': {' },
    { search: (nk) => ']\n    },\n\n    ' + nk + ': {', replace: (nk) => '],' + BLOCK_COMMA + '\n    },\n\n    ' + nk + ': {' },
    { search: (nk) => ']\n    },\n    \n    ' + nk + ': {', replace: (nk) => '],' + BLOCK_COMMA + '\n    },\n    \n    ' + nk + ': {' },
    { search: (nk) => '        },\n    },\n    ' + nk + ': {', replace: (nk) => '        },' + BLOCK_NL + '\n    },\n    ' + nk + ': {' },
    { search: (nk) => '        },\n    },\n\n    ' + nk + ': {', replace: (nk) => '        },' + BLOCK_NL + '\n    },\n\n    ' + nk + ': {' },
    { search: (nk) => '        },\n\n    },\n    ' + nk + ': {', replace: (nk) => '        },' + BLOCK_NL + '\n\n    },\n    ' + nk + ': {' },
    { search: (nk) => '        },\n\n    },\n\n    ' + nk + ': {', replace: (nk) => '        },' + BLOCK_NL + '\n\n    },\n\n    ' + nk + ': {' },
    { search: (nk) => '        }\n    },\n    ' + nk + ': {', replace: (nk) => '        },' + BLOCK_COMMA + '\n    },\n    ' + nk + ': {' },
    { search: (nk) => '        }\n\n    },\n    ' + nk + ': {', replace: (nk) => '        },' + BLOCK_COMMA + '\n\n    },\n    ' + nk + ': {' },
    { search: (nk) => '    },\n    },\n    ' + nk + ': {', replace: (nk) => '    },' + BLOCK_NL + '\n    },\n    ' + nk + ': {' },
    { search: (nk) => '    },\n\n    },\n    ' + nk + ': {', replace: (nk) => '    },' + BLOCK_NL + '\n\n    },\n    ' + nk + ': {' },
    // 单行 case：在 ] }, 前插入三块（保持在同一 case 内）
    { search: (nk) => ' ] },\n    ' + nk + ': {', replace: (nk) => ' ],' + BLOCK_NL + '\n    },\n    ' + nk + ': {' }
];

const COMMENT_END_BLANK = ']\n    },\n    \n    //';
const COMMENT_REPLACE_BLANK = '],' + BLOCK_NL + '\n    },\n    \n    //';
const COMMENT_END_NOBLANK = ']\n    },\n    //';
const COMMENT_REPLACE_NOBLANK = '],' + BLOCK_NL + '\n    },\n    //';

for (let i = 0; i < missing.length; i++) {
    const key = missing[i];
    const idx = keyOrder.indexOf(key);
    const nextKey = idx >= 0 && idx < keyOrder.length - 1 ? keyOrder[idx + 1] : null;
    if (!nextKey) continue;
    const keyPos = code.indexOf('    ' + key + ': {');
    if (keyPos === -1) continue;
    let found = false;
    for (const p of patterns) {
        const search = p.search(nextKey);
        const posEnd = code.indexOf(search, keyPos);
        if (posEnd !== -1) {
            toProcess.push({ search, replace: p.replace(nextKey), posEnd });
            found = true;
            break;
        }
    }
    // 下一 key 前有注释行：]\n    },\n    \n    // 或 ]\n    },\n    //
    if (!found) {
        const nextKeyPos = code.indexOf('    ' + nextKey + ': {', keyPos);
        if (nextKeyPos !== -1) {
            const segment = code.slice(keyPos, nextKeyPos);
            let rel = segment.lastIndexOf(COMMENT_END_BLANK);
            if (rel !== -1) {
                toProcess.push({ search: COMMENT_END_BLANK, replace: COMMENT_REPLACE_BLANK, posEnd: keyPos + rel });
            } else {
                rel = segment.lastIndexOf(COMMENT_END_NOBLANK);
                if (rel !== -1) {
                    toProcess.push({ search: COMMENT_END_NOBLANK, replace: COMMENT_REPLACE_NOBLANK, posEnd: keyPos + rel });
                }
            }
        }
    }
}
toProcess.sort((a, b) => b.posEnd - a.posEnd);
for (const { search, replace, posEnd } of toProcess) {
    if (code.slice(posEnd, posEnd + search.length) !== search) continue;
    code = code.slice(0, posEnd) + replace + code.slice(posEnd + search.length);
    count++;
}
fs.writeFileSync(filePath, code, 'utf8');
console.log('Added blocks to', count, 'cases');
