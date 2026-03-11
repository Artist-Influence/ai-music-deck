import GlassPanel from '../GlassPanel';
import richBrianImg from '@/assets/rich-brian-jumpy-tiktok.png';

import mlShorts from '@/assets/major-lazer-canada-shorts.jpeg';
import mlFacebook from '@/assets/major-lazer-facebook-trending.jpeg';
import mlTiktok from '@/assets/major-lazer-tiktok-popular.jpeg';
import mlIg from '@/assets/major-lazer-ig-trending.jpeg';

const majorLazerScreenshots = [
  { src: mlShorts, alt: 'YouTube Shorts, #11 Canada Daily Top Songs' },
  { src: mlFacebook, alt: 'Facebook, For You audio listing' },
  { src: mlTiktok, alt: 'TikTok, Popular tab, 1739 videos' },
  { src: mlIg, alt: 'Instagram, #4 Trending, 15K reels' },
];

const richBrian = {
  tag: 'CREATOR FLOOD',
  artist: 'Rich Brian',
  track: 'Jumpy (feat. Ski Mask The Slump God)',
  overview:
    'Large-scale creator activation to rapidly increase audio usage and establish algorithmic momentum.',
  metrics: [
    { val: '10,000+', label: 'Initial Posts' },
    { val: '23,000+', label: 'Posts Driven' },
    { val: '29,900+', label: 'Total Creates' },
  ],
};

const majorLazer = {
  tag: 'TOP 50 TRENDING',
  artist: 'Major Lazer',
  track: 'MINI SKIRT',
  overview:
    'Pushed official audio into trending environments across Shorts, Reels, and Facebook for rapid visibility.',
  metrics: [
    { val: '5,000+', label: 'YT Creates' },
    { val: '14,900+', label: 'IG Reels Creates' },
    { val: '2,000+', label: 'TikTok Creates' },
    { val: 'US / CA', label: 'Trending Regions' },
  ],
};

const CaseStudyCreatorFloodSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden px-8 pt-6 pb-4 flex flex-col items-center">
    <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px] animate-float" />

    <div className="relative z-10 flex flex-col h-full w-full max-w-[1400px]">
      <h1 className="text-4xl font-bold text-foreground mb-2">Scale on impact.</h1>
      <p className="text-lg text-muted-foreground mb-4">Creator Flood &amp; Trending Campaigns</p>

      <div className="grid grid-cols-2 gap-6 max-w-[1400px] mx-auto flex-1 min-h-0">
        {/* Rich Brian */}
        <GlassPanel variant="bright" className="p-4 flex flex-col h-full">
          <p className="text-base text-primary font-mono mb-2 tracking-widest">{richBrian.tag}</p>
          <p className="text-3xl font-bold text-foreground">{richBrian.artist}</p>
          <p className="text-sm text-muted-foreground mb-3">{richBrian.track}</p>
          <p className="text-base text-muted-foreground mb-3">{richBrian.overview}</p>
          <div className="flex-1 min-h-0 mb-3 rounded-lg border border-white/[0.08] overflow-hidden">
            <img src={richBrianImg} alt="Rich Brian — Jumpy TikTok sound page, 29.3K videos" className="w-full h-full object-cover object-top" />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-auto">
            {richBrian.metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-lg p-2 text-center">
                <p className="text-base font-bold text-foreground">{m.val}</p>
                <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Major Lazer */}
        <GlassPanel variant="bright" className="p-4 flex flex-col h-full">
          <p className="text-base text-primary font-mono mb-2 tracking-widest">{majorLazer.tag}</p>
          <p className="text-3xl font-bold text-foreground">{majorLazer.artist}</p>
          <p className="text-sm text-muted-foreground mb-3">{majorLazer.track}</p>
          <p className="text-base text-muted-foreground mb-3">{majorLazer.overview}</p>
          <div className="grid grid-cols-2 gap-2 mb-3 flex-1 min-h-0">
            {/* Left: vertical image */}
            <div className="rounded-lg border border-white/[0.08] overflow-hidden h-full">
              <img src={mlShorts} alt="YouTube Shorts — #11 Canada Daily Top Songs" className="w-full h-full object-cover" />
            </div>
            {/* Right: 3 horizontal images stacked, matching left height */}
            <div className="flex flex-col justify-between h-full">
              {[mlFacebook, mlTiktok, mlIg].map((src, i) => (
                <div key={i} className="rounded-lg border border-white/[0.08] overflow-hidden">
                  <img src={src} alt={majorLazerScreenshots[i + 1]?.alt} className="w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {majorLazer.metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-lg p-2 text-center">
                <p className="text-base font-bold text-foreground">{m.val}</p>
                <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  </div>
);
export default CaseStudyCreatorFloodSlide;
