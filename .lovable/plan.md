

## Plan: Show full case study image without cropping

### Changes in `src/components/deck/slides/Top50TrendingSlide.tsx`

1. **Remove height constraint and cropping** on the image container (line 84):
   - Remove `max-h-[80%]` and `self-end`
   - Change image from `object-cover object-bottom` to `object-contain` so the full screenshot is visible without any cropping

This will make the image fill its flex container naturally and display the complete screenshot.

