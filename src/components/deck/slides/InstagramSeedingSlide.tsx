import GlassPanel from '../GlassPanel';
import { Instagram } from 'lucide-react';
import francisMercierImg from '@/assets/francis-mercier-sauti.png';

const metrics = [
  { val: '16.4M', label: 'Views' },
  { val: '$0.03', label: 'CPM' },
  { val: '89.2K', label: 'Saves' },
  { val: '7.16%', label: 'Engagement' },
];

const InstagramSeedingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute bottom-[5%] right-[20%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[140px]" />

    <div className="relative z-10 flex gap-10 items-stretch w-full max-w-[1600px] mx-auto">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-4">
          <Instagram size={28} className="text-primary" />
          <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
        </div>
        <h1 className="text-5xl font-bold text-foreground mb-3 leading-tight">Instagram Seeding</h1>
        <p className="text-2xl text-muted-foreground mb-10 max-w-[600px]">
          Genre-aligned page placements across EDM pages and meme accounts with tracking via live dashboard.
        </p>

        <div className="space-y-5">
          <GlassPanel variant="bright" className="p-5">
            <p className="text-xl font-semibold text-foreground mb-2">What it is:</p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We seed your audio and video content across a curated network of Instagram
              theme pages — EDM community pages and meme accounts that drive real
              engagement within your target audience.
            </p>
          </GlassPanel>

          <GlassPanel variant="bright" className="p-5">
            <p className="text-xl font-semibold text-foreground mb-2">Why it works:</p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Theme pages and meme accounts have built-in audiences that actively engage.
              Seeding here drives saves, shares, and audio uses at a fraction of the cost
              of paid ads — built for relevance and cost efficiency.
            </p>
          </GlassPanel>

          <GlassPanel variant="subtle" className="p-4">
            <p className="text-base text-primary font-medium">Timeframe: 1–3 weeks</p>
          </GlassPanel>
        </div>
      </div>

      {/* Right — Case Study */}
      <div className="flex-1 min-w-0 flex items-center justify-center">
        <GlassPanel variant="bright" className="p-6 flex flex-col">
          <p className="text-base text-primary font-mono mb-2 tracking-widest">CASE STUDY</p>
          <p className="text-3xl font-bold text-foreground leading-tight">Francis Mercier</p>
          <p className="text-xl text-muted-foreground mb-2">Sauti</p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Global audio seeding across Afro House audiences and LATAM markets.
          </p>

          <div className="max-h-[380px] rounded-lg border border-white/[0.08] overflow-hidden mb-4 bg-black/30">
            <img
              src={francisMercierImg}
              alt="Francis Mercier — Sauti"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-foreground">{m.val}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default InstagramSeedingSlide;
