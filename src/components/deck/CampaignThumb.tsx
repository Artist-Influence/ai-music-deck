interface CampaignThumbProps {
  /** Artist name; used for the alt text and to derive the monogram fallback. */
  artist: string;
  /** Imported image. When omitted, a monogram tile stands in. */
  artwork?: string;
  /** Track or campaign name, for alt text. */
  track?: string;
  /** Sizing + radius classes, e.g. "w-10 h-10 md:w-20 md:h-20 rounded-lg md:rounded-xl". */
  className?: string;
  /** object-position for the image, e.g. "object-top". */
  imgPosition?: string;
  /** Monogram type scale, matched to the surrounding card. */
  textClassName?: string;
}

/**
 * Two-letter monogram from an artist name.
 * Multi-word or hyphenated names take one letter per word ("T-Pain" → TP);
 * single words take their first two ("Vicetone" → VI).
 */
const initialsOf = (artist: string) => {
  const words = artist.split(/[^A-Za-z0-9]+/).filter(Boolean);
  const letters = words.length > 1
    ? words.slice(0, 2).map((w) => w[0]).join('')
    : (words[0] ?? artist).slice(0, 2);
  return letters.toUpperCase();
};

/**
 * Campaign card thumbnail. Renders cover art when supplied, otherwise a
 * branded monogram tile, so a card is never blank while artwork is still owed.
 * To swap in real art: import the asset and pass it as `artwork`.
 */
const CampaignThumb = ({
  artist,
  artwork,
  track,
  className = 'w-12 h-12 md:w-20 md:h-20 rounded-lg md:rounded-xl',
  imgPosition = 'object-center',
  textClassName = 'text-base md:text-3xl',
}: CampaignThumbProps) => {
  const base = `${className} shrink-0 overflow-hidden border border-white/[0.08]`;

  if (artwork) {
    return (
      <div className={base}>
        <img
          loading="lazy"
          decoding="async"
          src={artwork}
          alt={track ? `${artist} - ${track}` : artist}
          className={`w-full h-full object-cover ${imgPosition}`}
        />
      </div>
    );
  }

  return (
    <div className={`${base} bg-primary/[0.08] flex items-center justify-center`}>
      <span className={`t-h3 ${textClassName} text-primary/80`}>{initialsOf(artist)}</span>
    </div>
  );
};

export default CampaignThumb;
