import GlassPanel from '../GlassPanel';

const weNeed = [
  'Final assets delivered on time',
  'Clear release timeline',
  'Responsive communication',
  'Trust in the process',
];

const dontExpect = [
  'Guaranteed viral moments',
  'Overnight playlist placements',
  'Passive, zero-input campaigns',
  'One-size-fits-all strategies',
];

const ExpectationsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[20%] right-[30%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-4">We move fast, but<br />we don't do chaos.</h1>
      <p className="text-xl text-muted-foreground mb-16">Setting clear expectations upfront makes everything work better.</p>

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
          <p className="text-xl font-semibold text-muted-foreground mb-8">What not to expect</p>
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
