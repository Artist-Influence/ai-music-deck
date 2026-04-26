## Scope
Replace the Dack Janiels — Shock Therapy case study on the **Spotify Playlisting slide** (`src/components/deck/slides/SpotifyPlaylistingSlide.tsx`) with **Ozz Gold — Worry**, including a parenthetical growth note next to the artist/track.

> Note: Dack Janiels also appears on `CaseStudyPlatformSlide.tsx` with different metrics. I'll leave that one untouched since the playlist-links/metrics shape provided matches only the Spotify slide. Tell me if you want it removed there too.

## Changes

### 1. Add artwork
- Copy `user-uploads://Worry_Ozz_Gold_Remix.jpg` → `src/assets/ozz-gold-worry.jpg`

### 2. Replace the middle case entry in `SpotifyPlaylistingSlide.tsx`
```ts
{
  artist: 'Ozz Gold',
  artistNote: '6K → 800K+ monthly listeners in 6 months',
  track: 'Worry',
  artwork: ozzGoldWorryImg,
  metrics: [
    { val: '148K',  labelKey: 'kpi.streams' },
    { val: '9.7K',  labelKey: 'kpi.playlistAdds' },
    { val: '11.1K', labelKey: 'kpi.saves' },
    { val: '725K',  labelKey: 'kpi.algoStreams' },
  ],
  playlists: [
    { label: 'Playlist 1', shortLabel: 'P1', url: 'https://open.spotify.com/playlist/2xjYnvLKZgxjIXqHXYV0Zs' },
    { label: 'Playlist 2', shortLabel: 'P2', url: 'https://open.spotify.com/playlist/5Epnfl9GcJOnCqISHDp8QC' },
    { label: 'Playlist 3', shortLabel: 'P3', url: 'https://open.spotify.com/playlist/3tRhisNDv5YZXPQltBbJNc' },
  ],
},
```

### 3. Render the growth note in the card header
Small, italic, primary-tinted line under the track name — only appears when `artistNote` is defined, so the other two cards stay visually unchanged:
```tsx
<p className="text-xs md:text-lg text-muted-foreground">{c.track}</p>
{c.artistNote && (
  <p className="text-[10px] md:text-sm text-primary/80 italic mt-0.5 leading-tight">
    ({c.artistNote})
  </p>
)}
```

## Files touched
- `src/assets/ozz-gold-worry.jpg` *(new — copied from upload)*
- `src/components/deck/slides/SpotifyPlaylistingSlide.tsx` *(swap entry + render artistNote)*

No i18n changes needed (artist/track/note are hardcoded like the other two cases).