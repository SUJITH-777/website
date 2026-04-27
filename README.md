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

**Open Graph / link previews:** On Vercel, `VERCEL_URL` is set during build so `index.html` gets the correct `og:url` and `og:image` (uses `public/logo.png`). For a custom domain, set `VITE_SITE_BASE` in the project env (see `.env.example`). After changing previews, refresh cached metadata: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator) (or the X equivalent).

**If an old “Lovable” preview still appears:** Caches can keep the previous image for days. Scrape again with the tools above, and in Vercel check **Project → Settings → General** (project name/description) for anything you want to change.
