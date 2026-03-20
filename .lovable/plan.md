

# Fix SoundCloud Case Study Card Spacing

## Problem
The `flex-1` on each card stretches them evenly, but the content (artist info + metrics grid) only fills the top portion, leaving dead space at the bottom of each card.

## Fix
Move the metrics grid to the bottom of each card by adding `mt-auto` to the metrics `div`. This pushes the stats grid down to fill the extra space naturally, making the cards look intentionally designed rather than having awkward empty space below the metrics.

**File**: `src/components/deck/slides/SoundCloudRepostsSlide.tsx`

**Change** (line 97): Add `mt-auto` to the metrics grid container:
```tsx
// From:
<div className="grid grid-cols-4 gap-1 md:gap-2">

// To:
<div className="grid grid-cols-4 gap-1 md:gap-2 mt-auto">
```

Single class addition, one file.

