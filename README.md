# 潜元无限 OriEra · 陈允文个人品牌站

陈允文（OriEra）个人作品集 / 个人品牌网站。Next.js + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion，单页滚动站，支持暗色模式、移动端与无障碍。

## 本地运行

```bash
npm install
npm run dev      # 开发模式 http://localhost:3000
npm run build    # 生产构建
npm start        # 预览生产构建
```

## 上线前要替换的占位符

**所有文字内容集中在 `data/profile.ts` 一个文件里**，改文字只动它：

1. `siteUrl`：`https://oriera.example.com` → 你的正式域名
2. `results[0].result`：潜元无限的用户规模 / 增速等可公开数字（当前为 `[占位]`）
3. `insights`：文章 / 播客 / 观点内容（当前显示「即将发布」）
4. `presence[0].topic`：如上台演讲，补充分享主题
5. 简历：`public/resume.pdf` 已是你的简历 PDF；需要更新时替换同名文件即可
6. 图片：`public/portrait.jpg`（形象照）、`public/screate-2026.jpg`（创上海2026 现场照），可直接替换

**敏感边界已内置**：全站不出现未公开财务、客户名单、战略细节与家庭信息；未确认的数据一律留 `[占位]`。

## 部署到 Vercel

方式一（推荐，无需命令行）：

1. 把项目推到你自己的 GitHub 仓库（`oriera-portfolio/` 为仓库根目录）
2. 打开 [vercel.com](https://vercel.com) → Add New Project → Import 该仓库
3. Framework Preset 自动识别为 Next.js，直接 Deploy
4. 部署后在 Vercel 项目 Settings → Domains 绑定你的域名，并把 `data/profile.ts` 的 `siteUrl` 改成该域名

方式二（Vercel CLI）：

```bash
npm i -g vercel
vercel
vercel --prod
```

## 技术说明

- 字体：Noto Serif SC + Cormorant Garamond（标题）/ Inter + Noto Sans SC（正文），`next/font` 构建期自托管
- 主题：跟随系统 + 导航栏手动切换，CSS Variables 双套
- 动效：滚动出现（500ms 一次触发）、数字递增（1200ms）、悬停下划线；`prefers-reduced-motion` 自动降级
- SEO：Metadata API、Open Graph（自动生成 OG 图）、JSON-LD Person Schema、sitemap、robots
- 无障碍：语义化 `header/nav/main/section/footer`、跳转链接、`:focus-visible` 样式、44px 触控目标
- 目标 Lighthouse 90+：图片已压缩（形象照约 106KB、现场照约 275KB），字体自托管避免运行时外链

## 目录结构

```
app/           布局、页面、全局样式、robots/sitemap/OG
components/ui/ shadcn 风格基础组件（button/badge/separator/sheet）
components/site/ 业务组件（nav/hero/时间线/成果/联系等）
data/profile.ts 全站内容单一数据源 ← 改内容先看这里
lib/utils.ts   cn() 工具
public/        图片与简历
```
