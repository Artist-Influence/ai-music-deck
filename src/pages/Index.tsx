import { useEffect, useState } from 'react';
import DeckViewer from '@/components/deck/DeckViewer';
import EmailGate from '@/components/deck/EmailGate';

const Index = () => {
  const [hasAccess, setHasAccess] = useState(() => !!localStorage.getItem('clouted_deck_email'));

  useEffect(() => {
    document.title = 'Clouted — The Growth System for Modern Music';
  }, []);

  if (!hasAccess) {
    return <EmailGate onAccess={() => setHasAccess(true)} />;
  }

  return <DeckViewer />;
};

export default Index;
