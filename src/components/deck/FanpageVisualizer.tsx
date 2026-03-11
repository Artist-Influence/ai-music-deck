import { useEffect, useRef } from 'react';

const FanpageVisualizer = () => {
  const refs = useRef<(SVGGElement | null)[]>([]);

  // 4 feed rows scrolling horizontally at different speeds
  const feeds = [
    { y: 10, speed: 28, cards: 6 },
    { y: 50, speed: 36, cards: 5 },
    { y: 90, speed: 22, cards: 6 },
    { y: 130, speed: 32, cards: 5 },
  ];

  const cardW = 60;
  const gap = 10;

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      feeds.forEach((feed, i) => {
        const totalW = feed.cards * (cardW + gap);
        const offset = (elapsed * feed.speed) % totalW;
        refs.current[i]?.setAttribute('transform', `translate(${-offset}, 0)`);
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 500 170" className="w-full h-full max-w-[520px] max-h-[180px]">
        <defs>
          <clipPath id="fpClip">
            <rect x="10" y="0" width="480" height="170" rx="6" />
          </clipPath>
          <linearGradient id="fpFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(222, 47%, 6%)" stopOpacity="1" />
            <stop offset="10%" stopColor="hsl(222, 47%, 6%)" stopOpacity="0" />
            <stop offset="90%" stopColor="hsl(222, 47%, 6%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(222, 47%, 6%)" stopOpacity="1" />
          </linearGradient>
        </defs>

        <g clipPath="url(#fpClip)">
          {feeds.map((feed, fi) => {
            const totalW = feed.cards * (cardW + gap);
            return (
              <g key={fi} ref={el => { refs.current[fi] = el; }}>
                {[0, 1].map(loop =>
                  Array.from({ length: feed.cards }, (_, ci) => {
                    const x = 15 + loop * totalW + ci * (cardW + gap);
                    const variant = (fi + ci) % 4;
                    const cardH = 30;
                    return (
                      <g key={`${loop}-${ci}`}>
                        <rect x={x} y={feed.y} width={cardW} height={cardH} rx="4"
                          fill="hsl(195, 90%, 60%)" opacity="0.06"
                          stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" strokeOpacity="0.15" />

                        {variant === 0 && (
                          <rect x={x + 4} y={feed.y + 4} width="30" height="16" rx="2"
                            fill="hsl(195, 90%, 60%)" opacity="0.12" />
                        )}
                        {variant === 1 && (
                          <>
                            <rect x={x + 4} y={feed.y + 4} width="14" height="16" rx="2"
                              fill="hsl(195, 90%, 60%)" opacity="0.1" />
                            <rect x={x + 20} y={feed.y + 4} width="14" height="7" rx="1.5"
                              fill="hsl(195, 90%, 60%)" opacity="0.08" />
                            <rect x={x + 20} y={feed.y + 13} width="14" height="7" rx="1.5"
                              fill="hsl(195, 90%, 60%)" opacity="0.08" />
                          </>
                        )}
                        {variant === 2 && (
                          <circle cx={x + 30} cy={feed.y + 12} r="8"
                            fill="hsl(195, 90%, 60%)" opacity="0.1" />
                        )}
                        {variant === 3 && (
                          <>
                            <rect x={x + 4} y={feed.y + 4} width="10" height="8" rx="1.5"
                              fill="hsl(195, 90%, 60%)" opacity="0.1" />
                            <rect x={x + 16} y={feed.y + 4} width="10" height="8" rx="1.5"
                              fill="hsl(195, 90%, 60%)" opacity="0.08" />
                            <rect x={x + 28} y={feed.y + 4} width="10" height="8" rx="1.5"
                              fill="hsl(195, 90%, 60%)" opacity="0.1" />
                            <rect x={x + 4} y={feed.y + 14} width="34" height="8" rx="1.5"
                              fill="hsl(195, 90%, 60%)" opacity="0.06" />
                          </>
                        )}

                        <rect x={x + 4} y={feed.y + cardH - 6} width={10 + ((fi + ci) % 4) * 6} height="2.5" rx="1.25"
                          fill="hsl(195, 90%, 60%)" opacity="0.2">
                          <animate attributeName="opacity" values="0.15;0.35;0.15"
                            dur={`${2.5 + ci * 0.3}s`} begin={`${fi * 0.4 + ci * 0.2}s`}
                            repeatCount="indefinite" />
                        </rect>

                        <circle cx={x + cardW - 6} cy={feed.y + cardH - 5} r="1.5"
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

        <rect x="10" y="0" width="480" height="170" fill="url(#fpFade)" pointerEvents="none" />
      </svg>
    </div>
  );
};

export default FanpageVisualizer;
