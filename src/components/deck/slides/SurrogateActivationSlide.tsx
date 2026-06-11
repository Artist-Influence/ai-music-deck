import { Users } from 'lucide-react';
import GlassPanel from '../GlassPanel';
import PatternVisual from '../visuals/PatternVisual';
import { useTranslation } from '@/i18n/LanguageContext';

const SurrogateActivationSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-16 flex flex-col justify-start md:justify-center">
      <PatternVisual />
      <div className="relative z-10 flex flex-col gap-4 md:gap-6 w-full max-w-[1600px] mx-auto">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <Users size={20} className="text-primary md:w-7 md:h-7" />
            <p className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase">{t('common.service')}</p>
          </div>
          <h1 className="text-2xl md:text-6xl font-bold text-on-visual mb-2 md:mb-4 leading-tight">{t('surrogate.title')}</h1>
          <p className="text-sm md:text-2xl text-on-visual-soft mb-0 max-w-[900px]">{t('surrogate.subtitle')}</p>
        </div>

        {/* Two-column row: What it is + How it works */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-stretch">
          <GlassPanel variant="bright" className="flex-1 p-4 md:p-8 flex flex-col">
            <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-4">{t('surrogate.whatTitle')}</p>
            <div className="space-y-1.5 md:space-y-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                  <p className="text-xs md:text-2xl text-muted-foreground">{t(`surrogate.what.${i}`)}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel variant="bright" className="flex-1 p-4 md:p-8 flex flex-col">
            <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-4">{t('surrogate.howTitle')}</p>
            <div className="space-y-1.5 md:space-y-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                  <p className="text-xs md:text-2xl text-muted-foreground">{t(`surrogate.how.${i}`)}</p>
                </div>
              ))}
            </div>
            <div className="pt-3 md:pt-4 border-t border-white/[0.06] mt-3 md:mt-4">
              <p className="text-xs md:text-2xl text-primary font-medium">{t('surrogate.timeframe')}</p>
            </div>
          </GlassPanel>
        </div>

        {/* Integrity line */}
        <GlassPanel variant="subtle" className="p-3 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <p className="text-xs md:text-lg text-primary font-semibold tracking-wider uppercase shrink-0">{t('surrogate.integrityLabel')}</p>
            <p className="text-xs md:text-lg text-foreground/90">{t('surrogate.integrity')}</p>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

export default SurrogateActivationSlide;
