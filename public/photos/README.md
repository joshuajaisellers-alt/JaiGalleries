# Photo uploads

Add blog images to `public/photos/blog/` and reference them from `src/data/blog.ts` like this:

```ts
photos: [
  {
    src: "photos/blog/my-photo.jpg",
    alt: "Describe the photo for accessibility.",
    caption: "Optional caption shown under the image.",
  },
]
```

Add portfolio images to `public/photos/portfolio/` and reference them from `src/data/portfolio.ts`.
