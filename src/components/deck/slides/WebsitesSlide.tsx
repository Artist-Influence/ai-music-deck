import GlassPanel from '../GlassPanel';
import { Globe, Zap, Layers, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/i18n/LanguageContext';
import pierceImg from '@/assets/site-pierce.png';
import levityImg from '@/assets/site-levity.png';
import kompanyImg from '@/assets/site-kompany.png';

const cardConfig = [
  { icon: Globe, image: pierceImg, alt: 'Pierce — artist site' },
  { icon: Layers, image: kompanyImg, alt: 'Kompany — artist site' },
  { icon: Zap, image: levityImg, alt: 'Levity — artist site' },
];

const siteLinks = [
  { name: 'Kompany', url: 'https://kompanymusic.com' },
  { name: 'Levity', url: 'https://levityofficial.com' },
  { name: 'Kluster Flux', url: 'https://klusterflux.com' },
  { name: 'ID.ID', url: 'https://id-id.artistinfluence.com' },
  { name: 'Luhv', url: 'https://luhv.la' },
];

const WebsitesSlide = () => {
  const { t } = useTranslation();
  const cards = cardConfig.map((c, i) => ({
    icon: c.icon,
    image: c.image,
    alt: c.alt,
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
            return (
              <GlassPanel key={i} variant="bright" className="p-4 md:p-5 flex flex-col">
                <div className="aspect-[16/10] mb-3 md:mb-4 rounded-lg overflow-hidden bg-background/40 border border-primary/15">
                  <img src={c.image} alt={c.alt} className="w-full h-full object-cover object-top" />
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-2.5 mb-3 md:mb-5">
          <span className="text-[11px] md:text-sm text-muted-foreground uppercase tracking-wider mr-1">
            {t('websites.liveLabel')}
          </span>
          {siteLinks.map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full border border-primary/20 bg-background/40 text-[11px] md:text-sm text-foreground/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <span className="font-medium">{s.name}</span>
              <span className="text-muted-foreground/70 group-hover:text-primary/80">·</span>
              <span className="text-muted-foreground/90 group-hover:text-primary/80">
                {s.url.replace(/^https?:\/\//, '')}
              </span>
              <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-60 group-hover:opacity-100" />
            </a>
          ))}
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
