

## Premium Refinement — Slide 10 (YouTube Ads)

### Changes — `src/components/deck/slides/YouTubeAdsSlide.tsx`

**Layout & Scale**
- Reduce outer padding from `p-8` to `p-6` and shift content slightly upward with `items-start pt-[60px]` instead of `items-center justify-center`
- Increase max container width to `max-w-[1720px]`
- Widen left column from `max-w-[540px]` to `max-w-[620px]`
- Widen right column from `w-[560px]` to `w-[580px]`, inner lock from `w-[460px]` to `w-[500px]`
- Increase gap between columns from `gap-8` to `gap-12`

**Left Column — Stronger Hierarchy**
- Title: `text-5xl` → `text-6xl`, add `mb-4` spacing
- Subtitle: `text-xl` → `text-2xl`, constrain to `max-w-[520px]`, increase `mb-6`
- Service label: `text-lg` → `text-base`, `mb-2` → `mb-3`
- Increase gap between cards from `gap-2` → `gap-4`
- Card padding: `p-4` → `p-6`
- Card headings: keep `text-2xl`, body: keep `text-xl`
- Timeframe: `mt-2` added for separation

**Right Column — Editorial Case Studies**
- Gap between stacked cards: `gap-2` → `gap-4`
- Card padding: `p-4` → `p-5`
- Card variant: replace `variant="bright"` with custom styling — `bg-white/[0.03] border-white/[0.1]` with a subtle `shadow-[0_4px_24px_rgba(0,0,0,0.3)]` for depth
- "CASE STUDY" label: `mb-0.5` → `mb-1`, `text-xs` → `text-[11px]`
- Artist name: add `mb-0.5`
- Track name: `mb-1` → `mb-2`
- Thumbnail height: `h-[160px]` → `h-[180px]`, `mb-1` → `mb-3`, add `rounded-xl`
- KPI grid gap: `gap-1` → `gap-1.5`

**KPI Cards — Tiered Hierarchy**
- First two metrics (Views, Unique Viewers): `text-xl font-bold`, slightly brighter bg `bg-white/[0.06]`, add `border-t border-primary/20`
- Remaining four metrics: `text-lg font-semibold text-foreground/80`, standard `bg-white/[0.03]`
- All KPI labels: `text-[10px] text-muted-foreground/60` (lower opacity)
- KPI card padding: `py-2 px-2` → `py-2.5 px-3`
- KPI card border radius: `rounded-lg` → `rounded-xl`

**Background**
- Keep existing glow orb, reduce opacity slightly from `bg-primary/[0.05]` to `bg-primary/[0.04]`
- Add second subtle glow: bottom-left, larger, even more subtle

