"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Language = "bn" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("bn");

  const toggleLang = () => {
    setLangState((prev) => (prev === "bn" ? "en" : "bn"));
  };

  const setLang = (language: Language) => setLangState(language);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for easy usage
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
