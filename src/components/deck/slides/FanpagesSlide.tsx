import GlassPanel from '../GlassPanel';

const FanpagesSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-accent/[0.05] blur-[130px] animate-float-slow" />

    <div className="relative z-10">
      <p className="text-lg text-primary font-medium mb-4 tracking-wider uppercase">Service</p>
      <h1 className="text-7xl font-bold text-foreground mb-10">Fanpages</h1>

      <div className="flex gap-10">
        <GlassPanel className="max-w-[650px] flex-1">
          <p className="text-2xl text-foreground/80 leading-relaxed mb-6">
            We activate a network of themed fan pages to create the perception of organic discovery.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Your track appears across curated communities — not once, but consistently.
          </p>
          <div className="space-y-3">
            {['Genre-specific music pages', 'Mood and aesthetic accounts', 'Culture and lifestyle feeds', 'Coordinated posting schedules for maximum saturation'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                <p className="text-base text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Placeholder grid for page screenshots */}
        <div className="flex-1 grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <GlassPanel key={i} variant="subtle" className="p-4 flex flex-col items-center justify-center aspect-[3/4]">
              <div className="w-10 h-10 rounded-full bg-primary/10 mb-3" />
              <div className="w-full h-2 rounded bg-white/[0.06] mb-1.5" />
              <div className="w-3/4 h-2 rounded bg-white/[0.04]" />
              <p className="text-[10px] text-muted-foreground/40 mt-auto">Page {i + 1}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default FanpagesSlide;
