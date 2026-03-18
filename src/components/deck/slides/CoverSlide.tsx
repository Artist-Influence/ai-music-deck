import aiLogo from '@/assets/artist-influence-logo.png';
import NetworkVisual from '../NetworkVisual';

const CoverSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden flex flex-col items-center justify-center pb-0 md:pb-[10%]">
    {/* Glow orbs */}
    <div className="absolute top-[5%] right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-primary/20 blur-[150px] animate-float" />
    <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] md:w-[500px] md:h-[500px] rounded-full bg-accent/[0.12] blur-[120px] animate-float-slow" />

    <div className="hidden md:block">
      <NetworkVisual className="opacity-25" nodeCount={80} />
    </div>

    {/* Decorative ring — desktop only */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 1920 1080" fill="none">
      <circle cx="960" cy="480" r="320" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.08" className="animate-[spin_60s_linear_infinite]" strokeDasharray="40 20" />
      <circle cx="960" cy="480" r="420" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.05" className="animate-[spin_90s_linear_infinite_reverse]" strokeDasharray="60 30" />
    </svg>

    <div className="relative z-10 text-center px-5 md:px-0">
      <div className="w-[280px] md:w-[800px] mx-auto overflow-hidden" style={{ marginBottom: '-2rem' }}>
        <img src={aiLogo} alt="Artist Influence" className="w-full" style={{ marginBottom: '-25%' }} />
      </div>
      <p className="text-xl md:text-5xl font-light text-primary mb-4 md:mb-6 tracking-wide">The growth system for modern music and artists</p>
      <p className="text-base md:text-3xl text-foreground">Driving momentum across short-form, streaming, and culture.</p>
    </div>

    <p className="absolute bottom-6 md:bottom-16 text-xs md:text-base text-muted-foreground/40 tracking-[0.3em] uppercase">
      Confidential · 2026
    </p>
  </div>
);

export default CoverSlide;
