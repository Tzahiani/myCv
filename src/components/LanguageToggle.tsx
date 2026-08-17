"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { toggleLocale, t, locale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/15 bg-[#0b0d16]/80 px-3 text-xs font-semibold text-white backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-[#121526]/90 ${className}`}
      aria-label={locale === "he" ? "Switch to English" : "מעבר לעברית"}
    >
      {t.langSwitch}
    </button>
  );
}
