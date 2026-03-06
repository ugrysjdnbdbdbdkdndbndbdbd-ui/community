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
            { year: "2022", event: "视频号商业化加速，推出直播带货功能" },
            { year: "2024", event: "持续迭代视频号与小程序生态，强化商业化与创作者扶持" }
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
            { year: "2021", event: "提出\"新市井商业\"概念，强化私域流量价值" },
            { year: "2024", event: "持续强化信任电商与私域，应对视频号与抖音竞争" }
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
        product_features: {
            core_features: [
                { name: "双列信息流", description: "双列瀑布流，用户主动选择点击，非单列沉浸", importance: "核心功能" },
                { name: "短视频", description: "拍摄、特效、音乐、同城与关注", importance: "核心功能" },
                { name: "直播", description: "直播打赏、 PK、带货、私域沉淀", importance: "核心功能" },
                { name: "信任电商", description: "小店、小黄车、老铁带货与复购", importance: "核心功能" },
                { name: "私域", description: "粉丝群、主页、直播预约与回放", importance: "核心功能" }
            ],
            innovative_features: [
                "双列与去中心化算法差异化",
                "老铁与私域信任电商",
                "新市井商业与普惠流量"
            ]
        },
        tech_stack: {
            core_technologies: [
                "推荐与去中心化分配（基尼系数控制）",
                "直播与连麦",
                "电商与支付",
                "多端与同城"
            ],
            tech_features: [
                "双列 Feed 与单列可选",
                "直播带货与数据",
                "小店与供应链"
            ],
            tech_challenges: [
                "与抖音、视频号争时长与电商",
                "一二线渗透与品牌",
                "商业化与普惠平衡"
            ]
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
            { year: "2022", event: "持续破圈，但面临内容质量下降和商业化压力" },
            { year: "2024", event: "持续优化大会员与创作激励，强化知识区与生活区内容" }
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
        dao: "兴趣聚合与民主投票。Karma（业力）系统量化贡献；披露 MAU 超 5 亿、2023 年收入约 8 亿美元，广告与 API 收费为收入来源。", 
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
        ],
        user_metrics: {
            monthly_active_users: "3000万",
            daily_active_users: "800万",
            total_users: "1亿",
            growth_rate: "-5%",
            retention_rate: "45%",
            user_demographics: {
                age_range: "25-45岁为主，文艺青年与书影音爱好者",
                gender_ratio: "55% 女性，45% 男性",
                region: "中国一二线城市为主",
                income_level: "中高收入、高学历群体为主"
            },
            usage_patterns: {
                avg_session_duration: "25分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "2%",
                engagement_rate: "40%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告收入",
                    percentage: 60,
                    description: "品牌广告、信息流广告"
                },
                {
                    type: "豆瓣时间",
                    percentage: 25,
                    description: "付费专栏、知识付费"
                },
                {
                    type: "其他服务",
                    percentage: 15,
                    description: "豆瓣FM会员、电商导流等"
                }
            ],
            monetization_strategy: "极低商业化，广告为主，知识付费探索有限",
            financial_metrics: {
                annual_revenue: "约2亿人民币 (2023)",
                revenue_growth: "-10% YoY",
                profitability: "微利或亏损",
                valuation: "约5亿人民币"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "小红书", similarity: 50, position: "生活方式与文艺内容间接竞品" },
                { name: "知乎", similarity: 45, position: "知识内容间接竞品" },
                { name: "猫眼/淘票票", similarity: 40, position: "电影评分与购票间接竞品" }
            ],
            market_position: "中文书影音评分与文艺社区独特存在",
            market_share: "书影音评分市场70%+，但整体规模小",
            competitive_advantages: [
                "评分权威性与可信度，用户决策参考首选",
                "小组文化独特，封闭社区氛围强",
                "文艺调性明确，鄙视链形成文化护城河",
                "无为而治，用户自治感强"
            ],
            competitive_disadvantages: [
                "商业化极弱，几乎无创作者变现路径",
                "移动端与年轻用户流失",
                "饭圈刷分损害评分公信力",
                "用户老龄化，增长停滞"
            ]
        },
        tech_stack: {
            core_technologies: [
                "传统Web架构为主",
                "书影音数据库与标签系统",
                "小组与UGC内容系统",
                "搜索与推荐"
            ],
            tech_features: [
                "书影音条目与评分系统",
                "小组与帖子架构",
                "豆瓣FM流媒体",
                "豆瓣时间付费内容"
            ],
            tech_challenges: [
                "移动端体验落后",
                "推荐与发现能力弱",
                "规模化与性能",
                "反刷分与内容审核"
            ]
        },
        product_features: {
            core_features: [
                { name: "书影音评分", description: "图书、电影、音乐条目与用户评分评论", importance: "核心功能" },
                { name: "豆瓣小组", description: "用户创建的封闭或开放兴趣社区", importance: "核心功能" },
                { name: "豆瓣FM", description: "个性化音乐流媒体", importance: "重要功能" },
                { name: "豆瓣时间", description: "付费专栏与知识付费", importance: "探索功能" }
            ],
            innovative_features: [
                "书影音评分体系（中文互联网权威参考）",
                "小组自治与封闭社区",
                "豆瓣FM个性化推荐"
            ],
            feature_evolution: [
                { year: "2005", feature: "书影音评分与评论" },
                { year: "2008", feature: "豆瓣小组上线" },
                { year: "2012", feature: "豆瓣FM上线" },
                { year: "2020", feature: "豆瓣时间付费内容" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "UGC为主，平台最小干预，小组自治",
                creator_support: "几乎无直接变现路径，为爱发电",
                content_quality: "依赖社区自治与举报，反刷分压力大"
            },
            user_operation: {
                acquisition: "口碑与书影音需求自然流入",
                activation: "评分与小组参与",
                retention: "小组归属感与书影音习惯",
                referral: "弱，依赖内容与口碑"
            },
            event_operation: [
                { name: "豆瓣时间", impact: "探索知识付费", description: "付费专栏等尝试，规模有限" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "800万",
                mau: "3000万",
                engagement_rate: "40%",
                retention_7d: "45%",
                retention_30d: "35%"
            },
            content_metrics: {
                daily_posts: "50万条小组帖与评论",
                avg_views: "25分钟/天",
                rating_coverage: "书影音条目覆盖广",
                group_activity: "活跃小组数万"
            },
            business_metrics: {
                arpu: "约2元/年",
                ltv: "约20元",
                cac: "低（自然增长为主）",
                conversion_rate: "付费转化率极低"
            }
        },
        success_factors: [
            "书影音评分建立权威性，成为用户决策参考",
            "小组功能形成精神角落与归属感",
            "无为而治与文艺调性形成独特文化",
            "对商业化克制保持社区纯粹",
            "但移动端与商业化滞后导致增长停滞",
            "饭圈刷分与用户老龄化是长期挑战"
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
        dao: "基于兴趣的\"圈子\"与\"动态\"。强调平等友善；MAU 约 500 万量级（行业估算）、即友文化驱动高留存与付费意愿。", 
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
        product_features: {
            core_features: [
                { name: "圈子", description: "兴趣圈子创建与加入，动态与讨论", importance: "核心功能" },
                { name: "动态", description: "短图文、投票、链接分享", importance: "核心功能" },
                { name: "即友", description: "关注、互动、即友圈", importance: "核心功能" },
                { name: "会员", description: "即友会员、专属标识与权益", importance: "扩展功能" }
            ],
            innovative_features: [
                "即友文化与平等友善",
                "圈子与兴趣精准匹配",
                "低商业化与社区优先"
            ]
        },
        tech_stack: {
            core_technologies: [
                "关注流与推荐",
                "圈子与权限",
                "会员与支付",
                "多端同步"
            ],
            tech_features: [
                "动态与投票",
                "链接与摘要",
                "消息与通知"
            ],
            tech_challenges: [
                "规模与监管平衡",
                "与微博/小红书差异化",
                "商业化与体验"
            ]
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
        dao: "竞技精神与男性认同。JRs (家人) 文化；用户破亿（披露/估算）、识货/得物导流贡献主要收入，直男圈层 ARPU 与电商转化关键。", 
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
        ],
        user_metrics: {
            monthly_active_users: "3000万+",
            daily_active_users: "800万+",
            total_users: "1亿+",
            growth_rate: "平稳",
            retention_rate: "65%",
            user_demographics: {
                age_range: "18-35岁为主，男性体育与泛直男用户",
                gender_ratio: "男性占绝大多数",
                region: "中国一二线城市为主",
                income_level: "中等收入、学生与职场"
            },
            usage_patterns: {
                avg_session_duration: "25分钟/天",
                sessions_per_day: "3-5次",
                content_creation_rate: "帖子与评分",
                engagement_rate: "70%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "电商导流", percentage: 70, description: "识货等导流抽成" },
                { type: "广告", percentage: 25, description: "信息流与品牌" },
                { type: "其他", percentage: 5, description: "会员与增值" }
            ],
            monetization_strategy: "电商导流为主，避免直接商业化冲击社区",
            financial_metrics: {
                annual_revenue: "数十亿人民币级",
                revenue_growth: "平稳",
                profitability: "盈利",
                valuation: "曾超40亿人民币"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "懂球帝等", similarity: 75, position: "体育垂直社区" },
                { name: "微博/抖音", similarity: 50, position: "泛内容分流" },
                { name: "得物", similarity: 45, position: "潮流与电商（曾孵化）" }
            ],
            market_position: "男性体育与直男文化代表社区",
            market_share: "体育垂直社区领先",
            competitive_advantages: [
                "JRs 文化与认同强",
                "评分与话题性",
                "识货等电商闭环"
            ],
            competitive_disadvantages: [
                "性别与代际排他性",
                "破圈与增长瓶颈",
                "与得物等分流"
            ]
        },
        tech_stack: {
            core_technologies: [
                "移动端 App 与 Web",
                "热榜与时间序",
                "识货等电商对接",
                "内容审核与小黑屋"
            ],
            tech_features: [
                "热榜与评分",
                "帖子与专区",
                "识货导流",
                "社区规则与处罚"
            ],
            tech_challenges: [
                "破圈与留存平衡",
                "氛围与商业化",
                "代际与性别包容"
            ]
        },
        product_features: {
            core_features: [
                { name: "专区与帖子", description: "体育、步行街等专区 UGC", importance: "核心功能" },
                { name: "评分", description: "万物可评，话题与互动", importance: "核心功能" },
                { name: "识货", description: "电商导流与变现", importance: "核心功能" },
                { name: "热榜", description: "热榜与时间序分发", importance: "核心功能" }
            ],
            innovative_features: [
                "JRs 文化与称呼",
                "评分功能与话题",
                "电商导流不直接破坏氛围"
            ],
            feature_evolution: [
                { year: "2004", feature: "虎扑成立，篮球社区" },
                { year: "2012", feature: "识货上线" },
                { year: "2017", feature: "毒（得物）孵化" },
                { year: "2023", feature: "强化直男定位" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "版规与小黑屋强控，JRs 文化运营",
                creator_support: "专区管理、话题运营、识货合作",
                content_quality: "审核、反水军、氛围管控"
            },
            user_operation: {
                acquisition: "体育赛事、口碑、识货",
                activation: "首帖、评分、专区关注",
                retention: "热榜、赛事、JRs 文化",
                referral: "分享帖子与评分"
            },
            event_operation: [
                { name: "赛事与步行街", impact: "日活与留存", description: "大赛期间峰值与日常话题" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "800万+",
                mau: "3000万+",
                engagement_rate: "70%",
                retention_7d: "65%",
                retention_30d: "55%"
            },
            content_metrics: {
                daily_posts: "数十万",
                rating_activity: "高",
                ecommerce_click: "识货等"
            },
            business_metrics: {
                arpu: "导流与广告",
                profitability: "盈利"
            }
        },
        success_factors: [
            "直男文化与 JRs 认同",
            "评分与话题性",
            "电商导流与社区平衡",
            "不盲目破圈保护核心"
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
        ],
        user_metrics: {
            monthly_active_users: "9亿+",
            daily_active_users: "5亿+",
            total_users: "9亿+",
            growth_rate: "高增长",
            retention_rate: "75%",
            user_demographics: {
                age_range: "18-45岁，全球分布",
                gender_ratio: "相对均衡",
                region: "全球，俄语区、中东、拉美、亚洲强势",
                income_level: "全收入段"
            },
            usage_patterns: {
                avg_session_duration: "20分钟/天",
                sessions_per_day: "5-10次",
                content_creation_rate: "Channel 与群组",
                engagement_rate: "78%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "Premium 订阅", percentage: 40, description: "Telegram Premium" },
                { type: "TON 生态", percentage: 30, description: "广告、钱包、Bot" },
                { type: "其他", percentage: 30, description: "API、企业功能" }
            ],
            monetization_strategy: "免费为主 + Premium + TON 生态",
            financial_metrics: {
                annual_revenue: "成长中",
                revenue_growth: "高",
                profitability: "投入与生态",
                valuation: "未上市，TON 生态估值高"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "WhatsApp", similarity: 90, position: "即时通讯直接竞品" },
                { name: "Signal", similarity: 85, position: "隐私通讯" },
                { name: "Discord", similarity: 60, position: "群组与社区" }
            ],
            market_position: "隐私与自由定位的全球通讯",
            market_share: "多国第一或第二 IM",
            competitive_advantages: [
                "隐私与加密",
                "Channel 与群组规模",
                "Bot API 与 TON"
            ],
            competitive_disadvantages: [
                "监管与下架风险",
                "灰黑产滥用",
                "商业化较晚"
            ]
        },
        tech_stack: {
            core_technologies: [
                "MTProto 协议与端到端加密",
                "Channel、群组、Bot API",
                "TON 区块链与钱包",
                "多端同步与云存储"
            ],
            tech_features: [
                "Secret Chats 端到端加密",
                "Channel 单向广播",
                "群组 20 万+ 成员",
                "Bot、支付、Mini App"
            ],
            tech_challenges: [
                "合规与监管",
                "滥用与安全",
                "商业化与规模成本"
            ]
        },
        product_features: {
            core_features: [
                { name: "私聊与群组", description: "消息、媒体、端到端可选", importance: "核心功能" },
                { name: "Channel", description: "单向广播，媒体与 KOL", importance: "核心功能" },
                { name: "Bot API", description: "机器人、支付、Mini App", importance: "核心功能" },
                { name: "TON", description: "钱包、广告、生态", importance: "核心功能" }
            ],
            innovative_features: [
                "无广告与隐私优先",
                "Channel 与大规模群组",
                "Bot 与 TON 生态"
            ],
            feature_evolution: [
                { year: "2013", feature: "Telegram 上线" },
                { year: "2015", feature: "Channel 推出" },
                { year: "2021", feature: "用户破 5 亿" },
                { year: "2024", feature: "用户破 9 亿、TON 生态" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "几乎无平台级干预，依赖举报与法律",
                creator_support: "Channel、Bot、API",
                content_quality: "不主动审核，灰黑产风险"
            },
            user_operation: {
                acquisition: "口碑、隐私需求、替代 WhatsApp",
                activation: "注册即用、Channel 订阅",
                retention: "关系链、Channel、群组",
                referral: "邀请与分享"
            },
            event_operation: [
                { name: "TON 与生态", impact: "商业化与留存", description: "钱包、广告、Bot 生态" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "5亿+",
                mau: "9亿+",
                engagement_rate: "78%",
                retention_7d: "75%",
                retention_30d: "70%"
            },
            content_metrics: {
                channels_count: "数百万",
                messages_per_day: "数百亿",
                premium_subscribers: "增长中"
            },
            business_metrics: {
                premium_arpu: "订阅制",
                ton_ecosystem: "增长中"
            }
        },
        success_factors: [
            "隐私与加密定位",
            "Channel 与群组规模",
            "无广告与体验",
            "TON 与生态拓展"
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
        ],
        user_metrics: {
            monthly_active_users: "30万+",
            daily_active_users: "15万+",
            total_users: "50万+",
            growth_rate: "80%",
            retention_rate: "65%",
            user_demographics: {
                age_range: "22-40岁为主，加密与科技用户",
                gender_ratio: "75% 男性，25% 女性",
                region: "美国、欧洲为主，加密活跃地区",
                income_level: "中高收入、加密持有者为主"
            },
            usage_patterns: {
                avg_session_duration: "25分钟/天",
                sessions_per_day: "4次",
                content_creation_rate: "15%",
                engagement_rate: "70%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "协议/客户端", percentage: 80, description: "Warpcast 等客户端增值与未来代币" },
                { type: "Frames 与生态", percentage: 20, description: "Frames 内交易与应用分成" }
            ],
            monetization_strategy: "早期免费，Frames 与生态变现，未来或代币",
            financial_metrics: {
                annual_revenue: "未公开，以融资与生态为主",
                revenue_growth: "高增长",
                profitability: "投入期",
                valuation: "约10亿美元 (2024)"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Lens Protocol", similarity: 85, position: "去中心化社交协议直接竞品" },
                { name: "Nostr", similarity: 70, position: "去中心化协议竞品" },
                { name: "Bluesky", similarity: 65, position: "开放社交协议竞品" }
            ],
            market_position: "去中心化社交协议领先者之一",
            market_share: "链上社交协议份额领先",
            competitive_advantages: [
                "Frames 可交互内容与内嵌应用",
                "Warpcast 体验降低 Web3 门槛",
                "融资与生态发展快",
                "协议与客户端分离"
            ],
            competitive_disadvantages: [
                "需钱包，对非加密用户门槛高",
                "依赖 Warpcast 等单一主流客户端",
                "与 Lens/Nostr 等竞争用户与开发者"
            ]
        },
        tech_stack: {
            core_technologies: [
                "链上身份与社交图谱存储",
                "Frames 嵌入式应用与支付",
                "Hub 节点与客户端 API",
                "开放推荐与算法接口"
            ],
            tech_features: [
                "Cast 与 Reply/Quote",
                "Frames 2.0 可交互内容",
                "Channel 与 DM",
                "Warpcast 等多客户端"
            ],
            tech_challenges: [
                "链上存储成本与扩容",
                "多客户端体验一致性",
                "普通用户钱包与 gas 门槛",
                "推荐与发现体验"
            ]
        },
        product_features: {
            core_features: [
                { name: "Cast", description: "类推文的内容单元，支持图文链等", importance: "核心功能" },
                { name: "Frames", description: "可交互内嵌应用与支付", importance: "核心功能" },
                { name: "Channel", description: "主题频道与订阅", importance: "核心功能" },
                { name: "DM", description: "端到端加密私信", importance: "重要功能" }
            ],
            innovative_features: [
                "Frames 可编程社交与支付",
                "协议与客户端分离、多客户端",
                "开放算法接口"
            ],
            feature_evolution: [
                { year: "2020", feature: "Farcaster 协议创立" },
                { year: "2021", feature: "Warpcast 客户端" },
                { year: "2022", feature: "Frames" },
                { year: "2024", feature: "Frames 2.0" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "协议层不干预内容，客户端自治审核与推荐",
                creator_support: "Frames 开发、Channel 运营、生态激励",
                content_quality: "各客户端自定规则，协议层最小"
            },
            user_operation: {
                acquisition: "加密社区、Warpcast 邀请、Frames 传播",
                activation: "钱包连接、首条 Cast、Frames 互动",
                retention: "关注流、Channel、Frames 应用",
                referral: "邀请与分享"
            },
            event_operation: [
                { name: "Farcaster 生态与融资", impact: "协议与客户端双增长", description: "a16z 等投资与生态扩展" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "15万+",
                mau: "30万+",
                engagement_rate: "70%",
                retention_7d: "65%",
                retention_30d: "55%"
            },
            content_metrics: {
                daily_casts: "50万+",
                frames_interaction_rate: "提升中",
                channel_count: "数千"
            },
            business_metrics: {
                arpu: "早期免费",
                valuation: "约10亿美元"
            }
        },
        success_factors: [
            "Frames 可交互内容建立差异化",
            "协议与客户端分离降低迁移成本",
            "Warpcast 体验降低 Web3 门槛",
            "融资与生态推动协议采用",
            "需突破加密圈层才能持续增长"
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
        tech_stack: {
            core_technologies: [
                "推荐算法与搜索",
                "问答与内容理解",
                "盐选会员与付费系统",
                "反作弊与内容审核"
            ],
            tech_features: [
                "问答与专栏系统",
                "算法推荐与关注流",
                "盐选会员与付费内容",
                "知乎Live与值乎"
            ],
            tech_challenges: [
                "信噪比与内容质量",
                "反营销与引流治理",
                "规模化推荐与个性化",
                "付费转化与留存"
            ]
        },
        product_features: {
            core_features: [
                { name: "问答", description: "提问与回答，赞同与评论", importance: "核心功能" },
                { name: "专栏", description: "长文与专题内容", importance: "核心功能" },
                { name: "盐选会员", description: "付费专栏与故事化内容", importance: "核心功能" },
                { name: "知乎Live/值乎", description: "知识付费与直播", importance: "重要功能" }
            ],
            innovative_features: [
                "早期邀请制与\"谢邀\"文化",
                "盐选会员与故事化内容",
                "算法推荐与关注流结合"
            ],
            feature_evolution: [
                { year: "2011", feature: "邀请制问答" },
                { year: "2013", feature: "开放注册" },
                { year: "2016", feature: "值乎、知乎Live" },
                { year: "2019", feature: "盐选会员" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "UGC为主，算法推荐占比提升，盐选PGC补充",
                creator_support: "创作者激励与流量扶持，但变现路径有限",
                content_quality: "反营销、反引流，内容审核与权重体系"
            },
            user_operation: {
                acquisition: "品牌与搜索引流，热点与话题",
                activation: "问答参与与关注",
                retention: "推荐流与关注流，盐选内容",
                referral: "分享与邀请激励有限"
            },
            event_operation: [
                { name: "盐选会员", impact: "商业化与内容故事化", description: "付费内容与故事化倾斜" }
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
        ],
        user_metrics: {
            monthly_active_users: "1亿+",
            daily_active_users: "3000万+",
            total_users: "2亿+",
            growth_rate: "受 AI 冲击放缓",
            retention_rate: "60%",
            user_demographics: {
                age_range: "22-45岁，开发者与技术人员",
                gender_ratio: "偏男性",
                region: "全球，英语区为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "15分钟/天",
                sessions_per_day: "2-4次",
                content_creation_rate: "问答与编辑",
                engagement_rate: "65%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "招聘与 Teams", percentage: 60, description: "Careers、Teams 企业版" },
                { type: "广告", percentage: 30, description: "对 C 端低干扰" },
                { type: "AI 数据", percentage: 10, description: "Stack Overflow for AI" }
            ],
            monetization_strategy: "B 端为主，C 端几乎无干扰",
            financial_metrics: {
                annual_revenue: "数亿美元级",
                revenue_growth: "平稳",
                profitability: "盈利",
                valuation: "被 Prosus 约 18 亿美元收购"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "ChatGPT / AI", similarity: 70, position: "基础问答被替代" },
                { name: "GitHub Discussions", similarity: 65, position: "开源项目问答" },
                { name: "Reddit / 垂直论坛", similarity: 55, position: "讨论与发现" }
            ],
            market_position: "程序员问答与知识库标杆",
            market_share: "技术问答搜索份额仍高",
            competitive_advantages: [
                "声望与质量体系",
                "SEO 与历史积累",
                "Teams 与招聘 B 端"
            ],
            competitive_disadvantages: [
                "AI 冲击基础问答流量",
                "贡献者激励与流失",
                "与 AI 数据业务平衡"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Q&A 引擎与声望系统",
                "Markdown、代码高亮、标签",
                "SEO 与搜索",
                "Teams 与 API"
            ],
            tech_features: [
                "问答与投票、关闭、重复合并",
                "声望与徽章",
                "Mod 与社区自治",
                "Stack Overflow for AI"
            ],
            tech_challenges: [
                "AI 冲击与流量",
                "贡献者留存",
                "B 端与 C 端平衡"
            ]
        },
        product_features: {
            core_features: [
                { name: "问答", description: "提问、回答、投票、关闭", importance: "核心功能" },
                { name: "声望与徽章", description: "Reputation、Badges、Mod", importance: "核心功能" },
                { name: "Teams", description: "企业私有问答", importance: "核心功能" },
                { name: "Careers", description: "招聘与人才", importance: "核心功能" }
            ],
            innovative_features: [
                "声望系统与社区自治",
                "SEO 与知识库",
                "AI 数据与 B 端变现"
            ],
            feature_evolution: [
                { year: "2008", feature: "Stack Overflow 成立" },
                { year: "2015", feature: "Careers、Teams" },
                { year: "2021", feature: "被 Prosus 收购" },
                { year: "2024", feature: "Stack Overflow for AI" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "社区自治、严格质量标准、关闭重复与低质",
                creator_support: "声望与徽章、Mod 权限、文档",
                content_quality: "关闭策略、编辑、审核"
            },
            user_operation: {
                acquisition: "搜索、口碑、招聘",
                activation: "首问/首答、声望成长",
                retention: "声望、问答、Teams",
                referral: "分享与引用"
            },
            event_operation: [
                { name: "社区与会议", impact: "品牌与贡献者", description: "年度调查与生态" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "3000万+",
                mau: "1亿+",
                engagement_rate: "65%",
                retention_7d: "60%",
                retention_30d: "55%"
            },
            content_metrics: {
                questions_count: "数千万",
                answers_per_day: "数十万",
                teams_adoption: "企业为主"
            },
            business_metrics: {
                careers_revenue: "招聘",
                teams_revenue: "企业版"
            }
        },
        success_factors: [
            "声望系统与质量体系",
            "SEO 与知识库地位",
            "B 端变现不破坏 C 端",
            "应对 AI 冲击（数据与 B 端）"
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
        ],
        user_metrics: {
            monthly_active_users: "5000万+",
            daily_active_users: "1500万+",
            total_users: "2亿+",
            growth_rate: "平稳",
            retention_rate: "68%",
            user_demographics: {
                age_range: "18-30岁为主，Z 世代潮流用户",
                gender_ratio: "相对均衡，偏年轻女性增长",
                region: "中国一二线与下沉市场",
                income_level: "中等至中高、潮流消费"
            },
            usage_patterns: {
                avg_session_duration: "20分钟/天",
                sessions_per_day: "3-5次",
                content_creation_rate: "晒单与社区",
                engagement_rate: "72%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "交易抽成", percentage: 55, description: "二手与新品交易" },
                { type: "鉴定费", percentage: 25, description: "鉴定服务" },
                { type: "广告与品牌", percentage: 20, description: "品牌与信息流" }
            ],
            monetization_strategy: "鉴定+社区+交易闭环",
            financial_metrics: {
                annual_revenue: "数百亿人民币级",
                revenue_growth: "平稳",
                profitability: "盈利",
                valuation: "曾超 10 亿美元独角兽"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "闲鱼", similarity: 75, position: "综合二手" },
                { name: "小红书", similarity: 65, position: "潮流内容与种草" },
                { name: "淘宝/京东", similarity: 55, position: "新品与品牌" }
            ],
            market_position: "潮流鉴定与交易代表",
            market_share: "球鞋与潮流二手领先",
            competitive_advantages: [
                "鉴定与信任体系",
                "社区+交易闭环",
                "潮流与 Z 世代"
            ],
            competitive_disadvantages: [
                "品类扩展稀释定位",
                "假货与信任风险",
                "与小红书等内容竞争"
            ]
        },
        tech_stack: {
            core_technologies: [
                "鉴定流程与质检",
                "社区与算法推荐",
                "交易与支付",
                "供应链与仓储"
            ],
            tech_features: [
                "鉴定与防伪",
                "社区晒单与 UGC",
                "交易与履约",
                "直播与品牌合作"
            ],
            tech_challenges: [
                "鉴定规模与一致性",
                "假货与风控",
                "品类与定位平衡"
            ]
        },
        product_features: {
            core_features: [
                { name: "鉴定", description: "球鞋/潮玩等鉴定与报告", importance: "核心功能" },
                { name: "社区", description: "晒单、穿搭、话题", importance: "核心功能" },
                { name: "交易", description: "二手与新品、履约", importance: "核心功能" },
                { name: "直播", description: "直播带货与品牌", importance: "核心功能" }
            ],
            innovative_features: [
                "鉴定+社区+交易一体化",
                "信任体系与正品保障",
                "从球鞋到潮流品类"
            ],
            feature_evolution: [
                { year: "2015", feature: "毒成立，球鞋鉴定" },
                { year: "2017", feature: "社区+交易闭环" },
                { year: "2019", feature: "得物品牌升级" },
                { year: "2023", feature: "潮玩美妆与直播" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "强运营+社区规则，打击假货与刷单",
                creator_support: "鉴定师认证、创作者激励、品牌合作",
                content_quality: "鉴定标准、审核、风控"
            },
            user_operation: {
                acquisition: "口碑、KOL、赛事与品牌",
                activation: "首单、鉴定、社区关注",
                retention: "订阅、社区、复购",
                referral: "晒单与分享"
            },
            event_operation: [
                { name: "品牌与赛事", impact: "获客与品牌", description: "联名、独家、直播" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "1500万+",
                mau: "5000万+",
                engagement_rate: "72%",
                retention_7d: "68%",
                retention_30d: "58%"
            },
            content_metrics: {
                daily_posts: "数百万",
                transactions_per_day: "数十万单",
                authentication_rate: "高"
            },
            business_metrics: {
                gmv: "数百亿级",
                take_rate: "抽成与鉴定费",
                profitability: "盈利"
            }
        },
        success_factors: [
            "鉴定与信任壁垒",
            "社区+交易闭环",
            "潮流与 Z 世代定位",
            "正品与风控"
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
        ],
        user_metrics: {
            monthly_active_users: "20万+",
            daily_active_users: "8万+",
            total_users: "40万+",
            growth_rate: "40%",
            retention_rate: "55%",
            user_demographics: {
                age_range: "22-38岁为主，加密与创作者",
                gender_ratio: "70% 男性，30% 女性",
                region: "全球，Polygon 生态为主",
                income_level: "中高收入、加密与 Web3 用户"
            },
            usage_patterns: {
                avg_session_duration: "20分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "12%",
                engagement_rate: "60%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "生态与 Gas", percentage: 60, description: "Polygon 上 Gas 与生态价值" },
                { type: "客户端与应用", percentage: 40, description: "Lenster、Phaver 等客户端变现" }
            ],
            monetization_strategy: "协议层无直接抽成，生态与客户端变现",
            financial_metrics: {
                annual_revenue: "协议层无直接收入",
                revenue_growth: "生态增长",
                profitability: "Aave 团队投入",
                valuation: "生态估值与 LENS 代币"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Farcaster", similarity: 90, position: "去中心化社交协议直接竞品" },
                { name: "Nostr", similarity: 65, position: "去中心化协议竞品" },
                { name: "Bluesky", similarity: 60, position: "开放社交协议竞品" }
            ],
            market_position: "去中心化社交图谱协议领先者之一",
            market_share: "链上社交图谱份额领先",
            competitive_advantages: [
                "Follow NFT 与可组合性",
                "Open Actions 嵌入应用与交互",
                "Aave 背书与生态资源",
                "多客户端（Lenster、Phaver 等）"
            ],
            competitive_disadvantages: [
                "依赖 Polygon 与 Gas",
                "技术门槛与钱包门槛",
                "与 Farcaster 等竞争开发者与用户"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Polygon 链上存储与 NFT",
                "Profile/Follow/Publication 数据结构",
                "Open Actions 可组合交互",
                "Lens API 与 SDK"
            ],
            tech_features: [
                "Profile NFT 与 Follow NFT",
                "Publication 与 Comment/Mirror",
                "Open Actions 内嵌应用",
                "Lens V2 多内容类型"
            ],
            tech_challenges: [
                "Gas 成本与扩容",
                "多客户端体验一致",
                "普通用户门槛",
                "与 Farcaster 等协议竞争"
            ]
        },
        product_features: {
            core_features: [
                { name: "Profile NFT", description: "链上身份与可移植档案", importance: "核心功能" },
                { name: "Publication", description: "帖子、评论、Mirror", importance: "核心功能" },
                { name: "Follow NFT", description: "关注关系 NFT 化、可交易可组合", importance: "核心功能" },
                { name: "Open Actions", description: "Publication 内嵌应用与支付", importance: "核心功能" }
            ],
            innovative_features: [
                "Follow NFT 与社交图谱可组合性",
                "Open Actions 可编程社交",
                "多客户端协议层"
            ],
            feature_evolution: [
                { year: "2021", feature: "Lens 开发启动" },
                { year: "2022", feature: "主网 Beta、Lenster" },
                { year: "2023", feature: "Open Actions、Lens DAO" },
                { year: "2024", feature: "Lens V2" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "协议层开放，客户端与应用自治内容与推荐",
                creator_support: "SDK、Open Actions 开发、生态激励",
                content_quality: "各客户端自定，协议层最小"
            },
            user_operation: {
                acquisition: "加密与 Web3 社区、多客户端拉新",
                activation: "钱包连接、Profile 创建、首条 Publication",
                retention: "关注流、Open Actions 应用、多客户端",
                referral: "Mirror 与分享"
            },
            event_operation: [
                { name: "Lens DAO 与生态", impact: "协议与客户端双增长", description: "DAO 治理与生态应用扩展" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "8万+",
                mau: "20万+",
                engagement_rate: "60%",
                retention_7d: "55%",
                retention_30d: "45%"
            },
            content_metrics: {
                daily_publications: "15万+",
                open_actions_usage: "增长中",
                client_count: "数十个"
            },
            business_metrics: {
                protocol_revenue: "无直接抽成",
                ecosystem_valuation: "LENS 与生态"
            }
        },
        success_factors: [
            "Follow NFT 与可组合性建立差异化",
            "Open Actions 可编程社交",
            "Aave 背书与多客户端生态",
            "需降低门槛并与 Farcaster 等竞争"
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
        tech_stack: {
            core_technologies: [
                "实时消息与推送",
                "频道与搜索索引",
                "Integrations 与 API",
                "Slack GPT 与 AI 集成"
            ],
            tech_features: [
                "频道、线程、DM",
                "应用与工作流集成",
                "搜索与知识库",
                "语音与视频通话"
            ],
            tech_challenges: [
                "大规模消息与搜索性能",
                "与 Teams/Outlook 竞争",
                "AI 与工作流深度整合",
                "Salesforce 生态协同"
            ]
        },
        product_features: {
            core_features: [
                { name: "频道与消息", description: "公开/私密频道、线程、DM", importance: "核心功能" },
                { name: "Integrations", description: "第三方应用、工作流、Bot", importance: "核心功能" },
                { name: "搜索与归档", description: "全文搜索、消息历史、归档", importance: "核心功能" },
                { name: "Slack GPT", description: "AI 摘要、问答、工作流", importance: "重要功能" }
            ],
            innovative_features: [
                "频道架构与异步沟通",
                "Integrations 生态",
                "Slack GPT 与 AI 集成"
            ],
            feature_evolution: [
                { year: "2013", feature: "Slack 发布" },
                { year: "2015", feature: "Integrations" },
                { year: "2020", feature: "Salesforce 收购与生态整合" },
                { year: "2023", feature: "Slack GPT" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "组织自管频道与信息，平台提供工具与集成",
                creator_support: "应用开发、工作流、Slack 认证",
                content_quality: "企业合规与安全策略"
            },
            user_operation: {
                acquisition: "Freemium、口碑、销售与渠道",
                activation: "频道创建、邀请、集成安装",
                retention: "日常沟通、搜索、工作流",
                referral: "邀请成员、共享频道"
            },
            event_operation: [
                { name: "Slack Frontiers", impact: "用户与生态连接", description: "年度用户大会" }
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
        ],
        user_metrics: {
            monthly_active_users: "约3.2亿",
            daily_active_users: "约2.8亿",
            total_users: "企业用户数亿",
            growth_rate: "约10%",
            retention_rate: "约90%",
            user_demographics: {
                age_range: "22-55岁，企业员工",
                gender_ratio: "约52% 男性，48% 女性",
                region: "全球，欧美、企业市场为主",
                income_level: "企业付费"
            },
            usage_patterns: {
                avg_session_duration: "约90分钟/天",
                sessions_per_day: "25次",
                content_creation_rate: "消息、会议、文档",
                engagement_rate: "88%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "Office 365 / M365 捆绑", percentage: 95, description: "Teams 随订阅包含" },
                { type: "其他", percentage: 5, description: "独立 Teams 免费版等" }
            ],
            monetization_strategy: "与 Microsoft 365 捆绑，企业订阅",
            financial_metrics: {
                annual_revenue: "纳入 Microsoft，未单独披露",
                revenue_growth: "企业协作领先",
                profitability: "驱动 M365 订阅",
                valuation: "微软核心产品"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约2.8亿",
                mau: "约3.2亿",
                engagement_rate: "88%",
                retention_7d: "92%",
                retention_30d: "90%"
            },
            content_metrics: {
                meetings_per_day: "数亿分钟会议",
                channels_and_chat: "频道、聊天、文件",
                copilot_usage: "AI 协作"
            },
            business_metrics: {
                arpu: "随 M365 席位",
                ltv: "极高",
                cac: "企业销售",
                conversion_rate: "企业采用率持续提升"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Slack", similarity: 90, position: "企业协作直接竞品" },
                { name: "Zoom", similarity: 60, position: "会议场景竞品" },
                { name: "Google Workspace", similarity: 85, position: "办公套件竞品" }
            ],
            market_position: "全球企业协作与会议市场领先（与 M365 捆绑）",
            market_share: "企业协作市场约50%+",
            competitive_advantages: [
                "与 Office/M365 深度集成",
                "企业 IT 与合规优势",
                "Copilot AI 与规模"
            ],
            competitive_disadvantages: [
                "功能臃肿、学习成本高",
                "小团队与个人体验一般",
                "依赖微软生态"
            ]
        },
        product_features: {
            core_features: [
                { name: "频道与聊天", description: "团队频道、私聊、@与回复", importance: "核心功能" },
                { name: "会议", description: "音视频会议、屏幕共享、录制、直播", importance: "核心功能" },
                { name: "文件与协作", description: "与 SharePoint/OneDrive 集成、共同编辑", importance: "核心功能" },
                { name: "应用与机器人", description: "应用商店、Power Automate、Bot", importance: "核心功能" },
                { name: "Copilot", description: "AI 总结、问答、会议洞察", importance: "扩展功能" }
            ],
            innovative_features: [
                "与 Office 无缝整合",
                "企业级权限与合规",
                "Copilot 与会议洞察"
            ]
        },
        tech_stack: {
            core_technologies: [
                "实时音视频与 WebRTC",
                "与 Azure AD / M365 集成",
                "消息与通知",
                "多端（桌面/Web/移动）"
            ],
            tech_features: [
                "频道与权限模型",
                "会议与录制",
                "Copilot 与 LLM"
            ],
            tech_challenges: [
                "规模与多租户",
                "与 Slack/Zoom 差异化",
                "体验与功能平衡"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "曾宣称数亿，实际活跃存疑",
            daily_active_users: "历史",
            total_users: "曾超 5 亿注册",
            growth_rate: "已关闭",
            retention_rate: "历史",
            user_demographics: {
                age_range: "曾以 25-45 岁为主",
                gender_ratio: "相对均衡",
                region: "全球",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "历史，较低",
                sessions_per_day: "历史",
                content_creation_rate: "低",
                engagement_rate: "历史"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 90, description: "未规模化，用户不足" },
                { type: "其他", percentage: 10, description: "企业版尝试" }
            ],
            monetization_strategy: "广告未建立，2019 关闭",
            financial_metrics: {
                annual_revenue: "未规模化",
                revenue_growth: "已关闭",
                profitability: "亏损",
                valuation: "失败案例"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "历史",
                mau: "历史",
                engagement_rate: "历史",
                retention_7d: "历史",
                retention_30d: "历史"
            },
            content_metrics: {
                circles: "圈子概念未普及",
                posts: "帖子与互动低"
            },
            business_metrics: {
                arpu: "极低",
                ltv: "历史",
                cac: "历史",
                conversion_rate: "历史"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Facebook", similarity: 90, position: "当时主要竞品，被全面超越" },
                { name: "Twitter", similarity: 60, position: "公开社交间接竞品" },
                { name: "LinkedIn", similarity: 40, position: "企业/职业场景尝试竞品" }
            ],
            market_position: "失败案例，曾试图与 Facebook 竞争但未建立差异化",
            market_share: "已关闭，无",
            competitive_advantages: [
                "曾拥有 Google 生态导流",
                "圈子概念有创新但未普及"
            ],
            competitive_disadvantages: [
                "强制整合引发反感",
                "概念复杂、定位模糊",
                "缺乏社区与留存"
            ]
        },
        product_features: {
            core_features: [
                { name: "圈子 (Circles)", description: "将好友分组分享，概念复杂", importance: "核心功能" },
                { name: "信息流", description: "帖子、+1、评论", importance: "核心功能" },
                { name: "Hangouts", description: "群聊与视频通话", importance: "扩展功能" },
                { name: "与 Gmail/YouTube 整合", description: "强制账号与产品整合", importance: "扩展功能" }
            ],
            innovative_features: [
                "圈子概念（未普及）",
                "实名与 Google 账号",
                "企业版 G+ 尝试"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Google 账号与身份",
                "实时与推送",
                "与 Gmail/YouTube 数据打通"
            ],
            tech_features: [
                "圈子与权限",
                "信息流与推荐",
                "多端"
            ],
            tech_challenges: [
                "产品与运营未跟上",
                "与 Facebook 竞争失利",
                "已关闭"
            ]
        }
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
        tech_stack: {
            core_technologies: [
                "Steamworks API（成就、云存档、多人等）",
                "数字版权与反作弊",
                "CDN与下载分发",
                "创意工坊与UGC管线"
            ],
            tech_features: [
                "游戏库与云存档",
                "创意工坊MOD/地图分发",
                "好友与社区动态",
                "Steam Deck兼容与优化"
            ],
            tech_challenges: [
                "大规模并发与下载",
                "反作弊与反盗版",
                "创意工坊内容审核",
                "多平台与硬件兼容"
            ]
        },
        product_features: {
            core_features: [
                { name: "数字商店", description: "游戏购买、预购、折扣与促销", importance: "核心功能" },
                { name: "创意工坊", description: "MOD、地图、皮肤等UGC内容", importance: "核心功能" },
                { name: "社区", description: "评测、讨论、好友与动态", importance: "核心功能" },
                { name: "Steam Deck", description: "掌机与PC游戏便携体验", importance: "重要功能" }
            ],
            innovative_features: [
                "创意工坊与UGC生态",
                "夏季/冬季大促文化",
                "Steamworks开发者工具"
            ],
            feature_evolution: [
                { year: "2003", feature: "游戏更新与反盗版" },
                { year: "2007", feature: "社区与好友" },
                { year: "2011", feature: "创意工坊" },
                { year: "2022", feature: "Steam Deck" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "游戏库与创意工坊UGC并重，大促驱动销售",
                creator_support: "创意工坊分成与曝光，开发者Steamworks支持",
                content_quality: "游戏审核与创意工坊规范，反作弊"
            },
            user_operation: {
                acquisition: "大促与独占、口碑",
                activation: "首购与愿望单、成就",
                retention: "游戏库与云存档、好友与社区",
                referral: "礼物与家庭共享"
            },
            event_operation: [
                { name: "夏季/冬季特卖", impact: "销量与用户习惯", description: "定期大促建立促销文化" }
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
        tech_stack: {
            core_technologies: [
                "实时视频流与低延迟传输",
                "聊天与弹幕系统",
                "Bits与订阅支付",
                "内容审核与版权识别"
            ],
            tech_features: [
                "低延迟直播流",
                "聊天、表情与Hype Train",
                "订阅与Bits打赏",
                "Clips与短视频"
            ],
            tech_challenges: [
                "大规模并发直播与观看",
                "低延迟与画质平衡",
                "版权与DMCA审核",
                "反作弊与虚假互动"
            ]
        },
        product_features: {
            core_features: [
                { name: "直播流", description: "实时视频直播与多画质", importance: "核心功能" },
                { name: "订阅与Bits", description: "频道订阅与虚拟货币打赏", importance: "核心功能" },
                { name: "聊天与互动", description: "实时聊天、表情、Hype Train", importance: "核心功能" },
                { name: "Clips与VOD", description: "精彩片段与回放", importance: "重要功能" }
            ],
            innovative_features: [
                "Bits打赏与Hype Train",
                "Twitch Prime与Amazon整合",
                "实时聊天共时性体验"
            ],
            feature_evolution: [
                { year: "2011", feature: "游戏直播分离" },
                { year: "2012", feature: "订阅功能" },
                { year: "2013", feature: "Bits打赏" },
                { year: "2022", feature: "分成政策调整" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "游戏直播为主，拓展IRL/音乐等，创作者分成驱动",
                creator_support: "订阅与Bits分成、Prime Gaming、创作者工具",
                content_quality: "社区准则、版权与DMCA、反作弊"
            },
            user_operation: {
                acquisition: "游戏与直播口碑、Prime整合",
                activation: "关注与订阅、聊天参与",
                retention: "关注流与推荐、社区归属",
                referral: "分享直播与Clips"
            },
            event_operation: [
                { name: "TwitchCon", impact: "创作者与用户连接", description: "年度线下大会" }
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
        ],
        user_metrics: {
            monthly_active_users: "约400万",
            daily_active_users: "约100万",
            total_users: "约600万+",
            growth_rate: "约15%",
            retention_rate: "约60%",
            user_demographics: {
                age_range: "22-45岁，开发者与技术写作者",
                gender_ratio: "约70% 男性，30% 女性",
                region: "全球，美国、印度为主",
                income_level: "中高收入技术人群"
            },
            usage_patterns: {
                avg_session_duration: "约12分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "文章与讨论",
                engagement_rate: "55%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 60, description: "展示与赞助" },
                { type: "企业版", percentage: 40, description: "Dev.to for Teams、B2B" }
            ],
            monetization_strategy: "广告 + 企业版，对创作者免费",
            financial_metrics: {
                annual_revenue: "约数千万美元级",
                revenue_growth: "约20%",
                profitability: "接近盈亏平衡",
                valuation: "Forem 旗下"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约100万",
                mau: "约400万",
                engagement_rate: "55%",
                retention_7d: "58%",
                retention_30d: "60%"
            },
            content_metrics: {
                articles: "数百万篇技术文章",
                markdown_first: "Markdown 与代码高亮",
                forem_opensource: "Forem 开源"
            },
            business_metrics: {
                arpu: "低（免费为主）",
                ltv: "中",
                cac: "口碑与 SEO",
                conversion_rate: "企业版转化"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Medium", similarity: 65, position: "技术写作与长文平台" },
                { name: "Hashnode", similarity: 80, position: "开发者博客直接竞品" },
                { name: "GitHub Blog", similarity: 50, position: "技术内容与开源" }
            ],
            market_position: "开发者友好技术写作社区",
            market_share: "技术博客与写作社区份额约 15%+",
            competitive_advantages: [
                "Markdown 与代码高亮优先",
                "包容性与开源（Forem）",
                "对创作者免费，企业版 B2B"
            ],
            competitive_disadvantages: [
                "与 Hashnode/Medium 争作者",
                "内容质量参差",
                "依赖 Forem 与社区运营"
            ]
        },
        product_features: {
            core_features: [
                { name: "文章发布", description: "Markdown 编辑、代码高亮、标签与系列", importance: "核心功能" },
                { name: "讨论", description: "文章下评论与讨论串", importance: "核心功能" },
                { name: "Podcast", description: "播客发布与收听", importance: "扩展功能" },
                { name: "Dev.to for Teams", description: "企业内技术博客与知识库", importance: "扩展功能" }
            ],
            innovative_features: [
                "Markdown 与 Forem 开源生态",
                "代码块与语法高亮体验",
                "包容性社区准则"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Forem 开源栈（Rails）",
                "Markdown 与代码高亮",
                "邮件与通知",
                "企业版多租户"
            ],
            tech_features: [
                "插件与主题（Forem）",
                "API 与 RSS",
                "SEO 与发现"
            ],
            tech_challenges: [
                "内容质量与推荐",
                "与 Hashnode/Medium 差异化",
                "企业版规模化"
            ]
        }
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
        tech_stack: {
            core_technologies: [
                "支付与订阅计费系统",
                "会员等级与权益管理",
                "内容分发与权限控制",
                "创作者分析与税务工具"
            ],
            tech_features: [
                "按月/按件订阅与支付",
                "会员专享内容与帖子",
                "Patreon Video 视频支持",
                "AI 辅助创作与社区管理"
            ],
            tech_challenges: [
                "多币种与税务合规",
                "内容权限与防盗链",
                "创作者留存与付费转化",
                "与 Substack/Ko-fi 差异化"
            ]
        },
        product_features: {
            core_features: [
                { name: "订阅与会员等级", description: "按月订阅、多档位会员、专属内容", importance: "核心功能" },
                { name: "创作者主页与帖子", description: "帖子、图片、视频、音频等专享内容", importance: "核心功能" },
                { name: "支付与分成", description: "支付处理、平台抽成、创作者提现", importance: "核心功能" },
                { name: "Patreon Video", description: "视频内容与播放", importance: "重要功能" }
            ],
            innovative_features: [
                "按月订阅稳定创作者收入",
                "会员等级差异化价值",
                "绕过平台算法直接触达"
            ],
            feature_evolution: [
                { year: "2013", feature: "创作者直接支持" },
                { year: "2014", feature: "按月订阅" },
                { year: "2015", feature: "会员等级" },
                { year: "2022", feature: "Patreon Video" },
                { year: "2023", feature: "AI 工具" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "创作者自治，平台提供工具与支付，不干预内容",
                creator_support: "支付、税务、分析、AI 工具，抽成 5–12%",
                content_quality: "底线规则，创作者自管社区"
            },
            user_operation: {
                acquisition: "创作者引流、搜索与发现",
                activation: "首单支持、会员等级选择",
                retention: "专属内容、会员权益、邮件与 App",
                referral: "创作者邀请、分享奖励"
            },
            event_operation: [
                { name: "创作者生态拓展", impact: "创作者与 Patron 双增长", description: "持续拓展品类与地区" }
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
        ],
        user_metrics: {
            monthly_active_users: "1亿+",
            daily_active_users: "2000万+",
            total_users: "2亿+",
            growth_rate: "平稳",
            retention_rate: "55%",
            user_demographics: {
                age_range: "25-45岁，知识工作者与深度阅读者",
                gender_ratio: "相对均衡",
                region: "全球，美国与英语区为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "15分钟/天",
                sessions_per_day: "2-3次",
                content_creation_rate: "作者发布",
                engagement_rate: "58%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "会员订阅", percentage: 70, description: "Medium Membership" },
                { type: "Partner Program 分成", percentage: 20, description: "作者分成后平台留成" },
                { type: "Teams / B2B", percentage: 10, description: "Medium for Teams" }
            ],
            monetization_strategy: "会员制 + 作者分成，无广告",
            financial_metrics: {
                annual_revenue: "数亿美元级",
                revenue_growth: "平稳",
                profitability: "曾裁员，平衡中",
                valuation: "未公开，曾估值数亿"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Substack", similarity: 90, position: "订阅与作者主权" },
                { name: "Ghost", similarity: 85, position: "写作与订阅" },
                { name: "知乎/公众号", similarity: 60, position: "深度内容" }
            ],
            market_position: "深度阅读与写作平台",
            market_share: "被 Substack 等分流",
            competitive_advantages: [
                "无广告与阅读体验",
                "会员制与作者分成",
                "编辑+算法发现"
            ],
            competitive_disadvantages: [
                "作者分成不透明导致流失",
                "算法化牺牲质量",
                "Substack 等作者主权更强"
            ]
        },
        tech_stack: {
            core_technologies: [
                "富文本与阅读器",
                "推荐与算法",
                "会员与支付",
                "Teams 与 API"
            ],
            tech_features: [
                "长文与阅读体验",
                "会员墙与分成",
                "编辑精选与算法",
                "AI 写作辅助"
            ],
            tech_challenges: [
                "作者留存与分成透明",
                "质量与算法平衡",
                "B2B 与 B2C 定位"
            ]
        },
        product_features: {
            core_features: [
                { name: "写作与发布", description: "富文本、草稿、统计", importance: "核心功能" },
                { name: "阅读与会员", description: "会员墙、阅读时长", importance: "核心功能" },
                { name: "推荐", description: "编辑精选、算法推荐", importance: "核心功能" },
                { name: "Teams", description: "企业内刊与协作", importance: "拓展" }
            ],
            innovative_features: [
                "无广告与会员制",
                "Partner Program 作者分成",
                "编辑+算法混合"
            ],
            feature_evolution: [
                { year: "2012", feature: "Medium 成立" },
                { year: "2017", feature: "会员制" },
                { year: "2022", feature: "Medium for Teams" },
                { year: "2024", feature: "AI 写作工具" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "编辑推荐+算法，作者自主发布",
                creator_support: "Partner Program、统计、订阅工具",
                content_quality: "审核、推荐标准、反作弊"
            },
            user_operation: {
                acquisition: "搜索、社交、作者引流",
                activation: "首读、关注作者、会员试用",
                retention: "订阅、推荐、邮件",
                referral: "分享与订阅"
            },
            event_operation: [
                { name: "作者与品牌", impact: "内容与留存", description: "专题与合作" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "2000万+",
                mau: "1亿+",
                engagement_rate: "58%",
                retention_7d: "55%",
                retention_30d: "48%"
            },
            content_metrics: {
                articles_published: "数千万",
                membership_rate: "个位数%",
                author_retention: "受 Substack 分流"
            },
            business_metrics: {
                arpu: "会员制",
                author_share: "分成比例不透明"
            }
        },
        success_factors: [
            "无广告与阅读体验",
            "会员制与作者分成",
            "编辑与算法发现",
            "需改善作者关系与透明"
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
        ],
        user_metrics: {
            monthly_active_users: "约3亿",
            daily_active_users: "约1亿",
            total_users: "约4亿+",
            growth_rate: "约5%",
            retention_rate: "约55%",
            user_demographics: {
                age_range: "25-55岁为主，高知与专业人士",
                gender_ratio: "约60% 男性，40% 女性",
                region: "全球，美国、印度为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约8分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "约5%",
                engagement_rate: "50%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 70, description: "Quora Ads" },
                { type: "Quora+ 订阅", percentage: 30, description: "付费问答与作者分成" }
            ],
            monetization_strategy: "广告 + Quora+ 订阅",
            financial_metrics: {
                annual_revenue: "约数亿美元 (2023)",
                revenue_growth: "个位数",
                profitability: "接近盈利",
                valuation: "约18亿美元 (2017)"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约1亿",
                mau: "约3亿",
                engagement_rate: "50%",
                retention_7d: "52%",
                retention_30d: "55%"
            },
            content_metrics: {
                questions_answers: "数亿条问答",
                spaces: "Quora Spaces 社区",
                poe_ai: "Poe AI 问答"
            },
            business_metrics: {
                arpu: "约2美元/年",
                ltv: "中",
                cac: "SEO 与口碑",
                conversion_rate: "Quora+ 转化低"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Reddit", similarity: 60, position: "论坛与社区讨论" },
                { name: "Stack Overflow", similarity: 50, position: "技术问答" },
                { name: "知乎", similarity: 75, position: "中文问答社区" }
            ],
            market_position: "英文综合问答社区",
            market_share: "问答/知识社区份额约 25%+",
            competitive_advantages: [
                "早期邀请制建立权威感",
                "实名与专业身份",
                "SEO 与长尾流量",
                "Quora+ 与 Poe AI 探索"
            ],
            competitive_disadvantages: [
                "内容农场化与质量下滑",
                "广告与算法引发不满",
                "被 Reddit、Stack Overflow、知乎分流"
            ]
        },
        product_features: {
            core_features: [
                { name: "问答", description: "提问、回答、评论、点赞与排序", importance: "核心功能" },
                { name: "Spaces", description: "主题社区与专栏", importance: "扩展功能" },
                { name: "推荐与搜索", description: "算法推荐、搜索、邮件摘要", importance: "核心功能" },
                { name: "Quora+", description: "付费订阅与作者付费墙", importance: "扩展功能" },
                { name: "Poe", description: "多模型 AI 问答与聊天", importance: "扩展功能" }
            ],
            innovative_features: [
                "问答即 SEO 与长尾流量",
                "实名与权威背书",
                "AI 问答（Poe）与人类回答并存"
            ]
        },
        tech_stack: {
            core_technologies: [
                "问答与关系图谱",
                "推荐与搜索",
                "广告与 Quora+ 支付",
                "Poe 多模型接入"
            ],
            tech_features: [
                "邮件摘要与推送",
                "Spaces 与内容组织",
                "作者统计与变现"
            ],
            tech_challenges: [
                "质量与算法、广告平衡",
                "AI 生成与人类内容区分",
                "与 Reddit/知乎差异化"
            ]
        }
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
        product_features: {
            core_features: [
                { name: "个人档案", description: "履历、技能、推荐、认证", importance: "核心功能" },
                { name: "动态与文章", description: "职业内容、Publishing、动态流", importance: "核心功能" },
                { name: "人脉与连接", description: "Connections 一度二度三度、InMail", importance: "核心功能" },
                { name: "职位与招聘", description: "职位发布、Recruiter、人才搜索", importance: "核心功能" },
                { name: "Learning", description: "在线课程与技能认证", importance: "扩展功能" },
                { name: "Sales Navigator", description: "销售线索与 CRM 集成", importance: "扩展功能" }
            ],
            innovative_features: [
                "职业身份与连接度量化",
                "招聘与内容双轮",
                "Microsoft 365 与 Teams 集成"
            ]
        },
        tech_stack: {
            core_technologies: [
                "职业图谱与推荐",
                "招聘与人才匹配",
                "广告与会员计费",
                "Microsoft 身份与集成"
            ],
            tech_features: [
                "多端与 API",
                "Learning 课程与证书",
                "Sales Navigator 与 CRM"
            ],
            tech_challenges: [
                "内容与职业定位平衡",
                "与 Indeed/Glassdoor 竞争",
                "年轻用户与增长"
            ]
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
        competitive_landscape: {
            main_competitors: [
                { name: "Twitter Spaces", similarity: 85, position: "音频房间直接竞品" },
                { name: "Discord Stage", similarity: 70, position: "社区内语音" },
                { name: "小宇宙/喜马拉雅", similarity: 50, position: "播客与语音" }
            ],
            market_position: "曾为音频社交现象级产品，现热度回落",
            market_share: "音频社交份额被 Spaces/Discord 分流",
            competitive_advantages: [
                "早期邀请制与名人效应",
                "纯音频、即来即走低压力",
                "房间创建者自治"
            ],
            competitive_disadvantages: [
                "开放后失去稀缺感",
                "变现不清，被大平台模仿",
                "留存与规模不足"
            ]
        },
        product_features: {
            core_features: [
                { name: "语音房间", description: "创建/加入房间、举手发言、听众/主讲", importance: "核心功能" },
                { name: "关注与发现", description: "关注人、推荐房间、日历", importance: "核心功能" },
                { name: "Club", description: "俱乐部与 recurring 房间", importance: "扩展功能" },
                { name: "Creator First", description: "创作者打赏与变现尝试", importance: "扩展功能" }
            ],
            innovative_features: [
                "纯音频实时社交",
                "邀请制与 FOMO 拉新",
                "房间即来即走"
            ]
        },
        tech_stack: {
            core_technologies: [
                "实时语音与房间管理",
                "低延迟音频传输",
                "关注与推荐"
            ],
            tech_features: [
                "多端（iOS/Android）",
                "房间录制与回放",
                "Club 与日历"
            ],
            tech_challenges: [
                "与 Twitter Spaces/Discord 竞争",
                "规模化与成本",
                "变现与留存"
            ]
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
        ],
        user_metrics: {
            monthly_active_users: "100万+",
            daily_active_users: "40万+",
            total_users: "200万+",
            growth_rate: "50%",
            retention_rate: "50%",
            user_demographics: {
                age_range: "22-45岁为主，极客与自由表达用户",
                gender_ratio: "80% 男性，20% 女性",
                region: "全球，比特币与自由言论社区",
                income_level: "中高收入、加密与技术用户"
            },
            usage_patterns: {
                avg_session_duration: "15分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "8%",
                engagement_rate: "55%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "中继与生态", percentage: 70, description: "付费中继、打赏与生态" },
                { type: "客户端", percentage: 30, description: "Damus、Amethyst 等增值" }
            ],
            monetization_strategy: "无协议层抽成，中继与客户端自筹，Zap 打赏",
            financial_metrics: {
                annual_revenue: "无中心化收入",
                revenue_growth: "生态与用户增长",
                profitability: "捐赠与社区投入",
                valuation: "生态与社区价值"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Farcaster", similarity: 70, position: "去中心化社交协议竞品" },
                { name: "Lens Protocol", similarity: 65, position: "链上社交协议竞品" },
                { name: "Bluesky", similarity: 60, position: "开放社交协议竞品" }
            ],
            market_position: "极简去中心化社交协议，抗审查与比特币生态",
            market_share: "Nostr 生态多客户端",
            competitive_advantages: [
                "极简协议、无链上依赖",
                "抗审查与中继可切换",
                "Zap 与 Lightning 原生支付",
                "Jack Dorsey 等背书"
            ],
            competitive_disadvantages: [
                "密钥与中继概念门槛高",
                "多客户端体验碎片化",
                "与 Farcaster/Bluesky 竞争用户"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Nostr 协议（JSON + 加密签名）",
                "中继服务器（Relay）网络",
                "密钥对与 NIP 扩展",
                "Lightning Network 与 Zap"
            ],
            tech_features: [
                "Note 与 Reply/Reaction",
                "中继选择与切换",
                "Zap 打赏与微支付",
                "NIP 扩展（长文、投票等）"
            ],
            tech_challenges: [
                "中继性能与去中心化平衡",
                "密钥管理对普通用户门槛",
                "多客户端与协议一致性",
                "垃圾与滥用治理"
            ]
        },
        product_features: {
            core_features: [
                { name: "Note", description: "类推文的内容单元，支持多种 NIP", importance: "核心功能" },
                { name: "中继", description: "去中心化存储与传输，可自建或选用", importance: "核心功能" },
                { name: "Zap", description: "Lightning 打赏与微支付", importance: "核心功能" },
                { name: "NIP 扩展", description: "长文、投票、DM 等扩展", importance: "重要功能" }
            ],
            innovative_features: [
                "极简协议、无链上依赖",
                "Zap 与 Lightning 原生支付",
                "抗审查与中继可切换"
            ],
            feature_evolution: [
                { year: "2020", feature: "Nostr 协议提出" },
                { year: "2021", feature: "协议规范发布" },
                { year: "2023", feature: "Damus 上线、Zap 集成" },
                { year: "2024", feature: "付费中继与生态" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "无中心化运营，中继与客户端自治",
                creator_support: "Zap 打赏、客户端工具、NIP 生态",
                content_quality: "各中继与客户端自定，抗审查优先"
            },
            user_operation: {
                acquisition: "比特币与自由言论社区、Damus 等客户端",
                activation: "密钥生成、中继选择、首条 Note",
                retention: "关注流、Zap、多客户端",
                referral: "分享与邀请"
            },
            event_operation: [
                { name: "Damus 与 Jack Dorsey", impact: "Nostr 破圈", description: "iOS 上线与名人背书" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "40万+",
                mau: "100万+",
                engagement_rate: "55%",
                retention_7d: "50%",
                retention_30d: "40%"
            },
            content_metrics: {
                daily_notes: "100万+",
                relay_count: "数百",
                client_count: "数十"
            },
            business_metrics: {
                protocol_revenue: "无",
                zap_volume: "增长中"
            }
        },
        success_factors: [
            "极简协议降低开发与运行门槛",
            "抗审查与中继可切换",
            "Zap 与 Lightning 原生支付",
            "需简化密钥与中继概念以破圈"
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
        ],
        user_metrics: {
            monthly_active_users: "800万+",
            daily_active_users: "300万+",
            total_users: "1200万+",
            growth_rate: "60%",
            retention_rate: "58%",
            user_demographics: {
                age_range: "22-40岁为主，科技与媒体用户",
                gender_ratio: "60% 男性，40% 女性",
                region: "美国为主，英语区扩展",
                income_level: "中高收入、知识工作者"
            },
            usage_patterns: {
                avg_session_duration: "22分钟/天",
                sessions_per_day: "4次",
                content_creation_rate: "10%",
                engagement_rate: "62%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "未来订阅/增值", percentage: 0, description: "早期免费，商业模式探索中" },
                { type: "生态与合作", percentage: 100, description: "融资与生态合作" }
            ],
            monetization_strategy: "早期免费，未来或订阅与增值，PDS 与生态变现",
            financial_metrics: {
                annual_revenue: "无直接收入",
                revenue_growth: "用户高增长",
                profitability: "投入期",
                valuation: "融资估值未公开"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Twitter/X", similarity: 90, position: "直接竞品，迁移来源" },
                { name: "Farcaster", similarity: 65, position: "去中心化社交协议竞品" },
                { name: "Mastodon", similarity: 60, position: "联邦制社交竞品" }
            ],
            market_position: "去中心化 Twitter 替代品领先者",
            market_share: "开放社交协议用户量领先",
            competitive_advantages: [
                "AT 协议账户可移植与联邦制",
                "类似 Twitter 体验降低迁移成本",
                "自定义 Feeds 打破单一算法",
                "Jack Dorsey 与开源背书"
            ],
            competitive_disadvantages: [
                "需建立足够网络效应",
                "商业模式未定",
                "与 X 及 Farcaster 等竞争"
            ]
        },
        tech_stack: {
            core_technologies: [
                "AT 协议（Authenticated Transfer）",
                "PDS 个人数据服务器",
                "Lexicon 与 API",
                "自定义 Feeds 与算法接口"
            ],
            tech_features: [
                "Skeet 与 Reply/Quote",
                "PDS 自托管与迁移",
                "Custom Feeds 自定义算法",
                "Labeler 与审核接口"
            ],
            tech_challenges: [
                "PDS 规模与成本",
                "多 PDS 与体验一致",
                "内容审核与 Labeler 生态",
                "商业化路径"
            ]
        },
        product_features: {
            core_features: [
                { name: "Skeet", description: "类推文的内容单元", importance: "核心功能" },
                { name: "PDS", description: "个人数据服务器，账户可移植", importance: "核心功能" },
                { name: "Custom Feeds", description: "用户可选算法与信息流", importance: "核心功能" },
                { name: "Labeler", description: "第三方审核与标签", importance: "重要功能" }
            ],
            innovative_features: [
                "AT 协议与 PDS 账户可移植",
                "Custom Feeds 打破单一算法",
                "联邦制与开源"
            ],
            feature_evolution: [
                { year: "2019", feature: "Bluesky 项目宣布" },
                { year: "2022", feature: "AT 协议发布" },
                { year: "2023", feature: "Beta 与邀请制" },
                { year: "2024", feature: "开放注册、联邦制与 Custom Feeds" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "平台提供默认推荐，Custom Feeds 与 Labeler 开放生态",
                creator_support: "API、Custom Feeds 开发、生态合作",
                content_quality: "Labeler 与社区准则"
            },
            user_operation: {
                acquisition: "Twitter 迁移、邀请制转开放、媒体与 KOL",
                activation: "注册、首条 Skeet、关注与 Feeds",
                retention: "关注流、Custom Feeds、PDS 归属感",
                referral: "邀请与分享"
            },
            event_operation: [
                { name: "开放注册与联邦制", impact: "用户与生态双增长", description: "2024 开放注册与 PDS" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "300万+",
                mau: "800万+",
                engagement_rate: "62%",
                retention_7d: "58%",
                retention_30d: "48%"
            },
            content_metrics: {
                daily_skeets: "500万+",
                custom_feeds_count: "数千",
                pds_count: "增长中"
            },
            business_metrics: {
                revenue: "无直接收入",
                growth: "用户与生态高增长"
            }
        },
        success_factors: [
            "AT 协议与 PDS 建立数据主权与可移植",
            "类似 Twitter 体验降低迁移成本",
            "Custom Feeds 打破单一算法垄断",
            "需建立可持续商业模式与网络效应"
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
        ],
        user_metrics: {
            monthly_active_users: "约3000万（活跃博客，2024 估算）",
            daily_active_users: "约500万",
            total_users: "注册量曾超 5 亿，当前活跃下降",
            growth_rate: "负增长（收购后流失）",
            retention_rate: "约 35%",
            user_demographics: {
                age_range: "曾以 18-34 岁为主，亚文化与创作者",
                gender_ratio: "相对均衡，偏年轻女性",
                region: "欧美为主",
                income_level: "多元，创作者与消费者混合"
            },
            usage_patterns: {
                avg_session_duration: "约20分钟/天（巅峰期）",
                sessions_per_day: "2次",
                content_creation_rate: "Reblog 驱动，原创占比较低",
                engagement_rate: "约 40%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告",
                    percentage: 60,
                    description: "展示与信息流广告（效果有限）"
                },
                {
                    type: "订阅/增值",
                    percentage: 40,
                    description: "Post+ 等订阅尝试，占比低"
                }
            ],
            monetization_strategy: "广告为主，商业化困难；被收购后多次易主",
            financial_metrics: {
                annual_revenue: "未单独披露（Automattic 旗下）",
                revenue_growth: "收购后下滑",
                profitability: "长期亏损或微利",
                valuation: "2019 年出售约 300 万美元（较 Yahoo 11 亿暴跌）"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约500万",
                mau: "约3000万",
                engagement_rate: "40%",
                retention_7d: "35%",
                retention_30d: "25%"
            },
            content_metrics: {
                daily_posts: "约数百万（含 Reblog）",
                blog_count: "约 5 亿+ 历史博客",
                reblog_ratio: "高（核心传播机制）"
            },
            business_metrics: {
                arpu: "极低",
                ltv: "低（用户流失后难回流）",
                cac: "依赖自然与口碑",
                conversion_rate: "付费转化极低"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "WordPress", similarity: 50, position: "博客与自建站" },
                { name: "Medium", similarity: 55, position: "长文与博客平台" },
                { name: "Instagram", similarity: 45, position: "视觉内容分流" }
            ],
            market_position: "亚文化与博客混合平台，收购后衰落",
            market_share: "曾为头部博客/轻博客，现份额萎缩",
            competitive_advantages: [
                "Reblog 与病毒传播机制独特",
                "匿名与亚文化社区氛围",
                "多格式支持（图/文/视频/音频）"
            ],
            competitive_disadvantages: [
                "被 Yahoo/Verizon/Automattic 多次易主",
                "禁止成人内容导致核心用户流失",
                "商业化困难，广告与订阅均不理想"
            ]
        },
        product_features: {
            core_features: [
                { name: "Post", description: "多类型帖子（文字、图片、视频、音频、链接等）", importance: "核心功能" },
                { name: "Reblog", description: "转发与二次传播，带评论链", importance: "核心功能" },
                { name: "Blog", description: "个人博客主页与时间线", importance: "核心功能" },
                { name: "Follow", description: "关注博主与时间线", importance: "核心功能" },
                { name: "Post+", description: "付费订阅与会员专享内容", importance: "扩展功能" }
            ],
            innovative_features: [
                "Reblog 链式传播与社区文化",
                "匿名与亚文化友好",
                "多格式一站式发布"
            ]
        },
        tech_stack: {
            core_technologies: [
                "大规模博客与媒体托管",
                "时间线聚合与推荐",
                "多格式内容存储与 CDN"
            ],
            tech_features: [
                "Reblog 与引用链",
                "主题与自定义",
                "API 与第三方客户端"
            ],
            tech_challenges: [
                "收购后投入不足与创新停滞",
                "内容政策与用户信任",
                "商业化与留存平衡"
            ]
        }
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
        product_features: {
            core_features: [
                { name: "Pin", description: "单张图片或短视频的收藏单元，可链接到商品或网页", importance: "核心功能" },
                { name: "Board", description: "用户创建的收藏夹，按主题组织 Pin", importance: "核心功能" },
                { name: "视觉发现", description: "首页与搜索以图为主，算法推荐灵感流", importance: "核心功能" },
                { name: "Buyable Pins", description: "可直接购买的商品 Pin，缩短从灵感到下单路径", importance: "核心功能" },
                { name: "Idea Pins", description: "多页图文/短视频，创作者故事与教程", importance: "扩展功能" }
            ],
            innovative_features: [
                "Board 虚拟剪贴板心智，与搜索/社交形成差异化",
                "视觉优先发现，离消费决策近",
                "Promoted Pins 与电商佣金结合"
            ]
        },
        tech_stack: {
            core_technologies: [
                "图像识别与视觉搜索",
                "推荐算法与个性化 Feed",
                "电商与商品图谱",
                "多端同步（Web/App）"
            ],
            tech_features: [
                "以图搜图与相似 Pin 推荐",
                "Board 协作与分享",
                "购物车与结账集成"
            ],
            tech_challenges: [
                "与 Instagram/TikTok 争用户时长",
                "电商转化率与广告负载平衡",
                "内容多样性避免同质化"
            ]
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
        product_features: {
            core_features: [
                { name: "Feed 信息流", description: "图文与 Reels 混合流，算法推荐为主", importance: "核心功能" },
                { name: "Stories", description: "24 小时可见的图文/短视频，阅后即焚式", importance: "核心功能" },
                { name: "Reels", description: "竖屏短视频，全屏沉浸与算法分发", importance: "核心功能" },
                { name: "滤镜与编辑", description: "拍照滤镜、贴纸、Boomerang 等", importance: "核心功能" },
                { name: "购物与标签", description: "商品标签、购物袋、直播带货", importance: "扩展功能" },
                { name: "DM", description: "私信与群聊，支持图文与语音", importance: "核心功能" }
            ],
            innovative_features: [
                "方形图片与滤镜建立视觉社交心智",
                "Stories 快速模仿 Snapchat 并反超",
                "Reels 对抗 TikTok 的短视频布局"
            ]
        },
        tech_stack: {
            core_technologies: [
                "图像/视频处理与压缩",
                "推荐算法与 Feed 排序",
                "AR 滤镜与效果",
                "Meta 广告与归因体系"
            ],
            tech_features: [
                "多格式支持（图/视频/Stories/Reels）",
                "实时协作与直播",
                "购物与支付集成"
            ],
            tech_challenges: [
                "Reels 与 TikTok 内容质量与创作者激励",
                "算法透明度与用户信任",
                "电商与内容体验平衡"
            ]
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
        ],
        user_metrics: {
            monthly_active_users: "约4亿",
            daily_active_users: "约2.5亿",
            total_users: "约7.5亿+",
            growth_rate: "约5%",
            retention_rate: "约70%",
            user_demographics: {
                age_range: "13-34岁为主，Z世代与千禧一代",
                gender_ratio: "约55% 女性，45% 男性",
                region: "北美、欧洲、印度为主",
                income_level: "年轻用户，广告价值高"
            },
            usage_patterns: {
                avg_session_duration: "约30分钟/天",
                sessions_per_day: "20+ 次",
                content_creation_rate: "Stories与Snap高",
                engagement_rate: "75%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 95, description: "Snap Ads、AR、Discover" },
                { type: "订阅与AR", percentage: 5, description: "Snapchat+、AR企业服务" }
            ],
            monetization_strategy: "广告为主，AR与订阅探索",
            financial_metrics: {
                annual_revenue: "约46亿美元 (2023)",
                revenue_growth: "约5% YoY",
                profitability: "亏损收窄",
                valuation: "约200亿美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约2.5亿",
                mau: "约4亿",
                engagement_rate: "75%",
                retention_7d: "72%",
                retention_30d: "70%"
            },
            content_metrics: {
                daily_snaps: "数十亿",
                ar_engagement: "AR滤镜使用率高",
                spotlight: "短视频与Discover"
            },
            business_metrics: {
                arpu: "约12美元/年",
                ltv: "中高",
                cac: "品牌与年轻用户",
                conversion_rate: "Snapchat+ 与 AR 转化"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Instagram", similarity: 75, position: "Stories 与 Reels 直接竞品" },
                { name: "TikTok", similarity: 55, position: "Spotlight 短视频竞品" },
                { name: "WhatsApp", similarity: 40, position: "私密通讯间接竞品" }
            ],
            market_position: "Z 世代与年轻用户私密社交领导者",
            market_share: "年轻用户视觉社交份额约 30%+",
            competitive_advantages: [
                "阅后即焚与私密心智强",
                "AR 滤镜与镜头生态领先",
                "年轻用户占比高，广告价值大",
                "Stories 原创者，后被模仿"
            ],
            competitive_disadvantages: [
                "Instagram Stories 模仿导致增长放缓",
                "Spotlight 难以与 TikTok 抗衡",
                "界面改版曾引发流失",
                "盈利依赖广告，亏损曾长期存在"
            ]
        },
        product_features: {
            core_features: [
                { name: "Snap 消息", description: "一对一或群组阅后即焚消息，图文视频", importance: "核心功能" },
                { name: "Stories", description: "24 小时可见的 Stories，好友与公开 Discover", importance: "核心功能" },
                { name: "AR 镜头", description: "Lenses 滤镜与 AR 特效，UGC 与品牌镜头", importance: "核心功能" },
                { name: "Spotlight", description: "竖屏短视频流，算法推荐", importance: "扩展功能" },
                { name: "Discover", description: "媒体与创作者内容频道", importance: "扩展功能" },
                { name: "Map", description: "好友位置与地点 Stories", importance: "扩展功能" }
            ],
            innovative_features: [
                "阅后即焚降低社交压力",
                "AR 镜头与 Landmarker 等技术创新",
                "Stories 形态被行业广泛模仿"
            ]
        },
        tech_stack: {
            core_technologies: [
                "AR 与计算机视觉（Lenses）",
                "端到端加密与消息同步",
                "实时视频与图像处理",
                "Spectacles 等硬件"
            ],
            tech_features: [
                "多端同步（手机、Web、Spectacles）",
                "AR 创作与分发平台",
                "广告与测量（Snap Pixel）"
            ],
            tech_challenges: [
                "与 Meta 系在 Stories 与广告上竞争",
                "Spotlight 与 TikTok 算法与内容差距",
                "盈利与亏损平衡"
            ]
        }
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
        product_features: {
            core_features: [
                { name: "Tweet", description: "短文本推文，原 140 字后扩展至 280 字", importance: "核心功能" },
                { name: "时间线", description: "关注流与 For You 算法流双模式", importance: "核心功能" },
                { name: "Spaces", description: "语音直播聊天室", importance: "扩展功能" },
                { name: "DM", description: "私信与群聊", importance: "核心功能" },
                { name: "X Premium", description: "付费认证、长文、广告分成等", importance: "扩展功能" }
            ],
            innovative_features: [
                "140/280 字限制形成短文本文化",
                "公开默认与实时性建立公共广场",
                "Spaces 与长文扩展形态"
            ]
        },
        tech_stack: {
            core_technologies: [
                "实时消息与 Feed 排序",
                "大规模分布式时间线",
                "Spaces 实时音频",
                "广告与推荐系统"
            ],
            tech_features: [
                "API 与开发者生态（曾开放后收紧）",
                "搜索与趋势",
                "蓝V 与 Premium 订阅"
            ],
            tech_challenges: [
                "与 Bluesky/Threads 竞争",
                "内容审核与政策一致性",
                "盈利与用户体验平衡"
            ]
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
        ],
        user_metrics: {
            monthly_active_users: "约2000万+ 读者",
            daily_active_users: "约500万",
            total_users: "读者与作者合计数千万",
            growth_rate: "约15%",
            retention_rate: "约70%",
            user_demographics: {
                age_range: "25-55岁为主，高知与付费读者",
                gender_ratio: "约55% 男性，45% 女性",
                region: "欧美为主",
                income_level: "中高收入，付费意愿强"
            },
            usage_patterns: {
                avg_session_duration: "邮件阅读为主",
                sessions_per_day: "1-2次",
                content_creation_rate: "作者数十万",
                engagement_rate: "打开率与付费订阅稳定"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "平台抽成", percentage: 90, description: "订阅收入 10% 抽成" },
                { type: "其他", percentage: 10, description: "Substack Pro、功能费等" }
            ],
            monetization_strategy: "作者订阅收入抽成 10%",
            financial_metrics: {
                annual_revenue: "约数亿美元 (2023)",
                revenue_growth: "约20% YoY",
                profitability: "接近盈利",
                valuation: "约6.5亿美元 (2021)"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约500万",
                mau: "约2000万+",
                engagement_rate: "70%",
                retention_7d: "75%",
                retention_30d: "70%"
            },
            content_metrics: {
                paid_subscribers: "数百万付费订阅",
                writer_count: "数十万作者",
                newsletter_opens: "邮件打开与阅读"
            },
            business_metrics: {
                arpu: "因作者而异，平台抽成 10%",
                ltv: "高（订阅关系）",
                cac: "作者自带读者",
                conversion_rate: "免费转付费因作者而异"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Ghost", similarity: 85, position: "开源 Newsletter 平台直接竞品" },
                { name: "Beehiiv", similarity: 80, position: "Newsletter 增长与变现工具" },
                { name: "Patreon", similarity: 50, position: "创作者订阅间接竞品" },
                { name: "Medium", similarity: 40, position: "长文与会员间接竞品" }
            ],
            market_position: "Newsletter 订阅平台领导者",
            market_share: "付费 Newsletter 市场约 40%+",
            competitive_advantages: [
                "作者拥有订阅者列表与内容，去中心化信任",
                "邮件分发绕过算法，直接触达读者",
                "10% 抽成相对克制，创作者友好",
                "Substack Pro 吸引头部作者，内容质量高"
            ],
            competitive_disadvantages: [
                "Notes 等社交化尝试稀释核心定位",
                "与 Ghost/Beehiiv 竞争作者与读者",
                "平台抽成仍被部分作者诟病",
                "依赖头部作者，长尾作者变现难"
            ]
        },
        product_features: {
            core_features: [
                { name: "Newsletter 发布", description: "邮件订阅与推送，支持图文与富媒体", importance: "核心功能" },
                { name: "付费墙", description: "免费/付费订阅分级，作者自主定价", importance: "核心功能" },
                { name: "订阅者管理", description: "作者拥有列表，可导出与迁移", importance: "核心功能" },
                { name: "Substack Audio", description: "播客与音频内容发布与订阅", importance: "扩展功能" },
                { name: "Notes", description: "短文本社交动态，类似推文", importance: "扩展功能" }
            ],
            innovative_features: [
                "邮件优先分发，绕过平台算法",
                "作者完全控制权与数据可迁移",
                "Substack Pro 预付款吸引头部作者"
            ]
        },
        tech_stack: {
            core_technologies: [
                "邮件发送与订阅管理",
                "支付与订阅计费（Stripe 等）",
                "Web 与移动端阅读",
                "音频托管与播客 RSS"
            ],
            tech_features: [
                "无算法推荐，邮件与 RSS 驱动",
                "作者后台与数据分析",
                "Notes 时间线与社交图谱"
            ],
            tech_challenges: [
                "规模化邮件送达与反垃圾",
                "付费转化与留存分析",
                "Notes 与核心 Newsletter 体验平衡"
            ]
        }
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
        tech_stack: {
            core_technologies: [
                "WebGL 与 Canvas 实时渲染",
                "OT/CRDT 实时协作",
                "云端文件存储与版本",
                "Plugins 与 API 生态"
            ],
            tech_features: [
                "浏览器内实时协作",
                "设计文件与组件库",
                "Figma Community 资源",
                "Figma AI 辅助设计"
            ],
            tech_challenges: [
                "大规模实时协作性能",
                "大文件与历史版本",
                "与 Adobe 生态整合",
                "AI 与设计工作流结合"
            ]
        },
        product_features: {
            core_features: [
                { name: "云端设计", description: "基于浏览器的设计工具，无需安装", importance: "核心功能" },
                { name: "实时协作", description: "多人在线同时编辑同一文件", importance: "核心功能" },
                { name: "Figma Community", description: "设计文件、组件、模板分享", importance: "核心功能" },
                { name: "Plugins", description: "第三方插件扩展", importance: "核心功能" }
            ],
            innovative_features: [
                "设计文件即社交、实时协作",
                "Figma Community 资源生态",
                "Plugins 开放生态"
            ],
            feature_evolution: [
                { year: "2016", feature: "Figma 正式上线" },
                { year: "2017", feature: "实时协作" },
                { year: "2018", feature: "Plugins" },
                { year: "2019", feature: "Figma Community" },
                { year: "2023", feature: "Figma AI" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "社区 UGC 资源 + 官方模板，设计即协作",
                creator_support: "Community 曝光、插件市场、教育计划",
                content_quality: "社区规范与版权，平台审核"
            },
            user_operation: {
                acquisition: "口碑、教育市场、免费个人版",
                activation: "模板与 Community 资源、协作邀请",
                retention: "团队空间、版本历史、插件",
                referral: "分享文件、邀请协作"
            },
            event_operation: [
                { name: "Config", impact: "设计师与生态连接", description: "年度大会与插件生态" }
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
        ],
        user_metrics: {
            monthly_active_users: "约1亿",
            daily_active_users: "约3000万",
            total_users: "约1.2亿",
            growth_rate: "约10%",
            retention_rate: "约65%",
            user_demographics: {
                age_range: "25-55岁为主，跑步与骑行爱好者",
                gender_ratio: "约60% 男性，40% 女性",
                region: "欧美为主，美国、英国领先",
                income_level: "中高收入，运动消费意愿强"
            },
            usage_patterns: {
                avg_session_duration: "约15分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "活动与Segment活跃",
                engagement_rate: "60%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅", percentage: 70, description: "Strava Premium/Summit" },
                { type: "广告与B2B", percentage: 30, description: "广告、Strava Metro 数据" }
            ],
            monetization_strategy: "订阅制为主，B2B 数据与广告为辅",
            financial_metrics: {
                annual_revenue: "约1.5亿美元 (2023)",
                revenue_growth: "约15% YoY",
                profitability: "接近盈亏平衡",
                valuation: "约15亿美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约3000万",
                mau: "约1亿",
                engagement_rate: "60%",
                retention_7d: "65%",
                retention_30d: "65%"
            },
            content_metrics: {
                activities_uploaded: "数亿条运动记录",
                segments: "Segment 与 KOM 竞争",
                clubs: "俱乐部与挑战"
            },
            business_metrics: {
                arpu: "约15美元/年",
                ltv: "约80美元",
                cac: "口碑与赛事",
                conversion_rate: "免费转付费约5%"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Garmin Connect", similarity: 60, position: "运动手表与数据" },
                { name: "Nike Run Club", similarity: 50, position: "跑步与品牌" },
                { name: "Peloton", similarity: 40, position: "室内健身与订阅" }
            ],
            market_position: "运动社交与户外运动数据领导者",
            market_share: "运动社交/户外记录市场约 40%+",
            competitive_advantages: [
                "Segment 与 KOM 游戏化竞争",
                "跑步与骑行垂直深耕",
                "俱乐部与挑战增强粘性",
                "Strava Metro B2B 数据价值"
            ],
            competitive_disadvantages: [
                "数据隐私与位置泄露担忧",
                "免费转付费率有限",
                "与 Garmin/Apple 等设备生态竞争"
            ]
        },
        product_features: {
            core_features: [
                { name: "活动记录", description: "GPS 运动记录、心率、功率等数据同步", importance: "核心功能" },
                { name: "Segment", description: "路段创建与 KOM/PR 竞争排名", importance: "核心功能" },
                { name: "Feed", description: "关注流与活动动态、点赞评论", importance: "核心功能" },
                { name: "俱乐部与挑战", description: "俱乐部、月度挑战、徽章", importance: "扩展功能" },
                { name: "Strava Metro", description: "匿名聚合数据供城市规划 B2B", importance: "扩展功能" }
            ],
            innovative_features: [
                "Segment 与 KOM 游戏化",
                "运动数据即社交货币",
                "隐私区域与数据控制"
            ]
        },
        tech_stack: {
            core_technologies: [
                "GPS 与多设备数据同步（Garmin、Apple 等）",
                "地图与路线渲染",
                "订阅与支付",
                "B2B 数据聚合与脱敏"
            ],
            tech_features: [
                "API 与第三方接入",
                "热力图与全球 Segment",
                "移动端与 Web 分析"
            ],
            tech_challenges: [
                "隐私与位置数据安全",
                "免费版与付费版功能边界",
                "与硬件厂商数据合作与竞争"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约7700万",
            daily_active_users: "约3800万",
            total_users: "约1亿+",
            growth_rate: "约5%",
            retention_rate: "约60%",
            user_demographics: {
                age_range: "35-65岁为主，房主与家庭",
                gender_ratio: "约55% 女性，45% 男性",
                region: "美国为主，欧洲扩展",
                income_level: "中产与房主"
            },
            usage_patterns: {
                avg_session_duration: "约10分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "帖子与回复活跃",
                engagement_rate: "55%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "本地广告", percentage: 85, description: "本地商家广告" },
                { type: "其他", percentage: 15, description: "订阅、本地服务" }
            ],
            monetization_strategy: "本地广告为主",
            financial_metrics: {
                annual_revenue: "约2亿美元 (2023)",
                revenue_growth: "约10% YoY",
                profitability: "亏损收窄",
                valuation: "约20亿美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约3800万",
                mau: "约7700万",
                engagement_rate: "55%",
                retention_7d: "58%",
                retention_30d: "60%"
            },
            content_metrics: {
                neighborhoods: "约30万+ 社区",
                daily_posts: "本地信息与求助",
                local_ads: "本地商家渗透"
            },
            business_metrics: {
                arpu: "约2.5美元/年",
                ltv: "中",
                cac: "本地推广",
                conversion_rate: "本地广告转化"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Facebook Groups", similarity: 65, position: "群组与本地讨论" },
                { name: "Citizen", similarity: 40, position: "邻里安全与警报" },
                { name: "Ring Neighbors", similarity: 45, position: "安防与邻里" }
            ],
            market_position: "美国本地邻里社区网络领导者",
            market_share: "美国本地社区网络约 70%+ 覆盖",
            competitive_advantages: [
                "基于地理的邻里验证与归属",
                "本地商家广告价值高",
                "二手、求助、推荐等实用信息",
                "疫情后邻里互助心智强化"
            ],
            competitive_disadvantages: [
                "种族歧视与偏见内容损害声誉",
                "内容审核与社区治理难",
                "增长与盈利压力"
            ]
        },
        product_features: {
            core_features: [
                { name: "邻里动态", description: "基于地理的帖子流，求助、推荐、二手、安全", importance: "核心功能" },
                { name: "邻里验证", description: "地址验证加入社区，减少虚假", importance: "核心功能" },
                { name: "本地商家", description: "本地商家主页与广告", importance: "扩展功能" },
                { name: "分类与市场", description: "二手、租房、服务推荐", importance: "扩展功能" }
            ],
            innovative_features: [
                "地理位置即社区边界",
                "邻里自治与平台审核结合",
                "本地广告与高信任场景"
            ]
        },
        tech_stack: {
            core_technologies: [
                "地理位置与社区边界",
                "内容审核与 AI 检测",
                "本地广告与定向",
                "移动端与推送"
            ],
            tech_features: [
                "邻里审查与举报",
                "本地商家后台",
                "邮件与 App 通知"
            ],
            tech_challenges: [
                "偏见与歧视内容识别与处置",
                "自治与平台责任的边界",
                "盈利与用户体验平衡"
            ]
        }
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
        tech_stack: {
            core_technologies: [
                "Roblox 引擎与 Lua 脚本",
                "Robux 经济与支付",
                "多人实时同步与反作弊",
                "内容审核与年龄分级"
            ],
            tech_features: [
                "UGC 游戏创建与发布",
                "Robux 与 DevEx 变现",
                "跨平台（PC/移动/主机）",
                "Roblox Education 教育版"
            ],
            tech_challenges: [
                "海量 UGC 内容审核与安全",
                "儿童隐私与合规",
                "实时同步与延迟",
                "反作弊与公平性"
            ]
        },
        product_features: {
            core_features: [
                { name: "游戏创建与发布", description: "Roblox Studio 创作、发布、运营", importance: "核心功能" },
                { name: "Robux 与 DevEx", description: "虚拟货币、内购、创作者提现", importance: "核心功能" },
                { name: "发现与推荐", description: "首页、分类、算法推荐", importance: "核心功能" },
                { name: "社交与好友", description: "好友、群组、聊天", importance: "核心功能" }
            ],
            innovative_features: [
                "UGC 游戏平台与创造者经济",
                "Robux 统一经济与 DevEx",
                "Z 世代社交与游戏一体化"
            ],
            feature_evolution: [
                { year: "2006", feature: "UGC 游戏平台" },
                { year: "2007", feature: "Robux" },
                { year: "2015", feature: "DevEx" },
                { year: "2021", feature: "IPO 与规模化" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "UGC 为主，平台审核与年龄分级，创作者分成驱动",
                creator_support: "Robux 分成、DevEx、教育计划、文档与工具",
                content_quality: "内容安全、儿童保护、反作弊、社区准则"
            },
            user_operation: {
                acquisition: "Z 世代口碑、移动端、IP 与活动",
                activation: "首游体验、Robux 首购、社交邀请",
                retention: "每日登录、限时内容、好友与群组",
                referral: "分享游戏、邀请好友"
            },
            event_operation: [
                { name: "Roblox 开发者大会", impact: "创作者生态", description: "年度大会与政策发布" }
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
        ],
        user_metrics: {
            monthly_active_users: "约1000万（全联邦）",
            daily_active_users: "约200万",
            total_users: "约1500万（分散各实例）",
            growth_rate: "波动（Twitter 事件后曾激增）",
            retention_rate: "约40%",
            user_demographics: {
                age_range: "25-45岁为主，技术/隐私敏感用户",
                gender_ratio: "约55% 男性，45% 女性",
                region: "欧美为主，日本等有活跃实例",
                income_level: "中高收入、关注隐私与开源"
            },
            usage_patterns: {
                avg_session_duration: "15分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "8%",
                engagement_rate: "35%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "捐赠与赞助",
                    percentage: 90,
                    description: "Mastodon gGmbH 接受捐赠、赞助"
                },
                {
                    type: "服务器订阅",
                    percentage: 10,
                    description: "部分实例提供付费会员或托管"
                }
            ],
            monetization_strategy: "非营利 + 实例自筹，无平台抽成",
            financial_metrics: {
                annual_revenue: "约数百万欧元（Mastodon 官方）",
                revenue_growth: "依赖捐赠与赞助",
                profitability: "非营利",
                valuation: "无估值，开源项目"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约200万（全联邦估算）",
                mau: "约1000万",
                engagement_rate: "35%",
                retention_7d: "约40%",
                retention_30d: "约25%"
            },
            content_metrics: {
                daily_posts: "约数百万 Toot（全联邦）",
                instances_count: "约15000+ 实例",
                fediverse_connections: "与 Pixelfed、PeerTube 等互操作"
            },
            business_metrics: {
                arpu: "无（无平台收费）",
                ltv: "N/A",
                cac: "依赖自然迁移与口碑",
                conversion_rate: "N/A"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Bluesky", similarity: 80, position: "开放协议与去中心化社交" },
                { name: "Twitter/X", similarity: 70, position: "中心化短文本" },
                { name: "Threads", similarity: 65, position: "Meta 系替代" }
            ],
            market_position: "联邦制去中心化社交的标杆",
            market_share: "联邦/去中心化社交用户约 1000 万+（全实例）",
            competitive_advantages: [
                "ActivityPub 协议与 Fediverse 互操作",
                "服务器自治与规则多样性",
                "开源与无平台抽成",
                "隐私与数据可控"
            ],
            competitive_disadvantages: [
                "选实例与迁移门槛高",
                "体验不一致与生态分散",
                "无统一商业化，实例可持续性参差"
            ]
        },
        product_features: {
            core_features: [
                { name: "Toot", description: "500 字内短文本，支持 CW、投票、多图", importance: "核心功能" },
                { name: "时间线", description: "首页、本地、联邦、列表多时间线", importance: "核心功能" },
                { name: "实例与迁移", description: "选实例注册、账号迁移", importance: "核心功能" },
                { name: "静音与过滤", description: "静音词、过滤、内容警告 CW", importance: "核心功能" }
            ],
            innovative_features: [
                "联邦制与 ActivityPub",
                "实例自治与规则透明",
                "无算法推荐（时间序为主）"
            ]
        },
        tech_stack: {
            core_technologies: [
                "ActivityPub 协议与 Fediverse",
                "Ruby on Rails（官方实例）",
                "多实例与联邦同步",
                "REST API 与 OAuth"
            ],
            tech_features: [
                "多客户端（Web、移动、第三方）",
                "实例间转发与回复",
                "导入导出与迁移"
            ],
            tech_challenges: [
                "新用户选实例与引导",
                "实例稳定性与捐赠可持续",
                "与 Bluesky/Threads 易用性竞争"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "2.5亿",
            daily_active_users: "1亿+",
            total_users: "3亿+",
            growth_rate: "10%",
            retention_rate: "75%",
            user_demographics: {
                age_range: "18-45岁为主",
                gender_ratio: "订阅者偏男性，创作者多元",
                region: "全球，欧美为主",
                income_level: "付费用户以中高收入为主"
            },
            usage_patterns: {
                avg_session_duration: "25分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "创作者约200万+",
                engagement_rate: "高（付费订阅关系）"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "平台抽成",
                    percentage: 20,
                    description: "创作者收入抽成 20%"
                },
                {
                    type: "其他",
                    percentage: 80,
                    description: "创作者获得 80%"
                }
            ],
            monetization_strategy: "订阅与按内容付费，平台抽成 20%",
            financial_metrics: {
                annual_revenue: "约60亿美元 (2023)",
                revenue_growth: "约15% YoY",
                profitability: "盈利",
                valuation: "约100亿美元+"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "1亿+",
                mau: "2.5亿",
                engagement_rate: "75%",
                retention_7d: "70%",
                retention_30d: "60%"
            },
            content_metrics: {
                creator_count: "200万+ 创作者",
                subscription_tiers: "月付/年付/单次付费",
                tip_and_ppv: "打赏与单条付费内容"
            },
            business_metrics: {
                arpu: "约20美元/年（用户侧）",
                ltv: "创作者依赖复购与留存",
                cac: "依赖创作者自带流量",
                conversion_rate: "付费订阅转化因创作者而异"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Fansly", similarity: 85, position: "创作者订阅直接竞品" },
                { name: "Patreon", similarity: 60, position: "创作者经济，非成人为主" },
                { name: "FANVUE", similarity: 70, position: "创作者订阅与成人内容" }
            ],
            market_position: "创作者订阅与成人内容平台领导者",
            market_share: "创作者订阅/成人内容份额约 50%+",
            competitive_advantages: [
                "20% 抽成创作者拿 80%",
                "创作者完全控制内容与定价",
                "订阅+单条付费+小费灵活",
                "支付与风控基础设施"
            ],
            competitive_disadvantages: [
                "支付渠道与合规风险",
                "监管与品牌压力",
                "依赖成人内容，多元化受限"
            ]
        },
        product_features: {
            core_features: [
                { name: "订阅", description: "月付/年付订阅创作者，看时间线内容", importance: "核心功能" },
                { name: "按条付费", description: "PPV 单条内容付费与消息付费", importance: "核心功能" },
                { name: "小费", description: "打赏与 Tips", importance: "核心功能" },
                { name: "消息", description: "创作者与粉丝私信，可付费解锁", importance: "核心功能" },
                { name: "OnlyFans TV", description: "直播与长视频", importance: "扩展功能" }
            ],
            innovative_features: [
                "创作者主权与 80% 分成",
                "订阅+PPV+小费组合",
                "成人内容与支付合规平衡"
            ]
        },
        tech_stack: {
            core_technologies: [
                "支付与分账（多渠道）",
                "内容托管与审核",
                "订阅与计费",
                "消息与通知"
            ],
            tech_features: [
                "创作者后台与数据",
                "多币种与税务",
                "合规与年龄验证"
            ],
            tech_challenges: [
                "支付渠道稳定性与合规",
                "内容审核与法律边界",
                "品牌与主流渠道合作"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约30亿（Meta 全家桶）",
            daily_active_users: "约20亿（Facebook 应用）",
            total_users: "约31亿（含 Instagram、WhatsApp）",
            growth_rate: "约3%",
            retention_rate: "约75%",
            user_demographics: {
                age_range: "25-54岁为主，用户老龄化",
                gender_ratio: "约52% 女性，48% 男性",
                region: "全球覆盖，印度、美国、印尼等领先",
                income_level: "全年龄段与收入层"
            },
            usage_patterns: {
                avg_session_duration: "约35分钟/天",
                sessions_per_day: "8次",
                content_creation_rate: "约15%",
                engagement_rate: "65%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告收入",
                    percentage: 98,
                    description: "信息流广告、品牌广告、精准投放"
                },
                {
                    type: "其他",
                    percentage: 2,
                    description: "Marketplace、付费等"
                }
            ],
            monetization_strategy: "广告为主，数据驱动精准投放",
            financial_metrics: {
                annual_revenue: "Meta 约 1340 亿美元 (2023)",
                revenue_growth: "约16% YoY",
                profitability: "盈利",
                valuation: "Meta 市值约 1.2 万亿美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约20亿（Facebook 应用）",
                mau: "约30亿",
                engagement_rate: "65%",
                retention_7d: "80%",
                retention_30d: "75%"
            },
            content_metrics: {
                daily_posts: "数十亿条",
                stories_and_reels: "Stories、Reels 与视频占比提升",
                group_and_marketplace: "群组与 Marketplace 高活跃"
            },
            business_metrics: {
                arpu: "约40美元/年（北美更高）",
                ltv: "高（长生命周期）",
                cac: "品牌与效果广告获客",
                conversion_rate: "广告转化与电商导流"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "TikTok", similarity: 50, position: "短视频与年轻用户分流" },
                { name: "微信", similarity: 55, position: "中国区超级应用" },
                { name: "YouTube", similarity: 45, position: "视频与时长竞争" }
            ],
            market_position: "全球最大社交网络（Meta 系）",
            market_share: "全球社交网络 MAU 约 30 亿+（含 Instagram、WhatsApp）",
            competitive_advantages: [
                "规模与网络效应极强",
                "广告与数据精准投放成熟",
                "收购 Instagram、WhatsApp 形成产品矩阵",
                "群组与 Marketplace 高粘性"
            ],
            competitive_disadvantages: [
                "用户老龄化，年轻用户流向 TikTok",
                "隐私与信任危机（剑桥分析等）",
                "元宇宙投入大、回报低",
                "监管与反垄断压力"
            ]
        },
        product_features: {
            core_features: [
                { name: "News Feed", description: "信息流，算法推荐为主，图文视频混合", importance: "核心功能" },
                { name: "Stories", description: "24 小时可见的短视频/图状态", importance: "核心功能" },
                { name: "Groups", description: "公开/私密群组，讨论与社区", importance: "核心功能" },
                { name: "Marketplace", description: "本地二手与商品交易", importance: "扩展功能" },
                { name: "Watch", description: "短视频与长视频，与 Reels 整合", importance: "扩展功能" },
                { name: "Messenger", description: "私信与语音视频通话（独立 App）", importance: "核心功能" }
            ],
            innovative_features: [
                "News Feed 算法与精准广告",
                "实名制与社交图谱",
                "开放平台与收购生态"
            ]
        },
        tech_stack: {
            core_technologies: [
                "大规模推荐与 Feed 排序",
                "广告投放与归因系统",
                "多产品数据打通（Meta 系）",
                "AI 与内容审核"
            ],
            tech_features: [
                "Graph API 与开放平台（曾开放后收紧）",
                "直播与视频基础设施",
                "端到端加密（Messenger 可选）"
            ],
            tech_challenges: [
                "与 TikTok 争年轻用户与时长",
                "隐私合规与数据使用",
                "虚假信息与内容安全"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约20亿",
            daily_active_users: "约15亿",
            total_users: "约25亿",
            growth_rate: "约5%",
            retention_rate: "约90%",
            user_demographics: {
                age_range: "全年龄段，新兴市场年轻用户多",
                gender_ratio: "约52% 男性，48% 女性",
                region: "印度、巴西、印尼、墨西哥等领先",
                income_level: "中低收入市场为主，低带宽友好"
            },
            usage_patterns: {
                avg_session_duration: "约30分钟/天",
                sessions_per_day: "20+ 次",
                content_creation_rate: "极高（消息为主）",
                engagement_rate: "90%+"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "商业 API 与收费",
                    percentage: 70,
                    description: "WhatsApp Business API、企业解决方案"
                },
                {
                    type: "支付与电商",
                    percentage: 30,
                    description: "WhatsApp Pay、购物、广告（试点）"
                }
            ],
            monetization_strategy: "B2B 与支付为主，个人端无广告",
            financial_metrics: {
                annual_revenue: "未单独披露（纳入 Meta）",
                revenue_growth: "企业端与支付增长",
                profitability: "为 Meta 生态导流与数据",
                valuation: "收购价 190 亿美元 (2014)"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约15亿",
                mau: "约20亿",
                engagement_rate: "90%+",
                retention_7d: "95%",
                retention_30d: "90%"
            },
            content_metrics: {
                daily_messages: "约1000亿条",
                voice_video: "语音视频通话占比高",
                status_stories: "Status 与 Stories 使用增长"
            },
            business_metrics: {
                arpu: "个人端接近 0，B2B 按对话/会话计费",
                ltv: "极高（通讯刚需）",
                cac: "自然增长与 Meta 导流",
                conversion_rate: "企业端转化依赖行业"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Telegram", similarity: 85, position: "加密与多端即时通讯" },
                { name: "Signal", similarity: 75, position: "隐私优先加密通讯" },
                { name: "微信", similarity: 70, position: "中国区超级应用" },
                { name: "iMessage", similarity: 60, position: "苹果生态内通讯" }
            ],
            market_position: "全球最大即时通讯应用（按用户数）",
            market_share: "全球 IM MAU 约 20 亿+",
            competitive_advantages: [
                "端到端加密与无广告承诺",
                "新兴市场渗透深、低带宽友好",
                "WhatsApp Business 与支付生态",
                "Meta 资源与基础设施"
            ],
            competitive_disadvantages: [
                "隐私政策争议导致部分用户迁往 Signal/Telegram",
                "商业化与「无广告」平衡难",
                "部分地区监管与封禁风险"
            ]
        },
        product_features: {
            core_features: [
                { name: "消息", description: "文字、语音、图片、视频、文档，端到端加密", importance: "核心功能" },
                { name: "语音/视频通话", description: "一对一与群组通话", importance: "核心功能" },
                { name: "Status", description: "24 小时可见状态（图/视频），类似 Stories", importance: "核心功能" },
                { name: "WhatsApp Business", description: "企业号、目录、快捷回复、API", importance: "扩展功能" },
                { name: "WhatsApp Pay", description: "印度等市场内支付与转账", importance: "扩展功能" },
                { name: "Community", description: "社区与子群组管理", importance: "扩展功能" }
            ],
            innovative_features: [
                "端到端加密默认开启",
                "无广告、订阅制转免费",
                "低带宽与弱网优化"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Signal Protocol 端到端加密",
                "分布式消息同步与多端",
                "低带宽压缩与媒体处理",
                "企业 API 与云托管"
            ],
            tech_features: [
                "多设备链接（非多端独立登录）",
                "备份与迁移（可选端到端加密）",
                "语音视频与群组通话"
            ],
            tech_challenges: [
                "隐私政策与元数据争议",
                "与 Signal/Telegram 的隐私叙事竞争",
                "B2B 与支付合规各地差异"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约1.8亿",
            daily_active_users: "约9000万",
            total_users: "约2亿",
            growth_rate: "约0–2%",
            retention_rate: "约85%",
            user_demographics: {
                age_range: "18-45岁为主，日本、台湾、泰国等",
                gender_ratio: "约55% 女性，45% 男性",
                region: "日本、台湾、泰国、印尼为主",
                income_level: "中高收入市场为主"
            },
            usage_patterns: {
                avg_session_duration: "约40分钟/天",
                sessions_per_day: "12次",
                content_creation_rate: "表情包与时间线发布活跃",
                engagement_rate: "80%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "广告",
                    percentage: 45,
                    description: "时间线广告、官方账号、品牌合作"
                },
                {
                    type: "表情包与内容",
                    percentage: 25,
                    description: "Line Friends 表情包、贴图、主题"
                },
                {
                    type: "支付与电商",
                    percentage: 20,
                    description: "Line Pay、电商、生活服务"
                },
                {
                    type: "其他",
                    percentage: 10,
                    description: "游戏、新闻、音乐等"
                }
            ],
            monetization_strategy: "广告 + 表情包/IP + 支付与服务的超级应用模式",
            financial_metrics: {
                annual_revenue: "约5000亿日元 (2023)",
                revenue_growth: "个位数",
                profitability: "盈利",
                valuation: "与 Yahoo Japan 合并后纳入 Z Holdings"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约9000万",
                mau: "约1.8亿",
                engagement_rate: "80%",
                retention_7d: "88%",
                retention_30d: "85%"
            },
            content_metrics: {
                sticker_and_friends: "Line Friends IP 与贴图使用率高",
                timeline_and_news: "时间线、Line News 与资讯",
                line_pay_transactions: "支付与线下渗透"
            },
            business_metrics: {
                arpu: "约2500日元/年（日本市场较高）",
                ltv: "高（超级应用粘性）",
                cac: "品牌与本地运营",
                conversion_rate: "贴图与支付转化良好"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "微信", similarity: 70, position: "中国区超级应用，东南亚竞争" },
                { name: "WhatsApp", similarity: 55, position: "即时通讯与海外市场" },
                { name: "Messenger", similarity: 50, position: "全球 IM" }
            ],
            market_position: "日本与台湾市场即时通讯与超级应用领导者",
            market_share: "日本 IM 份额约 90%+，台湾约 80%+",
            competitive_advantages: [
                "Line Friends IP 与贴图文化",
                "支付与生活服务本地化深",
                "时间线、新闻、游戏等一体化",
                "日本/台湾运营与品牌强"
            ],
            competitive_disadvantages: [
                "主要市场增长见顶",
                "全球化有限，依赖日台泰印尼",
                "与微信/WhatsApp 在东南亚竞争"
            ]
        },
        product_features: {
            core_features: [
                { name: "消息与通话", description: "文字、贴图、语音、视频通话，一对一与群聊", importance: "核心功能" },
                { name: "贴图与 Line Friends", description: "付费/免费贴图、主题、IP 表情包", importance: "核心功能" },
                { name: "时间线", description: "动态与资讯流，关注公众号与好友", importance: "核心功能" },
                { name: "Line Pay", description: "支付、转账、线下扫码与电商", importance: "扩展功能" },
                { name: "Line News / 游戏 / 音乐", description: "资讯、轻游戏、音乐等增值", importance: "扩展功能" }
            ],
            innovative_features: [
                "Line Friends 表情包 IP 与衍生",
                "超级应用一站式（通讯+支付+内容）",
                "本地化运营与节日营销"
            ]
        },
        tech_stack: {
            core_technologies: [
                "即时通讯与多端同步",
                "支付与风控系统",
                "贴图与媒体 CDN",
                "公众号与推送"
            ],
            tech_features: [
                "Line Login 第三方登录",
                "Line Beacon 与线下场景",
                "广告与 Business 后台"
            ],
            tech_challenges: [
                "日台以外市场获客与留存",
                "与微信/WhatsApp 功能重叠竞争",
                "增长与变现平衡"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约10亿+（全球 TikTok）",
            daily_active_users: "约7亿",
            total_users: "约15亿+",
            growth_rate: "约10%",
            retention_rate: "约75%",
            user_demographics: {
                age_range: "18-34岁为主，Z世代核心",
                gender_ratio: "约55% 女性，45% 男性",
                region: "全球，美国、东南亚、拉美、欧洲为主",
                income_level: "全年龄段，年轻用户为主"
            },
            usage_patterns: {
                avg_session_duration: "约55分钟/天",
                sessions_per_day: "8次",
                content_creation_rate: "约15%",
                engagement_rate: "70%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 55, description: "信息流、开屏、品牌广告" },
                { type: "电商与直播", percentage: 30, description: "TikTok Shop、直播打赏" },
                { type: "其他", percentage: 15, description: "创作者基金、订阅等" }
            ],
            monetization_strategy: "广告+电商+直播的短视频变现",
            financial_metrics: {
                annual_revenue: "约数百亿美元 (字节/全球)",
                revenue_growth: "高增长",
                profitability: "盈利",
                valuation: "字节跳动核心资产"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约7亿",
                mau: "约10亿+",
                engagement_rate: "70%",
                retention_7d: "78%",
                retention_30d: "75%"
            },
            content_metrics: {
                daily_views: "数十亿次",
                avg_watch_time: "55分钟/天",
                creator_ecosystem: "全球创作者与电商"
            },
            business_metrics: {
                arpu: "因地区差异大",
                ltv: "高（沉浸与电商）",
                cac: "自然与付费获客",
                conversion_rate: "电商与广告转化"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "YouTube Shorts", similarity: 80, position: "短视频直接竞品" },
                { name: "Instagram Reels", similarity: 75, position: "短视频直接竞品" },
                { name: "快手", similarity: 70, position: "中国区短视频" }
            ],
            market_position: "全球短视频与娱乐消费领导者",
            market_share: "全球短视频 MAU 约 10 亿+，时长领先",
            competitive_advantages: [
                "算法推荐与沉浸体验极强",
                "创作者生态与商业化（直播、电商）",
                "全球化与本地运营结合",
                "音乐与挑战赛文化"
            ],
            competitive_disadvantages: [
                "地缘政治与多国监管/封禁风险",
                "内容审核与青少年保护压力",
                "与 Meta/Google 竞争加剧"
            ]
        },
        product_features: {
            core_features: [
                { name: "For You 信息流", description: "全屏竖屏短视频，算法推荐为主", importance: "核心功能" },
                { name: "创作工具", description: "拍摄、剪辑、特效、音乐、绿幕", importance: "核心功能" },
                { name: "直播", description: "打赏、连麦、电商带货", importance: "核心功能" },
                { name: "TikTok Shop", description: "站内电商与闭环转化", importance: "扩展功能" },
                { name: "Duet / Stitch", description: "合拍与二次创作", importance: "核心功能" }
            ],
            innovative_features: [
                "全屏沉浸与算法强绑定",
                "音乐与挑战赛驱动传播",
                "直播打赏与电商一体化"
            ]
        },
        tech_stack: {
            core_technologies: [
                "推荐算法与个性化排序",
                "实时视频处理与特效",
                "直播与连麦基础设施",
                "电商与支付对接"
            ],
            tech_features: [
                "多地区数据中心与合规",
                "内容审核与安全（人+AI）",
                "创作者后台与数据分析"
            ],
            tech_challenges: [
                "各国数据本地化与合规",
                "与 YouTube Shorts/Reels 争创作者与时长",
                "电商与广告负载平衡"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约4000万",
            daily_active_users: "约2000万",
            total_users: "约5000万+",
            growth_rate: "约10%",
            retention_rate: "约70%",
            user_demographics: {
                age_range: "25-45岁为主，隐私与安全敏感用户",
                gender_ratio: "约55% 男性，45% 女性",
                region: "欧美、记者与高隐私需求用户",
                income_level: "中高收入、高安全意识"
            },
            usage_patterns: {
                avg_session_duration: "约15分钟/天",
                sessions_per_day: "5次",
                content_creation_rate: "消息与语音为主",
                engagement_rate: "65%"
            }
        },
        business_model: {
            revenue_streams: [
                {
                    type: "捐赠",
                    percentage: 95,
                    description: "用户与机构捐赠，Signal Foundation"
                },
                {
                    type: "其他",
                    percentage: 5,
                    description: "可选付费扩展（如用户名等）"
                }
            ],
            monetization_strategy: "非营利，依赖捐赠，无广告无抽成",
            financial_metrics: {
                annual_revenue: "约数千万美元（捐赠）",
                revenue_growth: "依赖捐赠与拨款",
                profitability: "非营利",
                valuation: "无估值"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约2000万",
                mau: "约4000万",
                engagement_rate: "65%",
                retention_7d: "70%",
                retention_30d: "55%"
            },
            content_metrics: {
                daily_messages: "端到端加密，无平台可见统计",
                voice_video: "加密语音视频通话",
                disappearing_messages: "阅后即焚等隐私功能"
            },
            business_metrics: {
                arpu: "0（无收费）",
                ltv: "N/A",
                cac: "口碑与隐私事件驱动迁移",
                conversion_rate: "N/A"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "WhatsApp", similarity: 75, position: "主流 IM，隐私政策争议时迁入 Signal" },
                { name: "Telegram", similarity: 70, position: "加密与多端 IM" },
                { name: "iMessage", similarity: 50, position: "苹果生态内通讯" }
            ],
            market_position: "隐私优先加密通讯的标杆产品",
            market_share: "加密 IM 用户约 4000 万+，份额有限",
            competitive_advantages: [
                "Signal Protocol 开源与行业采用",
                "非营利与无广告，信任度高",
                "元数据最小化与开源透明",
                "记者与高敏感用户首选"
            ],
            competitive_disadvantages: [
                "网络效应弱，熟人迁移成本高",
                "无商业化，依赖捐赠可持续性存疑",
                "功能与生态不如 WhatsApp/Telegram"
            ]
        },
        product_features: {
            core_features: [
                { name: "加密消息", description: "端到端加密文字、图片、视频、语音消息", importance: "核心功能" },
                { name: "语音/视频通话", description: "端到端加密一对一通话", importance: "核心功能" },
                { name: "阅后即焚", description: "定时消失的消息与对话", importance: "核心功能" },
                { name: "Stories", description: "24 小时可见状态（可选）", importance: "扩展功能" },
                { name: "群组", description: "加密群聊与群组管理", importance: "核心功能" }
            ],
            innovative_features: [
                "Signal Protocol 成行业标准（WhatsApp 等采用）",
                "元数据最小化设计",
                "非营利与捐赠模式"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Signal Protocol（双棘轮等）端到端加密",
                "开源客户端（Android/iOS/Desktop）",
                "服务器仅中继，不存明文"
            ],
            tech_features: [
                "多设备链接（需主设备在线）",
                "安全号码变更与迁移",
                "可选用户名（不暴露手机号）"
            ],
            tech_challenges: [
                "规模化与捐赠可持续性",
                "与 WhatsApp/Telegram 功能与生态差距",
                "合规与政府请求的平衡"
            ]
        }
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
            { year: "2020", event: "内容审核加强" },
            { year: "2024", event: "持续强化热点与明星生态，探索视频与电商联动" }
        ],
        key_decisions: [
            "早期模仿Twitter成功",
            "140字限制降低表达门槛",
            "但内容审核限制表达",
            "被微信朋友圈分流"
        ],
        user_metrics: {
            monthly_active_users: "约5.8亿",
            daily_active_users: "约2.5亿",
            total_users: "约6亿",
            growth_rate: "约-2%",
            retention_rate: "约72%",
            user_demographics: {
                age_range: "25-45岁为主，下沉与明星/热点用户",
                gender_ratio: "约52% 女性，48% 男性",
                region: "中国为主",
                income_level: "全年龄段"
            },
            usage_patterns: {
                avg_session_duration: "约25分钟/天",
                sessions_per_day: "5次",
                content_creation_rate: "约8%",
                engagement_rate: "65%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 75, description: "信息流、品牌、开屏" },
                { type: "会员与增值", percentage: 25, description: "微博会员、数据服务" }
            ],
            monetization_strategy: "广告为主，会员与数据服务为辅",
            financial_metrics: {
                annual_revenue: "约百亿人民币级 (2023)",
                revenue_growth: "个位数",
                profitability: "盈利",
                valuation: "纳斯达克上市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约2.5亿",
                mau: "约5.8亿",
                engagement_rate: "65%",
                retention_7d: "70%",
                retention_30d: "72%"
            },
            content_metrics: {
                daily_posts: "数亿条",
                hot_search: "热搜与话题驱动",
                kol_and_brands: "明星、品牌、MCN"
            },
            business_metrics: {
                arpu: "约15元/年",
                ltv: "中高",
                cac: "品牌与效果",
                conversion_rate: "广告与电商导流"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "抖音", similarity: 55, position: "短视频与时长分流" },
                { name: "微信", similarity: 50, position: "朋友圈与公众号分流" },
                { name: "小红书", similarity: 45, position: "种草与年轻用户" }
            ],
            market_position: "中国公共社交媒体与热点平台",
            market_share: "中国公开社交/热点市场约 30%+",
            competitive_advantages: [
                "热搜与话题驱动，公共讨论心智强",
                "明星、KOL、品牌集中",
                "广告与会员变现成熟",
                "短文本与多媒体结合"
            ],
            competitive_disadvantages: [
                "内容审核严，表达受限",
                "年轻用户流向抖音、小红书",
                "增长见顶，DAU 承压"
            ]
        },
        product_features: {
            core_features: [
                { name: "微博", description: "短文本与图文、视频、话题发布", importance: "核心功能" },
                { name: "热搜", description: "实时热搜榜与话题聚合", importance: "核心功能" },
                { name: "关注流", description: "关注人时间线 + 算法推荐", importance: "核心功能" },
                { name: "微博会员", description: "会员特权、数据服务、去广告", importance: "扩展功能" },
                { name: "直播与视频号", description: "直播、长视频与短视频", importance: "扩展功能" }
            ],
            innovative_features: [
                "热搜与公共事件传播",
                "明星与 KOL 生态",
                "140 字短文本降低门槛"
            ]
        },
        tech_stack: {
            core_technologies: [
                "大规模 Feed 与热搜实时计算",
                "内容审核与安全（人+AI）",
                "多端与 CDN",
                "广告与数据服务"
            ],
            tech_features: [
                "话题与热搜聚合",
                "会员与数据后台",
                "直播与视频基础设施"
            ],
            tech_challenges: [
                "审核与表达边界",
                "与抖音/小红书争用户时长",
                "增长与变现平衡"
            ]
        }
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
            { year: "2020", event: "用户数下降" },
            { year: "2024", event: "持续服务年轻与游戏用户，与微信形成差异化定位" }
        ],
        key_decisions: [
            "早期建立用户习惯",
            "QQ空间创造社交场景",
            "会员和虚拟物品建立商业模式",
            "但被微信替代"
        ],
        user_metrics: {
            monthly_active_users: "约5亿",
            daily_active_users: "约2亿",
            total_users: "约5.5亿",
            growth_rate: "约-3%",
            retention_rate: "约80%",
            user_demographics: {
                age_range: "18-35岁为主，学生与年轻职场",
                gender_ratio: "约52% 男性，48% 女性",
                region: "中国为主",
                income_level: "全年龄段，游戏与社交并重"
            },
            usage_patterns: {
                avg_session_duration: "约40分钟/天",
                sessions_per_day: "10次",
                content_creation_rate: "QQ空间与群活跃",
                engagement_rate: "78%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "增值服务", percentage: 50, description: "会员、装扮、黄钻绿钻" },
                { type: "游戏与生态", percentage: 35, description: "游戏分发、应用内" },
                { type: "广告", percentage: 15, description: "信息流、品牌" }
            ],
            monetization_strategy: "会员与虚拟物品+游戏+广告",
            financial_metrics: {
                annual_revenue: "纳入腾讯，未单独披露",
                revenue_growth: "用户被微信分流",
                profitability: "仍贡献收入与生态",
                valuation: "腾讯生态核心产品"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约2亿",
                mau: "约5亿",
                engagement_rate: "78%",
                retention_7d: "82%",
                retention_30d: "80%"
            },
            content_metrics: {
                qzone_posts: "QQ空间动态与相册",
                group_chat: "群聊与文件",
                games_and_mini: "游戏与小程序"
            },
            business_metrics: {
                arpu: "约30元/年（增值）",
                ltv: "高（长期使用）",
                cac: "品牌与校园",
                conversion_rate: "会员与游戏转化"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "微信", similarity: 75, position: "中国区即时通讯与超级应用" },
                { name: "钉钉", similarity: 40, position: "办公与学习场景" },
                { name: "Discord", similarity: 45, position: "年轻用户与群组" }
            ],
            market_position: "中国 PC 与年轻用户即时通讯与娱乐入口",
            market_share: "中国 IM 与 QQ 生态约 30%+（被微信分流后）",
            competitive_advantages: [
                "QQ 号与等级体系心智强",
                "QQ 空间与群、游戏生态",
                "会员与虚拟物品变现成熟",
                "学生与年轻用户留存"
            ],
            competitive_disadvantages: [
                "被微信分流，用户老龄化",
                "移动端心智弱于微信",
                "增长见顶"
            ]
        },
        product_features: {
            core_features: [
                { name: "消息与群", description: "一对一、群聊、语音视频、文件", importance: "核心功能" },
                { name: "QQ 空间", description: "动态、相册、访客、装扮", importance: "核心功能" },
                { name: "会员与装扮", description: "黄钻绿钻、主题、气泡、挂件", importance: "核心功能" },
                { name: "游戏与小程序", description: "游戏中心、QQ 小程序", importance: "扩展功能" }
            ],
            innovative_features: [
                "QQ 号与等级游戏化",
                "QQ 空间社交与表达",
                "会员与虚拟物品体系"
            ]
        },
        tech_stack: {
            core_technologies: [
                "多端同步与消息",
                "关系链与群组",
                "支付与会员计费",
                "游戏分发与 SDK"
            ],
            tech_features: [
                "QQ 互联与第三方登录",
                "群文件与协作",
                "表情与装扮生态"
            ],
            tech_challenges: [
                "与微信争用户时长与心智",
                "年轻用户与校园留存",
                "商业化与体验平衡"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约5000万（巅峰 2008）",
            daily_active_users: "约2000万（巅峰）",
            total_users: "曾超 1 亿",
            growth_rate: "已衰落",
            retention_rate: "历史数据",
            user_demographics: {
                age_range: "曾以 16-34 岁为主",
                gender_ratio: "相对均衡，音乐与年轻用户",
                region: "美国为主，全球",
                income_level: "年轻用户"
            },
            usage_patterns: {
                avg_session_duration: "曾约 20 分钟/天",
                sessions_per_day: "2 次",
                content_creation_rate: "个人主页与音乐",
                engagement_rate: "历史"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 90, description: "展示与品牌，效果有限" },
                { type: "其他", percentage: 10, description: "音乐、合作" }
            ],
            monetization_strategy: "广告为主，商业化困难",
            financial_metrics: {
                annual_revenue: "历史，收购时 5.8 亿美金后暴跌",
                revenue_growth: "已关闭/衰落",
                profitability: "曾亏损",
                valuation: "2011 年仅 3500 万美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "历史",
                mau: "历史约 5000 万巅峰",
                engagement_rate: "历史",
                retention_7d: "历史",
                retention_30d: "历史"
            },
            content_metrics: {
                profile_and_music: "个人主页与音乐人",
                friend_graph: "好友与时间序",
                legacy: "数据丢失（2019）"
            },
            business_metrics: {
                arpu: "低",
                ltv: "历史",
                cac: "历史",
                conversion_rate: "历史"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Facebook", similarity: 85, position: "当时主要竞品，被超越" },
                { name: "Friendster", similarity: 70, position: "早期社交竞品" },
                { name: "Hi5", similarity: 60, position: "同期社交竞品" }
            ],
            market_position: "失败案例，曾为全球最大社交网络之一，后被 Facebook 替代",
            market_share: "已衰落，历史",
            competitive_advantages: [
                "早期个性化与音乐人生态",
                "年轻用户与音乐场景"
            ],
            competitive_disadvantages: [
                "体验与性能落后",
                "被收购后创新停滞",
                "数据管理失误"
            ]
        },
        product_features: {
            core_features: [
                { name: "个人主页", description: "自定义布局、背景、音乐播放器", importance: "核心功能" },
                { name: "好友与留言", description: "Top 8 好友、留言板、评论", importance: "核心功能" },
                { name: "音乐人页面", description: "音乐人入驻、歌曲播放、推广", importance: "核心功能" },
                { name: "Bulletin", description: "类似状态与广播", importance: "扩展功能" }
            ],
            innovative_features: [
                "个性化主页与 Top 8",
                "音乐人生态",
                "早期社交图谱"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Web 前端与自定义 CSS",
                "音乐流媒体嵌入",
                "好友与消息"
            ],
            tech_features: [
                "个人主页渲染",
                "音乐播放与存储",
                "多租户与规模"
            ],
            tech_challenges: [
                "性能与可扩展性",
                "数据迁移与保留（曾丢失）",
                "已衰落"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约2亿（巅峰 2015）",
            daily_active_users: "约5000万（巅峰）",
            total_users: "曾超2亿",
            growth_rate: "已关闭",
            retention_rate: "历史",
            user_demographics: {
                age_range: "曾以 13-25 岁为主",
                gender_ratio: "相对均衡",
                region: "美国为主，全球",
                income_level: "年轻用户"
            },
            usage_patterns: {
                avg_session_duration: "曾约 15 分钟/天",
                sessions_per_day: "3 次",
                content_creation_rate: "6 秒循环创作",
                engagement_rate: "历史"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 80, description: "尝试有限，变现困难" },
                { type: "其他", percentage: 20, description: "未成熟" }
            ],
            monetization_strategy: "广告尝试，未建立可持续模式",
            financial_metrics: {
                annual_revenue: "未规模化",
                revenue_growth: "已关闭",
                profitability: "亏损",
                valuation: "被 Twitter 收购后关闭"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "历史",
                mau: "历史约 2 亿巅峰",
                engagement_rate: "历史",
                retention_7d: "历史",
                retention_30d: "历史"
            },
            content_metrics: {
                six_second_loops: "6 秒循环视频",
                creator_ecosystem: "Vine 明星迁移至其他平台"
            },
            business_metrics: {
                arpu: "极低",
                ltv: "历史",
                cac: "历史",
                conversion_rate: "历史"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Instagram", similarity: 85, position: "短视频与 Stories 竞品" },
                { name: "Snapchat", similarity: 80, position: "短视频与年轻用户竞品" },
                { name: "TikTok/Musical.ly", similarity: 70, position: "后继短视频平台" }
            ],
            market_position: "失败案例，曾为 6 秒短视频标杆，被 Twitter 关闭",
            market_share: "已关闭，无",
            competitive_advantages: [
                "6 秒限制创造独特创意",
                "曾拥有大量创作者与用户"
            ],
            competitive_disadvantages: [
                "Twitter 未有效运营与变现",
                "被 Instagram/Snapchat 分流",
                "商业模式未建立"
            ]
        },
        product_features: {
            core_features: [
                { name: "6 秒循环视频", description: "仅 6 秒、循环播放、竖屏", importance: "核心功能" },
                { name: "发现与关注", description: "探索页、关注流、点赞评论", importance: "核心功能" },
                { name: "创作工具", description: "简单剪辑、无复杂特效", importance: "核心功能" }
            ],
            innovative_features: [
                "6 秒限制激发创意",
                "循环播放与传播",
                "早期短视频形态"
            ]
        },
        tech_stack: {
            core_technologies: [
                "短视频录制与编码",
                "循环播放与推荐",
                "多端"
            ],
            tech_features: [
                "6 秒约束与上传",
                "发现与关注流",
                "与 Twitter 账号整合"
            ],
            tech_challenges: [
                "变现与留存",
                "与 Instagram 竞争",
                "已关闭"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约1000万+（巅峰）",
            daily_active_users: "约300万（巅峰）",
            total_users: "曾超1000万",
            growth_rate: "已关闭",
            retention_rate: "历史",
            user_demographics: {
                age_range: "曾以 18-35 岁为主",
                gender_ratio: "相对均衡",
                region: "全球",
                income_level: "年轻用户"
            },
            usage_patterns: {
                avg_session_duration: "曾约 20 分钟/天",
                sessions_per_day: "2 次",
                content_creation_rate: "直播与观看",
                engagement_rate: "历史"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 70, description: "尝试有限" },
                { type: "其他", percentage: 30, description: "未成熟" }
            ],
            monetization_strategy: "广告尝试，未建立可持续模式",
            financial_metrics: {
                annual_revenue: "未规模化",
                revenue_growth: "已关闭",
                profitability: "亏损",
                valuation: "被 Twitter 收购后关闭"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "历史",
                mau: "历史",
                engagement_rate: "历史",
                retention_7d: "历史",
                retention_30d: "历史"
            },
            content_metrics: {
                live_streams: "实时直播流",
                legacy: "被 Twitter 自有直播替代"
            },
            business_metrics: {
                arpu: "极低",
                ltv: "历史",
                cac: "历史",
                conversion_rate: "历史"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Facebook Live", similarity: 90, position: "直播直接竞品，后主导市场" },
                { name: "Instagram Live", similarity: 85, position: "直播竞品" },
                { name: "YouTube Live", similarity: 70, position: "直播与长尾竞品" }
            ],
            market_position: "失败案例，曾为移动直播先行者，被 Twitter 关闭",
            market_share: "已关闭，无",
            competitive_advantages: [
                "早期移动直播体验",
                "与 Twitter 整合"
            ],
            competitive_disadvantages: [
                "Twitter 自有直播替代",
                "变现与留存不足",
                "被大平台复制"
            ]
        },
        product_features: {
            core_features: [
                { name: "实时直播", description: "一键开播、弹幕、爱心与评论", importance: "核心功能" },
                { name: "发现与关注", description: "地图发现、关注流、回放", importance: "核心功能" },
                { name: "互动", description: "弹幕、打赏（有限）", importance: "核心功能" }
            ],
            innovative_features: [
                "移动端一键直播",
                "地图发现附近直播",
                "早期直播社交形态"
            ]
        },
        tech_stack: {
            core_technologies: [
                "实时音视频推流",
                "CDN 与多码率",
                "多端"
            ],
            tech_features: [
                "低延迟与弹幕",
                "地图与发现",
                "与 Twitter 账号整合"
            ],
            tech_challenges: [
                "规模与成本",
                "变现",
                "已关闭"
            ]
        }
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
            { year: "2022", event: "推出AI功能" },
            { year: "2024", event: "AI能力持续增强，与日历、项目等深度整合" }
        ],
        key_decisions: [
            "块状结构设计，灵活组合",
            "个人免费策略获取用户",
            "模板社区建立生态",
            "AI集成提升效率"
        ],
        user_metrics: {
            monthly_active_users: "约3500万",
            daily_active_users: "约1500万",
            total_users: "约5000万+",
            growth_rate: "约25%",
            retention_rate: "约80%",
            user_demographics: {
                age_range: "22-45岁为主，知识工作者与团队",
                gender_ratio: "约50% 男性，50% 女性",
                region: "全球，美国、日韩、欧洲为主",
                income_level: "中高收入，B端与个人"
            },
            usage_patterns: {
                avg_session_duration: "约45分钟/天",
                sessions_per_day: "6次",
                content_creation_rate: "高（文档与数据库）",
                engagement_rate: "85%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "团队/企业订阅", percentage: 95, description: "Plus、Team、Enterprise" },
                { type: "其他", percentage: 5, description: "模板、API 等" }
            ],
            monetization_strategy: "Freemium，团队与企业订阅",
            financial_metrics: {
                annual_revenue: "约5亿美元+ (2023)",
                revenue_growth: "约30% YoY",
                profitability: "接近盈利",
                valuation: "约100亿美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约1500万",
                mau: "约3500万",
                engagement_rate: "85%",
                retention_7d: "82%",
                retention_30d: "80%"
            },
            content_metrics: {
                workspaces: "团队与个人空间",
                templates_usage: "模板社区与使用",
                ai_usage: "AI 写作与总结"
            },
            business_metrics: {
                arpu: "约15美元/月（团队）",
                ltv: "高",
                cac: "口碑与内容营销",
                conversion_rate: "免费转付费约4%"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Coda", similarity: 75, position: "文档+表格+自动化竞品" },
                { name: "Airtable", similarity: 60, position: "表格与数据库" },
                { name: "Confluence", similarity: 50, position: "企业知识库" },
                { name: "飞书文档", similarity: 65, position: "中国区协作与文档" }
            ],
            market_position: "All-in-one 工作空间与知识管理领导者之一",
            market_share: "全球知识管理/协作工具份额约 20%+",
            competitive_advantages: [
                "块状结构灵活，文档/数据库/看板统一",
                "个人免费与模板社区拉新",
                "AI 写作与总结集成",
                "多端同步与协作体验"
            ],
            competitive_disadvantages: [
                "学习曲线陡，功能复杂",
                "与 Coda/Airtable/Confluence 竞争",
                "企业版与权限需持续完善"
            ]
        },
        product_features: {
            core_features: [
                { name: "Block 块", description: "段落、标题、列表、代码、嵌入等可嵌套块", importance: "核心功能" },
                { name: "Database", description: "表格/看板/日历/画廊视图，关联与筛选", importance: "核心功能" },
                { name: "Wiki 与链接", description: "页面互链、模板与知识库", importance: "核心功能" },
                { name: "协作", description: "实时编辑、评论、@ 与权限", importance: "核心功能" },
                { name: "AI", description: "写作、总结、翻译、头脑风暴", importance: "扩展功能" }
            ],
            innovative_features: [
                "块状结构统一文档与数据库",
                "模板市场与社区",
                "个人免费带动团队转化"
            ]
        },
        tech_stack: {
            core_technologies: [
                "实时协作与 CRDT/OT",
                "块存储与版本历史",
                "多端同步（Web/Desktop/Mobile）",
                "AI 集成与嵌入"
            ],
            tech_features: [
                "API 与集成（Slack、GitHub 等）",
                "模板与导入导出",
                "权限与 SSO（企业版）"
            ],
            tech_challenges: [
                "复杂功能与上手成本",
                "大规模实时协作与性能",
                "与 Coda/Airtable 功能边界"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约1.5亿+",
            daily_active_users: "约8000万",
            total_users: "约2亿+",
            growth_rate: "高（新品冷启动后回落）",
            retention_rate: "约50%",
            user_demographics: {
                age_range: "18-45岁为主，Instagram 用户迁移",
                gender_ratio: "与 Instagram 接近",
                region: "全球，美国、印度、巴西为主",
                income_level: "年轻用户"
            },
            usage_patterns: {
                avg_session_duration: "约15分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "约10%",
                engagement_rate: "50%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 95, description: "信息流广告（规划中）" },
                { type: "其他", percentage: 5, description: "Meta 生态整合" }
            ],
            monetization_strategy: "广告（与 Meta 整合），尚在冷启动",
            financial_metrics: {
                annual_revenue: "尚未规模化变现",
                revenue_growth: "用户增长先于变现",
                profitability: "投入期",
                valuation: "纳入 Meta"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约8000万",
                mau: "约1.5亿+",
                engagement_rate: "50%",
                retention_7d: "45%",
                retention_30d: "50%"
            },
            content_metrics: {
                daily_posts: "文本为主，与 Instagram 联动",
                signup_velocity: "5 天 1 亿（上线时）",
                api_ecosystem: "第三方与 API"
            },
            business_metrics: {
                arpu: "尚未规模化",
                ltv: "待验证",
                cac: "Instagram 导流",
                conversion_rate: "留存与时长待提升"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Twitter/X", similarity: 90, position: "短文本社交直接竞品" },
                { name: "Bluesky", similarity: 70, position: "开放协议替代" },
                { name: "Mastodon", similarity: 55, position: "联邦制替代" }
            ],
            market_position: "Meta 系短文本社交，Twitter 替代选项",
            market_share: "短文本社交份额增长中，依赖 Instagram 导流",
            competitive_advantages: [
                "Instagram 账号一键注册与粉丝迁移",
                "Meta 广告与生态整合",
                "无字数限制与多媒体",
                "冷启动 5 天 1 亿用户"
            ],
            competitive_disadvantages: [
                "留存与时长不及 Twitter 替代预期",
                "内容质量与社区氛围待建",
                "欧盟等区合规与延迟上线"
            ]
        },
        product_features: {
            core_features: [
                { name: "帖子", description: "文本、图、视频、链接，500 字内", importance: "核心功能" },
                { name: "时间线", description: "For You 与关注流", importance: "核心功能" },
                { name: "与 Instagram 联动", description: "关注同步、跨平台分享", importance: "核心功能" },
                { name: "回复与引用", description: "回复、引用转发", importance: "核心功能" }
            ],
            innovative_features: [
                "Instagram 一键注册与冷启动",
                "无 280 字限制",
                "Meta 账号与推荐打通"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Meta 账号与推荐基础设施",
                "Feed 排序与去重",
                "多端与 API"
            ],
            tech_features: [
                "与 Instagram 关注同步",
                "联邦协议（ActivityPub）规划",
                "搜索与发现"
            ],
            tech_challenges: [
                "留存与 DAU/时长",
                "与 X/Bluesky 差异化",
                "广告与变现节奏"
            ]
        }
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
            { year: "2022", event: "推出AI功能" },
            { year: "2024", event: "持续强化AI写作与会议能力，拓展企业市场" }
        ],
        key_decisions: [
            "文档协作为核心功能",
            "信息透明化设计",
            "与字节生态整合",
            "AI能力提升效率"
        ],
        user_metrics: {
            monthly_active_users: "约1000万+ 企业用户",
            daily_active_users: "约500万",
            total_users: "企业数千万，用户数亿级",
            growth_rate: "约20%",
            retention_rate: "约85%",
            user_demographics: {
                age_range: "22-45岁，职场与知识工作者",
                gender_ratio: "约52% 男性，48% 女性",
                region: "中国为主，海外拓展",
                income_level: "企业付费，中大型与互联网"
            },
            usage_patterns: {
                avg_session_duration: "约60分钟/天",
                sessions_per_day: "15次",
                content_creation_rate: "文档与会议高",
                engagement_rate: "80%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "企业订阅", percentage: 90, description: "飞书专业版、旗舰版" },
                { type: "其他", percentage: 10, description: "应用、集成等" }
            ],
            monetization_strategy: "SaaS 订阅，企业付费",
            financial_metrics: {
                annual_revenue: "约数十亿人民币级",
                revenue_growth: "高增长",
                profitability: "投入期",
                valuation: "字节跳动旗下"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约500万",
                mau: "约1000万+",
                engagement_rate: "80%",
                retention_7d: "85%",
                retention_30d: "85%"
            },
            content_metrics: {
                docs_and_sheets: "文档、表格、多维表",
                meeting_minutes: "会议与日历",
                okr_and_bpm: "OKR、审批、项目"
            },
            business_metrics: {
                arpu: "按席位，约数百元/年/人",
                ltv: "高（企业粘性）",
                cac: "销售与品牌",
                conversion_rate: "免费转付费企业"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "钉钉", similarity: 90, position: "企业协作直接竞品" },
                { name: "企业微信", similarity: 85, position: "企业协作与私域" },
                { name: "Notion", similarity: 55, position: "文档与知识库" }
            ],
            market_position: "中国企协与效率工具领先者之一",
            market_share: "中国企协市场约 25%+（与钉钉、企微三分）",
            competitive_advantages: [
                "文档、表格、多维表与会议一体化",
                "信息透明与协作体验",
                "OKR、审批、项目与 BPM",
                "字节生态与 AI 能力"
            ],
            competitive_disadvantages: [
                "与钉钉、企微争大客户",
                "海外与本地化",
                "盈利与投入平衡"
            ]
        },
        product_features: {
            core_features: [
                { name: "云文档", description: "文档、表格、多维表、思维笔记", importance: "核心功能" },
                { name: "即时沟通", description: "群聊、频道、机器人、消息聚合", importance: "核心功能" },
                { name: "日历与会议", description: "预约、会议、妙记与纪要", importance: "核心功能" },
                { name: "OKR 与审批", description: "目标、审批流、BPM", importance: "扩展功能" },
                { name: "应用与开放平台", description: "低代码、集成、API", importance: "扩展功能" }
            ],
            innovative_features: [
                "文档即协作与信息透明",
                "妙记与 AI 纪要",
                "多维表与自动化"
            ]
        },
        tech_stack: {
            core_technologies: [
                "实时协作与文档引擎",
                "音视频与会议",
                "开放平台与 API",
                "AI 总结与妙记"
            ],
            tech_features: [
                "多端与离线",
                "权限与 SSO",
                "与字节产品打通"
            ],
            tech_challenges: [
                "与钉钉/企微大客户竞争",
                "规模化与成本",
                "海外与合规"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约2亿",
            daily_active_users: "约8000万",
            total_users: "约2.5亿+",
            growth_rate: "约8%",
            retention_rate: "约75%",
            user_demographics: {
                age_range: "22-45岁，职场与组织用户",
                gender_ratio: "约55% 男性，45% 女性",
                region: "中国为主",
                income_level: "企业与组织付费"
            },
            usage_patterns: {
                avg_session_duration: "约40分钟/天",
                sessions_per_day: "12次",
                content_creation_rate: "消息与审批高",
                engagement_rate: "78%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "增值与订阅", percentage: 60, description: "专业版、专属版" },
                { type: "应用与生态", percentage: 40, description: "应用市场、低代码、硬件" }
            ],
            monetization_strategy: "基础免费，增值与生态变现",
            financial_metrics: {
                annual_revenue: "约数十亿人民币级",
                revenue_growth: "约15%",
                profitability: "盈利",
                valuation: "阿里旗下"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约8000万",
                mau: "约2亿",
                engagement_rate: "78%",
                retention_7d: "80%",
                retention_30d: "75%"
            },
            content_metrics: {
                org_count: "数千万组织",
                app_ecosystem: "应用与低代码",
                meeting_and_ding: "钉消息、会议、考勤"
            },
            business_metrics: {
                arpu: "按组织与席位",
                ltv: "高",
                cac: "销售与地推",
                conversion_rate: "免费转付费组织"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "飞书", similarity: 90, position: "企业协作直接竞品" },
                { name: "企业微信", similarity: 85, position: "企业协作与私域" },
                { name: "Slack", similarity: 50, position: "海外协作" }
            ],
            market_position: "中国企协与组织数字化领导者",
            market_share: "中国企协 DAU/组织数领先",
            competitive_advantages: [
                "组织架构与通讯录为核心",
                "应用市场与低代码生态",
                "考勤、审批、钉消息强场景",
                "阿里生态与政企渗透"
            ],
            competitive_disadvantages: [
                "功能复杂与学习成本",
                "与飞书、企微争大客户",
                "体验与「简洁」叙事弱于飞书"
            ]
        },
        product_features: {
            core_features: [
                { name: "消息与群", description: "单聊、群聊、钉消息、已读未读", importance: "核心功能" },
                { name: "工作台", description: "应用入口、考勤、审批、日志", importance: "核心功能" },
                { name: "会议与直播", description: "视频会议、直播、录制", importance: "核心功能" },
                { name: "应用与低代码", description: "宜搭、应用市场、开放平台", importance: "扩展功能" },
                { name: "考勤与审批", description: "打卡、请假、审批流", importance: "核心功能" }
            ],
            innovative_features: [
                "钉消息与 DING 强触达",
                "组织架构即权限与分发",
                "低代码与应用生态"
            ]
        },
        tech_stack: {
            core_technologies: [
                "即时通讯与多端",
                "音视频与会议",
                "开放平台与 API",
                "低代码与表单引擎"
            ],
            tech_features: [
                "多端与硬件（考勤机等）",
                "与阿里云、淘宝等打通",
                "权限与 SSO"
            ],
            tech_challenges: [
                "与飞书/企微体验与心智竞争",
                "复杂度与易用性",
                "政企与中小企业平衡"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约1亿",
            daily_active_users: "约3000万",
            total_users: "约1.2亿+",
            growth_rate: "约8%",
            retention_rate: "约62%",
            user_demographics: {
                age_range: "22-40岁，职场人",
                gender_ratio: "约55% 男性，45% 女性",
                region: "中国为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约20分钟/天",
                sessions_per_day: "4次",
                content_creation_rate: "动态与匿名",
                engagement_rate: "60%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "招聘服务", percentage: 50, description: "B端招聘、猎头" },
                { type: "会员订阅", percentage: 40, description: "脉脉会员、增值" },
                { type: "广告", percentage: 10, description: "信息流广告" }
            ],
            monetization_strategy: "招聘 + 会员 + 广告",
            financial_metrics: {
                annual_revenue: "约数十亿人民币级",
                revenue_growth: "约15%",
                profitability: "盈利",
                valuation: "职场社交头部"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约3000万",
                mau: "约1亿",
                engagement_rate: "60%",
                retention_7d: "62%",
                retention_30d: "62%"
            },
            content_metrics: {
                feed_posts: "职场动态与匿名爆料",
                recruitment: "职位与简历",
                connections: "人脉与认证"
            },
            business_metrics: {
                arpu: "约50元/年",
                ltv: "中高",
                cac: "品牌与销售",
                conversion_rate: "会员与招聘转化"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "LinkedIn", similarity: 75, position: "职场社交国际竞品" },
                { name: "智联/前程无忧", similarity: 50, position: "招聘平台竞品" },
                { name: "小红书/微博", similarity: 40, position: "职场话题间接竞品" }
            ],
            market_position: "中国职场社交与匿名爆料领先平台",
            market_share: "职场社交细分领先",
            competitive_advantages: [
                "匿名爆料与职场信息",
                "招聘与会员变现",
                "实名+匿名混合"
            ],
            competitive_disadvantages: [
                "内容合规与口碑",
                "与 LinkedIn 国际化差距",
                "用户增长放缓"
            ]
        },
        product_features: {
            core_features: [
                { name: "职场动态", description: "实名动态、匿名爆料、话题", importance: "核心功能" },
                { name: "人脉与认证", description: "好友、二度人脉、公司认证", importance: "核心功能" },
                { name: "招聘", description: "职位、简历、猎头、企业服务", importance: "核心功能" },
                { name: "会员", description: "会员权益、谁看过我、消息", importance: "扩展功能" }
            ],
            innovative_features: [
                "匿名爆料与职场真相",
                "人脉与招聘闭环",
                "职场社区与信息"
            ]
        },
        tech_stack: {
            core_technologies: [
                "推荐与信息流",
                "实名与匿名身份",
                "招聘与简历匹配",
                "多端"
            ],
            tech_features: [
                "动态与话题",
                "人脉图与二度",
                "会员与支付"
            ],
            tech_challenges: [
                "内容审核与合规",
                "与招聘平台差异化",
                "留存与商业化"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约6000万",
            user_demographics: { age_range: "18-35岁", gender_ratio: "均衡", region: "全球", income_level: "多元" },
            usage_patterns: { avg_session_duration: "约60分钟/天", engagement_rate: "70%" }
        },
        business_model: {
            revenue_streams: [{ type: "游戏内购", percentage: 85, description: "抽卡与皮肤" }, { type: "周边与IP", percentage: 15, description: "周边、联动" }],
            monetization_strategy: "免费游玩+内购与IP"
        },
        key_metrics: {
            core_metrics: { dau: "约2000万", mau: "约6000万", engagement_rate: "70%", retention_7d: "75%", retention_30d: "65%" },
            content_metrics: { community_posts: "多平台社区", ugc: "二创与攻略" }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Honkai Impact 3rd", similarity: 75, position: "同厂二次元游戏" },
                { name: "Genshin 类开放世界", similarity: 70, position: "开放世界RPG竞品" },
                { name: "Discord/Reddit 社区", similarity: 50, position: "社区讨论间接竞品" }
            ],
            market_position: "全球二次元开放世界游戏与社区领先",
            market_share: "二次元游戏与社区头部",
            competitive_advantages: [
                "高质量内容与IP",
                "多平台社区与二创",
                "全球化与长线运营"
            ],
            competitive_disadvantages: [
                "生命周期与用户疲劳",
                "竞品与品类竞争",
                "社区治理与合规"
            ]
        },
        product_features: {
            core_features: [
                { name: "开放世界", description: "大世界探索、任务、角色养成", importance: "核心功能" },
                { name: "抽卡与角色", description: "角色、武器、命座与皮肤", importance: "核心功能" },
                { name: "多平台", description: "PC/主机/移动、云游戏", importance: "核心功能" },
                { name: "社区与活动", description: "版本活动、联动、二创", importance: "扩展功能" }
            ],
            innovative_features: [
                "开放世界+二次元+多平台",
                "角色IP与二创生态",
                "全球同步版本"
            ]
        },
        tech_stack: {
            core_technologies: [
                "跨平台引擎与渲染",
                "多端存档与同步",
                "反作弊与安全",
                "多语言与本地化"
            ],
            tech_features: [
                "大世界与性能",
                "抽卡与经济",
                "社区与UGC"
            ],
            tech_challenges: [
                "内容量与更新节奏",
                "多端体验一致",
                "长线留存与付费"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约1.5亿",
            user_demographics: { age_range: "18-35岁", gender_ratio: "约65% 男性", region: "全球", income_level: "多元" },
            usage_patterns: { avg_session_duration: "约90分钟/天", engagement_rate: "75%" }
        },
        business_model: {
            revenue_streams: [{ type: "游戏内购", percentage: 80, description: "皮肤与英雄" }, { type: "赛事与IP", percentage: 20, description: "赛事、动画" }],
            monetization_strategy: "免费游玩+内购与赛事"
        },
        key_metrics: {
            core_metrics: { dau: "约5000万", mau: "约1.5亿", engagement_rate: "75%", retention_7d: "78%", retention_30d: "70%" },
            content_metrics: { esports: "全球赛事", ugc: "攻略与二创" }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Dota 2", similarity: 90, position: "MOBA 直接竞品" },
                { name: "VALORANT", similarity: 50, position: "同厂竞技游戏" },
                { name: "其他 MOBA/电竞", similarity: 70, position: "品类竞品" }
            ],
            market_position: "全球 MOBA 与电竞赛事领先",
            market_share: "MOBA 与电竞头部",
            competitive_advantages: [
                "赛事体系与观赛",
                "IP 与动画、音乐",
                "长线运营与平衡"
            ],
            competitive_disadvantages: [
                "游戏老化与新手门槛",
                "与手游 MOBA 竞争",
                "依赖核心玩家"
            ]
        },
        product_features: {
            core_features: [
                { name: "5v5 MOBA", description: "对局、排位、匹配、英雄与技能", importance: "核心功能" },
                { name: "赛事与观赛", description: "职业联赛、世界赛、直播与回放", importance: "核心功能" },
                { name: "皮肤与通行证", description: "皮肤、表情、通行证、活动", importance: "核心功能" },
                { name: "社区与内容", description: "攻略、二创、客户端资讯", importance: "扩展功能" }
            ],
            innovative_features: [
                "电竞赛事体系",
                "IP 扩展（动画、音乐）",
                "全球多区域运营"
            ]
        },
        tech_stack: {
            core_technologies: [
                "游戏引擎与网络同步",
                "反作弊与公平性",
                "多区域与延迟",
                "观赛与直播"
            ],
            tech_features: [
                "匹配与排位",
                "赛事数据与回放",
                "客户端与活动"
            ],
            tech_challenges: [
                "新手体验与留存",
                "平衡与版本",
                "长线内容与商业化"
            ]
        }
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
        tech_stack: {
            core_technologies: [
                "流媒体与离线下载",
                "推荐算法（Discover Weekly 等）",
                "版权与曲库管理",
                "播客与视频管线"
            ],
            tech_features: [
                "个性化推荐与播放列表",
                "社交分享与协作播放列表",
                "Spotify Connect 多设备",
                "播客与 Greenroom 音频社交"
            ],
            tech_challenges: [
                "版权成本与盈利平衡",
                "多地区版权与合规",
                "推荐与发现体验",
                "艺术家分成透明与公平"
            ]
        },
        product_features: {
            core_features: [
                { name: "音乐流媒体", description: "点播、歌单、专辑、歌手页", importance: "核心功能" },
                { name: "Discover Weekly 等推荐", description: "个性化每日/每周歌单", importance: "核心功能" },
                { name: "社交与分享", description: "协作歌单、分享、关注", importance: "核心功能" },
                { name: "播客", description: "播客订阅、收听、原创与独家", importance: "核心功能" }
            ],
            innovative_features: [
                "Discover Weekly 等算法歌单",
                "免费+Premium 双模式",
                "播客战略扩展内容边界"
            ],
            feature_evolution: [
                { year: "2008", feature: "瑞典上线" },
                { year: "2011", feature: "进入美国" },
                { year: "2015", feature: "Discover Weekly" },
                { year: "2021", feature: "Greenroom 音频社交" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "版权采买+播客拓展，算法与编辑共同塑造发现",
                creator_support: "艺术家工具、Spotify for Artists、播客托管与变现",
                content_quality: "版权合规、内容审核、原创与独家内容"
            },
            user_operation: {
                acquisition: "免费版拉新、设备预装、促销",
                activation: "首播、歌单创建、分享",
                retention: "推荐歌单、播客、社交与设备联动",
                referral: "邀请、分享歌单与播客"
            },
            event_operation: [
                { name: "Wrapped", impact: "年度传播与留存", description: "年度听歌报告引发分享" }
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
        ],
        user_metrics: {
            monthly_active_users: "约2.7亿",
            daily_active_users: "约1.5亿",
            total_users: "约2.8亿+ 付费订阅",
            growth_rate: "约5%",
            retention_rate: "约90%",
            user_demographics: {
                age_range: "25-54岁为主",
                gender_ratio: "约50% 男性，50% 女性",
                region: "全球，美国、欧洲、拉美为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约60分钟/周",
                sessions_per_day: "1-2次",
                content_creation_rate: "评分与列表",
                engagement_rate: "高（订阅粘性）"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅收入", percentage: 98, description: "月费/年费订阅" },
                { type: "其他", percentage: 2, description: "游戏等" }
            ],
            monetization_strategy: "订阅制，无广告",
            financial_metrics: {
                annual_revenue: "约337亿美元 (2023)",
                revenue_growth: "约6% YoY",
                profitability: "盈利",
                valuation: "约2500亿美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约1.5亿",
                mau: "约2.7亿",
                engagement_rate: "90%",
                retention_7d: "92%",
                retention_30d: "90%"
            },
            content_metrics: {
                streaming_hours: "数十亿小时/季",
                originals: "原创剧集与电影",
                recommendations: "算法推荐"
            },
            business_metrics: {
                arpu: "约120美元/年",
                ltv: "高",
                cac: "品牌与内容营销",
                conversion_rate: "试用转付费高"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Disney+", similarity: 85, position: "流媒体直接竞品" },
                { name: "Amazon Prime Video", similarity: 80, position: "流媒体直接竞品" },
                { name: "HBO Max", similarity: 75, position: "流媒体直接竞品" }
            ],
            market_position: "全球流媒体订阅第一梯队",
            market_share: "全球流媒体约20%+",
            competitive_advantages: [
                "原创内容与品牌",
                "推荐算法与体验",
                "全球化与多语言"
            ],
            competitive_disadvantages: [
                "内容成本高",
                "密码共享限制影响增长",
                "竞争加剧"
            ]
        },
        product_features: {
            core_features: [
                { name: "流媒体播放", description: "多码率、多端、下载", importance: "核心功能" },
                { name: "推荐系统", description: "个性化首页与续看", importance: "核心功能" },
                { name: "原创内容", description: "剧集、电影、纪录片", importance: "核心功能" },
                { name: "个人列表与继续观看", description: "我的列表、进度同步", importance: "核心功能" },
                { name: "多 profile", description: "家庭账号与儿童模式", importance: "扩展功能" }
            ],
            innovative_features: [
                "算法推荐与个性化",
                "原创内容战略",
                "无广告订阅体验"
            ]
        },
        tech_stack: {
            core_technologies: [
                "CDN 与多码率流媒体",
                "推荐与个性化算法",
                "多端客户端与 DRM",
                "内容制作与发行"
            ],
            tech_features: [
                "自适应码率",
                "A/B 测试与推荐",
                "全球化部署"
            ],
            tech_challenges: [
                "内容成本与 ROI",
                "与 Disney+/Prime 竞争",
                "密码共享与留存"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约1.5亿+",
            daily_active_users: "约5000万",
            total_users: "约1.5亿+ 活跃用户",
            growth_rate: "约10%",
            retention_rate: "约65%",
            user_demographics: {
                age_range: "25-55岁，旅行与本地体验",
                gender_ratio: "约52% 女性，48% 男性",
                region: "全球，欧美为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "预订与浏览",
                sessions_per_day: "按需",
                content_creation_rate: "房东与评价",
                engagement_rate: "预订与复购"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "住宿佣金", percentage: 85, description: "房东与房客交易抽成" },
                { type: "体验与其它", percentage: 15, description: "体验活动、长期租赁" }
            ],
            monetization_strategy: "交易佣金，双向抽成",
            financial_metrics: {
                annual_revenue: "约99亿美元 (2023)",
                revenue_growth: "约18% YoY",
                profitability: "盈利",
                valuation: "约900亿美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约5000万",
                mau: "约1.5亿+",
                engagement_rate: "65%",
                retention_7d: "68%",
                retention_30d: "65%"
            },
            content_metrics: {
                listings: "数百万房源",
                reviews: "评价与信任体系",
                experiences: "本地体验"
            },
            business_metrics: {
                arpu: "因预订频次而异",
                ltv: "高",
                cac: "品牌与绩效",
                conversion_rate: "搜索转预订"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Booking.com", similarity: 70, position: "住宿预订直接竞品" },
                { name: "VRBO", similarity: 85, position: "短租直接竞品" },
                { name: "酒店集团", similarity: 50, position: "住宿间接竞品" }
            ],
            market_position: "全球短租与本地体验领先平台",
            market_share: "全球短租市场约20%+",
            competitive_advantages: [
                "独特房源与本地体验",
                "信任与评价体系",
                "品牌与社区"
            ],
            competitive_disadvantages: [
                "监管与合规压力",
                "安全与信任事件",
                "与酒店竞争加剧"
            ]
        },
        product_features: {
            core_features: [
                { name: "房源搜索与筛选", description: "地图、日期、人数、设施", importance: "核心功能" },
                { name: "预订与支付", description: "即时/申请预订、安全支付", importance: "核心功能" },
                { name: "评价与信任", description: "房东/房客评价、验证、保障", importance: "核心功能" },
                { name: "体验 (Experiences)", description: "本地活动与体验预订", importance: "核心功能" },
                { name: "消息与日历", description: "与房东沟通、日历同步", importance: "核心功能" }
            ],
            innovative_features: [
                "信任系统与评价",
                "本地体验差异化",
                "房东工具与保险"
            ]
        },
        tech_stack: {
            core_technologies: [
                "搜索与推荐",
                "支付与风控",
                "地图与日历",
                "多端与国际化"
            ],
            tech_features: [
                "动态定价与可用性",
                "评价与排名",
                "客服与争议"
            ],
            tech_challenges: [
                "监管与税务",
                "安全与信任",
                "与 OTA/酒店竞争"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约1.4亿（乘客+司机）",
            daily_active_users: "约2500万+ 行程",
            total_users: "约1.5亿+",
            growth_rate: "约15%",
            retention_rate: "约70%",
            user_demographics: {
                age_range: "22-55岁，城市用户",
                gender_ratio: "相对均衡",
                region: "全球，美国、拉美、印度为主",
                income_level: "全收入层"
            },
            usage_patterns: {
                avg_session_duration: "行程与等待",
                sessions_per_day: "按需",
                content_creation_rate: "司机端与评价",
                engagement_rate: "出行频次"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "出行佣金", percentage: 90, description: "行程抽成、动态定价" },
                { type: "外卖与货运", percentage: 10, description: "Uber Eats、Freight" }
            ],
            monetization_strategy: "交易佣金，动态定价",
            financial_metrics: {
                annual_revenue: "约372亿美元 (2023)",
                revenue_growth: "约17% YoY",
                profitability: "盈利",
                valuation: "约1500亿美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约2500万+ 行程",
                mau: "约1.4亿",
                engagement_rate: "70%",
                retention_7d: "72%",
                retention_30d: "70%"
            },
            content_metrics: {
                trips_per_day: "数千万次",
                driver_earnings: "司机侧分成",
                uber_eats: "外卖与配送"
            },
            business_metrics: {
                arpu: "因地区与频次而异",
                ltv: "高",
                cac: "补贴与品牌",
                conversion_rate: "下载转首单"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Lyft", similarity: 90, position: "出行直接竞品" },
                { name: "滴滴", similarity: 85, position: "区域出行竞品" },
                { name: "Grab / Ola", similarity: 80, position: "区域出行竞品" }
            ],
            market_position: "全球共享出行领先平台",
            market_share: "美国等市场约70%+",
            competitive_advantages: [
                "网络效应与规模",
                "动态定价与调度",
                "多产品（出行+外卖）"
            ],
            competitive_disadvantages: [
                "司机权益与监管",
                "补贴与盈利平衡",
                "区域竞争"
            ]
        },
        product_features: {
            core_features: [
                { name: "叫车", description: "实时叫车、预约、拼车", importance: "核心功能" },
                { name: "动态定价", description: "实时价格与预估", importance: "核心功能" },
                { name: "司机端", description: "接单、导航、收入", importance: "核心功能" },
                { name: "评价与安全", description: "双向评价、行程分享、紧急", importance: "核心功能" },
                { name: "Uber Eats", description: "外卖与配送", importance: "扩展功能" }
            ],
            innovative_features: [
                "实时匹配与动态定价",
                "多产品平台",
                "全球标准化体验"
            ]
        },
        tech_stack: {
            core_technologies: [
                "实时匹配与调度",
                "地图与 ETA",
                "支付与分账",
                "多端与国际化"
            ],
            tech_features: [
                "动态定价算法",
                "司机激励与合规",
                "客服与争议"
            ],
            tech_challenges: [
                "司机留存与权益",
                "监管与分类",
                "盈利与补贴"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约7500万",
            daily_active_users: "约1000万",
            total_users: "约5亿+ 注册",
            growth_rate: "约5%",
            retention_rate: "约55%",
            user_demographics: {
                age_range: "18-34岁为主",
                gender_ratio: "约55% 男性，45% 女性",
                region: "全球，美国、巴西、印度为主",
                income_level: "全收入层"
            },
            usage_patterns: {
                avg_session_duration: "约12分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "个人资料与互动",
                engagement_rate: "50%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅", percentage: 60, description: "Tinder Plus、Gold、Platinum" },
                { type: "应用内购买", percentage: 40, description: "超级喜欢、Boost 等" }
            ],
            monetization_strategy: "Freemium 订阅 + IAP",
            financial_metrics: {
                annual_revenue: "约20亿美元 (Match Group 2023)",
                revenue_growth: "个位数",
                profitability: "盈利",
                valuation: "Match Group 核心产品"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约1000万",
                mau: "约7500万",
                engagement_rate: "50%",
                retention_7d: "52%",
                retention_30d: "55%"
            },
            content_metrics: {
                matches_per_day: "数亿次滑动与匹配",
                messages: "匹配后聊天",
                video_profiles: "视频资料"
            },
            business_metrics: {
                arpu: "约25美元/年",
                ltv: "中高",
                cac: "应用商店与品牌",
                conversion_rate: "免费转付费约5%"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Bumble", similarity: 90, position: "约会应用直接竞品" },
                { name: "Hinge", similarity: 85, position: "约会应用直接竞品" },
                { name: "Match.com", similarity: 70, position: "同集团多品牌" }
            ],
            market_position: "全球约会应用 MAU 第一",
            market_share: "约会应用市场约50%+",
            competitive_advantages: [
                "品牌与规模",
                "左滑右滑简单交互",
                "订阅与 IAP 变现"
            ],
            competitive_disadvantages: [
                "用户流失与信任",
                "竞品差异化",
                "付费转化依赖功能墙"
            ]
        },
        product_features: {
            core_features: [
                { name: "卡片浏览", description: "左滑/右滑、超级喜欢", importance: "核心功能" },
                { name: "匹配与聊天", description: "匹配后解锁聊天", importance: "核心功能" },
                { name: "个人资料", description: "照片、简介、视频、Prompt", importance: "核心功能" },
                { name: "订阅与 Boost", description: "Gold/Platinum、Boost、无限右滑", importance: "核心功能" },
                { name: "安全与验证", description: "照片验证、举报、安全中心", importance: "核心功能" }
            ],
            innovative_features: [
                "左滑右滑简化决策",
                "游戏化与订阅墙",
                "视频资料与互动"
            ]
        },
        tech_stack: {
            core_technologies: [
                "推荐与匹配算法",
                "实时聊天与推送",
                "支付与订阅",
                "多端与本地化"
            ],
            tech_features: [
                "地理位置与偏好",
                "防欺诈与安全",
                "A/B 与变现"
            ],
            tech_challenges: [
                "留存与匹配质量",
                "与 Bumble/Hinge 差异化",
                "付费与体验平衡"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约1亿",
            daily_active_users: "约3000万",
            total_users: "约5亿+ 注册",
            growth_rate: "约25%",
            retention_rate: "约45%",
            user_demographics: {
                age_range: "18-45岁，学生与职场",
                gender_ratio: "约55% 女性，45% 男性",
                region: "全球，美国、拉美、亚洲为主",
                income_level: "全收入层"
            },
            usage_patterns: {
                avg_session_duration: "约15分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "打卡与排行榜",
                engagement_rate: "45%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅与IAP", percentage: 70, description: "Duolingo Plus、Super" },
                { type: "广告", percentage: 30, description: "免费版广告" }
            ],
            monetization_strategy: "免费+广告，订阅去广告与增值",
            financial_metrics: {
                annual_revenue: "约5.5亿美元 (2023)",
                revenue_growth: "约40% YoY",
                profitability: "盈利",
                valuation: "约80亿美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约3000万",
                mau: "约1亿",
                engagement_rate: "45%",
                retention_7d: "48%",
                retention_30d: "45%"
            },
            content_metrics: {
                lessons_completed: "数十亿次练习",
                streak_and_leaderboard: "连续打卡与排名",
                ai_adaptive: "AI 个性化路径"
            },
            business_metrics: {
                arpu: "约7美元/年",
                ltv: "约50美元",
                cac: "口碑与品牌",
                conversion_rate: "免费转 Plus 约5%"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Babbel", similarity: 85, position: "语言学习直接竞品" },
                { name: "Rosetta Stone", similarity: 70, position: "语言学习竞品" },
                { name: "多邻国儿童/学校", similarity: 60, position: "教育场景扩展" }
            ],
            market_position: "全球语言学习 App 月活第一",
            market_share: "语言学习 App 市场约50%+",
            competitive_advantages: [
                "免费+游戏化获客",
                "品牌与多语种",
                "AI 与个性化"
            ],
            competitive_disadvantages: [
                "学习效果争议",
                "留存与完成率",
                "付费转化依赖功能"
            ]
        },
        product_features: {
            core_features: [
                { name: "课程与单元", description: "多语种课程、听说读写", importance: "核心功能" },
                { name: "游戏化", description: "心、连击、排行榜、联赛", importance: "核心功能" },
                { name: "打卡与 streak", description: "每日目标、连续天数", importance: "核心功能" },
                { name: "Duolingo Plus", description: "去广告、离线、无限心", importance: "核心功能" },
                { name: "AI 与个性化", description: "难度调节、复习、Duo 助手", importance: "扩展功能" }
            ],
            innovative_features: [
                "游戏化与 streak",
                "免费获客与 Plus 转化",
                "AI 自适应学习"
            ]
        },
        tech_stack: {
            core_technologies: [
                "多语种课程与语音",
                "游戏化与进度",
                "推荐与 AI",
                "多端与离线"
            ],
            tech_features: [
                "语音识别与 TTS",
                "A/B 与留存",
                "订阅与支付"
            ],
            tech_challenges: [
                "学习效果与完成率",
                "与 Babbel 等差异化",
                "变现与体验"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约4000万",
            daily_active_users: "约500万",
            total_users: "约1.3亿+ 注册",
            growth_rate: "约10%",
            retention_rate: "约40%",
            user_demographics: {
                age_range: "25-45岁，职场与终身学习",
                gender_ratio: "约55% 女性，45% 男性",
                region: "全球，美国、印度为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约30分钟/周",
                sessions_per_day: "按课程",
                content_creation_rate: "作业与讨论",
                engagement_rate: "完成率约15%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "课程与证书", percentage: 70, description: "单课、专项、学位" },
                { type: "订阅与B2B", percentage: 30, description: "Coursera Plus、企业" }
            ],
            monetization_strategy: "课程付费 + 订阅 + 企业培训",
            financial_metrics: {
                annual_revenue: "约6.5亿美元 (2023)",
                revenue_growth: "约15% YoY",
                profitability: "盈利",
                valuation: "上市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约500万",
                mau: "约4000万",
                engagement_rate: "40%",
                retention_7d: "42%",
                retention_30d: "40%"
            },
            content_metrics: {
                courses_completed: "完成率约15%",
                certificates: "证书与学位",
                university_partners: "高校合作"
            },
            business_metrics: {
                arpu: "约50美元/年",
                ltv: "中高",
                cac: "品牌与高校",
                conversion_rate: "免费试听转付费"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "edX", similarity: 85, position: "慕课直接竞品" },
                { name: "Udemy", similarity: 60, position: "在线课程竞品" },
                { name: "LinkedIn Learning", similarity: 50, position: "职场学习竞品" }
            ],
            market_position: "慕课与高校合作领先平台",
            market_share: "慕课市场约25%+",
            competitive_advantages: [
                "高校与证书权威",
                "专项与学位",
                "企业培训"
            ],
            competitive_disadvantages: [
                "完成率低",
                "证书价值争议",
                "与 Udemy 等竞争"
            ]
        },
        product_features: {
            core_features: [
                { name: "课程目录", description: "单课、专项、学位、合作高校", importance: "核心功能" },
                { name: "学习与作业", description: "视频、测验、作业、讨论", importance: "核心功能" },
                { name: "证书与学位", description: "结业证、专业证书、学位", importance: "核心功能" },
                { name: "Coursera Plus", description: "订阅畅学多数课程", importance: "核心功能" },
                { name: "企业学习", description: "团队与组织培训", importance: "扩展功能" }
            ],
            innovative_features: [
                "高校合作与证书",
                "专项课程提升完成",
                "企业培训拓展"
            ]
        },
        tech_stack: {
            core_technologies: [
                "视频与测验",
                "讨论与作业",
                "证书与身份",
                "多端与多语言"
            ],
            tech_features: [
                "推荐与搜索",
                "进度与提醒",
                "支付与订阅"
            ],
            tech_challenges: [
                "完成率与体验",
                "与 edX/Udemy 差异化",
                "企业产品与合规"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约9000万",
            daily_active_users: "约1500万",
            total_users: "约1.2亿+",
            growth_rate: "约3%",
            retention_rate: "约60%",
            user_demographics: {
                age_range: "25-55岁，阅读与书评用户",
                gender_ratio: "约65% 女性，35% 男性",
                region: "全球，美国为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约10分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "书评与评分",
                engagement_rate: "58%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 50, description: "展示与图书推广" },
                { type: "图书销售分成", percentage: 50, description: "Amazon 关联" }
            ],
            monetization_strategy: "广告 + 图书销售分成",
            financial_metrics: {
                annual_revenue: "未单独披露（Amazon 旗下）",
                revenue_growth: "稳定",
                profitability: "为 Amazon 导流",
                valuation: "Amazon 收购"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约1500万",
                mau: "约9000万",
                engagement_rate: "58%",
                retention_7d: "60%",
                retention_30d: "60%"
            },
            content_metrics: {
                reviews_ratings: "数亿条书评与评分",
                reading_challenges: "阅读挑战",
                shelves: "书架与推荐"
            },
            business_metrics: {
                arpu: "低（广告与分成）",
                ltv: "中",
                cac: "口碑与 Amazon",
                conversion_rate: "点击购书转化"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Amazon 书评", similarity: 60, position: "书评与购书竞品" },
                { name: "LibraryThing", similarity: 70, position: "读书社区竞品" },
                { name: "豆瓣读书", similarity: 65, position: "区域读书社区" }
            ],
            market_position: "全球最大读书社区（Amazon 旗下）",
            market_share: "读书社区与书评领先",
            competitive_advantages: [
                "规模与 UGC 书评",
                "阅读挑战与社交",
                "Amazon 导流与数据"
            ],
            competitive_disadvantages: [
                "产品更新慢",
                "商业化与体验冲突",
                "依赖 Amazon 战略"
            ]
        },
        product_features: {
            core_features: [
                { name: "书架与想读", description: "在读、想读、已读、评分", importance: "核心功能" },
                { name: "书评与讨论", description: "评论、讨论组、引用", importance: "核心功能" },
                { name: "推荐与发现", description: "算法推荐、列表、阅读挑战", importance: "核心功能" },
                { name: "作者与书籍页", description: "作者主页、系列、推荐", importance: "核心功能" },
                { name: "购书链接", description: "Amazon 等关联与分成", importance: "扩展功能" }
            ],
            innovative_features: [
                "阅读挑战与年度总结",
                "社交推荐与列表",
                "与 Kindle/Amazon 整合"
            ]
        },
        tech_stack: {
            core_technologies: [
                "书籍元数据与搜索",
                "推荐与社交图",
                "讨论与通知",
                "多端与 Amazon 集成"
            ],
            tech_features: [
                "列表与挑战",
                "广告与分成",
                "API 与数据"
            ],
            tech_challenges: [
                "产品迭代与体验",
                "商业化与社区平衡",
                "与 Kindle 协同"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约400万",
            daily_active_users: "约50万",
            total_users: "约600万+",
            growth_rate: "约15%",
            retention_rate: "约55%",
            user_demographics: {
                age_range: "22-45岁，电影爱好者",
                gender_ratio: "约55% 男性，45% 女性",
                region: "全球，英美为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约15分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "日记与影评",
                engagement_rate: "52%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅", percentage: 60, description: "Letterboxd Pro" },
                { type: "广告", percentage: 40, description: "电影与流媒体推广" }
            ],
            monetization_strategy: "Pro 订阅 + 广告",
            financial_metrics: {
                annual_revenue: "约数千万美元级",
                revenue_growth: "约20%",
                profitability: "接近盈亏平衡",
                valuation: "独立运营"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约50万",
                mau: "约400万",
                engagement_rate: "52%",
                retention_7d: "54%",
                retention_30d: "55%"
            },
            content_metrics: {
                diary_entries: "观影日记与评分",
                lists: "榜单与列表",
                reviews: "影评社区"
            },
            business_metrics: {
                arpu: "约5美元/年（Pro）",
                ltv: "中",
                cac: "口碑",
                conversion_rate: "Pro 转化约3%"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "IMDb", similarity: 60, position: "电影数据与评论竞品" },
                { name: "豆瓣电影", similarity: 70, position: "区域影评社区" },
                { name: "JustWatch", similarity: 40, position: "观影发现间接竞品" }
            ],
            market_position: "电影爱好者垂直社区领先",
            market_share: "电影社区细分市场领先",
            competitive_advantages: [
                "观影日记与列表",
                "影迷社区与榜单",
                "小而美体验"
            ],
            competitive_disadvantages: [
                "用户规模有限",
                "增长依赖口碑",
                "与流媒体发现竞争"
            ]
        },
        product_features: {
            core_features: [
                { name: "观影日记", description: "标记、评分、日期、评论", importance: "核心功能" },
                { name: "列表", description: "个人与公开列表、榜单", importance: "核心功能" },
                { name: "影评与讨论", description: "短评、长评、讨论", importance: "核心功能" },
                { name: "发现", description: "推荐、流行、好友动态", importance: "核心功能" },
                { name: "Pro", description: "无广告、统计、导出、徽章", importance: "扩展功能" }
            ],
            innovative_features: [
                "观影日记与年度总结",
                "列表与榜单文化",
                "影迷身份与社交"
            ]
        },
        tech_stack: {
            core_technologies: [
                "电影元数据与 TMDB 等",
                "社交与推荐",
                "列表与搜索",
                "多端与订阅"
            ],
            tech_features: [
                "日记与统计",
                "Pro 与支付",
                "API 与第三方"
            ],
            tech_challenges: [
                "规模与留存",
                "与 IMDb/流媒体差异化",
                "商业化与体验"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约300万",
            daily_active_users: "约50万",
            total_users: "约500万+",
            growth_rate: "约5%",
            retention_rate: "约50%",
            user_demographics: {
                age_range: "22-45岁，创业者与产品人",
                gender_ratio: "约70% 男性，30% 女性",
                region: "全球，美国、欧洲为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约8分钟/天",
                sessions_per_day: "1-2次",
                content_creation_rate: "投票与评论",
                engagement_rate: "48%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告与企业服务", percentage: 70, description: "推广、Maker 订阅" },
                { type: "其他", percentage: 30, description: "活动、合作" }
            ],
            monetization_strategy: "广告 + Maker 订阅（Y Combinator 旗下）",
            financial_metrics: {
                annual_revenue: "未单独披露",
                revenue_growth: "稳定",
                profitability: "为 YC 生态服务",
                valuation: "AngelList/YC 旗下"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约50万",
                mau: "约300万",
                engagement_rate: "48%",
                retention_7d: "50%",
                retention_30d: "50%"
            },
            content_metrics: {
                daily_launches: "每日产品发布",
                votes_comments: "投票与讨论",
                maker_community: "Maker 与创始人"
            },
            business_metrics: {
                arpu: "低",
                ltv: "中",
                cac: "口碑与社区",
                conversion_rate: "Maker 付费"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "BetaList / Launching Next", similarity: 75, position: "产品发布社区竞品" },
                { name: "Twitter/X 产品圈", similarity: 50, position: "产品发现间接竞品" },
                { name: "Indie Hackers", similarity: 55, position: "创业者社区竞品" }
            ],
            market_position: "产品发现与 Maker 社区标杆",
            market_share: "产品发布与发现细分领先",
            competitive_advantages: [
                "每日发布仪式感",
                "投票与讨论",
                "YC 生态与品牌"
            ],
            competitive_disadvantages: [
                "活跃度波动",
                "商业化与社区平衡",
                "依赖 YC 资源"
            ]
        },
        product_features: {
            core_features: [
                { name: "每日产品", description: "每日上新、封面、链接与 tag", importance: "核心功能" },
                { name: "投票与评论", description: "upvote、评论、Maker 回复", importance: "核心功能" },
                { name: "Maker 与公司", description: "Maker 主页、公司页、关注", importance: "核心功能" },
                { name: "榜单与搜索", description: "今日/本周/本月、分类、搜索", importance: "核心功能" },
                { name: "Maker 订阅", description: "付费推广与工具", importance: "扩展功能" }
            ],
            innovative_features: [
                "每日发布与投票排名",
                "Maker 与创始人社区",
                "产品发现与讨论"
            ]
        },
        tech_stack: {
            core_technologies: [
                "产品提交与审核",
                "投票与排序",
                "邮件与通知",
                "多端与 API"
            ],
            tech_features: [
                "榜单与时间窗",
                "Maker 工具与订阅",
                "与 YC 生态集成"
            ],
            tech_challenges: [
                "活跃度与留存",
                "商业化与社区",
                "与 Twitter 等竞争注意力"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约80万",
            daily_active_users: "约20万",
            total_users: "约150万+",
            growth_rate: "约5%",
            retention_rate: "约65%",
            user_demographics: {
                age_range: "25-45岁，独立开发者与创业者",
                gender_ratio: "约75% 男性，25% 女性",
                region: "全球，美国为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约15分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "访谈与收入分享",
                engagement_rate: "60%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告与企业", percentage: 80, description: "招聘、赞助" },
                { type: "其他", percentage: 20, description: "Stripe 生态" }
            ],
            monetization_strategy: "广告与招聘（Stripe 旗下）",
            financial_metrics: {
                annual_revenue: "未单独披露",
                revenue_growth: "稳定",
                profitability: "为 Stripe 生态服务",
                valuation: "Stripe 收购"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约20万",
                mau: "约80万",
                engagement_rate: "60%",
                retention_7d: "62%",
                retention_30d: "65%"
            },
            content_metrics: {
                interviews: "独立开发者访谈",
                revenue_share: "收入透明分享",
                forum_posts: "论坛讨论"
            },
            business_metrics: {
                arpu: "低",
                ltv: "中",
                cac: "社区口碑",
                conversion_rate: "招聘与赞助"
            }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约500万",
            daily_active_users: "约100万",
            total_users: "约800万+",
            growth_rate: "约2%",
            retention_rate: "约70%",
            user_demographics: {
                age_range: "25-50岁，开发者与科技从业者",
                gender_ratio: "约80% 男性，20% 女性",
                region: "全球，美国为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约25分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "链接提交与评论",
                engagement_rate: "68%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "无直接变现", percentage: 0, description: "非营利，YC 支持" },
                { type: "生态价值", percentage: 100, description: "为 YC 与创业生态导流" }
            ],
            monetization_strategy: "非营利，Y Combinator 支持",
            financial_metrics: {
                annual_revenue: "无",
                revenue_growth: "N/A",
                profitability: "非营利",
                valuation: "无"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约100万",
                mau: "约500万",
                engagement_rate: "68%",
                retention_7d: "72%",
                retention_30d: "70%"
            },
            content_metrics: {
                submissions_per_day: "数百条链接",
                comments: "高质量讨论",
                karma: "投票与排序"
            },
            business_metrics: {
                arpu: "0",
                ltv: "N/A",
                cac: "口碑",
                conversion_rate: "N/A"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Reddit 科技版", similarity: 65, position: "科技讨论间接竞品" },
                { name: "Lobsters", similarity: 80, position: "技术链接社区竞品" },
                { name: "Twitter/X 科技圈", similarity: 45, position: "信息流间接竞品" }
            ],
            market_position: "科技与创业圈高质量链接与讨论社区",
            market_share: "技术社区细分领先",
            competitive_advantages: [
                "投票与算法保证质量",
                "YC 生态与人才",
                "极简与专注"
            ],
            competitive_disadvantages: [
                "界面老旧",
                "增长缓慢",
                "非营利依赖 YC"
            ]
        },
        product_features: {
            core_features: [
                { name: "链接提交", description: "标题、URL、正文可选", importance: "核心功能" },
                { name: "投票与排序", description: "upvote、热度与时间排序", importance: "核心功能" },
                { name: "评论", description: "树状评论、回复", importance: "核心功能" },
                { name: "用户与 karma", description: "用户页、karma、提交历史", importance: "核心功能" },
                { name: "Ask/Show/Job", description: "分类与版块", importance: "扩展功能" }
            ],
            innovative_features: [
                "投票算法与质量",
                "极简界面与专注",
                "非营利与社区治理"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Arc 语言与定制框架",
                "投票与排序算法",
                "评论树与通知",
                "文本与链接"
            ],
            tech_features: [
                "防作弊与反 spam",
                "RSS 与 API",
                "移动端与 PWA"
            ],
            tech_challenges: [
                "界面与体验现代化",
                "规模与性能",
                "保持质量与开放"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约3000万",
            daily_active_users: "约500万",
            total_users: "约5000万+",
            growth_rate: "约2%",
            retention_rate: "约55%",
            user_demographics: {
                age_range: "18-45岁，艺术与插画创作者",
                gender_ratio: "约50% 男性，50% 女性",
                region: "全球，美国为主",
                income_level: "多元"
            },
            usage_patterns: {
                avg_session_duration: "约25分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "作品上传与收藏",
                engagement_rate: "52%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "会员订阅", percentage: 50, description: "Core 会员" },
                { type: "作品销售", percentage: 40, description: "打印与数字销售" },
                { type: "广告", percentage: 10, description: "展示广告" }
            ],
            monetization_strategy: "会员 + 作品销售（Wix 旗下）",
            financial_metrics: {
                annual_revenue: "未单独披露",
                revenue_growth: "稳定",
                profitability: "Wix 旗下",
                valuation: "Wix 收购"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约500万",
                mau: "约3000万",
                engagement_rate: "52%",
                retention_7d: "54%",
                retention_30d: "55%"
            },
            content_metrics: {
                deviations: "数亿件作品",
                favorites: "收藏与关注",
                prints: "打印与销售"
            },
            business_metrics: {
                arpu: "约15美元/年",
                ltv: "中",
                cac: "口碑",
                conversion_rate: "会员与销售转化"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "ArtStation", similarity: 85, position: "数字艺术社区直接竞品" },
                { name: "Behance", similarity: 80, position: "设计作品集竞品" },
                { name: "Instagram/Pinterest", similarity: 50, position: "视觉发现间接竞品" }
            ],
            market_position: "全球艺术创作与插画社区领先（Wix 旗下）",
            market_share: "艺术社区细分领先",
            competitive_advantages: [
                "历史与规模",
                "收藏与社区",
                "打印与销售"
            ],
            competitive_disadvantages: [
                "产品更新慢",
                "与 ArtStation/Behance 竞争",
                "商业化与创作者平衡"
            ]
        },
        product_features: {
            core_features: [
                { name: "作品展示", description: "上传、分类、描述、标签", importance: "核心功能" },
                { name: "收藏与关注", description: "收藏夹、关注作者、动态", importance: "核心功能" },
                { name: "评论与互动", description: "评论、点赞、收藏", importance: "核心功能" },
                { name: "Core 会员与销售", description: "无广告、打印、数字销售", importance: "扩展功能" }
            ],
            innovative_features: [
                "早期艺术社区形态",
                "打印与数字销售",
                "收藏与发现"
            ]
        },
        tech_stack: {
            core_technologies: [
                "图片存储与 CDN",
                "搜索与推荐",
                "打印与支付",
                "多端"
            ],
            tech_features: [
                "作品与画廊",
                "收藏与关注流",
                "Core 与销售"
            ],
            tech_challenges: [
                "规模与存储",
                "与 Wix 整合",
                "创作者与商业化"
            ]
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约1000万",
            daily_active_users: "约200万",
            total_users: "约1500万+",
            growth_rate: "约10%",
            retention_rate: "约65%",
            user_demographics: {
                age_range: "22-45岁，数字艺术与游戏美术",
                gender_ratio: "约55% 男性，45% 女性",
                region: "全球，美国、亚洲为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约30分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "作品集与学习",
                engagement_rate: "62%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "会员与课程", percentage: 70, description: "Pro 会员、学习平台" },
                { type: "招聘与打印", percentage: 30, description: "招聘、打印销售" }
            ],
            monetization_strategy: "会员 + 学习 + 招聘（Epic 旗下）",
            financial_metrics: {
                annual_revenue: "未单独披露",
                revenue_growth: "稳定",
                profitability: "Epic 生态",
                valuation: "Epic Games 收购"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约200万",
                mau: "约1000万",
                engagement_rate: "62%",
                retention_7d: "65%",
                retention_30d: "65%"
            },
            content_metrics: {
                portfolio_views: "作品集浏览",
                learning: "ArtStation Learning",
                jobs: "招聘与外包"
            },
            business_metrics: {
                arpu: "约50美元/年",
                ltv: "中高",
                cac: "口碑与教育",
                conversion_rate: "Pro 与课程转化"
            }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约1500万",
            daily_active_users: "约300万",
            total_users: "约2000万+",
            growth_rate: "约5%",
            retention_rate: "约60%",
            user_demographics: {
                age_range: "22-45岁，设计师与创意人",
                gender_ratio: "约50% 男性，50% 女性",
                region: "全球，美国为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约20分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "项目与关注",
                engagement_rate: "58%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "Creative Cloud 集成", percentage: 80, description: "Adobe 生态" },
                { type: "招聘与推广", percentage: 20, description: "招聘、推广" }
            ],
            monetization_strategy: "Adobe CC 集成，免费为主",
            financial_metrics: {
                annual_revenue: "纳入 Adobe",
                revenue_growth: "稳定",
                profitability: "为 Adobe 导流",
                valuation: "Adobe 收购"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约300万",
                mau: "约1500万",
                engagement_rate: "58%",
                retention_7d: "60%",
                retention_30d: "60%"
            },
            content_metrics: {
                projects: "项目与作品集",
                follows: "关注与发现",
                jobs: "招聘"
            },
            business_metrics: {
                arpu: "低（CC 捆绑）",
                ltv: "中",
                cac: "Adobe 品牌",
                conversion_rate: "CC 转化"
            }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约800万",
            daily_active_users: "约150万",
            total_users: "约1000万+",
            growth_rate: "约5%",
            retention_rate: "约58%",
            user_demographics: {
                age_range: "22-45岁，UI/UX 与产品设计师",
                gender_ratio: "约50% 男性，50% 女性",
                region: "全球，美国为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约18分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "Shot 发布与评论",
                engagement_rate: "55%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "Pro 订阅", percentage: 60, description: "Dribbble Pro" },
                { type: "招聘服务", percentage: 40, description: "招聘与人才" }
            ],
            monetization_strategy: "Pro 订阅 + 招聘",
            financial_metrics: {
                annual_revenue: "约数千万美元级",
                revenue_growth: "约8%",
                profitability: "盈利",
                valuation: "独立运营"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约150万",
                mau: "约800万",
                engagement_rate: "55%",
                retention_7d: "56%",
                retention_30d: "58%"
            },
            content_metrics: {
                shots: "设计作品展示",
                hiring: "招聘与人才匹配",
                explore: "发现与关注"
            },
            business_metrics: {
                arpu: "约50美元/年",
                ltv: "中",
                cac: "口碑与设计圈",
                conversion_rate: "Pro 与招聘转化"
            }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约400万",
            user_demographics: { age_range: "22-40岁", gender_ratio: "约70% 男性", region: "全球", income_level: "中高" },
            usage_patterns: { avg_session_duration: "约20分钟/天", engagement_rate: "55%" }
        },
        business_model: {
            revenue_streams: [{ type: "Pro 订阅", percentage: 90, description: "CodePen Pro" }, { type: "其他", percentage: 10, description: "招聘等" }],
            monetization_strategy: "Freemium 订阅"
        },
        key_metrics: {
            core_metrics: { dau: "约80万", mau: "约400万", engagement_rate: "55%", retention_7d: "58%", retention_30d: "52%" },
            content_metrics: { pens: "前端作品", embed_views: "嵌入与分享" }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约300万",
            user_demographics: { age_range: "20-35岁", gender_ratio: "约70% 男性", region: "全球", income_level: "多元" },
            usage_patterns: { avg_session_duration: "约25分钟/天", engagement_rate: "50%" }
        },
        business_model: {
            revenue_streams: [{ type: "免费", percentage: 100, description: "无直接变现" }],
            monetization_strategy: "免费，社区驱动"
        },
        key_metrics: {
            core_metrics: { dau: "约50万", mau: "约300万", engagement_rate: "50%", retention_7d: "52%", retention_30d: "48%" },
            content_metrics: { katas: "编程挑战", rank: "Kyu/Dan 排名" }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约2500万",
            daily_active_users: "约500万",
            total_users: "约3000万+",
            growth_rate: "约15%",
            retention_rate: "约50%",
            user_demographics: {
                age_range: "20-35岁，求职与在校生",
                gender_ratio: "约65% 男性，35% 女性",
                region: "全球，中国、美国、印度为主",
                income_level: "学生与职场新人"
            },
            usage_patterns: {
                avg_session_duration: "约45分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "刷题与讨论",
                engagement_rate: "48%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "Premium 订阅", percentage: 95, description: "LeetCode Premium" },
                { type: "其他", percentage: 5, description: "企业、比赛" }
            ],
            monetization_strategy: "Freemium 订阅",
            financial_metrics: {
                annual_revenue: "约数亿美元级",
                revenue_growth: "约20%",
                profitability: "盈利",
                valuation: "高估值"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约500万",
                mau: "约2500万",
                engagement_rate: "48%",
                retention_7d: "50%",
                retention_30d: "50%"
            },
            content_metrics: {
                problems_solved: "数十亿次提交",
                contest_ranking: "周赛与排名",
                discussions: "题解与讨论"
            },
            business_metrics: {
                arpu: "约30美元/年",
                ltv: "约80美元",
                cac: "口碑与校招",
                conversion_rate: "Premium 约5%"
            }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约800万",
            user_demographics: { age_range: "20-35岁", gender_ratio: "约70% 男性", region: "全球", income_level: "中高" },
            usage_patterns: { avg_session_duration: "约30分钟/天", engagement_rate: "45%" }
        },
        business_model: {
            revenue_streams: [{ type: "企业服务", percentage: 70, description: "招聘与测评" }, { type: "认证与竞赛", percentage: 30, description: "认证、竞赛" }],
            monetization_strategy: "B2B 招聘与测评"
        },
        key_metrics: {
            core_metrics: { dau: "约150万", mau: "约800万", engagement_rate: "45%", retention_7d: "48%", retention_30d: "45%" },
            content_metrics: { challenges: "编程挑战", hiring: "技术招聘" }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约50万",
            user_demographics: { age_range: "20-40岁", gender_ratio: "约80% 男性", region: "全球", income_level: "中高" },
            usage_patterns: { avg_session_duration: "约40分钟/天", engagement_rate: "40%" }
        },
        business_model: {
            revenue_streams: [{ type: "竞赛奖金与外包", percentage: 50, description: "竞赛、众包" }, { type: "企业服务", percentage: 50, description: "技术外包" }],
            monetization_strategy: "竞赛与企业服务"
        },
        key_metrics: {
            core_metrics: { dau: "约10万", mau: "约50万", engagement_rate: "40%", retention_7d: "42%", retention_30d: "38%" },
            content_metrics: { contests: "算法与设计竞赛", rating: "Rating 排名" }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约200万",
            user_demographics: { age_range: "22-40岁", gender_ratio: "约75% 男性", region: "全球", income_level: "中高" },
            usage_patterns: { avg_session_duration: "约25分钟/天", engagement_rate: "50%" }
        },
        business_model: {
            revenue_streams: [{ type: "导师抽成", percentage: 85, description: "会话佣金" }, { type: "企业服务", percentage: 15, description: "团队与招聘" }],
            monetization_strategy: "交易抽成"
        },
        key_metrics: {
            core_metrics: { dau: "约30万", mau: "约200万", engagement_rate: "50%", retention_7d: "52%", retention_30d: "48%" },
            content_metrics: { sessions: "一对一指导", reviews: "评价体系" }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约500万",
            user_demographics: { age_range: "18-35岁", gender_ratio: "约70% 男性", region: "全球", income_level: "多元" },
            usage_patterns: { avg_session_duration: "约30分钟/天", engagement_rate: "55%" }
        },
        business_model: {
            revenue_streams: [{ type: "订阅", percentage: 80, description: "Replit Teams、Pro" }, { type: "教育与企业", percentage: 20, description: "教育、企业" }],
            monetization_strategy: "Freemium 订阅"
        },
        key_metrics: {
            core_metrics: { dau: "约100万", mau: "约500万", engagement_rate: "55%", retention_7d: "58%", retention_30d: "52%" },
            content_metrics: { repls: "在线项目", ai: "AI 辅助编程" }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约300万",
            user_demographics: { age_range: "22-40岁", gender_ratio: "约70% 男性", region: "全球", income_level: "中高" },
            usage_patterns: { avg_session_duration: "约20分钟/天", engagement_rate: "50%" }
        },
        business_model: {
            revenue_streams: [{ type: "订阅", percentage: 70, description: "Pro、Teams" }, { type: "其他", percentage: 30, description: "企业、教育" }],
            monetization_strategy: "Freemium 订阅"
        },
        key_metrics: {
            core_metrics: { dau: "约60万", mau: "约300万", engagement_rate: "50%", retention_7d: "52%", retention_30d: "48%" },
            content_metrics: { sandboxes: "在线项目", embed: "嵌入与协作" }
        }
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
        ],
        user_metrics: {
            monthly_active_users: "约500万",
            user_demographics: { age_range: "18-35岁", gender_ratio: "女性与多元", region: "全球", income_level: "多元" },
            usage_patterns: { avg_session_duration: "约15分钟/天", engagement_rate: "55%" }
        },
        business_model: {
            revenue_streams: [{ type: "订阅", percentage: 60, description: "Her Premium" }, { type: "广告", percentage: 40, description: "信息流广告" }],
            monetization_strategy: "订阅+广告"
        },
        key_metrics: {
            core_metrics: { dau: "约100万", mau: "约500万", engagement_rate: "55%", retention_7d: "58%", retention_30d: "52%" },
            content_metrics: { matches: "匹配与聊天", events: "活动与社区" }
        }
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
        ],
        user_metrics: { monthly_active_users: "约200万", user_demographics: { age_range: "18-35岁", gender_ratio: "多元", region: "全球", income_level: "多元" }, usage_patterns: { engagement_rate: "50%" } },
        business_model: { revenue_streams: [{ type: "订阅", percentage: 70, description: "Lex Premium" }], monetization_strategy: "订阅" },
        key_metrics: { core_metrics: { dau: "约40万", mau: "约200万", engagement_rate: "50%", retention_7d: "52%", retention_30d: "48%" } }
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
        ],
        user_metrics: { monthly_active_users: "约2500万", user_demographics: { age_range: "18-45岁", gender_ratio: "男性为主", region: "全球", income_level: "多元" }, usage_patterns: { engagement_rate: "55%" } },
        business_model: { revenue_streams: [{ type: "订阅", percentage: 50, description: "Premium" }, { type: "广告", percentage: 50, description: "信息流" }], monetization_strategy: "订阅+广告" },
        key_metrics: { core_metrics: { dau: "约500万", mau: "约2500万", engagement_rate: "55%", retention_7d: "58%", retention_30d: "52%" } }
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
        ],
        user_metrics: { monthly_active_users: "约500万", user_demographics: { age_range: "18-40岁", gender_ratio: "男性为主", region: "全球", income_level: "多元" }, usage_patterns: { engagement_rate: "50%" } },
        business_model: { revenue_streams: [{ type: "订阅", percentage: 55, description: "Premium" }, { type: "广告", percentage: 45, description: "信息流" }], monetization_strategy: "订阅+广告" },
        key_metrics: { core_metrics: { dau: "约100万", mau: "约500万", engagement_rate: "50%", retention_7d: "52%", retention_30d: "48%" } }
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
        ],
        user_metrics: { monthly_active_users: "约1000万", user_demographics: { age_range: "18-35岁", gender_ratio: "多元", region: "全球", income_level: "多元" }, usage_patterns: { engagement_rate: "55%" } },
        business_model: { revenue_streams: [{ type: "订阅", percentage: 60, description: "Taimi Premium" }, { type: "广告", percentage: 40, description: "信息流" }], monetization_strategy: "订阅+广告" },
        key_metrics: { core_metrics: { dau: "约200万", mau: "约1000万", engagement_rate: "55%", retention_7d: "58%", retention_30d: "52%" } }
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
        ],
        user_metrics: { monthly_active_users: "约300万", user_demographics: { age_range: "25-45岁", gender_ratio: "多元", region: "欧美", income_level: "中高" }, usage_patterns: { engagement_rate: "52%" } },
        business_model: { revenue_streams: [{ type: "订阅", percentage: 90, description: "Feeld Premium" }], monetization_strategy: "订阅" },
        key_metrics: { core_metrics: { dau: "约60万", mau: "约300万", engagement_rate: "52%", retention_7d: "54%", retention_30d: "50%" } }
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
        ],
        user_metrics: { monthly_active_users: "约800万", user_demographics: { age_range: "18-40岁", gender_ratio: "男性为主", region: "中国", income_level: "多元" }, usage_patterns: { engagement_rate: "58%" } },
        business_model: { revenue_streams: [{ type: "直播打赏", percentage: 60, description: "直播" }, { type: "广告", percentage: 40, description: "信息流" }], monetization_strategy: "直播+广告" },
        key_metrics: { core_metrics: { dau: "约200万", mau: "约800万", engagement_rate: "58%", retention_7d: "60%", retention_30d: "55%" } }
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
        ],
        user_metrics: { monthly_active_users: "约200万", user_demographics: { age_range: "18-35岁", gender_ratio: "男性为主", region: "中国", income_level: "多元" }, usage_patterns: { engagement_rate: "45%" } },
        business_model: { revenue_streams: [{ type: "订阅", percentage: 50, description: "会员" }, { type: "广告", percentage: 50, description: "信息流" }], monetization_strategy: "订阅+广告" },
        key_metrics: { core_metrics: { dau: "约40万", mau: "约200万", engagement_rate: "45%", retention_7d: "48%", retention_30d: "42%" } }
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
        ],
        user_metrics: { monthly_active_users: "约300万", user_demographics: { age_range: "18-35岁", gender_ratio: "女性为主", region: "中国", income_level: "多元" }, usage_patterns: { engagement_rate: "48%" } },
        business_model: { revenue_streams: [{ type: "订阅", percentage: 45, description: "会员" }, { type: "广告", percentage: 55, description: "信息流" }], monetization_strategy: "订阅+广告" },
        key_metrics: { core_metrics: { dau: "约60万", mau: "约300万", engagement_rate: "48%", retention_7d: "50%", retention_30d: "45%" } }
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
        ],
        user_metrics: { monthly_active_users: "约200万", user_demographics: { age_range: "25-45岁", gender_ratio: "均衡", region: "台湾为主", income_level: "多元" }, usage_patterns: { engagement_rate: "50%" } },
        business_model: { revenue_streams: [{ type: "会员", percentage: 40, description: "Plurk 会员" }, { type: "广告", percentage: 60, description: "信息流" }], monetization_strategy: "会员+广告" },
        key_metrics: { core_metrics: { dau: "约40万", mau: "约200万", engagement_rate: "50%", retention_7d: "52%", retention_30d: "48%" } }
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
        ],
        user_metrics: { monthly_active_users: "约500万", user_demographics: { age_range: "30-55岁", gender_ratio: "均衡", region: "日本", income_level: "多元" }, usage_patterns: { engagement_rate: "40%" } },
        business_model: { revenue_streams: [{ type: "广告", percentage: 80, description: "展示与信息流" }, { type: "游戏与增值", percentage: 20, description: "游戏、虚拟物品" }], monetization_strategy: "广告为主" },
        key_metrics: { core_metrics: { dau: "约150万", mau: "约500万", engagement_rate: "40%", retention_7d: "42%", retention_30d: "38%" } }
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
        ],
        user_metrics: { monthly_active_users: "约500万", user_demographics: { age_range: "30-50岁", gender_ratio: "均衡", region: "韩国", income_level: "多元" }, usage_patterns: { engagement_rate: "35%" } },
        business_model: { revenue_streams: [{ type: "虚拟物品", percentage: 50, description: "迷你屋装扮" }, { type: "广告", percentage: 50, description: "展示广告" }], monetization_strategy: "虚拟物品+广告" },
        key_metrics: { core_metrics: { dau: "约150万", mau: "约500万", engagement_rate: "35%", retention_7d: "38%", retention_30d: "32%" } }
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
        ],
        user_metrics: { monthly_active_users: "约1000万（巅峰已过）", user_demographics: { age_range: "25-45岁", gender_ratio: "均衡", region: "拉美等", income_level: "多元" }, usage_patterns: { engagement_rate: "35%" } },
        business_model: { revenue_streams: [{ type: "广告", percentage: 70, description: "展示" }, { type: "游戏", percentage: 30, description: "内购" }], monetization_strategy: "广告+游戏" },
        key_metrics: { core_metrics: { dau: "估算", mau: "约1000万", engagement_rate: "35%", retention_7d: "38%", retention_30d: "32%" } }
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
        ],
        user_metrics: { monthly_active_users: "已关闭", user_demographics: { age_range: "历史", gender_ratio: "均衡", region: "巴西、印度等", income_level: "多元" }, usage_patterns: { engagement_rate: "历史" } },
        business_model: { revenue_streams: [{ type: "广告", percentage: 100, description: "未规模化" }], monetization_strategy: "广告，已关闭" },
        key_metrics: { core_metrics: { dau: "历史", mau: "历史", engagement_rate: "历史", retention_7d: "历史", retention_30d: "历史" } }
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
        ],
        user_metrics: { monthly_active_users: "历史", user_demographics: { age_range: "历史", gender_ratio: "均衡", region: "全球", income_level: "多元" }, usage_patterns: { engagement_rate: "历史" } },
        business_model: { revenue_streams: [{ type: "广告", percentage: 100, description: "未规模化" }], monetization_strategy: "广告，已转型" },
        key_metrics: { core_metrics: { dau: "历史", mau: "历史", engagement_rate: "历史", retention_7d: "历史", retention_30d: "历史" } }
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
        ],
        user_metrics: { monthly_active_users: "曾约2000万", user_demographics: { age_range: "25-40岁", gender_ratio: "均衡", region: "全球", income_level: "中高" }, usage_patterns: { engagement_rate: "历史" } },
        business_model: { revenue_streams: [{ type: "订阅", percentage: 100, description: "未规模化" }], monetization_strategy: "订阅，已关闭" },
        key_metrics: { core_metrics: { dau: "历史", mau: "历史", engagement_rate: "历史", retention_7d: "历史", retention_30d: "历史" } }
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
        ],
        user_metrics: { monthly_active_users: "约100万", user_demographics: { age_range: "25-45岁", gender_ratio: "均衡", region: "全球", income_level: "中高" }, usage_patterns: { engagement_rate: "45%" } },
        business_model: { revenue_streams: [{ type: "会员", percentage: 100, description: "创作者与用户订阅" }], monetization_strategy: "无广告订阅" },
        key_metrics: { core_metrics: { dau: "约20万", mau: "约100万", engagement_rate: "45%", retention_7d: "48%", retention_30d: "42%" } }
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
        ],
        user_metrics: { monthly_active_users: "约50万", user_demographics: { age_range: "25-45岁", gender_ratio: "均衡", region: "全球", income_level: "多元" }, usage_patterns: { engagement_rate: "40%" } },
        business_model: { revenue_streams: [{ type: "捐赠", percentage: 100, description: "社区与基金会" }], monetization_strategy: "非营利捐赠" },
        key_metrics: { core_metrics: { dau: "约10万", mau: "约50万", engagement_rate: "40%", retention_7d: "42%", retention_30d: "38%" } }
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
        ],
        user_metrics: { monthly_active_users: "曾约500万", user_demographics: { age_range: "18-25岁", gender_ratio: "均衡", region: "美国校园", income_level: "学生" }, usage_patterns: { engagement_rate: "历史" } },
        business_model: { revenue_streams: [{ type: "广告", percentage: 100, description: "未规模化" }], monetization_strategy: "广告，已关闭/重启" },
        key_metrics: { core_metrics: { dau: "历史", mau: "历史", engagement_rate: "历史", retention_7d: "历史", retention_30d: "历史" } }
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
    // === 新增案例：国际社区产品 ===
    },
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
    // === 新增案例：垂直社区 - 运动健身 ===
    },
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
        ],
        user_metrics: { monthly_active_users: "约4000万", user_demographics: { age_range: "22-45岁", gender_ratio: "约55% 女性", region: "中国", income_level: "多元" }, usage_patterns: { engagement_rate: "55%" } },
        business_model: { revenue_streams: [{ type: "会员", percentage: 40, description: "Keep 会员" }, { type: "电商", percentage: 35, description: "运动装备" }, { type: "广告与线下", percentage: 25, description: "广告、健身房" }], monetization_strategy: "会员+电商+线下" },
        key_metrics: { core_metrics: { dau: "约1000万", mau: "约4000万", engagement_rate: "55%", retention_7d: "58%", retention_30d: "52%" } }
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
        ],
        user_metrics: { monthly_active_users: "约3000万", user_demographics: { age_range: "25-45岁", gender_ratio: "均衡", region: "全球", income_level: "多元" }, usage_patterns: { engagement_rate: "50%" } },
        business_model: { revenue_streams: [{ type: "品牌工具", percentage: 100, description: "Nike 品牌，间接促进销售" }], monetization_strategy: "品牌营销" },
        key_metrics: { core_metrics: { dau: "约500万", mau: "约3000万", engagement_rate: "50%", retention_7d: "52%", retention_30d: "48%" } }
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
        ],
        user_metrics: {
            monthly_active_users: "约1.5亿",
            daily_active_users: "约3000万",
            total_users: "约2亿+ 创作者与听众",
            growth_rate: "约5%",
            retention_rate: "约50%",
            user_demographics: {
                age_range: "18-45岁，独立音乐与播客听众",
                gender_ratio: "相对均衡",
                region: "全球，欧美为主",
                income_level: "多元"
            },
            usage_patterns: {
                avg_session_duration: "约40分钟/天",
                sessions_per_day: "2次",
                content_creation_rate: "创作者上传与播客",
                engagement_rate: "48%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅", percentage: 50, description: "SoundCloud Go+" },
                { type: "广告", percentage: 35, description: "免费版广告" },
                { type: "分发与授权", percentage: 15, description: "音乐分发" }
            ],
            monetization_strategy: "订阅 + 广告 + 分发",
            financial_metrics: {
                annual_revenue: "约2-3亿美元级",
                revenue_growth: "个位数",
                profitability: "接近盈亏平衡",
                valuation: "曾多次融资与重组"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约3000万",
                mau: "约1.5亿",
                engagement_rate: "48%",
                retention_7d: "50%",
                retention_30d: "50%"
            },
            content_metrics: {
                tracks_uploaded: "数亿条音频",
                creators: "数百万创作者",
                podcasts: "播客与音乐"
            },
            business_metrics: {
                arpu: "约15美元/年",
                ltv: "中",
                cac: "口碑与音乐圈",
                conversion_rate: "免费转 Go+ 约3%"
            }
        }
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
        ],
        user_metrics: { monthly_active_users: "约500万", user_demographics: { age_range: "22-45岁", gender_ratio: "均衡", region: "全球", income_level: "多元" }, usage_patterns: { engagement_rate: "55%" } },
        business_model: { revenue_streams: [{ type: "销售分成", percentage: 85, description: "艺术家 85-90%" }, { type: "其他", percentage: 15, description: "Bandcamp Fridays 等" }], monetization_strategy: "销售分成（Epic 旗下）" },
        key_metrics: { core_metrics: { dau: "约100万", mau: "约500万", engagement_rate: "55%", retention_7d: "58%", retention_30d: "52%" } }
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
        ],
    
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
        ],
    
    // === 新增案例：垂直社区 - 教育学习 ===
    },
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
        ],
        user_metrics: {
            monthly_active_users: "约5000万",
            daily_active_users: "约800万",
            total_users: "约6000万+",
            growth_rate: "约10%",
            retention_rate: "约40%",
            user_demographics: {
                age_range: "25-45岁，职场与技能学习",
                gender_ratio: "约55% 女性，45% 男性",
                region: "全球，美国、印度为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "约25分钟/周",
                sessions_per_day: "按需",
                content_creation_rate: "讲师创建课程",
                engagement_rate: "完成率约15%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "课程销售分成", percentage: 85, description: "平台约30%，创作者约70%" },
                { type: "企业 Udemy Business", percentage: 15, description: "B2B 订阅" }
            ],
            monetization_strategy: "课程交易抽成 + 企业订阅",
            financial_metrics: {
                annual_revenue: "约7亿美元 (2023)",
                revenue_growth: "约10% YoY",
                profitability: "盈利",
                valuation: "上市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "约800万",
                mau: "约5000万",
                engagement_rate: "40%",
                retention_7d: "42%",
                retention_30d: "40%"
            },
            content_metrics: {
                courses: "20万+ 课程",
                instructors: "7万+ 讲师",
                completion_rate: "约15%"
            },
            business_metrics: {
                arpu: "约120美元/年",
                ltv: "中高",
                cac: "品牌与促销",
                conversion_rate: "促销转化高"
            }
        }
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
        ],
        user_metrics: { monthly_active_users: "约1200万", user_demographics: { age_range: "22-45岁", gender_ratio: "约55% 女性", region: "全球", income_level: "中高" }, usage_patterns: { engagement_rate: "48%" } },
        business_model: { revenue_streams: [{ type: "订阅", percentage: 85, description: "Skillshare 会员" }, { type: "企业", percentage: 15, description: "团队与教育" }], monetization_strategy: "订阅制" },
        key_metrics: { core_metrics: { dau: "约200万", mau: "约1200万", engagement_rate: "48%", retention_7d: "50%", retention_30d: "45%" } }
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
        ],
    
    // === 新增案例：垂直社区 - 旅行 ===
    },
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
        ],
    
    // === 新增案例：Web3/去中心化 ===
    },
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
        ],
        user_metrics: {
            monthly_active_users: "50万+（峰值更高）",
            daily_active_users: "15万+",
            total_users: "100万+",
            growth_rate: "波动大，热度后下降",
            retention_rate: "40%",
            user_demographics: {
                age_range: "22-38岁为主，加密与投机用户",
                gender_ratio: "80% 男性，20% 女性",
                region: "美国、加密活跃地区",
                income_level: "加密持有与投机用户"
            },
            usage_patterns: {
                avg_session_duration: "20分钟/天",
                sessions_per_day: "3次",
                content_creation_rate: "5%",
                engagement_rate: "55%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "交易手续费", percentage: 100, description: "Keys 买卖与聊天相关手续费分成" }
            ],
            monetization_strategy: "交易手续费分成，与创作者/用户分享",
            financial_metrics: {
                annual_revenue: "峰值高，波动大",
                revenue_growth: "热度驱动",
                profitability: "依赖交易量与热度",
                valuation: "融资与生态估值"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Farcaster", similarity: 60, position: "去中心化社交协议竞品" },
                { name: "其他社交代币/粉丝代币", similarity: 50, position: "代币化社交竞品" }
            ],
            market_position: "Base 链上社交代币化代表产品",
            market_share: "社交代币化细分领先过",
            competitive_advantages: [
                "Keys 与私聊绑定创新",
                "Base 链低成本与 Coinbase 生态",
                "投机与社交结合拉新快"
            ],
            competitive_disadvantages: [
                "监管风险高",
                "投机性强、留存差",
                "可持续性与合规存疑"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Base 链（Layer 2）智能合约",
                "Keys 与 Bonding Curve",
                "聊天与权限绑定",
                "交易与分成结算"
            ],
            tech_features: [
                "Keys 买卖与 Bonding Curve",
                "Keys 持有者私聊",
                "交易手续费分成",
                "与 Base 生态集成"
            ],
            tech_challenges: [
                "监管与合规",
                "投机与留存平衡",
                "Keys 价格波动与体验",
                "可持续商业模式"
            ]
        },
        product_features: {
            core_features: [
                { name: "Keys", description: "用户份额化、买卖与 Bonding Curve", importance: "核心功能" },
                { name: "私聊", description: "Keys 持有者间私密聊天", importance: "核心功能" },
                { name: "交易市场", description: "Keys 买卖与价格发现", importance: "核心功能" },
                { name: "分成", description: "交易手续费与创作者/用户分成", importance: "核心功能" }
            ],
            innovative_features: [
                "社交关系 Keys 化与金融化",
                "Keys 与私聊权限绑定",
                "Base 链与 Coinbase 生态"
            ],
            feature_evolution: [
                { year: "2023", feature: "Friend.tech 上线" },
                { year: "2023", feature: "热度与交易量峰值" },
                { year: "2024", feature: "热度回落与监管关注" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "Keys 与聊天驱动，平台不干预内容",
                creator_support: "手续费分成、Keys 价格与曝光",
                content_quality: "底线规则，依赖链上与合规"
            },
            user_operation: {
                acquisition: "加密社区、投机与 FOMO",
                activation: "钱包连接、首笔 Keys 买卖、私聊",
                retention: "Keys 持仓、私聊、交易",
                referral: "分享与邀请"
            },
            event_operation: [
                { name: "上线与热度", impact: "用户与交易量爆发", description: "2023 年 Base 生态爆款" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "15万+（峰值更高）",
                mau: "50万+",
                engagement_rate: "55%",
                retention_7d: "40%",
                retention_30d: "30%"
            },
            content_metrics: {
                daily_trades: "波动大",
                keys_volume: "热度驱动",
                chat_activity: "与 Keys 绑定"
            },
            business_metrics: {
                fee_revenue: "交易手续费分成",
                sustainability: "依赖热度与合规"
            }
        },
        success_factors: [
            "社交代币化概念创新",
            "Base 链与 Coinbase 生态",
            "投机与社交结合拉新快",
            "监管与可持续性是最大风险"
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
        ],
    
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
        ],
    
    // === 继续新增案例 ===
    },
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
    // === 继续新增案例：更多垂直社区 ===
    },
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
    // === 新增案例：音频/播客 ===
    },
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
        ],
    
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
        ],
    
    // === 新增案例：视频直播 ===
    },
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
        ],
    
    // === 新增案例：购物/电商社区 ===
    },
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
        ],
    
    // === 新增案例：创作者经济 ===
    },
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
        ],
    
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
        ],
    
    // === 新增案例：专业社区 ===
    },
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
        ],
    
    // === 新增案例：更多小众社区 ===
    },
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
        ],
    
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
        ],
    
    // === 新增案例：更多社交应用 ===
    },
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
        ],
    
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
        ],
    
    // === 最后一批新增案例 ===
    },
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
    // === 新增案例：更多国际化产品 ===
    },
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
    // === 新增：更多游戏类社区 ===
    },
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
    // === 新增：长尾社区 ===
    },
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
    // === 继续新增：更多游戏类社区 ===
    },
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
    // === 新增：更多小众社区 ===
    },
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
        ],
    
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
        ],
    
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
        ],
    
    // === 新增：更多长尾社区 ===
    },
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
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
        ],
    
    // === 最后一批：更多长尾和小众社区 ===
    },
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
        ],
    
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
        ],
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
        tech_stack: {
            core_technologies: [
                "音频流与离线下载",
                "播客 RSS 与订阅",
                "推荐与发现算法",
                "付费订阅与分成"
            ],
            tech_features: [
                "播客订阅与单集播放",
                "付费专栏与单集付费",
                "评论、点赞、分享",
                "与微信生态打通"
            ],
            tech_challenges: [
                "播客供给与规模化",
                "付费转化与留存",
                "与喜马拉雅等差异化",
                "创作者工具与变现"
            ]
        },
        product_features: {
            core_features: [
                { name: "播客订阅与播放", description: "节目订阅、单集播放、倍速与定时", importance: "核心功能" },
                { name: "付费内容", description: "付费专栏、单集付费、会员", importance: "核心功能" },
                { name: "社区互动", description: "评论、点赞、分享、弹幕", importance: "核心功能" },
                { name: "微信生态", description: "分享、小程序、公众号联动", importance: "核心功能" }
            ],
            innovative_features: [
                "播客垂直与创作者友好",
                "付费订阅与低抽成",
                "与微信生态深度整合"
            ],
            feature_evolution: [
                { year: "2020", feature: "小宇宙上线" },
                { year: "2022", feature: "付费订阅" },
                { year: "2023", feature: "音频直播" },
                { year: "2024", feature: "微信生态深化" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "创作者主导，平台工具与分成，不干预内容",
                creator_support: "低抽成、数据分析、付费与会员工具",
                content_quality: "播客规范与版权，平台辅助审核"
            },
            user_operation: {
                acquisition: "微信分享、搜索与推荐",
                activation: "首播、订阅、评论",
                retention: "订阅更新、付费内容、社区互动",
                referral: "分享节目与单集"
            },
            event_operation: [
                { name: "播客生态拓展", impact: "创作者与听众双增长", description: "垂直播客与付费内容" }
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
        ],
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
        ],
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
        ],
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
        ],
    // === TapTap游戏社区 ===
    },
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
        ],
    // === 好游快爆（4399游戏盒）===
    },
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
        ],
    // === 游戏时光VGTime ===
    },
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
        ],
    // === Molt 生态产品（核心案例）===
    },
        moltbook: {
        title: "MoltBook",
        subtitle: "AI 驱动的阅读与笔记社区",
        dao: "知识沉淀与协作学习。将阅读、笔记、社区融为一体，通过 AI 增强理解与连接。读-记-用形成闭环，从被动消费到主动产出。",
        gov: "产品主导 + 社区共建。核心阅读与 AI 能力由团队把控，社区贡献书单、笔记与讨论，形成内容飞轮。",
        space: "阅读空间（公域书城）+ 笔记工作台（私域知识库）+ 社区讨论（阅读圈子、笔记分享）。公私结合，从输入到输出的完整知识生产环境。",
        econ: "会员订阅 + 增值服务。免费基础阅读与笔记，付费解锁 AI 摘要、无限导出、高级模板。与 MoltTalk、Moltools 生态互通，形成订阅捆绑。",
        risk: "AI 能力依赖与巨头竞争。微信读书、Notion、Flomo 等抢占心智，需在 AI 阅读体验和社区粘性上形成差异化。",
        atomic_unit: "书籍/笔记/高亮/讨论/书单",
        distribution: "社交发现 40% + 算法推荐 35% + 编辑精选 25%",
        death_risk: "定位模糊被巨头碾压，或 AI 能力同质化导致流失",
        tags: ["#AI阅读", "#笔记社区", "#知识管理", "#阅读社交", "#Moltools生态", "#第二大脑"],
        scores: [65, 45, 60, 70, 55],
        timeline: [
            { year: "2024", event: "MoltBook 发布，定位 AI 驱动的阅读与笔记工具，主打读记一体化" },
            { year: "2024", event: "AI 摘要、智能提问、笔记联动等功能上线，与 Moltools 生态打通" },
            { year: "2025", event: "社区功能增强，阅读圈子、书单共创、笔记分享上线" },
            { year: "2025", event: "与 MoltTalk 打通，支持读书会语音讨论、笔记跨产品同步" }
        ],
        key_decisions: [
            "AI 增强阅读，提供摘要、提问、笔记辅助等能力，降低从输入到输出的摩擦",
            "阅读与笔记一体化，高亮自动沉淀为笔记，笔记可反向链接书籍，形成第二大脑",
            "社区化运营，阅读圈子、书单共创、笔记公开分享增强连接与发现",
            "生态协同，与 MoltTalk、Moltools 打通账号与内容，形成 Molt 产品矩阵"
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
                { type: "生态捆绑", percentage: 20, description: "Molt 全家桶：MoltBook + MoltTalk + Moltools 组合订阅" },
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
                "Moltools 生态协同，多产品数据互通",
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
                "与 MoltTalk、Moltools 数据互通"
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
                "Moltools 生态互通（与 MoltTalk、Moltools 打通）"
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
                acquisition: "Moltools 生态导流、内容营销、读书 KOL 合作",
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
            "Moltools 生态协同，多产品互通增强粘性",
            "从轻量场景切入，降低从消费到产出的门槛",
            "种子用户运营，知识工作者与终身学习者口碑传播",
            "与 MoltTalk、Moltools 形成产品矩阵，交叉导流"
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
        tags: ["#AI对话", "#协作社区", "#知识交流", "#Moltools生态"],
        scores: [70, 50, 65, 75, 50],
        timeline: [
            { year: "2024", event: "MoltTalk 发布，主打 AI 增强的团队对话" },
            { year: "2025", event: "社区功能上线，支持公开频道与讨论" }
        ],
        key_decisions: [
            "AI 增强对话，支持摘要、翻译、要点提取",
            "从 B 端协作扩展到 C 端社区场景",
            "与 MoltBook、Moltools 生态打通"
        ],
    },
        moltools: {
        title: "Moltools (moltools.fun)",
        subtitle: "AI 工具箱与创作者社区",
        dao: "工具赋能与创作者经济。提供 AI 工具矩阵，同时构建创作者分享与交流的社区；官网 https://www.moltools.fun/ 。",
        gov: "平台主导 + 创作者自治。平台提供工具与分发，创作者贡献内容与使用案例。",
        space: "工具广场 + 工作台 + 创作者社区。工具使用与经验分享并重。",
        econ: "工具订阅 + 创作者分成 + 企业版。多元化变现模式。",
        risk: "AI 工具同质化严重，需形成差异化与社区壁垒。",
        atomic_unit: "工具/模板/案例/教程",
        distribution: "社区发现 45% + 搜索 35% + 外部引流 20%",
        death_risk: "工具易被模仿，社区粘性不足则难留存",
        tags: ["#AI工具", "#创作者社区", "#工具生态", "#Moltools"],
        scores: [60, 55, 55, 80, 60],
        timeline: [
            { year: "2024", event: "Moltools 上线，整合多款 AI 工具（moltools.fun）" },
            { year: "2025", event: "创作者社区功能完善，模板与案例分享活跃" }
        ],
        key_decisions: [
            "工具矩阵策略，覆盖写作、阅读、对话等多场景",
            "创作者社区建设，通过 UGC 模板和案例增强粘性",
            "与 MoltBook、MoltTalk 形成生态协同"
        ]
    },

    // === 按图标反推补充：知识/媒体/技术社区与AI产品 ===
    dedao: {
        title: "得到 (Dedao)",
        subtitle: "知识服务与终身学习平台",
        dao: "知识付费与系统学习。将碎片化知识产品化，建立学习社区。",
        gov: "平台主导 + 大咖IP。头部讲师与编辑团队把控内容质量。",
        space: "线上课堂 + 听书 + 社区。从课程到每日听书的完整学习场景。",
        econ: "课程付费 + 听书会员 + 企业培训。多层次知识变现。",
        risk: "知识同质化，用户学习完成率低，增长放缓。",
        atomic_unit: "课程/听书/电子书",
        distribution: "订阅分发 50% + 算法推荐 30% + 搜索 20%",
        death_risk: "知识付费退潮与用户留存下降",
        tags: ["#知识付费", "#终身学习", "#听书", "#罗振宇"],
        scores: [55, 50, 65, 60, 75],
        timeline: [
            { year: "2015", event: "得到上线，罗辑思维团队推出知识服务产品" },
            { year: "2016", event: "推出订阅专栏，李笑来、薛兆丰等大咖入驻" },
            { year: "2017", event: "听书业务上线，降低知识获取门槛" },
            { year: "2018", event: "得到大学（现得到高研院）成立，线下学习社区" },
            { year: "2020", event: "企业培训与B端业务拓展" },
            { year: "2023", event: "知识付费行业整体增速放缓，得到探索新增长" }
        ],
        key_decisions: [
            "大咖IP策略，通过罗振宇及头部讲师建立品牌与信任",
            "从专栏到听书的产品矩阵，覆盖不同学习场景与价格带",
            "得到高研院线下社区，增强粘性与高端用户变现",
            "企业培训拓展，从C端知识付费延伸到B端培训"
        ],
    },
        doubao: {
        title: "豆包 (Doubao)",
        subtitle: "字节跳动大模型与AI助手",
        dao: "AI普惠与多场景落地。将大模型能力嵌入搜索、创作、对话等场景。",
        gov: "产品主导。字节统一技术底座，多产品线接入。",
        space: "对话 + 搜索 + 创作工具。C端与B端双线推进。",
        econ: "API与云服务 + 会员增值。与抖音、头条等生态协同。",
        risk: "模型能力与OpenAI/Claude等差距，生态依赖字节系流量。",
        atomic_unit: "对话轮次/API调用/应用",
        distribution: "字节系产品内置 70% + 开放API 30%",
        death_risk: "模型竞争力不足或生态内卷",
        tags: ["#大模型", "#AI助手", "#字节跳动", "#多场景"],
        scores: [50, 65, 60, 85, 70],
        timeline: [
            { year: "2023", event: "豆包大模型对外发布，整合字节AI能力" },
            { year: "2024", event: "多模态与长上下文能力升级，接入抖音、头条等" },
            { year: "2024", event: "火山引擎开放豆包API，拓展B端与开发者生态" }
        ],
        key_decisions: [
            "与字节系产品深度整合，通过抖音、头条等获取场景与数据",
            "开放API与云服务，拓展B端与开发者生态",
            "多模态与长文本能力持续迭代，对标国际领先模型"
        ],
    },
        kr36: {
        title: "36氪 (Kr36)",
        subtitle: "科技创投媒体与创新服务平台",
        dao: "创投信息与创新连接。为创业者、投资人提供资讯与数据。",
        gov: "编辑主导 + 数据产品。原创报道与鲸准等数据工具。",
        space: "媒体 + 数据 + 活动。资讯、研报、峰会形成闭环。",
        econ: "广告 + 会员 + 数据服务 + 活动。多元化变现。",
        risk: "媒体广告下滑，竞品增多，付费数据转化难。",
        atomic_unit: "文章/研报/数据/活动",
        distribution: "订阅与推送 50% + 搜索 30% + 社交 20%",
        death_risk: "收入结构单一与品牌差异化不足",
        tags: ["#科技媒体", "#创投", "#36氪", "#创新服务"],
        scores: [45, 60, 65, 50, 65],
        timeline: [
            { year: "2010", event: "36氪成立，专注科技创投报道" },
            { year: "2015", event: "拓展创投服务与融资对接" },
            { year: "2019", event: "纳斯达克上市" },
            { year: "2021", event: "私有化退市，强化数据与会员业务" },
            { year: "2023", event: "内容与数据双轮驱动，探索AI应用" }
        ],
        key_decisions: [
            "从媒体向「媒体+数据+服务」延伸，提升ARPU与粘性",
            "鲸准等数据产品服务投资人与企业，形成差异化",
            "活动与峰会强化品牌与线下连接"
        ],
    },
        sspai: {
        title: "少数派 (SSPAI)",
        subtitle: "效率工具与数字生活社区",
        dao: "优质教程与工具推荐。帮助用户用好工具、提升效率。",
        gov: "编辑 + 创作者。精选内容与社区投稿并重。",
        space: "文章 + 矩阵 + 社区。从入门到进阶的系统化内容。",
        econ: "会员订阅 + 付费专栏 + 广告。以会员为核心的变现。",
        risk: "受众偏窄，增长天花板低；工具迭代快，内容易过时。",
        atomic_unit: "文章/教程/清单/讨论",
        distribution: "订阅与推送 50% + 搜索 35% + 社交 15%",
        death_risk: "付费转化与规模平衡",
        tags: ["#效率工具", "#数字生活", "#教程", "#社区"],
        scores: [55, 45, 50, 40, 55],
        timeline: [
            { year: "2012", event: "少数派成立，专注效率工具与Mac/iPhone内容" },
            { year: "2016", event: "推出付费专栏与会员体系" },
            { year: "2020", event: "内容拓展至工作流、笔记、自动化等" },
            { year: "2023", event: "持续深耕效率与工具垂类，巩固核心用户" }
        ],
        key_decisions: [
            "垂直效率与工具领域，建立权威与信任",
            "付费专栏与会员制，依赖高质量内容与忠实用户",
            "矩阵与清单类内容降低阅读门槛、提升分享"
        ],
    },
        v2ex: {
        title: "V2EX",
        subtitle: "程序员与创意工作者社区",
        dao: "节点与主题。按节点划分话题，强调讨论质量与氛围。",
        gov: "站长主导 + 社区自治。Livid 一人维护，规则简洁。",
        space: "节点 + 主题 + 回复。无算法，时间序与节点浏览。",
        econ: "无广告、无会员。依赖捐赠与站长个人投入。",
        risk: "规模小、变现弱，依赖个人；国内访问曾有不稳定。",
        atomic_unit: "主题/回复/节点",
        distribution: "节点浏览 60% + 时间线 30% + 搜索 10%",
        death_risk: "可持续性与规模瓶颈",
        tags: ["#程序员", "#社区", "#节点", "#Livid"],
        scores: [65, 55, 40, 10, 15],
        timeline: [
            { year: "2006", event: "V2EX 由 Livid 创建，最初为创意工作者社区" },
            { year: "2012", event: "迁至美国，以程序员与科技讨论为主" },
            { year: "2015", event: "节点与主题结构稳定，形成稳定用户群" },
            { year: "2020", event: "持续小众化运营，无商业化" },
            { year: "2024", event: "仍为中文技术社区重要据点之一" }
        ],
        key_decisions: [
            "极简规则与节点结构，保持讨论质量与氛围",
            "不商业化，依赖社区与站长投入维持运行",
            "海外部署与简洁产品，吸引技术向用户"
        ],
    },
        zhishixingqiu: {
        title: "知识星球 (Zhishixingqiu)",
        subtitle: "知识创作者私域付费社区",
        dao: "付费圈子与深度连接。创作者建星球，粉丝付费加入、深度互动。",
        gov: "星球主自治。平台提供工具与支付，内容与规则由星主负责。",
        space: "星球（圈子） + 帖子 + 问答。封闭式社区，信息仅在星球内。",
        econ: "星球付费 + 平台抽成。星主定价，平台按比例分成。",
        risk: "依赖大V与KOL，中小星主冷启动难；内容合规与版权风险。",
        atomic_unit: "星球/帖子/精华",
        distribution: "星主私域引流 70% + 平台发现 30%",
        death_risk: "头部集中与合规风险",
        tags: ["#知识付费", "#私域", "#圈子", "#KOL"],
        scores: [60, 35, 45, 35, 75],
        timeline: [
            { year: "2016", event: "知识星球上线（原小密圈），主打付费圈子" },
            { year: "2017", event: "更名知识星球，规避敏感词" },
            { year: "2019", event: "大量知识IP与自媒体入驻，成为私域标配" },
            { year: "2022", event: "与微信生态结合，引流与复购为主场景" },
            { year: "2024", event: "持续为知识付费与私域运营重要工具" }
        ],
        key_decisions: [
            "付费圈子形态，将公众号/微博粉丝转化为付费用户",
            "星主自治，降低平台运营与内容审核成本",
            "与微信生态打通，私域引流与复购闭环"
        ],
    },
        zhipu_ai: {
        title: "智谱AI (Zhipu AI)",
        subtitle: "大模型与AI应用公司",
        dao: "通用大模型与垂直落地。GLM系列模型 + ChatGLM、CogView等应用。",
        gov: "技术主导。清华系团队，开源与商业化并行。",
        space: "对话 + 代码 + 多模态。C端产品与B端API并存。",
        econ: "API计费 + 企业合作 + 开源生态。多线变现。",
        risk: "国际巨头与国内大厂挤压，开源与商业平衡。",
        atomic_unit: "API调用/对话轮次/应用",
        distribution: "开放平台与API 60% + 自有产品 40%",
        death_risk: "模型与生态竞争力不足",
        tags: ["#大模型", "#ChatGLM", "#智谱", "#开源"],
        scores: [50, 65, 55, 85, 65],
        timeline: [
            { year: "2019", event: "智谱AI成立，源自清华KEG实验室" },
            { year: "2023", event: "ChatGLM、CogView等产品与开源模型发布" },
            { year: "2024", event: "GLM-4等升级，开放平台与API规模化" },
            { year: "2024", event: "与手机、汽车等厂商合作，多端落地" }
        ],
        key_decisions: [
            "开源与商业并行，通过开源获取开发者与生态",
            "ChatGLM等应用树立品牌，再推API与企业服务",
            "多模态与长文本能力持续迭代"
        ],
    },
        juejin: {
        title: "掘金 (Juejin)",
        subtitle: "中文技术社区与开发者平台",
        dao: "技术内容与成长。文章、沸点、小册形成「学-练-交流」闭环。",
        gov: "平台运营 + 算法。编辑推荐与算法分发结合。",
        space: "文章 + 沸点（动态） + 小册 + 活动。多形态内容。",
        econ: "广告 + 小册付费 + 企业招聘/品牌。多元化变现。",
        risk: "与知乎、CSDN等竞争；内容质量参差，商业化依赖广告。",
        atomic_unit: "文章/沸点/小册/活动",
        distribution: "算法推荐 50% + 订阅与关注 30% + 搜索 20%",
        death_risk: "内容同质化与商业化压力",
        tags: ["#技术社区", "#掘金", "#字节", "#开发者"],
        scores: [60, 65, 60, 65, 70],
        timeline: [
            { year: "2015", event: "掘金上线，专注技术文章与分享" },
            { year: "2017", event: "沸点（动态）上线，强化社区互动" },
            { year: "2018", event: "小册付费专栏上线" },
            { year: "2020", event: "并入字节跳动，与飞书等协同" },
            { year: "2023", event: "持续为国内主流技术内容平台之一" }
        ],
        key_decisions: [
            "文章 + 沸点 + 小册组合，覆盖学习、交流与深度内容",
            "算法与编辑结合，平衡质量与活跃度",
            "并入字节后借助流量与招聘场景变现"
        ],
    },
        lizhi_fm: {
        title: "荔枝 (Lizhi FM)",
        subtitle: "UGC音频与播客平台",
        dao: "人人可播。降低录音与分发门槛，UGC播客与直播并存。",
        gov: "平台主导。内容审核与推荐算法把控。",
        space: "播客 + 直播 + 语音房。从录播到实时语音。",
        econ: "虚拟礼物 + 会员 + 广告。直播与语音房贡献主要收入。",
        risk: "与喜马拉雅、小宇宙等差异化不足；直播监管与合规。",
        atomic_unit: "节目/单集/直播/语音房",
        distribution: "算法推荐 50% + 订阅 30% + 直播 20%",
        death_risk: "竞争与合规压力",
        tags: ["#音频", "#播客", "#UGC", "#直播"],
        scores: [55, 55, 60, 65, 70],
        timeline: [
            { year: "2013", event: "荔枝FM上线，主打手机录播与播客" },
            { year: "2016", event: "语音直播与语音房上线" },
            { year: "2020", event: "纳斯达克上市" },
            { year: "2022", event: "更名为「荔枝」，强化语音社交与直播" },
            { year: "2024", event: "播客与直播双线运营" }
        ],
        key_decisions: [
            "从录播播客扩展到直播与语音房，拓宽变现与留存",
            "UGC策略降低内容成本，依赖社区与主播生态",
            "上市后平衡增长与合规、利润"
        ],
    },
        wenxin_yiyan: {
        title: "文心一言 (Wenxin Yiyan)",
        subtitle: "百度大模型与AI助手",
        dao: "搜索与AI结合。将大模型能力融入搜索、云、智能硬件。",
        gov: "百度统一技术品牌。与搜索、Apollo、小度等深度整合。",
        space: "对话 + 搜索 + 创作 + 企业API。多端多场景。",
        econ: "API与云服务 + 会员 + 广告协同。与百度生态强绑定。",
        risk: "模型口碑与OpenAI/Claude有差距；依赖搜索与百度生态。",
        atomic_unit: "对话轮次/API调用/应用",
        distribution: "百度系产品内置 60% + 开放API 40%",
        death_risk: "模型与生态竞争力不足",
        tags: ["#大模型", "#百度", "#文心", "#搜索"],
        scores: [50, 60, 60, 80, 70],
        timeline: [
            { year: "2023", event: "文心一言对外发布，整合百度大模型能力" },
            { year: "2024", event: "文心大模型迭代，多模态与长文本能力升级" },
            { year: "2024", event: "与搜索、地图、小度等全系产品打通" },
            { year: "2024", event: "千帆平台开放API，拓展B端与开发者" }
        ],
        key_decisions: [
            "与搜索深度结合，用AI重构搜索与信息获取",
            "全系产品接入，通过搜索与智能硬件获取场景与数据",
            "千帆开放平台拓展B端与行业落地"
        ],
    },
        tongyi_qianwen: {
        title: "通义千问 (Tongyi Qianwen)",
        subtitle: "阿里云大模型与AI服务",
        dao: "云上AI与生态开放。大模型作为云能力对外输出。",
        gov: "阿里云主导。与钉钉、电商、云产品协同。",
        space: "对话 + 代码 + 多模态 + 企业方案。C端与B端并重。",
        econ: "云与API计费 + 钉钉等场景增值。强B端属性。",
        risk: "C端声量弱于竞品；模型与生态需持续投入。",
        atomic_unit: "API调用/对话轮次/应用",
        distribution: "阿里云与钉钉场景 50% + 开放API 50%",
        death_risk: "云与模型竞争加剧",
        tags: ["#大模型", "#阿里云", "#通义", "#钉钉"],
        scores: [45, 60, 55, 80, 70],
        timeline: [
            { year: "2023", event: "通义千问发布，阿里云大模型品牌" },
            { year: "2024", event: "通义系列模型升级，多模态与长文本" },
            { year: "2024", event: "与钉钉、淘宝等场景深度整合" },
            { year: "2024", event: "开源与API齐推，拓展开发者与行业" }
        ],
        key_decisions: [
            "云与AI一体，大模型作为云能力输出，强化B端粘性",
            "钉钉、电商等场景落地，获取数据与场景优势",
            "开源与商业并行，扩大生态与影响力"
        ],
    },
        minimax: {
        title: "Minimax",
        subtitle: "AI大模型与多模态应用",
        dao: "多模态与对话。文本、语音、图像一体化生成与交互。",
        gov: "技术驱动。专注模型与产品体验。",
        space: "对话 + 语音 + 图像。C端产品与API。",
        econ: "API与C端会员。面向创作者与开发者。",
        risk: "与巨头及垂直竞品竞争；规模与变现平衡。",
        atomic_unit: "对话/语音/图像生成/API调用",
        distribution: "自有产品 50% + API 50%",
        death_risk: "模型与产品差异化不足",
        tags: ["#大模型", "#多模态", "#Minimax", "#AI"],
        scores: [50, 60, 50, 80, 60],
        timeline: [
            { year: "2023", event: "Minimax 大模型与产品对外亮相" },
            { year: "2024", event: "多模态与语音能力升级，API开放" },
            { year: "2024", event: "与部分手机、应用厂商合作落地" }
        ],
        key_decisions: [
            "多模态一体化，文本、语音、图像统一体验",
            "C端产品与API双线，兼顾品牌与规模",
            "聚焦体验与场景，寻求差异化"
        ],
    },
        zero_one_world: {
        title: "零一万物 (Zero One World)",
        subtitle: "AI大模型与产品公司",
        dao: "模型与产品并重。Yi 系列大模型 + 终端与API落地。",
        gov: "产品与技术双驱动。李开复带队，强调落地与生态。",
        space: "对话 + API + 终端合作。多端多场景。",
        econ: "API与终端分成 + 企业合作。",
        risk: "巨头与国内大厂挤压；生态与规模需时间积累。",
        atomic_unit: "对话/API调用/应用",
        distribution: "开放API 50% + 终端与合作 50%",
        death_risk: "模型与生态竞争力",
        tags: ["#大模型", "#Yi", "#零一万物", "#李开复"],
        scores: [45, 55, 50, 75, 55],
        timeline: [
            { year: "2023", event: "零一万物成立，李开复带队" },
            { year: "2023", event: "Yi 大模型发布，开源与API并行" },
            { year: "2024", event: "Yi 系列迭代，与终端厂商合作落地" }
        ],
        key_decisions: [
            "开源与商业并行，以 Yi 品牌建立开发者认知",
            "与手机、PC 等终端合作，拓宽触达与场景",
            "团队与品牌背书，争取资本与合作资源"
        ],
    },
        xingye: {
        title: "星野 (Xingye)",
        subtitle: "知识社区与内容平台",
        dao: "知识分享与社群。聚焦垂直领域的内容与连接。",
        gov: "平台运营。内容审核与推荐。",
        space: "内容 + 社群 + 互动。",
        econ: "会员或内容付费。",
        risk: "规模与变现依赖垂直用户与内容质量。",
        atomic_unit: "内容/社群/互动",
        distribution: "推荐与订阅",
        death_risk: "增长与留存",
        tags: ["#知识社区", "#星野", "#内容"],
        scores: [50, 45, 50, 45, 50],
        timeline: [
            { year: "2020", event: "星野上线" },
            { year: "2023", event: "垂直知识社区运营" }
        ],
        key_decisions: [
            "垂直知识社区定位",
            "内容与社群结合",
            "探索可持续变现"
        ],
    },
        huxiu: {
        title: "虎嗅 (Huxiu)",
        subtitle: "科技商业媒体",
        dao: "商业与科技报道。为创业者与从业者提供资讯与观点。",
        gov: "编辑主导。原创与精选内容。",
        space: "文章 + 活动 + 研报。媒体与线下结合。",
        econ: "广告 + 活动 + 会员/付费内容。",
        risk: "媒体广告承压，竞品多，付费转化有限。",
        atomic_unit: "文章/活动/研报",
        distribution: "订阅与推送 50% + 搜索 30% + 社交 20%",
        death_risk: "收入与差异化",
        tags: ["#科技媒体", "#虎嗅", "#商业"],
        scores: [40, 55, 60, 40, 55],
        timeline: [
            { year: "2012", event: "虎嗅网上线" },
            { year: "2015", event: "拓展活动与商业化" },
            { year: "2020", event: "持续科技商业报道与活动" },
            { year: "2024", event: "内容与活动双线运营" }
        ],
        key_decisions: [
            "科技商业垂直定位",
            "原创与观点建立影响力",
            "活动与内容联动变现"
        ],
    },
        qdaily: {
        title: "好奇心日报 (QDaily)",
        subtitle: "商业与生活方式媒体",
        dao: "商业、设计、城市与生活方式。选题独特，面向年轻读者。",
        gov: "编辑主导。原创报道与特稿。",
        space: "文章 + 栏目 + 专题。",
        econ: "广告。曾尝试付费与电商。",
        risk: "曾停更与重组；广告依赖强，变现单一。",
        atomic_unit: "文章/栏目",
        distribution: "推送与订阅 60% + 搜索 40%",
        death_risk: "可持续运营与变现",
        tags: ["#媒体", "#好奇心日报", "#商业", "#生活方式"],
        scores: [35, 50, 55, 30, 45],
        timeline: [
            { year: "2014", event: "好奇心日报上线" },
            { year: "2018", event: "影响力与用户增长高峰" },
            { year: "2020", event: "停更与调整" },
            { year: "2022", event: "部分恢复更新" }
        ],
        key_decisions: [
            "独特选题与编辑风格建立辨识度",
            "依赖广告，曾探索付费与电商",
            "经历停更与重组，探索可持续模式"
        ],
    },
        talkie: {
        title: "Talkie",
        subtitle: "AI语音社交与角色对话",
        dao: "AI角色与语音互动。用户与AI角色进行语音对话与陪伴。",
        gov: "产品主导。角色与内容由平台与创作者提供。",
        space: "角色 + 语音对话 + 社区。",
        econ: "会员与虚拟物品。",
        risk: "内容合规与成瘾争议；竞品与替代品增多。",
        atomic_unit: "角色/语音对话/互动",
        distribution: "推荐与搜索",
        death_risk: "合规与留存",
        tags: ["#AI社交", "#语音", "#角色", "#陪伴"],
        scores: [60, 50, 55, 75, 60],
        timeline: [
            { year: "2023", event: "Talkie 等 AI 语音社交产品兴起" },
            { year: "2024", event: "AI 角色与语音互动形态成熟" }
        ],
        key_decisions: [
            "AI 角色 + 语音降低互动门槛",
            "陪伴与情感需求切入",
            "合规与长期留存挑战"
        ],
    },
        nami_ai: {
        title: "Nami AI",
        subtitle: "AI应用与工具",
        dao: "AI能力产品化。面向特定场景的AI工具或助手。",
        gov: "产品主导。",
        space: "对话或工具场景。",
        econ: "订阅或API。",
        risk: "竞争与差异化。",
        atomic_unit: "对话/任务",
        distribution: "产品与渠道",
        death_risk: "产品与商业化",
        tags: ["#AI", "#工具"],
        scores: [45, 55, 50, 70, 55],
        timeline: [
            { year: "2023", event: "Nami AI 产品上线" },
            { year: "2024", event: "迭代与场景拓展" }
        ],
        key_decisions: [
            "场景化AI应用",
            "订阅或API变现",
            "差异化与留存"
        ]
    },

    // === 继续反推：图标有、案例无（AI/开发者/工具）===
    character_ai: {
        title: "Character.AI",
        subtitle: "AI角色对话与创作社区",
        dao: "用户与AI角色对话、共创。角色由社区或官方创建，形成角色生态。",
        gov: "平台主导 + 创作者角色。内容与角色审核，创作者可发布角色。",
        space: "角色列表 + 对话 + 社区。公开对话可被浏览，形成内容飞轮。",
        econ: "订阅会员（c.ai+）。优先响应与高级功能。",
        risk: "与ChatGPT等通用对话竞争；角色质量与合规压力。",
        atomic_unit: "角色/对话轮次/公开对话",
        distribution: "推荐与搜索 60% + 社区发现 40%",
        death_risk: "通用AI替代与商业化天花板",
        tags: ["#AI对话", "#角色", "#社区", "#Character.AI"],
        scores: [70, 55, 60, 85, 55],
        timeline: [
            { year: "2022", event: "Character.AI 由 Noam Shazeer 等创立并上线" },
            { year: "2023", event: "用户与对话量爆发，成为现象级AI产品" },
            { year: "2023", event: "推出 c.ai+ 订阅，探索商业化" },
            { year: "2024", event: "多模态与语音能力，与通用AI竞品并存" }
        ],
        key_decisions: [
            "角色优先而非通用助手，形成差异化与社区粘性",
            "公开对话可被浏览，形成内容与传播飞轮",
            "订阅制优先响应，平衡免费与付费体验"
        ],
    },
        civitai: {
        title: "Civitai",
        subtitle: "AI图像模型与提示词社区",
        dao: "模型、LoRA、提示词共享。创作者发布模型与样图，用户下载与讨论。",
        gov: "社区自治 + 平台规则。内容审核，评分与举报机制。",
        space: "模型库 + 图片流 + 讨论。以模型为中心的内容与社交。",
        econ: "创作者打赏 + 会员/加速下载。依赖社区与创作者生态。",
        risk: "版权与合规风险；与官方模型商店竞争。",
        atomic_unit: "模型/LoRA/图片/提示词",
        distribution: "搜索与分类 50% + 推荐 40% + 社交 10%",
        death_risk: "合规与商业化平衡",
        tags: ["#AI图像", "#Stable Diffusion", "#模型社区", "#Civitai"],
        scores: [65, 60, 50, 80, 50],
        timeline: [
            { year: "2022", event: "Civitai 上线，专注 Stable Diffusion 模型分享" },
            { year: "2023", event: "模型与用户量快速增长，成为主流模型站" },
            { year: "2024", event: "打赏与会员等变现，持续社区运营" }
        ],
        key_decisions: [
            "垂直模型与提示词社区，服务AI图像创作者与用户",
            "社区驱动内容与质量，依赖创作者贡献",
            "打赏与会员变现，平衡合规与增长"
        ],
    },
        replicate: {
        title: "Replicate",
        subtitle: "AI模型API与运行平台",
        dao: "开源模型一键运行与API化。降低模型部署与调用门槛。",
        gov: "平台提供算力与计费。模型由社区与官方发布。",
        space: "模型库 + 运行环境 + API。按次计费，无服务器运维。",
        econ: "按使用量计费。GPU/CPU 分钟计费。",
        risk: "与云厂商、自建推理竞争；模型版权与合规。",
        atomic_unit: "模型/运行/API调用",
        distribution: "搜索与发现 60% + 文档与集成 40%",
        death_risk: "定价与生态竞争",
        tags: ["#AI", "#API", "#开源模型", "#Replicate"],
        scores: [50, 65, 55, 85, 70],
        timeline: [
            { year: "2019", event: "Replicate 成立，专注机器学习模型部署" },
            { year: "2022", event: "与 Stable Diffusion 等模型结合，使用量爆发" },
            { year: "2024", event: "模型库与API生态持续扩展" }
        ],
        key_decisions: [
            "按次计费、无服务器，降低模型使用门槛",
            "与开源社区结合，快速接入新模型",
            "API与SDK优先，服务开发者与产品集成"
        ],
    },
        stability_ai: {
        title: "Stability AI",
        subtitle: "开源图像与多模态模型公司",
        dao: "开源模型与商业化并行。Stable Diffusion 等模型开源，同时提供API与产品。",
        gov: "公司主导。开源协议与商业授权并存。",
        space: "开源模型 + API + 产品（如 Stable Diffusion WebUI 生态）。",
        econ: "API与企业授权 + 投资与合作。",
        risk: "开源与商业平衡；竞品与合规压力。",
        atomic_unit: "模型/API/图像",
        distribution: "开源生态 60% + API 40%",
        death_risk: "商业化与竞争",
        tags: ["#Stable Diffusion", "#开源", "#AI图像", "#Stability"],
        scores: [55, 60, 55, 80, 60],
        timeline: [
            { year: "2022", event: "Stable Diffusion 开源，引发AI图像热潮" },
            { year: "2023", event: "Stability AI 推出 API 与商业产品" },
            { year: "2024", event: "多模态与视频方向探索" }
        ],
        key_decisions: [
            "开源模型建立生态与影响力，再通过API与授权变现",
            "与 ComfyUI、Civitai 等社区生态协同",
            "多模态与视频拓展边界"
        ],
    },
        stable_diffusion_webui: {
        title: "Stable Diffusion WebUI",
        subtitle: "开源AI图像生成界面与工作流",
        dao: "本地/自托管运行Stable Diffusion。社区插件与脚本生态。",
        gov: "开源社区主导。AUTOMATIC1111 等分支，无中心平台。",
        space: "WebUI + 插件 + 模型。用户自建环境，模型来自 Civitai 等。",
        econ: "无直接变现。依赖捐赠与社区贡献。",
        risk: "依赖上游模型与硬件；与云产品竞争。",
        atomic_unit: "界面/插件/工作流",
        distribution: "GitHub与社区 80% + 教程 20%",
        death_risk: "云产品替代与维护者疲劳",
        tags: ["#Stable Diffusion", "#开源", "#WebUI", "#本地运行"],
        scores: [60, 70, 30, 75, 20],
        timeline: [
            { year: "2022", event: "AUTOMATIC1111 WebUI 等项目兴起" },
            { year: "2023", event: "插件与工作流生态繁荣，与 ComfyUI 等并存" },
            { year: "2024", event: "持续迭代与多分支发展" }
        ],
        key_decisions: [
            "本地/自托管优先，满足隐私与可控需求",
            "插件与脚本生态，扩展功能与工作流",
            "开源无商业变现，依赖社区与捐赠"
        ],
    },
        comfyui: {
        title: "ComfyUI",
        subtitle: "节点式AI图像工作流工具",
        dao: "节点编排Stable Diffusion等模型。可视化工作流，适合进阶用户。",
        gov: "开源社区。核心开发与社区节点贡献。",
        space: "节点画布 + 工作流 + 模型。与 Civitai 等模型站配合。",
        econ: "无直接变现。开源免费。",
        risk: "学习曲线陡；与WebUI、云产品竞争。",
        atomic_unit: "节点/工作流/模型",
        distribution: "GitHub与社区 70% + 教程 30%",
        death_risk: "用户迁移与维护",
        tags: ["#ComfyUI", "#节点", "#Stable Diffusion", "#工作流"],
        scores: [50, 65, 35, 80, 15],
        timeline: [
            { year: "2023", event: "ComfyUI 流行，成为进阶用户首选" },
            { year: "2024", event: "节点生态与教程丰富，与 WebUI 并存" }
        ],
        key_decisions: [
            "节点式工作流，灵活可复现，吸引进阶创作者",
            "与 Civitai、Stability 等生态配合",
            "开源免费，依赖社区贡献"
        ],
    },
        kimi: {
        title: "Kimi (月之暗面)",
        subtitle: "长文本与多模态AI助手",
        dao: "长上下文与多轮对话。支持超长文档与网页理解，面向深度阅读与写作。",
        gov: "产品主导。月之暗面团队研发与运营。",
        space: "对话 + 长文档 + 搜索。C端与API并存。",
        econ: "订阅会员 + API。长上下文与高频调用付费。",
        risk: "与通用大模型竞品竞争；长文本成本与体验平衡。",
        atomic_unit: "对话/文档/搜索",
        distribution: "产品与渠道 60% + API 40%",
        death_risk: "差异化与商业化",
        tags: ["#Kimi", "#长文本", "#月之暗面", "#AI助手"],
        scores: [55, 60, 55, 85, 65],
        timeline: [
            { year: "2023", event: "Kimi 上线，主打长上下文能力" },
            { year: "2024", event: "长文本与多模态升级，与搜索等场景结合" },
            { year: "2024", event: "API与终端合作拓展" }
        ],
        key_decisions: [
            "长上下文作为核心差异化，服务阅读与写作场景",
            "与搜索、终端等合作拓宽触达",
            "订阅与API双线变现"
        ],
    },
        baichuan_ai: {
        title: "百川智能 (Baichuan AI)",
        subtitle: "大模型与AI应用公司",
        dao: "通用大模型与垂直场景。Baichuan 系列模型 + 搜索、写作等应用。",
        gov: "技术主导。王小川带队，开源与商业并行。",
        space: "对话 + 搜索 + API。C端与B端并重。",
        econ: "API与会员 + 企业合作。",
        risk: "巨头与国内大厂挤压；生态与规模需积累。",
        atomic_unit: "对话/API/应用",
        distribution: "产品与API 50% + 合作 50%",
        death_risk: "模型与生态竞争力",
        tags: ["#百川", "#大模型", "#王小川", "#AI"],
        scores: [50, 58, 52, 78, 58],
        timeline: [
            { year: "2023", event: "百川智能成立，Baichuan 大模型发布" },
            { year: "2024", event: "模型迭代与搜索、写作等应用落地" },
            { year: "2024", event: "开源与API生态拓展" }
        ],
        key_decisions: [
            "开源与商业并行，建立开发者认知",
            "搜索与写作等场景落地",
            "团队与品牌背书争取合作与资本"
        ],
    },
        janitor_ai: {
        title: "Janitor AI",
        subtitle: "AI角色对话与创作平台",
        dao: "用户与AI角色对话、定制。角色可自定义，偏娱乐与创作。",
        gov: "平台运营。角色与内容审核。",
        space: "角色 + 对话 + 社区。",
        econ: "会员与API。",
        risk: "内容合规与竞品（Character.AI 等）压力。",
        atomic_unit: "角色/对话",
        distribution: "推荐与搜索",
        death_risk: "合规与留存",
        tags: ["#AI角色", "#Janitor AI", "#对话"],
        scores: [60, 50, 55, 80, 50],
        timeline: [
            { year: "2023", event: "Janitor AI 等角色对话产品兴起" },
            { year: "2024", event: "与 Character.AI 等竞品并存" }
        ],
        key_decisions: [
            "角色可定制，吸引创作与娱乐用户",
            "会员与API变现",
            "合规与内容审核挑战"
        ],
    },
        docker_hub: {
        title: "Docker Hub",
        subtitle: "容器镜像仓库与开发者社区",
        dao: "镜像分发与协作。镜像拉取、发布、自动化构建。",
        gov: "Docker 公司运营。免费与付费额度。",
        space: "镜像库 + 仓库 + 文档。与 CI/CD 集成。",
        econ: "免费额度 + 订阅（团队与私有仓库）。",
        risk: "与云厂商镜像仓库竞争；免费策略调整。",
        atomic_unit: "镜像/仓库/标签",
        distribution: "搜索与拉取 80% + 文档 20%",
        death_risk: "竞争与商业化",
        tags: ["#Docker", "#容器", "#开发者", "#镜像"],
        scores: [45, 55, 60, 40, 65],
        timeline: [
            { year: "2014", event: "Docker Hub 随 Docker 普及而成为默认镜像源" },
            { year: "2020", event: "免费策略调整，推动付费与云厂商竞争" },
            { year: "2024", event: "持续为容器生态核心基础设施" }
        ],
        key_decisions: [
            "与 Docker 生态绑定，成为默认镜像源",
            "免费额度与订阅平衡，推动企业付费",
            "与云厂商镜像服务竞争与共存"
        ],
    },
        npm: {
        title: "npm",
        subtitle: "JavaScript 包管理与开发者社区",
        dao: "包发布、安装与发现。Node.js 生态的默认包仓库。",
        gov: "npm 公司（现 GitHub）运营。公共与私有包。",
        space: "包库 + 文档 + 依赖图。与 GitHub 集成。",
        econ: "免费公共包 + 付费私有与团队功能。",
        risk: "与 Yarn、pnpm 等竞争；安全与供应链风险。",
        atomic_unit: "包/版本/依赖",
        distribution: "搜索与安装 85% + 文档 15%",
        death_risk: "安全与生态信任",
        tags: ["#npm", "#JavaScript", "#Node", "#包管理"],
        scores: [50, 60, 65, 35, 70],
        timeline: [
            { year: "2010", event: "npm 随 Node.js 兴起成为主流包管理器" },
            { year: "2020", event: "被 GitHub 收购，与 GitHub Packages 整合" },
            { year: "2024", event: "持续为 JS 生态核心基础设施" }
        ],
        key_decisions: [
            "与 Node.js 绑定，成为默认包源",
            "公共免费、私有付费，平衡生态与收入",
            "安全与供应链治理持续加强"
        ],
    },
        maven_central: {
        title: "Maven Central",
        subtitle: "Java 生态包仓库",
        dao: "Java/ JVM 包发布与依赖解析。业界标准仓库。",
        gov: "Sonatype 运营。发布规范与审核。",
        space: "构件库 + 依赖解析 + 文档。与 Gradle、Maven 集成。",
        econ: "免费公共。Sonatype 通过商业产品变现。",
        risk: "与云厂商、私有仓库竞争；供应链安全。",
        atomic_unit: "构件/坐标/依赖",
        distribution: "构建工具拉取 90% + 搜索 10%",
        death_risk: "生态迁移与安全",
        tags: ["#Maven", "#Java", "#包仓库", "#Sonatype"],
        scores: [40, 55, 70, 25, 55],
        timeline: [
            { year: "2006", event: "Maven Central 成为 Java 生态标准仓库" },
            { year: "2020", event: "供应链安全与规范加强" },
            { year: "2024", event: "持续为 JVM 生态核心基础设施" }
        ],
        key_decisions: [
            "与 Maven/Gradle 绑定，成为默认源",
            "发布规范与审核保证质量",
            "免费公共，Sonatype 通过 Nexus 等商业产品变现"
        ]
    },

    // === 继续反推：AI/产品图标有、案例无 ===
    chatgpt: {
        title: "ChatGPT",
        subtitle: "OpenAI 对话式大模型产品",
        dao: "通用对话与任务执行。将大模型能力产品化，覆盖写作、代码、分析等场景。",
        gov: "OpenAI 主导。模型与产品迭代由公司把控。",
        space: "对话 + 插件 + API。C端与B端双线。",
        econ: "订阅（Plus/Team/Enterprise）+ API。",
        risk: "与Claude、Gemini等竞品竞争；合规与安全压力。",
        atomic_unit: "对话轮次/API调用",
        distribution: "产品与渠道 60% + API 40%",
        death_risk: "竞品与监管",
        tags: ["#AI对话", "#OpenAI", "#大模型", "#ChatGPT"],
        scores: [55, 70, 65, 90, 85],
        timeline: [
            { year: "2022", event: "ChatGPT 发布，引发大模型热潮" },
            { year: "2023", event: "GPT-4、插件、多模态能力上线" },
            { year: "2024", event: "o1、GPT-4o 等迭代，与竞品并存" }
        ],
        key_decisions: [
            "对话式交互降低使用门槛，建立用户认知",
            "订阅与API双线变现，企业市场拓展",
            "多模态与插件生态拓展边界"
        ],
        user_metrics: {
            monthly_active_users: "2亿+",
            daily_active_users: "1亿+",
            total_users: "3亿+",
            growth_rate: "40%",
            retention_rate: "75%",
            user_demographics: {
                age_range: "22-45岁为主，知识工作者与创作者",
                gender_ratio: "58% 男性，42% 女性",
                region: "全球，美国与英语区为主",
                income_level: "中高收入、企业与个人用户"
            },
            usage_patterns: {
                avg_session_duration: "25分钟/天",
                sessions_per_day: "5次",
                content_creation_rate: "20%",
                engagement_rate: "78%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅", percentage: 55, description: "Plus/Team/Enterprise" },
                { type: "API", percentage: 45, description: "开发者与企业 API 调用" }
            ],
            monetization_strategy: "订阅+API 双线，企业市场高 ARPU",
            financial_metrics: {
                annual_revenue: "约20亿美元+ (2024)",
                revenue_growth: "高增长",
                profitability: "投入与增长并重",
                valuation: "OpenAI 估值约800亿+ 美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Claude", similarity: 95, position: "通用大模型直接竞品" },
                { name: "Gemini", similarity: 90, position: "Google 大模型竞品" },
                { name: "开源与垂直模型", similarity: 70, position: "成本与定制竞品" }
            ],
            market_position: "通用大模型与对话 AI 领导者",
            market_share: "消费端对话 AI 份额领先",
            competitive_advantages: [
                "品牌与用户规模领先",
                "多模态与插件生态",
                "API 与产品双线",
                "OpenAI 技术迭代快"
            ],
            competitive_disadvantages: [
                "合规与安全压力",
                "成本与定价压力",
                "与 Claude/Gemini 同质化竞争"
            ]
        },
        tech_stack: {
            core_technologies: [
                "GPT 系列大模型（闭源）",
                "多模态（文本、图像、语音）",
                "插件与 Function Calling",
                "推理与 API 基础设施"
            ],
            tech_features: [
                "对话与多轮上下文",
                "多模态输入输出",
                "插件与联网",
                "o1 推理与代码执行"
            ],
            tech_challenges: [
                "规模与成本平衡",
                "安全与对齐",
                "多模态一致性与延迟",
                "合规与地域限制"
            ]
        },
        product_features: {
            core_features: [
                { name: "对话", description: "多轮对话、上下文、多模态", importance: "核心功能" },
                { name: "插件与工具", description: "联网、计算、第三方插件", importance: "核心功能" },
                { name: "API", description: "Chat Completions、Embeddings 等", importance: "核心功能" },
                { name: "Team/Enterprise", description: "团队管理与合规", importance: "核心功能" }
            ],
            innovative_features: [
                "对话式交互建立消费端认知",
                "插件与 Function Calling 生态",
                "o1 与多模态持续迭代"
            ],
            feature_evolution: [
                { year: "2022", feature: "ChatGPT 发布" },
                { year: "2023", feature: "GPT-4、插件、多模态" },
                { year: "2024", feature: "o1、GPT-4o、Team" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "平台主导内容与安全，不开放 UGC 社区",
                creator_support: "GPTs 与插件生态、API 开发者",
                content_quality: "安全与对齐、合规、审核"
            },
            user_operation: {
                acquisition: "品牌、口碑、企业销售",
                activation: "免费额度、首轮对话、订阅升级",
                retention: "订阅权益、多模态、插件",
                referral: "分享与 Team 邀请"
            },
            event_operation: [
                { name: "DevDay 与生态", impact: "开发者与企业采用", description: "年度大会与 API/插件生态" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "1亿+",
                mau: "2亿+",
                engagement_rate: "78%",
                retention_7d: "75%",
                retention_30d: "65%"
            },
            content_metrics: {
                daily_conversations: "数亿轮",
                api_calls: "企业与开发者为主",
                subscription_rate: "提升中"
            },
            business_metrics: {
                arpu: "订阅与 API 双贡献",
                enterprise_share: "增长中"
            }
        },
        success_factors: [
            "对话式交互建立消费端认知",
            "订阅与 API 双线变现",
            "多模态与插件拓展边界",
            "品牌与规模形成网络效应"
        ]
    },
    claude: {
        title: "Claude",
        subtitle: "Anthropic 安全对齐大模型",
        dao: "安全、可控的AI助手。强调 Constitutional AI 与对齐。",
        gov: "Anthropic 主导。模型与安全研究并重。",
        space: "对话 + API + 产品集成。",
        econ: "订阅 + API。",
        risk: "与ChatGPT等竞品竞争；规模与成本。",
        atomic_unit: "对话轮次/API调用",
        distribution: "产品与API 50% + 合作 50%",
        death_risk: "竞品与商业化",
        tags: ["#AI对话", "#Anthropic", "#Claude", "#安全对齐"],
        scores: [50, 68, 62, 88, 80],
        timeline: [
            { year: "2023", event: "Claude 2 对外发布" },
            { year: "2024", event: "Claude 3 系列、Opus/Sonnet/Haiku 多档位" },
            { year: "2024", event: "与亚马逊、Google 等合作落地" }
        ],
        key_decisions: [
            "安全与对齐作为差异化，吸引企业与合规场景",
            "多档位模型满足不同成本与性能需求",
            "API与产品集成拓展触达"
        ],
        user_metrics: {
            monthly_active_users: "数千万级",
            daily_active_users: "千万级",
            total_users: "1亿+",
            growth_rate: "高增长",
            retention_rate: "70%+",
            user_demographics: {
                age_range: "22-50岁，知识工作者与企业用户",
                gender_ratio: "偏男性，开发者与决策者",
                region: "全球，美国与英语区为主",
                income_level: "中高收入、企业采购"
            },
            usage_patterns: {
                avg_session_duration: "20分钟/天",
                sessions_per_day: "3-5次",
                content_creation_rate: "长文本与代码场景高",
                engagement_rate: "75%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅", percentage: 50, description: "Claude Pro、团队版" },
                { type: "API", percentage: 50, description: "企业与开发者 API" }
            ],
            monetization_strategy: "订阅+API，企业市场与安全合规场景",
            financial_metrics: {
                annual_revenue: "数亿美元级 (2024)",
                revenue_growth: "高增长",
                profitability: "投入期",
                valuation: "Anthropic 估值约150亿+ 美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "ChatGPT", similarity: 95, position: "通用大模型直接竞品" },
                { name: "Gemini", similarity: 90, position: "Google 大模型竞品" },
                { name: "开源模型", similarity: 70, position: "成本与定制竞品" }
            ],
            market_position: "安全对齐与长上下文差异化",
            market_share: "企业端与合规场景份额增长",
            competitive_advantages: [
                "Constitutional AI 与安全对齐品牌",
                "长上下文与代码能力",
                "与 AWS、Google 等云厂商深度合作"
            ],
            competitive_disadvantages: [
                "消费端品牌弱于 ChatGPT",
                "规模与成本压力",
                "多模态节奏相对滞后"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Claude 系列大模型（闭源）",
                "长上下文（20万+ token）",
                "Constitutional AI 与 RLHF",
                "API 与 Bedrock / Vertex 集成"
            ],
            tech_features: [
                "多轮对话与长文档",
                "代码与推理能力",
                "安全与拒绝策略",
                "多档位 Opus/Sonnet/Haiku"
            ],
            tech_challenges: [
                "规模与推理成本",
                "多模态与实时能力",
                "与云厂商竞合关系"
            ]
        },
        product_features: {
            core_features: [
                { name: "对话", description: "多轮对话、长上下文、文档理解", importance: "核心功能" },
                { name: "API", description: "Chat Completions、Embeddings、Bedrock", importance: "核心功能" },
                { name: "Pro/团队", description: "订阅权益、团队管理", importance: "核心功能" },
                { name: "Artifacts", description: "代码与文档生成与编辑", importance: "差异化" }
            ],
            innovative_features: [
                "长上下文与文档处理",
                "安全与拒绝策略透明",
                "Artifacts 与可编辑输出"
            ],
            feature_evolution: [
                { year: "2023", feature: "Claude 2 发布" },
                { year: "2024", feature: "Claude 3 系列、多档位、Artifacts" },
                { year: "2024", feature: "AWS Bedrock、Google Vertex 集成" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "平台主导安全与合规，不开放 UGC 社区",
                creator_support: "API 开发者与企业集成",
                content_quality: "安全策略、拒绝不当请求、审核"
            },
            user_operation: {
                acquisition: "品牌、企业销售、云厂商渠道",
                activation: "免费额度、Pro 试用、API 文档",
                retention: "长上下文、代码能力、Pro 权益",
                referral: "团队邀请与生态合作"
            },
            event_operation: [
                { name: "企业合作与发布会", impact: "品牌与采用", description: "与 AWS、Google 等联合发布" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "千万级",
                mau: "数千万级",
                engagement_rate: "75%",
                retention_7d: "70%",
                retention_30d: "60%"
            },
            content_metrics: {
                daily_conversations: "数千万轮",
                api_calls: "企业与开发者为主",
                subscription_rate: "增长中"
            },
            business_metrics: {
                arpu: "订阅与 API 双贡献",
                enterprise_share: "高"
            }
        },
        success_factors: [
            "安全对齐差异化吸引企业与合规",
            "长上下文与代码能力",
            "云厂商合作拓展触达",
            "多档位满足成本与性能需求"
        ]
    },
    midjourney: {
        title: "Midjourney",
        subtitle: "AI 图像生成与创意社区",
        dao: "提示词驱动图像生成。Discord 内运营，强社区与迭代。",
        gov: "团队主导。闭源模型，规则与审核严格。",
        space: "Discord 频道 + 生成 + 画廊。",
        econ: "订阅制。按档位限制生成量与功能。",
        risk: "与 Stable Diffusion、DALL·E 等竞争；Discord 依赖。",
        atomic_unit: "提示词/图像/任务",
        distribution: "Discord 内 90% + 网页 10%",
        death_risk: "竞品与平台依赖",
        tags: ["#AI图像", "#Midjourney", "#Discord", "#订阅"],
        scores: [65, 50, 70, 85, 75],
        timeline: [
            { year: "2022", event: "Midjourney 在 Discord 内爆火" },
            { year: "2023", event: "v5/v6 等版本迭代，订阅增长" },
            { year: "2024", event: "网页版与 API 探索，仍以 Discord 为主" }
        ],
        key_decisions: [
            "Discord 内运营降低获客与运营成本，形成社区",
            "闭源与订阅制保证收入与可控",
            "持续迭代画质与风格，建立品牌"
        ],
        user_metrics: {
            monthly_active_users: "1500万+",
            daily_active_users: "数百万级",
            total_users: "3000万+",
            growth_rate: "稳定增长",
            retention_rate: "80%+",
            user_demographics: {
                age_range: "18-45岁，创作者与设计师",
                gender_ratio: "相对均衡",
                region: "全球，美国与英语区为主",
                income_level: "中高收入、付费意愿强"
            },
            usage_patterns: {
                avg_session_duration: "30分钟/天",
                sessions_per_day: "2-4次",
                content_creation_rate: "高，以图为主",
                engagement_rate: "85%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅", percentage: 100, description: "Basic/Standard/Pro 档位" }
            ],
            monetization_strategy: "纯订阅制，按档位限制生成量与功能",
            financial_metrics: {
                annual_revenue: "约2亿+ 美元 (2024)",
                revenue_growth: "稳定",
                profitability: "盈利",
                valuation: "未公开，估值约10亿+ 美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "DALL·E", similarity: 90, position: "OpenAI 图像生成" },
                { name: "Stable Diffusion", similarity: 85, position: "开源与自托管" },
                { name: "Adobe Firefly", similarity: 75, position: "创意工具内嵌" }
            ],
            market_position: "消费端 AI 图像生成品牌领先",
            market_share: "订阅制图像生成份额领先",
            competitive_advantages: [
                "画质与风格辨识度高",
                "Discord 社区与 UGC 传播",
                "闭源与订阅制收入稳定"
            ],
            competitive_disadvantages: [
                "依赖 Discord 生态",
                "无自营 App 与 API 开放有限",
                "与开源模型成本竞争"
            ]
        },
        tech_stack: {
            core_technologies: [
                "自研图像生成模型（闭源）",
                "Discord Bot 与频道",
                "网页版与 API 有限开放",
                "提示词与参数系统"
            ],
            tech_features: [
                "提示词驱动图像生成",
                "多档位分辨率与数量",
                "风格与种子控制",
                "画廊与社区展示"
            ],
            tech_challenges: [
                "与 Discord 解耦与独立 App",
                "API 与生态开放节奏",
                "版权与合规"
            ]
        },
        product_features: {
            core_features: [
                { name: "图像生成", description: "提示词、参数、多图", importance: "核心功能" },
                { name: "订阅档位", description: "Basic/Standard/Pro 限制与权益", importance: "核心功能" },
                { name: "画廊与社区", description: "Discord 内展示与互动", importance: "核心功能" },
                { name: "网页版", description: "独立网页生成与管理", importance: "拓展" }
            ],
            innovative_features: [
                "Discord 内运营降低获客与运营成本",
                "提示词文化与社区传播",
                "持续迭代画质与风格"
            ],
            feature_evolution: [
                { year: "2022", feature: "Discord 内爆火" },
                { year: "2023", feature: "v5/v6、订阅增长" },
                { year: "2024", feature: "网页版、API 探索" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "平台主导规则与审核，Discord 内 UGC 画廊",
                creator_support: "提示词分享、风格教程、订阅权益",
                content_quality: "审核、版权与使用规范"
            },
            user_operation: {
                acquisition: "Discord 内传播、口碑、KOL",
                activation: "免费额度、首图体验、订阅升级",
                retention: "订阅权益、新模型与功能、社区",
                referral: "Discord 邀请与分享"
            },
            event_operation: [
                { name: "版本发布与社区活动", impact: "留存与付费", description: "v 系列发布与提示词大赛" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "1500万+",
                engagement_rate: "85%",
                retention_7d: "80%",
                retention_30d: "70%"
            },
            content_metrics: {
                daily_generations: "数千万张",
                subscription_rate: "高",
                discord_activity: "高"
            },
            business_metrics: {
                arpu: "订阅档位差异",
                profitability: "盈利"
            }
        },
        success_factors: [
            "Discord 内运营形成社区与传播",
            "画质与风格建立品牌",
            "订阅制收入稳定",
            "闭源与可控"
        ]
    },
    huggingface: {
        title: "Hugging Face",
        subtitle: "AI 模型与数据集开源社区",
        dao: "模型、数据集、应用共享。开发者发布与下载，形成 ML 生态。",
        gov: "平台主导 + 社区贡献。审核与安全策略。",
        space: "模型库 + 数据集 + Spaces（应用）+ 讨论。",
        econ: "企业服务（推理、托管）+ 赞助与会员。",
        risk: "与云厂商、模型厂商竞争；合规与版权。",
        atomic_unit: "模型/数据集/Space",
        distribution: "搜索与发现 60% + 文档 30% + 社交 10%",
        death_risk: "商业化与竞争",
        tags: ["#AI", "#开源", "#Hugging Face", "#模型社区"],
        scores: [70, 65, 55, 75, 60],
        timeline: [
            { year: "2016", event: "Hugging Face 成立，NLP 库起步" },
            { year: "2020", event: "Transformers 与模型库成为主流" },
            { year: "2022", event: "Spaces、推理 API 等产品拓展" },
            { year: "2024", event: "企业服务与多模态生态扩展" }
        ],
        key_decisions: [
            "开源与社区优先，建立开发者生态与信任",
            "模型/数据集/应用一体化，降低使用门槛",
            "企业推理与托管变现，平衡免费与付费"
        ],
        user_metrics: {
            monthly_active_users: "1000万+",
            daily_active_users: "数百万级",
            total_users: "5000万+",
            growth_rate: "高增长",
            retention_rate: "65%",
            user_demographics: {
                age_range: "22-45岁，开发者与研究者",
                gender_ratio: "偏男性",
                region: "全球，美国与欧洲为主",
                income_level: "中高收入、企业与学术"
            },
            usage_patterns: {
                avg_session_duration: "15分钟/天",
                sessions_per_day: "3-5次",
                content_creation_rate: "模型/数据集/Space 发布",
                engagement_rate: "70%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "企业服务", percentage: 60, description: "推理、托管、私有化" },
                { type: "赞助与会员", percentage: 25, description: "Pro、赞助" },
                { type: "其他", percentage: 15, description: "合作与授权" }
            ],
            monetization_strategy: "免费社区 + 企业推理与托管变现",
            financial_metrics: {
                annual_revenue: "数亿美元级 (2024)",
                revenue_growth: "高增长",
                profitability: "投入与增长并重",
                valuation: "估值约45亿+ 美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "GitHub", similarity: 70, position: "代码与模型托管" },
                { name: "云厂商", similarity: 65, position: "推理与托管" },
                { name: "模型厂商", similarity: 60, position: "闭源模型与 API" }
            ],
            market_position: "AI 开源模型与数据集中心",
            market_share: "开源模型托管与发现领先",
            competitive_advantages: [
                "Transformers 与模型库生态",
                "模型/数据集/Spaces 一体化",
                "开发者信任与社区"
            ],
            competitive_disadvantages: [
                "企业变现与云厂商竞争",
                "合规与版权压力",
                "闭源模型分流"
            ]
        },
        tech_stack: {
            core_technologies: [
                "Transformers 库与模型 Hub",
                "Spaces（Gradio/Streamlit 等）",
                "推理 API 与 Inference Endpoints",
                "数据集与版本管理"
            ],
            tech_features: [
                "模型与数据集发布与下载",
                "Spaces 应用托管与分享",
                "推理 API 与私有化部署",
                "安全与审核工具"
            ],
            tech_challenges: [
                "规模与成本",
                "合规与版权",
                "与云厂商竞合"
            ]
        },
        product_features: {
            core_features: [
                { name: "模型 Hub", description: "模型发布、下载、版本", importance: "核心功能" },
                { name: "数据集", description: "数据集发布与加载", importance: "核心功能" },
                { name: "Spaces", description: "应用托管与演示", importance: "核心功能" },
                { name: "推理 API", description: "托管推理与 Inference Endpoints", importance: "核心功能" }
            ],
            innovative_features: [
                "模型/数据集/应用一体化",
                "开源与社区优先",
                "企业推理与托管变现"
            ],
            feature_evolution: [
                { year: "2016", feature: "NLP 库起步" },
                { year: "2020", feature: "Transformers 与模型库主流" },
                { year: "2022", feature: "Spaces、推理 API" },
                { year: "2024", feature: "企业服务与多模态" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "社区贡献模型/数据集/Spaces，平台审核与安全",
                creator_support: "文档、赞助、Pro 权益、企业合作",
                content_quality: "审核、安全、版权与合规"
            },
            user_operation: {
                acquisition: "开源生态、口碑、会议与教程",
                activation: "免费使用、文档、示例",
                retention: "模型更新、Spaces、推理与托管",
                referral: "分享与引用"
            },
            event_operation: [
                { name: "Hugging Face 峰会与社区", impact: "品牌与采用", description: "年度峰会与开源合作" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "1000万+",
                engagement_rate: "70%",
                retention_7d: "65%",
                retention_30d: "55%"
            },
            content_metrics: {
                models_count: "50万+",
                datasets_count: "10万+",
                spaces_count: "数万"
            },
            business_metrics: {
                enterprise_share: "增长中",
                api_calls: "推理与托管为主"
            }
        },
        success_factors: [
            "开源与社区建立信任与生态",
            "模型/数据集/应用一体化",
            "企业推理与托管变现",
            "Transformers 与标准地位"
        ]
    },
    udio: {
        title: "Udio",
        subtitle: "AI 音乐生成与创作社区",
        dao: "提示词与参考驱动音乐生成。面向创作者与听众的 AI 音乐产品。",
        gov: "团队主导。闭源模型，订阅与版权策略。",
        space: "生成 + 发现 + 分享。",
        econ: "订阅制 + 免费额度。",
        risk: "与 Suno、Splice 等竞争；版权与合规。",
        atomic_unit: "曲目/生成/播放",
        distribution: "App 与网页 70% + 社交 30%",
        death_risk: "竞品与版权",
        tags: ["#AI音乐", "#Udio", "#生成", "#订阅"],
        scores: [60, 55, 68, 82, 72],
        timeline: [
            { year: "2024", event: "Udio 上线，AI 音乐生成" },
            { year: "2024", event: "订阅与扩展模式迭代" }
        ],
        key_decisions: [
            "提示词与参考结合降低创作门槛",
            "订阅制与免费额度平衡增长与变现",
            "版权与合规前置"
        ],
        user_metrics: {
            monthly_active_users: "数百万级",
            daily_active_users: "数十万级",
            total_users: "千万级",
            growth_rate: "高增长",
            retention_rate: "65%",
            user_demographics: {
                age_range: "18-40岁，音乐爱好者与创作者",
                gender_ratio: "相对均衡",
                region: "全球，英语区为主",
                income_level: "中高收入、付费意愿强"
            },
            usage_patterns: {
                avg_session_duration: "20分钟/天",
                sessions_per_day: "2-4次",
                content_creation_rate: "生成与分享",
                engagement_rate: "70%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅", percentage: 90, description: "免费额度 + 付费档位" },
                { type: "其他", percentage: 10, description: "合作与授权" }
            ],
            monetization_strategy: "免费额度获客 + 订阅变现",
            financial_metrics: {
                annual_revenue: "成长中",
                revenue_growth: "高增长",
                profitability: "投入期",
                valuation: "未公开"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Suno", similarity: 95, position: "AI 音乐生成直接竞品" },
                { name: "Splice", similarity: 70, position: "音乐素材与创作" },
                { name: "传统音乐制作", similarity: 50, position: "专业工具" }
            ],
            market_position: "AI 音乐生成领先产品之一",
            market_share: "与 Suno 等竞争消费端份额",
            competitive_advantages: [
                "生成质量与风格",
                "提示词与参考易用",
                "社区与发现"
            ],
            competitive_disadvantages: [
                "版权与合规压力",
                "与 Suno 同质化竞争",
                "变现与规模"
            ]
        },
        tech_stack: {
            core_technologies: [
                "自研音乐生成模型（闭源）",
                "提示词与参考音频",
                "流媒体与分享",
                "Web + App"
            ],
            tech_features: [
                "提示词驱动音乐生成",
                "参考曲风与片段",
                "扩展与编辑",
                "发现与播放"
            ],
            tech_challenges: [
                "版权与合规",
                "生成质量与一致性",
                "规模与成本"
            ]
        },
        product_features: {
            core_features: [
                { name: "音乐生成", description: "提示词、参考、扩展", importance: "核心功能" },
                { name: "发现与播放", description: "推荐、歌单、分享", importance: "核心功能" },
                { name: "订阅档位", description: "免费额度与付费权益", importance: "核心功能" }
            ],
            innovative_features: [
                "提示词与参考结合",
                "扩展与编辑",
                "社区发现"
            ],
            feature_evolution: [
                { year: "2024", feature: "上线与订阅" },
                { year: "2024", feature: "扩展与模式迭代" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "平台主导审核与版权，UGC 生成与分享",
                creator_support: "免费额度、教程、订阅权益",
                content_quality: "版权与合规、审核"
            },
            user_operation: {
                acquisition: "口碑、KOL、社交分享",
                activation: "免费额度、首曲生成",
                retention: "订阅权益、新功能、发现",
                referral: "分享与邀请"
            },
            event_operation: [
                { name: "产品发布与社区", impact: "获客与留存", description: "新功能与活动" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "数十万级",
                mau: "数百万级",
                engagement_rate: "70%",
                retention_7d: "65%",
                retention_30d: "55%"
            },
            content_metrics: {
                daily_generations: "数十万首",
                subscription_rate: "增长中"
            },
            business_metrics: {
                arpu: "订阅档位"
            }
        },
        success_factors: [
            "生成质量与易用性",
            "免费额度与订阅平衡",
            "版权与合规前置"
        ]
    },
    gamma: {
        title: "Gamma",
        subtitle: "AI 驱动演示与文档生成",
        dao: "自然语言生成演示文稿与文档。面向企业与个人的 AI 演示工具。",
        gov: "产品主导。闭源模型，订阅制。",
        space: "生成 + 编辑 + 分享。",
        econ: "订阅制（免费额度 + 付费）。",
        risk: "与 Canva、Beautiful.ai、PPT 等竞争。",
        atomic_unit: "演示/页面/卡片",
        distribution: "网页 80% + 协作 20%",
        death_risk: "竞品与商业化",
        tags: ["#AI演示", "#Gamma", "#文档", "#订阅"],
        scores: [55, 58, 65, 80, 68],
        timeline: [
            { year: "2022", event: "Gamma 上线" },
            { year: "2023", event: "AI 生成与订阅增长" },
            { year: "2024", event: "企业版与协作" }
        ],
        key_decisions: [
            "自然语言生成降低制作门槛",
            "订阅制与免费额度平衡",
            "企业场景拓展"
        ],
        user_metrics: {
            monthly_active_users: "数百万级",
            daily_active_users: "数十万级",
            total_users: "千万级",
            growth_rate: "高增长",
            retention_rate: "60%",
            user_demographics: {
                age_range: "22-50岁，知识工作者与企业",
                gender_ratio: "相对均衡",
                region: "全球，美国与英语区为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "15分钟/天",
                sessions_per_day: "2-3次",
                content_creation_rate: "演示与文档",
                engagement_rate: "65%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅", percentage: 100, description: "免费额度 + Pro/团队/企业" }
            ],
            monetization_strategy: "免费额度 + 订阅变现",
            financial_metrics: {
                annual_revenue: "成长中",
                revenue_growth: "高增长",
                profitability: "投入期",
                valuation: "未公开"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Canva", similarity: 85, position: "设计与演示" },
                { name: "Beautiful.ai", similarity: 90, position: "AI 演示" },
                { name: "PPT/Google Slides", similarity: 70, position: "传统演示" }
            ],
            market_position: "AI 演示生成代表产品",
            market_share: "AI 演示细分增长",
            competitive_advantages: [
                "自然语言生成演示",
                "编辑与协作",
                "模板与风格"
            ],
            competitive_disadvantages: [
                "与 Canva 等综合工具竞争",
                "企业采购周期长",
                "品牌与规模"
            ]
        },
        tech_stack: {
            core_technologies: [
                "大模型与自然语言生成",
                "演示渲染与编辑",
                "协作与分享",
                "Web 端"
            ],
            tech_features: [
                "提示词生成演示",
                "实时编辑与样式",
                "协作与评论",
                "导出与嵌入"
            ],
            tech_challenges: [
                "生成质量与一致性",
                "与 Office/Canva 兼容",
                "规模与成本"
            ]
        },
        product_features: {
            core_features: [
                { name: "AI 生成", description: "提示词生成演示与文档", importance: "核心功能" },
                { name: "编辑与协作", description: "实时编辑、评论、权限", importance: "核心功能" },
                { name: "订阅档位", description: "免费、Pro、团队、企业", importance: "核心功能" }
            ],
            innovative_features: [
                "自然语言生成演示",
                "卡片式与模块化编辑",
                "协作与分享"
            ],
            feature_evolution: [
                { year: "2022", feature: "Gamma 上线" },
                { year: "2023", feature: "AI 生成与订阅" },
                { year: "2024", feature: "企业版与协作" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "平台提供模板与 AI，用户创作内容",
                creator_support: "模板、教程、订阅权益",
                content_quality: "审核与合规"
            },
            user_operation: {
                acquisition: "口碑、KOL、企业销售",
                activation: "免费额度、首份生成",
                retention: "订阅权益、协作、新功能",
                referral: "分享与邀请"
            },
            event_operation: [
                { name: "产品与企业合作", impact: "获客与留存", description: "新功能与案例" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "数十万级",
                mau: "数百万级",
                engagement_rate: "65%",
                retention_7d: "60%",
                retention_30d: "50%"
            },
            content_metrics: {
                documents_created: "数千万",
                subscription_rate: "增长中"
            },
            business_metrics: {
                arpu: "订阅档位",
                enterprise_share: "增长中"
            }
        },
        success_factors: [
            "自然语言生成降低门槛",
            "订阅与免费平衡",
            "企业场景拓展"
        ]
    },
    mirror: {
        title: "Mirror",
        subtitle: "Web3 去中心化出版与众筹",
        dao: "基于区块链的写作与出版、众筹。创作者发布文章与 NFT，读者支持与收藏。",
        gov: "协议与产品主导。ERC-721 与 Split 等机制。",
        space: "写作 + 出版 + 众筹 + NFT。",
        econ: "众筹分成 + NFT 销售 + 订阅。",
        risk: "与 Substack、Paragraph 等竞争；链上成本与用户门槛。",
        atomic_unit: "文章/众筹/NFT",
        distribution: "Web3 用户 70% + 跨链 30%",
        death_risk: "竞品与链上采用",
        tags: ["#Web3", "#出版", "#众筹", "#NFT"],
        scores: [58, 62, 55, 72, 65],
        timeline: [
            { year: "2020", event: "Mirror 成立" },
            { year: "2021", event: "写作与众筹、NFT 发布" },
            { year: "2022", event: "$WRITE 与生态" },
            { year: "2024", event: "与 Farcaster 等集成" }
        ],
        key_decisions: [
            "链上出版与众筹结合",
            "NFT 与 Split 激励创作者与协作",
            "与 Farcaster 等 Web3 生态集成"
        ],
        user_metrics: {
            monthly_active_users: "数十万级",
            daily_active_users: "数万级",
            total_users: "百万级",
            growth_rate: "受加密周期影响",
            retention_rate: "55%",
            user_demographics: {
                age_range: "22-45岁，创作者与加密用户",
                gender_ratio: "偏男性",
                region: "全球，美国与英语区为主",
                income_level: "中高收入、加密持有者"
            },
            usage_patterns: {
                avg_session_duration: "10分钟/天",
                sessions_per_day: "1-3次",
                content_creation_rate: "文章与众筹",
                engagement_rate: "60%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "众筹分成", percentage: 40, description: "创作者众筹分成" },
                { type: "NFT 与 Split", percentage: 35, description: "NFT 销售与协作分成" },
                { type: "其他", percentage: 25, description: "订阅与合作" }
            ],
            monetization_strategy: "链上众筹与 NFT 分成",
            financial_metrics: {
                annual_revenue: "受加密周期影响",
                revenue_growth: "波动",
                profitability: "投入与生态",
                valuation: "未公开"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Substack", similarity: 80, position: "中心化出版与订阅" },
                { name: "Paragraph", similarity: 85, position: "Web3 出版" },
                { name: "Medium", similarity: 70, position: "传统出版" }
            ],
            market_position: "Web3 出版与众筹代表",
            market_share: "Web3 出版细分领先",
            competitive_advantages: [
                "链上出版与众筹一体化",
                "NFT 与 Split 协作机制",
                "与 Farcaster 等生态"
            ],
            competitive_disadvantages: [
                "链上成本与用户门槛",
                "加密周期波动",
                "与 Substack 等中心化产品竞争"
            ]
        },
        tech_stack: {
            core_technologies: [
                "以太坊与 L2",
                "ERC-721 与 NFT",
                "Split 与协作合约",
                "Arweave 等存储"
            ],
            tech_features: [
                "链上文章与出版",
                "众筹与 Split",
                "NFT 与收藏",
                "与 Farcaster 等集成"
            ],
            tech_challenges: [
                "链上成本与体验",
                "跨链与扩展",
                "合规"
            ]
        },
        product_features: {
            core_features: [
                { name: "写作与出版", description: "富文本、链上存储、永久", importance: "核心功能" },
                { name: "众筹", description: "众筹目标、分成、协作", importance: "核心功能" },
                { name: "NFT", description: "文章 NFT、收藏、Split", importance: "核心功能" },
                { name: "生态集成", description: "Farcaster、钱包", importance: "核心功能" }
            ],
            innovative_features: [
                "链上出版与众筹结合",
                "NFT 与 Split 协作",
                "去中心化与永久"
            ],
            feature_evolution: [
                { year: "2020", feature: "Mirror 成立" },
                { year: "2021", feature: "写作、众筹、NFT" },
                { year: "2022", feature: "$WRITE 与生态" },
                { year: "2024", feature: "Farcaster 等集成" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "创作者主导发布，平台协议与工具",
                creator_support: "众筹、NFT、Split、文档",
                content_quality: "合规与审核"
            },
            user_operation: {
                acquisition: "Web3 生态、口碑、Farcaster",
                activation: "钱包连接、首文发布",
                retention: "众筹与 NFT、订阅",
                referral: "分享与协作"
            },
            event_operation: [
                { name: "生态与会议", impact: "品牌与采用", description: "与 Farcaster 等联合" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "数万级",
                mau: "数十万级",
                engagement_rate: "60%",
                retention_7d: "55%",
                retention_30d: "45%"
            },
            content_metrics: {
                articles_published: "数十万",
                crowdfunds: "数千",
                nft_sales: "链上可查"
            },
            business_metrics: {
                volume_through_platform: "受加密周期影响"
            }
        },
        success_factors: [
            "链上出版与众筹一体化",
            "NFT 与 Split 激励",
            "Web3 生态集成"
        ]
    },
    aippy: {
        title: "AIppy",
        subtitle: "AI 产品与工具",
        dao: "AI 能力产品化。面向特定场景的 AI 应用。",
        gov: "产品主导。",
        space: "对话或工具场景。",
        econ: "订阅或 API。",
        risk: "竞争与差异化。",
        atomic_unit: "对话/任务",
        distribution: "产品与渠道",
        death_risk: "产品与商业化",
        tags: ["#AI", "#工具"],
        scores: [48, 55, 50, 72, 55],
        timeline: [
            { year: "2023", event: "AIppy 产品上线" },
            { year: "2024", event: "迭代与场景拓展" }
        ],
        key_decisions: [
            "场景化 AI 应用",
            "订阅或 API 变现",
            "差异化与留存"
        ],
    },
        anthropic: {
        title: "Anthropic",
        subtitle: "AI 安全研究与大模型公司",
        dao: "安全、可控的 AI。Constitutional AI 与对齐研究。",
        gov: "研究主导。Claude 产品与安全并重。",
        space: "模型 + 产品 + API。",
        econ: "API 与订阅（Claude）。",
        risk: "与 OpenAI、Google 等竞争；规模与成本。",
        atomic_unit: "模型/API/对话",
        distribution: "产品与 API 50% + 合作 50%",
        death_risk: "竞品与商业化",
        tags: ["#Anthropic", "#Claude", "#安全对齐", "#AI"],
        scores: [45, 65, 60, 85, 75],
        timeline: [
            { year: "2021", event: "Anthropic 成立" },
            { year: "2023", event: "Claude 2 发布" },
            { year: "2024", event: "Claude 3 系列与多方合作" }
        ],
        key_decisions: [
            "安全与对齐作为核心差异化",
            "多档位模型与 API 满足不同需求",
            "与云厂商合作拓展触达"
        ],
    },
        perplexity: {
        title: "Perplexity",
        subtitle: "AI 搜索与问答产品",
        dao: "搜索 + 大模型。实时检索与生成结合，面向问答与调研。",
        gov: "产品主导。检索与生成流程把控。",
        space: "搜索框 + 回答 + 引用。",
        econ: "订阅（Pro）+ 广告与合作。",
        risk: "与 Google、ChatGPT 等竞争；检索质量与成本。",
        atomic_unit: "查询/回答/引用",
        distribution: "产品与渠道 70% + API 30%",
        death_risk: "竞品与商业化",
        tags: ["#AI搜索", "#Perplexity", "#问答", "#引用"],
        scores: [52, 70, 58, 88, 70],
        timeline: [
            { year: "2022", event: "Perplexity 上线" },
            { year: "2023", event: "Pro 订阅与多模态" },
            { year: "2024", event: "与出版商、企业合作拓展" }
        ],
        key_decisions: [
            "搜索 + 生成结合，建立「AI 搜索」认知",
            "引用与来源可追溯，提升可信度",
            "订阅与合作变现"
        ],
        user_metrics: {
            monthly_active_users: "5000万+",
            daily_active_users: "1500万+",
            total_users: "1亿+",
            growth_rate: "高增长",
            retention_rate: "65%",
            user_demographics: {
                age_range: "22-45岁，知识工作者与调研用户",
                gender_ratio: "相对均衡",
                region: "全球，美国与英语区为主",
                income_level: "中高收入"
            },
            usage_patterns: {
                avg_session_duration: "10分钟/天",
                sessions_per_day: "3-5次",
                content_creation_rate: "查询与追问",
                engagement_rate: "70%"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "订阅 Pro", percentage: 50, description: "Pro 订阅" },
                { type: "广告与合作", percentage: 40, description: "展示与出版商" },
                { type: "API / 企业", percentage: 10, description: "API 与企业版" }
            ],
            monetization_strategy: "订阅+广告+合作",
            financial_metrics: {
                annual_revenue: "成长中",
                revenue_growth: "高增长",
                profitability: "投入期",
                valuation: "估值约数十亿美元"
            }
        },
        competitive_landscape: {
            main_competitors: [
                { name: "Google", similarity: 85, position: "传统搜索" },
                { name: "ChatGPT", similarity: 80, position: "AI 问答" },
                { name: "其他 AI 搜索", similarity: 75, position: "You、Phind 等" }
            ],
            market_position: "AI 搜索与引用问答代表",
            market_share: "AI 搜索细分领先",
            competitive_advantages: [
                "检索+生成与引用",
                "实时与来源可追溯",
                "Pro 与多模态"
            ],
            competitive_disadvantages: [
                "与 Google 规模差距",
                "成本与定价压力",
                "出版商与合作博弈"
            ]
        },
        tech_stack: {
            core_technologies: [
                "检索（RAG）与索引",
                "大模型与生成",
                "引用与来源",
                "多模态与 API"
            ],
            tech_features: [
                "实时检索与生成",
                "引用与链接",
                "追问与对话",
                "Pro 与文件/图像"
            ],
            tech_challenges: [
                "检索质量与幻觉",
                "成本与规模",
                "出版商授权与合规"
            ]
        },
        product_features: {
            core_features: [
                { name: "AI 搜索", description: "自然语言查询、回答、引用", importance: "核心功能" },
                { name: "Pro", description: "更多模型、文件、图像、无广告", importance: "核心功能" },
                { name: "API", description: "企业与开发者 API", importance: "拓展" },
                { name: "多模态", description: "图像输入与理解", importance: "核心功能" }
            ],
            innovative_features: [
                "搜索+生成与引用一体化",
                "来源可追溯建立信任",
                "Pro 与出版商合作"
            ],
            feature_evolution: [
                { year: "2022", feature: "Perplexity 上线" },
                { year: "2023", feature: "Pro、多模态" },
                { year: "2024", feature: "出版商、企业合作" }
            ]
        },
        operation_strategy: {
            content_operation: {
                strategy: "平台主导检索与生成，不开放 UGC 社区",
                creator_support: "出版商合作、引用与流量",
                content_quality: "来源审核、事实核查"
            },
            user_operation: {
                acquisition: "口碑、SEO、KOL",
                activation: "首问、引用感知、Pro 试用",
                retention: "Pro 权益、多模态、API",
                referral: "分享回答"
            },
            event_operation: [
                { name: "产品与出版商", impact: "品牌与合作", description: "发布会与合作" }
            ]
        },
        key_metrics: {
            core_metrics: {
                dau: "1500万+",
                mau: "5000万+",
                engagement_rate: "70%",
                retention_7d: "65%",
                retention_30d: "55%"
            },
            content_metrics: {
                queries_per_day: "数千万",
                pro_subscription_rate: "增长中"
            },
            business_metrics: {
                arpu: "Pro 与广告",
                publisher_deals: "增长中"
            }
        },
        success_factors: [
            "搜索+生成与引用差异化",
            "Pro 与多模态",
            "出版商合作与可信度",
            "高增长与品牌"
        ]
    },
    runway: {
        title: "Runway",
        subtitle: "AI 视频与创意工具",
        dao: "AI 驱动视频生成与编辑。Gen-2/Gen-3 等模型产品化。",
        gov: "产品主导。模型与工具迭代。",
        space: "Web 工具 + API。",
        econ: "订阅 + API。按用量计费。",
        risk: "与 Sora、Pika 等竞争；成本与质量。",
        atomic_unit: "视频/任务/API 调用",
        distribution: "产品 60% + API 40%",
        death_risk: "竞品与商业化",
        tags: ["#AI视频", "#Runway", "#Gen-2", "#创意"],
        scores: [55, 62, 55, 85, 68],
        timeline: [
            { year: "2018", event: "Runway 成立，创意工具起步" },
            { year: "2022", event: "Gen-2 等视频生成能力上线" },
            { year: "2024", event: "Gen-3 与 API 拓展" }
        ],
        key_decisions: [
            "视频生成与编辑一体化，服务创作者与品牌",
            "订阅与 API 双线变现",
            "持续迭代画质与可控性"
        ],
    },
        suno: {
        title: "Suno",
        subtitle: "AI 音乐生成与创作",
        dao: "提示词/歌词驱动音乐生成。面向创作者与大众。",
        gov: "产品主导。模型与产品迭代。",
        space: "Web 应用 + 社区。",
        econ: "订阅（免费额度 + 付费档位）。",
        risk: "与 Udio、版权方等竞争；版权与合规。",
        atomic_unit: "歌曲/任务",
        distribution: "产品与社交 80% + 合作 20%",
        death_risk: "版权与商业化",
        tags: ["#AI音乐", "#Suno", "#生成", "#创作"],
        scores: [60, 58, 52, 82, 62],
        timeline: [
            { year: "2023", event: "Suno 上线并快速流行" },
            { year: "2024", event: "v3/v4 等迭代，订阅与合作拓展" }
        ],
        key_decisions: [
            "提示词/歌词驱动，降低创作门槛",
            "免费额度拉新，付费档位变现",
            "版权与合规持续应对"
        ],
    },
        elevenlabs: {
        title: "ElevenLabs",
        subtitle: "AI 语音合成与克隆",
        dao: "高质量语音生成与克隆。面向内容创作与多语言。",
        gov: "产品主导。模型与 API 迭代。",
        space: "Web 工具 + API。",
        econ: "订阅 + API。按字符/用量计费。",
        risk: "与巨头、垂直竞品竞争；版权与滥用。",
        atomic_unit: "语音/任务/API 调用",
        distribution: "产品 50% + API 50%",
        death_risk: "竞品与合规",
        tags: ["#AI语音", "#ElevenLabs", "#克隆", "#多语言"],
        scores: [50, 60, 55, 82, 68],
        timeline: [
            { year: "2022", event: "ElevenLabs 上线" },
            { year: "2023", event: "多语言与克隆能力拓展" },
            { year: "2024", event: "与创作者、企业合作" }
        ],
        key_decisions: [
            "高质量与多语言建立差异化",
            "订阅与 API 双线变现",
            "版权与滥用治理"
        ],
    },
        github_copilot: {
        title: "GitHub Copilot",
        subtitle: "AI 编程助手",
        dao: "代码补全与生成。IDE 内嵌，降低编程门槛。",
        gov: "GitHub/微软主导。与 VS Code、GitHub 整合。",
        space: "IDE 内 + 对话 + API。",
        econ: "订阅（个人/企业）。",
        risk: "与 Cursor、Codeium 等竞争；版权与合规。",
        atomic_unit: "补全/对话/API 调用",
        distribution: "GitHub/VS Code 内 80% + 其他 20%",
        death_risk: "竞品与商业化",
        tags: ["#AI编程", "#GitHub Copilot", "#代码补全", "#微软"],
        scores: [58, 55, 62, 88, 78],
        timeline: [
            { year: "2021", event: "GitHub Copilot 发布" },
            { year: "2022", event: "正式商业化，个人与企业订阅" },
            { year: "2024", event: "多模型与对话能力迭代" }
        ],
        key_decisions: [
            "与 GitHub/VS Code 深度整合，获取开发者触达",
            "补全与对话结合，提升编程效率",
            "个人与企业双档位变现"
        ],
    },
        cursor: {
        title: "Cursor",
        subtitle: "AI 驱动的代码编辑器",
        dao: "AI 原生编程体验。对话、补全、编辑一体化。",
        gov: "产品主导。基于 VS Code，模型与体验迭代。",
        space: "编辑器 + 对话 + 终端。",
        econ: "订阅（免费额度 + Pro/Business）。",
        risk: "与 Copilot、Codeium 等竞争；模型与成本。",
        atomic_unit: "对话/编辑/任务",
        distribution: "产品与渠道 85% + 合作 15%",
        death_risk: "竞品与商业化",
        tags: ["#AI编程", "#Cursor", "#代码编辑器", "#VS Code"],
        scores: [62, 58, 55, 88, 72],
        timeline: [
            { year: "2022", event: "Cursor 上线" },
            { year: "2023", event: "快速获开发者认可" },
            { year: "2024", event: "多模型与团队功能拓展" }
        ],
        key_decisions: [
            "AI 原生编辑器定位，与 Copilot 插件形态差异化",
            "多模型支持，平衡成本与效果",
            "订阅制变现，团队与企业拓展"
        ],
    },
        cohere: {
        title: "Cohere",
        subtitle: "企业 AI 与多语言大模型",
        dao: "企业级 NLP 与对话。多语言与 RAG 等能力。",
        gov: "技术主导。API 与产品并重。",
        space: "API + 控制台 + 合作。",
        econ: "API 计费 + 企业合作。",
        risk: "与 OpenAI、Anthropic 等竞争；企业获客与留存。",
        atomic_unit: "API 调用/任务",
        distribution: "API 与销售 70% + 合作 30%",
        death_risk: "竞品与商业化",
        tags: ["#Cohere", "#企业AI", "#多语言", "#API"],
        scores: [48, 62, 58, 82, 72],
        timeline: [
            { year: "2019", event: "Cohere 成立" },
            { year: "2022", event: "Command 等模型与 API 发布" },
            { year: "2024", event: "多语言与企业场景拓展" }
        ],
        key_decisions: [
            "企业场景与多语言作为差异化",
            "API 优先，与云厂商合作拓展",
            "RAG 与检索能力强化落地"
        ],
    },
        gemini: {
        title: "Gemini",
        subtitle: "Google 多模态大模型",
        dao: "多模态与产品整合。搜索、Workspace、终端全场景。",
        gov: "Google 主导。与搜索、Gmail、Pixel 等整合。",
        space: "对话 + 搜索 + 产品内嵌。",
        econ: "订阅（One）+ API。与 Google Cloud 整合。",
        risk: "与 OpenAI、Anthropic 竞争；产品体验与口碑。",
        atomic_unit: "对话/多模态/API",
        distribution: "Google 系产品 60% + API 40%",
        death_risk: "竞品与产品体验",
        tags: ["#Gemini", "#Google", "#多模态", "#大模型"],
        scores: [52, 68, 62, 86, 78],
        timeline: [
            { year: "2023", event: "Gemini 发布" },
            { year: "2024", event: "Gemini 1.5/2.0 与产品全系整合" },
            { year: "2024", event: "与搜索、Workspace 深度打通" }
        ],
        key_decisions: [
            "多模态与 Google 生态整合，建立场景与数据优势",
            "One 订阅与 API 双线变现",
            "与搜索、Workspace 协同强化触达"
        ],
    },
        poe: {
        title: "Poe",
        subtitle: "多 AI 机器人聚合平台",
        dao: "一个入口访问多个 AI。用户与 ChatGPT、Claude、自建机器人对话。",
        gov: "Quora 运营。机器人审核与规则。",
        space: "机器人列表 + 对话 + 创建。",
        econ: "订阅（访问高级模型）+ 机器人创作者分成。",
        risk: "与各模型官方产品竞争；分成与合规。",
        atomic_unit: "机器人/对话",
        distribution: "产品与推荐 70% + 创作者 30%",
        death_risk: "竞品与分成模式",
        tags: ["#Poe", "#Quora", "#多AI", "#聚合"],
        scores: [58, 62, 55, 80, 65],
        timeline: [
            { year: "2022", event: "Poe 上线" },
            { year: "2023", event: "多模型与机器人生态拓展" },
            { year: "2024", event: "订阅与创作者分成深化" }
        ],
        key_decisions: [
            "多 AI 聚合降低选择成本，建立入口价值",
            "订阅访问高级模型变现",
            "机器人创建与分成激励生态"
        ],
    },
        pypi: {
        title: "PyPI",
        subtitle: "Python 包索引与开发者社区",
        dao: "Python 包发布、安装与发现。Python 生态默认源。",
        gov: "PSF 与社区运营。规范与安全策略。",
        space: "包库 + 文档 + 依赖。",
        econ: "免费公共。赞助与捐赠。",
        risk: "供应链安全；与私有仓库竞争。",
        atomic_unit: "包/版本/依赖",
        distribution: "pip 拉取 90% + 搜索 10%",
        death_risk: "安全与可持续运营",
        tags: ["#PyPI", "#Python", "#包管理", "#PSF"],
        scores: [48, 58, 60, 30, 45],
        timeline: [
            { year: "2003", event: "PyPI 上线" },
            { year: "2018", event: "迁移至新基础设施" },
            { year: "2024", event: "供应链安全与规范持续加强" }
        ],
        key_decisions: [
            "与 Python 生态绑定，成为默认源",
            "免费公共，依赖赞助与社区",
            "安全与规范治理"
        ],
    },
        sourceforge: {
        title: "SourceForge",
        subtitle: "开源项目托管与开发者社区",
        dao: "代码托管、下载与协作。早期开源项目聚集地。",
        gov: "平台运营。广告与下载捆绑曾引发争议。",
        space: "项目页 + 代码 + 下载 + 讨论。",
        econ: "广告 + 增值服务。",
        risk: "与 GitHub、GitLab 竞争；声誉与迁移。",
        atomic_unit: "项目/版本/下载",
        distribution: "搜索与下载 70% + 订阅 30%",
        death_risk: "竞品与声誉",
        tags: ["#SourceForge", "#开源", "#托管", "#下载"],
        scores: [45, 55, 50, 35, 55],
        timeline: [
            { year: "1999", event: "SourceForge 成立" },
            { year: "2010", event: "鼎盛期，大量开源项目托管" },
            { year: "2016", event: "广告与捆绑争议，项目迁移至 GitHub" },
            { year: "2024", event: "仍运营，影响力下降" }
        ],
        key_decisions: [
            "早期成为开源托管标准",
            "广告变现引发争议与迁移",
            "与 GitHub 竞争失利，寻求差异化"
        ],
    },
        vsco: {
        title: "VSCO",
        subtitle: "摄影与滤镜社区",
        dao: "摄影创作与审美社区。滤镜、编辑与发布。",
        gov: "平台主导。内容审核与会员体系。",
        space: "发现 + 个人主页 + 编辑工具。",
        econ: "会员订阅（滤镜与高级功能）。",
        risk: "与 Instagram、小红书等竞争；增长与变现。",
        atomic_unit: "图片/滤镜/发布",
        distribution: "发现与关注 60% + 搜索 40%",
        death_risk: "竞品与商业化",
        tags: ["#VSCO", "#摄影", "#滤镜", "#社区"],
        scores: [58, 52, 55, 45, 55],
        timeline: [
            { year: "2011", event: "VSCO 成立，滤镜应用起步" },
            { year: "2015", event: "社区与发现功能上线" },
            { year: "2024", event: "会员与工具持续运营" }
        ],
        key_decisions: [
            "滤镜与审美建立差异化",
            "社区与发现增强粘性",
            "会员制变现"
        ]
    },

    // === 近期突出 AI 案例（2024–2025）===
    devin: {
        title: "Devin",
        subtitle: "AI 编程 Agent，自主完成开发任务",
        dao: "AI 自主理解需求、写代码、调试、部署。将自然语言任务转化为完整软件交付。",
        gov: "Cognition 主导。闭源 Agent，按任务或订阅计费。",
        space: "任务描述 + Agent 执行 + 代码与日志。用户监督与干预节点。",
        econ: "订阅制 + 按任务包。面向企业与个人开发者。",
        risk: "与 Cursor、GitHub Copilot、Windsurf 等竞争；准确率与成本。",
        atomic_unit: "任务/会话/代码交付",
        distribution: "产品 80% + API/企业 20%",
        death_risk: "竞品与商业化",
        tags: ["#AI编程", "#Agent", "#Devin", "#Cognition"],
        scores: [55, 72, 58, 90, 75],
        timeline: [
            { year: "2024", event: "Cognition 推出 Devin，AI 编程 Agent 引发关注" },
            { year: "2024", event: "支持多轮任务、代码库理解与自主调试" },
            { year: "2025", event: "企业版与生态拓展" }
        ],
        key_decisions: [
            "全流程 Agent 而非单点补全，建立「自主编程」认知",
            "任务级计费与订阅，平衡体验与变现",
            "与 Cursor/Copilot 等形成差异化：端到端交付"
        ],
    },
        v0: {
        title: "v0",
        subtitle: "Vercel 出品，AI 生成前端 UI",
        dao: "自然语言或草图生成 React/Next 组件与页面。设计到代码一键完成。",
        gov: "Vercel 主导。与 Vercel 部署与生态深度集成。",
        space: "提示词/截图 + 生成 UI + 编辑与导出。可接续迭代。",
        econ: "Vercel 生态内增值，Pro/团队订阅。",
        risk: "与 Galileo、Locofy、Builder.io 等竞争；设计与代码一致性。",
        atomic_unit: "项目/组件/页面",
        distribution: "产品 70% + 生态 30%",
        death_risk: "竞品与设计还原度",
        tags: ["#AI设计", "#前端", "#v0", "#Vercel", "#UI生成"],
        scores: [60, 68, 55, 88, 72],
        timeline: [
            { year: "2024", event: "Vercel 推出 v0，AI 生成 React/Next UI" },
            { year: "2024", event: "与 shadcn/ui 等组件库结合，前端圈爆款" },
            { year: "2025", event: "多模型与协作能力拓展" }
        ],
        key_decisions: [
            "设计到代码一体化，降低前端与设计协作成本",
            "与 Vercel/Next 生态绑定，形成工作流闭环",
            "组件级可编辑与迭代，而非一次性出图"
        ],
    },
        luma_ai: {
        title: "Luma Dream Machine",
        subtitle: "AI 文生视频与 3D 重建",
        dao: "提示词或图片生成高质量短视频。同时做 3D 捕捉（NeRF 等）与 AR。",
        gov: "Luma 主导。闭源模型，API 与产品并行。",
        space: "提示词/图 + 视频生成 + 3D/AR 工具。",
        econ: "订阅 + API。按生成量与档位计费。",
        risk: "与 Runway、Sora、Kling 等竞争；成本与一致性。",
        atomic_unit: "视频/场景/API 调用",
        distribution: "产品 60% + API 40%",
        death_risk: "竞品与商业化",
        tags: ["#AI视频", "#Luma", "#Dream Machine", "#3D"],
        scores: [58, 65, 52, 85, 68],
        timeline: [
            { year: "2023", event: "Luma 已有 3D 捕捉与 AR 产品" },
            { year: "2024", event: "Dream Machine 文生视频上线，质量与节奏受关注" },
            { year: "2025", event: "多模态与 3D 结合拓展" }
        ],
        key_decisions: [
            "文生视频与 3D/AR 能力结合，差异化于纯视频模型",
            "订阅与 API 双线，服务创作者与开发者",
            "质量与速度平衡，建立品牌认知"
        ],
    },
        kling: {
        title: "可灵 (Kling)",
        subtitle: "快手系 AI 视频生成",
        dao: "提示词/图生视频，强调运动与时长。面向短视频与营销场景。",
        gov: "快手/快手技术团队主导。闭源模型，国内合规优先。",
        space: "提示词/图 + 视频生成 + 模板与社区。",
        econ: "免费额度 + 会员/积分。国内为主。",
        risk: "与即梦、Sora、Runway、Kling 国际版等竞争；版权与合规。",
        atomic_unit: "视频/任务/积分",
        distribution: "App 与网页 80% + 开放能力 20%",
        death_risk: "竞品与合规",
        tags: ["#AI视频", "#可灵", "#快手", "#国内"],
        scores: [62, 58, 55, 82, 65],
        timeline: [
            { year: "2024", event: "可灵 Kling 上线，快手系 AI 视频" },
            { year: "2024", event: "长时长与运动表现受关注，国内用户增长" },
            { year: "2025", event: "会员与开放能力拓展" }
        ],
        key_decisions: [
            "国内合规与体验优先，服务短视频与营销场景",
            "运动与时长作为卖点，差异化于早期文生视频",
            "免费额度 + 会员/积分，平衡增长与变现"
        ],
    },
        deepseek: {
        title: "DeepSeek",
        subtitle: "国产大模型，代码与性价比",
        dao: "开源与闭源并行。代码与推理能力强，定价激进，吸引企业与开发者。",
        gov: "DeepSeek 公司主导。开源模型协议与 API 商业并存。",
        space: "对话 + API + 开源模型。多档位与多模态拓展。",
        econ: "API 按量计费，定价极低。开源免费吸引生态。",
        risk: "与 OpenAI、Claude、国产大厂模型竞争；规模与可持续。",
        atomic_unit: "对话轮次/API 调用/Token",
        distribution: "API 60% + 对话产品 30% + 开源 10%",
        death_risk: "竞品与盈利可持续性",
        tags: ["#大模型", "#DeepSeek", "#代码", "#国产", "#性价比"],
        scores: [52, 70, 60, 88, 78],
        timeline: [
            { year: "2023", event: "DeepSeek 大模型发布，代码能力突出" },
            { year: "2024", event: "开源与 API 定价激进，国内外关注" },
            { year: "2025", event: "多模态与 R1 等推理方向" }
        ],
        key_decisions: [
            "代码与推理能力作为差异化，吸引开发者与企业",
            "极低 API 定价建立采用与口碑",
            "开源与闭源并行，平衡影响力与变现"
        ],
    },
        descript: {
        title: "Descript",
        subtitle: "AI 音视频编辑与播客工具",
        dao: "转录、剪辑、克隆语音、多轨编辑一体化。面向播客与视频创作者。",
        gov: "产品主导。订阅制，AI 功能作为核心卖点。",
        space: "时间线 + 文本编辑（编辑文本即编辑音视频）+ AI 功能。",
        econ: "订阅制（免费额度 + Creator/Pro 等档位）。",
        risk: "与 Adobe、达芬奇、剪映等竞争；专业与易用平衡。",
        atomic_unit: "项目/片段/导出",
        distribution: "桌面与 Web 80% + 协作 20%",
        death_risk: "竞品与订阅留存",
        tags: ["#AI编辑", "#播客", "#Descript", "#语音克隆", "#转录"],
        scores: [58, 62, 55, 82, 70],
        timeline: [
            { year: "2017", event: "Descript 成立，播客转录与编辑起步" },
            { year: "2020", event: "Overdub 语音克隆等 AI 功能上线" },
            { year: "2024", event: "视频与多轨编辑、AI 功能持续增强" }
        ],
        key_decisions: [
            "文本即时间线：编辑文本即编辑音视频，降低门槛",
            "AI 转录、克隆、降噪等作为差异化",
            "订阅制服务创作者与团队，与 Adobe 等错位"
        ]
    },

    // === AI 类型社区产品 ===
    flowgpt: {
        title: "FlowGPT",
        subtitle: "Prompt 分享与发现社区",
        dao: "用户发布、发现、复制 Prompt。与 ChatGPT/Claude 等对接，形成 Prompt 内容飞轮。",
        gov: "社区主导 + 平台审核。创作者发布 Prompt，用户点赞、使用、复刻。",
        space: "Prompt 流 + 分类 + 对话体验。公开 Prompt 可被浏览与一键使用。",
        econ: "免费为主 + 会员/打赏。部分创作者付费或平台增值。",
        risk: "与官方插件、其他 Prompt 站竞争；质量与版权。",
        atomic_unit: "Prompt/对话/复刻",
        distribution: "推荐与分类 60% + 搜索 30% + 社区 10%",
        death_risk: "竞品与商业化天花板",
        tags: ["#AI社区", "#Prompt", "#FlowGPT", "#分享"],
        scores: [68, 55, 58, 78, 55],
        timeline: [
            { year: "2023", event: "FlowGPT 上线，Prompt 分享社区" },
            { year: "2024", event: "多模型对接、对话与复刻体验增强" },
            { year: "2025", event: "会员与创作者激励探索" }
        ],
        key_decisions: [
            "Prompt 即内容，降低使用门槛并形成 UGC 飞轮",
            "与主流模型产品对接，一键使用增强粘性",
            "社区发现与分类，平衡质量与规模"
        ],
    },
        promptbase: {
        title: "PromptBase",
        subtitle: "Prompt 市场与交易平台",
        dao: "创作者出售 Midjourney/DALL·E/Stable Diffusion 等 Prompt。买家付费获得可复现提示词。",
        gov: "平台抽成与审核。创作者定价，平台托管交易。",
        space: "市场 + 分类 + 预览图。以 Prompt 为商品，以效果图为展示。",
        econ: "交易抽成。创作者获得大部分收入，平台抽成。",
        risk: "与免费 Prompt 社区、官方模板竞争；版权与复刻纠纷。",
        atomic_unit: "Prompt/交易/下载",
        distribution: "搜索与分类 50% + 推荐 40% + 创作者 10%",
        death_risk: "免费替代与交易规模",
        tags: ["#AI社区", "#Prompt", "#市场", "#PromptBase"],
        scores: [58, 52, 50, 72, 58],
        timeline: [
            { year: "2022", event: "PromptBase 上线，专注 AI 图像 Prompt 交易" },
            { year: "2023", event: "扩展至多模型与多类型 Prompt" },
            { year: "2024", event: "与创作者分成、审核与版权策略" }
        ],
        key_decisions: [
            "Prompt 商品化，服务愿意付费的创作者与买家",
            "以效果图与分类建立发现与信任",
            "平台抽成与版权审核平衡生态"
        ],
    },
        openart: {
        title: "OpenArt",
        subtitle: "AI 艺术发现与提示词社区",
        dao: "用户发布 AI 作品与 Prompt，他人发现、复刻、讨论。面向 AI 图像/视频创作者。",
        gov: "社区主导 + 平台规则。作品与 Prompt 公开，可标注模型与参数。",
        space: "作品流 + 提示词 + 模型筛选。发现、复刻、项目（Project）组织。",
        econ: "免费为主 + 会员/API。增值为加速、商用授权等。",
        risk: "与 Civitai、Midjourney 画廊、官方产品竞争；版权与合规。",
        atomic_unit: "作品/Prompt/项目",
        distribution: "推荐与发现 60% + 搜索 25% + 关注 15%",
        death_risk: "竞品与商业化",
        tags: ["#AI社区", "#AI艺术", "#OpenArt", "#发现"],
        scores: [62, 58, 55, 75, 55],
        timeline: [
            { year: "2022", event: "OpenArt 上线，AI 艺术发现与 Prompt" },
            { year: "2023", event: "多模型支持、复刻与项目功能" },
            { year: "2024", event: "会员与 API、商用能力" }
        ],
        key_decisions: [
            "作品与 Prompt 一体化展示，降低复刻门槛",
            "多模型与参数标注，服务进阶创作者",
            "发现与社区并重，形成内容飞轮"
        ],
    },
        langchain: {
        title: "LangChain",
        subtitle: "AI 应用开发框架与生态社区",
        dao: "开源框架 + 组件库 + 模板。开发者用 LangChain 构建 RAG、Agent 等，社区分享模板与最佳实践。",
        gov: "开源主导 + LangChain 公司商业产品。社区贡献与文档、模板库。",
        space: "代码库 + 文档 + 模板 + 讨论。以「链」与「Agent」为抽象的应用开发生态。",
        econ: "开源免费 + LangSmith/LangServe 等商业产品。企业监控、托管变现。",
        risk: "与 LlamaIndex、CrewAI、官方 SDK 竞争；抽象与锁入。",
        atomic_unit: "链/Agent/模板/项目",
        distribution: "文档与 GitHub 50% + 社区 30% + 商业 20%",
        death_risk: "竞品与抽象迭代",
        tags: ["#AI社区", "#开发框架", "#LangChain", "#RAG", "#Agent"],
        scores: [55, 72, 60, 82, 70],
        timeline: [
            { year: "2022", event: "LangChain 开源，LLM 应用框架起步" },
            { year: "2023", event: "生态爆发，RAG、Agent 模板与社区" },
            { year: "2024", event: "LangSmith、LangGraph 等商业与多模态" }
        ],
        key_decisions: [
            "链与 Agent 抽象降低 LLM 应用开发门槛",
            "开源与文档建立开发者社区与采用",
            "商业产品（LangSmith 等）服务企业监控与托管"
        ],
    },
        novelai: {
        title: "NovelAI",
        subtitle: "AI 写作与图像订阅社区",
        dao: "订阅制 AI 写作与图像。用户创作故事与图像，社区可分享与发现（部分功能）。强调隐私与创作自由。",
        gov: "产品主导。订阅档位与使用额度。内容政策相对宽松，面向创作向用户。",
        space: "写作编辑器 + 图像生成 + 社区/画廊（可选）。以订阅与额度为核心。",
        econ: "订阅制。按档位限制生成量与功能。",
        risk: "与官方模型、其他订阅产品竞争；合规与版权。",
        atomic_unit: "故事/图像/Token",
        distribution: "产品 80% + 社区 20%",
        death_risk: "竞品与合规",
        tags: ["#AI社区", "#写作", "#图像", "#NovelAI", "#订阅"],
        scores: [58, 50, 52, 78, 62],
        timeline: [
            { year: "2021", event: "NovelAI 上线，AI 写作订阅" },
            { year: "2022", event: "图像生成与社区功能扩展" },
            { year: "2024", event: "多模型与订阅档位迭代" }
        ],
        key_decisions: [
            "写作与图像一体化，服务故事与同人创作",
            "订阅制与隐私导向，形成稳定付费用户",
            "社区与画廊增强粘性与传播"
        ],
    },
        seaart: {
        title: "SeaArt",
        subtitle: "AI 绘画与创作社区",
        dao: "用户发布 AI 作品、模型与提示词，他人发现、使用、讨论。面向国内与全球 AI 绘画创作者。",
        gov: "平台主导 + 社区贡献。内容审核与版权策略，创作者可发布模型与作品。",
        space: "作品流 + 模型库 + 提示词 + 任务。发现、创作、复刻一体化。",
        econ: "免费额度 + 会员/积分。按生成量与功能档位计费。",
        risk: "与即梦、文心一格、Civitai 等竞争；合规与内容质量。",
        atomic_unit: "作品/模型/任务",
        distribution: "推荐与发现 55% + 搜索 30% + 关注 15%",
        death_risk: "竞品与合规",
        tags: ["#AI社区", "#AI绘画", "#SeaArt", "#国内"],
        scores: [62, 55, 55, 75, 58],
        timeline: [
            { year: "2023", event: "SeaArt 上线，AI 绘画社区" },
            { year: "2024", event: "模型与作品量增长，国内用户为主" },
            { year: "2025", event: "会员与开放能力拓展" }
        ],
        key_decisions: [
            "作品、模型、提示词一体化，降低创作与复刻门槛",
            "国内合规与体验优先，服务中文创作者",
            "免费额度 + 会员平衡增长与变现"
        ],
    },
        xueqiu: {
        title: "雪球 (Xueqiu)",
        subtitle: "投资者社交与决策社区",
        dao: "价值投资与信息共享。用户关注标的、发帖讨论、跟投大V，形成基于信任的决策参考。",
        gov: "平台规则 + 大V影响力。实名与认证增强可信度，社区自治与举报并存。",
        space: "行情 + 资讯 + 组合 + 讨论区。信息流与关系流结合，股吧式氛围。",
        econ: "导流券商开户、基金销售、会员与数据服务。用户资产与交易意愿即商业基础。",
        risk: "合规与荐股边界；情绪化与从众；大V依赖与信息噪音。",
        atomic_unit: "帖子/组合/关注关系",
        distribution: "关注流 45% + 推荐 35% + 搜索与热门 20%",
        death_risk: "监管收紧与用户信任流失",
        tags: ["#投资社区", "#雪球", "#价值投资", "#财经"],
        scores: [65, 55, 60, 72, 68],
        timeline: [
            { year: "2010", event: "雪球上线，从美股资讯起步" },
            { year: "2013", event: "A股行情与组合、社区讨论成型" },
            { year: "2016", event: "基金销售与券商导流商业化" },
            { year: "2020", event: "牛市带动用户与交易量双增" },
            { year: "2024", event: "投顾与内容合规强化" }
        ],
        key_decisions: [
            "从美股到 A 股，抓住国内个人投资者需求",
            "组合与跟投强化「可执行」的社交价值",
            "大V 与机构入驻形成内容与信任双供给"
        ],
    },
        yuque: {
        title: "语雀 (Yuque)",
        subtitle: "知识库与团队文档协作",
        dao: "结构化知识沉淀。文档、表格、画板、知识库构成「团队第二大脑」，降低信息孤岛。",
        gov: "空间/团队层级权限。管理员控制可见与编辑，文档归属清晰。",
        space: "知识库 + 文档树 + 协作编辑。层级与链接形成知识图谱。",
        econ: "免费个人/小团队 + 企业付费。按人数与高级能力收费。",
        risk: "与飞书文档、Notion、Confluence 竞争；迁移成本与生态锁定。",
        atomic_unit: "文档/知识库/表格/画板",
        distribution: "内部链接与搜索 70% + 分享 20% + 模板 10%",
        death_risk: "大厂免费策略与迁移流失",
        tags: ["#知识库", "#语雀", "#协作", "#文档"],
        scores: [58, 50, 62, 70, 65],
        timeline: [
            { year: "2016", event: "语雀由蚂蚁孵化，面向内部与生态" },
            { year: "2018", event: "对外开放，个人与团队版" },
            { year: "2021", event: "画板、表格等能力与模板市场" },
            { year: "2024", event: "与钉钉/阿里云协同，企业市场深化" }
        ],
        key_decisions: [
            "知识库 + 文档 + 协作一体化，对标 Notion 中文场景",
            "免费额度吸引个人与小微，企业版变现",
            "与阿里生态集成，服务政企与开发者"
        ],
    },
        shimo: {
        title: "石墨文档 (Shimo)",
        subtitle: "在线协作文档与表格",
        dao: "实时协作与轻量化。多人同时编辑文档/表格/表单，降低沟通与版本成本。",
        gov: "文档级权限与文件夹。所有者控制分享与编辑，企业版有管理后台。",
        space: "文档列表 + 编辑区 + 评论。以文档为原子单位，文件夹组织。",
        econ: "免费个人版 + 企业订阅。按席位与高级功能（如 API、审计）收费。",
        risk: "与腾讯文档、飞书、语雀、Notion 竞争；品牌与生态位压力。",
        atomic_unit: "文档/表格/表单",
        distribution: "内部协作 80% + 分享与模板 20%",
        death_risk: "大厂免费与生态挤压",
        tags: ["#协作文档", "#石墨", "#在线办公", "#表格"],
        scores: [52, 48, 58, 68, 62],
        timeline: [
            { year: "2015", event: "石墨文档上线，国内首批在线协作文档" },
            { year: "2017", event: "企业版与融资，政企客户拓展" },
            { year: "2020", event: "远程办公需求爆发，日活与付费双增" },
            { year: "2024", event: "与信创、私有化部署结合" }
        ],
        key_decisions: [
            "早期押注在线协作，差异化于本地 Office",
            "企业版与政企、教育场景形成稳定收入",
            "保持轻量，与重型 OA 错位竞争"
        ],
    },
        jianshu: {
        title: "简书 (Jianshu)",
        subtitle: "创作与阅读社区",
        dao: "人人可创作、人人可阅读。以文章与专题为载体的轻博客，强调表达与发现。",
        gov: "编辑推荐 + 专题主编。首页与专题由编辑与志愿者运营，算法介入较晚。",
        space: "首页流 + 专题 + 作者主页。以文章为原子单位，专题聚合同好。",
        econ: "会员与简书贝（积分）、出版与课程导流。早期广告较少，偏内容付费。",
        risk: "与公众号、知乎、小红书竞争；增长放缓与创作者外流。",
        atomic_unit: "文章/专题/作者",
        distribution: "编辑与专题 50% + 关注 30% + 搜索 20%",
        death_risk: "流量与创作者被大平台虹吸",
        tags: ["#创作社区", "#简书", "#阅读", "#轻博客"],
        scores: [62, 45, 55, 58, 52],
        timeline: [
            { year: "2013", event: "简书上线，主打简洁写作与阅读" },
            { year: "2016", event: "专题与主编体系，社区化" },
            { year: "2019", event: "简书贝与会员体系，探索变现" },
            { year: "2023", event: "与出版、课程等深度合作" }
        ],
        key_decisions: [
            "产品极简，降低写作与阅读门槛",
            "专题与主编形成半中心化内容组织",
            "会员与贝体系绑定创作者与深度用户"
        ],
    },
        smzdm: {
        title: "什么值得买 (SMZDM)",
        subtitle: "消费决策与好价社区",
        dao: "理性消费、分享好价。用户爆料与测评，他人跟买与讨论，形成「值友」认同。",
        gov: "编辑精选 + 用户爆料审核。首页与榜单编辑主导，爆料需审核与去重。",
        space: "好价流 + 测评 + 百科 + 社区。以商品与好价为原子，评论与点赞为互动。",
        econ: "电商导流佣金为主，广告与品牌合作。用户决策即商业价值。",
        risk: "与小红书、抖音电商、大促页竞争；爆料同质化与信任稀释。",
        atomic_unit: "好价/测评/爆料",
        distribution: "编辑推荐 45% + 好价与爆料 35% + 搜索与关注 20%",
        death_risk: "决策场景被内容平台电商化替代",
        tags: ["#消费决策", "#什么值得买", "#好价", "#值友"],
        scores: [58, 50, 55, 75, 68],
        timeline: [
            { year: "2010", event: "什么值得买上线，海淘与好价导购" },
            { year: "2015", event: "国产电商覆盖扩大，值友文化形成" },
            { year: "2019", event: "上市，移动端与内容深化" },
            { year: "2024", event: "与直播、短视频形态结合" }
        ],
        key_decisions: [
            "以「好价」与「爆料」为核心，建立消费信任",
            "编辑 + UGC 双供给，平衡质量与规模",
            "电商佣金模式与用户利益绑定"
        ],
    },
        kuan: {
        title: "酷安 (Coolapk)",
        subtitle: "安卓应用与玩机社区",
        dao: "发现应用、交流玩机。用户下载与点评应用，讨论 ROM、 root、机型，形成极客向社区。",
        gov: "应用商店规则 + 社区版主。应用上架审核，社区依赖版主与举报。",
        space: "应用详情 + 评论区 + 动态 + 圈子。应用与话题双轴组织。",
        econ: "应用分发与联运、广告。曾尝试去应用商店化，后回归分发与内容结合。",
        risk: "应用商店被手机厂商预装挤压；合规与内容边界。",
        atomic_unit: "应用/点评/动态/帖子",
        distribution: "搜索与榜单 40% + 动态与关注 35% + 圈子 25%",
        death_risk: "分发价值下降与社区泛化",
        tags: ["#安卓", "#酷安", "#玩机", "#应用"],
        scores: [65, 55, 60, 62, 58],
        timeline: [
            { year: "2010", event: "酷安网上线，安卓应用分享" },
            { year: "2014", event: "社区化改版，点评与讨论" },
            { year: "2018", event: "动态与圈子，强化社区" },
            { year: "2023", event: "与厂商、开发者合作深化" }
        ],
        key_decisions: [
            "从应用分享到社区，留住高价值玩机用户",
            "点评与讨论形成应用之外的粘性",
            "在厂商应用商店挤压下守住差异化"
        ],
    },
        niuke: {
        title: "牛客网 (Niuke)",
        subtitle: "求职与校招笔试面试社区",
        dao: "信息对称、互助上岸。求职者分享面经、题库与内推，企业发题与招聘，形成强目的社区。",
        gov: "企业认证 + 用户举报。企业发布需认证，违规与虚假信息依赖举报。",
        space: "面经 + 题库 + 讨论区 + 内推。以岗位与公司为维度组织。",
        econ: "企业招聘服务、培训与课程、会员与刷题服务。B 端与 C 端双收。",
        risk: "与拉勾、BOSS、力扣求职场景重叠；内容同质化。",
        atomic_unit: "面经/题目/帖子/内推",
        distribution: "搜索与公司 50% + 推荐与热榜 30% + 关注 20%",
        death_risk: "招聘场景被综合平台蚕食",
        tags: ["#求职", "#牛客", "#校招", "#面经"],
        scores: [62, 52, 58, 72, 65],
        timeline: [
            { year: "2014", event: "牛客网上线，笔试面试题库" },
            { year: "2017", event: "面经与讨论区，社区化" },
            { year: "2020", event: "校招与内推成核心场景" },
            { year: "2024", event: "AI 刷题与求职辅导" }
        ],
        key_decisions: [
            "题库 + 面经 + 内推形成求职闭环",
            "校招季强周期，运营与产品围绕节点",
            "企业端收费与 C 端会员平衡"
        ],
    },
        jicore: {
        title: "机核 (JGCore)",
        subtitle: "游戏与文化内容社区",
        dao: "认真玩游戏、聊文化。以电台、文章与视频承载游戏与泛文化内容，核心用户高粘性。",
        gov: "编辑与嘉宾主导。PGC 为主，用户评论与投稿为辅，调性由内容把控。",
        space: "文章 + 电台 + 视频 + 社区。以节目与专题为单元，社区沉淀讨论。",
        econ: "广告与品牌合作、电商导流、会员与周边。偏内容品牌变现。",
        risk: "与 B 站、抖音游戏内容竞争；规模与调性平衡。",
        atomic_unit: "节目/文章/视频/帖子",
        distribution: "编辑推荐 60% + 订阅 25% + 社区 15%",
        death_risk: "流量与人才被大平台吸纳",
        tags: ["#游戏文化", "#机核", "#电台", "#单机"],
        scores: [68, 48, 62, 55, 60],
        timeline: [
            { year: "2010", event: "机核网成立，游戏文化内容" },
            { year: "2015", event: "电台与节目体系成熟" },
            { year: "2020", event: "视频与直播占比提升" },
            { year: "2024", event: "线下与周边、会员深化" }
        ],
        key_decisions: [
            "坚持游戏与文化调性，不做纯流量内容",
            "电台与长内容建立品牌与信任",
            "社区与电商、线下延伸变现"
        ],
    },
        dongqiudi: {
        title: "懂球帝 (Dongqiudi)",
        subtitle: "足球资讯与球迷社区",
        dao: "懂球的人都在这里。资讯、数据、社区一体化，满足观赛与讨论需求。",
        gov: "编辑与运营主导资讯，社区版主与举报管理 UGC。",
        space: "资讯流 + 数据 + 圈子 + 评论。以比赛、球队、球员为维度。",
        econ: "广告与品牌、电商与周边、付费内容与会员。赛事与球迷经济。",
        risk: "与虎扑、直播吧、大厂体育竞争；版权与合规。",
        atomic_unit: "资讯/数据/帖子/评论",
        distribution: "编辑推荐 50% + 关注与圈子 35% + 数据 15%",
        death_risk: "版权与流量成本挤压",
        tags: ["#足球", "#懂球帝", "#体育", "#球迷"],
        scores: [62, 55, 58, 65, 62],
        timeline: [
            { year: "2013", event: "懂球帝上线，足球资讯与数据" },
            { year: "2016", event: "社区与评论、圈子成型" },
            { year: "2019", event: "直播与短视频、电商拓展" },
            { year: "2024", event: "付费内容与会员体系" }
        ],
        key_decisions: [
            "资讯 + 数据 + 社区一体化，提升留存",
            "深耕足球垂类，再做泛体育",
            "版权与自制内容并重"
        ],
    },
        nga: {
        title: "NGA (艾泽拉斯国家地理)",
        subtitle: "游戏与综合论坛社区",
        dao: "版块自治、梗文化浓厚。以游戏起家，版块为单元，形成强认同的论坛文化。",
        gov: "版主 + 管理员。版块自治，总版规与各版规并存，管理依赖人力。",
        space: "版块 + 帖子 + 回复。树状结构，以主题为原子。",
        econ: "广告与游戏联运、会员与特权。流量大但变现相对克制。",
        risk: "与贴吧、B 站、Discord 竞争；论坛形态老化与用户迁移。",
        atomic_unit: "帖子/回复/版块",
        distribution: "版块入口 60% + 热帖与推荐 30% + 搜索 10%",
        death_risk: "年轻用户向新形态迁移",
        tags: ["#论坛", "#NGA", "#游戏", "#魔兽"],
        scores: [70, 45, 65, 55, 58],
        timeline: [
            { year: "2002", event: "NGA 成立，魔兽世界主题站" },
            { year: "2010", event: "多游戏与综合区扩展" },
            { year: "2018", event: "移动端与 App 深化" },
            { year: "2024", event: "内容与商业化平衡" }
        ],
        key_decisions: [
            "从魔兽到多游戏与综合，扩大用户盘",
            "版块与版主维持秩序与氛围",
            "保持论坛形态，与新兴平台差异化"
        ],
    },
        tieba: {
        title: "百度贴吧 (Tieba)",
        subtitle: "兴趣吧与话题论坛",
        dao: "以关键词聚人。每个吧是一个兴趣或话题的论坛，用户发帖回帖，吧主与吧务自治。",
        gov: "吧主 + 吧务 + 百度规则。吧主申请制，内容与秩序依赖吧务与机器审核。",
        space: "吧列表 + 帖子流 + 楼中楼。以吧为单元，帖子为原子。",
        econ: "广告与品牌吧、游戏与娱乐导流。曾为百度重要流量与社交资产。",
        risk: "用户与创作者外流至 B 站、微博、豆瓣；产品迭代滞后。",
        atomic_unit: "帖子/回复/吧",
        distribution: "吧入口 50% + 推荐与热帖 35% + 搜索 15%",
        death_risk: "流量与氛围被新兴平台替代",
        tags: ["#贴吧", "#论坛", "#兴趣", "#百度"],
        scores: [68, 50, 62, 58, 52],
        timeline: [
            { year: "2003", event: "贴吧上线，基于搜索关键词建吧" },
            { year: "2010", event: "规模达数百万吧，日活过亿" },
            { year: "2016", event: "直播、小说等形态接入" },
            { year: "2023", event: "与百度 App 深度整合" }
        ],
        key_decisions: [
            "关键词即吧名，降低建吧与发现门槛",
            "吧主与吧务自治，节省平台运营成本",
            "娱乐与游戏吧成为流量与商业重心"
        ],
    },
        tianya: {
        title: "天涯社区 (Tianya)",
        subtitle: "老牌综合论坛与中文舆论场",
        dao: "全球华人网上家园。杂谈、煮酒论史、娱乐八卦、国际观察等版块构成树状论坛，长帖与跟帖形成深度讨论与舆论发酵；曾诞生《鬼吹灯》等 IP、多起公共事件策源地，影响一代网民表达与议题设置。",
        gov: "版主（网友选举/站方任命）+ 站方。版块自治与版主删帖/加精权，站方把握内容底线、版权与商业化；后期监管与成本压力下收紧。",
        space: "版块（杂谈/煮酒/八卦/国观/经济/地方等） + 帖子列表 + 主帖与树状回复；热帖与推荐、搜索与个人文集。",
        econ: "广告（品牌与联盟）为主；天涯币、打赏、会员等增值尝试有限；曾涉足天涯客（旅游）、游戏与电商，均未成支柱；变现长期滞后于影响力。",
        risk: "用户与注意力迁移至微博、微信、知乎、短视频；移动端与算法推荐滞后；融资与现金流困难，团队与服务器成本压力；监管与内容尺度收紧。",
        atomic_unit: "帖子/回复/版块",
        distribution: "版块 55% + 热帖 30% + 搜索 15%",
        death_risk: "资金与用户双流失，停服与重启不确定性",
        tags: ["#天涯", "#论坛", "#杂谈", "#老牌", "#舆论场"],
        scores: [65, 42, 58, 45, 48],
        timeline: [
            { year: "1999", event: "天涯社区成立，海南，邢明创办" },
            { year: "2004–2007", event: "煮酒论史、娱乐八卦、国际观察等版块影响力巅峰，多起公共事件策源" },
            { year: "2015", event: "挂牌新三板，寻求资本化与转型" },
            { year: "2023", event: "停服与重启引发关注，老牌论坛生存议题" }
        ],
        key_decisions: [
            "早期以深度与杂谈、版块文化形成差异化，建立「天涯气质」与舆论影响力",
            "版主与网友共创内容与氛围，UGC 与社区自治为护城河但难货币化",
            "商业化与产品迭代未能跟上时代：移动化、算法、社交化与变现均滞后",
            "资本与融资节奏错过窗口，与微博、微信时代错位"
        ],
        user_metrics: {
            monthly_active_users: "巅峰期数千万级，后期下滑明显",
            user_demographics: { age_range: "早期以 70/80 后为主，后期老龄化与流失", region: "中国及海外华人" },
            usage_patterns: { content_creation_rate: "长帖、跟帖与版块讨论", engagement_rate: "热帖与版块浏览、跟帖互动" }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", description: "品牌与联盟广告，主收入" },
                { type: "增值与尝试", description: "天涯币、打赏、会员、天涯客、游戏等，贡献有限" }
            ],
            monetization_strategy: "广告为主，增值与衍生尝试未成规模",
            financial_metrics: { profitability: "长期亏损或微利，新三板挂牌后仍融资与现金流承压" }
        },
        key_metrics: {
            core_metrics: { mau: "巅峰数千万，后期下滑", engagement_rate: "热帖与版块活跃度", content_volume: "长帖与跟帖量" }
        }
    },
    jisilu: {
        title: "集思录 (Jisilu)",
        subtitle: "低风险投资与套利社区",
        dao: "数据与讨论驱动决策。可转债、打新、套利等数据与帖子，用户理性交流。",
        gov: "站方规则 + 用户自律。内容偏专业，灌水少，依赖社区自律。",
        space: "数据 + 帖子 + 组合。以品种与策略为维度。",
        econ: "会员与数据服务、导流券商与基金。用户付费意愿高。",
        risk: "与雪球、同花顺等重叠；规模与合规平衡。",
        atomic_unit: "帖子/数据/组合",
        distribution: "数据与列表 50% + 帖子 35% + 搜索 15%",
        death_risk: "监管与竞品挤压",
        tags: ["#投资", "#集思录", "#可转债", "#套利"],
        scores: [60, 55, 58, 72, 65],
        timeline: [
            { year: "2011", event: "集思录上线，可转债等数据" },
            { year: "2015", event: "社区与打新数据成核心" },
            { year: "2020", event: "会员与增值服务深化" },
            { year: "2024", event: "数据与合规并重" }
        ],
        key_decisions: [
            "聚焦低风险与套利，差异化于雪球",
            "数据与讨论结合，服务理性投资者",
            "会员制与导流形成稳定收入"
        ],
    },
        oschina: {
        title: "开源中国 (OSChina)",
        subtitle: "中文开发者与开源社区",
        dao: "开源资讯、问答与项目。用户读资讯、提问题、托管代码（码云），形成开发者社区。",
        gov: "站方编辑 + 社区管理。资讯与专题编辑主导，问答与评论社区自治。",
        space: "资讯 + 问答 + 博客 + 码云。多产品线统一账号与氛围。",
        econ: "广告与招聘、码云企业版、活动与培训。",
        risk: "与掘金、GitHub、Gitee 独立品牌竞争；人才与流量分散。",
        atomic_unit: "文章/问答/项目/评论",
        distribution: "资讯 40% + 问答与博客 35% + 码云 25%",
        death_risk: "开发者流向 GitHub 与综合平台",
        tags: ["#开源", "#OSC", "#开发者", "#码云"],
        scores: [62, 52, 60, 62, 58],
        timeline: [
            { year: "2008", event: "开源中国上线，开源资讯" },
            { year: "2013", event: "码云（Gitee）上线，代码托管" },
            { year: "2018", event: "问答与博客、招聘等完善" },
            { year: "2024", event: "国产化与信创场景深化" }
        ],
        key_decisions: [
            "资讯 + 社区 + 码云一体化，服务国内开发者",
            "码云与 GitHub 差异化，政企与合规场景",
            "保持中文开源信息枢纽定位"
        ],
    },
        segmentfault: {
        title: "思否 (SegmentFault)",
        subtitle: "技术问答与开发者社区",
        dao: "问答与分享。开发者提问与回答，文章与专栏，形成技术成长社区。",
        gov: "积分与声望、编辑与举报。问答质量依赖投票与编辑。",
        space: "问答 + 专栏 + 活动 + 圈子。以问题与文章为原子。",
        econ: "招聘与培训、广告、企业服务。",
        risk: "与掘金、知乎、Stack Overflow 竞争；流量与变现压力。",
        atomic_unit: "问题/回答/文章",
        distribution: "问答 45% + 专栏 30% + 发现 25%",
        death_risk: "流量被大平台与垂直竞品分流",
        tags: ["#技术问答", "#思否", "#开发者", "#编程"],
        scores: [58, 55, 58, 55, 52],
        timeline: [
            { year: "2012", event: "SegmentFault 上线，技术问答" },
            { year: "2016", event: "专栏与活动、招聘接入" },
            { year: "2020", event: "思否品牌升级，社区拓展" },
            { year: "2024", event: "AI 与内容形态探索" }
        ],
        key_decisions: [
            "以问答为核心，降低技术交流门槛",
            "专栏与活动增强粘性与品牌",
            "招聘与培训延伸商业价值"
        ],
    },
        pmcaff: {
        title: "人人都是产品经理 (PMCAFF)",
        subtitle: "产品与运营从业者社区",
        dao: "产品与运营方法论共享。用户发文章、提问、讨论，形成职业成长与招聘场景。",
        gov: "编辑精选 + 社区规则。首页与专题编辑主导，内容质量与合规并重。",
        space: "文章 + 问答 + 活动 + 招聘。以内容与话题组织。",
        econ: "招聘、培训与课程、企业服务、广告。B 端与 C 端结合。",
        risk: "与知乎、即刻、公众号竞争；垂直流量天花板。",
        atomic_unit: "文章/问答/活动",
        distribution: "编辑推荐 45% + 关注与话题 35% + 搜索 20%",
        death_risk: "内容与人才被综合平台吸纳",
        tags: ["#产品经理", "#PMCAFF", "#运营", "#职业"],
        scores: [60, 50, 55, 62, 58],
        timeline: [
            { year: "2010", event: "人人都是产品经理社区上线" },
            { year: "2015", event: "培训与招聘业务拓展" },
            { year: "2020", event: "课程与线下活动深化" },
            { year: "2024", event: "与 AI、增长等新话题结合" }
        ],
        key_decisions: [
            "聚焦产品与运营垂直，建立专业认同",
            "内容 + 培训 + 招聘形成闭环",
            "保持社区调性与商业变现平衡"
        ],
    },
        dongchedi: {
        title: "懂车帝 (Dongchedi)",
        subtitle: "汽车资讯与选车社区",
        dao: "看车、选车、用车。资讯、测评、参数与用户口碑一体化，服务购车决策。",
        gov: "编辑与算法。资讯与测评编辑主导，社区与口碑 UGC 审核。",
        space: "资讯流 + 车型库 + 社区 + 视频。以车型与话题为维度。",
        econ: "广告与主机厂合作、线索与经销商导流、会员与数据。",
        risk: "与汽车之家、易车、抖音汽车竞争；线索成本上升。",
        atomic_unit: "资讯/测评/帖子/车型",
        distribution: "推荐 45% + 车型与搜索 35% + 关注 20%",
        death_risk: "线索价值与流量成本倒挂",
        tags: ["#汽车", "#懂车帝", "#选车", "#字节"],
        scores: [58, 62, 55, 72, 65],
        timeline: [
            { year: "2017", event: "懂车帝上线，字节系汽车产品" },
            { year: "2019", event: "短视频与测评、社区成型" },
            { year: "2022", event: "线索与经销商服务深化" },
            { year: "2024", event: "新能源与智能化内容加重" }
        ],
        key_decisions: [
            "资讯 + 车型库 + 社区 + 线索一体化",
            "短视频与算法分发提升停留与转化",
            "背靠字节流量与商业化能力"
        ],
    },
        tencent_docs: {
        title: "腾讯文档 (Tencent Docs)",
        subtitle: "在线协作文档与表格",
        dao: "多人在线编辑。文档、表格、幻灯片、表单协作，与 QQ/微信打通分享与权限。",
        gov: "腾讯账号体系与权限。文档归属与分享由创建者控制，企业版有管理后台。",
        space: "文档列表 + 编辑区 + 评论。以文档为原子，文件夹与空间组织。",
        econ: "个人免费，企业版与增值功能收费。与企微、腾讯会议等协同销售。",
        risk: "与飞书、语雀、Notion 竞争；在腾讯系内与 WPS 等协同。",
        atomic_unit: "文档/表格/幻灯片/表单",
        distribution: "协作与分享 75% + 模板 15% + 搜索 10%",
        death_risk: "企业市场被飞书等压制",
        tags: ["#协作文档", "#腾讯文档", "#QQ", "#微信"],
        scores: [55, 58, 60, 70, 65],
        timeline: [
            { year: "2018", event: "腾讯文档上线，与 QQ/微信打通" },
            { year: "2020", event: "疫情推动协作与会议场景爆发" },
            { year: "2022", event: "企业版与企微深度整合" },
            { year: "2024", event: "AI 写作与智能表格" }
        ],
        key_decisions: [
            "借力 QQ/微信关系链与分享场景",
            "个人免费换规模，企业版变现",
            "与腾讯会议、企微形成办公套件"
        ],
    },
        cnblogs: {
        title: "博客园 (CNBlogs)",
        subtitle: "开发者博客与技术社区",
        dao: "个人博客聚合。开发者写博客、订阅与评论，以博文为载体的技术沉淀与交流。",
        gov: "站方审核 + 博主自治。博客内容由博主负责，站方把握底线与推荐。",
        space: "博客列表 + 博文 + 评论 + 园子。以博客与文章为原子。",
        econ: "广告与招聘、增值服务。变现相对克制，偏社区属性。",
        risk: "与掘金、知乎、公众号竞争；用户与内容外流。",
        atomic_unit: "博文/评论/博客",
        distribution: "首页与推荐 40% + 订阅 35% + 搜索 25%",
        death_risk: "流量与创作者被大平台吸纳",
        tags: ["#博客园", "#开发者", "#技术博客", "#.NET"],
        scores: [62, 48, 58, 52, 55],
        timeline: [
            { year: "2004", event: "博客园成立，.NET 与开发者社区" },
            { year: "2010", event: "规模扩大，多技术栈覆盖" },
            { year: "2018", event: "博客与招聘、广告结合" },
            { year: "2024", event: "持续运营，保持技术博客定位" }
        ],
        key_decisions: [
            "以个人博客为单位，降低写作与订阅门槛",
            "技术向内容与招聘场景结合",
            "保持简洁与专注，未过度商业化"
        ],
    },
        dxy: {
        title: "丁香园 (DXY)",
        subtitle: "医生与医疗健康社区",
        dao: "专业交流与公众科普。医生讨论病例与政策，公众获取科普与问诊信息。",
        gov: "认证医生 + 内容审核。医生身份认证，内容合规与专业把关。",
        space: "论坛 + 资讯 + 丁香医生 + 用药。专业区与公众区并存。",
        econ: "广告与品牌、企业服务、丁香医生电商与课程。",
        risk: "监管与合规；与好大夫、春雨等竞争。",
        atomic_unit: "帖子/文章/问答",
        distribution: "推荐 40% + 专业版块 35% + 搜索 25%",
        death_risk: "政策与合规风险",
        tags: ["#医疗", "#丁香园", "#医生社区", "#科普"],
        scores: [65, 52, 60, 68, 62],
        timeline: [
            { year: "2000", event: "丁香园成立，医学专业社区" },
            { year: "2014", event: "丁香医生品牌，公众科普" },
            { year: "2020", event: "疫情期影响力与争议并存" },
            { year: "2024", event: "专业与公众业务并重" }
        ],
        key_decisions: [
            "医生社区与公众科普双轮驱动",
            "认证与内容质量建立信任",
            "丁香医生品牌延伸至电商与课程"
        ],
    },
        emuch: {
        title: "小木虫 (Emuch)",
        subtitle: "科研与学术交流社区",
        dao: "科研互助与资源共享。硕博与科研人员交流课题、文献、求职与考博。",
        gov: "版主 + 站方。版块按学科与需求划分，依赖版主与用户自律。",
        space: "版块 + 帖子 + 资源区。以学科与话题组织。",
        econ: "广告与招聘、增值与资源服务。变现相对克制。",
        risk: "用户规模与活跃度受科研人群天花板限制。",
        atomic_unit: "帖子/回复/资源",
        distribution: "版块 55% + 热帖 30% + 搜索 15%",
        death_risk: "年轻科研用户流向微信、知乎等",
        tags: ["#科研", "#小木虫", "#学术", "#硕博"],
        scores: [68, 45, 62, 55, 58],
        timeline: [
            { year: "2001", event: "小木虫上线，科研论坛" },
            { year: "2010", event: "规模与版块成熟，资源区活跃" },
            { year: "2018", event: "移动端与求职考博板块强化" },
            { year: "2024", event: "持续服务科研人群" }
        ],
        key_decisions: [
            "聚焦科研垂类，形成刚需与粘性",
            "版块与资源满足文献、求职等需求",
            "保持社区属性，未过度商业化"
        ],
    },
        autohome: {
        title: "汽车之家 (Autohome)",
        subtitle: "汽车资讯与车主社区",
        dao: "看车、买车、用车。资讯、测评、口碑与论坛一体化，服务购车与用车决策。",
        gov: "编辑与运营主导资讯，论坛版主与用户 UGC。",
        space: "资讯 + 车型库 + 论坛 + 口碑。以车型与话题为维度。",
        econ: "广告与主机厂、线索与经销商、金融与后市场。",
        risk: "与懂车帝、易车、抖音汽车竞争；线索成本与用户时长压力。",
        atomic_unit: "资讯/帖子/口碑/车型",
        distribution: "推荐 40% + 车型与论坛 40% + 搜索 20%",
        death_risk: "流量与线索被字节系等分流",
        tags: ["#汽车", "#汽车之家", "#车主", "#资讯"],
        scores: [60, 55, 58, 75, 68],
        timeline: [
            { year: "2005", event: "汽车之家成立，汽车垂直网站" },
            { year: "2013", event: "纽交所上市，论坛与口碑成核心" },
            { year: "2016", event: "平安入主，与金融与经销商深化" },
            { year: "2024", event: "新能源与智能化内容加重" }
        ],
        key_decisions: [
            "资讯 + 论坛 + 口碑形成购车决策闭环",
            "线索与经销商服务为核心变现",
            "平安系资源赋能金融与后市场"
        ],
    },
        babytree: {
        title: "宝宝树 (Babytree)",
        subtitle: "母婴与家庭社区",
        dao: "备孕、育儿、家庭分享。用户记录与交流育儿经，形成妈妈圈与家庭消费场景。",
        gov: "编辑与 KOL + 社区规则。内容与话题由编辑与达人引导，UGC 审核。",
        space: "圈子 + 帖子 + 记录 + 电商。以阶段与话题组织。",
        econ: "广告与品牌、电商与母婴产品、知识付费。",
        risk: "与小红书、抖音母婴竞争；用户与时长被分流。",
        atomic_unit: "帖子/记录/圈子",
        distribution: "推荐 45% + 圈子与关注 35% + 搜索 20%",
        death_risk: "流量与商业被内容平台蚕食",
        tags: ["#母婴", "#宝宝树", "#育儿", "#家庭"],
        scores: [62, 52, 58, 62, 58],
        timeline: [
            { year: "2007", event: "宝宝树成立，母婴社区" },
            { year: "2015", event: "电商与广告商业化" },
            { year: "2018", event: "港股上市" },
            { year: "2024", event: "与阿里等合作，探索新增长" }
        ],
        key_decisions: [
            "从社区到电商与广告的变现路径",
            "记录与圈子形成强粘性与数据",
            "应对内容平台对垂直社区的挤压"
        ],
    },
        lagou: {
        title: "拉勾 (Lagou)",
        subtitle: "互联网求职与招聘社区",
        dao: "互联网人找工作。职位、面经与公司点评，求职者与 HR 对接，偏互联网垂直。",
        gov: "企业认证 + 平台规则。职位与公司信息审核，评价与举报机制。",
        space: "职位 + 公司 + 面经 + 讨论。以岗位与公司为维度。",
        econ: "企业招聘服务、培训与课程。B 端为主，C 端增值。",
        risk: "与 BOSS、智联、牛客等竞争；互联网招聘周期波动。",
        atomic_unit: "职位/面经/公司/简历",
        distribution: "搜索与推荐 50% + 公司 30% + 社区 20%",
        death_risk: "招聘场景被综合平台与垂直竞品分流",
        tags: ["#招聘", "#拉勾", "#互联网", "#求职"],
        scores: [58, 55, 55, 68, 62],
        timeline: [
            { year: "2013", event: "拉勾网上线，互联网招聘" },
            { year: "2016", event: "教育、大客户拓展" },
            { year: "2020", event: "与 58 等整合" },
            { year: "2024", event: "垂直与综合招聘并重" }
        ],
        key_decisions: [
            "聚焦互联网垂直，建立品牌与效率",
            "职位 + 面经 + 点评形成决策信息",
            "B 端收费与 C 端体验平衡"
        ],
    },
        geekbang: {
        title: "极客时间 (GeekBang)",
        subtitle: "技术付费与学习社区",
        dao: "为技术成长付费。专栏、视频课与训练营，讲师与用户形成学习社区。",
        gov: "平台选品与运营。课程与专栏由平台与讲师共建，质量把控严格。",
        space: "专栏 + 视频 + 训练营 + 讨论。以课程与学习路径组织。",
        econ: "课程与专栏付费、企业培训。C 端与 B 端双收。",
        risk: "与慕课、极客学院、B 站学习区竞争；付费意愿与复购。",
        atomic_unit: "专栏/视频/训练营/留言",
        distribution: "推荐 40% + 学习路径 35% + 搜索 25%",
        death_risk: "免费内容与竞品分流付费用户",
        tags: ["#极客时间", "#技术学习", "#付费", "#极客邦"],
        scores: [58, 55, 58, 72, 65],
        timeline: [
            { year: "2017", event: "极客时间上线，技术付费专栏" },
            { year: "2019", event: "视频课与训练营拓展" },
            { year: "2022", event: "企业版与培训深化" },
            { year: "2024", event: "AI 与前沿技术课程加重" }
        ],
        key_decisions: [
            "技术付费与极客邦品牌结合",
            "专栏 + 视频 + 训练营覆盖不同学习需求",
            "企业培训延伸 LTV 与品牌"
        ],
    },
        tencent_meeting: {
        title: "腾讯会议 (Tencent Meeting)",
        subtitle: "视频会议与协作空间",
        dao: "在线开会与协作。音视频会议、文档协作、会议室与网络研讨会，满足远程沟通。",
        gov: "腾讯账号与权限。会议创建者控制参会与录制，企业版有管理后台。",
        space: "会议间 + 文档 + 录制 + 会议室。以会议与房间为单元。",
        econ: "个人免费，企业版与增值（人数、时长、录制等）收费。",
        risk: "与飞书、钉钉、Zoom 竞争；免费与付费边界。",
        atomic_unit: "会议/房间/录制",
        distribution: "预约与加入 80% + 历史与文档 20%",
        death_risk: "企业市场被飞书钉钉压制",
        tags: ["#腾讯会议", "#视频会议", "#远程", "#协作"],
        scores: [52, 62, 58, 72, 68],
        timeline: [
            { year: "2019", event: "腾讯会议上线" },
            { year: "2020", event: "疫情推动日活与免费策略" },
            { year: "2022", event: "与企微、腾讯文档协同" },
            { year: "2024", event: "AI 会议纪要与多端深化" }
        ],
        key_decisions: [
            "疫情期免费换规模与习惯",
            "与企微、文档形成办公套件",
            "企业版与增值功能变现"
        ],
    },
        imooc: {
        title: "慕课网 (IMOOC)",
        subtitle: "IT 技能学习与实战社区",
        dao: "系统学、做项目、找工作。视频课 + 实战项目 + 问答与笔记，服务程序员成长。",
        gov: "平台选课与运营。课程与路径由平台与讲师共建，学习数据驱动推荐。",
        space: "课程 + 实战 + 问答 + 手记。以课程与学习路径组织。",
        econ: "课程付费、就业班与训练营、企业培训。",
        risk: "与 B 站、极客时间、极客学院竞争；免费内容分流。",
        atomic_unit: "课程/实战/问答/手记",
        distribution: "推荐 40% + 路径与分类 35% + 搜索 25%",
        death_risk: "付费意愿与竞品分流",
        tags: ["#慕课网", "#IT学习", "#编程", "#实战"],
        scores: [58, 55, 55, 68, 62],
        timeline: [
            { year: "2013", event: "慕课网上线，免费 IT 视频课" },
            { year: "2016", event: "实战与就业班商业化" },
            { year: "2020", event: "与高校、企业合作拓展" },
            { year: "2024", event: "AI 与前沿技术课程" }
        ],
        key_decisions: [
            "免费入门 + 付费进阶与就业形成漏斗",
            "实战与项目增强就业导向",
            "保持 IT 垂直，未过度泛化"
        ],
    },
        youdao_note: {
        title: "有道云笔记 (Youdao Note)",
        subtitle: "笔记与知识管理",
        dao: "记录与同步。多端笔记、文件夹与标签、OCR 与附件，满足个人与轻量团队。",
        gov: "账号与权限。笔记归属个人，分享与协作由用户控制。",
        space: "文件夹 + 笔记 + 模板。以笔记为原子，层级组织。",
        econ: "免费基础版，会员（空间、OCR、去广告等）收费。",
        risk: "与印象笔记、语雀、Notion 竞争；差异化与留存。",
        atomic_unit: "笔记/文件夹/附件",
        distribution: "最近与文件夹 70% + 搜索 20% + 模板 10%",
        death_risk: "被协作文档与知识库产品替代",
        tags: ["#有道云笔记", "#笔记", "#网易", "#同步"],
        scores: [52, 50, 55, 62, 58],
        timeline: [
            { year: "2011", event: "有道笔记上线，后更名有道云笔记" },
            { year: "2015", event: "多端与 OCR、协作能力" },
            { year: "2020", event: "会员与空间商业化" },
            { year: "2024", event: "与网易生态、AI 能力结合" }
        ],
        key_decisions: [
            "多端同步与 OCR 降低记录门槛",
            "免费 + 会员空间与功能差异化",
            "保持轻量，未过度协作文档化"
        ],
    },
        yuepao: {
        title: "悦跑圈 (JoyRun)",
        subtitle: "跑步与运动记录社区",
        dao: "跑下去、晒出来。记录轨迹与数据、参与线上赛事与跑团，形成跑步社交。",
        gov: "平台运营赛事与活动，跑团与圈子半自治。",
        space: "跑步记录 + 动态 + 赛事 + 跑团。以跑步与活动为单元。",
        econ: "广告与品牌、赛事与装备导流、会员与数据服务。",
        risk: "与 Keep、咕咚、Strava、手表生态竞争。",
        atomic_unit: "跑步/动态/赛事",
        distribution: "动态与关注 45% + 赛事 30% + 我的 25%",
        death_risk: "用户流向综合健身与硬件生态",
        tags: ["#悦跑圈", "#跑步", "#运动", "#赛事"],
        scores: [60, 52, 55, 58, 55],
        timeline: [
            { year: "2014", event: "悦跑圈上线，跑步记录" },
            { year: "2016", event: "线上马拉松与赛事成核心" },
            { year: "2020", event: "跑团与社区深化" },
            { year: "2024", event: "与品牌、线下赛事结合" }
        ],
        key_decisions: [
            "跑步记录 + 线上赛事降低参与门槛",
            "跑团与动态形成社交与留存",
            "品牌与装备导流变现"
        ],
    },
        moegirl: {
        title: "萌娘百科 (MoeGirl Wiki)",
        subtitle: "ACGN 文化与梗百科",
        dao: "人人可编辑的 ACG 百科。角色、作品、梗与网络文化词条，由爱好者共建。",
        gov: "维基式规则 + 管理员。编辑规范与共识，依赖社区自治与管理。",
        space: "词条 + 分类 + 讨论。以词条为原子，分类与链接组织。",
        econ: "捐赠与广告，非营利倾向强。",
        risk: "合规与内容边界；编辑流失与质量波动。",
        atomic_unit: "词条/讨论",
        distribution: "搜索 50% + 分类 30% + 随机与热门 20%",
        death_risk: "政策与编辑生态",
        tags: ["#萌娘百科", "#ACG", "#百科", "#梗"],
        scores: [70, 42, 65, 38, 55],
        timeline: [
            { year: "2010", event: "萌娘百科成立，ACG 维基" },
            { year: "2015", event: "梗与网络文化词条爆发" },
            { year: "2020", event: "合规与审核加强" },
            { year: "2024", event: "持续由爱好者维护" }
        ],
        key_decisions: [
            "维基式共建，降低贡献门槛",
            "ACG + 梗文化形成独特内容池",
            "非营利与社区自治为主"
        ],
    },
        eastmoney: {
        title: "东方财富 (East Money)",
        subtitle: "财经资讯与股民社区",
        dao: "看行情、看资讯、交流炒股。行情数据、资讯、股吧与财富号，服务个人投资者。",
        gov: "编辑与算法主导资讯，股吧版主与用户 UGC。",
        space: "行情 + 资讯 + 股吧 + 财富号。以股票与话题为维度。",
        econ: "证券导流与佣金、广告、数据与增值、基金销售。",
        risk: "与同花顺、雪球、大厂财经竞争；合规与内容质量。",
        atomic_unit: "资讯/帖子/行情/财富号",
        distribution: "行情与资讯 45% + 股吧 35% + 搜索 20%",
        death_risk: "流量与佣金被分流",
        tags: ["#东方财富", "#财经", "#股吧", "#行情"],
        scores: [58, 58, 55, 78, 68],
        timeline: [
            { year: "2005", event: "东方财富网上线，财经门户" },
            { year: "2010", event: "创业板上市，股吧成核心" },
            { year: "2015", event: "收购券商，打通交易" },
            { year: "2024", event: "财富号与基金、数据深化" }
        ],
        key_decisions: [
            "资讯 + 股吧 + 行情形成决策闭环",
            "收购券商打通交易与佣金",
            "财富号与基金销售延伸变现"
        ],
    },
        zcool: {
        title: "站酷 (ZCOOL)",
        subtitle: "设计师与创意社区",
        dao: "展示作品、接单、学习。设计师发作品与教程，企业发需求，形成展示与交易场。",
        gov: "编辑推荐 + 社区规则。首页与活动由编辑主导，内容审核与版权并重。",
        space: "作品流 + 教程 + 赛事 + 招聘/需求。以作品与话题组织。",
        econ: "广告与品牌、招聘与需求撮合、课程与会员。",
        risk: "与 Behance、花瓣、小红书设计区竞争；流量与变现。",
        atomic_unit: "作品/教程/帖子",
        distribution: "推荐 45% + 关注 30% + 搜索与赛事 25%",
        death_risk: "设计师流向国际平台与综合内容平台",
        tags: ["#站酷", "#设计", "#创意", "#作品集"],
        scores: [62, 52, 58, 62, 58],
        timeline: [
            { year: "2006", event: "站酷网上线，设计师社区" },
            { year: "2012", event: "招聘与赛事、海洛图库" },
            { year: "2018", event: "教育与企业服务拓展" },
            { year: "2024", event: "AI 与设计工具结合" }
        ],
        key_decisions: [
            "作品展示 + 招聘/需求形成闭环",
            "赛事与海洛图库增强商业价值",
            "国内设计社区第一品牌"
        ],
    },
        xianyu: {
        title: "闲鱼 (Xianyu)",
        subtitle: "二手交易与兴趣社区",
        dao: "让闲置游起来。C2C 二手发布与交易，鱼塘与同好聚集，形成交易与社区双属性。",
        gov: "平台规则与信用体系。交易与内容审核，芝麻信用与评价约束。",
        space: "商品流 + 鱼塘 + 会玩。以商品与鱼塘为单元。",
        econ: "抽佣与增值、引流淘宝与回收。交易规模即商业基础。",
        risk: "与转转、抖音二手、小红书竞争；信任与体验。",
        atomic_unit: "商品/鱼塘/帖子",
        distribution: "推荐 45% + 鱼塘与关注 35% + 搜索 20%",
        death_risk: "信任与体验被竞品超越",
        tags: ["#闲鱼", "#二手", "#阿里", "#鱼塘"],
        scores: [62, 58, 58, 72, 65],
        timeline: [
            { year: "2014", event: "闲鱼上线，淘宝二手升级" },
            { year: "2016", event: "鱼塘与社区化" },
            { year: "2020", event: "会玩与内容、回收接入" },
            { year: "2024", event: "与淘宝、芝麻信用深度协同" }
        ],
        key_decisions: [
            "借力淘宝账号与支付，降低交易门槛",
            "鱼塘与兴趣形成社区与留存",
            "回收与以旧换新延伸场景"
        ],
    },
        mafengwo: {
        title: "马蜂窝 (Mafengwo)",
        subtitle: "旅游攻略与自由行社区",
        dao: "发现与分享旅行。游记、攻略、问答与预订，用户决策与交易一体化。",
        gov: "编辑与算法 + 用户 UGC。首页与专题编辑主导，游记与问答 UGC。",
        space: "游记流 + 攻略 + 问答 + 目的地。以目的地与内容为维度。",
        econ: "预订佣金、广告与品牌、会员与增值。",
        risk: "与携程、小红书、抖音旅行竞争；内容与交易转化。",
        atomic_unit: "游记/攻略/问答/目的地",
        distribution: "推荐 40% + 目的地 35% + 搜索 25%",
        death_risk: "攻略场景被内容平台替代",
        tags: ["#马蜂窝", "#旅游", "#攻略", "#自由行"],
        scores: [65, 55, 60, 68, 62],
        timeline: [
            { year: "2006", event: "蚂蜂窝成立，旅行社区" },
            { year: "2012", event: "攻略与游记成核心" },
            { year: "2018", event: "更名马蜂窝，预订与内容结合" },
            { year: "2024", event: "与本地生活、短视频结合" }
        ],
        key_decisions: [
            "UGC 游记与攻略建立决策信任",
            "内容 + 预订形成闭环变现",
            "自由行与年轻用户定位"
        ],
    },
        codoon: {
        title: "咕咚 (Codoon)",
        subtitle: "跑步与运动社交",
        dao: "记录与挑战。跑步、骑行、健走数据与线上赛事，社区与好友互动，硬件与数据闭环。",
        gov: "平台运营赛事，跑团与圈子半自治。",
        space: "运动记录 + 动态 + 赛事 + 跑团。",
        econ: "广告与品牌、赛事与装备、会员。",
        risk: "与悦跑圈、Keep、Strava 竞争。",
        atomic_unit: "运动/动态/赛事",
        distribution: "动态 45% + 赛事 30% + 我的 25%",
        death_risk: "用户流向综合健身与硬件",
        tags: ["#咕咚", "#跑步", "#运动"],
        scores: [58, 52, 54, 56, 54],
        timeline: [
            { year: "2010", event: "咕咚上线，跑步记录" },
            { year: "2016", event: "赛事与社区、跑团" },
            { year: "2020", event: "硬件与手表" },
            { year: "2022", event: "会员与品牌变现" }
        ],
        key_decisions: [
            "运动记录 + 社交与赛事，形成粘性与数据",
            "硬件与数据闭环，拓展变现与留存",
            "会员与品牌变现，平衡免费与付费"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "跑步与运动爱好者", region: "中国" }, usage_patterns: { content_creation_rate: "动态与打卡", engagement_rate: "赛事与跑团" } },
        business_model: { revenue_streams: [{ type: "广告与品牌", description: "装备与赛事合作" }, { type: "会员", description: "高级数据与课程" }], monetization_strategy: "免费拉新 + 会员与品牌", financial_metrics: { profitability: "垂直赛道" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "赛事与社区" } }
    },
    shanbay: {
        title: "扇贝 (Shanbei)",
        subtitle: "英语学习与背词社区",
        dao: "科学背词与打卡。单词、听力、阅读、炼句，打卡与小组形成习惯，多产品线听说读写。",
        gov: "学习路径与算法，小组与打卡自律。",
        space: "单词 + 听力 + 阅读 + 小组。",
        econ: "会员与课程、图书与周边。",
        risk: "与百词斩、墨墨、多邻国竞争。",
        atomic_unit: "词/打卡/小组",
        distribution: "学习 60% + 小组 25% + 发现 15%",
        death_risk: "免费与竞品分流",
        tags: ["#扇贝", "#英语", "#背单词"],
        scores: [55, 58, 52, 65, 58],
        timeline: [
            { year: "2011", event: "扇贝单词上线" },
            { year: "2015", event: "听力阅读炼句" },
            { year: "2018", event: "小组与打卡社区" },
            { year: "2022", event: "会员与课程" }
        ],
        key_decisions: [
            "科学记忆与打卡结合，形成习惯与留存",
            "多产品线覆盖听说读写，一站式英语学习",
            "会员制变现，课程与图书延伸"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "学生与职场", region: "中国" }, usage_patterns: { content_creation_rate: "打卡与小组", engagement_rate: "学习时长" } },
        business_model: { revenue_streams: [{ type: "会员", description: "高级功能与课程" }, { type: "图书与周边", description: "导流与电商" }], monetization_strategy: "免费背词 + 会员与课程", financial_metrics: { profitability: "垂直教育" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "打卡与学习" } }
    },
    netease_study: {
        title: "网易云课堂 (NetEase Study)",
        subtitle: "职业技能与在线学习",
        dao: "系统学、拿证书。职业技能、编程、设计等课程，与高校、机构合作，B 端与 C 端双收。",
        gov: "平台选课与运营，证书与学习路径。",
        space: "课程 + 微专业 + 证书 + 讨论。",
        econ: "课程付费、企业培训、证书。",
        risk: "与腾讯课堂、慕课、B站学习竞争。",
        atomic_unit: "课程/微专业/证书",
        distribution: "推荐 45% + 分类 35% + 搜索 20%",
        death_risk: "免费内容与竞品分流",
        tags: ["#网易云课堂", "#在线教育", "#职业技能"],
        scores: [52, 55, 52, 65, 58],
        timeline: [
            { year: "2012", event: "网易云课堂上线" },
            { year: "2016", event: "微专业与证书" },
            { year: "2019", event: "与网易生态协同" },
            { year: "2022", event: "企业培训" }
        ],
        key_decisions: [
            "职业技能与证书导向，与就业挂钩",
            "与网易生态协同，流量与品牌",
            "B 端与 C 端双收，企业培训延伸"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "职场与转行", region: "中国" }, usage_patterns: { content_creation_rate: "学习与证书", engagement_rate: "完课率" } },
        business_model: { revenue_streams: [{ type: "课程付费", description: "C 端选课" }, { type: "企业培训", description: "B 端定制" }], monetization_strategy: "课程 + 证书 + 企业", financial_metrics: { profitability: "依托网易" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "学习与证书" } }
    },
    tencent_ke: {
        title: "腾讯课堂 (Tencent Classroom)",
        subtitle: "在线教育与培训",
        dao: "机构与个人开课，用户选课学习。IT、设计、语言、职业等类目，借力 QQ 与微信流量。",
        gov: "平台审核与运营，机构入驻与分成。",
        space: "课程 + 机构 + 学习记录。",
        econ: "课程分成、广告、企业培训。",
        risk: "与网易云课堂、慕课、钉钉教育竞争。",
        atomic_unit: "课程/机构/学习",
        distribution: "推荐 50% + 分类 30% + 搜索 20%",
        death_risk: "流量与机构被分流",
        tags: ["#腾讯课堂", "#在线教育", "#腾讯"],
        scores: [50, 55, 50, 68, 58],
        timeline: [
            { year: "2014", event: "腾讯课堂上线" },
            { year: "2018", event: "机构与类目拓展" },
            { year: "2020", event: "与 QQ、微信协同" },
            { year: "2022", event: "与企微、会议协同" }
        ],
        key_decisions: [
            "平台化聚合机构，轻运营重流量",
            "借力 QQ 与微信流量，降低获客成本",
            "企业培训延伸，与企微协同"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "职场与技能学习", region: "中国" }, usage_patterns: { content_creation_rate: "机构开课", engagement_rate: "选课与完课" } },
        business_model: { revenue_streams: [{ type: "课程分成", description: "机构入驻抽佣" }, { type: "企业培训", description: "B 端" }], monetization_strategy: "分成 + 广告 + 企业", financial_metrics: { profitability: "依托腾讯" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "选课与学习" } }
    },
    xuetangx: {
        title: "学堂在线 (XuetangX)",
        subtitle: "慕课与高校在线教育",
        dao: "名校课程开放。与清华等高校合作，慕课与学分、证书结合，高校与平台共赢。",
        gov: "高校与平台共建，课程与证书审核。",
        space: "课程 + 学期 + 讨论 + 证书。",
        econ: "证书与学分收费、高校合作。",
        risk: "与中国大学MOOC、智慧树竞争。",
        atomic_unit: "课程/学期/证书",
        distribution: "推荐 40% + 高校 35% + 搜索 25%",
        death_risk: "高校合作与用户规模",
        tags: ["#学堂在线", "#慕课", "#清华"],
        scores: [55, 52, 55, 58, 55],
        timeline: [
            { year: "2013", event: "学堂在线成立，清华发起" },
            { year: "2016", event: "国际与学分拓展" },
            { year: "2019", event: "与更多高校合作" },
            { year: "2022", event: "与高校深度合作" }
        ],
        key_decisions: [
            "名校慕课与证书，建立权威与认证价值",
            "学分与认证价值，与高校教学衔接",
            "高校与平台共赢，可持续合作模式"
        ],
        user_metrics: { monthly_active_users: "数百万级", user_demographics: { age_range: "学生与终身学习", region: "中国为主" }, usage_patterns: { content_creation_rate: "选课与证书", engagement_rate: "学期与完课" } },
        business_model: { revenue_streams: [{ type: "证书与学分", description: "收费认证" }, { type: "高校合作", description: "平台服务" }], monetization_strategy: "证书收费 + 高校合作", financial_metrics: { profitability: "教育公益与商业化结合" } },
        key_metrics: { core_metrics: { mau: "数百万", engagement_rate: "选课与证书" } }
    },
    yinxiang: {
        title: "印象笔记 (Evernote/Yinxiang)",
        subtitle: "笔记与知识管理",
        dao: "记录一切。多端同步、笔记本与标签、OCR 与剪藏，个人与团队，中国独立运营。",
        gov: "账号与权限，笔记本与空间。",
        space: "笔记本 + 笔记 + 标签 + 模板。",
        econ: "免费基础版，高级账户与团队版收费。",
        risk: "与 Notion、语雀、有道竞争。",
        atomic_unit: "笔记/笔记本/标签",
        distribution: "最近 50% + 笔记本 30% + 搜索 20%",
        death_risk: "被协作文档与 AI 笔记替代",
        tags: ["#印象笔记", "#笔记", "#Evernote"],
        scores: [52, 52, 55, 65, 58],
        timeline: [
            { year: "2008", event: "Evernote 上线" },
            { year: "2012", event: "印象笔记中国独立" },
            { year: "2018", event: "多端与剪藏普及" },
            { year: "2022", event: "AI 与模板" }
        ],
        key_decisions: [
            "多端与剪藏建立习惯，形成数据与粘性",
            "中国独立运营与合规，本土化与数据安全",
            "高级功能变现，个人与团队版"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "知识工作者", region: "中国" }, usage_patterns: { content_creation_rate: "笔记与剪藏", engagement_rate: "多端同步" } },
        business_model: { revenue_streams: [{ type: "高级账户", description: "个人付费" }, { type: "团队版", description: "企业" }], monetization_strategy: "免费拉新 + 高级与团队", financial_metrics: { profitability: "垂直笔记" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "笔记与同步" } }
    },
    mubu: {
        title: "幕布 (Mubu)",
        subtitle: "大纲笔记与思维导图",
        dao: "先列大纲再展开。大纲与思维导图一键切换，适合清单与结构化思考，融入字节办公生态。",
        gov: "个人文档与分享，简洁产品逻辑。",
        space: "文档列表 + 大纲/导图编辑。",
        econ: "免费基础，高级版与协作收费。",
        risk: "与飞书文档、语雀、Notion 竞争。",
        atomic_unit: "文档/大纲/导图",
        distribution: "最近 60% + 文件夹 25% + 搜索 15%",
        death_risk: "被综合文档产品吸纳",
        tags: ["#幕布", "#大纲", "#思维导图"],
        scores: [50, 55, 52, 58, 55],
        timeline: [
            { year: "2015", event: "幕布上线" },
            { year: "2018", event: "被字节收购" },
            { year: "2020", event: "与飞书协同" },
            { year: "2022", event: "与飞书文档打通" }
        ],
        key_decisions: [
            "大纲与导图双形态，降低结构化门槛",
            "极简降低使用门槛，聚焦清单与思维",
            "融入字节办公生态，与飞书协同"
        ],
        user_metrics: { monthly_active_users: "数百万级", user_demographics: { age_range: "职场与学生", region: "中国" }, usage_patterns: { content_creation_rate: "大纲与导图", engagement_rate: "文档创建" } },
        business_model: { revenue_streams: [{ type: "高级版", description: "个人付费" }, { type: "协作", description: "团队" }], monetization_strategy: "免费 + 高级与协作", financial_metrics: { profitability: "依托字节" } },
        key_metrics: { core_metrics: { mau: "数百万", engagement_rate: "大纲与导图" } }
    },
    fandeng: {
        title: "樊登读书 (Fan Deng)",
        subtitle: "知识付费与读书会",
        dao: "听书与讲书。樊登 IP 解读书籍，用户听书与线下读书会，形成付费社群，代理商下沉。",
        gov: "樊登 IP 与内容主导，代理商与读书会落地。",
        space: "听书 + 书单 + 读书会 + 训练营。",
        econ: "会员费、企业版、线下与课程。",
        risk: "与得到、喜马拉雅、小鹅通竞争。",
        atomic_unit: "讲书/听书/读书会",
        distribution: "推荐 50% + 书单 30% + 线下 20%",
        death_risk: "IP 依赖与用户增长",
        tags: ["#樊登读书", "#知识付费", "#听书"],
        scores: [58, 48, 55, 72, 62],
        timeline: [
            { year: "2013", event: "樊登读书会成立" },
            { year: "2017", event: "App 与会员制" },
            { year: "2019", event: "代理商与读书会下沉" },
            { year: "2022", event: "企业与线下深化" }
        ],
        key_decisions: [
            "樊登 IP 驱动内容与信任，降低选书与理解门槛",
            "代理商与读书会下沉，线下与社群裂变",
            "会员与企业双变现，线下与课程延伸"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "职场与自我提升", region: "中国" }, usage_patterns: { content_creation_rate: "听书与读书会", engagement_rate: "会员与线下" } },
        business_model: { revenue_streams: [{ type: "会员费", description: "年卡与听书" }, { type: "企业版与线下", description: "培训与读书会" }], monetization_strategy: "会员 + 企业 + 线下", financial_metrics: { profitability: "知识付费头部" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "听书与读书会" } }
    },
    hundun: {
        title: "混沌学园 (Hundun)",
        subtitle: "商业与创新教育",
        dao: "商业思维与创新方法。李善友与导师课程，线下大课与线上训练营，企业与高净值用户。",
        gov: "导师与内容主导，学员与社群运营。",
        space: "课程 + 大课 + 训练营 + 社群。",
        econ: "课程与训练营付费、企业服务。",
        risk: "与得到、樊登、吴晓波竞争。",
        atomic_unit: "课程/大课/训练营",
        distribution: "推荐 50% + 训练营 30% + 线下 20%",
        death_risk: "高端用户与复购",
        tags: ["#混沌学园", "#商业", "#创新"],
        scores: [55, 50, 52, 70, 60],
        timeline: [
            { year: "2014", event: "混沌研习社成立" },
            { year: "2018", event: "混沌大学品牌升级" },
            { year: "2020", event: "线上与训练营深化" },
            { year: "2022", event: "混沌学园与线上深化" }
        ],
        key_decisions: [
            "李善友与创新方法论 IP，建立认知与信任",
            "线下大课与线上结合，体验与规模平衡",
            "企业与高净值用户，B 端与复购"
        ],
        user_metrics: { monthly_active_users: "数百万级", user_demographics: { age_range: "创业者与管理者", region: "中国" }, usage_patterns: { content_creation_rate: "训练营与社群", engagement_rate: "课程与线下" } },
        business_model: { revenue_streams: [{ type: "课程与训练营", description: "付费学习" }, { type: "企业服务", description: "内训与咨询" }], monetization_strategy: "课程 + 训练营 + 企业", financial_metrics: { profitability: "商业教育垂直" } },
        key_metrics: { core_metrics: { mau: "数百万", engagement_rate: "课程与训练营" } }
    },
    xiaoetong: {
        title: "小鹅通 (Xiaoetong)",
        subtitle: "知识付费与私域工具",
        dao: "为知识创作者提供店铺与私域。课程、直播、打卡、圈子与分销，SaaS 工具赋能。",
        gov: "SaaS 工具，创作者自主运营。",
        space: "店铺 + 课程 + 直播 + 圈子。",
        econ: "SaaS 年费、抽佣、增值服务。",
        risk: "与千聊、有赞、视频号小店竞争。",
        atomic_unit: "课程/直播/圈子",
        distribution: "创作者自有流量 80% + 发现 20%",
        death_risk: "私域流量成本与平台挤压",
        tags: ["#小鹅通", "#知识付费", "#SaaS"],
        scores: [52, 58, 50, 72, 65],
        timeline: [
            { year: "2016", event: "小鹅通成立" },
            { year: "2019", event: "直播与打卡" },
            { year: "2020", event: "圈子与私域" },
            { year: "2022", event: "私域与视频号" }
        ],
        key_decisions: [
            "知识付费 SaaS 与私域，服务中长尾创作者",
            "课程 + 直播 + 圈子闭环，一站式开店",
            "与微信与视频号生态结合，降低获客成本"
        ],
        user_metrics: { monthly_active_users: "数百万创作者与学员", user_demographics: { age_range: "知识创作者与学习者", region: "中国" }, usage_patterns: { content_creation_rate: "课程与直播", engagement_rate: "店铺与圈子" } },
        business_model: { revenue_streams: [{ type: "SaaS 年费", description: "店铺与功能" }, { type: "抽佣与增值", description: "交易与扩展" }], monetization_strategy: "年费 + 抽佣 + 增值", financial_metrics: { profitability: "知识付费 SaaS 头部" } },
        key_metrics: { core_metrics: { mau: "数百万", engagement_rate: "店铺与直播" } }
    },
    qianliao: {
        title: "千聊 (Qianliao)",
        subtitle: "直播与知识付费",
        dao: "直播讲课与卖课。讲师开直播与录播课，用户付费学习，微信内传播与裂变。",
        gov: "平台规则与分成，讲师自主运营。",
        space: "直播 + 课程 + 店铺 + 分销。",
        econ: "抽佣与工具费、广告。",
        risk: "与小鹅通、视频号、抖音知识竞争。",
        atomic_unit: "直播/课程/店铺",
        distribution: "讲师私域 70% + 平台 30%",
        death_risk: "流量与讲师被平台吸纳",
        tags: ["#千聊", "#直播", "#知识付费"],
        scores: [50, 55, 48, 65, 58],
        timeline: [
            { year: "2016", event: "千聊上线" },
            { year: "2018", event: "直播与微信生态" },
            { year: "2020", event: "讲师与分销体系" },
            { year: "2022", event: "与视频号结合" }
        ],
        key_decisions: [
            "微信内直播与裂变，降低获客与触达成本",
            "讲师与分销体系，激励推广与复购",
            "工具与抽佣变现，平台与讲师共赢"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "讲师与知识消费者", region: "中国" }, usage_patterns: { content_creation_rate: "直播与课程", engagement_rate: "付费与分销" } },
        business_model: { revenue_streams: [{ type: "抽佣", description: "课程与直播交易" }, { type: "工具费与广告", description: "增值与推广" }], monetization_strategy: "抽佣 + 工具 + 广告", financial_metrics: { profitability: "知识付费平台" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "直播与付费" } }
    },
    tonghuashun: {
        title: "同花顺 (Tonghuashun)",
        subtitle: "炒股软件与股民社区",
        dao: "行情、资讯、交易与交流。数据与工具、股吧与社区，服务个人投资者，导流与增值双变现。",
        gov: "编辑与算法资讯，股吧版主与 UGC。",
        space: "行情 + 资讯 + 股吧 + 交易。",
        econ: "导流券商、广告、数据与增值、基金。",
        risk: "与东方财富、大智慧、雪球竞争。",
        atomic_unit: "行情/资讯/帖子",
        distribution: "行情 40% + 资讯 30% + 股吧 30%",
        death_risk: "佣金与流量被分流",
        tags: ["#同花顺", "#炒股", "#行情"],
        scores: [55, 60, 52, 75, 68],
        timeline: [
            { year: "2001", event: "同花顺成立" },
            { year: "2009", event: "创业板上市" },
            { year: "2015", event: "股吧与社区爆发" },
            { year: "2022", event: "AI 与智能投顾" }
        ],
        key_decisions: [
            "行情与交易工具刚需，建立入口与数据优势",
            "股吧与资讯增强粘性，形成社区与停留",
            "导流与增值双变现，券商与数据服务"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "个人投资者", region: "中国" }, usage_patterns: { content_creation_rate: "股吧与讨论", engagement_rate: "行情与交易" } },
        business_model: { revenue_streams: [{ type: "导流券商", description: "开户与佣金分成" }, { type: "广告与增值", description: "数据与智能投顾" }], monetization_strategy: "导流 + 广告 + 增值", financial_metrics: { profitability: "炒股软件龙头" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "行情与股吧" } }
    },
    yiche: {
        title: "易车 (Yiche)",
        subtitle: "汽车资讯与经销商服务",
        dao: "看车、选车、询价。资讯、车型库、口碑与经销商线索，服务购车决策，腾讯系流量与数据。",
        gov: "编辑与运营主导，经销商认证与线索。",
        space: "资讯 + 车型库 + 口碑 + 经销商。",
        econ: "经销商线索与广告、主机厂合作。",
        risk: "与汽车之家、懂车帝、抖音汽车竞争。",
        atomic_unit: "资讯/车型/口碑/线索",
        distribution: "推荐 40% + 车型 40% + 搜索 20%",
        death_risk: "线索成本与流量分流",
        tags: ["#易车", "#汽车", "#资讯"],
        scores: [52, 55, 50, 70, 62],
        timeline: [
            { year: "2000", event: "易车成立" },
            { year: "2010", event: "纽交所上市" },
            { year: "2018", event: "腾讯投资与协同" },
            { year: "2020", event: "腾讯系与私有化" }
        ],
        key_decisions: [
            "资讯与线索闭环，内容服务购车决策",
            "经销商与主机厂服务，线索与广告变现",
            "腾讯系流量与数据，获客与协同"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "购车意向用户", region: "中国" }, usage_patterns: { content_creation_rate: "口碑与询价", engagement_rate: "资讯与线索" } },
        business_model: { revenue_streams: [{ type: "经销商线索", description: "询价与到店" }, { type: "广告与主机厂", description: "品牌与活动" }], monetization_strategy: "线索 + 广告", financial_metrics: { profitability: "汽车垂直" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "资讯与线索" } }
    },
    daily_yoga: {
        title: "每日瑜伽 (Daily Yoga)",
        subtitle: "瑜伽与冥想练习",
        dao: "跟练与打卡。课程与计划、冥想与呼吸，形成练习习惯，垂直瑜伽与冥想。",
        gov: "课程与计划由平台设计，用户跟练。",
        space: "课程 + 计划 + 冥想 + 社区。",
        econ: "会员与课程付费、装备导流。",
        risk: "与 Keep、竞品、线下瑜伽竞争。",
        atomic_unit: "课程/计划/打卡",
        distribution: "推荐 50% + 计划 30% + 社区 20%",
        death_risk: "用户流向综合健身",
        tags: ["#每日瑜伽", "#瑜伽", "#冥想"],
        scores: [55, 52, 52, 58, 55],
        timeline: [
            { year: "2012", event: "每日瑜伽上线" },
            { year: "2018", event: "会员与课程" },
            { year: "2020", event: "冥想与呼吸" },
            { year: "2022", event: "冥想与硬件" }
        ],
        key_decisions: [
            "垂直瑜伽与冥想，差异化于综合健身",
            "课程与计划降低门槛，跟练与打卡形成习惯",
            "会员制变现，课程与装备延伸"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "女性与减压需求", region: "中国" }, usage_patterns: { content_creation_rate: "打卡与社区", engagement_rate: "跟练与计划" } },
        business_model: { revenue_streams: [{ type: "会员与课程", description: "付费课程与计划" }, { type: "装备导流", description: "瑜伽装备" }], monetization_strategy: "会员 + 课程 + 导流", financial_metrics: { profitability: "垂直运动" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "跟练与打卡" } }
    },
    duozhuayu: {
        title: "多抓鱼 (Duozhuayu)",
        subtitle: "二手书循环与阅读社区",
        dao: "买二手书、卖二手书。C2B2C 循环，品控与环保叙事，形成读书人社区，线下与线上结合。",
        gov: "平台定价与品控，用户卖书买书。",
        space: "书店 + 卖书 + 社区 + 书单。",
        econ: "买卖差价、会员与包月。",
        risk: "与闲鱼、孔夫子、当当竞争。",
        atomic_unit: "书/订单/书单",
        distribution: "推荐 45% + 分类 35% + 搜索 20%",
        death_risk: "规模与供应链成本",
        tags: ["#多抓鱼", "#二手书", "#循环"],
        scores: [65, 50, 58, 58, 60],
        timeline: [
            { year: "2017", event: "多抓鱼上线" },
            { year: "2019", event: "线下店与品类拓展" },
            { year: "2021", event: "环保与循环叙事强化" },
            { year: "2023", event: "包月与会员" }
        ],
        key_decisions: [
            "C2B2C 品控与信任，平台定价与翻新",
            "环保与循环叙事，建立品牌与用户认同",
            "线下与线上结合，体验与复购"
        ],
        user_metrics: { monthly_active_users: "数百万级", user_demographics: { age_range: "读书与环保偏好", region: "中国一二线" }, usage_patterns: { content_creation_rate: "卖书与书单", engagement_rate: "买书与复购" } },
        business_model: { revenue_streams: [{ type: "买卖差价", description: "收书与售书价差" }, { type: "会员与包月", description: "订阅与包月读" }], monetization_strategy: "价差 + 会员", financial_metrics: { profitability: "垂直二手书" } },
        key_metrics: { core_metrics: { mau: "数百万", engagement_rate: "买卖与书单" } }
    },
    zhuanzhuan: {
        title: "转转 (Zhuanzhuan)",
        subtitle: "二手交易与验机",
        dao: "放心卖、放心买。C2C 与验机、回收，平台担保与质检，58 系流量与场景。",
        gov: "平台规则与验机标准，信用与评价。",
        space: "商品流 + 验机 + 回收 + 圈子。",
        econ: "抽佣、验机费、回收差价。",
        risk: "与闲鱼、抖音二手、爱回收竞争。",
        atomic_unit: "商品/验机/订单",
        distribution: "推荐 50% + 分类 30% + 搜索 20%",
        death_risk: "信任与规模经济",
        tags: ["#转转", "#二手", "#58"],
        scores: [58, 55, 55, 65, 60],
        timeline: [
            { year: "2015", event: "转转上线" },
            { year: "2018", event: "验机与回收" },
            { year: "2020", event: "与找靓机合并" },
            { year: "2022", event: "全品类与信任体系" }
        ],
        key_decisions: [
            "验机与质检建立信任，降低 C2C 风险",
            "回收与以旧换新，拓展供给与场景",
            "58 系流量与场景，获客与协同"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "二手买卖用户", region: "中国" }, usage_patterns: { content_creation_rate: "发布与验机", engagement_rate: "交易与回收" } },
        business_model: { revenue_streams: [{ type: "抽佣与验机费", description: "交易与质检" }, { type: "回收差价", description: "以旧换新" }], monetization_strategy: "抽佣 + 验机 + 回收", financial_metrics: { profitability: "二手赛道" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "交易与验机" } }
    },
    qyer: {
        title: "穷游 (Qyer)",
        subtitle: "出境游攻略与社区",
        dao: "穷游也能玩好。攻略、游记、问答与预订，服务出境自由行，攻略与社区粘性。",
        gov: "编辑与 UGC，社区与内容审核。",
        space: "游记 + 攻略 + 问答 + 目的地。",
        econ: "预订佣金、广告、会员。",
        risk: "与马蜂窝、小红书、携程竞争。",
        atomic_unit: "游记/攻略/问答",
        distribution: "推荐 40% + 目的地 40% + 搜索 20%",
        death_risk: "出境复苏与流量",
        tags: ["#穷游", "#出境游", "#攻略"],
        scores: [62, 52, 58, 58, 55],
        timeline: [
            { year: "2004", event: "穷游网成立" },
            { year: "2012", event: "社区与攻略成熟" },
            { year: "2018", event: "预订与内容闭环" },
            { year: "2022", event: "出境复苏与内容" }
        ],
        key_decisions: [
            "出境自由行垂直，建立攻略与决策信任",
            "攻略与社区粘性，UGC 与编辑结合",
            "预订与内容闭环，佣金与广告变现"
        ],
        user_metrics: { monthly_active_users: "数千万级", user_demographics: { age_range: "出境自由行用户", region: "中国" }, usage_patterns: { content_creation_rate: "游记与问答", engagement_rate: "攻略与预订" } },
        business_model: { revenue_streams: [{ type: "预订佣金", description: "机票酒店等" }, { type: "广告与会员", description: "品牌与增值" }], monetization_strategy: "内容获客 + 预订与广告", financial_metrics: { profitability: "受出境周期影响" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "攻略与预订" } }
    },
    dianping: { title: "大众点评 (Dianping)", subtitle: "本地生活与消费决策", dao: "找店、看评价、团购：商户信息与 UGC 点评（星级/图文）支撑决策，团购与到店套餐形成交易闭环；合并美团后为到店内容与品牌入口，与外卖协同。", gov: "平台规则与商户认证（实地/证照）、评价反作弊（刷单/恶意）、榜单与推荐算法；与美团共用商户与订单数据。", space: "搜索（店/品类/关键词） + 榜单（必吃/必玩） + 商户页（点评/团购/信息） + 社区（笔记）。", econ: "团购与到店抽佣、广告（排名/推广）、会员与到综；内容与交易协同提升 LTV。", risk: "抖音本地与小红书抢种草与到店；内容与交易被分流；点评心智弱化。", atomic_unit: "商户/点评/团购", distribution: "搜索 45% + 推荐 35% + 榜单 20%", death_risk: "内容与交易被分流", tags: ["#大众点评", "#本地生活", "#美团", "#UGC", "#团购"], scores: [62, 58, 58, 75, 68], timeline: [{ year: "2003", event: "大众点评成立，UGC 点评" }, { year: "2010", event: "团购与移动化" }, { year: "2015", event: "与美团合并" }, { year: "2022", event: "榜单与内容强化" }], key_decisions: ["UGC 点评建立决策信任", "团购与到店形成交易闭环", "与美团合并共享流量与数据", "榜单与内容应对抖音小红书"] },
    meituan: {
        title: "美团 (Meituan)",
        subtitle: "本地生活与外卖平台",
        dao: "吃喝玩乐一站解决：外卖（餐饮+即时零售）高频带低频，到店（团购/到综）与酒旅、出行（单车/打车）多品类；地推与履约网络（骑手/站点）形成壁垒，日单量亿级，本地生活第一入口。",
        gov: "平台规则与商户准入/评级、骑手调度与奖惩、算法推荐与定价；到店与外卖分事业群，统一账号与会员。",
        space: "首页（推荐/品类入口） + 品类（外卖/到店/酒旅/单车等） + 商户/商品 + 订单。",
        econ: "外卖与到店抽佣（约 15–25%）与广告（排名/推广）、闪购与优选、酒旅佣金；到店复苏与即时零售为增长点。",
        risk: "饿了么与抖音本地抢份额、拼多多到店低价；骑手成本与合规；新业务亏损。",
        atomic_unit: "订单/商户/品类",
        distribution: "推荐 50% + 搜索 30% + 复购 20%",
        death_risk: "补贴与竞争挤压利润",
        tags: ["#美团", "#外卖", "#本地生活", "#到店", "#即时零售"],
        scores: [55, 65, 58, 82, 72],
        timeline: [
            { year: "2010", event: "美团成立，团购" },
            { year: "2015", event: "与大众点评合并，外卖第一" },
            { year: "2018", event: "上市，到店与酒旅" },
            { year: "2022", event: "即时零售与闪购" }
        ],
        key_decisions: [
            "多品类与高频带低频巩固入口",
            "履约与地推建立供给壁垒",
            "到店与外卖双轮变现",
            "闪购与优选拓展边界"
        ],
        user_metrics: {
            monthly_active_users: "约 4 亿+",
            daily_active_users: "约 1 亿+",
            orders_per_day: "外卖+到店+闪购等亿级单量",
            user_demographics: "全年龄段、一二线下沉全覆盖"
        },
        business_model: {
            revenue_streams: [
                { type: "外卖与到店抽佣", percentage: 55, description: "餐饮与到综约 15–25% 抽佣" },
                { type: "广告与营销", percentage: 25, description: "排名/推广/品牌" },
                { type: "闪购/优选/酒旅等", percentage: 20, description: "新业务与佣金" }
            ],
            monetization_strategy: "抽佣+广告双轮，到店复苏与即时零售为增长引擎"
        },

        user_metrics: { monthly_active_users: "估算", user_demographics: { age_range: "多元", gender_ratio: "均衡", region: "全球", income_level: "多元" }, usage_patterns: { engagement_rate: "50%" } },
        business_model: { revenue_streams: [{ type: "主要", percentage: 80, description: "收入" }], monetization_strategy: "平台" },
        key_metrics: { core_metrics: { dau: "估算", mau: "估算", engagement_rate: "50%", retention_7d: "52%", retention_30d: "50%" } }


    },
    eleme: {
        title: "饿了么 (Ele.me)",
        subtitle: "外卖与即时配送",
        dao: "送啥都快：餐饮外卖主场景，即时零售（超市/药店）与阿里生态（口碑/高德/淘宝）协同；骑手履约与商户运营，份额第二、重点一二线；阿里财报披露本地生活年度活跃消费者与订单量。",
        gov: "平台规则与骑手调度/奖惩、商户准入与评级、与口碑/高德账号与流量打通。",
        space: "首页（推荐/品类） + 商户 + 订单 + 会员（超级会员）。",
        econ: "抽佣（约 15–20%）与配送费、广告、超级会员；与阿里本地生活协同降本，货币化率与单均亏损为关键。",
        risk: "美团外卖份额领先、抖音外卖试水；补贴与骑手成本；与口碑整合效果。",
        atomic_unit: "订单/商户/骑手",
        distribution: "推荐 55% + 搜索 30% + 复购 15%",
        death_risk: "份额与补贴战",
        tags: ["#饿了么", "#外卖", "#阿里", "#即时零售", "#口碑"],
        scores: [52, 62, 55, 78, 68],
        timeline: [
            { year: "2008", event: "饿了么成立，校园" },
            { year: "2018", event: "被阿里收购" },
            { year: "2020", event: "与口碑合并" },
            { year: "2022", event: "与高德/淘宝协同" }
        ],
        key_decisions: ["校园起家与地推积累供给", "阿里收购获流量与资金", "与口碑高德协同", "即时零售拓展场景"],
        user_metrics: {
            monthly_active_users: "数亿级（阿里本地生活年度活跃消费者，含饿了么/口碑）",
            daily_active_users: "数千万级",
            growth_rate: "与美团竞争下增速承压",
            retention_rate: "会员与复购驱动",
            user_demographics: {
                age_range: "18–45 岁为主，一二线白领与学生",
                gender_ratio: "略偏男性（外卖决策）",
                region: "中国一二线城市为主",
                income_level: "中等收入、高频外食与即时需求"
            },
            usage_patterns: {
                avg_session_duration: "点单 5–10 分钟",
                sessions_per_day: "1–2 次为主",
                content_creation_rate: "评价与复购",
                engagement_rate: "搜索与推荐转化、会员渗透"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "商户抽佣", percentage: 55, description: "约 15–20% 抽佣，主收入" },
                { type: "配送费", percentage: 25, description: "用户付配送费，部分补贴骑手" },
                { type: "广告与营销", percentage: 15, description: "商户竞价与品牌" },
                { type: "超级会员", percentage: 5, description: "月卡/年卡与免配送费权益" }
            ],
            monetization_strategy: "抽佣+配送费+广告+会员，与阿里生态协同降本获客",
            financial_metrics: {
                annual_revenue: "阿里本地生活合并披露，亏损收窄中",
                revenue_growth: "订单量与 GMV 增速受竞争影响",
                profitability: "亏损，与美团补贴战",
                valuation: "并入阿里，未单独估值"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数千万级",
                mau: "数亿级（与口碑合并口径）",
                engagement_rate: "复购与会员渗透",
                retention_7d: "高频用户占比",
                retention_30d: "月活与订单频次"
            },
            content_metrics: {
                daily_orders: "数千万单量级（行业第二）",
                avg_order_value: "客单 30–50 元区间",
                merchant_count: "数百万商户"
            },
            business_metrics: {
                take_rate: "约 15–20% 抽佣",
                arpu: "单用户年均订单与会员",
                cac: "补贴与阿里导流"
            }
        }
    },
    didi: {
        title: "滴滴 (Didi)",
        subtitle: "出行与网约车平台",
        dao: "让出行更美好：网约车（快车/优享/专车）主场景，顺风车、代驾与青桔两轮补充；供需匹配与动态定价、安全与合规（录音/人脸/持证）为底线；披露日单量数千万级、年活用户数亿。",
        gov: "平台规则与司机准入/培训、乘客信用、合规（双证/合规率）与安全（客服/应急）；分城市运营与政策博弈。",
        space: "叫车（目的地/车型） + 订单（进行中/历史） + 地图 + 出行（顺风车/代驾/青桔）。",
        econ: "抽佣（约 20–30%）为主、广告与金融（滴水贷/车服）、企业用车；顺风车与青桔为补充，抽成与司机侧成本平衡为关键。",
        risk: "高德/美团聚合抢量、合规与牌照；安全事件与舆论；补贴与司机关系。",
        atomic_unit: "订单/司机/乘客",
        distribution: "叫车 80% + 历史 15% + 其他 5%",
        death_risk: "合规与竞争",
        tags: ["#滴滴", "#网约车", "#出行", "#顺风车", "#青桔"],
        scores: [52, 65, 55, 80, 70],
        timeline: [
            { year: "2012", event: "滴滴成立" },
            { year: "2016", event: "与 Uber 中国合并，市场第一" },
            { year: "2018", event: "顺风车安全事件与整改" },
            { year: "2022", event: "合规与恢复增长" }
        ],
        key_decisions: ["补贴与规模建立网络效应", "多品类与出行生态延伸", "安全与合规为生存前提", "聚合与竞对下的体验与成本"],
        user_metrics: {
            monthly_active_users: "数亿级（披露年度活跃用户）",
            daily_active_users: "数千万级",
            growth_rate: "合规与竞争下增速放缓",
            retention_rate: "刚需与频次驱动",
            user_demographics: {
                age_range: "18–50 岁为主，通勤与出行刚需",
                gender_ratio: "略偏男性（司机端更多男性）",
                region: "中国一二线为主，下沉延伸",
                income_level: "全阶层，通勤与商务双线"
            },
            usage_patterns: {
                avg_session_duration: "单次行程 20–40 分钟",
                sessions_per_day: "1–2 次叫车",
                content_creation_rate: "评价与复叫",
                engagement_rate: "完单率与复购"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "网约车抽佣", percentage: 75, description: "快车/优享/专车抽成约 20–30%" },
                { type: "顺风车/代驾/青桔", percentage: 12, description: "顺风车抽成较低、青桔骑行" },
                { type: "广告与金融", percentage: 10, description: "滴水贷、车服、企业用车" },
                { type: "其他", percentage: 3, description: "自动驾驶等" }
            ],
            monetization_strategy: "抽佣为主、金融与广告为辅，合规成本与司机关系平衡",
            financial_metrics: {
                annual_revenue: "数百亿人民币量级（非上市披露有限）",
                revenue_growth: "合规与聚合竞争下承压",
                profitability: "曾亏损收窄，盈利与合规并重",
                valuation: "曾超 500 亿美元，退市后未披露"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数千万级",
                mau: "数亿级",
                engagement_rate: "完单与复叫率",
                retention_7d: "周活与频次",
                retention_30d: "月活与订单频次"
            },
            content_metrics: {
                daily_orders: "数千万单",
                avg_trip_value: "客单 20–40 元（快车）",
                driver_count: "数千万注册司机、百万日活"
            },
            business_metrics: {
                take_rate: "约 20–30% 抽成",
                arpu: "单用户年均订单与金额",
                cac: "补贴与司机激励"
            }
        }
    },
    pinduoduo: {
        title: "拼多多 (Pinduoduo)",
        subtitle: "社交电商与下沉市场",
        dao: "拼着买更便宜：拼团与社交裂变（微信分享/砍价）获客、低价白牌与农产品主打性价比与下沉；货找人算法、百亿补贴上行一二线，Temu 复制模式出海；财报披露年度活跃买家超 9 亿、GMV 数万亿。",
        gov: "平台规则与商家准入/罚则、算法推荐与活动（秒杀/百亿补贴）、低价与品控平衡；极简运营、重算法轻运营。",
        space: "首页（信息流/活动） + 拼团/商品 + 多多买菜 + 视频（多多视频）。",
        econ: "广告与佣金（主）、多多买菜（社区团购）、Temu 跨境；货币化率提升与品牌上行为关键，国内盈利支撑 Temu 投入。",
        risk: "淘宝/京东/抖音抢品牌与上行；Temu 亏损与地缘；低价与品质舆论。",
        atomic_unit: "商品/拼团/订单",
        distribution: "推荐 55% + 活动 30% + 搜索 15%",
        death_risk: "品牌化与上行压力",
        tags: ["#拼多多", "#社交电商", "#下沉", "#Temu", "#百亿补贴"],
        scores: [58, 62, 55, 85, 72],
        timeline: [
            { year: "2015", event: "拼多多成立，拼团" },
            { year: "2018", event: "纳斯达克上市" },
            { year: "2020", event: "多多买菜与社区团购" },
            { year: "2022", event: "Temu 出海" }
        ],
        key_decisions: ["拼团与社交裂变低成本获客", "下沉与白牌供应链建立性价比", "百亿补贴与品牌上行", "Temu 复制模式出海"],
        user_metrics: {
            monthly_active_users: "超 9 亿年度活跃买家（财报披露）",
            daily_active_users: "数亿级",
            growth_rate: "国内增速放缓、Temu 高增长",
            retention_rate: "复购与频次驱动",
            user_demographics: {
                age_range: "全年龄，下沉与家庭为主",
                gender_ratio: "女性略高（家庭采购）",
                region: "三四线占比高，一二线百亿补贴上行",
                income_level: "性价比与白牌敏感"
            },
            usage_patterns: {
                avg_session_duration: "浏览与比价 15–30 分钟",
                sessions_per_day: "多频、冲动下单",
                content_creation_rate: "拼团发起、评价",
                engagement_rate: "点击与转化、复购"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "在线营销（广告）", percentage: 75, description: "商家竞价与推广，主收入" },
                { type: "交易佣金", percentage: 15, description: "GMV 抽佣" },
                { type: "多多买菜", percentage: 8, description: "社区团购" },
                { type: "Temu 等", percentage: 2, description: "跨境（亏损投入期）" }
            ],
            monetization_strategy: "广告为主、佣金为辅，货币化率持续提升，Temu 独立投入",
            financial_metrics: {
                annual_revenue: "超 2000 亿人民币（2023）",
                revenue_growth: "国内稳健、Temu 高增",
                profitability: "国内盈利、Temu 亏损",
                valuation: "纳斯达克上市，市值千亿美元量级"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数亿级",
                mau: "超 9 亿年度活跃买家",
                engagement_rate: "点击率与转化率",
                retention_7d: "周复购",
                retention_30d: "月活与订单频次"
            },
            content_metrics: {
                gmv: "数万亿人民币（国内）",
                order_count: "日均数千万单",
                merchant_count: "千万级商家"
            },
            business_metrics: {
                monetization_rate: "约 3–4% 提升中",
                arpu: "单用户年消费额",
                cac: "极低（社交裂变）"
            }
        }
    },
    jd: {
        title: "京东 (JD.com)",
        subtitle: "自营电商与物流",
        dao: "多快好省：自营 3C 与家电建立品质与正品心智，京东物流（211/次日达）支撑体验；开放平台补品类与长尾，与拼多多/抖音错位；财报披露年度活跃购买用户数亿、GMV 数万亿。",
        gov: "平台规则与商家准入/品控、自营与 POP 运营、物流时效与成本；采销与算法协同。",
        space: "首页（推荐/频道） + 品类 + 商品 + 订单（物流可视）。",
        econ: "自营毛利、平台佣金与广告、物流（开放/外部）、金融（白条等）；利润与增速平衡，履约成本为关键。",
        risk: "天猫抢品牌、拼多多抢下沉、抖音抢冲动；物流成本与开放平衡。",
        atomic_unit: "商品/订单/物流",
        distribution: "推荐 45% + 搜索 35% + 复购 20%",
        death_risk: "增速与利润平衡",
        tags: ["#京东", "#电商", "#自营", "#京东物流", "#品质"],
        scores: [52, 58, 55, 82, 72],
        timeline: [
            { year: "2004", event: "京东成立，自营 3C" },
            { year: "2014", event: "纳斯达克上市" },
            { year: "2017", event: "物流独立与开放" },
            { year: "2022", event: "下沉与京喜" }
        ],
        key_decisions: ["自营与物流建立体验壁垒", "开放平台补品类与货币化", "品质心智应对拼多多", "下沉与京喜获客"],
        user_metrics: {
            monthly_active_users: "数亿级（财报年度活跃购买用户）",
            daily_active_users: "数千万级",
            growth_rate: "稳健、下沉与即时零售增长",
            retention_rate: "复购与会员（Plus）高",
            user_demographics: {
                age_range: "25–45 岁为主，品质与 3C 心智",
                gender_ratio: "男性略高（3C/家电）",
                region: "一二线为主、下沉延伸",
                income_level: "中高收入、正品与时效敏感"
            },
            usage_patterns: {
                avg_session_duration: "搜索与比价 10–20 分钟",
                sessions_per_day: "大促与复购驱动",
                content_creation_rate: "评价与复购",
                engagement_rate: "搜索转化、Plus 渗透"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "自营商品销售", percentage: 85, description: "3C/家电/日用等自营毛利" },
                { type: "平台佣金与广告", percentage: 10, description: "POP 商家" },
                { type: "物流与其他", percentage: 5, description: "开放物流、金融等" }
            ],
            monetization_strategy: "自营为主、开放平台与物流补充，利润与规模平衡",
            financial_metrics: {
                annual_revenue: "超万亿人民币（2023）",
                revenue_growth: "个位数稳健增长",
                profitability: "盈利",
                valuation: "纳斯达克/港交所，市值数百亿美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数千万级",
                mau: "数亿级",
                engagement_rate: "复购与 Plus 占比",
                retention_7d: "周活",
                retention_30d: "月活与订单频次"
            },
            content_metrics: {
                gmv: "数万亿人民币",
                order_count: "日均数千万单",
                sku_count: "自营+开放海量 SKU"
            },
            business_metrics: {
                gross_margin: "自营与开放综合毛利率",
                arpu: "单用户年消费额",
                fulfillment_cost: "物流成本与效率"
            }
        }
    },
    taobao: {
        title: "淘宝 (Taobao)",
        subtitle: "C2C 与综合电商",
        dao: "万能的淘宝：海量商家与长尾商品、搜索与推荐双轮分发，直播与逛逛（短视频）做内容与种草；满足「什么都能买到」心智，与天猫协同覆盖品牌与白牌；阿里财报中国零售年度活跃消费者超 9 亿。",
        gov: "平台规则与商家准入/处罚、内容与直播审核、搜索与推荐算法；淘宝与天猫分而治之、账号与流量打通。",
        space: "首页（推荐/频道） + 搜索（商品/店铺） + 店铺 + 直播/逛逛。",
        econ: "广告（直通车/超级推荐等）与佣金为主、天猫与自营、花呗/理财等金融；货币化率与流量效率为关键。",
        risk: "拼多多抢下沉与白牌、京东抢品质与物流、抖音抢内容与冲动消费；流量与商家外流。",
        atomic_unit: "商品/店铺/直播",
        distribution: "推荐 50% + 搜索 35% + 内容 15%",
        death_risk: "流量与商家外流",
        tags: ["#淘宝", "#电商", "#阿里", "#直播", "#逛逛"],
        scores: [55, 62, 58, 88, 75],
        timeline: [
            { year: "2003", event: "淘宝成立，C2C" },
            { year: "2016", event: "内容与直播" },
            { year: "2020", event: "逛逛上线" },
            { year: "2022", event: "与天猫融合与短视频" }
        ],
        key_decisions: ["C2C 与长尾建立品类心智", "搜索与推荐双轮分发", "内容与直播带货提升转化", "逛逛应对抖音种草"],
        user_metrics: {
            monthly_active_users: "数亿级（阿里中国零售 AAC 含淘宝/天猫）",
            daily_active_users: "数亿级",
            growth_rate: "存量竞争、内容与直播拉活",
            retention_rate: "复购与 88VIP/会员",
            user_demographics: {
                age_range: "18–45 岁为主，全品类",
                gender_ratio: "女性略高（服饰美妆）",
                region: "全国覆盖、一二线占比高",
                income_level: "全阶层、长尾与品牌并存"
            },
            usage_patterns: {
                avg_session_duration: "浏览与种草 20–40 分钟",
                sessions_per_day: "多频、直播与逛逛拉时长",
                content_creation_rate: "直播观看、逛逛互动",
                engagement_rate: "搜索与推荐转化、直播转化"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "客户管理（广告）", percentage: 65, description: "直通车、超级推荐等" },
                { type: "佣金", percentage: 25, description: "交易抽佣" },
                { type: "其他（天猫自营等）", percentage: 10, description: "自营、盒马等" }
            ],
            monetization_strategy: "广告+佣金为主，内容与直播提升转化与货币化率",
            financial_metrics: {
                annual_revenue: "阿里中国商业收入数千亿人民币",
                revenue_growth: "低个位数、竞争分流",
                profitability: "盈利",
                valuation: "阿里核心资产，集团市值"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数亿级",
                mau: "数亿级",
                engagement_rate: "点击与转化、直播观看",
                retention_7d: "周活",
                retention_30d: "月活与 GMV"
            },
            content_metrics: {
                gmv: "数万亿（淘宝+天猫）",
                live_stream_gmv: "直播带货占比提升",
                merchant_count: "千万级商家"
            },
            business_metrics: {
                monetization_rate: "约 3–4%",
                arpu: "单用户年消费",
                cac: "流量与内容获客"
            }
        }
    },
    netease_music: {
        title: "网易云音乐 (NetEase Music)",
        subtitle: "音乐与社区",
        dao: "发现与分享音乐：UGC 歌单与「评论区故事」形成强情感与认同，算法与编辑推荐并重；版权缺口后靠独立音乐与社区粘性留存；披露月活超 2 亿、日活过亿。",
        gov: "编辑与算法推荐、UGC 歌单与评论审核、音乐人入驻与版权；社区规则与反抄袭。",
        space: "发现（推荐/歌单/播客） + 歌单 + 评论（歌曲/动态） + 动态/云村。",
        econ: "会员（听歌/音质/下载）为主、广告、直播与周边；版权成本与会员转化率为关键。",
        risk: "QQ 音乐/版权方独占、抖音音乐抢时长；版权与份额双重压力。",
        atomic_unit: "歌/歌单/评论",
        distribution: "推荐 50% + 歌单 30% + 搜索 20%",
        death_risk: "版权与份额",
        tags: ["#网易云音乐", "#音乐", "#评论", "#歌单", "#独立音乐"],
        scores: [68, 58, 65, 65, 68],
        timeline: [
            { year: "2013", event: "网易云音乐上线" },
            { year: "2017", event: "评论与社区出圈" },
            { year: "2018", event: "版权下架与用户情绪" },
            { year: "2022", event: "版权回归与独立音乐" }
        ],
        key_decisions: ["歌单与评论建立情感连接", "算法与编辑结合发现", "版权困境下靠社区留存", "会员与直播多元变现"],
        user_metrics: {
            monthly_active_users: "超 2 亿（披露）",
            daily_active_users: "过亿",
            growth_rate: "版权回归后稳健",
            retention_rate: "评论与歌单粘性高",
            user_demographics: {
                age_range: "18–35 岁为主，Z 世代与文艺向",
                gender_ratio: "均衡略偏女性",
                region: "一二线为主",
                income_level: "学生与年轻白领"
            },
            usage_patterns: {
                avg_session_duration: "约 50 分钟/天",
                sessions_per_day: "多场景收听",
                content_creation_rate: "歌单、评论、动态",
                engagement_rate: "评论互动、分享"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "会员订阅", percentage: 55, description: "黑胶 VIP、音质与下载" },
                { type: "广告", percentage: 25, description: "信息流、开屏" },
                { type: "直播与社交", percentage: 15, description: "虚拟礼物、K 歌" },
                { type: "其他", percentage: 5, description: "数字专辑、周边" }
            ],
            monetization_strategy: "会员为主、广告与直播为辅，版权成本与付费率平衡",
            financial_metrics: {
                annual_revenue: "数十亿人民币（网易披露）",
                revenue_growth: "会员与广告增长",
                profitability: "亏损收窄或微利",
                valuation: "独立上市（云音乐 HK）"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "过亿",
                mau: "超 2 亿",
                engagement_rate: "收听时长、评论率",
                retention_7d: "高",
                retention_30d: "月活稳定"
            },
            content_metrics: {
                daily_listens: "数十亿次播放",
                playlist_count: "海量 UGC 歌单",
                comment_volume: "评论区故事出圈"
            },
            business_metrics: {
                paid_ratio: "会员渗透率",
                arpu: "会员与广告",
                copyright_cost: "版权与独家"
            }
        }
    },
    qq_music: {
        title: "QQ 音乐 (QQ Music)",
        subtitle: "音乐流媒体与生态",
        dao: "听歌与发现。版权与曲库国内领先、推荐与歌单，与 QQ/微信生态协同；TME 披露移动端月活数亿、付费用户数千万。",
        gov: "腾讯版权与运营，算法与编辑。",
        space: "发现 + 音乐 + 播客 + 社区。",
        econ: "会员、广告、数字专辑与演出；版权投入大、付费与生态协同为关键。",
        risk: "与网易云、抖音音乐、苹果音乐竞争。",
        atomic_unit: "歌/歌单/播客",
        distribution: "推荐 50% + 搜索 25% + 歌单 25%",
        death_risk: "版权成本与增长",
        tags: ["#QQ音乐", "#音乐", "#腾讯"],
        scores: [55, 60, 55, 78, 70],
        timeline: [
            { year: "2005", event: "QQ 音乐上线" },
            { year: "2016", event: "与海洋音乐合并" },
            { year: "2022", event: "TME 与多端" }
        ],
        key_decisions: ["版权与曲库优势", "QQ/微信流量", "数字专辑与演出"],
        user_metrics: {
            monthly_active_users: "数亿（TME 移动端 MAU）",
            daily_active_users: "数千万级",
            growth_rate: "稳健、付费用户增长",
            retention_rate: "版权与生态留存",
            user_demographics: {
                age_range: "全年龄、QQ/微信用户泛化",
                gender_ratio: "均衡",
                region: "全国覆盖",
                income_level: "学生与泛人群"
            },
            usage_patterns: {
                avg_session_duration: "多场景收听",
                sessions_per_day: "与社交联动",
                content_creation_rate: "歌单、分享",
                engagement_rate: "收听时长、数字专辑"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "会员订阅", percentage: 50, description: "绿钻、豪华绿钻" },
                { type: "社交娱乐（直播/K 歌）", percentage: 35, description: "酷狗酷我系打赏" },
                { type: "广告与数字专辑", percentage: 15, description: "品牌、专辑销售" }
            ],
            monetization_strategy: "会员+社交娱乐双轮，TME 合并口径",
            financial_metrics: {
                annual_revenue: "TME 总收入数百亿人民币",
                revenue_growth: "社交娱乐承压、在线音乐增长",
                profitability: "盈利",
                valuation: "TME 纽交所上市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数千万级",
                mau: "数亿",
                engagement_rate: "收听与付费",
                retention_7d: "高",
                retention_30d: "月活稳定"
            },
            content_metrics: {
                daily_listens: "数十亿次（TME 口径）",
                paid_users: "数千万",
                catalog_size: "曲库最全之一"
            },
            business_metrics: {
                paid_ratio: "付费用户占比",
                arpu: "会员与社交娱乐",
                copyright: "独家与转授权"
            }
        }
    },
    kugou: {
        title: "酷狗音乐 (Kugou)",
        subtitle: "音乐与直播",
        dao: "听歌与直播。音乐播放、歌单与直播、K 歌，多场景覆盖；TME 旗下 MAU 数亿、直播与下沉用户占比高。",
        gov: "平台运营与版权，直播与公会。",
        space: "音乐 + 直播 + 歌单 + K 歌。",
        econ: "会员、直播打赏、广告；直播 ARPPU 高于纯音乐。",
        risk: "与 QQ 音乐、网易云、抖音竞争。",
        atomic_unit: "歌/直播/歌单",
        distribution: "推荐 45% + 直播 30% + 搜索 25%",
        death_risk: "TME 内部与外部竞争",
        tags: ["#酷狗", "#音乐", "#直播"],
        scores: [52, 58, 52, 72, 65],
        timeline: [
            { year: "2004", event: "酷狗成立" },
            { year: "2016", event: "并入 TME" },
            { year: "2022", event: "直播与长音频" }
        ],
        key_decisions: ["音乐 + 直播双轮", "下沉与多场景", "TME 生态"],
        user_metrics: {
            monthly_active_users: "数亿（TME 合并披露，酷狗+酷我）",
            daily_active_users: "数千万级",
            growth_rate: "与 TME 整体一致",
            retention_rate: "直播与歌单粘性",
            user_demographics: {
                age_range: "下沉与全年龄",
                gender_ratio: "直播用户略偏男性",
                region: "三四线占比高",
                income_level: "泛人群、打赏用户"
            },
            usage_patterns: {
                avg_session_duration: "音乐+直播时长",
                sessions_per_day: "多频",
                content_creation_rate: "K 歌、直播",
                engagement_rate: "打赏与会员"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "直播打赏", percentage: 55, description: "虚拟礼物、公会分成" },
                { type: "会员", percentage: 30, description: "听歌与特权" },
                { type: "广告", percentage: 15, description: "信息流等" }
            ],
            monetization_strategy: "直播为主、会员与广告为辅，TME 社交娱乐重要组成",
            financial_metrics: {
                annual_revenue: "并入 TME 社交娱乐收入",
                revenue_growth: "社交娱乐增速放缓",
                profitability: "贡献 TME 利润",
                valuation: "TME 旗下品牌"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数千万级",
                mau: "数亿",
                engagement_rate: "直播时长与打赏",
                retention_7d: "直播留存",
                retention_30d: "月活"
            },
            content_metrics: {
                daily_listens: "播放量亿级",
                live_stream_hours: "直播时长",
                karaoke_uploads: "K 歌作品"
            },
            business_metrics: {
                arppu: "直播 ARPPU 高于纯音乐",
                paid_ratio: "会员与打赏用户",
                take_rate: "直播抽成"
            }
        }
    },
    qmkg: {
        title: "全民 K 歌 (WeSing)",
        subtitle: "K 歌与音乐社交",
        dao: "人人都是歌手。K 歌、练唱与打分、作品与好友，形成音乐 UGC 与社交；TME 系 MAU 数亿、日活数千万级。",
        gov: "平台规则与内容审核，公会与直播。",
        space: "K 歌 + 作品 + 好友 + 直播。",
        econ: "虚拟礼物、会员、广告；打赏与会员为主。",
        risk: "与唱吧、抖音、快手 K 歌竞争。",
        atomic_unit: "作品/房间/礼物",
        distribution: "推荐 50% + 好友 30% + 搜索 20%",
        death_risk: "用户与时长被分流",
        tags: ["#全民K歌", "#K歌", "#腾讯"],
        scores: [62, 55, 60, 68, 62],
        timeline: [
            { year: "2014", event: "全民 K 歌上线" },
            { year: "2018", event: "直播与社交" },
            { year: "2022", event: "与 TME 协同" }
        ],
        key_decisions: ["K 歌与打分降低门槛", "社交与作品传播", "直播与礼物变现"],
        user_metrics: {
            monthly_active_users: "数亿（TME 披露）",
            daily_active_users: "数千万级",
            growth_rate: "稳健、受短视频分流",
            retention_rate: "好友与作品粘性",
            user_demographics: {
                age_range: "全年龄、下沉与 K 歌场景",
                gender_ratio: "略偏女性",
                region: "全国、三四线活跃",
                income_level: "泛人群、打赏用户"
            },
            usage_patterns: {
                avg_session_duration: "K 歌与直播",
                sessions_per_day: "多频",
                content_creation_rate: "作品发布、房间",
                engagement_rate: "送礼与互动"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "虚拟礼物", percentage: 60, description: "房间打赏、公会分成" },
                { type: "会员", percentage: 30, description: "VIP、特权" },
                { type: "广告", percentage: 10, description: "信息流" }
            ],
            monetization_strategy: "打赏+会员，TME 社交娱乐重要组成",
            financial_metrics: {
                annual_revenue: "并入 TME 社交娱乐",
                revenue_growth: "与 TME 一致",
                profitability: "贡献利润",
                valuation: "TME 旗下"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数千万级",
                mau: "数亿",
                engagement_rate: "作品发布与打赏",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                daily_songs: "作品量千万级",
                room_count: "直播房间数",
                gift_volume: "礼物与流水"
            },
            business_metrics: {
                arppu: "打赏与会员",
                take_rate: "直播抽成",
                paid_ratio: "付费用户"
            }
        }
    },
    changba: {
        title: "唱吧 (Changba)",
        subtitle: "K 歌与音乐社交",
        dao: "手机 K 歌。录歌、修音与分享、弹幕与互动，形成 K 歌社区；曾月活过亿，现被全民 K 歌与短视频分流，MAU 数千万级。",
        gov: "平台运营与内容审核。",
        space: "K 歌 + 作品 + 发现 + 直播。",
        econ: "虚拟礼物、会员、广告与硬件（麦克风等）；变现多元但规模不及竞品。",
        risk: "与全民 K 歌、抖音、快手竞争。",
        atomic_unit: "作品/房间/礼物",
        distribution: "推荐 50% + 关注 30% + 搜索 20%",
        death_risk: "份额与增长",
        tags: ["#唱吧", "#K歌", "#音乐"],
        scores: [58, 52, 55, 62, 58],
        timeline: [
            { year: "2012", event: "唱吧上线" },
            { year: "2016", event: "麦颂 KTV 与硬件" },
            { year: "2022", event: "与抖音合作" }
        ],
        key_decisions: ["手机 K 歌与修音", "社区与直播", "硬件与线下尝试"],
        user_metrics: {
            monthly_active_users: "数千万级（行业估算）",
            daily_active_users: "数百万级",
            growth_rate: "增速放缓、分流明显",
            retention_rate: "核心 K 歌用户留存",
            user_demographics: {
                age_range: "18–40 岁",
                gender_ratio: "略偏女性",
                region: "一二线为主",
                income_level: "泛人群"
            },
            usage_patterns: {
                avg_session_duration: "录歌与直播",
                sessions_per_day: "中频",
                content_creation_rate: "作品、房间",
                engagement_rate: "互动与打赏"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "虚拟礼物与直播", percentage: 50, description: "打赏分成" },
                { type: "会员", percentage: 25, description: "VIP 与特权" },
                { type: "广告与硬件", percentage: 25, description: "麦克风、信息流" }
            ],
            monetization_strategy: "打赏+会员+硬件，多元但规模有限",
            financial_metrics: {
                annual_revenue: "数亿人民币量级（估算）",
                revenue_growth: "平稳或下滑",
                profitability: "盈亏平衡附近",
                valuation: "曾融资多轮，未上市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "数千万级",
                engagement_rate: "作品与打赏",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                daily_songs: "作品量级",
                room_count: "直播房间",
                hardware_sales: "麦克风等"
            },
            business_metrics: {
                arppu: "打赏与会员",
                take_rate: "抽成",
                paid_ratio: "付费渗透"
            }
        }
    },
    qingting: {
        title: "蜻蜓 FM (Qingting)",
        subtitle: "网络音频与播客",
        dao: "听书听课听播客。有声书、课程、播客与电台，多场景收听；MAU 数千万级、车载与智能硬件场景占比提升。",
        gov: "版权与运营，主播与机构入驻。",
        space: "推荐 + 分类 + 播客 + 听书。",
        econ: "会员、广告、付费内容；会员与车载合作为增长点。",
        risk: "与喜马拉雅、小宇宙、苹果播客竞争。",
        atomic_unit: "节目/专辑/播客",
        distribution: "推荐 50% + 分类 30% + 搜索 20%",
        death_risk: "版权与用户增长",
        tags: ["#蜻蜓FM", "#播客", "#有声"],
        scores: [52, 55, 50, 62, 55],
        timeline: [
            { year: "2011", event: "蜻蜓 FM 成立" },
            { year: "2018", event: "播客与付费" },
            { year: "2022", event: "与车载与智能硬件" }
        ],
        key_decisions: ["多品类有声内容", "车载与场景拓展", "版权与独家"],
        user_metrics: {
            monthly_active_users: "数千万级",
            daily_active_users: "数百万级",
            growth_rate: "车载与 IoT 场景增长",
            retention_rate: "听书与播客习惯",
            user_demographics: {
                age_range: "25–45 岁，通勤与学习",
                gender_ratio: "均衡",
                region: "一二线为主",
                income_level: "中等、付费意愿"
            },
            usage_patterns: {
                avg_session_duration: "通勤与睡前 30–60 分钟",
                sessions_per_day: "1–2 次",
                content_creation_rate: "UGC 播客占比",
                engagement_rate: "完听率、付费转化"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "会员", percentage: 50, description: "畅听与精品" },
                { type: "广告", percentage: 35, description: "贴片与信息流" },
                { type: "付费内容与车载", percentage: 15, description: "单本、B 端合作" }
            ],
            monetization_strategy: "会员+广告，车载与硬件合作扩场景",
            financial_metrics: {
                annual_revenue: "数亿人民币量级（估算）",
                revenue_growth: "稳健",
                profitability: "盈亏平衡或微利",
                valuation: "曾融资，未上市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "数千万级",
                engagement_rate: "收听时长、完听",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                daily_listens: "播放量级",
                podcast_count: "节目与专辑数",
                paid_content_share: "付费内容占比"
            },
            business_metrics: {
                paid_ratio: "会员渗透",
                arpu: "会员与广告",
                iot_share: "车载与硬件占比"
            }
        }
    },
    lanrenting: {
        title: "懒人听书 (Lanrenting)",
        subtitle: "有声书与听书",
        dao: "听书解放双眼。有声书、广播剧与课程，付费与会员；阅文旗下，IP 与版权协同，MAU 数千万级。",
        gov: "版权与运营，主播与制作。",
        space: "听书 + 分类 + 会员 + 社区。",
        econ: "会员、单本付费、广告；阅文生态导流与 IP 改编。",
        risk: "与喜马拉雅、蜻蜓、微信听书竞争。",
        atomic_unit: "有声书/专辑/节目",
        distribution: "推荐 50% + 分类 35% + 搜索 15%",
        death_risk: "版权与竞品",
        tags: ["#懒人听书", "#有声书", "#听书"],
        scores: [50, 52, 48, 58, 52],
        timeline: [
            { year: "2012", event: "懒人听书上线" },
            { year: "2018", event: "被阅文收购" },
            { year: "2022", event: "与阅文 IP 协同" }
        ],
        key_decisions: ["有声书垂直", "阅文 IP 与版权", "会员与单本"],
        user_metrics: {
            monthly_active_users: "数千万级（阅文披露或估算）",
            daily_active_users: "数百万级",
            growth_rate: "与阅文协同",
            retention_rate: "听书习惯与 IP 粉丝",
            user_demographics: {
                age_range: "25–45 岁，通勤与睡前",
                gender_ratio: "略偏女性（言情/广播剧）",
                region: "全国",
                income_level: "中等、付费听书"
            },
            usage_patterns: {
                avg_session_duration: "30–60 分钟",
                sessions_per_day: "1–2 次",
                content_creation_rate: "评论与书单",
                engagement_rate: "完听率、复购"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "会员", percentage: 55, description: "畅听与包月" },
                { type: "单本付费", percentage: 30, description: "精品与独家" },
                { type: "广告", percentage: 15, description: "信息流" }
            ],
            monetization_strategy: "会员+单本，阅文 IP 降低版权成本",
            financial_metrics: {
                annual_revenue: "数亿人民币量级（阅文分部）",
                revenue_growth: "与阅文有声协同",
                profitability: "贡献阅文生态",
                valuation: "阅文旗下"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "数千万级",
                engagement_rate: "收听时长、完听",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                daily_listens: "播放量",
                title_count: "有声书与广播剧数",
                ip_adaptation: "阅文 IP 改编占比"
            },
            business_metrics: {
                paid_ratio: "会员与单本",
                arpu: "付费用户",
                copyright_cost: "阅文内部协同"
            }
        }
    },
    huaban: {
        title: "花瓣 (Huaban)",
        subtitle: "图片采集与设计灵感",
        dao: "采集与发现美图。用户采集图片到画板，他人发现与关注，设计灵感库；MAU 数百万至千万级、设计师与创意从业者为主。",
        gov: "平台规则与版权，画板与采集。",
        space: "发现 + 画板 + 采集 + 用户。",
        econ: "广告、会员与版权；变现以广告为主、会员增值。",
        risk: "与 Pinterest、站酷、小红书竞争。",
        atomic_unit: "图片/画板/采集",
        distribution: "推荐 50% + 关注 30% + 搜索 20%",
        death_risk: "用户与内容外流",
        tags: ["#花瓣", "#采集", "#设计"],
        scores: [58, 52, 55, 52, 52],
        timeline: [
            { year: "2011", event: "花瓣网上线" },
            { year: "2016", event: "移动端与社区" },
            { year: "2022", event: "版权与商业化" }
        ],
        key_decisions: ["采集与画板降低门槛", "设计灵感与发现", "版权与合规"],
        user_metrics: {
            monthly_active_users: "数百万至千万级（行业估算）",
            daily_active_users: "数十万级",
            growth_rate: "平稳、垂直用户",
            retention_rate: "画板与采集粘性",
            user_demographics: {
                age_range: "22–40 岁，设计师与创意",
                gender_ratio: "略偏女性",
                region: "一二线为主",
                income_level: "设计/创意从业者"
            },
            usage_patterns: {
                avg_session_duration: "采集与浏览 15–30 分钟",
                sessions_per_day: "中频",
                content_creation_rate: "画板与采集",
                engagement_rate: "关注与发现"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", percentage: 70, description: "信息流与品牌" },
                { type: "会员", percentage: 20, description: "去广告、高清等" },
                { type: "版权与合作", percentage: 10, description: "商用授权" }
            ],
            monetization_strategy: "广告为主、会员与版权补充",
            financial_metrics: {
                annual_revenue: "数千万至亿级（估算）",
                revenue_growth: "稳健",
                profitability: "盈亏平衡或微利",
                valuation: "曾融资，未上市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数十万级",
                mau: "数百万至千万级",
                engagement_rate: "采集与关注",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                pin_count: "采集与画板量",
                daily_views: "浏览与发现",
                creator_count: "活跃采集用户"
            },
            business_metrics: {
                ad_load: "广告填充",
                paid_ratio: "会员渗透",
                arpu: "广告与会员"
            }
        }
    },
    tuchong: {
        title: "图虫 (Tuchong)",
        subtitle: "摄影社区与版权",
        dao: "摄影作品展示与交易。摄影师发片、他人发现与约稿，版权与商业对接；字节旗下，MAU 数千万级、摄影师与商业客户双端。",
        gov: "平台规则与版权，认证与审核。",
        space: "作品流 + 摄影师 + 话题 + 约稿。",
        econ: "版权交易、会员、广告；版权分成与会员为主。",
        risk: "与站酷、500px、视觉中国竞争。",
        atomic_unit: "作品/摄影师/约稿",
        distribution: "推荐 45% + 关注 35% + 搜索 20%",
        death_risk: "版权与流量",
        tags: ["#图虫", "#摄影", "#版权"],
        scores: [60, 52, 58, 58, 55],
        timeline: [
            { year: "2007", event: "图虫网上线" },
            { year: "2016", event: "被今日头条收购" },
            { year: "2022", event: "与字节生态" }
        ],
        key_decisions: ["摄影垂直与版权", "头条系流量", "约稿与商业"],
        user_metrics: {
            monthly_active_users: "数千万级（字节生态）",
            daily_active_users: "数百万级",
            growth_rate: "与字节协同",
            retention_rate: "摄影师与商业客户粘性",
            user_demographics: {
                age_range: "25–45 岁，摄影爱好与商业",
                gender_ratio: "略偏男性",
                region: "一二线为主",
                income_level: "商业摄影与版权需求"
            },
            usage_patterns: {
                avg_session_duration: "浏览与选片",
                sessions_per_day: "中频",
                content_creation_rate: "摄影师发片",
                engagement_rate: "约稿与版权询价"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "版权交易与约稿", percentage: 50, description: "分成与佣金" },
                { type: "会员", percentage: 30, description: "摄影师与客户会员" },
                { type: "广告", percentage: 20, description: "信息流" }
            ],
            monetization_strategy: "版权+会员，字节流量赋能",
            financial_metrics: {
                annual_revenue: "数亿人民币量级（估算）",
                revenue_growth: "与字节一致",
                profitability: "贡献生态",
                valuation: "字节旗下"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "数千万级",
                engagement_rate: "发片与约稿",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                photo_count: "作品量级",
                photographer_count: "认证摄影师",
                deal_volume: "约稿与版权交易"
            },
            business_metrics: {
                take_rate: "版权与约稿抽成",
                arpu: "会员与交易",
                paid_ratio: "付费用户"
            }
        }
    },
    uisdc: {
        title: "优设 (UISDC)",
        subtitle: "设计资讯与教育",
        dao: "设计师的成长平台。资讯、教程与课程、作品与招聘，服务设计从业者；MAU 数百万级、垂直设计人群。",
        gov: "编辑与内容主导，课程与招聘。",
        space: "资讯 + 教程 + 课程 + 招聘。",
        econ: "广告、课程、招聘与会员；课程与训练营为变现重点。",
        risk: "与站酷、B 站、公众号竞争。",
        atomic_unit: "文章/教程/课程",
        distribution: "推荐 50% + 分类 30% + 搜索 20%",
        death_risk: "流量与变现",
        tags: ["#优设", "#设计", "#教程"],
        scores: [55, 50, 52, 55, 52],
        timeline: [
            { year: "2012", event: "优设网上线" },
            { year: "2018", event: "课程与训练营" },
            { year: "2022", event: "与设计工具结合" }
        ],
        key_decisions: ["资讯与教程免费引流", "课程与就业导向", "设计垂直"],
        user_metrics: {
            monthly_active_users: "数百万级（行业估算）",
            daily_active_users: "数十万级",
            growth_rate: "稳健、垂直增长",
            retention_rate: "课程与资讯习惯",
            user_demographics: {
                age_range: "22–38 岁，设计师与转行",
                gender_ratio: "均衡",
                region: "一二线为主",
                income_level: "设计从业与学习者"
            },
            usage_patterns: {
                avg_session_duration: "阅读与学习 20–40 分钟",
                sessions_per_day: "中频",
                content_creation_rate: "投稿与作品",
                engagement_rate: "课程完课、招聘转化"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "课程与训练营", percentage: 50, description: "付费课程、训练营" },
                { type: "广告", percentage: 30, description: "设计工具与品牌" },
                { type: "招聘与会员", percentage: 20, description: "招聘服务、会员" }
            ],
            monetization_strategy: "内容引流+课程变现，招聘与广告补充",
            financial_metrics: {
                annual_revenue: "数千万至亿级（估算）",
                revenue_growth: "课程与就业需求驱动",
                profitability: "盈亏平衡或微利",
                valuation: "未上市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数十万级",
                mau: "数百万级",
                engagement_rate: "阅读与完课",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                article_views: "资讯与教程 PV",
                course_enrollment: "课程报名量",
                job_postings: "招聘发布"
            },
            business_metrics: {
                course_arpu: "课程客单与复购",
                ad_load: "广告收入",
                conversion_rate: "免费到付费"
            }
        }
    },
    ctrip: {
        title: "携程 (Ctrip)",
        subtitle: "在线旅游与预订",
        dao: "一站式旅行服务：机票/酒店/火车票/度假打包，搜索与比价、预订与客服（呼叫中心+在线）；供应链与库存深度为壁垒，商旅与休闲双线；披露年交易额数千亿、月活数千万。",
        gov: "平台规则与供应商（酒店/航司/地接）合同与结算、客服与售后体系、会员与等级；多品牌（携程/去哪儿/Skyscanner）协同。",
        space: "搜索（目的地/日期） + 预订（产品列表/详情） + 攻略（UGC/榜单） + 订单。",
        econ: "佣金（酒店/机票/度假）为主、广告与会员、金融（携程金服）；高客单与复购为关键。",
        risk: "美团酒旅与飞猪抢国内、抖音做种草与预订；价格战与补贴；宏观与出行意愿。",
        atomic_unit: "订单/产品/攻略",
        distribution: "搜索 50% + 推荐 30% + 复购 20%",
        death_risk: "份额与价格战",
        tags: ["#携程", "#OTA", "#旅游", "#并购", "#商旅"],
        scores: [52, 58, 52, 82, 72],
        timeline: [
            { year: "1999", event: "携程成立，呼叫中心" },
            { year: "2015", event: "并购去哪儿，规模第一" },
            { year: "2020", event: "疫情冲击与梁建章直播" },
            { year: "2022", event: "复苏与国际化" }
        ],
        key_decisions: ["一站式与供应链建立壁垒", "并购去哪儿巩固规模", "服务与品牌支撑溢价", "商旅与会员提升 LTV"],
        user_metrics: {
            monthly_active_users: "数千万级（财报披露）",
            daily_active_users: "数百万级",
            growth_rate: "复苏后恢复增长",
            retention_rate: "商旅与会员高复购",
            user_demographics: {
                age_range: "25–55 岁，商旅与休闲",
                gender_ratio: "均衡",
                region: "国内与出境",
                income_level: "中高收入、高客单"
            },
            usage_patterns: {
                avg_session_duration: "搜索与比价 10–20 分钟",
                sessions_per_day: "计划与预订期多频",
                content_creation_rate: "攻略与点评",
                engagement_rate: "预订转化、复购"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "住宿预订佣金", percentage: 40, description: "酒店与民宿" },
                { type: "交通票务", percentage: 35, description: "机票、火车票" },
                { type: "度假与打包", percentage: 15, description: "跟团、自由行" },
                { type: "广告与会员", percentage: 10, description: "品牌、会员费" }
            ],
            monetization_strategy: "佣金为主、高客单与复购，商旅贡献稳定",
            financial_metrics: {
                annual_revenue: "数百亿人民币（复苏后）",
                revenue_growth: "疫情后恢复、出境复苏",
                profitability: "盈利",
                valuation: "港美上市，市值数百亿美元"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "数千万级",
                engagement_rate: "预订转化与复购",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                gmv: "年交易额数千亿",
                booking_count: "间夜与票务量",
                review_count: "攻略与点评"
            },
            business_metrics: {
                take_rate: "佣金率",
                arpu: "单用户年预订额",
                corporate_share: "商旅占比"
            }
        }
    },
    qunar: {
        title: "去哪儿 (Qunar)",
        subtitle: "旅游搜索与比价",
        dao: "比价与预订。搜索比价、机票酒店度假，与携程协同；携程系流量入口，MAU 数千万级、年轻与性价比用户。",
        gov: "平台规则与供应商。",
        space: "搜索 + 比价 + 预订 + 攻略。",
        econ: "佣金、广告；与携程供应链共享、品牌差异化。",
        risk: "与携程整合后品牌独立与竞争。",
        atomic_unit: "搜索/比价/订单",
        distribution: "搜索 60% + 推荐 25% + 复购 15%",
        death_risk: "流量与品牌",
        tags: ["#去哪儿", "#比价", "#携程"],
        scores: [50, 58, 50, 72, 65],
        timeline: [
            { year: "2005", event: "去哪儿成立" },
            { year: "2015", event: "被携程并购" },
            { year: "2022", event: "与携程协同" }
        ],
        key_decisions: ["搜索与比价入口", "携程系供应链", "年轻与性价比"],
        user_metrics: {
            monthly_active_users: "数千万级（携程系披露）",
            daily_active_users: "数百万级",
            growth_rate: "与携程协同",
            retention_rate: "比价与复购",
            user_demographics: {
                age_range: "22–40 岁，年轻与价格敏感",
                gender_ratio: "均衡",
                region: "全国",
                income_level: "性价比与搜索比价"
            },
            usage_patterns: {
                avg_session_duration: "搜索与比价",
                sessions_per_day: "计划期多频",
                content_creation_rate: "攻略与点评",
                engagement_rate: "比价转化"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "佣金", percentage: 65, description: "酒店、机票" },
                { type: "广告", percentage: 35, description: "竞价与品牌" }
            ],
            monetization_strategy: "佣金+广告，携程供应链赋能",
            financial_metrics: {
                annual_revenue: "并入携程披露",
                revenue_growth: "与携程一致",
                profitability: "贡献携程系",
                valuation: "携程旗下"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "数千万级",
                engagement_rate: "搜索与预订转化",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                search_volume: "搜索与比价量",
                booking_count: "订单量",
                gmv_share: "携程系占比"
            },
            business_metrics: {
                take_rate: "佣金率",
                arpu: "单用户预订额",
                cac: "与携程协同获客"
            }
        }
    },
    fliggy: {
        title: "飞猪 (Fliggy)",
        subtitle: "阿里系在线旅游",
        dao: "旅行与生活方式。机票酒店度假、与阿里生态协同，年轻与出境；阿里财报本地生活与飞猪口径、MAU 数千万级。",
        gov: "平台规则与供应商，阿里账号与数据。",
        space: "搜索 + 推荐 + 预订 + 内容。",
        econ: "佣金、广告、会员；生态导流与数据赋能。",
        risk: "与携程、美团酒旅、抖音竞争。",
        atomic_unit: "产品/订单/内容",
        distribution: "推荐 45% + 搜索 40% + 内容 15%",
        death_risk: "份额与生态依赖",
        tags: ["#飞猪", "#旅游", "#阿里"],
        scores: [52, 55, 52, 72, 65],
        timeline: [
            { year: "2016", event: "飞猪品牌成立" },
            { year: "2018", event: "与阿里生态" },
            { year: "2022", event: "出境与内容" }
        ],
        key_decisions: ["阿里生态与数据", "年轻与出境定位", "内容与预订结合"],
        user_metrics: {
            monthly_active_users: "数千万级（阿里口径）",
            daily_active_users: "数百万级",
            growth_rate: "出境复苏与年轻用户",
            retention_rate: "会员与复购",
            user_demographics: {
                age_range: "22–40 岁，年轻与出境",
                gender_ratio: "均衡",
                region: "一二线、出境需求",
                income_level: "中高、出境与自由行"
            },
            usage_patterns: {
                avg_session_duration: "搜索与内容",
                sessions_per_day: "计划期多频",
                content_creation_rate: "攻略与分享",
                engagement_rate: "预订转化"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "佣金", percentage: 55, description: "酒店、机票、度假" },
                { type: "广告", percentage: 30, description: "品牌与竞价" },
                { type: "会员与其他", percentage: 15, description: "会员、交叉销售" }
            ],
            monetization_strategy: "佣金+广告，阿里生态获客与数据",
            financial_metrics: {
                annual_revenue: "并入阿里本地生活/飞猪披露",
                revenue_growth: "出境与国内复苏",
                profitability: "与阿里整体协同",
                valuation: "阿里旗下"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "数千万级",
                engagement_rate: "预订与复购",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                gmv: "交易额",
                booking_count: "间夜与票务",
                outbound_share: "出境占比"
            },
            business_metrics: {
                take_rate: "佣金率",
                arpu: "单用户预订额",
                ecosystem_traffic: "阿里导流占比"
            }
        }
    },
    liulishuo: {
        title: "流利说 (Liulishuo)",
        subtitle: "英语口语与 AI 学习",
        dao: "说好英语。AI 口语测评与跟读、课程与打卡，成人英语学习；曾披露累计用户超 2 亿、付费用户数百万，上市后增速放缓并退市。",
        gov: "课程与 AI 产品，学习路径。",
        space: "课程 + 打卡 + 测评 + 社区。",
        econ: "课程付费、会员、企业；订阅与完课率为关键。",
        risk: "与多邻国、开言、真人外教竞争。",
        atomic_unit: "课程/打卡/测评",
        distribution: "学习 60% + 推荐 25% + 社区 15%",
        death_risk: "付费与留存",
        tags: ["#流利说", "#英语", "#AI"],
        scores: [52, 60, 50, 65, 58],
        timeline: [
            { year: "2012", event: "流利说成立" },
            { year: "2018", event: "纽交所上市" },
            { year: "2022", event: "AI 与课程" }
        ],
        key_decisions: ["AI 口语测评", "成人英语刚需", "课程与订阅"],
        user_metrics: {
            monthly_active_users: "数百万级（曾超千万，退市后估算）",
            daily_active_users: "数十万级",
            growth_rate: "付费与留存承压",
            retention_rate: "完课与续费",
            user_demographics: {
                age_range: "22–40 岁，成人英语",
                gender_ratio: "略偏女性",
                region: "一二线为主",
                income_level: "职场与自我提升"
            },
            usage_patterns: {
                avg_session_duration: "学习 15–30 分钟/天",
                sessions_per_day: "打卡驱动",
                content_creation_rate: "跟读与测评",
                engagement_rate: "完课率、续费率"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "课程与订阅", percentage: 75, description: "系统课、会员" },
                { type: "企业服务", percentage: 20, description: "B 端定制" },
                { type: "其他", percentage: 5, description: "图书与周边" }
            ],
            monetization_strategy: "订阅为主、企业为辅，完课与 LTV 关键",
            financial_metrics: {
                annual_revenue: "数亿人民币（退市前披露）",
                revenue_growth: "曾高增后放缓",
                profitability: "曾亏损、降本后收窄",
                valuation: "曾纽交所上市，已退市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数十万级",
                mau: "数百万级",
                engagement_rate: "完课率与打卡",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                course_completion: "完课率",
                daily_minutes: "学习时长",
                paid_conversion: "付费转化"
            },
            business_metrics: {
                arpu: "单用户 LTV",
                cac: "获客成本",
                renewal_rate: "续费率"
            }
        }
    },
    baicizhan: {
        title: "百词斩 (Baicizhan)",
        subtitle: "图像化背单词",
        dao: "看图记词。图像与例句、斩词与复习，降低记忆负担；累计用户过亿、MAU 数千万级，学生与考研四六级主流。",
        gov: "词库与学习路径，打卡与小组。",
        space: "背词 + 复习 + 阅读 + 小组。",
        econ: "会员、课程、图书与周边；会员与课程为变现重点。",
        risk: "与扇贝、墨墨、多邻国竞争。",
        atomic_unit: "词/图片/打卡",
        distribution: "学习 70% + 小组 20% + 发现 10%",
        death_risk: "付费与竞品",
        tags: ["#百词斩", "#背单词", "#图像"],
        scores: [55, 58, 52, 62, 55],
        timeline: [
            { year: "2012", event: "百词斩上线" },
            { year: "2016", event: "阅读与听力" },
            { year: "2022", event: "会员与课程" }
        ],
        key_decisions: ["图像化降低记忆负担", "多产品线延伸", "会员与图书"],
        user_metrics: {
            monthly_active_users: "数千万级（行业估算）",
            daily_active_users: "数百万级",
            growth_rate: "稳健、考试季波峰",
            retention_rate: "打卡与小组粘性",
            user_demographics: {
                age_range: "16–28 岁为主，学生与考研",
                gender_ratio: "略偏女性",
                region: "全国、高校集中",
                income_level: "学生与职场入门"
            },
            usage_patterns: {
                avg_session_duration: "背词 10–20 分钟/天",
                sessions_per_day: "打卡驱动",
                content_creation_rate: "小组与打卡",
                engagement_rate: "斩词数、复习率"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "会员", percentage: 50, description: "解锁词书与功能" },
                { type: "课程", percentage: 30, description: "听力、阅读等" },
                { type: "图书与周边", percentage: 20, description: "实体书、周边" }
            ],
            monetization_strategy: "会员+课程+图书，考试刚需驱动",
            financial_metrics: {
                annual_revenue: "数亿人民币量级（估算）",
                revenue_growth: "稳健",
                profitability: "盈利或微利",
                valuation: "曾融资，未上市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "数千万级",
                engagement_rate: "打卡率与斩词数",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                words_learned: "人均斩词量",
                completion_rate: "词书完成率",
                group_active: "小组活跃"
            },
            business_metrics: {
                paid_ratio: "会员渗透",
                arpu: "会员与课程",
                exam_peak: "考试季占比"
            }
        }
    },
    momo: {
        title: "陌陌 (Momo)",
        subtitle: "陌生人社交与直播",
        dao: "发现附近的人：基于 LBS 的陌生人破冰（附近的人/点点），后全面转向直播与语音派对，打赏与公会成主变现；核心用户下沉市场与夜间娱乐，月活曾超 1 亿，现被短视频与 Soul 分流。",
        gov: "平台规则与反作弊（封号/限流）、公会等级与分成、直播与动态内容审核；主播与公会半自治，平台抽成约 30%。",
        space: "附近（LBS 列表） + 直播（推荐/关注/同城） + 动态 + 消息（匹配后私聊）。",
        econ: "虚拟礼物与打赏（主）、会员增值（隐身/已读/超赞）、直播抽成与广告；直播收入占比曾超 8 成。",
        risk: "探探并购后整合不及预期；Soul 抢 Z 世代、抖音抢时长；监管对陌生人社交与打赏趋严。",
        atomic_unit: "动态/直播/消息",
        distribution: "附近 40% + 直播 35% + 消息 25%",
        death_risk: "用户与时长被短视频分流",
        tags: ["#陌陌", "#陌生人社交", "#直播", "#LBS", "#公会"],
        scores: [55, 52, 52, 68, 58],
        timeline: [
            { year: "2011", event: "陌陌上线，LBS 陌生人社交" },
            { year: "2015", event: "直播上线，打赏与公会" },
            { year: "2018", event: "收购探探，双品牌" },
            { year: "2022", event: "派对与语音房，应对 Soul" }
        ],
        key_decisions: [
            "LBS 陌生人破冰奠定冷启动",
            "直播与公会替代广告成主变现",
            "收购探探补足左滑右滑场景",
            "派对/语音房应对 Z 世代与监管"
        ],
        user_metrics: {
            monthly_active_users: "约 1 亿（峰值，近年下滑）",
            daily_active_users: "约 3000 万量级",
            retention_rate: "直播与公会提升次日/7 日留存",
            user_demographics: "下沉与二三线、男性略多、18–35 岁为主"
        },
        business_model: {
            revenue_streams: [
                { type: "直播打赏与虚拟礼物", percentage: 70, description: "主播与公会分成，平台抽成约 30%" },
                { type: "会员与增值", percentage: 20, description: "隐身/已读/超赞等" },
                { type: "广告与其他", percentage: 10, description: "信息流与品牌" }
            ],
            monetization_strategy: "直播打赏为主、会员增值为辅，探探独立会员体系"
        },

        user_metrics: { monthly_active_users: "估算", user_demographics: { age_range: "多元", gender_ratio: "均衡", region: "全球", income_level: "多元" }, usage_patterns: { engagement_rate: "50%" } },
        business_model: { revenue_streams: [{ type: "主要", percentage: 80, description: "收入" }], monetization_strategy: "平台" },
        key_metrics: { core_metrics: { dau: "估算", mau: "估算", engagement_rate: "50%", retention_7d: "52%", retention_30d: "50%" } }


    },
    soul: {
        title: "Soul",
        subtitle: "灵魂社交与兴趣匹配",
        dao: "不看脸的交友：灵魂测试与 MBTI 式标签匹配、瞬间（图文/语音）与广场形成弱关系内容池，Z 世代情感倾诉与身份认同；匹配后私聊与语音派对，降低颜值压力、提高破冰率。",
        gov: "算法匹配（灵魂测试/兴趣标签）与推荐、广场与瞬间审核（反低俗/反诈骗）；无公会，平台直管主播与房间。",
        space: "瞬间（UGC 流） + 星球（匹配/测试） + 聊天 + 派对（语音房）。",
        econ: "会员（无限畅聊/灵魂匹配次数/隐身）为主、虚拟礼物与派对打赏、信息流广告；会员复购与 ARPU 为增长重点。",
        risk: "陌陌/探探抢存量、小红书抢种草与交友心智；未成年人与合规；商业化过重伤害氛围。",
        atomic_unit: "瞬间/灵魂/匹配",
        distribution: "推荐 50% + 星球 30% + 消息 20%",
        death_risk: "留存与商业化",
        tags: ["#Soul", "#灵魂社交", "#Z世代", "#不看脸", "#瞬间"],
        scores: [62, 55, 58, 62, 60],
        timeline: [
            { year: "2016", event: "Soul 上线，灵魂测试" },
            { year: "2020", event: "出圈与年轻用户暴涨" },
            { year: "2021", event: "纳斯达克上市" },
            { year: "2022", event: "会员与礼物变现强化" }
        ],
        key_decisions: [
            "不看脸与灵魂测试差异化破圈",
            "瞬间与广场构建内容与留存",
            "会员制优先于打赏平衡氛围",
            "Z 世代与情感诉求定位"
        ],
        user_metrics: { monthly_active_users: "数千万级（纳斯达克披露 MAU/DAU）", user_demographics: { age_range: "Z 世代为主、18–28 岁", region: "中国" }, usage_patterns: { content_creation_rate: "瞬间与派对、日均发布", engagement_rate: "匹配与聊天、派对时长与礼物" } },
        business_model: { revenue_streams: [{ type: "会员", description: "畅聊/匹配次数/隐身、月费与包月" }, { type: "虚拟礼物与打赏", description: "派对与社交、分成" }], monetization_strategy: "会员为主、礼物为辅", financial_metrics: { profitability: "上市后 ARPU、会员付费率与复购" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "瞬间与匹配", arpu: "会员与礼物 ARPU" } }
    },
    wuba: {
        title: "58 同城 (58.com)",
        subtitle: "本地生活与分类信息",
        dao: "找工作找房找服务：招聘（蓝领/基层）、房产（租/售）、二手、本地服务（家政/维修）等信息撮合；商户付费推广与会员，C 端免费浏览，依赖流量与信任。",
        gov: "平台规则与商户认证（营业执照/实地）、会员与刷新/置顶权限；反作弊（虚假信息/重复发布）；各垂类有独立运营与销售。",
        space: "首页（分类入口） + 分类（招聘/房产/二手/本地） + 信息流 + 我的。",
        econ: "会员与推广（置顶/刷新/刷新包）为主、招聘与房产佣金、部分广告；招聘与房产贡献大部分收入。",
        risk: "与赶集合并后垄断但垂直 App（BOSS/链家/闲鱼）分流；信息质量与信任问题；流量成本上升。",
        atomic_unit: "信息/商户/订单",
        distribution: "分类 50% + 推荐 30% + 搜索 20%",
        death_risk: "流量与信任",
        tags: ["#58同城", "#分类信息", "#招聘", "#房产", "#转转"],
        scores: [50, 55, 52, 72, 58],
        timeline: [
            { year: "2005", event: "58 同城成立" },
            { year: "2015", event: "与赶集合并，分类信息第一" },
            { year: "2017", event: "转转独立运营二手" },
            { year: "2022", event: "本地与招聘深耕" }
        ],
        key_decisions: [
            "分类信息聚合建立流量入口",
            "招聘与房产高客单变现",
            "转转分拆做二手与验机",
            "会员与推广为主商业模式"
        ],
        user_metrics: { monthly_active_users: "数亿级（58 同城披露 MAU/DAU）", user_demographics: { age_range: "求职与本地生活、蓝领与基层占比高", region: "中国" }, usage_patterns: { content_creation_rate: "商户发布与刷新", engagement_rate: "浏览、联系与留资转化" } },
        business_model: { revenue_streams: [{ type: "会员与推广", description: "置顶/刷新/刷新包、按条与套餐" }, { type: "招聘与房产佣金", description: "高客单、按效果" }], monetization_strategy: "会员与推广为主", financial_metrics: { profitability: "招聘与房产贡献主要收入、利润率与增速" } },
        key_metrics: { core_metrics: { mau: "数亿", engagement_rate: "分类与信息流、留资率", arpu: "商户 ARPU" } }
    },
    boss: {
        title: "BOSS 直聘 (Boss Zhipin)",
        subtitle: "直聊招聘",
        dao: "跟老板谈：求职者与用人方直聊（无需投递即沟通），牛人标签与算法推荐提升匹配效率；蓝领与白领双覆盖，企业端付费、C 端免费，打破传统简历海投模式。",
        gov: "企业认证与职位审核、反作弊（虚假职位/骚扰）；牛人行为与回复率影响推荐；平台规则对沟通频次与话术有约束。",
        space: "推荐（算法职位流） + 搜索（职位/公司） + 沟通（即时消息） + 职位详情。",
        econ: "企业会员（看牛人/发职位/沟通数）与增值（竞聘/刷新）、少量广告；按年费与套餐为主，大客户与 SMB 分层。",
        risk: "智联/前程无忧/猎聘在高端与品牌；宏观下行招聘需求收缩；直聊带来的骚扰与体验。",
        atomic_unit: "职位/沟通/简历",
        distribution: "推荐 50% + 搜索 35% + 消息 15%",
        death_risk: "宏观与招聘周期",
        tags: ["#BOSS直聘", "#招聘", "#直聊", "#牛人", "#企业会员"],
        scores: [55, 58, 52, 75, 68],
        timeline: [
            { year: "2014", event: "BOSS 直聘上线，直聊模式" },
            { year: "2018", event: "广告出圈「找工作和老板谈」" },
            { year: "2021", event: "纳斯达克上市" },
            { year: "2023", event: "蓝领与下沉拓展" }
        ],
        key_decisions: [
            "直聊替代投递降低双方门槛",
            "牛人标签与算法提升匹配",
            "企业会员与增值为主变现",
            "蓝领与白领双线覆盖"
        ],
        user_metrics: { monthly_active_users: "数千万级（上市披露 MAU/企业客户数）", user_demographics: { age_range: "求职者与企业、蓝领与白领双线", region: "中国" }, usage_patterns: { content_creation_rate: "简历与沟通、牛人回复率", engagement_rate: "直聊与匹配、企业端沟通数" } },
        business_model: { revenue_streams: [{ type: "企业会员", description: "看牛人/发职位/沟通数、年费与套餐" }, { type: "增值", description: "竞聘/刷新/曝光" }], monetization_strategy: "企业付费、C 端免费", financial_metrics: { profitability: "上市后收入与增速、企业 ARPU" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "直聊与回复率", enterprise_arpu: "企业付费与续费" } }
    },
    liepin: {
        title: "猎聘 (Liepin)",
        subtitle: "中高端人才招聘",
        dao: "猎头与高端岗位：企业发布中高端职位、猎头入驻寻才与推荐，人才被动与主动求职；猎头与平台分成，企业按结果或会员付费，主打 15 万以上年薪与经理级以上。",
        gov: "平台与猎头规则（准入/考核/分成）、企业认证与职位审核；猎头行为与成单率影响排名与权益；反挖角与合规。",
        space: "职位（推荐/搜索） + 猎头（列表/沟通） + 社区（资讯/话题） + 我的。",
        econ: "企业会员（看简历/联系猎头/职位数）与按结果付费、猎头成单分成、增值（竞聘/曝光）；高客单、长周期。",
        risk: "BOSS 直聘上攻中端；智联/前程无忧下沉；宏观下行中高端岗位收缩。",
        atomic_unit: "职位/猎头/简历",
        distribution: "推荐 45% + 搜索 40% + 猎头 15%",
        death_risk: "中高端与周期",
        tags: ["#猎聘", "#招聘", "#猎头", "#中高端", "#港股"],
        scores: [52, 55, 50, 72, 65],
        timeline: [
            { year: "2011", event: "猎聘成立，猎头平台" },
            { year: "2018", event: "港股上市" },
            { year: "2020", event: "科技与互联网占比提升" },
            { year: "2022", event: "高端与全球化" }
        ],
        key_decisions: [
            "猎头与平台结合差异化智联",
            "中高端定位避开 BOSS 主战场",
            "企业会员与结果付费双轨",
            "社区与品牌巩固高端心智"
        ],
        user_metrics: { monthly_active_users: "中高端人才与企业", user_demographics: { age_range: "经理级及以上", region: "中国" }, usage_patterns: { content_creation_rate: "简历与猎头沟通", engagement_rate: "成单与推荐" } },
        business_model: { revenue_streams: [{ type: "企业会员与结果付费", description: "高客单" }, { type: "猎头成单分成", description: "平台抽成" }], monetization_strategy: "会员 + 结果付费", financial_metrics: { profitability: "港股上市，高客单长周期" } },
        key_metrics: { core_metrics: { engagement_rate: "猎头与成单", arpu: "高客单" } }
    },
    maoyan: {
        title: "猫眼 (Maoyan)",
        subtitle: "电影票务与娱乐",
        dao: "买票选座看评分。电影票、演出与评分，娱乐消费决策；与影院/片方深度合作，宣发与票务一体。",
        gov: "平台与影院、片方合作，评分与内容；腾讯系流量与数据。",
        space: "电影 + 演出 + 榜单 + 社区。",
        econ: "票务抽佣、广告、宣发。",
        risk: "与淘票票、大麦、抖音竞争。",
        atomic_unit: "电影/场次/订单",
        distribution: "推荐 50% + 搜索 35% + 我的 15%",
        death_risk: "票房与竞争",
        tags: ["#猫眼", "#电影票", "#娱乐", "#宣发", "#腾讯"],
        scores: [52, 55, 50, 72, 62],
        timeline: [
            { year: "2012", event: "猫眼从美团分拆" },
            { year: "2016", event: "独立与票务第一" },
            { year: "2019", event: "港股上市" },
            { year: "2022", event: "演出与宣发" }
        ],
        key_decisions: [
            "票务与选座刚需，占领决策入口",
            "评分与决策，与片方宣发协同",
            "腾讯系与宣发，流量与数据",
            "演出拓展第二曲线"
        ],
        user_metrics: { monthly_active_users: "数千万级（猫眼披露 MAU/出票量）", user_demographics: { age_range: "观影与演出人群、18–35 岁为主", region: "中国" }, usage_patterns: { content_creation_rate: "评分与评论、想看", engagement_rate: "购票与决策、复购" } },
        business_model: { revenue_streams: [{ type: "票务抽佣", description: "电影与演出、按张/按场" }, { type: "广告与宣发", description: "片方与品牌、整合营销" }], monetization_strategy: "票务 + 宣发", financial_metrics: { profitability: "港股上市、盈利与票房周期相关" } },
        key_metrics: { core_metrics: { mau: "数千万", gmv: "票务 GMV、市占", ticket_volume: "出票量" } }
    },
    damai: {
        title: "大麦 (Damai)",
        subtitle: "演出票务与现场娱乐",
        dao: "演唱会话剧体育票。票务与选座、演出信息，现场娱乐入口；阿里生态导流与支付。",
        gov: "平台与主办、场馆合作；反黄牛与实名。",
        space: "演出 + 票务 + 订单 + 发现。",
        econ: "票务抽佣、广告、会员。",
        risk: "与猫眼、摩天轮、抖音竞争。",
        atomic_unit: "演出/场次/订单",
        distribution: "推荐 45% + 分类 40% + 搜索 15%",
        death_risk: "演出市场与黄牛",
        tags: ["#大麦", "#演出", "#阿里", "#现场", "#票务"],
        scores: [50, 58, 48, 75, 65],
        timeline: [
            { year: "2004", event: "大麦成立" },
            { year: "2017", event: "被阿里收购" },
            { year: "2020", event: "疫情停摆" },
            { year: "2022", event: "现场复苏" }
        ],
        key_decisions: [
            "演出票务刚需，演唱会/话剧/体育",
            "阿里生态，淘系与支付导流",
            "现场与内容，宣发与复购",
            "反黄牛与体验，实名与风控"
        ],
        user_metrics: { monthly_active_users: "演出与现场娱乐用户（演唱会/话剧/体育等）", user_demographics: { age_range: "现场娱乐人群、年轻与粉丝向", region: "中国" }, usage_patterns: { content_creation_rate: "评论与晒票、抢票行为", engagement_rate: "购票与复购、热门场次秒光" } },
        business_model: { revenue_streams: [{ type: "票务抽佣", description: "演出与体育、按张/服务费" }, { type: "广告与会员", description: "品牌与增值" }], monetization_strategy: "票务 + 会员", financial_metrics: { profitability: "与阿里大文娱协同、演出市场周期" } },
        key_metrics: { core_metrics: { gmv: "票务 GMV", engagement_rate: "购票与复购", hot_event_penetration: "热门场次渗透" } }
    },
    suning: {
        title: "苏宁易购 (Suning)",
        subtitle: "全渠道零售",
        dao: "线上线下融合。家电与 3C、超市与门店，零售与履约；双线同价与门店数字化，曾为家电零售龙头，后债务与重组。",
        gov: "自营与开放平台，门店与供应链；总部与区域、品类与物流协同。",
        space: "首页 + 品类 + 门店 + 订单。",
        econ: "自营毛利、平台佣金、金融（苏宁金融/支付）。",
        risk: "与京东、天猫、拼多多竞争；债务与流动性；线下成本与线上获客。",
        atomic_unit: "商品/订单/门店",
        distribution: "推荐 45% + 搜索 35% + 门店 20%",
        death_risk: "亏损与转型",
        tags: ["#苏宁", "#零售", "#家电"],
        scores: [48, 52, 50, 68, 55],
        timeline: [
            { year: "1990", event: "苏宁成立，家电连锁" },
            { year: "2009", event: "线上苏宁易购上线" },
            { year: "2013", event: "苏宁云商，双线融合" },
            { year: "2017", event: "零售云与开放平台" },
            { year: "2022", event: "债务与重组、国资入股" }
        ],
        key_decisions: [
            "线下与线上融合，双线同价",
            "家电与 3C 优势，供应链与门店",
            "金融与体育（国米等）生态扩张",
            "零售云下沉与开放"
        ],
        user_metrics: {
            monthly_active_users: "财报披露（近年下滑）",
            user_demographics: { age_range: "家电与 3C 购买人群、家庭决策", region: "全国、线下门店覆盖" },
            usage_patterns: { content_creation_rate: "评价与晒单", engagement_rate: "复购与会员、到店自提" }
        },
        business_model: {
            revenue_streams: [
                { type: "自营商品", percentage: 60, description: "家电 3C 与超市毛利" },
                { type: "开放平台佣金", percentage: 20, description: "第三方商家" },
                { type: "金融与其他", percentage: 20, description: "支付、理财、体育" }
            ],
            monetization_strategy: "自营 + 开放 + 金融，门店与线上协同",
            financial_metrics: { annual_revenue: "曾数百亿级", revenue_growth: "近年下滑与亏损", profitability: "债务重组中" }
        },
        key_metrics: { core_metrics: { mau: "财报", gmv: "线上+线下", store_count: "门店数" }, business_metrics: { gross_margin: "毛利率", debt: "债务与流动性" } }
    },
    vip: {
        title: "唯品会 (Vip.com)",
        subtitle: "特卖与品牌折扣",
        dao: "品牌特卖。尾货与折扣、限时抢购，女性与性价比；财报披露年度活跃用户数千万、GMV 与复购率关键。",
        gov: "平台与品牌合作，供应链。",
        space: "特卖 + 分类 + 品牌 + 订单。",
        econ: "自营差价、广告；毛利率与复购率为核心指标。",
        risk: "与淘宝特价、拼多多、抖音竞争。",
        atomic_unit: "商品/品牌/订单",
        distribution: "推荐 55% + 分类 30% + 搜索 15%",
        death_risk: "用户与增速",
        tags: ["#唯品会", "#特卖", "#品牌"],
        scores: [50, 52, 50, 72, 62],
        timeline: [
            { year: "2008", event: "唯品会成立" },
            { year: "2012", event: "纳斯达克上市" },
            { year: "2022", event: "京东腾讯入股" }
        ],
        key_decisions: ["特卖与尾货", "女性与复购", "供应链与品牌"],
        user_metrics: {
            monthly_active_users: "数千万级（财报披露）",
            daily_active_users: "数百万级",
            growth_rate: "用户与 GMV 增速承压",
            retention_rate: "复购率与 SVIP 占比",
            user_demographics: {
                age_range: "25–45 岁，女性为主",
                gender_ratio: "女性占比高",
                region: "全国、下沉与一二线",
                income_level: "性价比与品牌折扣敏感"
            },
            usage_patterns: {
                avg_session_duration: "浏览与抢购",
                sessions_per_day: "大促与复购",
                content_creation_rate: "评价与晒单",
                engagement_rate: "复购率、客单价"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "自营商品销售", percentage: 90, description: "尾货与品牌差价" },
                { type: "广告与其他", percentage: 10, description: "品牌营销" }
            ],
            monetization_strategy: "自营特卖为主，毛利率与周转关键",
            financial_metrics: {
                annual_revenue: "数百亿人民币（财报）",
                revenue_growth: "低个位数或下滑",
                profitability: "盈利",
                valuation: "纳斯达克/港交所"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "数千万级",
                engagement_rate: "复购与 SVIP",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                gmv: "年 GMV",
                order_count: "订单量与频次",
                repeat_rate: "复购率"
            },
            business_metrics: {
                gross_margin: "毛利率",
                arpu: "单用户年消费",
                svip_share: "SVIP 占比"
            }
        }
    },
    hellobike: {
        title: "哈啰 (Hello)",
        subtitle: "两轮出行与本地生活",
        dao: "骑车打车顺风车。共享单车、电单车、顺风车与打车，出行与生活；披露年度交易次数数十亿、MAU 数千万，蚂蚁生态与下沉为主。",
        gov: "平台规则与车辆、司机管理。",
        space: "骑行 + 打车 + 顺风车 + 生活。",
        econ: "骑行费、抽佣、广告与本地；两轮盈利与四轮扩展平衡。",
        risk: "与青桔、美团单车、滴滴竞争。",
        atomic_unit: "订单/车辆/行程",
        distribution: "骑行 50% + 打车 30% + 其他 20%",
        death_risk: "补贴与盈利",
        tags: ["#哈啰", "#共享单车", "#出行"],
        scores: [52, 55, 52, 65, 58],
        timeline: [
            { year: "2016", event: "哈啰单车成立" },
            { year: "2019", event: "顺风车与电单车" },
            { year: "2022", event: "本地生活" }
        ],
        key_decisions: ["两轮与四轮结合", "下沉与成本", "蚂蚁生态"],
        user_metrics: {
            monthly_active_users: "数千万级（披露）",
            daily_active_users: "数百万级",
            growth_rate: "两轮稳健、四轮与生活扩展",
            retention_rate: "骑行与顺风车复购",
            user_demographics: {
                age_range: "18–45 岁，通勤与短途",
                gender_ratio: "均衡",
                region: "下沉与三四线占比高",
                income_level: "性价比与刚需"
            },
            usage_patterns: {
                avg_session_duration: "单次骑行 10–20 分钟",
                sessions_per_day: "1–2 次骑行或打车",
                content_creation_rate: "订单与评价",
                engagement_rate: "完单与复购"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "两轮骑行", percentage: 55, description: "单车与电单车骑行费" },
                { type: "顺风车与打车", percentage: 35, description: "抽佣" },
                { type: "广告与本地生活", percentage: 10, description: "引流与变现" }
            ],
            monetization_strategy: "两轮为主、四轮与生活延伸，蚂蚁导流",
            financial_metrics: {
                annual_revenue: "数十亿人民币量级（估算）",
                revenue_growth: "稳健",
                profitability: "两轮曾宣称盈利",
                valuation: "曾融资、拟上市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数百万级",
                mau: "数千万级",
                engagement_rate: "骑行与完单",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                ride_count: "年度骑行次数数十亿",
                order_count: "顺风车与打车单量",
                vehicle_count: "投放车辆数"
            },
            business_metrics: {
                arpu: "单用户年贡献",
                take_rate: "四轮抽成",
                unit_economics: "两轮单均成本与收入"
            }
        }
    },
    tujia: {
        title: "途家 (Tujia)",
        subtitle: "民宿与短租",
        dao: "住民宿。民宿与公寓、房东与房客，非标住宿与体验；携程系流量与供应链，国内民宿龙头。",
        gov: "平台规则与房东认证、房源审核与保洁标准；与携程/去哪儿协同品控。",
        space: "搜索 + 房源 + 订单 + 发现。",
        econ: "抽佣、清洁费分成、广告与会员；与携程交叉销售。",
        risk: "与 Airbnb、小猪、美团竞争；疫情后复苏与供给质量。",
        atomic_unit: "房源/订单/房东",
        distribution: "推荐 50% + 搜索 40% + 复购 10%",
        death_risk: "疫情与竞争",
        tags: ["#途家", "#民宿", "#短租"],
        scores: [55, 52, 55, 65, 58],
        timeline: [
            { year: "2011", event: "途家成立" },
            { year: "2016", event: "并购携程去哪儿民宿，整合供给" },
            { year: "2019", event: "与斯维登等品牌" },
            { year: "2022", event: "复苏与品质、合规" }
        ],
        key_decisions: [
            "民宿与公寓，非标与体验差异化酒店",
            "携程系流量与订单协同",
            "品质与信任，保洁与审核标准"
        ],
        user_metrics: {
            monthly_active_users: "民宿与短途游用户（行业估算）",
            user_demographics: { age_range: "家庭与自由行、度假与周末", region: "国内为主、热门目的地" },
            usage_patterns: { content_creation_rate: "点评与晒图", engagement_rate: "预订与复购、多晚订单" }
        },
        business_model: {
            revenue_streams: [
                { type: "佣金", percentage: 70, description: "房东侧抽佣与清洁费分成" },
                { type: "广告与会员", percentage: 30, description: "排名与携程会员导流" }
            ],
            monetization_strategy: "佣金为主、与携程交叉销售",
            financial_metrics: { profitability: "与携程生态协同、疫情后复苏" }
        },
        key_metrics: { core_metrics: { gmv: "间夜与交易额", supply: "房源数" }, business_metrics: { take_rate: "佣金率", repeat_rate: "复购" } }
    },
    tuniu: {
        title: "途牛 (Tuniu)",
        subtitle: "休闲旅游与跟团",
        dao: "跟团游与自由行。跟团、出境、国内游，打包产品与客服；纳斯达克上市后份额被携程/同程挤压，复苏期聚焦核心品类。",
        gov: "平台与供应商合作、自营产品与品控；客服与售后为重。",
        space: "目的地 + 产品 + 订单 + 社区。",
        econ: "产品差价、佣金、会员与增值；客单价与复购关键。",
        risk: "与携程、同程、马蜂窝竞争；出境恢复节奏与亏损压力。",
        atomic_unit: "产品/订单/目的地",
        distribution: "推荐 45% + 搜索 40% + 客服 15%",
        death_risk: "亏损与份额",
        tags: ["#途牛", "#跟团游", "#旅游"],
        scores: [50, 52, 50, 62, 55],
        timeline: [
            { year: "2006", event: "途牛成立" },
            { year: "2014", event: "纳斯达克上市" },
            { year: "2018", event: "亏损与战略收缩" },
            { year: "2022", event: "复苏与聚焦跟团与出境" }
        ],
        key_decisions: [
            "跟团与休闲，打包产品与客服体验",
            "出境与国内双线，复苏看出境",
            "客服与复购，老客与会员运营"
        ],
        user_metrics: {
            monthly_active_users: "休闲游与跟团用户（财报披露）",
            user_demographics: { age_range: "家庭与中老年、跟团偏好", region: "一二线与下沉" },
            usage_patterns: { content_creation_rate: "点评与游记", engagement_rate: "咨询与成单、复购" }
        },
        business_model: {
            revenue_streams: [
                { type: "跟团与打包", percentage: 65, description: "产品差价与佣金" },
                { type: "机票酒店与自由行", percentage: 25, description: "佣金" },
                { type: "会员与增值", percentage: 10, description: "会员与保险等" }
            ],
            monetization_strategy: "跟团毛利为主、复苏看出境恢复",
            financial_metrics: { annual_revenue: "纳斯达克披露", profitability: "长期亏损、复苏期减亏" }
        },
        key_metrics: { core_metrics: { gmv: "交易额", order_count: "订单量" }, business_metrics: { take_rate: "佣金率", repeat_rate: "复购" } }
    },
    tongcheng: {
        title: "同程旅行 (Tongcheng)",
        subtitle: "OTA 与出行",
        dao: "订票订房订酒店。机票火车票酒店、景点与度假，与微信协同；港股披露 MAU 超 2 亿、年付费用户数千万，下沉与小程序占比高。",
        gov: "平台规则与供应商。",
        space: "首页 + 机票酒店 + 订单。",
        econ: "佣金、广告、会员；微信流量与转化率为关键。",
        risk: "与携程、美团、飞猪竞争。",
        atomic_unit: "订单/产品/搜索",
        distribution: "推荐 50% + 搜索 40% + 复购 10%",
        death_risk: "份额与竞争",
        tags: ["#同程", "#OTA", "#微信"],
        scores: [52, 55, 50, 72, 65],
        timeline: [
            { year: "2004", event: "同程成立" },
            { year: "2018", event: "与艺龙合并" },
            { year: "2022", event: "港股与下沉" }
        ],
        key_decisions: ["微信入口与流量", "机票酒店刚需", "下沉与小程序"],
        user_metrics: {
            monthly_active_users: "超 2 亿（财报披露）",
            daily_active_users: "数千万级",
            growth_rate: "复苏与下沉增长",
            retention_rate: "复购与微信触达",
            user_demographics: {
                age_range: "22–45 岁，出行刚需",
                gender_ratio: "均衡",
                region: "下沉与一二线，微信生态",
                income_level: "性价比与火车票刚需"
            },
            usage_patterns: {
                avg_session_duration: "搜索与预订",
                sessions_per_day: "计划期多频",
                content_creation_rate: "点评与分享",
                engagement_rate: "预订转化、复购"
            }
        },
        business_model: {
            revenue_streams: [
                { type: "住宿", percentage: 45, description: "酒店与民宿佣金" },
                { type: "交通", percentage: 40, description: "机票火车票" },
                { type: "广告与会员", percentage: 15, description: "品牌与增值" }
            ],
            monetization_strategy: "佣金为主、微信入口低成本获客",
            financial_metrics: {
                annual_revenue: "数十亿人民币（港股披露）",
                revenue_growth: "复苏后增长",
                profitability: "盈利",
                valuation: "港股上市"
            }
        },
        key_metrics: {
            core_metrics: {
                dau: "数千万级",
                mau: "超 2 亿",
                engagement_rate: "预订转化",
                retention_7d: "周活",
                retention_30d: "月活"
            },
            content_metrics: {
                paid_users: "年付费用户数千万",
                gmv: "交易额",
                wechat_share: "微信端占比"
            },
            business_metrics: {
                take_rate: "佣金率",
                arpu: "单用户年预订额",
                cac: "微信获客成本低"
            }
        }
    },
    yanxuan: {
        title: "网易严选 (Yanxuan)",
        subtitle: "ODM 精选电商",
        dao: "好的生活没那么贵。ODM 与严选、品质与性价比，自营生活品类；网易流量与品牌背书，与小米有品、淘宝心选差异化在选品与调性。",
        gov: "自营选品与供应链；品控与 SKU 精简。",
        space: "首页 + 分类 + 商品 + 订单。",
        econ: "自营毛利、会员；与网易游戏/邮箱等导流。",
        risk: "与小米有品、淘宝心选、拼多多竞争；规模与利润平衡。",
        atomic_unit: "商品/品类/订单",
        distribution: "推荐 50% + 分类 35% + 搜索 15%",
        death_risk: "规模与利润",
        tags: ["#网易严选", "#ODM", "#品质"],
        scores: [52, 55, 50, 65, 58],
        timeline: [
            { year: "2016", event: "网易严选上线，ODM 模式" },
            { year: "2018", event: "线下与会员、生活品类扩展" },
            { year: "2020", event: "与网易生态协同" },
            { year: "2022", event: "与网易生态、规模与利润" }
        ],
        key_decisions: [
            "ODM 与品质，去品牌溢价",
            "网易流量与品牌背书",
            "生活品类与 SKU 精选"
        ],
        user_metrics: {
            monthly_active_users: "品质与性价比用户（网易生态）",
            user_demographics: { age_range: "25–45 岁、一二线、品质敏感", region: "中国" },
            usage_patterns: { content_creation_rate: "评价与晒单", engagement_rate: "复购与会员、客单价" }
        },
        business_model: {
            revenue_streams: [
                { type: "自营商品", percentage: 88, description: "ODM 毛利" },
                { type: "会员", percentage: 12, description: "会员费与权益" }
            ],
            monetization_strategy: "自营毛利为主、会员与复购提升 LTV",
            financial_metrics: { profitability: "与网易整体协同、规模与利润平衡" }
        },
        key_metrics: { core_metrics: { gmv: "严选 GMV", aov: "客单价" }, business_metrics: { gross_margin: "毛利率", repeat_rate: "复购率" } }
    },
    huya: {
        title: "虎牙 (Huya)",
        subtitle: "游戏直播",
        dao: "看游戏直播。电竞赛事、主播与弹幕，游戏与娱乐；腾讯系流量与版权，游戏直播双雄之一，与斗鱼合并曾计划后终止。",
        gov: "平台与公会、版权与规则；腾讯主导，与斗鱼协同未果。",
        space: "直播 + 分类 + 赛事 + 社区。",
        econ: "打赏、广告、会员；公会分成与赛事版权投入。",
        risk: "与斗鱼合并后与 B 站、快手竞争；监管与版权成本。",
        atomic_unit: "直播/主播/礼物",
        distribution: "推荐 50% + 游戏 35% + 赛事 15%",
        death_risk: "合并与监管",
        tags: ["#虎牙", "#游戏直播", "#腾讯"],
        scores: [55, 52, 55, 72, 65],
        timeline: [
            { year: "2014", event: "虎牙从 YY 分拆" },
            { year: "2018", event: "纽交所上市" },
            { year: "2020", event: "腾讯增持、与斗鱼合并计划" },
            { year: "2022", event: "与斗鱼合并终止" }
        ],
        key_decisions: [
            "游戏直播垂直，电竞赛事与版权",
            "腾讯系与版权，流量与游戏协同",
            "公会与打赏，主播生态"
        ],
        user_metrics: {
            monthly_active_users: "游戏与电竞观众（财报披露 MAU）",
            user_demographics: { age_range: "18–35 岁、男性为主", region: "中国" },
            usage_patterns: { content_creation_rate: "弹幕与互动", engagement_rate: "观看时长、打赏与订阅" }
        },
        business_model: {
            revenue_streams: [
                { type: "打赏与虚拟礼物", percentage: 70, description: "主播与公会分成" },
                { type: "广告与会员", percentage: 30, description: "品牌与订阅" }
            ],
            monetization_strategy: "打赏为主、广告与会员为辅",
            financial_metrics: { profitability: "曾盈利、合并终止后独立运营" }
        },
        key_metrics: { core_metrics: { mau: "财报", watch_time: "观看时长" }, business_metrics: { arpu: "单用户打赏", pay_ratio: "付费率" } }
    },
    douyu: {
        title: "斗鱼 (Douyu)",
        subtitle: "游戏直播",
        dao: "看游戏与娱乐直播。电竞、主机与秀场，弹幕与社区；鱼吧强化社区，与虎牙曾计划合并后终止，纳斯达克上市。",
        gov: "平台与公会、内容审核；分区与鱼吧运营。",
        space: "直播 + 分区 + 赛事 + 鱼吧。",
        econ: "打赏、广告、会员；公会与主播分成。",
        risk: "与虎牙、B 站、快手竞争；监管与内容成本。",
        atomic_unit: "直播/主播/鱼吧",
        distribution: "推荐 50% + 分区 35% + 鱼吧 15%",
        death_risk: "份额与监管",
        tags: ["#斗鱼", "#游戏直播", "#弹幕"],
        scores: [55, 52, 55, 68, 62],
        timeline: [
            { year: "2014", event: "斗鱼成立" },
            { year: "2019", event: "纳斯达克上市" },
            { year: "2020", event: "与虎牙合并计划" },
            { year: "2022", event: "与虎牙合并终止" }
        ],
        key_decisions: [
            "游戏与娱乐双轮，电竞与秀场",
            "鱼吧社区，增强留存与互动",
            "公会与打赏，主播生态"
        ],
        user_metrics: {
            monthly_active_users: "游戏与娱乐观众（财报披露）",
            user_demographics: { age_range: "18–35 岁、男性为主", region: "中国" },
            usage_patterns: { content_creation_rate: "弹幕与鱼吧", engagement_rate: "观看时长、打赏" }
        },
        business_model: {
            revenue_streams: [
                { type: "打赏与虚拟礼物", percentage: 72, description: "主播与公会分成" },
                { type: "广告与会员", percentage: 28, description: "品牌与订阅" }
            ],
            monetization_strategy: "打赏为主、广告与会员为辅",
            financial_metrics: { profitability: "曾盈利、合并终止后独立" }
        },
        key_metrics: { core_metrics: { mau: "财报", watch_time: "观看时长" }, business_metrics: { arpu: "单用户打赏", pay_ratio: "付费率" } }
    },
    migu: {
        title: "咪咕音乐 (Migu)",
        subtitle: "运营商音乐与视频",
        dao: "听歌看视频。版权与曲库、视频与阅读，中国移动咪咕生态；冬奥与赛事直播、多形态内容，与 TME/网易云差异化在运营商流量与政企场景。",
        gov: "中国移动运营，版权与内容采购；与移动套餐与 5G 协同。",
        space: "音乐 + 视频 + 阅读 + 会员。",
        econ: "会员、流量包、版权分发；与移动 ARPU 捆绑。",
        risk: "与 TME、网易云、抖音竞争；独立付费心智弱、依赖运营商导流。",
        atomic_unit: "歌/视频/专辑",
        distribution: "推荐 50% + 分类 30% + 搜索 20%",
        death_risk: "用户与付费",
        tags: ["#咪咕", "#音乐", "#移动"],
        scores: [48, 55, 48, 62, 55],
        timeline: [
            { year: "2006", event: "咪咕文化成立" },
            { year: "2015", event: "咪咕音乐与视频整合" },
            { year: "2018", event: "世界杯与赛事" },
            { year: "2022", event: "冬奥与版权、多形态" }
        ],
        key_decisions: [
            "运营商与流量，套餐与 5G 导流",
            "版权与赛事，冬奥等差异化内容",
            "多形态内容，音乐+视频+阅读"
        ],
        user_metrics: {
            monthly_active_users: "移动用户与咪咕触达（运营商披露）",
            user_demographics: { age_range: "全年龄段、与移动用户重叠", region: "中国" },
            usage_patterns: { content_creation_rate: "歌单与评论", engagement_rate: "听歌与看赛事、流量包转化" }
        },
        business_model: {
            revenue_streams: [
                { type: "会员与流量包", percentage: 60, description: "与移动套餐协同" },
                { type: "版权分发与广告", percentage: 40, description: "B 端与品牌" }
            ],
            monetization_strategy: "运营商 ARPU 为主、版权与赛事为辅",
            financial_metrics: { profitability: "与移动生态协同、独立盈利压力" }
        },
        key_metrics: { core_metrics: { mau: "咪咕系触达", engagement_rate: "听歌与赛事" }, business_metrics: { arpu: "与移动捆绑", content_volume: "曲库与版权" } }
    },
    xiaomi_community: { title: "小米社区 (MIUI)", subtitle: "米粉与产品反馈", dao: "玩机与反馈。ROM、内测与建议，米粉与产品共创。", gov: "官方运营与版主，内测与规则。", space: "论坛 + 内测 + 圈子 + 动态。", econ: "为小米产品与品牌服务。", risk: "与华为、OPPO 社区竞争。", atomic_unit: "帖子/内测/圈子", distribution: "推荐 40% + 圈子 35% + 内测 25%", death_risk: "用户与商业化", tags: ["#小米社区", "#米粉", "#MIUI"], scores: [62, 50, 58, 52, 55], timeline: [{ year: "2010", event: "小米论坛" }, { year: "2018", event: "小米社区 App" }, { year: "2022", event: "与汽车" }], key_decisions: ["米粉与共创", "内测与反馈", "品牌忠诚"] },
    huawei_fans: { title: "华为花粉俱乐部 (Huawei)", subtitle: "华为用户社区", dao: "交流与反馈。产品讨论、EMUI 与鸿蒙，花粉与品牌。", gov: "官方与版主，内测与规则。", space: "论坛 + 圈子 + 内测 + 活动。", econ: "为华为品牌与产品服务。", risk: "与小米、OPPO 社区竞争。", atomic_unit: "帖子/圈子/内测", distribution: "推荐 45% + 圈子 35% + 活动 20%", death_risk: "制裁与增长", tags: ["#花粉", "#华为", "#鸿蒙"], scores: [58, 52, 55, 55, 55], timeline: [{ year: "2011", event: "花粉俱乐部" }, { year: "2019", event: "鸿蒙与 HMS" }, { year: "2022", event: "终端与车" }], key_decisions: ["花粉与忠诚", "内测与体验", "品牌社区"] },
    kaola: {
        title: "考拉海购 (Kaola)",
        subtitle: "跨境电商",
        dao: "买全球。自营跨境、保税与直邮，母婴与美妆；网易孵化、2019 年被阿里收购后与天猫国际整合，自营供应链与品控为卖点。",
        gov: "自营供应链与品控；收购后阿里规则与天猫国际协同。",
        space: "首页 + 分类 + 商品 + 订单。",
        econ: "自营毛利、会员；与天猫国际共享流量与供应链。",
        risk: "与天猫国际、京东国际、抖音跨境竞争；整合后品牌独立性与定位。",
        atomic_unit: "商品/品类/订单",
        distribution: "推荐 50% + 分类 40% + 搜索 10%",
        death_risk: "被阿里收购与整合",
        tags: ["#考拉", "#海购", "#网易"],
        scores: [50, 52, 50, 65, 58],
        timeline: [
            { year: "2015", event: "考拉上线，网易孵化" },
            { year: "2017", event: "母婴与美妆自营" },
            { year: "2019", event: "被阿里收购" },
            { year: "2022", event: "与天猫国际整合" }
        ],
        key_decisions: [
            "自营跨境，供应链与品控",
            "母婴与美妆核心品类",
            "网易到阿里，整合与协同"
        ],
        user_metrics: {
            monthly_active_users: "海淘与母婴美妆用户（收购前网易披露）",
            user_demographics: { age_range: "25–40 岁、女性为主", region: "一二线" },
            usage_patterns: { content_creation_rate: "评价与晒单", engagement_rate: "复购与会员、跨境心智" }
        },
        business_model: {
            revenue_streams: [
                { type: "自营商品", percentage: 85, description: "保税与直邮毛利" },
                { type: "会员", percentage: 15, description: "会员费与权益" }
            ],
            monetization_strategy: "自营为主、与天猫国际协同供应链",
            financial_metrics: { profitability: "收购后并入阿里、独立财报不再披露" }
        },
        key_metrics: { core_metrics: { gmv: "跨境 GMV", category_share: "母婴美妆占比" }, business_metrics: { gross_margin: "自营毛利", repeat_rate: "复购" } }
    },
    ymatou: { title: "洋码头 (Ymatou)", subtitle: "C2C 跨境电商", dao: "买手与海外直邮。买手入驻、直播与扫货，非标与长尾。", gov: "平台规则与买手认证。", space: "直播 + 买手 + 商品 + 订单。", econ: "抽佣、服务费、广告。", risk: "与考拉、天猫国际、抖音竞争。", atomic_unit: "买手/商品/订单", distribution: "直播 45% + 买手 35% + 搜索 20%", death_risk: "供应链与信任", tags: ["#洋码头", "#海淘", "#买手"], scores: [52, 50, 52, 58, 52], timeline: [{ year: "2009", event: "洋码头成立" }, { year: "2017", event: "直播与买手" }, { year: "2022", event: "合规与收缩" }], key_decisions: ["买手与 C2C", "直播扫货", "合规与供应链"] },
    inke: {
        title: "映客 (Inke)",
        subtitle: "秀场直播",
        dao: "看直播与打赏。秀场、才艺与社交，主播与公会；移动直播早期玩家、港股上市，后份额被抖音快手挤压、探索社交与多元场景。",
        gov: "平台与公会、内容审核；反作弊与合规。",
        space: "直播 + 关注 + 发现 + 我的。",
        econ: "打赏、广告、会员；公会分成与平台抽成。",
        risk: "与抖音、快手、陌陌竞争；秀场大盘被短视频分流。",
        atomic_unit: "直播/主播/礼物",
        distribution: "推荐 55% + 关注 30% + 发现 15%",
        death_risk: "份额与转型",
        tags: ["#映客", "#秀场", "#直播"],
        scores: [50, 52, 50, 62, 55],
        timeline: [
            { year: "2015", event: "映客上线，移动秀场" },
            { year: "2018", event: "港股上市" },
            { year: "2020", event: "社交与语音房探索" },
            { year: "2022", event: "社交与多元、份额承压" }
        ],
        key_decisions: [
            "秀场与打赏，移动直播早期",
            "公会与运营，主播生态",
            "社交与多元转型应对分流"
        ],
        user_metrics: {
            monthly_active_users: "秀场与娱乐用户（港股披露、近年下滑）",
            user_demographics: { age_range: "18–35 岁、下沉与二三线", region: "中国" },
            usage_patterns: { content_creation_rate: "开播与互动", engagement_rate: "观看时长、打赏与订阅" }
        },
        business_model: {
            revenue_streams: [
                { type: "打赏与虚拟礼物", percentage: 75, description: "主播与公会分成" },
                { type: "广告与会员", percentage: 25, description: "品牌与增值" }
            ],
            monetization_strategy: "打赏为主、广告与会员为辅",
            financial_metrics: { profitability: "曾盈利、近年承压与转型" }
        },
        key_metrics: { core_metrics: { mau: "财报", watch_time: "观看时长" }, business_metrics: { arpu: "单用户打赏", pay_ratio: "付费率" } }
    },
    koubei: {
        title: "口碑 (Koubei)",
        subtitle: "阿里本地生活",
        dao: "到店消费与优惠。团购、点餐与支付，与支付宝协同；阿里本地生活到店侧，与饿了么合并后高德与本地整合，到店心智与美团竞争。",
        gov: "平台规则与商户认证；与饿了么、高德数据与流量协同。",
        space: "首页 + 商家 + 订单 + 我的。",
        econ: "抽佣、广告、会员；到店与点餐交易额抽成。",
        risk: "与美团、抖音本地竞争；到店被美团压制、高德整合后定位。",
        atomic_unit: "商户/订单/优惠",
        distribution: "推荐 50% + 搜索 40% + 复购 10%",
        death_risk: "与饿了么整合",
        tags: ["#口碑", "#本地生活", "#阿里"],
        scores: [50, 55, 50, 68, 58],
        timeline: [
            { year: "2015", event: "口碑从阿里重启" },
            { year: "2018", event: "与饿了么合并，本地生活公司" },
            { year: "2020", event: "高德与本地生活" },
            { year: "2022", event: "高德与本地、到店与到综" }
        ],
        key_decisions: [
            "支付宝入口，到店与点餐",
            "与饿了么合并，到店+到家",
            "高德与本地整合，流量与场景"
        ],
        user_metrics: {
            monthly_active_users: "支付宝与到店用户（阿里生态）",
            user_demographics: { age_range: "全年龄段、支付宝用户", region: "全国" },
            usage_patterns: { content_creation_rate: "点评与订单", engagement_rate: "到店核销、复购与会员" }
        },
        business_model: {
            revenue_streams: [
                { type: "到店抽佣", percentage: 55, description: "团购与点餐" },
                { type: "广告与会员", percentage: 45, description: "排名与推广" }
            ],
            monetization_strategy: "到店抽佣与广告、与饿了么协同",
            financial_metrics: { profitability: "并入阿里本地生活、与美团竞争" }
        },
        key_metrics: { core_metrics: { gmv: "到店交易额", merchant_count: "商户数" }, business_metrics: { take_rate: "抽佣率", alipay_penetration: "支付宝渗透" } }
    },
    t3: { title: "T3 出行 (T3)", subtitle: "网约车与合规", dao: "安全出行。B2C 与合规、车联网与安全，主机厂背景。", gov: "自营车辆与司机，合规优先。", space: "叫车 + 订单 + 地图。", econ: "车费抽佣、广告。", risk: "与滴滴、高德、曹操竞争。", atomic_unit: "订单/车辆/司机", distribution: "叫车 90% + 其他 10%", death_risk: "规模与盈利", tags: ["#T3出行", "#网约车", "#B2C"], scores: [48, 58, 50, 62, 55], timeline: [{ year: "2019", event: "T3 出行成立" }, { year: "2021", event: "合规与扩张" }, { year: "2022", event: "与主机厂" }], key_decisions: ["B2C 与合规", "主机厂与车联网", "安全叙事"] },
    caocao: { title: "曹操出行 (CaoCao)", subtitle: "新能源网约车", dao: "绿色出行。吉利背景、新能源车与合规，B2C 与定制。", gov: "自营与加盟，合规与运营。", space: "叫车 + 订单 + 会员。", econ: "车费、企业用车、广告。", risk: "与滴滴、T3、高德竞争。", atomic_unit: "订单/司机/车辆", distribution: "叫车 85% + 企业 15%", death_risk: "规模与成本", tags: ["#曹操出行", "#网约车", "#吉利"], scores: [48, 55, 48, 58, 52], timeline: [{ year: "2015", event: "曹操出行成立" }, { year: "2019", event: "扩张与定制" }, { year: "2022", event: "新能源与合规" }], key_decisions: ["吉利与新能源", "B2C 与合规", "企业用车"] },
    xiaozhu: {
        title: "小猪短租 (Xiaozhu)",
        subtitle: "民宿与短租",
        dao: "住进当地人家。C2C 民宿、房东与房客，非标与体验；故事与社区感、与飞猪合作后阿里系流量，与途家、Airbnb 差异化在 C2C 与调性。",
        gov: "平台规则与房东审核；保洁与保险、与飞猪协同品控。",
        space: "搜索 + 房源 + 订单 + 故事。",
        econ: "抽佣、清洁费、保险；与飞猪交叉销售。",
        risk: "与途家、Airbnb、美团竞争；疫情与供给质量。",
        atomic_unit: "房源/订单/房东",
        distribution: "推荐 50% + 搜索 45% + 复购 5%",
        death_risk: "疫情与竞争",
        tags: ["#小猪", "#民宿", "#C2C"],
        scores: [55, 50, 55, 58, 55],
        timeline: [
            { year: "2012", event: "小猪成立，C2C 民宿" },
            { year: "2016", event: "故事与体验、品牌" },
            { year: "2018", event: "与飞猪合作，阿里系" },
            { year: "2022", event: "品质与合规、复苏" }
        ],
        key_decisions: [
            "C2C 民宿，非标与体验",
            "故事与社区感，差异化途家",
            "阿里系与飞猪，流量与订单"
        ],
        user_metrics: {
            monthly_active_users: "民宿与短途用户（行业估算）",
            user_demographics: { age_range: "25–40 岁、自由行与周末", region: "国内、热门目的地" },
            usage_patterns: { content_creation_rate: "点评与故事", engagement_rate: "预订与复购、多晚订单" }
        },
        business_model: {
            revenue_streams: [
                { type: "佣金与清洁费", percentage: 75, description: "房东侧抽佣与清洁费分成" },
                { type: "保险与增值", percentage: 25, description: "保险与飞猪导流" }
            ],
            monetization_strategy: "佣金为主、与飞猪协同",
            financial_metrics: { profitability: "与阿里生态、疫情后复苏" }
        },
        key_metrics: { core_metrics: { supply: "房源数", gmv: "间夜与交易额" }, business_metrics: { take_rate: "佣金率", repeat_rate: "复购" } }
    },
    mogujie: { title: "蘑菇街 (Mogujie)", subtitle: "女性时尚与直播电商", dao: "逛与买。穿搭、直播与电商，女性时尚决策。", gov: "平台规则与主播、商家。", space: "直播 + 发现 + 商品 + 订单。", econ: "佣金、广告、直播抽成。", risk: "与淘宝、小红书、抖音竞争。", atomic_unit: "直播/商品/订单", distribution: "直播 50% + 发现 35% + 搜索 15%", death_risk: "份额与增长", tags: ["#蘑菇街", "#时尚", "#直播"], scores: [52, 50, 52, 58, 52], timeline: [{ year: "2011", event: "蘑菇街成立" }, { year: "2016", event: "直播与电商" }, { year: "2022", event: "收缩与聚焦" }], key_decisions: ["女性与穿搭", "直播带货", "导购到电商"] },
    meilishuo: { title: "美丽说 (Meilishuo)", subtitle: "女性时尚导购", dao: "穿搭与种草。导购与社区、电商转化，女性时尚。", gov: "平台与达人、商家。", space: "发现 + 商品 + 关注 + 订单。", econ: "佣金、广告。", risk: "与蘑菇街合并后与小红书、淘宝竞争。", atomic_unit: "内容/商品/订单", distribution: "发现 55% + 关注 30% + 搜索 15%", death_risk: "合并与转型", tags: ["#美丽说", "#时尚", "#导购"], scores: [52, 48, 52, 55, 50], timeline: [{ year: "2009", event: "美丽说成立" }, { year: "2016", event: "与蘑菇街合并" }, { year: "2022", event: "蘑菇街体系" }], key_decisions: ["女性导购", "与蘑菇街合并", "直播转型"] },
    mamawang: { title: "妈妈网 (Mama.cn)", subtitle: "母婴社区与育儿", dao: "怀孕育儿交流。备孕、育儿、辅食与早教，妈妈社群与知识。", gov: "编辑与 UGC，版主与审核。", space: "圈子 + 知识 + 工具 + 商城。", econ: "广告、电商导流、会员。", risk: "与宝宝树、小红书、抖音竞争。", atomic_unit: "帖子/圈子/知识", distribution: "圈子 45% + 知识 35% + 工具 20%", death_risk: "流量与变现", tags: ["#妈妈网", "#母婴", "#育儿"], scores: [58, 52, 55, 55, 52], timeline: [{ year: "2004", event: "妈妈网成立" }, { year: "2015", event: "新三板挂牌" }, { year: "2022", event: "内容与电商" }], key_decisions: ["母婴垂直", "圈子与知识", "广告与电商"] },
    zhaopin: {
        title: "智联招聘 (Zhaopin)",
        subtitle: "综合招聘",
        dao: "找工作招人才。简历与职位、搜索与推荐，综合招聘撮合；老牌综合招聘，曾纽交所上市后退市，与前程无忧等竞争 BOSS 直聘崛起。",
        gov: "平台规则与认证；企业会员与简历库、反作弊。",
        space: "职位 + 搜索 + 简历 + 企业。",
        econ: "企业会员、增值、广告；下载与沟通次数为核心变现。",
        risk: "与 BOSS、前程无忧、猎聘竞争；C 端体验与直聊心智被 BOSS 抢占。",
        atomic_unit: "职位/简历/沟通",
        distribution: "搜索 45% + 推荐 35% + 消息 20%",
        death_risk: "份额与产品",
        tags: ["#智联招聘", "#招聘", "#综合"],
        scores: [50, 55, 50, 72, 62],
        timeline: [
            { year: "1997", event: "智联招聘成立" },
            { year: "2014", event: "纽交所退市" },
            { year: "2017", event: "与前程无忧竞争" },
            { year: "2022", event: "与前程无忧、BOSS 三强格局" }
        ],
        key_decisions: [
            "综合招聘，简历与职位库规模",
            "企业会员与下载/沟通增值",
            "应对 BOSS 直聊与移动化"
        ],
        user_metrics: {
            monthly_active_users: "求职者与 HR（行业估算）",
            user_demographics: { age_range: "22–45 岁、白领与蓝领", region: "全国" },
            usage_patterns: { content_creation_rate: "投递与沟通", engagement_rate: "简历刷新、企业端下载与沟通" }
        },
        business_model: {
            revenue_streams: [
                { type: "企业会员与套餐", percentage: 65, description: "下载简历、职位发布与刷新" },
                { type: "增值与广告", percentage: 35, description: "置顶、猎头与品牌" }
            ],
            monetization_strategy: "B 端收费为主、下载与沟通量为核心指标",
            financial_metrics: { profitability: "综合招聘市场成熟、增速放缓" }
        },
        key_metrics: { core_metrics: { resume_downloads: "简历下载量", job_count: "职位数" }, business_metrics: { arpu: "企业 ARPU", pay_ratio: "付费企业占比" } }
    },
    qiancheng: {
        title: "前程无忧 (51job)",
        subtitle: "招聘与人力资源",
        dao: "找工作与 HR 服务。招聘、猎头与培训，综合人力资源；纳斯达克上市多年后私有化，与智联、BOSS 竞争，线下与线上、HR 服务为差异化。",
        gov: "平台规则与认证；企业会员与简历库、线下招聘会与培训。",
        space: "职位 + 简历 + 企业 + 培训。",
        econ: "企业会员、招聘服务、培训；B 端收费为主。",
        risk: "与 BOSS、智联、猎聘竞争；直聊与移动化被 BOSS 抢占心智。",
        atomic_unit: "职位/简历/企业",
        distribution: "搜索 50% + 推荐 30% + 其他 20%",
        death_risk: "份额与私有化",
        tags: ["#前程无忧", "#51job", "#招聘"],
        scores: [50, 55, 50, 72, 62],
        timeline: [
            { year: "1998", event: "前程无忧成立" },
            { year: "2004", event: "纳斯达克上市" },
            { year: "2015", event: "线下与线上、HR 服务" },
            { year: "2022", event: "私有化" }
        ],
        key_decisions: [
            "综合招聘，简历与职位库",
            "HR 服务与培训，B 端深度",
            "线下与线上结合，应对 BOSS 直聊"
        ],
        user_metrics: {
            monthly_active_users: "求职者与 HR（行业估算）",
            user_demographics: { age_range: "22–45 岁、白领与蓝领", region: "全国" },
            usage_patterns: { content_creation_rate: "投递与沟通", engagement_rate: "企业端下载与招聘会、培训" }
        },
        business_model: {
            revenue_streams: [
                { type: "企业招聘服务", percentage: 60, description: "会员、发布与下载" },
                { type: "培训与人力资源", percentage: 30, description: "线下与培训" },
                { type: "广告与增值", percentage: 10, description: "品牌与置顶" }
            ],
            monetization_strategy: "B 端招聘与 HR 服务为主、培训与线下补充",
            financial_metrics: { profitability: "上市后私有化、综合招聘增速放缓" }
        },
        key_metrics: { core_metrics: { resume_downloads: "简历下载量", job_count: "职位数" }, business_metrics: { arpu: "企业 ARPU", offline_share: "线下与培训占比" } }
    },
    full_truck: { title: "满帮 (Full Truck)", subtitle: "货运与车货匹配", dao: "找货找车。货车司机与货主、运力与货源匹配，干线物流；会员与信用体系提升匹配效率。", gov: "平台规则与信用；司机与货主认证。", space: "找货 + 找车 + 订单 + 我的。", econ: "会员、抽佣、金融。", risk: "与货拉拉、滴滴货运竞争。", atomic_unit: "货源/运力/订单", distribution: "找货 50% + 找车 40% + 其他 10%", death_risk: "合规与竞争", tags: ["#满帮", "#货运", "#车货匹配", "#干线", "#会员"], scores: [50, 58, 50, 75, 65], timeline: [{ year: "2017", event: "运满满与货车帮合并" }, { year: "2021", event: "纽交所上市" }, { year: "2022", event: "合规与生态" }, { year: "2023", event: "会员与金融深化" }], key_decisions: ["车货匹配", "干线与司机", "会员与金融", "合规与数据安全"] },
    huolala: { title: "货拉拉 (Lalamove)", subtitle: "同城货运", dao: "拉货就找货拉拉。同城货运、搬家与拉货，司机与用户匹配；企业端与 C 端双场景。", gov: "平台规则与司机管理；安全与合规。", space: "下单 + 订单 + 司机 + 我的。", econ: "抽佣、会员、增值。", risk: "与满帮、滴滴货运、快狗竞争。", atomic_unit: "订单/司机/车型", distribution: "下单 80% + 订单 15% + 其他 5%", death_risk: "安全与合规", tags: ["#货拉拉", "#同城货运", "#搬家", "#企业", "#安全"], scores: [52, 55, 52, 72, 62], timeline: [{ year: "2013", event: "货拉拉成立" }, { year: "2020", event: "同城与跨城" }, { year: "2021", event: "安全事件与整改" }, { year: "2022", event: "上市与安全" }], key_decisions: ["同城货运刚需", "司机与车型", "会员与抽佣", "安全与合规"] },
    acfun: { title: "A 站 (AcFun)", subtitle: "弹幕视频与二次元", dao: "宅文化与弹幕。番剧、鬼畜与 UGC，二次元与亚文化。", gov: "编辑与 UGC，版权与审核。", space: "推荐 + 分区 + 动态 + 弹幕。", econ: "广告、会员、直播。", risk: "与 B 站、抖音竞争。", atomic_unit: "视频/弹幕/番剧", distribution: "推荐 50% + 分区 35% + 动态 15%", death_risk: "被快手收购与定位", tags: ["#A站", "#弹幕", "#二次元"], scores: [58, 48, 55, 52, 52], timeline: [{ year: "2007", event: "A 站成立" }, { year: "2018", event: "被快手收购" }, { year: "2022", event: "与快手协同" }], key_decisions: ["弹幕与二次元", "鬼畜与 UGC", "快手输血"] },
    lvmama: {
        title: "驴妈妈 (Lvmama)",
        subtitle: "景区与周边游",
        dao: "门票与周边游。景区门票、周边度假与自由行，门票入口；从门票延伸度假与攻略。",
        gov: "平台与景区、供应商合作。",
        space: "门票 + 周边 + 订单 + 攻略。",
        econ: "门票佣金、度假产品、广告。",
        risk: "与携程、美团、同程竞争。",
        atomic_unit: "门票/产品/订单",
        distribution: "推荐 45% + 分类 40% + 搜索 15%",
        death_risk: "份额与转型",
        tags: ["#驴妈妈", "#门票", "#周边游"],
        scores: [50, 52, 50, 58, 52],
        timeline: [
            { year: "2008", event: "驴妈妈成立" },
            { year: "2015", event: "新三板" },
            { year: "2022", event: "景区与周边" }
        ],
        key_decisions: [
            "门票刚需，景区入口",
            "周边与自由行，延伸场景",
            "景区合作，供应链与佣金"
        ],
        user_metrics: { monthly_active_users: "景区与周边游用户（新三板披露）", user_demographics: { age_range: "家庭与自由行、周边短途", region: "中国" }, usage_patterns: { content_creation_rate: "攻略与点评", engagement_rate: "门票与预订、复购" } },
        business_model: { revenue_streams: [{ type: "门票佣金", description: "景区、按张抽成" }, { type: "度假产品与广告", description: "周边与品牌" }], monetization_strategy: "佣金 + 广告", financial_metrics: { profitability: "新三板后份额压力、与携程/美团竞争" } },
        key_metrics: { core_metrics: { gmv: "门票与周边", engagement_rate: "预订与复购", market_share: "门票市占" } }
    },
    xiangha: {
        title: "下厨房 (Xiangha)",
        subtitle: "美食与菜谱",
        dao: "做饭找菜谱。菜谱、作品与市集，家庭烹饪与生活方式；从内容到食材与厨具闭环。",
        gov: "UGC 与编辑，市集与规则。",
        space: "菜谱 + 市集 + 关注 + 作品。",
        econ: "市集佣金、广告、会员。",
        risk: "与小红书、抖音、豆果竞争。",
        atomic_unit: "菜谱/作品/市集",
        distribution: "推荐 50% + 分类 35% + 市集 15%",
        death_risk: "流量与变现",
        tags: ["#下厨房", "#菜谱", "#美食"],
        scores: [62, 52, 58, 58, 58],
        timeline: [
            { year: "2011", event: "下厨房上线" },
            { year: "2017", event: "市集与电商" },
            { year: "2022", event: "与抖音" }
        ],
        key_decisions: [
            "菜谱与 UGC，内容与信任",
            "市集与闭环，内容到交易",
            "生活方式，拓展场景"
        ],
        user_metrics: { monthly_active_users: "家庭与烹饪用户（日活/月活行业估算）", user_demographics: { age_range: "家庭与美食、女性占比高", region: "中国" }, usage_patterns: { content_creation_rate: "菜谱与作品、UGC 发布", engagement_rate: "浏览与市集、内容到交易转化" } },
        business_model: { revenue_streams: [{ type: "市集佣金", description: "食材与厨具、闭环抽成" }, { type: "广告与会员", description: "品牌与增值" }], monetization_strategy: "市集 + 广告", financial_metrics: { profitability: "流量与变现平衡、市集 GMV 占比" } },
        key_metrics: { core_metrics: { mau: "烹饪用户", engagement_rate: "菜谱与市集、转化率" } }
    },
    douyin_shop: {
        title: "抖音电商 (Douyin Shop)",
        subtitle: "兴趣电商",
        dao: "兴趣种草即买：短视频与直播带货、小店与达人/品牌，货找人（推荐流内转化）为主；商城与搜索补货架与复购，支付与物流闭环；GMV 万亿级体量、商城与品牌店占比持续提升。",
        gov: "平台规则与商家/达人准入、内容与商品审核、流量与分成；电商与内容算法协同、反作弊与品控。",
        space: "推荐（信息流内嵌商品） + 商城（货架/分类/品牌馆） + 直播 + 订单。",
        econ: "佣金（技术服务费约 2–5%）、广告（千川/品专等）、物流与支付；GMV 与货币化率双增，闭环抽成与广告并重。",
        risk: "淘宝/拼多多/快手抢商家与复购；体验与售后；监管与品控。",
        atomic_unit: "商品/直播/短视频",
        distribution: "推荐 60% + 商城 25% + 搜索 15%",
        death_risk: "体验与复购",
        tags: ["#抖音电商", "#兴趣电商", "#直播", "#货找人", "#商城"],
        scores: [55, 60, 55, 82, 72],
        timeline: [
            { year: "2018", event: "抖音小店上线" },
            { year: "2021", event: "兴趣电商品牌提出" },
            { year: "2022", event: "商城与货架场" },
            { year: "2024", event: "低价与复购" }
        ],
        key_decisions: [
            "兴趣与货找人差异化淘宝",
            "直播与短视频双场转化",
            "商城与搜索补复购",
            "闭环与体验提升"
        ],
        user_metrics: { monthly_active_users: "与抖音主站协同（电商 MAU/GMV 随字节/抖音披露）", user_demographics: { age_range: "18–40 岁为主、泛人群", region: "中国" }, usage_patterns: { content_creation_rate: "短视频与直播带货、达人/品牌开播率", engagement_rate: "种草点击率、转化率、复购率" } },
        business_model: { revenue_streams: [{ type: "佣金", description: "技术服务费 2–5%、按类目" }, { type: "广告", description: "千川/品专/搜索广告" }], monetization_strategy: "佣金 + 广告，货币化率爬升", financial_metrics: { profitability: "GMV 万亿级、货币化率提升" } },
        key_metrics: { core_metrics: { gmv: "万亿级体量", engagement_rate: "转化率与复购率", monetization_rate: "货币化率" } }
    },
    kuaishou_shop: {
        title: "快手电商 (Kuaishou Shop)",
        subtitle: "信任电商",
        dao: "老铁经济。直播与短视频带货、信任与复购，下沉与私域；关注关系链带来高复购与客单价，复购率与私域占比高于行业，差异化于抖音货找人。",
        gov: "平台规则与主播、商家；信任与品控、假货与体验治理。",
        space: "发现 + 小店 + 直播 + 订单。",
        econ: "佣金（技术服务费）、广告（磁力金牛等）、服务费；GMV 与货币化率增长。",
        risk: "与抖音、淘宝、拼多多竞争。",
        atomic_unit: "商品/直播/老铁",
        distribution: "发现 55% + 关注 30% + 小店 15%",
        death_risk: "增速与品牌",
        tags: ["#快手电商", "#信任电商", "#老铁", "#复购", "#下沉"],
        scores: [58, 55, 58, 75, 68],
        timeline: [
            { year: "2018", event: "快手小店" },
            { year: "2020", event: "信任电商" },
            { year: "2021", event: "品牌自播" },
            { year: "2022", event: "品牌与复购" }
        ],
        key_decisions: [
            "老铁与信任，私域复购与客单",
            "直播带货，与发现流协同",
            "下沉与品牌上行双线",
            "私域与复购差异化抖音"
        ],
        user_metrics: { monthly_active_users: "与快手主站协同（电商 GMV 随快手财报披露）", user_demographics: { age_range: "下沉与三四线占比高、家庭与熟龄", region: "中国" }, usage_patterns: { content_creation_rate: "直播与短视频带货、老铁开播", engagement_rate: "关注复购率、客单价高于纯公域" } },
        business_model: { revenue_streams: [{ type: "佣金", description: "技术服务费、按类目" }, { type: "广告与服务费", description: "磁力金牛、小店推广" }], monetization_strategy: "佣金 + 广告", financial_metrics: { profitability: "GMV 增长、货币化率提升" } },
        key_metrics: { core_metrics: { gmv: "信任电商 GMV", engagement_rate: "复购率、客单价", repeat_purchase_rate: "私域复购占比" } }
    },
    tmall: {
        title: "天猫 (Tmall)",
        subtitle: "B2C 与品牌电商",
        dao: "品牌正品。品牌旗舰店与官方、品质与履约，与淘宝协同；双 11 GMV 数千亿级、大促巩固心智，品牌与白牌分层、88VIP 与会员体系。",
        gov: "平台规则与品牌管理、品控与售后；与淘宝流量与账号融合、统一消费者与商家侧。",
        space: "首页 + 品类 + 店铺 + 订单 + 会员。",
        econ: "佣金（品牌与 POP 约 0.3–5%）、广告（品专/超级推荐等）、天猫超市自营；阿里中国零售核心收入。",
        risk: "与京东、拼多多、抖音竞争。",
        atomic_unit: "店铺/商品/订单",
        distribution: "推荐 50% + 搜索 35% + 复购 15%",
        death_risk: "流量与份额",
        tags: ["#天猫", "#B2C", "#阿里", "#双11", "#品牌"],
        scores: [52, 58, 55, 85, 75],
        timeline: [
            { year: "2008", event: "淘宝商城" },
            { year: "2012", event: "更名天猫" },
            { year: "2019", event: "与淘宝组织融合" },
            { year: "2022", event: "与淘宝融合" }
        ],
        key_decisions: [
            "B2C 与品牌，品质与正品心智",
            "双 11 与心智，大促与会员",
            "与淘宝协同，流量与账号融合",
            "大促与会员，88VIP 等"
        ],
        user_metrics: { monthly_active_users: "数亿级（阿里财报中国零售年度活跃消费者）", user_demographics: { age_range: "品牌消费人群、中高消费占比高", region: "中国" }, usage_patterns: { content_creation_rate: "店铺与直播/短视频内容", engagement_rate: "搜索与复购、大促参与率" } },
        business_model: { revenue_streams: [{ type: "佣金", description: "品牌与 POP、按类目 0.3–5%" }, { type: "广告与天猫超市", description: "品牌营销、自营毛利" }], monetization_strategy: "佣金 + 广告，货币化率稳定", financial_metrics: { profitability: "阿里中国零售核心、收入与利润贡献" } },
        key_metrics: { core_metrics: { gmv: "品牌电商 GMV、双 11 占比高", engagement_rate: "搜索与复购、会员渗透" } }
    },
    hema: {
        title: "盒马 (Hema)",
        subtitle: "新零售与生鲜",
        dao: "30 分钟达。生鲜、餐饮与到店，前置仓与门店融合；门店数数百家、多业态（盒马鲜生/盒马 MINI/盒马 X 会员店），阿里新零售标杆。",
        gov: "自营与供应链、品控与采购；门店与配送、3 公里半径。",
        space: "商品 + 购物车 + 门店 + 订单 + 会员。",
        econ: "商品毛利、X 会员费、餐饮与加工；单店坪效与线上占比为关键指标。",
        risk: "与叮咚、美团买菜、拼多多竞争。",
        atomic_unit: "商品/订单/门店",
        distribution: "推荐 50% + 分类 40% + 门店 10%",
        death_risk: "盈利与扩张",
        tags: ["#盒马", "#生鲜", "#新零售"],
        scores: [52, 55, 52, 72, 65],
        timeline: [
            { year: "2016", event: "盒马首店" },
            { year: "2019", event: "全国扩张" },
            { year: "2022", event: "盈利与业态" }
        ],
        key_decisions: [
            "生鲜与 30 分钟达，体验与复购",
            "店仓一体，到店与到家融合",
            "阿里新零售，供应链与数字化"
        ],
        user_metrics: { monthly_active_users: "数千万级（一二线为主）", user_demographics: { age_range: "一二线家庭、25–45 岁", region: "中国" }, usage_patterns: { content_creation_rate: "到店与到家、线上订单占比超 6 成", engagement_rate: "复购与 X 会员渗透" } },
        business_model: { revenue_streams: [{ type: "商品毛利", description: "生鲜与餐饮、损耗与定价" }, { type: "会员", description: "X 会员年费与权益" }], monetization_strategy: "商品 + 会员", financial_metrics: { profitability: "单店盈利与整体盈利探索、坪效" } },
        key_metrics: { core_metrics: { mau: "数千万", gmv: "生鲜与餐饮", store_count: "门店数", online_ratio: "线上占比" } }
    },
    dingdong: {
        title: "叮咚买菜 (Dingdong)",
        subtitle: "前置仓生鲜",
        dao: "送菜上门。前置仓、即时达与品控，生鲜到家；上海起家、前置仓数量与城市覆盖曾达高峰后收缩，区域深耕与盈利优先。",
        gov: "自营供应链与仓配、品控与损耗；站点与骑手管理。",
        space: "商品 + 分类 + 购物车 + 订单 + 会员。",
        econ: "商品毛利、绿卡等会员；上市后追求单城盈利与 UE。",
        risk: "与盒马、美团买菜、拼多多竞争。",
        atomic_unit: "商品/订单/前置仓",
        distribution: "推荐 55% + 分类 40% + 搜索 5%",
        death_risk: "亏损与盈利",
        tags: ["#叮咚买菜", "#生鲜", "#前置仓"],
        scores: [50, 55, 50, 68, 58],
        timeline: [
            { year: "2017", event: "叮咚买菜成立" },
            { year: "2021", event: "纽交所上市" },
            { year: "2022", event: "盈利与收缩" }
        ],
        key_decisions: [
            "前置仓与即时达，30 分钟达",
            "品控与复购，用户心智",
            "上海与区域，聚焦与盈利"
        ],
        user_metrics: { monthly_active_users: "区域用户（上市曾披露 DAU/订单量，收缩后聚焦核心城）", user_demographics: { age_range: "家庭与白领、25–45 岁", region: "华东等深耕区域" }, usage_patterns: { content_creation_rate: "复购与频次", engagement_rate: "日活、订单量与客单价" } },
        business_model: { revenue_streams: [{ type: "商品毛利", description: "生鲜、损耗与定价" }, { type: "会员", description: "绿卡等会员费" }], monetization_strategy: "商品 + 会员", financial_metrics: { profitability: "上市后 UE 转正、城市收缩与盈利" } },
        key_metrics: { core_metrics: { order_volume: "日订单量", engagement_rate: "复购率", ue: "单笔/单城经济模型" } }
    },
    tantan: {
        title: "探探 (Tantan)",
        subtitle: "左滑右滑社交",
        dao: "互相喜欢才聊天。LBS 与滑动、匹配与破冰，陌生人交友；女性体验与安全为产品重点。",
        gov: "平台规则与审核，会员与增值；与陌陌后台协同。",
        space: "发现 + 匹配 + 消息 + 我的。",
        econ: "会员、增值、广告。",
        risk: "与陌陌、Soul、Tinder 竞争。",
        atomic_unit: "资料/匹配/消息",
        distribution: "发现 60% + 消息 30% + 其他 10%",
        death_risk: "留存与付费",
        tags: ["#探探", "#交友", "#滑动", "#陌陌", "#LBS"],
        scores: [55, 52, 52, 62, 55],
        timeline: [
            { year: "2014", event: "探探上线" },
            { year: "2018", event: "被陌陌收购" },
            { year: "2020", event: "品牌与安全升级" },
            { year: "2022", event: "与陌陌协同" }
        ],
        key_decisions: [
            "左滑右滑与匹配，降低破冰门槛",
            "陌陌并购，流量与变现协同",
            "会员与增值，超级喜欢等",
            "女性体验与安全，留存与口碑"
        ],
        user_metrics: { monthly_active_users: "与陌陌协同披露", user_demographics: { age_range: "陌生人交友", region: "中国" }, usage_patterns: { content_creation_rate: "资料与互动", engagement_rate: "匹配与消息" } },
        business_model: { revenue_streams: [{ type: "会员", description: "超级喜欢/解锁等" }, { type: "增值与广告", description: "与陌陌协同" }], monetization_strategy: "会员为主", financial_metrics: { profitability: "陌陌体系内" } },
        key_metrics: { core_metrics: { mau: "与陌陌协同", engagement_rate: "匹配与留存" } }
    },
    wuba_job: {
        title: "58 招聘 (58 Job)",
        subtitle: "蓝领与基层招聘",
        dao: "找工作招人。蓝领、基层与本地岗位，信息撮合与会员，58 流量协同。",
        gov: "平台规则与商家认证。",
        space: "职位 + 搜索 + 简历 + 企业。",
        econ: "会员与推广、增值。",
        risk: "与 BOSS、赶集、垂直竞争。",
        atomic_unit: "职位/简历/企业",
        distribution: "推荐 45% + 搜索 40% + 消息 15%",
        death_risk: "与 58 主站",
        tags: ["#58招聘", "#蓝领", "#基层"],
        scores: [50, 52, 50, 65, 55],
        timeline: [
            { year: "2005", event: "58 招聘" },
            { year: "2015", event: "与赶集合并" },
            { year: "2022", event: "蓝领与本地" }
        ],
        key_decisions: [
            "蓝领与基层，差异化 BOSS",
            "58 流量，主站导流",
            "会员变现，推广与增值"
        ],
        user_metrics: { monthly_active_users: "与 58 协同", user_demographics: { age_range: "蓝领与基层", region: "中国" }, usage_patterns: { content_creation_rate: "简历与联系", engagement_rate: "投递与沟通" } },
        business_model: { revenue_streams: [{ type: "会员与推广", description: "置顶刷新" }], monetization_strategy: "会员为主", financial_metrics: { profitability: "58 体系内" } },
        key_metrics: { core_metrics: { engagement_rate: "职位与简历" } }
    },
    ganji: {
        title: "赶集网 (Ganji)",
        subtitle: "分类信息",
        dao: "找工作找房找二手。招聘房产二手本地，与 58 合并后协同，品牌与流量整合。",
        gov: "平台规则与认证。",
        space: "分类 + 信息流 + 搜索。",
        econ: "会员与推广。",
        risk: "与 58 整合后品牌。",
        atomic_unit: "信息/商户/订单",
        distribution: "分类 50% + 推荐 35% + 搜索 15%",
        death_risk: "58 体系内",
        tags: ["#赶集", "#分类", "#58"],
        scores: [48, 52, 48, 62, 52],
        timeline: [
            { year: "2005", event: "赶集成立" },
            { year: "2015", event: "与 58 合并" },
            { year: "2022", event: "58 赶集" }
        ],
        key_decisions: [
            "分类信息，与 58 同质",
            "与 58 合并，垄断与整合",
            "品牌协同，58 赶集双品牌"
        ],
        user_metrics: { monthly_active_users: "58 体系内", user_demographics: { age_range: "本地生活", region: "中国" }, usage_patterns: { content_creation_rate: "信息发布", engagement_rate: "浏览与联系" } },
        business_model: { revenue_streams: [{ type: "会员与推广", description: "与 58 协同" }], monetization_strategy: "会员与推广", financial_metrics: { profitability: "58 体系内" } },
        key_metrics: { core_metrics: { engagement_rate: "分类与信息流" } }
    },
    taopiaopiao: {
        title: "淘票票 (Taopiaopiao)",
        subtitle: "电影票务",
        dao: "买电影票选座。票务与选座、评分与预告，阿里系娱乐与阿里影业协同。",
        gov: "平台与影院合作。",
        space: "电影 + 影院 + 订单 + 社区。",
        econ: "票务抽佣、广告。",
        risk: "与猫眼、大麦、抖音竞争。",
        atomic_unit: "电影/场次/订单",
        distribution: "推荐 50% + 搜索 40% + 我的 10%",
        death_risk: "份额与阿里",
        tags: ["#淘票票", "#电影票", "#阿里"],
        scores: [50, 55, 50, 68, 58],
        timeline: [
            { year: "2014", event: "淘宝电影" },
            { year: "2016", event: "更名淘票票" },
            { year: "2022", event: "与阿里影业" }
        ],
        key_decisions: [
            "阿里生态，淘系与支付导流",
            "票务与选座，决策入口",
            "宣发与内容，与阿里影业"
        ],
        user_metrics: { monthly_active_users: "观影用户（与淘系/阿里影业协同）", user_demographics: { age_range: "观影人群、18–35 岁", region: "中国" }, usage_patterns: { content_creation_rate: "评分与评论", engagement_rate: "购票与复购、大档期" } },
        business_model: { revenue_streams: [{ type: "票务抽佣", description: "电影票、服务费" }, { type: "广告", description: "宣发与品牌" }], monetization_strategy: "票务 + 广告", financial_metrics: { profitability: "与阿里大文娱、票务市占" } },
        key_metrics: { core_metrics: { gmv: "票务 GMV", engagement_rate: "购票与复购" } }
    },
    xiaomi_youpin: {
        title: "小米有品 (Youpin)",
        subtitle: "精品电商",
        dao: "小米式精选。科技与生活品类、众筹与爆品，品质与性价比，小米生态延伸。",
        gov: "自营与第三方，选品与供应链。",
        space: "首页 + 分类 + 众筹 + 订单。",
        econ: "自营毛利、佣金、众筹。",
        risk: "与网易严选、淘宝心选竞争。",
        atomic_unit: "商品/众筹/订单",
        distribution: "推荐 50% + 分类 35% + 众筹 15%",
        death_risk: "规模与小米",
        tags: ["#小米有品", "#精品", "#小米"],
        scores: [52, 55, 50, 65, 58],
        timeline: [
            { year: "2017", event: "米家有品" },
            { year: "2018", event: "更名小米有品" },
            { year: "2022", event: "与小米生态" }
        ],
        key_decisions: [
            "小米式选品，品质与性价比",
            "众筹与爆品，新品与流量",
            "科技与生活，品类拓展"
        ],
        user_metrics: { monthly_active_users: "小米与泛用户", user_demographics: { age_range: "科技与生活", region: "中国" }, usage_patterns: { content_creation_rate: "众筹与复购", engagement_rate: "浏览与下单" } },
        business_model: { revenue_streams: [{ type: "自营毛利", description: "精选商品" }, { type: "佣金与众筹", description: "第三方与爆品" }], monetization_strategy: "自营 + 佣金", financial_metrics: { profitability: "与小米生态协同" } },
        key_metrics: { core_metrics: { gmv: "精品电商", engagement_rate: "众筹与复购" } }
    },
    netease_cc: {
        title: "网易 CC (NetEase CC)",
        subtitle: "游戏与娱乐直播",
        dao: "看游戏与娱乐。网易游戏、秀场与语音，公会与打赏，网易系内容与用户协同。",
        gov: "平台与公会、内容审核。",
        space: "直播 + 游戏 + 语音 + 社区。",
        econ: "打赏、会员、广告。",
        risk: "与虎牙、斗鱼、B 站竞争。",
        atomic_unit: "直播/主播/礼物",
        distribution: "推荐 50% + 游戏 35% + 语音 15%",
        death_risk: "份额与网易",
        tags: ["#网易CC", "#游戏直播", "#网易"],
        scores: [52, 50, 52, 58, 52],
        timeline: [
            { year: "2013", event: "网易 CC 上线" },
            { year: "2018", event: "与网易游戏" },
            { year: "2022", event: "娱乐与语音" }
        ],
        key_decisions: [
            "网易游戏生态，梦幻/大话等导流",
            "秀场与语音，多元内容",
            "公会与打赏，变现与生态"
        ],
        user_metrics: { monthly_active_users: "网易游戏与娱乐用户（与梦幻/大话等协同）", user_demographics: { age_range: "游戏与秀场、男性占比高", region: "中国" }, usage_patterns: { content_creation_rate: "主播与公会开播", engagement_rate: "观看时长与打赏、ARPPU" } },
        business_model: { revenue_streams: [{ type: "打赏", description: "虚拟礼物、平台分成" }, { type: "会员与广告", description: "增值与品牌" }], monetization_strategy: "打赏为主", financial_metrics: { profitability: "网易体系内、直播收入占比" } },
        key_metrics: { core_metrics: { engagement_rate: "直播与打赏", arppu: "打赏 ARPPU" } }
    },
    xiami: {
        title: "虾米音乐 (Xiami)",
        subtitle: "音乐与社区（已关停）",
        dao: "发现与分享。曲库与推荐、乐迷社区，小而美；编辑与用户歌单形成品味认同，曾为独立音乐与长尾重要阵地。",
        gov: "编辑与算法，社区与版权。",
        space: "发现 + 歌单 + 社区。",
        econ: "会员、广告。",
        risk: "版权与 TME、网易云竞争。",
        atomic_unit: "歌/歌单/乐迷",
        distribution: "推荐 50% + 歌单 35% + 社区 15%",
        death_risk: "关停与版权",
        tags: ["#虾米", "#音乐", "#阿里"],
        scores: [60, 52, 58, 52, 55],
        timeline: [
            { year: "2008", event: "虾米成立" },
            { year: "2013", event: "被阿里收购" },
            { year: "2021", event: "关停" }
        ],
        key_decisions: [
            "乐迷与社区，品味与认同",
            "版权困境，与 TME 竞争失利",
            "关停，阿里音乐战略收缩"
        ],
        user_metrics: { monthly_active_users: "关停前乐迷用户", user_demographics: { age_range: "乐迷与独立音乐", region: "中国" }, usage_patterns: { content_creation_rate: "歌单与评论", engagement_rate: "发现与分享" } },
        business_model: { revenue_streams: [{ type: "会员", description: "付费订阅" }, { type: "广告", description: "有限" }], monetization_strategy: "会员 + 广告", financial_metrics: { profitability: "长期亏损，版权成本高" } },
        key_metrics: { core_metrics: { mau: "关停前", engagement_rate: "歌单与社区" } }
    },
    oneplus_community: {
        title: "一加社区 (OnePlus)",
        subtitle: "加油与产品",
        dao: "不将就。产品讨论、ROM 与反馈，加油与品牌；极客与海外口碑反哺国内。",
        gov: "官方与版主，内测与规则。",
        space: "论坛 + 动态 + 内测 + 活动。",
        econ: "为一加品牌服务。",
        risk: "与小米、华为社区竞争。",
        atomic_unit: "帖子/内测/动态",
        distribution: "推荐 45% + 论坛 40% + 内测 15%",
        death_risk: "合并与 OPPO",
        tags: ["#一加", "#加油", "#社区"],
        scores: [58, 50, 55, 50, 52],
        timeline: [
            { year: "2014", event: "一加社区" },
            { year: "2021", event: "与 OPPO 合并" },
            { year: "2022", event: "品牌独立" }
        ],
        key_decisions: [
            "不将就与粉丝，极客与口碑",
            "内测与反馈，产品与 ROM",
            "OPPO 融合与品牌独立平衡"
        ],
        user_metrics: { monthly_active_users: "加油与一加用户", user_demographics: { age_range: "极客与年轻", region: "中国及海外" }, usage_patterns: { content_creation_rate: "讨论与内测", engagement_rate: "论坛与动态" } },
        business_model: { revenue_streams: [], monetization_strategy: "品牌服务，非直接变现", financial_metrics: { profitability: "为一加销量与口碑服务" } },
        key_metrics: { core_metrics: { engagement_rate: "论坛与内测" } }
    },
    oppo_community: {
        title: "OPPO 社区 (OPPO)",
        subtitle: "OPPO 用户社区",
        dao: "交流与反馈。ColorOS、产品与玩法，用户与品牌；内测与服务提升留存与口碑。",
        gov: "官方与版主，内测与规则。",
        space: "论坛 + 圈子 + 内测 + 服务。",
        econ: "为 OPPO 品牌服务。",
        risk: "与小米、华为、vivo 竞争。",
        atomic_unit: "帖子/圈子/内测",
        distribution: "推荐 45% + 圈子 35% + 服务 20%",
        death_risk: "用户与商业化",
        tags: ["#OPPO", "#ColorOS", "#社区"],
        scores: [55, 52, 52, 55, 52],
        timeline: [
            { year: "2011", event: "OPPO 论坛" },
            { year: "2018", event: "社区 App" },
            { year: "2022", event: "与一加" }
        ],
        key_decisions: [
            "用户与反馈，留存与口碑",
            "ColorOS 与内测，系统与体验",
            "品牌社区，与一加协同"
        ],
        user_metrics: { monthly_active_users: "OPPO 用户", user_demographics: { age_range: "泛用户", region: "中国" }, usage_patterns: { content_creation_rate: "帖子与圈子", engagement_rate: "内测与服务" } },
        business_model: { revenue_streams: [], monetization_strategy: "品牌服务", financial_metrics: { profitability: "为 OPPO 销量与口碑服务" } },
        key_metrics: { core_metrics: { engagement_rate: "圈子与内测" } }
    },
    vivo_community: {
        title: "vivo 社区 (vivo)",
        subtitle: "vivo 用户社区",
        dao: "玩机与交流。OriginOS、产品与活动，用户与品牌；内测与服务增强粘性。",
        gov: "官方与版主，内测与规则。",
        space: "论坛 + 圈子 + 服务 + 活动。",
        econ: "为 vivo 品牌服务。",
        risk: "与 OPPO、小米、华为竞争。",
        atomic_unit: "帖子/圈子/服务",
        distribution: "推荐 45% + 圈子 40% + 服务 15%",
        death_risk: "用户与商业化",
        tags: ["#vivo", "#OriginOS", "#社区"],
        scores: [52, 52, 50, 55, 50],
        timeline: [
            { year: "2012", event: "vivo 论坛" },
            { year: "2020", event: "OriginOS" },
            { year: "2022", event: "社区与服务" }
        ],
        key_decisions: [
            "用户与玩机，交流与反馈",
            "OriginOS，系统与体验",
            "品牌服务，售后与活动"
        ],
        user_metrics: { monthly_active_users: "vivo 用户", user_demographics: { age_range: "泛用户", region: "中国" }, usage_patterns: { content_creation_rate: "帖子与圈子", engagement_rate: "玩机与服务" } },
        business_model: { revenue_streams: [], monetization_strategy: "品牌服务", financial_metrics: { profitability: "为 vivo 销量与口碑服务" } },
        key_metrics: { core_metrics: { engagement_rate: "圈子与服务" } }
    },
    realme_community: {
        title: "realme 社区 (realme)",
        subtitle: "年轻与敢越级",
        dao: "年轻用户与产品。realme 手机、反馈与活动，年轻品牌；敢越级与性价比心智。",
        gov: "官方与版主，规则与活动。",
        space: "论坛 + 动态 + 活动。",
        econ: "为 realme 品牌服务。",
        risk: "与 OPPO 系、小米竞争。",
        atomic_unit: "帖子/动态/活动",
        distribution: "推荐 50% + 论坛 35% + 活动 15%",
        death_risk: "规模与 OPPO",
        tags: ["#realme", "#年轻", "#OPPO"],
        scores: [52, 48, 52, 52, 50],
        timeline: [
            { year: "2018", event: "realme 成立" },
            { year: "2020", event: "国内社区" },
            { year: "2022", event: "与 OPPO" }
        ],
        key_decisions: [
            "年轻与敢越级，性价比与设计",
            "OPPO 系，供应链与系统",
            "海外与国内，双市场"
        ],
        user_metrics: { monthly_active_users: "realme 用户", user_demographics: { age_range: "年轻用户", region: "中国及海外" }, usage_patterns: { content_creation_rate: "反馈与活动", engagement_rate: "论坛与动态" } },
        business_model: { revenue_streams: [], monetization_strategy: "品牌服务", financial_metrics: { profitability: "为 realme 销量服务" } },
        key_metrics: { core_metrics: { engagement_rate: "论坛与活动" } }
    },
    meizu_community: {
        title: "魅族社区 (Meizu)",
        subtitle: "魅友与 Flyme",
        dao: "魅友交流。Flyme、产品与反馈，小而美与情怀；吉利收购后品牌与车机协同。",
        gov: "官方与版主，内测与规则。",
        space: "论坛 + 动态 + 内测。",
        econ: "为魅族品牌服务。",
        risk: "份额与吉利收购。",
        atomic_unit: "帖子/动态/内测",
        distribution: "论坛 50% + 动态 35% + 内测 15%",
        death_risk: "品牌与转型",
        tags: ["#魅族", "#Flyme", "#魅友"],
        scores: [55, 48, 52, 48, 50],
        timeline: [
            { year: "2003", event: "魅族成立" },
            { year: "2015", event: "魅族论坛" },
            { year: "2022", event: "吉利收购" }
        ],
        key_decisions: [
            "魅友与情怀，小而美心智",
            "Flyme，系统与体验",
            "吉利与车机，转型与协同"
        ],
        user_metrics: { monthly_active_users: "魅友与魅族用户", user_demographics: { age_range: "情怀与极客", region: "中国" }, usage_patterns: { content_creation_rate: "讨论与内测", engagement_rate: "论坛与动态" } },
        business_model: { revenue_streams: [], monetization_strategy: "品牌服务", financial_metrics: { profitability: "魅族/吉利体系内" } },
        key_metrics: { core_metrics: { engagement_rate: "论坛与内测" } }
    },
    bean: {
        title: "豌豆公主 (Bean)",
        subtitle: "日淘与跨境",
        dao: "买日本好物。日系美妆母婴、直邮与保税，日淘垂直；日本供应链与选品。",
        gov: "自营与买手，供应链与品控。",
        space: "首页 + 分类 + 商品 + 订单。",
        econ: "商品毛利、会员。",
        risk: "与考拉、天猫国际、抖音竞争。",
        atomic_unit: "商品/品类/订单",
        distribution: "推荐 50% + 分类 40% + 搜索 10%",
        death_risk: "规模与供应链",
        tags: ["#豌豆公主", "#日淘", "#跨境"],
        scores: [50, 50, 50, 55, 52],
        timeline: [
            { year: "2015", event: "豌豆公主成立" },
            { year: "2018", event: "融资与扩张" },
            { year: "2022", event: "聚焦与收缩" }
        ],
        key_decisions: [
            "日淘垂直，日本好物心智",
            "美妆与母婴，核心品类",
            "直邮与保税，供应链与体验"
        ],
        user_metrics: { monthly_active_users: "日淘用户（垂直规模）", user_demographics: { age_range: "美妆与母婴、一二线女性", region: "中国" }, usage_patterns: { content_creation_rate: "评价与晒单", engagement_rate: "复购与会员、客单" } },
        business_model: { revenue_streams: [{ type: "商品毛利", description: "自营与买手、直邮与保税" }, { type: "会员", description: "增值与免邮" }], monetization_strategy: "商品 + 会员", financial_metrics: { profitability: "规模与供应链压力、收缩与聚焦" } },
        key_metrics: { core_metrics: { gmv: "日淘 GMV", engagement_rate: "复购率" } }
    },
    huajiao: {
        title: "花椒直播 (Huajiao)",
        subtitle: "秀场与娱乐直播",
        dao: "看直播与打赏。秀场、才艺与社交，360 系与周鸿祎；与六间房合并后花房集团上市。",
        gov: "平台与公会、内容审核。",
        space: "直播 + 关注 + 发现 + 我的。",
        econ: "打赏、广告、会员。",
        risk: "与抖音、快手、陌陌竞争。",
        atomic_unit: "直播/主播/礼物",
        distribution: "推荐 55% + 关注 30% + 发现 15%",
        death_risk: "份额与转型",
        tags: ["#花椒", "#秀场", "#360"],
        scores: [50, 50, 50, 58, 52],
        timeline: [
            { year: "2015", event: "花椒上线" },
            { year: "2017", event: "与六间房" },
            { year: "2022", event: "花房上市" }
        ],
        key_decisions: [
            "秀场与娱乐，才艺与打赏",
            "360 系，周鸿祎与资源",
            "花房集团，合并与上市"
        ],
        user_metrics: { monthly_active_users: "秀场与娱乐用户", user_demographics: { age_range: "娱乐直播", region: "中国" }, usage_patterns: { content_creation_rate: "主播与公会", engagement_rate: "观看与打赏" } },
        business_model: { revenue_streams: [{ type: "打赏", description: "虚拟礼物" }, { type: "广告与会员", description: "品牌与增值" }], monetization_strategy: "打赏为主", financial_metrics: { profitability: "花房集团上市" } },
        key_metrics: { core_metrics: { engagement_rate: "直播与打赏" } }
    },
    yizhibo: {
        title: "一直播 (Yizhibo)",
        subtitle: "微博系直播",
        dao: "看直播与互动。明星与网红、微博协同，娱乐与社交；一下科技旗下与微博深度打通。",
        gov: "平台与公会、微博协同。",
        space: "直播 + 关注 + 发现。",
        econ: "打赏、广告。",
        risk: "与抖音、快手、微博内竞争。",
        atomic_unit: "直播/主播/礼物",
        distribution: "推荐 50% + 关注 40% + 发现 10%",
        death_risk: "微博与份额",
        tags: ["#一直播", "#直播", "#微博"],
        scores: [48, 52, 48, 55, 50],
        timeline: [
            { year: "2015", event: "一下科技" },
            { year: "2016", event: "一直播与微博" },
            { year: "2022", event: "微博生态" }
        ],
        key_decisions: [
            "微博协同，流量与明星",
            "明星与网红，娱乐直播",
            "娱乐直播，份额被短视频挤压"
        ],
        user_metrics: { monthly_active_users: "微博与娱乐用户", user_demographics: { age_range: "娱乐与明星粉丝", region: "中国" }, usage_patterns: { content_creation_rate: "主播与明星", engagement_rate: "观看与打赏" } },
        business_model: { revenue_streams: [{ type: "打赏", description: "虚拟礼物" }, { type: "广告", description: "品牌" }], monetization_strategy: "打赏 + 广告", financial_metrics: { profitability: "微博生态内" } },
        key_metrics: { core_metrics: { engagement_rate: "直播与微博" } }
    },
    meituan_maicai: {
        title: "美团买菜 (Meituan Maicai)",
        subtitle: "前置仓生鲜",
        dao: "30 分钟送菜。前置仓、即时达与品控，美团履约；与闪购协同补即时零售。",
        gov: "自营与供应链。",
        space: "商品 + 分类 + 购物车 + 订单。",
        econ: "商品毛利、会员。",
        risk: "与叮咚、盒马、拼多多竞争。",
        atomic_unit: "商品/订单/前置仓",
        distribution: "推荐 55% + 分类 40% + 搜索 5%",
        death_risk: "盈利与规模",
        tags: ["#美团买菜", "#生鲜", "#美团"],
        scores: [50, 58, 52, 68, 60],
        timeline: [
            { year: "2019", event: "美团买菜上线" },
            { year: "2021", event: "城市扩张" },
            { year: "2022", event: "与闪购" }
        ],
        key_decisions: [
            "美团履约，骑手与前置仓",
            "前置仓与即时，30 分钟达",
            "与闪购协同，即时零售矩阵"
        ],
        user_metrics: { monthly_active_users: "生鲜与即时用户（与美团 App 协同）", user_demographics: { age_range: "家庭与白领、25–45 岁", region: "中国、覆盖城市" }, usage_patterns: { content_creation_rate: "复购频次", engagement_rate: "日活、订单量与客单价" } },
        business_model: { revenue_streams: [{ type: "商品毛利", description: "生鲜、定价与损耗" }, { type: "会员", description: "增值与免配送" }], monetization_strategy: "商品 + 会员", financial_metrics: { profitability: "与美团整体协同、UE 与规模平衡" } },
        key_metrics: { core_metrics: { order_volume: "日订单量", engagement_rate: "复购率", ue: "单笔经济模型" } }
    },
    pinduoduo_maicai: {
        title: "多多买菜 (Duoduomaicai)",
        subtitle: "社区团购",
        dao: "次日达便宜。团长与自提、低价与下沉，社区团购；拼多多供应链与用户心智延伸。",
        gov: "平台与团长、供应链。",
        space: "商品 + 团长 + 订单 + 我的。",
        econ: "商品毛利、团长佣金。",
        risk: "与美团优选、兴盛、淘菜菜竞争。",
        atomic_unit: "商品/团长/订单",
        distribution: "推荐 50% + 团长 35% + 订单 15%",
        death_risk: "监管与盈利",
        tags: ["#多多买菜", "#社区团购", "#拼多多"],
        scores: [52, 58, 52, 72, 62],
        timeline: [
            { year: "2020", event: "多多买菜上线" },
            { year: "2021", event: "全国扩张" },
            { year: "2022", event: "监管与盈利" }
        ],
        key_decisions: [
            "社区团购与下沉，低价心智",
            "拼多多供应链，成本与效率",
            "团长与自提，履约与获客"
        ],
        user_metrics: { monthly_active_users: "与拼多多协同（拼多多财报披露 GMV/用户）", user_demographics: { age_range: "下沉与家庭、三四线占比高", region: "中国" }, usage_patterns: { content_creation_rate: "复购与频次", engagement_rate: "下单与自提、团长活跃" } },
        business_model: { revenue_streams: [{ type: "商品毛利", description: "生鲜日百、供应链效率" }, { type: "团长佣金", description: "履约分成、约 10% 左右" }], monetization_strategy: "商品毛利为主", financial_metrics: { profitability: "监管后盈利探索、单省/单城 UE" } },
        key_metrics: { core_metrics: { gmv: "社区团购 GMV", engagement_rate: "复购与团长数", leader_count: "团长规模" } }
    },
    meituan_youxuan: {
        title: "美团优选 (Meituan Youxuan)",
        subtitle: "社区团购",
        dao: "今日下单明日达。团长与自提、生鲜与日百，美团履约；地推与本地生活协同。",
        gov: "平台与团长、供应链。",
        space: "商品 + 团长 + 订单 + 我的。",
        econ: "商品毛利、团长佣金。",
        risk: "与多多买菜、兴盛、淘菜菜竞争。",
        atomic_unit: "商品/团长/订单",
        distribution: "推荐 50% + 团长 35% + 订单 15%",
        death_risk: "监管与盈利",
        tags: ["#美团优选", "#社区团购", "#美团"],
        scores: [52, 58, 52, 70, 60],
        timeline: [
            { year: "2020", event: "美团优选上线" },
            { year: "2021", event: "全国扩张" },
            { year: "2022", event: "收缩与盈利" }
        ],
        key_decisions: [
            "社区团购，次日达与团长",
            "美团地推与履约，供给与体验",
            "与买菜协同，即时与次日矩阵"
        ],
        user_metrics: { monthly_active_users: "与美团协同（美团财报披露）", user_demographics: { age_range: "下沉与家庭、三四线", region: "中国" }, usage_patterns: { content_creation_rate: "复购频次", engagement_rate: "下单与自提、团长履约" } },
        business_model: { revenue_streams: [{ type: "商品毛利", description: "生鲜日百" }, { type: "团长佣金", description: "履约分成" }], monetization_strategy: "商品毛利为主", financial_metrics: { profitability: "监管后收缩与盈利、减亏" } },
        key_metrics: { core_metrics: { gmv: "社区团购 GMV", engagement_rate: "团长与复购", leader_count: "团长数" } }
    },
    taocaicai: {
        title: "淘菜菜 (Taocaicai)",
        subtitle: "社区团购",
        dao: "阿里系社区团购。团长与自提、MMC 与盒马协同，下沉与生鲜；阿里供应链与流量。",
        gov: "平台与团长、阿里供应链。",
        space: "商品 + 团长 + 订单。",
        econ: "商品毛利、团长佣金。",
        risk: "与多多、美团优选竞争。",
        atomic_unit: "商品/团长/订单",
        distribution: "推荐 50% + 团长 40% + 订单 10%",
        death_risk: "份额与阿里",
        tags: ["#淘菜菜", "#社区团购", "#阿里"],
        scores: [50, 55, 50, 65, 55],
        timeline: [
            { year: "2020", event: "盒马集市" },
            { year: "2021", event: "更名淘菜菜" },
            { year: "2022", event: "与阿里" }
        ],
        key_decisions: [
            "阿里 MMC，社区团购战略",
            "社区团购，团长与自提",
            "与盒马协同，供应链与品类"
        ],
        user_metrics: { monthly_active_users: "阿里与下沉用户", user_demographics: { age_range: "下沉与家庭", region: "中国" }, usage_patterns: { content_creation_rate: "复购", engagement_rate: "下单与自提" } },
        business_model: { revenue_streams: [{ type: "商品毛利", description: "生鲜日百" }, { type: "团长佣金", description: "履约" }], monetization_strategy: "商品毛利为主", financial_metrics: { profitability: "阿里体系内份额压力" } },
        key_metrics: { core_metrics: { gmv: "社区团购", engagement_rate: "团长与复购" } }
    },
    jd_daojia: {
        title: "京东到家 (JD Daojia)",
        subtitle: "即时零售",
        dao: "1 小时达。商超与药店、京东履约，即时零售；达达配送与京东入口协同。",
        gov: "平台与商家、达达履约。",
        space: "商品 + 门店 + 订单 + 我的。",
        econ: "抽佣、配送费、广告。",
        risk: "与美团闪购、饿了么、抖音竞争。",
        atomic_unit: "商品/门店/订单",
        distribution: "推荐 50% + 分类 35% + 订单 15%",
        death_risk: "份额与达达",
        tags: ["#京东到家", "#即时零售", "#京东"],
        scores: [50, 55, 50, 72, 62],
        timeline: [
            { year: "2015", event: "京东到家成立" },
            { year: "2016", event: "与达达合并" },
            { year: "2022", event: "即时零售" }
        ],
        key_decisions: [
            "京东与达达，履约与入口",
            "商超与药店，核心品类",
            "1 小时达，即时零售心智"
        ],
        user_metrics: { monthly_active_users: "与京东协同（达达/京东披露订单与 GMV）", user_demographics: { age_range: "家庭与即时需求、25–45 岁", region: "中国" }, usage_patterns: { content_creation_rate: "复购频次", engagement_rate: "下单与 1 小时达履约" } },
        business_model: { revenue_streams: [{ type: "抽佣", description: "平台、按品类" }, { type: "配送费与广告", description: "达达履约与品牌" }], monetization_strategy: "抽佣 + 配送费", financial_metrics: { profitability: "达达上市与京东协同、单笔 UE" } },
        key_metrics: { core_metrics: { gmv: "即时零售 GMV", engagement_rate: "复购", fulfillment_sla: "1 小时达" } }
    },
    meituan_instant: {
        title: "美团闪购 (Meituan Flash)",
        subtitle: "即时零售",
        dao: "30 分钟万物到家。商超与外卖骑手、万物即时达，美团履约；骑手复用与本地生活协同。",
        gov: "平台与商家、骑手履约。",
        space: "商品 + 门店 + 订单。",
        econ: "抽佣、配送费、广告。",
        risk: "与京东到家、饿了么、抖音竞争。",
        atomic_unit: "商品/门店/订单",
        distribution: "推荐 55% + 分类 35% + 订单 10%",
        death_risk: "竞争与利润",
        tags: ["#美团闪购", "#即时零售", "#美团"],
        scores: [52, 58, 52, 75, 65],
        timeline: [
            { year: "2018", event: "美团闪购" },
            { year: "2020", event: "万物到家" },
            { year: "2022", event: "与外卖协同" }
        ],
        key_decisions: [
            "外卖骑手复用，成本与时效",
            "万物到家，品类拓展",
            "美团生态，即时零售第一梯队"
        ],
        user_metrics: { monthly_active_users: "与美团协同（美团财报即时零售 GMV）", user_demographics: { age_range: "即时需求、全年龄段", region: "中国" }, usage_patterns: { content_creation_rate: "复购频次", engagement_rate: "下单与 30 分钟达履约" } },
        business_model: { revenue_streams: [{ type: "抽佣", description: "平台、按品类约 5–15%" }, { type: "配送费与广告", description: "履约与品牌" }], monetization_strategy: "抽佣 + 配送费", financial_metrics: { profitability: "美团核心增长业务、高增速" } },
        key_metrics: { core_metrics: { gmv: "即时零售 GMV", engagement_rate: "复购", fulfillment_sla: "30 分钟达占比" } }
    },
    quickdog: {
        title: "快狗打车 (Kuaigou)",
        subtitle: "同城货运",
        dao: "拉货就找快狗。同城货运、搬家与拉货，司机与用户匹配；58 系、港股上市。",
        gov: "平台规则与司机管理。",
        space: "下单 + 订单 + 司机。",
        econ: "抽佣、会员、增值。",
        risk: "与货拉拉、满帮、滴滴货运竞争。",
        atomic_unit: "订单/司机/车型",
        distribution: "下单 85% + 订单 15%",
        death_risk: "份额与盈利",
        tags: ["#快狗", "#同城货运", "#58"],
        scores: [48, 52, 48, 58, 52],
        timeline: [
            { year: "2014", event: "58 速运" },
            { year: "2018", event: "更名快狗" },
            { year: "2022", event: "港股上市" }
        ],
        key_decisions: [
            "58 系，流量与品牌",
            "同城货运，搬家与拉货",
            "与货拉拉竞争，份额与盈利"
        ],
        user_metrics: { monthly_active_users: "货运用户与司机", user_demographics: { age_range: "商户与 C 端", region: "中国" }, usage_patterns: { content_creation_rate: "下单", engagement_rate: "订单与复购" } },
        business_model: { revenue_streams: [{ type: "抽佣", description: "订单" }, { type: "会员与增值", description: "司机端" }], monetization_strategy: "抽佣 + 会员", financial_metrics: { profitability: "港股上市、份额压力" } },
        key_metrics: { core_metrics: { order_volume: "订单量", engagement_rate: "司机与用户" } }
    },
    didi_freight: {
        title: "滴滴货运 (Didi Freight)",
        subtitle: "同城与跨城货运",
        dao: "拉货搬家。同城与跨城、司机与货主，滴滴出行延伸；入口与品牌协同。",
        gov: "平台规则与司机管理。",
        space: "下单 + 订单 + 司机。",
        econ: "抽佣、会员。",
        risk: "与货拉拉、满帮、快狗竞争。",
        atomic_unit: "订单/司机/车型",
        distribution: "下单 80% + 订单 20%",
        death_risk: "份额与滴滴",
        tags: ["#滴滴货运", "#货运", "#滴滴"],
        scores: [50, 55, 50, 62, 55],
        timeline: [
            { year: "2020", event: "滴滴货运上线" },
            { year: "2021", event: "多城扩张" },
            { year: "2022", event: "与滴滴" }
        ],
        key_decisions: [
            "滴滴出行延伸，入口复用",
            "同城与跨城，双场景",
            "司机与货主，供需匹配"
        ],
        user_metrics: { monthly_active_users: "与滴滴协同", user_demographics: { age_range: "商户与 C 端", region: "中国" }, usage_patterns: { content_creation_rate: "下单", engagement_rate: "订单与复购" } },
        business_model: { revenue_streams: [{ type: "抽佣", description: "订单" }, { type: "会员", description: "司机端" }], monetization_strategy: "抽佣为主", financial_metrics: { profitability: "滴滴体系内" } },
        key_metrics: { core_metrics: { order_volume: "订单量", engagement_rate: "司机与用户" } }
    },
    mobike: {
        title: "摩拜单车 (Mobike)",
        subtitle: "共享单车（已并入美团）",
        dao: "扫码骑车。无桩共享单车、押金与月卡，绿色出行；后被美团收购、更名美团单车。",
        gov: "平台与车辆运营。",
        space: "地图 + 扫码 + 订单 + 我的。",
        econ: "骑行费、月卡、广告。",
        risk: "与 ofo、哈啰、青桔竞争。",
        atomic_unit: "车辆/订单/行程",
        distribution: "地图 70% + 订单 25% + 其他 5%",
        death_risk: "被美团收购与整合",
        tags: ["#摩拜", "#共享单车", "#美团"],
        scores: [52, 55, 52, 62, 55],
        timeline: [
            { year: "2016", event: "摩拜成立" },
            { year: "2018", event: "被美团收购" },
            { year: "2020", event: "更名美团单车" }
        ],
        key_decisions: [
            "无桩与智能锁，体验与成本",
            "美团收购，本地生活协同",
            "品牌整合，美团单车"
        ],
        user_metrics: { monthly_active_users: "骑行用户（已并入美团单车）", user_demographics: { age_range: "短途出行", region: "中国" }, usage_patterns: { content_creation_rate: "骑行", engagement_rate: "日活与频次" } },
        business_model: { revenue_streams: [{ type: "骑行费", description: "按次/月卡" }, { type: "广告", description: "车身与 App" }], monetization_strategy: "骑行费 + 月卡", financial_metrics: { profitability: "并入美团后战略协同" } },
        key_metrics: { core_metrics: { ride_volume: "骑行量", engagement_rate: "日活" } }
    },
    ofo: {
        title: "ofo (Ofo)",
        subtitle: "共享单车（已衰落）",
        dao: "骑时可以更轻松。无桩共享单车、校园起家，押金与扩张；押金危机与供应链拖垮。",
        gov: "平台与车辆运营。",
        space: "地图 + 扫码 + 订单。",
        econ: "骑行费、押金、广告。",
        risk: "与摩拜、哈啰竞争与押金危机。",
        atomic_unit: "车辆/订单/行程",
        distribution: "地图 75% + 订单 25%",
        death_risk: "押金与倒闭",
        tags: ["#ofo", "#共享单车", "#衰落"],
        scores: [48, 48, 48, 45, 40],
        timeline: [
            { year: "2015", event: "ofo 成立" },
            { year: "2017", event: "扩张与融资" },
            { year: "2018", event: "押金危机" }
        ],
        key_decisions: [
            "校园与无桩，低成本起量",
            "过度扩张，资金与供应链",
            "押金与供应链，崩盘"
        ],
        user_metrics: { monthly_active_users: "曾千万级（已衰落）", user_demographics: { age_range: "校园与城市", region: "中国" }, usage_patterns: { content_creation_rate: "骑行", engagement_rate: "押金与退押" } },
        business_model: { revenue_streams: [{ type: "骑行费", description: "按次" }, { type: "押金", description: "资金池风险" }], monetization_strategy: "骑行费 + 押金", financial_metrics: { profitability: "押金危机、倒闭" } },
        key_metrics: { core_metrics: { ride_volume: "曾高", failure: "押金与倒闭" } }
    },
    qingju: {
        title: "青桔单车 (Qingju)",
        subtitle: "滴滴系共享单车",
        dao: "滴滴出行两轮。共享单车与电单车、滴滴入口，绿色出行；短途接驳与出行闭环。",
        gov: "滴滴运营与车辆管理。",
        space: "地图 + 扫码 + 订单。",
        econ: "骑行费、月卡。",
        risk: "与哈啰、美团单车竞争。",
        atomic_unit: "车辆/订单/行程",
        distribution: "地图 70% + 订单 30%",
        death_risk: "盈利与监管",
        tags: ["#青桔", "#共享单车", "#滴滴"],
        scores: [50, 55, 50, 58, 52],
        timeline: [
            { year: "2018", event: "青桔上线" },
            { year: "2020", event: "电单车" },
            { year: "2022", event: "与滴滴" }
        ],
        key_decisions: [
            "滴滴两轮，入口复用",
            "单车与电单车，双品类",
            "入口与出行，短途接驳"
        ],
        user_metrics: { monthly_active_users: "与滴滴协同", user_demographics: { age_range: "短途出行", region: "中国" }, usage_patterns: { content_creation_rate: "骑行", engagement_rate: "日活与频次" } },
        business_model: { revenue_streams: [{ type: "骑行费", description: "按次/月卡" }], monetization_strategy: "骑行费 + 月卡", financial_metrics: { profitability: "滴滴体系内、盈利压力" } },
        key_metrics: { core_metrics: { ride_volume: "骑行量", engagement_rate: "日活" } }
    },
    meituan_bike: {
        title: "美团单车 (Meituan Bike)",
        subtitle: "美团系共享单车",
        dao: "骑车用美团。原摩拜、美团入口与月卡，出行与本地生活；为美团导流与协同。",
        gov: "美团运营与车辆管理。",
        space: "地图 + 扫码 + 订单。",
        econ: "骑行费、月卡、为美团导流。",
        risk: "与哈啰、青桔竞争。",
        atomic_unit: "车辆/订单/行程",
        distribution: "地图 70% + 订单 30%",
        death_risk: "盈利与战略",
        tags: ["#美团单车", "#共享单车", "#美团"],
        scores: [50, 55, 50, 62, 55],
        timeline: [
            { year: "2020", event: "摩拜更名美团单车" },
            { year: "2021", event: "与美团 App" },
            { year: "2022", event: "骑行与生活" }
        ],
        key_decisions: [
            "摩拜整合，品牌统一",
            "美团入口，流量与月卡",
            "出行与生活，本地生活协同"
        ],
        user_metrics: { monthly_active_users: "与美团协同", user_demographics: { age_range: "短途出行", region: "中国" }, usage_patterns: { content_creation_rate: "骑行", engagement_rate: "日活与导流" } },
        business_model: { revenue_streams: [{ type: "骑行费", description: "按次/月卡" }, { type: "导流", description: "为美团 App" }], monetization_strategy: "骑行费 + 导流", financial_metrics: { profitability: "美团战略协同" } },
        key_metrics: { core_metrics: { ride_volume: "骑行量", engagement_rate: "日活与导流" } }
    },
    dazhong_dianying: {
        title: "大众电影 (Dazhong Dianying)",
        subtitle: "电影资讯与社区",
        dao: "看电影聊电影。资讯、影评与社区，影迷与决策；老牌杂志数字化与票务导流。",
        gov: "编辑与 UGC，版权与审核。",
        space: "资讯 + 影评 + 社区 + 购票。",
        econ: "广告、票务导流。",
        risk: "与猫眼、豆瓣、抖音竞争。",
        atomic_unit: "资讯/影评/帖子",
        distribution: "推荐 50% + 分类 35% + 社区 15%",
        death_risk: "流量与变现",
        tags: ["#大众电影", "#电影", "#影评"],
        scores: [52, 50, 52, 52, 50],
        timeline: [
            { year: "1950", event: "大众电影创刊" },
            { year: "2010", event: "数字化" },
            { year: "2022", event: "与票务" }
        ],
        key_decisions: [
            "影迷与资讯，老牌权威",
            "影评与社区，UGC",
            "票务导流，变现"
        ],
        user_metrics: { monthly_active_users: "影迷用户", user_demographics: { age_range: "电影爱好者", region: "中国" }, usage_patterns: { content_creation_rate: "影评与社区", engagement_rate: "资讯与购票" } },
        business_model: { revenue_streams: [{ type: "广告", description: "品牌" }, { type: "票务导流", description: "CPS" }], monetization_strategy: "广告 + 导流", financial_metrics: { profitability: "流量与变现平衡" } },
        key_metrics: { core_metrics: { mau: "影迷", engagement_rate: "资讯与购票" } }
    },
    maoyan_piaoxing: {
        title: "猫眼娱乐 (Maoyan Entertainment)",
        subtitle: "电影与演出",
        dao: "票务与宣发。电影票、演出与宣发服务，娱乐消费入口；港股上市、腾讯系。",
        gov: "平台与片方、影院合作。",
        space: "电影 + 演出 + 榜单 + 订单。",
        econ: "票务抽佣、宣发、广告。",
        risk: "与淘票票、大麦、抖音竞争。",
        atomic_unit: "电影/演出/订单",
        distribution: "推荐 50% + 搜索 35% + 订单 15%",
        death_risk: "票房与竞争",
        tags: ["#猫眼娱乐", "#票务", "#宣发"],
        scores: [50, 55, 50, 72, 62],
        timeline: [
            { year: "2012", event: "猫眼从美团分拆" },
            { year: "2019", event: "港股上市" },
            { year: "2022", event: "演出与宣发" }
        ],
        key_decisions: [
            "票务与宣发，一体化",
            "腾讯系，流量与数据",
            "电影与演出，双品类"
        ],
        user_metrics: { monthly_active_users: "与猫眼主 App 协同", user_demographics: { age_range: "观影与演出", region: "中国" }, usage_patterns: { content_creation_rate: "评分与评论", engagement_rate: "购票与宣发" } },
        business_model: { revenue_streams: [{ type: "票务抽佣", description: "电影与演出" }, { type: "宣发与广告", description: "片方与品牌" }], monetization_strategy: "票务 + 宣发", financial_metrics: { profitability: "港股上市" } },
        key_metrics: { core_metrics: { gmv: "票务", engagement_rate: "购票与宣发" } }
    },
    nuomi: {
        title: "糯米 (Nuomi)",
        subtitle: "百度系团购（已式微）",
        dao: "团购与到店。百度入口、团购与到店，本地生活；与美团竞争式微、战略收缩。",
        gov: "平台与商户。",
        space: "团购 + 商户 + 订单。",
        econ: "团购抽佣、广告。",
        risk: "与美团、大众点评竞争。",
        atomic_unit: "团购/商户/订单",
        distribution: "推荐 50% + 搜索 40% + 订单 10%",
        death_risk: "百度战略与份额",
        tags: ["#糯米", "#团购", "#百度"],
        scores: [45, 50, 45, 55, 48],
        timeline: [
            { year: "2010", event: "糯米成立" },
            { year: "2014", event: "被百度收购" },
            { year: "2017", event: "与美团竞争式微" }
        ],
        key_decisions: [
            "百度收购，入口与资金",
            "团购与到店，本地生活",
            "战略收缩，份额流失"
        ],
        user_metrics: { monthly_active_users: "曾规模（已式微）", user_demographics: { age_range: "本地生活", region: "中国" }, usage_patterns: { content_creation_rate: "团购", engagement_rate: "到店" } },
        business_model: { revenue_streams: [{ type: "团购抽佣", description: "到店" }, { type: "广告", description: "商户" }], monetization_strategy: "抽佣 + 广告", financial_metrics: { profitability: "百度战略收缩" } },
        key_metrics: { core_metrics: { market_share: "式微", engagement_rate: "到店" } }
    },
    didi_bike: {
        title: "滴滴青桔 (Didi Qingju)",
        subtitle: "滴滴两轮",
        dao: "滴滴出行两轮补充。单车与电单车、滴滴入口，短途出行；与青桔品牌统一。",
        gov: "滴滴运营。",
        space: "地图 + 扫码 + 订单。",
        econ: "骑行费、月卡。",
        risk: "与哈啰、美团单车竞争。",
        atomic_unit: "车辆/订单/行程",
        distribution: "地图 75% + 订单 25%",
        death_risk: "盈利与战略",
        tags: ["#青桔", "#滴滴", "#两轮"],
        scores: [48, 55, 48, 55, 50],
        timeline: [
            { year: "2018", event: "青桔上线" },
            { year: "2020", event: "电单车扩张" },
            { year: "2022", event: "与滴滴" }
        ],
        key_decisions: [
            "滴滴两轮，出行闭环",
            "短途与接驳，场景",
            "入口复用，滴滴 App"
        ],
        user_metrics: { monthly_active_users: "与滴滴协同", user_demographics: { age_range: "短途出行", region: "中国" }, usage_patterns: { content_creation_rate: "骑行", engagement_rate: "日活" } },
        business_model: { revenue_streams: [{ type: "骑行费", description: "按次/月卡" }], monetization_strategy: "骑行费 + 月卡", financial_metrics: { profitability: "滴滴体系内" } },
        key_metrics: { core_metrics: { ride_volume: "骑行量", engagement_rate: "日活" } }
    },
    wph: {
        title: "网易严选 (WPH)",
        subtitle: "严选与品质（同 yanxuan）",
        dao: "好的生活没那么贵。ODM 严选、品质与性价比，自营生活；网易流量与品牌。",
        gov: "自营选品与供应链。",
        space: "首页 + 分类 + 商品 + 订单。",
        econ: "自营毛利、会员。",
        risk: "与小米有品、淘宝心选竞争。",
        atomic_unit: "商品/品类/订单",
        distribution: "推荐 50% + 分类 40% + 搜索 10%",
        death_risk: "规模与利润",
        tags: ["#严选", "#ODM", "#网易"],
        scores: [52, 55, 50, 65, 58],
        timeline: [
            { year: "2016", event: "严选上线" },
            { year: "2018", event: "线下与会员" },
            { year: "2022", event: "网易生态" }
        ],
        key_decisions: [
            "ODM 与品质，性价比心智",
            "网易流量，邮箱与游戏导流",
            "生活品类，自营与会员"
        ],
        user_metrics: { monthly_active_users: "网易与严选用户", user_demographics: { age_range: "品质生活", region: "中国" }, usage_patterns: { content_creation_rate: "复购", engagement_rate: "浏览与下单" } },
        business_model: { revenue_streams: [{ type: "自营毛利", description: "ODM 商品" }, { type: "会员", description: "增值" }], monetization_strategy: "自营 + 会员", financial_metrics: { profitability: "网易生态、规模与利润" } },
        key_metrics: { core_metrics: { gmv: "严选", engagement_rate: "复购" } }
    },
    meituan_jiudian: {
        title: "美团酒店 (Meituan Hotel)",
        subtitle: "酒旅与到店",
        dao: "订酒店与民宿。酒店民宿、与到店协同，本地与出行；间夜量曾第一。",
        gov: "平台与酒店合作。",
        space: "搜索 + 酒店 + 订单 + 攻略。",
        econ: "佣金、广告、会员。",
        risk: "与携程、同程、飞猪竞争。",
        atomic_unit: "酒店/房型/订单",
        distribution: "搜索 50% + 推荐 35% + 订单 15%",
        death_risk: "份额与竞争",
        tags: ["#美团酒店", "#酒旅", "#美团"],
        scores: [50, 55, 50, 72, 62],
        timeline: [
            { year: "2013", event: "美团酒店" },
            { year: "2018", event: "间夜第一" },
            { year: "2022", event: "与到店" }
        ],
        key_decisions: [
            "美团流量，本地与出行",
            "酒店与民宿，供给与价格",
            "与到店协同，酒旅与到店"
        ],
        user_metrics: { monthly_active_users: "与美团协同", user_demographics: { age_range: "本地与出行", region: "中国" }, usage_patterns: { content_creation_rate: "预订", engagement_rate: "间夜与复购" } },
        business_model: { revenue_streams: [{ type: "佣金", description: "酒店与民宿" }, { type: "广告与会员", description: "品牌与增值" }], monetization_strategy: "佣金 + 广告", financial_metrics: { profitability: "美团酒旅收入" } },
        key_metrics: { core_metrics: { room_nights: "间夜", engagement_rate: "预订" } }
    },
    fliggy_jiudian: {
        title: "飞猪酒店 (Fliggy Hotel)",
        subtitle: "阿里系酒旅",
        dao: "订酒店与度假。与飞猪一体、阿里生态，年轻与出境；出境复苏受益。",
        gov: "平台与酒店合作。",
        space: "搜索 + 酒店 + 订单。",
        econ: "佣金、广告、会员。",
        risk: "与携程、美团、同程竞争。",
        atomic_unit: "酒店/房型/订单",
        distribution: "搜索 55% + 推荐 35% + 订单 10%",
        death_risk: "份额与飞猪",
        tags: ["#飞猪酒店", "#酒旅", "#阿里"],
        scores: [50, 52, 50, 68, 58],
        timeline: [
            { year: "2016", event: "飞猪" },
            { year: "2018", event: "酒店与度假" },
            { year: "2022", event: "出境复苏" }
        ],
        key_decisions: [
            "阿里生态，淘系与支付",
            "年轻与出境，定位",
            "与飞猪一体，酒旅品牌"
        ],
        user_metrics: { monthly_active_users: "与飞猪/阿里协同", user_demographics: { age_range: "年轻与出境", region: "中国" }, usage_patterns: { content_creation_rate: "预订", engagement_rate: "酒店与度假" } },
        business_model: { revenue_streams: [{ type: "佣金", description: "酒店与度假" }, { type: "广告与会员", description: "品牌与增值" }], monetization_strategy: "佣金 + 广告", financial_metrics: { profitability: "飞猪/阿里大文娱" } },
        key_metrics: { core_metrics: { gmv: "酒旅", engagement_rate: "预订" } }
    },
    ctrip_jiudian: { title: "携程酒店 (Ctrip Hotel)", subtitle: "携程酒旅", dao: "订酒店与度假。与携程一体、供应链与客服，一站式旅行。", gov: "平台与酒店、供应商。", space: "搜索 + 酒店 + 订单 + 攻略。", econ: "佣金、广告、会员。", risk: "与美团、飞猪、同程竞争。", atomic_unit: "酒店/房型/订单", distribution: "搜索 50% + 推荐 35% + 订单 15%", death_risk: "份额与竞争", tags: ["#携程酒店", "#酒旅", "#携程"], scores: [52, 58, 52, 82, 72], timeline: [{ year: "1999", event: "携程成立" }, { year: "2015", event: "并购去哪儿" }, { year: "2022", event: "复苏" }], key_decisions: ["一站式旅行", "供应链与客服", "酒店与机票"] },
    zhanqi: { title: "战旗直播 (Zhanqi)", subtitle: "游戏直播", dao: "看游戏直播。电竞赛事与主播、弹幕与社区，边锋系。", gov: "平台与公会、内容审核。", space: "直播 + 游戏 + 赛事。", econ: "打赏、广告。", risk: "与虎牙、斗鱼、B 站竞争。", atomic_unit: "直播/主播/礼物", distribution: "推荐 55% + 游戏 35% + 赛事 10%", death_risk: "份额与边锋", tags: ["#战旗", "#游戏直播", "#边锋"], scores: [48, 48, 48, 52, 48], timeline: [{ year: "2014", event: "战旗上线" }, { year: "2017", event: "与 LPL" }, { year: "2022", event: "与虎牙斗鱼" }], key_decisions: ["游戏直播", "边锋与浙报", "赛事版权"] },
    longzhu: { title: "龙珠直播 (Longzhu)", subtitle: "游戏直播（已整合）", dao: "看游戏与娱乐。电竞与秀场、腾讯投资，后与斗鱼整合。", gov: "平台与公会。", space: "直播 + 游戏 + 娱乐。", econ: "打赏、广告。", risk: "与虎牙、斗鱼竞争。", atomic_unit: "直播/主播/礼物", distribution: "推荐 55% + 游戏 40% + 其他 5%", death_risk: "被斗鱼整合", tags: ["#龙珠", "#游戏直播", "#腾讯"], scores: [45, 45, 45, 50, 45], timeline: [{ year: "2015", event: "龙珠成立" }, { year: "2016", event: "腾讯投资" }, { year: "2018", event: "与斗鱼" }], key_decisions: ["游戏与娱乐", "腾讯系", "整合"] },
    bilibili_live: { title: "哔哩哔哩直播 (Bilibili Live)", subtitle: "B 站直播", dao: "看直播与互动。游戏与娱乐、虚拟主播与二创，B 站生态。", gov: "B 站规则与公会、审核。", space: "直播 + 分区 + 关注 + 弹幕。", econ: "打赏、会员、广告。", risk: "与虎牙、斗鱼、抖音竞争。", atomic_unit: "直播/主播/弹幕", distribution: "推荐 50% + 分区 35% + 关注 15%", death_risk: "与主站", tags: ["#B站直播", "#直播", "#B站"], scores: [58, 55, 60, 68, 65], timeline: [{ year: "2014", event: "B 站直播" }, { year: "2019", event: "虚拟主播" }, { year: "2022", event: "与主站" }], key_decisions: ["B 站生态", "虚拟主播与二创", "游戏与娱乐"] },
    douyin_live: { title: "抖音直播 (Douyin Live)", subtitle: "短视频系直播", dao: "看直播与带货。娱乐与电商、明星与达人，抖音生态。", gov: "平台规则与公会、审核。", space: "推荐 + 关注 + 直播 + 同城。", econ: "打赏、电商、广告。", risk: "与快手、B 站、淘宝竞争。", atomic_unit: "直播/主播/短视频", distribution: "推荐 60% + 关注 25% + 同城 15%", death_risk: "与主站", tags: ["#抖音直播", "#直播", "#抖音"], scores: [55, 58, 55, 82, 72], timeline: [{ year: "2016", event: "抖音直播" }, { year: "2020", event: "电商直播" }, { year: "2022", event: "与电商" }], key_decisions: ["短视频与直播", "电商与打赏", "明星与达人"] },
    kuaishou_live: { title: "快手直播 (Kuaishou Live)", subtitle: "老铁与直播", dao: "看老铁直播。娱乐与电商、信任与打赏，快手生态。", gov: "平台与公会、审核。", space: "发现 + 关注 + 直播。", econ: "打赏、电商、广告。", risk: "与抖音、B 站、淘宝竞争。", atomic_unit: "直播/主播/老铁", distribution: "发现 55% + 关注 35% + 直播 10%", death_risk: "与主站", tags: ["#快手直播", "#直播", "#快手"], scores: [58, 55, 58, 75, 68], timeline: [{ year: "2016", event: "快手直播" }, { year: "2019", event: "电商" }, { year: "2022", event: "信任电商" }], key_decisions: ["老铁与信任", "打赏与电商", "快手生态"] },
    tencent_video_live: { title: "腾讯视频直播", subtitle: "长视频系直播", dao: "看直播与互动。娱乐与赛事、腾讯系版权，长视频补充。", gov: "腾讯运营与版权。", space: "视频 + 直播 + 互动。", econ: "打赏、会员、广告。", risk: "与抖音、B 站、虎牙竞争。", atomic_unit: "直播/内容/互动", distribution: "推荐 50% + 直播 35% + 会员 15%", death_risk: "与腾讯视频", tags: ["#腾讯视频直播", "#直播", "#腾讯"], scores: [48, 52, 48, 65, 55], timeline: [{ year: "2016", event: "腾讯视频直播" }, { year: "2020", event: "与赛事" }, { year: "2022", event: "与短视频" }], key_decisions: ["长视频补充", "腾讯版权", "娱乐与赛事"] },
    iqiyi_live: { title: "爱奇艺直播 (iQiyi Live)", subtitle: "爱奇艺系直播", dao: "看直播与互动。娱乐与综艺、爱奇艺生态，长视频补充。", gov: "爱奇艺运营与版权。", space: "视频 + 直播 + 泡泡。", econ: "打赏、会员、广告。", risk: "与抖音、B 站、腾讯竞争。", atomic_unit: "直播/内容/泡泡", distribution: "推荐 50% + 直播 30% + 泡泡 20%", death_risk: "与爱奇艺", tags: ["#爱奇艺直播", "#直播", "#爱奇艺"], scores: [48, 50, 48, 62, 52], timeline: [{ year: "2016", event: "奇秀直播" }, { year: "2019", event: "与爱奇艺" }, { year: "2022", event: "与综艺" }], key_decisions: ["爱奇艺生态", "娱乐与综艺", "泡泡社区"] },
    youku_live: { title: "优酷直播 (Youku Live)", subtitle: "优酷系直播", dao: "看直播与互动。娱乐与赛事、优酷生态，阿里文娱。", gov: "优酷运营与版权。", space: "视频 + 直播 + 互动。", econ: "打赏、会员、广告。", risk: "与抖音、B 站、腾讯竞争。", atomic_unit: "直播/内容/互动", distribution: "推荐 50% + 直播 35% + 其他 15%", death_risk: "与优酷", tags: ["#优酷直播", "#直播", "#优酷"], scores: [45, 48, 45, 58, 50], timeline: [{ year: "2016", event: "优酷直播" }, { year: "2019", event: "与阿里" }, { year: "2022", event: "与文娱" }], key_decisions: ["优酷生态", "阿里文娱", "娱乐与赛事"] },
    zhipu: {
        title: "智谱 (Zhipu)",
        subtitle: "大模型与 AI 应用",
        dao: "AI 赋能。ChatGLM 与开放平台、清言 C 端与 API，国产大模型与生态。",
        gov: "模型与平台规则，API 与合规。清华系背景，开源与商业并行。",
        space: "对话 + API + 应用 + 文档。清言、千帆平台与 GLM 系列模型。",
        econ: "API 收费、企业服务、清言会员与增值。",
        risk: "与百度、阿里、字节大模型竞争；算力与商业化平衡。",
        atomic_unit: "模型/对话/API",
        distribution: "对话 50% + API 35% + 文档 15%",
        death_risk: "算力与商业化、巨头挤压",
        tags: ["#智谱", "#大模型", "#ChatGLM", "#GLM-4", "#清言"],
        scores: [55, 58, 52, 65, 60],
        timeline: [
            { year: "2019", event: "智谱 AI 成立，清华技术团队" },
            { year: "2023", event: "ChatGLM 开源与开放，千帆平台" },
            { year: "2024", event: "GLM-4 发布，清言与多模态" },
            { year: "2024", event: "企业服务与 API 生态拓展" }
        ],
        key_decisions: [
            "开源 ChatGLM 建立开发者信任与生态，再通过 API 与企业版变现",
            "清言 C 端与千帆 B 端双线，覆盖对话、写作与企业场景",
            "GLM 系列持续迭代，长文本与多模态对标国际"
        ],
        user_metrics: {
            monthly_active_users: "数百万（清言 + API 开发者）",
            growth_rate: "高增长",
            user_demographics: { age_range: "开发者与企业、C 端用户", region: "中国为主" },
            usage_patterns: { content_creation_rate: "写作与对话", engagement_rate: "企业 API 占比提升" }
        },
        business_model: {
            revenue_streams: [
                { type: "API", description: "GLM 调用、Token 计费" },
                { type: "企业服务", description: "私有化、定制与方案" },
                { type: "清言会员", description: "C 端增值" }
            ],
            monetization_strategy: "开源获客 + API 与企业 + 清言会员",
            financial_metrics: { profitability: "融资与商业化推进" }
        },
        key_metrics: { core_metrics: { mau: "数百万", engagement_rate: "C 端与 B 端双线" } }
    },
    moonshot: {
        title: "月之暗面 (Moonshot)",
        subtitle: "Kimi 与长文本",
        dao: "长文本与对话。Kimi 长上下文、多模态与应用，C 端出圈与 B 端 API 并进。",
        gov: "模型与产品驱动，API 与规则。杨植麟带队，技术优先。",
        space: "对话 + 应用 + API。长文档理解、联网与多模态。",
        econ: "会员订阅、API、企业合作。",
        risk: "与智谱、百度、阿里、字节竞争；算力与规模投入大。",
        atomic_unit: "对话/长文本/API",
        distribution: "对话 60% + 应用 25% + API 15%",
        death_risk: "算力与规模、巨头跟进长文本",
        tags: ["#月之暗面", "#Kimi", "#长文本", "#多模态", "#杨植麟"],
        scores: [58, 55, 55, 62, 60],
        timeline: [
            { year: "2023", event: "月之暗面成立，Kimi 大模型与产品上线" },
            { year: "2024", event: "长文本能力出圈，百万字上下文受关注" },
            { year: "2024", event: "多轮融资，算力与团队扩张" },
            { year: "2024", event: "API 与企业场景、多模态能力拓展" }
        ],
        key_decisions: [
            "长文本与长上下文作为核心差异化，避开通用对话红海",
            "C 端产品先建立认知与口碑，再推 API 与企业",
            "多模态与联网扩展场景，巩固长文本优势"
        ],
        user_metrics: {
            monthly_active_users: "数千万级（Kimi 应用）",
            growth_rate: "爆发式增长",
            user_demographics: { age_range: "学生、职场与创作者", region: "中国为主" },
            usage_patterns: { content_creation_rate: "长文档与写作", engagement_rate: "长文本场景占比高" }
        },
        business_model: {
            revenue_streams: [
                { type: "会员", description: "Kimi 高级版、长文本与额度" },
                { type: "API", description: "模型调用、企业接入" }
            ],
            monetization_strategy: "免费额度拉新 + 会员与 API 变现",
            financial_metrics: { profitability: "融资驱动，商业化推进" }
        },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "长文本与对话" } }
    },
    minimax_voice: {
        title: "Minimax (MiniMax)",
        subtitle: "AI 语音与多模态",
        dao: "AI 语音与创作。语音合成、对话与多模态，C 端与 B 端，声线与情感。",
        gov: "模型与 API，合规与规则。",
        space: "语音 + 对话 + API + 应用。",
        econ: "API、会员、企业。",
        risk: "与字节、百度、阿里竞争。",
        atomic_unit: "语音/对话/API",
        distribution: "语音 45% + 对话 35% + API 20%",
        death_risk: "商业化与竞争",
        tags: ["#Minimax", "#AI语音", "#多模态"],
        scores: [55, 55, 52, 62, 58],
        timeline: [
            { year: "2021", event: "MiniMax 成立" },
            { year: "2023", event: "语音与对话" },
            { year: "2024", event: "多模态与融资" }
        ],
        key_decisions: [
            "语音与多模态，差异化于纯文本大模型",
            "C 端应用，海螺 AI 等产品",
            "B 端 API，企业与合作"
        ],
        user_metrics: { monthly_active_users: "C 端与 B 端", user_demographics: { age_range: "泛用户", region: "中国" }, usage_patterns: { content_creation_rate: "语音与对话", engagement_rate: "创作与调用" } },
        business_model: { revenue_streams: [{ type: "API", description: "按量计费" }, { type: "会员与企业", description: "增值与定制" }], monetization_strategy: "API + 会员", financial_metrics: { profitability: "融资与商业化探索" } },
        key_metrics: { core_metrics: { api_calls: "增长", engagement_rate: "语音与多模态" } }
    },
    zhipu_app: {
        title: "智谱清言 (Zhipu App)",
        subtitle: "智谱 C 端应用",
        dao: "对话与创作。基于 ChatGLM 的 C 端应用、写作与助手，免费与会员，智谱模型驱动。",
        gov: "智谱模型与规则。",
        space: "对话 + 创作 + 历史。",
        econ: "会员、增值。",
        risk: "与 Kimi、文心、通义竞争。",
        atomic_unit: "对话/创作/历史",
        distribution: "对话 70% + 创作 20% + 其他 10%",
        death_risk: "与主模型",
        tags: ["#智谱清言", "#ChatGLM", "#C端"],
        scores: [55, 55, 52, 58, 55],
        timeline: [
            { year: "2023", event: "清言上线" },
            { year: "2024", event: "与 GLM-4" },
            { year: "2024", event: "会员与生态" }
        ],
        key_decisions: [
            "C 端应用，清言作为主入口",
            "智谱模型，ChatGLM/GLM-4 能力",
            "写作与助手，场景化与会员"
        ],
        user_metrics: { monthly_active_users: "C 端用户", user_demographics: { age_range: "泛用户", region: "中国" }, usage_patterns: { content_creation_rate: "对话与写作", engagement_rate: "创作与助手" } },
        business_model: { revenue_streams: [{ type: "会员", description: "增值与额度" }], monetization_strategy: "会员", financial_metrics: { profitability: "与智谱整体商业化" } },
        key_metrics: { core_metrics: { mau: "C 端", engagement_rate: "对话与创作" } }
    },
    coze_cn: {
        title: "Coze 中国 (Coze)",
        subtitle: "AI Bot 与工作流",
        dao: "搭 Bot 与工作流。扣子、工作流与插件，人人可搭 AI 应用，与豆包模型深度整合。",
        gov: "平台规则与模型。字节系产品，规则透明、插件与工作流开放。",
        space: "Bot + 工作流 + 插件 + 发现。从对话 Bot 到多步工作流与 RAG。",
        econ: "API 计费、会员增值、企业版。与豆包 API 协同。",
        risk: "与 Dify、FastGPT、LangChain 竞争；依赖字节生态与豆包能力。",
        atomic_unit: "Bot/工作流/插件",
        distribution: "Bot 50% + 工作流 30% + 发现 20%",
        death_risk: "与字节战略与国产 LLM 竞争",
        tags: ["#Coze", "#扣子", "#Bot", "#工作流", "#字节"],
        scores: [58, 55, 55, 62, 60],
        timeline: [
            { year: "2023", event: "Coze 海外版上线，字节推出 AI Bot 搭建平台" },
            { year: "2024", event: "扣子（Coze 中国）上线，与豆包、火山引擎整合" },
            { year: "2024", event: "工作流与插件生态开放，支持多模型与 RAG" },
            { year: "2024", event: "与抖音、飞书等场景打通，企业版与 API 商业化" }
        ],
        key_decisions: [
            "Bot 优先、人人可搭，降低 AI 应用开发门槛，与 Dify 等形成差异化",
            "与豆包模型与字节生态深度整合，获取场景与流量优势",
            "工作流与插件扩展能力，从单轮对话到多步编排与知识库 RAG"
        ],
        user_metrics: {
            monthly_active_users: "数百万（开发者与 C 端）",
            daily_active_users: "数十万",
            growth_rate: "高增长",
            user_demographics: { age_range: "开发者与创作者为主", region: "中国为主" },
            usage_patterns: { content_creation_rate: "Bot 与工作流创建量增长快", engagement_rate: "企业场景占比提升" }
        },
        business_model: {
            revenue_streams: [
                { type: "API 计费", description: "豆包等模型调用、Token 计费" },
                { type: "会员与增值", description: "高级工作流、插件与额度" },
                { type: "企业版", description: "私有部署、合规与定制" }
            ],
            monetization_strategy: "免费额度拉新 + API 与会员变现 + 企业版",
            financial_metrics: { profitability: "依托字节，商业化推进中" }
        },
        key_metrics: {
            core_metrics: { dau: "数十万", mau: "数百万", engagement_rate: "开发者与企业双线" }
        }
    },
    dify: {
        title: "Dify (Dify)",
        subtitle: "LLM 应用开发平台",
        dao: "搭 AI 应用。工作流、Agent 与 RAG，开源与云服务一体，开发者与企业双线。",
        gov: "开源社区与平台规则。Apache 2.0，云服务与企业版商业化。",
        space: "应用 + 工作流 + 数据集 + API。从 Prompt 到多步编排与知识库。",
        econ: "云服务订阅、企业版私有化、开源免费。",
        risk: "与 Coze、FastGPT、LangChain 竞争；开源与商业化平衡。",
        atomic_unit: "应用/工作流/Agent",
        distribution: "应用 45% + 工作流 35% + 数据集 20%",
        death_risk: "商业化与开源可持续性",
        tags: ["#Dify", "#LLM", "#开源", "#RAG", "#Agent"],
        scores: [58, 55, 55, 58, 58],
        timeline: [
            { year: "2023", event: "Dify 开源发布，工作流与 RAG 能力受关注" },
            { year: "2024", event: "云服务 Dify.ai 上线，海外与国内双区" },
            { year: "2024", event: "Agent 与多模型支持强化，企业版推出" },
            { year: "2024", event: "与 LangChain、LlamaIndex 等生态对接" }
        ],
        key_decisions: [
            "开源优先建立开发者信任与生态，再通过云与企业版变现",
            "工作流与 Agent 编排能力为核心差异化，降低从 Prompt 到应用的鸿沟",
            "RAG 与数据集内置，知识库与检索成为一等公民"
        ],
        user_metrics: {
            monthly_active_users: "数十万（开发者与团队）",
            growth_rate: "开源星标与部署量高增长",
            user_demographics: { age_range: "开发者与技术团队", region: "全球，中国与海外并重" },
            usage_patterns: { content_creation_rate: "应用与工作流创建量大", engagement_rate: "企业自建与云订阅双线" }
        },
        business_model: {
            revenue_streams: [
                { type: "云服务", description: "Dify Cloud 订阅、算力与托管" },
                { type: "企业版", description: "私有部署、SLA 与支持" },
                { type: "开源", description: "社区版免费，导流与品牌" }
            ],
            monetization_strategy: "开源获客 + 云服务与企业版变现",
            financial_metrics: { profitability: "商业化早期，云与企业版推进" }
        },
        key_metrics: {
            core_metrics: { mau: "数十万", engagement_rate: "开发者与团队为主" }
        }
    },
    fastgpt: {
        title: "FastGPT (FastGPT)",
        subtitle: "知识库与对话",
        dao: "用知识库搭对话。RAG、工作流与 API，国产 LLM 应用，知识库为一等公民。",
        gov: "开源与平台规则。国产团队主导，与国产大模型深度适配。",
        space: "应用 + 知识库 + 工作流。从文档上传到问答与 API 调用。",
        econ: "云服务订阅、开源免费。",
        risk: "与 Dify、Coze、LangChain 竞争；商业化与开源平衡。",
        atomic_unit: "应用/知识库/对话",
        distribution: "应用 50% + 知识库 35% + 工作流 15%",
        death_risk: "商业化与国产模型生态",
        tags: ["#FastGPT", "#RAG", "#知识库", "#国产", "#开源"],
        scores: [55, 52, 52, 55, 52],
        timeline: [
            { year: "2023", event: "FastGPT 开源，知识库问答与 RAG 受关注" },
            { year: "2024", event: "知识库与多轮对话、工作流能力强化" },
            { year: "2024", event: "与文心、通义、智谱等国产模型深度对接" },
            { year: "2024", event: "云服务与私有化部署双线" }
        ],
        key_decisions: [
            "知识库与 RAG 为核心场景，与纯工作流平台形成差异化",
            "国产模型优先适配，满足合规与数据本地化需求",
            "开源获客、云服务与企业版变现"
        ],
        user_metrics: {
            monthly_active_users: "数十万（企业与开发者）",
            user_demographics: { age_range: "开发者与企业", region: "中国为主" },
            usage_patterns: { content_creation_rate: "知识库与应用创建", engagement_rate: "企业自建与云订阅" }
        },
        business_model: {
            revenue_streams: [
                { type: "云服务", description: "托管与算力订阅" },
                { type: "开源", description: "社区版免费" }
            ],
            monetization_strategy: "开源 + 云服务与企业需求变现",
            financial_metrics: { profitability: "商业化推进中" }
        },
        key_metrics: { core_metrics: { mau: "数十万" } }
    },
    feishu_ai: {
        title: "飞书智能 (Feishu AI)",
        subtitle: "飞书与 AI 助手",
        dao: "工作场景 AI。飞书内 AI 写作、总结、多维表与会议助手，协同与效率一体化。",
        gov: "飞书与模型规则。豆包与自研模型结合，产品内深度集成。",
        space: "文档 + 会议 + 多维表 + AI。从写作到会议纪要、表格分析。",
        econ: "飞书会员、企业版。AI 能力作为增值与留存手段。",
        risk: "与钉钉、企微、Notion AI 竞争；依赖飞书渗透率。",
        atomic_unit: "文档/AI/会议",
        distribution: "文档 40% + 会议 30% + AI 30%",
        death_risk: "与飞书增长与商业化",
        tags: ["#飞书智能", "#飞书", "#AI", "#豆包", "#协同"],
        scores: [55, 58, 55, 72, 65],
        timeline: [
            { year: "2023", event: "飞书 AI 能力上线，写作与总结" },
            { year: "2024", event: "豆包与自研模型接入，能力升级" },
            { year: "2024", event: "与多维表、会议、审批等场景深度整合" },
            { year: "2024", event: "企业版 AI 与合规能力强化" }
        ],
        key_decisions: [
            "工作场景优先，文档与会议等高频场景先落地 AI",
            "豆包与字节模型生态整合，降低自研成本、保证体验",
            "AI 作为飞书差异化与付费转化手段，强化协同壁垒"
        ],
        user_metrics: {
            monthly_active_users: "飞书企业用户（数百万级）",
            user_demographics: { age_range: "职场与企业", region: "中国为主" },
            usage_patterns: { content_creation_rate: "文档与会议", engagement_rate: "AI 功能使用率提升" }
        },
        business_model: {
            revenue_streams: [
                { type: "飞书会员", description: "标准版、专业版、企业版" },
                { type: "企业版", description: "私有化、SLA 与 AI 额度" }
            ],
            monetization_strategy: "AI 增强会员价值与续费",
            financial_metrics: { profitability: "依托飞书整体商业化" }
        },
        key_metrics: { core_metrics: { mau: "飞书大盘", engagement_rate: "AI 功能渗透" } }
    },
    dingtalk_ai: {
        title: "钉钉智能 (Dingtalk AI)",
        subtitle: "钉钉与 AI",
        dao: "组织与工作 AI。钉钉内 AI 助手、总结、创作与审批，企业场景与组织关系结合。",
        gov: "钉钉与阿里模型规则。通义与自研，合规与组织权限一致。",
        space: "消息 + 文档 + 会议 + AI。从沟通到文档、会议纪要、智能审批。",
        econ: "钉钉会员、企业版。AI 作为专业版与企业版增值。",
        risk: "与飞书、企微、通义竞争；依赖钉钉组织渗透。",
        atomic_unit: "消息/AI/文档",
        distribution: "消息 45% + 文档 30% + AI 25%",
        death_risk: "与钉钉增长与阿里战略",
        tags: ["#钉钉智能", "#钉钉", "#AI", "#通义", "#组织"],
        scores: [52, 58, 52, 75, 68],
        timeline: [
            { year: "2023", event: "钉钉 AI 能力上线，总结与问答" },
            { year: "2024", event: "通义大模型深度接入，多场景覆盖" },
            { year: "2024", event: "与组织架构、审批、文档打通" },
            { year: "2024", event: "企业版 AI 与数据合规" }
        ],
        key_decisions: [
            "组织与权限优先，AI 输出与组织边界一致，满足企业合规",
            "通义与阿里云生态整合，模型与算力成本可控",
            "企业场景（审批、会议、文档）先落地，再扩展通用对话"
        ],
        user_metrics: {
            monthly_active_users: "钉钉企业用户（亿级）",
            user_demographics: { age_range: "职场与企业", region: "中国为主" },
            usage_patterns: { content_creation_rate: "文档与会议", engagement_rate: "组织内 AI 使用" }
        },
        business_model: {
            revenue_streams: [
                { type: "钉钉会员", description: "专业版、专属版" },
                { type: "企业版", description: "私有化、AI 与专属服务" }
            ],
            monetization_strategy: "AI 驱动会员升级与企业版",
            financial_metrics: { profitability: "依托钉钉与阿里云" }
        },
        key_metrics: { core_metrics: { mau: "钉钉大盘", engagement_rate: "AI 场景渗透" } }
    },
    wechat_ai: {
        title: "微信智能 (WeChat AI)",
        subtitle: "微信与 AI 助手",
        dao: "社交与生活 AI。微信内 AI 助手、搜索与创作，克制的智能化，不抢主流程。",
        gov: "微信与腾讯模型规则。场景优先、体验克制，与主端节奏一致。",
        space: "聊天 + 搜索 + 小程序 + AI。助手入口、搜索增强、小程序内嵌。",
        econ: "为微信生态服务，间接提升留存与搜索变现。",
        risk: "与豆包、文心、通义竞争；克制可能导致能力滞后。",
        atomic_unit: "聊天/AI/搜索",
        distribution: "聊天 60% + 搜索 25% + AI 15%",
        death_risk: "与微信战略与用户习惯",
        tags: ["#微信智能", "#微信", "#AI", "#克制", "#搜索"],
        scores: [55, 52, 55, 75, 70],
        timeline: [
            { year: "2024", event: "微信 AI 能力上线，助手与搜索结合" },
            { year: "2024", event: "搜索与问答、创作辅助" },
            { year: "2024", event: "与小程序、视频号场景打通" },
            { year: "2024", event: "混元等模型接入，能力迭代" }
        ],
        key_decisions: [
            "克制与场景优先，AI 不喧宾夺主，保护社交主流程",
            "搜索与助手结合，用 AI 增强信息获取而非替代聊天",
            "微信生态内闭环，为留存与商业化服务"
        ],
        user_metrics: {
            monthly_active_users: "微信大盘（亿级），AI 功能渗透提升",
            user_demographics: { age_range: "全年龄段", region: "中国为主" },
            usage_patterns: { content_creation_rate: "搜索与问答", engagement_rate: "AI 入口使用率" }
        },
        business_model: {
            revenue_streams: [
                { type: "生态增值", description: "提升搜索与小程序使用，间接广告与交易" }
            ],
            monetization_strategy: "AI 为生态服务，不单独变现",
            financial_metrics: { profitability: "依托微信整体" }
        },
        key_metrics: { core_metrics: { mau: "微信大盘", engagement_rate: "AI 功能渗透" } }
    },
    alipay_app: {
        title: "支付宝 (Alipay)",
        subtitle: "支付与数字生活",
        dao: "支付与生活。支付、理财与生活服务、小程序与芝麻信用，数字生活入口与信任基建。",
        gov: "蚂蚁规则与合规。支付与金融强监管，开放平台与生态边界清晰。",
        space: "首页 + 理财 + 生活 + 我的。从支付到余额宝、蚂蚁森林、出行与政务。",
        econ: "支付手续费、理财与数字金融、生活服务抽佣与广告。",
        risk: "与微信支付、云闪付、数字人民币竞争；监管与开放节奏。",
        atomic_unit: "支付/服务/小程序",
        distribution: "首页 50% + 理财 25% + 生活 25%",
        death_risk: "监管与竞争、份额分流",
        tags: ["#支付宝", "#支付", "#蚂蚁", "#数字生活", "#芝麻"],
        scores: [52, 60, 52, 85, 75],
        timeline: [
            { year: "2004", event: "支付宝成立，担保交易" },
            { year: "2013", event: "余额宝上线，国民理财启蒙" },
            { year: "2015", event: "线下支付与双寡头格局" },
            { year: "2022", event: "数字生活与合规、互联互通" }
        ],
        key_decisions: [
            "支付与信任基建优先，再拓展理财与生活，形成账户与数据优势",
            "余额宝等产品创新带动规模与粘性，后受监管约束",
            "小程序与开放平台拓展场景，与微信支付差异化竞争"
        ],
        user_metrics: {
            monthly_active_users: "超 10 亿",
            daily_active_users: "数亿",
            user_demographics: { age_range: "全年龄段", region: "中国为主" },
            usage_patterns: { content_creation_rate: "生活服务与理财", engagement_rate: "支付与打开频次高" }
        },
        business_model: {
            revenue_streams: [
                { type: "支付", description: "手续费与收单" },
                { type: "理财与金融", description: "余额宝、花呗、保险等" },
                { type: "数字生活", description: "出行、政务、生活服务抽佣与广告" }
            ],
            monetization_strategy: "支付入口 + 金融与生活变现",
            financial_metrics: { annual_revenue: "蚂蚁集团体量", profitability: "受监管与整改影响" }
        },
        key_metrics: { core_metrics: { mau: "超 10 亿", engagement_rate: "支付与生活场景" } }
    },
    wechat_pay: {
        title: "微信支付 (WeChat Pay)",
        subtitle: "社交支付",
        dao: "支付与红包。社交支付、红包与转账、线下与小程序，微信生态，国民级习惯。",
        gov: "微信与腾讯规则。",
        space: "聊天 + 支付 + 钱包 + 小程序。",
        econ: "支付手续费、理财通、微粒贷。",
        risk: "与支付宝、云闪付竞争。",
        atomic_unit: "支付/红包/转账",
        distribution: "聊天 60% + 支付 25% + 其他 15%",
        death_risk: "与微信",
        tags: ["#微信支付", "#支付", "#微信"],
        scores: [55, 52, 55, 82, 78],
        timeline: [
            { year: "2013", event: "微信支付上线" },
            { year: "2015", event: "红包爆发，绑卡破亿" },
            { year: "2018", event: "线下与小程序普及" },
            { year: "2022", event: "与视频号" }
        ],
        key_decisions: [
            "社交支付，红包建立习惯与绑卡",
            "线下与小程序，场景与商户覆盖",
            "为微信生态服务，不独立 App"
        ],
        user_metrics: { monthly_active_users: "超 10 亿", user_demographics: { age_range: "全年龄段", region: "中国" }, usage_patterns: { content_creation_rate: "转账与红包", engagement_rate: "支付频次极高" } },
        business_model: { revenue_streams: [{ type: "支付手续费", description: "商户与提现" }, { type: "理财通与微粒贷", description: "金融" }], monetization_strategy: "支付入口 + 金融", financial_metrics: { profitability: "依托微信" } },
        key_metrics: { core_metrics: { mau: "超 10 亿", engagement_rate: "支付与红包" } }
    },
    yunshanfu: {
        title: "云闪付 (UnionPay)",
        subtitle: "银联支付与权益",
        dao: "银联系支付。银行卡管理、支付与权益、政府与消费券，银联生态，银行与政府场景。",
        gov: "银联与银行规则。",
        space: "首页 + 支付 + 权益 + 我的。",
        econ: "手续费、银行合作、权益。",
        risk: "与支付宝、微信支付竞争。",
        atomic_unit: "支付/银行卡/权益",
        distribution: "首页 45% + 支付 35% + 权益 20%",
        death_risk: "份额与习惯",
        tags: ["#云闪付", "#银联", "#支付"],
        scores: [48, 55, 48, 65, 58],
        timeline: [
            { year: "2017", event: "云闪付上线" },
            { year: "2020", event: "消费券与政府合作" },
            { year: "2021", event: "权益与银行联动" },
            { year: "2022", event: "与银行" }
        ],
        key_decisions: [
            "银联与银行，统一入口与清算",
            "权益与消费券，政府与银行补贴拉新",
            "政府与场景，政务与民生支付"
        ],
        user_metrics: { monthly_active_users: "数亿级", user_demographics: { age_range: "全年龄段", region: "中国" }, usage_patterns: { content_creation_rate: "绑卡与支付", engagement_rate: "消费券与权益" } },
        business_model: { revenue_streams: [{ type: "手续费", description: "收单与清算" }, { type: "银行合作与权益", description: "联合营销" }], monetization_strategy: "手续费 + 银行合作", financial_metrics: { profitability: "银联体系" } },
        key_metrics: { core_metrics: { mau: "数亿", engagement_rate: "支付与权益" } }
    },
    meituan_pay: { title: "美团支付 (Meituan Pay)", subtitle: "美团系支付", dao: "美团场景支付。外卖与到店支付、月付与钱包，美团生态。", gov: "美团与持牌规则。", space: "支付 + 月付 + 钱包。", econ: "支付手续费、月付利息、导流。", risk: "与支付宝、微信竞争。", atomic_unit: "支付/月付/订单", distribution: "支付 70% + 月付 20% + 其他 10%", death_risk: "与美团", tags: ["#美团支付", "#支付", "#美团"], scores: [48, 55, 48, 68, 60], timeline: [{ year: "2016", event: "美团支付" }, { year: "2020", event: "月付" }, { year: "2022", event: "与美团" }], key_decisions: ["场景支付", "月付与消费", "美团生态"] },
    douyin_pay: { title: "抖音支付 (Douyin Pay)", subtitle: "抖音系支付", dao: "抖音场景支付。直播与电商支付、红包与提现，抖音生态。", gov: "抖音与持牌规则。", space: "支付 + 钱包 + 订单。", econ: "支付手续费、导流电商。", risk: "与支付宝、微信竞争。", atomic_unit: "支付/订单/钱包", distribution: "支付 75% + 钱包 20% + 其他 5%", death_risk: "与抖音", tags: ["#抖音支付", "#支付", "#抖音"], scores: [50, 55, 50, 72, 65], timeline: [{ year: "2021", event: "抖音支付" }, { year: "2022", event: "与电商" }, { year: "2024", event: "与直播" }], key_decisions: ["场景支付", "电商与直播", "抖音生态"] },
    pinduoduo_pay: { title: "多多支付 (Duoduopay)", subtitle: "拼多多系支付", dao: "拼多多场景支付。下单与支付、省钱月卡与提现，拼多多生态。", gov: "拼多多与持牌规则。", space: "支付 + 钱包 + 订单。", econ: "支付手续费、导流。", risk: "与支付宝、微信竞争。", atomic_unit: "支付/订单/钱包", distribution: "支付 80% + 钱包 15% + 其他 5%", death_risk: "与拼多多", tags: ["#多多支付", "#支付", "#拼多多"], scores: [48, 55, 48, 75, 65], timeline: [{ year: "2020", event: "多多支付" }, { year: "2022", event: "与电商" }, { year: "2024", event: "与 Temu" }], key_decisions: ["场景支付", "拼多多生态", "省钱月卡"] },
    jd_pay: { title: "京东支付 (JD Pay)", subtitle: "京东系支付", dao: "京东场景支付。下单与支付、白条与金条，京东生态。", gov: "京东与持牌规则。", space: "支付 + 白条 + 钱包。", econ: "支付手续费、白条利息、导流。", risk: "与支付宝、微信竞争。", atomic_unit: "支付/白条/订单", distribution: "支付 65% + 白条 25% + 其他 10%", death_risk: "与京东", tags: ["#京东支付", "#支付", "#京东"], scores: [50, 55, 50, 75, 68], timeline: [{ year: "2012", event: "网银在线" }, { year: "2014", event: "京东支付" }, { year: "2022", event: "与白条" }], key_decisions: ["场景支付", "白条与金条", "京东生态"] },
    bilibili_pay: { title: "哔哩哔哩支付 (Bilibili Pay)", subtitle: "B 站系支付", dao: "B 站场景支付。大会员与充电、直播与电商，B 站生态。", gov: "B 站与持牌规则。", space: "支付 + 钱包 + 订单。", econ: "支付手续费、大会员、充电。", risk: "与支付宝、微信竞争。", atomic_unit: "支付/充电/订单", distribution: "支付 70% + 充电 20% + 其他 10%", death_risk: "与 B 站", tags: ["#B站支付", "#支付", "#B站"], scores: [52, 52, 52, 62, 58], timeline: [{ year: "2022", event: "B 站支付" }, { year: "2023", event: "与电商" }, { year: "2024", event: "与直播" }], key_decisions: ["场景支付", "大会员与充电", "B 站生态"] },
    kuaishou_pay: { title: "快手支付 (Kuaishou Pay)", subtitle: "快手系支付", dao: "快手场景支付。直播打赏与电商、提现与红包，快手生态。", gov: "快手与持牌规则。", space: "支付 + 钱包 + 订单。", econ: "支付手续费、导流电商。", risk: "与支付宝、微信竞争。", atomic_unit: "支付/打赏/订单", distribution: "支付 75% + 钱包 20% + 其他 5%", death_risk: "与快手", tags: ["#快手支付", "#支付", "#快手"], scores: [50, 52, 50, 68, 62], timeline: [{ year: "2021", event: "快手支付" }, { year: "2022", event: "与电商" }, { year: "2024", event: "与直播" }], key_decisions: ["场景支付", "打赏与电商", "快手生态"] },
    xiaomi_pay: { title: "小米支付 (Mi Pay)", subtitle: "小米系支付", dao: "小米场景支付。手机与生态支付、公交与门卡，小米生态。", gov: "小米与持牌规则。", space: "支付 + 钱包 + 卡包。", econ: "支付手续费、导流。", risk: "与支付宝、微信竞争。", atomic_unit: "支付/卡包/订单", distribution: "支付 65% + 卡包 25% + 其他 10%", death_risk: "与小米", tags: ["#小米支付", "#支付", "#小米"], scores: [48, 52, 48, 62, 55], timeline: [{ year: "2016", event: "小米支付" }, { year: "2020", event: "与公交" }, { year: "2022", event: "与生态" }], key_decisions: ["场景支付", "公交与门卡", "小米生态"] },
    huawei_pay: { title: "华为支付 (Huawei Pay)", subtitle: "华为系支付", dao: "华为场景支付。手机与生态支付、公交与钱包，华为生态。", gov: "华为与持牌规则。", space: "支付 + 钱包 + 卡包。", econ: "支付手续费、导流。", risk: "与支付宝、微信竞争。", atomic_unit: "支付/卡包/订单", distribution: "支付 65% + 卡包 25% + 其他 10%", death_risk: "与华为", tags: ["#华为支付", "#支付", "#华为"], scores: [50, 55, 50, 65, 58], timeline: [{ year: "2016", event: "华为支付" }, { year: "2020", event: "与 HMS" }, { year: "2022", event: "与生态" }], key_decisions: ["场景支付", "公交与钱包", "华为生态"] },
    bytedance_douyin: {
        title: "字节跳动 (ByteDance)",
        subtitle: "短视频与全球化",
        dao: "信息与娱乐。抖音、TikTok、飞书与番茄、豆包，算法与全球化、AI 全系落地。",
        gov: "公司治理与产品线，算法与合规。多产品独立运营，中台与数据协同。",
        space: "多产品矩阵。短视频、长视频、办公、阅读、大模型与工具。",
        econ: "广告、电商、游戏、企业服务、会员与 API。",
        risk: "地缘、监管与竞争；TikTok 海外政策不确定性。",
        atomic_unit: "内容/用户/广告",
        distribution: "抖音 50% + TikTok 30% + 其他 20%",
        death_risk: "地缘与监管、增长与利润平衡",
        tags: ["#字节跳动", "#抖音", "#TikTok", "#飞书", "#豆包"],
        scores: [58, 65, 58, 88, 75],
        timeline: [
            { year: "2012", event: "字节跳动成立，今日头条" },
            { year: "2016", event: "抖音上线，短视频爆发" },
            { year: "2017", event: "收购 Musical.ly，TikTok 全球化" },
            { year: "2024", event: "豆包与 AI 全系、飞书与番茄持续" }
        ],
        key_decisions: [
            "算法与推荐为核心能力，复制到多产品与全球化",
            "抖音与 TikTok 双品牌，国内与海外差异化运营",
            "飞书与豆包拓展 B 端与 AI，对冲单一依赖"
        ],
        user_metrics: {
            monthly_active_users: "全球数十亿（抖音 + TikTok 等）",
            user_demographics: { age_range: "全年龄段，Z 世代强", region: "中国与全球" },
            usage_patterns: { content_creation_rate: "短视频与直播高", engagement_rate: "时长与频次领先" }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", description: "信息流、品牌、开屏" },
                { type: "电商", description: "抖音电商、TikTok Shop" },
                { type: "其他", description: "游戏、飞书、会员与 API" }
            ],
            monetization_strategy: "广告为主 + 电商与多元变现",
            financial_metrics: { profitability: "抖音盈利，TikTok 投入期" }
        },
        key_metrics: { core_metrics: { mau: "全球数十亿", engagement_rate: "短视频与直播" } }
    },
    alibaba_group: {
        title: "阿里巴巴 (Alibaba)",
        subtitle: "电商与云计算",
        dao: "让天下没有难做的生意。淘宝天猫、阿里云与本地生活、通义与钉钉，平台与生态、AI 与云一体。",
        gov: "集团治理与业务线。重组后淘天、云、本地、国际等独立经营。",
        space: "电商 + 云 + 本地 + 数字。零售、云与智能、高德、飞猪、钉钉等。",
        econ: "电商佣金与广告、云与智能、本地生活、数字媒体与创新。",
        risk: "竞争与监管；电商份额、云增长与组织效率。",
        atomic_unit: "平台/商户/用户",
        distribution: "电商 55% + 云 25% + 其他 20%",
        death_risk: "竞争与组织、增长与利润",
        tags: ["#阿里巴巴", "#电商", "#阿里云", "#通义", "#钉钉"],
        scores: [52, 62, 55, 88, 78],
        timeline: [
            { year: "1999", event: "阿里巴巴成立，B2B" },
            { year: "2003", event: "淘宝上线，C2C 与支付宝" },
            { year: "2014", event: "纽交所上市，生态扩张" },
            { year: "2024", event: "重组与 AI、通义与钉钉深化" }
        ],
        key_decisions: [
            "平台与生态战略，电商、支付、云与本地生活协同",
            "阿里云与钉钉、通义为 B 端与智能化核心",
            "本地与国际化（Lazada、速卖通等）平衡国内压力"
        ],
        user_metrics: {
            monthly_active_users: "淘系超 9 亿，云与钉钉企业数千万",
            user_demographics: { age_range: "全年龄段", region: "中国为主，跨境拓展" },
            usage_patterns: { content_creation_rate: "商家与内容", engagement_rate: "电商与工作场景" }
        },
        business_model: {
            revenue_streams: [
                { type: "电商", description: "佣金、广告、天猫与淘宝" },
                { type: "云与智能", description: "阿里云、通义、钉钉" },
                { type: "本地生活", description: "饿了么、高德、飞猪等" }
            ],
            monetization_strategy: "电商为主 + 云与本地多元",
            financial_metrics: { annual_revenue: "数千亿级", profitability: "电商与云盈利，局部承压" }
        },
        key_metrics: { core_metrics: { mau: "淘系 9 亿+", engagement_rate: "电商与云" } }
    },
    tencent_group: {
        title: "腾讯 (Tencent)",
        subtitle: "社交与内容",
        dao: "连接一切。微信 QQ、游戏与内容、云与投资、混元与生态，社交与数字生活底座。",
        gov: "集团治理与产品线。社交、游戏、云、投资等业务线清晰。",
        space: "社交 + 游戏 + 内容 + 云。微信、QQ、游戏、视频号、腾讯云、投资等。",
        econ: "游戏、广告、金融、云、会员与增值。",
        risk: "监管与竞争；游戏周期、广告与增长压力。",
        atomic_unit: "用户/内容/服务",
        distribution: "社交 40% + 游戏 35% + 其他 25%",
        death_risk: "监管与增长、游戏与广告承压",
        tags: ["#腾讯", "#微信", "#游戏", "#混元", "#投资"],
        scores: [55, 62, 55, 90, 82],
        timeline: [
            { year: "1998", event: "腾讯成立，QQ" },
            { year: "2011", event: "微信上线，移动社交时代" },
            { year: "2018", event: "组织调整，To B 与云" },
            { year: "2024", event: "混元与 AI、视频号与出海" }
        ],
        key_decisions: [
            "社交与连接为核心资产，微信与 QQ 覆盖国民级场景",
            "游戏与内容为现金牛，IP 与全球化并进",
            "投资与生态扩大边界，云与 AI 支撑 To B"
        ],
        user_metrics: {
            monthly_active_users: "微信超 13 亿，游戏与内容数亿级",
            user_demographics: { age_range: "全年龄段", region: "中国为主，游戏出海" },
            usage_patterns: { content_creation_rate: "社交与 UGC", engagement_rate: "时长与支付渗透" }
        },
        business_model: {
            revenue_streams: [
                { type: "游戏", description: "国内与海外游戏" },
                { type: "社交与广告", description: "微信、视频号、广告" },
                { type: "金融与云", description: "支付、理财、腾讯云" }
            ],
            monetization_strategy: "游戏 + 广告与金融 + 云与增值",
            financial_metrics: { annual_revenue: "数千亿级", profitability: "盈利，局部承压" }
        },
        key_metrics: { core_metrics: { mau: "微信 13 亿+", engagement_rate: "社交与游戏" } }
    },
    baidu_group: {
        title: "百度 (Baidu)",
        subtitle: "搜索与 AI",
        dao: "信息与知识。搜索、文心与 Apollo，信息入口与 AI，搜索与 AI 一体化。",
        gov: "集团治理与业务线。",
        space: "搜索 + AI + 智能驾驶。",
        econ: "广告、云、智能驾驶。",
        risk: "搜索份额与 AI 竞争。",
        atomic_unit: "搜索/信息/AI",
        distribution: "搜索 50% + AI 30% + 其他 20%",
        death_risk: "搜索与 AI",
        tags: ["#百度", "#搜索", "#文心"],
        scores: [52, 58, 52, 75, 68],
        timeline: [
            { year: "2000", event: "百度成立" },
            { year: "2017", event: "All in AI" },
            { year: "2023", event: "文心大模型" },
            { year: "2024", event: "文心与 Apollo" }
        ],
        key_decisions: [
            "搜索与信息，守住入口与广告",
            "文心与 AI，搜索与生成结合",
            "Apollo 与智能驾驶，第二曲线"
        ],
        user_metrics: { monthly_active_users: "搜索数亿，文心数千万", user_demographics: { age_range: "全年龄段", region: "中国" }, usage_patterns: { content_creation_rate: "搜索与问答", engagement_rate: "搜索与 AI" } },
        business_model: { revenue_streams: [{ type: "广告", description: "搜索与信息流" }, { type: "云与智能驾驶", description: "Apollo 与云" }], monetization_strategy: "广告为主 + 云与 AI", financial_metrics: { profitability: "广告承压，AI 投入" } },
        key_metrics: { core_metrics: { mau: "搜索数亿", engagement_rate: "搜索与文心" } }
    },
    netease_group: {
        title: "网易 (NetEase)",
        subtitle: "游戏与内容",
        dao: "匠心与多元。游戏、音乐与教育、严选，精品与长线，多业务协同。",
        gov: "集团治理与产品线。",
        space: "游戏 + 音乐 + 教育 + 严选。",
        econ: "游戏、广告、会员、电商。",
        risk: "游戏周期与竞争。",
        atomic_unit: "游戏/内容/用户",
        distribution: "游戏 60% + 音乐 15% + 其他 25%",
        death_risk: "游戏与增长",
        tags: ["#网易", "#游戏", "#云音乐"],
        scores: [52, 55, 52, 78, 70],
        timeline: [
            { year: "1997", event: "网易成立" },
            { year: "2001", event: "纳斯达克上市" },
            { year: "2013", event: "云音乐与严选" },
            { year: "2024", event: "游戏与 AI" }
        ],
        key_decisions: [
            "游戏与匠心，自研与长线运营",
            "云音乐与严选，内容与电商",
            "教育与多元，有道与云课堂"
        ],
        user_metrics: { monthly_active_users: "游戏与音乐数亿级", user_demographics: { age_range: "年轻与泛用户", region: "中国" }, usage_patterns: { content_creation_rate: "UGC 与游戏", engagement_rate: "游戏与音乐" } },
        business_model: { revenue_streams: [{ type: "游戏", description: "自研与代理" }, { type: "广告与会员", description: "音乐与严选" }], monetization_strategy: "游戏为主 + 音乐与电商", financial_metrics: { profitability: "游戏现金牛" } },
        key_metrics: { core_metrics: { mau: "数亿", engagement_rate: "游戏与音乐" } }
    },
    jd_group: {
        title: "京东集团 (JD Group)",
        subtitle: "零售与物流",
        dao: "多快好省。自营与开放平台、京东物流与健康，零售与供应链，品质与时效心智。",
        gov: "集团治理与业务线。",
        space: "零售 + 物流 + 健康 + 科技。",
        econ: "零售、物流、广告、金融。",
        risk: "竞争与利润。",
        atomic_unit: "商品/订单/物流",
        distribution: "零售 70% + 物流 20% + 其他 10%",
        death_risk: "竞争与增速",
        tags: ["#京东集团", "#零售", "#物流"],
        scores: [52, 58, 55, 82, 72],
        timeline: [
            { year: "2004", event: "京东成立" },
            { year: "2014", event: "纳斯达克上市" },
            { year: "2017", event: "物流独立与开放" },
            { year: "2024", event: "物流与健康" }
        ],
        key_decisions: [
            "自营与物流，体验与正品壁垒",
            "开放平台，品类与货币化",
            "下沉与健康，京喜与健康业务"
        ],
        user_metrics: { monthly_active_users: "数亿级", user_demographics: { age_range: "品质与时效敏感", region: "中国" }, usage_patterns: { content_creation_rate: "购物与复购", engagement_rate: "零售与物流" } },
        business_model: { revenue_streams: [{ type: "零售", description: "自营与平台" }, { type: "物流与广告金融", description: "开放物流与增值" }], monetization_strategy: "零售为主 + 物流与金融", financial_metrics: { profitability: "零售盈利，投入平衡" } },
        key_metrics: { core_metrics: { mau: "数亿", engagement_rate: "零售与物流" } }
    },
    meituan_group: {
        title: "美团 (Meituan)",
        subtitle: "本地生活平台",
        dao: "吃喝玩乐。外卖到店酒旅、闪购与出行，本地生活入口，履约与地推壁垒。",
        gov: "平台规则与履约。",
        space: "外卖 + 到店 + 酒旅 + 其他。",
        econ: "抽佣、广告、新业务。",
        risk: "竞争与利润。",
        atomic_unit: "订单/商户/用户",
        distribution: "外卖 55% + 到店 30% + 其他 15%",
        death_risk: "竞争与监管",
        tags: ["#美团", "#本地生活", "#外卖"],
        scores: [55, 62, 58, 82, 72],
        timeline: [
            { year: "2010", event: "美团成立" },
            { year: "2015", event: "与点评合并" },
            { year: "2018", event: "上市与到店" },
            { year: "2024", event: "即时零售" }
        ],
        key_decisions: [
            "多品类与履约，外卖带低频",
            "到店与外卖，双轮变现",
            "即时零售，闪购与万物到家"
        ],
        user_metrics: { monthly_active_users: "约 4 亿+", user_demographics: { age_range: "全年龄段", region: "中国" }, usage_patterns: { content_creation_rate: "下单与到店", engagement_rate: "外卖与到店" } },
        business_model: { revenue_streams: [{ type: "抽佣与广告", description: "外卖与到店" }, { type: "新业务", description: "闪购优选等" }], monetization_strategy: "抽佣 + 广告 + 新业务", financial_metrics: { profitability: "核心业务盈利" } },
        key_metrics: { core_metrics: { mau: "约 4 亿", engagement_rate: "订单与到店" } }
    },
    pinduoduo_group: {
        title: "拼多多 (Pinduoduo)",
        subtitle: "性价比电商",
        dao: "拼着买更便宜。拼团与社交、白牌与农产品、Temu 跨境，下沉与全球，货找人算法。",
        gov: "平台规则与供应链。",
        space: "推荐 + 拼团 + 多多 + Temu。",
        econ: "广告、佣金、跨境。",
        risk: "竞争与品牌化。",
        atomic_unit: "商品/拼团/订单",
        distribution: "国内 75% + Temu 25%",
        death_risk: "品牌与利润",
        tags: ["#拼多多", "#性价比", "#Temu"],
        scores: [58, 62, 55, 85, 72],
        timeline: [
            { year: "2015", event: "拼多多成立" },
            { year: "2018", event: "上市" },
            { year: "2022", event: "Temu 出海" },
            { year: "2024", event: "Temu 与品牌" }
        ],
        key_decisions: [
            "拼团与下沉，社交裂变获客",
            "白牌与农产品，供应链与性价比",
            "Temu 出海，复制模式全球化"
        ],
        user_metrics: { monthly_active_users: "国内与 Temu 数亿级", user_demographics: { age_range: "下沉与全人群", region: "中国与海外" }, usage_patterns: { content_creation_rate: "拼团与分享", engagement_rate: "购物与复购" } },
        business_model: { revenue_streams: [{ type: "广告与佣金", description: "国内电商" }, { type: "Temu", description: "跨境" }], monetization_strategy: "广告佣金 + Temu", financial_metrics: { profitability: "国内盈利，Temu 投入" } },
        key_metrics: { core_metrics: { mau: "数亿", engagement_rate: "拼团与购物" } }
    },
    kuaishou_group: {
        title: "快手 (Kuaishou)",
        subtitle: "短视频与信任",
        dao: "拥抱每一种生活。短视频与直播、老铁与信任电商，下沉与私域，双列与关注。",
        gov: "平台规则与算法。",
        space: "发现 + 关注 + 快手小店。",
        econ: "广告、直播、电商。",
        risk: "与抖音、视频号竞争。",
        atomic_unit: "短视频/直播/老铁",
        distribution: "发现 50% + 关注 35% + 电商 15%",
        death_risk: "份额与增长",
        tags: ["#快手", "#短视频", "#老铁"],
        scores: [58, 55, 58, 75, 68],
        timeline: [
            { year: "2011", event: "GIF 快手" },
            { year: "2016", event: "短视频" },
            { year: "2019", event: "直播与信任电商" },
            { year: "2024", event: "电商与 AI" }
        ],
        key_decisions: [
            "老铁与私域，关注与复购",
            "信任电商，人找货与复购",
            "下沉与普惠，双列保留选择权"
        ],
        user_metrics: { monthly_active_users: "约 7 亿", user_demographics: { age_range: "下沉与全年龄", region: "中国" }, usage_patterns: { content_creation_rate: "短视频与直播", engagement_rate: "老铁与电商" } },
        business_model: { revenue_streams: [{ type: "直播", description: "打赏" }, { type: "广告与电商", description: "信息流与信任电商" }], monetization_strategy: "直播 + 广告 + 电商", financial_metrics: { profitability: "盈利" } },
        key_metrics: { core_metrics: { mau: "约 7 亿", engagement_rate: "短视频与电商" } }
    },
    xiaohongshu_group: {
        title: "小红书 (Xiaohongshu)",
        subtitle: "生活方式与种草",
        dao: "标记我的生活。笔记与种草、电商与广告，年轻女性与决策，种草即决策。",
        gov: "平台规则与算法。",
        space: "发现 + 关注 + 商城。",
        econ: "广告、电商、会员。",
        risk: "与抖音、淘宝竞争。",
        atomic_unit: "笔记/种草/商品",
        distribution: "发现 55% + 关注 30% + 商城 15%",
        death_risk: "商业化与竞争",
        tags: ["#小红书", "#种草", "#生活方式"],
        scores: [62, 55, 60, 72, 68],
        timeline: [
            { year: "2013", event: "小红书成立" },
            { year: "2019", event: "直播与电商" },
            { year: "2022", event: "种草与决策心智强化" },
            { year: "2024", event: "与 AI" }
        ],
        key_decisions: [
            "种草与决策，从内容到交易闭环",
            "年轻女性核心，拓展男性与泛人群",
            "广告与电商双变现，平衡体验"
        ],
        user_metrics: { monthly_active_users: "约 3 亿+（公开/行业估算）", user_demographics: { age_range: "年轻女性为主、18–35 岁", region: "中国" }, usage_patterns: { content_creation_rate: "笔记与种草、搜索与决策转化", engagement_rate: "搜索占比高、种草到交易转化" } },
        business_model: { revenue_streams: [{ type: "广告", description: "信息流与品牌、效果与品牌" }, { type: "电商", description: "自营与佣金、闭环抽成" }], monetization_strategy: "广告 + 电商", financial_metrics: { profitability: "商业化加速、电商占比提升" } },
        key_metrics: { core_metrics: { mau: "约 3 亿", engagement_rate: "种草与电商、搜索 GMV 占比" } }
    },
    zhihu_group: {
        title: "知乎 (Zhihu)",
        subtitle: "问答与知识",
        dao: "有问题就有答案。问答与专栏、想法与会员，知识社区与商业化，专业与破圈。",
        gov: "平台规则与算法。",
        space: "推荐 + 热榜 + 关注 + 会员。",
        econ: "广告、会员、内容付费。",
        risk: "与小红书、B 站、抖音竞争。",
        atomic_unit: "问题/回答/想法",
        distribution: "推荐 50% + 热榜 25% + 关注 25%",
        death_risk: "增长与变现",
        tags: ["#知乎", "#问答", "#知识"],
        scores: [62, 55, 58, 65, 62],
        timeline: [
            { year: "2011", event: "知乎成立" },
            { year: "2021", event: "纽交所上市" },
            { year: "2022", event: "热榜与破圈" },
            { year: "2024", event: "与 AI" }
        ],
        key_decisions: [
            "问答与专业，建立权威与信任",
            "热榜与破圈，平衡专业与流量",
            "会员与广告，知识商业化"
        ],
        user_metrics: { monthly_active_users: "数千万级（上市披露 MAU）", user_demographics: { age_range: "知识型用户、一二线与高学历占比高", region: "中国" }, usage_patterns: { content_creation_rate: "回答与想法、热榜消费", engagement_rate: "热榜与关注、盐选付费" } },
        business_model: { revenue_streams: [{ type: "广告", description: "信息流与品牌" }, { type: "会员与付费", description: "盐选与专栏、订阅" }], monetization_strategy: "广告 + 会员", financial_metrics: { profitability: "上市后盈利压力、会员与广告占比" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "问答与热榜", premium_ratio: "盐选渗透" } }
    },
    douban_group: {
        title: "豆瓣 (Douban)",
        subtitle: "书影音与兴趣",
        dao: "我们的精神角落。书影音评分、小组与广播，文艺与长尾，慢社区与信任。",
        gov: "社区规则与算法。",
        space: "书影音 + 小组 + 广播 + 市集。",
        econ: "广告、市集、会员。",
        risk: "与小红书、B 站、抖音竞争。",
        atomic_unit: "条目/小组/广播",
        distribution: "书影音 40% + 小组 35% + 广播 25%",
        death_risk: "增长与商业化",
        tags: ["#豆瓣", "#书影音", "#小组"],
        scores: [65, 50, 62, 55, 58],
        timeline: [
            { year: "2005", event: "豆瓣成立" },
            { year: "2017", event: "豆瓣时间" },
            { year: "2020", event: "市集与商业化探索" },
            { year: "2024", event: "与市集" }
        ],
        key_decisions: [
            "书影音与评分，建立权威与决策价值",
            "小组与兴趣，长尾与归属",
            "文艺与长尾，差异化于快内容"
        ],
        user_metrics: { monthly_active_users: "数千万级（行业估算）", user_demographics: { age_range: "文艺与泛文化、长尾兴趣", region: "中国" }, usage_patterns: { content_creation_rate: "评分与小组、广播", engagement_rate: "书影音与小组、市集转化" } },
        business_model: { revenue_streams: [{ type: "广告", description: "品牌与信息流" }, { type: "市集与会员", description: "电商与增值、豆瓣时间等" }], monetization_strategy: "广告 + 市集", financial_metrics: { profitability: "增长与变现平衡、商业化温和" } },
        key_metrics: { core_metrics: { mau: "数千万", engagement_rate: "书影音与小组", content_volume: "评分与条目量" } }
    },
    bilibili_group: {
        title: "哔哩哔哩 (Bilibili)",
        subtitle: "年轻与二次元",
        dao: "你感兴趣的视频都在 B 站。PUGV、番剧与直播，Z 世代与社区，弹幕与归属。",
        gov: "社区规则与算法。",
        space: "推荐 + 分区 + 动态 + 直播。",
        econ: "游戏、广告、大会员、直播。",
        risk: "与抖音、快手、YouTube 竞争。",
        atomic_unit: "视频/弹幕/UP主",
        distribution: "推荐 50% + 分区 30% + 动态 20%",
        death_risk: "增长与盈利",
        tags: ["#B站", "#二次元", "#Z世代"],
        scores: [68, 55, 65, 72, 70],
        timeline: [
            { year: "2009", event: "B 站成立" },
            { year: "2018", event: "纳斯达克上市" },
            { year: "2020", event: "破圈与增长" },
            { year: "2024", event: "与 AI" }
        ],
        key_decisions: [
            "PUGV 与社区，UP 主生态与内容壁垒",
            "大会员与游戏，多元变现",
            "破圈与平衡，二次元与泛内容"
        ],
        user_metrics: { monthly_active_users: "约 3 亿+（财报披露 MAU/DAU）", user_demographics: { age_range: "Z 世代为主、二次元与泛年轻", region: "中国" }, usage_patterns: { content_creation_rate: "UP 主投稿、日均投稿量", engagement_rate: "弹幕与观看时长、大会员渗透" } },
        business_model: { revenue_streams: [{ type: "游戏", description: "自研与联运、收入占比高" }, { type: "广告与大会员", description: "增值与品牌、大会员订阅" }], monetization_strategy: "游戏 + 广告 + 大会员", financial_metrics: { profitability: "亏损收窄、单用户变现提升" } },
        key_metrics: { core_metrics: { mau: "约 3 亿", engagement_rate: "PUGV 与直播、时长", premium_ratio: "大会员渗透" } }
    },
    openai_cn: {
        title: "OpenAI 中国生态",
        subtitle: "ChatGPT 与国产替代",
        dao: "大模型与对话。ChatGPT 镜像、API 与国产替代并存，开发者与 C 端多路径触达。",
        gov: "合规与 API 规则，区域与访问限制。镜像站与代理、国产替代分流。",
        space: "对话 + API + 应用。从 C 端体验到开发接入与私有化替代。",
        econ: "API 付费、镜像/代理会员、国产替代方案收费。",
        risk: "合规与政策、国产替代挤压、访问不稳定。",
        atomic_unit: "对话/API/应用",
        distribution: "对话 55% + API 30% + 应用 15%",
        death_risk: "合规与国产替代加速",
        tags: ["#OpenAI", "#ChatGPT", "#国产替代", "#API", "#合规"],
        scores: [55, 52, 52, 75, 65],
        timeline: [
            { year: "2022", event: "ChatGPT 发布，全球现象级" },
            { year: "2023", event: "中国镜像站与 API 代理兴起，开发者接入" },
            { year: "2024", event: "国产大模型替代加速，合规与数据本地化" },
            { year: "2024", event: "企业选型国产优先，OpenAI 生态分化" }
        ],
        key_decisions: [
            "合规优先：镜像与 API 需考虑区域与数据，国产替代成主路径",
            "开发者生态：API 与插件生态仍具参考价值，国产跟进能力建设",
            "企业市场：国产替代在政企与敏感场景占优，OpenAI 保留高端与出海"
        ],
        user_metrics: {
            monthly_active_users: "镜像与 API 用户（百万级）+ 国产替代迁移",
            user_demographics: { age_range: "开发者与高知用户", region: "中国，访问受限" },
            usage_patterns: { content_creation_rate: "对话与开发", engagement_rate: "替代方案分流" }
        },
        business_model: {
            revenue_streams: [
                { type: "API/代理", description: "OpenAI API 调用与代理服务" },
                { type: "国产替代", description: "迁移与方案，间接促进国产商业化" }
            ],
            monetization_strategy: "合规前提下 API 与镜像变现；国产替代占主流量",
            financial_metrics: { profitability: "生态分散，国产侧受益" }
        },
        key_metrics: { core_metrics: { mau: "分散于镜像与国产", engagement_rate: "替代迁移加快" } }
    },
    runoob: {
        title: "菜鸟教程 (Runoob)",
        subtitle: "编程入门与文档",
        dao: "学编程从入门开始。教程与示例、在线运行与文档，免费与系统化覆盖多语言。",
        gov: "内容与结构主导，广告与合作变现，编辑与社区维护。",
        space: "教程 + 示例 + 运行 + 搜索。从入门到参考，一站式编程学习。",
        econ: "广告、合作、付费课程与导流。",
        risk: "与 W3School、慕课、freeCodeCamp、官方文档竞争；流量与变现平衡。",
        atomic_unit: "教程/示例/运行",
        distribution: "教程 55% + 搜索 30% + 示例 15%",
        death_risk: "流量与变现、AI 时代文档形态变化",
        tags: ["#菜鸟教程", "#编程", "#入门", "#多语言", "#在线运行"],
        scores: [58, 52, 55, 55, 55],
        timeline: [
            { year: "2012", event: "菜鸟教程上线，专注编程入门与参考" },
            { year: "2016", event: "多语言覆盖扩展，PHP、Python、Java 等" },
            { year: "2018", event: "在线运行环境上线，边学边练" },
            { year: "2022", event: "与 AI 编程、问答结合，保持入门定位" }
        ],
        key_decisions: [
            "免费与系统化内容建立流量与信任，再通过广告与合作变现",
            "在线运行降低上手门槛，与纯文档站形成差异化",
            "入门与文档并重，覆盖从零基础到查阅参考"
        ],
        user_metrics: {
            monthly_active_users: "数千万级（学生与入门开发者）",
            user_demographics: { age_range: "学生与转行学习者为主", region: "中国为主" },
            usage_patterns: { content_creation_rate: "查阅为主", engagement_rate: "搜索与教程阅读高" }
        },
        business_model: {
            revenue_streams: [
                { type: "广告", description: "站内广告、联盟广告" },
                { type: "合作与导流", description: "培训、课程与招聘合作" }
            ],
            monetization_strategy: "免费内容获客 + 广告与合作变现",
            financial_metrics: { profitability: "依赖流量与广告" }
        },
        key_metrics: {
            core_metrics: { mau: "数千万", engagement_rate: "教程与示例访问为主" }
        }
    },
    pupu: {
        title: "朴朴超市 (Pupu)",
        subtitle: "前置仓生鲜与即时零售",
        dao: "30 分钟送到家。前置仓 + 自营配送、生鲜与日百，福州起家后进一二线；高复购与履约体验，与盒马、叮咚、美团买菜差异化竞争。",
        gov: "自营供应链与前置仓、品控与配送标准；区域密度与单仓单量平衡。",
        space: "首页（分类/秒杀） + 购物车 + 订单 + 我的。",
        econ: "商品毛利、会员与满减；客单价与复购率为核心。",
        risk: "与盒马、叮咚、美团买菜、拼多多竞争；前置仓成本与盈利平衡。",
        atomic_unit: "订单/ SKU/前置仓",
        distribution: "推荐 50% + 分类 40% + 搜索 10%",
        death_risk: "区域扩张与盈利",
        tags: ["#朴朴", "#生鲜", "#前置仓", "#即时零售"],
        scores: [52, 55, 52, 68, 62],
        timeline: [
            { year: "2016", event: "朴朴超市福州成立" },
            { year: "2019", event: "广州、深圳等扩张" },
            { year: "2021", event: "前置仓与 SKU 扩展" },
            { year: "2024", event: "区域深耕与盈利探索" }
        ],
        key_decisions: [
            "前置仓与 30 分钟达，体验优先",
            "生鲜与日百，一站式家庭采购",
            "区域密度与单仓效率，控制成本"
        ],
        user_metrics: {
            monthly_active_users: "一二线家庭与即时零售用户（区域披露）",
            user_demographics: { age_range: "25–45 岁、家庭采购决策", region: "福州、广深、成都等" },
            usage_patterns: { content_creation_rate: "评价与复购", engagement_rate: "周频下单、客单价与复购率" }
        },
        business_model: {
            revenue_streams: [
                { type: "商品销售", percentage: 88, description: "生鲜与日百毛利" },
                { type: "会员与增值", percentage: 12, description: "会员费与满减引流" }
            ],
            monetization_strategy: "商品毛利为主、会员与复购提升 LTV",
            financial_metrics: { profitability: "区域盈利与扩张平衡、前置仓成本压力" }
        },
        key_metrics: { core_metrics: { order_count: "订单量", aov: "客单价" }, business_metrics: { repeat_rate: "复购率", warehouse_count: "前置仓数" } }
    }
};

// Export for usage if using modules, but here we just load it globally
// window.communityCases = communityCases;
if (typeof module !== 'undefined' && module.exports) module.exports = communityCases; 
