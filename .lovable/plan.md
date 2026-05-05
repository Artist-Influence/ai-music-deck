## Fixes: YouTube panel, Top 50 spacing, Slide 5 spacing + bubbles

### 1. Slide 10 (YouTube Ads) — rename "How it works" → "Why it works", match colors
In `src/components/deck/slides/YouTubeAdsSlide.tsx`:
- Change the second `GlassPanel` `variant="subtle"` → `variant="bright"` so it matches the "What it is" panel.

In `src/i18n/en.ts` (and all 10 other locale files):
- Update `youtube.howTitle` value from `"How it works"` → `"Why it works"` (key name kept as-is to avoid touching other files' keys; only the display string changes). For non-English locales, mirror the same English string update where they currently say the localized "How it works" — keep existing localized translations but reword to the locale's "Why it works" equivalent.

### 2. Slide 8 (Top 50 Trending) — fix spacing in "When to use" panel
In `src/components/deck/slides/Top50TrendingSlide.tsx`, the third GlassPanel ("When to use" / `trending.whenTitle`) currently uses tight spacing that causes cramping:
- Increase bullet list spacing: `space-y-1.5 md:space-y-2.5` → `space-y-2 md:space-y-3.5`
- Increase divider top padding/margin: `pt-2 md:pt-3` and `mt-2 md:mt-3` → `pt-3 md:pt-5` and `mt-3 md:mt-5`
- Title bottom margin: `mb-2 md:mb-3` → `mb-3 md:mb-5`

### 3. Slide 5 (What We Do) — pillar panel spacing + larger hub bubbles
In `src/components/deck/slides/WhatWeDoSlide.tsx`:

**Pillar GlassPanels** (Volume / Curation / Amplification):
- Change layout so title and subtext have visible breathing room. Currently `flex-col md:flex-row items-start md:items-center gap-2 md:gap-6`. Update to:
  - Mobile gap: `gap-2` → `gap-3`
  - Desktop gap: `md:gap-6` → `md:gap-10`
  - Increase panel padding: `p-4 md:p-6` → `p-5 md:p-7`
  - Bump space between panels: `space-y-2 md:space-y-3` → `space-y-3 md:space-y-4`

**HubDiagram bubbles** — make outer nodes larger so 2-line text fits comfortably:
- Outer node radius `r: 44` → `r: 58` for all three (Short-form Content, Communities & Culture, Streaming Platforms).
- Slightly nudge node positions so larger circles don't clip the viewBox/center node:
  - `Short-form Content`: `cx: 460, cy: 100` → `cx: 470, cy: 92`
  - `Communities & Culture`: `cx: 120, cy: 200` → `cx: 105, cy: 195`
  - `Streaming Platforms`: `cx: 380, cy: 440` → `cx: 390, cy: 450`
- Bump outer-node label font sizes for legibility in larger circles: line 1 `fontSize="15"` → `"16"`, line 2 `fontSize="13"` → `"14"`; adjust `y` offsets accordingly (`cy - 6` → `cy - 4`, `cy + 14` → `cy + 16`).
- Keep the central "Your Song" node (`r: 72`) and connections unchanged.

No other slides or i18n strings affected.
