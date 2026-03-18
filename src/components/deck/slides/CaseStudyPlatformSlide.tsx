import GlassPanel from '../GlassPanel';
import spicyMargaritaImg from '@/assets/jason-derulo-spicy-margarita-views.png';
import dackJanielsImg from '@/assets/dack-janiels-streams.png';
import francisMercierImg from '@/assets/francis-mercier-sauti.png';

const cases = [
  {
    tag: 'YOUTUBE ADS',
    artist: 'Jason Derulo & Michael Bublé',
    track: 'Spicy Margarita',
    overview: 'Rapid global view acceleration maximizing watch time and engagement.',
    screenshot: spicyMargaritaImg,
    imgClass: 'object-contain',
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
    imgClass: 'object-cover object-left',
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
    screenshot: francisMercierImg,
    imgClass: 'object-cover object-top',
    metrics: [
      { val: '16.4M', label: 'Views' },
      { val: '$0.03', label: 'CPM' },
      { val: '89.2K', label: 'Saves' },
      { val: '7.16%', label: 'Engagement' },
    ],
  },
];

const CaseStudyPlatformSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-5 md:p-24 flex flex-col items-center justify-center">
    <div className="relative z-10 w-full max-w-[1400px] text-center">
      <h1 className="text-2xl md:text-6xl font-bold text-foreground mb-2 md:mb-4">Platform-native results.</h1>
      <p className="text-sm md:text-xl text-muted-foreground mb-6 md:mb-12">YouTube · Spotify · Instagram</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-[1200px] mx-auto">
        {cases.map((c) => (
          <GlassPanel key={c.artist} variant="bright" className="p-4 md:p-5 flex flex-col h-full">
            <p className="text-[10px] md:text-base text-primary font-mono mb-1 md:mb-2 tracking-widest">{c.tag}</p>
            <p className="text-sm md:text-lg font-bold text-foreground leading-tight">{c.artist}</p>
            <p className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">{c.track}</p>
            <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 leading-relaxed">{c.overview}</p>

            {c.screenshot && (
              <div className="flex-1 min-h-0 rounded-lg border border-white/[0.08] overflow-hidden mb-2 md:mb-3 bg-black/30 max-h-[120px] md:max-h-none">
                <img src={c.screenshot} alt={`${c.artist} — ${c.track}`} className={`w-full h-full ${c.imgClass}`} />
              </div>
            )}

            <div className="grid grid-cols-2 gap-1.5 md:gap-2">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-1.5 md:p-2 text-center">
                  <p className="text-xs md:text-base font-bold text-foreground">{m.val}</p>
                  <p className="text-[8px] md:text-[9px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
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
