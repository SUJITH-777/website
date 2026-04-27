# Swarn Aayu — website

Marketing site for **Swarn Aayu Foundation**: Aayu, Curiosity Coach, and Thinking Matters.

## Stack

Vite, React, TypeScript, Tailwind CSS, shadcn/ui.

## Local development

```sh
npm install
npm run dev
```

Build: `npm run build` · Preview: `npm run preview`

## Deployment

Configure your host (e.g. Vercel) to run `npm run build` and serve the `dist` output.

**Open Graph / link previews:** Crawlers (WhatsApp, iMessage, Slack) need an **absolute `https://…` `og:image`**. The build injects URLs using, in order: `VITE_SITE_BASE` → `VERCEL_URL` → `VERCEL_PROJECT_PRODUCTION_URL` (see `vite.config.ts`). Image: `public/logo.png` (cache-busted with the git SHA when available).

**Vercel checklist**

1. **Project → Settings → Environment Variables →** enable **“System environment variables”** so `VERCEL_URL` exists at build time. If you leave it off, set **`VITE_SITE_BASE`** yourself to your live URL (no trailing slash), e.g. `https://yoursite.vercel.app`, for Preview and Production.
2. Redeploy after changing env vars.
3. Bust stale previews: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) → enter your URL → **Scrape Again** (WhatsApp uses the same crawler).

**If an old “Lovable” preview still appears:** It was almost always a **relative** `og:image` (`/logo.png` only) plus **cache**. Fix env + redeploy, then scrape again. Optionally rename the Vercel project under **Settings → General** so the dashboard doesn’t show a legacy name.
