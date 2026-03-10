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
  <div className="w-full h-full bg-background relative overflow-hidden p-8 flex items-center justify-center">
    <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[140px]" />

    <div className="relative z-10 flex gap-8 w-full max-w-[1600px] mx-auto items-center">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0 max-w-[600px] flex flex-col gap-2">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Youtube size={28} className="text-primary" />
            <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-2 leading-tight">YouTube Advertising</h1>
          <p className="text-xl text-muted-foreground mb-3 max-w-[700px]">
            International targeting + optimization to maximize reach while protecting engagement ratios.
          </p>
        </div>

        <GlassPanel variant="bright" className="p-4">
          <p className="text-2xl font-semibold text-foreground mb-2">What it is:</p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Paid YouTube campaigns built for subscribers and long-form engagement.
            We optimize daily with transparent weekly reporting and clean data exports.
          </p>
        </GlassPanel>

        <GlassPanel variant="bright" className="p-4">
          <p className="text-2xl font-semibold text-foreground mb-2">How it works:</p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We target international audiences aligned with your genre, optimizing for
            watch time and subscriber conversion. Engagement ratios are monitored and
            protected throughout the campaign.
          </p>
        </GlassPanel>

        <p className="text-xl text-primary font-medium">Timeframe: 1–3 weeks</p>
      </div>

      {/* Right — Two Stacked Case Studies */}
      <div className="w-[520px] shrink-0 flex flex-col gap-2">
        {cases.map((c) => (
          <GlassPanel key={c.artist} variant="bright" className="p-2 flex flex-col flex-1 justify-center">
            <div className="max-w-[400px] mx-auto w-full">
              <p className="text-xs text-primary font-mono mb-0.5 tracking-widest">CASE STUDY</p>
              <p className="text-xl font-bold text-foreground leading-tight">{c.artist}</p>
              <p className="text-lg text-muted-foreground mb-1">{c.track}</p>

              <div className="h-[160px] w-auto aspect-video mx-auto rounded-lg border border-white/[0.08] overflow-hidden mb-1 bg-black/30">
                <img
                  src={c.thumb}
                  alt={`${c.artist} — ${c.track}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-1">
                {c.metrics.map((m) => (
                  <div key={m.label} className="bg-white/[0.04] rounded-lg py-2 px-2 text-center">
                    <p className="text-lg font-bold text-foreground">{m.val}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default YouTubeAdsSlide;
