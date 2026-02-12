import GlassPanel from '../GlassPanel';

const ReportingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[10%] left-[50%] w-[500px] h-[400px] rounded-full bg-primary/[0.05] blur-[140px]" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-4">You'll never wonder<br />what's happening.</h1>
      <p className="text-xl text-muted-foreground mb-16">Weekly dashboards. Real-time updates. No black boxes.</p>

      <div className="grid grid-cols-3 gap-5 max-w-[1400px]">
        {/* Mock dashboard cards */}
        <GlassPanel className="p-6 col-span-2 row-span-2">
          <p className="text-sm text-muted-foreground mb-4 font-medium">Campaign Performance</p>
          <div className="flex gap-4 mb-6">
            {[['Views', '2.4M'], ['Engagement', '8.3%'], ['Saves', '42K']].map(([l, v], i) => (
              <div key={i} className="flex-1 text-center p-3 rounded-lg bg-white/[0.03]">
                <p className="text-2xl font-bold text-primary">{v}</p>
                <p className="text-xs text-muted-foreground mt-1">{l}</p>
              </div>
            ))}
          </div>
          {/* Mock chart bars */}
          <div className="flex items-end gap-2 h-32">
            {[40, 55, 35, 70, 85, 60, 90, 75, 95, 80, 100, 88].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary/20 border-t border-primary/40 transition-all"
                style={{ height: `${h}%` }} />
            ))}
          </div>
        </GlassPanel>

        <GlassPanel variant="subtle" className="p-5">
          <p className="text-sm text-muted-foreground mb-3 font-medium">Included in every report</p>
          {['Platform-by-platform metrics', 'Content volume tracking', 'Engagement & save rates', 'Streaming correlation data', 'Next-step recommendations'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5">
              <div className="w-1 h-1 rounded-full bg-primary/50" />
              <p className="text-sm text-muted-foreground/80">{item}</p>
            </div>
          ))}
        </GlassPanel>

        <GlassPanel variant="subtle" className="p-5">
          <p className="text-sm text-muted-foreground mb-3 font-medium">Delivery cadence</p>
          {[['Weekly', 'Performance dashboard'], ['Bi-weekly', 'Strategy sync call'], ['Monthly', 'Full campaign review']].map(([freq, desc], i) => (
            <div key={i} className="py-2 border-b border-white/[0.04] last:border-0">
              <p className="text-sm text-primary font-medium">{freq}</p>
              <p className="text-xs text-muted-foreground/60">{desc}</p>
            </div>
          ))}
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default ReportingSlide;
