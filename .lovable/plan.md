

## Narrow Case Study Card Containers — YouTube Ads Slide

### Problem
The right-column cards use `flex-1` which stretches them to fill half the slide width. The inner content is only `max-w-[340px]`, leaving large empty margins inside each card.

### Change — `src/components/deck/slides/YouTubeAdsSlide.tsx`

**Line 74**: Change the right column container from `flex-1 min-w-0` to `w-[400px] shrink-0` so it sizes to fit the content rather than expanding to fill available space.

This brings the GlassPanel card edges much closer to the `max-w-[340px]` content inside, eliminating the excess horizontal dead space while keeping the inner layout untouched.

No changes to left column, stats, thumbnails, or overall slide structure.

