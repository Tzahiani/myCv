"use client";

import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { education } from "@/data/content";

export function Education() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="education"
      className="scroll-mt-8 px-5 py-8 sm:px-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow={t.educationEyebrow}
            title={t.educationTitle}
            description={t.educationDesc}
          />
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-violet-500/15 text-violet-200">
                  <GraduationCap className="size-4" aria-hidden />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {item.title[locale]}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{item.place[locale]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
