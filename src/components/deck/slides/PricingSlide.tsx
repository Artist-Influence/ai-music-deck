import GlassPanel from '../GlassPanel';

const services = [
  { name: 'Clipping', unit: 'CPM', note: 'Per campaign' },
  { name: 'Fanpages', unit: 'Monthly', note: 'Ongoing placement' },
  { name: 'UGC Growth (Creator Flood, Top 50 Trending)', unit: 'Per activation', note: 'Volume-based' },
  { name: 'Spark Ads', unit: 'Ad spend + mgmt fee', note: 'Managed amplification' },
  { name: 'Spotify Playlisting', unit: 'Per campaign', note: 'Editorial & algorithmic' },
  { name: 'YouTube Ads', unit: 'Ad spend + mgmt fee', note: 'Discovery campaigns' },
  { name: 'SoundCloud Reposts', unit: 'Per campaign', note: 'Network activation' },
  { name: 'Instagram Seeding', unit: 'Per campaign', note: 'IG account network' },
];

const PricingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute bottom-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />

    <div className="relative z-10">
      <h1 className="text-6xl font-bold text-foreground mb-4">A-la-carte pricing</h1>
      <p className="text-xl text-muted-foreground mb-12">Choose a single service, or build a bundle.</p>

      <GlassPanel className="max-w-[1300px] p-0 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="text-left p-5 text-sm text-muted-foreground font-medium uppercase tracking-wider">Service</th>
              <th className="text-left p-5 text-sm text-muted-foreground font-medium uppercase tracking-wider">Unit</th>
              <th className="text-left p-5 text-sm text-muted-foreground font-medium uppercase tracking-wider">Note</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s, i) => (
              <tr key={i} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 text-base text-foreground font-medium">{s.name}</td>
                <td className="p-4 text-sm text-muted-foreground">{s.unit}</td>
                <td className="p-4 text-sm text-muted-foreground/60">{s.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassPanel>

      <a href="https://clouted-pricing.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 text-lg font-semibold text-primary hover:text-primary/80 transition-colors underline underline-offset-4">
        View full pricing sheet →
      </a>
      <p className="text-sm text-muted-foreground/50 mt-4">Bundles can be built around your release schedule and goals.</p>
    </div>
  </div>
);

export default PricingSlide;
