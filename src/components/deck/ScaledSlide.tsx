import { useRef, useState, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScaledSlideProps {
  children: ReactNode;
  className?: string;
  isMobile?: boolean;
}

const ScaledSlide = ({ children, className, isMobile = false }: ScaledSlideProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    if (isMobile) return; // No scaling needed on mobile
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setScale(Math.min(el.clientWidth / 1920, el.clientHeight / 1080));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobile]);

  // Mobile: render as a normal responsive page
  if (isMobile) {
    return (
      <div className={cn('w-full min-h-dvh', className)}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full h-full overflow-hidden', className)}
    >
      <div
        className="slide-content"
        style={{
          width: 1920,
          height: 1080,
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScaledSlide;
