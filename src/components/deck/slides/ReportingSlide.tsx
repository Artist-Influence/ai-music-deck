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

const ReportingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute top-[10%] left-[50%] w-[500px] h-[400px] rounded-full bg-primary/[0.05] blur-[140px]" />

    <div className="relative z-10 w-full max-w-[1400px] text-center">
      <h1 className="text-6xl font-bold text-foreground mb-4">You'll never wonder<br />what's happening.</h1>
      <p className="text-xl text-muted-foreground mb-16">Reporting and transparency</p>

      <div className="grid grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        <GlassPanel variant="bright" className="p-10">
          <p className="text-xl font-semibold text-primary mb-8">Weekly updates include</p>
          {weeklyItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-3 border-b border-white/[0.06] last:border-0">
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <p className="text-lg text-foreground/80">{item}</p>
            </div>
          ))}
        </GlassPanel>

        <GlassPanel variant="subtle" className="p-10">
          <p className="text-xl font-semibold text-muted-foreground mb-8">Final recap includes</p>
          {finalItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-3 border-b border-white/[0.06] last:border-0">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              <p className="text-lg text-muted-foreground">{item}</p>
            </div>
          ))}
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default ReportingSlide;
