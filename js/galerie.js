// ========== FILTRES GALERIE ==========
const filtresBtns = document.querySelectorAll('.filtre-btn');
const galerieItems = document.querySelectorAll('.galerie-item');

filtresBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filtresBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    galerieItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ========== LIGHTBOX ==========
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentIndex = 0;
let visibleItems = [];

galerieItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    visibleItems = [...galerieItems].filter(i => i.style.display !== 'none');
    currentIndex = visibleItems.indexOf(item);
    openLightbox(visibleItems[currentIndex]);
  });
});

function openLightbox(item) {
  const img = item.querySelector('img');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);

lightboxPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
  openLightbox(visibleItems[currentIndex]);
});

lightboxNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % visibleItems.length;
  openLightbox(visibleItems[currentIndex]);
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxPrev.click();
  if (e.key === 'ArrowRight') lightboxNext.click();
});