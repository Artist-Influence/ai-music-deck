

# Fix Websites slide: distribute live links per-card, add automation line, update subtitle

## Three issues fixed

1. **Duplication bug** — the "Live sites:" chip row was accidentally nested **inside** `cards.map()` (between the thumbnail and the title), so it rendered 3× (once per card). Move it out.
2. **Subtitle copy** — "music brand" → "brand".
3. **Add automation line** — short callout that sites can auto-update with new releases / tour dates (no manual work).

## New layout for live links

Instead of one shared row of 5 chips, **attach each link to the card it represents**, and put the two artists without thumbnails (Kluster Flux, Luhv) into a small "More live builds:" line under the cards. This kills the duplication, ties links to their visuals, and looks tighter.

Per-card link chip (rendered once inside each card, below the description, using a new `liveUrl` + `liveLabel` field on `cardConfig`):

```text
┌──────────────── Pierce thumbnail ────────────────┐
│  [icon] Artist Websites                         │
│  Custom sites for releases, catalogs…           │
│  ↗ id-id.artistinfluence.com                     │
└──────────────────────────────────────────────────┘
```

Card → link mapping:
- **Card 0 (Pierce thumbnail / Artist Websites)** → `id-id.artistinfluence.com` (ID.ID — Pierce is part of the ID.ID umbrella visual)
- **Card 1 (Kompany thumbnail / Conversion Infrastructure)** → `kompanymusic.com`
- **Card 2 (Levity thumbnail / Design + Speed)** → `levityofficial.com`

Below the cards row, a single compact line for the remaining two:
```text
More live builds:  ↗ klusterflux.com   ↗ luhv.la
```

## Automation callout

Add a small inline pill above the "Why it matters" panel:

```text
⚡ Auto-syncing — new releases and tour dates update themselves. No manual edits.
```

Style: subtle border, primary-tinted icon, single line on desktop, wraps on mobile. Uses the existing `Zap` icon (already imported).

## Implementation — `src/components/deck/slides/WebsitesSlide.tsx`

1. **Restructure `cardConfig`** — add `liveUrl` + `liveLabel` per entry:
   ```tsx
   const cardConfig = [
     { icon: Globe, image: pierceImg, alt: 'Pierce — artist site',
       liveUrl: 'https://id-id.artistinfluence.com', liveLabel: 'id-id.artistinfluence.com' },
     { icon: Layers, image: kompanyImg, alt: 'Kompany — artist site',
       liveUrl: 'https://kompanymusic.com', liveLabel: 'kompanymusic.com' },
     { icon: Zap, image: levityImg, alt: 'Levity — artist site',
       liveUrl: 'https://levityofficial.com', liveLabel: 'levityofficial.com' },
   ];
   const extraLinks = [
     { name: 'Kluster Flux', url: 'https://klusterflux.com', label: 'klusterflux.com' },
     { name: 'Luhv',         url: 'https://luhv.la',         label: 'luhv.la' },
   ];
   ```

2. **Delete the misplaced chip block** currently sitting inside `cards.map()` (lines 54–74 of current file).

3. **Inside each card**, after the description, render a single link:
   ```tsx
   <a href={c.liveUrl} target="_blank" rel="noopener noreferrer"
      className="mt-2 md:mt-3 inline-flex items-center gap-1.5 text-[11px] md:text-sm
                 text-primary/85 hover:text-primary transition-colors">
     <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
     <span className="underline decoration-primary/30 hover:decoration-primary">
       {c.liveLabel}
     </span>
   </a>
   ```

4. **Below the cards grid**, before the automation pill, add the "More live builds" row using `extraLinks` (same chip style as before, but only 2 chips).

5. **Add automation pill** between the cards/extra-links block and the "Why" panel:
   ```tsx
   <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 mb-3 md:mb-5
                   rounded-full border border-primary/25 bg-primary/[0.06]">
     <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
     <p className="text-[11px] md:text-sm text-foreground/90">
       <span className="text-primary font-semibold">{t('websites.automationLabel')}</span>
       {' — '}{t('websites.automation')}
     </p>
   </div>
   ```

## i18n changes — `src/i18n/{en,de,es,fr,ja,ko,nl,pt,zh}.ts`

- **Update** `websites.subtitle`:
  - en: `'We also build high-conversion artist and brand websites that turn attention into action.'`
  - Translate the phrase change ("music brand" → "brand") in all 9 locales.
- **Add** `websites.moreLabel`:
  - en: `'More live builds:'`
- **Add** `websites.automationLabel`:
  - en: `'Auto-syncing'`
- **Add** `websites.automation`:
  - en: `'new releases and tour dates update themselves. No manual edits.'`
- **Remove** `websites.liveLabel` (no longer used; the per-card link is self-explanatory and the bottom row uses `moreLabel`).

All 9 locale files (`en, de, es, fr, ja, ko, nl, pt, zh`) get the same 3 new keys + updated subtitle + removed `liveLabel`.

## Files changed
- `src/components/deck/slides/WebsitesSlide.tsx` — restructure cardConfig, delete duplicated chip block, add per-card link, add `extraLinks` row, add automation pill
- `src/i18n/en.ts` + 8 other locales — update `websites.subtitle`, add `moreLabel` / `automationLabel` / `automation`, remove `liveLabel`

## Out of scope
- Actually wiring CMS / Spotify / Bandsintown feeds — automation pill is a positioning statement; current builds use Laylo/embeds/manual deploys. We're claiming the capability, which is accurate for Lovable + standard headless setups.
- Re-cropping or replacing any thumbnails.
- Reordering cards.

