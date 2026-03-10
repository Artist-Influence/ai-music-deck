

## Final Structural Fix — YouTube Ads Slide

### Problem
Title, thumbnail, and KPI grid inside each case study card are sizing independently. The fix is to lock all three to one shared-width container.

### Changes — `src/components/deck/slides/YouTubeAdsSlide.tsx`

**1. Rebalance columns**
- Left column: `max-w-[600px]` → `max-w-[540px]` (tighter text measure)
- Right column: `w-[520px]` → `w-[560px]` (more breathing room)

**2. Lock inner content to a single fixed width**
- Change `max-w-[440px]` inner wrapper to `w-[460px]` (fixed, not max). This forces title, thumbnail, and KPI grid to all render at exactly 460px wide inside the card.
- Thumbnail `div` already uses `w-full` — it will inherit 460px from the parent.
- KPI grid already uses `w-full` via `grid` — it will also inherit 460px.
- Title text block sits in the same container — same width.

All three elements share one axis, centered inside the outer GlassPanel via `mx-auto`.

**3. Increase card padding slightly**
- GlassPanel padding: `p-2` → `p-4` for cleaner outer breathing room around the locked content column.

### Result
- One `w-[460px]` container controls all content widths
- Thumbnail, KPI grid, and title are pixel-aligned
- Outer card (560px column + p-4 padding) frames the content with consistent margins
- Left column pulls in for cleaner text measure
- No independent sizing on any sub-element

