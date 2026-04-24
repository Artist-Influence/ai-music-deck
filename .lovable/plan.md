# Visual upgrade: GlassPanel redesign + standardized slide visualizers

## 1. GlassPanel.tsx redesign
- Gradient hairline border via masked `::before` (`mask-composite: exclude`) with primary/white/transparent stops.
- Top inner highlight + soft outer glow box-shadow.
- Decorative primary-tinted SVG corner bracket (top-right).
- One-time diagonal shimmer overlay triggered by `IntersectionObserver` at 40% visibility; respects `prefers-reduced-motion`.
- Variants preserved: `default` / `bright` (stronger primary) / `subtle` (auto-disables shimmer + corner).
- New optional props: `noShimmer`, `noCorner`. Existing call sites unchanged.

## 2. New `src/components/deck/visuals/`
- **CoverVisual.tsx** — floating blurred orbs, dashed spinning rings, pulse particles. Slides 1 (Cover) and 18 (NextSteps).
- **InfoVisual.tsx** — radial-masked orthogonal grid + traveling horizontal data-tick segments. Slides 2–5 (OperatingSystem, UnifiedOps, TheShift, WhatWeDo).
- **ServiceVisual.tsx** — flowing Bézier distribution lines with `animateMotion` packet dots. Service slides.

## 3. Slide rollout
Drop the visualizer in as the first child of each slide root and remove redundant generic ambient blur-blob `div`s. Bespoke visuals (HubDiagram, SystemLoopDiagram, NetworkVisual on cover, TheShift phone trio, ClippingSlide phone glow, ID.ID dashboard) preserved.

Slides updated:
- Cover & ending: CoverSlide, NextStepsSlide → CoverVisual
- Info: OperatingSystemSlide, UnifiedOpsSlide, TheShiftSlide, WhatWeDoSlide → InfoVisual
- Service: ClippingSlide, CreatorFloodSlide, Top50TrendingSlide, CultureEditsSlide, YouTubeAdsSlide, SpotifyPlaylistingSlide, SoundCloudRepostsSlide, InstagramSeedingSlide, AdditionalServicesSlide, ReportingSlide, FanpagesSlide, ExpectationsSlide → ServiceVisual

Untouched: WebsitesSlide, IdIdSlide, PricingSlide, all CaseStudy* slides.

## 4. Out of scope
No copy, i18n, layout, design-token, or font changes.
