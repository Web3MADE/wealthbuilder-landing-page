# WealthBuilder landing page

Next.js App Router landing page built with TypeScript, Tailwind CSS, and the supplied WealthBuilder assets. The Early Access form validates email and shows a frontend success state; it does not save submissions yet.

## Run locally

Use Node.js 24 and pnpm 10.18.3.

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Check and build

```sh
pnpm lint
pnpm build
pnpm start
```

`pnpm start` serves the production build. Before deploying, set `NEXT_PUBLIC_SITE_URL` to the public site origin (for example, `https://your-domain.example`) so Open Graph images use the correct absolute URL. On Vercel, `VERCEL_URL` is used when `NEXT_PUBLIC_SITE_URL` is absent.

The visual assets live in `public/assets`. Page content is in `src/app/page.tsx`; the header, footer, and form are in `src/components`. No backend, auth, analytics, or database is configured.

The About page is at `/about`. Its founder profile links are defined in
`src/app/about/page.tsx`.
