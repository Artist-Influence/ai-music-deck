

## Fix YouTube Ads Slide (10) — Thumbnails & Column Balance

### Problem
1. Thumbnails use `object-cover` on a fixed `h-[180px]` container, cropping the image aggressively.
2. The right column's two stacked cards don't visually match the left column's full height.

### Solution — `src/components/deck/slides/YouTubeAdsSlide.tsx`

**Thumbnail fix**: Switch from `object-cover` to `object-contain` with a `bg-black` background on the container. This shows the full image proportionally without cropping. Keep the container at a reasonable height.

**Column height alignment**: Give each case study card `flex-1` so they split the right column evenly, stretching to match the left column (which already uses `items-stretch` on the parent flex). The thumbnail container should also use `flex-1` within the card so it expands to fill available space, with `min-h-0` to allow flex shrinking.

### Changes to `YouTubeAdsSlide.tsx`

1. **Line 74** — Add `flex-1` to each `GlassPanel` card so they stretch equally:
   - `className="p-3 flex flex-col"` → `className="p-3 flex flex-col flex-1"`

2. **Line 81** — Replace fixed `h-[180px]` with `flex-1 min-h-0` so the thumbnail area grows to fill available card space:
   - `className="h-[180px] rounded-lg border border-white/[0.08] overflow-hidden mb-2"`
   → `className="flex-1 min-h-0 rounded-lg border border-white/[0.08] overflow-hidden mb-2 bg-black/30"`

3. **Line 85** — Change `object-cover` to `object-contain` to show the full thumbnail without cropping:
   - `className="w-full h-full object-cover"` → `className="w-full h-full object-contain"`

This ensures:
- Full thumbnails are visible (no cropping), displayed proportionally with a subtle dark background behind any letterbox space
- Both cards stretch equally and the right column matches the left column's height
- Stats grid remains exactly as-is — no size or layout changes

