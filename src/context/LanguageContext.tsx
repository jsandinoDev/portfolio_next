"use client";

import { createContext, useContext, useState } from "react";
import { en, Dictionary } from "@/i18n/en";
import { es } from "@/i18n/es";

type Lang = "en" | "es";

const dictionaries: Record<Lang, Dictionary> = { en, es };

const LanguageContext = createContext<{
  lang: Lang;
  t: Dictionary;
  toggleLang: () => void;
}>({ lang: "en", t: en, toggleLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ lang, t: dictionaries[lang], toggleLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
