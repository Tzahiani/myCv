"use client";

import { ArrowUpRight, Cpu, Dice5, HeartPulse, Plane } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { passions } from "@/data/content";

const iconMap = {
  plane: Plane,
  cpu: Cpu,
  dice: Dice5,
  heart: HeartPulse,
} as const;

export function Passions() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="passions"
      className="scroll-mt-8 px-5 py-16 sm:px-8 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow={t.passionsEyebrow}
            title={t.passionsTitle}
            description={t.passionsDesc}
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {passions.map((item, index) => {
            const Icon = iconMap[item.icon];
            const href = "href" in item ? item.href : undefined;
            return (
              <Reveal key={item.id} delay={index * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.05] sm:p-6">
                  <div className="absolute -end-8 -top-8 size-28 rounded-full bg-gradient-to-br from-cyan-400/10 to-violet-500/20 blur-2xl transition group-hover:from-cyan-400/20 group-hover:to-violet-500/30" />
                  <div className="relative">
                    <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/15 to-violet-500/20 text-cyan-200 shadow-[0_0_24px_-8px_rgba(56,189,248,0.6)]">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {item.title[locale]}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {item.description[locale]}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                      >
                        {t.watchChannel}
                        <ArrowUpRight className="size-3.5" aria-hidden />
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
