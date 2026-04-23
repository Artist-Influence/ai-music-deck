

# Condense deck from 22 → 18 slides + targeted copy refresh

## Slide deletions (4)

Remove these slides entirely from `src/components/deck/slides/index.tsx` and delete the matching files:

1. `WhyThisMattersSlide.tsx` — "Better systems create better outcomes."
2. `TheProblemSlide.tsx` — "Problem: Music marketing is mostly manual."
3. `HowWeWorkSlide.tsx` — "Our End-to-End Process"
4. `InfrastructureStatementSlide.tsx` — "Not just campaigns. Infrastructure."

Their i18n key blocks (`whyMatters.*`, `problem.*`, `howWeWork.*`, `infraStatement.*`) get removed from all 9 locale files.

## Final slide order (18)

```text
01  CoverSlide
02  OperatingSystemSlide
03  UnifiedOpsSlide
04  TheShiftSlide                  (Music discovery has changed)
05  WhatWeDoSlide                  (Coordinated distribution as a system)
06  ClippingSlide
07  CreatorFloodSlide
08  Top50TrendingSlide
09  CultureEditsSlide
10  YouTubeAdsSlide
11  SpotifyPlaylistingSlide
12  SoundCloudRepostsSlide
13  InstagramSeedingSlide
14  AdditionalServicesSlide        (Meta & TikTok Ads)
15  WebsitesSlide
16  IdIdSlide
17  PricingSlide
18  NextStepsSlide
```

## Copy updates (English source — `src/i18n/en.ts`)

Service-slide subtitle tightenings:

| Key | New value |
|---|---|
| `clipping.subtitle` | A distribution network powered by 2,000+ clippers creating across TikTok, Instagram, and YouTube. |
| `creatorFlood.subtitle` | Mass-posting your track across 10,000+ minimum posts from real TikTok UGC videos. |
| `trending.subtitle` | We help push records into visible chart and trending environments across YouTube Shorts, Instagram Reels, Facebook Reels, and TikTok. |
| `youtube.subtitle` | International targeting and optimization to maximize reach while protecting engagement ratios. |
| `spotify.subtitle` | Third-party, genre-aligned organic playlist placements designed for discovery and algorithmic pickup. |
| `soundcloud.subtitle` | Verified repost distribution across genre communities with transparent tracking and real engagement intent. |
| `instagram.subtitle` | Genre-aligned page placements across theme pages and meme accounts with tracking via live dashboard. |
| `metaTiktok.subtitle` | We turn proven native posts into ads that convert streams, sales, touring, and more. |
| `pricing.subtitle` | Every package is built around your release schedule, audience, and goals. Pick individual services, or let us design a custom bundle. |
| `pricing.footer` | We build the final package around your release schedule, audience, and goals. |

UnifiedOps slide — strengthen footer (carries the deleted "Better systems" weight):
- Keep current 4 modules + self-learning callout.
- Replace plain italic footer with a bordered red-accent strip (same style as the OpSystem takeaway panel) so it lands harder.
- `unifiedOps.footer` stays: `This is how we move from manual fulfillment to compounding campaign intelligence.`

NextStepsSlide additions (carries "Infrastructure" thesis):
- Add a small red footer line **inside** the contact box (after the existing quote): `nextSteps.contactRedLine` = `We can turn around recommended paid plans within 24 hours.`
- Replace `nextSteps.tagline` value with: `Software-backed · Culture-native · Execution-ready` (rendered just above the logo as it already is).
- Update `nextSteps.quote` to remove duplication if needed — keep the existing italic quote line above the new red line, or fold it into the red line. Cleaner: **drop** the existing quote, keep only the new red line.

All other slides: no copy changes (cover, opSystem, shift, whatWeDo, cultureEdits, websites, idid stay as-is — copy already matches the brief).

## Component changes

**`src/components/deck/slides/index.tsx`**
- Remove imports for `WhyThisMattersSlide`, `TheProblemSlide`, `HowWeWorkSlide`, `InfrastructureStatementSlide`.
- Remove them from the `slides` array. Resulting array is 18 entries in the order shown above.

**`src/components/deck/slides/UnifiedOpsSlide.tsx`**
- Replace the bottom italic `<p>` with a bordered red-accent panel:
  ```tsx
  <div className="rounded-xl border border-primary/35 bg-primary/[0.06] p-3 md:p-5 text-center">
    <p className="text-xs md:text-lg text-foreground font-medium leading-relaxed">
      {t('unifiedOps.footer')}
    </p>
  </div>
  ```

**`src/components/deck/slides/NextStepsSlide.tsx`**
- Inside the contact `GlassPanel`, replace the existing `quote` line with a new red line at the bottom of the box:
  ```tsx
  <p className="text-xs md:text-[20px] text-primary font-medium mt-2 md:mt-3">
    {t('nextSteps.contactRedLine')}
  </p>
  ```
- Tagline below logo continues to render `t('nextSteps.tagline')` (now the "Software-backed · Culture-native · Execution-ready" line).

**Files deleted**
- `src/components/deck/slides/WhyThisMattersSlide.tsx`
- `src/components/deck/slides/TheProblemSlide.tsx`
- `src/components/deck/slides/HowWeWorkSlide.tsx`
- `src/components/deck/slides/InfrastructureStatementSlide.tsx`

## i18n changes (all 9 locales: en, de, es, fr, ja, ko, nl, pt, zh)

For each locale file in `src/i18n/`:
1. **Delete** key blocks: `whyMatters.*`, `problem.*`, `howWeWork.*`, `infraStatement.*`.
2. **Update** the 10 subtitle/footer values listed above (English source values; mirror translations in other locales — keep proper nouns and numbers, translate the connective copy).
3. **Add** `nextSteps.contactRedLine`.
4. **Update** `nextSteps.tagline` value to `Software-backed · Culture-native · Execution-ready` (same string across all locales — it's a tagline / proper styling).
5. **Remove** `nextSteps.quote` (no longer used).

## Memory update

Update `mem://features/deck-structure` to reflect the 18-slide order above (removing the 4 deleted slides and re-numbering).

## Out of scope

- Changing visual system, palette, typography, or component library.
- Editing case-study slides (Subtronics, Skrillex, Platform, Clipping, CreatorFlood) or service-slide internals beyond their subtitle line.
- Replacing the systems-loop visual or any existing mockups.
- Adding new images or assets.

