import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import en from './en';
import es from './es';
import pt from './pt';
import ko from './ko';
import ja from './ja';
import zh from './zh';
import nl from './nl';
import de from './de';
import fr from './fr';

const allTranslations: Record<string, Record<string, string>> = { en, es, pt, ko, ja, zh, nl, de, fr };

interface LanguageContextValue {
  locale: string;
  setLocale: (code: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState(() => {
    try { return localStorage.getItem('deck_locale') || 'en'; } catch { return 'en'; }
  });

  const setLocale = useCallback((code: string) => {
    setLocaleState(code);
    try { localStorage.setItem('deck_locale', code); } catch { /* */ }
  }, []);

  const t = useCallback((key: string): string => {
    return allTranslations[locale]?.[key] ?? en[key] ?? key;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
