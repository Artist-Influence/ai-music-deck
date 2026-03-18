import GlassPanel from '../GlassPanel';
import { ExternalLink } from 'lucide-react';
import ero808Img from '@/assets/ero808-genie.jpg';
import dackJanielsImg from '@/assets/dack-janiels-shock-therapy.jpg';
import allAmericanRejectsImg from '@/assets/all-american-rejects-get-this.jpg';

const SpotifyIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.224-2.719a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.453-1.493c3.632-1.102 8.147-.568 11.234 1.329a.78.78 0 01.256 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.934.934 0 11-.542-1.79c3.533-1.072 9.404-.865 13.115 1.338a.934.934 0 01-.955 1.612z" fill="currentColor"/>
  </svg>
);

const cases = [
  {
    artist: 'ero808',
    track: 'Genie',
    artwork: ero808Img,
    metrics: [
      { val: '1.55M', label: 'Streams' },
      { val: '66.7K', label: 'Playlist Adds' },
      { val: '50.1K', label: 'Saves' },
      { val: '802K', label: 'Algo Streams' },
    ],
    playlists: [
      { label: 'Playlist 1', url: 'https://open.spotify.com/playlist/5quud9tyyGwkmk2vgLK1Vd' },
      { label: 'Playlist 2', url: 'https://open.spotify.com/playlist/3MnaeVYyif6bTqO2PO8wVU' },
      { label: 'Playlist 3', url: 'https://open.spotify.com/playlist/3iqatiD4ZWUZ8g51izTEOd' },
    ],
  },
  {
    artist: 'Dack Janiels',
    track: 'Shock Therapy',
    artwork: dackJanielsImg,
    metrics: [
      { val: '185.7K', label: 'Streams' },
      { val: '9.6K', label: 'Playlist Adds' },
      { val: '8K', label: 'Saves' },
      { val: '42K', label: 'Algo Streams' },
    ],
    playlists: [
      { label: 'Playlist 1', url: 'https://open.spotify.com/playlist/4YZNKPS9bM3xv1UF4WZil0' },
      { label: 'Playlist 2', url: 'https://open.spotify.com/playlist/2hQNYVaZJIIyKT2Ix1F744' },
      { label: 'Playlist 3', url: 'https://open.spotify.com/playlist/1Wxvomhs0nygDitcESDWY8' },
    ],
  },
  {
    artist: 'The All-American Rejects',
    track: 'Get This',
    artwork: allAmericanRejectsImg,
    metrics: [
      { val: '3.4M', label: 'Streams' },
      { val: '112.5K', label: 'Playlist Adds' },
      { val: '266K', label: 'Saves' },
      { val: '457K', label: 'Algo Streams' },
    ],
    playlists: [
      { label: 'Playlist 1', url: 'https://open.spotify.com/playlist/26MY3qVKQFBSqNMBshJZs8' },
      { label: 'Playlist 2', url: 'https://open.spotify.com/playlist/76iQv4c5qSM4AgvXph4rJu' },
      { label: 'Playlist 3', url: 'https://open.spotify.com/playlist/3CdfoioAm3TCoieKyYPPys' },
    ],
  },
];

const SpotifyPlaylistingSlide = () => (
  <div className="w-full min-h-dvh md:h-full bg-background relative overflow-x-hidden md:overflow-hidden py-2 px-3 md:p-12 flex flex-col justify-start md:justify-center">
    <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-10 items-stretch w-full max-w-[1600px] mx-auto">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4">
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <SpotifyIcon size={20} />
            <p className="text-sm md:text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-2xl md:text-6xl font-bold text-foreground mb-2 md:mb-4 leading-tight">Spotify Playlisting</h1>
          <p className="text-sm md:text-2xl text-muted-foreground mb-4 md:mb-6 max-w-[700px]">
            Third-party, genre-aligned organic playlist placements designed for discovery and algorithmic pickup.
          </p>
        </div>

        <GlassPanel variant="bright" className="p-4 md:p-8">
          <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">What it is</p>
          <div className="space-y-1.5 md:space-y-2.5">
            {[
              'Placements on curated playlists run by real tastemakers in your genre',
              'Community-driven playlists with active listeners who save and share',
              'No bots; organic, genre-aligned playlists',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                <p className="text-xs md:text-2xl text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel variant="bright" className="p-4 md:p-8 flex-1">
          <p className="text-sm md:text-2xl font-semibold text-primary mb-2 md:mb-3">Why it works</p>
          <div className="space-y-1.5 md:space-y-2.5">
            {[
              'Organic streams generate saves, follows, and algorithmic signals',
              'Spotify pushes tracks into Discover Weekly, Release Radar, and Radio',
              'Stream goals guaranteed',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5 md:mt-3" />
                <p className="text-xs md:text-2xl text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <p className="text-xs md:text-2xl text-primary font-medium">Timeframe: 12 weeks</p>
          </div>
        </GlassPanel>
      </div>

      {/* Right — 3 Case Studies */}
      <div className="flex-1 min-w-0 flex flex-col gap-2 md:gap-3">
        {cases.map((c, idx) => (
          <GlassPanel key={idx} variant="bright" className="p-3 md:p-5 flex-1 flex flex-col justify-center">
            <div className="flex gap-3 md:gap-4 mb-2 md:mb-3">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl overflow-hidden border border-white/[0.08] shrink-0">
                <img src={c.artwork} alt={`${c.artist} - ${c.track}`} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] md:text-lg text-primary font-mono tracking-widest mb-0.5">PLAYLISTING</p>
                <p className="text-sm md:text-2xl font-bold text-foreground leading-tight">{c.artist}</p>
                <p className="text-xs md:text-lg text-muted-foreground">{c.track}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2 mb-2 md:mb-3">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-1.5 md:p-3 text-center">
                  <p className="text-xs md:text-2xl font-bold text-foreground">{m.val}</p>
                  <p className="text-[8px] md:text-lg text-muted-foreground uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-1.5 md:gap-2">
              {c.playlists.map((pl) => (
                <a key={pl.label} href={pl.url} target="_blank" rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1 text-[10px] md:text-sm text-primary border border-primary/20 rounded-lg px-2 py-1 md:px-3 md:py-1.5 hover:bg-primary/10 transition-colors">
                  <ExternalLink className="w-2.5 h-2.5 md:w-3 md:h-3" />
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
