import { list, put } from "@vercel/blob";

const CV_PREFIX = "cv-uploads/";

function getBlobToken() {
  return process.env.BLOB_READ_WRITE_TOKEN;
}

export function isCvStorageConfigured() {
  return Boolean(getBlobToken());
}

export async function getLatestCvUrl() {
  if (!isCvStorageConfigured()) return null;

  const { blobs } = await list({
    prefix: CV_PREFIX,
    token: getBlobToken(),
    limit: 100,
  });

  if (!blobs.length) return null;

  const latest = blobs.sort(
    (a, b) =>
      new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime(),
  )[0];

  return latest.url;
}

export async function uploadCv(file: File) {
  if (!isCvStorageConfigured()) {
    throw new Error("Blob storage is not configured");
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const pathname = `${CV_PREFIX}${Date.now()}-${safeName || "cv.pdf"}`;

  return put(pathname, file, {
    access: "public",
    token: getBlobToken(),
    addRandomSuffix: false,
  });
}
