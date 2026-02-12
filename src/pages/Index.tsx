import { useEffect } from 'react';
import DeckViewer from '@/components/deck/DeckViewer';

const Index = () => {
  useEffect(() => {
    document.title = 'Clouted — The Growth System for Modern Music';
  }, []);

  return <DeckViewer />;
};

export default Index;
