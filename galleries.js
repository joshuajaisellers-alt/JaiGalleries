/* galleries.js — Client gallery data
 *
 * To add a new client gallery:
 * 1. Duplicate one of the objects below and update all fields.
 * 2. Set a unique `code` (e.g. "JAI-2026-JONES").
 * 3. Add image URLs to the `images` array.
 * 4. Optionally provide a `downloadUrl` pointing to a zip file.
 * 5. Set `expiresAt` to the date you want the gallery to stop being accessible.
 *    Use "YYYY-MM-DD" format, or null for no expiry.
 */

const GALLERIES = [
  {
    code: "JAI-2024-SMITH",
    clientName: "Sarah & Tom Smith",
    eventTitle: "Wedding — October 2024",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
      "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=1200&q=80",
      "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80"
    ],
    downloadUrl: null,
    expiresAt: "2026-12-31"
  },
  {
    code: "JAI-2025-DEMO",
    clientName: "Demo Client",
    eventTitle: "Portrait Session — 2025",
    coverImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80",
      "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=1200&q=80",
      "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=1200&q=80",
      "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?w=1200&q=80"
    ],
    downloadUrl: null,
    expiresAt: null
  }
];
