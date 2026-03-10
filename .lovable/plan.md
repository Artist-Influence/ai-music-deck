

## Widen Cards + Align Thumbnail to KPI Grid — YouTube Ads Slide

### Changes — `src/components/deck/slides/YouTubeAdsSlide.tsx`

1. **Widen right column**: `w-[480px]` → `w-[520px]` (moderate increase, not back to oversized)

2. **Widen inner content wrapper**: `max-w-[400px]` → `max-w-[440px]` so content fills the wider card

3. **Make thumbnail fill the same width as the KPI grid**: Remove `w-auto aspect-video mx-auto` from the thumbnail container and replace with `w-full` so it stretches to match the full width of the content column (same as the grid below it). Keep `h-[160px]` for height control.

This ensures the thumbnail, KPI grid, and title text all share the same content width, creating one unified vertical module inside each card.

No changes to left column, stats, card structure, or overall slide layout.

