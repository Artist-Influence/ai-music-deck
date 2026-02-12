import { useEffect, useRef } from 'react';

const FanpageVisualizer = () => {
  const scrollRef = useRef<SVGGElement>(null);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      // Slow scroll: 40px per second, reset every 360px
      const offset = (elapsed / 1000 * 40) % 360;
      if (scrollRef.current) {
        scrollRef.current.setAttribute('transform', `translate(0, ${-offset})`);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Theme page feeds — each "post" card
  const pages = [
    { name: '@bass.culture', followers: '340K', genre: 'Bass / EDM' },
    { name: '@hiphop.daily', followers: '1.2M', genre: 'Hip-Hop' },
    { name: '@lofi.vibes', followers: '890K', genre: 'Lo-Fi' },
    { name: '@indie.finds', followers: '560K', genre: 'Indie' },
    { name: '@rnb.mood', followers: '720K', genre: 'R&B' },
    { name: '@house.heads', followers: '430K', genre: 'House' },
  ];

  const cardH = 60;
  const gap = 8;
  const totalH = pages.length * (cardH + gap);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 300 420" className="w-full h-full max-w-[320px] max-h-[440px]">
        <defs>
          <clipPath id="feedClip">
            <rect x="30" y="50" width="240" height="320" rx="8" />
          </clipPath>
          <linearGradient id="feedFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(222, 47%, 6%)" stopOpacity="1" />
            <stop offset="8%" stopColor="hsl(222, 47%, 6%)" stopOpacity="0" />
            <stop offset="92%" stopColor="hsl(222, 47%, 6%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(222, 47%, 6%)" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Phone frame */}
        <rect x="25" y="20" width="250" height="380" rx="20"
          fill="none" stroke="hsl(195, 90%, 60%)" strokeWidth="1.2" opacity="0.25" />
        {/* Notch */}
        <rect x="110" y="24" width="80" height="6" rx="3"
          fill="hsl(195, 90%, 60%)" opacity="0.15" />
        {/* Header bar */}
        <text x="150" y="46" textAnchor="middle" fill="hsl(195, 90%, 60%)"
          fontSize="9" fontWeight="600" opacity="0.6">THEME PAGES FEED</text>

        {/* Scrolling feed content */}
        <g clipPath="url(#feedClip)">
          <g ref={scrollRef}>
            {/* Render cards twice for seamless loop */}
            {[0, 1].map(loop => (
              pages.map((page, i) => {
                const y = 55 + (loop * totalH) + i * (cardH + gap);
                return (
                  <g key={`${loop}-${i}`}>
                    {/* Card background */}
                    <rect x="38" y={y} width="224" height={cardH} rx="6"
                      fill="hsl(195, 90%, 60%)" opacity="0.05"
                      stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" strokeOpacity="0.12" />

                    {/* Page avatar */}
                    <circle cx="58" cy={y + 20} r="10"
                      fill="hsl(195, 90%, 60%)" opacity="0.2"
                      stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" strokeOpacity="0.3" />
                    <circle cx="58" cy={y + 20} r="4"
                      fill="hsl(195, 90%, 60%)" opacity="0.5" />

                    {/* Page name */}
                    <text x="74" y={y + 17} fill="hsl(210, 40%, 96%)" fontSize="8.5" fontWeight="600">{page.name}</text>
                    {/* Followers + genre */}
                    <text x="74" y={y + 28} fill="hsl(195, 90%, 60%)" fontSize="7" opacity="0.5">
                      {page.followers} · {page.genre}
                    </text>

                    {/* "Post" content preview — abstract bars */}
                    <rect x="44" y={y + 36} width={90 + (i % 3) * 20} height="4" rx="2"
                      fill="hsl(195, 90%, 60%)" opacity="0.08" />
                    <rect x="44" y={y + 44} width={60 + (i % 2) * 30} height="4" rx="2"
                      fill="hsl(195, 90%, 60%)" opacity="0.05" />

                    {/* Engagement metrics */}
                    <g opacity="0.4">
                      {/* Views */}
                      <text x="190" y={y + 18} fill="hsl(195, 90%, 60%)" fontSize="7" textAnchor="end">
                        {['24K', '180K', '67K', '42K', '95K', '33K'][i]} views
                      </text>
                      {/* Engagement bar */}
                      <rect x="200" y={y + 12} width={[28, 40, 32, 24, 36, 20][i]} height="3" rx="1.5"
                        fill="hsl(195, 90%, 60%)" opacity="0.3">
                        <animate attributeName="opacity" values="0.2;0.5;0.2"
                          dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                      </rect>
                    </g>

                    {/* "Posted" indicator */}
                    <circle cx="248" cy={y + 30} r="3" fill="hsl(150, 60%, 50%)" opacity="0.4">
                      <animate attributeName="opacity" values="0.2;0.6;0.2"
                        dur={`${3 + i * 0.5}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                );
              })
            ))}
          </g>
        </g>

        {/* Fade overlay at top and bottom */}
        <rect x="30" y="50" width="240" height="320" fill="url(#feedFade)" pointerEvents="none" />

        {/* Bottom status */}
        <rect x="100" y="388" width="100" height="3" rx="1.5"
          fill="hsl(195, 90%, 60%)" opacity="0.15" />
      </svg>
    </div>
  );
};

export default FanpageVisualizer;
