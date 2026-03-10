

## Fix YouTube Ads Thumbnail Layout — Remove Side Space

### Problem
The thumbnails use `object-contain` inside a fixed `h-[160px]` container spanning the full card width. Since YouTube thumbnails are 16:9, they get letterboxed with empty dark space on the sides. The user wants the thumbnails to fill their container edge-to-edge with no wasted space.

### Solution — `src/components/deck/slides/YouTubeAdsSlide.tsx`

1. **Replace fixed height with aspect ratio**: Remove `h-[160px]` and use `aspect-video` (16:9) on the thumbnail container. This makes the image fill the full width with no side gaps.

2. **Switch back to `object-cover`**: With a proper 16:9 container matching the thumbnail's native ratio, `object-cover` will fill edge-to-edge with minimal/no cropping.

3. **Slightly increase metric styling**: Bump metric values to `text-xl` and keep labels at `text-xs` with `p-2` padding for a cleaner, more polished look.

4. **Remove `flex-1` from cards**: Replace with auto-sizing so the cards size to their content rather than stretching greedily. This prevents overflow while letting the aspect-ratio thumbnails determine the natural card height.

**Height estimate per card**: ~60px header + ~180px thumbnail (aspect-video at ~360px width) + ~100px metrics + 24px padding ≈ ~364px. Two cards + 12px gap ≈ 740px — fits comfortably.

