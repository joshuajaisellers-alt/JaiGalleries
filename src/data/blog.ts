export type BlogPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  coverAlt?: string;
  photos: BlogPhoto[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "field-notes-on-presence",
    title: "Field Notes on Presence",
    date: "2026-05-31",
    excerpt:
      "A short editorial note on creating intentional image sets with mood, location, and story in mind.",
    coverImage: "photos/blog/field-notes-cover.svg",
    coverAlt: "Abstract cream and charcoal editorial placeholder artwork.",
    photos: [
      {
        src: "photos/blog/field-notes-cover.svg",
        alt: "Abstract editorial placeholder for a future photo set.",
        caption: "Replace this placeholder with a real image in public/photos/blog.",
      },
    ],
    content: [
      "Use this post as a template for a new photo journal entry. Duplicate the object in src/data/blog.ts, change the slug, title, date, excerpt, and content, then add image filenames to the photos array.",
      "Drop the actual image files into public/photos/blog. If an image is named portrait-session-01.jpg, use photos/blog/portrait-session-01.jpg as the src value.",
    ],
  },
  {
    slug: "quiet-rooms-and-natural-light",
    title: "Quiet Rooms and Natural Light",
    date: "2026-05-20",
    excerpt:
      "A sample post showing how a simple local photo entry can support multiple images and captions.",
    coverImage: "photos/blog/quiet-rooms-cover.svg",
    coverAlt: "Minimal line-art placeholder for a quiet interior photo set.",
    photos: [
      {
        src: "photos/blog/quiet-rooms-cover.svg",
        alt: "Minimal placeholder for a quiet interior photo set.",
        caption: "A cover image can also appear in the gallery.",
      },
    ],
    content: [
      "Blog content lives directly in a local TypeScript data file, which keeps updates simple and reviewable.",
      "For each new post, add as many photos as you need in the photos array. Captions are optional, but helpful for accessibility and editorial context.",
    ],
  },
];

export const getBlogPosts = (limit?: number) => {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return typeof limit === "number" ? posts.slice(0, limit) : posts;
};

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug) || null;

export const formatDate = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
