import GlassPanel from '../GlassPanel';
import NetworkVisual from '../NetworkVisual';

const TheShiftSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[5%] right-[5%] w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-[150px] animate-float" />
    <NetworkVisual className="opacity-10" nodeCount={60} seed={2} />

    <div className="relative z-10 max-w-[1400px]">
      <h1 className="text-7xl font-bold text-foreground mb-10 leading-tight">Music discovery<br />has changed.</h1>
      <GlassPanel className="max-w-[800px] mb-12">
        <p className="text-2xl text-foreground/80 leading-relaxed mb-2">
          People don't "find" songs anymore. Songs find people.
        </p>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Discovery now happens when your track shows up repeatedly, across platforms, across communities, across formats, until the algorithm can't ignore it.
        </p>
      </GlassPanel>

      <p className="text-lg text-primary font-medium mb-6 tracking-wider uppercase">What wins today</p>
      <div className="grid grid-cols-4 gap-4 max-w-[1200px]">
        {[
          'Volume of real short-form creation',
          'Consistent exposure across audiences',
          'Community validation (pages, curators, creators)',
          'Smart amplification that boosts the right signals',
        ].map((item, i) => (
          <GlassPanel key={i} variant="subtle" className="p-5">
            <p className="text-base text-foreground/70">{item}</p>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default TheShiftSlide;
