import GlassPanel from '../GlassPanel';
import ServicesVisualizer from '../ServicesVisualizer';
import { Music, Youtube, Instagram, Radio } from 'lucide-react';

const MetaTikTokIcon = () => (
  <div className="relative w-6 h-6 flex items-center justify-center">
    <div className="absolute w-4 h-4 bg-primary rounded-sm flex items-center justify-center text-[8px] font-bold text-primary-foreground">
      f
    </div>
    <div className="absolute w-4 h-4 ml-3 bg-gradient-to-r from-primary to-primary rounded flex items-center justify-center text-[8px] font-bold text-primary-foreground">
      ♪
    </div>
  </div>
);

const services = [
  { icon: <MetaTikTokIcon />, name: 'Meta & TikTok Ads', desc: 'We turn proven native posts into ads to convert streams, sales, touring, and more. Optimized daily, weekly reporting, clean exports.', time: '2–3 weeks' },
  { icon: <Music size={24} className="text-primary" />, name: 'Spotify Playlisting (Organic)', desc: 'Third-party, genre-aligned organic playlist placements designed for discovery and algorithmic pickup. Weekly reporting, stream goals guaranteed.', time: '90 days' },
  { icon: <Youtube size={24} className="text-primary" />, name: 'YouTube Advertising', desc: 'International targeting + optimization to maximize reach while protecting engagement ratios. Built for subscribers, long-form engagement.', time: '1–3 weeks' },
  { icon: <Radio size={24} className="text-primary" />, name: 'SoundCloud Reposts', desc: 'Verified repost network across genre communities with transparent tracking and real engagement intent.' },
  { icon: <Instagram size={24} className="text-primary" />, name: 'Instagram Seeding', desc: 'Genre-aligned page placements with tracking via live dashboard. Built for relevance and cost efficiency.' },
];

const AdditionalServicesSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />

    <div className="relative z-10 w-full max-w-[1600px] mx-auto text-center">
      <h1 className="text-6xl font-bold text-foreground mb-4">Additional services</h1>
      <p className="text-2xl text-muted-foreground mb-16">we can bundle as needed</p>

      <div className="grid grid-cols-3 gap-5 max-w-[1400px] mx-auto">
        {services.map((s, i) => (
          <GlassPanel key={i} className="p-6 hover:bg-white/[0.06] transition-colors flex flex-col">
            <div className="text-2xl mb-4 block flex items-center justify-start">{s.icon}</div>
            <p className="text-xl font-semibold text-foreground mb-2">{s.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-grow">{s.desc}</p>
            <p className={`text-xs font-medium ${s.time ? 'text-primary' : 'invisible'}`}>
              Timeframe: {s.time || '—'}
            </p>
          </GlassPanel>
        ))}
        <GlassPanel className="p-6 flex items-center justify-center">
          <ServicesVisualizer />
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default AdditionalServicesSlide;
