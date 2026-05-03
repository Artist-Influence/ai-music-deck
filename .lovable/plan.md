## Slide 15 (Websites) — Fix "Live builds" chips row

### Changes to `src/components/deck/slides/WebsitesSlide.tsx`

**1. Remove URL labels from the chips** — chips should display only the artist/company name, not the domain. The arrow icon already conveys clickability, and the `href` carries the URL.

Before:
```text
[ Filthy Dubs · filthydubs.com ↗ ]
```

After:
```text
[ Filthy Dubs ↗ ]
```

**2. Update the `extraLinks` array** to include all live builds (in addition to existing ID.ID, Kluster Flux, Luhv, Filthy Dubs):

- Pierce → `https://piercemusic.com`
- Kompany → `https://kompanymusic.com`
- Levity → `https://levityofficial.com`
- Bauti → `https://bautimusic.com`

Final order in chips row:
ID.ID, Kluster Flux, Luhv, Filthy Dubs, Pierce, Kompany, Levity, Bauti

**3. Simplify the chip markup** — remove the `·` separator span and the `{s.label}` span; keep only the name + `ExternalLink` icon. The `label` field can be dropped from the array entries (or left unused; cleaner to drop it for the chips entries).

### Note on featured cards

The 3 main cards (Pierce, Kompany, Levity) keep their existing in-card name + domain label (`Pierce · piercemusic.com`) — that's the detailed featured-card treatment and is unchanged. They will now also appear in the chips row alongside Bauti for a complete "live builds" overview.

### Technical detail

```ts
const extraLinks = [
  { name: 'ID.ID', url: 'https://id-id.artistinfluence.com' },
  { name: 'Kluster Flux', url: 'https://klusterflux.com' },
  { name: 'Luhv', url: 'https://luhv.la' },
  { name: 'Filthy Dubs', url: 'https://filthydubs.com' },
  { name: 'Pierce', url: 'https://piercemusic.com' },
  { name: 'Kompany', url: 'https://kompanymusic.com' },
  { name: 'Levity', url: 'https://levityofficial.com' },
  { name: 'Bauti', url: 'https://bautimusic.com' },
];
```

Chip JSX simplifies to: `<span>{s.name}</span><ExternalLink />`.
