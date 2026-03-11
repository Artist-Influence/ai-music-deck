import { useEffect, useRef } from 'react';
import GlassPanel from '../GlassPanel';

const HubDiagram = () => {
  const orbitRef = useRef<SVGGElement>(null);
  const textRefs = useRef<(SVGGElement | null)[]>([]);

  const nodes = [
    { cx: 250, cy: 250 },  // center
    { cx: 250, cy: 70 },   // short-form
    { cx: 105, cy: 400 },  // communities
    { cx: 395, cy: 400 },  // streaming
  ];

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 60000; // 60s per revolution

    const tick = (now: number) => {
      const elapsed = now - start;
      const angle = (elapsed / duration) * 360 % 360;

      if (orbitRef.current) {
        orbitRef.current.setAttribute('transform', `rotate(${angle}, 250, 250)`);
      }

      textRefs.current.forEach((el, i) => {
        if (el) {
          const n = nodes[i];
          el.setAttribute('transform', `rotate(${-angle}, ${n.cx}, ${n.cy})`);
        }
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg viewBox="0 0 500 500" className="w-[460px] h-[460px]">
      <g ref={orbitRef}>
        {/* Rings */}
        <circle cx="250" cy="250" r="140" stroke="hsl(195, 90%, 60%)" strokeWidth="0.6" fill="none" opacity="0.15" />

        {/* Connection lines */}
        <line x1="250" y1="200" x2="250" y2="90" stroke="hsl(195, 90%, 60%)" strokeWidth="1.5" opacity="0.35" />
        <line x1="210" y1="285" x2="120" y2="380" stroke="hsl(180, 70%, 48%)" strokeWidth="1.5" opacity="0.35" />
        <line x1="290" y1="285" x2="380" y2="380" stroke="hsl(195, 90%, 60%)" strokeWidth="1.5" opacity="0.35" />

        {/* Center node */}
        <circle cx="250" cy="250" r="65" fill="hsl(195, 90%, 60%)" opacity="0.15" />
        <circle cx="250" cy="250" r="65" stroke="hsl(195, 90%, 60%)" strokeWidth="1.5" fill="none" opacity="0.4" />
        <g ref={el => { textRefs.current[0] = el; }}>
          <text x="250" y="244" textAnchor="middle" fill="hsl(195, 90%, 60%)" fontSize="20" fontWeight="600">Your</text>
          <text x="250" y="268" textAnchor="middle" fill="hsl(195, 90%, 60%)" fontSize="20" fontWeight="600">Song</text>
        </g>

        {/* Short-form node */}
        <circle cx="250" cy="70" r="48" fill="hsl(195, 90%, 60%)" opacity="0.1" stroke="hsl(195, 90%, 60%)" strokeWidth="0.8" />
        <g ref={el => { textRefs.current[1] = el; }}>
          <text x="250" y="66" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="16" fontWeight="500">Short-form</text>
          <text x="250" y="84" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="14">Content</text>
        </g>

        {/* Communities node */}
        <circle cx="105" cy="400" r="48" fill="hsl(180, 70%, 48%)" opacity="0.1" stroke="hsl(180, 70%, 48%)" strokeWidth="0.8" />
        <g ref={el => { textRefs.current[2] = el; }}>
          <text x="105" y="396" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="15" fontWeight="500">Communities</text>
          <text x="105" y="414" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="14">& Culture</text>
        </g>

        {/* Streaming node */}
        <circle cx="395" cy="400" r="48" fill="hsl(195, 90%, 60%)" opacity="0.1" stroke="hsl(195, 90%, 60%)" strokeWidth="0.8" />
        <g ref={el => { textRefs.current[3] = el; }}>
          <text x="395" y="396" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="16" fontWeight="500">Streaming</text>
          <text x="395" y="414" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="14">Platforms</text>
        </g>
      </g>
    </svg>
  );
};

const WhatCloutedDoesSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex items-center justify-center">
    <div className="absolute top-[15%] left-[40%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[150px] animate-float" />

    <div className="relative z-10 flex gap-16 items-center w-full max-w-[1600px]">
      <div className="flex-1 max-w-[700px]">
        <h1 className="text-5xl font-bold text-foreground mb-8 leading-tight whitespace-nowrap">
          Coordinated distribution as a system, not a gamble.
        </h1>
        <p className="text-[21px] text-primary font-medium mb-8 tracking-wider uppercase">Three pillars that work the algorithm for you</p>
        <div className="space-y-3">
          {[
            ['Volume', 'Flood social platforms with high-velocity short-form content'],
            ['Curation', 'Target real communities with reach within your niche'],
            ['Amplification', 'Amplify winners with paid spend once the creative proves itself'],
          ].map(([label, desc], i) => (
            <GlassPanel key={i} variant="subtle" className="p-5 flex items-start gap-4">
              <span className="text-primary font-semibold text-lg shrink-0 w-32">{label}</span>
              <p className="text-[21px] text-muted-foreground">{desc}</p>
            </GlassPanel>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center mt-[20%]">
        <HubDiagram />
      </div>
    </div>
  </div>
);

export default WhatCloutedDoesSlide;
