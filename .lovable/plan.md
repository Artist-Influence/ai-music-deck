

# Add user's video clips to Culture Edits slide

## What you'll see
The two uploaded short-form vertical clips (`@keto.edits` and `@stevenxeditts`) get dropped into the Culture Edits slide's two phone frames. They'll autoplay, loop, and stay muted — exactly the placeholders the slide was designed for.

## Changes

1. **Copy uploaded clips into the project**
   - `user-uploads://ssstik.io_@stevenxeditts_1776920644654.mp4` → `public/culture-edits/clip-1.mp4`
   - `user-uploads://ssstik.io_@keto.edits_1776920682168.mp4` → `public/culture-edits/clip-2.mp4`

2. **Update labels in `src/components/deck/slides/CultureEditsSlide.tsx`**
   - The `clips` array currently labels the two slots `SPORTS` and `ANIME`. Since the clips look more like edit-culture content (anime-style and editor showcase), update labels to feel accurate to what's actually playing:
     - clip-1 (stevenxeditts) → label `EDITS`
     - clip-2 (keto.edits) → label `ANIME`
   - No other code changes needed — the slide already auto-loads from `/culture-edits/clip-1.mp4` and `/culture-edits/clip-2.mp4`, the `<video>` tag is already configured for `autoPlay muted loop playsInline`, and the fallback placeholder will simply stop showing once the files exist.

## Files changed
- `public/culture-edits/clip-1.mp4` — new (copied from upload)
- `public/culture-edits/clip-2.mp4` — new (copied from upload)
- `src/components/deck/slides/CultureEditsSlide.tsx` — relabel the two clips array entries

## Out of scope
- Re-encoding or compressing the MP4s (uploaded as-is; both are short-form vertical clips, file size should be fine for web playback).
- Layout changes — the slide design from the previous redesign stays exactly as-is.
- Adding more than two clip slots.

