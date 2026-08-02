/**
 * Vishvas Jewellers – Dynamic image loader
 *
 * data-image = path without extension, e.g. assets/collections/gold-rings
 * Tried in order: .png .jpg .jpeg .webp
 *
 * Naming:
 *   assets/hero/hero
 *   assets/about/shop
 *   assets/collections/{slug}
 *   assets/products/{collection}-{n}   e.g. necklaces-1, gold-rings-1
 *   assets/gallery/gallery-{n}
 */

(function () {
  'use strict';

  var EXTS = ['.png', '.jpg', '.jpeg', '.webp'];

  /* Short aliases still used in static HTML (hero, about, gallery) */
  var ALIASES = {
    hero: 'assets/hero/hero',
    shop: 'assets/about/shop',
    'gallery-1': 'assets/gallery/gallery-1',
    'gallery-2': 'assets/gallery/gallery-2',
    'gallery-3': 'assets/gallery/gallery-3',
    'gallery-4': 'assets/gallery/gallery-4',
    'gallery-5': 'assets/gallery/gallery-5',
    'gallery-6': 'assets/gallery/gallery-6',
    'gallery-7': 'assets/gallery/gallery-7',
    'gallery-8': 'assets/gallery/gallery-8',
    'gallery-9': 'assets/gallery/gallery-9'
  };

  function resolvePath(key) {
    if (!key) return null;
    if (ALIASES[key]) return ALIASES[key];
    if (key.indexOf('assets/') === 0) return key;
    return null;
  }

  function probe(basePath) {
    return new Promise(function (resolve) {
      var i = 0;

      function tryNext() {
        if (i >= EXTS.length) {
          resolve(null);
          return;
        }

        var src = basePath + EXTS[i++];
        var img = new Image();

        img.onload = function () {
          resolve(src);
        };

        img.onerror = function () {
          tryNext();
        };

        img.src = src;
      }

      tryNext();
    });
  }

  function applyImage(el, src, alt) {
    if (el.classList.contains('has-image')) return;

    var img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.className = 'section-img';
    img.loading = 'lazy';
    img.decoding = 'async';

    el.classList.add('has-image');
    el.setAttribute('data-src', src);

    var kids = el.querySelectorAll(
      '.placeholder__icon, .placeholder__label, .placeholder__dim, .hero__placeholder-icon, .hero__placeholder-text, .hero__placeholder-dim'
    );
    kids.forEach(function (node) {
      node.style.display = 'none';
    });

    el.insertBefore(img, el.firstChild);
  }

  function loadSlot(el) {
    var key = el.getAttribute('data-image');
    var base = resolvePath(key);
    if (!base) return Promise.resolve();

    var alt =
      el.getAttribute('aria-label') ||
      el.getAttribute('data-title') ||
      key.replace(/[-_/]/g, ' ');

    return probe(base).then(function (src) {
      if (src) applyImage(el, src, alt);
    });
  }

  function initImages(root) {
    var scope = root || document;
    var targets = scope.querySelectorAll('[data-image]:not(.has-image)');
    var jobs = [];

    targets.forEach(function (el) {
      jobs.push(loadSlot(el));
    });

    return Promise.all(jobs);
  }

  window.VishvasImages = {
    probe: probe,
    init: initImages,
    getSrc: function (key) {
      var el = document.querySelector('[data-image="' + key + '"]');
      return el ? el.getAttribute('data-src') : null;
    }
  };

  function boot() {
    if (window.VishvasContent && typeof window.VishvasContent.init === 'function') {
      /* content may already have run; ensure grids exist then load images */
    }
    initImages();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
