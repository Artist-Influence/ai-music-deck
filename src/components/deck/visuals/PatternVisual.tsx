import { cn } from '@/lib/utils';

interface PatternVisualProps {
  className?: string;
}

/**
 * Goyard-style monogram pattern: dense, uniform, edge-to-edge tile.
 * Stylized "AI" monogram interlocked with diamond + dot lattice.
 */
const PatternVisual = ({ className }: PatternVisualProps) => (
  <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
    {/* Faint ambient primary wash for depth */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-primary/[0.035] blur-[200px]" />

    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="ai-monogram"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(8)"
        >
          {/* Center monogram: stylized A + I interlocked */}
          <g
            stroke="hsl(var(--foreground))"
            strokeOpacity="0.09"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* A: triangle */}
            <path d="M 60 38 L 44 78 L 76 78 Z" />
            {/* A crossbar */}
            <path d="M 50 66 L 70 66" />
            {/* I: vertical with serifs, offset right */}
            <path d="M 86 42 L 86 74" />
            <path d="M 80 42 L 92 42" />
            <path d="M 80 74 L 92 74" />
          </g>

          {/* Diamond accent in primary tint, offset to break grid feel */}
          <g
            stroke="hsl(var(--primary))"
            strokeOpacity="0.18"
            strokeWidth="1"
            fill="none"
          >
            <path d="M 20 20 L 30 10 L 40 20 L 30 30 Z" />
          </g>

          {/* Corner dots — lattice anchors */}
          <g fill="hsl(var(--foreground))" fillOpacity="0.08">
            <circle cx="0" cy="0" r="1.5" />
            <circle cx="120" cy="0" r="1.5" />
            <circle cx="0" cy="120" r="1.5" />
            <circle cx="120" cy="120" r="1.5" />
            <circle cx="60" cy="120" r="1" />
          </g>

          {/* Tiny primary dot accent */}
          <circle cx="100" cy="100" r="1.6" fill="hsl(var(--primary))" fillOpacity="0.35" />
        </pattern>
      </defs>

      <rect width="1920" height="1080" fill="url(#ai-monogram)" />
    </svg>
  </div>
);

export default PatternVisual;
