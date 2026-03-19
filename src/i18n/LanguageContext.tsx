import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import en from './en';
import { locales } from './locales';

interface LanguageContextValue {
  locale: string;
  setLocale: (code: string) => void;
  t: (key: string) => string;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
  isTranslating: false,
});

const CACHE_PREFIX = 'deck_i18n_';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState(() => {
    try { return localStorage.getItem('deck_locale') || 'en'; } catch { return 'en'; }
  });
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({ en });
  const [isTranslating, setIsTranslating] = useState(false);

  // On mount, try to load cached translation for saved locale
  useEffect(() => {
    if (locale !== 'en' && !translations[locale]) {
      const cached = localStorage.getItem(CACHE_PREFIX + locale);
      if (cached) {
        try {
          setTranslations(prev => ({ ...prev, [locale]: JSON.parse(cached) }));
        } catch { /* ignore */ }
      } else {
        fetchTranslation(locale);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTranslation = useCallback(async (code: string) => {
    setIsTranslating(true);
    try {
      const localeMeta = locales.find(l => l.code === code);
      const style = localeMeta?.style || localeMeta?.label || code;

      const resp = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/translate-deck`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ targetLocale: style, strings: en }),
        }
      );

      if (!resp.ok) throw new Error('Translation failed');
      const data = await resp.json();

      setTranslations(prev => ({ ...prev, [code]: data }));
      try {
        localStorage.setItem(CACHE_PREFIX + code, JSON.stringify(data));
      } catch { /* storage full */ }
    } catch (err) {
      console.error('Translation error:', err);
      // Fall back to English
    } finally {
      setIsTranslating(false);
    }
  }, []);

  const setLocale = useCallback((code: string) => {
    setLocaleState(code);
    try { localStorage.setItem('deck_locale', code); } catch { /* */ }

    if (code === 'en') return;
    if (translations[code]) return;

    const cached = localStorage.getItem(CACHE_PREFIX + code);
    if (cached) {
      try {
        setTranslations(prev => ({ ...prev, [code]: JSON.parse(cached) }));
        return;
      } catch { /* */ }
    }

    fetchTranslation(code);
  }, [translations, fetchTranslation]);

  const t = useCallback((key: string): string => {
    if (locale === 'en') return en[key] ?? key;
    return translations[locale]?.[key] ?? en[key] ?? key;
  }, [locale, translations]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
