

## Plan: Reformat Slide 10 to match Slide 9's style

Slide 9 (Top 50 Trending) uses a clean two-column layout with `p-12`, `items-center justify-center`, `max-w-[1600px]`, `gap-10`, and wraps the right side in a single `GlassPanel variant="bright"` with `p-8`. The left column uses `flex-1` with no max-width constraint.

Slide 10 currently has custom styling (`p-6`, `pt-[60px]`, `items-start`, `max-w-[1720px]`, custom card borders instead of GlassPanel, fixed `w-[580px]` right column, `h-[180px]` thumbnails with `object-cover` cropping).

### Changes to `src/components/deck/slides/YouTubeAdsSlide.tsx`

**Layout — match Slide 9 exactly:**
- Outer container: `p-6 items-start pt-[60px]` → `p-12 items-center justify-center`
- Inner flex: `gap-12 max-w-[1720px] items-start` → `gap-10 max-w-[1600px]` (no explicit items-start)
- Left column: remove `max-w-[620px]`, use `flex-1 flex flex-col gap-4` like Slide 9
- Right column: remove `w-[580px] shrink-0`, use `flex-1 flex flex-col items-center justify-center`

**Left column — match Slide 9 typography:**
- Service label: `text-base` → `text-lg`, `mb-3` → `mb-4`
- Title: keep `text-6xl` (matches Slide 9)
- Subtitle: keep `text-2xl`, widen max-width to `max-w-[700px]`, keep `mb-6`
- Cards: use `GlassPanel variant="bright" className="p-8"` (matching Slide 9's cards)
- Card body text: `text-xl` → `text-2xl` (matching Slide 9)
- Timeframe: `text-xl` → `text-2xl`, remove `mt-2`

**Right column — two stacked GlassPanel case studies:**
- Wrap each case study in `GlassPanel variant="bright" className="p-8 flex-1"` instead of custom div styling
- Remove the inner `w-[500px] mx-auto` lock — let content fill naturally
- Case study label: `text-[11px]` → `text-base`, keep `font-mono tracking-widest uppercase`
- Artist: `text-xl` → `text-3xl`
- Track: `text-lg` → `text-2xl`
- **Thumbnails**: change from `h-[180px] object-cover` to `aspect-video w-full object-contain` with `bg-black/30` background so the full image shows without cropping
- KPI grid: `grid-cols-2 gap-1.5` → `grid-cols-2 gap-3` (matching Slide 9's metric grid)
- KPI cards: replace tiered styling with uniform `bg-white/[0.04] rounded-lg p-4 text-center`
- Metric values: uniform `text-2xl font-bold text-foreground`
- Metric labels: uniform `text-lg text-muted-foreground uppercase tracking-wider`
- Remove `primary` flag from metrics data (no longer needed)
- Gap between the two case study panels: `gap-4` → `gap-4` (keep, provides breathing room between stacked cards)

**Background:** Remove second glow orb, match Slide 9's style with one primary glow at `bg-primary/[0.08]`

