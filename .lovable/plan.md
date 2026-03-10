

## Align Left Column Bottom with Right Column Bottom

The issue: the left column's "Why it works" panel ends higher than the third case study on the right. The timeframe text sits below it but doesn't help align the panels.

### Changes to `SpotifyPlaylistingSlide.tsx`:

1. **Remove `flex-1` from the "What it is" GlassPanel** (line 80) — this panel doesn't need to grow, let it size naturally.
2. **Keep `flex-1` on the "Why it works" GlassPanel** (line 89) — this panel will stretch to fill all remaining vertical space, aligning its bottom edge with the bottom of the third case study.
3. **Move timeframe outside the flex column** — place it after the left column's flex container but still visually below the "Why it works" panel. Specifically, wrap the two GlassPanels in a `flex-1 flex flex-col gap-4` container, then place timeframe after that container but still inside the left column div. This way the "Why it works" panel stretches to match the right column, and timeframe sits just below.

Concretely:
- Line 80: change `className="p-8 flex-1"` to `className="p-8"` (remove flex-1 from "What it is")
- Line 89: keep `flex-1` on "Why it works" so it grows to fill space
- The timeframe on line 98 stays where it is

This makes the "Why it works" panel absorb all remaining vertical space, aligning its bottom with the third case study's bottom. The timeframe text remains below.

