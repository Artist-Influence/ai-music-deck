

## Refine Case Study Card Internal Layout — YouTube Ads Slide

### Change — `src/components/deck/slides/YouTubeAdsSlide.tsx`

**Problem**: The thumbnail and stats stretch to the full card width, making the content feel flat and disconnected. The stat cells are too wide and shallow.

**Solution**: Add a centered, narrower content column inside each card for the thumbnail + stats, while keeping the card outer size unchanged.

1. **Lines 80-96** — Wrap the thumbnail and stat grid in a `<div className="max-w-[340px] mx-auto w-full">` to create a tighter centered content column inside each card.

2. **Line 81** — Reduce thumbnail-to-stats gap from `mb-2` to `mb-1` to anchor them together.

3. **Line 89** — Keep `grid-cols-2 gap-1` but the narrower parent container will naturally make stat cells more compact and proportional.

4. **Line 91** — Increase stat cell vertical padding from `py-1.5` to `py-2` to give each stat more height, making them feel like KPI chips rather than flat rectangles.

This keeps the outer card, left column, and overall slide fit completely untouched. Only the internal content width and spacing within each case study card changes.

