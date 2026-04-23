

# Refresh Dutch locale to match the user's provided deck copy

## Scope

Update `src/i18n/nl.ts` so every string the deck renders in Dutch matches the user's provided copy block (slides 1 → 18). All other locale files and components stay untouched.

## Why this is needed

The Dutch file currently lacks the same 5 namespaces used on slides 2, 3, 9, 15, and 16:

- `opSystem.*` (Slide 2 — Besturingssysteem)
- `unifiedOps.*` (Slide 3 — Unified Ops)
- `cultureEdits.*` (Slide 9 — Culture Edits)
- `websites.*` (Slide 15 — Websites & digitale infrastructuur)
- `idid.*` (Slide 16 — ID.ID)

Without these keys, Dutch falls back to raw key strings on those 5 slides. Several existing values also need a refresh (e.g. `clipping.subtitle` says "meer dan 20.000 clippers" → should read "meer dan 2.000 clippers", `trending.subtitle` overpromises a guarantee, and `nextSteps.tagline` is still in English).

## Changes — single file: `src/i18n/nl.ts`

### A. Update existing values to the new Dutch copy

| Key | New Dutch value |
|---|---|
| `cover.subtitle` | Momentum creëren op het gebied van korte video's, streaming en cultuur. |
| `shift.subtitle` | Mensen ontdekken nummers niet meer op de oude manier. Nummers verspreiden zich nu door herhaalde blootstelling, validatie door de community, algoritmisch momentum en betaalde versterking bovenop wat al werkt. |
| `shift.section` | Wat werkt vandaag de dag |
| `shift.win.0` | Volume van echte korte contentcreatie |
| `shift.win.1` | Consistente blootstelling bij alle doelgroepen |
| `shift.win.2` | Validatie door de community (pagina's, curatoren, makers) |
| `shift.win.3` | Slimme versterking die de juiste signalen een boost geeft |
| `whatWeDo.section` | Drie pijlers die het algoritme voor je laten werken |
| `whatWeDo.pillar.0.desc` | Overspoel sociale platforms met snelle korte content |
| `whatWeDo.pillar.1.desc` | Richt je op echte communities met bereik binnen je niche |
| `whatWeDo.pillar.2.label` | Versterking |
| `whatWeDo.pillar.2.desc` | Versterk winnaars met betaalde uitgaven zodra de creatie zichzelf bewijst |
| `clipping.subtitle` | Een distributienetwerk aangedreven door meer dan 2.000 clippers die content creëren op TikTok, Instagram en YouTube. |
| `clipping.timeframe` | Tijdsbestek: 2 tot 4 weken van begin tot eind |
| `creatorFlood.subtitle` | Massale verspreiding van je track via minimaal 10.000 posts vanuit echte TikTok UGC-video's. |
| `trending.title` | Top 50 Trending & Popular-tabblad |
| `trending.titleLine2` | (empty string — title now single-line) |
| `trending.subtitle` | Wij helpen records in zichtbare hitlijsten en trending-omgevingen te duwen op YouTube Shorts, Instagram Reels, Facebook Reels en TikTok. |
| `pricing.subtitle` | Elk pakket is opgebouwd rond uw releaseschema, publiek en doelstellingen. Kies individuele diensten, of laat ons een pakket op maat samenstellen. |
| `pricing.service.0.name` | Clipping |
| `pricing.footer` | We stellen het definitieve pakket samen op basis van uw releaseschema, doelgroep en doelstellingen. |
| `nextSteps.subtitle` | Vier stappen. Geen gedoe. Laten we beginnen. |
| `nextSteps.contactRedLine` | We kunnen aanbevolen betaalde pakketten binnen 24 uur afhandelen. |
| `nextSteps.tagline` | Software-backed · Culture-native · Execution-ready *(kept English per brief)* |

(All other existing Dutch strings — pros/diff bullets, KPI labels, case study copy, pricing table rows — already align with the brief and stay as-is. Numeric metrics in case studies are preserved.)

### B. Add the 5 missing namespaces (Dutch translations of the user-provided copy)

**`opSystem.*`** (Slide 2)
- `tagline` → "Software-ondersteund · Cultuurgericht · Klaar voor uitvoering"
- `title` → "We bouwen het besturingssysteem voor de groei van moderne muziek."
- `subtitle` → translated subtitle from the brief
- `pillar.0.label / desc` → "Software-infrastructuur" / "Rapportage, campagnetracking, workflows, realtime attributie, dashboards."
- `pillar.1.label / desc` → "Distributie-engine" / "Playlisting, clipping, reposts, seeding, betaalde media, cultuurpenetratie."
- `pillar.2.label / desc` → "Uitvoeringslaag" / "Strategie, lanceringsbeheer, optimalisatie, creatieve input, menselijk toezicht."
- `loop.inputs / engine / reporting / learnings` → "Inputs" / "Engine" / "Rapportage" / "Leerpunten"
- `takeaway` → translated takeaway from the brief

**`unifiedOps.*`** (Slide 3)
- `kicker` → "Het product"
- `title` → "Unified Ops is de kern."
- `subtitle` → translated subtitle from the brief
- 4 modules (label + desc) translated as "Intake & Launch", "Live Tracking", "Reporting Layer", "Leerlaag"
- `calloutTitle` → "Zelflerend systeem"
- `calloutBody` → translated as in the brief
- `footer` → "Zo gaan we van handmatige uitvoering naar samengestelde campagne-intelligentie."

**`cultureEdits.*`** (Slide 9)
- `title` → "Culture Edits"
- `subtitle`, `whatTitle` ("Wat het is"), 3 `what.*` bullets, `whyTitle` ("Waarom het werkt"), 3 `why.*` bullets, `bestForLabel` ("Meest geschikt voor:"), `bestFor` translated copy

**`websites.*`** (Slide 15)
- `title` → "Websites & digitale infrastructuur"
- `subtitle` → translated copy
- 3 cards (`card.0/1/2.title + desc`) translated: "Artiestenwebsites" / "Conversie-infrastructuur" / "Ontwerp + Snelheid"
- `moreLabel` → "Live-bouwwerken:"
- `automationLabel` → "Automatische synchronisatie:"
- `automation` → "Nieuwe releases en tourdata werken zichzelf bij. Geen handmatige bewerkingen."
- `whyLabel` → "Waarom het belangrijk is:"
- `why` → translated copy

**`idid.*`** (Slide 16)
- `kicker` → "Pilot-service"
- `pilotChip` → "PILOT"
- `title` → "ID.ID"
- `tagline` → "Een pilotdienst voor het ontdekken van muziek via dj's."
- `subtitle` → translated copy
- 3 `what.*` bullets, 3 `why.*` bullets, `bottomNote` translated as per brief

## Out of scope

- No component edits — all 5 namespaces already render via existing `t()` calls.
- No changes to other locale files (en, es, de, fr, ja, ko, pt, zh).
- No KPI label changes, no pricing table row changes (besides "Knipsel" → "Clipping"), no case study metric changes.
- No new visuals, layout, or component logic.

## Verification

After the edit, switching the deck's language picker to Dutch renders every slide (1 → 18) with full Dutch copy, with no raw key strings appearing on slides 2, 3, 9, 15, or 16.

