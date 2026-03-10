

## Rescale Slide 11 (Spotify Playlisting) — Match YouTube Ads Layout + 3 Compact Case Studies

### Changes to `SpotifyPlaylistingSlide.tsx`:

**Left column — rescale to match slides 7-10:**
- Outer padding `p-24` → `p-12`
- Wrapper: `items-start` → `items-stretch`, add `flex-col gap-4` to left column
- Title `text-5xl` → `text-6xl`
- Subtitle `text-xl` → `text-2xl`, margin `mb-10` → `mb-6`
- Panel headings `text-xl` → `text-2xl`, body `text-lg` → `text-2xl`
- Panel padding `p-5` → `p-8`, add `flex-1` to both panels
- Timeframe `text-lg` → `text-2xl`
- Replace `space-y-5` wrapper with flex `gap-4`

**Right column — 3 stacked case study cards (no screenshots):**

Each card is a compact `GlassPanel` containing:
1. Small album artwork placeholder (square, ~80x80px) floated left or inline-flex beside the artist/track text
2. Artist name (`text-xl font-bold`) + track name (`text-lg`)
3. 4-metric grid (streams, playlist adds, save rate, algo streams) — `text-xl` values, `text-sm` labels, `p-2` padding
4. Row of 3 hyperlinked playlist references using `ExternalLink` icon (same style as clipping slide links)

**Case study data structure:**
```ts
const cases = [
  {
    artist: 'Dack Janiels',
    track: 'Shock Therapy',
    artwork: dackJanielsImg, // reuse existing
    metrics: [
      { val: '185,700', label: 'Streams' },
      { val: '9,950', label: 'Playlist Adds' },
      { val: '3.6%', label: 'Save Rate' },
      { val: '42K', label: 'Algo Streams' },
    ],
    playlists: [
      { label: 'Playlist 1', url: '#' },
      { label: 'Playlist 2', url: '#' },
      { label: 'Playlist 3', url: '#' },
    ],
  },
  // Case 2 & 3: placeholder data with same structure
];
```

**Layout per card:**
```
┌──────────────────────────────────┐
│ [artwork] Artist Name            │
│           Track Title            │
│                                  │
│  Streams | Adds | Save | Algo    │
│                                  │
│  🔗 Playlist 1  🔗 2  🔗 3      │
└──────────────────────────────────┘
```

Three cards stacked with `gap-3` between them — no `flex-1` so they size to content and stay within 1080px. Import `ExternalLink` from lucide-react for playlist links.

