import GlassPanel from '../GlassPanel';
import ServicesVisualizer from '../ServicesVisualizer';

const MetaTikTokIcon = () => (
  <div className="flex items-center gap-3">
    <svg width={32} height={32} viewBox="0 0 24 24" fill="none" className="text-primary">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7A10 10 0 0022 12.06C22 6.53 17.5 2.04 12 2.04z" fill="currentColor"/>
    </svg>
    <svg width={32} height={32} viewBox="0 0 24 24" fill="none" className="text-primary">
      <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0015.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z" fill="currentColor"/>
    </svg>
  </div>
);

const AdditionalServicesSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />

    <div className="relative z-10 flex gap-10 items-start w-full max-w-[1600px] mx-auto">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-4">
          <MetaTikTokIcon />
          <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
        </div>
        <h1 className="text-5xl font-bold text-foreground mb-3 leading-tight">Meta & TikTok Ads</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-[600px]">
          We turn proven native posts into ads to convert streams, sales, touring, and more.
        </p>

        <div className="space-y-5">
          <GlassPanel variant="bright" className="p-5">
            <p className="text-xl font-semibold text-foreground mb-2">What it is:</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Paid social campaigns across Meta (Facebook + Instagram) and TikTok.
              We take content that's already performing organically and amplify it
              with targeted paid distribution to convert real outcomes.
            </p>
          </GlassPanel>

          <GlassPanel variant="bright" className="p-5">
            <p className="text-xl font-semibold text-foreground mb-2">How it works:</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Optimized daily with weekly reporting and clean data exports.
              We target by genre, geography, and behavior — focused on
              streams, ticket sales, merch, and fanbase growth.
            </p>
          </GlassPanel>

          <GlassPanel variant="subtle" className="p-4">
            <p className="text-base text-primary font-medium">Timeframe: 2–3 weeks</p>
          </GlassPanel>
        </div>
      </div>

      {/* Right — Visualizer */}
      <div className="flex-1 min-w-0 flex items-center justify-center">
        <GlassPanel variant="default" className="p-10 w-full flex flex-col items-center">
          <ServicesVisualizer />
          <p className="text-base text-muted-foreground mt-6 text-center max-w-[400px]">
            Ads are built from your best-performing organic content — not created from scratch.
            This ensures higher relevance scores and lower CPMs.
          </p>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default AdditionalServicesSlide;
