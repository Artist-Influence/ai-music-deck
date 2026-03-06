

## Slide 3 (TheProblemSlide) Redesign

### Changes (all in `src/components/deck/slides/TheProblemSlide.tsx`)

1. **Title**: Change to `Problem: Music marketing is mostly manual.` — single line, `text-6xl`.

2. **Remove** the subtitle paragraph ("Even great teams are forced into...").

3. **Section header**: Change "That creates the same results over and over" to `Why this is an issue:`.

4. **Replace the 4-item GlassPanel list** with 3 numbered items, each in its own GlassPanel card with a relevant Lucide icon:
   - `1.` + `UserX` icon — "Poor campaign quality from those who don't understand the music industry"
   - `2.` + `Clock` icon — "Reporting is late, confusing, or missing"
   - `3.` + `DollarSign` icon — "You spend money without real measurable results that actually move the needle"

   Layout: vertical stack of 3 cards, each with `flex items-center gap-4`, number + icon on the left, text on the right.

5. **Replace BrokenSystemVisualizer** with a more relevant visual. The current one is an abstract SVG of disconnected node clusters with broken dashed links and flickering error dots — it represents "fragmented/siloed systems" but reads as random dots on screen (as the user's screenshot shows). Replace with a simple illustrative SVG showing a tangled/messy workflow (e.g., crossed arrows, scattered platform icons, or a "chaos" diagram) that better communicates manual, disorganized marketing. Will use an inline SVG with recognizable elements like scattered social platform shapes, tangled connection lines, and a "?" or warning icon in the center.

