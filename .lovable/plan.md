

## Redesign Instagram Seeding Slide (13) to Match Spotify/SoundCloud Layout

### Changes to `InstagramSeedingSlide.tsx`:

1. **Outer container**: `p-24` → `p-12`, remove `flex-col`, keep `flex items-center justify-center`.

2. **Left column** — restructure to match Spotify pattern:
   - Title: `text-5xl` → `text-6xl`
   - Subtitle: keep `text-2xl`, reduce `mb-10` → `mb-6`
   - Panel text: `text-lg` → `text-2xl` for body copy inside both GlassPanels
   - Panels: `p-6` → `p-8`
   - "What it is" panel: no `flex-1` (sizes naturally)
   - "Why it works" panel: add `flex-1` to stretch and align with third case study
   - Remove `GlassPanel subtle` timeframe wrapper, replace with plain `<p className="text-2xl text-primary font-medium mt-2">Timeframe: 1–3 weeks</p>` outside the flex panel container
   - Wrap panels in `flex-1 flex flex-col gap-4` inner container

3. **Right column** — replace single large case study card with three compact cards matching Spotify's format:
   - First card: Francis Mercier / Sauti with `francisMercierImg` as 80x80 artwork thumbnail (no large screenshot), same 4 metrics (Views, CPM, Saves, Engagement) in a 4-column grid
   - Second and third cards: placeholder "Artist Name" / "Track Title" with Instagram icon in artwork slot and dash metrics
   - Each card: `GlassPanel variant="bright" className="p-5 flex-1 flex flex-col justify-center"`
   - Tag label: "SEEDING" instead of "PLAYLISTING"
   - No playlist links (remove that section from the Spotify template)

4. **Data structure**: Convert from single `metrics` array to a `cases` array of three objects, each with artist, track, artwork, and metrics fields.

