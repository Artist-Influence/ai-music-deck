

# Refresh Korean locale to match the user's provided deck copy

## Scope

Update `src/i18n/ko.ts` so every string the deck renders in Korean matches the user's provided copy block (slides 1 → 18). All other locale files and components stay untouched.

## Why this is needed

The Korean file currently lacks the same 5 namespaces used on slides 2, 3, 9, 15, and 16:

- `opSystem.*` (Slide 2 — 운영 체제)
- `unifiedOps.*` (Slide 3 — 통합 운영)
- `cultureEdits.*` (Slide 9 — Culture Edits)
- `websites.*` (Slide 15 — 웹사이트 및 디지털 인프라)
- `idid.*` (Slide 16 — ID.ID)

Without these keys, Korean falls back to raw key strings on those 5 slides. Several existing values also need a refresh (e.g. `clipping.subtitle` says "20,000명 이상의 클리퍼" → should read "2,000명 이상의 크리에이터", and `nextSteps.tagline` is still in English).

## Changes — single file: `src/i18n/ko.ts`

### A. Update existing values to the new Korean copy

| Key | New Korean value |
|---|---|
| `cover.tagline` | 현대 음악과 아티스트를 위한 성장 시스템 |
| `cover.subtitle` | 숏폼, 스트리밍, 문화 전반에 걸쳐 성장 동력을 창출합니다. |
| `shift.title` | 음악 발견 방식이 바뀌었습니다. |
| `shift.subtitle` | 사람들은 더 이상 예전 방식대로 노래를 발견하지 않습니다. 이제 노래는 반복적인 노출, 커뮤니티의 검증, 알고리즘의 추진력, 그리고 이미 효과가 있는 요소 위에 더해지는 유료 홍보를 통해 확산됩니다. |
| `shift.section` | 오늘날 성공하는 요소 |
| `shift.win.0` | 실제 단편 콘텐츠의 양 |
| `shift.win.1` | 다양한 청중을 아우르는 일관된 노출 |
| `shift.win.2` | 커뮤니티의 검증 (페이지, 큐레이터, 크리에이터) |
| `shift.win.3` | 올바른 신호를 증폭시키는 스마트한 확대 |
| `whatWeDo.title` | 도박이 아닌 체계적인 협업형 배포. |
| `whatWeDo.section` | 알고리즘을 여러분을 위해 작동하게 하는 세 가지 기둥 |
| `whatWeDo.pillar.2.label` | 확대 |
| `clipping.subtitle` | TikTok, Instagram, YouTube에서 콘텐츠를 제작하는 2,000명 이상의 크리에이터가 운영하는 배포 네트워크. |
| `creatorFlood.subtitle` | 실제 TikTok UGC 동영상 10,000개 이상에 트랙을 대량 게시합니다. |
| `trending.title` | 인기 및 트렌드 탭 상위 50위 |
| `trending.titleLine2` | (set to empty or "" — title now single-line) |
| `trending.subtitle` | 저희는 YouTube Shorts, Instagram Reels, Facebook Reels, TikTok 전반에 걸쳐 음원을 가시적인 차트 및 트렌딩 환경으로 밀어 올리는 데 도움을 드립니다. |
| `youtube.subtitle` | 참여율을 유지하면서 도달 범위를 극대화하기 위한 글로벌 타겟팅 및 최적화. |
| `spotify.subtitle` | 발견 및 알고리즘 노출을 위해 설계된, 제3자 제공의 장르별 유기적 플레이리스트 배치. |
| `soundcloud.subtitle` | 투명한 추적 및 진정한 참여 의도를 바탕으로 장르별 커뮤니티에 검증된 리포스트 배포. |
| `instagram.subtitle` | 테마 페이지 및 밈 계정에 장르에 맞춰 콘텐츠를 배치하고, 실시간 대시보드를 통해 추적합니다. |
| `metaTiktok.subtitle` | 검증된 네이티브 게시물을 스트리밍, 판매, 투어 등 다양한 성과로 전환하는 광고로 만듭니다. |
| `pricing.subtitle` | 모든 패키지는 귀하의 발매 일정, 청중, 목표를 중심으로 구성됩니다. 개별 서비스를 선택하거나, 저희가 맞춤형 번들을 설계해 드리겠습니다. |
| `pricing.footer` | 출시 일정, 타겟층, 목표에 맞춰 최종 패키지를 구성해 드립니다. |
| `nextSteps.subtitle` | 4단계. 번거로움 없이. 시작해 봅시다. |
| `nextSteps.contactRedLine` | 추천 유료 플랜은 24시간 이내에 처리해 드립니다. |
| `nextSteps.tagline` | 소프트웨어 기반 · 문화에 뿌리내린 · 실행 준비 완료 |

