import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * Injects canonical + social image URLs into index.html at build time.
 * WhatsApp / Facebook need **absolute https** og:image; relative URLs often fall back to stale previews.
 *
 * Resolution order:
 * 1. `VITE_SITE_BASE` — set in Vercel → Settings → Environment Variables (works even if system env is off)
 * 2. `VERCEL_URL` — deployment host (requires “System environment variables” enabled on Vercel, or use #1)
 * 3. `VERCEL_PROJECT_PRODUCTION_URL` — production host (Vercel sets when system env enabled)
 *
 * See: https://vercel.com/docs/projects/environment-variables/system-environment-variables
 */
function siteMetaHtml(): Plugin {
  return {
    name: "site-meta-html",
    transformIndexHtml(html) {
      const explicit = (process.env.VITE_SITE_BASE || "").trim();
      const vercelHost = (process.env.VERCEL_URL || "").trim();
      const prodHost = (process.env.VERCEL_PROJECT_PRODUCTION_URL || "").trim();

      const siteBase = (
        explicit ||
        (vercelHost ? `https://${vercelHost}` : "") ||
        (prodHost ? `https://${prodHost}` : "")
      ).replace(/\/$/, "");

      const cacheBust =
        (process.env.VERCEL_GIT_COMMIT_SHA || "").slice(0, 8) ||
        (process.env.npm_package_version || "").trim() ||
        "1";

      const ogImage = siteBase
        ? `${siteBase}/logo.png?v=${encodeURIComponent(cacheBust)}`
        : `/logo.png?v=${encodeURIComponent(cacheBust)}`;

      let out = html.replace(/__OG_IMAGE__/g, ogImage);

      if (siteBase) {
        out = out.replace(/__SITE_BASE__/g, siteBase);
      } else {
        out = out
          .replace(/^\s*<link rel="canonical"[^\n]*\n/m, "")
          .replace(/^\s*<meta property="og:url"[^\n]*\n/m, "")
          .replace(/__SITE_BASE__/g, "");
      }

      return out;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), siteMetaHtml()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
