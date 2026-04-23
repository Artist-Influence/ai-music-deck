

## Update copy across 4 slides in all 11 locales

### Slide 6 — Clipping subtitle: "2,000+" → "20,000+"

Update `clipping.subtitle` in all 11 locale files. Each language uses its own number formatting (e.g. `2,000` / `2.000` / `2 000` / `2000` / `2,000人` / `٢٠٠٠`), so the numeric token is replaced in-place per file:

- `en.ts`: `2,000+` → `20,000+`
- `pt.ts`: `2.000` → `20.000`
- `de.ts`: `2.000` → `20.000`
- `fr.ts`: `2 000` → `20 000`
- `es.ts`, `nl.ts`, `it.ts`-equivalents → match local thousands separator
- `ja.ts`: `2,000` → `20,000`
- `zh.ts`: `2,000` / `2000` → `20,000` / `20000`
- `ko.ts`: `2,000` → `20,000`
- `ar.ts`: `2000` → `20000`
- `hi.ts`: `2,000` → `20,000`

### Slide 12 — Remove "Total group reach: 25M+ followers" from `soundcloud.timeframe`

Keep only the timeframe portion in all 11 files:

- `en.ts`: `'Total group reach: 25M+ followers · Timeframe: 2 to 8 weeks'` → `'Timeframe: 2 to 8 weeks'`
- Same edit applied to fr/de/es/pt/nl/ja/ko/zh/ar/hi (drop the "total group reach" segment + the `·` separator, preserve each language's existing "Timeframe: 2 to 8 weeks" wording).

### Slide 14 — Replace `metaTiktok.timeframe` value

Change "Timeframe: 2 to 3 weeks" → "Timeframe: dependent on each campaign" in all 11 files, using each language's existing label phrasing (e.g. FR `Durée : dépend de chaque campagne`, DE `Zeitrahmen: abhängig von der jeweiligen Kampagne`, ES `Plazo: depende de cada campaña`, etc.).

### Slide 18 — Remove `nextSteps.contactRedLine`

Set the value to an empty string `''` in all 11 files. Keeping the key (rather than deleting it) avoids any TypeScript dictionary shape mismatch. The slide already renders this line via `t('nextSteps.contactRedLine')` inside a `<p>` — an empty string collapses the visible red line cleanly.

If preferred, the alternative is to delete the `<p>` rendering this key from `NextStepsSlide.tsx`. Empty-string approach is chosen because it requires no component change and leaves the i18n keys uniform.

## Files touched

- `src/i18n/en.ts`
- `src/i18n/fr.ts`
- `src/i18n/de.ts`
- `src/i18n/es.ts`
- `src/i18n/pt.ts`
- `src/i18n/nl.ts`
- `src/i18n/ja.ts`
- `src/i18n/ko.ts`
- `src/i18n/zh.ts`
- `src/i18n/ar.ts`
- `src/i18n/hi.ts`

No component, layout, or styling changes. No other locale keys touched.

## Verification

- Slide 6 (all langs): clipping subtitle reads "20,000+ clippers" (or locale equivalent).
- Slide 12 (all langs): SoundCloud footer shows only "Timeframe: 2 to 8 weeks" — no follower count.
- Slide 14 (all langs): Meta & TikTok footer shows "Timeframe: dependent on each campaign".
- Slide 18 (all langs): The red 24-hour turnaround line is gone; contact box ends at the website URL.

