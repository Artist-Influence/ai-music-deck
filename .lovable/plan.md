

## Match Right Column Panel Heights to Left Column

**Problem:** The left column has 5 + 3 items while the right has 3 + 3 items, so the right panels are shorter. They need to match heights row-by-row.

**Fix in `src/components/deck/slides/ReportingExpectationsSlide.tsx`:**

Use `grid grid-rows-[auto_1fr_auto_1fr]` on the outer grid (or simpler: use CSS subgrid / explicit min-heights). The most straightforward approach: switch the inner panel wrappers to use `flex-1` so each row's panels stretch to match the tallest panel in that row by making the two-column grid aware of row alignment.

Specifically:
1. Change the outer container from `grid grid-cols-2` to also use `grid-rows-[auto_1fr_1fr]` with `items-start` replaced by `items-stretch`, and move the titles/subtitles and each panel into explicit grid rows using a subgrid or flattened structure.

**Simpler approach:** Keep the current structure but add `flex-1` back to each GlassPanel within each column, and use `items-stretch` on the grid so both columns are the same height. This forces the right panels to stretch to match the left.

Changes:
- Line 33: Change `items-start` to `items-stretch` on the grid
- Lines 39, 67: Add `flex-1` to each inner `flex flex-col gap-4` wrapper
- Lines 40, 50, 68, 78: Add `flex-1` to each GlassPanel className

This ensures left and right columns are the same total height, and within each column the two panels split the space equally — making all four panels the same height.

