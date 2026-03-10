

## Rebalance Left/Right Columns — YouTube Ads Slide

### Changes — `src/components/deck/slides/YouTubeAdsSlide.tsx`

1. **Constrain left column width**: Change line 41 from `flex-1 min-w-0` to `flex-1 min-w-0 max-w-[600px]`. This shortens the text measure in the copy boxes for better readability.

2. **Widen right column**: Change line 74 from `w-[400px]` to `w-[480px]`. This gives the case study cards more breathing room without going back to the overly wide state.

3. **Widen inner content**: Change line 77 from `max-w-[340px]` to `max-w-[400px]` so the thumbnail and KPI stack fill the wider card naturally.

This shifts ~80px of horizontal space from left to right, balancing both columns without changing any internal structure, stats, or proportions.

