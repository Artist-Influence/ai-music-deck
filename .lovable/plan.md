

# Fix Slide 10 (Spotify Playlisting) — Left/Right Column Height Alignment

## Problem
The left column (title + 2 GlassPanels) and right column (3 case study cards) don't end at the same vertical position. The right column's cards stack with natural height while the left column's panels stretch via `flex-1`, but they don't visually align at the bottom.

## Fix
Add `flex-1` to each of the 3 case study `GlassPanel` cards on the right so they stretch evenly to fill the column height, matching the left column's stretched panels. This ensures both columns' content fills the exact same vertical space from top to bottom.

**File**: `src/components/deck/slides/SpotifyPlaylistingSlide.tsx`

**Change**: Line 101 — add `flex-1` to each case study card's className:
```tsx
// From:
<GlassPanel key={idx} variant="bright" className="p-3 md:p-5 flex flex-col">

// To:
<GlassPanel key={idx} variant="bright" className="p-3 md:p-5 flex flex-col flex-1">
```

Single line change, one file.

