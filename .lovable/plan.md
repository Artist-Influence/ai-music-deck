

## Remove Empty Space Below Text Boxes on Slide 15

**File:** `src/components/deck/slides/ReportingExpectationsSlide.tsx`

The panels currently use `flex-1` which forces them to expand and fill all available vertical space, creating empty space below the content. Fix: remove `flex-1` from each GlassPanel and from the wrapping divs so the boxes only take up as much height as their content needs. The grid container should also not force `h-full` — instead use `items-start` to keep everything top-aligned without stretching.

### Changes:
1. **Line 33** — Remove `h-full` from the grid container so it doesn't force full height
2. **Lines 39, 50, 67, 78** — Remove `flex-1` from each GlassPanel so they size to content
3. **Lines 39, 67** — Remove `flex-1` from the panel wrapper divs

