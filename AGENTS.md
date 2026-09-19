# HomeHandy Web

Marketing website for **HomeHandy**, the home maintenance tracker app
(repo: `/Users/dani/Desktop/repos/home-handy` — read its AGENTS.md for full app context).

- **Live URL**: https://homehandy.store/ (custom domain via GitHub Pages, served from root)
- **Repo**: `git@github.com:erperejildo/homehandy-web.git`
- **Stack**: Vue 3 + vue-router + Vite + TypeScript + Sass (scss) + Vitest
- **Style source of truth**: mirrors the app theme in
  `/Users/dani/Desktop/repos/home-handy/lib/core/theme/app_theme.dart`

## Store links

- Android: https://play.google.com/store/apps/details?id=com.drodriguez.homehandy
- iOS: https://apps.apple.com/us/app/homehandy-home-maintenance/id6763947552

Defined once in `src/config.ts` (`STORE_URLS`). Never hardcode them anywhere else.

## Repo layout

```
src/
  config.ts                  # APP_NAME, tagline, description, SITE_URL, STORE_URLS, detectPlatform()
  main.ts                    # mounts app, imports theme.scss globally
  App.vue                    # SiteHeader + RouterView + SiteFooter
  router/index.ts            # routes + per-route SEO meta (title/description via afterEach)
  styles/theme.scss          # ALL design tokens + @font-face + global utility classes
  assets/fonts/              # self-hosted woff2: Cabinet Grotesk 800, Satoshi 400/500/700
  components/
    SiteHeader.vue           # sticky header, nav links to the SEO pages
    SiteFooter.vue           # footer links + store links + copyright
    DownloadButtons.vue      # platform auto-detect (iOS → App Store, else Google Play)
    FeatureCard.vue          # reusable card (chip + title + description)
  pages/
    HomePage.vue             # / — hero + MOST IMPORTANT features + history strip + CTA
    TasksPage.vue            # /tasks/ — recurrence (intervals, seasonal, real-world) + example plan
    HistoryPage.vue          # /history/ — service history, photos, PDF report, vendors
    PacksPage.vue            # /packs/ — the 5 real starter packs from the app
    DownloadPage.vue         # /download/ — both store links
  __tests__/                 # vitest specs (config, App shell, pages, SEO meta)
public/
  robots.txt, sitemap.xml, manifest.webmanifest, favicon.ico
.github/workflows/deploy.yml # CI/CD: quality gates → build → GitHub Pages
```

## Pages & SEO

Header links point to real routes (SEO over a one-pager):

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | HomePage | Hero + the 4 core features (due-tasks view, instant logging, flexible recurrence, editable packs) |
| `/tasks/` | TasksPage | Recurrence model details + example task table |
| `/history/` | HistoryPage | Durable service history + PDF report |
| `/packs/` | PacksPage | The 5 starter packs with real task examples |
| `/download/` | DownloadPage | Store links |

Each route sets `document.title` + meta description in `router/index.ts` `afterEach`.
`dist/` gets a real `index.html` per route + `404.html` in CI (SPA fallback trick), so every
URL is directly crawlable and linkable. `public/sitemap.xml` lists all 5 URLs.

## Design system (theme.scss)

**All styles must consume `var(--...)` from `src/styles/theme.scss`.** No raw values in
component `<style>` blocks. If a value is missing, add it as a token to theme.scss.

- Colors: bgTop `#F5F5F5`, bgBottom `#FAF7F4`, surface `#FFFFFF`, primary `#7CB342`,
  primaryLight `#8BC34A`, secondary `#A8D8EA`, tertiary `#D4A574`, ink `#3E2723`,
  inkActive `#5D4037`, muted `#8D6E63`, outline `#E8E4E0`, surfaceTint `#E3F2E9`,
  infoTint `#EAF4FB`, warmTint `#F8EEE7`, danger `#E57373`, selection `rgba(124,179,66,0.2)`
- Radii: card 32px, button 20px, form buttons 18px, inputs/popups 24px, pill 999px
- Shadows: card `0 8px 32px rgba(62,39,35,0.08)`, button `0 8px 24px rgba(124,179,66,0.35)`
- Gradients: primary `135deg primary→primaryLight`, background `180deg bgTop→bgBottom`
- Motion: 150/220/300ms, `cubic-bezier(0.4, 0, 0.2, 1)`
- Type: Cabinet Grotesk 800 for display (negative letter-spacing, −1.6px @ 56px);
  Satoshi 400/500/700 for body (16/15/13px, line-height 1.42/1.35)
- Controls: buttons min-height 52px, input padding 18px 20px

Fonts are self-hosted woff2 files (downloaded from Fontshare — they are not on npm/fontsource)
in `src/assets/fonts/`. If you need a new weight: fetch
`https://api.fontshare.com/v2/css?f[]=satoshi@600&display=swap`, download the woff2, add a
`@font-face` in theme.scss.

## Commands

```sh
npm run dev          # local dev server
npm run format       # prettier write
npm run format:check # prettier check (CI)
npm run lint         # oxlint + eslint with --fix
npm run lint:check   # oxlint + eslint without fix (CI)
npm run type-check   # vue-tsc
npm test             # vitest run (CI)
npm run test:unit    # vitest watch
npm run build        # type-check + vite build
```

## CI/CD (deploy.yml)

Trigger: push to `main`/`master` + manual dispatch.
Quality gates in order: `npm ci` → `format:check` (prettier) → `lint:check` (oxlint + eslint) →
`type-check` → `test` (vitest). Only then `vite build` and deploy. Nothing deploys if any gate fails.

Deploy: build → stage route HTML files + `404.html` + `.nojekyll` → validate →
`configure-pages` → tar → upload `github-pages` artifact → `deploy-pages@v5` (3 attempts) →
curl smoke test on live URLs.

**Hard-won repo settings** (must be true or deploys break):
1. Settings → Pages → Build and deployment → Source = **"GitHub Actions"**
   (NOT "Deploy from a branch", which deploys raw source on failure).
2. Settings → Environments → `github-pages` → branch policy = `main`.
3. Workflow cancels competing `pages-build-deployment` runs as a safety net.

## Gotchas

- The canonical site is https://homehandy.store (custom domain, served from root):
  `vite.config.ts` `base` is `'/'`. `src/router/index.ts` still detects the legacy
  `/homehandy-web/` subpath at runtime so the old GitHub Pages URL keeps working.
  If the domain or repo changes, update `src/config.ts` `SITE_URL` +
  `public/sitemap.xml` + `public/robots.txt` + `manifest.webmanifest` `start_url` + CI smoke test.
- Never reference assets with root-absolute URLs (`/assets/...`) in code; rely on Vite base.
- No OG/social image yet — add one to `public/` and reference it from `index.html` og:image.
- The website copy for the packs comes from the app's
  `lib/data/templates/default_template_packs.dart` — keep numbers in sync.

## App context (for writing copy)

HomeHandy = friendly, cheerful, premium home maintenance tracker. Core promises:
know what's due next, log jobs in seconds, recurrence that matches reality (days/months/years
or seasonal windows), editable starter packs, durable service history with photos and PDF
export. Most important features live on the home page; the rest get their own /pages.
