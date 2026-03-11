

## Plan: Redesign Slide 9 Case Study Layout

### Changes in `src/components/deck/slides/Top50TrendingSlide.tsx`

1. **Remove 3 screenshot imports** — Keep only `mlTiktok` (the green TikTok Popular tab screenshot). Remove `mlShorts`, `mlFacebook`, `mlIg` imports and the `screenshots` array.

2. **Update TikTok Creates metric** — Change from `{ val: '2,000+', label: 'TikTok Creates' }` to `{ val: '2,000+', label: 'TikTok Creates — Popular Tab' }` (or similar) to note the Popular Tab achievement.

3. **Restructure case study card layout** — Replace the current vertical stack (screenshots grid → metrics grid) with a horizontal two-column flex layout inside the GlassPanel:
   - **Left half**: 4 KPI boxes stacked in a single column (`flex flex-col gap-3`), each with value + label
   - **Right half**: The TikTok Popular tab image (`mlTiktok`) displayed with `object-contain` so the full image is visible, filling the right side of the card

4. **Keep header text** — "Case Study", "Major Lazer", "MINI SKIRT", and the overview paragraph remain above the two-column layout.

