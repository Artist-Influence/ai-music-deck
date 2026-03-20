

# Fix SoundCloud Case Study Card Internal Spacing

## Problem
Inside each case study card, `mt-auto` on the metrics grid pushes it away from the artist info, creating ugly empty space within each card. The user wants the artist info and KPI grid tightly coupled, with more space **between** the three cards instead.

## Fix — `src/components/deck/slides/SoundCloudRepostsSlide.tsx`

1. **Remove `mt-auto`** from the metrics grid (line 97) — this eliminates the internal gap between artist info and KPIs
2. **Remove `flex-1`** from each `GlassPanel` card (line 85) — cards size to their content instead of stretching
3. **Change the right column** to `justify-between` (line 83) — spreads the three naturally-sized cards evenly across the full column height, creating equal spacing between them

### Changes:
- Line 83: `gap-2 md:gap-5` → `gap-2 md:gap-0 justify-between`
- Line 85: `p-3 md:p-6 flex flex-col flex-1` → `p-3 md:p-6 flex flex-col`
- Line 97: `mt-auto` removed from metrics grid

This keeps cards compact internally while distributing them evenly across the column height.

