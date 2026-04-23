

# Fix Slide 11 case study image/metrics height alignment

## Problem
The screenshot image is taller than the column of 6 metric tiles next to it, creating uneven bottom spacing inside the case study panel. Image should match the metrics column height and the whole pair should center within the panel.

## Fix (single file: `src/components/deck/slides/Top50TrendingSlide.tsx`)

1. **Make the inner row stretch and center vertically inside the panel**
   - Change the metrics+image row to `items-stretch` and add `my-auto` so it centers vertically within the case study `GlassPanel`.
   - Change row from `flex-1` (fills remaining height) to a content-sized row that centers — remove `flex-1` on the row, keep `flex-1` on the panel only.

2. **Match image height to the metrics column**
   - Wrap the `<img>` in a container that uses `h-full` and let the image fill it: `className="h-full w-auto max-h-full max-w-full object-contain rounded-lg"`.
   - Image column becomes `flex-1 flex items-stretch justify-center` (no internal centering padding).
   - Remove the `max-w-[420px] mx-auto` constraint on the img so it can grow to match the metrics column height naturally; cap width via the parent flex column instead.

3. **Ensure metrics column defines the height**
   - Metrics column keeps `flex flex-col gap-3` with each tile `flex-1` so 6 tiles distribute evenly and define the row height.
   - Image column then matches that height via `items-stretch` + `h-full` on the img.

4. **Center the whole metrics+image block inside the panel**
   - On the case study `GlassPanel`, change inner layout to `justify-center` so the title/subtitle + image-row pair sits centered vertically with even top/bottom padding.

## Out of scope
- Mobile layout (image is `hidden md:flex`, mobile already stacks fine).
- Changing tile content, image asset, or panel padding beyond what's needed for centering.

