I’ll fix the centering by removing the stretch/fill behavior that is making the right-side asset blocks sit too high or expand unevenly, then explicitly center each asset group vertically on desktop.

### What I’ll change

1. **Slide 7 — Creator Flood**
   - Center the right-side case study asset block vertically against the slide content.
   - Stop the screenshot/image area from stretching to fill leftover height.
   - Give the image area a stable desktop height/aspect so the whole case-study card sits centered rather than expanding upward/downward unpredictably.

2. **Slide 8 — Top 50 Trending**
   - Center the Major Lazer case-study panel vertically.
   - Remove the `flex-1` stretching on the right case-study panel so it sizes to its content.
   - Keep the metrics/image layout intact, but make the overall asset group sit in the center of the slide column.

3. **Slide 10 — YouTube Advertising**
   - Fix the issue shown in your screenshot by centering the two YouTube case-study cards as one grouped asset block.
   - Remove the desktop stretch behavior from each case-study card and metrics grid so the cards no longer fill the full column height.
   - Keep both cards visually balanced, with the pair centered vertically relative to the slide.

### Technical approach

- Update the main desktop row alignment from stretch-based behavior to centered behavior where needed.
- Remove/replace desktop `flex-1` classes from the asset cards that force them to expand.
- Use explicit desktop centering classes like `md:items-center`, `md:self-center`, and `md:justify-center` on the relevant wrappers.
- Preserve the mobile stacked layouts and current visual styling.

Files to update:
- `src/components/deck/slides/CreatorFloodSlide.tsx`
- `src/components/deck/slides/Top50TrendingSlide.tsx`
- `src/components/deck/slides/YouTubeAdsSlide.tsx`