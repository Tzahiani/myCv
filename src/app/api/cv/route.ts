import { NextResponse } from "next/server";
import { getLatestCvUrl } from "@/lib/cv-storage";

const FALLBACK_CV_PATH = "/Tzahi_Anidgar_CV.pdf";

export async function GET(request: Request) {
  const baseUrl = new URL(request.url);
  const fallbackUrl = new URL(FALLBACK_CV_PATH, baseUrl.origin).toString();

  try {
    const latestCvUrl = await getLatestCvUrl();
    const response = NextResponse.redirect(latestCvUrl ?? fallbackUrl, 307);
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch {
    const response = NextResponse.redirect(fallbackUrl, 307);
    response.headers.set("Cache-Control", "no-store");
    return response;
  }
}
