"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { LinkedInIcon, YouTubeIcon } from "@/components/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import { links } from "@/data/content";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { t, locale } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center px-5 pb-10 pt-24 sm:px-8 sm:pb-12 md:px-10 md:pt-28"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 via-sky-400 to-violet-500 opacity-70 blur-md" />
          <Image
            src={links.photo}
            alt={t.name}
            width={400}
            height={400}
            priority
            className="relative size-28 rounded-full object-cover ring-2 ring-white/20 sm:size-36 md:size-40"
          />
        </motion.div>

        <div className="min-w-0 flex-1">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-cyan-200/90 backdrop-blur-md"
          >
            <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            {t.badge}
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-[2.15rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-br from-white via-white to-cyan-200/80 bg-clip-text text-transparent">
              {t.name}
            </span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-violet-200/90 sm:text-base md:text-lg"
          >
            {t.tagline}
          </motion.p>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {t.intro}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={`mailto:${links.email}`}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 text-sm font-semibold text-slate-950 shadow-[0_0_32px_-8px_rgba(56,189,248,0.7)] transition hover:brightness-110 active:scale-[0.98]"
            >
              <Mail className="size-4 transition group-hover:-translate-y-0.5" />
              {t.connectCta}
            </a>
            <a
              href={links.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/10 active:scale-[0.98]"
            >
              <Phone className="size-4 text-cyan-300" />
              {t.callCta}
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition hover:text-cyan-200"
            >
              <LinkedInIcon className="size-4" />
              {t.linkedin}
            </a>
            <span className="text-zinc-700" aria-hidden>
              ·
            </span>
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition hover:text-cyan-200"
            >
              <YouTubeIcon className="size-4" />
              {t.youtube}
            </a>
            <span className="text-zinc-700" aria-hidden>
              ·
            </span>
            <span className="text-sm text-zinc-500" dir="ltr">
              {links.email}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Keep locale in DOM for a11y tooling */}
      <span className="sr-only">{locale}</span>
    </section>
  );
}
