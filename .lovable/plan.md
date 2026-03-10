

## Fix YouTube Ads Thumbnails — Show Full Image

### Problem
The thumbnail container uses `object-cover` which crops the 16:9 YouTube thumbnails to fit `h-[160px]`. The user wants the full image visible, uncropped.

### Solution — `src/components/deck/slides/YouTubeAdsSlide.tsx`

1. **Replace `object-cover` with `object-contain`** on the `<img>` tag (line 85). This scales the full image to fit within the container without cropping, showing the complete thumbnail with the dark `bg-black/30` background filling any remaining space.

That's it — one class change. The `h-[160px]` container stays, the image scales down to fit fully inside it at its native 16:9 ratio, and no content gets cut off.

