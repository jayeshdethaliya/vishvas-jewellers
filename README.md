# Vishvas Jewellers – Premium Luxury Static Website

A production-ready, premium luxury jewellery website built with pure HTML5, CSS3, Tailwind Play CDN, and vanilla JavaScript. Hosted on GitHub Pages — no build step, no npm.

**Tagline:** Where Tradition Meets Timeless Elegance

---

## Quick Start

1. Open the project folder
2. Launch `index.html` in your browser
3. No build step, no dependencies, no server required

```bash
# Optional: serve locally (helpful for image loading checks)
python -m http.server 8080
```

Then visit `http://localhost:8080`

### GitHub Pages

Push this repo and enable Pages from the root (`/` / `main`). The site is fully static.

---

## Project Structure

```
vishvas-jewellers/
├── index.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── content.js          # Collections & products data (edit here)
│   ├── images.js           # Auto-loads images by path / name
│   ├── main.js
│   ├── animations.js
│   └── gallery.js
├── assets/
│   ├── hero/               # Hero image
│   ├── about/              # Showroom / shop image
│   ├── collections/        # Collection cover images ({slug}.png)
│   ├── products/           # Product images ({collection}-{n}.png)
│   ├── gallery/            # Gallery lightbox images
│   └── svg/                # Logo & favicon
└── README.md
```

---

## Adding / Updating Images

Images load automatically from fixed paths. Supported formats (checked in order): `.png` → `.jpg` → `.jpeg` → `.webp`

Missing files keep the placeholder.

### Folder & file names

| Section | Folder | Filename | Example |
|---------|--------|----------|---------|
| Hero | `assets/hero/` | `hero` | `assets/hero/hero.png` |
| About / showroom | `assets/about/` | `shop` | `assets/about/shop.png` |
| Collections | `assets/collections/` | `{slug}` | `assets/collections/gold-rings.png` |
| Products | `assets/products/` | `{collection}-{n}` | `assets/products/necklaces-1.png` |
| Gallery | `assets/gallery/` | `gallery-{n}` | `assets/gallery/gallery-1.webp` |

### Collections

Edit the list in `js/content.js` (`COLLECTIONS` array). Add / update / delete items there — cards and footer links update automatically.

Cover image path: `assets/collections/{slug}.png`

| Slug | Cover file |
|------|------------|
| `gold-rings` | `gold-rings.png` |
| `necklaces` | `necklaces.png` |
| `bracelets` | `bracelets.png` |
| `earrings` | `earrings.png` |
| `diamond` | `diamond.png` |
| `bridal` | `bridal.png` |
| `mens` | `mens.png` |
| `custom` | `custom.png` |

### Products

Edit `PRODUCTS` in `js/content.js`. Each product belongs to a collection slug; the image name is always `{collection}-{n}`.

| File | Meaning |
|------|---------|
| `necklaces-1.png` | Necklaces product #1 |
| `gold-rings-1.png` | Gold Rings product #1 |
| `bracelets-1.png` | Bracelets product #1 |
| `bridal-1.png` | Bridal product #1 |
| `earrings-1.png` | Earrings product #1 |
| `mens-1.png` | Men's product #1 |

Add more with the same pattern: `necklaces-2.png`, `bridal-2.png`, etc., and a matching entry in `PRODUCTS`.

### Gallery

| File | Title |
|------|-------|
| `gallery-1` | Bridal Necklace Set |
| `gallery-2` | Heritage Gold Bangle |
| `gallery-3` | Solitaire Ring |
| `gallery-4` | Showroom Interior |
| `gallery-5` | Temple Jewellery Set |
| `gallery-6` | Bridal Choker |
| `gallery-7` | Diamond Earrings |
| `gallery-8` | Craftsmanship Workshop |
| `gallery-9` | Antique Gold Pendant |

### Tips

- Prefer compressed JPG/WebP for large photos
- Suggested sizes: hero ~1200×1500, collections/products ~800×800, gallery ~1200px long edge
- Replace an image by overwriting the same filename
- Logo / favicon: `assets/svg/logo.svg`, `assets/svg/favicon.svg`

---

## Features

- Luxury gold palette with glassmorphism nav
- Tailwind CSS via Play CDN (utilities only; preflight off)
- JS-driven collections & products with dynamic images
- Sticky nav, scroll spy, mobile menu
- Filterable gallery + lightbox
- FAQ accordion, contact & newsletter forms
- SEO meta, Open Graph, JSON-LD

---

## Color Palette

| Name | Hex |
|------|-----|
| Primary Gold | `#D4AF37` |
| Dark Gold | `#B8891D` |
| Luxury Black | `#111111` |
| Ivory | `#F8F5F0` |

---

## Customisation

- Brand / contact: `index.html` (contact, footer, structured data)
- Collections & products: `js/content.js`
- Colors: CSS variables in `css/style.css` under `:root`

---

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

## License

© 2026 Vishvas Jewellers. All rights reserved.
