import GlassPanel from '../GlassPanel';
import { UserX, Clock, DollarSign } from 'lucide-react';

const problems = [
  { num: 1, icon: UserX, text: "Poor campaign quality from those who don't understand the music industry" },
  { num: 2, icon: Clock, text: 'Reporting is late, confusing, or missing' },
  { num: 3, icon: DollarSign, text: 'You spend money without real measurable results that actually move the needle' },
];

const TheProblemSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-destructive/[0.04] blur-[120px]" />
    <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/[0.05] blur-[100px]" />

    <div className="relative z-10 flex gap-8 items-start w-full max-w-[1500px] mx-auto">
      <div className="flex-1 min-w-0">
        <h1 className="text-5xl font-bold text-foreground mb-10 leading-tight whitespace-nowrap">
          Problem: Music marketing is mostly manual.
        </h1>

        <p className="text-xl text-primary font-medium mb-6 tracking-wider uppercase">Why this is an issue:</p>

        <div className="space-y-4">
          {problems.map((item) => (
            <GlassPanel key={item.num} variant="subtle" className="p-6 w-full">
              <div className="flex items-center gap-5">
                <span className="text-3xl font-bold text-primary shrink-0">{item.num}.</span>
                <p className="text-2xl text-foreground flex-1">{item.text}</p>
                <item.icon size={32} className="text-primary shrink-0" />
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>

      {/* Visual: tangled workflow representing manual chaos */}
      <div className="flex-[0.6] flex items-center justify-center mt-16">
        <svg viewBox="0 0 400 400" className="w-full h-full max-w-[420px] max-h-[420px]">
          <defs>
            <filter id="chaosGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Tangled connection lines — messy, overlapping paths */}
          {[
            'M 80,100 C 200,60 150,250 320,120',
            'M 60,280 C 180,200 250,350 340,260',
            'M 100,180 C 300,100 80,320 330,340',
            'M 150,60 C 50,200 350,180 200,350',
            'M 280,80 C 180,180 320,280 100,330',
            'M 200,50 C 100,150 300,200 180,360',
          ].map((d, i) => (
            <path key={`tangle-${i}`} d={d} fill="none"
              stroke="hsl(0, 60%, 55%)" strokeWidth="1.5" strokeOpacity="0.3"
              strokeDasharray="6 4">
              <animate attributeName="strokeOpacity" values="0.2;0.45;0.2"
                dur={`${3 + i * 0.5}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </path>
          ))}

          {/* Scattered platform-like shapes */}
          {/* Spreadsheet grid */}
          <g opacity="0.5" transform="translate(60, 80)">
            <rect width="60" height="50" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
            <line x1="20" y1="0" x2="20" y2="50" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.7" />
            <line x1="40" y1="0" x2="40" y2="50" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.7" />
            <line x1="0" y1="17" x2="60" y2="17" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.7" />
            <line x1="0" y1="34" x2="60" y2="34" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.7" />
          </g>

          {/* Email envelope */}
          <g opacity="0.45" transform="translate(280, 90)">
            <rect width="50" height="35" rx="3" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
            <polyline points="0,0 25,18 50,0" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
          </g>

          {/* Chat bubble */}
          <g opacity="0.45" transform="translate(290, 270)">
            <rect width="55" height="35" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
            <polygon points="12,35 18,48 24,35" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
            <line x1="12" y1="14" x2="43" y2="14" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.6" />
            <line x1="12" y1="22" x2="35" y2="22" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.5" />
          </g>

          {/* Dollar sign */}
          <g opacity="0.45" transform="translate(70, 280)">
            <circle cx="20" cy="20" r="20" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
            <text x="13" y="27" fontSize="20" fill="hsl(var(--primary))" fillOpacity="0.7" fontWeight="bold">$</text>
          </g>

          {/* Chart bars */}
          <g opacity="0.45" transform="translate(160, 260)">
            <rect x="0" y="25" width="10" height="20" rx="2" fill="hsl(var(--primary))" fillOpacity="0.5" />
            <rect x="14" y="15" width="10" height="30" rx="2" fill="hsl(var(--primary))" fillOpacity="0.45" />
            <rect x="28" y="30" width="10" height="15" rx="2" fill="hsl(var(--primary))" fillOpacity="0.4" />
            <rect x="42" y="20" width="10" height="25" rx="2" fill="hsl(var(--primary))" fillOpacity="0.35" />
          </g>

          {/* Central warning/question — the confusion */}
          <g filter="url(#chaosGlow)">
            <circle cx="200" cy="200" r="30" fill="hsl(0, 60%, 55%)" fillOpacity="0.12"
              stroke="hsl(0, 60%, 55%)" strokeWidth="1.5" strokeOpacity="0.4">
              <animate attributeName="fillOpacity" values="0.08;0.18;0.08" dur="3s" repeatCount="indefinite" />
            </circle>
            <text x="188" y="215" fontSize="32" fill="hsl(0, 60%, 55%)" fillOpacity="0.7" fontWeight="bold">?</text>
          </g>

          {/* Scattered warning dots */}
          {[
            { x: 140, y: 140 }, { x: 260, y: 160 }, { x: 170, y: 310 },
            { x: 240, y: 230 }, { x: 130, y: 230 },
          ].map((dot, i) => (
            <circle key={`warn-${i}`} cx={dot.x} cy={dot.y} r="4"
              fill="hsl(0, 60%, 55%)" opacity="0">
              <animate attributeName="opacity" values="0;0.6;0;0;0.4;0"
                dur={`${2.5 + i * 0.6}s`} begin={`${i * 0.8}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
      </div>
    </div>
  </div>
);

export default TheProblemSlide;
