

# Fix: Platform slides look too small on mobile with wasted blank space

## Problem
The aggressive compaction made the content too small — tiny text, tiny artwork, tiny metrics — leaving ~40% of the screen as empty dark space. The slides need to scale up to fill the mobile viewport properly.

## Fix approach
Increase mobile sizing across all three slides to use the available vertical space. Bigger artwork, bigger text, bigger metric tiles, more breathing room. The content should naturally fill the viewport height without overflowing.

### Specific changes per slide

**All three slides (SP/SC/IG) share the same pattern fix:**
- Root wrapper: change `py-2 px-3` to `py-6 px-5` for more comfortable padding
- Title: `text-xl` to `text-2xl`
- Subtitle: keep `text-xs` but add a bit more bottom margin
- Summary panel: increase text from `text-[10px]` to `text-xs`, increase padding from `p-3` to `p-4`
- Case study cards: increase padding from `p-1.5` to `p-3`
- Artwork: `w-8 h-8` to `w-12 h-12`
- Artist name: `text-[11px]` to `text-sm`
- Track name: `text-[9px]` to `text-xs`
- Tag label (SEEDING/PLAYLISTING/REPOSTS): `text-[8px]` to `text-[10px]`
- Metric values: `text-[9px]` to `text-sm`
- Metric labels: `text-[6px]` to `text-[8px]`
- Metric tile padding: `p-0.5` to `p-1.5`
- Gaps between cards: `gap-1` to `gap-2`
- Gaps between sections: `gap-2` to `gap-3`

**Spotify-specific:**
- Playlist link buttons: increase from `text-[8px]` to `text-[10px]`, padding from `px-1 py-0.5` to `px-2 py-1`

### Files
- `src/components/deck/slides/SpotifyPlaylistingSlide.tsx`
- `src/components/deck/slides/SoundCloudRepostsSlide.tsx`
- `src/components/deck/slides/InstagramSeedingSlide.tsx`

### Result
Content fills the mobile viewport naturally with readable text and properly-sized artwork, no wasted blank space.

