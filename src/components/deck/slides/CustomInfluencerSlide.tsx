import GlassPanel from '../GlassPanel';
import PatternVisual from '../visuals/PatternVisual';
import { Sparkles } from 'lucide-react';
import { useTranslation } from '@/i18n/LanguageContext';

/**
 * Custom Influencer Campaigns.
 *
 * NOTE: the three campaign cards are intentionally metric-free for now.
 * Artist/track come straight from the brief; artwork + performance metrics
 * are still owed. When they land, add `artwork` + `metrics` here and mirror
 * the metrics grid used in InstagramSeedingSlide.tsx.
 */
const cases = [
  { artist: 'Vicetone', track: 'Nevada' },
  { artist: 'T-Pain', track: 'STFU' },
  { artist: 'Gryffin', track: 'Spin Me Slowly' },
];

/**
 * Two-letter monogram stands in until real cover art is supplied.
 * Multi-word/hyphenated names take one letter per word ("T-Pain" → TP);
 * single words take their first two ("Vicetone" → VI).
 */
const initialsOf = (artist: string) => {
  const words = artist.split(/[^A-Za-z0-9]+/).filter(Boolean);
  const letters = words.length > 1
    ? words.slice(0, 2).map((w) => w[0]).join('')
    : (words[0] ?? artist).slice(0, 2);
  return letters.toUpperCase();
};

const Monogram = ({ artist }: { artist: string }) => (
  <div className="w-12 h-12 md:w-20 md:h-20 rounded-lg md:rounded-xl shrink-0 border border-white/[0.08] bg-primary/[0.08] flex items-center justify-center">
    <span className="t-h3 text-base md:text-3xl text-primary/80">{initialsOf(artist)}</span>
  </div>
);

const CustomInfluencerSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-6 px-5 md:p-12 flex flex-col justify-start md:justify-center">
      <PatternVisual />
      <div className="relative z-10 flex flex-col gap-3 md:gap-4 w-full max-w-[1600px] mx-auto">
        {/* Header */}
        <div>
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
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-stretch flex-1">
          <div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4">
            <GlassPanel variant="bright" className="p-4 md:p-8 hidden md:flex md:flex-col flex-1">
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

            <GlassPanel variant="bright" className="p-4 md:p-8 flex-1 hidden md:flex md:flex-col">
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
                <p className="t-eyebrow text-2xl text-primary">{t('influencer.timeframe')}</p>
              </div>
            </GlassPanel>
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-2 md:gap-3 justify-between">
            {cases.map((c) => (
              <GlassPanel key={`${c.artist}-${c.track}`} variant="bright" className="p-3 md:p-5 flex flex-col justify-center">
                <div className="flex gap-2.5 md:gap-4 items-center">
                  <Monogram artist={c.artist} />
                  <div className="flex-1 min-w-0">
                    <p className="t-eyebrow text-[10px] md:text-lg text-primary mb-0.5">{t('influencer.tagLabel')}</p>
                    <p className="t-h3 text-sm md:text-2xl text-foreground">{c.artist}</p>
                    <p className="text-xs md:text-lg text-muted-foreground">{c.track}</p>
                  </div>
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
