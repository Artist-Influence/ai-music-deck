import GlassPanel from '../GlassPanel';
import CampaignThumb from '../CampaignThumb';
import PatternVisual from '../visuals/PatternVisual';
import { Sparkles } from 'lucide-react';
import { useTranslation } from '@/i18n/LanguageContext';
import vicetoneCover from '@/assets/vicetone-nevada.jpeg';
import tPainStfuCover from '@/assets/t-pain-stfu.jpeg';

// Creator-campaign results. No media spend is attributed to these campaigns,
// so there is no CPM to quote; reach and top-post pull are the proof instead.
const cases = [
  {
    // 4,838,376 views · 320,790 likes · 35 live posts · 19,415,831 estimated reach
    artist: 'Vicetone', track: 'Nevada (Dubstep Mix)', descKey: 'influencer.case1Desc',
    artwork: vicetoneCover,
    metrics: [
      { val: '4.84M+', labelKey: 'kpi.views' },
      { val: '320K+', labelKey: 'kpi.likes' },
      { val: '7.81%', labelKey: 'kpi.engagement' },
      { val: '1.3M', labelKey: 'kpi.topPostViews' },
    ],
  },
  {
    // 2,367,185 views · 112,541 likes · 41 live posts · 18,886,304 estimated reach
    artist: 'T-Pain', track: 'STFU', descKey: 'influencer.case2Desc',
    artwork: tPainStfuCover,
    metrics: [
      { val: '2.37M+', labelKey: 'kpi.views' },
      { val: '112K+', labelKey: 'kpi.likes' },
      { val: '5.33%', labelKey: 'kpi.engagement' },
      { val: '767K', labelKey: 'kpi.topPostViews' },
    ],
  },
];

const CustomInfluencerSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-6 px-5 md:px-12 md:py-7 flex flex-col justify-start md:justify-center">
      <PatternVisual />
      <div className="relative z-10 flex flex-col gap-3 w-full max-w-[1600px] mx-auto md:gap-0 md:h-full md:grid md:grid-rows-[1fr_auto_1fr]">
        {/* Header */}
        <div className="md:self-end md:pb-6">
          <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-4">
            <Sparkles size={18} className="text-primary md:w-7 md:h-7" />
            <p className="t-eyebrow text-xs md:text-lg">{t('common.service')}</p>
          </div>
          <h1 className="t-hero text-2xl md:text-6xl text-on-visual mb-1 md:mb-4">{t('influencer.title')}</h1>
          <p className="text-xs md:text-2xl text-on-visual-soft mb-0 max-w-[700px]">{t('influencer.subtitle')}</p>
        </div>

        {/* Mobile summary */}
        <GlassPanel variant="bright" className="p-4 md:hidden">
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-start gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5" />
                <p className="text-xs text-muted-foreground">{t(`influencer.mobileSummary.${i}`)}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Two-column row: left panels + right campaign cards */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-stretch">
          <div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4">
            <GlassPanel centerY variant="bright" className="p-4 md:p-8 hidden md:flex md:flex-col flex-1">
              <p className="t-h3 text-2xl text-primary mb-3">{t('influencer.whatTitle')}</p>
              <div className="space-y-2.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-3" />
                    <p className="text-2xl text-muted-foreground">{t(`influencer.what.${i}`)}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel centerY variant="bright" className="p-4 md:p-8 flex-1 hidden md:flex md:flex-col">
              <p className="t-h3 text-2xl text-primary mb-3">{t('influencer.whyTitle')}</p>
              <div className="space-y-2.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-3" />
                    <p className="text-2xl text-muted-foreground">{t(`influencer.why.${i}`)}</p>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-white/[0.06] mt-3">
                <p className="t-h3 text-2xl text-primary">{t('influencer.timeframe')}</p>
              </div>
            </GlassPanel>
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-2 md:gap-4 justify-center">
            {cases.map((c) => (
              <GlassPanel key={`${c.artist}-${c.track}`} variant="bright" className="p-3 md:p-4 flex flex-col">
                <div className="flex gap-2.5 md:gap-5 mb-1.5 md:mb-2.5">
                  <CampaignThumb artist={c.artist} track={c.track} artwork={c.artwork}
                    className="w-12 h-12 md:w-20 md:h-20 rounded-lg md:rounded-xl"
                    textClassName="text-base md:text-4xl" />
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <p className="t-eyebrow text-[10px] md:text-lg text-primary mb-0.5">{t('influencer.tagLabel')}</p>
                    <p className="t-h3 text-sm md:text-3xl text-foreground">{c.artist}</p>
                    <p className="text-xs md:text-xl text-muted-foreground">{c.track}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 mb-1.5 md:mb-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1 md:mt-2.5" />
                  <p className="text-[10px] md:text-lg text-muted-foreground">{t(c.descKey)}</p>
                </div>

                <div className="grid grid-cols-4 gap-1 md:gap-3">
                  {c.metrics.map((m) => (
                    <div key={m.labelKey} className="bg-white/[0.04] rounded p-1.5 md:px-3 md:py-2 flex flex-col items-center justify-center text-center">
                      <p className="stat-num num text-sm md:text-2xl text-foreground">{m.val}</p>
                      <p className="mono text-[8px] md:text-sm text-muted-foreground uppercase tracking-wider leading-tight">{t(m.labelKey)}</p>
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

export default CustomInfluencerSlide;
