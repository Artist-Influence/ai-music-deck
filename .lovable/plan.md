# Add Client Portal Slide (new slide 6)

## Video processing
- Copy `user-uploads://Screen_Recording_2026-05-05_at_10.54.26_AM.mov` to `/tmp/`.
- Use ffmpeg to: trim to 0–48s, apply 1.5x speed (`setpts=PTS/1.5`, no audio needed — slide will be muted), re-encode to web-friendly MP4 (h264, faststart) at ~1080p. Output to `public/client-portal.mp4` (~32s final duration).
- Also generate a poster frame `public/client-portal-poster.jpg` for instant load.

## New slide component
Create `src/components/deck/slides/ClientPortalSlide.tsx`:
- Layout matches other service slides (PatternVisual backdrop, service eyebrow, title, subtitle).
- Title: "Client Portal" — eyebrow: "Platform".
- Subtitle/body copy emphasizing: "Real-time attribution across every service — one dashboard, live data."
- Large rounded video frame (autoplay, muted, loop, playsInline, preload metadata, poster) on the right; supporting text + 3 short bullets on the left (Real-time attribution / Cross-service visibility / Always-on reporting).
- Mobile: stack video above text, full-width.

## Wiring
- Register `ClientPortalSlide` in `src/components/deck/slides/index.tsx` between `WhatWeDoSlide` and `ClippingSlide`.
- Add i18n keys (`clientPortal.eyebrow`, `.title`, `.subtitle`, `.bullets.0..2`) to all 11 locale files (en + 10 translations).

## Memory
- Update `mem://features/deck-structure` to insert the new slide as #6 and renumber 6→19.
