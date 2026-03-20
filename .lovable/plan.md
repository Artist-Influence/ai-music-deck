

# Align Case Study Cards to Left Column Height

## Problem
The right column with three case study cards currently uses `justify-between` which spaces them across the full slide height. The user wants the cards to align vertically with just the two text boxes on the left (the "Wat het is" and "Waarom het werkt" panels), not the full column including the header.

## Approach
The left column has: header (title/subtitle) + two GlassPanels. The right column should only align with the two GlassPanels area. To achieve this, restructure the layout so the right column sits beside just the two text boxes, not the header.

## Changes — `src/components/deck/slides/SoundCloudRepostsSlide.tsx`

1. **Pull the header out** of the left column and place it above the two-column layout, so both columns start at the same vertical position (below the header).

2. **Right column**: keep `justify-between` but now it only spans the height of the two text boxes, so the three cards distribute within that smaller space — fitting snugly.

3. **Remove the gap-0** on the right column — use a small gap as fallback: `gap-2 md:gap-3 justify-between`.

### Structure change:
```text
Before:
┌─────────────────────────────────┐
│ [Header + 2 panels] | [3 cards] │  ← cards span full height
└─────────────────────────────────┘

After:
┌─────────────────────────────────┐
│ Header (title + subtitle)        │
│ [2 panels]      | [3 cards]      │  ← cards span only panel height
└─────────────────────────────────┘
```

### Specific edits:
- Move the header `<div>` (lines 35-42) and mobile summary panel (lines 44-53) out of the left flex column, placing them before the two-column row
- Wrap the two GlassPanels (left) and three case study cards (right) in a new flex row
- Right column gets `gap-2 md:gap-3 justify-between` so cards spread within the constrained height

