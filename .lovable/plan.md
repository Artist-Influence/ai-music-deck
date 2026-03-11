

## Center KPI Boxes in Case Study Cards

**Problem:** The case study card content (header, description, KPI grid) sits at the top of each `flex-1` card, leaving awkward empty space at the bottom.

**Fix in `src/components/deck/slides/AdditionalServicesSlide.tsx` (line 101):**

Add `justify-center` to each GlassPanel's className so the content is vertically centered within the equal-height cards:

```tsx
// Change from:
<GlassPanel key={idx} variant="bright" className="p-5 flex-1 flex flex-col">

// To:
<GlassPanel key={idx} variant="bright" className="p-5 flex-1 flex flex-col justify-center">
```

Single line change, one file.

