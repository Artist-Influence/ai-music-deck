import GlassPanel from '../GlassPanel';
import ServicesVisualizer from '../ServicesVisualizer';
import { Youtube, Instagram } from 'lucide-react';

const MetaTikTokIcon = () => (
  <div className="flex items-center gap-2">
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="text-primary">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7A10 10 0 0022 12.06C22 6.53 17.5 2.04 12 2.04z" fill="currentColor"/>
    </svg>
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="text-primary">
      <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0015.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z" fill="currentColor"/>
    </svg>
  </div>
);

const SpotifyIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.224-2.719a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.453-1.493c3.632-1.102 8.147-.568 11.234 1.329a.78.78 0 01.256 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.934.934 0 11-.542-1.79c3.533-1.072 9.404-.865 13.115 1.338a.934.934 0 01-.955 1.612z" fill="currentColor"/>
  </svg>
);

const SoundCloudIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M11.56 8.87V17h8.76c1.85 0 3.35-1.61 3.35-3.61 0-2-1.5-3.61-3.35-3.61-.34 0-.68.05-1 .14C19.04 7.15 16.81 5 14.11 5c-.93 0-1.8.28-2.55.76v3.11zM8.56 17h1.5V9.6c-.47-.2-.97-.32-1.5-.36V17zm-3 0h1.5v-6.5c-.24.07-.47.17-.69.3l-.04.02c-.27.16-.52.36-.77.58V17zm-3 0h1.5v-4.21c-.46.68-.79 1.43-.99 2.22-.15.58-.26 1.19-.31 1.8L3.56 17z" fill="currentColor"/>
  </svg>
);

const services = [
  { icon: <MetaTikTokIcon />, name: 'Meta & TikTok Ads', desc: 'We turn proven native posts into ads to convert streams, sales, touring, and more. Optimized daily, weekly reporting, clean exports.', time: '2–3 weeks' },
  { icon: <SpotifyIcon size={24} />, name: 'Spotify Playlisting (Organic)', desc: 'Third-party, genre-aligned organic playlist placements designed for discovery and algorithmic pickup. Weekly reporting, stream goals guaranteed.', time: '12 weeks' },
  { icon: <Youtube size={24} className="text-primary" />, name: 'YouTube Advertising', desc: 'International targeting + optimization to maximize reach while protecting engagement ratios. Built for subscribers, long-form engagement.', time: '1–3 weeks' },
  { icon: <SoundCloudIcon size={24} />, name: 'SoundCloud Reposts', desc: 'Verified repost network across genre communities with transparent tracking and real engagement intent.', time: '2–8 weeks' },
  { icon: <Instagram size={24} className="text-primary" />, name: 'Instagram Seeding', desc: 'Genre-aligned page placements with tracking via live dashboard. Built for relevance and cost efficiency.', time: '1–3 weeks' },
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
            <p className="text-xl font-semibold text-foreground mb-2">{s.name}:</p>
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
