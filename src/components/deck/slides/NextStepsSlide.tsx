import GlassPanel from '../GlassPanel';
import NetworkVisual from '../NetworkVisual';

const steps = [
  { num: '01', title: 'Alignment call', desc: 'We learn your goals, catalog, and timeline.' },
  { num: '02', title: 'Custom proposal', desc: 'Scoped to your release or campaign window.' },
  { num: '03', title: 'Onboarding', desc: 'Assets, access, and kickoff within 48 hours.' },
];

const NextStepsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center text-center">
    <div className="absolute top-[10%] left-[30%] w-[600px] h-[500px] rounded-full bg-primary/[0.06] blur-[160px] animate-float-slow" />
    <NetworkVisual className="opacity-[0.06]" nodeCount={30} seed={5} />

    <div className="relative z-10 max-w-[900px]">
      <h1 className="text-6xl font-bold text-foreground mb-4">If this makes sense,<br />here's how we start.</h1>
      <p className="text-xl text-muted-foreground mb-16">Three steps. No friction.</p>

      <div className="flex gap-6 mb-20">
        {steps.map((s, i) => (
          <GlassPanel key={i} variant="bright" className="flex-1 p-6 text-left">
            <p className="text-primary text-sm font-mono mb-2 tracking-widest">{s.num}</p>
            <p className="text-xl font-semibold text-foreground mb-2">{s.title}</p>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </GlassPanel>
        ))}
      </div>

      <p className="text-4xl font-bold text-foreground tracking-[0.15em] mb-6">CLOUTED</p>
      <p className="text-lg text-muted-foreground">The growth system for modern music</p>
    </div>
  </div>
);

export default NextStepsSlide;
