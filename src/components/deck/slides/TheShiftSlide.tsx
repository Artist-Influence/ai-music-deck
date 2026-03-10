import GlassPanel from '../GlassPanel';
import NetworkVisual from '../NetworkVisual';
import { Video, Eye, Users, Megaphone } from 'lucide-react';

const winItems = [
  { icon: Video, text: 'Volume of real short-form creation' },
  { icon: Eye, text: 'Consistent exposure across audiences' },
  { icon: Users, text: 'Community validation (pages, curators, creators)' },
  { icon: Megaphone, text: 'Smart amplification that boosts the right signals' },
];

const TheShiftSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute top-[5%] right-[5%] w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-[150px] animate-float" />
    <NetworkVisual className="opacity-10" nodeCount={60} seed={2} />

    <div className="relative z-10 flex gap-12 items-center w-full max-w-[1600px] mx-auto">
      <div className="flex-1 max-w-[800px]">
        <h1 className="text-7xl font-bold text-foreground mb-10 leading-tight whitespace-nowrap">Music discovery has changed.</h1>
        <GlassPanel className="mb-12">
          <p className="text-2xl text-foreground leading-relaxed">
            People don't "find" songs anymore. Songs find people.
          </p>
        </GlassPanel>

        <p className="text-lg text-primary font-medium mb-6 tracking-wider uppercase">What wins today</p>
        <div className="grid grid-cols-2 gap-4">
          {winItems.map((item, i) => (
            <GlassPanel key={i} variant="subtle" className="p-6">
              <div className="flex items-center gap-4">
                <item.icon size={26} className="text-primary shrink-0" />
                <p className="text-xl text-foreground">{item.text}</p>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>

      {/* Visual: stylized phone screens showing algorithmic music discovery */}
      <div className="flex-1 flex items-center justify-center max-w-[500px]">
        <svg viewBox="0 0 400 420" className="w-full h-full max-w-[420px] max-h-[420px]">
          <defs>
            <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.04" />
            </linearGradient>
            <filter id="cardGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Phone 1 — left/back */}
          <g opacity="0.5" transform="translate(30, 60)">
            <rect x="0" y="0" width="140" height="260" rx="16" fill="url(#phoneGrad)" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.2" />
            {/* Feed cards */}
            <rect x="12" y="30" width="116" height="40" rx="6" fill="hsl(var(--primary))" fillOpacity="0.06" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.15">
              <animate attributeName="fillOpacity" values="0.04;0.1;0.04" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="12" y="80" width="116" height="40" rx="6" fill="hsl(var(--primary))" fillOpacity="0.04" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.1" />
            <rect x="12" y="130" width="116" height="40" rx="6" fill="hsl(var(--primary))" fillOpacity="0.04" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.1" />
            {/* Play icon in top card */}
            <polygon points="55,42 55,58 68,50" fill="hsl(var(--primary))" fillOpacity="0.4" />
            {/* Waveform bars */}
            {[0,1,2,3,4,5,6].map(j => (
              <rect key={j} x={20 + j * 8} y={145} width="3" height={10 + Math.sin(j * 1.2) * 8} rx="1" fill="hsl(var(--primary))" fillOpacity="0.25">
                <animate attributeName="height" values={`${10 + Math.sin(j) * 8};${18 + Math.cos(j) * 6};${10 + Math.sin(j) * 8}`} dur={`${1.5 + j * 0.2}s`} repeatCount="indefinite" />
              </rect>
            ))}
          </g>

          {/* Phone 2 — center/front */}
          <g transform="translate(120, 20)">
            <rect x="0" y="0" width="160" height="300" rx="18" fill="url(#phoneGrad)" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" />
            {/* Status bar dots */}
            <circle cx="80" cy="12" r="3" fill="hsl(var(--primary))" fillOpacity="0.2" />
            {/* Trending card — highlighted */}
            <rect x="14" y="28" width="132" height="70" rx="8" fill="hsl(var(--primary))" fillOpacity="0.1" stroke="hsl(var(--primary))" strokeWidth="0.6" strokeOpacity="0.25" filter="url(#cardGlow)">
              <animate attributeName="fillOpacity" values="0.08;0.16;0.08" dur="2.5s" repeatCount="indefinite" />
            </rect>
            {/* Play triangle */}
            <polygon points="32,52 32,78 52,65" fill="hsl(var(--primary))" fillOpacity="0.5">
              <animate attributeName="fillOpacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
            </polygon>
            {/* Text lines */}
            <rect x="60" y="50" width="70" height="4" rx="2" fill="hsl(var(--foreground))" fillOpacity="0.2" />
            <rect x="60" y="60" width="50" height="3" rx="1.5" fill="hsl(var(--foreground))" fillOpacity="0.1" />
            {/* Heart */}
            <text x="60" y="80" fontSize="10" fill="hsl(var(--primary))" fillOpacity="0.5">♥ 24K</text>
            {/* Share arrow */}
            <text x="105" y="80" fontSize="10" fill="hsl(var(--primary))" fillOpacity="0.35">↗ 8K</text>

            {/* Second card */}
            <rect x="14" y="110" width="132" height="55" rx="8" fill="hsl(var(--primary))" fillOpacity="0.05" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.12" />
            {/* Mini waveform */}
            {[0,1,2,3,4,5,6,7,8].map(j => (
              <rect key={`w2-${j}`} x={24 + j * 7} y={128} width="3" height={8 + Math.sin(j * 0.9) * 10} rx="1" fill="hsl(var(--primary))" fillOpacity="0.2">
                <animate attributeName="height" values={`${8 + Math.sin(j) * 10};${16 + Math.cos(j * 1.3) * 6};${8 + Math.sin(j) * 10}`} dur={`${1.8 + j * 0.15}s`} repeatCount="indefinite" />
              </rect>
            ))}
            <rect x="24" y="148" width="60" height="3" rx="1.5" fill="hsl(var(--foreground))" fillOpacity="0.12" />

            {/* Third card */}
            <rect x="14" y="178" width="132" height="55" rx="8" fill="hsl(var(--primary))" fillOpacity="0.04" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.08" />
            <polygon points="30,196 30,216 44,206" fill="hsl(var(--primary))" fillOpacity="0.25" />
            <rect x="52" y="200" width="80" height="3" rx="1.5" fill="hsl(var(--foreground))" fillOpacity="0.1" />
            <rect x="52" y="208" width="55" height="3" rx="1.5" fill="hsl(var(--foreground))" fillOpacity="0.06" />

            {/* "Trending" badge */}
            <rect x="14" y="248" width="60" height="18" rx="9" fill="hsl(var(--primary))" fillOpacity="0.15" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.3" />
            <text x="26" y="260" fontSize="8" fill="hsl(var(--primary))" fillOpacity="0.7" fontWeight="bold">🔥 Trending</text>
          </g>

          {/* Phone 3 — right/back */}
          <g opacity="0.45" transform="translate(230, 80)">
            <rect x="0" y="0" width="140" height="240" rx="16" fill="url(#phoneGrad)" stroke="hsl(var(--primary))" strokeWidth="0.8" strokeOpacity="0.18" />
            <rect x="12" y="25" width="116" height="45" rx="6" fill="hsl(var(--primary))" fillOpacity="0.05" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.1">
              <animate attributeName="fillOpacity" values="0.03;0.09;0.03" dur="3.5s" repeatCount="indefinite" />
            </rect>
            {/* Share/repost icon */}
            <text x="20" y="52" fontSize="14" fill="hsl(var(--primary))" fillOpacity="0.3">🔁</text>
            <rect x="42" y="40" width="70" height="3" rx="1.5" fill="hsl(var(--foreground))" fillOpacity="0.1" />
            <rect x="42" y="48" width="50" height="3" rx="1.5" fill="hsl(var(--foreground))" fillOpacity="0.06" />

            <rect x="12" y="80" width="116" height="45" rx="6" fill="hsl(var(--primary))" fillOpacity="0.04" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.08" />
            <rect x="12" y="135" width="116" height="45" rx="6" fill="hsl(var(--primary))" fillOpacity="0.03" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.06" />
          </g>

          {/* Floating signal dots — songs traveling between phones */}
          {[
            { cx: 170, cy: 330, delay: 0 },
            { cx: 100, cy: 180, delay: 1.2 },
            { cx: 300, cy: 200, delay: 0.6 },
            { cx: 250, cy: 360, delay: 1.8 },
          ].map((dot, i) => (
            <circle key={`sig-${i}`} cx={dot.cx} cy={dot.cy} r="3" fill="hsl(var(--primary))" filter="url(#cardGlow)">
              <animate attributeName="opacity" values="0;0.6;0" dur="2.5s" begin={`${dot.delay}s`} repeatCount="indefinite" />
              <animate attributeName="r" values="2;5;2" dur="2.5s" begin={`${dot.delay}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
      </div>
    </div>
  </div>
);

export default TheShiftSlide;
