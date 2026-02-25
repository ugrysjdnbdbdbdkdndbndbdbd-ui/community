/**
 * 数据采集器 - 用户数据 / 商业数据
 * 外部 API 不可用时安全返回 null，不抛错，便于前端回退到本地数据
 */

class DataScraper {
    constructor() {
        this._browser = null;
    }

    /**
     * 用户数据（如 QuestMobile 等）：当前无可用外部 API 时返回 null
     * @param {string} caseName - 案例名称
     * @returns {Promise<{ mau?: number, dau?: number, source?: string } | null>}
     */
    async scrapeQuestMobile(caseName) {
        try {
            // 预留：可接入真实 QuestMobile 或其它数据源
            // 无可用 API 时统一返回 null，由前端用 communityCases 回退
            return null;
        } catch (e) {
            console.warn('[scraper] scrapeQuestMobile failed:', e.message);
            return null;
        }
    }

    /**
     * 商业数据（财报等）：当前无可用外部 API 时返回 null
     * @param {string} caseName - 案例名称
     * @returns {Promise<{ revenue?: number, source?: string } | null>}
     */
    async scrapeEarningsReport(caseName) {
        try {
            // 预留：可接入真实财报或公开数据源
            return null;
        } catch (e) {
            console.warn('[scraper] scrapeEarningsReport failed:', e.message);
            return null;
        }
    }

    async closeBrowser() {
        if (this._browser) {
            try {
                await this._browser.close();
            } catch (e) {
                console.warn('[scraper] closeBrowser:', e.message);
            }
            this._browser = null;
        }
    }
}

module.exports = { DataScraper };
