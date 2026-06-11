// ========== MENU BURGER (Mobile) ==========
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  // Animation des 3 barres
  const spans = burger.querySelectorAll('span');
  spans.forEach(span => span.classList.toggle('active'));
});

// Fermer le menu quand on clique sur un lien
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ========== LIEN ACTIF SELON LA PAGE ==========
const currentPage = window.location.pathname.split('/').pop();
const allLinks = document.querySelectorAll('.nav-links a');

allLinks.forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});


// ========== ANIMATION AU SCROLL ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

// On observe les cartes et sections
const animatedElements = document.querySelectorAll(
  '.card, .presta-card, .galerie-grid img, .section-title'
);

animatedElements.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});


// ========== NAVBAR : OMBRE AU SCROLL ==========
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});