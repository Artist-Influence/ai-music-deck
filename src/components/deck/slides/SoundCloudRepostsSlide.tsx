import GlassPanel from '../GlassPanel';
import sidepieceImg from '@/assets/sidepiece-cash-out.jpg';
import johnSummitImg from '@/assets/john-summit-gorgon-city-is-everybody-having-fun.jpg';
import sonnyFoderaImg from '@/assets/sonny-fodera-all-this-time.jpg';

const SoundCloudIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary">
    <path d="M11.56 8.87V17h8.76c1.85 0 3.35-1.61 3.35-3.61 0-2-1.5-3.61-3.35-3.61-.34 0-.68.05-1 .14C19.04 7.15 16.81 5 14.11 5c-.93 0-1.8.28-2.55.76v3.11zM8.56 17h1.5V9.6c-.47-.2-.97-.32-1.5-.36V17zm-3 0h1.5v-6.5c-.24.07-.47.17-.69.3l-.04.02c-.27.16-.52.36-.77.58V17zm-3 0h1.5v-4.21c-.46.68-.79 1.43-.99 2.22-.15.58-.26 1.19-.31 1.8L3.56 17z" fill="currentColor"/>
  </svg>
);

const cases = [
  {
    artist: 'SIDEPIECE',
    track: 'Cash Out',
    artwork: sidepieceImg,
    metrics: [
      { val: '563K', label: 'Plays' },
      { val: '18.1K', label: 'Likes' },
      { val: '407', label: 'Reposts' },
      { val: '166', label: 'Comments' },
    ],
  },
  {
    artist: 'John Summit & Gorgon City',
    track: 'Is Everybody Having Fun?',
    artwork: johnSummitImg,
    metrics: [
      { val: '537K', label: 'Plays' },
      { val: '15.3K', label: 'Likes' },
      { val: '420', label: 'Reposts' },
      { val: '187', label: 'Comments' },
    ],
  },
  {
    artist: 'Sonny Fodera',
    track: 'All This Time',
    artwork: sonnyFoderaImg,
    metrics: [
      { val: '667K', label: 'Plays' },
      { val: '12.6K', label: 'Likes' },
      { val: '239', label: 'Reposts' },
      { val: '76', label: 'Comments' },
    ],
  },
];

const SoundCloudRepostsSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-12 flex items-center justify-center">
    <div className="absolute top-[15%] left-[25%] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[130px] animate-float" />

    <div className="relative z-10 flex gap-10 items-stretch w-full max-w-[1600px] mx-auto">
      {/* Left — Service Info */}
      <div className="flex-1 min-w-0 flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <SoundCloudIcon />
            <p className="text-lg text-primary font-medium tracking-wider uppercase">Service</p>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-4 leading-tight">SoundCloud Reposts</h1>
          <p className="text-2xl text-muted-foreground mb-6 max-w-[700px]">
            Verified repost network across genre communities with transparent tracking and real engagement intent.
          </p>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <GlassPanel variant="bright" className="p-8">
            <p className="text-2xl font-semibold text-foreground mb-3">What it is:</p>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              We distribute your tracks through a verified network of SoundCloud accounts
              with real followers in your genre. Each repost is tracked and reported so
              you see exactly where your music lands.
            </p>
          </GlassPanel>

          <GlassPanel variant="bright" className="p-8 flex-1">
            <p className="text-2xl font-semibold text-foreground mb-3">Why it works:</p>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              SoundCloud's algorithm rewards early engagement signals. Reposts from
              established accounts in your scene drive organic plays, likes, and follows
              that compound over time. It's still the discovery engine for underground and
              electronic music.
            </p>
            <div className="pt-4 border-t border-white/[0.06] mt-4">
              <p className="text-2xl text-primary font-medium">Timeframe: 2–8 weeks</p>
            </div>
          </GlassPanel>
        </div>
      </div>

      {/* Right — 3 Case Studies */}
      <div className="flex-1 min-w-0 flex flex-col gap-3">
        {cases.map((c, idx) => (
          <GlassPanel key={idx} variant="bright" className="p-5 flex-1 flex flex-col justify-center">
            <div className="flex gap-4 mb-3">
              <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/[0.08] shrink-0 bg-black/30 flex items-center justify-center">
                <img src={c.artwork} alt={`${c.artist} - ${c.track}`} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-lg text-primary font-mono tracking-widest mb-1">REPOSTS</p>
                <p className="text-2xl font-bold text-foreground leading-tight">{c.artist}</p>
                <p className="text-lg text-muted-foreground">{c.track}</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-foreground">{m.val}</p>
                  <p className="text-lg text-muted-foreground uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default SoundCloudRepostsSlide;
