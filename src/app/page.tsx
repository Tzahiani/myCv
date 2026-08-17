"use client";

import { BackgroundEffects } from "@/components/BackgroundEffects";
import { BottomNav } from "@/components/BottomNav";
import { Connect } from "@/components/Connect";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Passions } from "@/components/Passions";
import { TopBar } from "@/components/TopBar";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <BackgroundEffects />
      <TopBar />
      <main className="relative flex-1">
        <Hero />
        <Experience />
        <Education />
        <Passions />
        <Connect />
      </main>
      <BottomNav />
    </LanguageProvider>
  );
}
