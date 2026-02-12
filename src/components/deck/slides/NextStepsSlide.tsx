import GlassPanel from '../GlassPanel';
import cloutedLogo from '@/assets/CLOUTED-white.png';
import NetworkVisual from '../NetworkVisual';

const steps = [
  { num: '01', title: 'Quick kickoff call', desc: '20 minutes' },
  { num: '02', title: 'Confirm scope', desc: 'We confirm goals, services, and timeline' },
  { num: '03', title: 'You send assets', desc: 'Audio, metadata, handles' },
  { num: '04', title: 'Launch', desc: 'Within 24 to 72 hours depending on services' },
];

const NextStepsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center text-center">
    <div className="absolute top-[10%] left-[30%] w-[600px] h-[500px] rounded-full bg-primary/[0.06] blur-[160px] animate-float-slow" />
    <NetworkVisual className="opacity-[0.06]" nodeCount={30} seed={5} />

    <div className="relative z-10 max-w-[1000px]">
      <h1 className="text-6xl font-bold text-foreground mb-4">If this makes sense,<br />here's how we start.</h1>
      <p className="text-xl text-muted-foreground mb-16">No friction.</p>

      <div className="flex gap-5 mb-16">
        {steps.map((s, i) => (
          <GlassPanel key={i} variant="bright" className="flex-1 p-5 text-left">
            <p className="text-primary text-sm font-mono mb-2 tracking-widest">{s.num}</p>
            <p className="text-lg font-semibold text-foreground mb-1">{s.title}</p>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </GlassPanel>
        ))}
      </div>

      <GlassPanel variant="subtle" className="mb-12 p-6 max-w-[600px] mx-auto">
        <p className="text-base text-muted-foreground mb-2">[Name] · [Email] · [Phone]</p>
        <p className="text-sm text-muted-foreground/60">[Clouted website]</p>
        <p className="text-sm text-primary mt-3 italic">"We can turn around a recommended plan within 24 hours."</p>
      </GlassPanel>

      <img src={cloutedLogo} alt="CLOUTED" className="w-44 mx-auto mb-4" />
      <p className="text-lg text-muted-foreground">The growth system for modern music</p>
    </div>
  </div>
);

export default NextStepsSlide;
