import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sections = [
  {
    id: "your-wealth",
    title: "Your Wealth. Your Rules.",
    description: "A place to introduce the WealthBuilder approach. More details coming soon.",
  },
  {
    id: "how-it-works",
    title: "How It Works",
    description: "A simple walkthrough of WealthBuilder will go here.",
  },
  {
    id: "your-money",
    title: "Your Money Stays Yours.",
    description: "Details about ownership and control will go here.",
  },
  {
    id: "early-access",
    title: "Early Access",
    description: "Early access registration is coming soon. Check back for updates.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-6">
        <section aria-labelledby="hero-heading" className="py-20">
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight">
            Your Personal Crypto Bank
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            A new way to manage your crypto wealth. More details coming soon.
          </p>
          <a href="#early-access" className="mt-8 inline-block rounded-md bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700">
            Join Early Access
          </a>
        </section>
        {sections.map(({ id, title, description }) => (
          <section key={id} id={id} aria-labelledby={`${id}-heading`} className="border-t border-slate-200 py-12">
            <h2 id={`${id}-heading`} className="text-2xl font-semibold">{title}</h2>
            <p className="mt-3 max-w-xl text-slate-600">{description}</p>
          </section>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
