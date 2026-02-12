import GlassPanel from '../GlassPanel';

import mlShorts from '@/assets/major-lazer-canada-shorts.jpeg';
import mlFacebook from '@/assets/major-lazer-facebook-trending.jpeg';
import mlTiktok from '@/assets/major-lazer-tiktok-popular.jpeg';
import mlIg from '@/assets/major-lazer-ig-trending.jpeg';

const majorLazerScreenshots = [
  { src: mlShorts, alt: 'YouTube Shorts — #11 Canada Daily Top Songs' },
  { src: mlFacebook, alt: 'Facebook — For You audio listing' },
  { src: mlTiktok, alt: 'TikTok — Popular tab, 1739 videos' },
  { src: mlIg, alt: 'Instagram — #4 Trending, 15K reels' },
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
  <div className="w-full h-full bg-background relative overflow-hidden p-16 flex flex-col justify-center">
    <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px] animate-float" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-4">Scale on impact.</h1>
      <p className="text-xl text-muted-foreground mb-8">Creator Flood &amp; Trending Campaigns</p>

      <div className="grid grid-cols-2 gap-8 max-w-[1200px]">
        {/* Rich Brian */}
        <GlassPanel variant="bright" className="p-6 flex flex-col">
          <p className="text-sm text-primary font-mono mb-3 tracking-widest">{richBrian.tag}</p>
          <p className="text-3xl font-bold text-foreground">{richBrian.artist}</p>
          <p className="text-sm text-muted-foreground/60 mb-3">{richBrian.track}</p>
          <p className="text-sm text-muted-foreground mb-4">{richBrian.overview}</p>
          <div className="mb-4">
            <div className="aspect-video rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
              <span className="text-[9px] text-muted-foreground/40">Campaign Screenshot</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-auto">
            {richBrian.metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-lg p-3 text-center">
                <p className="text-lg font-bold text-foreground">{m.val}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Major Lazer */}
        <GlassPanel variant="bright" className="p-6 flex flex-col overflow-hidden">
          <p className="text-sm text-primary font-mono mb-3 tracking-widest">{majorLazer.tag}</p>
          <p className="text-3xl font-bold text-foreground">{majorLazer.artist}</p>
          <p className="text-sm text-muted-foreground/60 mb-3">{majorLazer.track}</p>
          <p className="text-sm text-muted-foreground mb-4">{majorLazer.overview}</p>
          <div className="grid grid-cols-[1fr_1.2fr] gap-2 mb-4 h-[280px] overflow-hidden flex-shrink-0">
            {/* Left: vertical image */}
            <div className="rounded-lg border border-white/[0.08] overflow-hidden h-full">
              <img src={mlShorts} alt="YouTube Shorts — #11 Canada Daily Top Songs" className="w-full h-full object-cover" />
            </div>
            {/* Right: 3 horizontal images stacked */}
            <div className="flex flex-col gap-2 h-full">
              {[mlFacebook, mlTiktok, mlIg].map((src, i) => (
                <div key={i} className="flex-1 rounded-lg border border-white/[0.08] overflow-hidden min-h-0">
                  <img src={src} alt={majorLazerScreenshots[i + 1]?.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-auto">
            {majorLazer.metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-lg p-3 text-center">
                <p className="text-lg font-bold text-foreground">{m.val}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default CaseStudyCreatorFloodSlide;
