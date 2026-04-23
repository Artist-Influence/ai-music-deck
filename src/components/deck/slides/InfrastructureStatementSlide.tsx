import NetworkVisual from '../NetworkVisual';
import { useTranslation } from '@/i18n/LanguageContext';

const InfrastructureStatementSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-hidden flex flex-col items-center justify-center px-5 md:px-20">
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-primary/[0.12] blur-[160px] animate-float" />
      <div className="absolute bottom-[10%] left-[10%] w-[200px] h-[200px] md:w-[500px] md:h-[500px] rounded-full bg-primary/[0.06] blur-[140px] animate-float-slow" />

      <div className="hidden md:block">
        <NetworkVisual className="opacity-15" nodeCount={70} seed={3} />
      </div>

      <div className="relative z-10 text-center max-w-[1400px]">
        <p className="text-[10px] md:text-sm text-primary font-medium tracking-[0.4em] uppercase mb-4 md:mb-8">
          {t('infraStatement.kicker')}
        </p>
        <h1 className="text-4xl md:text-8xl font-bold text-foreground mb-6 md:mb-10 leading-[1.05]">
          {t('infraStatement.titleLine1')} <br />
          <span className="text-primary">{t('infraStatement.titleLine2')}</span>
        </h1>
        <p className="text-base md:text-3xl text-muted-foreground leading-relaxed max-w-[1200px] mx-auto">
          {t('infraStatement.subtitle')}
        </p>

        <div className="mt-8 md:mt-14 inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full border border-primary/40 bg-primary/[0.08]">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <p className="text-xs md:text-base text-primary font-medium tracking-wider uppercase">
            {t('infraStatement.tagline')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureStatementSlide;
