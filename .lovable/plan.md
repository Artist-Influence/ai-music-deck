

## Crop Rich Brian Screenshot from Top-Right Corner

The image currently uses `object-[0%_12%]` which shifts the visible area down 12% from the top. To show the screenshot starting from the top-right corner, change the object-position to anchor at the top-right.

### Change in `CreatorFloodSlide.tsx`

- **Line 66**: Change `object-[0%_12%]` → `object-right-top` (alias for `object-[100%_0%]`)
- This crops from the right side of the image, starting at the very top, cutting off the left portion (where the three-dot menu lives) while keeping the top edge visible

