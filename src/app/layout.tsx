import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WealthBuilder | Your Personal Crypto Bank",
  description: "Meet WealthBuilder, your personal crypto bank. Explore what's coming and early access.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-slate-900 antialiased">{children}</body>
    </html>
  );
}
