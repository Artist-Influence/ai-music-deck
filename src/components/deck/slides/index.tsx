import { lazy, type LazyExoticComponent, type ComponentType } from 'react';

// Code-split each slide so the initial bundle stays small.
// Each slide + its image imports becomes its own chunk, loaded on demand.
//
// ── POLITICS DECK ──
// Intro (who we are / what we do) → the services we sell (clipping, paid ads).
// Creator Flood is intentionally NOT used (N/A for politics). Culture Edits is
// also currently out — file kept in repo, just not in the active deck below.
const CoverSlide = lazy(() => import('./CoverSlide'));
const OperatingSystemSlide = lazy(() => import('./OperatingSystemSlide')); // → Who we are
const TheShiftSlide = lazy(() => import('./TheShiftSlide')); // → What's changed
const WhatWeDoSlide = lazy(() => import('./WhatWeDoSlide')); // → What we do (3 pillars)
const ClippingSlide = lazy(() => import('./ClippingSlide')); // → Service: Political Clipping
const AdditionalServicesSlide = lazy(() => import('./AdditionalServicesSlide')); // → Service: Political Paid Ads
const YouTubeAdsSlide = lazy(() => import('./YouTubeAdsSlide')); // → Service: YouTube & Google Ads
const SurrogateActivationSlide = lazy(() => import('./SurrogateActivationSlide')); // → Service: Surrogate & Supporter Activation
const PricingSlide = lazy(() => import('./PricingSlide')); // → A la carte pricing
const NextStepsSlide = lazy(() => import('./NextStepsSlide')); // → How a campaign starts + contact

// ── Not used for politics ──
// const CreatorFloodSlide = lazy(() => import('./CreatorFloodSlide')); // creator flood — N/A for politics

// ── Not yet converted (music originals) — re-enable as they're repositioned ──
// const UnifiedOpsSlide = lazy(() => import('./UnifiedOpsSlide'));
// const ClientPortalSlide = lazy(() => import('./ClientPortalSlide'));
// const Top50TrendingSlide = lazy(() => import('./Top50TrendingSlide'));
// const SpotifyPlaylistingSlide = lazy(() => import('./SpotifyPlaylistingSlide'));
// const SoundCloudRepostsSlide = lazy(() => import('./SoundCloudRepostsSlide'));
// const InstagramSeedingSlide = lazy(() => import('./InstagramSeedingSlide'));
// const WebsitesSlide = lazy(() => import('./WebsitesSlide'));
// const IdIdSlide = lazy(() => import('./IdIdSlide'));

export const slides: LazyExoticComponent<ComponentType>[] = [
  CoverSlide,
  OperatingSystemSlide,
  TheShiftSlide,
  WhatWeDoSlide,
  ClippingSlide,
  AdditionalServicesSlide,
  YouTubeAdsSlide,
  SurrogateActivationSlide,
  PricingSlide,
  NextStepsSlide,
];
