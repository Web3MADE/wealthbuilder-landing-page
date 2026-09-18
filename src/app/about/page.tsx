import type { Metadata } from "next";
import Image from "next/image";
import { EarlyAccessForm } from "@/components/early-access-form";
import { MoreThanInvesting } from "@/components/more-than-investing";
import { MotionObserver } from "@/components/motion-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const aboutTitle = "About WealthBuilder | Our Mission & Founder";
const aboutDescription =
  "Meet the founder and learn why WealthBuilder is building a simpler, self-custodial financial home for crypto.";
const socialImage = "/assets/WB_moreThanInvesting_section.png";

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    url: "/about",
    siteName: "WealthBuilder",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1672,
        height: 941,
        alt: "WealthBuilder: built for more than investing",
      },
    ],
  },
  twitter: { card: "summary_large_image", title: aboutTitle, description: aboutDescription, images: [socialImage] },
};

const trustPoints = [
  {
    title: "Self-custodial",
    description: "You remain in control.",
    icon: "WB_icon_lock.png",
  },
  {
    title: "AI-powered",
    description: "Aligned to your goals.",
    icon: "WB_icon_brain_2.png",
  },
  {
    title: "Security-first",
    description: "Built with risk in mind.",
    icon: "WB_icon_security.png",
  },
] as const;

const questions = [
  {
    question: "Is WealthBuilder a bank?",
    answer:
      "No. WealthBuilder is not a bank or regulated deposit-taking institution. It is being built as a self-custodial crypto financial platform, meaning users retain control of their assets. Crypto and DeFi products are not bank deposits and are not protected by deposit-insurance schemes such as the FDIC or FSCS. Digital-asset activity involves risk, including possible loss of principal.",
  },
  {
    question: "Who controls my assets?",
    answer:
      "You do. WealthBuilder is designed to be self-custodial, so your assets remain under your control.",
  },
  {
    question: "What does the AI do?",
    answer:
      "It monitors and recommends within the goals and permissions you set. It only executes where you allow it to.",
  },
  {
    question: "Which chains will be supported?",
    answer:
      "WealthBuilder is chain-agnostic. Supported chains will be shared before launch.",
  },
  {
    question: "When can I use it?",
    answer:
      "WealthBuilder is in development. Join early access for updates as we build.",
  },
] as const;

const founderLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hakeem-whitmore" },
  { label: "GitHub", href: "https://github.com/Web3MADE" },
] as const;

export default function AboutPage() {
  return (
    <>
      <MotionObserver />
      <div className="site-shell">
        <SiteHeader page="about" />
        <main id="main-content">
          <section className="about-hero scenic-section" aria-labelledby="about-title">
            <div className="container about-hero-content">
              <div className="about-hero-copy">
                <p className="eyebrow">ABOUT WEALTHBUILDER</p>
                <h1 id="about-title">
                  Crypto gave people financial sovereignty.
                  <span>WealthBuilder helps them actually use it.</span>
                </h1>
                <p className="about-hero-body">
                  WealthBuilder is being built as a personal crypto bank for people who want their financial life to live on-chain. Crypto gives individuals control, but also leaves them managing wallets, protocols, risk and strategy themselves. WealthBuilder exists to make that simpler — starting with long-term crypto wealth building.
                </p>
              </div>
              <ul className="about-trust-grid" aria-label="WealthBuilder principles">
                {trustPoints.map((point) => (
                  <li className="about-trust-card glass-panel" key={point.title}>
                    <Image src={`/assets/${point.icon}`} alt="" width={1254} height={1254} sizes="64px" />
                    <div><h2>{point.title}</h2><p>{point.description}</p></div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <MoreThanInvesting growStatus="Live now" />

          <section className="founder-section scenic-section" aria-labelledby="founder-title">
            <div className="container founder-layout reveal">
              <div className="founder-copy">
                <p className="eyebrow">THE FOUNDER</p>
                <h2 id="founder-title">Building a more open <span>financial future.</span></h2>
                <p>I’m Hakeem, a software engineer with 5+ years of experience across Web2 and Web3, with a focus on fintech, smart contracts, DeFi and security.</p>
                <p>I previously worked at Zand Bank, where I helped integrate a regulated stablecoin into the banking platform. I’ve also audited and contributed to multiple DeFi protocols, giving me hands-on experience with both how on-chain financial products are built and how they can fail.</p>
                <p>WealthBuilder brings those experiences together into something practical — a secure, intelligent and user-first personal crypto bank built for long-term wealth creation.</p>
                <div className="founder-links">
                  {founderLinks.map((link) => (
                    <a className="founder-link" href={link.href} target="_blank" rel="noopener noreferrer" key={link.label}>{link.label}<span aria-hidden="true">↗</span></a>
                  ))}
                </div>
              </div>
              <div className="founder-photo">
                <Image
                  src="/assets/me.JPG"
                  alt="Hakeem, founder of WealthBuilder"
                  width={640}
                  height={640}
                  sizes="(max-width: 900px) 420px, 36vw"
                />
              </div>
            </div>
          </section>

          <section className="faq-section scenic-section" aria-labelledby="faq-title">
            <div className="container faq-layout reveal">
              <h2 id="faq-title">FAQ</h2>
              <div className="faq-list">
                {questions.map((item) => (
                  <details className="faq-item" key={item.question}>
                    <summary>{item.question}<span aria-hidden="true" className="faq-symbol" /></summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="early-section scenic-section" id="early-access" aria-labelledby="about-early-title">
            <div className="container early-layout reveal">
              <div>
                <h2 id="about-early-title">Be part of <span>what’s next.</span></h2>
                <p>Join the early access list and get updates as we build.</p>
              </div>
              <EarlyAccessForm />
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
