import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "WealthBuilder — Your Personal Crypto Bank",
  description: "A personal crypto bank for long-term crypto wealth building.",
  openGraph: {
    title: "WealthBuilder — Your Personal Crypto Bank",
    description: "A personal crypto bank for long-term crypto wealth building.",
    type: "website",
    images: [{ url: "/assets/WB_backgroundImage.png", width: 1672, height: 941, alt: "Dark green mountain landscape" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" id="top"><body>{children}</body></html>;
}
