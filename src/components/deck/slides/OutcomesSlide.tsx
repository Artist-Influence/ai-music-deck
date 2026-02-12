import GlassPanel from '../GlassPanel';

const metrics = [
  { value: '5M+', label: 'Monthly views generated' },
  { value: '200+', label: 'Clips per campaign' },
  { value: '3–5×', label: 'Streaming correlation lift' },
  { value: '<14d', label: 'Sound trending timeline' },
];

const OutcomesSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute bottom-[5%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[140px] animate-float-slow" />

    {/* Momentum curve */}
    <svg className="absolute right-0 bottom-0 w-[900px] h-[500px] opacity-[0.12]" viewBox="0 0 900 500" fill="none">
      <defs>
        <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(195, 90%, 60%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(195, 90%, 60%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M 0 450 Q 200 420 400 350 Q 600 200 800 50 L 900 20" stroke="hsl(195, 90%, 60%)" strokeWidth="2" fill="none" />
      <path d="M 0 450 Q 200 420 400 350 Q 600 200 800 50 L 900 20 L 900 500 L 0 500 Z" fill="url(#curveFill)" />
      {/* Signal dots along curve */}
      {[[200, 420], [400, 350], [550, 280], [650, 200], [750, 100]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="hsl(195, 90%, 60%)" opacity={0.4 + i * 0.12} />
      ))}
    </svg>

    <div className="relative z-10">
      <h1 className="text-7xl font-bold text-foreground mb-4">Outcomes we aim for</h1>
      <p className="text-xl text-muted-foreground mb-16">Measurable, progressive, system-driven results.</p>

      <div className="grid grid-cols-4 gap-6 max-w-[1300px]">
        {metrics.map((m, i) => (
          <GlassPanel key={i} variant="bright" className="text-center p-8">
            <p className="text-5xl font-bold text-primary mb-3">{m.value}</p>
            <p className="text-sm text-muted-foreground">{m.label}</p>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default OutcomesSlide;
