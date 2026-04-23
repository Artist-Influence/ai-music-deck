import GlassPanel from '../GlassPanel';
import { Film } from 'lucide-react';
import { useTranslation } from '@/i18n/LanguageContext';

const tileLabels = ['SPORTS', 'ANIME', 'LYRIC', 'MEME', 'FILM', 'QUOTES', 'GAMING', 'FASHION', 'CARS', 'NIGHTLIFE', 'STREETWEAR', 'MOTIVATION'];

const CultureEditsSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-16 flex flex-col justify-start md:justify-center">
      {/* Background collage grid (decorative) */}
      <div className="hidden md:grid absolute inset-0 grid-cols-4 grid-rows-3 gap-4 p-16 opacity-[0.07] pointer-events-none">
        {tileLabels.map((label, i) => (
          <div key={i} className="rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 to-transparent flex items-end p-4">
            <span className="text-xl font-bold text-primary/80 tracking-wider">{label}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-[5%] right-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-primary/[0.06] blur-[140px]" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
          <Film className="w-4 h-4 md:w-7 md:h-7 text-primary" />
          <p className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase">{t('common.service')}</p>
        </div>

        <h1 className="text-2xl md:text-6xl font-bold text-foreground mb-2 md:mb-4">{t('cultureEdits.title')}</h1>
        <p className="text-sm md:text-2xl text-muted-foreground mb-5 md:mb-8 max-w-[1100px] leading-relaxed">{t('cultureEdits.subtitle')}</p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-3 md:mb-5">
          <GlassPanel className="flex-1 p-4 md:p-7">
            <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-4">{t('cultureEdits.whatTitle')}</p>
            <div className="space-y-1.5 md:space-y-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                  <p className="text-xs md:text-xl text-muted-foreground leading-relaxed">{t(`cultureEdits.what.${i}`)}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="flex-1 p-4 md:p-7">
            <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-4">{t('cultureEdits.whyTitle')}</p>
            <div className="space-y-1.5 md:space-y-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                  <p className="text-xs md:text-xl text-muted-foreground leading-relaxed">{t(`cultureEdits.why.${i}`)}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        <GlassPanel variant="bright" className="p-3 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <p className="text-xs md:text-lg text-primary font-semibold tracking-wider uppercase shrink-0">{t('cultureEdits.bestForLabel')}</p>
            <p className="text-xs md:text-lg text-foreground/90">{t('cultureEdits.bestFor')}</p>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};

export default CultureEditsSlide;
