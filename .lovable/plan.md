

## Plan: Enlarge KPI boxes and swap in new YouTube Shorts screenshot for Slide 9

### Changes in `src/components/deck/slides/Top50TrendingSlide.tsx`

1. **Copy uploaded image** — Copy `user-uploads://canada_shorts_trending-2.jpeg` to `src/assets/major-lazer-canada-shorts-2.jpeg` and import it, replacing the `mlTiktok` import.

2. **Enlarge KPI column** — Change the KPI column width from `w-44` to `flex-1` so it fills half the case study card. Increase padding and text sizes on the KPI boxes (values `text-xl`, labels `text-sm`).

3. **Image column** — Keep the image side as `flex-1` (equal width to KPIs). Use `object-contain` so the full image is visible without cropping.

4. **Equal halves** — The inner flex container uses two `flex-1` children, giving a clean 50/50 split inside the case study GlassPanel.

