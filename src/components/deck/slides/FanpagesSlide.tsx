import GlassPanel from '../GlassPanel';
import FanpageVisualizer from '../FanpageVisualizer';

const FanpagesSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-accent/[0.05] blur-[130px] animate-float-slow" />

    <div className="relative z-10 w-full max-w-[1600px]">
      <p className="text-lg text-primary font-medium mb-4 tracking-wider uppercase">Service</p>
      <h1 className="text-7xl font-bold text-foreground mb-6">Fanpages</h1>
      <p className="text-2xl text-muted-foreground mb-12 max-w-[800px]">
        We operate and scale theme pages that consistently seed your music into real audiences.
      </p>

      <div className="flex gap-10">
        <div className="flex-1 space-y-6 max-w-[900px]">
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

        <div className="flex-1 flex items-center justify-center">
          <FanpageVisualizer />
        </div>
      </div>
    </div>
  </div>
);

export default FanpagesSlide;
