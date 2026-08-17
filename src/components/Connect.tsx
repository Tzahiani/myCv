"use client";

import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { LinkedInIcon, YouTubeIcon } from "@/components/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import { links } from "@/data/content";

export function Connect() {
  const { t } = useLanguage();

  return (
    <section
      id="connect"
      className="scroll-mt-8 px-5 pb-36 pt-8 sm:px-8 md:px-10 md:pb-40"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-violet-600/15 p-6 sm:p-8">
            <SectionHeading
              eyebrow={t.connectEyebrow}
              title={t.connectTitle}
              description={t.connectDesc}
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${links.email}`}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 active:scale-[0.98]"
                dir="ltr"
              >
                <Mail className="size-4" />
                {links.email}
              </a>
              <a
                href={links.phoneHref}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-black/20 px-5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10 active:scale-[0.98]"
                dir="ltr"
              >
                <Phone className="size-4 text-cyan-300" />
                {links.phone}
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-zinc-200 transition hover:border-cyan-300/30"
              >
                <LinkedInIcon className="size-4 text-cyan-300" />
                {t.linkedin}
              </a>
              <a
                href={links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-zinc-200 transition hover:border-cyan-300/30"
              >
                <YouTubeIcon className="size-4 text-cyan-300" />
                {t.youtube}
              </a>
            </div>
          </div>
        </Reveal>
        <p className="mt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} {t.shortName}
        </p>
      </div>
    </section>
  );
}
