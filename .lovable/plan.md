

## Plan: Adjust Slide 4 — Title, Visualizer Size & Outer Ring

### Changes in `src/components/deck/slides/WhatCloutedDoesSlide.tsx`

1. **Extend title to one line** — Shorten the text slightly so it fits on a single line. Change to something like: "Coordinated distribution so your music builds momentum — not a gamble."

2. **Shrink visualizer** — Reduce `HubDiagram` SVG from `w-[560px] h-[560px]` to `w-[460px] h-[460px]`.

3. **Remove outer circle** — Delete the outer ring at line 46 (`r="200"`), keeping only the inner ring (`r="140"`).

