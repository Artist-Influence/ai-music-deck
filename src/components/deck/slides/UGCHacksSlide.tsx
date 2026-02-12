import GlassPanel from '../GlassPanel';

const UGCHacksSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[5%] left-[20%] w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[160px] animate-float" />
    <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px] animate-float-slow" />

    {/* Density acceleration visual */}
    <div className="absolute inset-0 opacity-[0.08]">
      {Array.from({ length: 80 }).map((_, i) => (
        <div key={i} className="absolute w-1 h-1 rounded-full bg-primary"
          style={{
            left: `${10 + ((i * 13) % 80)}%`,
            top: `${5 + ((i * 17) % 90)}%`,
            opacity: 0.3 + (i / 80) * 0.7,
            width: `${2 + (i / 80) * 4}px`,
            height: `${2 + (i / 80) * 4}px`,
          }} />
      ))}
    </div>

    <div className="relative z-10 max-w-[1400px]">
      <p className="text-lg text-primary font-medium mb-4 tracking-wider uppercase">Service</p>
      <h1 className="text-6xl font-bold text-foreground mb-10 leading-tight">
        UGC Hacks: Creator Flood<br />+ Top 50 Trending
      </h1>

      <div className="grid grid-cols-2 gap-8 max-w-[1200px]">
        <GlassPanel variant="bright">
          <p className="text-xl font-semibold text-foreground mb-4">Creator Flood</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            200–1,000+ creators posting your sound within 48–72 hours.
          </p>
          <p className="text-base text-muted-foreground/70">
            Coordinated volume that triggers algorithmic pickup across TikTok and Reels.
          </p>
        </GlassPanel>

        <GlassPanel variant="bright">
          <p className="text-xl font-semibold text-foreground mb-4">Top 50 Trending</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Strategic volume to push your sound onto TikTok's trending sounds list.
          </p>
          <p className="text-base text-muted-foreground/70">
            Together, they create undeniable social proof and algorithmic momentum.
          </p>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default UGCHacksSlide;
