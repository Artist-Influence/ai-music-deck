const OutcomesVisualizer = ({ className = '' }: { className?: string }) => {
  const baseline = 260;
  const bars = [
    { x: 15, h: 40 },
    { x: 32, h: 65 },
    { x: 49, h: 55 },
    { x: 66, h: 90 },
    { x: 83, h: 80 },
    { x: 100, h: 120 },
    { x: 117, h: 150 },
    { x: 134, h: 185 },
  ];

  const linePoints = bars.map(b => `${b.x + 6},${baseline - b.h}`).join(' ');

  return (
    <svg viewBox="0 0 160 280" className={`w-[200px] h-[350px] ${className}`}>
      {/* Grid lines */}
      {[80, 130, 180, 230].map(y => (
        <line key={y} x1="10" y1={y} x2="150" y2={y}
          stroke="hsl(195, 90%, 60%)" strokeWidth="0.3" opacity="0.12" />
      ))}

      {/* Bars */}
      {bars.map((bar, i) => (
        <rect key={i} x={bar.x} y={baseline} width="12" height="0" rx="2"
          fill="hsl(195, 90%, 60%)" opacity="0.2">
          <animate attributeName="height" from="0" to={bar.h}
            dur="0.8s" begin={`${i * 0.12}s`} fill="freeze" />
          <animate attributeName="y" from={baseline} to={baseline - bar.h}
            dur="0.8s" begin={`${i * 0.12}s`} fill="freeze" />
          <animate attributeName="opacity" from="0" to="0.2"
            dur="0.5s" begin={`${i * 0.12}s`} fill="freeze" />
        </rect>
      ))}

      {/* Trend line */}
      <polyline points={linePoints} fill="none"
        stroke="hsl(195, 90%, 60%)" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round" opacity="0" strokeDasharray="400" strokeDashoffset="400">
        <animate attributeName="opacity" from="0" to="0.8"
          dur="0.5s" begin="0.8s" fill="freeze" />
        <animate attributeName="stroke-dashoffset" from="400" to="0"
          dur="1.5s" begin="0.8s" fill="freeze" />
      </polyline>

      {/* Glow dots */}
      {bars.map((bar, i) => (
        <circle key={`dot-${i}`} cx={bar.x + 6} cy={baseline - bar.h} r="2.5"
          fill="hsl(195, 90%, 60%)" opacity="0">
          <animate attributeName="opacity" values="0;0.9;0.5"
            dur="2s" begin={`${0.8 + i * 0.12}s`} repeatCount="indefinite" />
          <animate attributeName="r" values="2;3.5;2"
            dur="2s" begin={`${0.8 + i * 0.12}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Arrow tip */}
      <polygon points="143,70 150,75 143,80" fill="hsl(195, 90%, 60%)" opacity="0">
        <animate attributeName="opacity" from="0" to="0.7"
          dur="0.4s" begin="2s" fill="freeze" />
      </polygon>
    </svg>
  );
};

export default OutcomesVisualizer;
