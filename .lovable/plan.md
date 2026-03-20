

# Align Spotify Playlisting Case Study Cards to Left Panel Height

## Problem
Same as slides 11-13 — the header sits inside the left column, making the right column's three case study cards span the full slide height instead of aligning with just the two text panels.

## Fix — `src/components/deck/slides/SpotifyPlaylistingSlide.tsx`

1. **Pull the header out** — move the title/subtitle `<div>` (lines 51-58) and mobile summary panel (lines 60-69) above the two-column row so they span full width.

2. **Wrap the two GlassPanels + case study cards** in a shared flex row beneath the header, using `items-stretch` so the right column height matches the left panels.

3. **Remove `flex-1`** from each case study `GlassPanel` card (line 101) and add `justify-between` to the right column so cards distribute within the panel height.

### Structure change:
```text
Before:                              After:
┌──────────────────────────┐         ┌──────────────────────────┐
│ [Header+panels] | [cards]│         │ Header (full width)      │
│                 |        │         │ [2 panels]  | [3 cards]  │
└──────────────────────────┘         └──────────────────────────┘
```

### Edits in SpotifyPlaylistingSlide.tsx:
- Change outer container from `flex-row` to `flex-col` with a nested flex-row for the panels+cards
- Move header div and mobile summary above the two-column row
- Right column: `gap-2 md:gap-3 justify-between`
- Cards: remove `flex-1`

