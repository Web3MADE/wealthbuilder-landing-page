export function SiteHeader() {
  return (
    <header className="border-b border-slate-200">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:bg-white focus:p-4">
        Skip to content
      </a>
      <nav aria-label="Main navigation" className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <a href="#" className="text-lg font-semibold">WealthBuilder</a>
        <a href="#early-access" className="text-sm underline underline-offset-4">Early Access</a>
      </nav>
    </header>
  );
}
