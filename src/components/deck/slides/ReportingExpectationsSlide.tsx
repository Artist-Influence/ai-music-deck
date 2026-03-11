import GlassPanel from '../GlassPanel';

const weeklyItems = [
  'What launched, what\'s live, what\'s next',
  'Top creatives and patterns we\'re seeing',
  'Platform metrics that matter (not vanity noise)',
  'Budget pacing where relevant',
  'Recommended adjustments',
];

const finalItems = [
  'Results by service',
  'Best-performing angles and formats',
  'Recommendations for the next release',
];

const weNeed = [
  'Audio links, clean metadata, and posting handles',
  'Any brand safety rules or hard "no" topics',
  'A clear primary goal per campaign',
];

const dontExpect = [
  'One viral video to carry the whole release',
  'Perfect creative taste from volume-based tactics',
  'Results without iteration — if the market says "not yet"',
];

const ReportingExpectationsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-12 flex items-center justify-center">
    <div className="absolute top-[10%] left-[40%] w-[500px] h-[400px] rounded-full bg-primary/[0.05] blur-[140px]" />

    <div className="relative z-10 w-full max-w-[1600px] grid grid-cols-2 gap-8 h-full py-4">
      {/* Left — Reporting */}
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-foreground mb-1">You'll never wonder what's happening.</h2>
        <p className="text-xl text-muted-foreground mb-6">Reporting and transparency</p>

        <div className="flex flex-col gap-4 flex-1">
          <GlassPanel variant="bright" className="p-6 text-left flex-1 flex flex-col">
            <p className="text-xl font-semibold text-primary mb-4">Weekly updates include</p>
            {weeklyItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-white/[0.06] last:border-0">
                <div className="w-2 h-2 rounded-full bg-primary/60 shrink-0" />
                <p className="text-2xl text-foreground/80">{item}</p>
              </div>
            ))}
          </GlassPanel>

          <GlassPanel variant="subtle" className="p-6 text-left flex-1 flex flex-col">
            <p className="text-xl font-semibold text-muted-foreground mb-4">Final recap includes</p>
            {finalItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-white/[0.06] last:border-0">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30 shrink-0" />
                <p className="text-2xl text-muted-foreground">{item}</p>
              </div>
            ))}
          </GlassPanel>
        </div>
      </div>

      {/* Right — Expectations */}
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-foreground mb-1">We move fast, but we don't do chaos.</h2>
        <p className="text-xl text-muted-foreground mb-6">Aligning on basics upfront</p>

        <div className="flex flex-col gap-4 flex-1">
          <GlassPanel variant="bright" className="p-6 text-left flex-1 flex flex-col justify-center">
            <p className="text-xl font-semibold text-primary mb-4">We need from you</p>
            {weNeed.map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-white/[0.06] last:border-0">
                <div className="w-2 h-2 rounded-full bg-primary/60 shrink-0" />
                <p className="text-lg text-foreground">{item}</p>
              </div>
            ))}
          </GlassPanel>

          <GlassPanel variant="subtle" className="p-6 text-left flex-1 flex flex-col justify-center">
            <p className="text-xl font-semibold text-muted-foreground mb-4">What you should not expect</p>
            {dontExpect.map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-white/[0.06] last:border-0">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30 shrink-0" />
                <p className="text-lg text-muted-foreground">{item}</p>
              </div>
            ))}
          </GlassPanel>
        </div>
      </div>
    </div>
  </div>
);

export default ReportingExpectationsSlide;
