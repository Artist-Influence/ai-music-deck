

## Add Case Studies to Clipping and Fanpages Slides

### ClippingSlide.tsx — Add 3 Case Studies to Right Column

Replace the empty right column with a vertical stack of 3 compact case study cards (Aries, Gorgon City, Nash Rly).

**Layout:** Keep existing left column (3 GlassPanels) but tighten padding to `p-6`. Right column gets 3 stacked `GlassPanel variant="bright"` cards, each containing:
- Horizontal layout: small cover art thumbnail (80x80), artist/track, 1-line overview, and a 2x2 mini metrics grid
- Compact sizing — `p-4`, `text-sm` metrics, `text-xs` labels
- Import cover art images from existing assets (aries, gorgon-city, nash-rly)

Reduce header margin (`mb-8` instead of `mb-12`) and slide padding (`p-16`) to fit everything at 1920x1080.

### FanpagesSlide.tsx — Add Subtronics + Skrillex to Right Column

Replace the ClippingVisualizer in the right column with 2 stacked case study cards.

**Each card** (GlassPanel variant="bright", `p-5`):
- Top row: artist name, track/project, 1-line goal
- Middle: 3 sample clip thumbnails in a horizontal row (aspect-[9/16], small ~100px tall)
- Bottom: 2x2 metrics grid

**Subtronics card:** 5M+ views, 150K+ likes, 15K+ followers, 600+ clips
**Skrillex card:** 2.1M+ views, 1,557 posts, 6.84% engagement, 1.3M+ top post

Import clip images from existing assets. Remove ClippingVisualizer import. Tighten padding similarly.

### Files
- **Rewrite:** `ClippingSlide.tsx`, `FanpagesSlide.tsx`
- No new files needed — all case study data and assets already exist

