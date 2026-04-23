

# Add real screenshots to Websites slide + simplify Culture Edits clips

## Websites & Digital Infrastructure slide

Replace the three SVG wireframe placeholders with the three uploaded landing-page screenshots (Pierce, Levity, RSUN). Each screenshot fills its card thumbnail cleanly inside the existing `aspect-[16/10]` frame.

**Asset setup**
- Copy uploads into `src/assets/`:
  - `Screenshot_2026-04-23_at_1.07.44_AM.png` → `src/assets/site-pierce.png`
  - `Screenshot_2026-04-23_at_1.07.26_AM.png` → `src/assets/site-levity.png`
  - `Screenshot_2026-04-23_at_1.07.02_AM.png` → `src/assets/site-rsun.png`
- Import them as ES6 modules in `WebsitesSlide.tsx` (per asset path guidelines).

**Component changes (`src/components/deck/slides/WebsitesSlide.tsx`)**
- Delete the three SVG components (`DesktopWire`, `MobileWire`, `SpeedWire`).
- Replace `cardConfig` with an array that pairs each card with an imported image and a short alt label:
  ```tsx
  const cardConfig = [
    { icon: Globe, image: pierceImg, alt: 'Pierce — artist site' },
    { icon: Layers, image: levityImg, alt: 'Levity — artist site' },
    { icon: Zap, image: rsunImg, alt: 'RSUN — artist site' },
  ];
  ```
- In the card render, replace the `<Wire />` with:
  ```tsx
  <img src={c.image} alt={c.alt}
       className="w-full h-full object-cover object-top" />
  ```
  - `object-cover` + `object-top` keeps the hero/logo area visible while filling the 16:10 frame edge-to-edge with no letterboxing.
  - The existing `aspect-[16/10] rounded-lg overflow-hidden border border-primary/15` wrapper already provides the perfect frame — no padding/sizing changes needed.

The rest of the slide (title, subtitle, feature copy, "Why" panel) stays unchanged.

## Culture Edits slide (`src/components/deck/slides/CultureEditsSlide.tsx`)

Strip the chrome off the two phone clips so the videos play cleanly:
- Remove the bottom overlay block entirely (the gradient strip containing the category label chip AND the play button icon).
- Remove the `clips` array's `label` field usage downstream; can leave `label` in the array unused or simplify the array to just `{ src }`. Going with the cleaner option: simplify to `clips = [{ src: '/culture-edits/clip-1.mp4' }, { src: '/culture-edits/clip-2.mp4' }]` and drop the `label` prop from `PhoneClip`.
- Keep: rounded phone frame, notch pill at top, crimson glow shadow, fallback placeholder (just the Film icon + "Add clip" text — no label chip).
- Remove `Play` from the lucide imports since it's no longer used.

Result: each phone shows a clean, uninterrupted vertical video with just the subtle notch and frame — no labels, no play icon.

## Files changed
- `src/assets/site-pierce.png` (new — copied)
- `src/assets/site-levity.png` (new — copied)
- `src/assets/site-rsun.png` (new — copied)
- `src/components/deck/slides/WebsitesSlide.tsx` — swap SVG wireframes for real screenshots
- `src/components/deck/slides/CultureEditsSlide.tsx` — remove label chip + play icon overlay from `PhoneClip`

## Out of scope
- Re-cropping the screenshots in an image editor — `object-cover object-top` handles framing in CSS.
- Changing card titles/descriptions or the "Why" panel copy on Websites slide.
- Touching the background collage or copy panels on Culture Edits.

