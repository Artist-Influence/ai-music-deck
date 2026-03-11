

## Plan: Adjust Slide 8 Layout Balance

### Changes in `src/components/deck/slides/CreatorFloodSlide.tsx`

1. **Shrink case study panel** — Remove `h-full` from the right GlassPanel so it sizes to content instead of stretching. Reduce text sizes: artist name from `text-3xl` to `text-2xl`, track/description from `text-2xl` to `text-xl`, metric values from `text-2xl` to `text-lg`, metric labels from `text-lg` to `text-sm`. Reduce padding from `p-6` to `p-5` and inner gaps (`mb-3`→`mb-2`, `mb-4`→`mb-3`).

2. **Reduce timeframe spacing** — In the "When to use" GlassPanel, change `pt-4 mt-4` on the timeframe divider to `pt-3 mt-3`.

3. **Even out both columns** — Add `items-stretch` to the outer flex container (`max-w-[1600px] flex gap-10`) so both columns match height evenly. Keep `justify-center` on the right column wrapper.

