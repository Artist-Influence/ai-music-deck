

## Fix Thumbnail Frame Proportions — YouTube Ads Slide

### Problem
The thumbnail container is `h-[160px]` at full column width (~50% of 1600px = ~750px), creating a very wide, short frame. The YouTube thumbnail images are roughly 16:9, so at 750px wide they'd need ~422px tall to fill. At 160px tall, `object-contain` shrinks the image to fit the height, leaving large empty side gaps.

### Solution — `src/components/deck/slides/YouTubeAdsSlide.tsx`

**Center the thumbnail with a constrained-width wrapper** so the 160px-tall frame matches the image's natural aspect ratio instead of stretching to the full column width.

1. **Line 81**: Wrap the thumbnail container with `mx-auto` and `max-w-[285px]` (160px × 16/9 ≈ 284px) so the frame matches the image aspect ratio at 160px height. This eliminates side gaps while keeping the same height.

2. **Line 85**: Switch back from `object-contain` to `object-cover` — since the frame now matches the image ratio, cover will fill edge-to-edge without aggressive cropping.

Alternatively, a simpler approach: increase height to `h-[200px]` and use `object-cover` with the full width. This fills the frame but may crop slightly.

**Recommended approach**: Use `aspect-video` (16:9) with a max height constraint instead of a fixed height. This makes the container match the thumbnail ratio naturally:
- Replace `h-[160px]` with `aspect-video max-h-[180px]` and `w-fit mx-auto`
- Use `object-cover` since the aspect ratio now matches

Actually, the cleanest fix: keep `h-[160px]`, add `aspect-video w-auto mx-auto` to the container so it sizes its width from the height × 16:9 ratio (~284px), centered in the card. The image fills edge-to-edge.

### Changes to line 81
```
h-[160px] → h-[160px] w-auto aspect-video mx-auto
object-contain → object-cover
```

This makes the thumbnail frame 284×160px (16:9), centered in the card, with the image filling it completely. No side gaps, no aggressive cropping, no layout changes.

