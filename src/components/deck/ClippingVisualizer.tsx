const ClippingVisualizer = () => {
  // Central waveform bars — the original track
  const waveBars = Array.from({ length: 24 }, (_, i) => ({
    x: 120 + i * 7,
    height: 8 + Math.sin(i * 0.8) * 18 + Math.cos(i * 1.3) * 12,
  }));

  // Fragment groups — clips flying outward from the waveform
  const fragments = [
    { bars: [0, 1, 2, 3], tx: -70, ty: -90, rot: -25, delay: 0, scale: 0.6 },
    { bars: [4, 5, 6], tx: -40, ty: -120, rot: -10, delay: 0.5, scale: 0.55 },
    { bars: [7, 8, 9, 10], tx: 20, ty: -130, rot: 5, delay: 1.0, scale: 0.5 },
    { bars: [11, 12, 13], tx: 80, ty: -110, rot: 20, delay: 0.7, scale: 0.55 },
    { bars: [14, 15, 16, 17], tx: 110, ty: -80, rot: 30, delay: 1.3, scale: 0.6 },
    { bars: [18, 19, 20], tx: -60, ty: 100, rot: 15, delay: 0.3, scale: 0.55 },
    { bars: [21, 22, 23], tx: 90, ty: 95, rot: -15, delay: 0.9, scale: 0.5 },
    { bars: [2, 6, 10], tx: -100, ty: 20, rot: -35, delay: 1.5, scale: 0.45 },
    { bars: [13, 17, 21], tx: 130, ty: 10, rot: 25, delay: 1.1, scale: 0.45 },
    { bars: [5, 9, 15], tx: 0, ty: 120, rot: 0, delay: 1.7, scale: 0.5 },
  ];

  const cy = 200;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-[420px] max-h-[420px]">
        <defs>
          <filter id="clipGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Scattered fragment clips — smaller waveform snippets drifting outward */}
        {fragments.map((frag, fi) => (
          <g key={`frag-${fi}`}
            transform={`translate(${200 + frag.tx}, ${cy + frag.ty}) rotate(${frag.rot}) scale(${frag.scale})`}
            opacity="0">
            {/* Mini clip container */}
            <rect x="-4" y="-22" width={frag.bars.length * 7 + 8} height="44"
              rx="4" fill="hsl(195, 90%, 60%)" opacity="0.06"
              stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" strokeOpacity="0.15" />
            {/* Mini waveform bars */}
            {frag.bars.map((barIdx, bi) => {
              const bar = waveBars[barIdx];
              const h = bar.height * 0.8;
              return (
                <rect key={`fb-${fi}-${bi}`}
                  x={bi * 7} y={-h / 2}
                  width="3" height={h}
                  rx="1.5" fill="hsl(195, 90%, 60%)" opacity="0.6" />
              );
            })}
            {/* Fade in + slight drift */}
            <animate attributeName="opacity" from="0" to="0.7"
              dur="1s" begin={`${frag.delay}s`} fill="freeze" />
            <animateTransform attributeName="transform" type="translate"
              additive="sum"
              values="0,0; 0,0"
              dur="0.01s" begin={`${frag.delay}s`} fill="freeze" />
          </g>
        ))}

        {/* Pulse lines radiating from center — representing distribution */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * 60 - 90) * Math.PI / 180;
          const x2 = 200 + Math.cos(angle) * 160;
          const y2 = cy + Math.sin(angle) * 160;
          return (
            <line key={`ray-${i}`} x1="200" y1={cy} x2={x2} y2={y2}
              stroke="hsl(195, 90%, 60%)" strokeWidth="0.4"
              strokeDasharray="3 8" opacity="0">
              <animate attributeName="opacity" values="0;0.15;0" dur={`${3 + i * 0.5}s`}
                begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </line>
          );
        })}

        {/* Central waveform — the original track */}
        <g opacity="0.9">
          {waveBars.map((bar, i) => (
            <g key={`wave-${i}`}>
              <rect
                x={bar.x} y={cy - bar.height / 2}
                width="3.5" height={bar.height}
                rx="1.75" fill="hsl(195, 90%, 60%)" opacity="0.8">
                <animate attributeName="height"
                  values={`${bar.height};${bar.height * 1.3};${bar.height}`}
                  dur={`${2 + (i % 4) * 0.3}s`} begin={`${i * 0.1}s`}
                  repeatCount="indefinite" />
                <animate attributeName="y"
                  values={`${cy - bar.height / 2};${cy - bar.height * 1.3 / 2};${cy - bar.height / 2}`}
                  dur={`${2 + (i % 4) * 0.3}s`} begin={`${i * 0.1}s`}
                  repeatCount="indefinite" />
              </rect>
            </g>
          ))}
          {/* Glow beneath waveform */}
          <rect x="115" y={cy - 2} width="178" height="4" rx="2"
            fill="hsl(195, 90%, 60%)" opacity="0.15" filter="url(#clipGlow)" />
        </g>

        {/* Multiplier text */}
        <text x="200" y="370" fontSize="10" fill="hsl(195, 90%, 60%)"
          opacity="0.35" textAnchor="middle" fontFamily="monospace">
          1 track → 10,000+ clips
        </text>
      </svg>
    </div>
  );
};

export default ClippingVisualizer;
