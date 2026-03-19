import GlassPanel from '../GlassPanel';
import { UserX, Clock, DollarSign } from 'lucide-react';
import { useTranslation } from '@/i18n/LanguageContext';

const icons = [UserX, Clock, DollarSign];

const TheProblemSlide = () => {
  const { t } = useTranslation();
  const problems = icons.map((Icon, i) => ({ num: i + 1, icon: Icon, text: t(`problem.item.${i}`) }));

  return (
    <div className="w-full h-full bg-background relative overflow-hidden p-5 md:p-24 flex flex-col items-center justify-center">
      <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-destructive/[0.04] blur-[120px]" />

      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start w-full max-w-[1500px] mx-auto">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl md:text-5xl font-bold text-foreground mb-6 md:mb-10 leading-tight md:whitespace-nowrap">
            {t('problem.title')}
          </h1>

          <p className="text-sm md:text-xl text-primary font-medium mb-4 md:mb-6 tracking-wider uppercase">{t('problem.section')}</p>

          <div className="space-y-3 md:space-y-4">
            {problems.map((item) => (
              <GlassPanel key={item.num} variant="subtle" className="p-4 md:p-6 w-full">
                <div className="flex items-center gap-3 md:gap-5">
                  <span className="text-xl md:text-3xl font-bold text-primary shrink-0">{item.num}.</span>
                  <p className="text-sm md:text-2xl text-foreground flex-1">{item.text}</p>
                  <item.icon size={24} className="text-primary shrink-0 md:w-8 md:h-8" />
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-[0.6] items-center justify-center mt-16">
          <svg viewBox="0 0 400 400" className="w-full h-full max-w-[420px] max-h-[420px]">
            <defs>
              <filter id="chaosGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
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
            <g opacity="0.5" transform="translate(60, 80)">
              <rect width="60" height="50" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" />
              <line x1="20" y1="0" x2="20" y2="50" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.7" />
              <line x1="40" y1="0" x2="40" y2="50" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.7" />
              <line x1="0" y1="17" x2="60" y2="17" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.7" />
              <line x1="0" y1="34" x2="60" y2="34" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.7" />
            </g>
            <g filter="url(#chaosGlow)">
              <circle cx="200" cy="200" r="30" fill="hsl(0, 60%, 55%)" fillOpacity="0.12"
                stroke="hsl(0, 60%, 55%)" strokeWidth="1.5" strokeOpacity="0.4">
                <animate attributeName="fillOpacity" values="0.08;0.18;0.08" dur="3s" repeatCount="indefinite" />
              </circle>
              <text x="188" y="215" fontSize="32" fill="hsl(0, 60%, 55%)" fillOpacity="0.7" fontWeight="bold">?</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TheProblemSlide;
