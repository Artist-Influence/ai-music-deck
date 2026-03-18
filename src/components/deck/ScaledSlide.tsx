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
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      if (isMobile) {
        setScale(el.clientWidth / 1920);
      } else {
        setScale(Math.min(el.clientWidth / 1920, el.clientHeight / 1080));
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-full',
        isMobile ? 'overflow-y-auto overflow-x-hidden touch-pan-y' : 'overflow-hidden',
        className
      )}
    >
      <div
        className="slide-content"
        style={{
          width: 1920,
          height: 1080,
          ...(isMobile
            ? {
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }
            : {
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) scale(${scale})`,
                transformOrigin: 'center center',
              }),
        }}
      >
        {children}
      </div>
      {isMobile && <div style={{ height: 1080 * scale }} />}
    </div>
  );
};

export default ScaledSlide;
