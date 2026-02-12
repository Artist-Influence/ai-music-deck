

# Fix Major Lazer Screenshot Layout

## Problem
The screenshots in the Major Lazer card are cut off -- the vertical screenshot on the left is cropped, and only 2 of the 3 horizontal screenshots on the right are visible. The fixed `h-[280px]` on the image grid isn't tall enough to show all 4 images properly.

## Solution
Make the Major Lazer card taller and give the image grid more room by:

1. **Remove the fixed grid height** -- instead of `h-[280px]`, use `h-[340px]` to give the 4 screenshots enough space to display fully
2. **Use `object-contain` instead of `object-cover`** on the vertical (left) image so it shows the full screenshot without cropping
3. **Increase the overall grid max-width** from `max-w-[1200px]` to `max-w-[1400px]` so both cards have more horizontal room, which also helps the right-column images fit better
4. **Reduce outer padding** from `p-16` to `p-12` to reclaim more vertical space for the cards
5. **Reduce the title size** from `text-6xl` to `text-5xl` and subtitle margin from `mb-8` to `mb-6` to free up header space

These changes together give the Major Lazer card roughly 100px more vertical space and wider horizontal space, allowing all 4 screenshots to display with the stats clearly underneath.

## Technical Details

**File: `src/components/deck/slides/CaseStudyCreatorFloodSlide.tsx`**

1. **Line 43** -- Reduce outer padding: `p-16` to `p-12`
2. **Line 47** -- Reduce title: `text-6xl` to `text-5xl`
3. **Line 48** -- Reduce subtitle margin: `mb-8` to `mb-6`
4. **Line 50** -- Widen grid: `max-w-[1200px]` to `max-w-[1400px]`
5. **Line 78** -- Increase image grid height: `h-[280px]` to `h-[340px]`
6. **Line 81** -- Change vertical image: `object-cover` to `object-contain` so the full YouTube Shorts screenshot is visible without cropping

