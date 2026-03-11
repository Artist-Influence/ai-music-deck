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
      { val: '11M', label: 'Views', primary: true },
      { val: '6.5M', label: 'Unique Viewers', primary: true },
      { val: '1.1M+ hrs', label: 'Watch Time', primary: false },
      { val: '76.4%', label: 'Avg % Viewed', primary: false },
      { val: '207K', label: 'Likes', primary: false },
      { val: '7.9K', label: 'Comments', primary: false },
    ],
  },
  {
    artist: 'Mark Tuan',
    track: 'Sunsets & Cigarettes',
    thumb: markTuanThumb,
    metrics: [
      { val: '10M', label: 'Views', primary: true },
      { val: '5.5M', label: 'Unique Viewers', primary: true },
      { val: '1.4M hrs', label: 'Watch Time', primary: false },
      { val: '81.2%', label: 'Avg % Viewed', primary: false },
      { val: '135K', label: 'Likes', primary: false },
      { val: '6.3K', label: 'Comments', primary: false },
    ],
  },
];

const YouTubeAdsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-6 flex items-start justify-center pt-[60px]">
    <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[140px]" />
    <div className="absolute bottom-[5%] left-[10%] w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-[180px]" />

    <div className="relative z-10 flex gap-12 w-full max-w-[1720px] mx-auto items-start">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0 max-w-[620px] flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Youtube size={28} className="text-primary" />
            <p className="text-base text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-4 leading-tight">YouTube Advertising</h1>
          <p className="text-2xl text-muted-foreground mb-6 max-w-[520px]">
            International targeting + optimization to maximize reach while protecting engagement ratios.
          </p>
        </div>

        <GlassPanel variant="bright" className="p-6">
          <p className="text-2xl font-semibold text-foreground mb-2">What it is:</p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Paid YouTube campaigns built for subscribers and long-form engagement.
            We optimize daily with transparent weekly reporting and clean data exports.
          </p>
        </GlassPanel>

        <GlassPanel variant="bright" className="p-6">
          <p className="text-2xl font-semibold text-foreground mb-2">How it works:</p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We target international audiences aligned with your genre, optimizing for
            watch time and subscriber conversion. Engagement ratios are monitored and
            protected throughout the campaign.
          </p>
        </GlassPanel>

        <p className="text-xl text-primary font-medium mt-2">Timeframe: 1–3 weeks</p>
      </div>

      {/* Right — Two Stacked Case Studies */}
      <div className="w-[580px] shrink-0 flex flex-col gap-4">
        {cases.map((c) => (
          <div
            key={c.artist}
            className="rounded-2xl border border-white/[0.1] backdrop-blur-xl p-5 bg-white/[0.03] shadow-[0_4px_24px_rgba(0,0,0,0.3)] flex flex-col flex-1 justify-center"
          >
            <div className="w-[500px] mx-auto">
              <p className="text-[11px] text-primary font-mono mb-1 tracking-widest">CASE STUDY</p>
              <p className="text-xl font-bold text-foreground leading-tight mb-0.5">{c.artist}</p>
              <p className="text-lg text-muted-foreground mb-2">{c.track}</p>

              <div className="h-[180px] w-full rounded-xl border border-white/[0.08] overflow-hidden mb-3 bg-black/30">
                <img
                  src={c.thumb}
                  alt={`${c.artist} — ${c.track}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    className={`rounded-xl py-2.5 px-3 text-center ${
                      m.primary
                        ? 'bg-white/[0.06] border-t border-primary/20'
                        : 'bg-white/[0.03]'
                    }`}
                  >
                    <p className={m.primary ? 'text-xl font-bold text-foreground' : 'text-lg font-semibold text-foreground/80'}>
                      {m.val}
                    </p>
                    <p className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default YouTubeAdsSlide;
