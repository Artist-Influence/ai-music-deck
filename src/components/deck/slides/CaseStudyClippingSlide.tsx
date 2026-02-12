import GlassPanel from '../GlassPanel';
import { ExternalLink } from 'lucide-react';
import ariesCover from '@/assets/aries-in-the-flesh.jpg';
import gorgonCityCover from '@/assets/gorgon-city-mitsubishi.jpg';
import nashRlyCover from '@/assets/nash-rly-u-and-me.jpg';

const cases = [
  {
    artist: 'Aries',
    track: 'In The Flesh',
    coverArt: ariesCover,
    overview: 'Meme-forward creative tied to culturally relevant humor for high-volume engagement.',
    metrics: [
      { val: '$0.50', label: 'CPM' },
      { val: '1.1M+', label: 'Views' },
      { val: '13.65%', label: 'Engagement' },
      { val: '133K+', label: 'Likes' },
    ],
    clips: [
      { label: 'Watch Clip 1', url: 'https://www.tiktok.com/@chestercorneliusthethird/video/7567109238930050317' },
      { label: 'Watch Clip 2', url: 'https://www.tiktok.com/@chestercorneliusthethird/video/7568640706928069902' },
    ],
  },
  {
    artist: 'Gorgon City',
    track: 'Mitsubishi',
    coverArt: gorgonCityCover,
    overview: 'Car culture and rave footage distributed through genre-native clipper accounts.',
    metrics: [
      { val: '$0.60', label: 'CPM' },
      { val: '3.08M+', label: 'Views' },
      { val: '102K+', label: 'Likes' },
      { val: '3.64%', label: 'Engagement' },
    ],
    clips: [
      { label: 'Watch Clip 1', url: 'https://www.instagram.com/p/DQmP6-JkvLS' },
      { label: 'Watch Clip 2', url: 'https://www.instagram.com/p/DQkQTC_D1kJ' },
    ],
  },
  {
    artist: 'Nash Rly',
    track: 'U & Me',
    coverArt: nashRlyCover,
    overview: 'High-volume EDM memes and rave footage driving repeat exposure across communities.',
    metrics: [
      { val: '$0.49', label: 'CPM' },
      { val: '1.55M+', label: 'Views' },
      { val: '48K+', label: 'Likes' },
      { val: '3.78%', label: 'Engagement' },
    ],
    clips: [],
  },
];

const CaseStudyClippingSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute top-[10%] left-[25%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px] animate-float" />

    <div className="relative z-10 w-full max-w-[1400px] text-center">
      <h1 className="text-6xl font-bold text-foreground mb-4">Clip. Distribute. Repeat.</h1>
      <p className="text-xl text-muted-foreground mb-12">Clipping Campaign Results</p>

      <div className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {cases.map((c) => (
          <GlassPanel key={c.artist} variant="bright" className="p-6 flex flex-col">
            {/* Cover art */}
            <div className="aspect-square rounded-xl overflow-hidden border border-white/[0.08] flex items-center justify-center mb-4">
              <img src={c.coverArt} alt={`${c.artist} - ${c.track}`} className="w-full h-full object-cover" />
            </div>

            <p className="text-sm text-primary font-mono mb-3 tracking-widest">CLIPPING</p>
            <p className="text-xl font-bold text-foreground leading-tight">{c.artist}</p>
            <p className="text-sm text-muted-foreground/60 mb-3">{c.track}</p>
            <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{c.overview}</p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-2.5 text-center">
                  <p className="text-base font-bold text-foreground">{m.val}</p>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Clip links */}
            {c.clips.length > 0 && (
              <div className="flex gap-2 mt-auto">
                {c.clips.map((clip) => (
                  <a
                    key={clip.url}
                    href={clip.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary border border-primary/20 rounded-lg px-3 py-1.5 hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {clip.label}
                  </a>
                ))}
              </div>
            )}
          </GlassPanel>
        ))}
      </div>
    </div>
  </div>
);

export default CaseStudyClippingSlide;
