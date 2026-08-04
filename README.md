# VishvasJewellers

Premium jewellery website — HTML, CSS, Tailwind Play CDN, vanilla JS. No npm, no build. Works on GitHub Pages.

**Tagline:** Where Tradition Meets Timeless Elegance

---

## Quick start

Open `index.html` in a browser, or serve locally:

```bash
python -m http.server 8080
```

GitHub Pages: publish from `/` on `main`.

---

## How to update images

Drop files into the folders below using the **exact names**. No HTML changes needed.

Formats: `.png`, `.jpg`, `.jpeg`, or `.webp`  
Missing file → placeholder stays.

| What | Put file here |
|------|----------------|
| Hero | `assets/hero/hero.png` |
| Shop / about | `assets/about/shop.png` |
| Collection cover | `assets/collections/{name}.png` |
| Product | `assets/products/{name}-1.png` |
| Gallery | `assets/gallery/gallery-1.png` … `gallery-9.png` |
| Logo / favicon | `assets/svg/logo.svg`, `favicon.svg` |

### Collection covers

| Name | File |
|------|------|
| Gold Rings | `assets/collections/gold-rings.png` |
| Necklaces | `assets/collections/necklaces.png` |
| Bracelets | `assets/collections/bracelets.png` |
| Earrings | `assets/collections/earrings.png` |
| Diamond | `assets/collections/diamond.png` |
| Bridal | `assets/collections/bridal.png` |
| Men's | `assets/collections/mens.png` |
| Custom | `assets/collections/custom.png` |

### Products

Name = collection + number:

`assets/products/necklaces-1.png`  
`assets/products/gold-rings-1.png`  
`assets/products/bracelets-1.png`  
`assets/products/bridal-1.png`  
`assets/products/earrings-1.png`  
`assets/products/mens-1.png`

More items: `necklaces-2.png`, etc. Also add a row in `js/content.js` → `PRODUCTS`.

### Gallery

`gallery-1.png` … in `assets/gallery/`

### Tips

- Overwrite the same filename to replace an image
- Prefer JPG/WebP for large photos
- Sizes: hero ~1200×1500 · cards ~800×800 · gallery ~1200px wide

### Add / remove a collection

Edit `COLLECTIONS` in `js/content.js`, then add or remove `assets/collections/{slug}.png`.

---

## Project structure

```
├── index.html
├── css/          style, responsive, animations
├── js/
│   ├── content.js    ← collections & products list
│   ├── images.js     ← loads images by filename
│   ├── main.js
│   ├── animations.js
│   └── gallery.js
└── assets/
    ├── hero/
    ├── about/
    ├── collections/
    ├── products/
    ├── gallery/
    └── svg/
```

---

## Features

- Mobile-first layout, sticky nav, mobile menu
- Collections & products from JS + auto images
- Gallery filters + lightbox
- FAQ, contact, newsletter
- SEO meta, Open Graph, JSON-LD
- Tailwind Play CDN (utilities; preflight off)

---

## Colours

| Name | Hex |
|------|-----|
| Gold | `#D4AF37` |
| Dark gold | `#B8891D` |
| Black | `#111111` |
| Ivory | `#F8F5F0` |

Edit variables in `css/style.css` → `:root`.

---

## Other edits

| Change | File |
|--------|------|
| Contact, address, phone | `index.html` |
| Collections / products text | `js/content.js` |
| Colours | `css/style.css` |

---

## Browsers

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

## License

© 2026 Vishvas Jewellers. All rights reserved.
