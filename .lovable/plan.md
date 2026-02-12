

# Fix Major Lazer Screenshot Sizing

## Problem
The 2x2 image grid currently forces `aspect-[3/4]` (portrait) on every screenshot container. Some of the Major Lazer screenshots are horizontal/landscape, so their stats and key information get cropped.

## Solution
Remove the fixed `aspect-[3/4]` from the image containers and let each image render at its natural aspect ratio. The images will still be constrained by the grid column width but won't be vertically cropped.

## Technical Details

**File: `src/components/deck/slides/CaseStudyCreatorFloodSlide.tsx`**

- Line 79: Change `aspect-[3/4]` to no forced aspect ratio
- Replace: `className="aspect-[3/4] rounded-lg border border-white/[0.08] overflow-hidden"`
- With: `className="rounded-lg border border-white/[0.08] overflow-hidden"`
- Change the `<img>` from `w-full h-full object-cover object-top` to `w-full h-auto` so images display fully without cropping

This lets portrait screenshots stay tall and landscape screenshots stay wide, all fitting naturally within the 2-column grid.

