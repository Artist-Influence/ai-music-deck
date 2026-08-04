import aiLogo from '@/assets/artist-influence-logo.png';
import NetworkVisual from '../NetworkVisual';
import CoverVisual from '../visuals/CoverVisual';
import { useTranslation } from '@/i18n/LanguageContext';

const CoverSlide = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full min-h-dvh bg-background relative overflow-hidden flex flex-col items-center justify-center">
      <CoverVisual />

      <div className="hidden md:block">
        <NetworkVisual className="opacity-25" nodeCount={80} />
      </div>

      <div className="relative z-10 text-center px-5 md:px-0">
        {/*
          The logo PNG is square with ~35% transparent padding above and below the
          mark. Crop both sides symmetrically (percentage margins resolve against
          the wrapper width, so these scale with the breakpoint) so the wrapper
          hugs the visible mark. Cropping only the bottom, as this once did, left
          a tall void above the logo and pushed the whole composition off-centre.
        */}
        <div data-reveal className="w-[280px] md:w-[800px] mx-auto overflow-hidden mb-6 md:mb-10">
          <img src={aiLogo} alt="Artist Influence" className="w-full block" style={{ marginTop: '-35%', marginBottom: '-35%' }} />
        </div>
        <p className="t-hero text-2xl md:text-6xl text-white mb-4 md:mb-6">{t('cover.tagline')}</p>
        <p data-reveal className="text-base md:text-3xl ink-2">{t('cover.subtitle')}</p>
      </div>

      <p className="mono absolute bottom-6 md:bottom-16 text-xs md:text-base text-muted-foreground/40 tracking-[0.3em] uppercase">
        {t('cover.confidential')}
      </p>
    </div>
  );
};

export default CoverSlide;
