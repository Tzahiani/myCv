import type { Metadata } from "next";
import { CvAdminUploader } from "@/components/CvAdminUploader";

export const metadata: Metadata = {
  title: "CV Admin Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CvAdminPortalPage() {
  return (
    <main className="min-h-dvh bg-[#05060c] px-4 py-12">
      <CvAdminUploader />
    </main>
  );
}
