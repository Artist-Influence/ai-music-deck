

## Fix Francis Mercier Image Cropping

The image container on line 63 has `flex items-center justify-center` which vertically centers the image content, fighting against `object-top`. Remove flex centering so the image anchors to the top and crops downward.

### Change in `InstagramSeedingSlide.tsx` (line 63)
- Remove `flex items-center justify-center` from the image container div
- Keep `object-cover object-top` on the `<img>` — this ensures the image starts from the top and overflowing content is cropped from the bottom

