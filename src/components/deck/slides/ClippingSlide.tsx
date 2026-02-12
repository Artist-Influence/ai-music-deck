import GlassPanel from '../GlassPanel';

const ClippingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[140px] animate-float" />

    {/* Abstract content tiles flowing upward */}
    <div className="absolute right-24 top-24 bottom-24 w-[300px] flex flex-col gap-2 opacity-[0.12]">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="h-14 rounded-lg bg-primary/30 border border-primary/20"
          style={{ width: `${60 + (i * 17) % 40}%`, marginLeft: `${(i * 23) % 30}%` }} />
      ))}
    </div>

    <div className="relative z-10 max-w-[1100px]">
      <p className="text-lg text-primary font-medium mb-4 tracking-wider uppercase">Service</p>
      <h1 className="text-7xl font-bold text-foreground mb-10">Clipping</h1>

      <GlassPanel className="max-w-[800px] mb-10">
        <p className="text-2xl text-foreground/80 leading-relaxed mb-6">
          We turn your best records into an engine of short-form content. 50–200+ clips per campaign — designed for velocity across TikTok, Reels, and Shorts.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Every clip is built to stop the scroll.
        </p>
      </GlassPanel>

      <div className="grid grid-cols-4 gap-4 max-w-[800px]">
        {['Lyrics-synced edits', 'Trending format adaptation', 'Platform-native formatting', 'Algorithmic distribution'].map((item, i) => (
          <GlassPanel key={i} variant="subtle" className="p-4 text-center">
            <p className="text-sm text-foreground/70">{item}</p>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default ClippingSlide;
