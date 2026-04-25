import { cn } from '@/lib/utils';
import logomark from '@/assets/ai-logomark-white.png';

interface PatternVisualProps {
  className?: string;
  variant?: 'default' | 'mirrored' | 'corner';
}

/**
 * Goyard-style monogram backdrop using the Artist Influence "AI" logomark.
 * Half-drop staggered lattice with two-tone foil-stamp effect (white over red
 * hairline offset), champagne shimmer wave, canvas grain, aurora warmth, and
 * radial mask for legibility.
 */
const PatternVisual = ({ className, variant = 'default' }: PatternVisualProps) => {
  const rotation = variant === 'mirrored' ? -10 : variant === 'corner' ? 14 : 10;

  // Tile geometry — half-drop staggered lattice
  const tileW = 180;
  const tileH = 220;
  const markW = 70;
  const markH = 86;
  const cx = (tileW - markW) / 2;
  const cy = (tileH - markH) / 2;

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {/* Aurora wash blobs — slow drift for ambient warmth */}
      <div className="absolute top-[12%] left-[8%] w-[720px] h-[720px] rounded-full bg-primary/[0.07] blur-[180px] animate-aurora-drift" />
      <div className="absolute bottom-[8%] right-[4%] w-[640px] h-[640px] rounded-full bg-primary/[0.05] blur-[160px] animate-aurora-drift-rev" />

      {/* Drifting monogram lattice */}
      <div
        className="absolute inset-0 animate-pattern-drift"
        style={{
          maskImage:
            'radial-gradient(ellipse 95% 85% at 50% 50%, black 0%, rgba(0,0,0,0.88) 35%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.25) 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 85% at 50% 50%, black 0%, rgba(0,0,0,0.88) 35%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.25) 100%)',
        }}
      >
        <svg
          className="absolute inset-0 w-[calc(100%+240px)] h-[calc(100%+240px)] -left-[120px] -top-[120px]"
          viewBox="0 0 2160 1320"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Subtle canvas grain to read as printed/foil-stamped fabric */}
            <filter id="ai-grain" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" />
              <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0" />
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>

            {/* Half-drop tile */}
            <pattern
              id="ai-monogram-tile"
              width={tileW}
              height={tileH}
              patternUnits="userSpaceOnUse"
              patternTransform={`rotate(${rotation})`}
            >
              {/* Row A — primary mark */}
              {/* red offset hairline (foil under-shadow) */}
              <image
                href={logomark}
                x={cx + 0.8}
                y={cy + 0.8}
                width={markW}
                height={markH}
                opacity="0.32"
                style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(5800%) hue-rotate(348deg) brightness(95%) contrast(105%)' }}
              />
              {/* white mark */}
              <image
                href={logomark}
                x={cx}
                y={cy}
                width={markW}
                height={markH}
                opacity="0.16"
              />

              {/* Row B — half-drop staggered (offset by half tile) */}
              <image
                href={logomark}
                x={cx + tileW / 2 + 0.8}
                y={cy - tileH / 2 + 0.8}
                width={markW}
                height={markH}
                opacity="0.28"
                style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(5800%) hue-rotate(348deg) brightness(95%) contrast(105%)' }}
              />
              <image
                href={logomark}
                x={cx + tileW / 2}
                y={cy - tileH / 2}
                width={markW}
                height={markH}
                opacity="0.14"
              />
              <image
                href={logomark}
                x={cx + tileW / 2 + 0.8}
                y={cy + tileH / 2 + 0.8}
                width={markW}
                height={markH}
                opacity="0.28"
                style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(5800%) hue-rotate(348deg) brightness(95%) contrast(105%)' }}
              />
              <image
                href={logomark}
                x={cx + tileW / 2}
                y={cy + tileH / 2}
                width={markW}
                height={markH}
                opacity="0.14"
              />

              {/* Diamond accents in primary tint at lattice intersections */}
              <g
                stroke="hsl(var(--primary))"
                strokeOpacity="0.28"
                strokeWidth="1"
                fill="none"
              >
                <path d={`M 0 ${tileH / 2} L 8 ${tileH / 2 - 8} L 16 ${tileH / 2} L 8 ${tileH / 2 + 8} Z`} />
                <path d={`M ${tileW} ${tileH / 2} L ${tileW - 8} ${tileH / 2 - 8} L ${tileW - 16} ${tileH / 2} L ${tileW - 8} ${tileH / 2 + 8} Z`} />
              </g>

              {/* Hollow inner diamonds for refinement */}
              <path
                d={`M ${tileW / 2 - 5} 6 L ${tileW / 2} 1 L ${tileW / 2 + 5} 6 L ${tileW / 2} 11 Z`}
                stroke="hsl(var(--foreground))"
                strokeOpacity="0.10"
                strokeWidth="0.7"
                fill="none"
              />

              {/* Anchor dots — lattice nodes */}
              <g fill="hsl(var(--foreground))" fillOpacity="0.10">
                <circle cx="0" cy="0" r="1.3" />
                <circle cx={tileW} cy="0" r="1.3" />
                <circle cx="0" cy={tileH} r="1.3" />
                <circle cx={tileW} cy={tileH} r="1.3" />
              </g>
              <circle cx={tileW / 2} cy={tileH / 2} r="1.6" fill="hsl(var(--primary))" fillOpacity="0.42" />
            </pattern>
          </defs>

          <rect width="2160" height="1320" fill="url(#ai-monogram-tile)" />
          {/* Grain overlay — pulls the whole pattern into a printed-canvas feel */}
          <rect width="2160" height="1320" fill="hsl(var(--foreground))" filter="url(#ai-grain)" opacity="0.5" />
        </svg>
      </div>

      {/* Champagne shimmer wash — broad, soft luxury highlight (no visible band) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -inset-y-1/2 -left-1/2 w-[140%] h-[200%] animate-shimmer-sweep"
          style={{
            background:
              'linear-gradient(105deg, transparent 0%, transparent 25%, hsl(40 55% 80% / 0.05) 50%, transparent 75%, transparent 100%)',
            mixBlendMode: 'soft-light',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Vignette to anchor edges and protect text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 105% 100% at 50% 50%, transparent 45%, hsl(var(--background) / 0.45) 100%)',
        }}
      />
    </div>
  );
};

export default PatternVisual;
