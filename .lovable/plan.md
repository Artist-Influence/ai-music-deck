

# Refresh Portuguese locale to match the user's provided deck copy

## Scope

Update `src/i18n/pt.ts` so every string the deck renders in Portuguese matches the user's provided copy block (slides 1 → 18). All other locale files and components stay untouched.

## Why this is needed

The Portuguese file currently lacks the same 5 namespaces used on slides 2, 3, 9, 15, and 16:

- `opSystem.*` (Slide 2 — Sistema Operacional)
- `unifiedOps.*` (Slide 3 — Operações Unificadas)
- `cultureEdits.*` (Slide 9 — Edições Culturais)
- `websites.*` (Slide 15 — Sites e Infraestrutura Digital)
- `idid.*` (Slide 16 — ID.ID)

Without these keys, Portuguese falls back to raw key strings on those 5 slides. Several existing values also need a small refresh (e.g. `clipping.subtitle` says "20.000 clippers" → should read "mais de 2.000 criadores", and `nextSteps.tagline` is still in English).

## Changes — single file: `src/i18n/pt.ts`

### A. Update existing values to the new Portuguese copy

| Key | New Portuguese value |
|---|---|
| `cover.subtitle` | Impulsionando o crescimento em formatos curtos, streaming e cultura. |
| `shift.subtitle` | As pessoas não descobrem músicas mais da maneira antiga. As músicas agora se espalham por meio de exposição repetida, validação da comunidade, impulso algorítmico e amplificação paga, sobrepostos ao que já está funcionando. |
| `clipping.subtitle` | Uma rede de distribuição impulsionada por mais de 2.000 criadores de conteúdo no TikTok, Instagram e YouTube. |
| `creatorFlood.subtitle` | Divulgação em massa da sua faixa em mais de 10.000 publicações, no mínimo, a partir de vídeos reais de UGC do TikTok. |
| `trending.subtitle` | Ajudamos a impulsionar faixas para ambientes de paradas e tendências visíveis no YouTube Shorts, Instagram Reels, Facebook Reels e TikTok. |
| `youtube.subtitle` | Segmentação e otimização internacional para maximizar o alcance enquanto protege as taxas de engajamento. |
| `spotify.subtitle` | Posicionamentos em playlists orgânicas de terceiros, alinhadas ao gênero, projetadas para descoberta e seleção algorítmica. |
| `soundcloud.subtitle` | Distribuição verificada de repostagens em comunidades de gêneros musicais, com acompanhamento transparente e intenção real de engajamento. |
| `instagram.subtitle` | Posicionamentos de páginas alinhados ao gênero em páginas temáticas e contas de memes com acompanhamento via painel de controle em tempo real. |
| `metaTiktok.subtitle` | Transformamos publicações nativas comprovadas em anúncios que geram streams, vendas, turnês e muito mais. |
| `pricing.subtitle` | Cada pacote é construído em torno de seu cronograma de lançamento, público e objetivos. Escolha serviços individuais ou deixe-nos criar um pacote personalizado. |
| `pricing.footer` | Criamos o pacote final com base no seu cronograma de lançamento, público e objetivos. |
| `nextSteps.subtitle` | Quatro etapas. Sem complicações. Vamos lá. |
| `nextSteps.contactRedLine` | Podemos entregar os planos pagos recomendados em até 24 horas. |
| `nextSteps.tagline` | Baseado em software · Nativo da cultura · Pronto para execução |

(All other existing Portuguese strings — pros/diff bullets, KPI labels, case study copy, pricing table rows — already align with the brief and stay as-is. Numeric metrics in case studies are preserved.)

### B. Add the 5 missing namespaces (Portuguese translations of the user-provided copy)

**`opSystem.*`** (Slide 2)
- `tagline` → "Baseado em software · Nativo da cultura · Pronto para execução"
- `title` → "Estamos construindo o sistema operacional para o crescimento da música moderna."
- `subtitle` → translated subtitle from the brief
- `pillar.0.label / desc` → "Infraestrutura de software" / "Relatórios, acompanhamento de campanhas, fluxos de trabalho, atribuição em tempo real, painéis."
- `pillar.1.label / desc` → "Mecanismo de distribuição" / "Playlists, clipping, repostagens, seeding, mídia paga, penetração cultural."
- `pillar.2.label / desc` → "Camada de execução" / "Estratégia, gerenciamento de lançamento, otimização, contribuição criativa, supervisão humana."
- `loop.inputs / engine / reporting / learnings` → "Entradas" / "Mecanismo" / "Relatórios" / "Aprendizados"
- `takeaway` → translated takeaway from the brief

**`unifiedOps.*`** (Slide 3)
- `kicker` → "O produto"
- `title` → "Operações Unificadas são o núcleo."
- `subtitle` → translated subtitle from the brief
- 4 modules (label + desc) translated as "Recepção e Lançamento", "Acompanhamento em tempo real", "Camada de relatórios", "Camada de aprendizado"
- `calloutTitle` → "Sistema de autoaprendizagem"
- `calloutBody` → translated as in the brief
- `footer` → "É assim que passamos da execução manual para a inteligência de campanha composta."

**`cultureEdits.*`** (Slide 9)
- `title` → "Edições Culturais"
- `subtitle`, `whatTitle` ("O que é"), 3 `what.*` bullets, `whyTitle` ("Por que funciona"), 3 `why.*` bullets, `bestForLabel` ("Ideal para:"), `bestFor` translated copy

**`websites.*`** (Slide 15)
- `title` → "Sites e Infraestrutura Digital"
- `subtitle` → translated copy
- 3 cards (`card.0/1/2.title + desc`) translated: "Sites de Artistas" / "Infraestrutura de conversão" / "Design + Velocidade"
- `moreLabel` → "Construções ao vivo:"
- `automationLabel` → "Sincronização automática:"
- `automation` → "novos lançamentos e datas de turnê são atualizados automaticamente. Sem edições manuais."
- `whyLabel` → "Por que isso importa:"
- `why` → translated copy

**`idid.*`** (Slide 16)
- `kicker` → "Serviço piloto"
- `pilotChip` → "PILOTO"
- `title` → "ID.ID"
- `tagline` → "Um serviço piloto para a descoberta musical impulsionada por DJs."
- `subtitle` → translated copy
- 3 `what.*` bullets, 3 `why.*` bullets, `bottomNote` translated as per brief

## Out of scope

- No component edits — all 5 namespaces already render via existing `t()` calls.
- No changes to other locale files (en, es, de, fr, ja, ko, nl, zh).
- No KPI label changes, no pricing table row changes, no case study metric changes.
- No new visuals, layout, or component logic.

## Verification

After the edit, switching the deck's language picker to Portuguese renders every slide (1 → 18) with full Portuguese copy, with no raw key strings appearing on slides 2, 3, 9, 15, or 16.

