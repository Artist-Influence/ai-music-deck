import GlassPanel from '../GlassPanel';
import spicyMargaritaImg from '@/assets/jason-derulo-spicy-margarita-views.png';
import dackJanielsImg from '@/assets/dack-janiels-streams.png';

const cases = [
  {
    tag: 'YOUTUBE ADS',
    artist: 'Jason Derulo & Michael Bublé',
    track: 'Spicy Margarita',
    overview: 'Rapid global view acceleration maximizing watch time and engagement.',
    screenshot: spicyMargaritaImg,
    metrics: [
      { val: '11M', label: 'Views' },
      { val: '6.5M', label: 'Unique Viewers' },
      { val: '1.1M+ hrs', label: 'Watch Time' },
      { val: '76.4%', label: 'Avg % Viewed' },
    ],
  },
  {
    tag: 'SPOTIFY PLAYLISTING',
    artist: 'Dack Janiels',
    track: 'Shock Therapy',
    overview: 'Organic playlist campaign focused on dubstep tastemakers and algorithmic lift.',
    screenshot: dackJanielsImg,
    metrics: [
      { val: '185,700', label: 'Streams' },
      { val: '9,950', label: 'Playlist Adds' },
      { val: '3.6%', label: 'Save Rate' },
      { val: '42K', label: 'Algo Streams' },
    ],
  },
  {
    tag: 'INSTAGRAM SEEDING',
    artist: 'Francis Mercier',
    track: 'Sauti',
    overview: 'Global audio seeding across Afro House audiences and LATAM markets.',
    screenshot: null,
    metrics: [
      { val: '16.4M', label: 'Views' },
      { val: '$0.03', label: 'CPM' },
      { val: '89.2K', label: 'Saves' },
      { val: '7.16%', label: 'Engagement' },
    ],
  },
];

const CaseStudyPlatformSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px] animate-float" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-4">Platform-native results.</h1>
      <p className="text-xl text-muted-foreground mb-12">YouTube · Spotify · Instagram</p>

      <div className="grid grid-cols-3 gap-6 max-w-[1200px]">
        {cases.map((c) => (
          <GlassPanel key={c.artist} variant="bright" className="p-6 flex flex-col">
            <p className="text-sm text-primary font-mono mb-3 tracking-widest">{c.tag}</p>
            <p className="text-xl font-bold text-foreground leading-tight">{c.artist}</p>
            <p className="text-sm text-muted-foreground/60 mb-3">{c.track}</p>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{c.overview}</p>

            {/* Screenshot placeholder */}
            {c.screenshot ? (
              <div className="aspect-video rounded-lg border border-white/[0.08] overflow-hidden mb-4">
                <img src={c.screenshot} alt={`${c.artist} — ${c.track}`} className="w-full h-full object-cover object-top" />
              </div>
            ) : (
              <div className="aspect-video rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4">
                <span className="text-[9px] text-muted-foreground/40">Screenshot</span>
              </div>
            )}

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

export default CaseStudyPlatformSlide;
