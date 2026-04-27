import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * Injects canonical + social image URLs into index.html at build time so
 * link previews never fall back to a previous host (e.g. old template images).
 * On Vercel, `VERCEL_URL` is set automatically. Locally or other CI, set `VITE_SITE_BASE`
 * (no trailing slash), e.g. https://www.yourdomain.com
 */
function siteMetaHtml(): Plugin {
  return {
    name: "site-meta-html",
    transformIndexHtml(html) {
      const fromVercel = process.env.VERCEL_URL?.trim();
      const siteBase = (
        fromVercel ? `https://${fromVercel}` : (process.env.VITE_SITE_BASE || "").trim()
      ).replace(/\/$/, "");

      const ogImage = siteBase ? `${siteBase}/logo.png` : "/logo.png";

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
