import GlassPanel from '../GlassPanel';
import { Users, Gauge, Telescope } from 'lucide-react';
import { useTranslation } from '@/i18n/LanguageContext';

const colIcons = [Users, Gauge, Telescope];

const WhyThisMattersSlide = () => {
  const { t } = useTranslation();
  const cols = colIcons.map((Icon, i) => ({
    icon: Icon,
    title: t(`whyMatters.col.${i}.title`),
    body: t(`whyMatters.col.${i}.body`),
  }));

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-20 flex flex-col justify-start md:justify-center">
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-primary/[0.05] blur-[150px]" />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto">
        <p className="text-[10px] md:text-sm text-primary font-medium tracking-wider uppercase mb-2 md:mb-3">{t('whyMatters.kicker')}</p>
        <h1 className="text-2xl md:text-6xl font-bold text-foreground mb-3 md:mb-5 leading-tight">
          {t('whyMatters.title')}
        </h1>
        <p className="text-sm md:text-2xl text-muted-foreground mb-6 md:mb-12 max-w-[1100px] leading-relaxed">
          {t('whyMatters.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-5 md:mb-10">
          {cols.map((c, i) => {
            const Icon = c.icon;
            return (
              <GlassPanel key={i} variant="default" className="p-5 md:p-7 relative overflow-hidden">
                {/* Top crimson accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

                <Icon className="w-5 h-5 md:w-7 md:h-7 text-primary mb-3 md:mb-5" />
                <p className="text-sm md:text-2xl font-semibold text-foreground mb-2 md:mb-3">{c.title}</p>
                <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">{c.body}</p>
              </GlassPanel>
            );
          })}
        </div>

        <div className="rounded-2xl border border-primary/30 bg-primary/[0.05] p-4 md:p-6 text-center">
          <p className="text-sm md:text-2xl text-foreground font-semibold leading-relaxed">{t('whyMatters.bottom1')}</p>
          <p className="text-sm md:text-2xl text-primary font-semibold leading-relaxed mt-1 md:mt-2">{t('whyMatters.bottom2')}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyThisMattersSlide;
