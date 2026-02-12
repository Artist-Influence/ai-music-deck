const DiscoveryVisualizer = () => {
  // Concentric rings representing algorithmic reach expanding outward
  const rings = [
    { r: 30, opacity: 0.5, delay: 0 },
    { r: 60, opacity: 0.35, delay: 0.8 },
    { r: 95, opacity: 0.22, delay: 1.6 },
    { r: 135, opacity: 0.12, delay: 2.4 },
    { r: 175, opacity: 0.06, delay: 3.2 },
  ];

  // Platform / community nodes scattered at various distances
  const nodes = [
    { angle: 30, dist: 70, size: 4, delay: 0.3 },
    { angle: 85, dist: 110, size: 3.5, delay: 0.9 },
    { angle: 140, dist: 80, size: 3, delay: 1.5 },
    { angle: 195, dist: 145, size: 4.5, delay: 2.1 },
    { angle: 240, dist: 100, size: 3, delay: 0.6 },
    { angle: 290, dist: 130, size: 3.5, delay: 1.2 },
    { angle: 340, dist: 155, size: 2.5, delay: 2.7 },
    { angle: 60, dist: 160, size: 3, delay: 1.8 },
    { angle: 165, dist: 165, size: 2.5, delay: 3.0 },
    { angle: 320, dist: 90, size: 4, delay: 0.4 },
  ];

  const cx = 200;
  const cy = 200;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-[420px] max-h-[420px]">
        <defs>
          <radialGradient id="discoverGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(195, 90%, 60%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(195, 90%, 60%)" stopOpacity="0" />
          </radialGradient>
          <style>{`
            @keyframes ring-expand {
              0% { r: var(--r-start); opacity: var(--o-start); }
              100% { r: var(--r-end); opacity: 0; }
            }
            @keyframes signal-pulse {
              0%, 100% { opacity: 0.15; }
              50% { opacity: 0.6; }
            }
            @keyframes node-glow {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 1; }
            }
            @keyframes center-beat {
              0%, 100% { r: 10; opacity: 0.9; }
              50% { r: 13; opacity: 1; }
            }
            @keyframes trail {
              0% { stroke-dashoffset: 60; opacity: 0.3; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
          `}</style>
        </defs>

        {/* Background glow */}
        <circle cx={cx} cy={cy} r="80" fill="url(#discoverGlow)" />

        {/* Expanding signal rings from center */}
        {rings.map((ring, i) => (
          <circle key={`ring-${i}`} cx={cx} cy={cy} r={ring.r}
            fill="none" stroke="hsl(195, 90%, 60%)" strokeWidth="0.8" opacity="0">
            <animate attributeName="r" from={ring.r * 0.3} to={ring.r} dur="4s"
              begin={`${ring.delay}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" from={ring.opacity} to="0" dur="4s"
              begin={`${ring.delay}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Signal lines from center to nodes */}
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = cx + Math.cos(rad) * node.dist;
          const ny = cy + Math.sin(rad) * node.dist;
          return (
            <line key={`signal-${i}`} x1={cx} y1={cy} x2={nx} y2={ny}
              stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" opacity="0.08">
              <animate attributeName="opacity" values="0.04;0.2;0.04" dur={`${3 + (i % 3)}s`}
                begin={`${node.delay}s`} repeatCount="indefinite" />
            </line>
          );
        })}

        {/* Community / platform nodes */}
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = cx + Math.cos(rad) * node.dist;
          const ny = cy + Math.sin(rad) * node.dist;
          return (
            <g key={`node-${i}`}>
              {/* Glow halo */}
              <circle cx={nx} cy={ny} r={node.size * 3} fill="hsl(195, 90%, 60%)" opacity="0">
                <animate attributeName="opacity" values="0;0.08;0" dur={`${3.5 + (i % 2)}s`}
                  begin={`${node.delay}s`} repeatCount="indefinite" />
              </circle>
              {/* Node core */}
              <circle cx={nx} cy={ny} r={node.size} fill="hsl(195, 90%, 60%)" opacity="0.4">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${2.5 + (i % 3) * 0.5}s`}
                  begin={`${node.delay}s`} repeatCount="indefinite" />
              </circle>
              {/* Inner bright dot */}
              <circle cx={nx} cy={ny} r={node.size * 0.4} fill="hsl(195, 90%, 80%)" opacity="0.8" />
            </g>
          );
        })}

        {/* Center node — the song */}
        <circle cx={cx} cy={cy} r="18" fill="hsl(195, 90%, 60%)" opacity="0.15" />
        <circle cx={cx} cy={cy} r="10" fill="hsl(195, 90%, 60%)" opacity="0.9">
          <animate attributeName="r" values="10;13;10" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="4" fill="hsl(222, 47%, 6%)" opacity="0.7" />

        {/* Ambient outer particles */}
        {Array.from({ length: 16 }, (_, i) => {
          const a = (i * 22.5 * Math.PI) / 180;
          const d = 170 + (i % 4) * 8;
          return (
            <circle key={`p-${i}`} cx={cx + Math.cos(a) * d} cy={cy + Math.sin(a) * d}
              r={0.6 + (i % 3) * 0.4} fill="hsl(195, 90%, 60%)" opacity="0.1">
              <animate attributeName="opacity" values="0.05;0.25;0.05" dur={`${4 + (i % 3)}s`}
                begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </circle>
          );
        })}
      </svg>
    </div>
  );
};

export default DiscoveryVisualizer;
