import React, { createContext, useContext, useMemo, useState } from "react";
import { translations } from "../translations/index.js";

const I18nContext = createContext(null);

const STORAGE_KEY = "portfolio_lang";

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "es" ? saved : "es";
  });

  const t = useMemo(() => {
    const dict = translations[lang] ?? translations.es;
    return (key) => dict[key] ?? key;
  }, [lang]);

  const value = useMemo(() => {
    return {
      lang,
      setLang: (next) => {
        const safe = next === "en" ? "en" : "es";
        setLang(safe);
        localStorage.setItem(STORAGE_KEY, safe);
      },
      t,
    };
  }, [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider />");
  return ctx;
}
