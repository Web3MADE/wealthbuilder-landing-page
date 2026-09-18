# WealthBuilder

Minimal landing-page scaffold using Next.js App Router, TypeScript, Tailwind CSS, and ESLint. 
## Local development

Use Node.js 24 LTS and pnpm 10.18.3 (pinned in `package.json`).

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. Edit `src/app/page.tsx` to update the page.

## Checks and production

```sh
pnpm lint
pnpm build
pnpm start
```

`pnpm lint` runs ESLint. `pnpm build` creates an optimized production build and
checks TypeScript. `pnpm start` serves that build locally. Run lint and build
before deploying. Commit `pnpm-lock.yaml` for reproducible installs; CI can use
`pnpm install --frozen-lockfile`.

## Structure

- `src/app/layout.tsx`: root layout and WealthBuilder metadata.
- `src/app/page.tsx`: hero and placeholder sections.
- `src/app/globals.css`: Tailwind import and minimal global styles.
- `src/components/`: shared site header and footer.

The project intentionally has no database, authentication, analytics, component
library, or signup backend. Git initialization and hosting setup are managed
manually.
