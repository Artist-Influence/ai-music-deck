

## Fan Page Network Visualizer

**Concept:** An animated SVG visualizer showing a central hub (the artist) surrounded by orbiting fan page nodes that pulse and radiate engagement ripples outward. This represents the "always-on" distribution layer where theme pages continuously seed content into audiences.

### Visual Design
- A central glowing node (the artist/track)
- 5-7 orbiting "fan page" nodes at varying distances, slowly rotating
- Each fan page node periodically emits expanding ripple circles (representing posts reaching audiences)
- Faint connecting lines between the hub and pages (the distribution network)
- Small particle dots drifting outward from pages (representing reach/impressions)
- Uses the existing brand cyan/primary color palette with varying opacity
- Smooth CSS animations for rotation, pulsing, and ripple expansion

### Technical Details

**New file: `src/components/deck/FanpageVisualizer.tsx`**
- Self-contained SVG component with CSS keyframe animations
- No external dependencies needed
- Uses `primary` color (cyan) with varying opacities
- Animated via CSS `@keyframes` for performance (no JS animation loop)
- Elements: central node, orbiting page nodes on circular paths, expanding ripple rings, drift particles

**Edit: `src/components/deck/slides/FanpagesSlide.tsx`**
- Replace the placeholder `div` on the right with the new `FanpageVisualizer` component

### Animation Details
- Orbit rotation: 60-90s per revolution (slow, ambient)
- Ripple expansion: 3-4s cycles, staggered per node
- Central node: gentle pulse (scale 1.0 to 1.1)
- Particles: fade-out drift using opacity animation
