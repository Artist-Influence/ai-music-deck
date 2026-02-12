import GlassPanel from '../GlassPanel';

const CaseStudySkrillexSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px] animate-float" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-4">Community-driven reach.</h1>
      <p className="text-xl text-muted-foreground mb-12">Case study — Fan Page Growth</p>

      <div className="grid grid-cols-2 gap-8 max-w-[1200px]">
        {/* Left — details */}
        <GlassPanel variant="bright" className="p-8 flex flex-col">
          <p className="text-sm text-primary font-mono mb-4 tracking-widest">FANPAGES</p>
          <p className="text-3xl font-bold text-foreground">Skrillex</p>
          <p className="text-sm text-muted-foreground/60 mb-6">FUS Album</p>

          <div className="space-y-3 mb-6">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Goal:</span> Maintain consistent visibility around the FUS album and Ultra set moments across bass and rave audiences.
            </p>
          </div>

          <p className="text-sm text-primary font-medium mb-2">Strategy</p>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground">
            <li>Distributed micro-moments across fan and scene pages</li>
            <li>Leveraged rave, bass, and festival audiences</li>
            <li>Iterated formats based on engagement patterns</li>
          </ol>
        </GlassPanel>

        {/* Right — clips + metrics */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-primary font-medium mb-3">Sample clips</p>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="aspect-[9/16] rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                  <span className="text-xs text-muted-foreground/40">Clip {n}</span>
                </div>
              ))}
            </div>
          </div>

          <GlassPanel variant="bright" className="p-6">
            <p className="text-sm text-primary font-medium mb-4">Results</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '2,100,000+', label: 'Views' },
                { val: '1,557', label: 'Posts' },
                { val: '6.84%', label: 'Engagement' },
                { val: '~42%', label: 'Album UGC Month 1' },
                { val: '1,300,000+', label: 'Top Post Views' },
              ].map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-foreground">{m.val}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  </div>
);

export default CaseStudySkrillexSlide;
