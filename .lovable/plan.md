

# Mobile-Friendly Deck Passthrough

## Problem
All 15 slides are designed for a fixed 1920x1080 canvas. `ScaledSlide` uses `Math.min(width/1920, height/1080)` to scale. On a mobile phone (~375px wide), the scale factor is ~0.19, making all text (~4px rendered) completely unreadable. There are also no touch/swipe gestures for navigation.

## Approach

### 1. Add swipe navigation to DeckViewer
- Use touch events (`touchstart`/`touchend`) to detect horizontal swipes
- Swipe left = next slide, swipe right = previous slide
- Threshold of ~50px to avoid accidental triggers

### 2. Make ScaledSlide mobile-aware
- Accept an `isMobile` prop
- On mobile: scale based on **width only** (`containerWidth / 1920`) instead of `Math.min(width, height)`
- Allow vertical overflow scrolling so the slide fills the screen width and scrolls vertically
- This means text at 21px renders at ~4px on a 375px screen... still too small

**Better approach**: On mobile, use a larger base width (e.g. 800px instead of 1920px) so slides render at ~0.47 scale. But slides have hardcoded `w-[800px]`, `max-w-[1600px]` etc. that won't reflow.

**Best practical approach**: On mobile, scale to fit width only and enable pinch-to-zoom + scroll. The slide becomes a wide image-like view that users can scroll/zoom. This is how most PDF/deck viewers work on mobile.

### 3. Revised ScaledSlide for mobile
- On mobile: scale = `containerWidth / 1920` (width-fit only)
- Set the container to `overflow-y: auto` on mobile so users can scroll down
- Remove `overflow-hidden` on mobile

### 4. Simplify mobile DeckViewer chrome
- Hide Export PDF button on mobile (not useful)
- Hide grid view button on mobile
- Hide fullscreen button on mobile
- Make the bottom nav bar more touch-friendly (larger tap targets)
- Reduce header height

## Files to Change

| File | Change |
|------|--------|
| `DeckViewer.tsx` | Add swipe gesture handling; simplify mobile toolbar; larger mobile nav buttons |
| `ScaledSlide.tsx` | Accept `isMobile` prop; on mobile use width-only scaling with vertical scroll |

## Technical Detail

```text
Desktop:  scale = min(w/1920, h/1080)  → fits entire slide in view
Mobile:   scale = w/1920               → fills width, scrolls vertically
          container: overflow-y auto, overflow-x hidden
```

Swipe detection:
```text
touchstart → record X
touchend   → if deltaX > 50 → prev; if deltaX < -50 → next
```

