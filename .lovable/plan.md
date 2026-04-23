

# Refresh Japanese locale to match the user's provided deck copy

## Scope

Update `src/i18n/ja.ts` so every string the deck renders in Japanese matches the user's provided copy block (slides 1 → 18). All other locale files and components stay untouched.

## Why this is needed

The Japanese file currently lacks the same 5 namespaces used on slides 2, 3, 9, 15, and 16:

- `opSystem.*` (Slide 2 — オペレーティングシステム)
- `unifiedOps.*` (Slide 3 — ユニファイド・オプス)
- `cultureEdits.*` (Slide 9 — Culture Edits)
- `websites.*` (Slide 15 — ウェブサイトとデジタルインフラ)
- `idid.*` (Slide 16 — ID.ID)

Without these keys, Japanese falls back to raw key strings on those 5 slides. Several existing values also need a refresh (e.g. `clipping.subtitle` says "20,000人以上のクリッパー" → should read "2,000人以上のクリッパー", and `nextSteps.tagline` is still in English).

## Changes — single file: `src/i18n/ja.ts`

### A. Update existing values to the new Japanese copy

| Key | New Japanese value |
|---|---|
| `cover.subtitle` | ショートフォーム、ストリーミング、カルチャーの各分野で勢いを加速させる。 |
| `cover.confidential` | 機密情報 · 2026 |
| `shift.subtitle` | 人々はもはや昔ながらの方法で曲を発見しなくなった。現在、曲は、繰り返しの露出、コミュニティによる承認、アルゴリズムによる勢い、そして既に機能している要素の上に重ねられた有料の拡散を通じて広まっていく。 |
| `shift.section` | 今日、何が勝つのか |
| `whatWeDo.title` | ギャンブルではなく、システムとしての協調的配信。 |
| `whatWeDo.section` | アルゴリズムを味方につける3つの柱 |
| `whatWeDo.pillar.2.label` | 拡散 |
| `whatWeDo.pillar.2.desc` | クリエイティブが成果を証明したら、有料広告で勝者をさらに広める |
| `clipping.subtitle` | TikTok、Instagram、YouTubeでコンテンツを制作する2,000人以上のクリッパーが支える配信ネットワーク。 |
| `creatorFlood.subtitle` | 実際のTikTok UGC動画から、最低10,000件以上の投稿にあなたの楽曲を大量投稿します。 |
| `trending.title` | トレンド＆人気タブ トップ50 |
| `trending.titleLine2` | (empty string — title now single-line) |
| `trending.subtitle` | YouTube Shorts、Instagram Reels、Facebook Reels、TikTokにおいて、楽曲を目立つチャートやトレンド環境に押し上げるお手伝いをします。 |
| `youtube.subtitle` | エンゲージメント率を維持しつつリーチを最大化するための、国際的なターゲティングと最適化。 |
| `spotify.subtitle` | 発見とアルゴリズムによるピックアップを目的とした、ジャンルに合致したサードパーティのオーガニックプレイリストへの掲載。 |
| `soundcloud.subtitle` | 透明性のあるトラッキングと真のエンゲージメント意図を備えた、ジャンル別コミュニティへの検証済みリポスト配信。 |
| `instagram.subtitle` | テーマページやミームアカウントへのジャンル特化型ページ掲載。ライブダッシュボードによる追跡機能付き。 |
| `metaTiktok.subtitle` | 実績のあるネイティブ投稿を、ストリーミング再生数、売上、ツアー開催などにつながる広告に変換します。 |
| `pricing.subtitle` | すべてのパッケージは、お客様のリリーススケジュール、オーディエンス、目標に基づいて構築されます。個別のサービスを選択するか、カスタムバンドルの設計を私たちにお任せください。 |
| `pricing.footer` | リリーススケジュール、ターゲット層、目標に合わせて最適なパッケージをご提案します。 |
| `nextSteps.subtitle` | 4つのステップ。スムーズに進めましょう。さあ、始めましょう。 |
| `nextSteps.contactRedLine` | 推奨の有料プランは24時間以内に手配可能です。 |
| `nextSteps.tagline` | ソフトウェア基盤・カルチャーに根ざした・即実行可能 |

(All other existing Japanese strings — pros/diff bullets, KPI labels, case study copy, pricing table rows — already align with the brief and stay as-is. Numeric metrics in case studies are preserved.)

### B. Add the 5 missing namespaces (Japanese translations of the user-provided copy)

**`opSystem.*`** (Slide 2)
- `tagline` → "ソフトウェア基盤・カルチャーに根ざした・即実行可能"
- `title` → "私たちは、現代の音楽成長のためのオペレーティングシステムを構築しています。"
- `subtitle` → translated subtitle from the brief
- `pillar.0.label / desc` → "ソフトウェアインフラ" / "レポート、キャンペーン追跡、ワークフロー、リアルタイムアトリビューション、ダッシュボード。"
- `pillar.1.label / desc` → "配信エンジン" / "プレイリスト掲載、クリッピング、リポスト、シード、有料メディア、カルチャーへの浸透。"
- `pillar.2.label / desc` → "実行レイヤー" / "戦略、ローンチ管理、最適化、クリエイティブの投入、人的監督。"
- `loop.inputs / engine / reporting / learnings` → "入力" / "エンジン" / "レポート" / "知見"
- `takeaway` → translated takeaway from the brief

**`unifiedOps.*`** (Slide 3)
- `kicker` → "プロダクト"
- `title` → "ユニファイド・オプスが中核です。"
- `subtitle` → translated subtitle from the brief
- 4 modules (label + desc) translated as "インテーク＆ローンチ", "ライブトラッキング", "レポートレイヤー", "ラーニング層"
- `calloutTitle` → "自己学習システム"
- `calloutBody` → translated as in the brief
- `footer` → "これが、手動での運用から、キャンペーンインテリジェンスの相乗効果へと移行する方法です。"

**`cultureEdits.*`** (Slide 9)
- `title` → "Culture Edits"
- `subtitle`, `whatTitle` ("サービス概要"), 3 `what.*` bullets, `whyTitle` ("効果の理由"), 3 `why.*` bullets, `bestForLabel` ("最適対象："), `bestFor` translated copy

**`websites.*`** (Slide 15)
- `title` → "ウェブサイトとデジタルインフラ"
- `subtitle` → translated copy
- 3 cards (`card.0/1/2.title + desc`) translated: "アーティスト向けウェブサイト" / "コンバージョンインフラ" / "デザイン＋スピード"
- `moreLabel` → "ライブ構築："
- `automationLabel` → "自動同期："
- `automation` → "新譜やツアー日程が自動的に更新されます。手動での編集は不要です。"
- `whyLabel` → "重要点："
- `why` → translated copy

**`idid.*`** (Slide 16)
- `kicker` → "パイロットサービス"
- `pilotChip` → "PILOT"
- `title` → "ID.ID"
- `tagline` → "DJ主導の音楽ディスカバリーに向けたパイロットサービス。"
- `subtitle` → translated copy
- 3 `what.*` bullets, 3 `why.*` bullets, `bottomNote` translated as per brief

## Out of scope

- No component edits — all 5 namespaces already render via existing `t()` calls.
- No changes to other locale files (en, es, de, fr, ko, nl, pt, zh).
- No KPI label changes, no pricing table row changes, no case study metric changes.
- No new visuals, layout, or component logic.

## Verification

After the edit, switching the deck's language picker to Japanese renders every slide (1 → 18) with full Japanese copy, with no raw key strings appearing on slides 2, 3, 9, 15, or 16.

