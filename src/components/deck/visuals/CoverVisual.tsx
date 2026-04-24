import { cn } from '@/lib/utils';

interface CoverVisualProps {
  className?: string;
}

// Deterministic pseudo-random for stable particle positions
const seeded = (i: number) => {
  const x = Math.sin(i * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

const particles = Array.from({ length: 28 }, (_, i) => ({
  cx: seeded(i + 1) * 1920,
  cy: seeded(i + 17) * 1080,
  r: 1 + seeded(i + 31) * 1.5,
  delay: seeded(i + 53) * 4,
  dur: 3 + seeded(i + 71) * 3,
}));

const CoverVisual = ({ className }: CoverVisualProps) => (
  <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
    {/* Floating blurred orbs */}
    <div className="absolute top-[8%] right-[10%] w-[280px] h-[280px] md:w-[560px] md:h-[560px] rounded-full bg-primary/[0.18] blur-[140px] animate-float" />
    <div className="absolute bottom-[8%] left-[6%] w-[220px] h-[220px] md:w-[460px] md:h-[460px] rounded-full bg-accent/[0.10] blur-[120px] animate-float-slow" />

    {/* Concentric dashed rings */}
    <svg
      className="absolute inset-0 w-full h-full hidden md:block"
      viewBox="0 0 1920 1080"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle
        cx="960"
        cy="540"
        r="320"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        opacity="0.10"
        strokeDasharray="40 20"
        className="origin-center"
        style={{ animation: 'spin 60s linear infinite', transformOrigin: '960px 540px' }}
      />
      <circle
        cx="960"
        cy="540"
        r="440"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        opacity="0.06"
        strokeDasharray="60 30"
        style={{ animation: 'spin 90s linear infinite reverse', transformOrigin: '960px 540px' }}
      />

      {/* Pulse particles */}
      {particles.map((p, i) => (
        <circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill="hsl(var(--primary))"
          opacity="0.6"
        >
          <animate
            attributeName="opacity"
            values="0.15;0.85;0.15"
            dur={`${p.dur}s`}
            begin={`${p.delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  </div>
);

export default CoverVisual;
