

## Final Alignment Pass — YouTube Ads Slide

### Changes — `src/components/deck/slides/YouTubeAdsSlide.tsx`

1. **Vertically center content inside each card**: Add `justify-center items-center` to the GlassPanel's flex-col and move the text header into the centered content wrapper so both cards have identical internal structure.

2. **Standardize both cards as identical components**: Move the case study label, artist, and track text inside the `max-w-[340px]` wrapper so all content shares one centered column. This ensures identical spacing from title → thumbnail → stats in both cards.

3. **Reduce thumbnail height** from `h-[180px]` to `h-[160px]` to tighten the composition and equalize both cards visually.

4. **Tighten vertical spacing**: Reduce card padding from `p-3` to `p-2`, reduce `mb-1.5` (track to thumbnail) to `mb-1`, keep `mb-1` between thumbnail and stats.

5. **Add `flex-1` to each GlassPanel** so both cards share equal height, preventing one from being taller than the other.

### Summary of class changes

- **Line 76** (GlassPanel): `p-3 flex flex-col` → `p-2 flex flex-col flex-1 justify-center`
- **Lines 77-79** (title block): Move inside the `max-w-[340px]` wrapper
- **Line 79**: `mb-1.5` → `mb-1`
- **Line 82**: `h-[180px]` → `h-[160px]`

No changes to left column, stat structure, or overall slide layout.

