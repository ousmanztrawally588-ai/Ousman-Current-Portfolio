"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ms";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, ms: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (en: string, ms: string) => (language === "en" ? en : ms);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);