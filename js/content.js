/**
 * Vishvas Jewellers – Collections & products data
 * Add / update / remove items here. Images follow slug names automatically.
 *
 * Collection cover:  assets/collections/{slug}.png
 * Product image:     assets/products/{collection}-{n}.png
 *   e.g. necklaces-1.png, gold-rings-1.png, bridal-1.png
 */

(function () {
  'use strict';

  var COLLECTIONS = [
    {
      slug: 'gold-rings',
      title: 'Gold Rings',
      desc: 'Classic bands and statement rings crafted in 22K hallmarked gold for engagements, weddings, and everyday grace.'
    },
    {
      slug: 'necklaces',
      title: 'Necklaces',
      desc: 'From delicate chains to grand haars, each necklace is designed to frame your elegance with refined artistry.'
    },
    {
      slug: 'bracelets',
      title: 'Bracelets',
      desc: 'Kadas, bangles, and cuff bracelets that blend traditional motifs with contemporary silhouettes.'
    },
    {
      slug: 'earrings',
      title: 'Earrings',
      desc: 'Studs, jhumkas, and chandelier earrings that capture light and attention with every graceful movement.'
    },
    {
      slug: 'diamond',
      title: 'Diamond Jewellery',
      desc: 'IGI-certified diamonds set in exquisite designs that celebrate brilliance, clarity, and lasting value.'
    },
    {
      slug: 'bridal',
      title: 'Bridal Collection',
      desc: 'Complete bridal sets with mangalsutras, chokers, and heritage pieces for your most cherished day.'
    },
    {
      slug: 'mens',
      title: "Men's Jewellery",
      desc: 'Bold chains, kada bracelets, and rings designed for the modern gentleman who values understated luxury.'
    },
    {
      slug: 'custom',
      title: 'Custom Designs',
      desc: 'Bring your vision to life with our bespoke design service, from initial sketch to finished masterpiece.'
    }
  ];

  /* Featured product placeholders — image file = {collection}-{n} */
  var PRODUCTS = [
    {
      collection: 'necklaces',
      n: 1,
      name: 'Heritage Necklace',
      price: '₹2,45,000',
      badge: 'Bestseller'
    },
    {
      collection: 'gold-rings',
      n: 1,
      name: 'Classic Gold Ring',
      price: '₹1,85,000',
      badge: 'New'
    },
    {
      collection: 'bracelets',
      n: 1,
      name: 'Traditional Kada',
      price: '₹98,500',
      badge: ''
    },
    {
      collection: 'bridal',
      n: 1,
      name: 'Bridal Set',
      price: '₹8,75,000',
      badge: 'Bridal'
    },
    {
      collection: 'earrings',
      n: 1,
      name: 'Jhumka Earrings',
      price: '₹72,000',
      badge: ''
    },
    {
      collection: 'mens',
      n: 1,
      name: "Men's Chain",
      price: '₹1,20,000',
      badge: ''
    }
  ];

  function collectionBySlug(slug) {
    for (var i = 0; i < COLLECTIONS.length; i++) {
      if (COLLECTIONS[i].slug === slug) return COLLECTIONS[i];
    }
    return null;
  }

  function productImageKey(product) {
    return product.collection + '-' + product.n;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderCollections() {
    var grid = document.getElementById('collectionsGrid');
    if (!grid) return;

    var html = '';
    COLLECTIONS.forEach(function (c, i) {
      var delay = 'reveal-delay-' + ((i % 8) + 1);
      html +=
        '<article class="collection-card reveal reveal--up ' + delay + ' hover-lift">' +
        '<div class="collection-card__image">' +
        '<div class="placeholder" data-image="assets/collections/' + escapeHtml(c.slug) + '" role="img" aria-label="' + escapeHtml(c.title) + ' collection">' +
        '<span class="placeholder__label">' + escapeHtml(c.title) + '</span>' +
        '<span class="placeholder__dim">' + escapeHtml(c.slug) + '.png</span>' +
        '</div></div>' +
        '<div class="collection-card__body">' +
        '<h3 class="collection-card__title">' + escapeHtml(c.title) + '</h3>' +
        '<p class="collection-card__desc">' + escapeHtml(c.desc) + '</p>' +
        '<span class="collection-card__link">View Collection →</span>' +
        '</div></article>';
    });

    grid.innerHTML = html;
  }

  function renderProducts() {
    var grid = document.getElementById('productsGrid');
    if (!grid) return;

    var html = '';
    PRODUCTS.forEach(function (p, i) {
      var col = collectionBySlug(p.collection);
      var category = col ? col.title : p.collection;
      var key = productImageKey(p);
      var delay = 'reveal-delay-' + ((i % 8) + 1);
      var badge = p.badge
        ? '<span class="product-card__badge">' + escapeHtml(p.badge) + '</span>'
        : '';

      html +=
        '<article class="product-card reveal reveal--up ' + delay + ' hover-lift">' +
        '<div class="product-card__image">' +
        badge +
        '<div class="placeholder" data-image="assets/products/' + escapeHtml(key) + '" role="img" aria-label="' + escapeHtml(p.name) + '">' +
        '<span class="placeholder__label">' + escapeHtml(p.name) + '</span>' +
        '<span class="placeholder__dim">' + escapeHtml(key) + '.png</span>' +
        '</div></div>' +
        '<div class="product-card__body">' +
        '<span class="product-card__category">' + escapeHtml(category) + '</span>' +
        '<h3 class="product-card__name">' + escapeHtml(p.name) + '</h3>' +
        '<p class="product-card__price">' + escapeHtml(p.price) + ' <span> onwards</span></p>' +
        '<a href="#contact" class="btn btn--dark-outline btn--sm">View Details</a>' +
        '</div></article>';
    });

    grid.innerHTML = html;
  }

  function renderFooterCollections() {
    var nav = document.getElementById('footerCollections');
    if (!nav) return;

    nav.innerHTML = COLLECTIONS.map(function (c) {
      return '<a href="#collections" class="footer__link">' + escapeHtml(c.title) + '</a>';
    }).join('');
  }

  function initContent() {
    renderCollections();
    renderProducts();
    renderFooterCollections();
    if (window.VishvasImages && typeof window.VishvasImages.init === 'function') {
      window.VishvasImages.init();
    }
  }

  window.VishvasContent = {
    collections: COLLECTIONS,
    products: PRODUCTS,
    init: initContent
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContent);
  } else {
    initContent();
  }
})();
