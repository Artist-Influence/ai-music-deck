

## Enlarge Left Column Text to Match Case Study Height — Slide 13

The left service info column is shorter than the right case study panel. We need to increase text sizes and padding in the left column so they vertically align at the bottom.

### Changes to `InstagramSeedingSlide.tsx`

1. **Left column**: Add `flex flex-col justify-between` so it stretches to match the right column height (line 18)
2. **Bump body text in GlassPanels**: `text-base` → `text-lg` for the descriptions (lines 31, 40)
3. **Bump panel headers**: `text-xl` → `text-2xl` (lines 30, 39)
4. **Bump panel padding**: `p-5` → `p-6` (lines 29, 38)
5. **Bump timeframe text**: `text-base` → `text-lg` and `p-4` → `p-5` (lines 47-48)
6. **Bump subtitle**: `text-xl` → `text-2xl` (line 24)
7. **Use `items-stretch`** on the parent flex row instead of `items-start` so both columns match height (line 16)

