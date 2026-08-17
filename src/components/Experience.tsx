"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { experience, skills } from "@/data/content";

export function Experience() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="experience"
      className="scroll-mt-8 px-5 py-16 sm:px-8 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow={t.experienceEyebrow}
            title={t.experienceTitle}
            description={t.experienceDesc}
          />
        </Reveal>

        <ol className="relative space-y-5 border-s border-white/10 ps-5 sm:ps-6">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <li className="relative">
                <span
                  className={`absolute -start-[1.6rem] top-3 size-3 rounded-full border-2 sm:-start-[1.85rem] ${
                    item.highlight
                      ? "border-cyan-300 bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]"
                      : "border-violet-300/70 bg-violet-500/80"
                  }`}
                  aria-hidden
                />
                <article
                  className={`rounded-2xl border p-5 sm:p-6 ${
                    item.highlight
                      ? "border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 via-white/[0.04] to-violet-500/10 shadow-[0_0_40px_-20px_rgba(56,189,248,0.55)]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                        {item.role[locale]}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-cyan-200/90">
                        {item.company[locale]}
                      </p>
                    </div>
                    <span
                      className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-400"
                      dir="ltr"
                    >
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet.en}
                        className="flex gap-2 text-sm leading-relaxed text-zinc-300 sm:text-[0.95rem]"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-violet-400/80" />
                        {bullet[locale]}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.12} className="mt-12">
          <h3 className="mb-4 font-display text-lg font-semibold text-white">
            {t.skillsTitle}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-gradient-to-br from-white/[0.07] to-violet-500/10 px-3.5 py-2 text-sm font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-cyan-300/30 hover:text-white"
                dir="ltr"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
