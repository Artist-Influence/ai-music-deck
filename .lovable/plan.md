# Slide 15 (Websites) — Make site cards clickable + add two new sites

## Changes to `src/components/deck/slides/WebsitesSlide.tsx`

### 1. Make the 3 main site cards clickable with a clear arrow affordance

Currently the three large cards (Pierce, Kompany, Levity) display the screenshot, title, and description but are **not clickable** — they look like static tiles. Update them to:

- Wrap each `GlassPanel` in an `<a target="_blank" rel="noopener noreferrer">` (or render the panel itself as an `<a>` via a wrapper) linking to the artist's site.
- Add an `ExternalLink` (arrow) icon in the top-right of each card, styled in `text-primary` with a subtle hover state, so it's visually obvious the card is a link.
- Show the **artist/company name + domain** under the title row (e.g. `piercemusic.com`), styled like the chips in the extra-links row (small, muted, with hover → primary). This way the name of the site is visible on each card.
- Add hover affordance on the whole card: `hover:border-primary/50`, slight `hover:bg-primary/[0.04]`, and arrow shifts (`group-hover:translate-x-0.5 group-hover:-translate-y-0.5`).

URLs to wire up for the 3 main cards:
- Pierce → `https://piercemusic.com` (label: `piercemusic.com`)
- Kompany → `https://kompanymusic.com` (label: `kompanymusic.com`)
- Levity → `https://levityofficial.com` (label: `levityofficial.com`)

Update `cardConfig` to include `name`, `url`, and `label` fields alongside the existing `icon`, `image`, `alt`.

### 2. Add the two new sites to the "more" chips row

Append to the existing `extraLinks` array (which already renders as pill chips with the `ExternalLink` arrow):

```ts
{ name: 'Filthy Dubs', url: 'https://filthydubs.com', label: 'filthydubs.com' },
{ name: 'Pierce', url: 'https://piercemusic.com', label: 'piercemusic.com' },
```

Note: Pierce is also one of the 3 featured cards. Including it again in the chips row would be redundant — recommend **only** adding `Filthy Dubs` to the chips row (since Pierce is already prominently featured as a main card with its link). If you'd prefer Pierce to also appear in the chips strip for symmetry, I'll add both.

### Visual result

Each main card will look like:

```text
+--------------------------------------+
| [screenshot]                       ↗ |
|                                      |
|  ◎  Title                            |
|     Pierce · piercemusic.com         |
|     Description text...              |
+--------------------------------------+
```

Entire card is a hover-highlighted link; arrow in top-right makes clickability unambiguous.

## Open question

Should Pierce appear in **both** the featured card and the chips row, or only as the featured card (chips row gets just Filthy Dubs)? I'll default to **only Filthy Dubs in chips** unless you say otherwise.