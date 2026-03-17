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
  <div className="w-full h-full bg-background relative overflow-hidden p-12 flex flex-col items-center justify-center">
    <div className="absolute bottom-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />

    <div className="relative z-10 w-full max-w-[1400px]">
      <h1 className="text-7xl font-bold text-foreground mb-4">Customized & A La Carte Pricing</h1>
      <p className="text-2xl text-muted-foreground mb-12">Every package is built around your goals. Pick individual services, or let us design a custom bundle: your cocktail recipe for growth.</p>

      <GlassPanel className="p-0 overflow-hidden">
        <table className="w-full">
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

      <div className="mt-8 flex flex-col gap-2">
        <a href="https://smfnasjfkaksdannc.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-block text-xl font-semibold text-primary hover:text-primary/80 transition-colors underline underline-offset-4">
          View full pricing sheet →
        </a>
        <p className="text-xl text-foreground">We'll build the final package, tailored to your release schedule, audience, and goals. White-glove service, zero guesswork.</p>
      </div>
    </div>
  </div>
);

export default PricingSlide;
