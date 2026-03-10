import GlassPanel from '../GlassPanel';
import { Youtube } from 'lucide-react';
import spicyMargaritaImg from '@/assets/jason-derulo-spicy-margarita-views.png';

const metrics = [
  { val: '11M', label: 'Views' },
  { val: '6.5M', label: 'Unique Viewers' },
  { val: '1.1M+ hrs', label: 'Watch Time' },
  { val: '76.4%', label: 'Avg % Viewed' },
];

const YouTubeAdsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[140px]" />

    <div className="relative z-10 flex gap-10 items-start w-full max-w-[1600px] mx-auto">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-4">
          <Youtube size={28} className="text-primary" />
          <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
        </div>
        <h1 className="text-5xl font-bold text-foreground mb-3 leading-tight">YouTube Advertising</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-[600px]">
          International targeting + optimization to maximize reach while protecting engagement ratios.
        </p>

        <div className="space-y-5">
          <GlassPanel variant="bright" className="p-5">
            <p className="text-xl font-semibold text-foreground mb-2">What it is:</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Paid YouTube campaigns built for subscribers and long-form engagement.
              We optimize daily with transparent weekly reporting and clean data exports.
            </p>
          </GlassPanel>

          <GlassPanel variant="bright" className="p-5">
            <p className="text-xl font-semibold text-foreground mb-2">How it works:</p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We target international audiences aligned with your genre, optimizing for
              watch time and subscriber conversion. Engagement ratios are monitored and
              protected throughout the campaign.
            </p>
          </GlassPanel>

          <GlassPanel variant="subtle" className="p-4">
            <p className="text-base text-primary font-medium">Timeframe: 1–3 weeks</p>
          </GlassPanel>
        </div>
      </div>

      {/* Right — Case Study */}
      <div className="flex-1 min-w-0">
        <GlassPanel variant="bright" className="p-6 flex flex-col h-full">
          <p className="text-sm text-primary font-mono mb-2 tracking-widest">CASE STUDY</p>
          <p className="text-2xl font-bold text-foreground leading-tight">Jason Derulo & Michael Bublé</p>
          <p className="text-lg text-muted-foreground mb-2">Spicy Margarita</p>
          <p className="text-base text-muted-foreground mb-4 leading-relaxed">
            Rapid global view acceleration maximizing watch time and engagement.
          </p>

          <div className="flex-1 min-h-0 rounded-lg border border-white/[0.08] overflow-hidden mb-4 bg-black/30 flex items-center justify-center">
            <img
              src={spicyMargaritaImg}
              alt="Jason Derulo — Spicy Margarita"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-lg p-3 text-center">
                <p className="text-xl font-bold text-foreground">{m.val}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default YouTubeAdsSlide;
