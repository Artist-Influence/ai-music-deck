import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

interface ExportPdfButtonProps {
  current: number;
  setCurrent: (i: number) => void;
  totalSlides: number;
}

const delay = (ms: number) => new Promise(r => setTimeout(r, ms));
const nextFrame = () => new Promise(r => requestAnimationFrame(() => r(null)));

const ExportPdfButton = ({ current, setCurrent, totalSlides }: ExportPdfButtonProps) => {
  const [exporting, setExporting] = useState(false);

  const exportPdf = async () => {
    setExporting(true);
    const originalIndex = current;
    const { dismiss } = toast({
      title: 'Exporting PDF...',
      description: `Capturing slide 1 of ${totalSlides}`,
      duration: 600000,
    });

    // Resolve --background to a concrete color for capture backing
    const bgVar = getComputedStyle(document.documentElement).getPropertyValue('--background').trim();
    const backgroundColor = bgVar ? `hsl(${bgVar})` : '#000000';

    try {
      const doc = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1920, 1080] });

      for (let i = 0; i < totalSlides; i++) {
        dismiss();
        toast({
          title: 'Exporting PDF...',
          description: `Capturing slide ${i + 1} of ${totalSlides}`,
          duration: 600000,
        });

        // Navigate to the slide
        setCurrent(i);

        // Wait for React render + animations + fonts
        await nextFrame();
        await nextFrame();
        try { await (document as any).fonts?.ready; } catch {}
        await delay(700);

        const slideEl = document.querySelector('.slide-content') as HTMLElement | null;
        if (!slideEl) {
          console.warn(`Slide ${i + 1}: .slide-content not found`);
          continue;
        }

        // Wait for any images inside to decode
        const imgs = Array.from(slideEl.querySelectorAll('img'));
        await Promise.all(
          imgs.map(img =>
            (img.complete ? Promise.resolve() : img.decode().catch(() => {}))
          )
        );

        // Temporarily neutralize the scale transform for crisp 1920x1080 capture
        const originalTransform = slideEl.style.transform;
        slideEl.style.transform = 'translate(-50%, -50%) scale(1)';

        await nextFrame();

        try {
          const canvas = await html2canvas(slideEl, {
            width: 1920,
            height: 1080,
            windowWidth: 1920,
            windowHeight: 1080,
            scale: 1,
            useCORS: true,
            backgroundColor,
            logging: false,
          });

          const imgData = canvas.toDataURL('image/jpeg', 0.92);
          if (i > 0) doc.addPage([1920, 1080], 'landscape');
          doc.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);
        } catch (err) {
          console.error(`Slide ${i + 1} capture failed:`, err);
        } finally {
          slideEl.style.transform = originalTransform;
        }
      }

      doc.save('Artist-Influence-Deck.pdf');
      dismiss();
      toast({ title: 'Export complete', description: 'PDF downloaded successfully.' });
    } catch (err) {
      console.error('PDF export error:', err);
      dismiss();
      toast({ title: 'Export failed', description: 'Something went wrong.', variant: 'destructive' });
    } finally {
      setCurrent(originalIndex);
      setExporting(false);
    }
  };

  return (
    <button
      onClick={exportPdf}
      disabled={exporting}
      className="p-2 rounded-lg hover:bg-secondary transition disabled:opacity-50"
      title="Export PDF"
    >
      {exporting ? <Loader2 className="w-4 h-4 text-muted-foreground animate-spin" /> : <Download className="w-4 h-4 text-muted-foreground" />}
    </button>
  );
};

export default ExportPdfButton;
