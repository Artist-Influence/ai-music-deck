
# Add Major Lazer Trending Screenshots

## Overview
Replace the 3 vertical placeholder slots in the Major Lazer card with 4 real screenshots showing trending proof across YouTube Shorts, Facebook, TikTok, and Instagram. Adjust the grid to a 2x2 layout so all 4 images fit neatly.

## Assets
Copy 4 uploaded images into `src/assets/`:
- `major-lazer-canada-shorts.jpeg` (YouTube Shorts -- #11 Canada Daily Top Songs)
- `major-lazer-facebook-trending.jpeg` (Facebook -- "For you" audio listing)
- `major-lazer-tiktok-popular.jpeg` (TikTok -- Popular tab, 1739 videos)
- `major-lazer-ig-trending.jpeg` (Instagram -- #4 in Trending, 15K reels)

## Layout Change
- Switch from 3-column vertical placeholders to a **2x2 grid** of images
- Each image uses `aspect-[3/4]` with `object-cover object-top` and `overflow-hidden` so they display cleanly
- Rounded corners and a subtle border to match the glass aesthetic

## Technical Details

### File: `src/components/deck/slides/CaseStudyCreatorFloodSlide.tsx`
- Import the 4 new images at the top
- Remove the generic `screenshots` config from the Major Lazer data object
- Replace the vertical placeholder rendering block for Major Lazer with a dedicated 2x2 grid showing the 4 imported images
- Keep Rich Brian's horizontal placeholder as-is (no screenshot provided for it yet)
- Each image rendered as `<img>` inside a rounded container with `object-cover object-top`
