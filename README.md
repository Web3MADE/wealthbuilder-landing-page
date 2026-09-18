# WealthBuilder landing page

Next.js App Router landing page built with TypeScript, Tailwind CSS, and the supplied WealthBuilder assets. The Early Access form sends validated email addresses to a server-side Google Apps Script webhook.

## Run locally

Use Node.js 24 and pnpm 10.18.3.

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Early Access webhook

Set `GOOGLE_SHEETS_WEBHOOK_URL` in `.env.local` for local development and in
your deployment environment. Keep it server-side; do not prefix it with
`NEXT_PUBLIC_`. The `/api/waitlist` route sends `{ "email": "..." }` as JSON.
It expects these JSON responses from Apps Script:

- New signup: `{ "success": true }`
- Existing email: `{ "success": true, "existing": true }`
- Invalid email: `{ "success": false, "error": "Invalid email" }`
- Other errors: `{ "success": false, "error": "..." }`

The API returns a friendly error if the webhook is unavailable or returns an
unexpected response. The form is shared by Home and About.

## Check and build

```sh
pnpm lint
pnpm build
pnpm start
```

`pnpm start` serves the production build. Before deploying, set `NEXT_PUBLIC_SITE_URL` to the public site origin (for example, `https://your-domain.example`) so Open Graph images use the correct absolute URL. On Vercel, `VERCEL_URL` is used when `NEXT_PUBLIC_SITE_URL` is absent.

The visual assets live in `public/assets`. Page content is in `src/app/page.tsx`; the header, footer, and form are in `src/components`. No auth, analytics, or database is configured.

The About page is at `/about`. Its founder profile links are defined in
`src/app/about/page.tsx`.
