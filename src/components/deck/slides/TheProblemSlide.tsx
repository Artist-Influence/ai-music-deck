import GlassPanel from '../GlassPanel';

const TheProblemSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-destructive/[0.04] blur-[120px]" />
    <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/[0.05] blur-[100px]" />

    <div className="relative z-10 max-w-[1000px]">
      <h1 className="text-6xl font-bold text-foreground mb-10 leading-tight">
        Most music growth is still<br />stitched together by hand.
      </h1>
      <p className="text-xl text-muted-foreground mb-12">
        Even great teams are forced into spreadsheets, one-off vendor relationships, and disconnected campaigns.
      </p>
      <p className="text-lg text-primary font-medium mb-6 tracking-wider uppercase">That creates the same results over and over</p>

      <GlassPanel className="border-destructive/10">
        {[
          'Every release starts from zero',
          'Campaign quality varies by who you hire',
          'Reporting is late, unclear, or missing',
          'You spend money without knowing what actually moved the needle',
        ].map((item, i) => (
          <p key={i} className="text-base text-muted-foreground py-2 border-b border-white/[0.04] last:border-0">{item}</p>
        ))}
      </GlassPanel>
    </div>
  </div>
);

export default TheProblemSlide;
