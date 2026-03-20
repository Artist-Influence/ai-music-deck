
# Fix Slide 11 (SoundCloud Reposts) — Left/Right Column Height Alignment

## Problem
Slide 11 has the same layout issue as Slide 10: the left column stretches with `flex-1`, but the three case study cards on the right are still using natural height, so the bottom edges don’t align.

## Fix
Update the case study `GlassPanel` cards in `src/components/deck/slides/SoundCloudRepostsSlide.tsx` to also use `flex-1`, so the three cards stretch evenly and the full right column matches the left column’s total height.

## File
`src/components/deck/slides/SoundCloudRepostsSlide.tsx`

## Exact change
Change the case-study card wrapper from:
```tsx
<GlassPanel key={idx} variant="bright" className="p-3 md:p-5 flex flex-col">
```

to:
```tsx
<GlassPanel key={idx} variant="bright" className="p-3 md:p-5 flex flex-col flex-1">
```

## Expected result
- The right column fills the same vertical space as the left column
- The top of the title block and the bottom of the final panel/card line up visually
- Behavior stays unchanged on mobile because the stacked mobile layout is separate

## Technical note
This matches the same layout pattern already used on Slide 10 and follows the deck’s multi-column stretch strategy: both informational panels and case-study cards should use flex growth so each side shares the same overall height.
