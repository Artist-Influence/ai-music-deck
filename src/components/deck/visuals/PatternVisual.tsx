import { cn } from '@/lib/utils';

interface PatternVisualProps {
  className?: string;
}

/**
 * Symmetric, tiled diagonal cross-hatch with mirrored corner accents.
 * Designed for case-study slides where a calm, patterned backdrop is needed.
 */
const PatternVisual = ({ className }: PatternVisualProps) => (
  <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
    {/* Symmetric ambient glows */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full bg-primary/[0.04] blur-[180px]" />

    <svg
      className="absolute inset-0 w-full h-full hidden md:block"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Diagonal cross-hatch tile */}
        <pattern id="pat-hatch" width="56" height="56" patternUnits="userSpaceOnUse">
          <path
            d="M 0 56 L 56 0"
            stroke="hsl(var(--foreground))"
            strokeOpacity="0.05"
            strokeWidth="1"
          />
          <path
            d="M 0 0 L 56 56"
            stroke="hsl(var(--foreground))"
            strokeOpacity="0.05"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="pat-mask" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0.9" />
        </radialGradient>
        <mask id="pat-fade">
          <rect width="1920" height="1080" fill="url(#pat-mask)" />
        </mask>

        {/* Corner plus mark */}
        <symbol id="pat-plus" viewBox="-12 -12 24 24" overflow="visible">
          <line x1="-10" y1="0" x2="10" y2="0" stroke="hsl(var(--primary))" strokeOpacity="0.55" strokeWidth="1.2" />
          <line x1="0" y1="-10" x2="0" y2="10" stroke="hsl(var(--primary))" strokeOpacity="0.55" strokeWidth="1.2" />
        </symbol>
      </defs>

      <rect width="1920" height="1080" fill="url(#pat-hatch)" mask="url(#pat-fade)" />

      {/* Mirrored corner plus accents — perfectly symmetric */}
      {[
        { x: 120, y: 120 },
        { x: 1800, y: 120 },
        { x: 120, y: 960 },
        { x: 1800, y: 960 },
        { x: 320, y: 320 },
        { x: 1600, y: 320 },
        { x: 320, y: 760 },
        { x: 1600, y: 760 },
      ].map((p, i) => (
        <use key={i} href="#pat-plus" x={p.x} y={p.y}>
          <animate
            attributeName="opacity"
            values="0.4;0.85;0.4"
            dur="6s"
            begin={`${(i % 4) * 0.7}s`}
            repeatCount="indefinite"
          />
        </use>
      ))}

      {/* Centered hairline frame for structure */}
      <rect
        x="180"
        y="120"
        width="1560"
        height="840"
        rx="16"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeOpacity="0.08"
        strokeDasharray="4 8"
      />
    </svg>
  </div>
);

export default PatternVisual;
