

# Refresh Spanish locale to match the user's provided deck copy

## Scope

Replace and extend `src/i18n/es.ts` so every string the deck renders in Spanish matches the user's provided copy block (slides 1 → 18). All other locale files and components stay untouched.

## Why this is needed

The Spanish file currently lacks 5 entire namespaces that were added when the deck was condensed to 18 slides:

- `opSystem.*` (Slide 2 — Operating System)
- `unifiedOps.*` (Slide 3 — Unified Ops)
- `cultureEdits.*` (Slide 9 — Culture Edits)
- `websites.*` (Slide 15 — Websites)
- `idid.*` (Slide 16 — ID.ID)

Without these keys, the Spanish version of the deck falls back to raw key strings on those 5 slides. Several existing Spanish strings also need a copy refresh to match the approved Spanish wording (e.g. `clipping.subtitle` says "20,000+ creadores" but the new copy says "2,000+", `cover.subtitle` text, `pricing.subtitle`, etc.).

## Changes — single file: `src/i18n/es.ts`

### A. Update existing values to the new Spanish copy

| Key | New Spanish value |
|---|---|
| `cover.subtitle` | Impulsando el crecimiento en los formatos cortos, el streaming y la cultura. |
| `shift.subtitle` | La gente ya no descubre canciones a la antigua usanza. Ahora las canciones se difunden a través de la exposición repetida, la validación de la comunidad, el impulso algorítmico y la amplificación de pago, todo ello sumado a lo que ya funciona. |
| `clipping.subtitle` | Una red de distribución impulsada por más de 2.000 creadores que producen contenido en TikTok, Instagram y YouTube. |
| `creatorFlood.subtitle` | Difusión masiva de tu tema en más de 10.000 publicaciones reales de vídeos generados por los usuarios de TikTok. |
| `trending.subtitle` | Ayudamos a impulsar los temas para que aparezcan en listas de éxitos y entornos de tendencias en YouTube Shorts, Instagram Reels, Facebook Reels y TikTok. |
| `youtube.subtitle` | Segmentación y optimización internacional para maximizar el alcance al tiempo que se protegen los índices de interacción. |
| `spotify.subtitle` | Colocaciones en listas de reproducción orgánicas de terceros, alineadas con el género, diseñadas para el descubrimiento y la captación algorítmica. |
| `soundcloud.subtitle` | Distribución de reposts verificados en comunidades de distintos géneros, con un seguimiento transparente y una intención de interacción real. |
| `instagram.subtitle` | Colocaciones de páginas alineadas con el género en páginas temáticas y cuentas de memes con seguimiento a través de un panel de control en tiempo real. |
| `metaTiktok.subtitle` | Convertimos publicaciones nativas de eficacia probada en anuncios que generan reproducciones, ventas, giras y mucho más. |
| `pricing.subtitle` | Cada paquete se crea en función de tu calendario de lanzamientos, tu público y tus objetivos. Elige servicios individuales o déjanos diseñar un paquete a medida. |
| `pricing.footer` | Creamos el paquete final en función de tu calendario de lanzamientos, tu público y tus objetivos. |
| `nextSteps.contactRedLine` | Podemos entregar los planes de pago recomendados en un plazo de 24 horas. |
| `nextSteps.tagline` | Respaldado por software · Nativo de la cultura · Listo para la ejecución |

(All other existing Spanish strings — pros/cons bullets, KPI labels, case study copy, pricing table rows — stay as-is. They already align with the user's text or contain the proper-noun metrics that don't translate.)

### B. Add the 5 missing namespaces (Spanish translations of the user-provided copy)

**`opSystem.*`** (Slide 2)
- `tagline` → "Respaldado por software · Nativo de la cultura · Listo para la ejecución"
- `title` → "Estamos creando el sistema operativo para el crecimiento de la música moderna."
- `subtitle` → full Spanish subtitle from the brief
- `pillar.0.label / desc` → "Infraestructura de software" / "Informes, seguimiento de campañas, flujos de trabajo, atribución en tiempo real, paneles de control."
- `pillar.1.label / desc` → "Motor de distribución" / "Listas de reproducción, recortes, reposts, difusión, medios de pago, penetración cultural."
- `pillar.2.label / desc` → "Capa de ejecución" / "Estrategia, gestión de lanzamientos, optimización, aportaciones creativas, supervisión humana."
- `loop.inputs / engine / reporting / learnings` → "Entradas" / "Motor" / "Informes" / "Aprendizajes"
- `takeaway` → "La mayor parte del marketing musical sigue fragmentado entre hojas de cálculo, proveedores, capturas de pantalla y actualizaciones retrasadas. Lo estamos consolidando en un único sistema coordinado."

**`unifiedOps.*`** (Slide 3)
- `kicker` → "El producto"
- `title` → "Las operaciones unificadas son el núcleo."
- `subtitle` → "Nuestro software interno conecta la recepción de campañas, la ejecución, los informes, la optimización y las conclusiones entre todos los servicios. Cada campaña se vuelve más inteligente con el tiempo."
- 4 modules (label + desc) translated as in the user brief
- `calloutTitle` → "Sistema de autoaprendizaje"
- `calloutBody` → translated as in the brief
- `footer` → "Así es como pasamos de la ejecución manual a la inteligencia de campaña compuesta."

**`cultureEdits.*`** (Slide 9)
- `title` → "Ediciones culturales"
- `subtitle`, `whatTitle` ("Qué es"), 3 `what.*` bullets, `whyTitle` ("Por qué funciona"), 3 `why.*` bullets, `bestForLabel` ("Ideal para:"), `bestFor` translated copy

**`websites.*`** (Slide 15)
- `title` → "Sitios web e infraestructura digital"
- `subtitle` → translated copy
- 3 cards (`card.0/1/2.title + desc`) translated: "Sitios web de artistas" / "Infraestructura de conversión" / "Diseño + Velocidad"
- `moreLabel` → "Creaciones en vivo:"
- `automationLabel` → "Sincronización automática:"
- `automation` → "los nuevos lanzamientos y las fechas de gira se actualizan solos. Sin ediciones manuales."
- `whyLabel` → "Por qué es importante:"
- `why` → translated copy

**`idid.*`** (Slide 16)
- `kicker` → "Servicio piloto"
- `pilotChip` → "PILOTO"
- `title` → "ID.ID"
- `tagline` → "Un servicio piloto para el descubrimiento musical impulsado por los DJ."
- `subtitle` → translated copy
- 3 `what.*` bullets, 3 `why.*` bullets, `bottomNote` translated as per brief

## Out of scope

- No component edits — all 5 namespaces already render via existing `t()` calls.
- No changes to other locale files (en, de, fr, ja, ko, nl, pt, zh).
- No KPI label changes, no pricing table row changes, no case study copy changes (the metrics are preserved).
- No new visuals, layout, or component logic.

## Verification

After the edit, switching the deck's language picker to Spanish should render every slide (1 → 18) with full Spanish copy, with no raw key strings appearing on slides 2, 3, 9, 15, or 16.

