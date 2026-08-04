import GlassPanel from '../GlassPanel';
import PatternVisual from '../visuals/PatternVisual';
import { Instagram } from 'lucide-react';
import { useTranslation } from '@/i18n/LanguageContext';
import gordoImg from '@/assets/gordo-gordos-dilemma.jpg';
import mauPImg from '@/assets/mau-p-the-less-i-know-the-better.jpg';
import francisMercierImg from '@/assets/francis-mercier-sauti-artwork.jpg';

const cases = [
  {
    artist: 'Gordo', track: "Gordo's Dilemma", artwork: gordoImg,
    metrics: [{ val: '5.4M', labelKey: 'kpi.views' }, { val: '136.7K', labelKey: 'kpi.likes' }, { val: '$0.13', labelKey: 'kpi.cpm' }],
  },
  {
    artist: 'Mau P', track: 'The Less I Know The Better', artwork: mauPImg,
    metrics: [{ val: '3.9M', labelKey: 'kpi.views' }, { val: '138.7K', labelKey: 'kpi.likes' }, { val: '$0.71', labelKey: 'kpi.cpm' }],
  },
  {
    artist: 'Francis Mercier', track: 'Sauti', artwork: francisMercierImg,
    metrics: [{ val: '16.8M', labelKey: 'kpi.views' }, { val: '1.18M', labelKey: 'kpi.likes' }, { val: '$0.042', labelKey: 'kpi.cpm' }],
  },
];

const InstagramSeedingSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-6 px-5 md:p-12 flex flex-col justify-start md:justify-center">
      <PatternVisual />
      <div className="relative z-10 flex flex-col gap-3 md:gap-4 w-full max-w-[1600px] mx-auto">
        {/* Header - full width above the two-column row */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-4">
            <Instagram size={18} className="text-primary md:w-7 md:h-7" />
            <p className="t-eyebrow text-xs md:text-lg">{t('common.service')}</p>
          </div>
          <h1 className="t-hero text-2xl md:text-6xl text-on-visual mb-1 md:mb-4">{t('instagram.title')}</h1>
          <p className="text-xs md:text-2xl text-on-visual-soft mb-0 max-w-[700px]">{t('instagram.subtitle')}</p>
        </div>

        {/* Mobile summary */}
        <GlassPanel variant="bright" className="p-4 md:hidden">
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-start gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5" />
                <p className="text-xs text-muted-foreground">{t(`instagram.mobileSummary.${i}`)}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Two-column row: left panels + right case study cards */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-stretch flex-1">
          <div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4">
            <GlassPanel variant="bright" className="p-4 md:p-8 hidden md:flex md:flex-col md:justify-center flex-1">
              <p className="t-h3 text-2xl text-primary mb-3">{t('instagram.whatTitle')}</p>
              <div className="space-y-2.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-3" />
                    <p className="text-2xl text-muted-foreground">{t(`instagram.what.${i}`)}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel variant="bright" className="p-4 md:p-8 flex-1 hidden md:flex md:flex-col md:justify-center">
              <p className="t-h3 text-2xl text-primary mb-3">{t('instagram.whyTitle')}</p>
              <div className="space-y-2.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-3" />
                    <p className="text-2xl text-muted-foreground">{t(`instagram.why.${i}`)}</p>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-white/[0.06] mt-3">
                <p className="t-h3 text-2xl text-primary">{t('instagram.timeframe')}</p>
              </div>
            </GlassPanel>
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-2 md:gap-3 justify-between">
            {cases.map((c, idx) => (
              <GlassPanel key={idx} variant="bright" className="p-3 md:p-5 flex flex-col">
                <div className="flex gap-2.5 md:gap-4 mb-1 md:mb-3">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden border border-white/[0.08] shrink-0">
                    <img loading="lazy" decoding="async" src={c.artwork} alt={`${c.artist} - ${c.track}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="t-eyebrow text-[10px] md:text-lg text-primary mb-0.5">{t('instagram.tagLabel')}</p>
                    <p className="t-h3 text-sm md:text-2xl text-foreground">{c.artist}</p>
                    <p className="text-xs md:text-lg text-muted-foreground">{c.track}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 md:gap-2">
                  {c.metrics.map((m) => (
                    <div key={m.labelKey} className="bg-white/[0.04] rounded p-1.5 md:p-3 flex flex-col items-center justify-center text-center">
                      <p className="stat-num num text-sm md:text-2xl text-foreground">{m.val}</p>
                      <p className="mono text-[8px] md:text-lg text-muted-foreground uppercase tracking-wider">{t(m.labelKey)}</p>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramSeedingSlide;
