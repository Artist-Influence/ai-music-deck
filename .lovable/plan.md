

# Expand Cards to Fit Screenshots and Metrics

## Problem
The `h-[220px]` constraint on the image grid keeps the metrics from overlapping, but now the screenshots are visibly cut off. The cards need more vertical space overall.

## Solution
Increase the available space by:
1. Reducing the outer slide padding from `p-24` to `p-16` to give more vertical room
2. Reducing the header bottom margin from `mb-12` to `mb-8`
3. Increasing the image grid height from `h-[220px]` to `h-[280px]` so screenshots show more content
4. Reducing internal card padding from `p-8` to `p-6` on both cards to reclaim space
5. Reducing text spacing slightly (`mb-4` to `mb-3`, `mb-5` to `mb-4`) to tighten the layout

These changes together free up roughly 100-120px of vertical space, allowing the image grid to be taller without the metrics overlapping.

## Technical Details

**File: `src/components/deck/slides/CaseStudyCreatorFloodSlide.tsx`**

1. **Line 43** - Reduce outer padding:
   - `p-24` to `p-16`

2. **Line 48** - Reduce subtitle margin:
   - `mb-12` to `mb-8`

3. **Lines 52, 73** - Reduce card padding on both GlassPanels:
   - `p-8` to `p-6`

4. **Lines 55-56, 76-77** - Tighten text spacing in both cards:
   - Track name: `mb-4` to `mb-3`
   - Overview: `mb-5` to `mb-4`

5. **Line 78** - Increase image grid height:
   - `h-[220px]` to `h-[280px]`

6. **Line 57** - Reduce Rich Brian screenshot wrapper margin:
   - `mb-5` to `mb-4`

