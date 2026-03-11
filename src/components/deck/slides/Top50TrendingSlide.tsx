import { TrendingUp } from 'lucide-react';
import GlassPanel from '../GlassPanel';
import mlShorts from '@/assets/major-lazer-canada-shorts-2.jpeg';

const metrics = [
  { val: '5,000+', label: 'YT Creates' },
  { val: '14,900+', label: 'IG Reels Creates' },
  { val: '2,000+', label: 'TikTok Creates — Popular Tab' },
  { val: 'US / CA', label: 'Trending Regions' },
  { val: 'US, CA, UK, KR', label: 'YT Shorts Audio Trending' },
  { val: 'US / CA', label: 'IG Reels Audio Trending' },
];

const Top50TrendingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-12 flex items-center justify-center">
    <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[140px] animate-float" />
    <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px] animate-float-slow" />

    <div className="relative z-10 w-full max-w-[1600px] flex gap-10 items-stretch">
      {/* Left — Service Info */}
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={28} className="text-primary" />
            <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-4 leading-tight">
            Top 50 Trending<br />& Popular Tab
          </h1>
          <p className="text-2xl text-muted-foreground mb-6 max-w-[700px]">
            We guarantee your track appears on Top 50 trending charts across YouTube Shorts, Instagram Reels, and Facebook Reels, and enters the Popular Tab on TikTok.
          </p>
        </div>

        <GlassPanel variant="bright" className="p-8 flex-1 flex flex-col justify-center">
          <p className="text-2xl font-semibold text-foreground mb-3">How it's done (honest version)</p>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            A hybrid of AI-generated quantity content plus real UGC, with quantity prioritized over quality to push traction until the track charts.
          </p>
        </GlassPanel>

        <GlassPanel variant="subtle" className="p-8 flex-1 flex flex-col justify-center">
          <p className="text-2xl font-semibold text-foreground mb-3">When to use</p>
          <div className="space-y-2.5">
            {[
              'When the goal is chart presence and algorithm discovery signals',
              'When you want cross-platform trending visibility fast',
              'When you need verified proof of traction for PR or label conversations',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-3" />
                <p className="text-2xl text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <p className="text-2xl text-primary font-medium">Timeframe: 2 to 3 weeks</p>
          </div>
        </GlassPanel>
      </div>

      {/* Right — Case Study */}
      <div className="flex-1 flex flex-col justify-center">
        <GlassPanel variant="bright" className="p-5 flex flex-col">
          <p className="text-base text-primary font-mono mb-2 tracking-widest uppercase">Case Study</p>
          <p className="text-2xl font-bold text-foreground">Major Lazer</p>
          <p className="text-xl text-muted-foreground mb-2">MINI SKIRT</p>
          <p className="text-xl text-muted-foreground mb-4">
            Pushed official audio into trending environments across Shorts, Reels, and Facebook for rapid visibility.
          </p>

            <div className="flex gap-6 flex-1">
            {/* Left: KPIs stacked — half width */}
            <div className="flex-1 flex flex-col justify-between gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-xl p-5 text-center border border-white/[0.06]">
                  <p className="text-xl font-bold text-foreground">{m.val}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider leading-tight">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Right: YouTube Shorts screenshot — half width */}
            <div className="flex-1 max-h-[80%] self-end rounded-xl overflow-hidden border border-white/[0.08] bg-black/20">
              <img src={mlShorts} alt="YouTube Shorts — Canada Trending" className="w-full h-full object-cover object-bottom" />
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default Top50TrendingSlide;
