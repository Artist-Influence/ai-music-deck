import { cn } from '@/lib/utils';

interface PatternVisualProps {
  className?: string;
  variant?: 'default' | 'mirrored' | 'corner';
}

/**
 * Goyard-style monogram pattern: dense, uniform, edge-to-edge tile
 * with slow drift, aurora wash, and shimmer sweep for dynamism.
 * Stylized "AI" monogram interlocked with diamond + dot lattice.
 */
const PatternVisual = ({ className, variant = 'default' }: PatternVisualProps) => {
  const rotation = variant === 'mirrored' ? -8 : variant === 'corner' ? 12 : 8;

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {/* Aurora wash blobs — slow drift for ambient warmth */}
      <div className="absolute top-[15%] left-[10%] w-[700px] h-[700px] rounded-full bg-primary/[0.06] blur-[180px] animate-aurora-drift" />
      <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-primary/[0.045] blur-[160px] animate-aurora-drift-rev" />

      {/* Drifting monogram pattern layer with radial mask for legibility */}
      <div
        className="absolute inset-0 animate-pattern-drift"
        style={{
          maskImage:
            'radial-gradient(ellipse 90% 80% at 50% 50%, black 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.3) 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 80% at 50% 50%, black 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.3) 100%)',
        }}
      >
        <svg
          className="absolute inset-0 w-[calc(100%+200px)] h-[calc(100%+200px)] -left-[100px] -top-[100px]"
          viewBox="0 0 2120 1280"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="ai-monogram"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform={`rotate(${rotation})`}
            >
              {/* Center monogram: stylized A + I interlocked */}
              <g
                stroke="hsl(var(--foreground))"
                strokeOpacity="0.11"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* A: triangle */}
                <path d="M 50 30 L 34 68 L 66 68 Z" />
                {/* A crossbar */}
                <path d="M 40 56 L 60 56" />
                {/* I: vertical with serifs, offset right */}
                <path d="M 76 34 L 76 64" />
                <path d="M 70 34 L 82 34" />
                <path d="M 70 64 L 82 64" />
              </g>

              {/* Diamond accent in primary tint */}
              <g
                stroke="hsl(var(--primary))"
                strokeOpacity="0.22"
                strokeWidth="1"
                fill="none"
              >
                <path d="M 18 18 L 28 8 L 38 18 L 28 28 Z" />
              </g>

              {/* Inner secondary diamond, hollow */}
              <path
                d="M 22 22 L 28 16 L 34 22 L 28 28 Z"
                stroke="hsl(var(--primary))"
                strokeOpacity="0.12"
                strokeWidth="0.7"
                fill="none"
              />

              {/* Corner dots — lattice anchors */}
              <g fill="hsl(var(--foreground))" fillOpacity="0.09">
                <circle cx="0" cy="0" r="1.4" />
                <circle cx="100" cy="0" r="1.4" />
                <circle cx="0" cy="100" r="1.4" />
                <circle cx="100" cy="100" r="1.4" />
                <circle cx="50" cy="100" r="0.9" />
                <circle cx="100" cy="50" r="0.9" />
              </g>

              {/* Tiny primary dot accents */}
              <circle cx="88" cy="88" r="1.5" fill="hsl(var(--primary))" fillOpacity="0.4" />
              <circle cx="12" cy="78" r="1.1" fill="hsl(var(--primary))" fillOpacity="0.25" />
            </pattern>
          </defs>

          <rect width="2120" height="1280" fill="url(#ai-monogram)" />
        </svg>
      </div>

      {/* Diagonal shimmer sweep — slow highlight pass */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -inset-y-1/2 -left-1/2 w-[60%] h-[200%] animate-shimmer-sweep"
          style={{
            background:
              'linear-gradient(115deg, transparent 0%, transparent 35%, hsl(var(--primary) / 0.06) 48%, hsl(var(--foreground) / 0.04) 52%, transparent 65%, transparent 100%)',
          }}
        />
      </div>

      {/* Subtle vignette to anchor edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, hsl(var(--background) / 0.35) 100%)',
        }}
      />
    </div>
  );
};

export default PatternVisual;
