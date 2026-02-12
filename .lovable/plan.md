

# Fix Major Lazer Card - Show All Screenshots

## Problem
The two-column CSS grid forces both cards to the same height. Since the Rich Brian card is shorter, the Major Lazer card gets constrained, cutting off the third horizontal screenshot (Instagram) and cropping the vertical Shorts image.

## Solution
Two key changes:

1. **Allow cards to have independent heights** by adding `items-start` to the grid container. This lets the Major Lazer card grow taller than the Rich Brian card.
2. **Increase image grid height** from `h-[340px]` to `h-[440px]` so all 4 screenshots have enough room.
3. **Remove `justify-center`** from the outer slide div and replace with `pt-8` to start content near the top, giving maximum vertical space for the taller card.
4. **Reduce outer padding** from `p-12` to `p-8` to squeeze out more room.

## Technical Details

**File: `src/components/deck/slides/CaseStudyCreatorFloodSlide.tsx`**

1. **Line 43** -- Change outer div: remove `justify-center`, reduce padding from `p-12` to `p-8`, add `pt-10` for top spacing
   - From: `p-12 flex flex-col justify-center`
   - To: `p-8 flex flex-col`

2. **Line 50** -- Add `items-start` to the grid so cards are independently sized:
   - From: `grid grid-cols-2 gap-8 max-w-[1400px]`
   - To: `grid grid-cols-2 gap-8 max-w-[1400px] items-start`

3. **Line 78** -- Increase image grid height:
   - From: `h-[340px]`
   - To: `h-[440px]`

These changes let the Major Lazer card extend below the Rich Brian card, giving the screenshot grid 440px of height -- enough for all 4 images to display fully with the stats underneath.
