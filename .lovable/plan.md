

## Plan: Restructure Slide 4 Layout — Full-Width Title + Repositioned Visualizer

### Changes in `src/components/deck/slides/WhatCloutedDoesSlide.tsx`

**Problem**: The current side-by-side flex layout constrains the title to `max-w-[700px]`, causing it to wrap onto 3 lines. The visualizer sits beside the text, overlapping vertically.

**Solution**: Switch to a vertical layout where the title spans the full width across the top, then the pillars and visualizer sit side-by-side below.

1. **Full-width title**: Move the `h1` and subtitle `p` outside the flex row, placed at the top of the slide spanning full width. Reduce font size slightly to `text-4xl` to ensure single-line fit across the full width.

2. **Content row below**: Keep the three pillars and the visualizer in a side-by-side flex row underneath the title.

3. **Push visualizer down**: Add `self-end` or `mt-auto` to the visualizer container so it sits lower in its column, avoiding any overlap with the title area. Shrink visualizer to `w-[380px] h-[380px]`.

