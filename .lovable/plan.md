

## Adjust YouTube Ads (Slide 10) Case Study Sizing

### Problem
The thumbnails are constrained by `max-h-[180px]` which crops them, and the right column may not align with the left column height.

### Changes to `src/components/deck/slides/YouTubeAdsSlide.tsx`

1. **Remove `max-h-[180px]`** from the thumbnail container (line 81) — keep `aspect-video` so the image scales naturally to fill the card width without cropping.

2. **Add `flex-1`** to each `GlassPanel` card (line 76) so both cards stretch equally and the right column total height matches the left column via the existing `items-stretch` on the parent flex.

3. **Make the thumbnail flex-grow** inside each card so extra vertical space goes to showing more of the image rather than adding whitespace elsewhere. Change the image container to `flex-1 min-h-0` with `aspect-video` removed, using `object-cover` on the img to fill available space.

4. **Reduce padding** from `p-5` to `p-4` on each card to reclaim space for the thumbnails.

**Concrete layout per card:**
- Card: `flex-1 p-4 flex flex-col`
- Thumbnail container: `flex-1 min-h-0 rounded-lg border overflow-hidden mb-3`
- Image: `w-full h-full object-cover`
- Metrics grid: stays `grid-cols-3 gap-2` (no flex-grow, sits at bottom)

This ensures both cards split the right column evenly, thumbnails fill available space without a hard max-height, and the right column height matches the left.

