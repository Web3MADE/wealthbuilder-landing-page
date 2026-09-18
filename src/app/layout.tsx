import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const title = "WealthBuilder | Your Personal Crypto Bank";
const description = "Build long-term crypto wealth on your terms with a self-custodial, AI-assisted personal crypto platform.";
const socialImage = "/assets/WB_moreThanInvesting_section.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "WealthBuilder",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "WealthBuilder",
    type: "website",
    images: [{ url: socialImage, width: 1672, height: 941, alt: "WealthBuilder: built for more than investing" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" id="top"><body>{children}</body></html>;
}
