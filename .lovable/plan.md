

## Actually Scale Up Slide 18 (Next Steps)

The current sizes are too small compared to slides 15-17. Here are the real changes needed:

### Changes to `NextStepsSlide.tsx`:

1. **Title**: `text-6xl` → `text-7xl`
2. **Subtitle**: `text-xl` → `text-2xl`
3. **Container**: `max-w-[1000px]` → `max-w-[1400px]` (match slides 15-17)
4. **Step cards**: number `text-lg` → `text-xl`, title `text-xl` → `text-2xl`, desc `text-lg` → `text-xl`
5. **Step card padding**: `p-6` → `p-8`, gap `gap-5` → `gap-6`
6. **Contact panel**: all text `text-lg` → `text-xl`, max-width `max-w-[600px]` → `max-w-[700px]`, padding `p-7` → `p-8`
7. **Bottom tagline**: `text-xl` → `text-2xl`
8. **Outer padding**: `p-24` → `p-12` (match slides 15-17, gives more room)

