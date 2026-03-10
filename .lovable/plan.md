

## Move Timeframe to Left Column, Match Column Heights

### Changes to `SpotifyPlaylistingSlide.tsx`:

1. **Move timeframe from right column (line 144) to left column** — add `<p className="text-2xl text-primary font-medium mt-2">Timeframe: 12 weeks</p>` after the second GlassPanel (after line 96), inside the left column div.

2. **Remove timeframe from right column** — delete line 144.

3. **Keep `flex-1` on right column case study cards** so they stretch to match the full height of the left column (title + panels + timeframe).

