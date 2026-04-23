

# Refresh German locale to match the user's provided deck copy

## Scope

Update `src/i18n/de.ts` so every string the deck renders in German matches the user's provided copy block (slides 1 → 18). All other locale files and components stay untouched.

## Why this is needed

The German file currently lacks the same 5 namespaces that were added when the deck was condensed to 18 slides:

- `opSystem.*` (Slide 2 — Operating System)
- `unifiedOps.*` (Slide 3 — Unified Ops)
- `cultureEdits.*` (Slide 9 — Culture Edits)
- `websites.*` (Slide 15 — Websites & Digital Infrastructure)
- `idid.*` (Slide 16 — ID.ID)

Without these keys, German falls back to raw key strings on those 5 slides. Several existing German values also need a refresh to match the approved copy (e.g. `clipping.subtitle` says "20.000 Clipper" but the new copy says "über 2.000", and the Creator Flood, pricing, and contact strings need slight wording updates).

## Changes — single file: `src/i18n/de.ts`

### A. Update existing values to the new German copy

| Key | New German value |
|---|---|
| `cover.subtitle` | Wir sorgen für Dynamik in den Bereichen Kurzvideos, Streaming und Kultur. |
| `shift.subtitle` | Menschen entdecken Songs nicht mehr auf die alte Art und Weise. Songs verbreiten sich heute durch wiederholte Präsenz, Validierung durch die Community, algorithmische Dynamik und bezahlte Verstärkung, die auf das aufbaut, was bereits funktioniert. |
| `shift.section` | Was heute erfolgreich ist |
| `clipping.subtitle` | Ein Vertriebsnetzwerk, das von über 2.000 Clippern angetrieben wird, die auf TikTok, Instagram und YouTube Inhalte erstellen. |
| `creatorFlood.subtitle` | Massenverbreitung deines Tracks über mindestens 10.000 echte TikTok-UGC-Videos. |
| `trending.subtitle` | Wir helfen dabei, Titel in sichtbare Charts und Trendbereiche auf YouTube Shorts, Instagram Reels, Facebook Reels und TikTok zu bringen. |
| `youtube.subtitle` | Internationale Ausrichtung und Optimierung zur Maximierung der Reichweite bei gleichzeitiger Sicherung der Interaktionsraten. |
| `spotify.subtitle` | Organische Playlist-Platzierungen durch Dritte, abgestimmt auf das Genre, konzipiert für die Entdeckung und algorithmische Erfassung. |
| `soundcloud.subtitle` | Verifizierte Verbreitung von Reposts in Genre-Communities mit transparenter Nachverfolgung und echter Interaktionsabsicht. |
| `instagram.subtitle` | Genre-spezifische Platzierungen auf Themenseiten und Meme-Accounts mit Nachverfolgung über ein Live-Dashboard. |
| `metaTiktok.subtitle` | Wir verwandeln bewährte native Beiträge in Anzeigen, die Streams, Verkäufe, Tourneen und mehr generieren. |
| `pricing.subtitle` | Jedes Paket ist auf Ihren Veröffentlichungsplan, Ihr Publikum und Ihre Ziele zugeschnitten. Wählen Sie einzelne Dienstleistungen aus oder lassen Sie uns ein maßgeschneidertes Paket zusammenstellen. |
| `pricing.footer` | Wir stellen das endgültige Paket auf Basis Ihres Veröffentlichungsplans, Ihrer Zielgruppe und Ihrer Ziele zusammen. |
| `nextSteps.subtitle` | Vier Schritte. Reibungslos. Los geht's. |
| `nextSteps.contactRedLine` | Wir können empfohlene kostenpflichtige Pakete innerhalb von 24 Stunden umsetzen. |
| `nextSteps.tagline` | Softwaregestützt · Kulturverankert · Umsetzungsbereit |

(All other existing German strings — pros/diff bullets, KPI labels, case study copy, pricing table rows — already align with the user's brief and stay as-is. Numeric metrics in case studies are preserved.)

### B. Add the 5 missing namespaces (German translations of the user-provided copy)

**`opSystem.*`** (Slide 2)
- `tagline` → "Softwaregestützt · Kulturorientiert · Umsetzungsbereit"
- `title` → "Wir entwickeln das Betriebssystem für das Wachstum moderner Musik."
- `subtitle` → full German subtitle from the brief
- `pillar.0.label / desc` → "Software-Infrastruktur" / "Berichterstattung, Kampagnen-Tracking, Workflows, Echtzeit-Attribution, Dashboards."
- `pillar.1.label / desc` → "Verteilungs-Engine" / "Playlisting, Clipping, Reposts, Seeding, bezahlte Medien, kulturelle Durchdringung."
- `pillar.2.label / desc` → "Ausführungsschicht" / "Strategie, Launch-Management, Optimierung, kreative Beiträge, menschliche Aufsicht."
- `loop.inputs / engine / reporting / learnings` → "Eingaben" / "Engine" / "Berichterstattung" / "Erkenntnisse"
- `takeaway` → translated takeaway from the brief

**`unifiedOps.*`** (Slide 3)
- `kicker` → "Das Produkt"
- `title` → "Unified Ops ist der Kern."
- `subtitle` → translated subtitle from the brief
- 4 modules (label + desc) translated as "Aufnahme & Start", "Live-Tracking", "Reporting-Ebene", "Lern-Ebene"
- `calloutTitle` → "Selbstlernendes System"
- `calloutBody` → translated as in the brief
- `footer` → "So gelangen wir von der manuellen Abwicklung zu einer sich verstärkenden Kampagnenintelligenz."

**`cultureEdits.*`** (Slide 9)
- `title` → "Culture Edits"
- `subtitle`, `whatTitle` ("Was es ist"), 3 `what.*` bullets, `whyTitle` ("Warum es funktioniert"), 3 `why.*` bullets, `bestForLabel` ("Am besten geeignet für:"), `bestFor` translated copy

**`websites.*`** (Slide 15)
- `title` → "Websites & digitale Infrastruktur"
- `subtitle` → translated copy
- 3 cards (`card.0/1/2.title + desc`) translated: "Künstler-Websites" / "Conversion-Infrastruktur" / "Design + Geschwindigkeit"
- `moreLabel` → "Live-Designs:"
- `automationLabel` → "Automatische Synchronisierung:"
- `automation` → "neue Veröffentlichungen und Tourdaten aktualisieren sich selbst. Keine manuellen Bearbeitungen."
- `whyLabel` → "Warum es wichtig ist:"
- `why` → translated copy

**`idid.*`** (Slide 16)
- `kicker` → "Pilot-Service"
- `pilotChip` → "PILOT"
- `title` → "ID.ID"
- `tagline` → "Ein Pilot-Service für die Entdeckung von Musik durch DJs."
- `subtitle` → translated copy
- 3 `what.*` bullets, 3 `why.*` bullets, `bottomNote` translated as per brief

## Out of scope

- No component edits — all 5 namespaces already render via existing `t()` calls.
- No changes to other locale files (en, es, fr, ja, ko, nl, pt, zh).
- No KPI label changes, no pricing table row changes, no case study metric changes.
- No new visuals, layout, or component logic.

## Verification

After the edit, switching the deck's language picker to German renders every slide (1 → 18) with full German copy, with no raw key strings appearing on slides 2, 3, 9, 15, or 16.

