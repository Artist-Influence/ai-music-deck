import { useState } from 'react';
import { Scissors, Film } from 'lucide-react';
import GlassPanel from '../GlassPanel';
import PatternVisual from '../visuals/PatternVisual';
import { useTranslation } from '@/i18n/LanguageContext';

// Real campaign. Only CPM is public; every other metric stays under NDA.
const zohran = { name: 'Zohran', cpm: '$0.39' };

// Sample clips from the campaign, served from public/clips/.
const clips = ['/clips/clip-1.mp4', '/clips/clip-2.mp4'];

const PhoneClip = ({ src }: { src: string }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative w-[150px] md:w-[300px] aspect-[9/16] rounded-2xl md:rounded-[28px] border border-white/10 bg-black overflow-hidden shadow-[0_24px_70px_-20px_hsl(0_72%_51%/0.45)]">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-12 md:w-20 h-1 md:h-1.5 rounded-full bg-white/20" />
      {!failed ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/15 via-background to-background">
          <Film className="w-7 h-7 md:w-10 md:h-10 text-primary" />
          <p className="text-[10px] md:text-sm text-muted-foreground tracking-wider uppercase">Clip</p>
        </div>
      )}
    </div>
  );
};

const ClippingSlide = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-16 flex flex-col justify-start md:justify-center">
      <PatternVisual />
      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
          <Scissors size={20} className="text-primary md:w-7 md:h-7" />
          <p className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase">{t('common.service')}</p>
        </div>
        <h1 className="text-2xl md:text-6xl font-bold text-on-visual mb-2 md:mb-4">{t('clipping.title')}</h1>
        <p className="text-sm md:text-2xl text-on-visual-soft mb-4 md:mb-8 max-w-[900px]">{t('clipping.subtitle')}</p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-stretch">
          <div className="flex-1 flex flex-col gap-3 md:gap-4">
            <GlassPanel className="p-4 md:p-7 flex-1">
              <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">{t('clipping.prosTitle')}</p>
              <div className="space-y-1.5 md:space-y-2.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                    <p className="text-xs md:text-2xl text-muted-foreground">{t(`clipping.pros.${i}`)}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel className="p-4 md:p-7 flex-1">
              <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">{t('clipping.diffTitle')}</p>
              <div className="space-y-1.5 md:space-y-2.5">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                    <p className="text-xs md:text-2xl text-muted-foreground">{t(`clipping.diff.${i}`)}</p>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-white/[0.06] mt-3">
                <p className="text-xs md:text-2xl text-primary font-medium">{t('clipping.timeframe')}</p>
              </div>
            </GlassPanel>
          </div>

          <div className="flex-1 flex flex-col gap-3 md:gap-5">
            {/* Compact campaign result: name left, CPM right, note in footer */}
            <GlassPanel variant="bright" className="p-4 md:p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[9px] md:text-sm text-primary font-mono tracking-widest uppercase mb-0.5 md:mb-1">{t('clipping.casesHeader')}</p>
                  <p className="text-xl md:text-4xl font-bold text-foreground leading-tight">{zohran.name}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-2xl md:text-5xl font-bold text-primary leading-none">{zohran.cpm}</p>
                  <p className="text-[8px] md:text-sm text-muted-foreground uppercase tracking-wider mt-0.5 md:mt-1">{t('kpi.cpm')}</p>
                </div>
              </div>
              <p className="text-[10px] md:text-sm text-muted-foreground/70 mt-2.5 md:mt-3 pt-2.5 md:pt-3 border-t border-white/[0.06]">
                {t('clipping.casesNote')} {t('clipping.confidential')}.
              </p>
            </GlassPanel>

            {/* Sample clips, sized to fill the column */}
            <div className="flex gap-3 md:gap-4 justify-center items-center flex-1">
              {clips.map((src) => (
                <PhoneClip key={src} src={src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClippingSlide;
