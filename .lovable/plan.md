

# Redesign Culture Edits slide with two vertical video clips

## What you'll see
The Culture Edits slide gets a new layout that features **two phone-style vertical short-form video frames** as the visual hero, anchored next to the existing copy. The clips use placeholders by default and are easy for you to swap with real video files later.

New layout (desktop):

```text
┌──────────────────────────────────────────────────────────────┐
│  [icon] SERVICE                                              │
│  Culture Edits                                               │
│  Subtitle copy spanning ~700px                               │
│                                                              │
│  ┌─────────────────────────┐   ┌──────────┐ ┌──────────┐    │
│  │ What it is              │   │  ▶ clip  │ │  ▶ clip  │    │
│  │ • bullet                │   │  9:16    │ │  9:16    │    │
│  │ • bullet                │   │  vert    │ │  vert    │    │
│  │ • bullet                │   │  frame   │ │  frame   │    │
│  ├─────────────────────────┤   │          │ │          │    │
│  │ Why it works            │   │  CATEGORY│ │  CATEGORY│    │
│  │ • bullet                │   └──────────┘ └──────────┘    │
│  │ • bullet                │                                 │
│  │ • bullet                │                                 │
│  └─────────────────────────┘                                 │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ BEST FOR — full-width strip                          │    │
│  └──────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

Mobile: copy stacks first, then the two phones sit side-by-side at a smaller scale, then the "Best for" strip.

## Phone clip frame design
Each clip frame is a **9:16 phone-style card** that matches the deck's dark + crimson glow language:

- Rounded outer frame (`rounded-3xl`) with subtle `border-white/10` and inner `shadow-[0_20px_60px_-20px_hsl(0_72%_51%/0.3)]` glow
- Inside: a `<video>` element (`autoPlay`, `muted`, `loop`, `playsInline`) that fills the frame with `object-cover`
- Subtle "notch" pill at the top center for the phone aesthetic
- Bottom overlay with a small category label chip (e.g. "SPORTS", "ANIME") + a tiny play indicator
- Crimson accent ring around each frame on hover (very subtle)
- Graceful fallback when `src` is missing: a dark gradient placeholder with a `Film` icon, the category label, and "Add clip" hint text — so the slide looks complete even before you add real videos

## How you add your own clips later
A new folder `public/culture-edits/` will be created. Drop two MP4 files there:
- `public/culture-edits/clip-1.mp4`
- `public/culture-edits/clip-2.mp4`

The slide automatically picks them up. The two clip slots are configured at the top of `CultureEditsSlide.tsx` as a small array so you can also swap categories/labels in one place:

```tsx
const clips = [
  { src: '/culture-edits/clip-1.mp4', label: 'SPORTS' },
  { src: '/culture-edits/clip-2.mp4', label: 'ANIME' },
];
```

If `src` is missing or fails to load, the placeholder state shows automatically (no broken video icon).

## Visual polish
- The decorative 4×3 background collage grid stays but its opacity drops slightly so the two phone frames become the clear focal point
- The two phones are sized at roughly `w-[240px]` desktop / `w-[140px]` mobile, with 9:16 aspect ratio enforced via `aspect-[9/16]`
- A faint crimson radial glow sits behind the pair of phones to make them feel like the hero element
- "What it is" and "Why it works" panels collapse into a single tall left column (stacked) instead of the current side-by-side layout, so the right column has room for the two phones

## Files changed
- `src/components/deck/slides/CultureEditsSlide.tsx` — full layout rebuild as described above; no changes to copy keys (existing `cultureEdits.*` i18n keys reused).
- `public/culture-edits/.gitkeep` — new empty folder so you have a clear place to drop `clip-1.mp4` and `clip-2.mp4`.

## New tiny inline component (defined inside the slide file)
A `PhoneClip` subcomponent (~30 lines) that renders the 9:16 frame, the `<video>` with proper attributes for autoplay (`muted`, `playsInline`, `loop`, `autoPlay`, `preload="metadata"`), the placeholder fallback, and the bottom category chip. Kept inline (not exported) since only this slide uses it.

## Out of scope
- Sourcing actual video clips (you'll drop these into `public/culture-edits/` after the redesign ships).
- Touching i18n copy or other locale files.
- Changing the deck order, the background collage labels, or any other slide.
- PDF export behavior — videos render their first frame in static captures, which works fine for the exported PDF.

