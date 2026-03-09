import { TrendingUp } from 'lucide-react';
import GlassPanel from '../GlassPanel';
import mlShorts from '@/assets/major-lazer-canada-shorts.jpeg';
import mlFacebook from '@/assets/major-lazer-facebook-trending.jpeg';
import mlTiktok from '@/assets/major-lazer-tiktok-popular.jpeg';
import mlIg from '@/assets/major-lazer-ig-trending.jpeg';

const screenshots = [
  { src: mlShorts, alt: 'YouTube Shorts — #11 Canada Daily Top Songs' },
  { src: mlFacebook, alt: 'Facebook — For You audio listing' },
  { src: mlTiktok, alt: 'TikTok — Popular tab, 1739 videos' },
  { src: mlIg, alt: 'Instagram — #4 Trending, 15K reels' },
];

const metrics = [
  { val: '5,000+', label: 'YT Creates' },
  { val: '14,900+', label: 'IG Reels Creates' },
  { val: '2,000+', label: 'TikTok Creates' },
  { val: 'US / CA', label: 'Trending Regions' },
];

const Top50TrendingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex items-center justify-center">
    <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[140px] animate-float" />
    <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px] animate-float-slow" />

    <div className="relative z-10 w-full max-w-[1600px] flex gap-10">
      {/* Left — Service Info */}
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-lg text-primary font-medium mb-4 tracking-wider uppercase">Service</p>
        <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
          Top 50 Trending<br />& Popular Tab
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-[700px]">
          We guarantee your track appears on Top 50 trending charts across YouTube Shorts, Instagram Reels, and Facebook Reels, and enters the Popular Tab on TikTok.
        </p>

        <GlassPanel variant="bright" className="p-6 mb-6">
          <p className="text-xl font-semibold text-foreground mb-3">How it's done (honest version)</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            A hybrid of AI-generated quantity content plus real UGC, with quantity prioritized over quality to push traction until the track charts.
          </p>
        </GlassPanel>

        <GlassPanel variant="subtle" className="p-6 mb-6">
          <p className="text-lg font-semibold text-foreground mb-3">When to use</p>
          <div className="space-y-2">
            {[
              'When the goal is chart presence and algorithm discovery signals',
              'When you want cross-platform trending visibility fast',
              'When you need verified proof of traction for PR or label conversations',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                <p className="text-base text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <p className="text-sm text-primary font-medium">Timeframe: 2 to 3 weeks</p>
      </div>

      {/* Right — Case Study */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <GlassPanel variant="bright" className="p-6 flex flex-col">
          <p className="text-sm text-primary font-mono mb-2 tracking-widest uppercase">Case Study</p>
          <p className="text-3xl font-bold text-foreground">Major Lazer</p>
          <p className="text-base text-muted-foreground mb-3">MINI SKIRT</p>
          <p className="text-base text-muted-foreground mb-4">
            Pushed official audio into trending environments across Shorts, Reels, and Facebook for rapid visibility.
          </p>

          <div className="grid grid-cols-2 gap-2 mb-4 max-h-[340px] overflow-hidden">
            {screenshots.map((s, i) => (
              <div key={i} className="rounded-lg border border-white/[0.08] overflow-hidden">
                <img src={s.src} alt={s.alt} className="w-full h-full object-cover" />
              </div>
            ))}
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

export default Top50TrendingSlide;
