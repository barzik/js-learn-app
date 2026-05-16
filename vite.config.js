import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Loads .md files as base64-encoded strings. Markdown content can contain
// sequences (`<\/script>`, escaped backticks, `${...}`) that fragile HTML/JS
// minifiers downstream may corrupt. Encoding to base64 leaves only
// [A-Za-z0-9+/=] in the bundle, which is opaque to any minifier.
function mdAsBase64() {
  return {
    name: 'md-as-base64',
    enforce: 'pre',
    load(id) {
      const filePath = id.split('?')[0];
      if (!filePath.endsWith('.md')) return null;
      const content = readFileSync(filePath, 'utf-8');
      const b64 = Buffer.from(content, 'utf-8').toString('base64');
      return `export default ${JSON.stringify(b64)};`;
    },
  };
}

export default defineConfig(({ mode }) => {
  const isSingleFile = mode === 'singlefile';

  return {
    base: isSingleFile ? './' : '/',
    plugins: [
      mdAsBase64(),
      react(),
      tailwindcss(),
      ...(isSingleFile ? [viteSingleFile()] : []),
    ],
    server: {
      port: 3000,
    },
    build: isSingleFile
      ? {
          assetsInlineLimit: 100_000_000,
          chunkSizeWarningLimit: 100_000_000,
          cssCodeSplit: false,
          rollupOptions: {
            output: {
              inlineDynamicImports: true,
            },
          },
        }
      : undefined,
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      coverage: {
        provider: 'v8',
        reporter: ['text'],
        include: ['src/**/*.{js,jsx}'],
        exclude: [
          'src/index.jsx',
          'src/setupTests.js',
          'src/**/*.spec.{js,jsx}',
          'src/docs/**',
        ],
        thresholds: {
          branches: 70,
          functions: 20,
          lines: 80,
          statements: 80,
        },
      },
    },
  };
});
