

## Fix Instagram Seeding Slide — Overflow + Text Sizing

The case study panel uses `flex-1 min-h-0` on the image container which lets it grow unbounded, pushing the metrics grid below the slide bounds. Same pattern as the Major Lazer fix.

### Changes to `InstagramSeedingSlide.tsx`

1. **Constrain the image**: Replace `flex-1 min-h-0` on the image container (line 63) with `max-h-[380px]` so the screenshot is capped and metrics stay visible
2. **Remove `h-full`** from the right GlassPanel (line 55) — let it size naturally
3. **Bump text sizes**: 
   - Case study title: `text-2xl` → `text-3xl` (line 57)
   - Subtitle: `text-lg` → `text-xl` (line 58)
   - Description: `text-base` → `text-lg` (line 59)
   - Metric values: `text-xl` → `text-2xl` (line 74)
   - Metric labels: `text-xs` → `text-sm` (line 75)
   - "CASE STUDY" label: `text-sm` → `text-base` (line 56)
4. **Center the right column** vertically: add `flex items-center justify-center` to the right wrapper (line 54)

