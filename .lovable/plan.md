## Problem

On the YouTube Ads slide, the two case study cards (Jason Derulo, Mark Tuan) have awkward vertical empty space inside the metric tiles. The cause:

- The metrics grid uses `flex-1 auto-rows-fr`, forcing the 2-row × 3-col grid to stretch and fill all leftover card height. This creates tall metric boxes with values/labels floating in the vertical middle.
- The card itself is `flex-1` inside a `justify-center` column, so each card already gets generous height, which the metrics grid then absorbs entirely.
- The header row (thumbnail + artist) is comparatively compact, which exaggerates the imbalance.

## Fix (desktop only — mobile sizing untouched)

In `src/components/deck/slides/YouTubeAdsSlide.tsx`, inside the case study card map:

1. **Stop the metrics grid from greedily filling space.** Remove `flex-1 auto-rows-fr` from the metrics grid container so tiles size to their content. Keep `grid grid-cols-3 gap-1 md:gap-2`.
2. **Let the card size to content** instead of stretching. Remove `flex-1` from the `GlassPanel` for each case card; keep `flex flex-col`. The outer right column already uses `justify-center gap-2 md:gap-4`, so the two cards will sit naturally centered with even spacing instead of being stretched.
3. **Slightly bump metric tile padding and typography on desktop** so the tiles feel intentional rather than shrunken:
   - Tile padding: `md:p-2.5` → `md:py-3 md:px-2`
   - Value text: `md:text-lg` → `md:text-xl`
   - Label text: `md:text-sm` (unchanged) but add `md:mt-0.5` for breathing room.
4. **Tighten the gap between header row and metrics:** change `mb-1.5 md:mb-3` on the header row to `mb-1.5 md:mb-4` for a slightly more balanced split.

No changes to mobile classes, no copy changes, no changes to the left column ("What we do" / "How it works") panels.

## Files

- `src/components/deck/slides/YouTubeAdsSlide.tsx` — only the case study card block (lines ~74–94).
