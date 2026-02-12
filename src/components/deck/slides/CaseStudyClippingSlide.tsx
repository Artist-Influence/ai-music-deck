import GlassPanel from '../GlassPanel';

const cases = [
  {
    artist: 'Aries',
    track: 'In The Flesh',
    overview: 'Meme-forward creative tied to culturally relevant humor for high-volume engagement.',
    metrics: [
      { val: '$0.50', label: 'CPM' },
      { val: '1.1M+', label: 'Views' },
      { val: '13.65%', label: 'Engagement' },
      { val: '133K+', label: 'Likes' },
    ],
  },
  {
    artist: 'Gorgon City',
    track: 'Mitsubishi',
    overview: 'Car culture and rave footage distributed through genre-native clipper accounts.',
    metrics: [
      { val: '$0.60', label: 'CPM' },
      { val: '3.08M+', label: 'Views' },
      { val: '102K+', label: 'Likes' },
      { val: '3.64%', label: 'Engagement' },
    ],
  },
  {
    artist: 'Nash Rly',
    track: 'U & Me',
    overview: 'High-volume EDM memes and rave footage driving repeat exposure across communities.',
    metrics: [
      { val: '$0.49', label: 'CPM' },
      { val: '1.55M+', label: 'Views' },
      { val: '48K+', label: 'Likes' },
      { val: '3.78%', label: 'Engagement' },
    ],
  },
];

const CaseStudyClippingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[10%] left-[25%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px] animate-float" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-4">Clip. Distribute. Repeat.</h1>
      <p className="text-xl text-muted-foreground mb-12">Clipping Campaign Results</p>

      <div className="grid grid-cols-3 gap-6 max-w-[1200px]">
        {cases.map((c) => (
          <GlassPanel key={c.artist} variant="bright" className="p-6 flex flex-col">
            <p className="text-sm text-primary font-mono mb-3 tracking-widest">CLIPPING</p>
            <p className="text-xl font-bold text-foreground leading-tight">{c.artist}</p>
            <p className="text-sm text-muted-foreground/60 mb-3">{c.track}</p>
            <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{c.overview}</p>

            <div className="grid grid-cols-2 gap-2 mt-auto">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-2.5 text-center">
                  <p className="text-base font-bold text-foreground">{m.val}</p>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default CaseStudyClippingSlide;
