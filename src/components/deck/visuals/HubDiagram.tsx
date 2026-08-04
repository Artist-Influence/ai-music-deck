interface HubDiagramProps {
  /** Rendered size in px. The viewBox is fixed, so this scales the whole diagram. */
  size?: number;
  labels?: {
    center: [string, string];
    shortForm: [string, string];
    communities: [string, string];
    streaming: [string, string];
  };
}

const defaultLabels: HubDiagramProps['labels'] = {
  center: ['Your', 'Song'],
  shortForm: ['Short-form', 'Content'],
  communities: ['Communities', '& Culture'],
  streaming: ['Streaming', 'Platforms'],
};

/**
 * The "your song at the center" hub: a triangle of distribution surfaces
 * orbiting the track, with signal pulses travelling along each edge.
 * Shared so the merged discovery/pillars slide and any future slide stay in sync.
 */
const HubDiagram = ({ size = 480, labels = defaultLabels }: HubDiagramProps) => {
  const nodes = [
    { label: labels.center, cx: 300, cy: 260, r: 72 },
    { label: labels.shortForm, cx: 470, cy: 92, r: 58 },
    { label: labels.communities, cx: 105, cy: 195, r: 58 },
    { label: labels.streaming, cx: 390, cy: 450, r: 58 },
  ];

  const connections: [number, number][] = [[0, 1], [0, 2], [0, 3]];

  return (
    <svg viewBox="0 0 560 540" style={{ width: size, height: size }} className="max-w-full">
      <defs>
        <radialGradient id="hubCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <filter id="hubSoftGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <circle cx={nodes[0].cx} cy={nodes[0].cy} r="140" fill="url(#hubCenterGlow)" />

      {connections.map(([a, b], i) => (
        <line key={i} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.25" />
      ))}

      {nodes.slice(1).map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={n.r}
            fill="hsl(var(--primary))" fillOpacity="0.06"
            stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.3" />
          <text x={n.cx} y={n.cy - 4} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="16" fontWeight="500" opacity="0.9">{n.label[0]}</text>
          <text x={n.cx} y={n.cy + 16} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="400" opacity="0.65">{n.label[1]}</text>
        </g>
      ))}

      <circle cx={nodes[0].cx} cy={nodes[0].cy} r={nodes[0].r}
        fill="hsl(var(--primary))" fillOpacity="0.12"
        stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.5"
        filter="url(#hubSoftGlow)" />
      <text x={nodes[0].cx} y={nodes[0].cy - 8} textAnchor="middle" fill="hsl(var(--primary))" fontSize="22" fontWeight="700">{nodes[0].label[0]}</text>
      <text x={nodes[0].cx} y={nodes[0].cy + 18} textAnchor="middle" fill="hsl(var(--primary))" fontSize="22" fontWeight="700">{nodes[0].label[1]}</text>

      <circle cx={nodes[0].cx} cy={nodes[0].cy} r="180" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 6">
        <animateTransform attributeName="transform" type="rotate" from={`0 ${nodes[0].cx} ${nodes[0].cy}`} to={`360 ${nodes[0].cx} ${nodes[0].cy}`} dur="60s" repeatCount="indefinite" />
      </circle>

      {connections.map(([a, b], i) => (
        <circle key={`pulse-${i}`} r="3" fill="hsl(var(--primary))" filter="url(#hubSoftGlow)">
          <animate attributeName="cx" values={`${nodes[a].cx};${nodes[b].cx};${nodes[a].cx}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
          <animate attributeName="cy" values={`${nodes[a].cy};${nodes[b].cy};${nodes[a].cy}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.7;0" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
};

export default HubDiagram;
