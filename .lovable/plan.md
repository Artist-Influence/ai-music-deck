

# Add Hindi translation to the deck

## Scope

Add Hindi (हिन्दी) as a selectable language in the dropdown, with full translations for all 18 slides matching the user's provided copy.

## Changes — 3 files

### 1. Create `src/i18n/hi.ts` (new file)

Full Hindi translation dictionary mirroring the exact key structure used in `src/i18n/ar.ts` (the most recent locale, which has all 18 slides covered). Every key value will be populated from the user's provided Hindi copy block, including:

- `cover.*` — Cover slide (tagline, subtitle, confidential)
- `opSystem.*` — Slide 2 (tagline, title, subtitle, 3 pillars, loop labels, takeaway)
- `unifiedOps.*` — Slide 3 (kicker, title, subtitle, 4 modules, callout, footer)
- `shift.*` — Slide 4 (title, subtitle, section, 4 wins)
- `whatWeDo.*` — Slide 5 (title, section, 3 pillars)
- `clipping.*` — Slide 6 (title, subtitle, pros, diff bullets, timeframe, 3 case studies)
- `creatorFlood.*` — Slide 7 (title, subtitle, pros, when-to-use, case study)
- `trending.*` — Slide 8 (title, subtitle, how-it-works, when-to-use, case study)
- `cultureEdits.*` — Slide 9 (title, subtitle, what, why, bestFor)
- `youtube.*` — Slide 10 (title, subtitle, what, how, case study)
- `spotify.*` — Slide 11 (title, subtitle, what, why, case study)
- `soundcloud.*` — Slide 12 (title, subtitle, what, why, footer)
- `instagram.*` — Slide 13 (title, subtitle, what, why, case study)
- `metaTiktok.*` — Slide 14 (title, subtitle, what, how, 2 case studies)
- `websites.*` — Slide 15 (title, subtitle, 3 cards, more, automation, why)
- `idid.*` — Slide 16 (kicker, pilotChip, title, tagline, subtitle, what, why, bottomNote)
- `pricing.*` — Slide 17 (title, subtitle, 8 service rows, headers, viewPricing, footer)
- `nextSteps.*` — Slide 18 (title, subtitle, 4 steps, contact, tagline)

Hindi is LTR, so no `dir` switching is needed.

### 2. Update `src/i18n/locales.ts`

Append one entry to the `locales` array:

```ts
{ code: 'hi', label: 'हिन्दी', flag: '🇮🇳', style: 'Hindi (Devanagari)' },
```

`rtlLocales` is unchanged (Hindi is LTR).

### 3. Update `src/i18n/LanguageContext.tsx`

- Add `import hi from './hi';`
- Add `hi` to the `allTranslations` map.

## Out of scope

- No component edits — every key is already wired to existing `t()` calls.
- No changes to other locale files.
- No layout, KPI label, pricing table row, or case study metric changes.
- No RTL handling (Hindi is LTR).

## Verification

After the edit, the language picker shows हिन्दी 🇮🇳 as a 11th option, and selecting it renders every slide (1 → 18) in Hindi with no raw key fallbacks.

