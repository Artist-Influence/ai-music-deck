## Goal

Make the two YouTube case study cards (right column) collectively fill the same vertical height as the left column ("What we do" + "How it works" stack) on desktop. Mobile stays unchanged.

## Why it currently looks short

The right column is `flex-1 flex flex-col justify-center gap-2 md:gap-4`, but its children (the case cards) have no `flex-1`, so they size to content and sit centered with empty space above/below. Meanwhile the left column's two panels both use `flex-1`, so they stretch to fill the full row height.

## Fix

In `src/components/deck/slides/YouTubeAdsSlide.tsx`, in the right-column case-study block:

1. Right column wrapper: change `justify-center` to `md:justify-center` (kept as a no-op fallback) and ensure it remains a full-height flex column. Effectively: `flex-1 flex flex-col gap-2 md:gap-4 md:justify-center`.
2. Each case `GlassPanel`: add `md:flex-1` so both cards share the column height equally on desktop.
3. Metrics grid inside each card: add `md:flex-1 md:auto-rows-fr` so the grid expands to absorb the extra height (instead of leaving empty space below the metrics) and the two metric rows split that space evenly.

Result: the two cards stack to exactly match the left column's height, with the metric tiles growing slightly to fill — keeping the balanced look from the previous fix but now anchored to the left column's height.

## Files

- `src/components/deck/slides/YouTubeAdsSlide.tsx` — only the right-column block (lines ~72–94).
