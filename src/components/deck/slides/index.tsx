import { FC } from 'react';
import CoverSlide from './CoverSlide';
import TheShiftSlide from './TheShiftSlide';
import TheProblemSlide from './TheProblemSlide';
import WhatCloutedDoesSlide from './WhatCloutedDoesSlide';
import HowWeWorkSlide from './HowWeWorkSlide';
import ClippingSlide from './ClippingSlide';
import FanpagesSlide from './FanpagesSlide';
import UGCHacksSlide from './UGCHacksSlide';
import AdditionalServicesSlide from './AdditionalServicesSlide';
import OutcomesSlide from './OutcomesSlide';
import ReportingSlide from './ReportingSlide';
import ExpectationsSlide from './ExpectationsSlide';
import CaseStudySlide from './CaseStudySlide';
import PricingSlide from './PricingSlide';
import NextStepsSlide from './NextStepsSlide';

const CS1 = () => <CaseStudySlide category="Fanpages" description="Community-driven growth through curated fan page networks." />;
const CS2 = () => <CaseStudySlide category="Clipping" description="High-volume short-form content driving algorithmic discovery." />;
const CS3 = () => <CaseStudySlide category="Creator Flood + Top 50 Trending" description="Mass creator activation pushing sounds onto trending charts." />;
const CS4 = () => <CaseStudySlide category="SoundCloud / Spotify / YouTube / IG Seeding (EDM)" description="Cross-platform distribution for electronic music artists." />;

export const slides: FC[] = [
  CoverSlide,
  TheShiftSlide,
  TheProblemSlide,
  WhatCloutedDoesSlide,
  HowWeWorkSlide,
  ClippingSlide,
  FanpagesSlide,
  UGCHacksSlide,
  AdditionalServicesSlide,
  OutcomesSlide,
  ReportingSlide,
  ExpectationsSlide,
  CS1,
  CS2,
  CS3,
  CS4,
  PricingSlide,
  NextStepsSlide,
];
