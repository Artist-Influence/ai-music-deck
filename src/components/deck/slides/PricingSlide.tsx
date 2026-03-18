import GlassPanel from '../GlassPanel';

const services = [
  { name: 'Clipping', unit: 'CPM', note: 'Per campaign' },
  { name: 'Fanpages', unit: 'Monthly', note: 'Ongoing placement' },
  { name: 'UGC Growth', unit: 'Per activation', note: 'Volume-based' },
  { name: 'Spark Ads', unit: 'Ad spend + mgmt fee', note: 'Managed amplification' },
  { name: 'Spotify Playlisting', unit: 'Per campaign', note: 'Editorial & algorithmic' },
  { name: 'YouTube Ads', unit: 'Ad spend + mgmt fee', note: 'Discovery campaigns' },
  { name: 'SoundCloud Reposts', unit: 'Per campaign', note: 'Network activation' },
  { name: 'Instagram Seeding', unit: 'Per campaign', note: 'IG account network' },
];

const PricingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-5 md:p-12 flex flex-col items-center justify-center">
    <div className="relative z-10 w-full max-w-[1400px]">
      <h1 className="text-2xl md:text-7xl font-bold text-foreground mb-2 md:mb-4">Customized & A La Carte Pricing</h1>
      <p className="text-sm md:text-2xl text-muted-foreground mb-6 md:mb-12">Every package is built around your goals. Pick individual services, or let us design a custom bundle.</p>

      <GlassPanel className="p-0 overflow-hidden">
        {/* Mobile: card layout */}
        <div className="md:hidden divide-y divide-white/[0.06]">
          {services.map((s, i) => (
            <div key={i} className="p-3">
              <p className="text-sm font-medium text-foreground">{s.name}</p>
              <p className="text-xs text-muted-foreground">{s.unit} · {s.note}</p>
            </div>
          ))}
        </div>
        {/* Desktop: table */}
        <table className="w-full hidden md:table">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="text-left p-6 text-xl text-muted-foreground font-medium uppercase tracking-wider">Service</th>
              <th className="text-left p-6 text-xl text-muted-foreground font-medium uppercase tracking-wider">Unit</th>
              <th className="text-left p-6 text-xl text-muted-foreground font-medium uppercase tracking-wider">Note</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s, i) => (
              <tr key={i} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors">
                <td className="p-5 text-2xl text-foreground font-medium">{s.name}</td>
                <td className="p-5 text-2xl text-muted-foreground">{s.unit}</td>
                <td className="p-5 text-2xl text-foreground">{s.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassPanel>

      <div className="mt-4 md:mt-8 flex flex-col gap-2">
        <a href="https://smfnasjfkaksdannc.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-block text-sm md:text-xl font-semibold text-primary hover:text-primary/80 transition-colors underline underline-offset-4">
          View full pricing sheet →
        </a>
        <p className="text-xs md:text-xl text-foreground">We'll build the final package, tailored to your release schedule, audience, and goals.</p>
      </div>
    </div>
  </div>
);

export default PricingSlide;
