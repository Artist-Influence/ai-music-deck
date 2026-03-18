import GlassPanel from '../GlassPanel';
import { Instagram } from 'lucide-react';
import gordoImg from '@/assets/gordo-gordos-dilemma.jpg';
import mauPImg from '@/assets/mau-p-the-less-i-know-the-better.jpg';
import francisMercierImg from '@/assets/francis-mercier-sauti-artwork.jpg';

const cases = [
  {
    artist: 'Gordo',
    track: "Gordo's Dilemma",
    artwork: gordoImg,
    metrics: [
      { val: '5.4M', label: 'Views' },
      { val: '136.7K', label: 'Likes' },
      { val: '$0.13', label: 'CPM' },
    ],
  },
  {
    artist: 'Mau P',
    track: 'The Less I Know The Better',
    artwork: mauPImg,
    metrics: [
      { val: '3.9M', label: 'Views' },
      { val: '138.7K', label: 'Likes' },
      { val: '$0.71', label: 'CPM' },
    ],
  },
  {
    artist: 'Francis Mercier',
    track: 'Sauti',
    artwork: francisMercierImg,
    metrics: [
      { val: '16.8M', label: 'Views' },
      { val: '1.18M', label: 'Likes' },
      { val: '$0.042', label: 'CPM' },
    ],
  },
];

const InstagramSeedingSlide = () => (
  <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-6 px-5 md:p-12 flex flex-col justify-start md:justify-center">
    <div className="relative z-10 flex flex-col md:flex-row gap-3 md:gap-10 items-stretch w-full max-w-[1600px] mx-auto">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4">
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-4">
            <Instagram size={18} className="text-primary md:w-7 md:h-7" />
            <p className="text-xs md:text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-2xl md:text-6xl font-bold text-foreground mb-1 md:mb-4 leading-tight">Instagram Seeding</h1>
          <p className="text-xs md:text-2xl text-muted-foreground mb-3 md:mb-6 max-w-[700px]">
            Genre-aligned page placements across genre/theme pages and meme accounts with tracking via live dashboard.
          </p>
        </div>

        {/* Mobile: single condensed summary */}
        <GlassPanel variant="bright" className="p-4 md:hidden">
          <div className="space-y-1.5">
            <div className="flex items-start gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5" />
              <p className="text-xs text-muted-foreground">Audio & video seeded across curated IG theme pages & meme accounts</p>
            </div>
            <div className="flex items-start gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5" />
              <p className="text-xs text-muted-foreground">Drives saves, shares & audio uses at a fraction of paid ad cost</p>
            </div>
            <div className="flex items-start gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5" />
              <p className="text-xs text-muted-foreground">Built for relevance & cost efficiency · Timeframe: 1–3 weeks</p>
            </div>
          </div>
        </GlassPanel>

        {/* Desktop: full panels */}
        <GlassPanel variant="bright" className="p-4 md:p-8 hidden md:flex md:flex-col flex-1">
          <p className="text-2xl font-semibold text-primary mb-3">What it is</p>
          <div className="space-y-2.5">
            {[
              'Audio and video content seeded across a curated network of Instagram theme pages',
              'EDM community pages and meme accounts that drive real engagement',
              'Targeted to your specific audience within the genre',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-3" />
                <p className="text-2xl text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel variant="bright" className="p-4 md:p-8 flex-1 hidden md:flex md:flex-col">
          <p className="text-2xl font-semibold text-primary mb-3">Why it works</p>
          <div className="space-y-2.5">
            {[
              'Theme pages and meme accounts have built-in audiences that actively engage',
              'Drives saves, shares, and audio uses at a fraction of the cost of paid ads',
              'Built for relevance and cost efficiency',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-3" />
                <p className="text-2xl text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <p className="text-2xl text-primary font-medium">Timeframe: 1 to 3 weeks</p>
          </div>
        </GlassPanel>
      </div>

      {/* Right — 3 Case Studies */}
      <div className="flex-1 min-w-0 flex flex-col gap-2 md:gap-3">
        {cases.map((c, idx) => (
          <GlassPanel key={idx} variant="bright" className="p-3 md:p-5 flex flex-col">
            <div className="flex gap-2.5 md:gap-4 mb-1 md:mb-3">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden border border-white/[0.08] shrink-0">
                <img src={c.artwork} alt={`${c.artist} - ${c.track}`} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] md:text-lg text-primary font-mono tracking-widest mb-0.5">SEEDING</p>
                <p className="text-sm md:text-2xl font-bold text-foreground leading-tight">{c.artist}</p>
                <p className="text-xs md:text-lg text-muted-foreground">{c.track}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 md:gap-2">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded p-1.5 md:p-3 flex flex-col items-center justify-center text-center">
                  <p className="text-sm md:text-2xl font-bold text-foreground">{m.val}</p>
                  <p className="text-[8px] md:text-lg text-muted-foreground uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default InstagramSeedingSlide;
