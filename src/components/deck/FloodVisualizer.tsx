const FloodVisualizer = () => {
  // Dots bursting outward from center — representing mass volume
  const dots = Array.from({ length: 40 }, (_, i) => {
    const angle = (i * 137.5 * Math.PI) / 180; // golden angle for even spread
    const dist = 20 + (i * 3.2);
    return {
      cx: 100 + Math.cos(angle) * dist,
      cy: 100 + Math.sin(angle) * dist,
      r: 2.5 - i * 0.04,
      delay: i * 0.08,
    };
  });

  return (
    <svg viewBox="0 0 200 200" className="w-[200px] h-[200px]">
      {/* Burst dots */}
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r={Math.max(dot.r, 1)}
          fill="hsl(195, 90%, 60%)" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0.2"
            dur="2s" begin={`${dot.delay}s`} repeatCount="indefinite" />
          <animate attributeName="r" from="0" to={Math.max(dot.r, 1)}
            dur="1s" begin={`${dot.delay}s`} fill="freeze" />
        </circle>
      ))}
      {/* Center pulse */}
      <circle cx="100" cy="100" r="8" fill="hsl(195, 90%, 60%)" opacity="0.7">
        <animate attributeName="r" values="8;11;8" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="100" r="3" fill="hsl(222, 47%, 6%)" opacity="0.6" />
      {/* Expanding rings */}
      {[0, 1, 2].map(i => (
        <circle key={`ring-${i}`} cx="100" cy="100" r="8" fill="none"
          stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" opacity="0">
          <animate attributeName="r" from="10" to="95" dur="3s"
            begin={`${i}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.3" to="0" dur="3s"
            begin={`${i}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
};

export default FloodVisualizer;
