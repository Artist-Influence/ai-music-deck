import GlassPanel from '../GlassPanel';
import PatternVisual from '../visuals/PatternVisual';
import { useTranslation } from '@/i18n/LanguageContext';

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

const LinkedInIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" fill="currentColor"/>
  </svg>
);

const XIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M18.24 2.25h3.31l-7.23 8.26L22.86 21.75h-6.66l-5.22-6.82-5.97 6.82H1.69l7.73-8.84L1.5 2.25h6.83l4.71 6.23 5.2-6.23zm-1.16 17.52h1.83L7.01 4.13H5.05L17.08 19.77z" fill="currentColor"/>
  </svg>
);

const OpenAIIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M22.28 9.82a5.98 5.98 0 00-.52-4.91 6.05 6.05 0 00-6.51-2.9A6.07 6.07 0 004.98 4.18a5.98 5.98 0 00-4 2.9 6.05 6.05 0 00.75 7.09 5.98 5.98 0 00.52 4.91 6.05 6.05 0 006.51 2.9A5.98 5.98 0 0019.02 19.8a5.98 5.98 0 003.99-2.9 6.05 6.05 0 00-.74-7.08zM13.5 21.4a4.49 4.49 0 01-2.88-1.04l.14-.08 4.78-2.76a.78.78 0 00.4-.68v-6.74l2.02 1.17a.07.07 0 01.04.05v5.58a4.5 4.5 0 01-4.5 4.5zM3.84 17.27a4.47 4.47 0 01-.54-3.02l.14.08 4.78 2.76a.78.78 0 00.79 0l5.84-3.37v2.33a.07.07 0 01-.03.06l-4.83 2.79a4.5 4.5 0 01-6.15-1.64zM2.58 7.94a4.49 4.49 0 012.35-1.97v5.68a.78.78 0 00.39.68l5.84 3.37-2.02 1.17a.07.07 0 01-.07 0l-4.83-2.79a4.5 4.5 0 01-1.66-6.14zM18.66 11.66l-5.84-3.37 2.02-1.17a.07.07 0 01.07 0l4.83 2.79a4.5 4.5 0 01-.68 8.11v-5.68a.78.78 0 00-.4-.68zM20.67 8.62l-.14-.08-4.78-2.76a.78.78 0 00-.79 0L9.12 9.15V6.82a.07.07 0 01.03-.06l4.83-2.78a4.5 4.5 0 016.69 4.64zM8.02 12.78L6 11.61a.07.07 0 01-.04-.05V5.98a4.5 4.5 0 017.38-3.45l-.14.08-4.78 2.76a.78.78 0 00-.4.68v6.73zm1.1-2.36L11.72 8.92l2.6 1.5v3l-2.6 1.5-2.6-1.5v-3z" fill="currentColor"/>
  </svg>
);

const platforms = [
  { name: 'LinkedIn', Icon: LinkedInIcon },
  { name: 'X', Icon: XIcon },
  { name: 'Meta', Icon: FacebookIcon },
  { name: 'TikTok', Icon: TikTokIcon },
  { name: 'OpenAI', Icon: OpenAIIcon },
];

const HeaderIcon = () => (
  <div className="flex items-center gap-2 md:gap-3">
    <FacebookIcon size={20} />
    <TikTokIcon size={20} />
  </div>
);

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2">
    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
    <p className="text-xs md:text-2xl text-muted-foreground">{children}</p>
  </div>
);

const AdditionalServicesSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-16 flex flex-col justify-start md:justify-center">
      <PatternVisual />
      <div className="relative z-10 flex flex-col gap-4 md:gap-6 w-full max-w-[1600px] mx-auto">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <HeaderIcon />
            <p className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase">{t('common.service')}</p>
          </div>
          <h1 className="text-2xl md:text-6xl font-bold text-on-visual mb-2 md:mb-4 leading-tight">{t('metaTiktok.title')}</h1>
          <p className="text-sm md:text-2xl text-on-visual-soft mb-0 max-w-[900px]">{t('metaTiktok.subtitle')}</p>
        </div>

        {/* Two-column row: left panels + right platforms */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-stretch">
          <div className="flex-1 min-w-0 flex flex-col gap-4 md:gap-6">
            <GlassPanel variant="bright" className="p-4 md:p-8 flex-1">
              <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-4">{t('metaTiktok.whatTitle')}</p>
              <div className="space-y-1.5 md:space-y-3">
                {[0, 1, 2].map((i) => (
                  <BulletPoint key={i}>{t(`metaTiktok.what.${i}`)}</BulletPoint>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel variant="bright" className="p-4 md:p-8 flex-1 flex flex-col">
              <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-4">{t('metaTiktok.howTitle')}</p>
              <div className="space-y-1.5 md:space-y-3">
                {[0, 1, 2].map((i) => (
                  <BulletPoint key={i}>{t(`metaTiktok.how.${i}`)}</BulletPoint>
                ))}
              </div>
              <div className="pt-3 md:pt-4 border-t border-white/[0.06] mt-3 md:mt-4">
                <p className="text-xs md:text-2xl text-primary font-medium">{t('metaTiktok.timeframe')}</p>
              </div>
            </GlassPanel>
          </div>

          {/* Right: platforms */}
          <div className="flex-1 min-w-0 flex flex-col">
            <GlassPanel variant="bright" className="p-4 md:p-8 flex-1 flex flex-col">
              <p className="text-sm md:text-2xl font-semibold text-primary mb-3 md:mb-6">{t('metaTiktok.platformsTitle')}</p>
              <div className="flex flex-col gap-2.5 md:gap-4 flex-1 justify-between">
                {platforms.map((p, i) => {
                  const Icon = p.Icon;
                  return (
                    <div key={p.name} className="flex items-center gap-3 md:gap-5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 md:px-5 md:py-4">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/[0.12] border border-primary/30 flex items-center justify-center shrink-0">
                        <Icon size={22} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm md:text-2xl font-bold text-foreground leading-tight">{p.name}</p>
                        <p className="text-[11px] md:text-lg text-muted-foreground leading-tight">{t(`metaTiktok.platform.${i}.desc`)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServicesSlide;
