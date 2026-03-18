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

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2">
    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
    <p className="text-xs md:text-2xl text-muted-foreground">{children}</p>
  </div>
);

const YouTubeAdsSlide = () => (
  <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-12 flex flex-col justify-start md:justify-center">
    <div className="relative z-10 w-full max-w-[1600px] flex flex-col md:flex-row gap-4 md:gap-10">
      {/* Left — Service Info */}
      <div className="flex-1 flex flex-col gap-3 md:gap-4">
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <Youtube size={20} className="text-primary md:w-7 md:h-7" />
            <p className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-2xl md:text-6xl font-bold text-foreground mb-2 md:mb-4 leading-tight">YouTube Advertising</h1>
          <p className="text-sm md:text-2xl text-muted-foreground mb-4 md:mb-6 max-w-[700px]">
            International targeting + optimization to maximize reach while protecting engagement ratios.
          </p>
        </div>

        <GlassPanel variant="bright" className="p-4 md:p-8 flex-1 flex flex-col justify-center">
          <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">What it is</p>
          <div className="space-y-1.5 md:space-y-2.5">
            <BulletPoint>Paid YouTube campaigns built for subscribers and long-form engagement</BulletPoint>
            <BulletPoint>We optimize daily with transparent weekly reporting and clean data exports</BulletPoint>
          </div>
        </GlassPanel>

        <GlassPanel variant="subtle" className="p-4 md:p-8 flex-1 flex flex-col justify-center">
          <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">How it works</p>
          <div className="space-y-1.5 md:space-y-2.5">
            <BulletPoint>We target international audiences aligned with your genre</BulletPoint>
            <BulletPoint>Optimizing for watch time and subscriber conversion</BulletPoint>
            <BulletPoint>Engagement ratios are monitored and protected throughout the campaign</BulletPoint>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <p className="text-xs md:text-2xl text-primary font-medium">Timeframe: 1 to 3 weeks</p>
          </div>
        </GlassPanel>
      </div>

      {/* Right — Two Stacked Case Studies */}
      <div className="flex-1 flex flex-col justify-center gap-3 md:gap-4">
        {cases.map((c) => (
          <GlassPanel key={c.artist} variant="bright" className="p-4 md:p-5 flex-1 flex flex-col">
            <div className="flex flex-row gap-3 md:gap-5 mb-2 md:mb-3">
              <div className="w-[100px] h-[70px] md:w-[240px] md:h-[150px] shrink-0 rounded-xl overflow-hidden border border-white/[0.08]">
                <img src={c.thumb} alt={`${c.artist}, ${c.track}`} className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-[10px] md:text-base text-primary font-mono mb-0.5 tracking-widest uppercase">Case Study</p>
                <p className="text-sm md:text-3xl font-bold text-foreground leading-tight">{c.artist}</p>
                <p className="text-xs md:text-xl text-muted-foreground">{c.track}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5 md:gap-2 flex-1 auto-rows-fr">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-1.5 md:p-2.5 text-center flex flex-col items-center justify-center">
                  <p className="text-xs md:text-lg font-bold text-foreground">{m.val}</p>
                  <p className="text-[8px] md:text-sm text-muted-foreground uppercase tracking-wider">{m.label}</p>
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
