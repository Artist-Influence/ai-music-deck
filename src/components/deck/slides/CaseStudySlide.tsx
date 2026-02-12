import GlassPanel from '../GlassPanel';

const cases = [
  { num: 1, artist: '[Artist / Release]', goal: '[ ]', services: '[ ]', metrics: ['[Metric]', '[Metric]', '[Metric]'], lever: '[one sentence on the lever that worked]' },
  { num: 2, artist: '[Artist / Release]', goal: '[ ]', services: '[ ]', metrics: ['[Metric]', '[Metric]', '[Metric]'], lever: '[one sentence]' },
  { num: 3, artist: '[Artist / Release]', goal: '[ ]', services: '[ ]', metrics: ['[Metric]', '[Metric]', '[Metric]'], lever: '[one sentence]' },
];

const CaseStudySlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px] animate-float" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-4">Proof, not promises.</h1>
      <p className="text-xl text-muted-foreground mb-12">Case studies</p>

      <div className="grid grid-cols-3 gap-6 max-w-[1400px]">
        {cases.map((c) => (
          <GlassPanel key={c.num} variant="bright" className="p-6">
            <p className="text-sm text-primary font-mono mb-3 tracking-widest">CASE STUDY {c.num}</p>
            <p className="text-xl font-semibold text-foreground mb-4">{c.artist}</p>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-muted-foreground"><span className="text-primary font-medium">Goal:</span> {c.goal}</p>
              <p className="text-sm text-muted-foreground"><span className="text-primary font-medium">Services:</span> {c.services}</p>
            </div>
            <p className="text-sm text-primary font-medium mb-2">Result highlights</p>
            <div className="space-y-1 mb-4">
              {c.metrics.map((m, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <p className="text-sm text-muted-foreground">{m}</p>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-white/[0.06]">
              <p className="text-sm text-muted-foreground/70"><span className="text-primary font-medium">What mattered:</span> {c.lever}</p>
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default CaseStudySlide;
