const FanpageVisualizer = () => {
  const pages = [
    { angle: 0, dist: 120, delay: 0 },
    { angle: 51, dist: 105, delay: 0.6 },
    { angle: 103, dist: 135, delay: 1.2 },
    { angle: 154, dist: 110, delay: 1.8 },
    { angle: 206, dist: 130, delay: 2.4 },
    { angle: 257, dist: 115, delay: 3.0 },
    { angle: 309, dist: 125, delay: 3.6 },
  ];

  const cx = 200;
  const cy = 200;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-[400px] max-h-[400px]">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(195, 90%, 60%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(195, 90%, 60%)" stopOpacity="0" />
          </radialGradient>
          <style>{`
            @keyframes orbit {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes pulse-hub {
              0%, 100% { r: 12; opacity: 0.9; }
              50% { r: 14; opacity: 1; }
            }
            @keyframes ripple {
              0% { r: 6; opacity: 0.5; }
              100% { r: 40; opacity: 0; }
            }
            @keyframes particle-drift {
              0% { opacity: 0.6; }
              100% { opacity: 0; transform: translate(var(--dx), var(--dy)); }
            }
            .orbit-group { animation: orbit 75s linear infinite; transform-origin: ${cx}px ${cy}px; }
            .orbit-group-reverse { animation: orbit 90s linear infinite reverse; transform-origin: ${cx}px ${cy}px; }
            .hub-circle { animation: pulse-hub 4s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Hub glow */}
        <circle cx={cx} cy={cy} r="60" fill="url(#hubGlow)" />

        {/* Connection lines - in orbiting group */}
        <g className="orbit-group" opacity="0.12">
          {pages.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            const px = cx + Math.cos(rad) * p.dist;
            const py = cy + Math.sin(rad) * p.dist;
            return (
              <line key={`line-${i}`} x1={cx} y1={cy} x2={px} y2={py}
                stroke="hsl(195, 90%, 60%)" strokeWidth="0.8" />
            );
          })}
        </g>

        {/* Central hub */}
        <circle cx={cx} cy={cy} r="12" fill="hsl(195, 90%, 60%)" opacity="0.9" className="hub-circle" />
        <circle cx={cx} cy={cy} r="5" fill="hsl(222, 47%, 6%)" opacity="0.8" />

        {/* Orbiting fan page nodes */}
        <g className="orbit-group">
          {pages.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            const px = cx + Math.cos(rad) * p.dist;
            const py = cy + Math.sin(rad) * p.dist;
            return (
              <g key={`page-${i}`}>
                {/* Ripple rings */}
                {[0, 1].map((r) => (
                  <circle key={`ripple-${i}-${r}`} cx={px} cy={py} r="6"
                    fill="none" stroke="hsl(195, 90%, 60%)" strokeWidth="0.6"
                    opacity="0">
                    <animate attributeName="r" from="6" to="40" dur="3.5s"
                      begin={`${p.delay + r * 1.75}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.45" to="0" dur="3.5s"
                      begin={`${p.delay + r * 1.75}s`} repeatCount="indefinite" />
                  </circle>
                ))}
                {/* Node */}
                <circle cx={px} cy={py} r="5" fill="hsl(195, 90%, 60%)" opacity="0.7" />
                <circle cx={px} cy={py} r="2.5" fill="hsl(195, 90%, 60%)" opacity="1" />
              </g>
            );
          })}
        </g>

        {/* Outer ambient particles */}
        {Array.from({ length: 20 }, (_, i) => {
          const a = (i * 18 * Math.PI) / 180;
          const d = 155 + (i % 5) * 12;
          return (
            <circle key={`particle-${i}`} cx={cx + Math.cos(a) * d} cy={cy + Math.sin(a) * d}
              r={0.8 + (i % 3) * 0.5} fill="hsl(195, 90%, 60%)" opacity="0.15">
              <animate attributeName="opacity" values="0.1;0.35;0.1" dur={`${3 + (i % 3)}s`}
                begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          );
        })}
      </svg>
    </div>
  );
};

export default FanpageVisualizer;
