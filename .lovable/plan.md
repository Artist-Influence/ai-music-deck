## Client Portal slide adjustments

### 1. Layout — bullets narrower, video larger
In `src/components/deck/slides/ClientPortalSlide.tsx`:
- Change left column from `md:w-[34%]` to `md:w-[26%]` so the video frame takes more space.
- Make each bullet `GlassPanel` taller to fill the column: add `flex-1` (or `min-h-0 flex-1`) so the three bullets stretch to match the video height. Keep padding `p-4 md:p-6`.
- The video panel keeps `md:flex-1`.

### 2. Crop video black bars (15% each side)
The `<video>` is inside an `aspect-video` container with `object-cover`. To crop ~15% off each side without letterboxing:
- Wrap the video so it scales up by ~1.43x horizontally (1 / (1 - 0.30)) and gets clipped by `overflow-hidden` on the container.
- Implementation: set the `<video>` to `className="w-full h-full object-cover scale-x-[1.43] origin-center"`. The outer `aspect-video` div already has `overflow-hidden`.

### 3. Copy updates
In all 11 i18n files (`en.ts` + 10 locales), update these keys (translate accordingly for non-English; English exact text below):

- `clientPortal.subtitle`:  
  `One dashboard. Real-time attribution across every service we run for you. Live data, no spreadsheets, invoice tracking, campaign requests, and offers.`
- `clientPortal.bullets.0.desc`:  
  `See exactly which placements, creators, and platforms are driving streams and engagement.`
- `clientPortal.bullets.1.desc`:  
  `Clipping, playlisting, ads, seeding. Every campaign rolled up in one view.`
- `clientPortal.bullets.2.desc`: leave as-is.

Titles (`bullets.0.title`, `bullets.1.title`, `bullets.2.title`) remain unchanged.

### Files touched
- `src/components/deck/slides/ClientPortalSlide.tsx`
- `src/i18n/{en,es,fr,de,pt,nl,ar,hi,ja,ko,zh}.ts`
