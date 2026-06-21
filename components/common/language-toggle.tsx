"use client";

import { useLanguage } from "@/providers/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-background/60 px-1 py-1 text-xs backdrop-blur">
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 font-medium transition-colors ${
          language === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ms")}
        className={`rounded-full px-3 py-1 font-medium transition-colors ${
          language === "ms"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        BM
      </button>
    </div>
  );
}