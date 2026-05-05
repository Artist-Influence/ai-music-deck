## Fixes: Slide 10 cutoff, Spotify tier note, Slide 15 + 16 URLs

### 1. Slide 10 (YouTube Ads) — "How it works" panel cut off
In `YouTubeAdsSlide.tsx`, slightly reduce the "How it works" section text without changing the panel size:
- Bullet text: `md:text-2xl` → `md:text-xl`
- Timeframe line: `md:text-2xl` → `md:text-xl`
- Bullet dot top margin: `md:mt-3` → `md:mt-2.5` (re-align with smaller text)

Heading and panel padding unchanged.

### 2. Spotify Playlisting (Slide 11) — mention Standard vs Tier 1 placements
Add a 4th bullet to `spotify.what` in `src/i18n/en.ts` (and matching keys in the other 8 locale files: `ar, de, es, fr, hi, ja, ko, nl, pt, zh`):
- New `spotify.what.3`: `"Standard and Tier 1 placements available — Tier 1 (US/EU only) for a slight premium; Standard still pitches Tier 1 but leans LATAM, SEA, and Eastern Europe"`

The slide already maps `[0, 1, 2]` for bullets — update to `[0, 1, 2, 3]` in `SpotifyPlaylistingSlide.tsx`.

For non-English locales, add the same key with the English copy as a placeholder (the existing static i18n system uses English fallback if not present, but adding the key keeps parity — use English string for now in all 9 non-English files).

### 3. Slide 15 (Websites) — Pierce link
In `WebsitesSlide.tsx`, update the Pierce entry in both `cardConfig` and `extraLinks`:
- `url`: `https://piercemusic.com` → `https://piercesounds.com/`
- `label` (card only): `piercemusic.com` → `piercesounds.com`

### 4. Slide 16 (iD.ID) — sub-text URL
In `IdIdSlide.tsx`, update the link below the title:
- `href`: `https://id-id.artistinfluence.com` → `https://id-id.ai/`
- Visible text: `id-id.artistinfluence.com` → `id-id.ai`

(Also update the matching entry in `WebsitesSlide.tsx` `extraLinks` for `ID.ID` to point at `https://id-id.ai/` for consistency.)