
Goal: make Slide 7 fit fully within the 1920x1080 canvas so the bottom row and header are no longer clipped.

What I’ll change
1. Compress the overall vertical footprint of `src/components/deck/slides/FanpagesSlide.tsx`
   - Reduce outer slide padding slightly (`p-12` down a bit).
   - Tighten header spacing (`mb-4`, `mb-6`, etc.) so the title block consumes less height.
   - Reduce the main two-column gap a little.

2. Make the “What it is” visualizer thinner
   - Reduce the visualizer wrapper height again from `h-28` to a slimmer value so it still spans full width but uses less vertical space.

3. Tighten the left-column panels
   - Reduce the vertical gap between the three left-side `GlassPanel`s.
   - Slightly reduce panel padding where needed so “How it works” and the timeframe line fit without clipping.

4. Tighten the right-column case studies
   - Slightly reduce case study panel padding and internal spacing.
   - If needed, slightly reduce the clip thumbnail width and metrics grid gap so the Skrillex card fits fully.

Why this approach
- The screenshot shows this is no longer just a visualizer-height issue; the whole slide stack is too tall.
- The safest fix is a small, coordinated reduction across spacing/padding rather than shrinking text or changing content structure.

Files to update
- `src/components/deck/slides/FanpagesSlide.tsx`
- Likely no changes needed in `src/components/deck/FanpageVisualizer.tsx` unless the wrapper height alone is insufficient.

Expected result
- Top heading fully visible
- “How it works” panel and timeframe fully visible
- Skrillex case study fully visible
- Visualizer remains edge-to-edge inside “What it is,” but thinner vertically
