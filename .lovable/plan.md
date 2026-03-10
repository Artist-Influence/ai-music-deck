

## Global Text Size Bump via CSS

Rather than editing all 18 slide files individually, we can add a single CSS rule that scales all text inside the slide canvas up by ~10-15%. Since every slide renders inside `ScaledSlide` → a 1920x1080 container, we can scope a font-size multiplier to that container.

### Approach

**Add a wrapper class to `ScaledSlide.tsx`** and a corresponding CSS rule in `index.css`:

1. **`ScaledSlide.tsx`** — Add a `slide-content` class to the inner 1920x1080 div (line 30)

2. **`index.css`** — Add a scoped rule at the bottom:
```css
.slide-content {
  font-size: 112.5%; /* bumps all relative text up ~12% */
}
```

This works because Tailwind's `text-*` classes set `font-size` in `rem`, and by setting a higher base `font-size` on the slide container, all `rem`-based sizes inside scale proportionally. No padding, margin, or layout changes — just text gets bigger.

### Files to edit
- `src/components/deck/ScaledSlide.tsx` — add `className="slide-content"` to the inner div
- `src/index.css` — add the `.slide-content` font-size rule

