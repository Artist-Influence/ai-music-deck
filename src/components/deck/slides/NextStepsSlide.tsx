import GlassPanel from '../GlassPanel';
import cloutedLogo from '@/assets/CLOUTED-white.png';
import NetworkVisual from '../NetworkVisual';

const steps = [
  { num: '01', title: 'Quick Kickoff Call', desc: '20 minutes' },
  { num: '02', title: 'Confirm Scope', desc: 'We confirm goals, services, and timeline' },
  { num: '03', title: 'You Send Assets', desc: 'Audio, metadata, handles' },
  { num: '04', title: 'Launch', desc: 'Within 24 to 72 hours depending on services' },
];

const NextStepsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center text-center">
    <style>{`
      @keyframes next-glow-sweep {
        0% { opacity: 0; left: -100%; }
        30% { opacity: 1; }
        100% { opacity: 0; left: 100%; }
      }
      .next-step-card { position: relative; overflow: hidden; }
      .next-step-card::before {
        content: '';
        position: absolute;
        top: 0; left: -100%;
        width: 100%; height: 100%;
        background: linear-gradient(90deg, transparent, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.15), transparent);
        z-index: 1;
        pointer-events: none;
      }
      ${steps.map((_, i) => `
        .next-step-card-${i}::before {
          animation: next-glow-sweep 3s ease-in-out ${i * 0.7}s infinite;
        }
      `).join('')}
    `}</style>
    <div className="absolute top-[10%] left-[30%] w-[600px] h-[500px] rounded-full bg-primary/[0.06] blur-[160px] animate-float-slow" />
    <NetworkVisual className="opacity-[0.06]" nodeCount={30} seed={5} />

    <div className="relative z-10 max-w-[1000px]">
      <h1 className="text-6xl font-bold text-foreground mb-4">If this makes sense,<br />here's how we start.</h1>
      <p className="text-xl text-muted-foreground mb-16">No friction.</p>

      <div className="flex gap-5 mb-16">
        {steps.map((s, i) => (
          <GlassPanel key={i} variant="bright" className={`flex-1 p-6 text-left next-step-card next-step-card-${i}`}>
            <p className="text-primary text-base font-mono mb-3 tracking-widest relative z-10">{s.num}</p>
            <p className="text-xl font-semibold text-foreground mb-2 relative z-10">{s.title}</p>
            <p className="text-lg text-muted-foreground relative z-10">{s.desc}</p>
          </GlassPanel>
        ))}
      </div>

      <GlassPanel variant="subtle" className="mb-12 p-7 max-w-[600px] mx-auto">
        <p className="text-lg text-foreground font-medium mb-2">Jared Rapoza</p>
        <p className="text-lg text-muted-foreground mb-1">jared@clouted.com · 617-875-3248</p>
        <p className="text-lg text-muted-foreground mb-3">www.clouted.com</p>
        <p className="text-lg text-primary italic">"We can turn around a recommended plan within 24 hours."</p>
      </GlassPanel>

      <img src={cloutedLogo} alt="CLOUTED" className="w-56 mx-auto mb-4" />
      <p className="text-xl text-muted-foreground">The growth system for modern music</p>
    </div>
  </div>
);

export default NextStepsSlide;
