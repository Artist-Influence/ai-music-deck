import GlassPanel from '../GlassPanel';
import dackJanielsImg from '@/assets/dack-janiels-streams.png';

const SpotifyIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.224-2.719a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.453-1.493c3.632-1.102 8.147-.568 11.234 1.329a.78.78 0 01.256 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.934.934 0 11-.542-1.79c3.533-1.072 9.404-.865 13.115 1.338a.934.934 0 01-.955 1.612z" fill="currentColor"/>
  </svg>
);

const metrics = [
  { val: '185,700', label: 'Streams' },
  { val: '9,950', label: 'Playlist Adds' },
  { val: '3.6%', label: 'Save Rate' },
  { val: '42K', label: 'Algo Streams' },
];

const SpotifyPlaylistingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[140px] animate-float-slow" />

    <div className="relative z-10 flex gap-10 items-start w-full max-w-[1600px] mx-auto">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-4">
          <SpotifyIcon />
          <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
        </div>
        <h1 className="text-5xl font-bold text-foreground mb-3 leading-tight">Spotify Playlisting<br />(Organic)</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-[600px]">
          Third-party, genre-aligned organic playlist placements designed for discovery and algorithmic pickup.
        </p>

        <div className="space-y-5">
          <GlassPanel variant="bright" className="p-5">
            <p className="text-xl font-semibold text-foreground mb-2">What it is:</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We place your tracks on curated playlists run by real tastemakers in your genre.
              These aren't pay-for-play lists — they're community-driven playlists with
              active listeners who save and share.
            </p>
          </GlassPanel>

          <GlassPanel variant="bright" className="p-5">
            <p className="text-xl font-semibold text-foreground mb-2">Why it works:</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Organic playlist streams generate saves, follows, and algorithmic signals.
              When Spotify sees real listener engagement, it pushes your track into
              Discover Weekly, Release Radar, and Radio. Stream goals guaranteed.
            </p>
          </GlassPanel>

          <GlassPanel variant="subtle" className="p-4">
            <p className="text-lg text-primary font-medium">Timeframe: 12 weeks</p>
          </GlassPanel>
        </div>
      </div>

      {/* Right — Case Study */}
      <div className="flex-1 min-w-0">
        <GlassPanel variant="bright" className="p-6 flex flex-col h-full">
          <p className="text-base text-primary font-mono mb-2 tracking-widest">CASE STUDY</p>
          <p className="text-2xl font-bold text-foreground leading-tight">Dack Janiels</p>
          <p className="text-lg text-muted-foreground mb-2">Shock Therapy</p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Organic playlist campaign focused on dubstep tastemakers and algorithmic lift.
          </p>

          <div className="flex-1 min-h-0 rounded-lg border border-white/[0.08] overflow-hidden mb-4 bg-black/30 flex items-center justify-center">
            <img
              src={dackJanielsImg}
              alt="Dack Janiels — Shock Therapy"
              className="w-full h-full object-cover object-left"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.04] rounded-lg p-3 text-center">
                <p className="text-xl font-bold text-foreground">{m.val}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  </div>
);

export default SpotifyPlaylistingSlide;
