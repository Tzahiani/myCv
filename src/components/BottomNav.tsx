"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Home, MessageCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { navIds } from "@/data/content";

const icons = {
  home: Home,
  experience: Briefcase,
  passions: Sparkles,
  connect: MessageCircle,
} as const;

function getActiveSectionId() {
  const scrollBottom = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // Last section is short and sits above the sticky nav — force it near page end
  if (docHeight - scrollBottom < 120) {
    return "connect";
  }

  // Pick the last section whose top has crossed ~35% of the viewport
  const marker = window.scrollY + window.innerHeight * 0.35;
  let current: (typeof navIds)[number] = "home";

  for (const id of navIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.offsetTop <= marker) {
      current = id;
    }
  }

  return current;
}

export function BottomNav() {
  const { t } = useLanguage();
  const [active, setActive] = useState("home");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setActive(getActiveSectionId());
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      aria-label={t.navAria}
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2"
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-1 rounded-2xl border border-white/12 bg-[#0b0d16]/85 p-1.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        {navIds.map((id) => {
          const Icon = icons[id];
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className="relative flex min-h-12 min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1.5 text-[10px] font-medium transition"
              aria-current={isActive ? "page" : undefined}
            >
              {isActive ? (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/25"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
              <Icon
                className={`relative size-4 ${
                  isActive ? "text-cyan-200" : "text-zinc-500"
                }`}
                aria-hidden
              />
              <span
                className={`relative ${
                  isActive ? "text-white" : "text-zinc-500"
                }`}
              >
                {t.nav[id]}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
