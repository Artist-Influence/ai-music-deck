import GlassPanel from '../GlassPanel';

const services = [
  { icon: '🎬', name: 'Culture Edits', desc: 'Cinematic, trend-driven content that lives beyond music feeds' },
  { icon: '⚡', name: 'Spark Ads', desc: 'Paid amplification on proven creative — managed end to end' },
  { icon: '🎵', name: 'Spotify', desc: 'Playlist pitching and editorial strategy for streaming growth' },
  { icon: '▶️', name: 'YouTube Ads', desc: 'Targeted video ad campaigns for discovery and subscriber growth' },
  { icon: '🔁', name: 'SoundCloud Reposts', desc: 'Repost network activation for SoundCloud-native audiences' },
  { icon: '📱', name: 'Instagram Seeding', desc: 'Clustered posting across curated IG accounts for maximum reach' },
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
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default AdditionalServicesSlide;
