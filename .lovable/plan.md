

# Fix Major Lazer Metrics Overlap

## Problem
The metrics row (5,000+ YT Creates, 14,900+ IG Reels, etc.) is overlapping on top of the screenshot images. The `max-h-[260px]` on the image grid container isn't effectively constraining the content because the grid children (images) expand beyond it, and the flex column layout doesn't properly allocate remaining space to the metrics.

## Solution
Give the image grid a fixed height with `overflow-hidden` and ensure the GlassPanel itself also clips overflow. The key fix is changing the image container from `max-h-[260px]` to a smaller fixed height like `h-[220px]` and ensuring `overflow-hidden` is on the container so the images are properly clipped. Additionally, add `overflow-hidden` to the GlassPanel wrapper.

## Technical Details

**File: `src/components/deck/slides/CaseStudyCreatorFloodSlide.tsx`**

1. **Line 73** - Add `overflow-hidden` to the Major Lazer GlassPanel:
   - Change: `className="p-8 flex flex-col"`
   - To: `className="p-8 flex flex-col overflow-hidden"`

2. **Line 78** - Fix the image grid container sizing:
   - Change: `className="grid grid-cols-[1fr_1.2fr] gap-2 mb-5 max-h-[260px]"`
   - To: `className="grid grid-cols-[1fr_1.2fr] gap-2 mb-5 h-[220px] overflow-hidden flex-shrink-0"`
   - `h-[220px]` gives a definite height instead of a max that children can ignore
   - `overflow-hidden` clips any image overflow
   - `flex-shrink-0` prevents the flex parent from compressing this container

These two changes ensure the images stay within their bounds and the metrics row renders cleanly below them.

