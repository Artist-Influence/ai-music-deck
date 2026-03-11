

## Plan: Ensure uniform KPI box sizing and spacing

### Changes in `src/components/deck/slides/Top50TrendingSlide.tsx`

1. **KPI container (line 74)**: Change `justify-between` to `justify-start` — currently `justify-between` spreads boxes unevenly if the container is taller than the content. Using a consistent `gap-4` alone ensures equal spacing.

2. **Individual KPI boxes (line 76)**: Add `flex-1` to each box so they all stretch to the same height regardless of text wrapping differences (e.g., "TikTok Creates — Popular Tab" is longer than "YT Creates").

Result: All 6 boxes will be equal height with identical 16px gaps between them.

