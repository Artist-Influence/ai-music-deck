import { Users } from 'lucide-react';
import GlassPanel from '../GlassPanel';
import subtronicsClip1 from '@/assets/subtronics-clip1.jpg';
import skrillexClip1 from '@/assets/skrillex-clip1.png';

const caseStudies = [
  {
    artist: 'Subtronics',
    project: 'Fan Page Network',
    goal: 'Sustained visibility across bass music communities.',
    clip: subtronicsClip1,
    metrics: [
      { val: '5M+', label: 'Views' },
      { val: '150K+', label: 'Likes' },
      { val: '15.9K', label: 'Followers Driven' },
      { val: '600+', label: 'Clips' },
    ],
  },
  {
    artist: 'Skrillex',
    project: 'FUS Album',
    goal: 'Consistent visibility around the FUS album and Ultra set.',
    clip: skrillexClip1,
    metrics: [
      { val: '2.1M+', label: 'Views' },
      { val: '9.5K', label: 'Followers Driven' },
      { val: '6.84%', label: 'Engagement' },
      { val: '1,557', label: 'Posts' },
    ],
  },
];

const FanpagesSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-16 flex flex-col items-center justify-center">
    <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-accent/[0.05] blur-[130px] animate-float-slow" />

    <div className="relative z-10 w-full max-w-[1600px] mx-auto">
      <div className="flex items-center gap-3 mb-3">
        <Users size={28} className="text-primary" />
        <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
      </div>
      <h1 className="text-6xl font-bold text-foreground mb-4">Fanpages</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-[800px]">
        We operate and scale multiple theme pages that consistently target and unify your fan base around your project.
      </p>

      <div className="flex gap-10">
        {/* Left — service info */}
        <div className="flex-1 min-w-0 flex flex-col justify-between gap-4">
          <GlassPanel className="p-6 flex-1">
            <p className="text-lg font-semibold text-primary mb-3">What it is</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A structured content and distribution layer through genre and edit-style pages that already know how to get reach.
            </p>
          </GlassPanel>

          <GlassPanel className="p-6 flex-1">
            <p className="text-lg font-semibold text-primary mb-3">What this is great for</p>
            <div className="space-y-2">
              {[
                'Building repeat exposure without relying on one-off influencer posts',
                'Creating "always-on" visibility while a song ramps',
                'Supporting a full rollout, not just a single moment',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-6 flex-1">
            <p className="text-lg font-semibold text-primary mb-3">What you can expect</p>
            <div className="space-y-2 mb-3">
              {[
                'Consistent posting cadence',
                'Multiple content angles and formats',
                'Iteration based on what the audience responds to',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-white/[0.06]">
              <p className="text-lg text-primary font-medium">Timeframe: Best results from 4 to 8+ weeks</p>
            </div>
          </GlassPanel>
        </div>

        {/* Right — case studies */}
        <div className="flex-1 flex flex-col justify-between">
          {caseStudies.map((c) => (
            <GlassPanel key={c.artist} variant="bright" className="p-5">
              <div className="flex gap-5">
                {/* Hero thumbnail */}
                <div className="w-[140px] shrink-0">
                  <div className="aspect-[9/16] rounded-xl overflow-hidden border-2 border-white/[0.1]">
                    <img src={c.clip} alt={`${c.artist} clip`} className="w-full h-full object-cover object-top" />
                  </div>
                </div>

                {/* Info + metrics */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="mb-3">
                    <p className="text-base text-primary font-mono tracking-widest mb-1">FANPAGES</p>
                    <p className="text-lg font-bold text-foreground leading-tight">{c.artist}</p>
                    <p className="text-base text-muted-foreground">{c.project} — {c.goal}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="bg-white/[0.04] rounded-lg p-2.5 text-center">
                        <p className="text-base font-bold text-foreground">{m.val}</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default FanpagesSlide;
