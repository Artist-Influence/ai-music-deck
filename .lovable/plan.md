

# Swap Websites slide thumbnails — add Kompany screenshot, reshuffle order

## What changes
On slide 18 (Websites & Digital Infrastructure), the **middle card** gets the new Kompany screenshot. The Levity screenshot that's currently in the middle moves to the **right card**, and the RSUN screenshot that's on the right is dropped.

New card order (left → right):
1. **Pierce** (unchanged)
2. **Kompany** (new — replaces Levity in middle)
3. **Levity** (moved from middle to right — replaces RSUN)

## Asset setup
- Copy `user-uploads://image.png` → `src/assets/site-kompany.png`
- The existing `src/assets/site-rsun.png` becomes unused but stays in the repo (no cleanup needed; not imported anywhere).

## Component change — `src/components/deck/slides/WebsitesSlide.tsx`
- Remove the `rsunImg` import.
- Add `import kompanyImg from '@/assets/site-kompany.png';`
- Update `cardConfig` to:
  ```tsx
  const cardConfig = [
    { icon: Globe, image: pierceImg, alt: 'Pierce — artist site' },
    { icon: Layers, image: kompanyImg, alt: 'Kompany — artist site' },
    { icon: Zap, image: levityImg, alt: 'Levity — artist site' },
  ];
  ```
- Existing `<img className="w-full h-full object-cover object-top" />` already handles the dark Kompany screenshot perfectly — the tour list section sits below the hero so `object-top` will show the "KOMPANY" logo + nav at the top of the thumbnail.

## Files changed
- `src/assets/site-kompany.png` — new (copied from upload)
- `src/components/deck/slides/WebsitesSlide.tsx` — swap image imports + reorder `cardConfig`

## Out of scope
- Card titles / descriptions / icons — i18n copy keys (`websites.card.0/1/2.title`/`desc`) stay the same. If you want the middle/right copy to specifically reference Kompany/Levity later, that's a separate i18n edit.
- Deleting the now-unused `site-rsun.png` file.

