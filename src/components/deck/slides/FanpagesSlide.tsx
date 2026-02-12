import GlassPanel from '../GlassPanel';

const FanpagesSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-accent/[0.05] blur-[130px] animate-float-slow" />

    <div className="relative z-10">
      <p className="text-lg text-primary font-medium mb-4 tracking-wider uppercase">Service</p>
      <h1 className="text-7xl font-bold text-foreground mb-6">Fanpages</h1>
      <p className="text-2xl text-muted-foreground mb-12 max-w-[800px]">
        We operate and scale theme pages that consistently seed your music into real audiences.
      </p>

      <div className="flex gap-10">
        <div className="flex-1 space-y-6">
          <GlassPanel className="p-6">
            <p className="text-lg font-semibold text-primary mb-3">What it is</p>
            <p className="text-base text-muted-foreground leading-relaxed">
              A structured content and distribution layer through genre and edit-style pages that already know how to get reach.
            </p>
          </GlassPanel>

          <GlassPanel className="p-6">
            <p className="text-lg font-semibold text-primary mb-3">What this is great for</p>
            <div className="space-y-2">
              {[
                'Building repeat exposure without relying on one-off influencer posts',
                'Creating "always-on" visibility while a song ramps',
                'Supporting a full rollout, not just a single moment',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-6">
            <p className="text-lg font-semibold text-primary mb-3">What you can expect</p>
            <div className="space-y-2 mb-4">
              {[
                'Consistent posting cadence',
                'Multiple content angles and formats',
                'Iteration based on what the audience responds to',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-white/[0.06]">
              <p className="text-sm text-primary font-medium">Timeframe: Best results from 4 to 8+ weeks of consistency</p>
            </div>
          </GlassPanel>
        </div>

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
