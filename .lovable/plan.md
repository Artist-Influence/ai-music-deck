

## Plan: Make KPI grid fill remaining space in case study cards

The KPI grid currently doesn't stretch to fill the bottom of each card because it lacks `flex-1`. Since each `GlassPanel` is `flex-1 flex flex-col`, making the grid wrapper grow will fill the empty space.

### Change in `src/components/deck/slides/YouTubeAdsSlide.tsx`

**Line 94**: Wrap the KPI grid div with `flex-1` and add `auto-rows-fr` so grid rows stretch equally to fill available height. Change from:
```
<div className="grid grid-cols-3 gap-2">
```
to:
```
<div className="grid grid-cols-3 gap-2 flex-1 auto-rows-fr">
```

Also add `flex items-center justify-center` to each KPI cell (line 96) so text stays centered in taller cells:
```
<div className="bg-white/[0.04] rounded-lg p-2.5 text-center flex flex-col items-center justify-center">
```

