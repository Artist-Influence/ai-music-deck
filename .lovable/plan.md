

## Slide 2 (TheShiftSlide) Fixes

### Issues identified
1. **Title bug**: Line 12 reads `Music discovery has changed.<br />has changed.` — duplicated "has changed." with a line break. Fix to single line: "Music discovery has changed."
2. **Animation not relevant**: The abstract `DiscoveryVisualizer` (branching SVG tree) doesn't connect to "Songs find people." Replace with a visual showing social media feeds/phones with trending music content — more aligned with the tagline.
3. **Grid cards lack icons**: The four "What wins today" items are plain text in GlassPanels. Add relevant Lucide icons to each.

### Changes

**File: `src/components/deck/slides/TheShiftSlide.tsx`**

1. **Fix title** — Remove `<br />has changed.` so it reads `Music discovery has changed.` on a single line.

2. **Replace DiscoveryVisualizer** with a new inline SVG-based visual showing stylized phone screens / social feed cards with music-related trending indicators (play buttons, hearts, share arrows, waveforms). This conveys "songs find people" through algorithmic feeds rather than an abstract network graph. Will be built directly in the slide component as an SVG composition (no new file needed).

3. **Add icons to grid cards** — Import Lucide icons and pair each item:
   - `Video` → "Volume of real short-form creation"
   - `Eye` → "Consistent exposure across audiences"
   - `Users` → "Community validation (pages, curators, creators)"
   - `Megaphone` → "Smart amplification that boosts the right signals"

   Each card gets the icon left-aligned with the text, using `flex items-center gap-3`.

4. **Clean up empty `<p>` tag** on line 17-19 (currently empty muted paragraph inside GlassPanel).

All changes in `src/components/deck/slides/TheShiftSlide.tsx` only. The `DiscoveryVisualizer` component file can remain (unused).

