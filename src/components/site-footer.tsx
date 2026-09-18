import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="brand" href="/" aria-label="WealthBuilder home"><Image src="/assets/WealthBuilder_logo.png" alt="WealthBuilder" width={1774} height={887} /></Link>
        <nav aria-label="Footer navigation"><Link href="/#how-it-works">How it works</Link><Link href="/#security">Security</Link></nav>
      </div>
    </footer>
  );
}
