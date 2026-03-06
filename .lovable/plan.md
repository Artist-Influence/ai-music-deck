

## Slide 6 and Slide 7 Updates

### Slide 6 — Clipping Distribution (`ClippingSlide.tsx`)

Restructure into a **side-by-side layout**: left side has 3 stacked GlassPanel cards, right side has a visualizer.

**Left column** — 3 cards, each with a bold title and bullet points:

1. **Pros**
   - Target viral trends with a strategic campaign brief
   - Fast velocity and clear reporting
   - UGC reuse rights for paid and owned channels

2. **How it works**
   - Campaigns launch in 24 hours
   - Runs 7 to 14 days
   - Every post attributes the official sound and follows campaign brief exactly

3. **Why We Are Different**
   - Strategy driven by actual music industry professionals
   - Automatic content moderation to ensure campaign compliance
   - Bot detection algorithms to ensure payment is only for genuine views
   - Fully white glove service with professional reporting decks

Timeframe line goes at the bottom of the third card.

**Right column** — empty placeholder `div` for a future visualizer (no visualizer imported on this slide anymore).

Layout: `flex gap-10` with left side `flex-1 max-w-[900px]` and right side `flex-1 flex items-center justify-center`. Text sizes stay at `text-xl` headers and `text-base` bullets.

---

### Slide 7 — Fanpages (`FanpagesSlide.tsx`)

Two changes:

1. **Update subtitle** to: "We operate and scale multiple theme pages that consistently target and unify your fan base around your project"

2. **Swap visualizer**: Replace `FanpageVisualizer` import with `ClippingVisualizer` import. The right-side column renders `<ClippingVisualizer />` instead.

The existing left-side 3-panel layout stays as-is.

