/**
 * 多维度信息获取与增密报告脚本
 * 用于：实效性检查、信息增密报告、核心案例增密
 * 可在浏览器（数据管理后台）或 Node（需传入 communityCases）中运行
 */

(function (global) {
    'use strict';

    // 核心案例 key 列表（与 docs 中核心案例一致，可配置）
    var CORE_CASE_KEYS = [
        'wechat', 'douyin', 'xiaohongshu', 'bilibili', 'reddit', 'discord', 'youtube', 'github',
        'kuaishou', 'zhihu', 'douban', 'jike', 'twitter', 'instagram', 'linkedin', 'pinterest',
        'steam', 'twitch', 'spotify', 'xiaoyuzhou', 'slack', 'patreon', 'roblox', 'figma', 'clubhouse'
    ];

    // 信息密度所需完整块
    var DENSITY_BLOCKS = {
        user_metrics: {
            required: ['monthly_active_users', 'user_demographics'],
            optional: ['daily_active_users', 'growth_rate', 'retention_rate', 'usage_patterns']
        },
        business_model: {
            required: ['revenue_streams', 'monetization_strategy'],
            optional: ['financial_metrics']
        },
        key_metrics: {
            required: ['core_metrics'],
            optional: ['content_metrics', 'business_metrics']
        }
    };

    /**
     * 从数据源获取案例列表
     * @param {Object} [casesSource] - 可选，communityCases 对象；不传则使用 global.communityCases
     * @returns {{ key: string, data: Object }[]}
     */
    function getCases(casesSource) {
        var raw = casesSource || (typeof global !== 'undefined' && global.communityCases) || {};
        return Object.keys(raw).map(function (key) {
            return { key: key, data: raw[key] };
        }).filter(function (x) { return x.data && typeof x.data === 'object'; });
    }

    /**
     * 实效性检查：基于 timeline 最后年份、是否有“近期”信息
     * @param {Object} caseData - 单条案例数据
     * @returns {{ level: string, lastYear: string|number, suggestion: string }}
     */
    function checkTimeliness(caseData) {
        var timeline = (caseData.timeline || []);
        var lastYear = null;
        if (timeline.length) {
            var years = timeline.map(function (e) { return parseInt(String(e.year || e.event || '0').replace(/\D/g, '').slice(0, 4) || '0', 10); }).filter(function (y) { return y > 1900 && y < 2100; });
            lastYear = years.length ? Math.max.apply(null, years) : null;
        }
        var currentYear = new Date().getFullYear();
        var gap = lastYear != null ? currentYear - lastYear : null;
        var level = 'unknown';
        var suggestion = '建议补充近期 timeline 或披露来源';
        if (gap != null) {
            if (gap <= 1) {
                level = 'fresh';
                suggestion = '时效性良好';
            } else if (gap <= 3) {
                level = 'normal';
                suggestion = '建议补充近 1–2 年大事件';
            } else {
                level = 'stale';
                suggestion = '建议更新 timeline 与关键指标';
            }
        }
        return { level: level, lastYear: lastYear, gap: gap, suggestion: suggestion };
    }

    /**
     * 实效性报告（全量）
     * @param {{ key: string, data: Object }[]} cases
     * @returns {{ summary: Object, items: Array }}
     */
    function runTimelinessReport(cases) {
        var items = [];
        var summary = { fresh: 0, normal: 0, stale: 0, unknown: 0, total: cases.length };
        cases.forEach(function (c) {
            var r = checkTimeliness(c.data);
            summary[r.level] = (summary[r.level] || 0) + 1;
            items.push({
                caseKey: c.key,
                title: (c.data.title || c.key),
                level: r.level,
                lastYear: r.lastYear,
                gap: r.gap,
                suggestion: r.suggestion
            });
        });
        return { summary: summary, items: items };
    }

    /**
     * 单条案例信息密度评分与缺失项
     */
    function getDensityForCase(caseData) {
        var missing = [];
        var score = 0;
        var maxScore = 0;

        ['user_metrics', 'business_model', 'key_metrics'].forEach(function (blockName) {
            var block = DENSITY_BLOCKS[blockName];
            var data = caseData[blockName];
            if (!data || typeof data !== 'object') {
                missing.push(blockName);
                maxScore += 2;
                return;
            }
            maxScore += 2;
            score += 1;
            var required = block.required || [];
            var ok = required.filter(function (k) { return data[k] != null && (typeof data[k] !== 'object' || Object.keys(data[k]).length > 0); }).length;
            if (ok >= required.length) score += 1;
            else missing.push(blockName + '.' + required.filter(function (k) { return !data[k]; }).join(','));
        });

        var densityScore = maxScore ? Math.round((score / maxScore) * 100) : 0;
        return { score: densityScore, missing: missing };
    }

    /**
     * 信息增密报告（全量）
     */
    function runDensityReport(cases) {
        var items = [];
        var low = 0, mid = 0, high = 0;
        cases.forEach(function (c) {
            var d = getDensityForCase(c.data);
            if (d.score < 34) low++;
            else if (d.score < 67) mid++;
            else high++;
            items.push({
                caseKey: c.key,
                title: (c.data.title || c.key),
                densityScore: d.score,
                missing: d.missing.join('; ') || '无',
                hasUserMetrics: !!(c.data.user_metrics),
                hasBusinessModel: !!(c.data.business_model),
                hasKeyMetrics: !!(c.data.key_metrics)
            });
        });
        return {
            summary: { total: cases.length, low: low, mid: mid, high: high },
            items: items
        };
    }

    /**
     * 核心案例增密检查
     */
    function runCoreCaseDensityReport(cases) {
        var caseMap = {};
        cases.forEach(function (c) { caseMap[c.key] = c; });
        var items = [];
        var missingCore = [];
        CORE_CASE_KEYS.forEach(function (key) {
            var c = caseMap[key];
            if (!c) {
                missingCore.push(key);
                items.push({ caseKey: key, title: key, status: 'missing', suggestion: '案例不存在' });
                return;
            }
            var d = getDensityForCase(c.data);
            var status = d.score >= 67 ? 'ok' : (d.score >= 34 ? 'partial' : 'low');
            items.push({
                caseKey: key,
                title: (c.data.title || key),
                status: status,
                densityScore: d.score,
                missing: d.missing.join('; ') || '无',
                suggestion: status === 'ok' ? '已增密' : '建议补全 user_metrics / business_model / key_metrics'
            });
        });
        return {
            summary: {
                total: CORE_CASE_KEYS.length,
                ok: items.filter(function (x) { return x.status === 'ok'; }).length,
                partial: items.filter(function (x) { return x.status === 'partial'; }).length,
                low: items.filter(function (x) { return x.status === 'low'; }).length,
                missing: missingCore.length
            },
            items: items
        };
    }

    /**
     * 一键运行所有维度报告
     */
    function runAllReports(casesSource) {
        var cases = getCases(casesSource);
        return {
            timeliness: runTimelinessReport(cases),
            density: runDensityReport(cases),
            coreDensity: runCoreCaseDensityReport(cases),
            meta: { caseCount: cases.length, runAt: new Date().toISOString() }
        };
    }

    // 导出到 global
    var api = {
        getCases: getCases,
        checkTimeliness: checkTimeliness,
        runTimelinessReport: runTimelinessReport,
        getDensityForCase: getDensityForCase,
        runDensityReport: runDensityReport,
        runCoreCaseDensityReport: runCoreCaseDensityReport,
        runAllReports: runAllReports,
        CORE_CASE_KEYS: CORE_CASE_KEYS,
        DENSITY_BLOCKS: DENSITY_BLOCKS
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        global.InfoDensityReport = api;
    }
})(typeof window !== 'undefined' ? window : this);
