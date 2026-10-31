import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const repoRoot = import.meta.dirname;
const deployRoot = path.resolve(repoRoot, 'deploy');
const BASE = '/SpiderMan/';

/**
 * The @font-face in app/globals.css points at the public asset with a root
 * absolute url. On the GitHub Pages project site the app lives under /SpiderMan/,
 * so rewrite it to the base-prefixed absolute URL. Only applied in this build.
 */
function rebasePublicCssUrls(base: string): Plugin {
  return {
    name: 'rebase-public-css-urls',
    apply: 'build',
    async transform(code, id) {
      if (!id.endsWith('.css')) return null;
      return code.replace(/url\((['"]?)\/(assets\/[^'")]+)\1\)/g, (_m, q, p) =>
        `url(${q}${base}${p}${q})`,
      );
    },
  };
}

export default defineConfig({
  root: deployRoot,
  base: BASE,
  publicDir: path.resolve(repoRoot, 'public'),
  plugins: [react(), rebasePublicCssUrls(BASE)],
  resolve: {
    alias: {
      '@': repoRoot,
      'next/image': path.resolve(deployRoot, 'next-image-shim.tsx'),
    },
  },
  build: {
    outDir: path.resolve(repoRoot, 'dist-pages'),
    emptyOutDir: true,
    chunkSizeWarningLimit: 6000,
  },
});
