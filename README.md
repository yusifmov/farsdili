# FARS DİLİ DƏRSLƏRİ — farsdili.az

Fars dilini Azərbaycan dilində sıfırdan öyrədən sayt: əlifba, qrammatika, danışıq dili və oxu mətnləri. Sayt köhnə WordPress versiyasından [Docusaurus](https://docusaurus.io/) platformasına köçürülüb.

The Persian-language learning site **farsdili.az**, migrated from WordPress to Docusaurus. Content is in Azerbaijani.

## Struktur / Structure

- `docs/` — dərslər (lessons), curriculum order via `sidebar_position`. Served under `/dersler`.
- `blog/` — məqalələr (articles). Served under `/meqaleler`.
- `src/pages/` — the homepage.
- `static/` — statik fayllar (`CNAME` for the custom domain, images).

Alfabet və qrammatika cədvəlləri orijinal HTML formatında saxlanılıb (colspan/rowspan və fars əlifbası üçün). Bunun işləməsi üçün `docusaurus.config.js` faylında `markdown.format: 'detect'` təyin edilib — `.md` faylları CommonMark kimi emal olunur.

## Local development

```bash
npm install
npm run start      # dev server at http://localhost:3000
npm run build      # production build into ./build
npm run serve      # preview the production build
```

## Deployment

Push to `main` triggers the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes it to GitHub Pages. The custom domain `farsdili.az` is set via
`static/CNAME`.

To enable it once: on GitHub go to **Settings → Pages → Build and deployment →
Source → GitHub Actions**.

## Kitablar və cavablar / Books and answers

- `src/pages/kitablar.js` — the two Persian textbooks' promo page (`/kitablar`), early sign-up via WhatsApp.
- `src/pages/cavablar/index.mdx` — indexed list of all answer pages (`/cavablar`).
- `src/pages/cavablar/kitab-2/bolme-N.mdx`, `kitab-1/metn-N.mdx` — answers of each book unit, reached by the QR code
  printed in the book; `noindex` and excluded from the sitemap (`ignorePatterns` in `docusaurus.config.js`).
The books themselves are written in a separate repo (`fars-dili-kitabi`).
