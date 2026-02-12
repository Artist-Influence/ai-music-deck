import GlassPanel from '../GlassPanel';

const TheProblemSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-destructive/[0.04] blur-[120px]" />
    <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/[0.05] blur-[100px]" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-10 leading-tight max-w-[1200px]">
        Most music growth is still<br />stitched together by hand.
      </h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-[700px]">
        Even great teams are forced into spreadsheets, one-off vendor relationships, and disconnected campaigns.
      </p>

      <div className="flex gap-8">
        {/* Chaos side */}
        <div className="flex-1 relative">
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 600 400">
            {[
              [80,60], [200,120], [450,80], [120,280], [380,200], [500,320], [300,350], [50,180], [520,150], [250,50],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="4" fill="hsl(0, 84%, 60%)" opacity="0.4" />
                {i > 0 && <line x1={x} y1={y} x2={[80,200,450,120,380,500,300,50,520,250][i-1]} y2={[60,120,80,280,200,320,350,180,150,50][i-1]} stroke="hsl(0, 84%, 60%)" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />}
              </g>
            ))}
          </svg>
          <GlassPanel className="relative z-10 border-destructive/10">
            <p className="text-lg text-primary font-medium mb-4">The reality today</p>
            {['Every release starts from zero', 'Campaign quality varies by who you hire', 'Reporting is late, unclear, or missing', 'You spend money without knowing what moved the needle'].map((item, i) => (
              <p key={i} className="text-base text-muted-foreground py-2 border-b border-white/[0.04] last:border-0">{item}</p>
            ))}
          </GlassPanel>
        </div>

        {/* System side (faded, aspirational) */}
        <div className="flex-1 opacity-40">
          <GlassPanel variant="bright" className="h-full flex items-center justify-center">
            <div className="text-center">
              <svg className="w-24 h-24 mx-auto mb-4 opacity-40" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="20" stroke="hsl(195, 90%, 60%)" strokeWidth="1" fill="none" />
                <circle cx="50" cy="15" r="6" fill="hsl(195, 90%, 60%)" opacity="0.5" />
                <circle cx="80" cy="65" r="6" fill="hsl(195, 90%, 60%)" opacity="0.5" />
                <circle cx="20" cy="65" r="6" fill="hsl(195, 90%, 60%)" opacity="0.5" />
                <line x1="50" y1="30" x2="50" y2="21" stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" />
                <line x1="67" y1="60" x2="74" y2="62" stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" />
                <line x1="33" y1="60" x2="26" y2="62" stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" />
              </svg>
              <p className="text-xl text-primary">A better way exists →</p>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  </div>
);

export default TheProblemSlide;
