import { TrendingUp } from 'lucide-react';
import GlassPanel from '../GlassPanel';
import mlShorts from '@/assets/major-lazer-canada-shorts-2.jpeg';

const metrics = [
  { val: '5,000+', label: 'YouTube Shorts Creates' },
  { val: '14,900+', label: 'Instagram Reels Creates' },
  { val: '2,000+', label: 'TikTok Creates, Popular Tab' },
  { val: '3,000+', label: 'Facebook Reels Creates' },
  { val: 'US, CA, UK, KR', label: 'YouTube Shorts Audio Trending' },
  { val: 'US / CA', label: 'Instagram Reels Audio Trending' },
];

const Top50TrendingSlide = () => (
  <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-12 flex flex-col justify-start md:justify-center">
    <div className="relative z-10 w-full max-w-[1600px] flex flex-col md:flex-row gap-4 md:gap-10 items-stretch">
      {/* Left — Service Info */}
      <div className="flex-1 flex flex-col gap-3 md:gap-4">
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <TrendingUp size={20} className="text-primary md:w-7 md:h-7" />
            <p className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-2xl md:text-6xl font-bold text-foreground mb-2 md:mb-4 leading-tight">
            Top 50 Trending<br className="hidden md:block" />& Popular Tab
          </h1>
          <p className="text-sm md:text-2xl text-muted-foreground mb-4 md:mb-6 max-w-[700px]">
            We guarantee your track appears on Top 50 trending charts across YouTube Shorts, Instagram Reels, and Facebook Reels.
          </p>
        </div>

        <GlassPanel variant="bright" className="p-4 md:p-8 flex-1 flex flex-col justify-center">
          <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">How it's done (transparently)</p>
          <p className="text-xs md:text-2xl text-muted-foreground leading-relaxed">
            A hybrid of AI-generated quantity content plus real UGC, with quantity prioritized over quality to push traction until the track charts.
          </p>
        </GlassPanel>

        <GlassPanel variant="subtle" className="p-4 md:p-8 flex-1 flex flex-col justify-center">
          <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">When to use</p>
          <div className="space-y-1.5 md:space-y-2.5">
            {[
              'When the goal is chart presence and algorithm discovery signals',
              'When you want cross-platform trending visibility fast',
              'When you need verified proof of traction for PR or label conversations',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                <p className="text-xs md:text-2xl text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="pt-2 md:pt-3 border-t border-white/[0.06] mt-2 md:mt-3">
            <p className="text-xs md:text-2xl text-primary font-medium">Timeframe: 2 to 3 weeks</p>
          </div>
        </GlassPanel>
      </div>

      {/* Right — Case Study */}
      <div className="flex-1 flex flex-col">
        <GlassPanel variant="bright" className="p-4 md:p-5 flex flex-col flex-1">
          <p className="text-xs md:text-base text-primary font-mono mb-1 md:mb-2 tracking-widest uppercase">Case Study</p>
          <p className="text-lg md:text-2xl font-bold text-foreground">Major Lazer</p>
          <p className="text-sm md:text-xl text-muted-foreground mb-2 md:mb-4">MINI SKIRT</p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-1">
            {/* KPIs */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-1 md:flex md:flex-col justify-start gap-2 md:gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-xl p-3 md:p-5 border border-white/[0.06] flex flex-col items-center justify-center text-center">
                  <p className="text-sm md:text-xl font-bold text-foreground">{m.val}</p>
                  <p className="text-[9px] md:text-sm text-muted-foreground uppercase tracking-wider leading-tight">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Screenshot */}
            <div className="hidden md:flex flex-1 items-center">
              <img src={mlShorts} alt="YouTube Shorts, Canada Trending" className="w-full rounded-lg" />
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default Top50TrendingSlide;
