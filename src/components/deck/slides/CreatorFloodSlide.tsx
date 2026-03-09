import GlassPanel from '../GlassPanel';
import richBrianImg from '@/assets/rich-brian-jumpy-tiktok.png';

const metrics = [
  { val: '10,000+', label: 'Initial Posts' },
  { val: '23,000+', label: 'Posts Driven' },
  { val: '29,900+', label: 'Total Creates' },
];

const CreatorFloodSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex items-center justify-center">
    <div className="absolute top-[5%] left-[20%] w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[160px] animate-float" />
    <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px] animate-float-slow" />

    <div className="relative z-10 w-full max-w-[1600px] flex gap-10">
      {/* Left — Service Info */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-lg text-primary font-medium mb-4 tracking-wider uppercase">Service</p>
        <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
          TikTok Creator Flood
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-[700px]">
          Mass-posting your track across 10,000+ real TikTok UGC videos, primarily from international nano-creators, with some macro creators mixed in when it makes sense.
        </p>

        <GlassPanel variant="bright" className="p-6 mb-6">
          <p className="text-xl font-semibold text-foreground mb-3">Why it works</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            It builds massive volume and algorithmic lift through real accounts, not bots. The sheer quantity of real usage signals tells TikTok the sound is trending organically.
          </p>
        </GlassPanel>

        <GlassPanel variant="subtle" className="p-6 mb-6">
          <p className="text-lg font-semibold text-foreground mb-3">When to use</p>
          <div className="space-y-2">
            {[
              'When you want brute visibility fast',
              "When you have a track that's already converting and needs gasoline",
              'When the goal is algorithm discovery signals at scale',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                <p className="text-base text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <p className="text-sm text-primary font-medium">Timeframe: 3 to 4 weeks</p>
      </div>

      {/* Right — Case Study */}
      <div className="flex-1 flex flex-col justify-center">
        <GlassPanel variant="bright" className="p-6 flex flex-col h-full">
          <p className="text-sm text-primary font-mono mb-2 tracking-widest uppercase">Case Study</p>
          <p className="text-3xl font-bold text-foreground">Rich Brian</p>
          <p className="text-base text-muted-foreground mb-3">Jumpy (feat. Ski Mask The Slump God)</p>
          <p className="text-base text-muted-foreground mb-4">
            Large-scale creator activation to rapidly increase audio usage and establish algorithmic momentum.
          </p>

          <div className="flex-1 min-h-0 mb-4 rounded-lg border border-white/[0.08] overflow-hidden">
            <img
              src={richBrianImg}
              alt="Rich Brian — Jumpy TikTok sound page, 29.3K videos"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
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

export default CreatorFloodSlide;
