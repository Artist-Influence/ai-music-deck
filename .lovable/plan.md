

# Add clickable website references to Slide 18 (Websites & Digital Infrastructure)

## What you'll see
Below the three thumbnail cards (and above the "Why" panel), a new horizontal row of **five small clickable site links** appears, styled as subtle pill chips. Each chip shows the artist name and the domain, and opens the live site in a new tab.

Visual:

```text
[ Kompany · kompanymusic.com ]  [ Levity · levityofficial.com ]  [ Kluster Flux · klusterflux.com ]  [ ID.ID · id-id.artistinfluence.com ]  [ Luhv · luhv.la ]
```

- Chip style: rounded-full, subtle border (`border-primary/20`), `bg-background/40`, small ExternalLink icon, hover lifts to `border-primary/50` + `text-primary`.
- Wraps to multiple rows on mobile; single row on desktop.
- Sits in a labeled strip: "Live sites:" prefix in muted text, then the chips.

## Why this placement
- The three thumbnail cards already showcase Pierce, Kompany, Levity visually — adding domain text inside each card would clutter the screenshots.
- A dedicated "Live sites" row makes it obvious these are real, browsable references and includes the two artists (Kluster Flux, ID.ID, Luhv) we don't have thumbnails for.
- Slots cleanly between the cards grid and the "Why" panel without disrupting the existing 1920×1080 layout — just one extra compact row (~40px).

## Implementation

**File: `src/components/deck/slides/WebsitesSlide.tsx`**

1. Add `ExternalLink` to the lucide-react import.
2. Define a `siteLinks` array (component-level constant — these are proper nouns / URLs, no i18n needed):
   ```tsx
   const siteLinks = [
     { name: 'Kompany',     url: 'https://kompanymusic.com' },
     { name: 'Levity',      url: 'https://levityofficial.com' },
     { name: 'Kluster Flux',url: 'https://klusterflux.com' },
     { name: 'ID.ID',       url: 'https://id-id.artistinfluence.com' },
     { name: 'Luhv',        url: 'https://luhv.la' },
   ];
   ```
3. Insert a new block between the cards `grid` and the "Why" `GlassPanel`:
   ```tsx
   <div className="flex flex-wrap items-center gap-2 md:gap-2.5 mb-3 md:mb-5">
     <span className="text-[11px] md:text-sm text-muted-foreground uppercase tracking-wider mr-1">
       {t('websites.liveLabel')}
     </span>
     {siteLinks.map((s) => (
       <a
         key={s.url}
         href={s.url}
         target="_blank"
         rel="noopener noreferrer"
         className="group inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full
                    border border-primary/20 bg-background/40
                    text-[11px] md:text-sm text-foreground/80
                    hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-colors"
       >
         <span className="font-medium">{s.name}</span>
         <span className="text-muted-foreground/70 group-hover:text-primary/80">·</span>
         <span className="text-muted-foreground/90 group-hover:text-primary/80">
           {s.url.replace(/^https?:\/\//, '')}
         </span>
         <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-60 group-hover:opacity-100" />
       </a>
     ))}
   </div>
   ```

**i18n: add one key per locale** (`src/i18n/{en,de,es,fr,ja,ko,nl,pt,zh}.ts`)
- `websites.liveLabel`:
  - en: `'Live sites:'`
  - de: `'Live-Seiten:'`
  - es: `'Sitios en vivo:'`
  - fr: `'Sites en ligne :'`
  - ja: `'稼働中のサイト：'`
  - ko: `'운영 중인 사이트:'`
  - nl: `'Live sites:'`
  - pt: `'Sites no ar:'`
  - zh: `'上线网站：'`

Artist names and URLs stay in English (proper nouns / domains).

## Files changed
- `src/components/deck/slides/WebsitesSlide.tsx` — add ExternalLink import, `siteLinks` constant, new chip row between grid and Why panel
- `src/i18n/{en,de,es,fr,ja,ko,nl,pt,zh}.ts` — add `websites.liveLabel` key (9 locales)

## Out of scope
- Adding thumbnails for Kluster Flux, ID.ID, Luhv (kept as text-only chips — only 3 thumbnail slots exist by design).
- Reordering or restyling the existing three thumbnail cards.
- Adding click-through on the thumbnail cards themselves (chips below already cover the linking need; can be a follow-up if you want each card clickable too).
- PDF export — links render as plain text in static PDF capture, which is acceptable.

