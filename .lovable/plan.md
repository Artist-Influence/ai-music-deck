

# Refresh Chinese locale to match the user's provided deck copy

## Scope

Update `src/i18n/zh.ts` so every string the deck renders in Simplified Chinese matches the user's provided copy block (slides 1 → 18). All other locale files and components stay untouched.

## Why this is needed

The Chinese file currently lacks the same 5 namespaces used on slides 2, 3, 9, 15, and 16:

- `opSystem.*` (Slide 2 — 操作系统)
- `unifiedOps.*` (Slide 3 — 统一运营)
- `cultureEdits.*` (Slide 9 — 文化剪辑)
- `websites.*` (Slide 15 — 网站与数字基础设施)
- `idid.*` (Slide 16 — ID.ID)

Without these keys, Chinese falls back to raw key strings on those 5 slides. Several existing values also need a refresh (e.g. `clipping.subtitle` says "20,000 名…切片创作者" → should read "2,000 多名…剪辑师", `shift.subtitle` is currently a one-liner that does not match the new long-form copy, and `nextSteps.tagline` is still in English).

## Changes — single file: `src/i18n/zh.ts`

### A. Update existing values to the new Chinese copy

| Key | New Chinese value |
|---|---|
| `cover.tagline` | 现代音乐与艺术家的增长系统 |
| `cover.subtitle` | 在短视频、流媒体和文化领域推动发展势头。 |
| `cover.confidential` | 机密 · 2026 |
| `shift.title` | 音乐发现方式已然改变。 |
| `shift.subtitle` | 人们不再像过去那样发现歌曲。如今，歌曲的传播依赖于反复曝光、社区认可、算法驱动的势头，以及在现有成功基础上叠加的付费推广。 |
| `shift.section` | 当今制胜之道 |
| `shift.win.0` | 海量的真实短视频创作 |
| `shift.win.1` | 跨受众群体的持续曝光 |
| `shift.win.2` | 社区认可（页面、策展人、创作者） |
| `shift.win.3` | 智能推广，放大正确信号 |
| `whatWeDo.title` | 协调分发是一个系统，而非赌博。 |
| `whatWeDo.section` | 三大支柱，让算法为您效力 |
| `whatWeDo.pillar.0.label` | 规模 |
| `whatWeDo.pillar.0.desc` | 用高速短视频内容淹没社交平台 |
| `whatWeDo.pillar.1.label` | 精选 |
| `whatWeDo.pillar.1.desc` | 锁定您细分领域内具有影响力的真实社区 |
| `whatWeDo.pillar.2.label` | 推广 |
| `whatWeDo.pillar.2.desc` | 一旦创意内容证明其价值，便通过付费推广放大热门内容 |
| `clipping.subtitle` | 由 2,000 多名活跃于 TikTok、Instagram 和 YouTube 的剪辑师驱动的分发网络。 |
| `creatorFlood.subtitle` | 通过真实 TikTok 用户生成内容（UGC）视频，将您的曲目大规模发布至至少 10,000 条帖子中。 |
| `trending.title` | 热门趋势与人气榜前 50 名 |
| `trending.titleLine2` | (empty string — title now single-line) |
| `trending.subtitle` | 我们助力歌曲进入 YouTube Shorts、Instagram Reels、Facebook Reels 和 TikTok 等平台的热门榜单及趋势环境。 |
| `youtube.subtitle` | 通过国际定向和优化，在保障互动率的同时最大化覆盖范围。 |
| `spotify.subtitle` | 第三方、符合音乐流派的自然歌单收录，旨在提升内容发现率并被算法推荐。 |
| `soundcloud.subtitle` | 经认证的跨流派社区转发分发，具备透明追踪与真实互动意图。 |
| `instagram.subtitle` | 在主题页面和梗账号上进行符合音乐流派的页面投放，并通过实时仪表盘进行追踪。 |
| `metaTiktok.subtitle` | 我们将经过验证的原生帖子转化为广告，从而促进流媒体播放、销售、巡演等转化。 |
| `pricing.subtitle` | 每个套餐都围绕您的发行计划、受众和目标量身打造。您可以选择单项服务，或让我们为您设计定制化组合。 |
| `pricing.footer` | 我们将根据您的发布计划、受众和目标制定最终方案。 |
| `nextSteps.subtitle` | 四个步骤。零阻力。开始吧。 |
| `nextSteps.contactRedLine` | 我们可在 24 小时内完成推荐付费方案的交付。 |
| `nextSteps.tagline` | 技术驱动 · 文化本土化 · 即刻落地 |

(All other existing Chinese strings — pros/diff bullets, KPI labels, case study copy, pricing table rows — already align with the brief and stay as-is. Numeric metrics in case studies are preserved.)

### B. Add the 5 missing namespaces (Chinese translations of the user-provided copy)

**`opSystem.*`** (Slide 2)
- `tagline` → "软件驱动 · 文化原生 · 即刻执行"
- `title` → "我们正在构建现代音乐增长的操作系统。"
- `subtitle` → translated subtitle from the brief
- `pillar.0.label / desc` → "软件基础设施" / "报告、活动追踪、工作流、实时归因、仪表盘。"
- `pillar.1.label / desc` → "分发引擎" / "歌单收录、片段剪辑、转发、种子推广、付费媒体、文化渗透。"
- `pillar.2.label / desc` → "执行层" / "策略、上线管理、优化、创意输入、人工监督。"
- `loop.inputs / engine / reporting / learnings` → "输入" / "引擎" / "报告" / "洞察"
- `takeaway` → translated takeaway from the brief

**`unifiedOps.*`** (Slide 3)
- `kicker` → "产品"
- `title` → "统一运营是核心。"
- `subtitle` → translated subtitle from the brief
- 4 modules (label + desc) translated as "接单与启动", "实时追踪", "报告层", "学习层"
- `calloutTitle` → "自学习系统"
- `calloutBody` → translated as in the brief
- `footer` → "这就是我们如何从手动执行转向活动智能的复利增长。"

**`cultureEdits.*`** (Slide 9)
- `title` → "文化剪辑"
- `subtitle`, `whatTitle` ("服务简介"), 3 `what.*` bullets, `whyTitle` ("为何有效"), 3 `why.*` bullets, `bestForLabel` ("最适合："), `bestFor` translated copy

**`websites.*`** (Slide 15)
- `title` → "网站与数字基础设施"
- `subtitle` → translated copy
- 3 cards (`card.0/1/2.title + desc`) translated: "艺人网站" / "转化基础设施" / "设计 + 速度"
- `moreLabel` → "已上线案例："
- `automationLabel` → "自动同步："
- `automation` → "新专辑和巡演日期自动更新。无需手动编辑。"
- `whyLabel` → "核心价值："
- `why` → translated copy

**`idid.*`** (Slide 16)
- `kicker` → "试点服务"
- `pilotChip` → "PILOT"
- `title` → "ID.ID"
- `tagline` → "一项由 DJ 驱动的音乐发现试点服务。"
- `subtitle` → translated copy
- 3 `what.*` bullets, 3 `why.*` bullets, `bottomNote` translated as per brief

## Out of scope

- No component edits — all 5 namespaces already render via existing `t()` calls.
- No changes to other locale files (en, es, de, fr, ja, ko, nl, pt).
- No KPI label changes, no pricing table row changes, no case study metric changes.
- No new visuals, layout, or component logic.

## Verification

After the edit, switching the deck's language picker to Simplified Chinese renders every slide (1 → 18) with full Chinese copy, with no raw key strings appearing on slides 2, 3, 9, 15, or 16.

