
Mobile-only fix plan for the remaining clipped platform slides:

1. Root cause
- These three slides still use the same stacked mobile structure: intro block + two info panels + three case-study cards.
- At 390x844, that stack is still too tall, so the last card lands too low even though the deck itself is now scrollable.

2. Fix strategy
- Keep desktop exactly as-is.
- On mobile only, make these slides meaningfully shorter instead of just shaving a few pixels:
  - merge the two left-side info panels into one compact summary card
  - tighten the header block
  - make each case-study card denser
  - for Spotify, compress the playlist link row further since it adds extra height

3. Per-slide implementation

- SpotifyPlaylistingSlide.tsx
  - Replace the 2 separate mobile info cards with 1 condensed summary card.
  - Reduce top copy spacing and mobile font sizes slightly.
  - Shrink artwork, card padding, and metric tile padding.
  - Turn playlist buttons into a tighter mobile treatment:
    - smaller pills
    - shorter labels on mobile (for example P1 / P2 / P3)
    - smaller gaps and icon sizing
  - Goal: fully reveal the 3rd case study on mobile.

- SoundCloudRepostsSlide.tsx
  - Same mobile summary-card approach as Spotify.
  - Tighten title/body spacing, card padding, artwork size, and metric tile sizing.
  - Slightly reduce vertical gaps between the 3 case-study cards.
  - Goal: fully reveal the bottom case study.

- InstagramSeedingSlide.tsx
  - Same mobile summary-card approach.
  - Tighten the case-study card padding and metric boxes slightly less aggressively than Spotify/SoundCloud.
  - Goal: clear the remaining small cutoff on the 3rd card.

4. What I would not change
- No more deck-level navigation/container changes.
- No desktop layout changes.
- No change to the overall visual style; this is a mobile compaction pass only.

5. Files to update
- src/components/deck/slides/SpotifyPlaylistingSlide.tsx
- src/components/deck/slides/SoundCloudRepostsSlide.tsx
- src/components/deck/slides/InstagramSeedingSlide.tsx

Expected result
- The final case study on Spotify, SoundCloud, and Instagram fits cleanly on mobile.
- Spotify’s last card gets the biggest reduction because of the extra playlist-link row.
- Desktop presentation remains unchanged.
