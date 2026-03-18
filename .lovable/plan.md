

# Desktop layout fixes: centering and equal-height columns

## Issues
1. **Slide 5 (HowWeWorkSlide)**: Content block has `max-w-[1400px]` but no `mx-auto`, so it sits left-aligned.
2. **Slides 6, 10, 11, 12, 13**: The left column (title + info panels) and right column (case studies) don't match in height. The panels need to stretch to fill available vertical space so both columns are visually balanced.

## Fixes

### Slide 5 — HowWeWorkSlide
- Add `mx-auto` to the inner `max-w-[1400px]` wrapper to center all content.

### Slide 6 — ClippingSlide
- The title/subtitle sit above the two-column flex, which is fine. The left column's two `GlassPanel` components need to stretch to fill the right column's height.
- Add `flex-1` to both left-side GlassPanels so they grow equally to match the 3 stacked case study cards on the right.
- Ensure the left column wrapper has `flex-col` with proper stretch.

### Slides 10–13 (Spotify, SoundCloud, Instagram, Meta/TikTok)
- These already have `items-stretch` on the flex row, but the left-side panels don't fill the space.
- Add `flex-1` to both desktop GlassPanels in the left column (the "What it is" and "Why it works" / "How it works" panels).
- For AdditionalServicesSlide, same treatment on "What it is" and "How it works" panels.
- This makes the left column's total height match the right column's stacked case studies.

## Files
- `src/components/deck/slides/HowWeWorkSlide.tsx` — add `mx-auto`
- `src/components/deck/slides/ClippingSlide.tsx` — add `flex-1` to both GlassPanels
- `src/components/deck/slides/SpotifyPlaylistingSlide.tsx` — add `flex-1` to both desktop panels
- `src/components/deck/slides/SoundCloudRepostsSlide.tsx` — same
- `src/components/deck/slides/InstagramSeedingSlide.tsx` — same
- `src/components/deck/slides/AdditionalServicesSlide.tsx` — same

