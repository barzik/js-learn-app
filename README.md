# js-learn-app

A Hebrew RTL site for displaying markdown lessons with syntax-highlighted code examples.

Built with **Vite + React 19 + Tailwind CSS v4**. Markdown content is loaded from `src/docs/**/*.md` at build time via `import.meta.glob`.

## Install

```bash
npm ci
```

## Usage

Place all markdown files in directories inside `src/docs`. The directory structure becomes the sidebar navigation.

To pull a GitHub repository (or copy from a local path) into `src/docs`, set `MD_REPO_URL` and run:

```bash
MD_REPO_URL="git@github.com:barzik/js-learn-heb-md.git" npm run pull-md
# or with a local path:
MD_REPO_URL="/path/to/js-learn-heb-md" npm run pull-md
```

`pull-md` cleans `src/docs` (except `md.json` and `.gitkeep`) before copying/cloning, so there's no need to delete anything manually.

## Available scripts

### `npm run dev`

Runs the app in development mode on [http://localhost:3000](http://localhost:3000). The page hot-reloads on edits.

### `npm test`

Runs the unit test suite with Vitest in watch mode. Use `npm run test:ci` for a single-run with coverage.

### `npm run build`

Builds the app for production to the `dist` folder. The bundle is minified and ready to deploy to any static host.

### `npm run build:wp`

Builds a **single self-contained** `dist/index.html` with all JS, CSS, and markdown content inlined. Useful for embedding the whole app into a CMS page (e.g. a WordPress post) where you can only paste a single HTML blob.

Notes when embedding:

- The output file is large (~1.5 MB raw, ~450 KB gzipped). Some hosts limit the size of post content.
- Disable any JS/CSS minification or "optimization" plugins on the page (e.g. WP Rocket, Autoptimize, W3 Total Cache) for that post — they can corrupt the inline scripts.
- The build uses `base: './'` so it works no matter where the file is served from.

### `npm run preview`

Locally previews the production build.

### `npm run build-md-json`

Rebuilds `src/docs/md.json`, the structure index of the markdown files. Runs automatically before `dev` and `build`.

### `npm run lint` / `npm run lint:fix`

Runs ESLint over `src/**/*.{js,jsx}`.
