import { Zap } from 'lucide-react';
import GlassPanel from '../GlassPanel';
import richBrianImg from '@/assets/rich-brian-jumpy-tiktok.png';

const metrics = [
  { val: '10,000+', label: 'Minimum Posts' },
  { val: '23,000+', label: 'Posts Driven' },
  { val: '33,000+', label: 'Total Creates' },
];

const CreatorFloodSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-12 flex items-center justify-center">
    <div className="absolute top-[5%] left-[20%] w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[160px] animate-float" />
    <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px] animate-float-slow" />

    <div className="relative z-10 w-full max-w-[1600px] flex gap-10 items-stretch">
      {/* Left — Service Info */}
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Zap size={28} className="text-primary" />
            <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-4 leading-tight">
            TikTok Creator Flood
          </h1>
          <p className="text-2xl text-muted-foreground mb-6 max-w-[700px]">
            Mass-posting your track across 10,000+ minimum posts from real TikTok UGC videos, primarily from international nano-creators, with some macro creators mixed in when it makes sense.
          </p>
        </div>

        <GlassPanel className="p-8 flex-1 flex flex-col">
          <p className="text-2xl font-semibold text-primary mb-3">Pros</p>
          <div className="space-y-2.5">
            {[
              'Builds massive volume and algorithmic lift through real accounts, not bots',
              'Sheer quantity of real usage signals tells TikTok the sound is trending organically',
              'Macro-influencers mixed in for added reach',
              'Over-indexing videos tracked: when a clip takes off, Spark Ads pointed to Spotify convert momentum into streams',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-3" />
                <p className="text-2xl text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel className="p-8 flex-1 flex flex-col">
          <p className="text-2xl font-semibold text-primary mb-3">When to use</p>
          <div className="space-y-2.5">
            {[
              'When you want brute visibility fast',
              "When you have a track that's already converting and needs fuel on the fire",
              'When the goal is pure volume: maximum algorithm discovery signals at scale',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-3" />
                <p className="text-2xl text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <p className="text-2xl text-primary font-medium">Timeframe: 3 to 4 weeks</p>
          </div>
        </GlassPanel>
      </div>

      {/* Right — Case Study */}
      <div className="flex-1 flex flex-col justify-center">
        <GlassPanel variant="bright" className="p-5 flex flex-col">
          <p className="text-base text-primary font-mono mb-1 tracking-widest uppercase">Case Study</p>
          <p className="text-2xl font-bold text-foreground">Rich Brian</p>
          <p className="text-xl text-muted-foreground mb-2">Jumpy (feat. Ski Mask The Slump God)</p>
          <p className="text-xl text-muted-foreground mb-3">
            Large-scale creator activation to rapidly increase audio usage and establish algorithmic momentum.
          </p>

          <div className="flex-1 min-h-0 mb-3 rounded-lg border border-white/[0.08] overflow-hidden">
            <img
              src={richBrianImg}
              alt="Rich Brian — Jumpy TikTok sound page, 33K+ videos"
              className="w-full h-full object-cover object-right-top"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-lg p-3 text-center">
                <p className="text-lg font-bold text-foreground">{m.val}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default CreatorFloodSlide;
