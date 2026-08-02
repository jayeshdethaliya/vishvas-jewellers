/**
 * Vishvas Jewellers – Main JavaScript
 * Navigation, scroll spy, accordion, forms, utilities
 */

(function () {
  'use strict';

  /* ---------- DOM References ---------- */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.navbar__link, .mobile-menu__link');
  const sections = document.querySelectorAll('section[id]');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');
  const faqItems = document.querySelectorAll('.faq-item');
  const contactForm = document.getElementById('contactForm');
  const newsletterForm = document.getElementById('newsletterForm');
  const yearEl = document.getElementById('currentYear');

  /* ---------- Current Year ---------- */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Sticky Navbar ---------- */
  function handleNavbarScroll() {
    if (!navbar) return;
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('navbar--solid', scrolled);
    navbar.classList.toggle('navbar--transparent', !scrolled);
  }

  /* ---------- Scroll Progress ---------- */
  function handleScrollProgress() {
    if (!scrollProgress) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
    scrollProgress.setAttribute('aria-valuenow', Math.round(progress));
  }

  /* ---------- Back to Top ---------- */
  function handleBackToTop() {
    if (!backToTop) return;
    const visible = window.scrollY > 500;
    backToTop.classList.toggle('back-to-top--visible', visible);
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Mobile Menu ---------- */
  function toggleMobileMenu(forceClose) {
    if (!navToggle || !mobileMenu) return;
    const isOpen = forceClose === true ? false : !mobileMenu.classList.contains('mobile-menu--open');

    mobileMenu.classList.toggle('mobile-menu--open', isOpen);
    navToggle.classList.toggle('navbar__toggle--open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => toggleMobileMenu());
  }

  mobileMenu?.querySelectorAll('.mobile-menu__link').forEach((link) => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  /* ---------- Smooth Scrolling ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top, behavior: 'smooth' });
      toggleMobileMenu(true);
    });
  });

  /* ---------- Scroll Spy ---------- */
  function handleScrollSpy() {
    const scrollPos = window.scrollY + (navbar ? navbar.offsetHeight + 20 : 100);

    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('navbar__link--active', 'mobile-menu__link--active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('navbar__link--active', 'mobile-menu__link--active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /* ---------- FAQ Accordion ---------- */
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq-item--open');

      faqItems.forEach((other) => {
        other.classList.remove('faq-item--open');
        other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('faq-item--open');
        question.setAttribute('aria-expanded', 'true');
      }
    });

    question.setAttribute('aria-expanded', 'false');
  });

  /* ---------- Contact Form ---------- */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent ✓';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  /* ---------- Newsletter Form ---------- */
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = newsletterForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed ✓';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        newsletterForm.reset();
      }, 3000);
    });
  }

  /* ---------- Debounced Resize ---------- */
  let resizeTimer;
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 992) {
        toggleMobileMenu(true);
      }
    }, 250);
  }

  /* ---------- Combined Scroll Handler ---------- */
  function onScroll() {
    handleNavbarScroll();
    handleScrollProgress();
    handleBackToTop();
    handleScrollSpy();
  }

  /* ---------- Init ---------- */
  function init() {
    handleNavbarScroll();
    handleScrollProgress();
    handleBackToTop();
    handleScrollSpy();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggleMobileMenu(true);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
