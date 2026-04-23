

# Refresh French locale to match user's provided deck copy

## Scope

Update `src/i18n/fr.ts` so every string the deck renders in French matches the user's new 18-slide copy, and add the 3 missing namespaces (`cultureEdits.*`, `websites.*`, `idid.*`) so slides 9, 15, and 16 stop falling back to raw key strings.

French is already a selectable option in the dropdown — no changes to `locales.ts` or `LanguageContext.tsx` needed.

## Why this is needed

The current `fr.ts` (304 lines vs `ar.ts` 381 lines) was left partially refreshed in an earlier cancelled session. It is missing:

- `cultureEdits.*` — Slide 9 (Culture Edits)
- `websites.*` — Slide 15 (Sites web et infrastructure numérique)
- `idid.*` — Slide 16 (ID.ID)

Without these keys, French falls back to raw key strings on those 3 slides. Several existing values also need refreshing to match the user's new wording (e.g. `unifiedOps.calloutBody`, `whatWeDo.pillar.*` descriptions, `pricing.subtitle`, `nextSteps.*`).

## Changes — single file: `src/i18n/fr.ts`

### A. Refresh existing values to match the new French copy

Update wording on these keys to match the user's brief exactly:

- `unifiedOps.calloutBody` — "Unified Ops est conçu pour identifier des modèles à travers les campagnes et améliorer les futurs lancements en utilisant de véritables données de performance internes, et non des conjectures."
- `unifiedOps.footer` — "C'est ainsi que nous passons de l'exécution manuelle à l'intelligence de campagne combinée."
- `shift.win.0` — "Volume de création de contenu court authentique"
- `shift.win.1` — "Exposition constante auprès de tous les publics"
- `shift.win.3` — "Amplification intelligente qui renforce les bons signaux"
- `whatWeDo.pillar.0.desc` — "Inonder les plateformes sociales de contenu court à haut débit"
- `whatWeDo.pillar.2.desc` — "Amplifiez les contenus performants grâce à des dépenses publicitaires une fois que la création a fait ses preuves"
- `pricing.title` / `pricing.subtitle` / `pricing.footer` — refreshed wording per brief
- `nextSteps.subtitle` — "Quatre étapes. Sans friction. C'est parti."
- `nextSteps.step.*` titles + descs — refreshed per brief
- `nextSteps.contactRedLine` — "Nous pouvons traiter les forfaits payants recommandés en moins de 24 heures."
- `nextSteps.tagline` — "Soutenu par un logiciel · Ancré dans la culture · Prêt à l'action"

(All other existing strings — pros/diff bullets, KPI labels, case study copy, pricing table rows — already align with the brief and stay as-is. Numeric metrics in case studies are preserved.)

### B. Add the 3 missing namespaces

**`cultureEdits.*`** (Slide 9)
- `title` → "Culture Edits"
- `subtitle` → translated subtitle from brief
- `whatTitle` → "Qu'est-ce que c'est"
- 3 `what.*` bullets translated
- `whyTitle` → "Pourquoi ça marche"
- 3 `why.*` bullets translated
- `bestForLabel` → "Idéal pour :"
- `bestFor` → translated copy

**`websites.*`** (Slide 15)
- `title` → "Sites web et infrastructure numérique"
- `subtitle` → translated copy
- 3 cards (`card.0/1/2.title + desc`) translated: "Sites web d'artistes" / "Infrastructure de conversion" / "Design + Rapidité"
- `moreLabel` → "Réalisations en ligne :"
- `automationLabel` → "Synchronisation automatique :"
- `automation` → "Les nouvelles sorties et les dates de tournée se mettent à jour automatiquement. Aucune modification manuelle."
- `whyLabel` → "Pourquoi c'est important :"
- `why` → translated copy from brief

**`idid.*`** (Slide 16)
- `kicker` → "Service pilote"
- `pilotChip` → "PILOT"
- `title` → "ID.ID"
- `tagline` → "Un service pilote pour la découverte musicale guidée par les DJ."
- `subtitle` → translated copy
- 3 `what.*` bullets, 3 `why.*` bullets, `bottomNote` translated per brief

## Out of scope

- No component edits — all 3 namespaces already render via existing `t()` calls.
- No changes to `locales.ts` or `LanguageContext.tsx` (French already wired up).
- No changes to other locale files.
- No KPI label changes, no pricing table row changes, no case study metric changes.
- No new visuals, layout, or component logic.

## Verification

After the edit, switching the deck's language picker to Français renders every slide (1 → 18) with full French copy matching the user's brief, with no raw key strings appearing on slides 9, 15, or 16.

