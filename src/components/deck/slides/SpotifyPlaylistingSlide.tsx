import GlassPanel from '../GlassPanel';
import { ExternalLink } from 'lucide-react';
import dackJanielsImg from '@/assets/dack-janiels-streams.png';

const SpotifyIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.224-2.719a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.453-1.493c3.632-1.102 8.147-.568 11.234 1.329a.78.78 0 01.256 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.934.934 0 11-.542-1.79c3.533-1.072 9.404-.865 13.115 1.338a.934.934 0 01-.955 1.612z" fill="currentColor"/>
  </svg>
);

const cases = [
  {
    artist: 'Dack Janiels',
    track: 'Shock Therapy',
    artwork: dackJanielsImg,
    metrics: [
      { val: '185,700', label: 'Streams' },
      { val: '9,950', label: 'Playlist Adds' },
      { val: '3.6%', label: 'Save Rate' },
      { val: '42K', label: 'Algo Streams' },
    ],
    playlists: [
      { label: 'Playlist 1', url: '#' },
      { label: 'Playlist 2', url: '#' },
      { label: 'Playlist 3', url: '#' },
    ],
  },
  {
    artist: 'Artist Name',
    track: 'Track Title',
    artwork: null,
    metrics: [
      { val: '—', label: 'Streams' },
      { val: '—', label: 'Playlist Adds' },
      { val: '—', label: 'Save Rate' },
      { val: '—', label: 'Algo Streams' },
    ],
    playlists: [
      { label: 'Playlist 1', url: '#' },
      { label: 'Playlist 2', url: '#' },
      { label: 'Playlist 3', url: '#' },
    ],
  },
  {
    artist: 'Artist Name',
    track: 'Track Title',
    artwork: null,
    metrics: [
      { val: '—', label: 'Streams' },
      { val: '—', label: 'Playlist Adds' },
      { val: '—', label: 'Save Rate' },
      { val: '—', label: 'Algo Streams' },
    ],
    playlists: [
      { label: 'Playlist 1', url: '#' },
      { label: 'Playlist 2', url: '#' },
      { label: 'Playlist 3', url: '#' },
    ],
  },
];

const SpotifyPlaylistingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-12 flex items-center justify-center">
    <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[140px] animate-float-slow" />

    <div className="relative z-10 flex gap-10 items-stretch w-full max-w-[1600px] mx-auto">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <SpotifyIcon />
            <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-4 leading-tight">Spotify Playlisting<br />(Organic)</h1>
          <p className="text-2xl text-muted-foreground mb-6 max-w-[700px]">
            Third-party, genre-aligned organic playlist placements designed for discovery and algorithmic pickup.
          </p>
        </div>

        <GlassPanel variant="bright" className="p-8 flex-1">
          <p className="text-2xl font-semibold text-foreground mb-3">What it is:</p>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            We place your tracks on curated playlists run by real tastemakers in your genre.
            These aren't pay-for-play lists — they're community-driven playlists with
            active listeners who save and share.
          </p>
        </GlassPanel>

        <GlassPanel variant="bright" className="p-8 flex-1">
          <p className="text-2xl font-semibold text-foreground mb-3">Why it works:</p>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Organic playlist streams generate saves, follows, and algorithmic signals.
            When Spotify sees real listener engagement, it pushes your track into
            Discover Weekly, Release Radar, and Radio. Stream goals guaranteed.
          </p>
        </GlassPanel>

        <p className="text-2xl text-primary font-medium">Timeframe: 12 weeks</p>
      </div>

      {/* Right — 3 Case Studies */}
      <div className="flex-1 min-w-0 flex flex-col gap-3">
        {cases.map((c, idx) => (
          <GlassPanel key={idx} variant="bright" className="p-5 flex-1 flex flex-col justify-center">
            <div className="flex gap-4 mb-3">
              <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/[0.08] shrink-0 bg-black/30 flex items-center justify-center">
                {c.artwork ? (
                  <img src={c.artwork} alt={`${c.artist} - ${c.track}`} className="w-full h-full object-cover" />
                ) : (
                  <p className="text-xs text-muted-foreground/40 italic">Artwork</p>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-lg text-primary font-mono tracking-widest mb-1">PLAYLISTING</p>
                <p className="text-xl font-bold text-foreground leading-tight">{c.artist}</p>
                <p className="text-lg text-muted-foreground">{c.track}</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-3">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-2 text-center">
                  <p className="text-xl font-bold text-foreground">{m.val}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              {c.playlists.map((pl) => (
                <a
                  key={pl.label}
                  href={pl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary border border-primary/20 rounded-lg px-3 py-1.5 hover:bg-primary/10 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  {pl.label}
                </a>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default SpotifyPlaylistingSlide;
