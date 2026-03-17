import { useState, useEffect, useCallback } from 'react';
import aiLogo from '@/assets/ai-logo-cropped.png';
import { ChevronLeft, ChevronRight, Maximize, Minimize, LayoutGrid, PanelLeftClose, PanelLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import ScaledSlide from './ScaledSlide';
import { slides } from './slides';
import ExportPdfButton from './ExportPdfButton';

const DeckViewer = () => {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const [sidebar, setSidebar] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [grid, setGrid] = useState(false);

  const next = useCallback(() => setCurrent(c => Math.min(c + 1, slides.length - 1)), []);
  const prev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
      else if (e.key === 'f') toggleFs();
      else if (e.key === 'g') setGrid(v => !v);
      else if (e.key === 'Escape') { setGrid(false); if (document.fullscreenElement) document.exitFullscreen(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  useEffect(() => {
    if (isMobile) setSidebar(false);
  }, [isMobile]);

  useEffect(() => {
    const h = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', h);
    return () => document.removeEventListener('fullscreenchange', h);
  }, []);

  const toggleFs = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };

  const Slide = slides[current];

  if (grid) {
    return (
      <div className="h-dvh bg-background p-8 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-foreground text-xl font-semibold">All Slides</h2>
          <button onClick={() => setGrid(false)} className="text-sm text-muted-foreground hover:text-foreground transition">Close</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {slides.map((S, i) => (
            <button key={i} onClick={() => { setCurrent(i); setGrid(false); }}
              className={cn('relative aspect-video rounded-lg overflow-hidden border-2 transition-all hover:scale-[1.02]',
                i === current ? 'border-primary' : 'border-border hover:border-primary/40')}>
              <ScaledSlide><S /></ScaledSlide>
              <span className="absolute bottom-1 right-2 text-xs text-muted-foreground font-mono">{i + 1}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-dvh flex bg-background overflow-hidden">
      {sidebar && !fullscreen && !isMobile && (
        <div className="w-48 border-r border-border flex flex-col bg-card/50 backdrop-blur-sm shrink-0">
          <div className="p-3 border-b border-border flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.15em]">Slides</span>
            <button onClick={() => setSidebar(false)} className="text-muted-foreground hover:text-foreground transition">
              <PanelLeftClose className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex-1 overflow-auto p-2 space-y-1.5">
            {slides.map((S, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={cn('w-full aspect-video rounded overflow-hidden border transition-all',
                  i === current ? 'border-primary ring-1 ring-primary/30' : 'border-border/50 hover:border-border')}>
                <ScaledSlide><S /></ScaledSlide>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        {!fullscreen && (
          <div className="flex items-center justify-between px-4 h-12 border-b border-border shrink-0">
            <div className="flex items-center gap-3">
              {!sidebar && !isMobile && (
                <button onClick={() => setSidebar(true)} className="text-muted-foreground hover:text-foreground transition">
                  <PanelLeft className="w-4 h-4" />
                </button>
              )}
              <img src={aiLogo} alt="Artist Influence" className="h-5" />
            </div>
            <div className="flex items-center gap-1">
              <ExportPdfButton />
              <button onClick={() => setGrid(true)} className="p-2 rounded-lg hover:bg-secondary transition" title="Grid view (G)">
                <LayoutGrid className="w-4 h-4 text-muted-foreground" />
              </button>
              <button onClick={toggleFs} className="p-2 rounded-lg hover:bg-secondary transition" title="Fullscreen (F)">
                {fullscreen ? <Minimize className="w-4 h-4 text-muted-foreground" /> : <Maximize className="w-4 h-4 text-muted-foreground" />}
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 relative min-h-0">
          <div key={current} className="w-full h-full animate-fade-in">
            <ScaledSlide><Slide /></ScaledSlide>
          </div>
        </div>

        <div className={cn('flex items-center justify-center gap-4 h-12 shrink-0',
          fullscreen && 'absolute bottom-6 left-1/2 -translate-x-1/2 h-auto bg-background/60 backdrop-blur-md rounded-full px-6 py-2 z-50')}>
          <button onClick={prev} disabled={current === 0} className="p-1.5 rounded hover:bg-secondary transition disabled:opacity-20">
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <span className="text-xs text-muted-foreground font-mono min-w-[60px] text-center">{current + 1} / {slides.length}</span>
          <button onClick={next} disabled={current === slides.length - 1} className="p-1.5 rounded hover:bg-secondary transition disabled:opacity-20">
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeckViewer;
