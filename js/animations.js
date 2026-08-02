/**
 * Vishvas Jewellers – Animations JavaScript
 * Scroll reveal, counters, parallax, typing, testimonials slider
 */

(function () {
  'use strict';

  /* ---------- Intersection Observer – Scroll Reveal ---------- */
  const revealElements = document.querySelectorAll('.reveal');
  const timelineItems = document.querySelectorAll('.timeline__item');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('timeline__item--visible');
          }, index * 150);
          timelineObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  timelineItems.forEach((item) => timelineObserver.observe(item));

  /* ---------- Counter Animation ---------- */
  const counters = document.querySelectorAll('[data-counter]');

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = prefix + current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  /* ---------- Parallax Effect ---------- */
  const parallaxLayers = document.querySelectorAll('.parallax-layer');

  function handleParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scrollY = window.scrollY;
    parallaxLayers.forEach((layer) => {
      const speed = parseFloat(layer.getAttribute('data-speed')) || 0.3;
      const offset = scrollY * speed;
      layer.style.transform = 'translateY(' + offset + 'px)';
    });
  }

  if (parallaxLayers.length) {
    window.addEventListener('scroll', handleParallax, { passive: true });
  }

  /* ---------- Typing Effect ---------- */
  const typingEl = document.getElementById('typingText');

  if (typingEl) {
    const phrases = ['Timeless Elegance', 'Pure Craftsmanship', 'Certified Brilliance'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const current = phrases[phraseIndex];
      let display = '';

      if (isDeleting) {
        display = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        display = current.substring(0, charIndex + 1);
        charIndex++;
      }

      typingEl.textContent = display;
      typingEl.classList.add('typing-cursor');

      let delay = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === current.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 500;
      }

      setTimeout(typeLoop, delay);
    }

    setTimeout(typeLoop, 1000);
  }

  /* ---------- Testimonials Slider ---------- */
  const track = document.getElementById('testimonialsTrack');
  const dots = document.querySelectorAll('.testimonials-dot');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    if (!track) return;
    const total = track.children.length;
    currentSlide = ((index % total) + total) % total;
    track.style.transform = 'translateX(-' + currentSlide * 100 + '%';

    dots.forEach((dot, i) => {
      dot.classList.toggle('testimonials-dot--active', i === currentSlide);
      dot.setAttribute('aria-selected', String(i === currentSlide));
    });
  }

  function startAutoSlide() {
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 6000);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetAutoSlide();
    });
  });

  if (track && track.children.length > 1) {
    startAutoSlide();
  }

})();
