import GlassPanel from '../GlassPanel';

const steps = [
  { num: '01', title: 'Setup', desc: 'We align on goals, audience, assets, and guardrails. Then we build the distribution plan.' },
  { num: '02', title: 'Launch', desc: 'We activate the chosen services with tight execution and clear timelines.' },
  { num: '03', title: 'Optimize', desc: 'We double down on what\'s working, cut what isn\'t, and keep results moving.' },
  { num: '04', title: 'Report', desc: 'Weekly updates, final recap, and reusable learnings for the next drop.' },
];

const HowWeWorkSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[20%] left-[30%] w-[600px] h-[400px] rounded-full bg-primary/[0.05] blur-[150px] animate-float-slow" />

    <div className="relative z-10">
      <h1 className="text-7xl font-bold text-foreground mb-4">Simple process.</h1>
      <p className="text-3xl text-muted-foreground mb-20">No mystery.</p>

      <div className="flex items-center gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center flex-1">
            <GlassPanel variant="bright" className="flex-1 p-6 text-center">
              <p className="text-primary text-sm font-mono mb-2 tracking-widest">{step.num}</p>
              <p className="text-2xl font-semibold text-foreground mb-3">{step.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </GlassPanel>
            {i < steps.length - 1 && (
              <div className="w-12 h-[2px] bg-gradient-to-r from-primary/40 to-primary/20 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HowWeWorkSlide;
