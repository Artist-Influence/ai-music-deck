

## Update SoundCloud Reposts Slide with Real Case Studies

### Assets to copy
1. `user-uploads://SIDEPIECE_–_Cash_Out.jpg` → `src/assets/sidepiece-cash-out.jpg`
2. `user-uploads://John_Summit_Gorgon_City_–_Is_Everybody_Having_Fun.jpg` → `src/assets/john-summit-gorgon-city-is-everybody-having-fun.jpg`
3. `user-uploads://Sonny_Fodera_–_All_This_Time.jpg` → `src/assets/sonny-fodera-all-this-time.jpg`

### Data (from screenshots)

| Artist | Track | Plays | Likes | Reposts |
|--------|-------|-------|-------|---------|
| SIDEPIECE | Cash Out | 563K | 18.1K | 407 |
| John Summit & Gorgon City | Is Everybody Having Fun? | 537K | 15.3K | 420 |
| Sonny Fodera | All This Time | 667K | 12.6K | 239 |

### Changes to `SoundCloudRepostsSlide.tsx`

1. Import the 3 artwork images
2. Replace the placeholder `cases` array with real data — each card gets: artwork image, artist name, track title, and 3 metrics (Plays, Likes, Reposts) instead of 4 placeholders
3. Update the metrics grid from `grid-cols-4` to `grid-cols-3` to fit the 3 metrics per card
4. Remove the placeholder SoundCloud icon from the artwork thumbnail and render the actual album art image instead

No layout or styling changes beyond the grid column adjustment.

