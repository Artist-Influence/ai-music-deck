import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { slides } from './slides';
import { createRoot } from 'react-dom/client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ExportPdfButton = () => {
  const [exporting, setExporting] = useState(false);

  const exportPdf = async () => {
    setExporting(true);
    const { dismiss } = toast({ title: 'Exporting...', description: `Rendering slide 1 of ${slides.length}`, duration: 120000 });

    try {
      const doc = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1920, 1080] });

      const container = document.createElement('div');
      Object.assign(container.style, {
        position: 'fixed',
        left: '-9999px',
        top: '0',
        width: '1920px',
        height: '1080px',
        overflow: 'hidden',
        zIndex: '-1',
      });
      document.body.appendChild(container);

      for (let i = 0; i < slides.length; i++) {
        dismiss();
        toast({ title: 'Exporting...', description: `Rendering slide ${i + 1} of ${slides.length}`, duration: 120000 });

        const SlideComponent = slides[i];
        const wrapper = document.createElement('div');
        wrapper.style.width = '1920px';
        wrapper.style.height = '1080px';
        container.innerHTML = '';
        container.appendChild(wrapper);

        const root = createRoot(wrapper);
        root.render(<SlideComponent />);

        // Wait for render + images
        await new Promise(r => setTimeout(r, 500));

        const canvas = await html2canvas(wrapper, {
          width: 1920,
          height: 1080,
          scale: 1,
          useCORS: true,
          backgroundColor: null,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.92);
        if (i > 0) doc.addPage();
        doc.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);

        root.unmount();
      }

      document.body.removeChild(container);
      doc.save('CLOUTED-Deck.pdf');
      dismiss();
      toast({ title: 'Export complete', description: 'PDF downloaded successfully.' });
    } catch (err) {
      console.error('PDF export error:', err);
      dismiss();
      toast({ title: 'Export failed', description: 'Something went wrong.', variant: 'destructive' });
    } finally {
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
