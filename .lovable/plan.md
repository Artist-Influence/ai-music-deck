

# Mobile-Friendly Deck Overhaul

## Problem
The screenshots show the core issue clearly: on a 390px-wide mobile screen, the 1920x1080 canvas scales to ~0.203x, making all text microscopic (70px headings become 14px, 21px body text becomes 4px). The current width-fit scaling approach doesn't work because the aspect ratio mismatch leaves massive dead space and unreadable content.

## Strategy: Height-fit scaling with horizontal scroll

Instead of fitting to width (which makes everything tiny), fit to the **available height** on mobile. This produces a much larger scale factor:

```text
Width-fit:  scale = 390 / 1920 = 0.203  → 70px text renders at 14px (bad)
Height-fit: scale = 750 / 1080 = 0.694  → 70px text renders at 49px (great)
                                        → 21px text renders at 15px (readable)
```

The slide will be wider than the screen (1920 * 0.694 = 1333px), so users swipe/scroll horizontally to see the full slide. This is how PDF viewers work on mobile and is a familiar UX pattern.

## Changes

### 1. ScaledSlide.tsx — Height-fit on mobile
- On mobile: `scale = containerHeight / 1080` (fit to height instead of width)
- Container: `overflow-x: auto, overflow-y: hidden` (horizontal scroll, not vertical)
- Remove the vertical spacer div; add a horizontal spacer instead (`width: 1920 * scale`)
- `transformOrigin: 'top left'`

### 2. DeckViewer.tsx — Full-bleed mobile layout
- On mobile, remove the top header bar entirely — the logo wastes precious vertical space
- Make the bottom nav bar an overlay (absolute positioned, semi-transparent) instead of taking layout space
- This maximizes the available height for the slide, giving the best possible scale factor
- Keep swipe navigation for switching slides (detect horizontal swipes at the edges or use vertical swipe to change slides since horizontal scroll is now used for panning)

**Swipe conflict resolution**: Since horizontal scroll is used for panning within a slide, change slide navigation to use **edge taps** instead — tap the left 15% of screen for previous, right 15% for next. The bottom nav arrows remain as backup.

### 3. Files to edit

| File | Changes |
|------|---------|
| `ScaledSlide.tsx` | Height-fit scaling on mobile, horizontal overflow, horizontal spacer |
| `DeckViewer.tsx` | Remove header on mobile, overlay nav bar, replace swipe with edge-tap navigation |

