"use client";

import { Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { links } from "@/data/content";

export function TopBar() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex items-start justify-between gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6">
      <LanguageToggle />
      <motion.a
        href={links.cvPath}
        download
        initial={reduceMotion ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.45 }}
        whileHover={reduceMotion ? undefined : { scale: 1.03 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0b0d16]/80 px-3.5 py-2.5 text-xs font-semibold text-white shadow-[0_8px_30px_-10px_rgba(56,189,248,0.55)] backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-[#121526]/90 sm:px-4 sm:text-sm"
        aria-label={t.downloadCvAria}
      >
        <Download className="size-3.5 text-cyan-300 sm:size-4" aria-hidden />
        {t.downloadCv}
      </motion.a>
    </div>
  );
}
