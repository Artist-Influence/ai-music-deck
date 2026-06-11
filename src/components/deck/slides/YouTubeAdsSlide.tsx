import GlassPanel from '../GlassPanel';
import PatternVisual from '../visuals/PatternVisual';
import { Youtube } from 'lucide-react';
import { useTranslation } from '@/i18n/LanguageContext';

const formatCount = 5;

const YouTubeAdsSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-16 flex flex-col justify-start md:justify-center">
      <PatternVisual />
      <div className="relative z-10 flex flex-col gap-4 md:gap-6 w-full max-w-[1600px] mx-auto">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <Youtube size={20} className="text-primary md:w-7 md:h-7" />
            <p className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase">{t('common.service')}</p>
          </div>
          <h1 className="text-2xl md:text-6xl font-bold text-on-visual mb-2 md:mb-4 leading-tight">{t('youtube.title')}</h1>
          <p className="text-sm md:text-2xl text-on-visual-soft mb-0 max-w-[900px]">{t('youtube.subtitle')}</p>
        </div>

        {/* Two-column row: left panels + right ad formats */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-stretch">
          <div className="flex-1 min-w-0 flex flex-col gap-4 md:gap-6">
            <GlassPanel variant="bright" className="p-4 md:p-8 flex-1">
              <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-4">{t('youtube.whatTitle')}</p>
              <div className="space-y-1.5 md:space-y-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                    <p className="text-xs md:text-2xl text-muted-foreground">{t(`youtube.what.${i}`)}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel variant="bright" className="p-4 md:p-8 flex-1 flex flex-col">
              <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-4">{t('youtube.howTitle')}</p>
              <div className="space-y-1.5 md:space-y-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                    <p className="text-xs md:text-2xl text-muted-foreground">{t(`youtube.how.${i}`)}</p>
                  </div>
                ))}
              </div>
              <div className="pt-3 md:pt-4 border-t border-white/[0.06] mt-3 md:mt-4">
                <p className="text-xs md:text-2xl text-primary font-medium">{t('youtube.timeframe')}</p>
              </div>
            </GlassPanel>
          </div>

          {/* Right: ad formats */}
          <div className="flex-1 min-w-0 flex flex-col">
            <GlassPanel variant="bright" className="p-4 md:p-8 flex-1 flex flex-col">
              <p className="text-sm md:text-2xl font-semibold text-primary mb-3 md:mb-6">{t('youtube.formatsTitle')}</p>
              <div className="flex flex-col gap-2.5 md:gap-4 flex-1 justify-between">
                {Array.from({ length: formatCount }, (_, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 md:px-5 md:py-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/[0.12] border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm md:text-lg">{i + 1}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm md:text-2xl font-bold text-foreground leading-tight">{t(`youtube.format.${i}.name`)}</p>
                      <p className="text-[11px] md:text-lg text-muted-foreground leading-tight">{t(`youtube.format.${i}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeAdsSlide;
