

## Slide 1 (Cover) Refresh

### What the user wants
1. **Single line** for the subtitle — currently "Driving momentum across short-form, streaming, and culture." sits inside a GlassPanel and wraps. Make it a single line without the GlassPanel wrapper.
2. **More readable** — bump font sizes for both tagline and subtitle.
3. **Brighten the theme** — increase the glow orbs' opacity/size and boost the NetworkVisual's opacity so the background feels more vibrant.
4. **Less empty** — add more visual elements: additional glow orbs with varied colors, increase network node count, and add subtle animated gradient rings or arcs behind the logo to create branded depth.

### Changes (all in `CoverSlide.tsx`)

1. **Remove GlassPanel wrapper** around the subtitle. Render it as a standalone `<p>` with `text-3xl text-foreground` — ensures single line at 1920px and pure white text.

2. **Increase tagline size** from `text-4xl` to `text-5xl`.

3. **Brighten background glows**:
   - Increase existing orbs' opacity (`bg-primary/10` → `bg-primary/20`, `bg-accent/[0.06]` → `bg-accent/[0.12]`).
   - Add a third glow orb (top-left, different hue using accent color).
   - Make orbs larger (600px+).

4. **Boost NetworkVisual** opacity from `opacity-15` to `opacity-25` and increase `nodeCount` from 50 to 80 for a denser, more branded feel.

5. **Add decorative ring/arc** — a large subtle animated SVG ring (border-only circle) behind the logo area using primary color at low opacity, giving a tech-product branded feel without being distracting.

6. **Increase logo size** from `w-[400px]` to `w-[480px]`.

All changes scoped to `src/components/deck/slides/CoverSlide.tsx` only.

