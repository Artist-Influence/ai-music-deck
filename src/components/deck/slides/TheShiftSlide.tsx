import GlassPanel from '../GlassPanel';
import AtelierFieldVisual from '../visuals/AtelierFieldVisual';
import HubDiagram from '../visuals/HubDiagram';
import { Video, Eye, Users, Megaphone } from 'lucide-react';
import { useTranslation } from '@/i18n/LanguageContext';

const winIcons = [Video, Eye, Users, Megaphone];

/**
 * Merged slide: "music discovery has changed" (what wins today) plus the
 * coordinated-distribution pillars, with the hub/triangle diagram as the
 * visual. Previously two slides (TheShift + WhatWeDo).
 */
const TheShiftSlide = () => {
  const { t } = useTranslation();
  const winItems = winIcons.map((Icon, i) => ({ icon: Icon, text: t(`shift.win.${i}`) }));

  return (
    <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden p-5 md:p-16 flex flex-col justify-start md:justify-center">
      <AtelierFieldVisual variant="mirrored" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col gap-5 md:gap-7">
        {/* Header */}
        <div className="max-w-[1200px]">
          <h1 className="t-hero text-2xl md:text-6xl text-on-visual mb-3 md:mb-5">{t('shift.title')}</h1>
          <p className="text-sm md:text-2xl text-on-visual-soft font-medium leading-relaxed">
            {t('shift.subtitle')}
          </p>
        </div>

        {/* What wins today + the hub diagram */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-12 items-start md:items-center">
          <div className="flex-1 min-w-0 w-full">
            <p className="t-eyebrow text-xs md:text-base text-on-visual-accent mb-3 md:mb-4">{t('shift.section')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3.5">
              {winItems.map((item, i) => (
                <GlassPanel key={i} variant="subtle" className="p-3.5 md:p-5">
                  <div className="flex items-center gap-3 md:gap-4">
                    <item.icon size={18} className="text-primary shrink-0 md:w-[24px] md:h-[24px]" />
                    <p className="text-sm md:text-xl text-foreground">{item.text}</p>
                  </div>
                </GlassPanel>
              ))}
            </div>
          </div>

          {/* Visual — desktop only (matches the rest of the deck) */}
          <div className="hidden md:flex shrink-0 items-center justify-center">
            <HubDiagram size={450} />
          </div>
        </div>

        {/* The three pillars */}
        <div className="border-t border-white/[0.07] pt-4 md:pt-6">
          <p className="t-h3 text-base md:text-3xl text-on-visual mb-1 md:mb-2">{t('whatWeDo.title')}</p>
          <p className="t-eyebrow text-xs md:text-base text-on-visual-accent mb-3 md:mb-4">{t('whatWeDo.section')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-4">
            {[0, 1, 2].map((i) => (
              <GlassPanel key={i} variant="subtle" className="p-3.5 md:p-5">
                <p className="text-primary font-semibold text-sm md:text-xl mb-1 md:mb-2">{t(`whatWeDo.pillar.${i}.label`)}</p>
                <p className="text-xs md:text-lg text-muted-foreground leading-snug">{t(`whatWeDo.pillar.${i}.desc`)}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheShiftSlide;
