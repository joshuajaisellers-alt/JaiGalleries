# Jai Sellers — Galleries

This repository contains a static Astro photo/blog site for **jaisellers.com/galleries**. Blog posts and photo sets are edited directly in local files, with no remote CMS required.

## Stack
- Astro
- Local TypeScript content files
- Static photo assets in `public/photos`
- Vercel static deployment

## Routes implemented
- `/galleries`
- `/galleries/blog`
- `/galleries/blog/[slug]`
- `/galleries/portfolio`
- `/galleries/portfolio/[slug]`
- `/galleries/about`
- `/galleries/contact`

## Add a blog post with photos
1. Add images to:
   ```powershell
   public/photos/blog
   ```
2. Open `src/data/blog.ts`.
3. Duplicate an existing post object in the `blogPosts` array.
4. Update the `slug`, `title`, `date`, `excerpt`, `coverImage`, `content`, and `photos` values.
5. Reference images like this:
   ```ts
   photos: [
     {
       src: "photos/blog/my-photo.jpg",
       alt: "Short accessible description of the image.",
       caption: "Optional caption shown below the image.",
     },
   ]
   ```

## Add portfolio work
1. Add images to `public/photos/portfolio`.
2. Update `src/data/portfolio.ts`.

## Local setup
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Start dev server:
   ```powershell
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
2. Import into Vercel as an Astro project.
3. Use build command `astro build` and output directory `dist`.
4. The Astro app is configured with `base: "/galleries"`, so deploy it where `jaisellers.com/galleries` serves this project.
5. Set environment variable:
   - `PUBLIC_SITE_URL=https://jaisellers.com/galleries`

## Notes
- `src/data/blog.ts` is the main place to add blog posts and photo sets.
- `public/photos/README.md` includes the short image-reference format.
- Use descriptive `alt` text for accessibility.
2. Import into Vercel as an Astro project (build command: `astro build`, output directory: `dist`).
3. Set environment variables:
   - `PUBLIC_SITE_URL=https://jaisellers.com`
   - `PUBLIC_WP_API_BASE=https://cms.jaisellers.com/wp-json/wp/v2`
4. Deploy.

## Notes
- The site renders WordPress HTML via `set:html` for post/case study content.
- Portfolio custom fields are shown when available via `acf` or `meta`.
