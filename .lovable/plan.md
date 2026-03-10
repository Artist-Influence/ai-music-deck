

## Enlarge Fanpages Case Study Cards

The screenshot shows a large gap between the two case study cards. The fix is to make the cards expand to fill the vertical space and increase all internal sizing.

### Changes to `FanpagesSlide.tsx` (right column, lines 94-125):

1. **Remove `gap-6`** from the right column and use **`gap-4`** — the cards themselves will be bigger so less gap needed
2. **Add `flex-1`** to each `GlassPanel` so they stretch to fill available height equally (eliminating the middle gap)
3. **Increase thumbnail width** from `170px` to `220px`
4. **Increase padding** on case study panels from `p-6` to `p-8`
5. **Bump internal gap** from `gap-6` to `gap-8`
6. **Increase text sizes**: "FANPAGES" label `text-xl` → `text-2xl`, artist name `text-2xl` → `text-3xl`, project/goal `text-xl` → `text-2xl`
7. **Increase metric values** from `text-xl` to `text-2xl`, labels from `text-base` to `text-lg`
8. **Increase metric box padding** from `p-3` to `p-4`, gap from `gap-3` to `gap-4`

