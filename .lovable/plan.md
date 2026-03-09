

## Fix Creator Flood Slide (Slide 8) Sizing

The right case study panel stretches too tall because `h-full` on the GlassPanel makes it fill the entire column height, and the image takes all remaining flex space.

### Changes to `CreatorFloodSlide.tsx`

1. **Remove `h-full`** from the right-side GlassPanel — let it size naturally to its content
2. **Constrain the image** — replace `flex-1 min-h-0` with a fixed max-height container (`max-h-[420px]`) and crop from the top-left so we cut right at the three-dot menu area. Use `object-[0%_15%]` to shift the crop down slightly past the header bar, showing the grid of creator thumbnails
3. **Keep text sizes** as-is (text-3xl artist, text-base descriptions, text-xl metrics)

### File
- **Edit:** `src/components/deck/slides/CreatorFloodSlide.tsx`
  - Line 54: Remove `h-full` from GlassPanel
  - Line 62: Change `flex-1 min-h-0` to `max-h-[420px]`
  - Line 66: Change `object-top` to `object-[0%_12%]` to crop past the top header/dots

