# Vishvas Jewellers – Premium Luxury Static Website

A production-ready, premium luxury jewellery website built with pure HTML5, CSS3, and vanilla JavaScript.

**Tagline:** Where Tradition Meets Timeless Elegance

---

## Quick Start

1. Open the project folder
2. Launch `index.html` in your browser
3. No build step, no dependencies, no server required

```bash
# Optional: serve locally
npx serve .
# or
python -m http.server 8080
```

Then visit `http://localhost:8080`

---

## Project Structure

```
vishvas-jewellers/
├── index.html              # Main page (all sections)
├── css/
│   ├── style.css           # Core styles & components
│   ├── responsive.css      # Breakpoint-specific styles
│   └── animations.css      # Keyframes & animation utilities
├── js/
│   ├── main.js             # Navigation, scroll, FAQ, forms
│   ├── animations.js       # Reveal, counters, slider, parallax
│   └── gallery.js          # Gallery filter & lightbox
├── assets/
│   ├── icons/              # Icon assets
│   ├── svg/                # Logo & favicon SVGs
│   └── placeholders/       # Placeholder assets
└── README.md
```

---

## Features

### Design
- Luxury minimal aesthetic with gold accent palette
- Glassmorphism navigation
- Elegant SVG/CSS placeholders (no external images)
- Playfair Display + Poppins typography
- Full responsive layout (320px – 1440px+)

### Sections
1. Sticky transparent/solid navigation
2. Full-viewport hero with stats & glass card
3. Featured collections (8 categories)
4. About with mission, vision, craftsmanship
5. Why Choose Us (8 icon cards)
6. Featured products grid
7. Craftsmanship timeline
8. Testimonials slider
9. Filterable masonry gallery with lightbox
10. FAQ accordion
11. Newsletter subscription
12. Contact form with store details
13. Footer with quick links

### JavaScript
- Sticky navbar with scroll state
- Mobile menu with animations
- Scroll spy for active nav links
- Smooth scrolling
- Intersection Observer scroll reveal
- Animated counters
- FAQ accordion
- Testimonials auto-slider
- Gallery category filtering
- Lightbox modal
- Back to top button
- Scroll progress indicator
- Parallax background layers
- Typing text effect
- Debounced resize handler
- Lazy-ready image structure

### SEO & Accessibility
- Semantic HTML5
- Meta description, keywords, Open Graph, Twitter cards
- JSON-LD structured data (JewelryStore)
- ARIA labels and keyboard navigation
- Focus-visible states
- Reduced motion support

---

## Color Palette

| Name         | Hex       |
|--------------|-----------|
| Primary Gold | `#D4AF37` |
| Dark Gold    | `#B8891D` |
| Luxury Black | `#111111` |
| Charcoal     | `#1C1C1C` |
| White        | `#FFFFFF` |
| Ivory        | `#F8F5F0` |
| Light Grey   | `#EDEDED` |

---

## Replacing Placeholders

All images use CSS/SVG placeholders. To add real images:

1. Place images in `assets/placeholders/` or a new `assets/images/` folder
2. Replace `.placeholder` divs with `<img>` tags:

```html
<img src="assets/images/hero.jpg" alt="Vishvas Jewellers showcase" loading="lazy">
```

3. For gallery lightbox, update `gallery.js` to use the image `src` instead of the placeholder HTML

---

## Customisation

### Brand Details
Update contact info, address, and phone numbers in:
- `index.html` (contact section, footer, structured data)
- Floating WhatsApp/call button links

### Colors
All colors are defined as CSS variables in `css/style.css` under `:root`

### Content
Each section uses realistic luxury content — edit text directly in `index.html`

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Future Integration

This static site is structured for easy conversion to:
- **Shopify** – replace product cards with Liquid snippets
- **WordPress** – convert sections to page templates
- **Backend API** – connect forms to a server endpoint

---

## License

© 2026 Vishvas Jewellers. All rights reserved.
