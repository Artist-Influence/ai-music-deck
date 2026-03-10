

## Enlarge Spotify Playlisting Case Studies to Match Left Column Height

### Changes to `SpotifyPlaylistingSlide.tsx`:

1. **Add `flex-1` to each case study GlassPanel** (line 104) — so the three cards stretch to fill the same height as the left column
2. **Increase padding** from `p-4` to `p-5`
3. **Scale up metric values** from `text-xl` to `text-2xl` (line 123)
4. **Scale up metric labels** from `text-sm` to `text-lg` (line 124)
5. **Scale up metric cell padding** from `p-2` to `p-3` (line 122)
6. **Scale up playlist link text** from `text-xs` to `text-sm` (line 136)
7. **Scale up artist name** from `text-xl` to `text-2xl` (line 115)

This makes the right column case studies stretch vertically to match the left column's title + panels + timeframe, with larger typography consistent with the rest of the deck.

