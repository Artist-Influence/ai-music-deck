import cloutedLogo from '@/assets/CLOUTED-white.png';
import NetworkVisual from '../NetworkVisual';

const CoverSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden flex flex-col items-center justify-center">
    {/* Glow orbs */}
    <div className="absolute top-[5%] right-[10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px] animate-float" />
    <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-accent/[0.12] blur-[120px] animate-float-slow" />
    <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-primary/[0.08] blur-[130px] animate-float" />

    <NetworkVisual className="opacity-25" nodeCount={80} />

    {/* Decorative ring */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1920 1080" fill="none">
      <circle cx="960" cy="480" r="320" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.08" className="animate-[spin_60s_linear_infinite]" strokeDasharray="40 20" />
      <circle cx="960" cy="480" r="420" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.05" className="animate-[spin_90s_linear_infinite_reverse]" strokeDasharray="60 30" />
    </svg>

    <div className="relative z-10 text-center">
      <img src={cloutedLogo} alt="Clouted" className="w-[480px] mx-auto mb-6" />
      <p className="text-5xl font-light text-primary mb-6 tracking-wide">The growth system for modern music and artists</p>
      <p className="text-3xl text-foreground">Driving momentum across short-form, streaming, and culture.</p>
    </div>

    <p className="absolute bottom-16 text-sm text-muted-foreground/40 tracking-[0.3em] uppercase">
      Confidential · 2026
    </p>
  </div>
);

export default CoverSlide;
