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
  <div className="w-full h-full bg-background relative overflow-hidden p-16 flex flex-col items-center justify-center">
    <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[140px] animate-float" />

    <div className="relative z-10 w-full max-w-[1600px] mx-auto">
      <div className="flex items-center gap-3 mb-3">
        <Scissors size={28} className="text-primary" />
        <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
      </div>
      <h1 className="text-6xl font-bold text-foreground mb-4">Clipping Distribution</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-[900px]">
        A distribution network powered by 20,000+ clippers creating across TikTok, Instagram, and Youtube.
      </p>

      <div className="flex gap-8">
        {/* Left — service info */}
        <div className="flex-1 flex flex-col gap-4 max-w-[750px]">
          <GlassPanel className="p-6">
            <p className="text-lg font-semibold text-primary mb-3">Pros</p>
            <div className="space-y-2">
              {[
                'Target viral trends with a strategic campaign brief',
                'Fast velocity and clear reporting',
                'UGC reuse rights for paid and owned channels',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-6">
            <p className="text-lg font-semibold text-primary mb-3">How it works</p>
            <div className="space-y-2">
              {[
                'Campaigns launch in 24 hours',
                'Runs 7 to 14 days',
                'Every post attributes the official sound and follows brief',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-6">
            <p className="text-lg font-semibold text-primary mb-3">Why We Are Different</p>
            <div className="space-y-2">
              {[
                'Strategy driven by music industry professionals',
                'Automatic content moderation for compliance',
                'Bot detection — payment only for genuine views',
                'White glove service with professional reporting',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-white/[0.06] mt-3">
              <p className="text-lg text-primary font-medium">Timeframe: 2 to 4 weeks end-to-end</p>
            </div>
          </GlassPanel>
        </div>

        {/* Right — case studies */}
        <div className="flex-1 flex flex-col justify-between">
          {cases.map((c) => (
            <GlassPanel key={c.artist} variant="bright" className="p-4">
              <div className="flex gap-4">
                <img
                  src={c.img}
                  alt={`${c.artist} - ${c.track}`}
                  className="w-20 h-20 rounded-xl object-cover border border-white/[0.08] shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-base text-primary font-mono tracking-widest mb-1">CLIPPING</p>
                  <p className="text-lg font-bold text-foreground leading-tight">{c.artist}</p>
                  <p className="text-base text-muted-foreground mb-1">{c.track}</p>
                  <p className="text-base text-muted-foreground leading-relaxed">{c.overview}</p>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-3">
                {c.metrics.map((m) => (
                  <div key={m.label} className="bg-white/[0.04] rounded-lg p-2 text-center">
                    <p className="text-lg font-bold text-foreground">{m.val}</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">{m.label}</p>
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
