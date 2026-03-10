

## Remove Budget metric from Instagram Seeding case studies

### File: `src/components/deck/slides/InstagramSeedingSlide.tsx`

1. **Remove the Budget entry** from each case's `metrics` array (lines 13, 24, 35), leaving 3 metrics per case (Views, Likes, CPM).
2. **Change grid from 4 to 3 columns** on line 99: `grid-cols-4` → `grid-cols-3` so the remaining metrics space evenly.

