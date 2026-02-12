import GlassPanel from '../GlassPanel';

const weNeed = [
  'Audio links, clean metadata, and posting handles',
  'Any brand safety rules or hard "no" topics',
  'A clear primary goal per campaign (streaming, awareness, ticketing, etc.)',
];

const dontExpect = [
  'One viral video to carry the whole release',
  'Perfect creative taste from volume-based tactics',
  'Results without iteration — if the market says "not yet"',
];

const ExpectationsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute top-[20%] right-[30%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

    <div className="relative z-10 w-full max-w-[1400px]">
      <h1 className="text-6xl font-bold text-foreground mb-4">We move fast, but<br />we don't do chaos.</h1>
      <p className="text-xl text-muted-foreground mb-16">To keep campaigns clean and effective, we align on a few basics upfront.</p>

      <div className="grid grid-cols-2 gap-8 max-w-[1200px]">
        <GlassPanel variant="bright" className="p-10">
          <p className="text-xl font-semibold text-primary mb-8">We need from you</p>
          {weNeed.map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-3 border-b border-white/[0.06] last:border-0">
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <p className="text-lg text-foreground/80">{item}</p>
            </div>
          ))}
        </GlassPanel>

        <GlassPanel variant="subtle" className="p-10">
          <p className="text-xl font-semibold text-muted-foreground mb-8">What you should not expect</p>
          {dontExpect.map((item, i) => (
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

export default ExpectationsSlide;
