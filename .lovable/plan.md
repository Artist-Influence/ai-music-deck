

## Fix Spotify Playlisting Slide — Right Column Matches Left Column Height

The right column case studies end too early, leaving empty space below. The left column has the title block + two panels + timeframe. The fix: move the timeframe from the left column to below the right column, and ensure both columns stretch equally.

### Changes to `SpotifyPlaylistingSlide.tsx`:

1. **Remove timeframe from left column** (line 98) — delete the `<p>Timeframe: 12 weeks</p>` from inside the left column div.

2. **Wrap both columns + timeframe in a new structure** — change the outer flex container so both columns sit inside a shared wrapper, with the timeframe moved below the right column:
   - Left column: title block + two `flex-1` panels (no timeframe)
   - Right column: three `flex-1` case study cards + timeframe text at the bottom

3. **Add timeframe below the right column** (line ~145, after the cases map) — add `<p className="text-2xl text-primary font-medium mt-2">Timeframe: 12 weeks</p>` inside the right column div, after the case study cards.

This way both columns use `items-stretch` from the parent flex, and the right column's three cards + timeframe will fill the same vertical space as the left column's header + two panels.