(All other existing Korean strings — pros/diff bullets, KPI labels, case study copy, pricing table rows — already align with the brief and stay as-is. Numeric metrics in case studies are preserved.)

### B. Add the 5 missing namespaces (Korean translations of the user-provided copy)

**`opSystem.*`** (Slide 2)
- `tagline` → "소프트웨어 기반 · 문화 친화적 · 실행 준비 완료"
- `title` → "우리는 현대 음악 성장을 위한 운영 체제를 구축하고 있습니다."
- `subtitle` → translated subtitle from the brief
- `pillar.0.label / desc` → "소프트웨어 인프라" / "리포팅, 캠페인 추적, 워크플로우, 실시간 기여도 분석, 대시보드."
- `pillar.1.label / desc` → "유통 엔진" / "플레이리스트 등록, 클리핑, 리포스트, 시딩, 유료 미디어, 문화적 침투."
- `pillar.2.label / desc` → "실행 레이어" / "전략, 런칭 관리, 최적화, 크리에이티브 투입, 인적 감독."
- `loop.inputs / engine / reporting / learnings` → "입력" / "엔진" / "리포팅" / "학습"
- `takeaway` → translated takeaway from the brief

**`unifiedOps.*`** (Slide 3)
- `kicker` → "제품"
- `title` → "통합 운영(Unified Ops)이 핵심입니다."
- `subtitle` → translated subtitle from the brief
- 4 modules (label + desc) translated as "접수 및 런칭", "실시간 추적", "보고 계층", "학습 레이어"
- `calloutTitle` → "자동 학습 시스템"
- `calloutBody` → translated as in the brief
- `footer` → "이것이 바로 우리가 수동적인 이행에서 복합적인 캠페인 인텔리전스로 나아가는 방식입니다."

**`cultureEdits.*`** (Slide 9)
- `title` → "Culture Edits"
- `subtitle`, `whatTitle` ("서비스 소개"), 3 `what.*` bullets, `whyTitle` ("효과적인 이유"), 3 `why.*` bullets, `bestForLabel` ("최적 대상:"), `bestFor` translated copy

**`websites.*`** (Slide 15)
- `title` → "웹사이트 및 디지털 인프라"
- `subtitle` → translated copy
- 3 cards (`card.0/1/2.title + desc`) translated: "아티스트 웹사이트" / "전환 인프라" / "디자인 + 속도"
- `moreLabel` → "실제 구축 사례:"
- `automationLabel` → "자동 동기화:"
- `automation` → "신곡 및 투어 일정이 자동으로 업데이트됩니다. 수동 편집이 필요 없습니다."
- `whyLabel` → "중요성:"
- `why` → translated copy

**`idid.*`** (Slide 16)
- `kicker` → "파일럿 서비스"
- `pilotChip` → "PILOT"
- `title` → "ID.ID"
- `tagline` → "DJ 주도형 음악 발견을 위한 파일럿 서비스."
- `subtitle` → translated copy
- 3 `what.*` bullets, 3 `why.*` bullets, `bottomNote` translated as per brief

## Out of scope

- No component edits — all 5 namespaces already render via existing `t()` calls.
- No changes to other locale files (en, es, de, fr, ja, nl, pt, zh).
- No KPI label changes, no pricing table row changes, no case study metric changes.
- No new visuals, layout, or component logic.

## Verification

After the edit, switching the deck's language picker to Korean renders every slide (1 → 18) with full Korean copy, with no raw key strings appearing on slides 2, 3, 9, 15, or 16.

