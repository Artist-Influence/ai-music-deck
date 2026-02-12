import GlassPanel from '../GlassPanel';

const placeholderCase = {
  artist: '[Artist / Release]',
  goal: '[ ]',
  services: '[ ]',
  metrics: ['[Metric]', '[Metric]', '[Metric]'],
  lever: '[one sentence on the lever that worked]',
};

const CaseStudySlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px] animate-float" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-4">Proof, not promises.</h1>
      <p className="text-xl text-muted-foreground mb-12">Case studies</p>

      <div className="grid grid-cols-3 gap-6 max-w-[1400px]">
        {/* Case Study 1 — Subtronics */}
        <GlassPanel variant="bright" className="p-6 flex flex-col">
          <p className="text-sm text-primary font-mono mb-3 tracking-widest">CASE STUDY 1</p>
          <p className="text-xl font-semibold text-foreground">Subtronics</p>
          <p className="text-xs text-muted-foreground/60 mb-4">Client: Red Light Management</p>

          <div className="space-y-2 mb-4">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Goal:</span> Scale Subtronics' fandom beyond bass music through themed fan accounts in line with his Coachella debut + Fibonacci multi-genre album
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Services:</span> Fan Page Management
            </p>
          </div>

          <p className="text-sm text-primary font-medium mb-2">Strategy</p>
          <ol className="list-decimal list-inside space-y-1 mb-4 text-sm text-muted-foreground">
            <li>Live tour set highlights</li>
            <li>K-Pop-style slice of life content</li>
            <li>Snippets from interviews &amp; production livestreams</li>
            <li>News about upcoming releases &amp; events</li>
          </ol>

          <p className="text-sm text-primary font-medium mb-2">Sample clips</p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="aspect-[9/16] rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                <span className="text-xs text-muted-foreground/40">Clip {n}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-primary font-medium mb-2">Results</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { val: '5,000,000+', label: 'Views' },
              { val: '150,000+', label: 'Likes' },
              { val: '15,000+', label: 'Followers' },
              { val: '600+', label: 'Clips' },
            ].map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-lg p-2 text-center">
                <p className="text-base font-bold text-foreground">{m.val}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Case Study 2 — Placeholder */}
        <GlassPanel variant="bright" className="p-6 flex flex-col">
          <p className="text-sm text-primary font-mono mb-3 tracking-widest">CASE STUDY 2</p>
          <p className="text-xl font-semibold text-foreground mb-4">{placeholderCase.artist}</p>
          <div className="space-y-2 mb-4">
            <p className="text-sm text-muted-foreground"><span className="text-primary font-medium">Goal:</span> {placeholderCase.goal}</p>
            <p className="text-sm text-muted-foreground"><span className="text-primary font-medium">Services:</span> {placeholderCase.services}</p>
          </div>
          <p className="text-sm text-primary font-medium mb-2">Result highlights</p>
          <div className="space-y-1 mb-4">
            {placeholderCase.metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <p className="text-sm text-muted-foreground">{m}</p>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-auto">
            <p className="text-sm text-muted-foreground/70"><span className="text-primary font-medium">What mattered:</span> {placeholderCase.lever}</p>
          </div>
        </GlassPanel>

        {/* Case Study 3 — Placeholder */}
        <GlassPanel variant="bright" className="p-6 flex flex-col">
          <p className="text-sm text-primary font-mono mb-3 tracking-widest">CASE STUDY 3</p>
          <p className="text-xl font-semibold text-foreground mb-4">{placeholderCase.artist}</p>
          <div className="space-y-2 mb-4">
            <p className="text-sm text-muted-foreground"><span className="text-primary font-medium">Goal:</span> {placeholderCase.goal}</p>
            <p className="text-sm text-muted-foreground"><span className="text-primary font-medium">Services:</span> {placeholderCase.services}</p>
          </div>
          <p className="text-sm text-primary font-medium mb-2">Result highlights</p>
          <div className="space-y-1 mb-4">
            {placeholderCase.metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <p className="text-sm text-muted-foreground">{m}</p>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-auto">
            <p className="text-sm text-muted-foreground/70"><span className="text-primary font-medium">What mattered:</span> {placeholderCase.lever}</p>
          </div>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default CaseStudySlide;
