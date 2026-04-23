

# Two fixes: clean up Websites slide links + add ID.ID site link to ID.ID slide

## 1. Websites slide — consolidate live links into "More live builds" row

**Problem:** Right now each thumbnail card has its own `↗ domain` link below the description, AND there's a "More live builds:" row with Kluster Flux + Luhv. You want ALL five sites in the bottom row instead — cleaner, no per-card link clutter.

**Changes to `src/components/deck/slides/WebsitesSlide.tsx`:**

1. **Remove** the per-card `<a>` link block (the `↗ liveLabel` rendered inside each card after the description).
2. **Drop** `liveUrl` / `liveLabel` from `cardConfig` (no longer used).
3. **Expand** `extraLinks` from 2 → 5 entries, in this order:
   ```tsx
   const extraLinks = [
     { name: 'Kompany',      url: 'https://kompanymusic.com',          label: 'kompanymusic.com' },
     { name: 'Levity',       url: 'https://levityofficial.com',        label: 'levityofficial.com' },
     { name: 'ID.ID',        url: 'https://id-id.artistinfluence.com', label: 'id-id.artistinfluence.com' },
     { name: 'Kluster Flux', url: 'https://klusterflux.com',           label: 'klusterflux.com' },
     { name: 'Luhv',         url: 'https://luhv.la',                   label: 'luhv.la' },
   ];
   ```
4. **Rename** the row label from "More live builds:" → "Live builds:" (no longer "more" since it's the only place links live now). Update `websites.moreLabel` in `src/i18n/en.ts` to `'Live builds:'`.

The chip styling already wraps cleanly — 5 chips fit on one row at desktop width (1500px max-width), wrap to 2 rows on mobile.

## 2. ID.ID slide — add link to id-id.artistinfluence.com

**File:** `src/components/deck/slides/IdIdSlide.tsx`

Add a small inline `ExternalLink` chip beside the **tagline** (between the H1 title and the subtitle paragraph) so it's visible early without disturbing the two `What`/`Why` glass panels below.

Visual:
```text
ID.ID                                                    [pilot chip ↗]
[Disc icon] BOUTIQUE PUBLISHING & A&R
The Discovery Engine for Modern Dance Music              ← title
A&R-led publishing house...   ↗ id-id.artistinfluence.com ← tagline + new link
A&R-led publishing house engineered to find...           ← subtitle
```

Implementation:
- Import `ExternalLink` from `lucide-react` (already imports `Disc3`).
- Wrap the tagline `<p>` and a new `<a>` in a flex row with `flex-wrap`:
  ```tsx
  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3 md:mb-5">
    <p className="text-base md:text-3xl text-primary/90 font-light">{t('idid.tagline')}</p>
    <a
      href="https://id-id.artistinfluence.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs md:text-base text-primary/80 hover:text-primary transition-colors"
    >
      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
      <span className="underline decoration-primary/30 hover:decoration-primary">id-id.artistinfluence.com</span>
    </a>
  </div>
  ```
- Remove the old standalone tagline `<p>` (replaced by the flex row above).

No i18n key needed for the URL — it's a domain, treated as a proper noun like the artist names in the Websites slide.

## Files changed

- `src/components/deck/slides/WebsitesSlide.tsx` — remove per-card link + `liveUrl`/`liveLabel` fields; expand `extraLinks` to 5 entries
- `src/i18n/en.ts` — change `websites.moreLabel` value to `'Live builds:'`
- `src/components/deck/slides/IdIdSlide.tsx` — import `ExternalLink`, add link chip beside tagline

## Out of scope

- Other locale files (`de`, `es`, `fr`, etc.) — only `en.ts` has `websites.moreLabel` per current state; if other locales are missing the key they fall back to `en` already.
- Reordering or restyling the three thumbnail cards.
- Changing the automation pill or "Why" panel.
- Adding a logo/preview thumbnail for ID.ID on the ID.ID slide (text link is sufficient and matches the slide's existing minimal layout).

