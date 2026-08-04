import { Scissors } from 'lucide-react';
import GlassPanel from '../GlassPanel';
import CampaignThumb from '../CampaignThumb';
import PatternVisual from '../visuals/PatternVisual';
import { useTranslation } from '@/i18n/LanguageContext';
import slanderCover from '@/assets/slander-jason-ross-lead-the-way.jpeg';
import fisherCover from '@/assets/fisher-what-a-life.jpeg';
import vicetoneCover from '@/assets/vicetone-nevada.jpeg';

// CPM is spend ÷ total views × 1000, computed from the campaign spend noted per case.
const casesData = [
  {
    // $2,000 spend · 39,498,229 views
    artist: 'SLANDER & Jason Ross', track: 'Lead The Way', artwork: slanderCover,
    metrics: [{ val: '$0.05', labelKey: 'kpi.cpm' }, { val: '39.5M+', labelKey: 'kpi.views' }, { val: '3.10%', labelKey: 'kpi.engagement' }, { val: '975K+', labelKey: 'kpi.likes' }, { val: '1,295', labelKey: 'kpi.videos' }],
  },
  {
    // $2,000 spend · 15,619,590 views
    artist: 'Fisher', track: 'What A Life', artwork: fisherCover,
    metrics: [{ val: '$0.13', labelKey: 'kpi.cpm' }, { val: '15.6M+', labelKey: 'kpi.views' }, { val: '2.72%', labelKey: 'kpi.engagement' }, { val: '344K+', labelKey: 'kpi.likes' }, { val: '1,271', labelKey: 'kpi.videos' }],
  },
  {
    // $3,000 spend · 46,432,870 views
    artist: 'Vicetone', track: 'Nevada', artwork: vicetoneCover,
    metrics: [{ val: '$0.06', labelKey: 'kpi.cpm' }, { val: '46.4M+', labelKey: 'kpi.views' }, { val: '3.35%', labelKey: 'kpi.engagement' }, { val: '1.23M+', labelKey: 'kpi.likes' }, { val: '1,949', labelKey: 'kpi.videos' }],
  },
];

const ClippingSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-16 flex flex-col justify-start md:justify-center">
      <PatternVisual />
      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
          <Scissors size={20} className="text-primary md:w-7 md:h-7" />
          <p className="t-eyebrow text-sm md:text-lg">{t('common.service')}</p>
        </div>
        <h1 className="t-hero text-2xl md:text-6xl text-on-visual mb-2 md:mb-4">{t('clipping.title')}</h1>
        <p className="text-sm md:text-2xl text-on-visual-soft mb-4 md:mb-8 max-w-[900px]">{t('clipping.subtitle')}</p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex-1 flex flex-col gap-3 md:gap-4">
            {/* Sized to its content; the longer panel below takes the slack. */}
            <GlassPanel className="p-4 md:p-7">
              <p className="t-h3 text-sm md:text-2xl text-primary mb-2 md:mb-3">{t('clipping.prosTitle')}</p>
              <div className="space-y-1.5 md:space-y-2.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                    <p className="text-xs md:text-2xl text-muted-foreground">{t(`clipping.pros.${i}`)}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel className="p-4 md:p-7 flex-1 flex flex-col justify-center">
              <p className="t-h3 text-sm md:text-2xl text-primary mb-2 md:mb-3">{t('clipping.diffTitle')}</p>
              <div className="space-y-1.5 md:space-y-2.5">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                    <p className="text-xs md:text-2xl text-muted-foreground">{t(`clipping.diff.${i}`)}</p>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-white/[0.06] mt-3">
                <p className="t-h3 text-xs md:text-2xl text-primary">{t('clipping.timeframe')}</p>
              </div>
            </GlassPanel>
          </div>

          <div className="flex-1 flex flex-col gap-2 md:gap-3">
            {casesData.map((c) => (
              <GlassPanel key={c.artist} variant="bright" className="p-2 md:p-4">
                <div className="flex gap-2 md:gap-4">
                  <CampaignThumb artist={c.artist} track={c.track} artwork={c.artwork}
                    className="w-10 h-10 md:w-20 md:h-20 rounded-lg md:rounded-xl"
                    textClassName="text-xs md:text-2xl" />
                  <div className="flex-1 min-w-0">
                    <p className="t-eyebrow text-[9px] md:text-lg text-primary mb-0.5">{t('clipping.tagLabel')}</p>
                    <p className="t-h3 text-xs md:text-xl text-foreground">{c.artist}</p>
                    <p className="text-[10px] md:text-lg text-muted-foreground">{c.track}</p>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-0.5 md:gap-2 mt-1.5 md:mt-3">
                  {c.metrics.map((m) => (
                    <div key={m.labelKey} className="bg-white/[0.04] rounded p-1 md:p-2 text-center">
                      <p className="stat-num num text-[10px] md:text-lg text-foreground">{m.val}</p>
                      <p className="mono text-[7px] md:text-sm text-muted-foreground uppercase tracking-wider">{t(m.labelKey)}</p>
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

export default ClippingSlide;
