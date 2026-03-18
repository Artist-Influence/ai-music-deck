import GlassPanel from '../GlassPanel';
import gordoImg from '@/assets/gordo-meta-tiktok.png';
import zedsDeadImg from '@/assets/zeds-dead-logo.png';

const TikTokIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0015.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z" fill="currentColor"/>
  </svg>
);

const FacebookIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7A10 10 0 0022 12.06C22 6.53 17.5 2.04 12 2.04z" fill="currentColor"/>
  </svg>
);

const MetaTikTokIcon = () => (
  <div className="flex items-center gap-2 md:gap-3">
    <FacebookIcon size={20} />
    <TikTokIcon size={20} />
  </div>
);

const cases = [
  {
    platform: 'TIKTOK ADS',
    artist: 'Gordo (@gordoszn)',
    track: 'Brand Awareness Campaign',
    description: '24-hour brand awareness campaign focused purely on views.',
    thumb: gordoImg,
    imgPosition: 'object-top',
    metrics: [
      { val: '1.4M', label: 'Impressions' },
      { val: '$0.31', label: 'CPM' },
      { val: '500.7K', label: '6-Sec Views' },
      { val: '34.7%', label: 'View Rate' },
    ],
  },
  {
    platform: 'META ADS',
    artist: 'Zeds Dead',
    track: 'NA Tour, 6 campaigns, 1 per city',
    description: 'Multi-layered campaign collecting SMS signups via Laylo. 100+ creatives across 6 simultaneous city-targeted campaigns.',
    thumb: zedsDeadImg,
    imgPosition: 'object-center',
    metrics: [
      { val: '1.3M', label: 'Impressions' },
      { val: '6,754', label: 'Laylo Signups' },
      { val: '$1.40', label: 'CPR' },
      { val: '25.4K', label: 'Link Clicks' },
    ],
  },
];

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2">
    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
    <p className="text-xs md:text-2xl text-muted-foreground">{children}</p>
  </div>
);

const AdditionalServicesSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden py-3 px-4 md:p-12 flex flex-col justify-start md:justify-center">
    <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-10 items-stretch w-full max-w-[1600px] mx-auto">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4">
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <MetaTikTokIcon />
            <p className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-2xl md:text-6xl font-bold text-foreground mb-2 md:mb-4 leading-tight">Meta & TikTok Ads</h1>
          <p className="text-sm md:text-2xl text-muted-foreground mb-4 md:mb-6 max-w-[700px]">
            We turn proven native posts into ads to convert streams, sales, touring, and more.
          </p>
        </div>

        <GlassPanel variant="bright" className="p-4 md:p-8">
          <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">What it is</p>
          <div className="space-y-1.5 md:space-y-2.5">
            <BulletPoint>Paid social campaigns across Meta (Facebook + Instagram) and TikTok</BulletPoint>
            <BulletPoint>Content that's already performing organically gets amplified with targeted paid distribution</BulletPoint>
            <BulletPoint>Focused on converting real outcomes, not just impressions</BulletPoint>
          </div>
        </GlassPanel>

        <GlassPanel variant="bright" className="p-4 md:p-8 flex-1">
          <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">How it works</p>
          <div className="space-y-1.5 md:space-y-2.5">
            <BulletPoint>Optimized daily with weekly reporting and clean data exports</BulletPoint>
            <BulletPoint>Targeting by genre, geography, and behavior</BulletPoint>
            <BulletPoint>Focused on streams, ticket sales, merch, and fanbase growth</BulletPoint>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <p className="text-xs md:text-2xl text-primary font-medium">Timeframe: 2 to 3 weeks</p>
          </div>
        </GlassPanel>
      </div>

      {/* Right — 2 Case Studies */}
      <div className="flex-1 min-w-0 flex flex-col gap-2 md:gap-3">
        {cases.map((c, idx) => (
          <GlassPanel key={idx} variant="bright" className="p-3 md:p-5 flex-1 flex flex-col">
            <div className="flex flex-row gap-3 md:gap-5 mb-2 md:mb-3">
              <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] shrink-0 rounded-xl overflow-hidden border border-white/[0.08]">
                <img src={c.thumb} alt={c.artist} className={`w-full h-full object-cover rounded-xl ${c.imgPosition || 'object-center'}`} />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-[10px] md:text-base text-primary font-mono mb-0.5 tracking-widest uppercase">{c.platform}</p>
                <p className="text-sm md:text-3xl font-bold text-foreground leading-tight">{c.artist}</p>
                <p className="text-xs md:text-xl text-muted-foreground">{c.track}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-2 md:mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-2.5" />
              <p className="text-xs md:text-lg text-muted-foreground">{c.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-3">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg px-2 py-2 md:px-3 md:py-4 text-center flex flex-col items-center justify-center">
                  <p className="text-xs md:text-2xl font-bold text-foreground">{m.val}</p>
                  <p className="text-[8px] md:text-sm text-muted-foreground uppercase tracking-wider leading-tight">{m.label}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default AdditionalServicesSlide;
