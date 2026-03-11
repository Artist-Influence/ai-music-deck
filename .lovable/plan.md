

## Plan: Adjust Slide 9 KPI spacing and crop screenshot

### Changes in `src/components/deck/slides/Top50TrendingSlide.tsx`

1. **Spread KPI boxes vertically** — Add `justify-between` to the KPI column so the 4 boxes distribute evenly across the full height of the case study card instead of stacking at the top.

2. **Crop the screenshot from the top** — Change the image from `object-contain` to `object-cover` with `object-[center_75%]` (or similar bottom-alignment) so the image crops from above the "Shorts" text, filling the container and eliminating empty space below the KPIs. This trims the top portion of the green screenshot while keeping the relevant "Shorts trending" content visible.

