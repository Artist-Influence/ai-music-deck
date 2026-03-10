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
      { val: '$700', label: 'Budget' },
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
      { val: '$2,800', label: 'Budget' },
      { val: '3.9M', label: 'Views' },
      { val: '138.7K', label: 'Likes' },
      { val: '$0.00071', label: 'CPV' },
    ],
  },
  {
    artist: 'Francis Mercier',
    track: 'Sauti',
    artwork: francisMercierImg,
    metrics: [
      { val: '$700', label: 'Budget' },
      { val: '16.8M', label: 'Views' },
      { val: '1.18M', label: 'Likes' },
      { val: '$0.000042', label: 'CPV' },
    ],
  },
];

const InstagramSeedingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-12 flex items-center justify-center">
    <div className="absolute bottom-[5%] right-[20%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[140px]" />

    <div className="relative z-10 flex gap-10 items-stretch w-full max-w-[1600px] mx-auto">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Instagram size={28} className="text-primary" />
            <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-4 leading-tight">Instagram Seeding</h1>
          <p className="text-2xl text-muted-foreground mb-6 max-w-[700px]">
            Genre-aligned page placements across EDM pages and meme accounts with tracking via live dashboard.
          </p>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <GlassPanel variant="bright" className="p-8">
            <p className="text-2xl font-semibold text-foreground mb-3">What it is:</p>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              We seed your audio and video content across a curated network of Instagram
              theme pages — EDM community pages and meme accounts that drive real
              engagement within your target audience.
            </p>
          </GlassPanel>

          <GlassPanel variant="bright" className="p-8 flex-1">
            <p className="text-2xl font-semibold text-foreground mb-3">Why it works:</p>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              Theme pages and meme accounts have built-in audiences that actively engage.
              Seeding here drives saves, shares, and audio uses at a fraction of the cost
              of paid ads — built for relevance and cost efficiency.
            </p>
          </GlassPanel>
        </div>

        <p className="text-2xl text-primary font-medium mt-2">Timeframe: 1–3 weeks</p>
      </div>

      {/* Right — 3 Case Studies */}
      <div className="flex-1 min-w-0 flex flex-col gap-3">
        {cases.map((c, idx) => (
          <GlassPanel key={idx} variant="bright" className="p-5 flex-1 flex flex-col justify-center">
            <div className="flex gap-4 mb-3">
              <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/[0.08] shrink-0 bg-black/30 flex items-center justify-center">
                <img src={c.artwork} alt={`${c.artist} - ${c.track}`} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-lg text-primary font-mono tracking-widest mb-1">SEEDING</p>
                <p className="text-2xl font-bold text-foreground leading-tight">{c.artist}</p>
                <p className="text-lg text-muted-foreground">{c.track}</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-foreground">{m.val}</p>
                  <p className="text-lg text-muted-foreground uppercase tracking-wider">{m.label}</p>
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
