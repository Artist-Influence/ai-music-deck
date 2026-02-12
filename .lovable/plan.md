

# Fix Metric Overlap and Add Rich Brian Screenshot

## Problem
1. The Major Lazer metrics row overlaps the screenshot grid because the fixed `h-[280px]` on the image container doesn't leave enough room, and the `flex flex-col` parent doesn't properly account for it.
2. The Rich Brian card still has a placeholder instead of a real screenshot.

## Solution

### 1. Fix Major Lazer sizing overlap
- Remove the fixed `h-[280px]` from the image grid container
- Instead, use a max-height with `overflow-hidden` and let the flex column handle spacing naturally
- Change to `max-h-[260px]` so the images are constrained but the metrics aren't pushed under them
- Ensure the GlassPanel has `overflow-hidden` to prevent any content from spilling out

### 2. Add Rich Brian screenshot
- Copy uploaded screenshot to `src/assets/rich-brian-jumpy-creates.png`
- Import it in the component
- Replace the placeholder div with the actual image using `object-cover object-top` to show the top portion (title and video grid)

## Technical Details

**File: `src/components/deck/slides/CaseStudyCreatorFloodSlide.tsx`**

1. Add import: `import rbJumpy from '@/assets/rich-brian-jumpy-creates.png';`

2. Replace Rich Brian placeholder (lines 56-60):
   - Remove the `aspect-video` placeholder div
   - Add an image container with `aspect-video rounded-lg overflow-hidden` and the imported screenshot with `object-cover object-top`

3. Fix Major Lazer image grid (line 77):
   - Change `h-[280px]` to `max-h-[260px]` to prevent overflow while still constraining the images
   - This ensures the metrics row below has enough space and doesn't overlap

