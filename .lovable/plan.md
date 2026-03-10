

## Two Changes: Slide 8 Text Alignment + Slide 10 Full Rescale

### 1. Slide 8 (Creator Flood) — Remove vertical centering

Remove `justify-center` from both left-side GlassPanels so text sits at the top of each box instead of being centered.

- Line 32: `flex-1 flex flex-col justify-center` → `flex-1 flex flex-col`
- Line 39: `flex-1 flex flex-col justify-center` → `flex-1 flex flex-col`

### 2. Slide 10 (YouTube Ads) — Full rescale + two stacked case studies

**Left column:**
- Outer padding `p-24` → `p-12`
- Left column layout: add `flex-1 flex flex-col gap-4`
- Title `text-5xl` → `text-6xl`
- Subtitle `text-xl` → `text-2xl`, margin `mb-10` → `mb-6`
- Panel headings `text-xl` → `text-2xl`, body `text-lg` → `text-2xl`
- Panel padding `p-5` → `p-8`, add `flex-1` so boxes stretch
- Timeframe `text-lg` → `text-2xl`, padding `p-4` → inline text (no panel needed, or keep panel with `p-5`)
- Remove `space-y-5` wrapper, use flex gap instead

**Right column — two stacked case studies:**
- Restructure to `flex-1 flex flex-col gap-4`
- Keep existing Jason Derulo case study as first card (compact: smaller image area)
- Add a second empty/placeholder case study card below it with the same GlassPanel structure but placeholder content (title, subtitle, description, image placeholder, metrics grid)
- Both cards get `flex-1` so they split the height evenly
- Metric values `text-xl` → `text-2xl`, labels `text-sm` → `text-lg`, padding `p-3` → `p-4`
- Case study text scaled to `text-2xl` / `text-3xl`

