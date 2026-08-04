import GlassPanel from '../GlassPanel';
import CampaignThumb from '../CampaignThumb';
import PatternVisual from '../visuals/PatternVisual';
import { useTranslation } from '@/i18n/LanguageContext';
import gordoImg from '@/assets/gordo-meta-tiktok.webp';
import mashbitImg from '@/assets/mashbit-portrait.jpg';
import tPainImg from '@/assets/t-pain-portrait.jpeg';

const TikTokIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0015.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z" fill="currentColor"/>
  </svg>
);

const FacebookIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7A10 10 0 0022 12.06C22 6.53 17.5 2.04 12 2.04z" fill="currentColor"/>
  </svg>
);

const MetaTikTokIcon = () => (
  <div className="flex items-center gap-2 md:gap-3">
    <FacebookIcon size={20} />
    <TikTokIcon size={20} />
  </div>
);

const cases = [
  {
    platform: 'TIKTOK ADS', artist: 'Gordo (@gordoszn)', track: 'Brand Awareness Campaign',
    descKey: 'metaTiktok.case1Desc', thumb: gordoImg, imgPosition: 'object-top',
    metrics: [{ val: '1.4M', labelKey: 'kpi.impressions' }, { val: '$0.31', labelKey: 'kpi.cpm' }, { val: '500.7K', labelKey: 'kpi.sixSecViews' }, { val: '34.7%', labelKey: 'kpi.viewRate' }],
  },
  {
    // $889 spend · 8,741 link clicks · 274 tickets sold → $889/274 = $3.24 per ticket
    platform: 'META ADS', artist: 'Mashbit', track: 'Houston Takeover, event push',
    descKey: 'metaTiktok.case2Desc', thumb: mashbitImg,
    metrics: [{ val: '8,741', labelKey: 'kpi.linkClicks' }, { val: '8.8%', labelKey: 'kpi.ctr' }, { val: '$0.10', labelKey: 'kpi.costPerClick' }, { val: '274', labelKey: 'kpi.ticketsSold' }, { val: '$3.24', labelKey: 'kpi.costPerTicket' }],
  },
  {
    // $4,823 spend · 912,770 all-time streams · Instagram +124,672 since 7/16
    platform: 'META ADS', artist: 'T-Pain', track: 'STFU, Spotify scaling push',
    descKey: 'metaTiktok.case3Desc', thumb: tPainImg,
    metrics: [{ val: '912K+', labelKey: 'kpi.spotifyStreams' }, { val: '$0.0053', labelKey: 'kpi.costPerStream' }, { val: '17.6%', labelKey: 'kpi.ctr' }, { val: '+124K', labelKey: 'kpi.igFollowerGrowth' }],
  },
];

// Cards carry either 4 or 5 metrics; Tailwind needs the class spelled out statically.
const metricGridCols: Record<number, string> = { 4: 'grid-cols-4', 5: 'grid-cols-5' };

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2">
    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
    <p className="text-xs md:text-2xl text-muted-foreground">{children}</p>
  </div>
);

const AdditionalServicesSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-12 flex flex-col justify-start md:justify-center">
      <PatternVisual />
      <div className="relative z-10 flex flex-col gap-3 md:gap-4 w-full max-w-[1600px] mx-auto">
        {/* Header - full width above the two-column row */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <MetaTikTokIcon />
            <p className="t-eyebrow text-sm md:text-lg">{t('common.service')}</p>
          </div>
          <h1 className="t-hero text-2xl md:text-6xl text-on-visual mb-2 md:mb-4">{t('metaTiktok.title')}</h1>
          <p className="text-sm md:text-2xl text-on-visual-soft mb-0 max-w-[700px]">{t('metaTiktok.subtitle')}</p>
        </div>

        {/* Two-column row: left panels + right case study cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-stretch flex-1">
          <div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4">
            <GlassPanel centerY variant="bright" className="p-4 md:p-8 flex-1 flex flex-col">
              <p className="t-h3 text-sm md:text-2xl text-primary mb-2 md:mb-3">{t('metaTiktok.whatTitle')}</p>
              <div className="space-y-1.5 md:space-y-2.5">
                {[0, 1, 2].map((i) => (
                  <BulletPoint key={i}>{t(`metaTiktok.what.${i}`)}</BulletPoint>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel centerY variant="bright" className="p-4 md:p-8 flex-1 flex flex-col">
              <p className="t-h3 text-sm md:text-2xl text-primary mb-2 md:mb-3">{t('metaTiktok.howTitle')}</p>
              <div className="space-y-1.5 md:space-y-2.5">
                {[0, 1, 2].map((i) => (
                  <BulletPoint key={i}>{t(`metaTiktok.how.${i}`)}</BulletPoint>
                ))}
              </div>
              <div className="pt-3 border-t border-white/[0.06] mt-3">
                <p className="t-h3 text-xs md:text-2xl text-primary">{t('metaTiktok.timeframe')}</p>
              </div>
            </GlassPanel>
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-1.5 md:gap-2.5 justify-between">
            {cases.map((c, idx) => (
              <GlassPanel key={idx} variant="bright" className="p-2 md:p-4 flex flex-col">
                <div className="flex flex-row gap-2 md:gap-4 mb-1.5 md:mb-2.5">
                  <CampaignThumb artist={c.artist} artwork={c.thumb} imgPosition={c.imgPosition}
                    className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-lg md:rounded-xl"
                    textClassName="text-lg md:text-4xl" />
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="t-eyebrow text-[10px] md:text-base text-primary mb-0.5">{c.platform}</p>
                    <p className="t-h3 text-sm md:text-2xl text-foreground">{c.artist}</p>
                    <p className="text-xs md:text-lg text-muted-foreground">{c.track}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 mb-1 md:mb-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1 md:mt-2" />
                  <p className="text-[10px] md:text-base text-muted-foreground leading-snug">{t(c.descKey)}</p>
                </div>

                <div className={`grid ${metricGridCols[c.metrics.length] ?? 'grid-cols-4'} gap-0.5 md:gap-2 mt-auto`}>
                  {c.metrics.map((m) => (
                    <div key={m.labelKey} className="bg-white/[0.04] rounded p-1 md:px-2 md:py-2 text-center flex flex-col items-center justify-center">
                      <p className="stat-num num text-[10px] md:text-xl text-foreground">{m.val}</p>
                      <p className="mono text-[7px] md:text-xs text-muted-foreground uppercase tracking-wider leading-tight">{t(m.labelKey)}</p>
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

export default AdditionalServicesSlide;
