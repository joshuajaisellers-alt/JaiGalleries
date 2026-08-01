const WP_API_BASE =
  import.meta.env.PUBLIC_WP_API_BASE ||
  "https://cms.jaisellers.com/wp-json/wp/v2";

export type WPItem = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  content?: { rendered: string };
  acf?: Record<string, unknown>;
  meta?: Record<string, unknown>;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
    }>;
  };
};

async function wpFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${WP_API_BASE}${path}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `WordPress API error: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

export const getPosts = (limit = 10) =>
  wpFetch<WPItem[]>(`/posts?per_page=${limit}&_embed`);

export const getPostBySlug = async (slug: string) => {
  const items = await wpFetch<WPItem[]>(`/posts?slug=${slug}&_embed`);
  return items[0] || null;
};

export const getPortfolio = (limit = 12) =>
  wpFetch<WPItem[]>(`/portfolio?per_page=${limit}&_embed`);

export const getPortfolioBySlug = async (slug: string) => {
  const items = await wpFetch<WPItem[]>(`/portfolio?slug=${slug}&_embed`);
  return items[0] || null;
};

export const getPostsSafe = (limit = 10) => wpSafe(() => getPosts(limit), [] as WPItem[]);

export const getPortfolioSafe = (limit = 12) =>
  wpSafe(() => getPortfolio(limit), [] as WPItem[]);

export const getPostBySlugSafe = (slug: string) =>
  wpSafe(() => getPostBySlug(slug), null as WPItem | null);

export const getPortfolioBySlugSafe = (slug: string) =>
  wpSafe(() => getPortfolioBySlug(slug), null as WPItem | null);

export const formatDate = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const featuredImage = (item: WPItem) =>
  item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
