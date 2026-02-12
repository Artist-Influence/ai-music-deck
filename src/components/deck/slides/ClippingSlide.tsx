import GlassPanel from '../GlassPanel';
import ClippingVisualizer from '../ClippingVisualizer';

const ClippingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[140px] animate-float" />

    <div className="relative z-10 flex gap-12 items-start w-full max-w-[1600px]">
      <div className="flex-1 max-w-[900px]">
        <p className="text-lg text-primary font-medium mb-4 tracking-wider uppercase">Service</p>
        <h1 className="text-7xl font-bold text-foreground mb-6">Clipping</h1>
        <p className="text-2xl text-muted-foreground mb-12 max-w-[800px]">
          A curated short-form network that turns your track into native TikToks, Reels, and Shorts at scale.
        </p>

        <div className="grid grid-cols-3 gap-6">
        <GlassPanel className="p-6">
          <p className="text-lg font-semibold text-primary mb-4">What it is</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            A distribution engine powered by 10,000+ clippers producing platform-native videos using your track.
          </p>
        </GlassPanel>

        <GlassPanel className="p-6">
          <p className="text-lg font-semibold text-primary mb-4">How it works</p>
          <div className="space-y-2 mb-4">
            {[
              'Campaigns launch in 24 hours',
              'Runs 7 to 14 days',
              'Every post uses the official sound, tags the artist, and follows basic brand direction',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-white/[0.06]">
            <p className="text-sm font-medium text-primary mb-2">Guaranteed views per 1,000</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {[
                { niche: 'Music', price: '$2' },
                { niche: 'Podcast', price: '$2' },
                { niche: 'Sports', price: '$2' },
                { niche: 'TV/Film', price: '$3' },
                { niche: 'Politics', price: '$4' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{item.niche}</span>
                  <span className="text-sm text-foreground font-medium">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        <GlassPanel className="p-6">
          <p className="text-lg font-semibold text-primary mb-4">What you get</p>
          <div className="space-y-2 mb-6">
            {[
              'Fast velocity and format variety',
              'Clear reporting',
              'UGC reuse rights for paid and owned channels',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-white/[0.06]">
            <p className="text-sm text-primary font-medium">Timeframe: 2 to 4 weeks end-to-end</p>
          </div>
        </GlassPanel>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center max-w-[500px] pt-8">
        <ClippingVisualizer />
      </div>
    </div>
  </div>
);

export default ClippingSlide;
