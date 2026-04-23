import GlassPanel from '../GlassPanel';
import { Globe, Zap, Layers } from 'lucide-react';
import { useTranslation } from '@/i18n/LanguageContext';

// Small wireframe SVGs for each card
const DesktopWire = () => (
  <svg viewBox="0 0 200 130" className="w-full h-full">
    <rect x="6" y="6" width="188" height="118" rx="8" fill="hsl(var(--primary))" fillOpacity="0.04" stroke="hsl(var(--primary))" strokeWidth="0.7" strokeOpacity="0.4" />
    <line x1="6" y1="22" x2="194" y2="22" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.3" />
    <circle cx="14" cy="14" r="2" fill="hsl(var(--primary))" fillOpacity="0.4" />
    <circle cx="22" cy="14" r="2" fill="hsl(var(--primary))" fillOpacity="0.25" />
    <circle cx="30" cy="14" r="2" fill="hsl(var(--primary))" fillOpacity="0.25" />
    <rect x="14" y="32" width="80" height="40" rx="3" fill="hsl(var(--primary))" fillOpacity="0.1" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.3" />
    <rect x="100" y="32" width="86" height="40" rx="3" fill="hsl(var(--primary))" fillOpacity="0.06" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.2" />
    <rect x="14" y="80" width="172" height="6" rx="2" fill="hsl(var(--foreground))" fillOpacity="0.15" />
    <rect x="14" y="92" width="120" height="4" rx="2" fill="hsl(var(--foreground))" fillOpacity="0.1" />
    <rect x="14" y="102" width="60" height="14" rx="3" fill="hsl(var(--primary))" fillOpacity="0.3" />
  </svg>
);

const MobileWire = () => (
  <svg viewBox="0 0 200 130" className="w-full h-full">
    {/* Phone */}
    <rect x="70" y="8" width="60" height="114" rx="9" fill="hsl(var(--primary))" fillOpacity="0.05" stroke="hsl(var(--primary))" strokeWidth="0.7" strokeOpacity="0.4" />
    <rect x="78" y="18" width="44" height="26" rx="3" fill="hsl(var(--primary))" fillOpacity="0.15" stroke="hsl(var(--primary))" strokeWidth="0.3" strokeOpacity="0.3" />
    <rect x="78" y="50" width="44" height="6" rx="1.5" fill="hsl(var(--foreground))" fillOpacity="0.2" />
    <rect x="78" y="60" width="32" height="4" rx="1" fill="hsl(var(--foreground))" fillOpacity="0.12" />
    <rect x="78" y="70" width="44" height="20" rx="2" fill="hsl(var(--primary))" fillOpacity="0.08" stroke="hsl(var(--primary))" strokeWidth="0.3" strokeOpacity="0.2" />
    <rect x="78" y="96" width="44" height="14" rx="6" fill="hsl(var(--primary))" fillOpacity="0.3" />
    {/* Side glow */}
    <rect x="20" y="40" width="40" height="50" rx="4" fill="hsl(var(--primary))" fillOpacity="0.05" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.2" />
    <rect x="140" y="40" width="40" height="50" rx="4" fill="hsl(var(--primary))" fillOpacity="0.04" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.15" />
  </svg>
);

const SpeedWire = () => (
  <svg viewBox="0 0 200 130" className="w-full h-full">
    {/* Browser frame */}
    <rect x="6" y="6" width="188" height="100" rx="6" fill="hsl(var(--primary))" fillOpacity="0.04" stroke="hsl(var(--primary))" strokeWidth="0.7" strokeOpacity="0.4" />
    <rect x="6" y="6" width="188" height="14" rx="6" fill="hsl(var(--primary))" fillOpacity="0.06" />
    <rect x="40" y="9" width="120" height="8" rx="4" fill="hsl(var(--foreground))" fillOpacity="0.08" />
    {/* Loading bars */}
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x="14" y={28 + i * 16} width={170 - i * 30} height="8" rx="2"
        fill="hsl(var(--primary))" fillOpacity={0.4 - i * 0.07} />
    ))}
    {/* Speed dial */}
    <text x="100" y="124" fontSize="10" fontWeight="700" textAnchor="middle"
      fill="hsl(var(--primary))" fillOpacity="0.85">FAST TURN</text>
  </svg>
);

const cardConfig = [
  { icon: Globe, Wire: DesktopWire },
  { icon: Layers, Wire: MobileWire },
  { icon: Zap, Wire: SpeedWire },
];

const WebsitesSlide = () => {
  const { t } = useTranslation();
  const cards = cardConfig.map((c, i) => ({
    icon: c.icon,
    Wire: c.Wire,
    title: t(`websites.card.${i}.title`),
    desc: t(`websites.card.${i}.desc`),
  }));

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-16 flex flex-col justify-start md:justify-center">
      <div className="absolute top-[5%] right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-primary/[0.06] blur-[140px]" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
          <Globe className="w-4 h-4 md:w-7 md:h-7 text-primary" />
          <p className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase">{t('common.service')}</p>
        </div>

        <h1 className="text-2xl md:text-6xl font-bold text-foreground mb-2 md:mb-4">{t('websites.title')}</h1>
        <p className="text-sm md:text-2xl text-muted-foreground mb-5 md:mb-8 max-w-[1100px] leading-relaxed">{t('websites.subtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-3 md:mb-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const Wire = c.Wire;
            return (
              <GlassPanel key={i} variant="bright" className="p-4 md:p-5 flex flex-col">
                <div className="aspect-[16/10] mb-3 md:mb-4 rounded-lg overflow-hidden bg-background/40 border border-primary/15">
                  <Wire />
                </div>
                <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <p className="text-sm md:text-xl font-semibold text-foreground">{c.title}</p>
                </div>
                <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{c.desc}</p>
              </GlassPanel>
            );
          })}
        </div>

        <GlassPanel variant="subtle" className="p-3 md:p-5">
          <p className="text-xs md:text-lg text-foreground/90 leading-relaxed">
            <span className="text-primary font-semibold">{t('websites.whyLabel')} </span>
            {t('websites.why')}
          </p>
        </GlassPanel>
      </div>
    </div>
  );
};

export default WebsitesSlide;
