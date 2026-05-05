## Increase Font Sizes on Spotify Slide "What It Is" / "Why It Works" Sections

Bump the desktop font sizes in `SpotifyPlaylistingSlide.tsx` by ~20% for the two left-hand info panels.

### Changes
- **Section headings** (`spotify.whatTitle`, `spotify.whyTitle`): `md:text-xl` → `md:text-2xl`  
- **Bullet body text** (`spotify.what.*`, `spotify.why.*`): `md:text-lg` → `md:text-xl`  
- **Timeframe line** (`spotify.timeframe`): `md:text-lg` → `md:text-xl`  
- Adjust bullet-dot top margin (`md:mt-2` → `md:mt-2.5`) to stay aligned with the larger text.

Mobile sizes remain unchanged.