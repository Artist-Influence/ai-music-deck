import { Scissors } from 'lucide-react';
import GlassPanel from '../GlassPanel';
import ariesCover from '@/assets/aries-in-the-flesh.jpg';
import gorgonCityCover from '@/assets/gorgon-city-mitsubishi.jpg';
import yeatCover from '@/assets/yeat-bnyx-im-yeat.jpg';

const cases = [
  {
    artist: 'Aries',
    track: 'In The Flesh',
    img: ariesCover,
    overview: 'Meme-forward creative tied to culturally relevant humor.',
    metrics: [
      { val: '$0.50', label: 'CPM' },
      { val: '1.1M+', label: 'Views' },
      { val: '13.65%', label: 'Engagement' },
      { val: '133K+', label: 'Likes' },
      { val: '164', label: 'Videos' },
    ],
  },
  {
    artist: 'Gorgon City',
    track: 'Mitsubishi',
    img: gorgonCityCover,
    overview: 'Car culture and rave footage via genre-native clippers.',
    metrics: [
      { val: '$0.60', label: 'CPM' },
      { val: '3.08M+', label: 'Views' },
      { val: '3.64%', label: 'Engagement' },
      { val: '102K+', label: 'Likes' },
      { val: '232', label: 'Videos' },
    ],
  },
  {
    artist: 'Yeat, BNYX',
    track: "I'M YEAT",
    img: yeatCover,
    overview: 'High-velocity distribution driving massive engagement at sub-$0.50 CPM.',
    metrics: [
      { val: '$0.43', label: 'CPM' },
      { val: '9.97M+', label: 'Views' },
      { val: '12.25%', label: 'Engagement' },
      { val: '1.17M+', label: 'Likes' },
      { val: '64', label: 'Posts' },
    ],
  },
];

const ClippingSlide = () => (
  <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-16 flex flex-col justify-start md:justify-center">
    <div className="relative z-10 w-full max-w-[1600px] mx-auto">
      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
        <Scissors size={20} className="text-primary md:w-7 md:h-7" />
        <p className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase">Service</p>
      </div>
      <h1 className="text-2xl md:text-6xl font-bold text-foreground mb-2 md:mb-4">Clipping Distribution</h1>
      <p className="text-sm md:text-2xl text-muted-foreground mb-4 md:mb-8 max-w-[900px]">
        A distribution network powered by 20,000+ clippers creating across TikTok, Instagram, and Youtube.
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Left — service info */}
        <div className="flex-1 flex flex-col gap-3 md:gap-4">
          <GlassPanel className="p-4 md:p-7 flex-1">
            <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">Pros</p>
            <div className="space-y-1.5 md:space-y-2.5">
              {[
                'Target viral trends with a strategic campaign brief',
                'Fast velocity and clear reporting',
                'UGC reuse rights for paid and owned channels',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                  <p className="text-xs md:text-2xl text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-4 md:p-7 flex-1">
            <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">Why We Are Different</p>
            <div className="space-y-1.5 md:space-y-2.5">
              {[
                'Strategy driven by music industry professionals',
                'Automatic content moderation for compliance',
                'Bot detection: payment only for genuine views',
                'White glove service with professional reporting',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                  <p className="text-xs md:text-2xl text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-white/[0.06] mt-3">
              <p className="text-xs md:text-2xl text-primary font-medium">Timeframe: 2 to 4 weeks end-to-end</p>
            </div>
          </GlassPanel>
        </div>

        {/* Right — case studies */}
        <div className="flex-1 flex flex-col gap-2 md:gap-3">
          {cases.map((c) => (
            <GlassPanel key={c.artist} variant="bright" className="p-2 md:p-4">
              <div className="flex gap-2 md:gap-4">
                <img
                  src={c.img}
                  alt={`${c.artist} - ${c.track}`}
                  className="w-10 h-10 md:w-20 md:h-20 rounded-lg md:rounded-xl object-cover border border-white/[0.08] shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] md:text-lg text-primary font-mono tracking-widest mb-0.5">CLIPPING</p>
                  <p className="text-xs md:text-xl font-bold text-foreground leading-tight">{c.artist}</p>
                  <p className="text-[10px] md:text-lg text-muted-foreground">{c.track}</p>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-0.5 md:gap-2 mt-1.5 md:mt-3">
                {c.metrics.map((m) => (
                  <div key={m.label} className="bg-white/[0.04] rounded p-1 md:p-2 text-center">
                    <p className="text-[10px] md:text-lg font-bold text-foreground">{m.val}</p>
                    <p className="text-[7px] md:text-sm text-muted-foreground uppercase tracking-wider">{m.label}</p>
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

export default ClippingSlide;
