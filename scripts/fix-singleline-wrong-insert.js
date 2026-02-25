const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'community_cases.js');
let code = fs.readFileSync(filePath, 'utf8');

// 补回误删的 case 结束 "},\n    "：模板 key_metrics 结尾 } 后为换行+空格+下一 key（无 "},\n    "）的，补上 "},\n    "
const re = /(key_metrics: \{ core_metrics: \{ dau: "估算", mau: "估算", engagement_rate: "50%", retention_7d: "52%", retention_30d: "50%" \} \})\s*\n\s*\n\s*([a-z0-9_]+): \{/g;
const matches = [...code.matchAll(re)];
const newCode = code.replace(re, (m, p1, p2) => p1 + '\n    },\n    ' + p2 + ': {');
console.log('Fixed', matches.length, 'missing case closings');
fs.writeFileSync(filePath, newCode);
