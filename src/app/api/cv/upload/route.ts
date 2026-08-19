import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { uploadCv } from "@/lib/cv-storage";

const MAX_CV_SIZE_BYTES = 8 * 1024 * 1024;

function isAuthorized(providedKey: string) {
  const expectedKey = process.env.CV_ADMIN_KEY;
  if (!expectedKey) return false;

  const provided = Buffer.from(providedKey);
  const expected = Buffer.from(expectedKey);
  if (provided.length !== expected.length) return false;

  return timingSafeEqual(provided, expected);
}

function isPdf(file: File) {
  const typeLooksPdf = file.type === "application/pdf";
  const nameLooksPdf = file.name.toLowerCase().endsWith(".pdf");
  return typeLooksPdf || nameLooksPdf;
}

export async function POST(request: Request) {
  const adminKey = request.headers.get("x-cv-admin-key") ?? "";
  if (!isAuthorized(adminKey)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "Blob storage is not configured" },
      { status: 500 },
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  if (!isPdf(file)) {
    return NextResponse.json({ error: "Only PDF files are allowed" }, { status: 400 });
  }

  if (file.size > MAX_CV_SIZE_BYTES) {
    return NextResponse.json(
      { error: "File is too large (max 8MB)" },
      { status: 413 },
    );
  }

  try {
    const blob = await uploadCv(file);
    return NextResponse.json({ ok: true, url: blob.url });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
