import { useEffect, useRef } from 'react';

const FanpageVisualizer = () => {
  const refs = useRef<(SVGGElement | null)[]>([]);

  // 5 feed columns scrolling at different speeds
  const feeds = [
    { x: 40, speed: 28, cards: 6 },
    { x: 105, speed: 36, cards: 5 },
    { x: 170, speed: 22, cards: 6 },
    { x: 235, speed: 32, cards: 5 },
  ];

  const cardH = 50;
  const gap = 10;

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      feeds.forEach((feed, i) => {
        const totalH = feed.cards * (cardH + gap);
        const offset = (elapsed * feed.speed) % totalH;
        refs.current[i]?.setAttribute('transform', `translate(0, ${-offset})`);
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 310 420" className="w-full h-full max-w-[330px] max-h-[440px]">
        <defs>
          <clipPath id="fpClip">
            <rect x="20" y="30" width="270" height="360" rx="6" />
          </clipPath>
          <linearGradient id="fpFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(222, 47%, 6%)" stopOpacity="1" />
            <stop offset="10%" stopColor="hsl(222, 47%, 6%)" stopOpacity="0" />
            <stop offset="90%" stopColor="hsl(222, 47%, 6%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(222, 47%, 6%)" stopOpacity="1" />
          </linearGradient>
        </defs>

        <g clipPath="url(#fpClip)">
          {feeds.map((feed, fi) => {
            const totalH = feed.cards * (cardH + gap);
            return (
              <g key={fi} ref={el => { refs.current[fi] = el; }}>
                {[0, 1].map(loop =>
                  Array.from({ length: feed.cards }, (_, ci) => {
                    const y = 35 + loop * totalH + ci * (cardH + gap);
                    const variant = (fi + ci) % 4;
                    return (
                      <g key={`${loop}-${ci}`}>
                        {/* Card */}
                        <rect x={feed.x} y={y} width="55" height={cardH} rx="5"
                          fill="hsl(195, 90%, 60%)" opacity="0.06"
                          stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" strokeOpacity="0.15" />

                        {/* Abstract "thumbnail" — varying shapes per card */}
                        {variant === 0 && (
                          <rect x={feed.x + 5} y={y + 5} width="45" height="26" rx="3"
                            fill="hsl(195, 90%, 60%)" opacity="0.12" />
                        )}
                        {variant === 1 && (
                          <>
                            <rect x={feed.x + 5} y={y + 5} width="20" height="26" rx="3"
                              fill="hsl(195, 90%, 60%)" opacity="0.1" />
                            <rect x={feed.x + 28} y={y + 5} width="22" height="12" rx="2"
                              fill="hsl(195, 90%, 60%)" opacity="0.08" />
                            <rect x={feed.x + 28} y={y + 19} width="22" height="12" rx="2"
                              fill="hsl(195, 90%, 60%)" opacity="0.08" />
                          </>
                        )}
                        {variant === 2 && (
                          <circle cx={feed.x + 27.5} cy={y + 18} r="13"
                            fill="hsl(195, 90%, 60%)" opacity="0.1" />
                        )}
                        {variant === 3 && (
                          <>
                            <rect x={feed.x + 5} y={y + 5} width="14" height="12" rx="2"
                              fill="hsl(195, 90%, 60%)" opacity="0.1" />
                            <rect x={feed.x + 21} y={y + 5} width="14" height="12" rx="2"
                              fill="hsl(195, 90%, 60%)" opacity="0.08" />
                            <rect x={feed.x + 37} y={y + 5} width="13" height="12" rx="2"
                              fill="hsl(195, 90%, 60%)" opacity="0.1" />
                            <rect x={feed.x + 5} y={y + 19} width="45" height="12" rx="2"
                              fill="hsl(195, 90%, 60%)" opacity="0.06" />
                          </>
                        )}

                        {/* Engagement bar at bottom of card */}
                        <rect x={feed.x + 5} y={y + cardH - 10} width={15 + ((fi + ci) % 4) * 8} height="3" rx="1.5"
                          fill="hsl(195, 90%, 60%)" opacity="0.2">
                          <animate attributeName="opacity" values="0.15;0.35;0.15"
                            dur={`${2.5 + ci * 0.3}s`} begin={`${fi * 0.4 + ci * 0.2}s`}
                            repeatCount="indefinite" />
                        </rect>

                        {/* Active indicator dot */}
                        <circle cx={feed.x + 49} cy={y + cardH - 8} r="2"
                          fill="hsl(150, 60%, 50%)" opacity="0">
                          <animate attributeName="opacity" values="0;0.5;0"
                            dur={`${3 + ci * 0.4}s`} begin={`${fi * 0.5 + ci * 0.3}s`}
                            repeatCount="indefinite" />
                        </circle>
                      </g>
                    );
                  })
                )}
              </g>
            );
          })}
        </g>

        {/* Fade overlay */}
        <rect x="20" y="30" width="270" height="360" fill="url(#fpFade)" pointerEvents="none" />
      </svg>
    </div>
  );
};

export default FanpageVisualizer;
