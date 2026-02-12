

# Fix Service Card Heights on Slide 9

## Problem
The 5 service cards in the "Additional services" slide have inconsistent heights. Cards with a "Timeframe" line are taller than those without, and varying description lengths cause further unevenness.

## Solution
Make all cards uniform by:
1. Adding `flex flex-col` to each `GlassPanel` so they stretch to fill the grid row height equally
2. Adding `flex-grow` to the description text so it pushes the timeframe (or bottom of the card) down consistently
3. Always rendering the timeframe area (even if empty) so the vertical structure is identical across all cards

## Technical Details

### File: `src/components/deck/slides/AdditionalServicesSlide.tsx`
- Add `flex flex-col` to the `GlassPanel` className so cards stretch to equal height within each grid row
- Wrap the description `<p>` with `flex-grow` so it fills remaining space
- Replace the conditional `{s.time && ...}` with an always-rendered element that shows the timeframe text or an invisible placeholder, keeping card bottoms aligned

