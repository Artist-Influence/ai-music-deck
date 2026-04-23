import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

interface ExportPdfButtonProps {
  setExportSlideIndex: (i: number | null) => void;
  totalSlides: number;
}

const delay = (ms: number) => new Promise(r => setTimeout(r, ms));
const nextFrame = () => new Promise(r => requestAnimationFrame(() => r(null)));

const ExportPdfButton = ({ setExportSlideIndex, totalSlides }: ExportPdfButtonProps) => {
  const [exporting, setExporting] = useState(false);

  const exportPdf = async () => {
    setExporting(true);
    const { dismiss } = toast({
      title: 'Exporting PDF...',
      description: `Capturing slide 1 of ${totalSlides}`,
      duration: 600000,
    });

    // Resolve --background to a concrete color
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

        // Mount this slide into the offscreen portal
        setExportSlideIndex(i);

        // Wait for React render + animations + fonts
        await nextFrame();
        await nextFrame();
        try { await (document as any).fonts?.ready; } catch {}
        await delay(800);

        const slideEl = document.getElementById('export-capture') as HTMLElement | null;
        if (!slideEl) {
          console.warn(`Slide ${i + 1}: #export-capture not found`);
          continue;
        }

        // Wait for any images inside to decode
        const imgs = Array.from(slideEl.querySelectorAll('img'));
        await Promise.all(
          imgs.map(img =>
            (img.complete ? Promise.resolve() : img.decode().catch(() => {}))
          )
        );

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
      setExportSlideIndex(null);
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
