import GlassPanel from '../GlassPanel';
import cloutedLogo from '@/assets/CLOUTED-white.png';
import NetworkVisual from '../NetworkVisual';

const CoverSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden flex flex-col items-center justify-center">
    <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px] animate-float" />
    <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px] animate-float-slow" />
    <NetworkVisual className="opacity-15" nodeCount={50} />

    <div className="relative z-10 text-center">
      <img src={cloutedLogo} alt="Clouted" className="w-[400px] mx-auto mb-6" />
      <p className="text-4xl font-light text-primary mb-16 tracking-wide">The growth system for modern music</p>
      <GlassPanel className="max-w-[700px] mx-auto">
        <p className="text-2xl text-foreground/80 leading-relaxed">
          Turning songs into momentum across short-form, streaming, and culture.
        </p>
        <p className="text-lg text-muted-foreground mt-4">
          Built for teams that want outcomes, not &ldquo;ideas.&rdquo;
        </p>
      </GlassPanel>
    </div>

    <p className="absolute bottom-16 text-sm text-muted-foreground/40 tracking-[0.3em] uppercase">
      Confidential · February 2026
    </p>
  </div>
);

export default CoverSlide;
