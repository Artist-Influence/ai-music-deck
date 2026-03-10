

## Update Spotify Playlisting Slide with Real Case Studies

### Assets to copy
1. `user-uploads://ero808_-_Genie.jpg` → `src/assets/ero808-genie.jpg`
2. `user-uploads://DACK_JANIELS_-_SHOCK_THERAPY.jpg` → `src/assets/dack-janiels-shock-therapy.jpg`
3. `user-uploads://The_All-American_Rejects_–_Get_This.jpg` → `src/assets/all-american-rejects-get-this.jpg`

### Changes to `SpotifyPlaylistingSlide.tsx`

**Imports**: Replace the single `dack-janiels-streams.png` import with the 3 new artwork images.

**Cases data**: Replace all 3 entries with real data:

| Artist | Track | Streams | Playlist Adds | Saves | Algo Streams |
|--------|-------|---------|---------------|-------|--------------|
| ero808 | Genie | 1.55M | 66.7K | 50.1K | 802K |
| Dack Janiels | Shock Therapy | 185,700 | 9,950 | 3.6% (Save Rate) | 42K |
| The All-American Rejects | Get This | 3.4M | 112.5K | 266K | 457K |

**Playlists**: Replace placeholder `#` URLs with actual Spotify playlist links (3 per case).

**Metric labels**: Keep Dack Janiels metrics as-is (Streams, Playlist Adds, Save Rate, Algo Streams). For ero808 and All-American Rejects, use: Streams, Playlist Adds, Saves, Algo Streams.

No layout or styling changes needed.

