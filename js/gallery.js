/**
 * Vishvas Jewellers – Gallery JavaScript
 * Filtering, lightbox, lazy-ready structure
 */

(function () {
  'use strict';

  const filters = document.querySelectorAll('.gallery-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxContent = document.getElementById('lightboxContent');

  /* ---------- Gallery Filtering ---------- */
  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      const category = filter.getAttribute('data-filter');

      filters.forEach((f) => f.classList.remove('gallery-filter--active'));
      filter.classList.add('gallery-filter--active');
      filter.setAttribute('aria-selected', 'true');
      filters.forEach((f) => {
        if (f !== filter) f.setAttribute('aria-selected', 'false');
      });

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');
        const match = category === 'all' || itemCategory === category;

        if (match) {
          item.classList.remove('gallery-item--hidden');
          requestAnimationFrame(() => {
            item.classList.add('gallery-item--visible');
          });
        } else {
          item.classList.remove('gallery-item--visible');
          setTimeout(() => {
            item.classList.add('gallery-item--hidden');
          }, 300);
        }
      });
    });
  });

  /* ---------- Initial Gallery Visibility ---------- */
  const galleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('gallery-item--visible');
          galleryObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  galleryItems.forEach((item) => galleryObserver.observe(item));

  /* ---------- Lightbox ---------- */
  function openLightbox(title) {
    if (!lightbox || !lightboxContent) return;

    lightboxContent.innerHTML =
      '<div class="lightbox__placeholder placeholder placeholder--dark">' +
      '<svg class="placeholder__icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">' +
      '<path d="M24 8L28 18H38L30 24L33 34L24 28L15 34L18 24L10 18H20L24 8Z" fill="rgba(212,175,55,0.3)"/>' +
      '</svg>' +
      '<span class="placeholder__label">' + (title || 'Jewellery Image') + '</span>' +
      '<span class="placeholder__dim">Replace with jewellery image</span>' +
      '</div>';

    lightbox.classList.add('lightbox--open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('lightbox--open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-title') || 'Gallery Image';
      openLightbox(title);
    });

    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const title = item.getAttribute('data-title') || 'Gallery Image';
        openLightbox(title);
      }
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('lightbox--open')) {
      closeLightbox();
    }
  });

  /* ---------- Lazy-Ready Structure ---------- */
  document.querySelectorAll('[data-lazy]').forEach((el) => {
    const src = el.getAttribute('data-lazy');
    if (!src) return;

    const lazyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (el.tagName === 'IMG') {
              el.src = src;
              el.removeAttribute('data-lazy');
            }
            lazyObserver.unobserve(el);
          }
        });
      },
      { rootMargin: '200px' }
    );

    lazyObserver.observe(el);
  });
})();
