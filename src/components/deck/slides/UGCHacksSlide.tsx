import GlassPanel from '../GlassPanel';

const UGCHacksSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[5%] left-[20%] w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[160px] animate-float" />
    <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px] animate-float-slow" />

    <div className="relative z-10 max-w-[1400px]">
      <p className="text-lg text-primary font-medium mb-4 tracking-wider uppercase">Service</p>
      <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
        UGC Growth: Creator Flood<br />+ Top 50 Trending
      </h1>
      <p className="text-xl text-muted-foreground mb-10 max-w-[800px]">
        These are blunt-force tools. They are not "premium creative." They are designed to trigger visibility through volume.
      </p>

      <div className="grid grid-cols-2 gap-8 max-w-[1200px] mb-8">
        <GlassPanel variant="bright" className="p-6">
          <p className="text-xl font-semibold text-foreground mb-3">TikTok Creator Flood</p>
          <p className="text-sm text-primary font-medium mb-3">What it is</p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Mass-posting your track across 10,000+ real TikTok UGC videos, primarily from international nano-creators, with some macro creators mixed in when it makes sense.
          </p>
          <p className="text-sm text-primary font-medium mb-2">Why it works</p>
          <p className="text-sm text-muted-foreground mb-4">
            It builds massive volume and algorithmic lift through real accounts, not bots.
          </p>
          <div className="pt-3 border-t border-white/[0.06]">
            <p className="text-sm text-primary font-medium">Timeframe: 3 to 4 weeks</p>
          </div>
        </GlassPanel>

        <GlassPanel variant="bright" className="p-6">
          <p className="text-xl font-semibold text-foreground mb-3">Top 50 Trending & Popular Tab</p>
          <p className="text-sm text-primary font-medium mb-3">What it is</p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            We guarantee your track appears on Top 50 trending charts across YouTube Shorts, Instagram Reels, and Facebook Reels, and enters the Popular Tab on TikTok.
          </p>
          <p className="text-sm text-primary font-medium mb-2">How it's done (honest version)</p>
          <p className="text-sm text-muted-foreground mb-4">
            A hybrid of AI-generated quantity content plus real UGC, with quantity prioritized over quality to push traction until the track charts.
          </p>
          <div className="pt-3 border-t border-white/[0.06]">
            <p className="text-sm text-primary font-medium">Timeframe: 2 to 3 weeks</p>
          </div>
        </GlassPanel>
      </div>

      <GlassPanel variant="subtle" className="max-w-[1200px] p-6">
        <p className="text-lg font-semibold text-foreground mb-3">When to use these</p>
        <div className="grid grid-cols-3 gap-4">
          {[
            'When you want brute visibility fast',
            'When you have a track that\'s already converting and needs gasoline',
            'When the goal is chart presence and algorithm discovery signals',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  </div>
);

export default UGCHacksSlide;
