document.addEventListener('alpine:init', () => {
  Alpine.data('mobileNav', () => ({
    open: false,
    toggle() { this.open = !this.open; }
  }));

  Alpine.data('faqAccordion', () => ({
    open: false,
    toggle() { this.open = !this.open; }
  }));
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
});

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav-close');

if (mobileMenuToggle && mobileNav) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileNav.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
}

if (mobileNavClose && mobileNav) {
  mobileNavClose.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    document.body.style.overflow = '';
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileNav) {
    mobileNav.classList.add('hidden');
    document.body.style.overflow = '';
  }
});