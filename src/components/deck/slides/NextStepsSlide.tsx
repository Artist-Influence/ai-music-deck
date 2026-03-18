import GlassPanel from '../GlassPanel';
import aiLogo from '@/assets/ai-logo-last-slide.png';
import NetworkVisual from '../NetworkVisual';

const steps = [
  { num: '01', title: 'Quick Kickoff Call', desc: '20 minutes' },
  { num: '02', title: 'Confirm Scope', desc: 'We confirm goals, services, and timeline' },
  { num: '03', title: 'You Send Assets', desc: 'Audio, metadata, handles' },
  { num: '04', title: 'Launch', desc: 'Within 24 to 72 hours depending on services' },
];

const NextStepsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-5 md:p-12 flex flex-col items-center justify-center text-center">
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
    <div className="hidden md:block">
      <NetworkVisual className="opacity-[0.06]" nodeCount={30} seed={5} />
    </div>

    <div className="relative z-10 max-w-[1400px] w-full">
      <h1 className="text-2xl md:text-7xl font-extrabold text-foreground mb-1 md:mb-2 tracking-tight">Ready to start?</h1>
      <p className="text-sm md:text-xl text-muted-foreground/60 mb-6 md:mb-14 tracking-wide">Four steps. No friction. Let's go.</p>

      <div className="grid grid-cols-2 md:flex gap-3 md:gap-6 mb-8 md:mb-16">
        {steps.map((s, i) => (
          <GlassPanel key={i} variant="bright" className={`flex-1 p-4 md:p-8 text-left next-step-card next-step-card-${i}`}>
            <p className="text-primary text-xs md:text-xl font-mono mb-1 md:mb-3 tracking-widest relative z-10">{s.num}</p>
            <p className="text-sm md:text-2xl font-semibold text-foreground mb-1 md:mb-2 relative z-10">{s.title}</p>
            <p className="text-xs md:text-xl text-muted-foreground relative z-10">{s.desc}</p>
          </GlassPanel>
        ))}
      </div>

      <GlassPanel variant="subtle" className="mb-6 md:mb-12 p-4 md:p-8 max-w-[700px] mx-auto">
        <p className="text-sm md:text-[21px] text-foreground font-medium mb-1">Contact Us</p>
        <p className="text-xs md:text-[19px] text-muted-foreground/80 mb-1 md:mb-2">Artist Influence</p>
        <p className="text-xs md:text-[21px] text-muted-foreground mb-0.5 md:mb-1">jared@artistinfluence.com</p>
        <p className="text-xs md:text-[21px] text-muted-foreground mb-0.5 md:mb-1">jack@artistinfluence.com</p>
        <p className="text-xs md:text-[21px] text-muted-foreground mb-2 md:mb-3">www.artistinfluence.com</p>
        <p className="text-xs md:text-[21px] text-primary italic">"We can turn around a recommended plan within 24 hours."</p>
      </GlassPanel>

      <img src={aiLogo} alt="Artist Influence" className="w-32 md:w-64 mx-auto mb-2 md:mb-3" />
      <p className="text-xs md:text-lg text-muted-foreground/50 tracking-widest uppercase">The growth system for modern music</p>
    </div>
  </div>
);

export default NextStepsSlide;
