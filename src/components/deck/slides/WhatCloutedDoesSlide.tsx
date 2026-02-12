import GlassPanel from '../GlassPanel';

const WhatCloutedDoesSlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex items-center">
    <div className="absolute top-[15%] left-[40%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[150px] animate-float" />

    <div className="relative z-10 flex gap-16 items-center w-full">
      {/* Text side */}
      <div className="flex-1 max-w-[700px]">
        <h1 className="text-5xl font-bold text-foreground mb-8 leading-tight">
          We run the growth layer between your song and the algorithms.
        </h1>
        <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
          Clouted coordinates distribution across short-form, culture, and streaming so your release builds momentum like a system, not a gamble.
        </p>
        <p className="text-lg text-primary font-medium mb-8 tracking-wider uppercase">We do three things well</p>
        <div className="space-y-3">
          {[
            ['Velocity', 'Create velocity with short-form at scale'],
            ['Placement', 'Place records into real communities that already have attention'],
            ['Amplification', 'Amplify winners with paid spend once the creative proves itself'],
          ].map(([label, desc], i) => (
            <GlassPanel key={i} variant="subtle" className="p-5 flex items-start gap-4">
              <span className="text-primary font-semibold text-lg shrink-0 w-32">{label}</span>
              <p className="text-base text-muted-foreground">{desc}</p>
            </GlassPanel>
          ))}
        </div>
      </div>

      {/* Hub diagram */}
      <div className="flex-1 flex items-center justify-center">
        <svg viewBox="0 0 500 500" className="w-[480px] h-[480px]">
          <defs>
            <style>{`
              @keyframes hub-spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .hub-orbit { animation: hub-spin 60s linear infinite; transform-origin: 250px 250px; }
            `}</style>
          </defs>

          {/* Spinning layer — rings and connection lines */}
          <g className="hub-orbit">
            <circle cx="250" cy="250" r="200" stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" fill="none" opacity="0.15" />
            <circle cx="250" cy="250" r="140" stroke="hsl(195, 90%, 60%)" strokeWidth="0.3" fill="none" opacity="0.1" />
            {/* Connection lines */}
            <line x1="250" y1="200" x2="250" y2="90" stroke="hsl(195, 90%, 60%)" strokeWidth="1" opacity="0.25" />
            <line x1="210" y1="285" x2="120" y2="380" stroke="hsl(180, 70%, 48%)" strokeWidth="1" opacity="0.25" />
            <line x1="290" y1="285" x2="380" y2="380" stroke="hsl(195, 90%, 60%)" strokeWidth="1" opacity="0.25" />
          </g>

          {/* Static layer — center node */}
          <circle cx="250" cy="250" r="50" fill="hsl(195, 90%, 60%)" opacity="0.12" />
          <circle cx="250" cy="250" r="50" stroke="hsl(195, 90%, 60%)" strokeWidth="1" fill="none" opacity="0.3" />
          <text x="250" y="246" textAnchor="middle" fill="hsl(195, 90%, 60%)" fontSize="13" fontWeight="600">Your</text>
          <text x="250" y="263" textAnchor="middle" fill="hsl(195, 90%, 60%)" fontSize="13" fontWeight="600">Song</text>

          {/* Static layer — Short-form node */}
          <circle cx="250" cy="70" r="35" fill="hsl(195, 90%, 60%)" opacity="0.08" stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" />
          <text x="250" y="68" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="11" fontWeight="500">Short-form</text>
          <text x="250" y="82" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="10" opacity="0.6">Content</text>

          {/* Static layer — Communities node */}
          <circle cx="105" cy="400" r="35" fill="hsl(180, 70%, 48%)" opacity="0.08" stroke="hsl(180, 70%, 48%)" strokeWidth="0.5" />
          <text x="105" y="398" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="11" fontWeight="500">Communities</text>
          <text x="105" y="412" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="10" opacity="0.6">& Culture</text>

          {/* Static layer — Streaming node */}
          <circle cx="395" cy="400" r="35" fill="hsl(195, 90%, 60%)" opacity="0.08" stroke="hsl(195, 90%, 60%)" strokeWidth="0.5" />
          <text x="395" y="398" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="11" fontWeight="500">Streaming</text>
          <text x="395" y="412" textAnchor="middle" fill="hsl(210, 40%, 96%)" fontSize="10" opacity="0.6">Platforms</text>
        </svg>
      </div>
    </div>
  </div>
);

export default WhatCloutedDoesSlide;
