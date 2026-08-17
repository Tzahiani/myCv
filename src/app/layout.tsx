import type { Metadata, Viewport } from "next";
import { Heebo, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const hebrew = Heebo({
  variable: "--font-hebrew",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tzahi Anidgar | Head of QA & Automation Leader",
  description:
    "Personal portfolio of Tzahi (Itzhak) Anidgar — Head of QA, automation leader, maker, and pilot in training.",
  openGraph: {
    title: "Tzahi Anidgar | Head of QA & Automation Leader",
    description:
      "Driving quality and automation in tech, while exploring the skies and building physical creations offline.",
    type: "website",
    images: [{ url: "/tzahi.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#05060c",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${display.variable} ${body.variable} ${hebrew.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
