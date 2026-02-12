import GlassPanel from '../GlassPanel';

const services = [
  { icon: '📢', name: 'Meta & TikTok Ads', desc: 'We turn proven native posts into ads to convert streams, sales, touring, and more. Optimized daily, weekly reporting, clean exports.', time: '2–3 weeks' },
  { icon: '🎵', name: 'Spotify Playlisting (Organic)', desc: 'Third-party, genre-aligned organic playlist placements designed for discovery and algorithmic pickup. Weekly reporting, stream goals guaranteed.', time: '90 days' },
  { icon: '▶️', name: 'YouTube Advertising', desc: 'International targeting + optimization to maximize reach while protecting engagement ratios. Built for subscribers, long-form engagement.', time: '1–3 weeks' },
  { icon: '🔁', name: 'SoundCloud Reposts', desc: 'Verified repost network across genre communities with transparent tracking and real engagement intent.' },
  { icon: '📱', name: 'Instagram Seeding', desc: 'Genre-aligned page placements with tracking via live dashboard. Built for relevance and cost efficiency.' },
];

const AdditionalServicesSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-4">Additional services</h1>
      <p className="text-2xl text-muted-foreground mb-16">we can bundle as needed</p>

      <div className="grid grid-cols-3 gap-5 max-w-[1400px]">
        {services.map((s, i) => (
          <GlassPanel key={i} className="p-6 hover:bg-white/[0.06] transition-colors">
            <span className="text-3xl mb-4 block">{s.icon}</span>
            <p className="text-xl font-semibold text-foreground mb-2">{s.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
            {s.time && (
              <p className="text-xs text-primary font-medium">Timeframe: {s.time}</p>
            )}
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default AdditionalServicesSlide;
