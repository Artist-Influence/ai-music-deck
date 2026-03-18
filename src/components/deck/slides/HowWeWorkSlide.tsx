import { FileText, Rocket, TrendingUp, BarChart3 } from 'lucide-react';
import GlassPanel from '../GlassPanel';

const steps = [
  { num: '01', title: 'Proposal', icon: FileText, desc: 'We send over a proposal to align on goals, audience, assets, and guardrails.' },
  { num: '02', title: 'Launch', icon: Rocket, desc: 'We activate the chosen services with tight execution and clear timelines.' },
  { num: '03', title: 'Optimize', icon: TrendingUp, desc: "We analyze what's working, cut what isn't, and keep results growing." },
  { num: '04', title: 'Report', icon: BarChart3, desc: 'Weekly updates, final recap, and reusable learnings for the next campaign.' },
];

const HowWeWorkSlide = () => (
  <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-24 flex flex-col justify-start md:justify-center">
    <style>{`
      @keyframes glow-sweep {
        0% { opacity: 0; left: -100%; }
        30% { opacity: 1; }
        100% { opacity: 0; left: 100%; }
      }
      .step-card { position: relative; overflow: hidden; }
      .step-card::before {
        content: '';
        position: absolute;
        top: 0; left: -100%;
        width: 100%; height: 100%;
        background: linear-gradient(90deg, transparent, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.15), transparent);
        z-index: 1;
        pointer-events: none;
      }
      ${steps.map((_, i) => `
        .step-card-${i}::before {
          animation: glow-sweep 3s ease-in-out ${i * 0.7}s infinite;
        }
      `).join('')}
    `}</style>

    <div className="relative z-10 w-full max-w-[1400px]">
      <h1 className="text-xl md:text-7xl font-bold text-foreground mb-1 md:mb-4">Our End-to-End Process</h1>
      <p className="text-xs md:text-[23px] text-muted-foreground mb-3 md:mb-12">An industry expert will craft a customized campaign plan tailored to your specific needs</p>

      <div className="grid grid-cols-2 md:flex md:items-stretch gap-2 md:gap-4 mb-3 md:mb-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex items-stretch flex-1">
              <GlassPanel variant="bright" className={`flex-1 p-4 md:p-6 text-center step-card step-card-${i}`}>
                <Icon className="w-5 h-5 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3 relative z-10" />
                <p className="text-primary text-xs md:text-base font-mono mb-1 md:mb-2 tracking-widest relative z-10">{step.num}</p>
                <p className="text-sm md:text-2xl font-semibold text-foreground mb-1 md:mb-3 relative z-10">{step.title}</p>
                <p className="text-xs md:text-[21px] text-muted-foreground leading-relaxed relative z-10">{step.desc}</p>
              </GlassPanel>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
        <GlassPanel variant="subtle" className="p-4 md:p-6">
          <p className="text-sm md:text-lg font-semibold text-primary mb-2 md:mb-3">Reporting includes</p>
          <div className="space-y-1.5 md:space-y-2">
            {[
              "What launched, what's live, what's next",
              'Top creatives, patterns worth doubling down on, and recommendations for the next release',
              'Platform metrics that matter and results by service with best-performing angles',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-2.5" />
                <p className="text-xs md:text-[21px] text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel variant="subtle" className="p-4 md:p-5">
          <p className="text-sm md:text-lg font-semibold text-primary mb-2 md:mb-3">We need from you</p>
          <div className="space-y-1.5 md:space-y-2">
            {[
              'Audio links, clean metadata, and posting handles',
              'Any brand safety rules or hard "no" topics',
              'A clear primary goal per campaign',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-2.5" />
                <p className="text-xs md:text-[21px] text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>

      <p className="text-[10px] md:text-[21px] text-muted-foreground mt-2 md:mt-5 italic">
        What not to expect: unrealistic, always-viral results. This is an amplifier, not a multiplier — results require testing and iteration.
      </p>
    </div>
  </div>
);

export default HowWeWorkSlide;
