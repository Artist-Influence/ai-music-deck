import { lazy, type LazyExoticComponent, type ComponentType } from 'react';

// Code-split each slide so the initial bundle stays small.
// Each slide + its image imports becomes its own chunk, loaded on demand.
const CoverSlide = lazy(() => import('./CoverSlide'));
const OperatingSystemSlide = lazy(() => import('./OperatingSystemSlide'));
const UnifiedOpsSlide = lazy(() => import('./UnifiedOpsSlide'));
const TheShiftSlide = lazy(() => import('./TheShiftSlide'));
const ClientPortalSlide = lazy(() => import('./ClientPortalSlide'));
const ClippingSlide = lazy(() => import('./ClippingSlide'));
const SpotifyPlaylistingSlide = lazy(() => import('./SpotifyPlaylistingSlide'));
const AdditionalServicesSlide = lazy(() => import('./AdditionalServicesSlide'));
const CustomInfluencerSlide = lazy(() => import('./CustomInfluencerSlide'));
const SoundCloudRepostsSlide = lazy(() => import('./SoundCloudRepostsSlide'));
const CreatorFloodSlide = lazy(() => import('./CreatorFloodSlide'));
const Top50TrendingSlide = lazy(() => import('./Top50TrendingSlide'));
const YouTubeAdsSlide = lazy(() => import('./YouTubeAdsSlide'));
const InstagramSeedingSlide = lazy(() => import('./InstagramSeedingSlide'));
const WebsitesSlide = lazy(() => import('./WebsitesSlide'));
const IdIdSlide = lazy(() => import('./IdIdSlide'));
const PricingSlide = lazy(() => import('./PricingSlide'));
const NextStepsSlide = lazy(() => import('./NextStepsSlide'));

export const slides: LazyExoticComponent<ComponentType>[] = [
  // Narrative
  CoverSlide,
  OperatingSystemSlide,
  UnifiedOpsSlide,
  TheShiftSlide, // merged: "discovery has changed" + the three pillars (hub diagram)
  ClientPortalSlide,

  // Services — lead with the five headline offerings
  ClippingSlide,
  SpotifyPlaylistingSlide,
  AdditionalServicesSlide, // Meta & TikTok Ads
  CustomInfluencerSlide,
  SoundCloudRepostsSlide,

  // Services — the rest
  CreatorFloodSlide,
  YouTubeAdsSlide,
  InstagramSeedingSlide,
  Top50TrendingSlide,
  WebsitesSlide,
  IdIdSlide,

  // Close
  PricingSlide,
  NextStepsSlide,
];
