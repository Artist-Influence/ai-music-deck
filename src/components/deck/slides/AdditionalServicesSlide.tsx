import GlassPanel from '../GlassPanel';
import ServicesVisualizer from '../ServicesVisualizer';
import { Youtube, Instagram } from 'lucide-react';

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

const SpotifyIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.224-2.719a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.453-1.493c3.632-1.102 8.147-.568 11.234 1.329a.78.78 0 01.256 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.934.934 0 11-.542-1.79c3.533-1.072 9.404-.865 13.115 1.338a.934.934 0 01-.955 1.612z" fill="currentColor"/>
  </svg>
);

const SoundCloudIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M1.5 14.25l.5-2.5.5 2.5-.5 2-.5-2zm2-1l.5-3.5.5 3.5-.5 2.5-.5-2.5zm2-.75l.5-4 .5 4-.5 3-.5-3zm2 .25l.5-5 .5 5-.5 2.5-.5-2.5zm2-1.5l.5-4.5.5 4.5-.5 4-.5-4zM11.5 9l.5-4 .5 4-.5 7.5-.5-7.5zm2.5-.5c-.3 0-.5.1-.7.2l-.3-1.2c.3-.1.6-.2 1-.2 2.8 0 5 2.2 5 5s-2.2 5-5 5H11l.5-7.5-.5-4c.6-.8 1.5-1.3 2.5-1.3z" fill="currentColor"/>
  </svg>
);

const services = [
  { icon: <MetaTikTokIcon />, name: 'Meta & TikTok Ads', desc: 'We turn proven native posts into ads to convert streams, sales, touring, and more. Optimized daily, weekly reporting, clean exports.', time: '2–3 weeks' },
  { icon: <SpotifyIcon size={24} />, name: 'Spotify Playlisting (Organic)', desc: 'Third-party, genre-aligned organic playlist placements designed for discovery and algorithmic pickup. Weekly reporting, stream goals guaranteed.', time: '90 days' },
  { icon: <Youtube size={24} className="text-primary" />, name: 'YouTube Advertising', desc: 'International targeting + optimization to maximize reach while protecting engagement ratios. Built for subscribers, long-form engagement.', time: '1–3 weeks' },
  { icon: <SoundCloudIcon size={24} />, name: 'SoundCloud Reposts', desc: 'Verified repost network across genre communities with transparent tracking and real engagement intent.' },
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
