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
  <div className="w-full h-full bg-background relative overflow-hidden p-12 flex items-center justify-center">
    <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[140px]" />

    <div className="relative z-10 flex gap-10 w-full max-w-[1600px] mx-auto items-stretch">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-4">
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

        <GlassPanel variant="bright" className="p-8 flex-1">
          <p className="text-2xl font-semibold text-foreground mb-3">What it is:</p>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Paid YouTube campaigns built for subscribers and long-form engagement.
            We optimize daily with transparent weekly reporting and clean data exports.
          </p>
        </GlassPanel>

        <GlassPanel variant="bright" className="p-8 flex-1">
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
      <div className="flex-1 min-w-0 flex flex-col gap-4">
        {/* Case Study 1 — Jason Derulo */}
        <GlassPanel variant="bright" className="p-6 flex flex-col flex-1">
          <p className="text-base text-primary font-mono mb-1 tracking-widest">CASE STUDY</p>
          <p className="text-3xl font-bold text-foreground leading-tight">Jason Derulo & Michael Bublé</p>
          <p className="text-2xl text-muted-foreground mb-2">Spicy Margarita</p>

          <div className="flex-1 min-h-0 rounded-lg border border-white/[0.08] overflow-hidden mb-3 bg-black/30 flex items-center justify-center">
            <img
              src={spicyMargaritaImg}
              alt="Jason Derulo — Spicy Margarita"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{m.val}</p>
                <p className="text-lg text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Case Study 2 — Placeholder */}
        <GlassPanel variant="bright" className="p-6 flex flex-col flex-1">
          <p className="text-base text-primary font-mono mb-1 tracking-widest">CASE STUDY</p>
          <p className="text-3xl font-bold text-foreground leading-tight">Artist Name</p>
          <p className="text-2xl text-muted-foreground mb-2">Track Title</p>

          <div className="flex-1 min-h-0 rounded-lg border border-white/[0.08] overflow-hidden mb-3 bg-black/30 flex items-center justify-center">
            <p className="text-lg text-muted-foreground/40 italic">Screenshot placeholder</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { val: '—', label: 'Metric 1' },
              { val: '—', label: 'Metric 2' },
              { val: '—', label: 'Metric 3' },
              { val: '—', label: 'Metric 4' },
            ].map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{m.val}</p>
                <p className="text-lg text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default YouTubeAdsSlide;
