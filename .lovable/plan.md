

## Redesign SoundCloud Reposts Slide (12) to Match Spotify Playlisting Layout

The current slide uses smaller text (`text-5xl` title, `text-xl`/`text-lg` body), `p-24` padding, `items-start`, and has a single "coming soon" placeholder on the right. It needs to match slide 11's structure: larger text, two-column stretch layout, three case study cards on the right.

### Changes to `SoundCloudRepostsSlide.tsx`:

1. **Outer container**: Change `p-24` → `p-12`, change `flex-col items-center` → `items-center`, match Spotify's wrapper.

2. **Inner flex**: Change `items-start` → `items-stretch`.

3. **Left column** — match Spotify's typography and structure:
   - Title: `text-5xl` → `text-6xl`
   - Subtitle: `text-xl` → `text-2xl`, reduce `mb-10` → `mb-6`
   - "What it is" panel: `p-5` → `p-8`, text sizes to `text-2xl`
   - "Why it works" panel: `p-5` → `p-8`, text sizes to `text-2xl`, add `flex-1` so it stretches to align with third card
   - Remove the `GlassPanel subtle` timeframe wrapper, replace with plain `<p className="text-2xl text-primary font-medium mt-2">Timeframe: 2–8 weeks</p>` outside the flex container
   - Restructure left column to use `flex-1 flex flex-col gap-4` with inner wrapper for panels

4. **Right column** — replace single "coming soon" card with three placeholder case study cards matching Spotify's format:
   - Each card: `GlassPanel variant="bright" className="p-5 flex-1 flex flex-col justify-center"`
   - 80x80 artwork placeholder + artist/track text
   - 4-column metrics grid with placeholder dashes
   - SoundCloud icon in artwork placeholder instead of "Artwork" text
   - Artists labeled "Artist Name" / "Track Title"

