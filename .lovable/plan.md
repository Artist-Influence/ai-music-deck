

# Align Instagram Seeding Case Study Cards to Left Panel Height

## Problem
Same issue as Slide 11 — the right column with three case study cards spans the full slide height (including the header), but should only align with the two GlassPanel text boxes on the left.

## Fix — `src/components/deck/slides/InstagramSeedingSlide.tsx`

Apply the same structural pattern used for SoundCloud (Slide 11):

1. **Move header out** of the left column — place the title/subtitle `<div>` (lines 30-37) and mobile summary panel (lines 39-48) above the two-column row so they span full width.

2. **Wrap the two GlassPanels + case study cards** in a new shared flex row beneath the header. The right column uses `justify-between` so the three cards distribute within the height of the two text boxes only.

3. **Remove `flex-1`** from case study cards so they size to content.

### Structure change:
```text
Before:                              After:
┌──────────────────────────┐         ┌──────────────────────────┐
│ [Header+panels] | [cards]│         │ Header (full width)      │
│                 |        │         │ [2 panels]  | [3 cards]  │
└──────────────────────────┘         └──────────────────────────┘
```

### Edits:
- Lines 28-102: Restructure to pull header above, wrap panels + cards in a flex row
- Right column: `gap-2 md:gap-3 justify-between`
- Cards: remove any `flex-1`, keep `p-3 md:p-5`

