

# Rearrange Major Lazer Screenshot Grid

## Problem
The current 2x2 grid treats all 4 screenshots equally, but one image (YouTube Shorts / Canada) is vertical while the other three (Facebook, TikTok, Instagram) are horizontal. This creates uneven sizing.

## Solution
Switch from a 2x2 grid to a **two-column layout**: the vertical Canada Shorts image fills the left column at full height, and the 3 horizontal images stack evenly on the right.

## Technical Details

**File: `src/components/deck/slides/CaseStudyCreatorFloodSlide.tsx`**

Replace the current `grid grid-cols-2` screenshot block (around lines 77-82) with a flex/grid layout:

- Left column: Single vertical image (`major-lazer-canada-shorts.jpeg`) filling the full height
- Right column: 3 horizontal images (`major-lazer-facebook-trending.jpeg`, `major-lazer-tiktok-popular.jpeg`, `major-lazer-ig-trending.jpeg`) stacked with equal spacing
- Use `grid grid-cols-2` with a fixed height container
- Left image: `h-full object-cover` to fill the column
- Right images: each gets `flex-1` with `object-cover` and `overflow-hidden` so they crop to uniform rectangular shapes and distribute evenly
- Reorder the `majorLazerScreenshots` array so the vertical image (Canada Shorts) is index 0, then render it separately from the other 3

