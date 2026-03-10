import GlassPanel from '../GlassPanel';

const SoundCloudIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M11.56 8.87V17h8.76c1.85 0 3.35-1.61 3.35-3.61 0-2-1.5-3.61-3.35-3.61-.34 0-.68.05-1 .14C19.04 7.15 16.81 5 14.11 5c-.93 0-1.8.28-2.55.76v3.11zM8.56 17h1.5V9.6c-.47-.2-.97-.32-1.5-.36V17zm-3 0h1.5v-6.5c-.24.07-.47.17-.69.3l-.04.02c-.27.16-.52.36-.77.58V17zm-3 0h1.5v-4.21c-.46.68-.79 1.43-.99 2.22-.15.58-.26 1.19-.31 1.8L3.56 17z" fill="currentColor"/>
  </svg>
);

const SoundCloudRepostsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute top-[15%] left-[25%] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[130px] animate-float" />

    <div className="relative z-10 flex gap-10 items-start w-full max-w-[1600px] mx-auto">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-4">
          <SoundCloudIcon />
          <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
        </div>
        <h1 className="text-5xl font-bold text-foreground mb-3 leading-tight">SoundCloud Reposts</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-[600px]">
          Verified repost network across genre communities with transparent tracking and real engagement intent.
        </p>

        <div className="space-y-5">
          <GlassPanel variant="bright" className="p-5">
            <p className="text-xl font-semibold text-foreground mb-2">What it is:</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We distribute your tracks through a verified network of SoundCloud accounts
              with real followers in your genre. Each repost is tracked and reported so
              you see exactly where your music lands.
            </p>
          </GlassPanel>

          <GlassPanel variant="bright" className="p-5">
            <p className="text-xl font-semibold text-foreground mb-2">Why it works:</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SoundCloud's algorithm rewards early engagement signals. Reposts from
              established accounts in your scene drive organic plays, likes, and follows
              that compound over time. It's still the discovery engine for underground and
              electronic music.
            </p>
          </GlassPanel>

          <GlassPanel variant="subtle" className="p-4">
            <p className="text-lg text-primary font-medium">Timeframe: 2–8 weeks</p>
          </GlassPanel>
        </div>
      </div>

      {/* Right — Proof / Coming Soon */}
      <div className="flex-1 min-w-0 flex items-center justify-center">
        <GlassPanel variant="default" className="p-10 text-center w-full">
          <SoundCloudIcon size={48} />
          <p className="text-2xl font-bold text-foreground mt-6 mb-3">Case study coming soon</p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-[400px] mx-auto">
            We're compiling results from recent SoundCloud repost campaigns.
            Ask us for live examples during the call.
          </p>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default SoundCloudRepostsSlide;
