/**
 * 全站内容单一数据源。
 * 所有需要替换的占位符都集中在这里，改文字/链接只动这一个文件。
 * 格式说明：[占位：xxx] 表示该字段尚未提供，请替换为真实内容后删除占位标记。
 */

export type ResultBlock =
  | { type: "text"; content: string }
  | { type: "metric"; value: number; prefix?: string; suffix?: string };

export const profile = {
  /** 基础身份 */
  name: "陈允文",
  brand: "潜元无限",
  brandEn: "OriEra",
  brandFull: "北京潜元无限智能科技有限公司",
  role: "联合创始人兼 CEO",
  tagline: "一个从不停歇、爱折腾的 03 年连续创业者",
  taglineEn: "From Origin, A New Era",
  siteUrl: "https://oriera.example.com", // ← 部署后替换为你的正式域名

  /** SEO */
  seoDescription:
    "陈允文，潜元无限（OriEra）联合创始人兼 CEO，03 年连续创业者。相信每个人的潜能无限、元力无界，正在推动虚拟现实技术落地成真。",
  seoKeywords: ["陈允文", "潜元无限", "OriEra", "连续创业者", "AI", "虚拟现实"],

  /** Executive Summary：我是谁 / 相信什么 / 正在做什么 */
  summary: {
    who: "03 年出生，从校园里一台共享雨伞架开始，连续做了五件事：共享雨伞、数学教育、教育 AI、机器人，直到今天的人工智能与游戏。一个从不停歇、爱折腾的连续创业者。",
    belief:
      "我相信每个人的潜能都是无限的，每个人的元力都是无界的。技术应当服务于人，把可能性交还给每一个人。",
    doing:
      "创办潜元无限（OriEra），以游戏为切入点，推动虚拟现实技术落地成真，打破时空限制，激发每个人的潜力，创造每个人的可能性。",
  },

  /** 领导力理念：3 条原则 */
  leadership: [
    {
      title: "潜能为本，极致放权",
      body: "充分相信并激发每一位伙伴的潜力；把权力与责任同步下放，让能力在担责中生长。",
    },
    {
      title: "实践检验，不懂就问",
      body: "绝不不懂装懂；以实践检验真理，极力促进每位伙伴向上向善的精神风貌。",
    },
    {
      title: "跨界多栖，交叉成长",
      body: "极力培养多维度交叉领域的多栖人才，让复合能力成为组织共同的底色。",
    },
  ],

  /** 职业时间线：最新在前 */
  timeline: [
    {
      company: "潜元无限 OriEra ·「AI原生生灵」",
      role: "联合创始人兼 CEO",
      period: "2026.07 – 至今",
      points: [
        "负责投融资资源对接、战略决策部署、品牌声量建设与生态体系搭建",
        "以游戏为切入点，早期以用户增量为战略定位；用户基数进入平台期后，链接 C 端，并对接 B 端与 G 端",
      ],
      note: "", // [占位：如提供团队/业务规模，可在此补充]
    },
    {
      company: "EDU AI 教育平台",
      role: "联合创始人 · 产品端负责人",
      period: "2025.09 – 2026.01",
      points: [
        "与香港大学硕士合伙人联合创立，主导产品端工作，深入学习早期大模型搭建与 AI 工作流",
        "项目因数据合规问题终止，积累了 AI 产品合规与早期产品化的实战认知",
      ],
      note: "",
    },
    {
      company: "元谋机器人",
      role: "联合创始人",
      period: "2025.04 – 2025.08",
      points: [
        "与香港科技大学教授（前宇树科技技术顾问）联合创立，负责投融资对接，系统学习投融资知识",
        "因早期资本市场对机器人概念热度不足、普遍视为玩具性质，融资未能落地",
      ],
      note: "",
    },
    {
      company: "高顿教育 · 国际教育事业部",
      role: "销售顾问",
      period: "2025.02 – 2025.04",
      points: ["对接客户与名校资源，月销售额 20 万元"],
      note: "",
    },
    {
      company: "腾跃数智教育中心",
      role: "合伙人",
      period: "2024.11 – 2025.02",
      points: [
        "负责初高中学生数学素质教育业务，寒假班 10 名学生平均数学提分 20+",
        "后因合伙人利益分配问题退出",
      ],
      note: "",
    },
    {
      company: "selleck 生物科技公司",
      role: "销售",
      period: "2024.08 – 2024.11",
      points: ["负责公司产品销售与客户跟进，月均销售额 50 万元+"],
      note: "",
    },
    {
      company: "共享雨伞项目",
      role: "项目负责人",
      period: "2021 – 2022",
      points: [
        "回收校内闲置雨伞投入共享雨伞台运营，初期使用火爆",
        "实践中识别出维护成本高、伞具易丢失等核心运营风险",
      ],
      note: "",
    },
  ],

  /** 教育背景 */
  education: {
    school: "天津师范大学",
    major: "国际经济与贸易（本科）",
    period: "2020 – 2024",
    gpa: "3.2",
    ranking: "专业排名前 10%",
    courses: ["国际贸易", "国际商务", "国际贸易法", "统计学", "跨境电商"],
    certificates: ["CET-4 大学英语四级", "教师资格证（高中数学）"],
  },

  /** 代表成果：背景 — 动作 — 结果。result 为分块文本，metric 块用于数字递增 */
  results: [
    {
      title: "潜元无限「AI原生生灵」",
      status: "进行中",
      background: "人工智能 + 游戏赛道，公司创立初期，从 0 搭建业务与生态。",
      action:
        "作为联合创始人兼 CEO，负责投融资、战略、品牌与生态；以游戏为切入点做大用户增量，平台期后链接 C 端、对接 B 端与 G 端。",
      result: [
        { type: "text", content: "[占位：可公开的用户规模 / 增速等数字，待补充]" },
      ] as ResultBlock[], // ← 替换为可公开结果
    },
    {
      title: "腾跃数智教育中心 · 寒假班",
      status: "已结项",
      background: "初高中数学素质教育业务，负责寒假班整体运营。",
      action: "作为合伙人主导教学与运营，快速验证课程效果与口碑。",
      result: [
        { type: "text", content: "寒假班 10 名学生平均数学提分 " },
        { type: "metric", value: 20, suffix: "+" },
        { type: "text", content: "。" },
      ] as ResultBlock[],
    },
  ],

  /** 转折与认知：从「没做成」里得到的东西 */
  lessons: [
    {
      tag: "合规",
      title: "EDU AI 教育平台",
      body: "因数据合规问题终止。沉淀了 AI 产品合规与早期产品化的实战认知——快可以，但红线不能碰。",
    },
    {
      tag: "融资",
      title: "元谋机器人",
      body: "融资未落地。系统学习了投融资知识，也理解了市场叙事与热度对早期项目的作用。",
    },
    {
      tag: "运营",
      title: "共享雨伞",
      body: "需求真实、爆发很快，但维护成本与损耗率决定模式生死。第一次亲手验证了「从 0 到 1」。",
    },
  ],

  /** 演讲与媒体 */
  presence: [
    {
      event: "创上海2026",
      location: "上海",
      date: "2026",
      detail: "潜元科技展位（D78/D79），现场展出产品并参与交流。",
      image: "/screate-2026.jpg",
      imageAlt: "创上海2026 展会现场 · 潜元科技展位",
      topic: "", // [占位：如上台演讲，填写主题与链接]
    },
  ],

  /** 洞察：骨架预留，暂无内容时显示「即将发布」 */
  insights: {
    articles: [] as { title: string; url: string }[], // [占位：文章标题 + 链接]
    podcasts: [] as { title: string; url: string }[], // [占位：播客名称 + 链接]
    views: [] as { title: string; url: string }[], // [占位：观点长文]
  },

  /** 联系方式（按你确认的公开程度） */
  contact: {
    email: "17751540360@163.com",
    wechat: "Leslie3209",
    xHandle: "@Leslielve69",
    xUrl: "https://x.com/Leslielve69",
  },

  /** 简历下载：暂无文件时为 null，导航与联系区会自动隐藏入口 */
  resumeUrl: "/resume.pdf" as string | null, // 当前为已提供的简历 PDF
};
