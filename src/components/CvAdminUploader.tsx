"use client";

import { useMemo, useState } from "react";

export function CvAdminUploader() {
  const [key, setKey] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");

  const canSubmit = useMemo(() => key.trim().length > 0 && !!file, [key, file]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit || !file) return;

    setStatus("loading");
    setMessage("");
    setUploadedUrl("");

    const formData = new FormData();
    formData.set("file", file);

    try {
      const response = await fetch("/api/cv/upload", {
        method: "POST",
        headers: {
          "x-cv-admin-key": key,
        },
        body: formData,
      });

      const data = (await response.json()) as {
        ok?: boolean;
        url?: string;
        error?: string;
      };

      if (!response.ok || !data.ok || !data.url) {
        setStatus("error");
        setMessage(data.error ?? "Upload failed");
        return;
      }

      setStatus("success");
      setUploadedUrl(data.url);
      setMessage("CV updated successfully.");
      setFile(null);
    } catch {
      setStatus("error");
      setMessage("Network error while uploading.");
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-zinc-900/80 p-6 shadow-[0_0_40px_-24px_rgba(34,211,238,0.7)]">
      <h1 className="text-xl font-semibold text-white">CV Admin Upload</h1>
      <p className="mt-2 text-sm text-zinc-400">
        Upload a new PDF and it will immediately become the download target on the
        website.
      </p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-zinc-300">Admin key</span>
          <input
            type="password"
            value={key}
            onChange={(event) => setKey(event.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white outline-none transition focus:border-cyan-300/50"
            placeholder="Enter your secret key"
            autoComplete="off"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-medium text-zinc-300">PDF file</span>
          <input
            type="file"
            accept="application/pdf,.pdf"
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            className="block w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-zinc-200 file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-400/20 file:px-3 file:py-1.5 file:text-cyan-200"
          />
        </label>

        <button
          type="submit"
          disabled={!canSubmit || status === "loading"}
          className="inline-flex h-10 items-center justify-center rounded-xl bg-cyan-400/90 px-4 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "Uploading..." : "Upload CV"}
        </button>
      </form>

      {message ? (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-emerald-300" : "text-rose-300"
          }`}
        >
          {message}
        </p>
      ) : null}

      {uploadedUrl ? (
        <p className="mt-3 break-all text-xs text-zinc-400">
          Uploaded URL: <span className="text-zinc-200">{uploadedUrl}</span>
        </p>
      ) : null}

      <div className="mt-6 border-t border-white/10 pt-4 text-xs text-zinc-500">
        Public CV link:{" "}
        <a className="text-cyan-300 hover:text-cyan-200" href="/api/cv" target="_blank" rel="noreferrer">
          /api/cv
        </a>
      </div>
    </div>
  );
}
