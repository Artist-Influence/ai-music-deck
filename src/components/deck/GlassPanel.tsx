import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bright' | 'subtle';
}

const variantStyles = {
  default: 'bg-white/[0.04] border-white/[0.08] shadow-[0_8px_32px_hsl(195_90%_60%/0.06)]',
  bright: 'bg-primary/[0.08] border-primary/[0.15] shadow-[0_8px_32px_hsl(195_90%_60%/0.1)]',
  subtle: 'bg-white/[0.02] border-white/[0.04]',
};

const GlassPanel = ({ children, className, variant = 'default' }: GlassPanelProps) => (
  <div className={cn('rounded-2xl border backdrop-blur-xl p-8', variantStyles[variant], className)}>
    {children}
  </div>
);

export default GlassPanel;
