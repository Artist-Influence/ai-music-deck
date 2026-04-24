import { cn } from '@/lib/utils';

interface InfoVisualProps {
  className?: string;
}

const ticks = [
  { y: 220, dur: '7s', delay: '0s' },
  { y: 540, dur: '9s', delay: '1.5s' },
  { y: 820, dur: '11s', delay: '3s' },
];

const InfoVisual = ({ className }: InfoVisualProps) => (
  <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
    {/* Soft corner glows */}
    <div className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-primary/[0.06] blur-[140px]" />
    <div className="absolute -bottom-32 -left-24 w-[360px] h-[360px] rounded-full bg-primary/[0.04] blur-[120px]" />

    {/* Blueprint grid + traveling data ticks */}
    <svg
      className="absolute inset-0 w-full h-full hidden md:block"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="info-grid" width="64" height="64" patternUnits="userSpaceOnUse">
          <path
            d="M 64 0 L 0 0 0 64"
            fill="none"
            stroke="hsl(var(--foreground))"
            strokeOpacity="0.05"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="info-grid-mask" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="info-grid-fade">
          <rect width="1920" height="1080" fill="url(#info-grid-mask)" />
        </mask>
        <linearGradient id="info-tick" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1920" height="1080" fill="url(#info-grid)" mask="url(#info-grid-fade)" />

      {ticks.map((t, i) => (
        <rect
          key={i}
          x="-220"
          y={t.y}
          width="220"
          height="1.5"
          fill="url(#info-tick)"
        >
          <animate
            attributeName="x"
            from="-220"
            to="1920"
            dur={t.dur}
            begin={t.delay}
            repeatCount="indefinite"
          />
        </rect>
      ))}
    </svg>
  </div>
);

export default InfoVisual;
