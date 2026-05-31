export type PortfolioItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  coverAlt?: string;
  content: string[];
  details?: Record<string, string>;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "editorial-gallery-system",
    title: "Editorial Gallery System",
    date: "2026-05-31",
    excerpt:
      "A lightweight gallery publishing structure for image-led stories and client-facing collections.",
    coverImage: "photos/portfolio/editorial-gallery-system.svg",
    coverAlt: "Abstract portfolio placeholder artwork.",
    content: [
      "This local portfolio entry demonstrates how case studies can live without a CMS while the site remains easy to maintain.",
      "Update src/data/portfolio.ts to add or revise portfolio items. Images can be stored in public/photos/portfolio and referenced by relative path.",
    ],
    details: {
      Type: "Static Astro content",
      Location: "jaisellers.com/galleries",
    },
  },
];

export const getPortfolioItems = (limit?: number) => {
  const items = [...portfolioItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return typeof limit === "number" ? items.slice(0, limit) : items;
};

export const getPortfolioItemBySlug = (slug: string) =>
  portfolioItems.find((item) => item.slug === slug) || null;
