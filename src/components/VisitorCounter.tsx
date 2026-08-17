"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type VisitorsResponse = {
  count: number | null;
  configured?: boolean;
};

export function VisitorCounter() {
  const { t } = useLanguage();
  const [count, setCount] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function track() {
      try {
        const res = await fetch("/api/visitors", { method: "POST" });
        const data = (await res.json()) as VisitorsResponse;
        if (!cancelled && data.configured && typeof data.count === "number") {
          setCount(data.count);
        }
      } catch {
        // Keep counter hidden if the backend is unavailable
      } finally {
        if (!cancelled) setReady(true);
      }
    }

    void track();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready || count == null) {
    return null;
  }

  const formatted = new Intl.NumberFormat().format(count);

  return (
    <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-zinc-500">
      <Eye className="size-3.5 text-cyan-400/80" aria-hidden />
      <span>
        {t.visitorsLabel}:{" "}
        <span className="font-medium tabular-nums text-zinc-300">{formatted}</span>
      </span>
    </p>
  );
}
