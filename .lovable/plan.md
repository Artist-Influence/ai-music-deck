## Crop Client Portal video to app-only view

The current `public/client-portal.mp4` (1920x1098, ~38s) shows the full browser chrome (tabs, URL bar, bookmarks) at the top. The reference screenshot shows the app starting from the in-app navbar — i.e. the top ~170px of browser chrome cropped out.

### Approach
Re-encode the video with the top crop baked in so it matches the screenshot. This avoids fragile CSS scale/translate hacks and keeps the slide layout untouched.

### Steps

1. Re-encode `public/client-portal.mp4` with ffmpeg, cropping the top 170px:
   ```
   crop=in_w:in_h-170:0:170
   ```
   Output: 1920x928 (aspect ~2.07:1). Speed and 48s trim from the original generation are already in place — preserve them by cropping the existing file in place.

2. Regenerate `public/client-portal-poster.jpg` from the cropped video so the poster matches.

3. In `src/components/deck/slides/ClientPortalSlide.tsx`:
   - The container is currently `aspect-video` (16:9). The cropped video is wider (~2.07:1). Change the wrapper from `aspect-video` to `aspect-[2/1]` (or use the actual 1920/928 ratio) so the video fills naturally with `object-contain` and no black bars or stretching.
   - Keep `object-cover` → swap to `object-contain` to be safe, since aspect now matches the source.

### Files touched
- `public/client-portal.mp4` (re-encoded)
- `public/client-portal-poster.jpg` (regenerated)
- `src/components/deck/slides/ClientPortalSlide.tsx` (aspect ratio + object-fit tweak)
