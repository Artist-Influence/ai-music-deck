const ClippingVisualizer = () => {
  // Three vertical "phone screens" representing TikTok, Reels, Shorts
  const screens = [
    { x: 70, label: 'TikTok', delay: 0 },
    { x: 200, label: 'Reels', delay: 0.4 },
    { x: 330, label: 'Shorts', delay: 0.8 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-[420px] max-h-[420px]">
        <defs>
          <filter id="screenGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <style>{`
            @keyframes playhead-move {
              0% { y: 80; }
              100% { y: 280; }
            }
          `}</style>
        </defs>

        {/* Background subtle glow */}
        <circle cx="200" cy="200" r="100" fill="hsl(195, 90%, 60%)" opacity="0.05" />

        {/* Phone screens */}
        {screens.map((screen, i) => (
          <g key={`screen-${i}`}>
            {/* Phone frame */}
            <rect x={screen.x - 30} y="60" width="60" height="280"
              fill="none" stroke="hsl(195, 90%, 60%)" strokeWidth="1.2" rx="8"
              opacity="0.4" />

            {/* Screen bezel/notch */}
            <rect x={screen.x - 28} y="62" width="56" height="20"
              fill="hsl(195, 90%, 60%)" opacity="0.08" rx="6" />

            {/* Video content area — vertical bars representing different frames/content */}
            {[0, 1, 2, 3, 4].map((bar) => (
              <rect key={`bar-${i}-${bar}`}
                x={screen.x - 26} y={75 + bar * 42}
                width="52" height="36"
                fill="hsl(195, 90%, 60%)" opacity="0.12"
                rx="2" />
            ))}

            {/* Playhead — animates through the "video" */}
            <line
              x1={screen.x - 28} x2={screen.x + 28}
              y1="80" y2="80"
              stroke="hsl(195, 90%, 75%)" strokeWidth="1.5" opacity="0.7"
              filter="url(#screenGlow)">
              <animate attributeName="y1" from="80" to="280" dur="3s"
                begin={`${screen.delay}s`} repeatCount="indefinite" />
              <animate attributeName="y2" from="80" to="280" dur="3s"
                begin={`${screen.delay}s`} repeatCount="indefinite" />
            </line>

            {/* Glow behind playhead */}
            <circle
              cx={screen.x} cy="80" r="18"
              fill="hsl(195, 90%, 60%)" opacity="0.08"
              filter="url(#screenGlow)">
              <animate attributeName="cy" from="80" to="280" dur="3s"
                begin={`${screen.delay}s`} repeatCount="indefinite" />
            </circle>

            {/* Platform indicator below screen */}
            <text x={screen.x} y="355" fontSize="11" fill="hsl(195, 90%, 60%)"
              opacity="0.6" textAnchor="middle" className="font-semibold">
              {screen.label}
            </text>
          </g>
        ))}

        {/* Connecting wires/sync lines between screens */}
        <path d="M 100 150 L 170 150" stroke="hsl(195, 90%, 60%)" strokeWidth="0.8"
          strokeDasharray="4 4" opacity="0.15" />
        <path d="M 230 200 L 300 200" stroke="hsl(195, 90%, 60%)" strokeWidth="0.8"
          strokeDasharray="4 4" opacity="0.15" />
        <path d="M 170 250 L 100 250" stroke="hsl(195, 90%, 60%)" strokeWidth="0.8"
          strokeDasharray="4 4" opacity="0.15" />

        {/* Sync pulse dots on connecting lines */}
        {[0, 1, 2].map((i) => (
          <circle key={`sync-${i}`} cx={100 + i * 130} cy={150 + i * 50} r="2"
            fill="hsl(195, 90%, 60%)" opacity="0">
            <animate attributeName="opacity" values="0;0.8;0" dur="2.5s"
              begin={`${i * 0.7}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Sound wave indicator — showing the same track in all three */}
        <g opacity="0.2">
          <path d="M 185 365 L 190 360 L 195 365 L 200 358 L 205 365 L 210 360 L 215 365"
            stroke="hsl(195, 90%, 60%)" strokeWidth="0.8" fill="none" />
          <text x="200" y="380" fontSize="9" fill="hsl(195, 90%, 60%)"
            textAnchor="middle" opacity="0.5">same track</text>
        </g>
      </svg>
    </div>
  );
};

export default ClippingVisualizer;
