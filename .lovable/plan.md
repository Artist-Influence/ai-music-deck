## Goal
Every line of copy that sits **outside** a `GlassPanel` (i.e. directly on the visualizer/background) must read as white with the existing `text-on-visual` glow. Copy **inside** cards stays as-is so card hierarchy (primary headers, muted body) is preserved.

## Audit — non-card text currently rendering in grey/off-white

### 1. Service slides (PatternVisual backdrop)
Hero subtitles currently use `text-foreground/80` — switch to `text-on-visual-soft` (true white + glow):
- `ClippingSlide.tsx` L36 — subtitle
- `CreatorFloodSlide.tsx` L29 — subtitle
- `Top50TrendingSlide.tsx` L33 — subtitle
- `YouTubeAdsSlide.tsx` L41 — subtitle
- `SpotifyPlaylistingSlide.tsx` L59 — subtitle
- `InstagramSeedingSlide.tsx` L38 — subtitle
- `SoundCloudRepostsSlide.tsx` L43 — subtitle
- `AdditionalServicesSlide.tsx` L60 — subtitle
- `WebsitesSlide.tsx` L57 — subtitle
- `CultureEditsSlide.tsx` L68 — subtitle
- `IdIdSlide.tsx` L52 — subtitle, L53 italic bottom note
- `IdIdSlide.tsx` L38 tagline (`text-primary/90` on backdrop) → keep red but add `text-on-visual-accent`

### 2. Case study slides (no backdrop visualizer, dark background)
H1 + subtitle sit directly on background — promote to white:
- `CaseStudySlide.tsx` L16 H1 (`text-foreground` → `text-on-visual`), L17 subtitle (`text-muted-foreground` → `text-on-visual-soft`)
- `CaseStudySkrillexSlide.tsx` L16/L17 — same swap
- `CaseStudyClippingSlide.tsx` L47/L48 — same swap
- `CaseStudyPlatformSlide.tsx` L40/L41 — same swap
- `CaseStudyCreatorFloodSlide.tsx` L35 H1, L36 subtitle — same swap

### 3. Info-style slides without GlassPanel backdrop
- `ReportingSlide.tsx` L22 H1 (`text-foreground` → `text-on-visual`), L23 subtitle (`text-muted-foreground` → `text-on-visual-soft`)
- `ExpectationsSlide.tsx` L20 H1, L21 subtitle — same swap
- `UGCHacksSlide.tsx` L7 H1 (`text-foreground` → `text-on-visual`), L10 subtitle (`text-muted-foreground` → `text-on-visual-soft`)

### 4. NextStepsSlide
Already mostly white; one stray:
- L57 `text-muted-foreground/80` company name → `text-white/80`
- L58 `text-muted-foreground` URL → `text-white/85`
(L42/43/63 already white.)

### 5. CoverSlide
- L24 confidential footer (`text-muted-foreground/40`) — leave as-is (intentional faded watermark, sits on CoverVisual which is dark/empty there). **No change.**

## What stays grey (intentional — inside cards)
All `text-muted-foreground` inside `<GlassPanel>` blocks (bullet bodies, track names, KPI labels, "What it is" body copy, Reporting/Expectations right-hand "subtle" panels). These provide hierarchy against the primary/foreground headings inside cards.

## Implementation
Single-line `text-*` swaps using `code--line_replace`. No new utilities needed — `text-on-visual` and `text-on-visual-soft` (defined in `src/index.css`) already provide white + drop-shadow glow.

**Files touched (≈20):** all 5 case-study slides, ReportingSlide, ExpectationsSlide, UGCHacksSlide, NextStepsSlide, IdIdSlide, ClippingSlide, CreatorFloodSlide, Top50TrendingSlide, YouTubeAdsSlide, SpotifyPlaylistingSlide, InstagramSeedingSlide, SoundCloudRepostsSlide, AdditionalServicesSlide, WebsitesSlide, CultureEditsSlide.

Approve and I'll ship the swaps.