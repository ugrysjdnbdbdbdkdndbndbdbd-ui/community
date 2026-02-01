// Community Cases Data Store
// Designed for Community Insight Engine 8D
// Principles: No Information Loss, High Density

const communityCases = {
    wechat: {
        title: "微信 (WeChat)", 
        subtitle: "熟人社会的数字化映射",
        dao: "强关系链，基于\"面子\"与互惠。核心是维护现实社会资本。", 
        gov: "开明君主制 (Tencent)。张小龙作为产品哲学家进行顶层设计，规则克制但刚性。", 
        space: "私密客厅（群聊） + 半私密庭院（朋友圈）。", 
        econ: "社交货币极高。去中心化流量分发（公众号+朋友圈）。",
        risk: "上下文坍塌 (Context Collapse)，用户因社交压力大而减少分享。私密空间被工作入侵，导致逃离。",
        atomic_unit: "消息 (Message) / 公众号文章",
        distribution: "社交分发 80% + 编辑分发 10% + 算法分发 10% (视频号除外)",
        death_risk: "臃肿化与社交压力过载 (Social Overload)",
        tags: ["#强关系", "#私密", "#去中心化"],
        scores: [95, 20, 80, 40, 90],
        timeline: [
            { year: "2011", event: "微信1.0发布，主打免费短信，由张小龙团队开发" },
            { year: "2012", event: "朋友圈上线，开启社交网络时代，日活突破1亿" },
            { year: "2013", event: "公众号上线，建立内容创作者生态，开启自媒体时代" },
            { year: "2014", event: "微信支付上线，打通O2O闭环，挑战支付宝" },
            { year: "2015", event: "微信红包春节期间爆发，用户突破5亿" },
            { year: "2017", event: "小程序发布，构建轻应用生态，挑战App Store" },
            { year: "2018", event: "小游戏上线，\"跳一跳\"爆火，展示小程序潜力" },
            { year: "2020", event: "视频号上线，对抗抖音，布局短视频赛道" },
            { year: "2022", event: "视频号商业化加速，推出直播带货功能" }
        ],
        key_decisions: [
            "早期专注熟人社交，避免与QQ正面竞争，定位为\"熟人社会的数字化映射\"",
            "朋友圈采用时间序，保持去中心化，避免算法推荐带来的社交压力",
            "公众号模式建立内容创作者生态，成为内容创业的重要平台",
            "小程序战略构建封闭生态，挑战App Store模式，降低开发门槛",
            "微信支付打通O2O闭环，从社交工具升级为生活方式平台",
            "视频号布局短视频，但在算法推荐上保持克制，平衡内容质量与用户需求"
        ],
        user_metrics: {
            monthly_active_users: "13.5亿",
            daily_active_users: "5亿",
            total_users: "15亿",
            growth_rate: "2%",
            retention_rate: "95%",
            user_demographics: {
                age_range: "25-45岁为主",
                gender_ratio: "52% 男性，48% 女性",
                region: "中国用户为主，覆盖全球",
                income_level: "全年龄段覆盖，中高收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "90分钟/天",
                sessions_per_day: "15次",
                content_creation_rate: "8%",
                engagement_rate: "85%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告收入",
                    percentage: 40,
                    description: "朋友圈广告、公众号广告、视频号广告"
                },
                {
                    type: "支付服务",
                    percentage: 30,
                    description: "微信支付手续费、理财通、微粒贷"
                },
                {
                    type: "小程序生态",
                    percentage: 20,
                    description: "小程序交易佣金、游戏分成"
                },
                {
                    type: "其他服务",
                    percentage: 10,
                    description: "企业微信、视频号直播、微信读书等"
                }
            ],
            monetization_strategy: "广告+支付+小程序生态的三元变现模式",
            financial_metrics: {
                annual_revenue: "约2000亿人民币 (2023)",
                revenue_growth: "8% YoY",
                profitability: "盈利",
                valuation: "约1万亿人民币 (腾讯核心资产)"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "QQ", similarity: 60, position: "内部竞品，差异化定位" },
                { name: "钉钉", similarity: 30, position: "企业场景间接竞品" },
                { name: "抖音", similarity: 40, position: "内容消费间接竞品" }
            ],
            market_position: "中国社交领域绝对领导者",
            market_share: "中国即时通讯市场95%+",
            competitive_advantages: [
                "用户规模巨大，网络效应极强",
                "生态完整，覆盖社交、支付、内容、服务",
                "熟人关系链形成强粘性",
                "去中心化设计降低社交压力"
            ],
            competitive_disadvantages: [
                "产品臃肿化风险",
                "年轻人流失到其他平台",
                "海外市场拓展困难"
            ]
        },
        tech_stack: {
            core_technologies: [
                "自研通信协议（MTProto类似）",
                "分布式架构",
                "小程序运行环境（V8引擎）",
                "支付安全系统"
            ],
            tech_features: [
                "端到端加密（部分功能）",
                "分布式服务器架构",
                "小程序轻量级运行环境",
                "实时消息推送系统"
            ],
            tech_challenges: [
                "超大规模并发处理（13.5亿用户）",
                "消息实时性保障",
                "小程序性能优化",
                "数据隐私保护"
            ]
        },
        product_features: {
            core_features: [
                {
                    name: "即时通讯",
                    description: "文字、语音、视频消息，群聊功能",
                    importance: "核心功能"
                },
                {
                    name: "朋友圈",
                    description: "基于时间序的社交动态分享",
                    importance: "核心功能"
                },
                {
                    name: "公众号",
                    description: "内容创作者平台，支持图文、视频",
                    importance: "核心功能"
                },
                {
                    name: "小程序",
                    description: "轻量级应用生态，无需下载即用",
                    importance: "核心功能"
                },
                {
                    name: "微信支付",
                    description: "移动支付、转账、红包功能",
                    importance: "核心功能"
                },
                {
                    name: "视频号",
                    description: "短视频内容平台，支持直播",
                    importance: "重要功能"
                }
            ],
            innovative_features: [
                "小程序生态（首创轻应用模式）",
                "微信红包（社交支付创新）",
                "视频号（去中心化算法推荐）"
            ],
            feature_evolution: [
                { year: "2011", feature: "基础即时通讯" },
                { year: "2012", feature: "朋友圈上线" },
                { year: "2013", feature: "公众号上线" },
                { year: "2014", feature: "微信支付上线" },
                { year: "2017", feature: "小程序发布" },
                { year: "2020", feature: "视频号上线" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "PGC+UGC混合模式，公众号PGC，朋友圈UGC",
                creator_support: "公众号创作者激励、视频号创作者扶持",
                content_quality: "内容审核机制，打击违规内容"
            },
            user_operation: {
                acquisition: "QQ导流、口碑传播、春节营销",
                activation: "简化注册流程、微信红包激活",
                retention: "熟人关系链、高频使用场景（支付、通讯）",
                referral: "微信红包、群聊邀请、小程序分享"
            },
            event_operation: [
                {
                    name: "微信红包",
                    impact: "用户爆发式增长，支付用户突破2亿",
                    description: "2014年春节微信红包功能上线，成为现象级营销"
                },
                {
                    name: "跳一跳小游戏",
                    impact: "小程序生态快速普及",
                    description: "2018年跳一跳小游戏爆火，展示小程序潜力"
                }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "5亿",
                mau: "13.5亿",
                engagement_rate: "85%",
                retention_7d: "98%",
                retention_30d: "95%"
            },
            content_metrics: {
                daily_posts: "1.2亿条朋友圈",
                avg_watch_time: "35分钟/天",
                like_rate: "3%",
                share_rate: "1%",
                comment_rate: "2%"
            },
            business_metrics: {
                arpu: "约150元/年",
                ltv: "极高（用户终身价值）",
                cac: "极低（自然增长为主）",
                conversion_rate: "支付用户占比80%+"
            }
        },
        success_factors: [
            "精准的产品定位（熟人社交），避开QQ竞争",
            "极简的产品设计哲学（张小龙的产品理念）",
            "去中心化策略（朋友圈时间序，降低社交压力）",
            "生态化布局（公众号、小程序、支付形成闭环）",
            "强关系链形成网络效应，用户粘性极高",
            "春节营销策略（微信红包）实现用户爆发式增长",
            "小程序战略构建封闭生态，挑战App Store",
            "微信支付打通O2O，从工具升级为平台"
        ]
    },
    douyin: {
        title: "抖音 (TikTok)", 
        subtitle: "算法驱动的数字剧场",
        dao: "多巴胺，瞬时满足。利用成瘾机制对抗无聊。", 
        gov: "算法极权。系统决定你能看到什么，也能决定谁能红。", 
        space: "无限流动的广场。全景敞视，每个人都是表演者。", 
        econ: "注意力货币化。流量分发权在平台手中，公域流量为主。",
        risk: "信息茧房，用户互动深度极浅，关系链脆弱。",
        atomic_unit: "15s-60s 短视频",
        distribution: "算法分发 90% + 社交分发 10%",
        death_risk: "内容同质化与审美疲劳 (Boredom)",
        tags: ["#弱关系", "#算法", "#沉浸"],
        scores: [20, 95, 90, 98, 85],
        timeline: [
            { year: "2016", event: "抖音上线，由字节跳动推出，专注音乐短视频" },
            { year: "2017", event: "收购Musical.ly，国际化布局，TikTok品牌统一" },
            { year: "2018", event: "日活突破1.5亿，成为现象级产品，与快手形成双雄格局" },
            { year: "2019", event: "推出\"记录美好生活\"品牌升级，拓展内容边界" },
            { year: "2020", event: "直播电商上线，商业化加速，推出抖音小店" },
            { year: "2021", event: "推出兴趣电商概念，提出\"FACT经营矩阵\"方法论" },
            { year: "2022", event: "推出抖音商城，强化电商闭环，挑战传统电商平台" },
            { year: "2023", event: "AI功能上线，推出AI绘画、AI换装等创新玩法" }
        ],
        key_decisions: [
            "全屏沉浸式设计，最大化注意力捕获，与快手的双列选择形成差异化",
            "算法推荐为核心，弱化社交关系，建立\"算法极权\"的流量分发机制",
            "15秒时长限制，降低创作门槛，让普通用户也能参与内容创作",
            "国际化战略，收购Musical.ly快速扩张，TikTok成为全球现象级产品",
            "兴趣电商模式，通过算法匹配用户兴趣与商品，重构电商逻辑",
            "内容与电商深度融合，从\"种草\"到\"拔草\"形成闭环，挑战传统电商平台"
        ],
        user_metrics: {
            monthly_active_users: "7亿（中国）+ 15亿（全球TikTok）",
            daily_active_users: "3亿（中国）",
            total_users: "8亿（中国）",
            growth_rate: "15%",
            retention_rate: "78%",
            user_demographics: {
                age_range: "18-35岁为主，Z世代核心用户",
                gender_ratio: "55% 女性，45% 男性",
                region: "中国一二线城市为主，全球覆盖",
                income_level: "中等收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "52分钟/天",
                sessions_per_day: "8次",
                content_creation_rate: "12%",
                engagement_rate: "68%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告收入",
                    percentage: 60,
                    description: "信息流广告、品牌广告、开屏广告"
                },
                {
                    type: "电商佣金",
                    percentage: 25,
                    description: "直播电商、抖音小店、商品销售分成"
                },
                {
                    type: "直播打赏",
                    percentage: 10,
                    description: "虚拟礼物、打赏分成"
                },
                {
                    type: "其他服务",
                    percentage: 5,
                    description: "会员服务、增值功能"
                }
            ],
            monetization_strategy: "广告+电商+直播的三元变现模式",
            financial_metrics: {
                annual_revenue: "约1500亿人民币 (2023)",
                revenue_growth: "35% YoY",
                profitability: "盈利",
                valuation: "约2000亿美元（字节跳动核心资产）"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "快手", similarity: 85, position: "直接竞品，差异化定位" },
                { name: "视频号", similarity: 80, position: "直接竞品，微信生态" },
                { name: "B站", similarity: 50, position: "内容平台间接竞品" }
            ],
            market_position: "中国短视频市场领导者",
            market_share: "中国短视频市场60%+",
            competitive_advantages: [
                "算法推荐精准度高，用户停留时间长",
                "内容生态丰富，创作者激励完善",
                "商业化能力强，广告和电商变现成熟",
                "国际化成功，TikTok全球影响力大"
            ],
            competitive_disadvantages: [
                "用户增长放缓，面临增长天花板",
                "内容质量下降，同质化严重",
                "依赖算法，社交关系薄弱",
                "监管压力，内容审核成本高"
            ]
        },
        tech_stack: {
            core_technologies: [
                "推荐算法（深度学习、强化学习）",
                "实时视频处理技术",
                "CDN分发网络",
                "内容理解与审核AI"
            ],
            tech_features: [
                "AI驱动的个性化推荐算法",
                "实时视频编解码技术",
                "分布式内容分发",
                "AI内容审核系统"
            ],
            tech_challenges: [
                "超大规模推荐算法优化（7亿用户）",
                "实时视频处理性能",
                "内容审核准确性和效率",
                "数据隐私和合规性"
            ]
        },
        product_features: {
            core_features: [
                {
                    name: "算法推荐",
                    description: "基于用户行为的个性化短视频推荐",
                    importance: "核心功能"
                },
                {
                    name: "短视频创作",
                    description: "15-60秒短视频拍摄、编辑、特效",
                    importance: "核心功能"
                },
                {
                    name: "直播",
                    description: "实时直播、互动、打赏功能",
                    importance: "核心功能"
                },
                {
                    name: "电商",
                    description: "直播电商、抖音小店、商品橱窗",
                    importance: "核心功能"
                }
            ],
            innovative_features: [
                "全屏沉浸式交互",
                "AI换脸、AI特效",
                "兴趣电商模式",
                "挑战赛等病毒式传播机制"
            ],
            feature_evolution: [
                { year: "2016", feature: "基础短视频" },
                { year: "2017", feature: "算法推荐上线" },
                { year: "2018", feature: "直播功能" },
                { year: "2020", feature: "直播电商" },
                { year: "2022", feature: "抖音商城" },
                { year: "2023", feature: "AI功能上线" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "UGC为主，算法推荐优化内容分发",
                creator_support: "创作者激励计划、流量扶持、商业化工具",
                content_quality: "AI+人工审核，打击低质量内容"
            },
            user_operation: {
                acquisition: "明星入驻、病毒式传播、挑战赛",
                activation: "新手引导、个性化推荐、内容推荐",
                retention: "算法优化、个性化推荐、社交功能",
                referral: "分享奖励、邀请机制、挑战赛传播"
            },
            event_operation: [
                {
                    name: "记录美好生活",
                    impact: "品牌升级，拓展内容边界",
                    description: "2019年品牌升级，从音乐短视频扩展到生活方式"
                },
                {
                    name: "春节联欢晚会",
                    impact: "用户增长5000万",
                    description: "2021年冠名春晚，获得巨大曝光和用户增长"
                }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "3亿",
                mau: "7亿",
                engagement_rate: "68%",
                retention_7d: "75%",
                retention_30d: "55%"
            },
            content_metrics: {
                daily_uploads: "5000万",
                avg_watch_time: "52分钟/天",
                like_rate: "5%",
                share_rate: "2%",
                comment_rate: "1%"
            },
            business_metrics: {
                arpu: "约215元/年",
                ltv: "约500元",
                cac: "约50元",
                conversion_rate: "电商转化率15%"
            }
        },
        success_factors: [
            "精准的算法推荐系统，个性化内容分发",
            "全屏沉浸式设计，最大化用户注意力",
            "降低创作门槛，让普通用户也能参与",
            "国际化战略成功，TikTok全球影响力大",
            "兴趣电商模式创新，重构电商逻辑",
            "内容与电商深度融合，形成闭环",
            "强大的商业化能力，广告和电商变现成熟",
            "持续的产品创新，AI功能、特效等"
        ]
    },
    kuaishou: {
        title: "快手 (Kuaishou)", 
        subtitle: "普惠的数字生活社区",
        dao: "老铁文化，信任连接。强调真实感与\"看见每一种生活\"。", 
        gov: "去中心化算法（基尼系数低）。流量向普通人倾斜。", 
        space: "集市（双列选择）。保留了用户的选择权。", 
        econ: "信任电商（人找货）。私域流量价值高。",
        risk: "下沉市场标签固化，增长天花板。",
        atomic_unit: "短视频 / 直播",
        distribution: "算法分发 60% + 社交分发 40%",
        death_risk: "社区氛围的泛化与稀释",
        tags: ["#老铁", "#普惠", "#双列"],
        scores: [60, 80, 50, 70, 75],
        timeline: [
            { year: "2011", event: "快手成立，最初是GIF动图工具" },
            { year: "2013", event: "转型短视频社区，采用去中心化算法" },
            { year: "2016", event: "直播功能上线，建立老铁经济模式" },
            { year: "2017", event: "日活突破1亿，成为下沉市场第一短视频平台" },
            { year: "2018", event: "推出电商业务，探索信任电商模式" },
            { year: "2020", event: "上市，加速商业化进程" },
            { year: "2021", event: "提出\"新市井商业\"概念，强化私域流量价值" }
        ],
        key_decisions: [
            "去中心化算法设计，让普通用户也能获得流量分配，建立\"普惠\"价值观",
            "双列信息流设计，保留用户选择权，与抖音的单列沉浸式形成差异化",
            "老铁文化运营，强调真实、信任、陪伴，形成独特的社区氛围",
            "私域流量运营，主播与粉丝建立强信任关系，探索信任电商模式",
            "下沉市场定位，专注三四线城市用户，避开与抖音在一二线城市的直接竞争"
        ],
        user_metrics: {
            monthly_active_users: "7亿",
            daily_active_users: "3.5亿",
            total_users: "8亿",
            growth_rate: "10%",
            retention_rate: "72%",
            user_demographics: {
                age_range: "18-45岁为主，三四线城市用户较多",
                gender_ratio: "55% 男性，45% 女性",
                region: "中国三四线城市为主，下沉市场",
                income_level: "中等收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "85分钟/天",
                sessions_per_day: "6次",
                content_creation_rate: "8%",
                engagement_rate: "65%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "直播打赏",
                    percentage: 45,
                    description: "直播礼物、虚拟道具分成"
                },
                {
                    type: "广告收入",
                    percentage: 35,
                    description: "信息流广告、品牌广告"
                },
                {
                    type: "电商佣金",
                    percentage: 20,
                    description: "信任电商、商品销售分成"
                }
            ],
            monetization_strategy: "直播+广告+电商的多元化变现模式",
            financial_metrics: {
                annual_revenue: "约800亿人民币 (2023)",
                revenue_growth: "15% YoY",
                profitability: "盈利",
                valuation: "约500亿美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "抖音", similarity: 85, position: "直接竞品，差异化定位" },
                { name: "视频号", similarity: 75, position: "短视频直接竞品" },
                { name: "B站", similarity: 40, position: "视频平台间接竞品" }
            ],
            market_position: "中国短视频市场第二，下沉市场领导者",
            market_share: "中国短视频市场30%+",
            competitive_advantages: [
                "去中心化算法，普惠价值观",
                "老铁文化，信任连接",
                "私域流量价值高",
                "下沉市场优势明显"
            ],
            competitive_disadvantages: [
                "用户增长放缓",
                "一二线城市市场受限",
                "商业化能力相对较弱",
                "面临抖音和视频号双重竞争"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "3.5亿",
                mau: "7亿",
                engagement_rate: "65%",
                retention_7d: "72%",
                retention_30d: "55%"
            },
            content_metrics: {
                daily_uploads: "3000万条视频",
                avg_watch_time: "85分钟/天",
                like_rate: "4%",
                share_rate: "2%",
                comment_rate: "1.5%"
            },
            business_metrics: {
                arpu: "约115元/年",
                ltv: "约300元",
                cac: "约40元",
                conversion_rate: "电商转化率12%"
            }
        },
        success_factors: [
            "去中心化算法设计，普惠价值观",
            "双列信息流设计，保留用户选择权",
            "老铁文化运营，建立信任连接",
            "私域流量运营，探索信任电商",
            "下沉市场定位，避开与抖音直接竞争",
            "真实感内容，\"看见每一种生活\"",
            "主播与粉丝强信任关系",
            "从短视频扩展到直播电商"
        ]
    },
    bilibili: {
        title: "B站 (Bilibili)", 
        subtitle: "基于兴趣的文化部落",
        dao: "共鸣与归属。弹幕创造了独特的\"共时性\"体验。", 
        gov: "联邦制。通过高门槛入站考试筛选核心用户，分区自治。", 
        space: "俱乐部。基于兴趣（ACG）形成的半封闭圈层。", 
        econ: "为爱发电。UP主与粉丝的情感连接强，但商业化变现难。",
        risk: "破圈导致的社区稀释，原有核心二次元用户流失。",
        atomic_unit: "中长视频 (PUGV)",
        distribution: "算法分发 50% + 社交分发 30% + 编辑分发 20%",
        death_risk: "核心文化被主流文化吞噬 (Mainstream Dilution)",
        tags: ["#兴趣", "#弹幕", "#Z世代"],
        scores: [70, 60, 60, 60, 50],
        timeline: [
            { year: "2009", event: "B站成立，由徐逸创立，专注ACG（动画、漫画、游戏）内容" },
            { year: "2010", event: "弹幕系统上线，建立独特的互动文化，成为B站核心特色" },
            { year: "2013", event: "推出UP主激励计划，建立内容创作者生态" },
            { year: "2016", event: "推出大会员制度，探索商业化路径" },
            { year: "2018", event: "上市纳斯达克，破圈战略启动，拓展内容边界" },
            { year: "2019", event: "推出\"最美的夜\"跨年晚会，成功破圈，获得主流认可" },
            { year: "2020", event: "用户破2亿，知识区上线，内容多元化加速" },
            { year: "2021", event: "推出短视频功能\"Story Mode\"，探索新内容形式" },
            { year: "2022", event: "持续破圈，但面临内容质量下降和商业化压力" }
        ],
        key_decisions: [
            "弹幕系统建立独特的互动文化，让观看视频从\"独享\"变成\"共享\"，建立归属感",
            "UP主生态是核心资产，通过激励计划和创作支持，建立强大的内容创作者社区",
            "破圈战略扩大用户规模，从二次元社区向泛娱乐平台转型，但可能稀释核心用户群体",
            "知识区上线，拓展内容边界，吸引更多用户，但可能改变平台调性",
            "商业化探索，从会员、广告到直播、电商，但需要平衡商业化与用户体验",
            "保持社区氛围，通过答题机制、社区规范等，维护\"用爱发电\"的社区文化"
        ],
        user_metrics: {
            monthly_active_users: "3.4亿",
            daily_active_users: "9500万",
            total_users: "3.7亿",
            growth_rate: "12%",
            retention_rate: "75%",
            user_demographics: {
                age_range: "18-30岁为主，Z世代核心用户",
                gender_ratio: "52% 男性，48% 女性",
                region: "中国一二线城市为主",
                income_level: "学生和年轻白领为主"
            },
            usage_patterns: {
                avg_session_duration: "95分钟/天",
                sessions_per_day: "4次",
                content_creation_rate: "5%",
                engagement_rate: "70%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "游戏收入",
                    percentage: 40,
                    description: "自研游戏、游戏联运"
                },
                {
                    type: "广告收入",
                    percentage: 25,
                    description: "信息流广告、品牌广告"
                },
                {
                    type: "会员订阅",
                    percentage: 20,
                    description: "大会员、付费内容"
                },
                {
                    type: "直播打赏",
                    percentage: 15,
                    description: "直播礼物、虚拟道具分成"
                }
            ],
            monetization_strategy: "游戏+广告+会员+直播的多元化变现模式",
            financial_metrics: {
                annual_revenue: "约225亿人民币 (2023)",
                revenue_growth: "3% YoY",
                profitability: "亏损（但亏损收窄）",
                valuation: "约100亿美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "YouTube", similarity: 70, position: "视频平台直接竞品" },
                { name: "抖音", similarity: 50, position: "内容平台间接竞品" },
                { name: "爱奇艺", similarity: 40, position: "视频平台间接竞品" }
            ],
            market_position: "中国中长视频平台领导者",
            market_share: "中国中长视频市场40%+",
            competitive_advantages: [
                "独特的弹幕文化和社区氛围",
                "强大的UP主生态，内容创作者活跃",
                "Z世代用户占比高，用户粘性强",
                "内容多元化，从二次元到知识区"
            ],
            competitive_disadvantages: [
                "商业化能力相对较弱，持续亏损",
                "用户增长放缓，面临增长天花板",
                "破圈导致核心用户流失风险",
                "游戏业务依赖度高，风险集中"
            ]
        },
        tech_stack: {
            core_technologies: [
                "视频编解码技术",
                "弹幕系统",
                "推荐算法",
                "CDN分发网络"
            ],
            tech_features: [
                "实时弹幕系统",
                "视频播放优化",
                "个性化推荐算法",
                "AI内容审核"
            ],
            tech_challenges: [
                "大规模视频处理",
                "弹幕实时渲染性能",
                "内容审核准确性和效率",
                "长视频存储成本"
            ]
        },
        product_features: {
            core_features: [
                {
                    name: "弹幕系统",
                    description: "实时弹幕互动，创造共时性体验",
                    importance: "核心功能"
                },
                {
                    name: "中长视频",
                    description: "PUGV内容，UP主创作的中长视频",
                    importance: "核心功能"
                },
                {
                    name: "UP主生态",
                    description: "内容创作者平台，激励和扶持计划",
                    importance: "核心功能"
                },
                {
                    name: "直播",
                    description: "实时直播、互动、打赏功能",
                    importance: "核心功能"
                }
            ],
            innovative_features: [
                "弹幕系统（首创）",
                "分区内容组织",
                "答题入站机制",
                "硬币系统"
            ],
            feature_evolution: [
                { year: "2009", feature: "基础视频平台" },
                { year: "2010", feature: "弹幕系统上线" },
                { year: "2013", feature: "UP主激励计划" },
                { year: "2016", feature: "大会员制度" },
                { year: "2020", feature: "知识区上线" },
                { year: "2021", feature: "Story Mode短视频" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "PUGV为主，UP主生态为核心",
                creator_support: "UP主激励计划、创作基金、流量扶持",
                content_quality: "内容审核、社区规范、答题机制"
            },
            user_operation: {
                acquisition: "口碑传播、内容吸引、破圈营销",
                activation: "新手引导、兴趣推荐、答题入站",
                retention: "弹幕互动、UP主关注、社区氛围",
                referral: "分享奖励、邀请机制"
            },
            event_operation: [
                {
                    name: "最美的夜跨年晚会",
                    impact: "成功破圈，获得主流认可",
                    description: "2019年跨年晚会，展示B站文化和内容实力"
                }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "9500万",
                mau: "3.4亿",
                engagement_rate: "70%",
                retention_7d: "75%",
                retention_30d: "60%"
            },
            content_metrics: {
                daily_uploads: "1500万条弹幕",
                avg_watch_time: "95分钟/天",
                like_rate: "3%",
                share_rate: "1%",
                comment_rate: "2%"
            },
            business_metrics: {
                arpu: "约60元/年",
                ltv: "约150元",
                cac: "约30元",
                conversion_rate: "大会员转化率10%"
            }
        },
        success_factors: [
            "独特的弹幕文化，创造共时性体验",
            "强大的UP主生态，内容创作者活跃",
            "答题入站机制，筛选核心用户",
            "分区内容组织，满足不同兴趣",
            "破圈战略成功，从二次元扩展到泛娱乐",
            "Z世代用户占比高，用户粘性强",
            "保持社区氛围，维护\"用爱发电\"文化",
            "内容多元化，知识区等新内容拓展"
        ]
    },
    youtube: {
        title: "YouTube", 
        subtitle: "全球最大的视频档案馆",
        dao: "知识与娱乐的实用主义。搜完即走或沉浸观看。", 
        gov: "法治社会。版权系统（Content ID）极为完善，规则透明。", 
        space: "图书馆 + 电影院。强调内容本身的价值，而非人际关系。", 
        econ: "广告分成模式成熟。创作者生态最健康。",
        risk: "社区感极弱，基本只是媒体平台而非社交网络。",
        atomic_unit: "长视频",
        distribution: "算法分发 70% + 搜索分发 30%",
        death_risk: "短视频平台的侵蚀 (TikTokization)",
        tags: ["#媒体", "#搜索", "#全球化"],
        scores: [10, 90, 70, 80, 95],
        timeline: [
            { year: "2005", event: "YouTube成立，三位前PayPal员工创立" },
            { year: "2006", event: "被Google以16.5亿美元收购" },
            { year: "2007", event: "推出YouTube Partner Program，建立广告分成模式" },
            { year: "2010", event: "推出YouTube Live直播功能" },
            { year: "2012", event: "推出YouTube TV，进入流媒体电视市场" },
            { year: "2015", event: "推出YouTube Red（后改名YouTube Premium）订阅服务" },
            { year: "2017", event: "推出YouTube TV，进入流媒体电视市场" },
            { year: "2020", event: "推出YouTube Shorts，对抗TikTok" },
            { year: "2023", event: "推出AI功能，支持创作者工具和内容生成" }
        ],
        key_decisions: [
            "建立完善的版权保护系统（Content ID），平衡创作者权益和版权方利益，维护平台生态",
            "55/45广告分成模式，为创作者提供稳定的收入来源，建立健康的创作者生态",
            "算法推荐系统优化，平衡用户观看时长和内容质量，避免过度推荐低质量内容",
            "多元化商业模式，包括广告、订阅（Premium）、打赏（Super Chat）等，降低单一收入依赖",
            "全球化战略，支持多语言和多地区内容，成为全球最大的视频平台",
            "移动优先策略，优化移动端体验，抓住移动互联网红利",
            "YouTube Shorts对抗TikTok，但内容和算法不如TikTok，用户接受度有限",
            "推出YouTube Shorts应对短视频竞争，但仍保持长视频为核心竞争力"
        ],
        user_metrics: {
            monthly_active_users: "25亿",
            daily_active_users: "20亿",
            total_users: "30亿",
            growth_rate: "5%",
            retention_rate: "85%",
            user_demographics: {
                age_range: "18-65岁，全年龄段覆盖",
                gender_ratio: "52% 男性，48% 女性",
                region: "全球覆盖，美国、印度、巴西为主",
                income_level: "全收入水平覆盖"
            },
            usage_patterns: {
                avg_session_duration: "60分钟/天",
                sessions_per_day: "5次",
                content_creation_rate: "2%",
                engagement_rate: "80%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告收入",
                    percentage: 70,
                    description: "视频广告、品牌广告、搜索广告"
                },
                {
                    type: "订阅服务",
                    percentage: 20,
                    description: "YouTube Premium、YouTube TV"
                },
                {
                    type: "其他服务",
                    percentage: 10,
                    description: "打赏（Super Chat）、会员、商品销售"
                }
            ],
            monetization_strategy: "广告+订阅的多元化变现模式",
            financial_metrics: {
                annual_revenue: "约300亿美元 (2023)",
                revenue_growth: "8% YoY",
                profitability: "盈利",
                valuation: "约2000亿美元（Google核心资产）"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "TikTok", similarity: 60, position: "短视频平台直接竞品" },
                { name: "Netflix", similarity: 50, position: "视频流媒体间接竞品" },
                { name: "Twitch", similarity: 40, position: "直播平台间接竞品" }
            ],
            market_position: "全球最大的视频平台",
            market_share: "全球视频平台市场70%+",
            competitive_advantages: [
                "用户规模巨大，内容生态丰富",
                "创作者生态健康，55/45分成模式",
                "版权保护系统完善（Content ID）",
                "全球化覆盖，多语言支持"
            ],
            competitive_disadvantages: [
                "短视频竞争激烈，Shorts不如TikTok",
                "社区感弱，主要是媒体平台",
                "内容审核成本高",
                "创作者收入依赖广告，波动大"
            ]
        },
        tech_stack: {
            core_technologies: [
                "视频编解码技术（VP9、AV1）",
                "推荐算法（深度学习）",
                "Content ID版权识别系统",
                "CDN分发网络"
            ],
            tech_features: [
                "AI驱动的个性化推荐",
                "Content ID自动版权识别",
                "实时视频转码",
                "多语言字幕自动生成"
            ],
            tech_challenges: [
                "超大规模视频处理（25亿用户）",
                "版权识别准确性和效率",
                "内容审核自动化",
                "短视频与长视频平衡"
            ]
        },
        product_features: {
            core_features: [
                {
                    name: "视频播放",
                    description: "长视频、短视频、直播播放",
                    importance: "核心功能"
                },
                {
                    name: "推荐算法",
                    description: "基于用户行为的个性化视频推荐",
                    importance: "核心功能"
                },
                {
                    name: "创作者平台",
                    description: "YouTube Studio、数据分析、变现工具",
                    importance: "核心功能"
                },
                {
                    name: "YouTube Shorts",
                    description: "短视频内容，对抗TikTok",
                    importance: "重要功能"
                }
            ],
            innovative_features: [
                "Content ID版权识别系统",
                "55/45广告分成模式",
                "YouTube Premium无广告体验",
                "多语言字幕自动生成"
            ],
            feature_evolution: [
                { year: "2005", feature: "基础视频平台" },
                { year: "2007", feature: "YouTube Partner Program" },
                { year: "2010", feature: "YouTube Live" },
                { year: "2015", feature: "YouTube Premium" },
                { year: "2020", feature: "YouTube Shorts" },
                { year: "2023", feature: "AI功能上线" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "UGC为主，创作者生态为核心",
                creator_support: "YouTube Partner Program、创作者学院、变现工具",
                content_quality: "Content ID版权保护、内容审核、社区规范"
            },
            user_operation: {
                acquisition: "Google搜索导流、口碑传播、内容吸引",
                activation: "个性化推荐、兴趣推荐",
                retention: "订阅频道、推荐算法、观看历史",
                referral: "分享奖励、嵌入代码"
            },
            event_operation: [
                {
                    name: "YouTube Rewind",
                    impact: "年度总结，提升品牌影响力",
                    description: "年度视频总结，展示平台文化和创作者"
                }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "20亿",
                mau: "25亿",
                engagement_rate: "80%",
                retention_7d: "85%",
                retention_30d: "75%"
            },
            content_metrics: {
                daily_uploads: "7200万小时视频",
                avg_watch_time: "60分钟/天",
                like_rate: "3%",
                share_rate: "1%",
                comment_rate: "0.5%"
            },
            business_metrics: {
                arpu: "约12美元/年",
                ltv: "约50美元",
                cac: "约5美元",
                conversion_rate: "Premium转化率5%"
            }
        },
        success_factors: [
            "完善的版权保护系统（Content ID），维护平台生态",
            "55/45广告分成模式，建立健康的创作者生态",
            "算法推荐系统优化，平衡观看时长和内容质量",
            "多元化商业模式，降低单一收入依赖",
            "全球化战略，成为全球最大的视频平台",
            "移动优先策略，抓住移动互联网红利",
            "创作者生态健康，内容质量高",
            "Google资源支持，搜索导流和基础设施"
        ]
    },
    reddit: {
        title: "Reddit", 
        subtitle: "互联网的头版头条",
        dao: "兴趣聚合与民主投票。Karma（业力）系统量化贡献。", 
        gov: "联邦制 (Subreddit)。Mod拥有极大的自治权。", 
        space: "蜂巢。无数个独立的兴趣房间。", 
        econ: "低商业化。用户极度反感营销，用爱发电为主。",
        risk: "匿名性带来的极端言论与仇恨内容。",
        atomic_unit: "帖子 (Thread)",
        distribution: "热度算法 (Hot) 80% + 时间序 20%",
        death_risk: "过度商业化导致社区反叛 (Community Revolt)",
        tags: ["#匿名", "#论坛", "#自治"],
        scores: [50, 80, 40, 30, 30],
        timeline: [
            { year: "2005", event: "Reddit由Steve Huffman和Alexis Ohanian创立" },
            { year: "2006", event: "被Condé Nast收购" },
            { year: "2008", event: "推出Subreddit系统，允许用户创建独立社区" },
            { year: "2011", event: "独立运营，从Condé Nast分离" },
            { year: "2012", event: "推出Reddit Gold会员系统" },
            { year: "2015", event: "推出Reddit手机App" },
            { year: "2017", event: "重新设计网站界面（Reddit Redesign），引发用户强烈反对" },
            { year: "2020", event: "Reddit IPO，估值超过100亿美元" },
            { year: "2023", event: "推出API收费政策，引发第三方客户端抗议（Blackout）" }
        ],
        key_decisions: [
            "Subreddit自治模式，让Mod拥有极大权力，形成\"联邦制\"治理结构",
            "Karma系统设计，量化用户贡献，鼓励高质量内容和互动",
            "匿名性保护，允许用户自由表达，但也导致极端言论问题",
            "极低商业化策略，用户极度反感广告和营销，保持社区\"纯净\"",
            "民主投票机制（Upvote/Downvote），让社区自主决定内容排序",
            "API开放政策，允许第三方客户端发展，但2023年收费引发争议"
        ],
        user_metrics: {
            monthly_active_users: "5.2亿",
            daily_active_users: "5200万",
            total_users: "5.5亿",
            growth_rate: "8%",
            retention_rate: "60%",
            user_demographics: {
                age_range: "18-45岁为主，年轻男性用户较多",
                gender_ratio: "65% 男性，35% 女性",
                region: "美国为主，全球覆盖",
                income_level: "中等收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "15分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "3%",
                engagement_rate: "55%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告收入",
                    percentage: 70,
                    description: "信息流广告、品牌广告"
                },
                {
                    type: "会员订阅",
                    percentage: 20,
                    description: "Reddit Premium、Reddit Gold"
                },
                {
                    type: "API收费",
                    percentage: 10,
                    description: "第三方客户端API使用费（2023年新增）"
                }
            ],
            monetization_strategy: "广告+会员的低商业化模式",
            financial_metrics: {
                annual_revenue: "约8亿美元 (2023)",
                revenue_growth: "20% YoY",
                profitability: "接近盈亏平衡",
                valuation: "约100亿美元（IPO估值）"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Twitter/X", similarity: 50, position: "社交媒体间接竞品" },
                { name: "Discord", similarity: 40, position: "社区平台间接竞品" },
                { name: "4chan", similarity: 30, position: "匿名论坛间接竞品" }
            ],
            market_position: "全球最大的论坛社区平台",
            market_share: "论坛社区市场60%+",
            competitive_advantages: [
                "Subreddit自治模式，社区氛围独特",
                "Karma系统激励高质量内容",
                "匿名性保护用户自由表达",
                "民主投票机制让社区自主管理"
            ],
            competitive_disadvantages: [
                "商业化能力弱，用户反感广告",
                "匿名性导致极端言论问题",
                "API收费政策引发社区抗议",
                "用户增长放缓，面临增长天花板"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Python后端",
                "PostgreSQL数据库",
                "Redis缓存",
                "内容审核系统"
            ],
            tech_features: [
                "Subreddit系统架构",
                "Karma计算系统",
                "热度算法（Hot算法）",
                "内容审核AI"
            ],
            tech_challenges: [
                "大规模并发处理",
                "内容审核准确性和效率",
                "极端言论识别",
                "API性能优化"
            ]
        },
        product_features: {
            core_features: [
                {
                    name: "Subreddit",
                    description: "用户创建的独立社区，Mod自治管理",
                    importance: "核心功能"
                },
                {
                    name: "Karma系统",
                    description: "用户贡献量化系统，鼓励高质量内容",
                    importance: "核心功能"
                },
                {
                    name: "投票机制",
                    description: "Upvote/Downvote民主投票，决定内容排序",
                    importance: "核心功能"
                },
                {
                    name: "匿名性",
                    description: "用户可以选择匿名，保护隐私",
                    importance: "核心功能"
                }
            ],
            innovative_features: [
                "Subreddit自治模式",
                "Karma系统",
                "热度算法（Hot算法）",
                "Reddit Gold会员系统"
            ],
            feature_evolution: [
                { year: "2005", feature: "基础论坛功能" },
                { year: "2008", feature: "Subreddit系统上线" },
                { year: "2012", feature: "Reddit Gold会员" },
                { year: "2015", feature: "移动App上线" },
                { year: "2017", feature: "网站重新设计" },
                { year: "2023", feature: "API收费政策" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "UGC为主，用户自治，平台最小干预",
                creator_support: "Karma系统激励，但无直接变现路径",
                content_quality: "社区自治审核，平台辅助管理"
            },
            user_operation: {
                acquisition: "口碑传播、内容吸引",
                activation: "新手引导、兴趣推荐",
                retention: "Subreddit订阅、Karma激励",
                referral: "分享奖励、邀请机制"
            },
            event_operation: [
                {
                    name: "API收费政策",
                    impact: "引发社区大规模抗议（Blackout）",
                    description: "2023年API收费政策，导致大量Subreddit关闭抗议"
                }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "5200万",
                mau: "5.2亿",
                engagement_rate: "55%",
                retention_7d: "60%",
                retention_30d: "45%"
            },
            content_metrics: {
                daily_posts: "500万条帖子",
                avg_views: "10分钟/天",
                upvote_rate: "2%",
                comment_rate: "1%"
            },
            business_metrics: {
                arpu: "约1.5美元/年",
                ltv: "约5美元",
                cac: "约2美元",
                conversion_rate: "Premium转化率2%"
            }
        },
        success_factors: [
            "Subreddit自治模式，让Mod拥有极大权力",
            "Karma系统设计，量化用户贡献，鼓励高质量内容",
            "匿名性保护，允许用户自由表达",
            "民主投票机制，让社区自主决定内容排序",
            "极低商业化策略，保持社区\"纯净\"",
            "API开放政策，允许第三方客户端发展",
            "社区自治文化，用户参与度高",
            "内容多样性，覆盖各种兴趣和话题"
        ]
    },
    xiaohongshu: {
        title: "小红书 (Xiaohongshu)", 
        subtitle: "生活方式的种草指南",
        dao: "有用性与审美红利。互助文化（Helpful）是核心。", 
        gov: "算法强干预。严厉打击引流，鼓励站内闭环。", 
        space: "精致橱窗。强调视觉美感与生活方式的展示。", 
        econ: "种草经济。离消费决策最近，商业价值极高。",
        risk: "滤镜破碎带来的信任危机，以及男性用户难以融入。",
        atomic_unit: "图文笔记",
        distribution: "算法分发 80% + 搜索分发 20%",
        death_risk: "虚假繁荣与信任崩塌 (Trust Crisis)",
        tags: ["#种草", "#审美", "#搜索"],
        scores: [40, 85, 75, 80, 85],
        timeline: [
            { year: "2013", event: "小红书由毛文超和瞿芳创立，最初是海外购物攻略社区" },
            { year: "2014", event: "转型为生活方式分享社区，推出\"标记我的生活\"slogan" },
            { year: "2017", event: "用户突破1亿，从购物社区扩展到生活方式平台" },
            { year: "2018", event: "推出品牌合作人平台，建立KOL/KOC商业生态" },
            { year: "2019", event: "电商业务快速发展，推出自营电商\"福利社\"" },
            { year: "2020", event: "用户突破3亿，成为重要的种草和消费决策平台" },
            { year: "2021", event: "强化搜索功能，从\"发现\"到\"搜索\"的转化路径优化" },
            { year: "2022", event: "严厉打击虚假种草，推出\"真实分享\"机制，提升内容质量" },
            { year: "2023", event: "用户突破5亿，推出\"种草-搜索-转化\"完整闭环" }
        ],
        key_decisions: [
            "从海外购物攻略转型为生活方式分享社区，降低内容创作门槛，扩大用户基础",
            "算法推荐优化，平衡\"有用\"和\"审美\"，建立独特的\"种草\"内容生态",
            "严厉打击外部引流，鼓励站内闭环，保护平台商业生态",
            "KOL/KOC双轨制，既支持头部KOL商业变现，也扶持普通用户成为KOC",
            "搜索功能强化，从\"刷内容\"到\"搜内容\"，满足用户目的性需求",
            "\"真实分享\"机制，打击虚假种草，维护平台信任度和内容质量"
        ],
        user_metrics: {
            monthly_active_users: "3亿",
            daily_active_users: "8000万",
            total_users: "5亿",
            growth_rate: "20%",
            retention_rate: "70%",
            user_demographics: {
                age_range: "18-35岁为主，年轻女性核心用户",
                gender_ratio: "70% 女性，30% 男性",
                region: "中国一二线城市为主",
                income_level: "中高收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "45分钟/天",
                sessions_per_day: "6次",
                content_creation_rate: "10%",
                engagement_rate: "65%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告收入",
                    percentage: 50,
                    description: "信息流广告、品牌广告、搜索广告"
                },
                {
                    type: "电商佣金",
                    percentage: 35,
                    description: "自营电商、品牌合作、商品销售分成"
                },
                {
                    type: "其他服务",
                    percentage: 15,
                    description: "会员服务、品牌合作人平台"
                }
            ],
            monetization_strategy: "广告+电商的种草经济模式",
            financial_metrics: {
                annual_revenue: "约200亿人民币 (2023)",
                revenue_growth: "40% YoY",
                profitability: "接近盈亏平衡",
                valuation: "约200亿美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "抖音", similarity: 60, position: "内容平台间接竞品" },
                { name: "淘宝", similarity: 50, position: "电商平台间接竞品" },
                { name: "微博", similarity: 40, position: "社交媒体间接竞品" }
            ],
            market_position: "生活方式种草平台领导者",
            market_share: "生活方式种草市场80%+",
            competitive_advantages: [
                "独特的种草内容生态，离消费决策最近",
                "用户信任度高，真实分享机制",
                "搜索功能强大，目的性需求满足好",
                "女性用户占比高，消费能力强"
            ],
            competitive_disadvantages: [
                "用户规模相对较小",
                "男性用户难以融入",
                "商业化压力大，需要平衡用户体验",
                "虚假种草风险，信任危机"
            ]
        },
        tech_stack: {
            core_technologies: [
                "推荐算法（个性化推荐）",
                "图像识别与处理",
                "搜索算法",
                "内容审核AI"
            ],
            tech_features: [
                "AI驱动的个性化推荐",
                "图像搜索技术",
                "内容理解与标签系统",
                "反作弊系统"
            ],
            tech_challenges: [
                "内容审核准确性和效率",
                "虚假种草识别",
                "搜索相关性优化",
                "用户画像精准度"
            ]
        },
        product_features: {
            core_features: [
                {
                    name: "图文笔记",
                    description: "高质量图片+文字的生活方式分享",
                    importance: "核心功能"
                },
                {
                    name: "算法推荐",
                    description: "基于用户兴趣的个性化内容推荐",
                    importance: "核心功能"
                },
                {
                    name: "搜索",
                    description: "强大的搜索功能，满足目的性需求",
                    importance: "核心功能"
                },
                {
                    name: "电商",
                    description: "自营电商、品牌合作、商品橱窗",
                    importance: "核心功能"
                }
            ],
            innovative_features: [
                "种草内容生态",
                "图像搜索",
                "真实分享机制",
                "KOC模式"
            ],
            feature_evolution: [
                { year: "2013", feature: "海外购物攻略" },
                { year: "2014", feature: "生活方式分享社区" },
                { year: "2018", feature: "品牌合作人平台" },
                { year: "2019", feature: "自营电商" },
                { year: "2021", feature: "搜索功能强化" },
                { year: "2022", feature: "真实分享机制" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "UGC为主，KOL/KOC双轨制",
                creator_support: "品牌合作人平台、流量扶持、商业化工具",
                content_quality: "严厉打击虚假种草，维护真实分享"
            },
            user_operation: {
                acquisition: "口碑传播、KOL营销、内容吸引",
                activation: "新手引导、兴趣推荐、内容推荐",
                retention: "个性化推荐、搜索满足、社交功能",
                referral: "分享奖励、邀请机制"
            },
            event_operation: [
                {
                    name: "标记我的生活",
                    impact: "品牌升级，用户认知提升",
                    description: "2014年品牌升级，从购物社区扩展到生活方式平台"
                }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "8000万",
                mau: "3亿",
                engagement_rate: "65%",
                retention_7d: "70%",
                retention_30d: "50%"
            },
            content_metrics: {
                daily_posts: "2000万篇笔记",
                avg_watch_time: "45分钟/天",
                like_rate: "4%",
                share_rate: "2%",
                comment_rate: "1%"
            },
            business_metrics: {
                arpu: "约67元/年",
                ltv: "约200元",
                cac: "约30元",
                conversion_rate: "电商转化率10%"
            }
        },
        success_factors: [
            "独特的种草内容生态，离消费决策最近",
            "算法推荐优化，平衡有用和审美",
            "搜索功能强大，满足目的性需求",
            "真实分享机制，维护用户信任",
            "KOL/KOC双轨制，既支持头部创作者也扶持普通用户",
            "严厉打击外部引流，保护平台商业生态",
            "女性用户占比高，消费能力强",
            "从购物社区到生活方式平台的转型成功"
        ]
    },
    douban: {
        title: "豆瓣 (Douban)", 
        subtitle: "精神角落与文化书影音",
        dao: "精神洁癖与文艺认同。鄙视链是其独特的文化护城河。", 
        gov: "无为而治 + 小组自治。对商业化极其克制。", 
        space: "咖啡馆 + 广场。小组是封闭的，书影音是公开的。", 
        econ: "极低。为爱发电，几乎没有为创作者提供变现路径。",
        risk: "移动端转型缓慢，用户老龄化，饭圈文化入侵。",
        atomic_unit: "评分/评论/小组帖",
        distribution: "编辑/算法分发 20% + 社交分发 20% + 搜索/目的性 60%",
        death_risk: "时代脱节 (Obsolescence)",
        tags: ["#书影音", "#小组", "#文艺"],
        scores: [60, 40, 30, 20, 10],
        timeline: [
            { year: "2005", event: "豆瓣由杨勃（阿北）创立，专注书影音评分和评论" },
            { year: "2008", event: "推出豆瓣小组功能，允许用户创建兴趣社区" },
            { year: "2012", event: "推出豆瓣FM，进入音乐流媒体领域" },
            { year: "2013", event: "用户突破1亿，成为文艺青年的精神角落" },
            { year: "2017", event: "移动端转型，但进度缓慢，PC端仍是主阵地" },
            { year: "2020", event: "推出豆瓣时间付费内容，探索知识付费模式" },
            { year: "2021", event: "饭圈文化入侵，评分系统面临刷分问题" },
            { year: "2023", event: "用户老龄化加剧，年轻用户流失，商业化困难" }
        ],
        key_decisions: [
            "书影音评分系统，建立权威性和可信度，成为用户决策的重要参考",
            "小组功能设计，允许用户创建封闭或开放的社区，形成\"精神角落\"",
            "无为而治的运营策略，最小化平台干预，让用户自治，但商业化困难",
            "对商业化极其克制，几乎不提供创作者变现路径，保持\"为爱发电\"的社区文化",
            "移动端转型缓慢，错过移动互联网红利，PC端仍是主要使用场景",
            "评分系统面临饭圈刷分问题，需要平衡开放性和内容质量"
        ]
    },
    discord: {
        title: "Discord", 
        subtitle: "数字世界的第三空间",
        dao: "实时陪伴与低压力社交。Always Online。", 
        gov: "私有领地。Server Owner 拥有绝对权力。", 
        space: "客厅 + 游戏室。高度私密，即来即走。", 
        econ: "Nitro订阅制。不卖广告，卖体验与表情包。",
        risk: "对于新用户过于复杂，且难以发现优质服务器。",
        atomic_unit: "实时消息/语音流",
        distribution: "无中心化分发 (纯邀请制/目录)",
        death_risk: "被收购后的变质 (Enshittification)",
        tags: ["#实时", "#私密", "#游戏"],
        scores: [90, 10, 50, 10, 60],
        timeline: [
            { year: "2015", event: "Discord由Jason Citron和Stanislav Vishnevskiy创立，专注游戏语音" },
            { year: "2017", event: "推出Screen Share功能，从语音扩展到多功能通信" },
            { year: "2018", event: "推出Nitro订阅服务，探索商业化" },
            { year: "2020", event: "疫情推动用户增长，日活突破1亿" },
            { year: "2021", event: "微软曾提出100亿美元收购，但被拒绝" },
            { year: "2022", event: "推出Forum Channels，从聊天扩展到论坛功能" },
            { year: "2023", event: "推出AI功能，包括Clyde AI助手" },
            { year: "2024", event: "用户数突破2亿，从游戏工具扩展到通用社交平台" }
        ],
        key_decisions: [
            "Server+Channel架构设计，允许用户创建私有或半私有社区，形成\"数字第三空间\"",
            "实时通信优先，语音和视频功能强调低延迟，建立\"Always Online\"的陪伴感",
            "Nitro订阅模式，不依赖广告，通过增值服务（表情、文件大小、画质）变现",
            "游戏社区起家，但逐步扩展到学习、工作、兴趣等各类社区",
            "极简的UI设计，降低使用门槛，但Server发现机制仍需要改进",
            "隐私保护策略，端到端加密、数据最小化等，建立用户信任"
        ],
        user_metrics: {
            monthly_active_users: "2亿",
            daily_active_users: "1.5亿",
            total_users: "2.5亿",
            growth_rate: "15%",
            retention_rate: "85%",
            user_demographics: {
                age_range: "13-35岁为主，Z世代核心用户",
                gender_ratio: "60% 男性，40% 女性",
                region: "全球覆盖，美国、欧洲为主",
                income_level: "学生和年轻白领为主"
            },
            usage_patterns: {
                avg_session_duration: "120分钟/天",
                sessions_per_day: "8次",
                content_creation_rate: "20%",
                engagement_rate: "90%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "Nitro订阅",
                    percentage: 90,
                    description: "Nitro和Nitro Classic会员订阅"
                },
                {
                    type: "其他服务",
                    percentage: 10,
                    description: "游戏商店、服务器提升等"
                }
            ],
            monetization_strategy: "Nitro订阅制，不依赖广告",
            financial_metrics: {
                annual_revenue: "约6亿美元 (2023)",
                revenue_growth: "25% YoY",
                profitability: "接近盈亏平衡",
                valuation: "约150亿美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Slack", similarity: 60, position: "企业协作间接竞品" },
                { name: "Telegram", similarity: 50, position: "即时通讯间接竞品" },
                { name: "Teams", similarity: 40, position: "企业协作间接竞品" }
            ],
            market_position: "游戏和兴趣社区通讯平台领导者",
            market_share: "游戏社区通讯市场80%+",
            competitive_advantages: [
                "Server+Channel架构独特，社区组织灵活",
                "实时通信体验优秀，低延迟",
                "不依赖广告，用户体验好",
                "从游戏扩展到通用社交，用户基础大"
            ],
            competitive_disadvantages: [
                "Server发现机制不足，新用户难以找到优质服务器",
                "对非游戏用户吸引力有限",
                "商业化能力相对较弱",
                "面临被收购后变质的风险"
            ]
        },
        tech_stack: {
            core_technologies: [
                "WebRTC实时通信",
                "分布式服务器架构",
                "端到端加密",
                "低延迟音频/视频处理"
            ],
            tech_features: [
                "实时语音/视频通信",
                "Server+Channel架构",
                "端到端加密（部分功能）",
                "跨平台同步"
            ],
            tech_challenges: [
                "大规模实时通信处理",
                "低延迟保障",
                "跨平台体验一致性",
                "隐私和安全保护"
            ]
        },
        product_features: {
            core_features: [
                {
                    name: "Server+Channel",
                    description: "服务器和频道架构，组织社区",
                    importance: "核心功能"
                },
                {
                    name: "实时语音/视频",
                    description: "低延迟语音和视频通话",
                    importance: "核心功能"
                },
                {
                    name: "文本聊天",
                    description: "实时文本消息、表情、文件分享",
                    importance: "核心功能"
                },
                {
                    name: "Nitro订阅",
                    description: "增值服务，表情、文件大小、画质提升",
                    importance: "核心功能"
                }
            ],
            innovative_features: [
                "Server+Channel架构（首创）",
                "实时语音低延迟",
                "Screen Share屏幕分享",
                "Forum Channels论坛功能"
            ],
            feature_evolution: [
                { year: "2015", feature: "基础游戏语音" },
                { year: "2017", feature: "Screen Share上线" },
                { year: "2018", feature: "Nitro订阅服务" },
                { year: "2022", feature: "Forum Channels" },
                { year: "2023", feature: "AI功能（Clyde AI）" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "用户自治，Server Owner管理",
                creator_support: "Server提升、Nitro订阅",
                content_quality: "社区自治，平台辅助管理"
            },
            user_operation: {
                acquisition: "游戏社区起家、口碑传播",
                activation: "新手引导、Server推荐",
                retention: "实时通信、社区归属感",
                referral: "邀请链接、Server分享"
            },
            event_operation: [
                {
                    name: "疫情期间用户增长",
                    impact: "日活突破1亿",
                    description: "2020年疫情期间，远程学习和工作推动用户增长"
                }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "1.5亿",
                mau: "2亿",
                engagement_rate: "90%",
                retention_7d: "85%",
                retention_30d: "75%"
            },
            content_metrics: {
                daily_messages: "10亿条消息",
                avg_session_duration: "120分钟/天",
                voice_usage: "60%用户使用语音",
                video_usage: "30%用户使用视频"
            },
            business_metrics: {
                arpu: "约3美元/年",
                ltv: "约15美元",
                cac: "约2美元",
                conversion_rate: "Nitro转化率5%"
            }
        },
        success_factors: [
            "Server+Channel架构设计，灵活组织社区",
            "实时通信体验优秀，低延迟",
            "从游戏社区扩展到通用社交，用户基础大",
            "Nitro订阅模式，不依赖广告，用户体验好",
            "隐私保护策略，建立用户信任",
            "极简UI设计，降低使用门槛",
            "疫情期间远程需求推动用户增长",
            "社区自治文化，用户参与度高"
        ]
    },
    jike: {
        title: "即刻 (Jike)", 
        subtitle: "年轻人的同好社区",
        dao: "基于兴趣的\"圈子\"与\"动态\"。强调平等友善。", 
        gov: "社区氛围强运营。官方下场引导，强调\"即友\"文化。", 
        space: "主题公园。每个圈子都是一个景点。", 
        econ: "低商业化。依靠会员订阅与周边。",
        risk: "小而美难以规模化，容易触碰监管红线。",
        atomic_unit: "短图文/动态",
        distribution: "关注流 50% + 推荐流 50%",
        death_risk: "监管风险与增长停滞",
        tags: ["#同好", "#年轻", "#圈子"],
        scores: [60, 50, 60, 40, 30],
        timeline: [
            { year: "2015", event: "即刻由瓦恁创立，最初是信息聚合工具" },
            { year: "2017", event: "转型为社交平台，推出\"圈子\"功能" },
            { year: "2019", event: "被下架，进行整改" },
            { year: "2020", event: "重新上架，推出\"即友\"社区文化" },
            { year: "2021", event: "推出会员订阅服务，探索商业化" },
            { year: "2022", event: "用户突破百万，但在小众圈层活跃" },
            { year: "2023", event: "强化社区运营，推出更多圈子功能" },
            { year: "2024", event: "面临增长瓶颈，保持\"小而美\"定位" }
        ],
        key_decisions: [
            "从信息聚合工具转型为社交平台，推出\"圈子\"功能，允许用户创建兴趣社区",
            "\"即友\"文化运营，强调平等友善，通过官方引导建立独特的社区氛围",
            "低商业化策略，主要依靠会员订阅，避免过度商业化影响用户体验",
            "保持\"小而美\"定位，不盲目追求规模，保护社区质量和氛围",
            "社区氛围强运营，官方下场引导，但可能限制社区自然发展",
            "面临监管风险，需要平衡内容开放性和合规性"
        ],
        user_metrics: {
            monthly_active_users: "500万",
            daily_active_users: "150万",
            total_users: "800万",
            growth_rate: "5%",
            retention_rate: "68%",
            user_demographics: {
                age_range: "20-35岁为主，年轻白领",
                gender_ratio: "50% 男性，50% 女性",
                region: "中国一二线城市为主",
                income_level: "中高收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "30分钟/天",
                sessions_per_day: "4次",
                content_creation_rate: "6%",
                engagement_rate: "60%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "会员订阅",
                    percentage: 80,
                    description: "即友会员、增值服务"
                },
                {
                    type: "广告收入",
                    percentage: 20,
                    description: "信息流广告、品牌广告"
                }
            ],
            monetization_strategy: "会员订阅为主的低商业化模式",
            financial_metrics: {
                annual_revenue: "约1亿人民币 (2023)",
                revenue_growth: "10% YoY",
                profitability: "接近盈亏平衡",
                valuation: "约10亿人民币"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "微博", similarity: 60, position: "信息流社交间接竞品" },
                { name: "小红书", similarity: 50, position: "生活方式社区间接竞品" },
                { name: "知乎", similarity: 40, position: "知识社区间接竞品" }
            ],
            market_position: "小众信息流社区",
            market_share: "信息流社交市场1%",
            competitive_advantages: [
                "\"即友\"文化独特，社区氛围好",
                "小而美定位，内容质量高",
                "圈子功能灵活，兴趣匹配精准",
                "低商业化，用户体验好"
            ],
            competitive_disadvantages: [
                "用户规模小，增长缓慢",
                "商业化能力弱",
                "面临监管风险",
                "难以规模化"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "150万",
                mau: "500万",
                engagement_rate: "60%",
                retention_7d: "68%",
                retention_30d: "50%"
            },
            content_metrics: {
                daily_posts: "30万条动态",
                avg_views: "30分钟/天",
                like_rate: "3%",
                comment_rate: "2%"
            },
            business_metrics: {
                arpu: "约20元/年",
                ltv: "约50元",
                cac: "约15元",
                conversion_rate: "会员转化率8%"
            }
        },
        success_factors: [
            "从信息聚合转型社交平台",
            "\"即友\"文化运营，建立独特社区氛围",
            "小而美定位，保护社区质量",
            "圈子功能灵活，兴趣匹配精准",
            "低商业化策略，用户体验好",
            "但用户规模受限，增长缓慢"
        ]
    },
    hupu: {
        title: "虎扑 (Hupu)", 
        subtitle: "直男文化的最后堡垒",
        dao: "竞技精神与男性认同。JRs (家人) 文化。", 
        gov: "版规严厉。小黑屋制度。", 
        space: "体育场看台。情绪宣泄与专业讨论并存。", 
        econ: "电商导流（识货）。",
        risk: "性别对立，社区氛围排他性过强。",
        atomic_unit: "帖子/评分",
        distribution: "热榜分发 60% + 时间序 40%",
        death_risk: "核心用户流失与代际断层",
        tags: ["#直男", "#体育", "#评分"],
        scores: [50, 70, 60, 30, 50],
        timeline: [
            { year: "2004", event: "虎扑成立，专注篮球社区" },
            { year: "2007", event: "扩展到足球、F1等更多体育项目" },
            { year: "2012", event: "推出\"识货\"，进入电商导流业务" },
            { year: "2015", event: "完成C轮融资，估值超过40亿人民币" },
            { year: "2017", event: "推出\"毒\"（后改名\"得物\"），进入潮流电商" },
            { year: "2020", event: "用户破亿，但面临增长瓶颈" },
            { year: "2021", event: "尝试破圈，但引发核心用户反弹" },
            { year: "2023", event: "强化\"直男\"定位，回归核心用户群体" }
        ],
        key_decisions: [
            "专注男性体育用户，建立\"直男\"文化认同，形成独特的社区氛围",
            "JRs（家人）文化运营，通过称呼和仪式感强化社区归属感",
            "版规严厉，小黑屋制度，维护社区秩序但可能过于严格",
            "电商导流模式，通过\"识货\"变现，避免直接商业化影响社区",
            "评分功能创新，允许用户给各种事物评分，增强互动性和话题性",
            "坚持\"直男\"定位，不盲目破圈，保护核心用户群体"
        ]
    },
    telegram: {
        title: "Telegram", 
        subtitle: "自由主义的法外之地",
        dao: "绝对自由与隐私。无审查是其核心信仰。", 
        gov: "无政府主义。几乎没有平台级干预。", 
        space: "加密隧道。点对点加密，Channel 是单向广播。", 
        econ: "TON 区块链生态。试图构建独立经济体。",
        risk: "成为灰黑产温床，面临全球监管压力。",
        atomic_unit: "消息 (Message)",
        distribution: "订阅分发 100%",
        death_risk: "被应用商店下架 (Deplatforming)",
        tags: ["#隐私", "#加密", "#自由"],
        scores: [80, 30, 10, 5, 40],
        timeline: [
            { year: "2013", event: "Telegram由Pavel Durov和Nikolai Durov兄弟创立，专注隐私和安全" },
            { year: "2014", event: "推出端到端加密（Secret Chats），强化隐私保护" },
            { year: "2015", event: "推出Channel功能，支持单向广播，成为媒体发布平台" },
            { year: "2017", event: "用户突破1亿，在俄罗斯等地被禁用但用户仍增长" },
            { year: "2018", event: "推出TON（Telegram Open Network）区块链项目，尝试ICO" },
            { year: "2020", event: "SEC阻止TON项目，Telegram被迫退款，但用户突破4亿" },
            { year: "2021", event: "用户突破5亿，成为WhatsApp的重要替代品" },
            { year: "2023", event: "推出TON生态系统，包括TON钱包和TON链上服务" },
            { year: "2024", event: "用户突破9亿，但在多个国家面临监管压力" }
        ],
        key_decisions: [
            "端到端加密设计，保护用户隐私，但也被用于非法活动",
            "无审查政策，几乎不干预内容，成为\"自由主义的法外之地\"，但也面临监管压力",
            "Channel功能设计，支持单向广播，成为媒体和KOL发布平台",
            "免费且无广告模式，通过TON区块链生态探索商业模式",
            "服务器分布在全球，难以被单一国家监管，但也面临被下架的风险",
            "TON区块链项目失败，但继续探索区块链和加密技术"
        ]
    },
    farcaster: {
        title: "Farcaster", 
        subtitle: "去中心化的社交协议",
        dao: "数据主权。用户拥有自己的图谱，不依赖平台。", 
        gov: "协议治理。客户端（如Warpcast）只是浏览器。", 
        space: "开放草原。任何人都可以构建自己的客户端。", 
        econ: "拥有权经济。Frames 让交互可编程。",
        risk: "门槛过高（需加密钱包），早期只是极客玩具。",
        atomic_unit: "Cast (类似推文)",
        distribution: "开放算法 (可自定义)",
        death_risk: "无法跨越鸿沟 (Chasm)",
        tags: ["#Web3", "#协议", "#去中心化"],
        scores: [40, 60, 20, 10, 20],
        timeline: [
            { year: "2020", event: "Farcaster协议由Dan Romero和Varun Srinivasan创立" },
            { year: "2021", event: "推出Warpcast客户端，成为主流Farcaster客户端" },
            { year: "2022", event: "推出Frames功能，支持可交互内容" },
            { year: "2023", event: "用户突破5万，主要在加密社区活跃" },
            { year: "2024", event: "推出Farcaster Frames 2.0，增强交互能力" },
            { year: "2024", event: "获得a16z等机构投资，估值突破10亿美元" }
        ],
        key_decisions: [
            "去中心化协议设计，用户数据存储在链上，不依赖单一平台",
            "客户端与协议分离，Warpcast只是浏览器，用户可以切换客户端",
            "Frames功能创新，让社交内容可交互，支持内嵌应用和支付",
            "加密钱包集成，降低Web3使用门槛，但仍对普通用户有挑战",
            "开放算法设计，允许开发者自定义推荐算法，打破平台算法垄断",
            "社区驱动发展，通过NFT、代币等方式激励早期用户和开发者"
        ]
    },
    zhihu: {
        title: "知乎 (Zhihu)", 
        subtitle: "知识分享与故事会",
        dao: "专业主义 -> 故事会。从\"谢邀\"到\"刚编的\"。", 
        gov: "精英主义 -> 大众化。权重系统复杂。", 
        space: "讲坛。一人讲，万人听。", 
        econ: "知识付费 + 盐选会员。内容逐步向虚构类倾斜。",
        risk: "信噪比降低，精英用户出走，内容水化。",
        atomic_unit: "问答 (Q&A)",
        distribution: "算法分发 70% + 关注 20% + 搜索 10%",
        death_risk: "内容农场化 (Content Farm)",
        tags: ["#知识", "#问答", "#故事"],
        scores: [30, 80, 60, 70, 60],
        timeline: [
            { year: "2011", event: "知乎由周源创立，采用邀请制，建立精英社区" },
            { year: "2013", event: "开放注册，用户快速增长，但内容质量开始下降" },
            { year: "2016", event: "推出值乎、知乎Live等知识付费产品，探索商业化" },
            { year: "2017", event: "用户突破1亿，成为中文互联网重要的知识分享平台" },
            { year: "2019", event: "盐选会员上线，内容向故事化倾斜，\"谢邀\"文化淡化" },
            { year: "2021", event: "上市纳斯达克，商业化压力增大，算法推荐占比提升" },
            { year: "2022", event: "内容质量持续下降，精英用户流失，\"刚编的\"成为标签" },
            { year: "2023", event: "强化算法推荐，但用户体验进一步下降" }
        ],
        key_decisions: [
            "早期邀请制建立精英社区氛围，\"谢邀\"文化成为知乎独特的社区标识",
            "开放注册追求增长，用户规模扩大，但导致内容质量下降，\"专业主义\"被\"故事会\"取代",
            "知识付费模式尝试商业化，推出值乎、知乎Live等产品，但效果有限",
            "盐选会员转向故事化内容，从\"知识分享\"到\"内容消费\"，偏离初心",
            "算法推荐强化，从\"关注流\"转向\"推荐流\"，但用户不满，精英用户流失",
            "商业化压力与社区质量平衡困难，需要在增长和内容质量之间做取舍"
        ],
        user_metrics: {
            monthly_active_users: "1.2亿",
            daily_active_users: "4000万",
            total_users: "1.5亿",
            growth_rate: "3%",
            retention_rate: "55%",
            user_demographics: {
                age_range: "20-40岁为主，知识工作者",
                gender_ratio: "60% 男性，40% 女性",
                region: "中国一二线城市为主",
                income_level: "中高收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "35分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "3%",
                engagement_rate: "50%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告收入",
                    percentage: 50,
                    description: "信息流广告、品牌广告"
                },
                {
                    type: "会员订阅",
                    percentage: 30,
                    description: "盐选会员、付费内容"
                },
                {
                    type: "知识付费",
                    percentage: 20,
                    description: "知乎Live、值乎等"
                }
            ],
            monetization_strategy: "广告+会员+知识付费的多元化模式",
            financial_metrics: {
                annual_revenue: "约40亿人民币 (2023)",
                revenue_growth: "5% YoY",
                profitability: "接近盈亏平衡",
                valuation: "约30亿美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "B站", similarity: 60, position: "知识内容平台间接竞品" },
                { name: "小红书", similarity: 50, position: "内容社区间接竞品" },
                { name: "微博", similarity: 40, position: "社交媒体间接竞品" }
            ],
            market_position: "中文知识问答社区领导者",
            market_share: "知识问答社区市场70%+",
            competitive_advantages: [
                "早期精英社区基础好",
                "问答模式独特，内容形式丰富",
                "用户基数大，内容量多",
                "品牌认知度高"
            ],
            competitive_disadvantages: [
                "内容质量下降，\"故事会\"化",
                "精英用户流失",
                "商业化与质量平衡困难",
                "算法推荐引发用户不满"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "4000万",
                mau: "1.2亿",
                engagement_rate: "50%",
                retention_7d: "55%",
                retention_30d: "40%"
            },
            content_metrics: {
                daily_posts: "100万条内容",
                avg_views: "35分钟/天",
                like_rate: "2%",
                comment_rate: "1%"
            },
            business_metrics: {
                arpu: "约27元/年",
                ltv: "约80元",
                cac: "约20元",
                conversion_rate: "会员转化率5%"
            }
        },
        success_factors: [
            "早期邀请制建立精英社区",
            "问答模式独特，内容形式丰富",
            "用户基数大，品牌认知度高",
            "但开放注册后质量下降",
            "商业化与质量平衡困难",
            "精英用户流失问题"
        ]
    },
    stackoverflow: {
        title: "Stack Overflow", 
        subtitle: "程序员的全球圣经",
        dao: "实用主义与互助。Gamification (声望) 的教科书。", 
        gov: "社区自治。高声望用户拥有管理权。", 
        space: "档案馆。问题解决后即成为静态知识。", 
        econ: "招聘与B端服务。对C端几乎无干扰。",
        risk: "LLM (ChatGPT) 的冲击，导致基础问答流量暴跌。",
        atomic_unit: "Q&A",
        distribution: "搜索分发 90%",
        death_risk: "被 AI 取代 (AI Displacement)",
        tags: ["#技术", "#声望", "#工具"],
        scores: [20, 90, 80, 50, 70],
        timeline: [
            { year: "2008", event: "Stack Overflow由Jeff Atwood和Joel Spolsky创立" },
            { year: "2010", event: "推出声望系统（Reputation System），量化用户贡献" },
            { year: "2011", event: "推出Stack Exchange Network，扩展到更多垂直领域" },
            { year: "2015", event: "Stack Overflow Careers上线，进入招聘市场" },
            { year: "2018", event: "推出Teams产品，为企业提供私有问答平台" },
            { year: "2021", event: "被Prosus以18亿美元收购" },
            { year: "2023", event: "ChatGPT冲击导致基础问答流量下降30%" },
            { year: "2024", event: "推出Stack Overflow for AI，训练AI模型的代码数据" }
        ],
        key_decisions: [
            "声望系统设计，通过积分和徽章激励用户贡献，建立\"声誉经济\"",
            "严格的内容质量标准，关闭重复和低质量问题，维护知识库质量",
            "社区自治模式，高声望用户（Mod）拥有管理权，减少官方干预",
            "搜索优化策略，专注SEO，让问答内容成为搜索引擎的主要结果",
            "B端商业模式，通过招聘和Teams产品变现，避免影响C端用户体验",
            "应对AI冲击，从问答平台转向AI训练数据供应商"
        ]
    },
    // === 阶段3新增：垂直社区案例 ===
    dewu: {
        title: "得物 (Dewu)", 
        subtitle: "球鞋与潮流的垂直社区",
        dao: "身份认同与收藏欲。球鞋是Z世代的社交货币。", 
        gov: "强运营 + 社区规则。严厉打击假货，建立信任体系。", 
        space: "精品店 + 鉴定室。强调正品保障与专业鉴定。", 
        econ: "交易抽成 + 鉴定费。离交易最近，商业闭环完整。",
        risk: "过度商业化导致社区氛围稀释，用户流失到其他平台。",
        atomic_unit: "商品/鉴定报告/社区动态",
        distribution: "算法分发 50% + 搜索 30% + 社交 20%",
        death_risk: "信任危机与假货泛滥",
        tags: ["#垂直", "#潮流", "#交易", "#鉴定", "#社区", "#电商"],
        scores: [50, 70, 75, 60, 85],
        timeline: [
            { year: "2015", event: "得物（原名\"毒\"）成立，由虎扑孵化，专注球鞋鉴定和交易" },
            { year: "2016", event: "推出专业球鞋鉴定服务，建立鉴定师团队和标准化流程" },
            { year: "2017", event: "上线社区功能，允许用户分享穿搭、晒单，形成\"鉴定+社区+交易\"闭环" },
            { year: "2018", event: "完成A轮融资，球鞋二级市场爆发，用户快速增长" },
            { year: "2019", event: "品牌升级，从\"毒\"改名\"得物\"，拓展品牌形象，日活突破千万" },
            { year: "2020", event: "完成D轮融资，估值超10亿美元，成为独角兽企业" },
            { year: "2021", event: "拓展至潮玩、美妆、3C等品类，从球鞋平台向潮流电商转型" },
            { year: "2022", event: "强化社区内容，推出更多UGC功能和创作者激励计划" },
            { year: "2023", event: "探索直播电商和品牌自营，进一步强化商业闭环" }
        ],
        key_decisions: [
            "早期专注球鞋垂直领域，建立专业鉴定壁垒，解决二级市场信任问题",
            "引入专业鉴定服务，建立标准化鉴定流程和鉴定师认证体系，形成核心竞争力",
            "社区+交易双轮驱动，通过社区内容吸引用户，通过交易闭环实现变现",
            "品牌升级从\"毒\"到\"得物\"，摆脱负面印象，拓展更广泛的潮流用户群体",
            "从球鞋扩展到潮玩、美妆等品类，扩大市场空间，但可能稀释核心用户群体",
            "严厉打击假货，建立严格的质量控制体系，维护平台信任度和品牌价值",
            "与品牌方合作，推出独家产品和联名款，强化在潮流领域的权威性"
        ]
    },
    // === 阶段3新增：Web3社区案例 ===
    lens: {
        title: "Lens Protocol", 
        subtitle: "去中心化的社交图谱协议",
        dao: "数据主权与可组合性。用户拥有自己的社交关系链。", 
        gov: "DAO治理。协议升级由社区投票决定。", 
        space: "开放协议层。任何应用都可以接入。", 
        econ: "NFT化的关注关系，可交易可组合。",
        risk: "技术门槛高，普通用户难以理解，早期只是开发者工具。",
        atomic_unit: "Publication (内容) / Follow NFT",
        distribution: "开放算法，客户端自定义",
        death_risk: "无法跨越鸿沟，停留在极客圈",
        tags: ["#Web3", "#协议", "#去中心化", "#NFT", "#社交图谱", "#可组合性"],
        scores: [30, 50, 15, 5, 15],
        timeline: [
            { year: "2021", event: "Aave团队开始开发Lens Protocol，探索去中心化社交图谱" },
            { year: "2022", event: "Lens Protocol主网Beta版上线，支持Profile NFT、Follow NFT、Publication等核心功能" },
            { year: "2022", event: "Lenster成为第一个Lens客户端，展示协议的可组合性" },
            { year: "2023", event: "生态应用爆发，Phaver、Orb、Buttrfly等客户端上线，用户数快速增长" },
            { year: "2023", event: "推出Lens Open Actions，允许应用在Publication中嵌入交互功能，增强可组合性" },
            { year: "2023", event: "Lens DAO成立，协议治理转向社区驱动" },
            { year: "2024", event: "Lens V2升级，支持更多内容类型（音频、视频），优化Gas费用" },
            { year: "2024", event: "与Farcaster、Nostr等协议竞争，但面临用户迁移成本和网络效应挑战" }
        ],
        key_decisions: [
            "选择NFT作为关注关系（Follow NFT）和Profile的载体，实现真正的数据主权和可组合性",
            "开放协议设计，允许任何客户端接入，用户可以自由切换客户端而不丢失社交关系",
            "可组合性（Composability）核心设计，允许应用在Publication中嵌入功能（Open Actions），创新社交交互",
            "基于Polygon Layer 2，降低Gas费用，提升用户体验，但依赖特定区块链生态",
            "DAO治理模式，协议升级由社区投票决定，但早期仍由Aave团队主导",
            "生态应用策略，鼓励开发者构建多样化客户端，但需要平衡用户体验一致性",
            "与Farcaster等协议竞争，需要通过更好的用户体验和更强的网络效应获得优势",
            "面对技术门槛高的挑战，需要简化用户体验，让普通用户也能理解和使用"
        ]
    },
    // === 阶段3新增：企业社区案例 ===
    slack: {
        title: "Slack", 
        subtitle: "企业协作的数字化工作空间",
        dao: "异步沟通与信息透明。减少会议，提高效率。", 
        gov: "组织架构映射。频道(Channel)对应部门/项目。", 
        space: "办公室的数字化。公开频道 vs 私密DM。", 
        econ: "SaaS订阅制。按用户数收费，企业级功能付费。",
        risk: "信息过载，通知疲劳，成为新的\"工作压力源\"。",
        atomic_unit: "消息 (Message) / 文件",
        distribution: "时间序 + 频道订阅",
        death_risk: "被Microsoft Teams等竞品替代",
        tags: ["#企业", "#协作", "#SaaS"],
        scores: [70, 40, 60, 30, 80],
        timeline: [
            { year: "2013", event: "Slack由Stewart Butterfield创立，最初是游戏公司Tiny Speck的内部协作工具" },
            { year: "2014", event: "正式发布，采用freemium模式，免费版限制消息历史" },
            { year: "2015", event: "推出第三方应用集成（Integrations），建立生态系统" },
            { year: "2016", event: "推出语音通话和视频通话功能，完善协作工具集" },
            { year: "2017", event: "日活用户突破800万，成为企业协作领域领导者" },
            { year: "2019", event: "IPO上市，市值超过230亿美元" },
            { year: "2020", event: "Microsoft Teams推出免费版本，用户快速增长，Slack面临竞争压力" },
            { year: "2020", event: "被Salesforce以277亿美元收购，强化CRM集成" },
            { year: "2022", event: "与Microsoft Teams竞争加剧，市场份额下降" },
            { year: "2023", event: "推出AI功能（Slack GPT），集成ChatGPT等AI工具，整合Salesforce生态系统" }
        ],
        key_decisions: [
            "异步沟通理念，减少会议，提高工作效率，建立独特的协作文化，与传统即时通讯形成差异化",
            "频道(Channel)架构设计，对应部门/项目，信息透明且可搜索，建立知识库",
            "Freemium模式策略，免费版吸引用户，付费版实现商业化，按用户数收费",
            "第三方应用集成（Integrations），建立生态系统，提升产品价值和用户粘性",
            "表情符号和GIF文化，让工作沟通更轻松，建立独特的\"Slack文化\"",
            "搜索功能强大，所有消息可搜索，建立知识管理系统",
            "被Salesforce收购后，强化CRM集成，但可能失去独立性和灵活性"
        ],
        user_metrics: {
            monthly_active_users: "2000万",
            daily_active_users: "1200万",
            total_users: "2500万",
            growth_rate: "3%",
            retention_rate: "90%",
            user_demographics: {
                age_range: "25-45岁为主，知识工作者",
                gender_ratio: "55% 男性，45% 女性",
                region: "全球覆盖，美国、欧洲为主",
                income_level: "中高收入职场人士为主"
            },
            usage_patterns: {
                avg_session_duration: "90分钟/天",
                sessions_per_day: "8次",
                content_creation_rate: "20%",
                engagement_rate: "85%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "企业订阅",
                    percentage: 95,
                    description: "按用户数收费的企业版订阅"
                },
                {
                    type: "其他服务",
                    percentage: 5,
                    description: "应用市场、集成服务等"
                }
            ],
            monetization_strategy: "SaaS订阅制，B2B模式",
            financial_metrics: {
                annual_revenue: "约15亿美元 (2023)",
                revenue_growth: "5% YoY",
                profitability: "接近盈亏平衡",
                valuation: "约200亿美元（Salesforce资产）"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Microsoft Teams", similarity: 90, position: "企业协作直接竞品" },
                { name: "Discord", similarity: 60, position: "实时通讯间接竞品" },
                { name: "Zoom", similarity: 50, position: "视频会议间接竞品" }
            ],
            market_position: "企业协作工具领导者，但市场份额下降",
            market_share: "企业协作市场30%",
            competitive_advantages: [
                "异步沟通理念独特",
                "频道架构设计优秀",
                "第三方应用集成丰富",
                "搜索功能强大"
            ],
            competitive_disadvantages: [
                "面临Microsoft Teams竞争",
                "用户增长放缓",
                "被收购后可能失去独立性",
                "价格相对较高"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "1200万",
                mau: "2000万",
                engagement_rate: "85%",
                retention_7d: "90%",
                retention_30d: "85%"
            },
            content_metrics: {
                daily_messages: "15亿条消息",
                avg_usage_time: "90分钟/天",
                channel_creation_rate: "3%",
                integration_usage: "60%"
            },
            business_metrics: {
                arpu: "约60美元/年",
                ltv: "约600美元",
                cac: "约200美元",
                conversion_rate: "付费转化率30%"
            }
        },
        success_factors: [
            "异步沟通理念建立差异化",
            "频道架构设计优秀",
            "第三方应用集成丰富",
            "Freemium模式吸引用户",
            "搜索功能强大",
            "但面临Microsoft Teams激烈竞争",
            "市场份额下降"
        ]
    },
    microsoft_teams: {
        title: "Microsoft Teams", 
        subtitle: "Office生态的协作中心",
        dao: "工作场景的深度整合。与Office无缝衔接。", 
        gov: "企业级权限管理。与Azure AD集成。", 
        space: "虚拟办公室。会议、文档、聊天一体化。", 
        econ: "Office 365捆绑销售。企业级定价策略。",
        risk: "功能过于复杂，学习成本高，小团队难以使用。",
        atomic_unit: "消息/会议/文档",
        distribution: "组织架构 + 时间序",
        death_risk: "功能臃肿化，用户体验下降",
        tags: ["#企业", "#Office", "#微软"],
        scores: [60, 50, 70, 40, 90],
        timeline: [
            { year: "2017", event: "Microsoft Teams正式发布，集成Office 365" },
            { year: "2018", event: "推出免费版本，与Slack竞争" },
            { year: "2020", event: "疫情期间用户激增，日活突破1.15亿" },
            { year: "2021", event: "日活突破2.5亿，超过Slack" },
            { year: "2022", event: "整合更多Microsoft服务，功能持续扩展" },
            { year: "2023", event: "推出AI功能（Copilot），增强智能化协作" }
        ],
        key_decisions: [
            "与Office 365深度集成，降低企业用户工具切换成本",
            "免费版本策略，快速获取市场份额，与Slack竞争",
            "捆绑销售，通过Office 365订阅获取用户，建立商业模式优势",
            "功能全面，整合聊天、会议、文件、应用等，但可能导致功能臃肿",
            "企业IT控制优先，与Active Directory集成，符合大企业IT需求",
            "AI功能整合（Copilot），利用Microsoft技术优势，提升产品竞争力"
        ]
    },
    // === 阶段3新增：失败案例分析 ===
    google_plus: {
        title: "Google+ (已关闭)", 
        subtitle: "Google的社交网络失败案例",
        dao: "强制实名制与圈子(Circles)概念。试图复制Facebook。", 
        gov: "Google中央集权。缺乏社区自治。", 
        space: "混乱的界面。圈子概念过于复杂。", 
        econ: "广告模式。但用户基数不足，无法变现。",
        risk: "产品定位不清晰，既想对抗Facebook又想做企业协作。",
        atomic_unit: "帖子 (Post)",
        distribution: "算法分发 + 圈子",
        death_risk: "用户流失，2019年正式关闭",
        tags: ["#失败", "#Google", "#社交"],
        scores: [30, 40, 90, 60, 20],
        timeline: [
            { year: "2011", event: "Google+正式发布，强制整合Gmail等产品" },
            { year: "2013", event: "活跃用户数被质疑，开始衰落" },
            { year: "2019", event: "正式关闭，承认失败" }
        ],
        key_decisions: [
            "强制实名制，与Facebook竞争但缺乏差异化",
            "圈子(Circles)概念过于复杂，用户难以理解",
            "强制整合Gmail等产品，引起用户反感",
            "缺乏明确的用户价值主张"
        ],
        failure_lessons: [
            "不要强制用户使用，尊重用户选择",
            "产品概念要简单易懂，不要过度设计",
            "要有明确的差异化定位，不能只是复制",
            "社区需要时间培养，不能急于求成"
        ]
    },
    
    // === 继续扩展：游戏社区 ===
    steam: {
        title: "Steam", 
        subtitle: "游戏玩家的数字图书馆",
        dao: "收藏欲与身份认同。游戏库是玩家的数字资产。", 
        gov: "平台集权。Valve拥有绝对控制权，但规则相对透明。", 
        space: "数字商店 + 社区中心。游戏、讨论、创意工坊一体化。", 
        econ: "30%抽成模式。通过折扣和促销刺激消费。",
        risk: "平台垄断，开发者议价能力弱，Epic Games等竞品挑战。",
        atomic_unit: "游戏 / 评测 / 创意工坊内容",
        distribution: "算法推荐 40% + 搜索 30% + 社交 20% + 编辑 10%",
        death_risk: "被Epic Games等竞品分流",
        tags: ["#游戏", "#平台", "#PC", "#数字分发", "#社区", "#创意工坊"],
        scores: [70, 60, 80, 70, 90],
        timeline: [
            { year: "2003", event: "Steam平台发布，最初是Valve用于游戏更新和反盗版的工具" },
            { year: "2004", event: "半条命2强制要求Steam，建立用户基础，用户数突破100万" },
            { year: "2005", event: "第三方游戏上线，从Valve游戏平台扩展为数字分发平台" },
            { year: "2007", event: "推出Steam社区功能，包括好友系统、成就系统、个人资料" },
            { year: "2008", event: "推出Steam大促（夏季特卖），建立定期促销文化" },
            { year: "2011", event: "创意工坊上线，允许玩家创作和分享MOD、地图等UGC内容，UGC内容爆发" },
            { year: "2012", event: "Greenlight系统上线，允许独立开发者提交游戏" },
            { year: "2013", event: "Steam Machines硬件计划发布（后失败），Steam OS推出" },
            { year: "2015", event: "Steam退款政策上线，提升用户信任度" },
            { year: "2017", event: "Steam Direct上线，取代Greenlight，降低游戏上架门槛" },
            { year: "2019", event: "Epic Games Store推出，以12%抽成挑战Steam，Steam面临竞争压力" },
            { year: "2020", event: "Steam Deck掌机发布，Valve进入硬件领域，整合Steam生态" },
            { year: "2022", event: "Steam Deck正式发售，获得市场认可，验证PC游戏掌机市场" },
            { year: "2023", event: "Steam用户数突破1.3亿，但面临Epic Games等竞品分流，调整分成政策应对竞争" }
        ],
        key_decisions: [
            "早期通过强制要求（半条命2）建立用户习惯，虽然引起不满但快速积累用户基础",
            "创意工坊模式让玩家参与内容创作，延长游戏生命周期，建立强大的UGC生态",
            "定期大促（夏季/冬季特卖）建立促销文化，刺激用户消费，形成购物节效应",
            "保持30%抽成，虽然被Epic Games挑战，但提供完善的工具和服务（Steamworks API）",
            "Steam社区功能整合游戏、社交、交易，形成完整的游戏生态系统",
            "从Greenlight到Direct的演进，降低开发者门槛，但可能导致游戏质量下降",
            "Steam Deck硬件战略，整合PC和移动游戏，但需要面对成本和市场竞争",
            "面对Epic Games等竞品挑战，调整策略但保持平台优势和用户粘性"
        ],
        user_metrics: {
            monthly_active_users: "1.3亿",
            daily_active_users: "3300万",
            total_users: "1.5亿",
            growth_rate: "5%",
            retention_rate: "90%",
            user_demographics: {
                age_range: "16-45岁为主，PC游戏玩家",
                gender_ratio: "75% 男性，25% 女性",
                region: "全球覆盖，美国、中国、欧洲为主",
                income_level: "中高收入游戏玩家为主"
            },
            usage_patterns: {
                avg_session_duration: "120分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "5%",
                engagement_rate: "85%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "游戏销售抽成",
                    percentage: 90,
                    description: "30%游戏销售抽成"
                },
                {
                    type: "其他服务",
                    percentage: 10,
                    description: "市场交易、DLC等"
                }
            ],
            monetization_strategy: "30%抽成模式，游戏销售为主",
            financial_metrics: {
                annual_revenue: "约100亿美元 (2023)",
                revenue_growth: "8% YoY",
                profitability: "盈利",
                valuation: "约150亿美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Epic Games Store", similarity: 90, position: "数字分发直接竞品" },
                { name: "GOG", similarity: 60, position: "数字分发间接竞品" },
                { name: "Xbox Game Pass", similarity: 50, position: "订阅服务间接竞品" }
            ],
            market_position: "PC游戏数字分发平台领导者",
            market_share: "PC数字游戏市场75%+",
            competitive_advantages: [
                "用户规模大，游戏库丰富",
                "创意工坊UGC生态强",
                "社区功能完善",
                "大促文化建立用户习惯"
            ],
            competitive_disadvantages: [
                "30%抽成被Epic挑战",
                "面临订阅模式竞争",
                "Steam Deck成本高",
                "游戏质量参差不齐"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "3300万",
                mau: "1.3亿",
                engagement_rate: "85%",
                retention_7d: "90%",
                retention_30d: "85%"
            },
            content_metrics: {
                daily_purchases: "500万次购买",
                avg_play_time: "120分钟/天",
                mod_downloads: "2000万次/天",
                review_rate: "3%"
            },
            business_metrics: {
                arpu: "约67美元/年",
                ltv: "约500美元",
                cac: "约50美元",
                conversion_rate: "购买转化率15%"
            }
        },
        success_factors: [
            "早期强制要求建立用户习惯",
            "创意工坊建立UGC生态",
            "定期大促建立促销文化",
            "社区功能完善，整合游戏、社交、交易",
            "游戏库丰富，选择多样",
            "但30%抽成被Epic挑战"
        ]
    },
    twitch: {
        title: "Twitch", 
        subtitle: "游戏直播的全球中心",
        dao: "陪伴感与表演欲。实时互动创造独特的共时性。", 
        gov: "平台强监管。严格的社区准则，但执行不一致。", 
        space: "虚拟舞台。主播表演，观众打赏互动。", 
        econ: "订阅分成 + 广告 + 打赏。主播与平台分成。",
        risk: "头部主播垄断流量，新主播难以成长。",
        atomic_unit: "直播流 / 聊天消息",
        distribution: "关注流 60% + 推荐算法 40%",
        death_risk: "被YouTube Gaming等竞品替代",
        tags: ["#直播", "#游戏", "#打赏", "#实时", "#互动", "#社区"],
        scores: [80, 70, 75, 65, 85],
        timeline: [
            { year: "2007", event: "Justin.tv成立，提供实时视频直播服务" },
            { year: "2011", event: "Twitch从Justin.tv分离，专注游戏直播，成为独立品牌" },
            { year: "2012", event: "推出订阅功能（Twitch Subscriptions），允许观众订阅主播频道" },
            { year: "2013", event: "推出Bits打赏系统（Twitch Bits），允许观众用虚拟货币打赏主播" },
            { year: "2014", event: "被Amazon以9.7亿美元收购，获得资源支持和AWS基础设施" },
            { year: "2015", event: "推出Twitch Creative，扩展到游戏以外的直播内容" },
            { year: "2016", event: "推出Twitch Prime会员（后改名Prime Gaming），与Amazon Prime会员整合" },
            { year: "2017", event: "日活用户突破1500万，成为全球最大的游戏直播平台" },
            { year: "2019", event: "推出Twitch Studio，简化主播开播流程" },
            { year: "2020", event: "疫情期间用户激增，日活突破3000万，观看时长大幅增长" },
            { year: "2021", event: "推出Hype Train功能，鼓励观众集体打赏，增强互动" },
            { year: "2022", event: "调整分成政策，头部主播分成从70/30改为50/50，引发争议" },
            { year: "2023", event: "推出短视频功能（Twitch Clips扩展），对抗TikTok和YouTube Shorts" },
            { year: "2024", event: "面临YouTube Gaming等竞品竞争，强化社区功能和创作者支持" }
        ],
        key_decisions: [
            "从Justin.tv分离专注游戏直播，建立垂直领域的专业壁垒，抓住游戏直播的快速增长期",
            "聊天系统设计，允许观众实时互动，创造独特的\"共时性\"体验，增强观众参与感",
            "订阅和打赏模式让主播直接变现，建立健康的创作者经济，平台与主播分成（最初70/30）",
            "被Amazon收购后获得AWS基础设施支持，降低运营成本，整合Prime会员生态",
            "Bits打赏系统创新，降低打赏门槛，通过微支付增强观众与主播的互动",
            "Twitch Prime会员整合，利用Amazon Prime用户基础，为创作者提供额外收入来源",
            "扩展到游戏以外的内容（Creative、IRL、音乐等），扩大用户基础但可能稀释核心用户群体",
            "Hype Train等功能增强集体互动，鼓励观众集体打赏，提升直播氛围和收入",
            "调整分成政策引发争议，但平台需要平衡创作者收入和平台运营成本",
            "推出短视频功能应对TikTok竞争，但需要平衡长视频直播和短视频内容的定位"
        ],
        user_metrics: {
            monthly_active_users: "1.4亿",
            daily_active_users: "3100万",
            total_users: "1.6亿",
            growth_rate: "5%",
            retention_rate: "80%",
            user_demographics: {
                age_range: "16-35岁为主，游戏玩家",
                gender_ratio: "70% 男性，30% 女性",
                region: "全球覆盖，美国、欧洲为主",
                income_level: "中等收入游戏玩家为主"
            },
            usage_patterns: {
                avg_session_duration: "95分钟/天",
                sessions_per_day: "4次",
                content_creation_rate: "2%",
                engagement_rate: "75%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "订阅分成",
                    percentage: 50,
                    description: "Twitch订阅分成（50/50）"
                },
                {
                    type: "广告收入",
                    percentage: 40,
                    description: "直播广告、视频广告"
                },
                {
                    type: "打赏分成",
                    percentage: 10,
                    description: "Bits打赏分成"
                }
            ],
            monetization_strategy: "订阅+广告+打赏的多元化模式",
            financial_metrics: {
                annual_revenue: "约30亿美元 (2023)",
                revenue_growth: "10% YoY",
                profitability: "盈利",
                valuation: "约150亿美元（Amazon资产）"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "YouTube Gaming", similarity: 85, position: "游戏直播直接竞品" },
                { name: "Facebook Gaming", similarity: 70, position: "游戏直播间接竞品" },
                { name: "Mixer", similarity: 60, position: "已关闭的直接竞品" }
            ],
            market_position: "游戏直播平台领导者",
            market_share: "游戏直播市场70%+",
            competitive_advantages: [
                "游戏直播垂直领域专业",
                "实时互动体验优秀",
                "Amazon资源支持",
                "创作者经济成熟"
            ],
            competitive_disadvantages: [
                "头部主播垄断流量",
                "分成政策引发争议",
                "面临YouTube Gaming竞争",
                "短视频内容不如TikTok"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "3100万",
                mau: "1.4亿",
                engagement_rate: "75%",
                retention_7d: "80%",
                retention_30d: "65%"
            },
            content_metrics: {
                daily_streams: "700万小时",
                avg_watch_time: "95分钟/天",
                subscription_rate: "5%",
                bits_rate: "3%"
            },
            business_metrics: {
                arpu: "约21美元/年",
                ltv: "约150美元",
                cac: "约30美元",
                conversion_rate: "订阅转化率5%"
            }
        },
        success_factors: [
            "从Justin.tv分离专注游戏直播",
            "实时互动体验优秀",
            "订阅和打赏模式建立创作者经济",
            "Amazon资源支持，AWS基础设施",
            "聊天系统创造共时性体验",
            "但分成政策引发争议",
            "头部主播垄断流量"
        ]
    },
    
    // === 继续扩展：开发者社区 ===
    github: {
        title: "GitHub", 
        subtitle: "程序员的社交网络",
        dao: "开源精神与协作。代码即社交。", 
        gov: "平台治理 + 项目自治。GitHub制定规则，项目维护者自治。", 
        space: "代码仓库 + 讨论区。公开协作，透明开发。", 
        econ: "企业版订阅 + GitHub Actions。B端变现为主。",
        risk: "被Microsoft收购后，开源社区担忧。",
        atomic_unit: "代码仓库 / Issue / Pull Request",
        distribution: "关注流 50% + 探索算法 30% + 搜索 20%",
        death_risk: "开源社区迁移到GitLab等替代平台",
        tags: ["#开发", "#开源", "#协作", "#代码", "#版本控制", "#CI/CD"],
        scores: [60, 50, 70, 40, 80],
        timeline: [
            { year: "2008", event: "GitHub上线，由Tom Preston-Werner、Chris Wanstrath和PJ Hyett创立，提供Git托管服务" },
            { year: "2009", event: "推出Pull Request功能，建立代码审查协作流程，成为核心功能" },
            { year: "2010", event: "用户数突破10万，成为最受欢迎的代码托管平台" },
            { year: "2011", event: "推出GitHub Pages，允许用户免费托管静态网站" },
            { year: "2012", event: "用户数突破100万，仓库数突破200万，成为开源协作的默认平台" },
            { year: "2013", event: "推出GitHub Enterprise，进入企业市场，开始B端变现" },
            { year: "2015", event: "推出GitHub Classroom，进入教育市场" },
            { year: "2016", event: "推出GitHub Marketplace，允许开发者销售工具和服务" },
            { year: "2018", event: "被Microsoft以75亿美元收购，引发开源社区担忧，但Microsoft承诺保持独立运营" },
            { year: "2019", event: "推出GitHub Actions，集成CI/CD功能，与Jenkins等工具竞争" },
            { year: "2020", event: "推出GitHub Codespaces，提供云端开发环境，整合VS Code" },
            { year: "2021", event: "GitHub Copilot AI编程助手发布（与OpenAI合作），引发争议但也获得认可" },
            { year: "2022", event: "用户数突破1亿，仓库数突破4亿，但面临GitLab等竞品竞争" },
            { year: "2023", event: "推出GitHub Advanced Security，强化企业安全功能，优化Copilot定价" },
            { year: "2024", event: "持续整合Microsoft生态，但也面临开源社区对\"微软化\"的担忧" }
        ],
        key_decisions: [
            "将Git分布式版本控制与社交网络结合，代码即社交，建立开发者协作的默认平台",
            "Pull Request（PR）功能创新，建立代码审查协作流程，成为开源协作的核心机制",
            "Issue系统设计，允许用户报告问题、讨论功能，建立项目管理和社区参与机制",
            "开源免费策略，吸引个人开发者和小团队，通过企业版（GitHub Enterprise）实现B端变现",
            "GitHub Pages免费静态网站托管，降低开发者建站门槛，增强平台价值",
            "被Microsoft收购后保持独立运营，承诺支持开源，缓解社区担忧但效果有限",
            "GitHub Actions推出，从代码托管扩展到CI/CD，建立开发者工具的完整生态",
            "GitHub Copilot AI编程助手，利用AI提升开发效率，但引发版权和开源许可争议",
            "GitHub Codespaces云端开发环境，整合Microsoft VS Code，提供完整的云端开发体验",
            "Marketplace策略，允许第三方开发者销售工具，建立开发者经济生态",
            "面对GitLab等竞品竞争，强化企业安全功能，但也需要平衡开源精神和商业化需求"
        ],
        user_metrics: {
            monthly_active_users: "1亿",
            daily_active_users: "4000万",
            total_users: "1.2亿",
            growth_rate: "10%",
            retention_rate: "90%",
            user_demographics: {
                age_range: "20-40岁为主，开发者核心用户",
                gender_ratio: "75% 男性，25% 女性",
                region: "全球覆盖，美国、中国、欧洲为主",
                income_level: "中高收入技术工作者为主"
            },
            usage_patterns: {
                avg_session_duration: "45分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "15%",
                engagement_rate: "85%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "企业订阅",
                    percentage: 60,
                    description: "GitHub Enterprise、GitHub Advanced Security"
                },
                {
                    type: "GitHub Actions",
                    percentage: 25,
                    description: "CI/CD服务使用费"
                },
                {
                    type: "GitHub Copilot",
                    percentage: 10,
                    description: "AI编程助手订阅"
                },
                {
                    type: "其他服务",
                    percentage: 5,
                    description: "Marketplace、Codespaces等"
                }
            ],
            monetization_strategy: "B端订阅+SaaS服务模式",
            financial_metrics: {
                annual_revenue: "约10亿美元 (2023)",
                revenue_growth: "25% YoY",
                profitability: "盈利",
                valuation: "约150亿美元（Microsoft收购后）"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "GitLab", similarity: 90, position: "直接竞品，开源替代" },
                { name: "Bitbucket", similarity: 70, position: "代码托管直接竞品" },
                { name: "SourceForge", similarity: 40, position: "早期代码托管平台" }
            ],
            market_position: "全球最大的代码托管和协作平台",
            market_share: "代码托管市场70%+",
            competitive_advantages: [
                "用户规模巨大，网络效应强",
                "Pull Request和Issue系统完善",
                "开源生态丰富，项目数量多",
                "Microsoft资源支持，企业市场优势"
            ],
            competitive_disadvantages: [
                "被Microsoft收购后开源社区担忧",
                "GitLab等竞品提供开源替代",
                "Copilot引发版权争议",
                "企业版价格较高"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Git分布式版本控制",
                "Ruby on Rails后端",
                "MySQL数据库",
                "CI/CD系统（Actions）"
            ],
            tech_features: [
                "Git版本控制集成",
                "Pull Request代码审查",
                "Issue项目管理",
                "CI/CD自动化"
            ],
            tech_challenges: [
                "大规模代码存储和处理",
                "代码审查性能优化",
                "CI/CD资源管理",
                "AI代码生成准确性"
            ]
        },
        product_features: {
            core_features: [
                {
                    name: "代码仓库",
                    description: "Git版本控制，代码托管和管理",
                    importance: "核心功能"
                },
                {
                    name: "Pull Request",
                    description: "代码审查和协作流程",
                    importance: "核心功能"
                },
                {
                    name: "Issue",
                    description: "问题跟踪和项目管理",
                    importance: "核心功能"
                },
                {
                    name: "GitHub Actions",
                    description: "CI/CD自动化工作流",
                    importance: "核心功能"
                }
            ],
            innovative_features: [
                "Pull Request（首创）",
                "GitHub Pages静态网站托管",
                "GitHub Copilot AI编程助手",
                "GitHub Codespaces云端开发环境"
            ],
            feature_evolution: [
                { year: "2008", feature: "基础Git托管" },
                { year: "2009", feature: "Pull Request上线" },
                { year: "2011", feature: "GitHub Pages" },
                { year: "2019", feature: "GitHub Actions" },
                { year: "2021", feature: "GitHub Copilot" },
                { year: "2020", feature: "GitHub Codespaces" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "开源项目为主，社区自治",
                creator_support: "开源项目支持、Sponsors功能",
                content_quality: "社区自治，平台辅助管理"
            },
            user_operation: {
                acquisition: "口碑传播、开发者社区、教育市场",
                activation: "新手引导、开源项目参与",
                retention: "项目关注、代码贡献、社区参与",
                referral: "项目分享、协作邀请"
            },
            event_operation: [
                {
                    name: "GitHub Universe",
                    impact: "年度开发者大会，提升品牌影响力",
                    description: "年度开发者大会，展示平台功能和生态"
                }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "4000万",
                mau: "1亿",
                engagement_rate: "85%",
                retention_7d: "90%",
                retention_30d: "85%"
            },
            content_metrics: {
                daily_commits: "1.5亿次提交",
                daily_repositories: "10万个新仓库",
                pr_rate: "5%",
                issue_rate: "3%"
            },
            business_metrics: {
                arpu: "约83美元/年",
                ltv: "约500美元",
                cac: "约100美元",
                conversion_rate: "企业版转化率3%"
            }
        },
        success_factors: [
            "将Git与社交网络结合，代码即社交",
            "Pull Request功能创新，建立代码审查标准",
            "开源免费策略，吸引个人开发者",
            "企业版B端变现，建立商业模式",
            "GitHub Actions扩展CI/CD，建立完整生态",
            "GitHub Copilot AI编程助手，提升开发效率",
            "Microsoft资源支持，企业市场优势",
            "开源生态丰富，项目数量多，网络效应强"
        ]
    },
    devto: {
        title: "Dev.to", 
        subtitle: "开发者友好的写作社区",
        dao: "知识分享与职业成长。帮助开发者建立个人品牌。", 
        gov: "社区自治。宽松的规则，强调包容性。", 
        space: "技术博客平台。Markdown友好，代码高亮。", 
        econ: "广告 + 企业赞助。对创作者免费。",
        risk: "内容质量参差不齐，缺乏深度内容。",
        atomic_unit: "技术文章 / 讨论",
        distribution: "时间序 60% + 算法推荐 40%",
        death_risk: "被Medium、Hashnode等竞品替代",
        tags: ["#技术", "#写作", "#开发者", "#Markdown", "#开源", "#包容性"],
        scores: [50, 60, 50, 30, 40],
        timeline: [
            { year: "2016", event: "Dev.to由Ben Halpern创立，专注开发者友好的技术写作平台" },
            { year: "2017", event: "推出Markdown编辑器，支持代码高亮，降低技术写作门槛" },
            { year: "2018", event: "用户数突破10万，成为开发者重要的知识分享平台" },
            { year: "2019", event: "被Forem收购，获得资源支持，继续独立运营" },
            { year: "2020", event: "开源平台代码（Forem），建立信任，允许社区贡献和改进" },
            { year: "2021", event: "用户数突破100万，文章数突破100万篇，建立庞大的技术内容库" },
            { year: "2022", event: "推出企业版功能，允许企业创建内部技术博客，探索B2B商业模式" },
            { year: "2023", event: "推出AI功能，帮助开发者写作和代码生成，提升内容创作效率" },
            { year: "2024", event: "继续扩展功能，但需要平衡内容质量和数量，避免内容农场化" }
        ],
        key_decisions: [
            "Markdown优先设计，降低技术写作门槛，让开发者能够专注于内容而非格式",
            "强调包容性，欢迎所有技能水平的开发者，从初学者到专家，建立友好的社区氛围",
            "开源平台代码（Forem），建立信任，允许社区贡献和改进，体现开源精神",
            "免费模式策略，对创作者免费，通过广告和企业赞助变现，避免创作者负担",
            "代码高亮和语法支持，优化技术内容展示，提升阅读体验",
            "社区自治模式，宽松的规则，强调包容性，但可能导致内容质量参差不齐",
            "企业版功能探索，允许企业创建内部技术博客，探索B2B商业模式",
            "AI功能集成，帮助开发者写作和代码生成，但需要平衡AI辅助和原创性",
            "面对Medium、Hashnode等竞品竞争，需要保持开发者友好和社区氛围优势"
        ]
    },
    
    // === 继续扩展：创作者社区 ===
    patreon: {
        title: "Patreon", 
        subtitle: "创作者的经济支持平台",
        dao: "直接支持与粉丝关系。绕过平台，直接连接。", 
        gov: "平台规则 + 创作者自治。Patreon制定底线，创作者管理自己的社区。", 
        space: "私人会所。付费会员才能进入。", 
        econ: "平台抽成（5-12%）。创作者直接获得支持。",
        risk: "平台抽成过高，创作者寻找替代方案。",
        atomic_unit: "帖子 / 会员专享内容",
        distribution: "时间序 + 会员等级",
        death_risk: "被Substack、Ko-fi等竞品分流",
        tags: ["#创作者", "#订阅", "#付费", "#直接支持", "#会员", "#粉丝经济"],
        scores: [70, 40, 60, 50, 75],
        timeline: [
            { year: "2013", event: "Patreon由Jack Conte和Sam Yam创立，专注创作者经济，允许粉丝直接支持创作者" },
            { year: "2014", event: "推出按月订阅模式，稳定创作者收入，建立可持续的创作者经济模式" },
            { year: "2015", event: "推出会员等级系统，允许创作者设置不同价格层级，提供差异化价值" },
            { year: "2017", event: "用户数突破100万，创作者数突破10万，成为创作者经济的重要平台" },
            { year: "2019", event: "完成E轮融资，估值15亿美元，成为独角兽企业" },
            { year: "2020", event: "疫情期间创作者激增，用户数突破600万，创作者数突破20万" },
            { year: "2021", event: "IPO上市，估值超40亿美元，成为创作者经济领域的领导者" },
            { year: "2022", event: "推出Patreon Video，支持视频内容，扩展内容类型" },
            { year: "2023", event: "推出AI工具，帮助创作者内容创作和社区管理，提升创作者效率" },
            { year: "2023", event: "面临Substack、Ko-fi等竞品竞争，但保持市场领先地位" },
            { year: "2024", event: "继续扩展功能，但需要平衡平台抽成和创作者利益，避免创作者流失" }
        ],
        key_decisions: [
            "按月订阅模式设计，稳定创作者收入，建立可持续的创作者经济模式，与一次性打赏形成差异化",
            "会员等级系统，允许创作者设置不同价格层级，提供差异化价值，满足不同粉丝需求",
            "平台抽成模式（5-12%），虽然被创作者质疑，但提供工具和服务（支付、税务、分析等）",
            "专注创作者经济，不涉足内容分发，让创作者拥有完全控制权，建立创作者友好定位",
            "绕过平台算法，创作者直接触达粉丝，建立稳定的粉丝关系，降低平台依赖",
            "支持多种内容类型（文字、图片、音频、视频），满足不同创作者需求",
            "Patreon Video功能扩展，支持视频内容，但需要平衡视频和文字内容的定位",
            "AI工具集成，帮助创作者内容创作和社区管理，但需要平衡AI辅助和创作者原创性",
            "面对Substack、Ko-fi等竞品竞争，需要保持创作者友好和平台价值，避免过度商业化"
        ],
        user_metrics: {
            monthly_active_users: "800万",
            daily_active_users: "200万",
            total_users: "1000万",
            growth_rate: "8%",
            retention_rate: "75%",
            user_demographics: {
                age_range: "18-45岁为主，内容消费者",
                gender_ratio: "55% 男性，45% 女性",
                region: "全球覆盖，美国、欧洲为主",
                income_level: "中高收入内容消费者为主"
            },
            usage_patterns: {
                avg_session_duration: "20分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "1%",
                engagement_rate: "70%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "平台抽成",
                    percentage: 100,
                    description: "5-12%订阅抽成"
                }
            ],
            monetization_strategy: "平台抽成模式",
            financial_metrics: {
                annual_revenue: "约3亿美元 (2023)",
                revenue_growth: "15% YoY",
                profitability: "接近盈亏平衡",
                valuation: "约40亿美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Substack", similarity: 80, position: "创作者订阅直接竞品" },
                { name: "Ko-fi", similarity: 70, position: "创作者支持间接竞品" },
                { name: "OnlyFans", similarity: 60, position: "订阅平台间接竞品" }
            ],
            market_position: "创作者订阅平台领导者",
            market_share: "创作者订阅市场40%+",
            competitive_advantages: [
                "按月订阅模式稳定收入",
                "会员等级系统灵活",
                "创作者友好定位",
                "绕过平台算法，直接连接"
            ],
            competitive_disadvantages: [
                "平台抽成被质疑",
                "面临Substack等竞品竞争",
                "用户增长放缓",
                "创作者寻找替代方案"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "200万",
                mau: "800万",
                engagement_rate: "70%",
                retention_7d: "75%",
                retention_30d: "60%"
            },
            content_metrics: {
                daily_subscriptions: "50万次订阅",
                avg_support: "10美元/月",
                creator_count: "25万创作者",
                patron_count: "800万支持者"
            },
            business_metrics: {
                arpu: "约38美元/年",
                ltv: "约200美元",
                cac: "约50美元",
                conversion_rate: "订阅转化率5%"
            }
        },
        success_factors: [
            "按月订阅模式稳定创作者收入",
            "会员等级系统提供差异化价值",
            "绕过平台算法，直接连接",
            "创作者友好定位",
            "支持多种内容类型",
            "但平台抽成被质疑",
            "面临Substack等竞品竞争"
        ]
    },
    
    // === 继续扩展：知识社区 ===
    medium: {
        title: "Medium", 
        subtitle: "深度阅读的写作平台",
        dao: "思想表达与影响力。帮助作者建立个人品牌。", 
        gov: "编辑推荐 + 算法。既有编辑精选，也有算法推荐。", 
        space: "数字杂志。强调阅读体验，无广告干扰。", 
        econ: "会员订阅制。付费阅读优质内容。",
        risk: "内容质量下降，作者流失到Substack等平台。",
        atomic_unit: "长文章",
        distribution: "算法推荐 70% + 关注 20% + 编辑 10%",
        death_risk: "被Substack等去中心化平台替代",
        tags: ["#写作", "#阅读", "#深度", "#长文章", "#会员", "#无广告"],
        scores: [40, 70, 60, 50, 60],
        timeline: [
            { year: "2012", event: "Medium由Twitter联合创始人Evan Williams创立，专注深度阅读和写作平台" },
            { year: "2013", event: "推出编辑精选功能，建立高质量内容标准，吸引知名作者" },
            { year: "2015", event: "用户数突破2500万，成为重要的内容发布平台" },
            { year: "2017", event: "推出会员订阅制（Medium Membership），让读者为内容付费，作者获得分成" },
            { year: "2018", event: "调整算法推荐，从编辑推荐转向算法推荐，引发作者不满" },
            { year: "2019", event: "推出Partner Program，允许作者通过会员阅读获得收入" },
            { year: "2020", event: "疫情期间用户激增，但作者流失到Substack等平台" },
            { year: "2021", event: "大规模裁员，调整商业模式，承认商业化困难" },
            { year: "2022", event: "推出Medium for Teams，进入企业市场，探索B2B商业模式" },
            { year: "2023", event: "推出AI写作工具，帮助作者提升写作效率，但引发原创性担忧" },
            { year: "2024", event: "继续调整策略，但面临Substack等去中心化平台的激烈竞争" }
        ],
        key_decisions: [
            "无广告设计，专注阅读体验，建立\"数字杂志\"定位，与广告驱动的平台形成差异化",
            "会员订阅制创新，让读者为内容付费，作者获得分成，建立可持续的内容经济模式",
            "编辑推荐+算法推荐混合模式，既有编辑精选保证质量，也有算法推荐提升发现",
            "但抽成过高（作者分成比例不透明），导致作者流失到Substack等去中心化平台",
            "算法推荐占比提升，从编辑推荐转向算法推荐，最大化用户停留时间，但牺牲了内容质量",
            "Partner Program设计，允许作者通过会员阅读获得收入，但分成机制不透明引发争议",
            "Medium for Teams B2B模式，进入企业市场，但需要平衡B2B和B2C定位",
            "AI写作工具集成，帮助作者提升效率，但可能降低内容原创性和质量",
            "面对Substack等竞品竞争，需要重新思考平台价值和作者关系，避免进一步流失"
        ]
    },
    quora: {
        title: "Quora", 
        subtitle: "问答社区的英文版知乎",
        dao: "知识权威与影响力。通过回答问题建立专业声誉。", 
        gov: "社区自治 + 算法。Mod管理，算法推荐。", 
        space: "问答论坛。一人问，多人答。", 
        econ: "广告 + Quora+订阅。对用户免费。",
        risk: "内容质量下降，被Reddit、Stack Overflow分流。",
        atomic_unit: "问答 (Q&A)",
        distribution: "算法推荐 60% + 关注 30% + 搜索 10%",
        death_risk: "内容农场化，失去核心价值",
        tags: ["#问答", "#知识", "#英文", "#实名", "#权威", "#专业"],
        scores: [30, 70, 50, 60, 50],
        timeline: [
            { year: "2009", event: "Quora由Facebook前员工Adam D'Angelo和Charlie Cheever创立，专注高质量问答社区" },
            { year: "2010", event: "早期邀请制，吸引硅谷精英和专业人士，建立高质量社区" },
            { year: "2012", event: "开放注册，用户快速增长，但内容质量开始下降" },
            { year: "2014", event: "推出Quora Spaces，允许用户创建主题社区，扩展内容类型" },
            { year: "2017", event: "完成D轮融资，估值18亿美元，成为问答社区领域的领导者" },
            { year: "2018", event: "推出Quora Ads，开始商业化，但广告质量引发用户不满" },
            { year: "2020", event: "用户数突破3亿，但内容质量持续下降，被Reddit、Stack Overflow分流" },
            { year: "2021", event: "推出Quora+付费订阅，允许作者设置付费内容，探索新的变现方式" },
            { year: "2022", event: "推出Quora AI，利用AI生成答案，但引发内容质量担忧" },
            { year: "2023", event: "推出AI问答功能（Poe），整合多个AI模型，但可能进一步降低内容质量" },
            { year: "2024", event: "继续调整策略，但面临内容农场化和用户流失的挑战" }
        ],
        key_decisions: [
            "早期邀请制策略，吸引硅谷精英和专业人士，建立高质量社区，但开放注册后质量下降",
            "实名制要求，提高回答可信度，建立知识权威定位，但可能限制用户表达",
            "算法推荐平衡质量与热度，但商业化压力导致算法偏向热门内容，牺牲质量",
            "Quora Spaces功能扩展，允许用户创建主题社区，但可能稀释核心问答定位",
            "Quora+付费订阅模式，允许作者设置付费内容，但可能进一步降低内容可及性",
            "AI问答功能（Poe）集成，整合多个AI模型，但可能替代人类回答，降低社区价值",
            "广告商业化策略，但广告质量引发用户不满，影响阅读体验",
            "面对Reddit、Stack Overflow等竞品竞争，需要重新思考内容质量和社区价值",
            "内容农场化趋势，算法推荐偏向热门内容，导致深度专业内容被边缘化"
        ]
    },
    
    // === 继续扩展：垂直社交 ===
    linkedin: {
        title: "LinkedIn", 
        subtitle: "职业社交网络",
        dao: "职业身份与网络价值。建立职业关系网。", 
        gov: "平台规则 + 企业账号。严格的职业行为准则。", 
        space: "职业广场。公开展示，专业形象。", 
        econ: "招聘服务 + 会员订阅。B端和C端双轮驱动。",
        risk: "内容越来越像Facebook，失去专业性。",
        atomic_unit: "动态 / 文章 / 职位",
        distribution: "算法推荐 70% + 关注 20% + 搜索 10%",
        death_risk: "失去专业性，被其他平台替代",
        tags: ["#职业", "#招聘", "#B2B"],
        scores: [60, 70, 75, 60, 85],
        timeline: [
            { year: "2003", event: "LinkedIn上线，由Reid Hoffman创立，专注职业社交网络" },
            { year: "2006", event: "推出招聘服务（LinkedIn Recruiter），进入B2B市场" },
            { year: "2010", event: "用户突破1亿，成为全球最大的职业社交网络" },
            { year: "2011", event: "IPO上市，市值80亿美元" },
            { year: "2012", event: "推出内容平台（LinkedIn Publishing），允许用户发布文章" },
            { year: "2016", event: "被Microsoft以262亿美元收购，集成Office 365生态" },
            { year: "2019", event: "推出学习平台（LinkedIn Learning），提供在线课程" },
            { year: "2020", event: "疫情期间用户激增，远程工作推动职业社交需求" },
            { year: "2023", event: "推出AI功能（LinkedIn AI），优化推荐和内容生成，提升用户体验" }
        ],
        key_decisions: [
            "职业身份定位，要求实名和真实职业信息，建立专业可信的社交网络",
            "连接度（Connections）系统，区分一级、二级、三级关系，量化职业网络价值",
            "内容策略从职业信息扩展到职业内容（文章、动态），增加用户粘性",
            "招聘业务为核心商业模式，通过职位发布和人才搜索变现",
            "会员订阅模式（Premium），为求职者和招聘者提供增值服务",
            "被Microsoft收购后，集成Office 365等企业服务，强化B2B定位"
        ],
        user_metrics: {
            monthly_active_users: "9.5亿",
            daily_active_users: "6000万",
            total_users: "10亿",
            growth_rate: "8%",
            retention_rate: "70%",
            user_demographics: {
                age_range: "25-55岁为主，职场人士",
                gender_ratio: "50% 男性，50% 女性",
                region: "全球覆盖，美国、印度、中国为主",
                income_level: "中高收入职场人士为主"
            },
            usage_patterns: {
                avg_session_duration: "17分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "3%",
                engagement_rate: "65%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "招聘服务",
                    percentage: 60,
                    description: "LinkedIn Recruiter、职位发布、人才搜索"
                },
                {
                    type: "会员订阅",
                    percentage: 30,
                    description: "Premium会员、Sales Navigator"
                },
                {
                    type: "广告收入",
                    percentage: 10,
                    description: "信息流广告、品牌广告"
                }
            ],
            monetization_strategy: "招聘+B2B服务的B2B主导模式",
            financial_metrics: {
                annual_revenue: "约150亿美元 (2023)",
                revenue_growth: "10% YoY",
                profitability: "盈利",
                valuation: "约500亿美元（Microsoft核心资产）"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Indeed", similarity: 60, position: "招聘平台间接竞品" },
                { name: "Glassdoor", similarity: 50, position: "职业信息间接竞品" },
                { name: "脉脉", similarity: 40, position: "中国职业社交间接竞品" }
            ],
            market_position: "全球最大的职业社交网络",
            market_share: "职业社交市场80%+",
            competitive_advantages: [
                "职业身份定位，专业可信",
                "招聘业务成熟，B2B价值高",
                "Microsoft资源支持，Office 365集成",
                "用户规模大，网络效应强"
            ],
            competitive_disadvantages: [
                "内容越来越像Facebook",
                "失去专业性",
                "算法推荐引发用户不满",
                "年轻用户增长受限"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "6000万",
                mau: "9.5亿",
                engagement_rate: "65%",
                retention_7d: "70%",
                retention_30d: "55%"
            },
            content_metrics: {
                daily_posts: "200万条内容",
                avg_views: "17分钟/天",
                like_rate: "2%",
                comment_rate: "1%"
            },
            business_metrics: {
                arpu: "约16美元/年",
                ltv: "约200美元",
                cac: "约30美元",
                conversion_rate: "Premium转化率5%"
            }
        },
        success_factors: [
            "职业身份定位，建立专业可信网络",
            "招聘业务为核心商业模式",
            "Microsoft资源支持，Office 365集成",
            "会员订阅模式提供增值服务",
            "用户规模大，网络效应强",
            "但内容越来越像Facebook，失去专业性"
        ]
    },
    clubhouse: {
        title: "Clubhouse", 
        subtitle: "音频社交的短暂辉煌",
        dao: "实时对话与身份认同。语音比文字更真实。", 
        gov: "房间创建者自治。平台几乎不干预。", 
        space: "虚拟客厅。即来即走，低压力。", 
        econ: "Creator First计划。但商业模式不清晰。",
        risk: "热度快速消退，用户流失。",
        atomic_unit: "语音房间",
        distribution: "关注流 + 推荐算法",
        death_risk: "被Twitter Spaces、Discord等替代",
        tags: ["#音频", "#实时", "#邀请制"],
        scores: [70, 50, 40, 30, 20],
        timeline: [
            { year: "2020", event: "Clubhouse上线，由Paul Davison和Rohan Seth创立，专注音频社交，采用邀请制" },
            { year: "2020", event: "Elon Musk等名人使用，引发关注，用户快速增长" },
            { year: "2021", event: "疫情期间爆火，估值40亿美元，成为现象级产品" },
            { year: "2021", event: "推出Creator First计划，支持创作者变现" },
            { year: "2022", event: "开放注册，但用户增长放缓，活跃度下降" },
            { year: "2022", event: "Twitter Spaces、Discord Stage等竞品推出，竞争加剧" },
            { year: "2023", event: "大规模裁员，用户流失严重，估值大幅下降" },
            { year: "2024", event: "转型困难，尝试视频功能等新方向，但效果不佳" }
        ],
        key_decisions: [
            "早期邀请制创造稀缺性和身份感，让早期用户感到\"特权\"，建立FOMO（错失恐惧）",
            "纯音频设计，降低参与门槛，让用户更轻松地参与对话，建立独特的音频社交体验",
            "实时对话模式，即来即走，低压力，与传统的视频会议和文字聊天形成差异化",
            "但开放注册后失去独特性，FOMO消失，用户增长放缓",
            "缺乏明确的商业模式和用户留存机制，Creator First计划效果有限",
            "内容发现机制不足，用户难以找到感兴趣的房间，导致活跃度下降",
            "被Twitter Spaces等大平台快速模仿，失去先发优势，难以建立竞争壁垒"
        ],
        failure_lessons: [
            "热度不能持久，需要建立长期价值",
            "邀请制是双刃剑，开放后可能失去核心用户",
            "需要明确的商业模式，不能只靠融资",
            "音频社交需要更强的网络效应"
        ],
        user_metrics: {
            monthly_active_users: "500万",
            daily_active_users: "50万",
            total_users: "1000万",
            growth_rate: "-30%",
            retention_rate: "20%",
            user_demographics: {
                age_range: "25-45岁为主，知识工作者",
                gender_ratio: "60% 男性，40% 女性",
                region: "美国为主，全球覆盖",
                income_level: "中高收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "30分钟/天",
                sessions_per_day: "1次",
                content_creation_rate: "1%",
                engagement_rate: "20%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "其他服务",
                    percentage: 100,
                    description: "Creator First计划等，商业模式不清晰"
                }
            ],
            monetization_strategy: "商业模式不清晰，主要依靠融资",
            financial_metrics: {
                annual_revenue: "约500万美元 (2023)",
                revenue_growth: "-50% YoY",
                profitability: "严重亏损",
                valuation: "约5亿美元（大幅下降）"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Twitter Spaces", similarity: 85, position: "音频社交直接竞品" },
                { name: "Discord Stage", similarity: 80, position: "音频社交直接竞品" },
                { name: "Zoom", similarity: 50, position: "视频会议间接竞品" }
            ],
            market_position: "音频社交细分市场，但用户流失严重",
            market_share: "音频社交市场5%",
            competitive_advantages: [
                "早期邀请制建立FOMO",
                "纯音频设计降低门槛",
                "实时对话模式独特"
            ],
            competitive_disadvantages: [
                "商业模式不清晰",
                "用户留存机制不足",
                "被大平台快速模仿",
                "用户流失严重"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "50万",
                mau: "500万",
                engagement_rate: "20%",
                retention_7d: "20%",
                retention_30d: "10%"
            },
            content_metrics: {
                daily_rooms: "5万个房间",
                avg_listen_time: "30分钟/天",
                room_creation_rate: "1%",
                participation_rate: "5%"
            },
            business_metrics: {
                arpu: "约0.5美元/年",
                ltv: "约2美元",
                cac: "约10美元",
                conversion_rate: "付费转化率0.1%"
            }
        },
        success_factors: [
            "早期邀请制建立FOMO",
            "纯音频设计降低门槛",
            "实时对话模式独特",
            "但开放注册后失去独特性",
            "商业模式不清晰",
            "被大平台快速模仿",
            "用户流失严重"
        ]
    },
    
    // === 继续扩展：Web3社交 ===
    nostr: {
        title: "Nostr", 
        subtitle: "去中心化的社交协议",
        dao: "抗审查与自由表达。协议层去中心化。", 
        gov: "无中心化治理。协议简单，客户端多样。", 
        space: "开放协议。任何人都可以构建客户端。", 
        econ: "比特币打赏。Lightning Network微支付。",
        risk: "技术门槛高，早期只是极客工具。",
        atomic_unit: "Note (类似推文)",
        distribution: "关注流 + 中继服务器",
        death_risk: "无法跨越鸿沟，停留在极客圈",
        tags: ["#Web3", "#去中心化", "#抗审查", "#比特币", "#Lightning", "#极简协议"],
        scores: [40, 50, 10, 5, 15],
        timeline: [
            { year: "2020", event: "Nostr协议由Fiatjaf提出，设计极简的社交协议（Notes and Other Stuff Transmitted by Relays）" },
            { year: "2021", event: "协议规范发布，基于密钥对和加密签名，实现真正的去中心化" },
            { year: "2022", event: "Twitter被Elon Musk收购后，用户对中心化平台的担忧增加，Nostr用户激增" },
            { year: "2023", event: "Damus客户端在iOS App Store上线，获得Jack Dorsey支持，引发关注" },
            { year: "2023", event: "生态客户端爆发，Amethyst、Snort、Coracle等多样化客户端上线" },
            { year: "2023", event: "Zap（Lightning Network打赏）功能集成，实现原生微支付能力" },
            { year: "2024", event: "中继服务器生态发展，出现付费中继和去中心化中继网络" },
            { year: "2024", event: "与Farcaster、Lens Protocol等协议竞争，但保持极简协议优势" }
        ],
        key_decisions: [
            "极简协议设计（JSON + 加密签名），易于实现和理解，降低开发门槛，任何开发者都可以构建客户端",
            "中继服务器（Relay）模式，去中心化存储和传输，用户可以自由选择或运行中继服务器，实现真正的去中心化",
            "基于密钥对的身份系统，用户拥有完整的身份控制权，无需依赖任何中心化服务",
            "比特币和Lightning Network集成，原生支付能力（Zap打赏），实现社交+支付的组合",
            "无中心化治理，协议简单稳定，不依赖任何组织或DAO，避免治理争议",
            "客户端多样性策略，鼓励开发者构建不同功能和体验的客户端，但需要统一协议规范",
            "抗审查设计，中继服务器无法审查内容，用户可以通过切换中继服务器绕过审查",
            "面对技术门槛高的挑战，需要简化用户操作（密钥管理），让普通用户也能使用"
        ]
    },
    bluesky: {
        title: "Bluesky", 
        subtitle: "去中心化的Twitter替代品",
        dao: "数据主权与开放协议。AT协议让用户可迁移。", 
        gov: "联邦制。服务器自治，但遵循协议。", 
        space: "开放社交网络。类似Twitter但去中心化。", 
        econ: "早期免费，商业模式待定。",
        risk: "用户增长缓慢，难以与Twitter竞争。",
        atomic_unit: "Skeet (类似推文)",
        distribution: "关注流 + 算法推荐",
        death_risk: "无法获得足够用户，成为小众产品",
        tags: ["#去中心化", "#Twitter替代", "#AT协议", "#联邦制", "#数据主权", "#开放协议"],
        scores: [50, 60, 30, 20, 30],
        timeline: [
            { year: "2019", event: "Twitter CEO Jack Dorsey宣布资助Bluesky项目，探索去中心化社交协议" },
            { year: "2021", event: "Bluesky独立运营，由Jay Graber领导，开始开发AT协议（Authenticated Transfer Protocol）" },
            { year: "2022", event: "AT协议规范发布，支持账户可移植性和联邦制架构" },
            { year: "2023", event: "Bluesky应用Beta版上线，采用邀请制，用户快速增长，成为Twitter的重要替代品" },
            { year: "2023", event: "开放注册，用户数突破百万，日活快速增长，引发广泛关注" },
            { year: "2024", event: "推出联邦制功能，允许用户运行自己的服务器（PDS），实现真正的去中心化" },
            { year: "2024", event: "推出自定义算法（Custom Feeds），允许用户选择不同的内容排序算法" },
            { year: "2024", event: "与Twitter/X竞争加剧，但用户增长放缓，需要建立更强的网络效应" }
        ],
        key_decisions: [
            "AT协议（Authenticated Transfer Protocol）设计，实现真正的去中心化和账户可移植性，用户可以在不同服务器间迁移",
            "早期邀请制策略，控制增长节奏，建立早期社区，但可能限制用户规模",
            "类似Twitter的体验设计，降低用户迁移成本，让Twitter用户能够无缝切换",
            "联邦制架构，允许用户运行自己的服务器（PDS），实现真正的数据主权和去中心化",
            "自定义算法功能，允许用户选择不同的内容排序算法，打破单一算法垄断",
            "开源协议和客户端，建立开发者生态，鼓励第三方应用开发",
            "但需要建立网络效应才能成功，早期用户基数不足可能导致活跃度下降",
            "商业模式待定，早期免费但需要找到可持续的变现方式"
        ]
    },
    
    // === 继续扩展：其他有趣案例 ===
    tumblr: {
        title: "Tumblr", 
        subtitle: "博客与亚文化的混合体",
        dao: "自我表达与亚文化认同。匿名性鼓励真实表达。", 
        gov: "平台规则 + 用户自治。相对宽松的内容政策。", 
        space: "个人博客 + 社区。既私密又公开。", 
        econ: "广告 + 订阅。但商业化困难。",
        risk: "被Yahoo收购后衰落，用户流失。",
        atomic_unit: "帖子 (Post) / Reblog",
        distribution: "关注流 70% + 探索 30%",
        death_risk: "用户流失，平台关闭",
        tags: ["#博客", "#亚文化", "#匿名", "#Reblog", "#自我表达", "#失败案例"],
        scores: [70, 60, 50, 40, 30],
        timeline: [
            { year: "2007", event: "Tumblr由David Karp创立，专注微博客平台，支持文字、图片、视频等多种内容类型" },
            { year: "2008", event: "推出Reblog功能，允许用户转发和分享内容，创造病毒式传播机制" },
            { year: "2010", event: "用户数突破1000万，成为年轻人和亚文化群体的重要平台" },
            { year: "2012", event: "用户数突破5000万，成为重要的内容发布平台，但商业化困难" },
            { year: "2013", event: "被Yahoo以11亿美元收购，引发用户担忧，担心失去产品独立性" },
            { year: "2014", event: "Yahoo整合失败，Tumblr用户增长放缓，产品创新停滞" },
            { year: "2016", event: "Yahoo承认Tumblr收购失败，用户数下降，估值大幅缩水" },
            { year: "2017", event: "被Verizon收购（通过收购Yahoo），但产品继续衰落" },
            { year: "2018", event: "禁止成人内容，用户大量流失，核心用户群体离开平台" },
            { year: "2019", event: "被WordPress母公司Automattic收购，价格仅300万美元，从11亿美元暴跌" },
            { year: "2020", event: "Automattic尝试恢复平台，但用户流失严重，难以重建社区" },
            { year: "2024", event: "平台继续运营，但用户活跃度大幅下降，成为失败收购的典型案例" }
        ],
        key_decisions: [
            "Reblog功能创新，允许用户转发和分享内容，创造病毒式传播机制，建立独特的社区文化",
            "匿名性设计，鼓励真实表达，吸引年轻人和亚文化群体，建立独特的社区定位",
            "多内容类型支持（文字、图片、视频、音频），降低创作门槛，满足不同用户需求",
            "但被Yahoo收购后失去独立性，产品创新停滞，用户增长放缓",
            "禁止成人内容决策，虽然符合监管要求，但导致核心用户群体大量流失",
            "商业化困难，广告模式效果不佳，订阅模式用户接受度低，难以建立可持续的商业模式",
            "被多次收购，从Yahoo到Verizon再到Automattic，产品定位混乱，用户信任度下降",
            "核心功能（Reblog、匿名性）是平台价值，但被收购后未能有效保护和创新",
            "需要理解用户的核心价值主张（自我表达、亚文化认同），不能轻易改变"
        ],
        failure_lessons: [
            "被大公司收购可能失去产品独立性，需要保持产品创新和用户价值",
            "核心功能不能轻易改变，Reblog和匿名性是Tumblr的核心价值",
            "需要理解用户的核心价值主张，亚文化群体是Tumblr的核心用户",
            "商业化不能以牺牲用户体验为代价，禁止成人内容导致核心用户流失",
            "产品定位要清晰，多次收购导致定位混乱，用户信任度下降",
            "社区文化需要时间培养，但被收购后未能有效保护和延续",
            "平台价值在于社区和内容，而非技术，需要重视社区运营"
        ]
    },
    pinterest: {
        title: "Pinterest", 
        subtitle: "视觉灵感的收藏夹",
        dao: "收藏欲与灵感发现。帮助用户发现和保存灵感。", 
        gov: "算法推荐 + 用户组织。Pinterest推荐，用户Pin组织。", 
        space: "数字剪贴板。视觉优先，图片为主。", 
        econ: "广告 + 电商导流。离消费决策近。",
        risk: "用户增长放缓，被Instagram等竞品分流。",
        atomic_unit: "Pin (图片) / Board (收藏夹)",
        distribution: "算法推荐 80% + 关注 20%",
        death_risk: "被Instagram、TikTok等视觉平台替代",
        tags: ["#视觉", "#收藏", "#灵感"],
        scores: [50, 75, 70, 80, 70],
        timeline: [
            { year: "2010", event: "Pinterest由Ben Silbermann、Paul Sciarra和Evan Sharp创立" },
            { year: "2012", event: "用户突破1000万，女性用户占比超过80%" },
            { year: "2013", event: "推出Promoted Pins，开始商业化" },
            { year: "2015", event: "推出Buyable Pins，进入电商领域" },
            { year: "2019", event: "IPO上市，估值超过100亿美元" },
            { year: "2020", event: "推出Story Pins，尝试短视频内容" },
            { year: "2021", event: "用户增长放缓，活跃度下降" },
            { year: "2023", event: "强化购物功能，推出Idea Pins增强创作者工具" }
        ],
        key_decisions: [
            "Board系统设计，让用户组织和分类收藏，建立独特的\"虚拟剪贴板\"体验",
            "专注视觉发现，与Google的文本搜索形成差异化",
            "女性用户为主，专注生活方式、家居、时尚等垂直领域",
            "Buyable Pins电商功能，从灵感收集到购物转化，缩短消费决策路径",
            "算法推荐优化，平衡发现新内容和用户关注的内容",
            "与Instagram竞争，但用户使用场景不同（计划vs分享），保持差异化定位"
        ],
        user_metrics: {
            monthly_active_users: "4.5亿",
            daily_active_users: "2亿",
            total_users: "5亿",
            growth_rate: "2%",
            retention_rate: "75%",
            user_demographics: {
                age_range: "25-54岁为主",
                gender_ratio: "70% 女性，30% 男性",
                region: "全球覆盖，美国为主",
                income_level: "中高收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "14分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "4%",
                engagement_rate: "70%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告收入",
                    percentage: 85,
                    description: "Promoted Pins、品牌广告"
                },
                {
                    type: "电商佣金",
                    percentage: 15,
                    description: "Buyable Pins、商品销售分成"
                }
            ],
            monetization_strategy: "广告+电商的视觉购物模式",
            financial_metrics: {
                annual_revenue: "约30亿美元 (2023)",
                revenue_growth: "5% YoY",
                profitability: "盈利",
                valuation: "约200亿美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Instagram", similarity: 70, position: "视觉社交直接竞品" },
                { name: "TikTok", similarity: 50, position: "短视频平台间接竞品" },
                { name: "Google Images", similarity: 40, position: "视觉搜索间接竞品" }
            ],
            market_position: "视觉灵感平台领导者",
            market_share: "视觉灵感市场60%+",
            competitive_advantages: [
                "Board系统独特，组织收藏",
                "视觉发现算法强",
                "离消费决策近，电商价值高",
                "女性用户为主，消费能力强"
            ],
            competitive_disadvantages: [
                "用户增长放缓",
                "被Instagram等竞品分流",
                "电商转化率有待提升",
                "内容类型相对单一"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "2亿",
                mau: "4.5亿",
                engagement_rate: "70%",
                retention_7d: "75%",
                retention_30d: "60%"
            },
            content_metrics: {
                daily_pins: "2亿个Pin",
                avg_views: "14分钟/天",
                save_rate: "3%",
                click_rate: "1%"
            },
            business_metrics: {
                arpu: "约7美元/年",
                ltv: "约80美元",
                cac: "约15美元",
                conversion_rate: "电商转化率2%"
            }
        },
        success_factors: [
            "Board系统独特，组织收藏",
            "视觉发现算法强",
            "Buyable Pins缩短消费决策路径",
            "女性用户为主，消费能力强",
            "算法推荐平衡发现和关注",
            "但与Instagram竞争，增长放缓"
        ]
    },
    
    // === 最终扩展：补充重要案例 ===
    instagram: {
        title: "Instagram", 
        subtitle: "视觉社交的先行者",
        dao: "审美表达与身份展示。图片是社交货币。", 
        gov: "算法推荐 + 编辑精选。Facebook收购后算法化。", 
        space: "画廊。公开展示，视觉优先。", 
        econ: "广告 + 电商。离消费决策近。",
        risk: "算法化导致内容同质化，创作者流失到TikTok。",
        atomic_unit: "图片 / Reels短视频",
        distribution: "算法分发 70% + 关注 30%",
        death_risk: "被TikTok等短视频平台替代",
        tags: ["#视觉", "#图片", "#社交"],
        scores: [50, 80, 75, 70, 85],
        timeline: [
            { year: "2010", event: "Instagram由Kevin Systrom和Mike Krieger创立，专注图片分享" },
            { year: "2011", event: "滤镜系统上线，让普通用户也能拍出专业级照片，快速走红" },
            { year: "2012", event: "被Facebook收购，10亿美元，用户突破1亿" },
            { year: "2013", event: "推出视频功能，从纯图片平台向多媒体平台转型" },
            { year: "2016", event: "推出Stories功能，借鉴Snapchat的阅后即焚模式，成功应对竞争" },
            { year: "2018", event: "IGTV上线，专注长视频内容，但反响不佳" },
            { year: "2020", event: "推出Reels短视频功能，对抗TikTok，算法推荐占比提升" },
            { year: "2021", event: "推出购物功能，强化电商闭环，从内容到购物转化" },
            { year: "2023", event: "算法推荐占比进一步提升，用户不满，创作者流失到TikTok" }
        ],
        key_decisions: [
            "图片优先设计，最初只支持方形图片，降低创作门槛，强调视觉美感，建立独特的视觉社交定位",
            "滤镜系统创新，让普通用户也能拍出专业级照片，降低内容创作门槛，这是Instagram早期成功的关键",
            "被Facebook收购后，引入算法推荐，从时间序转向算法分发，最大化用户停留时间，但牺牲了用户体验",
            "推出Stories功能，借鉴Snapchat的阅后即焚模式，成功应对竞争，这是\"快速模仿\"策略的成功案例",
            "推出Reels短视频功能，对抗TikTok，但内容质量不如TikTok，创作者激励不足",
            "电商功能集成，从内容种草到购物转化，缩短消费决策路径，但商业化可能稀释内容质量"
        ],
        user_metrics: {
            monthly_active_users: "20亿",
            daily_active_users: "15亿",
            total_users: "25亿",
            growth_rate: "3%",
            retention_rate: "85%",
            user_demographics: {
                age_range: "18-34岁为主，年轻用户",
                gender_ratio: "52% 女性，48% 男性",
                region: "全球覆盖，美国、印度、巴西为主",
                income_level: "中高收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "30分钟/天",
                sessions_per_day: "8次",
                content_creation_rate: "8%",
                engagement_rate: "75%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告收入",
                    percentage: 90,
                    description: "信息流广告、Stories广告、Reels广告"
                },
                {
                    type: "电商佣金",
                    percentage: 10,
                    description: "购物功能、商品销售分成"
                }
            ],
            monetization_strategy: "广告为主的商业化模式",
            financial_metrics: {
                annual_revenue: "约500亿美元 (2023)",
                revenue_growth: "5% YoY",
                profitability: "盈利",
                valuation: "约1500亿美元（Meta核心资产）"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "TikTok", similarity: 75, position: "短视频平台直接竞品" },
                { name: "Snapchat", similarity: 60, position: "视觉社交间接竞品" },
                { name: "Pinterest", similarity: 50, position: "视觉灵感间接竞品" }
            ],
            market_position: "全球最大的视觉社交平台",
            market_share: "视觉社交市场70%+",
            competitive_advantages: [
                "用户规模巨大，网络效应强",
                "滤镜系统降低创作门槛",
                "Stories功能成功应对竞争",
                "Meta资源支持，广告系统成熟"
            ],
            competitive_disadvantages: [
                "算法化导致内容同质化",
                "创作者流失到TikTok",
                "Reels不如TikTok",
                "商业化可能稀释内容质量"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "15亿",
                mau: "20亿",
                engagement_rate: "75%",
                retention_7d: "85%",
                retention_30d: "75%"
            },
            content_metrics: {
                daily_posts: "5亿条内容",
                avg_views: "30分钟/天",
                like_rate: "5%",
                comment_rate: "2%"
            },
            business_metrics: {
                arpu: "约25美元/年",
                ltv: "约150美元",
                cac: "约20美元",
                conversion_rate: "电商转化率3%"
            }
        },
        success_factors: [
            "滤镜系统降低创作门槛",
            "图片优先设计，视觉美感",
            "被Facebook收购获得资源",
            "Stories功能成功应对竞争",
            "算法推荐提升用户停留时间",
            "电商功能缩短消费决策路径",
            "但算法化导致内容同质化",
            "创作者流失到TikTok"
        ]
    },
    snapchat: {
        title: "Snapchat", 
        subtitle: "阅后即焚的私密社交",
        dao: "真实表达与低压力。阅后即焚降低社交压力。", 
        gov: "平台规则 + AR创新。强调创新和年轻化。", 
        space: "私密对话 + 公开Stories。双重空间。", 
        econ: "广告 + AR滤镜。年轻用户价值高。",
        risk: "被Instagram Stories模仿，用户增长放缓。",
        atomic_unit: "Snap (消息) / Story",
        distribution: "关注流 100%",
        death_risk: "被Instagram等竞品替代",
        tags: ["#私密", "#年轻", "#AR"],
        scores: [80, 50, 60, 40, 70],
        timeline: [
            { year: "2011", event: "Snapchat由Evan Spiegel、Bobby Murphy和Reggie Brown创立，主打阅后即焚" },
            { year: "2013", event: "Stories功能上线，允许24小时内分享内容" },
            { year: "2015", event: "推出Discover功能，引入媒体内容" },
            { year: "2017", event: "IPO上市，估值240亿美元" },
            { year: "2017", event: "Instagram Stories上线，用户增长放缓" },
            { year: "2018", event: "界面改版引发用户强烈反弹，股价暴跌" },
            { year: "2020", event: "疫情期间用户增长加速，日活突破3亿" },
            { year: "2021", event: "推出Spotlight功能，对抗TikTok短视频" },
            { year: "2023", event: "AR业务扩展，推出AR购物功能" }
        ],
        key_decisions: [
            "阅后即焚设计，降低社交压力，鼓励真实表达，建立独特的私密社交定位",
            "Stories功能创新，24小时内容分享，但被Instagram快速模仿",
            "专注年轻用户（Z世代），与Facebook、Instagram形成差异化",
            "AR滤镜创新，成为平台核心竞争力，建立技术护城河",
            "界面改版失败，2018年改版导致用户强烈反弹，股价暴跌，需要吸取教训",
            "Discover功能引入媒体内容，但平衡不当可能稀释核心社交体验"
        ]
    },
    twitter: {
        title: "Twitter / X", 
        subtitle: "公共广场的实时信息流",
        dao: "实时性与公共性。140字限制降低表达门槛。", 
        gov: "平台规则 + 社区自治。规则执行不一致。", 
        space: "公共广场。完全公开，实时更新。", 
        econ: "广告 + 订阅。但商业化困难。",
        risk: "被Musk收购后政策变化，用户流失。",
        atomic_unit: "Tweet (推文)",
        distribution: "关注流 60% + 算法推荐 40%",
        death_risk: "被Bluesky、Mastodon等替代",
        tags: ["#实时", "#公开", "#短文本"],
        scores: [40, 90, 60, 50, 60],
        timeline: [
            { year: "2006", event: "Twitter上线，140字限制" },
            { year: "2013", event: "IPO，估值140亿美元" },
            { year: "2015", event: "推出Moments功能，编辑精选内容" },
            { year: "2016", event: "取消140字限制，扩展到280字" },
            { year: "2017", event: "推出视频直播功能Periscope" },
            { year: "2021", event: "推出Twitter Spaces音频聊天室" },
            { year: "2022", event: "被Elon Musk收购，440亿美元" },
            { year: "2023", event: "更名为X，推出付费认证（Twitter Blue/X Premium）" },
            { year: "2024", event: "用户流失加速，面临Bluesky等去中心化平台竞争" }
        ],
        key_decisions: [
            "140字限制设计，降低表达门槛，鼓励实时分享，形成独特的短文本文化",
            "公开默认设置，所有推文默认公开，建立\"公共广场\"定位",
            "时间序信息流，保持实时性，但后来引入算法推荐引发用户不满",
            "取消140字限制扩展到280字，平衡表达需求与平台定位",
            "被Musk收购后激进变革，包括付费认证、算法透明度等，但导致用户流失",
            "去中心化尝试（Bluesky），但执行混乱，未能有效应对竞争"
        ],
        user_metrics: {
            monthly_active_users: "5.5亿",
            daily_active_users: "2.5亿",
            total_users: "6亿",
            growth_rate: "-5%",
            retention_rate: "60%",
            user_demographics: {
                age_range: "18-49岁为主",
                gender_ratio: "55% 男性，45% 女性",
                region: "全球覆盖，美国为主",
                income_level: "中高收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "15分钟/天",
                sessions_per_day: "5次",
                content_creation_rate: "5%",
                engagement_rate: "55%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告收入",
                    percentage: 80,
                    description: "信息流广告、品牌广告"
                },
                {
                    type: "订阅服务",
                    percentage: 20,
                    description: "X Premium、Twitter Blue"
                }
            ],
            monetization_strategy: "广告+订阅的混合模式",
            financial_metrics: {
                annual_revenue: "约40亿美元 (2023)",
                revenue_growth: "-20% YoY",
                profitability: "亏损",
                valuation: "约200亿美元（收购后）"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Bluesky", similarity: 85, position: "去中心化直接竞品" },
                { name: "Threads", similarity: 80, position: "Meta推出的直接竞品" },
                { name: "Mastodon", similarity: 70, position: "联邦制间接竞品" }
            ],
            market_position: "短文本社交平台领导者，但用户流失",
            market_share: "短文本社交市场60%+",
            competitive_advantages: [
                "用户规模大，网络效应强",
                "实时性特点突出",
                "品牌认知度高",
                "媒体和KOL集中"
            ],
            competitive_disadvantages: [
                "被Musk收购后政策变化",
                "用户流失加速",
                "商业化困难",
                "面临去中心化平台竞争"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "2.5亿",
                mau: "5.5亿",
                engagement_rate: "55%",
                retention_7d: "60%",
                retention_30d: "45%"
            },
            content_metrics: {
                daily_tweets: "5亿条推文",
                avg_views: "15分钟/天",
                like_rate: "2%",
                retweet_rate: "1%"
            },
            business_metrics: {
                arpu: "约7美元/年",
                ltv: "约50美元",
                cac: "约10美元",
                conversion_rate: "Premium转化率1%"
            }
        },
        success_factors: [
            "140字限制降低表达门槛",
            "公开默认，建立公共广场定位",
            "实时性强，信息传播快",
            "媒体和KOL集中，影响力大",
            "但被收购后政策变化导致用户流失",
            "商业化困难，持续亏损"
        ]
    },
    substack: {
        title: "Substack", 
        subtitle: "去中心化的创作者经济",
        dao: "直接支持与内容价值。读者直接付费给作者。", 
        gov: "平台最小干预。作者拥有完全控制权。", 
        space: "个人邮箱。去中心化分发。", 
        econ: "平台抽成（10%）。作者获得大部分收入。",
        risk: "平台抽成过高，作者寻找替代方案。",
        atomic_unit: "Newsletter (邮件)",
        distribution: "邮件分发 100%",
        death_risk: "被其他去中心化平台替代",
        tags: ["#创作者", "#订阅", "#去中心化", "#Newsletter", "#邮件", "#直接支持"],
        scores: [60, 30, 40, 20, 65],
        timeline: [
            { year: "2017", event: "Substack由Chris Best、Hamish McKenzie和Jairaj Sethi创立，专注Newsletter订阅平台" },
            { year: "2018", event: "早期作者如Bill Bishop、Heather Cox Richardson等加入，建立高质量内容生态" },
            { year: "2019", event: "推出Substack Pro计划，为知名作者提供预付款，吸引头部创作者" },
            { year: "2020", event: "疫情期间用户激增，大量记者和作家从传统媒体转向Substack，用户数突破100万" },
            { year: "2021", event: "完成B轮融资，估值6.5亿美元，成为创作者经济的重要平台" },
            { year: "2021", event: "推出Substack Local，支持本地新闻，探索新闻业新模式" },
            { year: "2022", event: "推出音频功能（Substack Audio），支持播客内容，扩展内容类型" },
            { year: "2023", event: "推出Notes功能，尝试社交化，类似Twitter的短文本分享，引发争议" },
            { year: "2023", event: "面临Ghost、Beehiiv等竞品竞争，但保持市场领先地位" },
            { year: "2024", event: "继续扩展功能，但需要平衡核心Newsletter价值和社交化尝试" }
        ],
        key_decisions: [
            "去中心化模式设计，作者拥有完全控制权，包括订阅者列表和内容，降低平台依赖",
            "邮件分发机制，绕过平台算法，作者直接触达读者，建立稳定的读者关系",
            "10%平台抽成相对合理（相比Patreon的5-12%），作者获得大部分收入，建立创作者友好模式",
            "Substack Pro计划，为知名作者提供预付款，吸引头部创作者，建立高质量内容生态",
            "专注Newsletter垂直领域，不涉足其他内容类型，建立专业定位",
            "支持本地新闻（Substack Local），探索新闻业新模式，但面临传统媒体竞争",
            "推出Notes功能尝试社交化，但可能稀释核心Newsletter价值，引发创作者担忧",
            "音频功能扩展，支持播客内容，但需要平衡不同内容类型的定位",
            "面对竞品竞争，需要保持创作者友好和平台价值，避免过度商业化"
        ]
    },
    figma: {
        title: "Figma Community", 
        subtitle: "设计师的协作社区",
        dao: "协作与分享。设计文件即社交。", 
        gov: "平台规则 + 社区自治。Figma制定规则，社区自治。", 
        space: "设计工作室。公开协作，透明设计。", 
        econ: "订阅制 + 社区资源。B端变现为主。",
        risk: "被Adobe收购后，社区担忧。",
        atomic_unit: "设计文件 / 组件",
        distribution: "关注流 50% + 探索 50%",
        death_risk: "被Adobe收购后失去独立性",
        tags: ["#设计", "#协作", "#工具", "#云端", "#组件", "#设计师"],
        scores: [70, 50, 65, 45, 75],
        timeline: [
            { year: "2012", event: "Figma由Dylan Field和Evan Wallace创立，开始开发云端设计工具" },
            { year: "2016", event: "Figma正式上线，提供基于浏览器的云端设计工具，挑战Adobe XD和Sketch" },
            { year: "2017", event: "推出实时协作功能，允许多个设计师同时编辑同一文件，建立核心差异化" },
            { year: "2018", event: "推出Figma Plugins，允许第三方开发者扩展功能，建立生态系统" },
            { year: "2019", event: "Figma Community上线，允许设计师分享设计文件、组件和模板，建立设计资源库" },
            { year: "2020", event: "疫情期间远程工作推动用户增长，日活用户突破400万，成为设计师首选工具" },
            { year: "2021", event: "推出Figma for Education，进入教育市场，培养下一代设计师" },
            { year: "2022", event: "被Adobe以200亿美元收购，引发社区担忧，担心失去独立性和创新性" },
            { year: "2023", event: "Adobe承诺保持Figma独立运营，但社区仍担忧未来整合" },
            { year: "2023", event: "推出Figma AI功能，利用AI辅助设计，提升设计效率" },
            { year: "2024", event: "继续扩展功能，但面临Adobe生态整合压力，需要平衡独立性和资源支持" }
        ],
        key_decisions: [
            "云端协作设计，基于浏览器运行，无需安装软件，建立与Sketch、Adobe XD的差异化",
            "实时协作功能创新，允许多个设计师同时编辑同一文件，建立\"设计文件即社交\"的协作模式",
            "Figma Community功能，允许设计师分享设计文件、组件和模板，建立设计资源库和社区生态",
            "Plugins生态系统，允许第三方开发者扩展功能，建立开放平台，增强产品价值",
            "免费个人版策略，降低使用门槛，吸引个人设计师和小团队，通过企业版实现B端变现",
            "被Adobe收购获得资源支持，但失去独立性，需要平衡Adobe生态整合和产品创新",
            "AI功能集成，利用AI辅助设计，提升设计效率，但需要平衡AI辅助和设计师创造力",
            "教育市场策略，培养下一代设计师，建立用户基础，但需要平衡教育版和商业版功能",
            "面对Adobe生态整合压力，需要保持产品独立性和创新性，维护社区信任"
        ],
        user_metrics: {
            monthly_active_users: "400万",
            daily_active_users: "200万",
            total_users: "600万",
            growth_rate: "20%",
            retention_rate: "90%",
            user_demographics: {
                age_range: "25-40岁为主，设计师",
                gender_ratio: "45% 男性，55% 女性",
                region: "全球覆盖，美国、欧洲为主",
                income_level: "中高收入设计师为主"
            },
            usage_patterns: {
                avg_session_duration: "180分钟/天",
                sessions_per_day: "5次",
                content_creation_rate: "30%",
                engagement_rate: "85%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "企业订阅",
                    percentage: 95,
                    description: "企业版订阅收入"
                },
                {
                    type: "其他服务",
                    percentage: 5,
                    description: "社区资源、插件市场等"
                }
            ],
            monetization_strategy: "SaaS订阅制，B2B模式",
            financial_metrics: {
                annual_revenue: "约10亿美元 (2023)",
                revenue_growth: "30% YoY",
                profitability: "盈利",
                valuation: "约200亿美元（Adobe资产）"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Adobe XD", similarity: 90, position: "设计工具直接竞品" },
                { name: "Sketch", similarity: 85, position: "设计工具直接竞品" },
                { name: "Framer", similarity: 70, position: "设计工具间接竞品" }
            ],
            market_position: "云端设计工具领导者",
            market_share: "云端设计工具市场60%+",
            competitive_advantages: [
                "云端协作设计，无需安装",
                "实时协作功能创新",
                "Figma Community建立生态",
                "Plugins生态系统丰富"
            ],
            competitive_disadvantages: [
                "被Adobe收购后失去独立性",
                "面临Adobe生态整合压力",
                "社区担忧未来整合",
                "需要平衡独立性和资源支持"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "200万",
                mau: "400万",
                engagement_rate: "85%",
                retention_7d: "90%",
                retention_30d: "85%"
            },
            content_metrics: {
                daily_files: "1000万次编辑",
                avg_usage_time: "180分钟/天",
                plugin_usage: "60%",
                community_shares: "50万次/天"
            },
            business_metrics: {
                arpu: "约167美元/年",
                ltv: "约1500美元",
                cac: "约200美元",
                conversion_rate: "企业版转化率40%"
            }
        },
        success_factors: [
            "云端协作设计建立差异化",
            "实时协作功能创新",
            "Figma Community建立生态",
            "Plugins生态系统丰富",
            "免费个人版策略吸引用户",
            "但被Adobe收购后失去独立性",
            "面临Adobe生态整合压力"
        ]
    },
    strava: {
        title: "Strava", 
        subtitle: "运动者的社交网络",
        dao: "成就展示与竞争。运动数据是社交货币。", 
        gov: "平台规则 + 俱乐部自治。Strava制定规则，俱乐部自治。", 
        space: "运动场。公开数据，竞争排名。", 
        econ: "订阅制。免费版功能受限。",
        risk: "数据隐私问题，用户担忧。",
        atomic_unit: "运动记录 / 活动",
        distribution: "关注流 60% + 探索 40%",
        death_risk: "数据隐私问题导致用户流失",
        tags: ["#运动", "#数据", "#竞争", "#健身", "#跑步", "#骑行"],
        scores: [60, 60, 55, 40, 60],
        timeline: [
            { year: "2009", event: "Strava由Mark Gainey和Michael Horvath创立，专注运动追踪和社交网络" },
            { year: "2011", event: "推出Segment功能，允许用户创建和竞争特定路线，建立游戏化竞争机制" },
            { year: "2013", event: "推出Strava Premium订阅服务，提供高级分析和功能，开始商业化" },
            { year: "2014", event: "用户数突破100万，成为跑步和骑行社区的重要平台" },
            { year: "2016", event: "推出Strava Metro，向城市规划者提供匿名运动数据，探索B2B商业模式" },
            { year: "2018", event: "用户数突破4000万，成为全球最大的运动社交网络" },
            { year: "2020", event: "疫情期间用户激增，居家健身推动用户增长，日活用户大幅提升" },
            { year: "2021", event: "推出Strava Summit，重新设计订阅服务，提供更个性化的功能" },
            { year: "2022", event: "用户数突破1亿，但面临数据隐私问题，用户担忧位置数据泄露" },
            { year: "2023", event: "加强数据隐私保护，推出隐私区域功能，允许用户隐藏敏感位置" },
            { year: "2024", event: "继续扩展功能，但需要平衡数据开放性和用户隐私保护" }
        ],
        key_decisions: [
            "运动数据作为社交货币，通过分享运动记录建立身份认同和竞争机制",
            "Segment功能创新，允许用户创建和竞争特定路线，建立游戏化竞争机制，增强用户粘性",
            "排行榜和竞争机制，通过KOM（King of the Mountain）等称号激励用户，增加平台活跃度",
            "订阅制商业模式，免费版功能受限，Premium版提供高级分析，建立可持续的商业模式",
            "Strava Metro B2B模式，向城市规划者提供匿名运动数据，探索新的变现方式",
            "专注跑步和骑行垂直领域，建立专业壁垒，但可能限制用户规模",
            "数据隐私保护策略，推出隐私区域功能，但需要平衡数据开放性和用户隐私",
            "面对数据隐私问题，需要加强数据保护，维护用户信任，避免用户流失",
            "继续扩展功能，但需要保持核心运动追踪和社交定位，避免功能臃肿"
        ]
    },
    nextdoor: {
        title: "Nextdoor", 
        subtitle: "本地社区的数字化",
        dao: "邻里关系与安全感。地理位置是连接纽带。", 
        gov: "社区自治 + 平台规则。邻里自治，平台监管。", 
        space: "数字社区公告板。基于地理位置。", 
        econ: "广告 + 本地服务。本地商业价值高。",
        risk: "种族歧视和偏见内容，平台声誉受损。",
        atomic_unit: "帖子 / 本地信息",
        distribution: "时间序 + 地理位置",
        death_risk: "内容质量问题导致用户流失",
        tags: ["#本地", "#邻里", "#地理", "#社区", "#安全", "#本地服务"],
        scores: [70, 40, 50, 30, 50],
        timeline: [
            { year: "2011", event: "Nextdoor由Nirav Tolia、Prakash Janakiraman、David Wiesen和Sarah Leary创立，专注本地社区网络" },
            { year: "2012", event: "推出基于地理位置的社区功能，允许用户加入附近社区，建立邻里连接" },
            { year: "2015", event: "用户数突破10万社区，覆盖美国大部分地区，成为最大的本地社区网络" },
            { year: "2016", event: "推出本地广告功能，允许本地商家投放广告，开始商业化" },
            { year: "2018", event: "用户数突破2000万，但面临种族歧视和偏见内容问题" },
            { year: "2019", event: "IPO上市，估值43亿美元，成为本地社区网络的领导者" },
            { year: "2020", event: "疫情期间用户激增，邻里互助推动用户增长，日活用户大幅提升" },
            { year: "2021", event: "内容审核问题引发争议，种族歧视和偏见内容导致平台声誉受损" },
            { year: "2022", event: "推出内容审核工具和AI检测，加强内容管理，但效果有限" },
            { year: "2023", event: "加强内容审核，推出邻里审查机制，但需要平衡社区自治和内容质量" },
            { year: "2024", event: "继续扩展功能，但需要解决内容质量问题，避免用户流失" }
        ],
        key_decisions: [
            "基于地理位置建立社区，允许用户加入附近社区，建立邻里连接，形成独特的本地社交定位",
            "邻里自治模式设计，允许社区自主管理，但需要平台监管，平衡自治和内容质量",
            "本地广告价值高，允许本地商家投放广告，建立可持续的商业模式，但需要平衡广告和用户体验",
            "内容审核挑战，种族歧视和偏见内容导致平台声誉受损，需要加强内容管理",
            "邻里审查机制推出，允许用户报告不当内容，但可能被滥用，需要平衡社区自治和平台监管",
            "AI内容检测工具，利用AI识别不当内容，但准确性和偏见问题需要持续优化",
            "疫情期间用户激增，邻里互助推动用户增长，但需要将临时用户转化为长期活跃用户",
            "面对内容质量问题，需要建立更完善的内容审核机制，维护社区氛围和平台声誉",
            "继续扩展功能，但需要保持核心本地社区定位，避免功能臃肿"
        ]
    },
    roblox: {
        title: "Roblox", 
        subtitle: "游戏化的虚拟世界",
        dao: "创造与探索。用户既是玩家也是创造者。", 
        gov: "平台规则 + 游戏自治。Roblox制定规则，游戏内自治。", 
        space: "虚拟世界。无数个用户创造的游戏世界。", 
        econ: "虚拟货币（Robux）。平台抽成。",
        risk: "内容安全问题，儿童保护挑战。",
        atomic_unit: "游戏 / 虚拟物品",
        distribution: "算法推荐 70% + 搜索 30%",
        death_risk: "内容安全问题导致监管压力",
        tags: ["#游戏", "#UGC", "#虚拟", "#创造", "#儿童", "#元宇宙"],
        scores: [80, 70, 75, 80, 90],
        timeline: [
            { year: "2006", event: "Roblox由David Baszucki和Erik Cassel创立，专注UGC游戏平台，允许用户创造和分享游戏" },
            { year: "2007", event: "推出Robux虚拟货币系统，建立游戏内经济，允许创作者变现" },
            { year: "2012", event: "用户数突破500万，成为儿童和青少年重要的游戏平台" },
            { year: "2013", event: "移动端上线，iOS和Android版本发布，用户快速增长" },
            { year: "2015", event: "推出Developer Exchange（DevEx），允许创作者将Robux兑换为真实货币" },
            { year: "2017", event: "用户数突破6000万，日活用户突破1000万，成为现象级产品" },
            { year: "2019", event: "推出Roblox Education，进入教育市场，培养下一代开发者" },
            { year: "2020", event: "疫情期间用户激增，日活用户突破3000万，成为全球最大的UGC游戏平台" },
            { year: "2021", event: "IPO上市，估值450亿美元，成为游戏行业的重要里程碑" },
            { year: "2022", event: "用户数突破2亿，创作者数突破1000万，建立庞大的UGC生态" },
            { year: "2023", event: "内容安全问题引发关注，儿童保护挑战，面临监管压力" },
            { year: "2024", event: "加强内容审核，推出更严格的安全措施，但需要平衡开放性和安全性" }
        ],
        key_decisions: [
            "UGC模式创新，允许用户创造和分享游戏，建立\"创造者经济\"，用户既是玩家也是创造者",
            "Robux虚拟货币系统，建立游戏内经济，允许创作者通过游戏内购买变现，建立可持续的商业模式",
            "Developer Exchange（DevEx）功能，允许创作者将Robux兑换为真实货币，激励内容创作",
            "专注儿童和青少年市场，建立\"安全\"的游戏环境，但内容安全是持续挑战",
            "移动端优先策略，iOS和Android版本发布，抓住移动游戏红利，用户快速增长",
            "Roblox Education进入教育市场，培养下一代开发者，建立用户基础，但需要平衡教育和娱乐",
            "算法推荐系统，平衡发现新游戏和用户兴趣，但需要避免推荐不当内容",
            "内容安全挑战，儿童保护是核心问题，需要建立更严格的内容审核机制",
            "面对监管压力，需要平衡开放性和安全性，维护平台价值和用户信任"
        ],
        user_metrics: {
            monthly_active_users: "2.4亿",
            daily_active_users: "7000万",
            total_users: "3亿",
            growth_rate: "15%",
            retention_rate: "85%",
            user_demographics: {
                age_range: "9-18岁为主，Z世代核心用户",
                gender_ratio: "55% 男性，45% 女性",
                region: "全球覆盖，美国、欧洲为主",
                income_level: "中等收入家庭儿童和青少年"
            },
            usage_patterns: {
                avg_session_duration: "150分钟/天",
                sessions_per_day: "5次",
                content_creation_rate: "2%",
                engagement_rate: "90%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "虚拟货币销售",
                    percentage: 80,
                    description: "Robux虚拟货币销售"
                },
                {
                    type: "订阅服务",
                    percentage: 20,
                    description: "Roblox Premium会员订阅"
                }
            ],
            monetization_strategy: "虚拟货币+订阅的UGC游戏平台模式",
            financial_metrics: {
                annual_revenue: "约30亿美元 (2023)",
                revenue_growth: "20% YoY",
                profitability: "接近盈亏平衡",
                valuation: "约300亿美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Minecraft", similarity: 75, position: "UGC游戏直接竞品" },
                { name: "Fortnite", similarity: 60, position: "游戏平台间接竞品" },
                { name: "Meta Horizon Worlds", similarity: 50, position: "虚拟世界间接竞品" }
            ],
            market_position: "UGC游戏平台领导者，Z世代主要社交平台",
            market_share: "UGC游戏市场70%+",
            competitive_advantages: [
                "UGC模式创新，用户既是玩家也是创造者",
                "虚拟货币系统建立经济生态",
                "Z世代用户基础大",
                "移动端优先策略"
            ],
            competitive_disadvantages: [
                "内容安全问题，儿童保护挑战",
                "面临监管压力",
                "内容质量参差不齐",
            "需要平衡开放性和安全性"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "7000万",
                mau: "2.4亿",
                engagement_rate: "90%",
                retention_7d: "85%",
                retention_30d: "75%"
            },
            content_metrics: {
                daily_game_plays: "5000万次游戏",
                avg_play_time: "150分钟/天",
                creator_count: "1200万创作者",
                game_count: "5000万游戏"
            },
            business_metrics: {
                arpu: "约12美元/年",
                ltv: "约150美元",
                cac: "约20美元",
                conversion_rate: "Robux购买转化率30%"
            }
        },
        success_factors: [
            "UGC模式创新，建立创造者经济",
            "Robux虚拟货币系统建立经济生态",
            "DevEx功能激励创作者",
            "专注Z世代市场",
            "移动端优先策略",
            "但内容安全是持续挑战",
            "面临监管压力"
        ]
    },
    mastodon: {
        title: "Mastodon", 
        subtitle: "去中心化的Twitter替代品",
        dao: "去中心化与自治。服务器自治，协议统一。", 
        gov: "联邦制。每个服务器独立治理。", 
        space: "分布式网络。服务器间可互操作。", 
        econ: "服务器运营者自筹。无平台抽成。",
        risk: "技术门槛高，普通用户难以使用。",
        atomic_unit: "Toot (类似推文)",
        distribution: "关注流 + 联邦时间线",
        death_risk: "无法跨越鸿沟，停留在极客圈",
        tags: ["#去中心化", "#联邦", "#开源", "#ActivityPub", "#服务器自治", "#Twitter替代"],
        scores: [50, 40, 20, 10, 25],
        timeline: [
            { year: "2016", event: "Mastodon由Eugen Rochko创立，专注去中心化社交，基于ActivityPub协议" },
            { year: "2017", event: "推出联邦制功能，允许不同服务器间互操作，建立分布式社交网络" },
            { year: "2018", event: "用户数突破100万，成为去中心化社交的重要平台" },
            { year: "2020", event: "推出Mastodon 3.0，优化用户体验，降低使用门槛" },
            { year: "2022", event: "Twitter被Elon Musk收购后，用户对中心化平台的担忧增加，Mastodon用户激增" },
            { year: "2022", event: "用户数突破1000万，日活用户大幅增长，成为Twitter的重要替代品" },
            { year: "2023", event: "用户增长放缓，活跃度下降，技术门槛仍然是主要障碍" },
            { year: "2023", event: "推出Mastodon 4.0，进一步优化用户体验，简化服务器选择" },
            { year: "2024", event: "生态逐步发展，更多客户端和服务器上线，但用户规模仍然有限" }
        ],
        key_decisions: [
            "联邦制设计，允许不同服务器独立治理，实现真正的去中心化，但需要统一的协议（ActivityPub）",
            "ActivityPub协议采用，实现服务器间互操作，建立分布式社交网络，但技术复杂度较高",
            "服务器自治模式，每个服务器可以设置自己的规则，但可能导致用户体验不一致",
            "开源策略，允许任何人运行服务器，建立开发者生态，但需要技术能力",
            "无平台抽成模式，服务器运营者自筹资金，但可能导致服务器不稳定",
            "用户体验优化，从Mastodon 3.0到4.0，持续降低使用门槛，但技术门槛仍然较高",
            "面对Twitter用户迁移，需要简化服务器选择流程，让普通用户也能使用",
            "生态发展策略，鼓励更多客户端和服务器上线，但需要统一协议和用户体验",
            "需要建立更好的用户引导和服务器推荐机制，帮助用户选择合适的服务器"
        ]
    },
    onlyfans: {
        title: "OnlyFans", 
        subtitle: "创作者经济的极端案例",
        dao: "直接付费与内容控制。创作者完全控制内容。", 
        gov: "平台最小干预。只负责支付和基础设施。", 
        space: "私人会所。付费会员才能进入。", 
        econ: "平台抽成（20%）。创作者获得大部分收入。",
        risk: "内容监管压力，支付渠道限制。",
        atomic_unit: "内容 / 订阅",
        distribution: "关注流 100%",
        death_risk: "支付渠道限制导致无法运营",
        tags: ["#创作者", "#订阅", "#成人", "#直接付费", "#内容控制", "#支付"],
        scores: [70, 30, 50, 60, 80],
        timeline: [
            { year: "2016", event: "OnlyFans由Tim Stokely创立，专注创作者订阅平台，允许创作者直接向粉丝收费" },
            { year: "2017", event: "推出订阅和按内容付费功能，建立创作者经济模式" },
            { year: "2018", event: "用户数突破1000万，创作者数突破10万，成为成人内容的重要平台" },
            { year: "2020", event: "疫情期间用户激增，创作者和用户数大幅增长，日活用户突破1亿" },
            { year: "2020", event: "完成B轮融资，估值10亿美元，成为创作者经济的重要平台" },
            { year: "2021", event: "尝试禁止成人内容，引发创作者强烈反对，大量创作者威胁离开平台" },
            { year: "2021", event: "撤销禁令，承认成人内容是平台核心，恢复成人内容支持" },
            { year: "2022", event: "用户数突破2亿，创作者数突破200万，但面临支付渠道限制" },
            { year: "2023", event: "支付渠道限制问题，多家支付公司拒绝为OnlyFans提供服务" },
            { year: "2023", event: "推出OnlyFans TV，尝试视频内容，扩展内容类型" },
            { year: "2024", event: "继续面临监管和支付渠道挑战，但保持市场领先地位" }
        ],
        key_decisions: [
            "20%平台抽成相对合理（相比Patreon的5-12%），创作者获得大部分收入，建立创作者友好模式",
            "创作者完全控制内容，平台最小干预，只负责支付和基础设施，建立\"创作者主权\"定位",
            "订阅和按内容付费双模式，允许创作者灵活变现，满足不同创作者需求",
            "但内容监管是持续挑战，成人内容面临监管压力，需要平衡内容开放性和合规性",
            "支付渠道依赖性强，多家支付公司拒绝服务，导致运营风险，需要建立多元化的支付方案",
            "尝试禁止成人内容但撤销，承认成人内容是平台核心，这是\"理解用户价值主张\"的重要案例",
            "OnlyFans TV功能扩展，尝试视频内容，但需要平衡视频和图片内容的定位",
            "面对监管和支付渠道挑战，需要建立更完善的合规机制，维护平台运营稳定性",
            "保持创作者友好定位，避免过度商业化，维护创作者利益和平台价值"
        ]
    },
    
    // === 最终补充：全球代表性社交产品 ===
    facebook: {
        title: "Facebook", 
        subtitle: "全球最大的社交网络",
        dao: "真实身份与社交图谱。实名制建立信任。", 
        gov: "算法极权 + 社区规则。Facebook拥有绝对控制权。", 
        space: "公共广场 + 私密群组。既公开又私密。", 
        econ: "广告模式。精准投放，数据变现。",
        risk: "隐私问题、假新闻、用户老龄化。",
        atomic_unit: "帖子 (Post) / 状态更新",
        distribution: "算法分发 80% + 关注 20%",
        death_risk: "用户流失到TikTok等新平台",
        tags: ["#实名", "#公开", "#算法"],
        scores: [70, 90, 85, 90, 95],
        timeline: [
            { year: "2004", event: "Facebook上线，由Mark Zuckerberg在哈佛大学创立，最初是校园社交网络" },
            { year: "2006", event: "开放注册，从校园扩展到公众，用户快速增长" },
            { year: "2007", event: "推出Facebook Platform，允许第三方开发者开发应用" },
            { year: "2012", event: "IPO上市，市值1000亿美元，成为全球最大社交网络" },
            { year: "2012", event: "收购Instagram，10亿美元，拓展图片社交领域" },
            { year: "2014", event: "收购WhatsApp，190亿美元，拓展即时通讯领域" },
            { year: "2016", event: "推出Facebook Live直播功能，对抗Periscope" },
            { year: "2018", event: "剑桥分析丑闻爆发，用户数据泄露，引发信任危机和监管压力" },
            { year: "2021", event: "更名为Meta，聚焦元宇宙（Metaverse），但战略执行困难" },
            { year: "2023", event: "推出Threads，对抗Twitter，但用户增长后快速回落" },
            { year: "2024", event: "AI功能整合，推出Meta AI助手，探索AI社交新形态" }
        ],
        key_decisions: [
            "实名制要求，建立真实身份社交网络，与MySpace等匿名社交形成差异化",
            "News Feed算法推荐，从时间序转向算法分发，最大化用户停留时间和广告收入",
            "开放平台策略，通过Facebook Platform吸引第三方开发者，建立生态系统",
            "收购战略，收购Instagram、WhatsApp等，巩固社交网络垄断地位",
            "广告模式，通过精准投放变现，利用用户数据建立广告优势",
            "国际化战略，快速扩张到全球市场，成为全球最大社交网络",
            "但面临隐私问题（剑桥分析丑闻）、监管压力和用户信任危机",
            "元宇宙转型失败，投入巨大但收效甚微，战略方向需要调整"
        ]
    },
    whatsapp: {
        title: "WhatsApp", 
        subtitle: "全球最流行的即时通讯",
        dao: "简单与隐私。专注消息，无广告。", 
        gov: "平台最小干预。端到端加密。", 
        space: "私密对话。一对一和群聊。", 
        econ: "订阅制 -> 免费（被Facebook收购后）。",
        risk: "被Facebook收购后隐私担忧，用户迁移到Signal。",
        atomic_unit: "消息 (Message)",
        distribution: "时间序 100%",
        death_risk: "隐私担忧导致用户流失",
        tags: ["#私密", "#加密", "#简单"],
        scores: [90, 10, 50, 10, 60],
        timeline: [
            { year: "2009", event: "WhatsApp由Jan Koum和Brian Acton创立，专注简单、私密的消息服务" },
            { year: "2011", event: "用户突破1000万，\"无广告\"承诺建立用户信任" },
            { year: "2014", event: "被Facebook收购，190亿美元，用户突破5亿" },
            { year: "2016", event: "端到端加密全面上线，强化隐私保护承诺" },
            { year: "2018", event: "推出WhatsApp Business，拓展企业市场" },
            { year: "2020", event: "用户突破20亿，成为全球最流行的即时通讯应用" },
            { year: "2021", event: "隐私政策更新引发争议，大量用户迁移到Signal和Telegram" },
            { year: "2022", event: "推出社区功能，探索群组和社区功能" }
        ],
        key_decisions: [
            "早期专注简单和隐私，\"无广告\"承诺建立用户信任，这是WhatsApp的核心价值观",
            "端到端加密技术，保护用户隐私，这是与竞争对手的差异化优势",
            "被Facebook收购获得资源，但可能失去独立性，面临商业化压力",
            "隐私政策变化引发担忧，用户信任受损，这是\"价值观冲突\"的典型案例",
            "保持简单设计，专注核心功能（消息），避免功能臃肿，这是产品设计的重要原则",
            "全球化定位，支持多语言和低带宽环境，在发展中国家获得巨大成功"
        ]
    },
    line: {
        title: "Line", 
        subtitle: "日本和东南亚的超级应用",
        dao: "表情包与娱乐。Line Friends是核心IP。", 
        gov: "平台规则 + 本地化运营。", 
        space: "私密对话 + 时间线。类似微信。", 
        econ: "表情包 + 广告 + 服务。多元化变现。",
        risk: "在主要市场（日本、台湾）增长放缓。",
        atomic_unit: "消息 / 表情包 / 时间线",
        distribution: "时间序 + 算法推荐",
        death_risk: "被微信、WhatsApp等替代",
        tags: ["#表情包", "#娱乐", "#本地化", "#超级应用", "#IP", "#日本"],
        scores: [80, 50, 70, 50, 75],
        timeline: [
            { year: "2011", event: "Line由Naver（韩国）的日本分公司推出，日本地震后快速普及，成为重要的通讯工具" },
            { year: "2012", event: "推出Line Friends表情包，Brown、Cony等角色成为核心IP，建立独特的文化符号" },
            { year: "2013", event: "Line Friends IP化，推出周边商品、动画、游戏等，建立IP生态" },
            { year: "2014", event: "用户数突破5亿，成为日本和东南亚重要的通讯和社交平台" },
            { year: "2015", event: "推出Line Pay，进入支付领域，构建超级应用生态" },
            { year: "2016", event: "IPO上市，估值100亿美元，成为日本重要的科技公司" },
            { year: "2017", event: "推出Line News，进入新闻领域，扩展内容服务" },
            { year: "2018", event: "用户增长放缓，在主要市场（日本、台湾）面临增长瓶颈" },
            { year: "2021", event: "与Yahoo Japan合并，整合服务，但面临整合挑战" },
            { year: "2022", event: "推出Line AI，整合AI功能，提升用户体验" },
            { year: "2024", event: "继续扩展功能，但需要应对微信、WhatsApp等全球平台的竞争" }
        ],
        key_decisions: [
            "表情包建立差异化，Line Friends成为核心IP，建立独特的文化符号和商业价值",
            "Line Friends IP化成功，推出周边商品、动画、游戏等，建立IP生态，这是\"IP驱动\"的成功案例",
            "本地化运营策略，适应不同市场（日本、台湾、泰国等），建立区域优势，但全球化能力有限",
            "超级应用定位，整合通讯、支付、新闻、游戏等服务，类似微信的\"一站式\"模式",
            "Line Pay支付功能，构建支付生态，但需要面对支付宝、微信支付等全球支付平台的竞争",
            "与Yahoo Japan合并，整合服务，但面临整合挑战，需要平衡独立性和协同效应",
            "用户增长放缓，在主要市场面临增长瓶颈，需要探索新的增长点",
            "AI功能集成，提升用户体验，但需要平衡AI辅助和用户隐私",
            "面对微信、WhatsApp等全球平台竞争，需要保持区域优势和本地化特色"
        ]
    },
    tiktok: {
        title: "TikTok (Global)", 
        subtitle: "全球短视频霸主",
        dao: "多巴胺与瞬时满足。算法驱动的成瘾机制。", 
        gov: "算法极权。字节跳动控制算法。", 
        space: "无限流动的广场。全屏沉浸。", 
        econ: "广告 + 直播打赏。注意力货币化。",
        risk: "地缘政治风险、内容审核挑战。",
        atomic_unit: "15s-60s 短视频",
        distribution: "算法分发 95% + 关注 5%",
        death_risk: "被各国政府封禁",
        tags: ["#算法", "#短视频", "#全球化"],
        scores: [20, 98, 95, 99, 90],
        timeline: [
            { year: "2017", event: "TikTok全球上线" },
            { year: "2018", event: "与Musical.ly合并" },
            { year: "2020", event: "印度封禁，美国威胁封禁" },
            { year: "2021", event: "全球用户突破10亿" },
            { year: "2023", event: "多国监管压力增大" }
        ],
        key_decisions: [
            "算法推荐为核心竞争力",
            "全屏沉浸式设计",
            "全球化战略快速扩张",
            "但地缘政治风险持续存在"
        ]
    },
    signal: {
        title: "Signal", 
        subtitle: "隐私优先的加密通讯",
        dao: "绝对隐私与安全。非营利组织运营。", 
        gov: "去中心化架构。开源透明。", 
        space: "加密隧道。端到端加密。", 
        econ: "非营利。依靠捐赠。",
        risk: "用户基数小，网络效应弱。",
        atomic_unit: "加密消息",
        distribution: "时间序 100%",
        death_risk: "无法获得足够用户，网络效应不足",
        tags: ["#隐私", "#加密", "#非营利"],
        scores: [70, 20, 30, 10, 20],
        timeline: [
            { year: "2014", event: "Signal上线，专注隐私" },
            { year: "2021", event: "WhatsApp隐私政策更新后用户激增" },
            { year: "2023", event: "用户增长放缓" }
        ],
        key_decisions: [
            "非营利模式建立信任",
            "开源透明增加可信度",
            "但网络效应不足",
            "难以与WhatsApp等竞争"
        ]
    },
    weibo: {
        title: "微博 (Weibo)", 
        subtitle: "中国的Twitter",
        dao: "公共表达与热点追踪。140字限制。", 
        gov: "平台规则 + 内容审核。严格监管。", 
        space: "公共广场。完全公开。", 
        econ: "广告 + 会员。商业化成熟。",
        risk: "内容审核严格，用户表达受限。",
        atomic_unit: "微博 (Weibo)",
        distribution: "算法推荐 60% + 关注 40%",
        death_risk: "被微信、抖音等替代",
        tags: ["#公开", "#实时", "#短文本"],
        scores: [40, 90, 80, 70, 80],
        timeline: [
            { year: "2009", event: "微博上线，类似Twitter" },
            { year: "2011", event: "用户数突破1亿" },
            { year: "2014", event: "上市" },
            { year: "2020", event: "内容审核加强" }
        ],
        key_decisions: [
            "早期模仿Twitter成功",
            "140字限制降低表达门槛",
            "但内容审核限制表达",
            "被微信朋友圈分流"
        ]
    },
    qq: {
        title: "QQ", 
        subtitle: "中国互联网的社交起点",
        dao: "虚拟身份与等级系统。QQ号是数字身份。", 
        gov: "平台规则 + 会员体系。腾讯控制。", 
        space: "虚拟空间。QQ空间是个人主页。", 
        econ: "会员 + 虚拟物品。游戏化变现。",
        risk: "用户老龄化，年轻用户迁移到微信。",
        atomic_unit: "消息 / QQ空间动态",
        distribution: "时间序 + 算法推荐",
        death_risk: "用户流失到微信",
        tags: ["#虚拟", "#等级", "#游戏化"],
        scores: [70, 60, 70, 50, 80],
        timeline: [
            { year: "1999", event: "QQ上线，即时通讯" },
            { year: "2005", event: "QQ空间上线" },
            { year: "2010", event: "同时在线用户突破1亿" },
            { year: "2011", event: "微信上线，开始分流" },
            { year: "2020", event: "用户数下降" }
        ],
        key_decisions: [
            "早期建立用户习惯",
            "QQ空间创造社交场景",
            "会员和虚拟物品建立商业模式",
            "但被微信替代"
        ]
    },
    myspace: {
        title: "MySpace (已衰落)", 
        subtitle: "社交网络的先驱与失败",
        dao: "个性化表达。自定义页面是核心。", 
        gov: "平台规则。但执行不一致。", 
        space: "个人主页。完全自定义。", 
        econ: "广告模式。但商业化困难。",
        risk: "被Facebook替代，用户流失。",
        atomic_unit: "个人主页 / 好友",
        distribution: "时间序 + 好友推荐",
        death_risk: "用户流失，平台关闭",
        tags: ["#失败", "#个性化", "#早期"],
        scores: [50, 70, 60, 40, 30],
        timeline: [
            { year: "2003", event: "MySpace上线" },
            { year: "2005", event: "被新闻集团收购，5.8亿美元" },
            { year: "2008", event: "被Facebook超越" },
            { year: "2011", event: "被Specific Media收购，仅3500万美元" },
            { year: "2019", event: "数据丢失，大量内容永久丢失" }
        ],
        key_decisions: [
            "早期个性化功能建立差异化",
            "音乐功能吸引年轻用户",
            "但被Facebook的简洁设计超越",
            "数据管理不善导致内容丢失"
        ],
        failure_lessons: [
            "个性化不能以牺牲用户体验为代价",
            "需要持续创新，不能停滞",
            "数据管理至关重要",
            "被收购后可能失去产品独立性"
        ]
    },
    vine: {
        title: "Vine (已关闭)", 
        subtitle: "6秒短视频的短暂辉煌",
        dao: "创意与幽默。6秒限制激发创造力。", 
        gov: "平台规则。Twitter控制。", 
        space: "创意广场。循环播放。", 
        econ: "广告模式。但变现困难。",
        risk: "被Instagram和Snapchat替代。",
        atomic_unit: "6秒循环视频",
        distribution: "关注流 + 探索",
        death_risk: "用户流失，平台关闭",
        tags: ["#失败", "#短视频", "#创意"],
        scores: [60, 70, 65, 50, 40],
        timeline: [
            { year: "2013", event: "Vine上线，6秒循环视频" },
            { year: "2013", event: "被Twitter收购" },
            { year: "2016", event: "Twitter宣布关闭Vine" },
            { year: "2017", event: "正式关闭" }
        ],
        key_decisions: [
            "6秒限制创造独特体验",
            "被Twitter收购获得资源",
            "但Twitter未能有效运营",
            "被Instagram和Snapchat超越"
        ],
        failure_lessons: [
            "被收购后需要保持产品独立性",
            "需要持续创新，不能停滞",
            "6秒限制虽然独特但可能过于局限",
            "需要建立可持续的商业模式"
        ]
    },
    periscope: {
        title: "Periscope (已关闭)", 
        subtitle: "直播社交的早期尝试",
        dao: "实时性与真实性。直播降低制作门槛。", 
        gov: "平台规则。Twitter控制。", 
        space: "实时广场。直播流。", 
        econ: "广告模式。但变现困难。",
        risk: "被Facebook Live和Instagram Live替代。",
        atomic_unit: "直播流",
        distribution: "关注流 + 探索",
        death_risk: "用户流失，平台关闭",
        tags: ["#失败", "#直播", "#实时"],
        scores: [50, 60, 55, 40, 30],
        timeline: [
            { year: "2015", event: "Periscope上线，直播社交" },
            { year: "2015", event: "被Twitter收购" },
            { year: "2016", event: "Twitter推出自己的直播功能" },
            { year: "2021", event: "Twitter宣布关闭Periscope" }
        ],
        key_decisions: [
            "早期直播功能建立差异化",
            "被Twitter收购获得资源",
            "但Twitter未能有效整合",
            "被Facebook Live等替代"
        ],
        failure_lessons: [
            "被收购后需要有效整合",
            "需要建立可持续的商业模式",
            "功能可以被大平台快速复制",
            "需要建立网络效应"
        ]
    },
    notion: {
        title: "Notion",
        subtitle: "All-in-one工作空间",
        dao: "知识工作者需要统一的工作空间。减少工具切换成本。",
        gov: "去中心化。用户自主组织内容，模板社区自治。",
        space: "无限画布。块状结构，自由组合。",
        econ: "订阅模式。个人免费，团队付费。",
        risk: "功能过于复杂，学习曲线陡峭。",
        atomic_unit: "块 (Block)",
        distribution: "用户自主组织 + 模板分发",
        death_risk: "被更简单的工具替代",
        tags: ["#知识管理", "#协作", "#模板"],
        scores: [40, 30, 20, 10, 70],
        timeline: [
            { year: "2016", event: "Notion成立" },
            { year: "2018", event: "推出个人免费版" },
            { year: "2020", event: "疫情期间用户激增" },
            { year: "2022", event: "推出AI功能" }
        ],
        key_decisions: [
            "块状结构设计，灵活组合",
            "个人免费策略获取用户",
            "模板社区建立生态",
            "AI集成提升效率"
        ]
    },
    threads: {
        title: "Threads (Meta)",
        subtitle: "Twitter的替代品",
        dao: "实时对话与公共讨论。",
        gov: "Meta控制。算法推荐。",
        space: "公共广场。文本为主。",
        econ: "广告模式。Meta生态整合。",
        risk: "用户迁移成本高，内容质量待提升。",
        atomic_unit: "帖子 (Post)",
        distribution: "算法分发 + 关注流",
        death_risk: "用户流失回Twitter",
        tags: ["#社交", "#文本", "#实时"],
        scores: [30, 90, 85, 80, 60],
        timeline: [
            { year: "2023", event: "Threads上线，5天1亿用户" },
            { year: "2023", event: "与Instagram整合" },
            { year: "2024", event: "推出API和更多功能" }
        ],
        key_decisions: [
            "利用Instagram用户基础快速启动",
            "简化注册流程",
            "与Meta生态深度整合",
            "快速迭代功能"
        ]
    },
    feishu: {
        title: "飞书 (Lark)",
        subtitle: "字节跳动的企业协作平台",
        dao: "效率至上。信息透明，减少沟通成本。",
        gov: "扁平化。文档协作，信息共享。",
        space: "工作空间。文档、表格、会议一体化。",
        econ: "订阅模式。企业付费。",
        risk: "与钉钉、企业微信竞争激烈。",
        atomic_unit: "文档 (Document)",
        distribution: "协作流 + 通知",
        death_risk: "市场份额被蚕食",
        tags: ["#企业协作", "#效率", "#文档"],
        scores: [50, 40, 60, 30, 70],
        timeline: [
            { year: "2016", event: "飞书上线" },
            { year: "2019", event: "正式对外发布" },
            { year: "2020", event: "疫情期间用户增长" },
            { year: "2022", event: "推出AI功能" }
        ],
        key_decisions: [
            "文档协作为核心功能",
            "信息透明化设计",
            "与字节生态整合",
            "AI能力提升效率"
        ]
    },
    dingtalk: {
        title: "钉钉 (DingTalk)",
        subtitle: "阿里巴巴的企业协作平台",
        dao: "工作场景数字化。连接人与组织。",
        gov: "层级管理。组织架构清晰。",
        space: "工作台。应用集成。",
        econ: "基础免费，高级功能付费。",
        risk: "功能过于复杂，用户体验待优化。",
        atomic_unit: "消息 (Message)",
        distribution: "组织架构 + 应用分发",
        death_risk: "被更简洁的工具替代",
        tags: ["#企业协作", "#组织", "#应用"],
        scores: [60, 50, 70, 40, 65],
        timeline: [
            { year: "2014", event: "钉钉上线" },
            { year: "2015", event: "推出免费电话" },
            { year: "2020", event: "疫情期间用户激增" },
            { year: "2021", event: "推出低代码平台" }
        ],
        key_decisions: [
            "免费策略快速获取企业用户",
            "组织架构为核心",
            "应用生态建设",
            "低代码降低开发门槛"
        ]
    },
    maimai: {
        title: "脉脉 (Maimai)",
        subtitle: "职场社交网络",
        dao: "职场人脉与信息。匿名爆料文化。",
        gov: "社区自治。用户UGC内容。",
        space: "职场广场。实名+匿名混合。",
        econ: "会员订阅 + 招聘服务。",
        risk: "内容质量下降，用户流失。",
        atomic_unit: "动态 (Feed)",
        distribution: "算法分发 + 关注流",
        death_risk: "被LinkedIn等替代",
        tags: ["#职场", "#社交", "#匿名"],
        scores: [50, 60, 50, 60, 55],
        timeline: [
            { year: "2013", event: "脉脉上线" },
            { year: "2015", event: "获得B轮融资" },
            { year: "2018", event: "推出会员服务" },
            { year: "2020", event: "用户突破1亿" }
        ],
        key_decisions: [
            "职场社交定位",
            "匿名功能建立差异化",
            "招聘服务商业化",
            "内容社区建设"
        ]
    },
    genshin_impact: {
        title: "原神社区",
        subtitle: "米哈游的开放世界游戏社区",
        dao: "二次元文化认同。角色情感连接。",
        gov: "官方主导。社区自治。",
        space: "游戏内+游戏外。多平台社区。",
        econ: "游戏内购 + 周边。",
        risk: "内容同质化，用户疲劳。",
        atomic_unit: "角色/内容 (Character/Content)",
        distribution: "官方内容 + UGC",
        death_risk: "游戏生命周期结束",
        tags: ["#游戏", "#二次元", "#社区"],
        scores: [70, 50, 60, 40, 80],
        timeline: [
            { year: "2020", event: "原神全球上线" },
            { year: "2021", event: "社区内容爆发" },
            { year: "2022", event: "推出社区平台" },
            { year: "2023", event: "用户突破1亿" }
        ],
        key_decisions: [
            "高质量内容建立口碑",
            "多平台社区策略",
            "角色IP化运营",
            "全球化布局"
        ]
    },
    league_of_legends: {
        title: "英雄联盟社区",
        subtitle: "Riot Games的MOBA游戏社区",
        dao: "竞技文化。技术崇拜。",
        gov: "官方+社区。赛事体系。",
        space: "游戏内+游戏外。多语言社区。",
        econ: "游戏内购 + 赛事。",
        risk: "游戏老化，新玩家减少。",
        atomic_unit: "游戏对局 (Match)",
        distribution: "赛事内容 + UGC",
        death_risk: "游戏生命周期结束",
        tags: ["#游戏", "#竞技", "#赛事"],
        scores: [60, 70, 65, 50, 75],
        timeline: [
            { year: "2009", event: "英雄联盟上线" },
            { year: "2011", event: "全球总决赛开始" },
            { year: "2018", event: "社区内容爆发" },
            { year: "2021", event: "推出动画剧集" }
        ],
        key_decisions: [
            "赛事体系建立",
            "全球化运营",
            "IP扩展（动画、音乐）",
            "社区内容激励"
        ]
    },
    spotify: {
        title: "Spotify",
        subtitle: "音乐流媒体与社区",
        dao: "音乐是身份认同。发现新音乐是社交行为。",
        gov: "算法+人工。播放列表由用户和编辑共同创造。",
        space: "个人音乐库 + 共享播放列表 + 社交发现。",
        econ: "订阅 + 广告。艺术家分成。",
        risk: "版权成本高，盈利困难。",
        atomic_unit: "歌曲 (Track) / 播放列表 (Playlist)",
        distribution: "算法推荐 60% + 社交分享 30% + 编辑推荐 10%",
        death_risk: "版权成本过高导致亏损",
        tags: ["#音乐", "#流媒体", "#社交发现"],
        scores: [50, 80, 60, 70, 65],
        timeline: [
            { year: "2008", event: "Spotify在瑞典上线" },
            { year: "2011", event: "进入美国市场" },
            { year: "2015", event: "推出Discover Weekly算法推荐" },
            { year: "2021", event: "推出Spotify Greenroom音频社交" }
        ],
        key_decisions: [
            "免费+付费双模式",
            "算法推荐建立差异化",
            "社交功能增强粘性",
            "播客战略扩展内容"
        ],
        user_metrics: {
            monthly_active_users: "6.02亿",
            daily_active_users: "2.36亿",
            total_users: "6.5亿",
            growth_rate: "15%",
            retention_rate: "75%",
            user_demographics: {
                age_range: "18-45岁为主，音乐爱好者",
                gender_ratio: "52% 男性，48% 女性",
                region: "全球覆盖，美国、欧洲为主",
                income_level: "中等收入音乐爱好者为主"
            },
            usage_patterns: {
                avg_session_duration: "120分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "5%",
                engagement_rate: "80%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "订阅收入",
                    percentage: 85,
                    description: "Premium会员订阅"
                },
                {
                    type: "广告收入",
                    percentage: 15,
                    description: "免费版广告收入"
                }
            ],
            monetization_strategy: "订阅+广告的免费+付费双模式",
            financial_metrics: {
                annual_revenue: "约140亿欧元 (2023)",
                revenue_growth: "20% YoY",
                profitability: "接近盈亏平衡",
                valuation: "约300亿美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Apple Music", similarity: 90, position: "音乐流媒体直接竞品" },
                { name: "Amazon Music", similarity: 85, position: "音乐流媒体直接竞品" },
                { name: "YouTube Music", similarity: 80, position: "音乐流媒体直接竞品" }
            ],
            market_position: "全球最大的音乐流媒体平台",
            market_share: "音乐流媒体市场35%+",
            competitive_advantages: [
                "用户规模大，曲库丰富",
                "算法推荐精准",
                "免费+付费双模式",
                "播客战略扩展内容"
            ],
            competitive_disadvantages: [
                "版权成本高，盈利困难",
                "面临Apple Music等竞品竞争",
                "艺术家分成争议",
                "用户增长放缓"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "2.36亿",
                mau: "6.02亿",
                engagement_rate: "80%",
                retention_7d: "75%",
                retention_30d: "65%"
            },
            content_metrics: {
                daily_streams: "40亿次播放",
                avg_listen_time: "120分钟/天",
                playlist_creation_rate: "5%",
                share_rate: "2%"
            },
            business_metrics: {
                arpu: "约23美元/年",
                ltv: "约200美元",
                cac: "约25美元",
                conversion_rate: "Premium转化率45%"
            }
        },
        success_factors: [
            "免费+付费双模式快速获取用户",
            "算法推荐建立差异化",
            "社交功能增强粘性",
            "播客战略扩展内容",
            "用户规模大，曲库丰富",
            "但版权成本高，盈利困难"
        ]
    },
    netflix: {
        title: "Netflix",
        subtitle: "流媒体平台与观影社区",
        dao: "内容即社交货币。观看体验是身份表达。",
        gov: "算法主导。推荐系统决定内容分发。",
        space: "个人观看 + 评论社区 + 推荐分享。",
        econ: "订阅模式。内容制作投入巨大。",
        risk: "内容成本过高，竞争加剧。",
        atomic_unit: "剧集/电影 (Title)",
        distribution: "算法推荐 80% + 社交分享 15% + 编辑推荐 5%",
        death_risk: "内容成本失控",
        tags: ["#视频", "#流媒体", "#内容"],
        scores: [40, 90, 50, 85, 70],
        timeline: [
            { year: "1997", event: "Netflix成立，DVD租赁" },
            { year: "2007", event: "推出流媒体服务" },
            { year: "2013", event: "推出原创内容《纸牌屋》" },
            { year: "2021", event: "全球用户突破2亿" }
        ],
        key_decisions: [
            "从DVD转向流媒体",
            "原创内容建立护城河",
            "算法推荐提升体验",
            "全球化内容策略"
        ]
    },
    airbnb: {
        title: "Airbnb",
        subtitle: "共享住宿与本地社区",
        dao: "旅行是连接。本地体验是核心价值。",
        gov: "平台规则 + 社区自治。评价系统。",
        space: "房源展示 + 评价社区 + 本地体验。",
        econ: "交易佣金。体验活动分成。",
        risk: "监管风险，安全信任问题。",
        atomic_unit: "房源 (Listing) / 预订 (Booking)",
        distribution: "搜索算法 70% + 社交推荐 20% + 编辑精选 10%",
        death_risk: "监管压力与信任危机",
        tags: ["#共享经济", "#旅行", "#本地社区"],
        scores: [70, 60, 75, 80, 85],
        timeline: [
            { year: "2008", event: "Airbnb成立" },
            { year: "2011", event: "国际化扩张" },
            { year: "2016", event: "推出体验功能" },
            { year: "2020", event: "疫情影响，转向长期租赁" }
        ],
        key_decisions: [
            "信任系统建立（评价+验证）",
            "本地体验差异化",
            "社区运营增强粘性",
            "应对监管挑战"
        ]
    },
    uber: {
        title: "Uber",
        subtitle: "共享出行与司机社区",
        dao: "出行是连接。司机是社区核心。",
        gov: "平台规则。算法调度。",
        space: "司机端 + 乘客端。评价系统。",
        econ: "交易佣金。动态定价。",
        risk: "司机权益争议，监管压力。",
        atomic_unit: "行程 (Trip)",
        distribution: "算法匹配 100%",
        death_risk: "司机流失与监管压力",
        tags: ["#共享经济", "#出行", "#平台"],
        scores: [30, 85, 40, 90, 80],
        timeline: [
            { year: "2009", event: "Uber成立" },
            { year: "2012", event: "快速扩张" },
            { year: "2017", event: "司机权益争议" },
            { year: "2021", event: "部分市场承认司机为员工" }
        ],
        key_decisions: [
            "动态定价算法",
            "司机激励体系",
            "全球化快速扩张",
            "应对监管挑战"
        ]
    },
    tinder: {
        title: "Tinder",
        subtitle: "约会应用与社交匹配",
        dao: "匹配是游戏。左滑右滑是仪式。",
        gov: "算法匹配。平台规则。",
        space: "卡片式浏览。匹配聊天。",
        econ: "订阅 + 应用内购买。",
        risk: "用户流失，匹配质量下降。",
        atomic_unit: "匹配 (Match)",
        distribution: "算法推荐 100%",
        death_risk: "用户流失与信任危机",
        tags: ["#约会", "#匹配", "#社交"],
        scores: [20, 90, 30, 75, 70],
        timeline: [
            { year: "2012", event: "Tinder上线" },
            { year: "2014", event: "用户突破5000万" },
            { year: "2017", event: "推出Tinder Gold订阅" },
            { year: "2021", event: "推出视频功能" }
        ],
        key_decisions: [
            "左滑右滑简化交互",
            "算法匹配提升效率",
            "订阅模式变现",
            "视频功能增强信任"
        ]
    },
    duolingo: {
        title: "Duolingo",
        subtitle: "语言学习社区",
        dao: "学习是游戏。打卡是仪式。",
        gov: "算法+游戏化。进度系统。",
        space: "课程学习 + 排行榜 + 社区讨论。",
        econ: "免费+订阅。广告收入。",
        risk: "学习效果争议，用户流失。",
        atomic_unit: "课程单元 (Lesson)",
        distribution: "进度系统 80% + 社交激励 20%",
        death_risk: "学习效果不足导致用户流失",
        tags: ["#教育", "#游戏化", "#学习"],
        scores: [50, 85, 60, 40, 65],
        timeline: [
            { year: "2011", event: "Duolingo上线" },
            { year: "2014", event: "用户突破1亿" },
            { year: "2019", event: "推出Duolingo Plus订阅" },
            { year: "2021", event: "上市" }
        ],
        key_decisions: [
            "游戏化学习体验",
            "免费模式获取用户",
            "社区激励增强粘性",
            "AI个性化学习路径"
        ]
    },
    coursera: {
        title: "Coursera",
        subtitle: "在线教育平台",
        dao: "知识是权力。证书是身份。",
        gov: "大学+平台。课程审核。",
        space: "课程学习 + 讨论区 + 证书展示。",
        econ: "课程付费 + 订阅。",
        risk: "完成率低，证书价值争议。",
        atomic_unit: "课程 (Course)",
        distribution: "课程目录 70% + 推荐算法 30%",
        death_risk: "完成率低影响口碑",
        tags: ["#教育", "#在线课程", "#证书"],
        scores: [40, 60, 50, 70, 60],
        timeline: [
            { year: "2012", event: "Coursera成立" },
            { year: "2015", event: "推出专项课程" },
            { year: "2019", event: "推出学位项目" },
            { year: "2021", event: "上市" }
        ],
        key_decisions: [
            "与大学合作建立权威性",
            "证书体系建立价值",
            "专项课程提升完成率",
            "企业培训拓展市场"
        ]
    },
    goodreads: {
        title: "Goodreads",
        subtitle: "读书社区与书评平台",
        dao: "阅读是身份。书评是社交。",
        gov: "用户自治。评价系统。",
        space: "个人书架 + 书评社区 + 推荐算法。",
        econ: "广告 + 图书销售分成。",
        risk: "被Amazon收购后商业化过度。",
        atomic_unit: "书籍 (Book) / 书评 (Review)",
        distribution: "社交推荐 60% + 算法推荐 30% + 编辑推荐 10%",
        death_risk: "商业化过度影响用户体验",
        tags: ["#阅读", "#书评", "#社区"],
        scores: [70, 50, 65, 30, 60],
        timeline: [
            { year: "2007", event: "Goodreads成立" },
            { year: "2013", event: "被Amazon收购" },
            { year: "2018", event: "用户突破9000万" },
            { year: "2021", event: "功能更新缓慢" }
        ],
        key_decisions: [
            "书评社区建立信任",
            "阅读挑战增强粘性",
            "被Amazon收购获得资源",
            "但商业化影响体验"
        ]
    },
    letterboxd: {
        title: "Letterboxd",
        subtitle: "电影爱好者社区",
        dao: "观影是仪式。影评是身份。",
        gov: "用户自治。评价系统。",
        space: "观影日记 + 影评社区 + 榜单。",
        econ: "订阅 + 广告。",
        risk: "用户基数小，增长缓慢。",
        atomic_unit: "电影 (Film) / 影评 (Review)",
        distribution: "社交推荐 70% + 算法推荐 20% + 编辑推荐 10%",
        death_risk: "用户增长缓慢",
        tags: ["#电影", "#影评", "#社区"],
        scores: [75, 40, 70, 20, 50],
        timeline: [
            { year: "2011", event: "Letterboxd上线" },
            { year: "2015", event: "用户增长加速" },
            { year: "2019", event: "推出Pro订阅" },
            { year: "2021", event: "用户突破400万" }
        ],
        key_decisions: [
            "专注电影爱好者垂直社区",
            "观影日记功能建立粘性",
            "榜单系统增强发现",
            "保持小而美的社区氛围"
        ]
    },
    producthunt: {
        title: "Product Hunt",
        subtitle: "产品发现社区",
        dao: "发现新产品是身份。早期采用者是地位。",
        gov: "社区投票。编辑精选。",
        space: "产品展示 + 讨论区 + 排行榜。",
        econ: "广告 + 企业服务。",
        risk: "被Y Combinator收购后商业化。",
        atomic_unit: "产品 (Product)",
        distribution: "投票排名 60% + 编辑精选 30% + 算法推荐 10%",
        death_risk: "商业化影响社区氛围",
        tags: ["#产品", "#创业", "#发现"],
        scores: [60, 50, 65, 40, 70],
        timeline: [
            { year: "2013", event: "Product Hunt成立" },
            { year: "2016", event: "被AngelList收购" },
            { year: "2020", event: "推出Maker订阅" },
            { year: "2021", event: "社区活跃度下降" }
        ],
        key_decisions: [
            "每日产品展示建立仪式感",
            "投票系统增强参与",
            "Maker社区建立生态",
            "但商业化影响氛围"
        ]
    },
    indiehackers: {
        title: "Indie Hackers",
        subtitle: "独立开发者社区",
        dao: "独立是自由。分享是成长。",
        gov: "社区自治。论坛模式。",
        space: "论坛讨论 + 收入分享 + 访谈。",
        econ: "广告 + 企业服务。",
        risk: "被Stripe收购后商业化。",
        atomic_unit: "帖子 (Post) / 访谈 (Interview)",
        distribution: "时间序 70% + 热门排序 30%",
        death_risk: "商业化影响社区独立性",
        tags: ["#创业", "#独立开发者", "#社区"],
        scores: [80, 30, 70, 30, 60],
        timeline: [
            { year: "2016", event: "Indie Hackers成立" },
            { year: "2017", event: "被Stripe收购" },
            { year: "2019", event: "社区活跃度高峰" },
            { year: "2021", event: "商业化功能增加" }
        ],
        key_decisions: [
            "收入透明建立信任",
            "访谈内容建立价值",
            "被Stripe收购获得资源",
            "但商业化影响独立性"
        ]
    },
    hackernews: {
        title: "Hacker News",
        subtitle: "科技新闻社区",
        dao: "技术是身份。讨论是价值。",
        gov: "社区投票。算法排序。",
        space: "新闻链接 + 评论讨论。",
        econ: "非营利。Y Combinator支持。",
        risk: "用户增长缓慢，界面老旧。",
        atomic_unit: "链接 (Link) / 评论 (Comment)",
        distribution: "投票算法 100%",
        death_risk: "用户流失与界面老化",
        tags: ["#科技", "#新闻", "#社区"],
        scores: [50, 60, 40, 10, 55],
        timeline: [
            { year: "2007", event: "Hacker News上线" },
            { year: "2010", event: "社区活跃度高峰" },
            { year: "2015", event: "用户增长放缓" },
            { year: "2021", event: "保持小而精的社区" }
        ],
        key_decisions: [
            "极简设计专注内容",
            "投票算法保证质量",
            "非营利模式保持独立",
            "但界面老化影响体验"
        ]
    },
    deviantart: {
        title: "DeviantArt",
        subtitle: "艺术创作社区",
        dao: "创作是表达。收藏是认同。",
        gov: "社区自治。评价系统。",
        space: "作品展示 + 评论社区 + 收藏。",
        econ: "会员订阅 + 作品销售。",
        risk: "被Wix收购后商业化。",
        atomic_unit: "作品 (Deviation)",
        distribution: "时间序 50% + 热门排序 40% + 推荐算法 10%",
        death_risk: "商业化过度影响创作者",
        tags: ["#艺术", "#创作", "#社区"],
        scores: [70, 40, 75, 50, 65],
        timeline: [
            { year: "2000", event: "DeviantArt成立" },
            { year: "2010", event: "用户突破2500万" },
            { year: "2017", event: "被Wix收购" },
            { year: "2021", event: "商业化功能增加" }
        ],
        key_decisions: [
            "早期建立艺术社区生态",
            "作品展示建立价值",
            "被Wix收购获得资源",
            "但商业化影响创作者体验"
        ]
    },
    artstation: {
        title: "ArtStation",
        subtitle: "数字艺术社区",
        dao: "专业是身份。作品集是名片。",
        gov: "专业导向。作品审核。",
        space: "作品集展示 + 学习资源 + 招聘。",
        econ: "会员订阅 + 课程销售。",
        risk: "被Epic Games收购后商业化。",
        atomic_unit: "作品 (Artwork)",
        distribution: "热门排序 60% + 推荐算法 30% + 编辑精选 10%",
        death_risk: "商业化影响专业氛围",
        tags: ["#数字艺术", "#作品集", "#专业"],
        scores: [50, 50, 60, 60, 70],
        timeline: [
            { year: "2014", event: "ArtStation成立" },
            { year: "2018", event: "被Epic Games收购" },
            { year: "2020", event: "推出学习平台" },
            { year: "2021", event: "商业化功能增加" }
        ],
        key_decisions: [
            "专注专业数字艺术",
            "作品集功能建立价值",
            "被Epic Games收购获得资源",
            "学习平台扩展生态"
        ]
    },
    behance: {
        title: "Behance",
        subtitle: "创意作品集平台",
        dao: "作品是身份。展示是社交。",
        gov: "Adobe管理。作品审核。",
        space: "作品集展示 + 关注流 + 招聘。",
        econ: "Adobe Creative Cloud集成。",
        risk: "被Adobe收购后商业化。",
        atomic_unit: "项目 (Project)",
        distribution: "关注流 50% + 热门排序 40% + 推荐算法 10%",
        death_risk: "商业化影响创作者",
        tags: ["#设计", "#作品集", "#创意"],
        scores: [60, 50, 65, 40, 70],
        timeline: [
            { year: "2006", event: "Behance成立" },
            { year: "2012", event: "被Adobe收购" },
            { year: "2015", event: "集成Creative Cloud" },
            { year: "2021", event: "用户突破1000万" }
        ],
        key_decisions: [
            "作品集展示建立价值",
            "被Adobe收购获得资源",
            "Creative Cloud集成增强粘性",
            "招聘功能扩展生态"
        ]
    },
    dribbble: {
        title: "Dribbble",
        subtitle: "设计师社区",
        dao: "设计是身份。Shot是作品。",
        gov: "邀请制+开放。社区投票。",
        space: "Shot展示 + 评论社区 + 招聘。",
        econ: "会员订阅 + 招聘服务。",
        risk: "商业化过度，质量下降。",
        atomic_unit: "Shot (设计作品)",
        distribution: "时间序 50% + 热门排序 40% + 推荐算法 10%",
        death_risk: "商业化影响设计质量",
        tags: ["#设计", "#作品", "#社区"],
        scores: [65, 50, 70, 50, 65],
        timeline: [
            { year: "2009", event: "Dribbble成立" },
            { year: "2012", event: "开放注册" },
            { year: "2017", event: "推出Pro订阅" },
            { year: "2021", event: "商业化功能增加" }
        ],
        key_decisions: [
            "早期邀请制保证质量",
            "Shot格式建立特色",
            "开放注册扩大用户",
            "但商业化影响质量"
        ]
    },
    codepen: {
        title: "CodePen",
        subtitle: "前端开发社区",
        dao: "代码是创作。分享是学习。",
        gov: "社区自治。作品展示。",
        space: "代码编辑器 + 作品展示 + 社区。",
        econ: "会员订阅。",
        risk: "用户增长缓慢。",
        atomic_unit: "Pen (代码作品)",
        distribution: "热门排序 60% + 时间序 30% + 推荐算法 10%",
        death_risk: "用户增长缓慢",
        tags: ["#前端", "#代码", "#社区"],
        scores: [60, 40, 65, 30, 55],
        timeline: [
            { year: "2012", event: "CodePen成立" },
            { year: "2015", event: "用户增长加速" },
            { year: "2019", event: "推出Pro订阅" },
            { year: "2021", event: "社区活跃度稳定" }
        ],
        key_decisions: [
            "在线编辑器建立价值",
            "作品展示建立社区",
            "Pro订阅变现",
            "保持开发者社区氛围"
        ]
    },
    codewars: {
        title: "CodeWars",
        subtitle: "编程挑战社区",
        dao: "挑战是成长。排名是身份。",
        gov: "社区贡献题目。算法评分。",
        space: "编程挑战 + 排名系统 + 讨论。",
        econ: "免费。",
        risk: "用户增长缓慢。",
        atomic_unit: "Kata (挑战)",
        distribution: "难度排序 70% + 推荐算法 30%",
        death_risk: "用户增长缓慢",
        tags: ["#编程", "#挑战", "#学习"],
        scores: [50, 70, 50, 10, 50],
        timeline: [
            { year: "2013", event: "CodeWars成立" },
            { year: "2016", event: "用户增长加速" },
            { year: "2019", event: "社区活跃度高峰" },
            { year: "2021", event: "保持稳定" }
        ],
        key_decisions: [
            "社区贡献题目建立生态",
            "排名系统增强竞争",
            "免费模式建立口碑",
            "但增长缓慢"
        ]
    },
    leetcode: {
        title: "LeetCode",
        subtitle: "算法练习平台",
        dao: "刷题是身份。排名是地位。",
        gov: "算法评分。排名系统。",
        space: "题目练习 + 讨论区 + 排名。",
        econ: "会员订阅。",
        risk: "商业化过度，体验下降。",
        atomic_unit: "题目 (Problem)",
        distribution: "难度分类 60% + 推荐算法 30% + 热门排序 10%",
        death_risk: "商业化影响用户体验",
        tags: ["#算法", "#刷题", "#面试"],
        scores: [40, 80, 40, 60, 55],
        timeline: [
            { year: "2015", event: "LeetCode成立" },
            { year: "2018", event: "用户增长加速" },
            { year: "2020", event: "推出Premium订阅" },
            { year: "2021", event: "商业化功能增加" }
        ],
        key_decisions: [
            "专注算法面试准备",
            "排名系统增强竞争",
            "Premium订阅变现",
            "但商业化影响体验"
        ]
    },
    hackerrank: {
        title: "HackerRank",
        subtitle: "编程竞赛平台",
        dao: "竞赛是身份。排名是地位。",
        gov: "算法评分。排名系统。",
        space: "编程挑战 + 竞赛 + 招聘。",
        econ: "企业服务 + 招聘。",
        risk: "商业化过度，社区氛围下降。",
        atomic_unit: "挑战 (Challenge)",
        distribution: "难度分类 50% + 竞赛排名 40% + 推荐算法 10%",
        death_risk: "商业化影响社区氛围",
        tags: ["#编程", "#竞赛", "#招聘"],
        scores: [45, 75, 45, 70, 60],
        timeline: [
            { year: "2012", event: "HackerRank成立" },
            { year: "2015", event: "推出企业服务" },
            { year: "2018", event: "用户突破500万" },
            { year: "2021", event: "商业化功能增加" }
        ],
        key_decisions: [
            "编程挑战建立价值",
            "企业服务变现",
            "招聘功能扩展生态",
            "但商业化影响社区"
        ]
    },
    topcoder: {
        title: "TopCoder",
        subtitle: "算法竞赛社区",
        dao: "竞赛是身份。排名是地位。",
        gov: "算法评分。排名系统。",
        space: "算法竞赛 + 设计竞赛 + 开发竞赛。",
        econ: "竞赛奖金 + 企业服务。",
        risk: "用户增长缓慢，商业化困难。",
        atomic_unit: "竞赛 (Contest)",
        distribution: "竞赛时间表 70% + 排名系统 30%",
        death_risk: "用户增长缓慢",
        tags: ["#算法", "#竞赛", "#社区"],
        scores: [40, 70, 40, 50, 50],
        timeline: [
            { year: "2001", event: "TopCoder成立" },
            { year: "2010", event: "用户增长高峰" },
            { year: "2015", event: "推出企业服务" },
            { year: "2021", event: "用户增长缓慢" }
        ],
        key_decisions: [
            "早期建立竞赛生态",
            "奖金激励建立价值",
            "企业服务拓展市场",
            "但增长缓慢"
        ]
    },
    codementor: {
        title: "Codementor",
        subtitle: "编程导师平台",
        dao: "指导是价值。学习是成长。",
        gov: "平台匹配。评价系统。",
        space: "导师匹配 + 在线指导 + 社区。",
        econ: "交易佣金。",
        risk: "匹配效率低，用户流失。",
        atomic_unit: "会话 (Session)",
        distribution: "匹配算法 100%",
        death_risk: "匹配效率低导致用户流失",
        tags: ["#编程", "#导师", "#学习"],
        scores: [60, 50, 50, 60, 55],
        timeline: [
            { year: "2013", event: "Codementor成立" },
            { year: "2016", event: "用户增长加速" },
            { year: "2019", event: "推出企业服务" },
            { year: "2021", event: "用户增长放缓" }
        ],
        key_decisions: [
            "导师匹配建立价值",
            "在线指导增强体验",
            "企业服务拓展市场",
            "但匹配效率需提升"
        ]
    },
    replit: {
        title: "Replit",
        subtitle: "在线编程环境",
        dao: "编程是创作。分享是学习。",
        gov: "平台管理。社区自治。",
        space: "在线IDE + 作品展示 + 社区。",
        econ: "会员订阅。",
        risk: "用户增长缓慢。",
        atomic_unit: "Repl (代码项目)",
        distribution: "时间序 60% + 热门排序 30% + 推荐算法 10%",
        death_risk: "用户增长缓慢",
        tags: ["#编程", "#在线IDE", "#社区"],
        scores: [55, 50, 60, 40, 55],
        timeline: [
            { year: "2016", event: "Replit成立" },
            { year: "2019", event: "用户增长加速" },
            { year: "2021", event: "推出Teams功能" },
            { year: "2022", event: "AI功能集成" }
        ],
        key_decisions: [
            "在线IDE建立价值",
            "作品展示建立社区",
            "Teams功能拓展市场",
            "AI功能增强体验"
        ]
    },
    codesandbox: {
        title: "CodeSandbox",
        subtitle: "在线代码编辑器",
        dao: "代码是创作。分享是学习。",
        gov: "平台管理。社区自治。",
        space: "在线编辑器 + 作品展示 + 社区。",
        econ: "会员订阅。",
        risk: "用户增长缓慢。",
        atomic_unit: "Sandbox (代码项目)",
        distribution: "时间序 60% + 热门排序 30% + 推荐算法 10%",
        death_risk: "用户增长缓慢",
        tags: ["#前端", "#代码", "#社区"],
        scores: [50, 45, 55, 35, 50],
        timeline: [
            { year: "2017", event: "CodeSandbox成立" },
            { year: "2019", event: "用户增长加速" },
            { year: "2021", event: "推出Teams功能" },
            { year: "2022", event: "AI功能集成" }
        ],
        key_decisions: [
            "在线编辑器建立价值",
            "作品展示建立社区",
            "Teams功能拓展市场",
            "AI功能增强体验"
        ]
    },
    her: {
        title: "Her",
        subtitle: "女同与酷儿社交应用",
        dao: "身份是连接。社区是归属。",
        gov: "平台规则。社区自治。",
        space: "匹配聊天 + 活动社区 + 内容。",
        econ: "订阅 + 广告。",
        risk: "用户基数小，增长缓慢。",
        atomic_unit: "匹配 (Match) / 活动 (Event)",
        distribution: "算法匹配 70% + 活动推荐 30%",
        death_risk: "用户增长缓慢",
        tags: ["#LGBTQ+", "#女同", "#社交"],
        scores: [70, 60, 65, 50, 55],
        timeline: [
            { year: "2013", event: "Her成立" },
            { year: "2016", event: "用户增长加速" },
            { year: "2019", event: "推出Premium订阅" },
            { year: "2021", event: "用户突破500万" }
        ],
        key_decisions: [
            "专注女同与酷儿社区",
            "活动功能增强连接",
            "Premium订阅变现",
            "但用户增长缓慢"
        ]
    },
    lex: {
        title: "Lex",
        subtitle: "女同与非二元社交应用",
        dao: "文字是连接。身份是归属。",
        gov: "平台规则。社区自治。",
        space: "文字匹配 + 社区讨论。",
        econ: "订阅。",
        risk: "用户基数小，增长缓慢。",
        atomic_unit: "个人资料 (Profile)",
        distribution: "算法匹配 100%",
        death_risk: "用户增长缓慢",
        tags: ["#LGBTQ+", "#女同", "#社交"],
        scores: [75, 50, 70, 30, 50],
        timeline: [
            { year: "2017", event: "Lex成立" },
            { year: "2019", event: "用户增长加速" },
            { year: "2021", event: "推出订阅功能" },
            { year: "2022", event: "用户增长稳定" }
        ],
        key_decisions: [
            "文字匹配建立特色",
            "专注女同与非二元",
            "订阅功能变现",
            "但用户增长缓慢"
        ]
    },
    hornet: {
        title: "Hornet",
        subtitle: "男同社交应用",
        dao: "身份是连接。社区是归属。",
        gov: "平台规则。社区自治。",
        space: "匹配聊天 + 内容社区 + 活动。",
        econ: "订阅 + 广告。",
        risk: "用户基数小，增长缓慢。",
        atomic_unit: "匹配 (Match)",
        distribution: "算法匹配 80% + 内容推荐 20%",
        death_risk: "用户增长缓慢",
        tags: ["#LGBTQ+", "#男同", "#社交"],
        scores: [65, 60, 60, 55, 55],
        timeline: [
            { year: "2011", event: "Hornet成立" },
            { year: "2015", event: "用户增长加速" },
            { year: "2019", event: "推出Premium订阅" },
            { year: "2021", event: "用户突破2500万" }
        ],
        key_decisions: [
            "专注男同社区",
            "内容功能增强粘性",
            "Premium订阅变现",
            "但增长缓慢"
        ]
    },
    jackd: {
        title: "Jack'd",
        subtitle: "男同社交应用",
        dao: "身份是连接。社区是归属。",
        gov: "平台规则。社区自治。",
        space: "匹配聊天 + 内容社区。",
        econ: "订阅 + 广告。",
        risk: "用户基数小，增长缓慢。",
        atomic_unit: "匹配 (Match)",
        distribution: "算法匹配 100%",
        death_risk: "用户增长缓慢",
        tags: ["#LGBTQ+", "#男同", "#社交"],
        scores: [60, 55, 55, 50, 50],
        timeline: [
            { year: "2010", event: "Jack'd成立" },
            { year: "2015", event: "用户增长加速" },
            { year: "2019", event: "推出Premium订阅" },
            { year: "2021", event: "用户增长放缓" }
        ],
        key_decisions: [
            "专注男同社区",
            "Premium订阅变现",
            "但增长缓慢",
            "面临竞争压力"
        ]
    },
    taimi: {
        title: "Taimi",
        subtitle: "LGBTQ+社交应用",
        dao: "身份是连接。社区是归属。",
        gov: "平台规则。社区自治。",
        space: "匹配聊天 + 内容社区 + 直播。",
        econ: "订阅 + 广告。",
        risk: "用户基数小，增长缓慢。",
        atomic_unit: "匹配 (Match)",
        distribution: "算法匹配 70% + 内容推荐 30%",
        death_risk: "用户增长缓慢",
        tags: ["#LGBTQ+", "#社交", "#社区"],
        scores: [70, 60, 65, 55, 60],
        timeline: [
            { year: "2017", event: "Taimi成立" },
            { year: "2019", event: "用户增长加速" },
            { year: "2021", event: "推出Premium订阅" },
            { year: "2022", event: "用户突破1000万" }
        ],
        key_decisions: [
            "专注LGBTQ+社区",
            "直播功能增强粘性",
            "Premium订阅变现",
            "但增长缓慢"
        ]
    },
    feeld: {
        title: "Feeld",
        subtitle: "多元关系社交应用",
        dao: "开放是价值。连接是归属。",
        gov: "平台规则。社区自治。",
        space: "匹配聊天 + 内容社区。",
        econ: "订阅。",
        risk: "用户基数小，增长缓慢。",
        atomic_unit: "匹配 (Match)",
        distribution: "算法匹配 100%",
        death_risk: "用户增长缓慢",
        tags: ["#LGBTQ+", "#多元关系", "#社交"],
        scores: [75, 55, 70, 40, 55],
        timeline: [
            { year: "2014", event: "Feeld成立" },
            { year: "2017", event: "用户增长加速" },
            { year: "2020", event: "推出Premium订阅" },
            { year: "2021", event: "用户增长稳定" }
        ],
        key_decisions: [
            "专注多元关系社区",
            "Premium订阅变现",
            "但用户增长缓慢",
            "面临社会接受度挑战"
        ]
    },
    blued: {
        title: "Blued",
        subtitle: "中国LGBTQ+社交应用",
        dao: "身份是连接。社区是归属。",
        gov: "平台规则。内容审核。",
        space: "匹配聊天 + 直播 + 内容社区。",
        econ: "直播打赏 + 广告。",
        risk: "监管压力，内容审核严格。",
        atomic_unit: "匹配 (Match) / 直播 (Live)",
        distribution: "算法匹配 60% + 直播推荐 40%",
        death_risk: "监管压力与内容审核",
        tags: ["#LGBTQ+", "#中国", "#社交"],
        scores: [70, 60, 65, 60, 60],
        timeline: [
            { year: "2012", event: "Blued成立" },
            { year: "2016", event: "用户增长加速" },
            { year: "2019", event: "推出直播功能" },
            { year: "2021", event: "面临监管压力" }
        ],
        key_decisions: [
            "专注中国LGBTQ+社区",
            "直播功能增强粘性",
            "内容审核应对监管",
            "但监管压力持续"
        ]
    },
    zank: {
        title: "Zank",
        subtitle: "中国LGBTQ+社交应用",
        dao: "身份是连接。社区是归属。",
        gov: "平台规则。内容审核。",
        space: "匹配聊天 + 内容社区。",
        econ: "订阅 + 广告。",
        risk: "监管压力，用户流失。",
        atomic_unit: "匹配 (Match)",
        distribution: "算法匹配 100%",
        death_risk: "监管压力与用户流失",
        tags: ["#LGBTQ+", "#中国", "#社交"],
        scores: [65, 55, 60, 45, 50],
        timeline: [
            { year: "2013", event: "Zank成立" },
            { year: "2016", event: "用户增长加速" },
            { year: "2019", event: "面临监管压力" },
            { year: "2021", event: "用户流失" }
        ],
        key_decisions: [
            "专注中国LGBTQ+社区",
            "但监管压力持续",
            "用户流失严重",
            "面临生存挑战"
        ]
    },
    lespark: {
        title: "Lespark",
        subtitle: "中国女同社交应用",
        dao: "身份是连接。社区是归属。",
        gov: "平台规则。内容审核。",
        space: "匹配聊天 + 内容社区。",
        econ: "订阅 + 广告。",
        risk: "监管压力，用户流失。",
        atomic_unit: "匹配 (Match)",
        distribution: "算法匹配 100%",
        death_risk: "监管压力与用户流失",
        tags: ["#LGBTQ+", "#女同", "#中国"],
        scores: [70, 50, 65, 40, 50],
        timeline: [
            { year: "2014", event: "Lespark成立" },
            { year: "2017", event: "用户增长加速" },
            { year: "2019", event: "面临监管压力" },
            { year: "2021", event: "用户流失" }
        ],
        key_decisions: [
            "专注中国女同社区",
            "但监管压力持续",
            "用户流失严重",
            "面临生存挑战"
        ]
    },
    plurk: {
        title: "Plurk",
        subtitle: "台湾微博社交平台",
        dao: "时间线是故事。互动是连接。",
        gov: "社区自治。时间线排序。",
        space: "时间线 + 互动社区。",
        econ: "会员订阅 + 广告。",
        risk: "用户增长缓慢，被其他平台替代。",
        atomic_unit: "Plurk (消息)",
        distribution: "时间线 100%",
        death_risk: "用户增长缓慢",
        tags: ["#社交", "#微博", "#台湾"],
        scores: [60, 40, 55, 30, 50],
        timeline: [
            { year: "2008", event: "Plurk成立" },
            { year: "2010", event: "用户增长高峰" },
            { year: "2015", event: "用户增长放缓" },
            { year: "2021", event: "保持稳定用户群" }
        ],
        key_decisions: [
            "时间线设计建立特色",
            "但用户增长缓慢",
            "面临其他平台竞争",
            "保持小而美的社区"
        ]
    },
    mixi: {
        title: "Mixi",
        subtitle: "日本早期社交网络",
        dao: "连接是价值。日记是表达。",
        gov: "平台管理。社区自治。",
        space: "个人主页 + 日记 + 社区。",
        econ: "广告。",
        risk: "被其他平台替代，用户流失。",
        atomic_unit: "日记 (Diary)",
        distribution: "时间线 100%",
        death_risk: "用户流失",
        tags: ["#社交", "#日本", "#早期"],
        scores: [70, 30, 60, 20, 45],
        timeline: [
            { year: "2004", event: "Mixi成立" },
            { year: "2008", event: "用户增长高峰" },
            { year: "2012", event: "用户流失开始" },
            { year: "2021", event: "用户大幅减少" }
        ],
        key_decisions: [
            "早期建立日本社交网络",
            "日记功能建立特色",
            "但被其他平台替代",
            "用户流失严重"
        ]
    },
    cyworld: {
        title: "Cyworld",
        subtitle: "韩国早期社交网络",
        dao: "迷你屋是身份。连接是价值。",
        gov: "平台管理。社区自治。",
        space: "迷你屋 + 日记 + 社区。",
        econ: "虚拟物品销售。",
        risk: "被其他平台替代，用户流失。",
        atomic_unit: "迷你屋 (Minihompy)",
        distribution: "时间线 100%",
        death_risk: "用户流失",
        tags: ["#社交", "#韩国", "#早期"],
        scores: [75, 30, 70, 50, 50],
        timeline: [
            { year: "1999", event: "Cyworld成立" },
            { year: "2005", event: "用户增长高峰" },
            { year: "2010", event: "用户流失开始" },
            { year: "2021", event: "用户大幅减少" }
        ],
        key_decisions: [
            "早期建立韩国社交网络",
            "迷你屋功能建立特色",
            "虚拟物品销售变现",
            "但被其他平台替代"
        ]
    },
    hi5: {
        title: "Hi5",
        subtitle: "早期社交网络",
        dao: "连接是价值。游戏是粘性。",
        gov: "平台管理。社区自治。",
        space: "个人主页 + 游戏 + 社区。",
        econ: "广告 + 游戏内购。",
        risk: "被其他平台替代，用户流失。",
        atomic_unit: "个人主页 (Profile)",
        distribution: "时间线 100%",
        death_risk: "用户流失",
        tags: ["#社交", "#早期", "#游戏"],
        scores: [60, 30, 55, 40, 45],
        timeline: [
            { year: "2003", event: "Hi5成立" },
            { year: "2008", event: "用户增长高峰" },
            { year: "2012", event: "用户流失开始" },
            { year: "2021", event: "用户大幅减少" }
        ],
        key_decisions: [
            "早期建立社交网络",
            "游戏功能增强粘性",
            "但被其他平台替代",
            "用户流失严重"
        ]
    },
    orkut: {
        title: "Orkut",
        subtitle: "Google早期社交网络",
        dao: "连接是价值。社区是归属。",
        gov: "Google管理。社区自治。",
        space: "个人主页 + 社区 + 游戏。",
        econ: "广告。",
        risk: "被Google关闭，用户流失。",
        atomic_unit: "个人主页 (Profile)",
        distribution: "时间线 100%",
        death_risk: "被Google关闭",
        tags: ["#社交", "#早期", "#Google"],
        scores: [65, 30, 60, 20, 50],
        timeline: [
            { year: "2004", event: "Orkut成立" },
            { year: "2008", event: "用户增长高峰" },
            { year: "2014", event: "被Google关闭" },
            { year: "2021", event: "已关闭" }
        ],
        key_decisions: [
            "Google早期社交尝试",
            "但被Facebook等替代",
            "最终被Google关闭",
            "用户迁移到其他平台"
        ]
    },
    friendster: {
        title: "Friendster",
        subtitle: "早期社交网络",
        dao: "连接是价值。六度分隔。",
        gov: "平台管理。社区自治。",
        space: "个人主页 + 好友网络。",
        econ: "广告。",
        risk: "技术问题，用户流失。",
        atomic_unit: "个人主页 (Profile)",
        distribution: "好友网络 100%",
        death_risk: "技术问题导致用户流失",
        tags: ["#社交", "#早期", "#历史"],
        scores: [70, 20, 65, 15, 50],
        timeline: [
            { year: "2002", event: "Friendster成立" },
            { year: "2005", event: "用户增长高峰" },
            { year: "2008", event: "技术问题导致用户流失" },
            { year: "2015", event: "转型为游戏平台" }
        ],
        key_decisions: [
            "早期建立社交网络",
            "但技术问题导致用户流失",
            "被MySpace和Facebook替代",
            "最终转型为游戏平台"
        ]
    },
    path: {
        title: "Path",
        subtitle: "私密社交网络",
        dao: "私密是价值。小圈子是归属。",
        gov: "平台管理。私密设计。",
        space: "私密分享 + 小圈子。",
        econ: "订阅。",
        risk: "用户增长缓慢，最终关闭。",
        atomic_unit: "分享 (Post)",
        distribution: "时间线 100%",
        death_risk: "用户增长缓慢导致关闭",
        tags: ["#社交", "#私密", "#小圈子"],
        scores: [80, 30, 75, 25, 40],
        timeline: [
            { year: "2010", event: "Path成立" },
            { year: "2012", event: "用户增长加速" },
            { year: "2015", event: "用户增长放缓" },
            { year: "2018", event: "被关闭" }
        ],
        key_decisions: [
            "私密社交建立特色",
            "小圈子设计增强信任",
            "但用户增长缓慢",
            "最终被关闭"
        ]
    },
    ello: {
        title: "Ello",
        subtitle: "艺术社交网络",
        dao: "艺术是身份。创作是表达。",
        gov: "社区自治。无广告。",
        space: "作品展示 + 社区讨论。",
        econ: "会员订阅。",
        risk: "用户增长缓慢。",
        atomic_unit: "作品 (Post)",
        distribution: "时间线 100%",
        death_risk: "用户增长缓慢",
        tags: ["#艺术", "#社交", "#无广告"],
        scores: [70, 30, 65, 20, 45],
        timeline: [
            { year: "2014", event: "Ello成立" },
            { year: "2015", event: "用户增长加速" },
            { year: "2017", event: "用户增长放缓" },
            { year: "2021", event: "保持小而美的社区" }
        ],
        key_decisions: [
            "无广告模式建立特色",
            "专注艺术社区",
            "但用户增长缓慢",
            "保持小而美的社区"
        ]
    },
    diaspora: {
        title: "Diaspora",
        subtitle: "去中心化社交网络",
        dao: "去中心是自由。隐私是价值。",
        gov: "去中心化架构。社区自治。",
        space: "个人节点 + 联邦网络。",
        econ: "捐赠。",
        risk: "用户增长缓慢，技术复杂。",
        atomic_unit: "分享 (Post)",
        distribution: "时间线 100%",
        death_risk: "用户增长缓慢",
        tags: ["#去中心化", "#隐私", "#开源"],
        scores: [60, 20, 55, 10, 40],
        timeline: [
            { year: "2010", event: "Diaspora成立" },
            { year: "2012", event: "开源发布" },
            { year: "2015", event: "用户增长缓慢" },
            { year: "2021", event: "保持小众社区" }
        ],
        key_decisions: [
            "去中心化架构建立特色",
            "开源模式建立信任",
            "但技术复杂影响采用",
            "保持小众社区"
        ]
    },
    yikyak: {
        title: "Yik Yak",
        subtitle: "匿名本地社交",
        dao: "匿名是自由。本地是连接。",
        gov: "平台管理。匿名设计。",
        space: "匿名消息 + 本地社区。",
        econ: "广告。",
        risk: "内容问题，被关闭。",
        atomic_unit: "Yak (消息)",
        distribution: "地理位置 100%",
        death_risk: "内容问题导致关闭",
        tags: ["#匿名", "#本地", "#社交"],
        scores: [50, 40, 60, 30, 55],
        timeline: [
            { year: "2013", event: "Yik Yak成立" },
            { year: "2014", event: "用户增长加速" },
            { year: "2016", event: "内容问题导致关闭" },
            { year: "2021", event: "重新上线但用户流失" }
        ],
        key_decisions: [
            "匿名本地社交建立特色",
            "但内容问题导致关闭",
            "重新上线但用户流失",
            "面临生存挑战"
        ]
    },
    whisper: {
        title: "Whisper",
        subtitle: "匿名分享应用",
        dao: "匿名是自由。分享是表达。",
        gov: "平台管理。匿名设计。",
        space: "匿名分享 + 社区讨论。",
        econ: "广告。",
        risk: "内容问题，用户流失。",
        atomic_unit: "Whisper (分享)",
        distribution: "热门排序 60% + 推荐算法 40%",
        death_risk: "内容问题导致用户流失",
        tags: ["#匿名", "#分享", "#社交"],
        scores: [55, 50, 60, 35, 50],
        timeline: [
            { year: "2012", event: "Whisper成立" },
            { year: "2014", event: "用户增长加速" },
            { year: "2017", event: "内容问题导致用户流失" },
            { year: "2021", event: "用户大幅减少" }
        ],
        key_decisions: [
            "匿名分享建立特色",
            "但内容问题导致用户流失",
            "面临监管压力",
            "用户大幅减少"
        ]
    },
    jodel: {
        title: "Jodel",
        subtitle: "匿名本地社交",
        dao: "匿名是自由。本地是连接。",
        gov: "平台管理。匿名设计。",
        space: "匿名消息 + 本地社区。",
        econ: "广告。",
        risk: "内容问题，用户流失。",
        atomic_unit: "Jodel (消息)",
        distribution: "地理位置 100%",
        death_risk: "内容问题导致用户流失",
        tags: ["#匿名", "#本地", "#社交"],
        scores: [50, 40, 60, 30, 50],
        timeline: [
            { year: "2014", event: "Jodel成立" },
            { year: "2016", event: "用户增长加速" },
            { year: "2019", event: "内容问题导致用户流失" },
            { year: "2021", event: "用户大幅减少" }
        ],
        key_decisions: [
            "匿名本地社交建立特色",
            "但内容问题导致用户流失",
            "面临监管压力",
            "用户大幅减少"
        ]
    },
    amino: {
        title: "Amino",
        subtitle: "兴趣社区平台",
        dao: "兴趣是连接。社区是归属。",
        gov: "社区自治。管理员体系。",
        space: "兴趣社区 + 内容分享。",
        econ: "会员订阅 + 广告。",
        risk: "用户增长缓慢，商业化困难。",
        atomic_unit: "帖子 (Post)",
        distribution: "社区时间线 100%",
        death_risk: "用户增长缓慢",
        tags: ["#兴趣", "#社区", "#垂直"],
        scores: [75, 40, 70, 40, 60],
        timeline: [
            { year: "2014", event: "Amino成立" },
            { year: "2017", event: "用户增长加速" },
            { year: "2020", event: "用户增长放缓" },
            { year: "2021", event: "保持稳定用户群" }
        ],
        key_decisions: [
            "兴趣社区建立特色",
            "管理员体系建立自治",
            "但用户增长缓慢",
            "商业化困难"
        ]
    },
    yubo: {
        title: "Yubo",
        subtitle: "青少年社交应用",
        dao: "年龄是连接。视频是表达。",
        gov: "平台规则。年龄验证。",
        space: "视频聊天 + 直播 + 社区。",
        econ: "会员订阅 + 广告。",
        risk: "安全风险，监管压力。",
        atomic_unit: "直播 (Live)",
        distribution: "算法推荐 70% + 地理位置 30%",
        death_risk: "安全风险与监管压力",
        tags: ["#青少年", "#视频", "#社交"],
        scores: [60, 60, 65, 50, 60],
        timeline: [
            { year: "2015", event: "Yubo成立" },
            { year: "2018", event: "用户增长加速" },
            { year: "2020", event: "安全措施加强" },
            { year: "2021", event: "面临监管压力" }
        ],
        key_decisions: [
            "专注青少年社交",
            "视频功能增强体验",
            "安全措施应对风险",
            "但监管压力持续"
        ]
    },
    imo: {
        title: "IMO",
        subtitle: "视频聊天应用",
        dao: "视频是连接。实时是价值。",
        gov: "平台管理。实时通信。",
        space: "视频聊天 + 群组。",
        econ: "广告。",
        risk: "用户增长缓慢。",
        atomic_unit: "视频通话 (Call)",
        distribution: "联系人列表 100%",
        death_risk: "用户增长缓慢",
        tags: ["#视频", "#聊天", "#通信"],
        scores: [50, 30, 45, 25, 40],
        timeline: [
            { year: "2007", event: "IMO成立" },
            { year: "2012", event: "用户增长加速" },
            { year: "2017", event: "用户增长放缓" },
            { year: "2021", event: "用户稳定" }
        ],
        key_decisions: [
            "视频聊天建立特色",
            "但用户增长缓慢",
            "面临其他平台竞争",
            "用户稳定但增长缓慢"
        ]
    },
    wechat_mini_program: {
        title: "微信小程序",
        subtitle: "小程序生态社区",
        dao: "生态是价值。连接是目标。",
        gov: "微信管理。开发者生态。",
        space: "小程序 + 用户 + 开发者。",
        econ: "交易分成 + 广告。",
        risk: "生态过度商业化，体验下降。",
        atomic_unit: "小程序 (Mini Program)",
        distribution: "搜索 + 推荐算法 100%",
        death_risk: "生态过度商业化",
        tags: ["#小程序", "#生态", "#微信"],
        scores: [50, 70, 60, 80, 85],
        timeline: [
            { year: "2017", event: "微信小程序上线" },
            { year: "2019", event: "用户增长加速" },
            { year: "2021", event: "生态成熟" },
            { year: "2022", event: "商业化加速" }
        ],
        key_decisions: [
            "小程序生态建立价值",
            "开发者生态建立护城河",
            "但商业化加速",
            "体验可能下降"
        ]
    },
    alipay_life: {
        title: "支付宝生活",
        subtitle: "本地生活社区",
        dao: "生活是连接。服务是价值。",
        gov: "支付宝管理。商家生态。",
        space: "生活服务 + 评价社区。",
        econ: "交易佣金 + 广告。",
        risk: "竞争激烈，用户增长缓慢。",
        atomic_unit: "服务 (Service)",
        distribution: "地理位置 + 推荐算法 100%",
        death_risk: "竞争激烈导致用户增长缓慢",
        tags: ["#本地生活", "#服务", "#支付宝"],
        scores: [60, 60, 65, 75, 70],
        timeline: [
            { year: "2015", event: "支付宝生活上线" },
            { year: "2018", event: "用户增长加速" },
            { year: "2020", event: "竞争加剧" },
            { year: "2021", event: "用户增长放缓" }
        ],
        key_decisions: [
            "本地生活建立价值",
            "商家生态建立护城河",
            "但竞争激烈",
            "用户增长缓慢"
        ]
    },
    scruff: {
        title: "Scruff",
        subtitle: "男同社交应用",
        dao: "身份是连接。社区是归属。",
        gov: "平台规则。社区自治。",
        space: "匹配聊天 + 内容社区 + 活动。",
        econ: "订阅 + 广告。",
        risk: "用户基数小，增长缓慢。",
        atomic_unit: "匹配 (Match)",
        distribution: "算法匹配 80% + 内容推荐 20%",
        death_risk: "用户增长缓慢",
        tags: ["#LGBTQ+", "#男同", "#社交"],
        scores: [65, 55, 60, 50, 55],
        timeline: [
            { year: "2010", event: "Scruff成立" },
            { year: "2014", event: "用户增长加速" },
            { year: "2018", event: "推出Premium订阅" },
            { year: "2021", event: "用户增长稳定" }
        ],
        key_decisions: [
            "专注男同社区",
            "内容功能增强粘性",
            "Premium订阅变现",
            "但增长缓慢"
        ]
    },
    tiya: {
        title: "Tiya",
        subtitle: "音频社交应用",
        dao: "声音是连接。实时是价值。",
        gov: "平台管理。房间管理。",
        space: "音频房间 + 实时对话。",
        econ: "虚拟礼物 + 广告。",
        risk: "用户增长缓慢，内容质量下降。",
        atomic_unit: "房间 (Room)",
        distribution: "推荐算法 70% + 关注流 30%",
        death_risk: "用户增长缓慢",
        tags: ["#音频", "#社交", "#实时"],
        scores: [55, 50, 60, 40, 50],
        timeline: [
            { year: "2020", event: "Tiya成立" },
            { year: "2021", event: "用户增长加速" },
            { year: "2022", event: "用户增长放缓" },
            { year: "2023", event: "保持稳定" }
        ],
        key_decisions: [
            "音频社交建立特色",
            "虚拟礼物变现",
            "但用户增长缓慢",
            "面临竞争压力"
        ]
    },
    yalla: {
        title: "Yalla",
        subtitle: "中东音频社交应用",
        dao: "声音是连接。文化是归属。",
        gov: "平台管理。房间管理。",
        space: "音频房间 + 实时对话 + 游戏。",
        econ: "虚拟礼物 + 游戏内购。",
        risk: "区域限制，增长受限。",
        atomic_unit: "房间 (Room)",
        distribution: "推荐算法 70% + 关注流 30%",
        death_risk: "区域限制导致增长受限",
        tags: ["#音频", "#社交", "#中东"],
        scores: [60, 50, 65, 55, 60],
        timeline: [
            { year: "2016", event: "Yalla成立" },
            { year: "2020", event: "用户增长加速" },
            { year: "2021", event: "上市" },
            { year: "2022", event: "用户增长稳定" }
        ],
        key_decisions: [
            "专注中东市场",
            "游戏功能增强粘性",
            "虚拟礼物变现",
            "但区域限制增长"
        ]
    },
    houseparty: {
        title: "Houseparty",
        subtitle: "视频群聊应用",
        dao: "视频是连接。实时是价值。",
        gov: "平台管理。房间管理。",
        space: "视频房间 + 实时对话 + 游戏。",
        econ: "广告。",
        risk: "用户增长缓慢，被其他平台替代。",
        atomic_unit: "房间 (Room)",
        distribution: "好友邀请 100%",
        death_risk: "用户增长缓慢",
        tags: ["#视频", "#社交", "#实时"],
        scores: [70, 40, 75, 30, 60],
        timeline: [
            { year: "2016", event: "Houseparty成立" },
            { year: "2020", event: "疫情期间用户激增" },
            { year: "2021", event: "用户增长放缓" },
            { year: "2022", event: "被关闭" }
        ],
        key_decisions: [
            "视频群聊建立特色",
            "疫情期间用户激增",
            "但用户增长放缓",
            "最终被关闭"
        ]
    },
    marco_polo: {
        title: "Marco Polo",
        subtitle: "视频消息应用",
        dao: "视频是表达。异步是价值。",
        gov: "平台管理。消息系统。",
        space: "视频消息 + 群组。",
        econ: "订阅。",
        risk: "用户增长缓慢。",
        atomic_unit: "视频消息 (Video Message)",
        distribution: "时间线 100%",
        death_risk: "用户增长缓慢",
        tags: ["#视频", "#消息", "#异步"],
        scores: [65, 30, 60, 35, 50],
        timeline: [
            { year: "2014", event: "Marco Polo成立" },
            { year: "2017", event: "用户增长加速" },
            { year: "2020", event: "用户增长放缓" },
            { year: "2021", event: "保持稳定" }
        ],
        key_decisions: [
            "视频消息建立特色",
            "异步设计增强体验",
            "但用户增长缓慢",
            "面临其他平台竞争"
        ]
    },
    bereal: {
        title: "BeReal",
        subtitle: "真实分享应用",
        dao: "真实是价值。瞬间是连接。",
        gov: "平台规则。时间限制。",
        space: "真实瞬间 + 朋友网络。",
        econ: "广告。",
        risk: "用户增长缓慢，新鲜感消退。",
        atomic_unit: "BeReal (真实瞬间)",
        distribution: "时间线 100%",
        death_risk: "新鲜感消退导致用户流失",
        tags: ["#真实", "#分享", "#瞬间"],
        scores: [75, 40, 70, 25, 55],
        timeline: [
            { year: "2020", event: "BeReal成立" },
            { year: "2022", event: "用户增长加速" },
            { year: "2023", event: "用户增长放缓" },
            { year: "2024", event: "保持稳定" }
        ],
        key_decisions: [
            "真实分享建立特色",
            "时间限制增强真实性",
            "但新鲜感消退",
            "用户增长放缓"
        ]
    },
    lemon8: {
        title: "Lemon8",
        subtitle: "生活方式分享应用",
        dao: "生活是表达。分享是连接。",
        gov: "平台管理。内容审核。",
        space: "生活方式内容 + 社区。",
        econ: "广告。",
        risk: "用户增长缓慢，竞争激烈。",
        atomic_unit: "帖子 (Post)",
        distribution: "推荐算法 70% + 关注流 30%",
        death_risk: "用户增长缓慢",
        tags: ["#生活方式", "#分享", "#社区"],
        scores: [60, 60, 65, 40, 55],
        timeline: [
            { year: "2020", event: "Lemon8成立" },
            { year: "2022", event: "用户增长加速" },
            { year: "2023", event: "用户增长放缓" },
            { year: "2024", event: "保持稳定" }
        ],
        key_decisions: [
            "生活方式分享建立特色",
            "但用户增长缓慢",
            "面临其他平台竞争",
            "保持稳定用户群"
        ]
    },
    codewars_alt: {
        title: "CodeWars",
        subtitle: "编程挑战社区",
        dao: "挑战是成长。排名是身份。",
        gov: "社区贡献题目。算法评分。",
        space: "编程挑战 + 排名系统 + 讨论。",
        econ: "免费。",
        risk: "用户增长缓慢。",
        atomic_unit: "Kata (挑战)",
        distribution: "难度排序 70% + 推荐算法 30%",
        death_risk: "用户增长缓慢",
        tags: ["#编程", "#挑战", "#学习"],
        scores: [50, 70, 50, 10, 50],
        timeline: [
            { year: "2013", event: "CodeWars成立" },
            { year: "2016", event: "用户增长加速" },
            { year: "2019", event: "社区活跃度高峰" },
            { year: "2021", event: "保持稳定" }
        ],
        key_decisions: [
            "社区贡献题目建立生态",
            "排名系统增强竞争",
            "免费模式建立口碑",
            "但增长缓慢"
        ]
    },
    codementor_alt: {
        title: "Codementor",
        subtitle: "编程导师平台",
        dao: "指导是价值。学习是成长。",
        gov: "平台匹配。评价系统。",
        space: "导师匹配 + 在线指导 + 社区。",
        econ: "交易佣金。",
        risk: "匹配效率低，用户流失。",
        atomic_unit: "会话 (Session)",
        distribution: "匹配算法 100%",
        death_risk: "匹配效率低导致用户流失",
        tags: ["#编程", "#导师", "#学习"],
        scores: [60, 50, 50, 60, 55],
        timeline: [
            { year: "2013", event: "Codementor成立" },
            { year: "2016", event: "用户增长加速" },
            { year: "2019", event: "推出企业服务" },
            { year: "2021", event: "用户增长放缓" }
        ],
        key_decisions: [
            "导师匹配建立价值",
            "在线指导增强体验",
            "企业服务拓展市场",
            "但匹配效率需提升"
        ]
    },
    replit_alt: {
        title: "Replit",
        subtitle: "在线编程环境",
        dao: "编程是创作。分享是学习。",
        gov: "平台管理。社区自治。",
        space: "在线IDE + 作品展示 + 社区。",
        econ: "会员订阅。",
        risk: "用户增长缓慢。",
        atomic_unit: "Repl (代码项目)",
        distribution: "时间序 60% + 热门排序 30% + 推荐算法 10%",
        death_risk: "用户增长缓慢",
        tags: ["#编程", "#在线IDE", "#社区"],
        scores: [55, 50, 60, 40, 55],
        timeline: [
            { year: "2016", event: "Replit成立" },
            { year: "2019", event: "用户增长加速" },
            { year: "2021", event: "推出Teams功能" },
            { year: "2022", event: "AI功能集成" }
        ],
        key_decisions: [
            "在线IDE建立价值",
            "作品展示建立社区",
            "Teams功能拓展市场",
            "AI功能增强体验"
        ]
    },
    codesandbox_alt: {
        title: "CodeSandbox",
        subtitle: "在线代码编辑器",
        dao: "代码是创作。分享是学习。",
        gov: "平台管理。社区自治。",
        space: "在线编辑器 + 作品展示 + 社区。",
        econ: "会员订阅。",
        risk: "用户增长缓慢。",
        atomic_unit: "Sandbox (代码项目)",
        distribution: "时间序 60% + 热门排序 30% + 推荐算法 10%",
        death_risk: "用户增长缓慢",
        tags: ["#前端", "#代码", "#社区"],
        scores: [50, 45, 55, 35, 50],
        timeline: [
            { year: "2017", event: "CodeSandbox成立" },
            { year: "2019", event: "用户增长加速" },
            { year: "2021", event: "推出Teams功能" },
            { year: "2022", event: "AI功能集成" }
        ],
        key_decisions: [
            "在线编辑器建立价值",
            "作品展示建立社区",
            "Teams功能拓展市场",
            "AI功能增强体验"
        ]
    },
    meetup: {
        title: "Meetup",
        subtitle: "线下活动组织平台",
        dao: "线下是连接。兴趣是归属。",
        gov: "组织者自治。平台规则。",
        space: "活动组织 + 社区讨论。",
        econ: "组织者付费 + 广告。",
        risk: "疫情影响，用户流失。",
        atomic_unit: "活动 (Event)",
        distribution: "地理位置 + 兴趣分类 100%",
        death_risk: "疫情影响导致用户流失",
        tags: ["#线下", "#活动", "#社区"],
        scores: [80, 30, 75, 50, 70],
        timeline: [
            { year: "2002", event: "Meetup成立" },
            { year: "2010", event: "用户增长加速" },
            { year: "2020", event: "疫情影响用户流失" },
            { year: "2021", event: "线上活动功能增加" }
        ],
        key_decisions: [
            "线下活动建立价值",
            "兴趣分类增强发现",
            "但疫情影响严重",
            "线上活动功能应对"
        ]
    },
    eventbrite: {
        title: "Eventbrite",
        subtitle: "活动票务平台",
        dao: "活动是连接。票务是价值。",
        gov: "平台管理。活动组织者。",
        space: "活动展示 + 票务 + 社区。",
        econ: "票务佣金。",
        risk: "竞争激烈，疫情影响。",
        atomic_unit: "活动 (Event)",
        distribution: "推荐算法 70% + 地理位置 30%",
        death_risk: "竞争激烈与疫情影响",
        tags: ["#活动", "#票务", "#社区"],
        scores: [60, 50, 65, 60, 65],
        timeline: [
            { year: "2006", event: "Eventbrite成立" },
            { year: "2012", event: "用户增长加速" },
            { year: "2020", event: "疫情影响严重" },
            { year: "2021", event: "线上活动功能增加" }
        ],
        key_decisions: [
            "活动票务建立价值",
            "但疫情影响严重",
            "线上活动功能应对",
            "但竞争激烈"
        ]
    },
    wechat_work: {
        title: "企业微信",
        subtitle: "企业协作与沟通平台",
        dao: "协作是价值。效率是目标。",
        gov: "企业管理员。平台规则。",
        space: "企业通讯 + 协作工具 + 应用生态。",
        econ: "企业订阅。",
        risk: "竞争激烈，功能同质化。",
        atomic_unit: "消息 (Message)",
        distribution: "组织架构 100%",
        death_risk: "竞争激烈导致用户增长缓慢",
        tags: ["#企业", "#协作", "#微信"],
        scores: [40, 50, 45, 70, 60],
        timeline: [
            { year: "2016", event: "企业微信上线" },
            { year: "2018", event: "用户增长加速" },
            { year: "2020", event: "疫情期间用户激增" },
            { year: "2021", event: "功能持续优化" }
        ],
        key_decisions: [
            "企业协作建立价值",
            "微信生态集成增强粘性",
            "但竞争激烈",
            "功能持续优化"
        ]
    },
    viber: {
        title: "Viber",
        subtitle: "即时通讯应用",
        dao: "通讯是连接。免费是价值。",
        gov: "平台管理。通讯系统。",
        space: "即时通讯 + 群组 + 社区。",
        econ: "广告 + 付费功能。",
        risk: "用户增长缓慢，被其他平台替代。",
        atomic_unit: "消息 (Message)",
        distribution: "联系人列表 100%",
        death_risk: "用户增长缓慢",
        tags: ["#即时通讯", "#免费", "#社交"],
        scores: [60, 40, 55, 35, 50],
        timeline: [
            { year: "2010", event: "Viber成立" },
            { year: "2014", event: "被Rakuten收购" },
            { year: "2017", event: "用户增长放缓" },
            { year: "2021", event: "用户稳定" }
        ],
        key_decisions: [
            "免费通讯建立价值",
            "被Rakuten收购获得资源",
            "但用户增长缓慢",
            "面临其他平台竞争"
        ]
    },
    line_works: {
        title: "LINE Works",
        subtitle: "企业协作平台（LINE旗下）",
        dao: "协作是价值。效率是目标。",
        gov: "企业管理员。平台规则。",
        space: "团队协作 + 文档 + 聊天。",
        econ: "企业订阅。",
        risk: "竞争激烈，用户增长缓慢。",
        atomic_unit: "消息 (Message)",
        distribution: "团队时间线 100%",
        death_risk: "竞争激烈导致用户增长缓慢",
        tags: ["#企业", "#协作", "#LINE"],
        scores: [40, 50, 45, 70, 55],
        timeline: [
            { year: "2016", event: "LINE Works成立" },
            { year: "2018", event: "用户增长加速" },
            { year: "2020", event: "用户增长放缓" },
            { year: "2021", event: "保持稳定" }
        ],
        key_decisions: [
            "企业协作建立特色",
            "LINE生态集成增强粘性",
            "但竞争激烈",
            "用户增长缓慢"
        ]
    },
    
    tencent_video: {
        title: "腾讯视频 (Tencent Video)",
        subtitle: "腾讯生态内的长视频平台",
        dao: "IP驱动，内容为王。基于腾讯社交生态的流量导入。",
        gov: "中心化内容运营。腾讯集团统一管理，版权采购与自制并重。",
        space: "数字影院。沉浸式观看体验，弹幕增强互动。",
        econ: "会员订阅 + 广告。VIP会员体系建立内容付费习惯。",
        risk: "版权成本高昂，亏损严重。过度依赖头部IP。",
        atomic_unit: "长视频剧集 / 电影",
        distribution: "编辑分发 60% + 算法分发 30% + 社交分发 10%",
        death_risk: "版权成本失控与盈利能力不足",
        tags: ["#长视频", "#IP", "#会员"],
        scores: [40, 70, 60, 65, 50],
        timeline: [
            { year: "2011", event: "腾讯视频上线" },
            { year: "2015", event: "VIP会员体系上线" },
            { year: "2017", event: "加大自制内容投入" },
            { year: "2020", event: "与爱奇艺、优酷形成三足鼎立" },
            { year: "2022", event: "降本增效，减少版权采购" }
        ],
        key_decisions: [
            "依托腾讯社交生态，获得流量优势",
            "VIP会员模式建立付费习惯",
            "加大自制内容投入，降低版权依赖",
            "但版权成本高企，长期亏损"
        ]
    },
    
    iqiyi: {
        title: "爱奇艺 (iQIYI)",
        subtitle: "独立长视频平台",
        dao: "内容与用户体验。\"悦享品质\"，追求高质量内容。",
        gov: "算法 + 编辑。AI推荐优化观看体验，编辑精选优质内容。",
        space: "个性化影院。算法推荐个人定制化内容流。",
        econ: "会员订阅 + 广告 + 内容付费。多元化变现模式。",
        risk: "持续亏损，内容成本居高不下。",
        atomic_unit: "长视频剧集 / 综艺 / 电影",
        distribution: "算法分发 50% + 编辑分发 40% + 社交分发 10%",
        death_risk: "资金链断裂与内容质量下降",
        tags: ["#长视频", "#算法", "#会员"],
        scores: [30, 75, 65, 70, 45],
        timeline: [
            { year: "2010", event: "爱奇艺成立" },
            { year: "2013", event: "与百度合并，获得流量支持" },
            { year: "2015", event: "VIP会员突破1000万" },
            { year: "2018", event: "纳斯达克上市" },
            { year: "2020", event: "推出\"迷雾剧场\"，自制内容崛起" }
        ],
        key_decisions: [
            "早期独立运营，建立品牌认知",
            "VIP会员模式创新，建立付费习惯",
            "加大算法投入，提升推荐精准度",
            "自制内容战略，打造\"迷雾剧场\"等IP",
            "但持续亏损是最大挑战"
        ]
    },
    
    youku: {
        title: "优酷 (Youku)",
        subtitle: "阿里生态的长视频平台",
        dao: "内容与电商结合。\"这世界很酷\"，连接内容与消费。",
        gov: "阿里生态协同。与淘宝、支付宝等业务打通。",
        space: "内容 + 电商。观看内容可直接购买相关商品。",
        econ: "会员 + 广告 + 电商导流。探索内容电商化。",
        risk: "与阿里生态协同度不足，内容竞争力下降。",
        atomic_unit: "长视频 / 短视频 / UGC内容",
        distribution: "算法分发 45% + 编辑分发 40% + 电商导流 15%",
        death_risk: "内容质量下滑与用户流失",
        tags: ["#长视频", "#电商", "#UGC"],
        scores: [35, 65, 55, 60, 40],
        timeline: [
            { year: "2006", event: "优酷成立，早期UGC视频平台" },
            { year: "2012", event: "与土豆合并" },
            { year: "2015", event: "被阿里收购" },
            { year: "2016", event: "私有化退市" },
            { year: "2020", event: "内容竞争力下降，市场份额缩小" }
        ],
        key_decisions: [
            "早期UGC模式积累用户",
            "与土豆合并，整合资源",
            "被阿里收购，获得资金支持",
            "探索内容电商化，但效果有限",
            "内容投入不足，竞争力下降"
        ]
    },
    
    tudou: {
        title: "土豆网 (Tudou)",
        subtitle: "中国最早的视频分享网站",
        dao: "每个人都是生活的导演。UGC内容创造，草根文化。",
        gov: "去中心化。用户上传，平台审核。",
        space: "视频分享广场。每个人都可以上传和观看。",
        econ: "广告 + 版权内容。后期转向版权采购。",
        risk: "版权成本上升，UGC内容质量不足。",
        atomic_unit: "UGC短视频 / 用户上传内容",
        distribution: "用户上传 70% + 编辑分发 20% + 社交分发 10%",
        death_risk: "版权成本上升与内容质量不足导致用户流失",
        tags: ["#UGC", "#早期", "#草根"],
        scores: [60, 40, 50, 45, 30],
        timeline: [
            { year: "2005", event: "土豆网成立，中国最早视频网站" },
            { year: "2011", event: "纳斯达克上市" },
            { year: "2012", event: "与优酷合并" },
            { year: "2017", event: "品牌逐步淡出，整合进优酷" }
        ],
        key_decisions: [
            "早期UGC模式，降低内容成本",
            "\"每个人都是生活的导演\"理念吸引用户",
            "但版权成本上升，UGC质量不足",
            "与优酷合并，最终被整合"
        ]
    },
    
    snack_video: {
        title: "Snack Video",
        subtitle: "快手旗下的国际化短视频平台",
        dao: "普惠与真实。延续快手\"看见每一种生活\"的理念，强调真实内容。",
        gov: "去中心化算法 + 本地化运营。流量向普通创作者倾斜，避免头部垄断。",
        space: "短视频集市。双列选择，保留用户选择权，区别于TikTok的单列沉浸。",
        econ: "广告 + 直播打赏 + 电商。探索多元化变现模式。",
        risk: "在TikTok主导的海外市场，差异化定位面临挑战。",
        atomic_unit: "短视频 15-60s",
        distribution: "算法分发 60% + 社交分发 30% + 编辑分发 10%",
        death_risk: "海外市场TikTok优势明显，差异化不足导致用户流失",
        tags: ["#短视频", "#国际化", "#快手", "#普惠"],
        scores: [50, 70, 60, 65, 55],
        timeline: [
            { year: "2018", event: "Snack Video在印尼上线，快手国际化战略" },
            { year: "2019", event: "扩展到更多东南亚市场" },
            { year: "2020", event: "日活快速增长，但面临TikTok竞争" },
            { year: "2021", event: "加强本地化运营，强调普惠算法" },
            { year: "2022", event: "在TikTok主导的市场中寻找差异化定位" }
        ],
        key_decisions: [
            "快手国际化战略，对标TikTok进入海外市场",
            "延续快手普惠算法，流量向普通创作者倾斜",
            "双列设计保留用户选择权，区别于TikTok单列",
            "但TikTok在海外市场优势明显，竞争激烈",
            "差异化定位不足，用户增长面临挑战"
        ]
    },
    
    bondee: {
        title: "Bondee",
        subtitle: "3D虚拟形象社交应用",
        dao: "虚拟形象与真实情感。3D Avatar连接用户，表达个性。",
        gov: "去中心化社交。用户可以自由设计空间和形象。",
        space: "3D虚拟房间。用户可以装饰和分享自己的空间。",
        econ: "虚拟道具 + 会员订阅。Avatar和空间装饰付费。",
        risk: "用户新鲜感过后留存不足，商业化困难。",
        atomic_unit: "3D Avatar / 虚拟空间",
        distribution: "社交分发 70% + 发现页 30%",
        death_risk: "用户留存不足与商业化困难",
        tags: ["#3D", "#Avatar", "#虚拟社交"],
        scores: [70, 40, 80, 50, 30],
        timeline: [
            { year: "2023", event: "Bondee上线，3D虚拟社交概念" },
            { year: "2023", event: "在亚洲市场快速获得关注" },
            { year: "2023", event: "用户新鲜感过后留存下降" },
            { year: "2024", event: "面临用户流失挑战" }
        ],
        key_decisions: [
            "3D虚拟形象创新，吸引年轻用户",
            "用户可以自由装饰虚拟空间",
            "社交分享增强互动",
            "但新鲜感过后，用户留存不足",
            "商业化模式仍在探索中"
        ]
    },
    
    // === 新增案例：国际社区产品 ===
    vkontakte: {
        title: "VK (VKontakte)",
        subtitle: "俄罗斯最大的社交网络",
        dao: "本土化社交与文化认同。在俄罗斯及前苏联国家拥有主导地位。",
        gov: "中心化平台治理。受政府监管，内容审查严格。",
        space: "综合社交广场。整合社交、音乐、视频、游戏等功能。",
        econ: "广告 + 虚拟道具 + 游戏。多元化商业生态。",
        risk: "地缘政治风险，国际化受限，用户增长放缓。",
        atomic_unit: "帖子 / 消息 / 音频 / 视频",
        distribution: "社交分发 60% + 算法分发 30% + 编辑分发 10%",
        death_risk: "地缘政治风险与国际化失败",
        tags: ["#俄罗斯", "#综合社交", "#本土化"],
        scores: [75, 60, 70, 65, 50],
        timeline: [
            { year: "2006", event: "VKontakte在俄罗斯成立" },
            { year: "2011", event: "成为俄罗斯最大的社交网络" },
            { year: "2014", event: "创始人离开，公司被收购" },
            { year: "2022", event: "受制裁影响，国际化受阻" }
        ],
        key_decisions: [
            "早期专注俄罗斯市场，建立本土优势",
            "整合多种功能，成为综合性平台",
            "但国际化不足，受地缘政治影响大"
        ]
    },
    
    yandex_zen: {
        title: "Yandex Zen",
        subtitle: "俄罗斯的个性化内容推荐平台",
        dao: "个性化内容消费。算法推荐适合用户兴趣的内容。",
        gov: "算法主导。个性化推荐系统决定内容分发。",
        space: "个性化信息流。每个人看到的内容不同。",
        econ: "广告分成 + 内容付费。与创作者分享收益。",
        risk: "算法偏见，信息茧房，地缘政治风险。",
        atomic_unit: "图文内容 / 短视频",
        distribution: "算法分发 95% + 编辑分发 5%",
        death_risk: "算法偏见与地缘政治风险",
        tags: ["#算法", "#个性化", "#内容推荐"],
        scores: [20, 85, 60, 70, 60],
        timeline: [
            { year: "2015", event: "Yandex Zen上线" },
            { year: "2017", event: "引入创作者分成模式" },
            { year: "2020", event: "日活快速增长" },
            { year: "2022", event: "受制裁影响" }
        ],
        key_decisions: [
            "个性化算法推荐，提升内容消费效率",
            "创作者分成模式，激励内容生产",
            "但过度依赖算法，存在信息茧房风险"
        ]
    },
    
    naver_band: {
        title: "Naver Band",
        subtitle: "韩国的小组社交应用",
        dao: "小圈子深度社交。基于真实关系的紧密社区。",
        gov: "小组自治。每个Band由管理员自主管理。",
        space: "私密小组空间。强调真实关系和隐私保护。",
        econ: "广告 + 会员服务。商业化相对克制。",
        risk: "用户增长放缓，年轻用户流失到Instagram、TikTok。",
        atomic_unit: "帖子 / 相册 / 日程 / 投票",
        distribution: "社交分发 90% + 推荐 10%",
        death_risk: "年轻用户流失与增长停滞",
        tags: ["#韩国", "#小组", "#私密"],
        scores: [85, 40, 60, 30, 40],
        timeline: [
            { year: "2012", event: "Naver Band上线" },
            { year: "2014", event: "用户快速增长，成为韩国主流社交应用" },
            { year: "2018", event: "用户增长放缓" },
            { year: "2022", event: "面临年轻用户流失挑战" }
        ],
        key_decisions: [
            "专注小圈子社交，建立真实关系",
            "多功能整合（日程、投票等），增强实用性",
            "但面对新社交平台冲击，用户增长停滞"
        ]
    },
    
    mixi_alt: {
        title: "Mixi",
        subtitle: "日本早期社交网络的兴衰",
        dao: "实名社交与文化认同。早期日本最受欢迎的社交网络。",
        gov: "中心化平台治理。严格的实名制和隐私保护。",
        space: "实名社交广场。强调真实身份和关系。",
        econ: "广告 + 游戏 + 会员服务。",
        risk: "移动端转型失败，用户流失到Twitter、Line。",
        atomic_unit: "日记 / 社区 / 游戏",
        distribution: "社交分发 70% + 推荐 30%",
        death_risk: "移动端转型失败",
        tags: ["#日本", "#实名", "#早期"],
        scores: [70, 50, 50, 40, 20],
        timeline: [
            { year: "2004", event: "Mixi成立，日本最早的社交网络之一" },
            { year: "2006", event: "在日本市场占据主导地位" },
            { year: "2010", event: "用户开始流失到Twitter" },
            { year: "2013", event: "移动端转型失败，用户大量流失" }
        ],
        key_decisions: [
            "早期建立实名社交，获得用户信任",
            "但PC时代思维，移动端转型迟缓",
            "面对新平台冲击，未能及时调整"
        ]
    },
    
    cyworld_alt: {
        title: "Cyworld",
        subtitle: "韩国早期社交网络的先驱",
        dao: "迷你房间与虚拟形象。个性化虚拟空间表达自我。",
        gov: "平台中心化治理。",
        space: "虚拟房间 + 好友网络。每个用户有自己的数字房间。",
        econ: "虚拟道具销售。\"豆\"（虚拟货币）购买装饰品。",
        risk: "Facebook进入韩国后用户大量流失，移动端转型失败。",
        atomic_unit: "迷你房间 / 迷你小屋 / 日记",
        distribution: "社交分发 100%",
        death_risk: "外部竞争与移动端转型失败",
        tags: ["#韩国", "#虚拟房间", "#早期"],
        scores: [80, 40, 70, 50, 15],
        timeline: [
            { year: "1999", event: "Cyworld在韩国上线" },
            { year: "2003", event: "成为韩国最受欢迎的社交网络" },
            { year: "2008", event: "Facebook进入韩国，用户开始流失" },
            { year: "2013", event: "移动端转型失败，用户大量流失" }
        ],
        key_decisions: [
            "创新性的迷你房间概念，吸引年轻用户",
            "虚拟道具销售模式，早期变现成功",
            "但面对Facebook竞争和移动转型，未能适应"
        ]
    },
    
    // === 新增案例：垂直社区 - 运动健身 ===
    keep: {
        title: "Keep",
        subtitle: "中国最大的运动健身社区",
        dao: "健康生活方式的养成。运动记录与社区激励。",
        gov: "内容运营 + 算法推荐。官方引导 + 用户生成内容。",
        space: "运动社区 + 课程中心。既有社交也有内容消费。",
        econ: "会员订阅 + 运动装备电商 + 线下健身房。",
        risk: "商业化压力导致内容质量下降，用户流失。",
        atomic_unit: "运动记录 / 课程视频 / 社区动态",
        distribution: "算法分发 50% + 社交分发 30% + 编辑分发 20%",
        death_risk: "商业化过度导致社区氛围稀释",
        tags: ["#运动", "#健身", "#社区"],
        scores: [60, 70, 70, 65, 55],
        timeline: [
            { year: "2015", event: "Keep上线，专注运动健身" },
            { year: "2017", event: "用户突破1亿" },
            { year: "2018", event: "推出会员服务和电商" },
            { year: "2021", event: "上市，商业化加速" }
        ],
        key_decisions: [
            "早期免费课程积累用户",
            "社区功能增强用户粘性",
            "商业化探索（会员、电商、线下）"
        ]
    },
    
    nike_run_club: {
        title: "Nike Run Club",
        subtitle: "耐克的跑步社区应用",
        dao: "跑步文化与运动精神。连接全球跑者，记录跑步历程。",
        gov: "品牌主导。Nike品牌运营，强调品牌价值。",
        space: "跑步记录 + 社区挑战。个人数据 + 社交互动。",
        econ: "品牌营销工具。间接促进鞋服销售。",
        risk: "作为品牌工具，社区功能相对薄弱，用户粘性不足。",
        atomic_unit: "跑步记录 / 挑战 / 成就",
        distribution: "社交分发 60% + 推荐 40%",
        death_risk: "社区功能薄弱导致用户流失",
        tags: ["#跑步", "#品牌", "#运动"],
        scores: [50, 60, 50, 20, 40],
        timeline: [
            { year: "2010", event: "Nike+ Run Club上线" },
            { year: "2015", event: "整合Nike+生态" },
            { year: "2020", event: "疫情期间用户增长" },
            { year: "2022", event: "社区功能优化" }
        ],
        key_decisions: [
            "品牌工具定位，增强品牌忠诚度",
            "跑步数据记录，满足跑者需求",
            "但社区功能相对薄弱"
        ]
    },
    
    // === 新增案例：垂直社区 - 音乐 ===
    soundcloud: {
        title: "SoundCloud",
        subtitle: "独立音乐人的音频分享平台",
        dao: "独立音乐与发现。为独立音乐人提供发布和发现平台。",
        gov: "开放平台。创作者上传，社区发现。",
        space: "音频流媒体 + 创作者社区。",
        econ: "订阅服务 + 广告 + 音乐分发。",
        risk: "版权问题，盈利困难，面临Spotify等竞争。",
        atomic_unit: "音频轨道 / 播客",
        distribution: "社交分发 50% + 推荐 30% + 搜索 20%",
        death_risk: "版权问题与盈利困难",
        tags: ["#音乐", "#独立", "#音频"],
        scores: [50, 50, 60, 40, 50],
        timeline: [
            { year: "2007", event: "SoundCloud成立" },
            { year: "2012", event: "成为独立音乐人的首选平台" },
            { year: "2017", event: "面临版权问题，大规模裁员" },
            { year: "2023", event: "仍在寻求可持续商业模式" }
        ],
        key_decisions: [
            "早期专注独立音乐人，建立差异化",
            "开放平台降低发布门槛",
            "但版权和盈利问题一直困扰"
        ]
    },
    
    bandcamp: {
        title: "Bandcamp",
        subtitle: "独立音乐人的数字音乐商店",
        dao: "直接支持音乐人。艺术家获得高比例收入分成。",
        gov: "去中心化。艺术家自主定价和管理。",
        space: "数字音乐商店 + 艺术家页面。",
        econ: "销售分成（艺术家获得85-90%）。",
        risk: "小众市场，增长有限，面临流媒体竞争。",
        atomic_unit: "专辑 / 单曲 / 商品",
        distribution: "艺术家自主 + 推荐 30%",
        death_risk: "小众市场增长受限",
        tags: ["#音乐", "#独立", "#直接支持"],
        scores: [30, 30, 40, 30, 40],
        timeline: [
            { year: "2008", event: "Bandcamp成立" },
            { year: "2012", event: "艺术家分成模式获得认可" },
            { year: "2020", event: "疫情期间艺术家收入增加" },
            { year: "2022", event: "被Epic Games收购" }
        ],
        key_decisions: [
            "高比例分成模式，直接支持艺术家",
            "艺术家自主定价，增强控制权",
            "但市场相对小众"
        ]
    },
    
    // === 新增案例：垂直社区 - 艺术设计 ===
    artstation_alt: {
        title: "ArtStation",
        subtitle: "数字艺术家的作品展示平台",
        dao: "专业作品展示与学习。为数字艺术家提供作品集和灵感。",
        gov: "平台治理。专业作品审核，保持高质量。",
        space: "作品集 + 学习资源 + 招聘。",
        econ: "会员订阅 + 课程销售 + 招聘服务。",
        risk: "用户增长放缓，面临DeviantArt、Behance竞争。",
        atomic_unit: "艺术作品 / 教程 / 项目",
        distribution: "推荐 50% + 搜索 30% + 社交 20%",
        death_risk: "市场竞争激烈",
        tags: ["#艺术", "#数字艺术", "#作品集"],
        scores: [40, 60, 50, 50, 45],
        timeline: [
            { year: "2014", event: "ArtStation成立，专注数字艺术" },
            { year: "2016", event: "被Unreal Engine收购" },
            { year: "2019", event: "推出学习平台ArtStation Learning" },
            { year: "2022", event: "成为游戏行业标准作品集平台" }
        ],
        key_decisions: [
            "专注数字艺术领域，建立专业壁垒",
            "与Unreal Engine整合，服务游戏行业",
            "学习平台增强用户粘性"
        ]
    },
    
    dribbble_alt: {
        title: "Dribbble",
        subtitle: "设计师的视觉作品展示社区",
        dao: "设计灵感与职业发展。展示作品，获得反馈，寻找工作。",
        gov: "邀请制 + 社区自治。早期邀请制保证质量。",
        space: "作品展示 + 设计讨论 + 招聘。",
        econ: "高级会员 + 招聘服务 + 课程。",
        risk: "邀请制门槛高，新用户增长受限。",
        atomic_unit: "设计作品 / Shot",
        distribution: "推荐 60% + 社交 30% + 搜索 10%",
        death_risk: "邀请制限制增长",
        tags: ["#设计", "#视觉", "#作品集"],
        scores: [50, 50, 60, 50, 50],
        timeline: [
            { year: "2009", event: "Dribbble成立，采用邀请制" },
            { year: "2013", event: "开放注册，用户增长" },
            { year: "2017", event: "推出招聘服务" },
            { year: "2021", event: "被Tiny收购" }
        ],
        key_decisions: [
            "早期邀请制建立高质量社区",
            "开放注册平衡增长与质量",
            "招聘服务增强商业价值"
        ]
    },
    
    // === 新增案例：垂直社区 - 教育学习 ===
    udemy: {
        title: "Udemy",
        subtitle: "在线课程市场平台",
        dao: "技能学习与职业提升。任何人都可以创建和销售课程。",
        gov: "开放平台 + 质量审核。创作者自主定价，平台审核。",
        space: "课程市场 + 学习社区。",
        econ: "课程销售分成（平台30%，创作者70%）。",
        risk: "课程质量参差不齐，竞争激烈，用户留存不足。",
        atomic_unit: "在线课程 / 视频教程",
        distribution: "搜索 40% + 推荐 35% + 分类 25%",
        death_risk: "课程质量参差不齐",
        tags: ["#教育", "#在线课程", "#技能"],
        scores: [30, 60, 50, 65, 55],
        timeline: [
            { year: "2010", event: "Udemy成立" },
            { year: "2015", event: "课程数量快速增长" },
            { year: "2020", event: "疫情期间用户激增" },
            { year: "2021", event: "上市" }
        ],
        key_decisions: [
            "开放平台模式，降低课程创建门槛",
            "创作者高分成，激励内容生产",
            "但质量管控是挑战"
        ]
    },
    
    skillshare: {
        title: "Skillshare",
        subtitle: "创意技能学习的订阅平台",
        dao: "创意学习与项目实践。强调动手实践，不只是观看。",
        gov: "订阅制 + 质量审核。创作者按观看时间获得收入。",
        space: "课程库 + 项目挑战 + 社区。",
        econ: "会员订阅（创作者按观看时间分成）。",
        risk: "订阅模式对用户门槛高，创作者收入不稳定。",
        atomic_unit: "课程 / 项目 / 社区讨论",
        distribution: "推荐 50% + 搜索 30% + 分类 20%",
        death_risk: "订阅模式门槛高",
        tags: ["#教育", "#创意", "#订阅"],
        scores: [40, 55, 60, 55, 50],
        timeline: [
            { year: "2010", event: "Skillshare成立" },
            { year: "2015", event: "转向订阅模式" },
            { year: "2020", event: "疫情期间增长迅速" },
            { year: "2022", event: "专注于创意技能领域" }
        ],
        key_decisions: [
            "订阅模式，降低单次购买门槛",
            "专注创意技能，建立差异化",
            "项目挑战增强学习效果"
        ]
    },
    
    // === 新增案例：垂直社区 - 美食 ===
    xiachufang: {
        title: "下厨房",
        subtitle: "中国最大的美食社区",
        dao: "美食分享与学习。记录美食生活，学习烹饪技巧。",
        gov: "社区运营 + 算法推荐。官方引导 + 用户生成内容。",
        space: "菜谱社区 + 电商。内容与消费结合。",
        econ: "电商 + 广告 + 会员服务。",
        risk: "商业化过度，社区氛围稀释，面临小红书等竞争。",
        atomic_unit: "菜谱 / 作品 / 日记",
        distribution: "推荐 50% + 搜索 30% + 社交 20%",
        death_risk: "商业化过度",
        tags: ["#美食", "#菜谱", "#社区"],
        scores: [60, 65, 70, 70, 60],
        timeline: [
            { year: "2011", event: "下厨房上线" },
            { year: "2015", event: "推出电商功能" },
            { year: "2018", event: "用户突破1亿" },
            { year: "2022", event: "商业化加速，社区氛围变化" }
        ],
        key_decisions: [
            "早期专注菜谱分享，建立用户基础",
            "电商功能形成商业闭环",
            "但商业化可能影响社区氛围"
        ]
    },
    
    // === 新增案例：垂直社区 - 旅行 ===
    tripadvisor: {
        title: "TripAdvisor",
        subtitle: "全球最大的旅行点评社区",
        dao: "真实旅行体验分享。帮助旅行者做出更好的决策。",
        gov: "用户生成内容 + 平台审核。真实性是核心。",
        space: "点评社区 + 预订平台。",
        econ: "预订佣金 + 广告。",
        risk: "虚假评论问题，面临Google、Booking.com竞争。",
        atomic_unit: "点评 / 照片 / 问答",
        distribution: "搜索 50% + 推荐 30% + 社交 20%",
        death_risk: "虚假评论问题",
        tags: ["#旅行", "#点评", "#社区"],
        scores: [50, 60, 55, 70, 60],
        timeline: [
            { year: "2000", event: "TripAdvisor成立" },
            { year: "2011", event: "上市" },
            { year: "2015", event: "成为全球最大旅行网站" },
            { year: "2020", event: "疫情影响严重，营收下降" }
        ],
        key_decisions: [
            "用户生成内容，建立内容壁垒",
            "预订功能形成商业闭环",
            "但虚假评论问题一直存在"
        ]
    },
    
    // === 新增案例：Web3/去中心化 ===
    friendtech: {
        title: "Friend.tech",
        subtitle: "基于Base链的社交代币化平台",
        dao: "社交关系金融化。购买朋友的份额，获得私密聊天权限。",
        gov: "智能合约治理。去中心化协议，代码即法律。",
        space: "加密聊天室 + 交易市场。",
        econ: "交易手续费分成。平台与用户分享收益。",
        risk: "监管风险，投机性强，可持续性存疑。",
        atomic_unit: "Keys（份额） / 聊天消息",
        distribution: "价格排序 + 推荐",
        death_risk: "监管风险与可持续性",
        tags: ["#Web3", "#社交代币", "#加密"],
        scores: [60, 40, 30, 50, 70],
        timeline: [
            { year: "2023", event: "Friend.tech上线，快速获得关注" },
            { year: "2023", event: "用户激增，交易量暴涨" },
            { year: "2024", event: "热度下降，用户流失" }
        ],
        key_decisions: [
            "创新性的社交代币化概念",
            "结合加密和社交，吸引加密用户",
            "但投机性强，可持续性存疑"
        ]
    },
    
    // === 新增案例：企业协作 ===
    notion_alt: {
        title: "Notion",
        subtitle: "一体化工作空间与知识库",
        dao: "知识的组织与协作。\"All-in-one\"工作空间理念。",
        gov: "团队自主管理。灵活的权限系统。",
        space: "文档 + 数据库 + 协作。",
        econ: "订阅服务（免费版 + 付费版）。",
        risk: "功能复杂，学习曲线陡，面临微软、Google竞争。",
        atomic_unit: "页面 / 数据库 / 块（Block）",
        distribution: "团队内部分发 100%",
        death_risk: "功能复杂导致用户流失",
        tags: ["#协作", "#知识管理", "#All-in-one"],
        scores: [70, 50, 80, 60, 50],
        timeline: [
            { year: "2016", event: "Notion成立" },
            { year: "2019", event: "推出个人免费版，用户快速增长" },
            { year: "2020", event: "疫情期间远程办公需求激增" },
            { year: "2022", event: "估值超100亿美元" }
        ],
        key_decisions: [
            "\"All-in-one\"理念，整合多种工具",
            "免费版降低使用门槛",
            "但功能复杂是双刃剑"
        ]
    },
    
    goodreads_alt: {
        title: "Goodreads",
        subtitle: "全球最大的读书社交网络",
        dao: "阅读文化与分享。记录阅读历程，分享书评，发现好书。",
        gov: "Amazon主导。被Amazon收购后商业化增强。",
        space: "图书数据库 + 社交网络。",
        econ: "广告 + 图书销售导流。",
        risk: "Amazon主导后商业化过度，用户体验下降，面临StoryGraph等竞争。",
        atomic_unit: "书评 / 阅读进度 / 书单",
        distribution: "社交 50% + 推荐 30% + 搜索 20%",
        death_risk: "商业化过度",
        tags: ["#图书", "#阅读", "#社交"],
        scores: [60, 50, 55, 50, 50],
        timeline: [
            { year: "2007", event: "Goodreads成立" },
            { year: "2013", event: "被Amazon收购" },
            { year: "2020", event: "用户增长，但商业化增强" },
            { year: "2023", event: "面临StoryGraph等新平台竞争" }
        ],
        key_decisions: [
            "早期专注读书社区，建立用户基础",
            "被Amazon收购获得资源",
            "但商业化可能影响用户体验"
        ]
    },
    
    // === 继续新增案例 ===
    storygraph: {
        title: "The StoryGraph",
        subtitle: "Goodreads的替代品",
        dao: "阅读记录与推荐。算法推荐更精准，界面更简洁。",
        gov: "独立运营。用户所有，避免商业化过度。",
        space: "图书数据库 + 阅读追踪。",
        econ: "订阅服务。付费功能，无广告。",
        risk: "用户规模小，内容库不如Goodreads丰富。",
        atomic_unit: "书评 / 阅读进度 / 推荐",
        distribution: "推荐 60% + 搜索 40%",
        death_risk: "用户规模不足",
        tags: ["#图书", "#阅读", "#替代品"],
        scores: [40, 50, 50, 30, 45],
        timeline: [
            { year: "2019", event: "The StoryGraph成立" },
            { year: "2021", event: "Goodreads用户不满后增长" },
            { year: "2023", event: "逐步建立用户基础" }
        ],
        key_decisions: [
            "作为Goodreads的替代品，吸引不满用户",
            "更好的算法推荐",
            "但用户规模是挑战"
        ]
    },
    
    meetup_alt: {
        title: "Meetup",
        subtitle: "线下活动组织平台",
        dao: "真实社交连接。基于共同兴趣组织线下活动。",
        gov: "平台 + 群组自治。群组组织者自主管理。",
        space: "活动组织平台 + 群组社区。",
        econ: "组织者付费 + 广告。",
        risk: "疫情影响线下活动，用户流失，面临Eventbrite等竞争。",
        atomic_unit: "活动 / 群组 / 成员",
        distribution: "地理位置 + 兴趣分类",
        death_risk: "疫情影响与竞争",
        tags: ["#线下", "#活动", "#社交"],
        scores: [70, 40, 60, 40, 50],
        timeline: [
            { year: "2002", event: "Meetup成立" },
            { year: "2017", event: "被WeWork收购" },
            { year: "2020", event: "疫情影响严重，用户流失" },
            { year: "2023", event: "逐步恢复" }
        ],
        key_decisions: [
            "专注线下活动，建立真实连接",
            "但疫情暴露了脆弱性"
        ]
    },
    
    eventbrite_alt: {
        title: "Eventbrite",
        subtitle: "活动发布与票务平台",
        dao: "活动发现与票务。帮助组织者发布活动，用户发现和购票。",
        gov: "平台运营。审核活动，保障质量。",
        space: "活动市场 + 票务系统。",
        econ: "票务手续费 + 付费功能。",
        risk: "疫情影响严重，面临Meetup、Facebook Events竞争。",
        atomic_unit: "活动 / 票务",
        distribution: "搜索 + 推荐 + 分类",
        death_risk: "疫情影响",
        tags: ["#活动", "#票务", "#平台"],
        scores: [50, 50, 55, 60, 50],
        timeline: [
            { year: "2006", event: "Eventbrite成立" },
            { year: "2018", event: "上市" },
            { year: "2020", event: "疫情影响，营收暴跌" },
            { year: "2022", event: "逐步恢复" }
        ],
        key_decisions: [
            "票务模式，形成商业闭环",
            "但疫情影响暴露了业务脆弱性"
        ]
    },
    
    nextdoor_alt: {
        title: "Nextdoor",
        subtitle: "邻里社交网络",
        dao: "邻里关系与社区连接。基于地理位置的本地社交。",
        gov: "邻里自治 + 平台审核。",
        space: "邻里社区 + 本地信息。",
        econ: "广告 + 本地商家服务。",
        risk: "用户增长放缓，面临Facebook Groups、邻里微信群竞争。",
        atomic_unit: "帖子 / 本地信息 / 推荐",
        distribution: "地理位置 + 推荐",
        death_risk: "增长放缓",
        tags: ["#邻里", "#本地", "#社交"],
        scores: [70, 50, 55, 50, 50],
        timeline: [
            { year: "2011", event: "Nextdoor成立" },
            { year: "2019", event: "用户增长迅速" },
            { year: "2021", event: "上市" },
            { year: "2023", event: "增长放缓" }
        ],
        key_decisions: [
            "专注邻里社交，建立差异化",
            "本地商家服务形成商业闭环",
            "但增长面临挑战"
        ]
    },
    
    uber_alt: {
        title: "Uber",
        subtitle: "共享出行平台（社区视角）",
        dao: "共享经济与连接。连接司机和乘客，创造新的出行方式。",
        gov: "平台中心化。算法匹配，规则由平台制定。",
        space: "出行市场。",
        econ: "交易抽成。",
        risk: "监管风险，司机权益问题，面临Lyft等竞争。",
        atomic_unit: "行程 / 评分",
        distribution: "地理位置 + 算法匹配",
        death_risk: "监管风险",
        tags: ["#共享经济", "#出行", "#平台"],
        scores: [30, 80, 40, 85, 70],
        timeline: [
            { year: "2009", event: "Uber成立" },
            { year: "2014", event: "快速扩张到全球" },
            { year: "2017", event: "面临监管挑战" },
            { year: "2019", event: "上市" }
        ],
        key_decisions: [
            "共享经济模式创新",
            "快速扩张，但面临监管"
        ]
    },
    
    airbnb_alt: {
        title: "Airbnb",
        subtitle: "共享住宿平台（社区视角）",
        dao: "共享住宿与文化体验。\"Belong anywhere\"，连接房东和房客。",
        gov: "平台治理 + 社区规则。",
        space: "住宿市场 + 体验服务。",
        econ: "交易抽成。",
        risk: "监管风险，安全问题，疫情影响，面临Booking.com等竞争。",
        atomic_unit: "房源 / 预订 / 评价",
        distribution: "搜索 + 推荐 + 地理位置",
        death_risk: "监管风险与安全问题",
        tags: ["#共享经济", "#住宿", "#体验"],
        scores: [40, 70, 60, 80, 65],
        timeline: [
            { year: "2008", event: "Airbnb成立" },
            { year: "2014", event: "快速扩张到全球" },
            { year: "2020", event: "疫情影响严重" },
            { year: "2020", event: "上市" }
        ],
        key_decisions: [
            "共享经济模式，创造新市场",
            "但监管和安全是持续挑战"
        ]
    },
    
    roblox_alt: {
        title: "Roblox",
        subtitle: "游戏创作与社交平台",
        dao: "创作与游戏。用户可以创建游戏，也可以玩游戏。",
        gov: "平台治理 + 创作者自治。",
        space: "游戏世界 + 社交空间。",
        econ: "虚拟货币（Robux）+ 创作者分成。",
        risk: "内容审核问题，面临Minecraft等竞争。",
        atomic_unit: "游戏 / 虚拟物品 / 社交",
        distribution: "推荐 + 搜索 + 社交",
        death_risk: "内容审核问题",
        tags: ["#游戏", "#创作", "#UGC"],
        scores: [80, 60, 85, 75, 60],
        timeline: [
            { year: "2006", event: "Roblox成立" },
            { year: "2015", event: "移动端推出，用户激增" },
            { year: "2021", event: "上市，估值超400亿美元" },
            { year: "2023", event: "成为Z世代主要社交平台" }
        ],
        key_decisions: [
            "UGC游戏平台，降低创作门槛",
            "虚拟经济系统，激励创作者",
            "但内容审核是挑战"
        ]
    },
    
    minecraft: {
        title: "Minecraft",
        subtitle: "沙盒游戏与创意社区",
        dao: "创造与探索。无限可能的世界，用户可以自由创造。",
        gov: "微软主导 + 社区自治。",
        space: "游戏世界 + 服务器社区。",
        econ: "游戏销售 + 市场（皮肤、地图等）。",
        risk: "内容审核问题，面临Roblox等竞争。",
        atomic_unit: "世界 / 服务器 / 模组",
        distribution: "服务器列表 + 推荐",
        death_risk: "内容审核问题",
        tags: ["#游戏", "#沙盒", "#创造"],
        scores: [85, 50, 90, 60, 50],
        timeline: [
            { year: "2009", event: "Minecraft发布" },
            { year: "2014", event: "被微软收购" },
            { year: "2020", event: "用户突破2亿" },
            { year: "2023", event: "持续更新，保持活力" }
        ],
        key_decisions: [
            "沙盒创造玩法，吸引创意用户",
            "社区模组生态，增强可玩性",
            "但内容审核是挑战"
        ]
    },
    
    genshin_impact_alt: {
        title: "原神 (Genshin Impact)",
        subtitle: "开放世界游戏与玩家社区",
        dao: "探索与收集。开放世界，角色收集，剧情体验。",
        gov: "游戏运营主导。版本更新，活动运营。",
        space: "游戏世界 + 社区论坛。",
        econ: "抽卡付费（Gacha）。",
        risk: "内容更新压力，玩家疲劳，面临其他游戏竞争。",
        atomic_unit: "角色 / 武器 / 剧情",
        distribution: "游戏内 + 社区论坛",
        death_risk: "内容更新压力",
        tags: ["#游戏", "#开放世界", "#Gacha"],
        scores: [70, 70, 75, 80, 60],
        timeline: [
            { year: "2020", event: "原神全球发布" },
            { year: "2021", event: "成为现象级游戏" },
            { year: "2022", event: "持续更新，保持热度" },
            { year: "2023", event: "全球玩家突破6000万" }
        ],
        key_decisions: [
            "开放世界设计，吸引探索型玩家",
            "持续内容更新，保持玩家活跃",
            "但更新压力大"
        ]
    },
    
    league_of_legends_alt: {
        title: "League of Legends",
        subtitle: "MOBA游戏与电竞社区",
        dao: "竞技与团队合作。5v5对战，策略与操作。",
        gov: "Riot Games主导。游戏平衡，版本更新。",
        space: "游戏 + 电竞 + 社区。",
        econ: "皮肤销售 + 电竞赛事。",
        risk: "游戏平衡问题，玩家流失，面临新游戏竞争。",
        atomic_unit: "对局 / 英雄 / 皮肤",
        distribution: "匹配系统 + 社区",
        death_risk: "游戏平衡问题",
        tags: ["#游戏", "#MOBA", "#电竞"],
        scores: [80, 65, 70, 75, 55],
        timeline: [
            { year: "2009", event: "英雄联盟发布" },
            { year: "2011", event: "举办第一届世界赛" },
            { year: "2019", event: "成为最受欢迎的游戏之一" },
            { year: "2023", event: "持续更新，保持活力" }
        ],
        key_decisions: [
            "免费游戏+皮肤销售模式",
            "电竞赛事建立品牌",
            "持续平衡调整"
        ]
    },
    
    duolingo_alt: {
        title: "Duolingo",
        subtitle: "语言学习社区",
        dao: "游戏化学习。\"免费学习语言\"，让学习像游戏一样有趣。",
        gov: "算法 + 社区贡献。用户贡献内容，算法优化学习路径。",
        space: "学习平台 + 社区论坛。",
        econ: "广告 + 会员订阅（无广告）。",
        risk: "学习效果争议，用户流失率高，面临Babbel等竞争。",
        atomic_unit: "课程 / 练习 / 成就",
        distribution: "个性化学习路径",
        death_risk: "学习效果争议",
        tags: ["#教育", "#语言", "#游戏化"],
        scores: [50, 70, 60, 55, 50],
        timeline: [
            { year: "2011", event: "Duolingo上线" },
            { year: "2019", event: "用户突破3亿" },
            { year: "2021", event: "上市" },
            { year: "2023", event: "持续优化学习算法" }
        ],
        key_decisions: [
            "免费模式，降低学习门槛",
            "游戏化设计，提升学习兴趣",
            "但学习效果是争议点"
        ]
    },
    
    codecademy: {
        title: "Codecademy",
        subtitle: "编程学习平台",
        dao: "编程学习与练习。交互式编程课程，边学边练。",
        gov: "课程团队 + 社区贡献。",
        space: "课程平台 + 社区论坛。",
        econ: "免费基础课程 + 付费Pro会员。",
        risk: "课程更新慢，面临freeCodeCamp、Udemy等竞争。",
        atomic_unit: "课程 / 练习 / 项目",
        distribution: "课程路径 + 推荐",
        death_risk: "课程更新慢",
        tags: ["#教育", "#编程", "#交互式"],
        scores: [40, 60, 55, 50, 50],
        timeline: [
            { year: "2011", event: "Codecademy成立" },
            { year: "2015", event: "推出Pro会员" },
            { year: "2020", event: "疫情期间用户增长" },
            { year: "2023", event: "持续更新课程" }
        ],
        key_decisions: [
            "交互式学习，降低编程门槛",
            "免费+付费模式",
            "但课程更新是挑战"
        ]
    },
    
    freecodecamp: {
        title: "freeCodeCamp",
        subtitle: "免费编程学习社区",
        dao: "免费编程教育。\"Learn to code for free\"，完全免费。",
        gov: "开源社区。志愿者贡献，开源运营。",
        space: "课程平台 + 社区论坛 + 项目实践。",
        econ: "捐赠 + 认证费用。",
        risk: "依赖志愿者，质量不稳定，面临其他平台竞争。",
        atomic_unit: "课程 / 项目 / 认证",
        distribution: "课程路径",
        death_risk: "依赖志愿者",
        tags: ["#教育", "#编程", "#免费"],
        scores: [60, 50, 55, 30, 45],
        timeline: [
            { year: "2014", event: "freeCodeCamp成立" },
            { year: "2017", event: "课程全面更新" },
            { year: "2020", event: "用户突破千万" },
            { year: "2023", event: "持续开源运营" }
        ],
        key_decisions: [
            "完全免费，降低学习门槛",
            "开源社区模式",
            "但依赖志愿者是挑战"
        ]
    },
    
    hackerrank_alt: {
        title: "HackerRank",
        subtitle: "编程竞赛与招聘平台",
        dao: "编程技能评估。通过编程挑战评估技能，连接企业和求职者。",
        gov: "平台运营。",
        space: "编程挑战 + 招聘平台。",
        econ: "企业招聘服务。",
        risk: "用户流失，面临LeetCode等竞争。",
        atomic_unit: "编程挑战 / 竞赛 / 认证",
        distribution: "难度分类 + 推荐",
        death_risk: "竞争激烈",
        tags: ["#编程", "#竞赛", "#招聘"],
        scores: [40, 60, 50, 65, 55],
        timeline: [
            { year: "2012", event: "HackerRank成立" },
            { year: "2015", event: "推出招聘服务" },
            { year: "2020", event: "疫情期间招聘需求增长" },
            { year: "2023", event: "面临LeetCode竞争" }
        ],
        key_decisions: [
            "编程挑战+招聘结合",
            "但面临激烈竞争"
        ]
    },
    
    leetcode_alt: {
        title: "LeetCode",
        subtitle: "算法练习与面试准备平台",
        dao: "算法学习与面试准备。\"Prepare for coding interviews\"。",
        gov: "平台运营 + 社区贡献。",
        space: "算法题库 + 讨论区 + 竞赛。",
        econ: "免费基础 + 付费Premium会员。",
        risk: "内容同质化，面临其他平台竞争。",
        atomic_unit: "题目 / 题解 / 讨论",
        distribution: "难度分类 + 标签",
        death_risk: "内容同质化",
        tags: ["#编程", "#算法", "#面试"],
        scores: [50, 70, 60, 55, 50],
        timeline: [
            { year: "2015", event: "LeetCode上线" },
            { year: "2018", event: "用户快速增长" },
            { year: "2020", event: "成为程序员必备工具" },
            { year: "2023", event: "持续更新题目" }
        ],
        key_decisions: [
            "专注算法和面试，建立差异化",
            "免费+付费模式",
            "社区讨论增强学习效果"
        ]
    },
    
    codepen_alt: {
        title: "CodePen",
        subtitle: "前端代码分享与学习平台",
        dao: "前端代码实验与分享。在线编写和分享前端代码片段。",
        gov: "平台运营 + 社区自治。",
        space: "代码编辑器 + 社区展示。",
        econ: "免费基础 + 付费Pro会员。",
        risk: "用户增长放缓，面临CodeSandbox等竞争。",
        atomic_unit: "Pen（代码片段） / 集合 / 文章",
        distribution: "热门 + 最新 + 推荐",
        death_risk: "增长放缓",
        tags: ["#编程", "#前端", "#代码分享"],
        scores: [60, 50, 65, 50, 50],
        timeline: [
            { year: "2012", event: "CodePen成立" },
            { year: "2015", event: "成为前端开发者主要工具" },
            { year: "2020", event: "用户增长放缓" },
            { year: "2023", event: "持续更新功能" }
        ],
        key_decisions: [
            "在线代码编辑器创新",
            "社区分享增强学习",
            "但增长面临挑战"
        ]
    },
    
    codesandbox_2: {
        title: "CodeSandbox",
        subtitle: "在线代码编辑器与协作平台",
        dao: "代码协作与分享。在线编辑，实时协作，分享项目。",
        gov: "平台运营。",
        space: "代码编辑器 + 协作空间。",
        econ: "免费基础 + 付费团队版。",
        risk: "面临CodePen、Replit等竞争。",
        atomic_unit: "Sandbox（项目） / 模板",
        distribution: "模板 + 推荐",
        death_risk: "竞争激烈",
        tags: ["#编程", "#编辑器", "#协作"],
        scores: [50, 60, 70, 50, 50],
        timeline: [
            { year: "2017", event: "CodeSandbox上线" },
            { year: "2019", event: "推出协作功能" },
            { year: "2021", event: "被GitHub收购" },
            { year: "2023", event: "持续优化" }
        ],
        key_decisions: [
            "协作功能建立差异化",
            "被GitHub收购获得资源"
        ]
    },
    
    replit_2: {
        title: "Replit",
        subtitle: "在线IDE与学习平台",
        dao: "编程学习与协作。\"Code anything, anywhere\"，降低编程门槛。",
        gov: "平台运营。",
        space: "在线IDE + 学习社区。",
        econ: "免费基础 + 付费会员。",
        risk: "面临CodeSandbox、GitHub Codespaces等竞争。",
        atomic_unit: "Repl（项目） / 模板",
        distribution: "模板 + 推荐",
        death_risk: "竞争激烈",
        tags: ["#编程", "#IDE", "#在线"],
        scores: [50, 60, 70, 50, 50],
        timeline: [
            { year: "2011", event: "Replit成立" },
            { year: "2019", event: "重新定位为学习平台" },
            { year: "2021", event: "估值快速增长" },
            { year: "2023", event: "持续优化" }
        ],
        key_decisions: [
            "在线IDE降低编程门槛",
            "重新定位为学习平台",
            "但竞争激烈"
        ]
    },
    
    // === 继续新增案例：更多垂直社区 ===
    strava_alt: {
        title: "Strava",
        subtitle: "运动社交网络",
        dao: "运动记录与竞争。记录运动数据，与朋友竞争，分享成就。",
        gov: "平台运营。",
        space: "运动数据 + 社交网络。",
        econ: "免费基础 + 付费订阅。",
        risk: "用户增长放缓，面临Apple Fitness、Garmin Connect等竞争。",
        atomic_unit: "活动记录 / 片段 / 挑战",
        distribution: "关注流 + 推荐",
        death_risk: "增长放缓",
        tags: ["#运动", "#跑步", "#骑行"],
        scores: [60, 50, 55, 45, 45],
        timeline: [
            { year: "2009", event: "Strava成立" },
            { year: "2015", event: "用户快速增长" },
            { year: "2020", event: "疫情期间用户激增" },
            { year: "2023", event: "增长放缓" }
        ],
        key_decisions: [
            "运动数据+社交结合",
            "付费订阅模式",
            "但增长面临挑战"
        ]
    },
    
    zwift: {
        title: "Zwift",
        subtitle: "虚拟骑行与跑步平台",
        dao: "虚拟运动与社交。在家骑行和跑步，与全球用户一起运动。",
        gov: "平台运营。",
        space: "虚拟世界 + 运动社区。",
        econ: "订阅服务。",
        risk: "硬件要求高，用户门槛高，面临其他虚拟运动平台竞争。",
        atomic_unit: "虚拟骑行 / 跑步 / 活动",
        distribution: "活动 + 推荐",
        death_risk: "用户门槛高",
        tags: ["#运动", "#虚拟", "#骑行"],
        scores: [50, 60, 70, 55, 50],
        timeline: [
            { year: "2014", event: "Zwift成立" },
            { year: "2018", event: "用户快速增长" },
            { year: "2020", event: "疫情期间需求激增" },
            { year: "2023", event: "持续优化虚拟世界" }
        ],
        key_decisions: [
            "虚拟运动创新概念",
            "但硬件要求是门槛"
        ]
    },
    
    alltrails: {
        title: "AllTrails",
        subtitle: "徒步与户外活动社区",
        dao: "户外探索与分享。发现和记录徒步路线，分享户外体验。",
        gov: "平台运营 + 社区贡献。",
        space: "路线数据库 + 社区。",
        econ: "免费基础 + 付费会员。",
        risk: "用户规模小，面临其他户外应用竞争。",
        atomic_unit: "路线 / 点评 / 照片",
        distribution: "地理位置 + 搜索",
        death_risk: "用户规模小",
        tags: ["#户外", "#徒步", "#路线"],
        scores: [50, 50, 55, 40, 45],
        timeline: [
            { year: "2010", event: "AllTrails成立" },
            { year: "2018", event: "用户增长" },
            { year: "2021", event: "被Outdoor Voices收购" },
            { year: "2023", event: "持续优化" }
        ],
        key_decisions: [
            "专注户外路线，建立差异化",
            "但市场相对小众"
        ]
    },
    
    yelp: {
        title: "Yelp",
        subtitle: "本地商家点评社区",
        dao: "本地生活与评价。帮助用户发现和评价本地商家。",
        gov: "平台运营。",
        space: "点评社区 + 商家信息。",
        econ: "广告 + 商家服务。",
        risk: "虚假评论问题，面临Google Maps、TripAdvisor等竞争。",
        atomic_unit: "点评 / 照片 / 商家",
        distribution: "地理位置 + 搜索 + 推荐",
        death_risk: "虚假评论问题",
        tags: ["#本地", "#点评", "#商家"],
        scores: [50, 60, 55, 65, 60],
        timeline: [
            { year: "2004", event: "Yelp成立" },
            { year: "2012", event: "上市" },
            { year: "2020", event: "疫情影响本地商家" },
            { year: "2023", event: "面临Google Maps竞争" }
        ],
        key_decisions: [
            "专注本地商家点评",
            "但虚假评论是挑战"
        ]
    },
    
    foursquare: {
        title: "Foursquare",
        subtitle: "位置签到与发现平台",
        dao: "位置分享与发现。\"Check-in\"到地点，发现附近有趣的地方。",
        gov: "平台运营。",
        space: "位置签到 + 推荐。",
        econ: "广告 + 商家服务。",
        risk: "用户流失，转型为B2B服务，面临Yelp、Google Maps竞争。",
        atomic_unit: "签到 / 地点 / 推荐",
        distribution: "地理位置",
        death_risk: "用户流失",
        tags: ["#位置", "#签到", "#发现"],
        scores: [60, 50, 55, 50, 40],
        timeline: [
            { year: "2009", event: "Foursquare成立" },
            { year: "2014", event: "拆分Foursquare和Swarm" },
            { year: "2020", event: "转型为B2B位置数据服务" },
            { year: "2023", event: "B2B业务增长" }
        ],
        key_decisions: [
            "位置签到创新概念",
            "但用户流失，转型B2B"
        ]
    },
    
    untappd: {
        title: "Untappd",
        subtitle: "精酿啤酒社交网络",
        dao: "精酿文化与分享。记录和评价精酿啤酒，发现新品。",
        gov: "平台运营 + 社区贡献。",
        space: "啤酒数据库 + 社交网络。",
        econ: "免费基础 + 付费会员。",
        risk: "小众市场，增长有限。",
        atomic_unit: "检查 / 评价 / 徽章",
        distribution: "推荐 + 搜索",
        death_risk: "小众市场",
        tags: ["#精酿", "#啤酒", "#社交"],
        scores: [60, 40, 50, 30, 40],
        timeline: [
            { year: "2010", event: "Untappd上线" },
            { year: "2015", event: "用户增长" },
            { year: "2020", event: "精酿文化普及，用户增长" },
            { year: "2023", event: "保持小众社区" }
        ],
        key_decisions: [
            "专注精酿垂直领域",
            "但市场相对小众"
        ]
    },
    
    // === 新增案例：音频/播客 ===
    anchor: {
        title: "Anchor",
        subtitle: "播客创作与分发平台",
        dao: "播客创作民主化。降低播客创作门槛，免费托管和分发。",
        gov: "Spotify主导。被Spotify收购后整合。",
        space: "播客创作工具 + 分发平台。",
        econ: "免费 + Spotify广告分成。",
        risk: "Spotify主导后独立性下降，面临其他播客平台竞争。",
        atomic_unit: "播客 / 节目 / 片段",
        distribution: "Spotify生态",
        death_risk: "独立性下降",
        tags: ["#播客", "#音频", "#创作"],
        scores: [40, 60, 50, 45, 50],
        timeline: [
            { year: "2015", event: "Anchor成立" },
            { year: "2019", event: "被Spotify收购" },
            { year: "2021", event: "整合进Spotify生态" },
            { year: "2023", event: "成为Spotify播客工具" }
        ],
        key_decisions: [
            "降低播客创作门槛",
            "被Spotify收购获得资源",
            "但独立性下降"
        ]
    },
    
    clubhouse_alt: {
        title: "Clubhouse",
        subtitle: "音频社交的短暂辉煌",
        dao: "实时音频对话。\"Drop-in audio chat\"，即时参与对话。",
        gov: "邀请制 + 社区自治。",
        space: "音频房间 + 俱乐部。",
        econ: "Creator Fund + 付费功能。",
        risk: "热度下降，用户流失，面临Twitter Spaces、Discord等竞争。",
        atomic_unit: "房间 / 俱乐部 / 对话",
        distribution: "推荐 + 关注",
        death_risk: "热度下降",
        tags: ["#音频", "#实时", "#邀请制"],
        scores: [70, 50, 60, 40, 60],
        timeline: [
            { year: "2020", event: "Clubhouse上线，采用邀请制" },
            { year: "2021", event: "疫情期间快速获得关注" },
            { year: "2021", event: "开放注册，用户激增" },
            { year: "2022", event: "热度下降，用户流失" }
        ],
        key_decisions: [
            "音频社交创新概念",
            "邀请制制造稀缺性",
            "但热度难以持续"
        ]
    },
    
    // === 新增案例：视频直播 ===
    bigo_live: {
        title: "Bigo Live",
        subtitle: "东南亚直播平台",
        dao: "直播娱乐与互动。用户直播，观众打赏，形成社交连接。",
        gov: "平台运营。",
        space: "直播平台 + 社交网络。",
        econ: "虚拟礼物 + 广告。",
        risk: "内容审核问题，面临其他直播平台竞争。",
        atomic_unit: "直播 / 虚拟礼物 / 互动",
        distribution: "推荐 + 热门",
        death_risk: "内容审核问题",
        tags: ["#直播", "#东南亚", "#娱乐"],
        scores: [60, 70, 65, 75, 60],
        timeline: [
            { year: "2016", event: "Bigo Live上线" },
            { year: "2019", event: "被欢聚时代收购" },
            { year: "2021", event: "在东南亚市场占据主导" },
            { year: "2023", event: "面临TikTok Live竞争" }
        ],
        key_decisions: [
            "专注东南亚市场",
            "直播+打赏模式",
            "但内容审核是挑战"
        ]
    },
    
    // === 新增案例：购物/电商社区 ===
    shopify_community: {
        title: "Shopify Community",
        subtitle: "电商卖家社区",
        dao: "电商学习与交流。Shopify卖家分享经验，互相帮助。",
        gov: "Shopify主导 + 社区自治。",
        space: "论坛 + 学习资源。",
        econ: "Shopify品牌工具。",
        risk: "依赖Shopify生态，用户规模有限。",
        atomic_unit: "帖子 / 教程 / 案例",
        distribution: "分类 + 推荐",
        death_risk: "用户规模有限",
        tags: ["#电商", "#Shopify", "#卖家"],
        scores: [60, 50, 55, 40, 45],
        timeline: [
            { year: "2010", event: "Shopify Community建立" },
            { year: "2015", event: "社区活跃度增长" },
            { year: "2020", event: "疫情期间电商增长，社区活跃" },
            { year: "2023", event: "持续服务Shopify卖家" }
        ],
        key_decisions: [
            "服务Shopify卖家，建立生态",
            "但用户规模受限"
        ]
    },
    
    // === 新增案例：创作者经济 ===
    ko_fi: {
        title: "Ko-fi",
        subtitle: "创作者打赏平台",
        dao: "直接支持创作者。\"Buy me a coffee\"，粉丝直接打赏创作者。",
        gov: "平台运营。",
        space: "创作者页面 + 支付系统。",
        econ: "免费 + 5%手续费（付费会员无手续费）。",
        risk: "用户规模小，面临Patreon、Buy Me a Coffee等竞争。",
        atomic_unit: "打赏 / 商店 / 会员",
        distribution: "创作者自主推广",
        death_risk: "用户规模小",
        tags: ["#创作者", "#打赏", "#支持"],
        scores: [40, 40, 45, 35, 40],
        timeline: [
            { year: "2012", event: "Ko-fi成立" },
            { year: "2017", event: "功能扩展" },
            { year: "2020", event: "创作者经济兴起，用户增长" },
            { year: "2023", event: "持续优化" }
        ],
        key_decisions: [
            "简单直接的打赏模式",
            "但用户规模是挑战"
        ]
    },
    
    buy_me_a_coffee: {
        title: "Buy Me a Coffee",
        subtitle: "创作者支持平台",
        dao: "简单直接的创作者支持。粉丝购买\"咖啡\"支持创作者。",
        gov: "平台运营。",
        space: "创作者页面 + 支付。",
        econ: "5%手续费。",
        risk: "功能简单，面临Patreon、Ko-fi等竞争。",
        atomic_unit: "打赏 / 会员",
        distribution: "创作者自主推广",
        death_risk: "功能简单",
        tags: ["#创作者", "#打赏", "#简单"],
        scores: [35, 35, 40, 30, 40],
        timeline: [
            { year: "2018", event: "Buy Me a Coffee成立" },
            { year: "2020", event: "创作者经济兴起" },
            { year: "2023", event: "持续优化" }
        ],
        key_decisions: [
            "极简设计，降低使用门槛",
            "但功能相对简单"
        ]
    },
    
    // === 新增案例：专业社区 ===
    behance_alt: {
        title: "Behance",
        subtitle: "创意作品展示平台",
        dao: "创意作品展示与发现。展示作品集，发现灵感，寻找工作。",
        gov: "Adobe主导。被Adobe收购后整合。",
        space: "作品集 + 发现平台。",
        econ: "免费 + Adobe服务导流。",
        risk: "被Adobe主导后独立性下降，面临ArtStation、Dribbble竞争。",
        atomic_unit: "项目 / 作品 / 作品集",
        distribution: "推荐 + 分类 + 搜索",
        death_risk: "独立性下降",
        tags: ["#设计", "#作品集", "#创意"],
        scores: [50, 60, 65, 50, 50],
        timeline: [
            { year: "2006", event: "Behance成立" },
            { year: "2012", event: "被Adobe收购" },
            { year: "2020", event: "整合进Adobe Creative Cloud" },
            { year: "2023", event: "持续服务创意工作者" }
        ],
        key_decisions: [
            "专注创意作品展示",
            "被Adobe收购获得资源",
            "但独立性下降"
        ]
    },
    
    // === 新增案例：更多小众社区 ===
    newgrounds: {
        title: "Newgrounds",
        subtitle: "独立游戏与动画社区",
        dao: "独立创作与分享。Flash游戏和动画的早期平台。",
        gov: "社区自治 + 平台审核。",
        space: "游戏 + 动画 + 音频 + 艺术。",
        econ: "广告 + 会员 + 创作者分成。",
        risk: "Flash技术淘汰，用户流失，面临其他平台竞争。",
        atomic_unit: "游戏 / 动画 / 音频",
        distribution: "评分 + 最新 + 推荐",
        death_risk: "Flash淘汰",
        tags: ["#游戏", "#动画", "#独立"],
        scores: [60, 50, 55, 40, 45],
        timeline: [
            { year: "1995", event: "Newgrounds成立" },
            { year: "2010", event: "Flash游戏黄金时代" },
            { year: "2020", event: "Flash淘汰，转型HTML5" },
            { year: "2023", event: "保持独立社区" }
        ],
        key_decisions: [
            "早期Flash内容平台",
            "但Flash淘汰带来挑战"
        ]
    },
    
    itch_io: {
        title: "itch.io",
        subtitle: "独立游戏商店与社区",
        dao: "独立游戏支持。\"Sell your games\"，直接支持独立开发者。",
        gov: "平台运营 + 开发者自治。",
        space: "游戏商店 + 开发者社区。",
        econ: "销售分成（开发者可选择分成比例）。",
        risk: "小众市场，面临Steam、Epic Games等竞争。",
        atomic_unit: "游戏 / 游戏包 / 资源",
        distribution: "分类 + 推荐 + 搜索",
        death_risk: "小众市场",
        tags: ["#游戏", "#独立", "#商店"],
        scores: [50, 40, 55, 45, 50],
        timeline: [
            { year: "2013", event: "itch.io成立" },
            { year: "2017", event: "独立游戏兴起，用户增长" },
            { year: "2020", event: "疫情期间游戏需求增长" },
            { year: "2023", event: "保持独立游戏社区" }
        ],
        key_decisions: [
            "专注独立游戏，建立差异化",
            "灵活的销售分成",
            "但市场相对小众"
        ]
    },
    
    // === 新增案例：更多社交应用 ===
    bereal_alt: {
        title: "BeReal",
        subtitle: "真实瞬间分享应用",
        dao: "真实与即时。\"Time to BeReal\"，每天同一时间分享真实瞬间。",
        gov: "平台运营。",
        space: "真实瞬间分享 + 朋友网络。",
        econ: "暂无明确商业模式。",
        risk: "新鲜感过后用户流失，商业化困难，面临Instagram等竞争。",
        atomic_unit: "BeReal（照片+前置） / 评论",
        distribution: "时间线",
        death_risk: "新鲜感流失",
        tags: ["#真实", "#即时", "#社交"],
        scores: [75, 40, 50, 20, 60],
        timeline: [
            { year: "2020", event: "BeReal上线" },
            { year: "2022", event: "快速获得关注，用户激增" },
            { year: "2023", event: "热度下降，用户流失" },
            { year: "2024", event: "面临商业化挑战" }
        ],
        key_decisions: [
            "真实瞬间概念创新",
            "但新鲜感难以持续",
            "商业化是挑战"
        ]
    },
    
    gas: {
        title: "Gas",
        subtitle: "匿名赞美应用",
        dao: "积极社交与赞美。匿名赞美朋友，传播正能量。",
        gov: "平台运营。",
        space: "匿名赞美 + 朋友网络。",
        econ: "暂无明确商业模式。",
        risk: "新鲜感过后用户流失，商业化困难。",
        atomic_unit: "赞美 / 投票",
        distribution: "朋友网络",
        death_risk: "新鲜感流失",
        tags: ["#匿名", "#赞美", "#社交"],
        scores: [80, 30, 40, 15, 55],
        timeline: [
            { year: "2022", event: "Gas上线" },
            { year: "2022", event: "快速获得关注" },
            { year: "2023", event: "被Discord收购" },
            { year: "2024", event: "整合进Discord" }
        ],
        key_decisions: [
            "积极社交概念",
            "被Discord收购",
            "但新鲜感难以持续"
        ]
    },
    
    // === 最后一批新增案例 ===
    threads_alt: {
        title: "Threads",
        subtitle: "Meta的Twitter替代品",
        dao: "文字社交与实时信息。\"Instagram的文字版\"，连接Instagram生态。",
        gov: "Meta主导。与Instagram整合。",
        space: "文字社交 + Instagram生态。",
        econ: "广告（未来）。",
        risk: "用户增长后留存不足，面临Twitter/X、Bluesky等竞争。",
        atomic_unit: "帖子 / 回复 / 转发",
        distribution: "关注流 + 推荐",
        death_risk: "留存不足",
        tags: ["#社交", "#文字", "#Meta"],
        scores: [50, 70, 55, 45, 50],
        timeline: [
            { year: "2023", event: "Threads上线，快速获得用户" },
            { year: "2023", event: "用户突破1亿后增长放缓" },
            { year: "2024", event: "功能持续优化" }
        ],
        key_decisions: [
            "利用Instagram生态快速获客",
            "但留存是挑战"
        ]
    },
    
    mastodon_alt: {
        title: "Mastodon",
        subtitle: "去中心化社交网络",
        dao: "去中心化社交。联邦制，用户拥有数据，实例自治。",
        gov: "联邦制。每个实例自治，协议开放。",
        space: "去中心化社交网络。",
        econ: "实例运营者自筹。",
        risk: "技术门槛高，用户体验复杂，增长受限。",
        atomic_unit: "Toot（帖子）",
        distribution: "本地时间线 + 联邦时间线",
        death_risk: "技术门槛高",
        tags: ["#去中心化", "#联邦", "#开源"],
        scores: [50, 40, 45, 20, 45],
        timeline: [
            { year: "2016", event: "Mastodon上线" },
            { year: "2022", event: "Twitter被收购后用户增长" },
            { year: "2023", event: "用户增长但留存不足" }
        ],
        key_decisions: [
            "去中心化理念吸引用户",
            "但技术门槛限制增长"
        ]
    },
    
    plurk_alt: {
        title: "Plurk",
        subtitle: "台湾的微博客平台",
        dao: "时间轴社交。\"时间轴\"形式展示动态，轻松分享。",
        gov: "平台运营。",
        space: "微博客 + 社交网络。",
        econ: "广告 + 会员服务。",
        risk: "用户规模小，主要限于台湾市场，面临Twitter、Facebook竞争。",
        atomic_unit: "Plurk（动态）",
        distribution: "时间轴",
        death_risk: "用户规模小",
        tags: ["#微博客", "#台湾", "#时间轴"],
        scores: [60, 50, 55, 40, 45],
        timeline: [
            { year: "2008", event: "Plurk上线" },
            { year: "2010", event: "在台湾市场获得关注" },
            { year: "2020", event: "用户规模稳定但增长有限" },
            { year: "2023", event: "保持小众社区" }
        ],
        key_decisions: [
            "时间轴形式创新",
            "但市场受限"
        ]
    },
    
    jodel_alt: {
        title: "Jodel",
        subtitle: "匿名本地社交应用",
        dao: "匿名本地社交。基于地理位置的匿名社交，分享本地信息。",
        gov: "平台运营。",
        space: "匿名社区 + 地理位置。",
        econ: "广告。",
        risk: "内容审核问题，用户增长受限，面临Yik Yak等竞争。",
        atomic_unit: "Jodel（匿名帖子）",
        distribution: "地理位置",
        death_risk: "内容审核问题",
        tags: ["#匿名", "#本地", "#社交"],
        scores: [60, 50, 55, 40, 55],
        timeline: [
            { year: "2014", event: "Jodel在德国上线" },
            { year: "2017", event: "扩展到欧洲多国" },
            { year: "2020", event: "用户增长但面临内容审核挑战" },
            { year: "2023", event: "保持欧洲市场" }
        ],
        key_decisions: [
            "匿名+本地结合",
            "但内容审核是挑战"
        ]
    },
    
    yikyak_alt: {
        title: "Yik Yak",
        subtitle: "匿名本地社交的兴衰",
        dao: "匿名本地社交。基于校园的匿名社交，分享校园信息。",
        gov: "平台运营。",
        space: "匿名社区 + 地理位置。",
        econ: "广告（尝试）。",
        risk: "内容审核问题，用户流失，最终关闭。",
        atomic_unit: "Yak（匿名帖子）",
        distribution: "地理位置",
        death_risk: "内容审核问题导致关闭",
        tags: ["#匿名", "#本地", "#已关闭"],
        scores: [60, 50, 50, 30, 70],
        timeline: [
            { year: "2013", event: "Yik Yak成立" },
            { year: "2014", event: "快速获得校园用户" },
            { year: "2016", event: "面临内容审核问题，用户流失" },
            { year: "2017", event: "关闭" }
        ],
        key_decisions: [
            "校园匿名社交创新",
            "但内容审核导致失败"
        ]
    },
    
    whisper_alt: {
        title: "Whisper",
        subtitle: "匿名秘密分享应用",
        dao: "匿名分享与情感表达。\"Share secrets\"，匿名分享秘密和想法。",
        gov: "平台运营 + 内容审核。",
        space: "匿名社区。",
        econ: "广告。",
        risk: "内容质量下降，用户流失，面临其他匿名应用竞争。",
        atomic_unit: "Whisper（匿名帖子）",
        distribution: "推荐 + 分类",
        death_risk: "内容质量下降",
        tags: ["#匿名", "#秘密", "#情感"],
        scores: [50, 50, 45, 35, 50],
        timeline: [
            { year: "2012", event: "Whisper上线" },
            { year: "2014", event: "用户快速增长" },
            { year: "2017", event: "用户流失" },
            { year: "2023", event: "用户规模下降" }
        ],
        key_decisions: [
            "匿名分享概念",
            "但内容质量是挑战"
        ]
    },
    
    // === 新增案例：更多国际化产品 ===
    imo_alt: {
        title: "imo",
        subtitle: "视频通话与消息应用",
        dao: "简单视频通话。\"Free video calls\"，简单易用的视频通话。",
        gov: "平台运营。",
        space: "视频通话 + 消息。",
        econ: "广告。",
        risk: "功能单一，面临WhatsApp、Zoom等竞争。",
        atomic_unit: "视频通话 / 消息",
        distribution: "联系人",
        death_risk: "功能单一",
        tags: ["#视频通话", "#消息", "#简单"],
        scores: [70, 40, 50, 30, 45],
        timeline: [
            { year: "2007", event: "imo成立" },
            { year: "2015", event: "用户增长" },
            { year: "2020", event: "疫情期间需求增长" },
            { year: "2023", event: "面临竞争" }
        ],
        key_decisions: [
            "简单易用的视频通话",
            "但功能相对单一"
        ]
    },
    
    viber_alt: {
        title: "Viber",
        subtitle: "消息与通话应用",
        dao: "消息与通话。\"Free calls and messages\"，简单通讯。",
        gov: "Rakuten主导。被Rakuten收购。",
        space: "消息 + 通话 + 社区。",
        econ: "广告 + Viber Out（付费通话）。",
        risk: "用户增长放缓，面临WhatsApp、Telegram等竞争。",
        atomic_unit: "消息 / 通话 / 社区",
        distribution: "联系人",
        death_risk: "增长放缓",
        tags: ["#消息", "#通话", "#通讯"],
        scores: [70, 50, 55, 40, 45],
        timeline: [
            { year: "2010", event: "Viber成立" },
            { year: "2014", event: "被Rakuten收购" },
            { year: "2020", event: "用户增长放缓" },
            { year: "2023", event: "保持特定市场" }
        ],
        key_decisions: [
            "早期消息应用",
            "但增长面临挑战"
        ]
    },
    
    zalo: {
        title: "Zalo",
        subtitle: "越南的主流消息应用",
        dao: "本土化社交与通讯。越南市场的主流消息和社交应用。",
        gov: "VNG主导。",
        space: "消息 + 社交 + 支付。",
        econ: "广告 + 支付 + 游戏。",
        risk: "主要限于越南市场，国际化不足，面临WhatsApp等竞争。",
        atomic_unit: "消息 / 动态 / 支付",
        distribution: "联系人 + 推荐",
        death_risk: "市场受限",
        tags: ["#越南", "#消息", "#社交"],
        scores: [75, 60, 65, 55, 50],
        timeline: [
            { year: "2012", event: "Zalo在越南上线" },
            { year: "2015", event: "成为越南主流消息应用" },
            { year: "2020", event: "整合支付功能" },
            { year: "2023", event: "保持越南市场主导地位" }
        ],
        key_decisions: [
            "专注越南市场，建立本土优势",
            "但国际化不足"
        ]
    },
    
    kakao_talk: {
        title: "KakaoTalk",
        subtitle: "韩国的主流消息应用",
        dao: "本土化社交与生态。韩国市场的超级应用，消息+社交+支付+更多。",
        gov: "Kakao主导。",
        space: "消息 + 社交 + 支付 + 服务。",
        econ: "广告 + 支付 + 游戏 + 服务。",
        risk: "主要限于韩国市场，面临微信、WhatsApp等竞争。",
        atomic_unit: "消息 / 动态 / 支付 / 服务",
        distribution: "联系人 + 推荐",
        death_risk: "市场受限",
        tags: ["#韩国", "#消息", "#超级应用"],
        scores: [80, 70, 75, 70, 55],
        timeline: [
            { year: "2010", event: "KakaoTalk上线" },
            { year: "2014", event: "整合支付功能，成为超级应用" },
            { year: "2020", event: "在韩国市场占据主导" },
            { year: "2023", event: "持续扩展服务生态" }
        ],
        key_decisions: [
            "专注韩国市场，建立超级应用生态",
            "但国际化不足"
        ]
    },
    
    // === 新增：更多游戏类社区 ===
    epic_games_store: {
        title: "Epic Games Store",
        subtitle: "Epic Games的游戏商店与社区",
        dao: "开发者友好与玩家社区。高分成比例吸引开发者，建立玩家社区。",
        gov: "Epic Games主导。",
        space: "游戏商店 + 社区 + 免费游戏。",
        econ: "游戏销售分成（开发者88%，平台12%）。",
        risk: "面临Steam竞争，游戏库相对较小。",
        atomic_unit: "游戏 / 社区 / 成就",
        distribution: "推荐 + 分类 + 搜索",
        death_risk: "Steam竞争",
        tags: ["#游戏", "#商店", "#Epic"],
        scores: [40, 60, 55, 70, 50],
        timeline: [
            { year: "2018", event: "Epic Games Store上线" },
            { year: "2019", event: "每周免费游戏策略" },
            { year: "2021", event: "用户增长，但游戏库仍少于Steam" },
            { year: "2023", event: "持续与Steam竞争" }
        ],
        key_decisions: [
            "高分成比例吸引开发者",
            "每周免费游戏吸引玩家",
            "但Steam生态优势明显"
        ]
    },
    
    gog: {
        title: "GOG",
        subtitle: "无DRM游戏商店",
        dao: "玩家权利与经典游戏。\"No DRM\"，玩家真正拥有游戏。",
        gov: "CD Projekt主导。",
        space: "游戏商店 + 经典游戏库。",
        econ: "游戏销售。",
        risk: "游戏库相对较小，面临Steam等竞争。",
        atomic_unit: "游戏 / DRM-free",
        distribution: "分类 + 搜索",
        death_risk: "游戏库小",
        tags: ["#游戏", "#DRM-free", "#经典"],
        scores: [30, 50, 45, 50, 45],
        timeline: [
            { year: "2008", event: "GOG成立，专注经典游戏" },
            { year: "2012", event: "扩展到新游戏" },
            { year: "2020", event: "用户增长但规模仍较小" },
            { year: "2023", event: "保持DRM-free定位" }
        ],
        key_decisions: [
            "DRM-free理念吸引核心玩家",
            "但市场相对小众"
        ]
    },
    
    gamejolt: {
        title: "GameJolt",
        subtitle: "独立游戏分享与社区平台",
        dao: "独立游戏分享与发现。\"Play indie games\"，免费分享和发现独立游戏。",
        gov: "平台运营。",
        space: "游戏分享 + 开发者社区。",
        econ: "广告 + 付费功能。",
        risk: "用户规模小，面临itch.io、Steam等竞争。",
        atomic_unit: "游戏 / 开发者页面",
        distribution: "推荐 + 最新 + 分类",
        death_risk: "用户规模小",
        tags: ["#游戏", "#独立", "#分享"],
        scores: [45, 40, 50, 35, 45],
        timeline: [
            { year: "2008", event: "GameJolt成立" },
            { year: "2015", event: "用户增长" },
            { year: "2020", event: "独立游戏文化兴起" },
            { year: "2023", event: "保持独立游戏社区" }
        ],
        key_decisions: [
            "免费分享模式",
            "但用户规模受限"
        ]
    },
    
    speedrun_com: {
        title: "Speedrun.com",
        subtitle: "速通社区平台",
        dao: "速通文化与竞争。记录和分享游戏速通，追求极限。",
        gov: "社区自治。",
        space: "速通记录 + 排行榜 + 社区。",
        econ: "免费，依赖捐赠。",
        risk: "极其小众，用户规模极小。",
        atomic_unit: "速通记录 / 排行榜 / 论坛",
        distribution: "游戏分类 + 排行榜",
        death_risk: "极其小众",
        tags: ["#游戏", "#速通", "#极限"],
        scores: [60, 30, 45, 10, 30],
        timeline: [
            { year: "2014", event: "Speedrun.com上线" },
            { year: "2017", event: "成为速通社区标准平台" },
            { year: "2020", event: "社区稳定但规模小" },
            { year: "2023", event: "保持小众社区" }
        ],
        key_decisions: [
            "专注速通垂直领域",
            "但市场极其小众"
        ]
    },
    
    trueachievements: {
        title: "TrueAchievements",
        subtitle: "Xbox成就追踪社区",
        dao: "成就文化与追踪。\"Track your achievements\"，深度追踪Xbox成就。",
        gov: "社区运营。",
        space: "成就追踪 + 社区 + 指南。",
        econ: "免费基础 + 付费会员。",
        risk: "仅限Xbox平台，用户规模受限。",
        atomic_unit: "成就 / 指南 / 统计",
        distribution: "游戏 + 成就",
        death_risk: "平台受限",
        tags: ["#游戏", "#Xbox", "#成就"],
        scores: [50, 40, 45, 30, 40],
        timeline: [
            { year: "2008", event: "TrueAchievements成立" },
            { year: "2015", event: "成为Xbox玩家主要工具" },
            { year: "2023", event: "持续服务Xbox社区" }
        ],
        key_decisions: [
            "专注Xbox成就追踪",
            "但平台受限"
        ]
    },
    
    psnprofiles: {
        title: "PSN Profiles",
        subtitle: "PlayStation奖杯追踪社区",
        dao: "奖杯文化与追踪。\"Track your trophies\"，深度追踪PlayStation奖杯。",
        gov: "社区运营。",
        space: "奖杯追踪 + 社区 + 指南。",
        econ: "免费基础 + 付费会员。",
        risk: "仅限PlayStation平台，用户规模受限。",
        atomic_unit: "奖杯 / 指南 / 统计",
        distribution: "游戏 + 奖杯",
        death_risk: "平台受限",
        tags: ["#游戏", "#PlayStation", "#奖杯"],
        scores: [50, 40, 45, 30, 40],
        timeline: [
            { year: "2009", event: "PSN Profiles成立" },
            { year: "2015", event: "成为PlayStation玩家主要工具" },
            { year: "2023", event: "持续服务PlayStation社区" }
        ],
        key_decisions: [
            "专注PlayStation奖杯追踪",
            "但平台受限"
        ]
    },
    
    backloggd: {
        title: "Backloggd",
        subtitle: "游戏收藏与追踪社区",
        dao: "游戏收藏与记录。\"Track your game collection\"，记录游戏收藏和游玩历程。",
        gov: "社区运营。",
        space: "游戏数据库 + 收藏追踪。",
        econ: "免费 + 付费会员。",
        risk: "小众市场，面临HowLongToBeat、Steam等竞争。",
        atomic_unit: "游戏 / 收藏 / 日志",
        distribution: "搜索 + 推荐",
        death_risk: "小众市场",
        tags: ["#游戏", "#收藏", "#追踪"],
        scores: [55, 35, 50, 25, 40],
        timeline: [
            { year: "2019", event: "Backloggd上线" },
            { year: "2021", event: "游戏收藏文化兴起" },
            { year: "2023", event: "保持小众社区" }
        ],
        key_decisions: [
            "专注游戏收藏追踪",
            "但市场相对小众"
        ]
    },
    
    howlongtobeat: {
        title: "HowLongToBeat",
        subtitle: "游戏时长统计社区",
        dao: "游戏时长信息。\"How long is this game?\"，统计游戏通关时长。",
        gov: "社区贡献。用户提交数据。",
        space: "游戏时长数据库。",
        econ: "广告。",
        risk: "功能单一，用户规模小。",
        atomic_unit: "游戏时长数据",
        distribution: "搜索",
        death_risk: "功能单一",
        tags: ["#游戏", "#时长", "#统计"],
        scores: [30, 30, 35, 20, 35],
        timeline: [
            { year: "2010", event: "HowLongToBeat上线" },
            { year: "2015", event: "成为玩家常用工具" },
            { year: "2023", event: "持续运营但规模小" }
        ],
        key_decisions: [
            "专注游戏时长统计",
            "但功能相对单一"
        ]
    },
    
    anilist: {
        title: "AniList",
        subtitle: "动漫追踪与社交社区",
        dao: "动漫文化与追踪。\"Track your anime\"，记录和分享动漫观看历程。",
        gov: "社区自治。",
        space: "动漫数据库 + 社交网络。",
        econ: "免费 + 付费会员。",
        risk: "小众市场，面临MyAnimeList等竞争。",
        atomic_unit: "动漫 / 评分 / 列表",
        distribution: "推荐 + 搜索 + 社交",
        death_risk: "小众市场",
        tags: ["#动漫", "#追踪", "#社交"],
        scores: [65, 40, 55, 30, 45],
        timeline: [
            { year: "2013", event: "AniList上线" },
            { year: "2017", event: "用户增长" },
            { year: "2023", event: "保持动漫社区" }
        ],
        key_decisions: [
            "专注动漫追踪",
            "但市场相对小众"
        ]
    },
    
    myanimelist: {
        title: "MyAnimeList",
        subtitle: "最大的动漫数据库与社区",
        dao: "动漫文化与追踪。\"The Internet's Largest Anime Database\"。",
        gov: "平台运营。",
        space: "动漫数据库 + 社区 + 论坛。",
        econ: "广告 + 付费会员。",
        risk: "用户增长放缓，面临AniList等竞争。",
        atomic_unit: "动漫 / 评分 / 论坛",
        distribution: "搜索 + 推荐 + 论坛",
        death_risk: "增长放缓",
        tags: ["#动漫", "#数据库", "#社区"],
        scores: [60, 50, 55, 40, 45],
        timeline: [
            { year: "2006", event: "MyAnimeList成立" },
            { year: "2015", event: "成为最大动漫数据库" },
            { year: "2023", event: "用户增长放缓" }
        ],
        key_decisions: [
            "早期建立数据库优势",
            "但增长面临挑战"
        ]
    },
    
    trakt: {
        title: "Trakt",
        subtitle: "影视追踪与统计平台",
        dao: "影视追踪与统计。\"Track what you watch\"，统一追踪电影和电视剧。",
        gov: "平台运营。",
        space: "影视数据库 + 追踪工具。",
        econ: "免费基础 + 付费VIP。",
        risk: "用户规模小，面临其他追踪平台竞争。",
        atomic_unit: "电影 / 剧集 / 观看记录",
        distribution: "搜索 + 推荐",
        death_risk: "用户规模小",
        tags: ["#影视", "#追踪", "#统计"],
        scores: [40, 40, 45, 30, 40],
        timeline: [
            { year: "2012", event: "Trakt上线" },
            { year: "2017", event: "用户增长" },
            { year: "2023", event: "保持小众工具" }
        ],
        key_decisions: [
            "统一追踪影视内容",
            "但用户规模受限"
        ]
    },
    
    tvtime: {
        title: "TV Time",
        subtitle: "电视剧追踪社区",
        dao: "剧集追踪与社交。\"Track your TV shows\"，追踪和讨论电视剧。",
        gov: "平台运营。",
        space: "剧集数据库 + 社交社区。",
        econ: "广告。",
        risk: "用户规模小，面临Trakt等竞争。",
        atomic_unit: "剧集 / 集数 / 讨论",
        distribution: "推荐 + 搜索 + 社交",
        death_risk: "用户规模小",
        tags: ["#电视剧", "#追踪", "#社交"],
        scores: [55, 40, 50, 30, 40],
        timeline: [
            { year: "2014", event: "TV Time上线" },
            { year: "2020", event: "疫情期间剧集观看增加" },
            { year: "2023", event: "保持小众社区" }
        ],
        key_decisions: [
            "专注电视剧追踪",
            "但用户规模受限"
        ]
    },
    
    // === 新增：长尾社区 ===
    fansly: {
        title: "Fansly",
        subtitle: "创作者订阅平台",
        dao: "创作者订阅与支持。\"Support your favorite creators\"，粉丝订阅创作者内容。",
        gov: "平台运营。",
        space: "创作者页面 + 订阅内容。",
        econ: "订阅分成。",
        risk: "面临OnlyFans竞争，用户规模较小。",
        atomic_unit: "订阅 / 内容 / 消息",
        distribution: "创作者自主推广",
        death_risk: "OnlyFans竞争",
        tags: ["#创作者", "#订阅", "#内容"],
        scores: [40, 50, 45, 60, 55],
        timeline: [
            { year: "2020", event: "Fansly上线" },
            { year: "2021", event: "OnlyFans政策变化后用户增长" },
            { year: "2023", event: "保持小众平台" }
        ],
        key_decisions: [
            "作为OnlyFans替代品",
            "但用户规模受限"
        ]
    },
    
    manyvids: {
        title: "ManyVids",
        subtitle: "成人内容创作者平台",
        dao: "内容创作与销售。创作者上传和销售内容。",
        gov: "平台运营。",
        space: "内容商店 + 创作者社区。",
        econ: "内容销售分成。",
        risk: "面临OnlyFans等竞争，市场细分。",
        atomic_unit: "内容 / 视频 / 定制",
        distribution: "分类 + 推荐",
        death_risk: "市场竞争",
        tags: ["#创作者", "#内容", "#成人"],
        scores: [35, 45, 40, 55, 60],
        timeline: [
            { year: "2014", event: "ManyVids上线" },
            { year: "2020", event: "创作者经济兴起" },
            { year: "2023", event: "保持细分市场" }
        ],
        key_decisions: [
            "专注内容销售",
            "但市场竞争激烈"
        ]
    },
    
    chaturbate: {
        title: "Chaturbate",
        subtitle: "成人直播平台",
        dao: "实时互动与打赏。实时直播，观众打赏。",
        gov: "平台运营。",
        space: "直播平台。",
        econ: "虚拟货币分成。",
        risk: "内容审核挑战，监管风险。",
        atomic_unit: "直播 / 虚拟货币",
        distribution: "推荐 + 分类",
        death_risk: "监管风险",
        tags: ["#直播", "#成人", "#互动"],
        scores: [30, 60, 45, 70, 75],
        timeline: [
            { year: "2011", event: "Chaturbate上线" },
            { year: "2020", event: "疫情期间用户增长" },
            { year: "2023", event: "面临监管挑战" }
        ],
        key_decisions: [
            "实时互动模式",
            "但监管是挑战"
        ]
    },
    
    fetlife: {
        title: "FetLife",
        subtitle: "BDSM社交网络",
        dao: "小众文化社区。\"Like Facebook, but kinkier\"，BDSM社区社交。",
        gov: "社区自治。",
        space: "社交网络 + 社区论坛。",
        econ: "免费基础 + 付费会员。",
        risk: "极其小众，用户规模极小，面临监管风险。",
        atomic_unit: "个人资料 / 文章 / 群组",
        distribution: "社交 + 推荐",
        death_risk: "极其小众",
        tags: ["#BDSM", "#小众", "#社交"],
        scores: [70, 30, 55, 25, 65],
        timeline: [
            { year: "2008", event: "FetLife上线" },
            { year: "2015", event: "成为BDSM社区主要平台" },
            { year: "2023", event: "保持小众社区" }
        ],
        key_decisions: [
            "专注BDSM垂直领域",
            "但市场极其小众"
        ]
    },
    
    reddit_rplace: {
        title: "r/place",
        subtitle: "Reddit的协作画布实验",
        dao: "协作创造与冲突。\"One pixel at a time\"，协作绘制巨大画布。",
        gov: "临时活动，Reddit主导。",
        space: "协作画布。",
        econ: "Reddit品牌活动。",
        risk: "一次性活动，不可持续。",
        atomic_unit: "像素 / 协作",
        distribution: "画布坐标",
        death_risk: "一次性活动",
        tags: ["#协作", "#实验", "#临时"],
        scores: [90, 80, 95, 10, 40],
        timeline: [
            { year: "2017", event: "r/place首次活动" },
            { year: "2022", event: "r/place第二次活动" },
            { year: "2023", event: "Reddit社区实验" }
        ],
        key_decisions: [
            "创新的协作实验",
            "但不可持续"
        ]
    },
    
    reddit_secret_santa: {
        title: "Reddit Secret Santa",
        subtitle: "Reddit的秘密礼物交换",
        dao: "礼物交换与善意。\"Give a gift, get a gift\"，匿名礼物交换。",
        gov: "Reddit运营。",
        space: "礼物交换平台。",
        econ: "Reddit品牌活动。",
        risk: "已关闭，不可持续。",
        atomic_unit: "礼物 / 匹配",
        distribution: "随机匹配",
        death_risk: "已关闭",
        tags: ["#礼物", "#交换", "#已关闭"],
        scores: [80, 50, 60, 10, 50],
        timeline: [
            { year: "2009", event: "Reddit Secret Santa启动" },
            { year: "2020", event: "最后一次活动" },
            { year: "2021", event: "Reddit关闭Secret Santa" }
        ],
        key_decisions: [
            "创新的礼物交换概念",
            "但最终关闭"
        ]
    },
    
    // === 继续新增：更多游戏类社区 ===
    nexus_mods: {
        title: "Nexus Mods",
        subtitle: "游戏模组社区平台",
        dao: "模组创作与分享。\"Modding made easy\"，游戏模组创作和下载。",
        gov: "平台运营 + 社区自治。",
        space: "模组库 + 创作者社区。",
        econ: "免费下载 + 付费会员（快速下载）。",
        risk: "面临Steam Workshop等竞争，依赖游戏厂商支持。",
        atomic_unit: "模组 / 下载 / 教程",
        distribution: "游戏分类 + 推荐",
        death_risk: "Steam Workshop竞争",
        tags: ["#游戏", "#模组", "#创作"],
        scores: [50, 45, 55, 40, 45],
        timeline: [
            { year: "2001", event: "Nexus Mods成立" },
            { year: "2010", event: "成为PC游戏模组主要平台" },
            { year: "2020", event: "用户持续增长" },
            { year: "2023", event: "面临Steam Workshop竞争" }
        ],
        key_decisions: [
            "专注PC游戏模组",
            "但面临Steam Workshop竞争"
        ]
    },
    
    moddb: {
        title: "Mod DB",
        subtitle: "游戏模组与独立游戏数据库",
        dao: "模组与独立游戏展示。\"Database for mods and indie games\"。",
        gov: "社区运营。",
        space: "模组库 + 独立游戏展示。",
        econ: "广告。",
        risk: "用户规模小，面临Nexus Mods、Steam等竞争。",
        atomic_unit: "模组 / 游戏 / 下载",
        distribution: "分类 + 推荐",
        death_risk: "用户规模小",
        tags: ["#游戏", "#模组", "#独立"],
        scores: [45, 40, 50, 30, 40],
        timeline: [
            { year: "2002", event: "Mod DB成立" },
            { year: "2015", event: "用户增长" },
            { year: "2023", event: "保持小众平台" }
        ],
        key_decisions: [
            "模组+独立游戏结合",
            "但用户规模受限"
        ]
    },
    
    gamefaqs: {
        title: "GameFAQs",
        subtitle: "游戏攻略与问答社区",
        dao: "游戏攻略与帮助。\"Game guides and walkthroughs\"，游戏攻略和FAQ。",
        gov: "社区贡献。",
        space: "攻略库 + 问答社区。",
        econ: "广告。",
        risk: "内容格式老旧，面临YouTube、Wiki等竞争。",
        atomic_unit: "攻略 / FAQ / 问答",
        distribution: "游戏搜索",
        death_risk: "内容格式老旧",
        tags: ["#游戏", "#攻略", "#FAQ"],
        scores: [40, 35, 45, 25, 40],
        timeline: [
            { year: "1995", event: "GameFAQs成立" },
            { year: "2000", event: "成为游戏攻略主要来源" },
            { year: "2020", event: "用户流失到视频攻略" },
            { year: "2023", event: "仍在运营但用户减少" }
        ],
        key_decisions: [
            "早期建立攻略库优势",
            "但内容格式面临视频竞争"
        ]
    },
    
    giantbomb: {
        title: "Giant Bomb",
        subtitle: "游戏媒体与社区",
        dao: "游戏文化与深度内容。\"Video game reviews and features\"，深度游戏内容。",
        gov: "编辑主导。",
        space: "游戏媒体 + 社区论坛。",
        econ: "订阅 + 广告。",
        risk: "被CBS收购后独立性下降，用户流失。",
        atomic_unit: "视频 / 文章 / 播客",
        distribution: "编辑推荐",
        death_risk: "独立性下降",
        tags: ["#游戏", "#媒体", "#社区"],
        scores: [55, 50, 50, 40, 45],
        timeline: [
            { year: "2008", event: "Giant Bomb成立" },
            { year: "2012", event: "被CBS收购" },
            { year: "2020", event: "用户流失" },
            { year: "2023", event: "仍在运营" }
        ],
        key_decisions: [
            "深度游戏内容建立品牌",
            "但收购后独立性下降"
        ]
    },
    
    // === 新增：更多小众社区 ===
    rateyourmusic: {
        title: "Rate Your Music",
        subtitle: "音乐评级与发现社区",
        dao: "音乐评级与发现。\"Rate and discover music\"，深度音乐评级。",
        gov: "社区贡献。",
        space: "音乐数据库 + 评级系统。",
        econ: "免费 + 付费会员。",
        risk: "用户规模小，面临Spotify、Last.fm等竞争。",
        atomic_unit: "专辑 / 评级 / 列表",
        distribution: "搜索 + 推荐",
        death_risk: "用户规模小",
        tags: ["#音乐", "#评级", "#发现"],
        scores: [50, 40, 50, 30, 40],
        timeline: [
            { year: "2000", event: "Rate Your Music成立" },
            { year: "2015", event: "用户增长" },
            { year: "2023", event: "保持小众社区" }
        ],
        key_decisions: [
            "深度音乐评级系统",
            "但用户规模受限"
        ]
    },
    
    last_fm: {
        title: "Last.fm",
        subtitle: "音乐追踪与推荐平台",
        dao: "音乐追踪与发现。\"The social music revolution\"，追踪和发现音乐。",
        gov: "平台运营。",
        space: "音乐追踪 + 推荐 + 社交。",
        econ: "免费基础 + 付费会员。",
        risk: "用户流失，面临Spotify等竞争。",
        atomic_unit: "Scrobbles（播放记录） / 推荐",
        distribution: "推荐 + 社交",
        death_risk: "用户流失",
        tags: ["#音乐", "#追踪", "#推荐"],
        scores: [50, 50, 55, 40, 45],
        timeline: [
            { year: "2002", event: "Last.fm成立" },
            { year: "2007", event: "被CBS收购" },
            { year: "2020", event: "用户流失" },
            { year: "2023", event: "仍在运营但用户减少" }
        ],
        key_decisions: [
            "音乐追踪创新概念",
            "但用户流失"
        ]
    },
    
    discogs: {
        title: "Discogs",
        subtitle: "黑胶唱片数据库与市场",
        dao: "黑胶文化与收藏。\"The Database of Recorded Music\"，黑胶唱片数据库和交易。",
        gov: "社区贡献。",
        space: "唱片数据库 + 交易市场。",
        econ: "交易手续费。",
        risk: "极其小众，用户规模极小。",
        atomic_unit: "唱片 / 交易 / 收藏",
        distribution: "搜索 + 分类",
        death_risk: "极其小众",
        tags: ["#音乐", "#黑胶", "#收藏"],
        scores: [45, 35, 50, 40, 35],
        timeline: [
            { year: "2000", event: "Discogs成立" },
            { year: "2015", event: "黑胶复兴，用户增长" },
            { year: "2023", event: "保持小众平台" }
        ],
        key_decisions: [
            "专注黑胶垂直领域",
            "但市场极其小众"
        ]
    },
    
    // === 新增：更多长尾社区 ===
    discord_servers: {
        title: "Discord Servers",
        subtitle: "Discord服务器发现平台",
        dao: "服务器发现与加入。\"Discover Discord servers\"，发现和加入Discord服务器。",
        gov: "第三方平台运营。",
        space: "服务器目录 + 分类。",
        econ: "广告。",
        risk: "依赖Discord生态，用户规模受限。",
        atomic_unit: "服务器 / 分类",
        distribution: "分类 + 推荐",
        death_risk: "依赖Discord",
        tags: ["#Discord", "#服务器", "#发现"],
        scores: [50, 40, 45, 30, 40],
        timeline: [
            { year: "2017", event: "Discord Servers平台出现" },
            { year: "2020", event: "Discord用户增长" },
            { year: "2023", event: "持续服务Discord生态" }
        ],
        key_decisions: [
            "服务Discord生态",
            "但依赖Discord"
        ]
    },
    
    top_gg: {
        title: "Top.gg",
        subtitle: "Discord机器人商店",
        dao: "Discord机器人发现。\"Find Discord bots\"，发现和使用Discord机器人。",
        gov: "平台运营。",
        space: "机器人商店 + 分类。",
        econ: "广告 + 付费推广。",
        risk: "依赖Discord生态，市场受限。",
        atomic_unit: "机器人 / 分类",
        distribution: "分类 + 推荐 + 搜索",
        death_risk: "依赖Discord",
        tags: ["#Discord", "#机器人", "#商店"],
        scores: [40, 45, 45, 35, 40],
        timeline: [
            { year: "2018", event: "Top.gg成立" },
            { year: "2020", event: "Discord机器人需求增长" },
            { year: "2023", event: "成为Discord机器人主要平台" }
        ],
        key_decisions: [
            "专注Discord机器人",
            "但市场受限"
        ]
    },
    
    kbin: {
        title: "Kbin",
        subtitle: "去中心化Reddit替代品",
        dao: "去中心化论坛。\"Decentralized Reddit\"，联邦制的论坛平台。",
        gov: "联邦制。实例自治。",
        space: "去中心化论坛。",
        econ: "实例运营者自筹。",
        risk: "技术门槛高，用户规模小，面临Lemmy、Mastodon等竞争。",
        atomic_unit: "帖子 / 评论 / 杂志",
        distribution: "本地 + 联邦",
        death_risk: "技术门槛高",
        tags: ["#去中心化", "#论坛", "#联邦"],
        scores: [45, 35, 40, 15, 40],
        timeline: [
            { year: "2023", event: "Kbin上线" },
            { year: "2023", event: "Reddit API争议后用户增长" },
            { year: "2024", event: "保持小众平台" }
        ],
        key_decisions: [
            "去中心化理念",
            "但技术门槛限制增长"
        ]
    },
    
    lemmy: {
        title: "Lemmy",
        subtitle: "联邦制Reddit替代品",
        dao: "去中心化论坛。\"A link aggregator for the fediverse\"，联邦制链接聚合。",
        gov: "联邦制。实例自治。",
        space: "去中心化论坛。",
        econ: "实例运营者自筹。",
        risk: "技术门槛高，用户规模小。",
        atomic_unit: "帖子 / 评论 / 社区",
        distribution: "本地 + 联邦",
        death_risk: "技术门槛高",
        tags: ["#去中心化", "#论坛", "#联邦"],
        scores: [45, 35, 40, 15, 40],
        timeline: [
            { year: "2019", event: "Lemmy上线" },
            { year: "2023", event: "Reddit API争议后用户增长" },
            { year: "2024", event: "保持小众平台" }
        ],
        key_decisions: [
            "联邦制论坛理念",
            "但技术门槛限制增长"
        ]
    },
    
    peertube: {
        title: "PeerTube",
        subtitle: "去中心化视频平台",
        dao: "去中心化视频。\"A free and open-source federated video platform\"。",
        gov: "联邦制。实例自治。",
        space: "去中心化视频平台。",
        econ: "实例运营者自筹。",
        risk: "技术门槛高，内容库小，用户体验复杂。",
        atomic_unit: "视频 / 频道",
        distribution: "本地 + 联邦",
        death_risk: "技术门槛高",
        tags: ["#去中心化", "#视频", "#联邦"],
        scores: [40, 30, 35, 15, 35],
        timeline: [
            { year: "2018", event: "PeerTube上线" },
            { year: "2023", event: "用户增长但规模仍小" },
            { year: "2024", event: "保持小众平台" }
        ],
        key_decisions: [
            "去中心化视频理念",
            "但技术门槛限制增长"
        ]
    },
    
    funkwhale: {
        title: "Funkwhale",
        subtitle: "去中心化音乐流媒体",
        dao: "去中心化音乐。\"A social platform to enjoy and share music\"。",
        gov: "联邦制。实例自治。",
        space: "去中心化音乐平台。",
        econ: "实例运营者自筹。",
        risk: "极其小众，用户规模极小，内容库小。",
        atomic_unit: "音乐 / 专辑 / 播放列表",
        distribution: "本地 + 联邦",
        death_risk: "极其小众",
        tags: ["#去中心化", "#音乐", "#联邦"],
        scores: [35, 30, 35, 10, 35],
        timeline: [
            { year: "2017", event: "Funkwhale上线" },
            { year: "2023", event: "保持极其小众平台" },
            { year: "2024", event: "用户规模极小" }
        ],
        key_decisions: [
            "去中心化音乐理念",
            "但市场极其小众"
        ]
    },
    
    pixelfed: {
        title: "Pixelfed",
        subtitle: "去中心化Instagram替代品",
        dao: "去中心化图片分享。\"A free and ethical photo sharing platform\"。",
        gov: "联邦制。实例自治。",
        space: "去中心化图片平台。",
        econ: "实例运营者自筹。",
        risk: "用户规模小，内容库小，面临Instagram竞争。",
        atomic_unit: "图片 / 相册",
        distribution: "本地 + 联邦",
        death_risk: "用户规模小",
        tags: ["#去中心化", "#图片", "#联邦"],
        scores: [40, 35, 40, 15, 40],
        timeline: [
            { year: "2018", event: "Pixelfed上线" },
            { year: "2023", event: "用户增长但规模仍小" },
            { year: "2024", event: "保持小众平台" }
        ],
        key_decisions: [
            "去中心化图片理念",
            "但用户规模受限"
        ]
    },
    
    // === 最后一批：更多长尾和小众社区 ===
    nitter: {
        title: "Nitter",
        subtitle: "Twitter的隐私友好替代品",
        dao: "隐私与开源。\"Privacy-friendly Twitter\"，无广告、无追踪。",
        gov: "开源社区运营。",
        space: "Twitter内容查看。",
        econ: "免费，依赖捐赠。",
        risk: "Twitter API限制，功能受限。",
        atomic_unit: "Twitter内容",
        distribution: "用户搜索",
        death_risk: "API限制",
        tags: ["#隐私", "#开源", "#Twitter"],
        scores: [20, 20, 25, 5, 30],
        timeline: [
            { year: "2018", event: "Nitter上线" },
            { year: "2023", event: "Twitter API限制" },
            { year: "2024", event: "功能受限" }
        ],
        key_decisions: [
            "隐私友好理念",
            "但API限制是挑战"
        ]
    },
    
    invidious: {
        title: "Invidious",
        subtitle: "YouTube的隐私友好替代品",
        dao: "隐私与开源。\"Privacy-friendly YouTube\"，无广告、无追踪。",
        gov: "开源社区运营。",
        space: "YouTube内容查看。",
        econ: "免费，依赖捐赠。",
        risk: "YouTube API限制，功能受限。",
        atomic_unit: "YouTube视频",
        distribution: "用户搜索",
        death_risk: "API限制",
        tags: ["#隐私", "#开源", "#YouTube"],
        scores: [20, 20, 25, 5, 30],
        timeline: [
            { year: "2019", event: "Invidious上线" },
            { year: "2023", event: "YouTube API限制" },
            { year: "2024", event: "功能受限" }
        ],
        key_decisions: [
            "隐私友好理念",
            "但API限制是挑战"
        ]
    },
    xiaoyuzhou: {
        title: "小宇宙 (Xiaoyuzhou)",
        subtitle: "播客与音频内容社区",
        dao: "深度内容与陪伴感。音频是更私密的媒介，建立深度连接。",
        gov: "创作者主导。平台尊重创作者，提供工具支持，但不干预内容。",
        space: "私密房间。一对多的声音传递，营造亲密感。",
        econ: "订阅制为主。创作者通过付费内容变现，平台抽成较低。",
        risk: "音频内容制作门槛高，创作者生态难以规模化。",
        atomic_unit: "播客节目/单集",
        distribution: "订阅分发 60% + 算法推荐 30% + 搜索 10%",
        death_risk: "内容供给不足与用户增长瓶颈",
        tags: ["#音频", "#播客", "#深度"],
        scores: [50, 40, 30, 50, 40],
        timeline: [
            { year: "2020", event: "小宇宙上线，专注中文播客内容" },
            { year: "2021", event: "用户快速增长，成为中文播客主流平台" },
            { year: "2022", event: "推出付费订阅功能，支持创作者变现" },
            { year: "2023", event: "推出音频直播功能，拓展内容形式" },
            { year: "2024", event: "与微信生态深度整合，提升内容分发能力" }
        ],
        key_decisions: [
            "专注播客垂直领域，不盲目扩展内容类型，建立专业社区氛围",
            "创作者友好策略，低抽成、高自由度，吸引优质创作者入驻",
            "音频优先体验设计，优化播放界面和交互，提升用户沉浸感",
            "社区氛围建设，通过评论、点赞等互动功能，建立听众与创作者的连接",
            "付费内容模式探索，支持创作者通过订阅制变现，形成良性循环",
            "与微信生态整合，利用微信社交关系链，提升内容传播效率"
        ],
        user_metrics: {
            monthly_active_users: "500万",
            daily_active_users: "100万",
            total_users: "800万",
            growth_rate: "10%",
            retention_rate: "65%",
            user_demographics: {
                age_range: "20-40岁为主，知识工作者",
                gender_ratio: "55% 女性，45% 男性",
                region: "中国一二线城市为主",
                income_level: "中高收入群体为主"
            },
            usage_patterns: {
                avg_session_duration: "60分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "1%",
                engagement_rate: "60%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "订阅抽成",
                    percentage: 70,
                    description: "付费内容订阅抽成"
                },
                {
                    type: "广告收入",
                    percentage: 30,
                    description: "信息流广告、品牌广告"
                }
            ],
            monetization_strategy: "订阅+广告的播客平台模式",
            financial_metrics: {
                annual_revenue: "约5000万人民币 (2023)",
                revenue_growth: "20% YoY",
                profitability: "接近盈亏平衡",
                valuation: "约5亿人民币"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "喜马拉雅", similarity: 75, position: "音频内容平台直接竞品" },
                { name: "荔枝FM", similarity: 70, position: "播客平台间接竞品" },
                { name: "Spotify Podcasts", similarity: 60, position: "国际播客平台间接竞品" }
            ],
            market_position: "中文播客平台领导者",
            market_share: "中文播客市场40%+",
            competitive_advantages: [
                "专注播客垂直领域",
                "创作者友好策略",
                "音频优先体验设计",
                "与微信生态整合"
            ],
            competitive_disadvantages: [
                "音频内容制作门槛高",
                "创作者生态难以规模化",
                "用户增长瓶颈",
                "内容供给不足"
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "100万",
                mau: "500万",
                engagement_rate: "60%",
                retention_7d: "65%",
                retention_30d: "50%"
            },
            content_metrics: {
                daily_listens: "500万次播放",
                avg_listen_time: "60分钟/天",
                subscription_rate: "3%",
                comment_rate: "1%"
            },
            business_metrics: {
                arpu: "约10元/年",
                ltv: "约50元",
                cac: "约15元",
                conversion_rate: "付费订阅转化率8%"
            }
        },
        success_factors: [
            "专注播客垂直领域，建立专业社区氛围",
            "创作者友好策略，吸引优质创作者",
            "音频优先体验设计，提升用户沉浸感",
            "与微信生态整合，提升内容传播效率",
            "但音频内容制作门槛高",
            "创作者生态难以规模化"
        ]
    },
    ximalaya: {
        title: "喜马拉雅 (Ximalaya)",
        subtitle: "音频内容综合平台",
        dao: "知识付费与陪伴经济。从知识获取到情感陪伴的多元化需求。",
        gov: "平台主导。内容审核严格，商业化程度高。",
        space: "声音图书馆。海量音频内容，满足不同需求。",
        econ: "会员订阅 + 知识付费。多层次变现模式。",
        risk: "内容同质化，优质创作者流失，用户增长放缓。",
        atomic_unit: "音频节目/有声书/音频课程",
        distribution: "算法推荐 50% + 分类浏览 30% + 搜索 20%",
        death_risk: "内容质量下降与用户流失",
        tags: ["#音频", "#知识", "#付费"],
        scores: [40, 60, 70, 70, 80],
        timeline: [
            { year: "2012", event: "喜马拉雅FM上线，专注音频内容" },
            { year: "2016", event: "推出知识付费业务，推出VIP会员" },
            { year: "2018", event: "用户突破5亿，成为音频内容头部平台" },
            { year: "2020", event: "推出儿童内容专区，拓展用户群体" },
            { year: "2021", event: "上市，商业化进程加速" },
            { year: "2023", event: "推出AI有声书功能，降低内容制作成本" }
        ],
        key_decisions: [
            "从FM到音频内容平台转型，拓展内容类型，从娱乐到知识全覆盖",
            "知识付费模式创新，通过VIP会员和付费课程，建立多层次变现体系",
            "内容生态建设，签约头部创作者，同时扶持长尾内容，满足多样化需求",
            "AI技术应用，推出AI有声书和AI主播，降低内容制作门槛",
            "用户分层运营，推出儿童、成人等不同内容专区，精细化运营",
            "与智能硬件厂商合作，拓展音频场景，从手机到车载、智能音箱全覆盖"
        ]
    },
    spotify_podcasts: {
        title: "Spotify Podcasts",
        subtitle: "全球最大的音频流媒体平台",
        dao: "音乐与播客双轮驱动。通过播客增强用户粘性，延长使用时长。",
        gov: "算法推荐 + 编辑精选。通过收购和独家内容建立内容壁垒。",
        space: "音频宇宙。从音乐到播客，一站式音频体验。",
        econ: "订阅制 + 广告。播客广告收入快速增长。",
        risk: "独家内容策略引发争议，创作者生态不够开放。",
        atomic_unit: "播客节目/音乐专辑",
        distribution: "算法推荐 60% + 订阅流 30% + 搜索 10%",
        death_risk: "内容成本过高与盈利压力",
        tags: ["#音频", "#播客", "#音乐"],
        scores: [40, 70, 60, 80, 70],
        timeline: [
            { year: "2019", event: "Spotify收购多家播客公司，大举进入播客领域" },
            { year: "2020", event: "与Joe Rogan签署独家协议，引发行业关注" },
            { year: "2021", event: "播客用户突破3亿，成为全球最大播客平台" },
            { year: "2022", event: "推出播客广告技术，提升广告变现能力" },
            { year: "2023", event: "播客业务实现盈利，验证商业模式" },
            { year: "2024", event: "继续投资播客内容，巩固市场地位" }
        ],
        key_decisions: [
            "从音乐到播客的战略转型，通过播客增强用户粘性，延长使用时长",
            "独家内容策略，通过高价签约头部播客创作者，建立内容壁垒",
            "收购战略，通过收购播客公司和制作工具，快速建立播客生态",
            "广告技术创新，通过动态广告插入等技术，提升播客广告变现效率",
            "算法推荐优化，利用音乐推荐算法的经验，提升播客内容推荐精准度",
            "创作者工具建设，提供播客制作、分发、变现等一站式工具，降低创作门槛"
        ]
    },
    apple_podcasts: {
        title: "Apple Podcasts",
        subtitle: "播客生态的开创者",
        dao: "开放生态与高质量内容。作为播客行业的开创者，维护开放标准。",
        gov: "最小干预。平台提供基础设施，不干预内容创作和分发。",
        space: "开放广场。任何人都可以上传和分发播客内容。",
        econ: "平台免费，创作者自主变现。通过Apple设备生态建立优势。",
        risk: "用户体验落后于Spotify等竞争对手，用户流失。",
        atomic_unit: "播客节目/订阅源",
        distribution: "订阅分发 80% + 搜索 20%",
        death_risk: "被Spotify等竞争对手超越",
        tags: ["#音频", "#播客", "#开放"],
        scores: [30, 50, 20, 40, 20],
        timeline: [
            { year: "2005", event: "iTunes支持播客，开创播客生态" },
            { year: "2012", event: "推出独立的Podcasts应用" },
            { year: "2019", event: "Spotify进入播客领域，面临竞争压力" },
            { year: "2021", event: "推出Podcasts付费订阅功能，探索变现" },
            { year: "2023", event: "用户增长放缓，被Spotify超越" },
            { year: "2024", event: "改进用户体验，推出播客推荐功能" }
        ],
        key_decisions: [
            "开创播客生态，通过iTunes支持播客，建立RSS标准，推动行业开放",
            "最小干预策略，平台不干预内容，让创作者自由创作和分发",
            "通过Apple设备生态建立优势，iPhone、iPad等设备预装Podcasts应用",
            "开放标准维护，坚持RSS等开放标准，避免平台锁定",
            "付费订阅探索，推出Podcasts付费订阅，但策略保守，进展缓慢",
            "用户体验优化不足，相比Spotify等竞争对手，推荐算法和用户体验落后"
        ]
    },
    anchor_alt: {
        title: "Anchor (现Spotify for Podcasters)",
        subtitle: "播客创作与分发工具",
        dao: "降低播客创作门槛。让每个人都能轻松创作和分发播客。",
        gov: "工具提供者。提供创作工具，不干预内容。",
        space: "创作工作室。从录制到分发的全流程工具。",
        econ: "免费工具 + 广告分成。通过广告收入与创作者分成。",
        risk: "被Spotify收购后，独立性降低，工具定位可能改变。",
        atomic_unit: "播客节目/单集",
        distribution: "多平台分发（Spotify、Apple Podcasts等）",
        death_risk: "被Spotify整合，失去独立性",
        tags: ["#音频", "#工具", "#创作者"],
        scores: [40, 50, 30, 60, 50],
        timeline: [
            { year: "2015", event: "Anchor上线，专注播客创作工具" },
            { year: "2017", event: "推出手机录制功能，大幅降低创作门槛" },
            { year: "2019", event: "被Spotify收购，成为Spotify生态系统的一部分" },
            { year: "2020", event: "整合Spotify广告网络，推出广告分成模式" },
            { year: "2022", event: "改名为Spotify for Podcasters，强化与Spotify的整合" },
            { year: "2024", event: "继续作为Spotify播客生态的重要工具" }
        ],
        key_decisions: [
            "降低播客创作门槛，通过手机录制等工具，让普通人也能创作播客",
            "多平台分发策略，不锁定单一平台，支持分发到所有主流播客平台",
            "免费工具定位，通过广告分成而非订阅费变现，降低创作者成本",
            "被Spotify收购后，与Spotify生态深度整合，但保持工具独立性",
            "广告网络整合，接入Spotify广告网络，让创作者更容易通过广告变现",
            "工具持续优化，不断推出新功能，如视频播客、直播等，提升创作体验"
        ]
    },
    // === TapTap游戏社区 ===
    taptap: {
        title: "TapTap",
        subtitle: "移动游戏界的Steam",
        dao: "玩家驱动的内容发现。优质游戏推荐与社区评价。",
        gov: "去中心化评价体系。玩家评分决定游戏可见度，编辑推荐为辅。",
        space: "游戏商店 + 社区论坛 + 内容推荐。一站式游戏服务平台。",
        econ: "广告 + 游戏分发佣金。零抽成策略吸引开发者。",
        risk: "内容审核压力，低质量游戏涌入影响平台调性。",
        atomic_unit: "游戏/评价/攻略/动态",
        distribution: "算法推荐 40% + 玩家评分 30% + 编辑推荐 20% + 搜索 10%",
        death_risk: "商业化与内容质量的平衡",
        tags: ["#游戏社区", "#游戏平台", "#评价", "#内容发现", "#玩家驱动"],
        scores: [60, 70, 75, 65, 70],
        timeline: [
            { year: "2016", event: "TapTap成立，由心动网络推出，专注移动游戏社区和分发" },
            { year: "2017", event: "推出零抽成政策，吸引独立游戏开发者，与Google Play和App Store形成差异化" },
            { year: "2018", event: "上线TapTap国际版，拓展海外市场，成为全球最大的移动游戏社区之一" },
            { year: "2019", event: "用户数突破1亿，成为中国最活跃的游戏社区平台" },
            { year: "2020", event: "推出TapTap开发者服务，提供SDK和数据分析工具，建立开发者生态" },
            { year: "2021", event: "在港交所上市，市值超百亿，验证社区+平台的商业模式" },
            { year: "2022", event: "强化社区内容，推出游戏攻略、视频评测等UGC功能" },
            { year: "2023", event: "探索云游戏和游戏直播，拓展服务边界" },
            { year: "2024", event: "持续优化推荐算法，平衡商业化和内容质量" }
        ],
        key_decisions: [
            "零抽成策略，与Google Play和App Store的30%抽成形成差异化，吸引独立游戏开发者",
            "玩家评分系统为核心，让优质游戏通过口碑自然浮现，而非依赖付费推广",
            "编辑推荐机制，专业编辑团队精选优质游戏，平衡算法和人工推荐",
            "社区+平台双轮驱动，通过社区内容吸引用户，通过游戏分发实现变现",
            "国际化策略，TapTap国际版在全球范围内提供服务，建立全球游戏社区",
            "开发者生态建设，提供SDK、数据分析等工具，降低开发者门槛",
            "内容质量把控，通过审核机制和社区规则，维护平台调性和用户体验",
            "去商业化策略，拒绝游戏内购买和付费排名，保持内容发现的公平性"
        ]
    },
    // === 好游快爆（4399游戏盒）===
    haoyoukuai: {
        title: "好游快爆",
        subtitle: "4399游戏盒，精品游戏发现平台",
        dao: "精品游戏聚合与评测。帮助玩家发现优质游戏，避免踩雷。",
        gov: "编辑+社区双重审核。专业编辑推荐，玩家评测辅助。",
        space: "游戏商店 + 评测社区 + 攻略中心。游戏全生命周期服务。",
        econ: "广告 + 游戏联运分成。通过优质内容吸引用户付费。",
        risk: "内容同质化，与TapTap等平台竞争激烈。",
        atomic_unit: "游戏/评测/攻略/视频",
        distribution: "编辑推荐 50% + 算法推荐 30% + 搜索 20%",
        death_risk: "平台差异化不足，被头部平台挤压",
        tags: ["#游戏社区", "#游戏评测", "#攻略", "#精品游戏", "#4399"],
        scores: [55, 65, 70, 60, 65],
        timeline: [
            { year: "2014", event: "好游快爆（4399游戏盒）上线，定位精品游戏发现平台" },
            { year: "2015", event: "建立专业游戏评测团队，推出深度游戏评测内容" },
            { year: "2016", event: "上线攻略中心，提供游戏攻略、技巧分享等服务" },
            { year: "2017", event: "推出视频评测功能，丰富内容形式，吸引更多用户" },
            { year: "2018", event: "与4399游戏平台深度整合，形成游戏生态闭环" },
            { year: "2019", event: "用户数突破5000万，成为重要的游戏社区平台" },
            { year: "2020", event: "强化社区功能，推出游戏圈子、话题讨论等社交功能" },
            { year: "2021", event: "探索游戏直播和云游戏，拓展服务边界" },
            { year: "2022", event: "优化推荐算法，提升个性化推荐精准度" },
            { year: "2023", event: "与TapTap等平台竞争，寻求差异化定位" }
        ],
        key_decisions: [
            "精品游戏定位，专注发现和推荐优质游戏，避免低质量游戏泛滥",
            "专业编辑团队，建立高质量游戏评测体系，提升平台权威性",
            "攻略中心建设，提供游戏攻略、技巧分享，增强用户粘性",
            "与4399生态整合，利用4399游戏平台的用户基础和资源，形成协同效应",
            "视频内容策略，推出视频评测和游戏实况，丰富内容形式",
            "社区化运营，通过游戏圈子、话题讨论等功能，增强用户互动",
            "个性化推荐，优化算法推荐，提升用户体验和游戏发现效率",
            "差异化竞争，在TapTap等平台的压力下，寻求独特的定位和价值"
        ]
    },
    // === 游戏时光VGTime ===
    vgtime: {
        title: "游戏时光 (VGTime)",
        subtitle: "专业游戏媒体与社区",
        dao: "专业内容与玩家社区。游戏资讯、评测、攻略一站式服务。",
        gov: "编辑主导 + 社区参与。专业编辑生产内容，玩家社区讨论。",
        space: "游戏媒体 + 社区论坛 + 视频内容。多维度游戏内容平台。",
        econ: "广告 + 内容付费 + 电商导流。通过优质内容吸引广告主。",
        risk: "内容成本高，依赖专业编辑团队，商业化压力大。",
        atomic_unit: "文章/评测/视频/论坛帖子",
        distribution: "编辑推荐 60% + 算法推荐 25% + 社交分享 15%",
        death_risk: "内容成本过高，商业化困难",
        tags: ["#游戏媒体", "#游戏评测", "#游戏资讯", "#专业内容", "#社区"],
        scores: [50, 60, 65, 55, 60],
        timeline: [
            { year: "2012", event: "游戏时光（VGTime）成立，专注游戏媒体和社区" },
            { year: "2013", event: "建立专业游戏评测团队，推出深度游戏评测内容" },
            { year: "2014", event: "上线社区论坛，允许玩家讨论游戏、分享攻略" },
            { year: "2015", event: "推出视频内容，包括游戏评测、实况、资讯等" },
            { year: "2016", event: "建立游戏数据库，收录游戏信息和玩家评分" },
            { year: "2017", event: "推出移动App，拓展移动端用户" },
            { year: "2018", event: "与游戏厂商合作，推出独家内容和新作评测" },
            { year: "2019", event: "探索内容付费，推出会员服务和付费专栏" },
            { year: "2020", event: "强化社区运营，推出游戏话题、活动等社交功能" },
            { year: "2021", event: "面对游戏媒体行业竞争，寻求差异化定位" },
            { year: "2022", event: "优化内容分发，提升算法推荐精准度" },
            { year: "2023", event: "探索直播和视频内容，拓展内容形式" }
        ],
        key_decisions: [
            "专业内容定位，建立专业游戏评测团队，生产高质量游戏内容",
            "媒体+社区双轮驱动，通过专业内容吸引用户，通过社区增强粘性",
            "多内容形式，包括文章、视频、评测等，满足不同用户需求",
            "游戏数据库建设，收录游戏信息和玩家评分，成为游戏信息的权威来源",
            "移动端拓展，推出移动App，适应移动互联网趋势",
            "与游戏厂商合作，获得独家内容和早期评测机会，提升内容竞争力",
            "内容付费探索，推出会员服务和付费专栏，寻求多元化变现",
            "社区化运营，通过游戏话题、活动等社交功能，增强用户互动和粘性",
            "差异化竞争，在游戏媒体行业竞争激烈的环境下，寻求独特的定位和价值"
        ]
    },
    // === Molt 生态产品（核心案例）===
    moltbook: {
        title: "MoltBook",
        subtitle: "AI 驱动的阅读与笔记社区",
        dao: "知识沉淀与协作学习。将阅读、笔记、社区融为一体，通过 AI 增强理解与连接。读-记-用形成闭环，从被动消费到主动产出。",
        gov: "产品主导 + 社区共建。核心阅读与 AI 能力由团队把控，社区贡献书单、笔记与讨论，形成内容飞轮。",
        space: "阅读空间（公域书城）+ 笔记工作台（私域知识库）+ 社区讨论（阅读圈子、笔记分享）。公私结合，从输入到输出的完整知识生产环境。",
        econ: "会员订阅 + 增值服务。免费基础阅读与笔记，付费解锁 AI 摘要、无限导出、高级模板。与 MoltTalk、MoltTools 生态互通，形成订阅捆绑。",
        risk: "AI 能力依赖与巨头竞争。微信读书、Notion、Flomo 等抢占心智，需在 AI 阅读体验和社区粘性上形成差异化。",
        atomic_unit: "书籍/笔记/高亮/讨论/书单",
        distribution: "社交发现 40% + 算法推荐 35% + 编辑精选 25%",
        death_risk: "定位模糊被巨头碾压，或 AI 能力同质化导致流失",
        tags: ["#AI阅读", "#笔记社区", "#知识管理", "#阅读社交", "#Molttools生态", "#第二大脑"],
        scores: [65, 45, 60, 70, 55],
        timeline: [
            { year: "2024", event: "MoltBook 发布，定位 AI 驱动的阅读与笔记工具，主打读记一体化" },
            { year: "2024", event: "AI 摘要、智能提问、笔记联动等功能上线，与 MoltTools 生态打通" },
            { year: "2025", event: "社区功能增强，阅读圈子、书单共创、笔记分享上线" },
            { year: "2025", event: "与 MoltTalk 打通，支持读书会语音讨论、笔记跨产品同步" }
        ],
        key_decisions: [
            "AI 增强阅读，提供摘要、提问、笔记辅助等能力，降低从输入到输出的摩擦",
            "阅读与笔记一体化，高亮自动沉淀为笔记，笔记可反向链接书籍，形成第二大脑",
            "社区化运营，阅读圈子、书单共创、笔记公开分享增强连接与发现",
            "生态协同，与 MoltTalk、MoltTools 打通账号与内容，形成 Molt 产品矩阵"
        ],
        user_metrics: {
            monthly_active_users: "增长中（早期产品）",
            daily_active_users: "增长中",
            total_users: "增长中",
            growth_rate: "早期增长阶段",
            retention_rate: "目标 40%+ D7",
            user_demographics: {
                age_range: "22-40 岁为主，知识工作者与终身学习者",
                gender_ratio: "均衡",
                region: "中文市场为主",
                income_level: "中高收入，愿意为知识付费"
            },
            usage_patterns: {
                avg_session_duration: "25-40 分钟/天",
                sessions_per_day: "2-4 次",
                content_creation_rate: "15-20%（笔记产出）",
                engagement_rate: "目标 50%+"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "会员订阅", percentage: 70, description: "MoltBook Pro：AI 摘要、无限导出、高级模板" },
                { type: "生态捆绑", percentage: 20, description: "Molt 全家桶：MoltBook + MoltTalk + MoltTools 组合订阅" },
                { type: "增值服务", percentage: 10, description: "企业版、API 接入、定制模板" }
            ],
            monetization_strategy: "Freemium + 生态订阅，先建立用户习惯再变现",
            financial_metrics: {
                annual_revenue: "早期商业化阶段",
                revenue_growth: "聚焦用户增长与留存",
                profitability: "投入期",
                valuation: "早期项目"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "微信读书", similarity: 75, position: "阅读主战场，用户规模大，AI 能力追赶中" },
                { name: "Notion", similarity: 60, position: "笔记与知识库，阅读非核心" },
                { name: "Flomo", similarity: 55, position: "轻量笔记，阅读入口弱" },
                { name: "MarginNote", similarity: 70, position: "深度阅读与思维导图，偏学术" }
            ],
            market_position: "AI 阅读 + 笔记社区的新物种",
            market_share: "早期市场探索",
            competitive_advantages: [
                "AI 原生设计，读记一体化体验",
                "Molttools 生态协同，多产品数据互通",
                "社区化阅读，书单共创、笔记分享形成内容飞轮",
                "轻量起步，降低从消费到产出的门槛"
            ],
            competitive_disadvantages: [
                "巨头资源碾压",
                "用户迁移成本（已有微信读书/Notion 习惯）",
                "AI 能力易被模仿"
            ]
        },
        tech_stack: {
            core_technologies: [
                "AI 大模型（摘要、问答、笔记生成）",
                "跨端同步（Web / iOS / Android）",
                "知识图谱（笔记-书籍-高亮关联）"
            ],
            tech_features: [
                "智能摘要与要点提取",
                "高亮自动沉淀为笔记",
                "双向链接与反向引用",
                "与 MoltTalk、MoltTools 数据互通"
            ],
            tech_challenges: [
                "AI 成本控制与响应速度",
                "多端数据一致性",
                "阅读格式兼容（EPUB、PDF、网页）"
            ]
        },
        product_features: {
            core_features: [
                { name: "AI 阅读", description: "智能摘要、提问、要点提取，降低理解门槛", importance: "核心功能" },
                { name: "笔记工作台", description: "高亮即笔记，支持富文本、标签、双向链接", importance: "核心功能" },
                { name: "阅读圈子", description: "书单共创、读书会、笔记分享", importance: "核心功能" },
                { name: "书单", description: "个人/公开书单，协作共建，发现好书", importance: "重要功能" },
                { name: "导出与同步", description: "Markdown 导出、跨设备同步、API 接入", importance: "重要功能" }
            ],
            innovative_features: [
                "读记一体化（高亮→笔记→输出闭环）",
                "AI 原生阅读（摘要、提问、关联推荐）",
                "Molttools 生态互通（与 MoltTalk、MoltTools 打通）"
            ],
            feature_evolution: [
                { year: "2024", feature: "AI 阅读与笔记一体化" },
                { year: "2025", feature: "阅读圈子与书单共创" },
                { year: "2025", feature: "与 MoltTalk 打通，支持读书会" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "UGC 为主，书单、笔记、讨论由用户贡献，平台提供推荐与发现",
                creator_support: "优质书单与笔记作者露出，早期种子用户激励",
                content_quality: "AI 辅助内容审核，鼓励深度笔记与有价值讨论"
            },
            user_operation: {
                acquisition: "Molttools 生态导流、内容营销、读书 KOL 合作",
                activation: "首本书导入、首条笔记引导、AI 摘要体验",
                retention: "阅读圈子归属感、笔记积累成就感、书单共建参与感",
                referral: "书单分享、笔记公开、读书会邀请"
            },
            event_operation: [
                { name: "读书会", impact: "提升留存与社区活跃", description: "定期线上读书会，结合 MoltTalk 语音讨论" },
                { name: "书单共创", impact: "UGC 内容飞轮", description: "主题书单协作共建，优质书单推荐" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "目标持续增长",
                mau: "目标持续增长",
                engagement_rate: "目标 50%+",
                retention_7d: "目标 40%+",
                retention_30d: "目标 25%+"
            },
            content_metrics: {
                daily_notes: "笔记产出量",
                books_read: "人均阅读书籍数",
                highlight_rate: "高亮率",
                share_rate: "笔记/书单分享率"
            },
            business_metrics: {
                free_to_paid: "免费转付费转化率",
                arpu: "人均收入",
                ltv: "用户终身价值",
                cac: "获客成本"
            }
        },
        success_factors: [
            "AI 原生体验，读记一体化形成差异化",
            "社区化阅读，书单与笔记分享建立内容飞轮",
            "Molttools 生态协同，多产品互通增强粘性",
            "从轻量场景切入，降低从消费到产出的门槛",
            "种子用户运营，知识工作者与终身学习者口碑传播",
            "与 MoltTalk、MoltTools 形成产品矩阵，交叉导流"
        ]
    },
    molttalk: {
        title: "MoltTalk",
        subtitle: "AI 驱动的对话与交流社区",
        dao: "高效沟通与知识流动。将对话、协作用于社区场景，AI 辅助理解与总结。",
        gov: "产品主导。核心对话体验由团队把控。",
        space: "对话空间 + 群组 + 频道。多层次的交流与协作环境。",
        econ: "会员订阅 + 企业版。通过高级 AI 能力与团队功能变现。",
        risk: "与 Slack、飞书等企业通讯产品的竞争。",
        atomic_unit: "消息/频道/线程",
        distribution: "社交邀请 50% + 内容发现 30% + 品牌 20%",
        death_risk: "企业市场教育成本高，C端获客难",
        tags: ["#AI对话", "#协作社区", "#知识交流", "#Molttools生态"],
        scores: [70, 50, 65, 75, 50],
        timeline: [
            { year: "2024", event: "MoltTalk 发布，主打 AI 增强的团队对话" },
            { year: "2025", event: "社区功能上线，支持公开频道与讨论" }
        ],
        key_decisions: [
            "AI 增强对话，支持摘要、翻译、要点提取",
            "从 B 端协作扩展到 C 端社区场景",
            "与 MoltBook、Molttools 生态打通"
        ]
    },
    molttools: {
        title: "MoltTools",
        subtitle: "AI 工具箱与创作者社区",
        dao: "工具赋能与创作者经济。提供 AI 工具矩阵，同时构建创作者分享与交流的社区。",
        gov: "平台主导 + 创作者自治。平台提供工具与分发，创作者贡献内容与使用案例。",
        space: "工具广场 + 工作台 + 创作者社区。工具使用与经验分享并重。",
        econ: "工具订阅 + 创作者分成 + 企业版。多元化变现模式。",
        risk: "AI 工具同质化严重，需形成差异化与社区壁垒。",
        atomic_unit: "工具/模板/案例/教程",
        distribution: "社区发现 45% + 搜索 35% + 外部引流 20%",
        death_risk: "工具易被模仿，社区粘性不足则难留存",
        tags: ["#AI工具", "#创作者社区", "#工具生态", "#Molttools"],
        scores: [60, 55, 55, 80, 60],
        timeline: [
            { year: "2024", event: "MoltTools 上线，整合多款 AI 工具" },
            { year: "2025", event: "创作者社区功能完善，模板与案例分享活跃" }
        ],
        key_decisions: [
            "工具矩阵策略，覆盖写作、阅读、对话等多场景",
            "创作者社区建设，通过 UGC 模板和案例增强粘性",
            "与 MoltBook、MoltTalk 形成生态协同"
        ]
    }
};

// Export for usage if using modules, but here we just load it globally
// window.communityCases = communityCases; 

