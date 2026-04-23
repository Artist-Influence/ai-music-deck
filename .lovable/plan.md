

# Replace right-card screenshot on Websites slide with new Levity LISTEN page

## What changes
On slide 18, the **right card** (currently showing the old Levity homepage) gets swapped to the new Levity LISTEN page screenshot — same artist, more visually striking page (LISTEN headline, Pop Off album art, recent releases grid).

## Asset setup
- Copy `user-uploads://Screenshot_2026-04-23_at_1.14.07_AM.png` → `src/assets/site-levity.png` (overwrites existing file).
- Since the import path stays the same, no code changes are needed in `WebsitesSlide.tsx` — the existing `levityImg` import will pick up the new file automatically.

## Files changed
- `src/assets/site-levity.png` — overwritten with new screenshot

## Out of scope
- Card title/description copy (still references Levity, which is accurate).
- Touching the Pierce (left) or Kompany (middle) cards.
- Changing `object-cover object-top` framing — the new screenshot's "LISTEN" headline + Pop Off artwork sit near the top of the page, so `object-top` will frame it nicely inside the 16:10 thumbnail.

