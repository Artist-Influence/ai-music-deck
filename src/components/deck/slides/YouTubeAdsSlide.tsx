import GlassPanel from '../GlassPanel';
import { Youtube } from 'lucide-react';
import spicyMargaritaThumb from '@/assets/jason-derulo-spicy-margarita-thumb.jpg';
import markTuanThumb from '@/assets/mark-tuan-sunsets-cigarettes-thumb.jpg';

const cases = [
  {
    artist: 'Jason Derulo & Michael Bublé',
    track: 'Spicy Margarita',
    thumb: spicyMargaritaThumb,
    metrics: [
      { val: '11M', label: 'Views' },
      { val: '6.5M', label: 'Unique Viewers' },
      { val: '1.1M+ hrs', label: 'Watch Time' },
      { val: '76.4%', label: 'Avg % Viewed' },
      { val: '207K', label: 'Likes' },
      { val: '7.9K', label: 'Comments' },
    ],
  },
  {
    artist: 'Mark Tuan',
    track: 'Sunsets & Cigarettes',
    thumb: markTuanThumb,
    metrics: [
      { val: '10M', label: 'Views' },
      { val: '5.5M', label: 'Unique Viewers' },
      { val: '1.4M hrs', label: 'Watch Time' },
      { val: '81.2%', label: 'Avg % Viewed' },
      { val: '135K', label: 'Likes' },
      { val: '6.3K', label: 'Comments' },
    ],
  },
];

const YouTubeAdsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-12 flex items-center justify-center">
    <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[140px] animate-float" />
    <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px] animate-float-slow" />

    <div className="relative z-10 w-full max-w-[1600px] flex gap-10">
      {/* Left — Service Info */}
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Youtube size={28} className="text-primary" />
            <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-4 leading-tight">YouTube Advertising</h1>
          <p className="text-2xl text-muted-foreground mb-6 max-w-[700px]">
            International targeting + optimization to maximize reach while protecting engagement ratios.
          </p>
        </div>

        <GlassPanel variant="bright" className="p-8 flex-1 flex flex-col justify-center">
          <p className="text-2xl font-semibold text-foreground mb-3">What it is:</p>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Paid YouTube campaigns built for subscribers and long-form engagement.
            We optimize daily with transparent weekly reporting and clean data exports.
          </p>
        </GlassPanel>

        <GlassPanel variant="subtle" className="p-8 flex-1 flex flex-col justify-center">
          <p className="text-2xl font-semibold text-foreground mb-3">How it works:</p>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            We target international audiences aligned with your genre, optimizing for
            watch time and subscriber conversion. Engagement ratios are monitored and
            protected throughout the campaign.
          </p>
        </GlassPanel>

        <p className="text-2xl text-primary font-medium">Timeframe: 1–3 weeks</p>
      </div>

      {/* Right — Two Stacked Case Studies */}
      {/* Right — Two Stacked Case Studies */}
      <div className="flex-1 flex flex-col justify-center gap-4">
        {cases.map((c) => (
          <GlassPanel key={c.artist} variant="bright" className="p-5 flex-1 flex flex-col">
            <div className="flex flex-row gap-5 mb-3">
              <div className="w-[240px] h-[150px] shrink-0 rounded-xl overflow-hidden border border-white/[0.08]">
                <img
                  src={c.thumb}
                  alt={`${c.artist} — ${c.track}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-base text-primary font-mono mb-1 tracking-widest uppercase">Case Study</p>
                <p className="text-3xl font-bold text-foreground leading-tight">{c.artist}</p>
                <p className="text-xl text-muted-foreground">{c.track}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 flex-1 auto-rows-fr">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-2.5 text-center flex flex-col items-center justify-center">
                  <p className="text-lg font-bold text-foreground">{m.val}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default YouTubeAdsSlide;
