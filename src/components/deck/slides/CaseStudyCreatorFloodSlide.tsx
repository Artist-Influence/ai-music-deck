import GlassPanel from '../GlassPanel';

const cases = [
  {
    tag: 'CREATOR FLOOD',
    artist: 'Rich Brian',
    track: 'Jumpy (feat. Ski Mask The Slump God)',
    overview:
      'Large-scale creator activation to rapidly increase audio usage and establish algorithmic momentum.',
    metrics: [
      { val: '10,000+', label: 'Initial Posts' },
      { val: '23,000+', label: 'Total Creates' },
      { val: 'Sustained', label: 'Organic Reuse' },
    ],
  },
  {
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
  },
];

const CaseStudyCreatorFloodSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px] animate-float" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-4">Scale on impact.</h1>
      <p className="text-xl text-muted-foreground mb-12">Creator Flood &amp; Trending Campaigns</p>

      <div className="grid grid-cols-2 gap-8 max-w-[1200px]">
        {cases.map((c) => (
          <GlassPanel key={c.artist} variant="bright" className="p-8 flex flex-col">
            <p className="text-sm text-primary font-mono mb-3 tracking-widest">{c.tag}</p>
            <p className="text-3xl font-bold text-foreground">{c.artist}</p>
            <p className="text-sm text-muted-foreground/60 mb-4">{c.track}</p>
            <p className="text-sm text-muted-foreground mb-6">{c.overview}</p>

            <div className="grid grid-cols-2 gap-3 mt-auto">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-foreground">{m.val}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default CaseStudyCreatorFloodSlide;
