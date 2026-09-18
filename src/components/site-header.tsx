import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export function SiteHeader({ page = "home" }: { page?: "home" | "about" }) {
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className="container nav-inner" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="WealthBuilder home"><Image src="/assets/WealthBuilder_logo.png" alt="WealthBuilder" width={1774} height={887} priority /></Link>
        <div className="desktop-nav">
          {links.map((link) => <Link href={link.href} key={link.href} aria-current={link.label.toLowerCase() === page ? "page" : undefined}>{link.label}</Link>)}
          <a href="#early-access" className="button button-small">Join Early Access</a>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
          <div className="mobile-menu-links">
            {links.map((link) => <Link href={link.href} key={link.href} aria-current={link.label.toLowerCase() === page ? "page" : undefined}>{link.label}</Link>)}
            <a href="#early-access">Join Early Access</a>
          </div>
        </details>
      </nav>
    </header>
  );
}
