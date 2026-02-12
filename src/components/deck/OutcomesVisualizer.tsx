const OutcomesVisualizer = ({ className = '' }: { className?: string }) => {
  // Upward-trending bars with staggered animation
  const bars = [
    { x: 20, h: 30 },
    { x: 42, h: 50 },
    { x: 64, h: 45 },
    { x: 86, h: 70 },
    { x: 108, h: 65 },
    { x: 130, h: 90 },
    { x: 152, h: 110 },
    { x: 174, h: 130 },
  ];

  // Trend line points
  const linePoints = bars.map(b => `${b.x + 8},${170 - b.h}`).join(' ');

  return (
    <svg viewBox="0 0 210 200" className={`w-[220px] h-[210px] ${className}`}>
      {/* Grid lines */}
      {[40, 80, 120, 160].map(y => (
        <line key={y} x1="15" y1={y} x2="195" y2={y}
          stroke="hsl(195, 90%, 60%)" strokeWidth="0.3" opacity="0.15" />
      ))}

      {/* Bars */}
      {bars.map((bar, i) => (
        <rect key={i} x={bar.x} y={170} width="16" height="0" rx="3"
          fill="hsl(195, 90%, 60%)" opacity="0.25">
          <animate attributeName="height" from="0" to={bar.h}
            dur="0.8s" begin={`${i * 0.12}s`} fill="freeze" />
          <animate attributeName="y" from="170" to={170 - bar.h}
            dur="0.8s" begin={`${i * 0.12}s`} fill="freeze" />
          <animate attributeName="opacity" from="0" to="0.25"
            dur="0.5s" begin={`${i * 0.12}s`} fill="freeze" />
        </rect>
      ))}

      {/* Trend line */}
      <polyline points={linePoints} fill="none"
        stroke="hsl(195, 90%, 60%)" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" opacity="0" strokeDasharray="300" strokeDashoffset="300">
        <animate attributeName="opacity" from="0" to="0.8"
          dur="0.5s" begin="0.8s" fill="freeze" />
        <animate attributeName="stroke-dashoffset" from="300" to="0"
          dur="1.5s" begin="0.8s" fill="freeze" />
      </polyline>

      {/* Glow dots on trend line */}
      {bars.map((bar, i) => (
        <circle key={`dot-${i}`} cx={bar.x + 8} cy={170 - bar.h} r="3"
          fill="hsl(195, 90%, 60%)" opacity="0">
          <animate attributeName="opacity" values="0;0.9;0.5"
            dur="2s" begin={`${0.8 + i * 0.12}s`} repeatCount="indefinite" />
          <animate attributeName="r" values="2;4;2"
            dur="2s" begin={`${0.8 + i * 0.12}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Arrow tip at end */}
      <polygon points="185,35 195,40 185,45" fill="hsl(195, 90%, 60%)" opacity="0">
        <animate attributeName="opacity" from="0" to="0.7"
          dur="0.4s" begin="2s" fill="freeze" />
      </polygon>
    </svg>
  );
};

export default OutcomesVisualizer;
