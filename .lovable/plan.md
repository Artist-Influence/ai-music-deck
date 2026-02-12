

# Case Study Slide Updates

## 1. Rich Brian metric fix (Slide 15 -- Creator Flood)
- Change "Total Creates" from `23,000+` to `23,000+` (this is correct as our posts driven)
- Add a new metric: `29,900+` / `Total Sound Creates` to show the full picture -- we drove 23K posts, song has 29.9K total creates

## 2. Creator Flood slide -- add screenshot placeholders
- Add a row of image placeholders below each card:
  - **Major Lazer**: 2-3 vertical screenshot placeholders for trending proof (e.g. Popular Tab, Shorts trending)
  - **Rich Brian**: 1 horizontal/landscape screenshot placeholder for campaign results
- These sit between the overview text and the metrics grid within each card

## 3. Reorder Skrillex to slide 14
- Move `CaseStudySkrillexSlide` to right after `CaseStudySlide` (Subtronics) in `index.tsx`
- New order: Subtronics (13) -> Skrillex (14) -> Creator Flood (15) -> Platform (16) -> Clipping (17)
- Add `10K+` / `Followers (1 month)` metric to the Skrillex results grid

## 4. Platform slide -- add screenshot placeholders
- Add an image placeholder area within each of the 3 cards (YouTube, Spotify, Instagram) for future screenshots
- Small landscape placeholder below the overview text in each card, same consistent size

## 5. Clipping slide -- add cover art + clip links
- Add a square cover art placeholder at the top of each card (album/single artwork area)
- Add 1-2 clip link placeholders below the metrics in each card (styled as small link buttons labeled "Watch Clip 1", "Watch Clip 2")

## Technical Details

### File: `src/components/deck/slides/index.tsx`
- Swap line positions: move `CaseStudySkrillexSlide` from after `CaseStudyCreatorFloodSlide` to right after `CaseStudySlide`

### File: `src/components/deck/slides/CaseStudyCreatorFloodSlide.tsx`
- Update Rich Brian metrics: change `'23,000+'` label to `'Posts Driven'`, add `{ val: '29,900+', label: 'Total Creates' }`
- Add screenshot placeholder areas inside each card:
  - Major Lazer: 3 vertical placeholders in a row (aspect-[9/16]) for trending screenshots
  - Rich Brian: 1 horizontal placeholder (aspect-video) for campaign screenshot

### File: `src/components/deck/slides/CaseStudySkrillexSlide.tsx`
- Add metric `{ val: '10,000+', label: 'Followers (1 mo)' }` to the results grid

### File: `src/components/deck/slides/CaseStudyPlatformSlide.tsx`
- Add a landscape image placeholder (aspect-video, same glass styling) inside each card between overview and metrics

### File: `src/components/deck/slides/CaseStudyClippingSlide.tsx`
- Add a square cover art placeholder at top of each card (aspect-square, rounded, glass border)
- Add 1-2 link placeholders below the metrics grid in each card, styled as small outlined buttons ("Watch Clip 1", "Watch Clip 2")
