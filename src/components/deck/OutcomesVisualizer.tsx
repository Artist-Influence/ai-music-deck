const OutcomesVisualizer = () => {
  const baseline = 540;
  const topY = 20;
  const bars = [
    { h: 60 },
    { h: 100 },
    { h: 85 },
    { h: 150 },
    { h: 135 },
    { h: 220 },
    { h: 300 },
    { h: 370 },
    { h: 340 },
    { h: 420 },
    { h: 480 },
    { h: 510 },
  ];
  const barW = 16;
  const gap = 6;
  const totalW = bars.length * (barW + gap) - gap;
  const startX = (totalW > 240) ? 10 : (260 - totalW) / 2;

  const barData = bars.map((b, i) => ({
    x: startX + i * (barW + gap),
    h: b.h,
  }));

  const linePoints = barData.map(b => `${b.x + barW / 2},${baseline - b.h}`).join(' ');

  return (
    <svg viewBox={`0 0 ${totalW + 20} 560`} className="h-full w-auto max-h-[600px]" preserveAspectRatio="xMidYMid meet">
      {/* Subtle grid lines */}
      {[100, 200, 300, 400, 500].map(y => (
        <line key={y} x1="5" y1={y} x2={totalW + 15} y2={y}
          stroke="hsl(195, 90%, 60%)" strokeWidth="0.4" opacity="0.08" />
      ))}

      {/* Bars */}
      {barData.map((bar, i) => (
        <rect key={i} x={bar.x} y={baseline} width={barW} height="0" rx="3"
          fill="hsl(195, 50%, 40%)" opacity="0.3">
          <animate attributeName="height" from="0" to={bar.h}
            dur="0.9s" begin={`${i * 0.1}s`} fill="freeze" />
          <animate attributeName="y" from={baseline} to={baseline - bar.h}
            dur="0.9s" begin={`${i * 0.1}s`} fill="freeze" />
          <animate attributeName="opacity" from="0" to="0.3"
            dur="0.6s" begin={`${i * 0.1}s`} fill="freeze" />
        </rect>
      ))}

      {/* Trend line */}
      <polyline points={linePoints} fill="none"
        stroke="hsl(195, 90%, 60%)" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" opacity="0" strokeDasharray="800" strokeDashoffset="800">
        <animate attributeName="opacity" from="0" to="0.9"
          dur="0.4s" begin="1s" fill="freeze" />
        <animate attributeName="stroke-dashoffset" from="800" to="0"
          dur="2s" begin="1s" fill="freeze" />
      </polyline>

      {/* Dots on trend line */}
      {barData.map((bar, i) => (
        <circle key={`dot-${i}`} cx={bar.x + barW / 2} cy={baseline - bar.h} r="3"
          fill="hsl(195, 90%, 60%)" opacity="0">
          <animate attributeName="opacity" values="0;0.8;0.4"
            dur="2.5s" begin={`${1 + i * 0.1}s`} repeatCount="indefinite" />
          <animate attributeName="r" values="2.5;4;2.5"
            dur="2.5s" begin={`${1 + i * 0.1}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Arrow at top of trend */}
      <polygon
        points={`${barData[barData.length - 1].x + barW / 2 - 5},${baseline - barData[barData.length - 1].h - 8} ${barData[barData.length - 1].x + barW / 2 + 5},${baseline - barData[barData.length - 1].h - 8} ${barData[barData.length - 1].x + barW / 2},${baseline - barData[barData.length - 1].h - 18}`}
        fill="hsl(195, 90%, 60%)" opacity="0">
        <animate attributeName="opacity" from="0" to="0.6"
          dur="0.4s" begin="2.5s" fill="freeze" />
      </polygon>
    </svg>
  );
};

export default OutcomesVisualizer;
