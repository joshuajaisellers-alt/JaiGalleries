# Jai Sellers — Astro + Headless WordPress

This repository contains a production-ready Astro frontend for **jaisellers.com** with a headless WordPress backend at **https://cms.jaisellers.com**.

## Stack
- Astro
- WordPress REST API (`/wp-json/wp/v2`)
- Vercel (static Astro deployment)

## Routes implemented
- `/`
- `/blog`
- `/blog/[slug]`
- `/portfolio`
- `/portfolio/[slug]`
- `/about`
- `/contact`

## CMS endpoints used
- Posts: `https://cms.jaisellers.com/wp-json/wp/v2/posts`
- Portfolio: `https://cms.jaisellers.com/wp-json/wp/v2/portfolio`

## Local setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create env file:
   ```bash
   cp .env.example .env
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```

## Deployment (Vercel)
1. Push this repo to GitHub.
2. Import into Vercel as an Astro project (build command: `astro build`, output directory: `dist`).
3. Set environment variables:
   - `PUBLIC_SITE_URL=https://jaisellers.com`
   - `PUBLIC_WP_API_BASE=https://cms.jaisellers.com/wp-json/wp/v2`
4. Deploy.

## Notes
- The site renders WordPress HTML via `set:html` for post/case study content.
- Portfolio custom fields are shown when available via `acf` or `meta`.
