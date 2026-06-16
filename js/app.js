// ─── SVG Icons ──────────────────────────────────
const icons = {
  cosmetics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v4H9z"/><path d="M12 7v14"/><path d="M8 21h8"/><path d="M6 3h12"/></svg>',
  fashion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2l-4 6h4v14h12V8h4l-4-6h-4l-2 3-2-3H6z"/></svg>',
  rabbits: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 16h-2v-2h2v2z"/><path d="M13 12c0-3 2-6 2-6s2 3 2 6a2 2 0 11-4 0z"/><path d="M9 12c0-3 2-6 2-6s2 3 2 6a2 2 0 11-4 0z"/><circle cx="12" cy="14" r="4"/></svg>',
  homecare: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  all: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
  creditCard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>',
  package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
};

// ─── Category Colors ───────────────────────────
const categoryColors = {
  cosmetics: '#C21858',
  fashion: '#F9A825',
  rabbits: '#2E7D32',
  homecare: '#00838F',
};

// ─── Global State ──────────────────────────────
let products = [];
let categories = [];
let siteConfig = {};

// ─── Load Data from JSON Files ─────────────────
async function loadData() {
  try {
    const [productsRes, configRes] = await Promise.all([
      fetch('data/products.json'),
      fetch('data/config.json')
    ]);
    
    products = await productsRes.json();
    siteConfig = await configRes.json();
    categories = siteConfig.categories || [];
    
    return { products, categories, siteConfig };
  } catch (err) {
    console.error('Error loading data:', err);
    products = [];
    categories = [];
    siteConfig = {};
    return { products, categories, siteConfig };
  }
}

// ─── Save Data to JSON Files ───────────────────
// Note: These work in admin page context with file system access
// For static hosting, user downloads the updated JSON file

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function saveProducts() {
  downloadJSON(products, 'products.json');
}

function saveConfig() {
  downloadJSON(siteConfig, 'config.json');
}

// ─── Helpers ─────────────────────────────────────
function waLink(msg) {
  const number = siteConfig.whatsapp ? siteConfig.whatsapp.number : '233207777324';
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

function getCategoryIcon(category) {
  return icons[category] || icons.all;
}

// ─── Render Product Card ─────────────────────────
function renderProductCard(p) {
  const outOfStock = p.inStock === false;
  return `
    <div class="product-card" data-category="${p.category}" ${outOfStock ? 'style="opacity:0.6;"' : ''}>
      <div class="img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="no-image" style="display:none;">
          ${getCategoryIcon(p.category)}
          <span>${p.name}</span>
        </div>
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        ${outOfStock ? '<span class="badge" style="background:#666;">Out of Stock</span>' : ''}
      </div>
      <div class="info">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="price">GHS ${p.price.toFixed(2)}</div>
        ${outOfStock 
          ? '<button class="btn-whatsapp" style="opacity:0.5;cursor:not-allowed;background:#999;">Out of Stock</button>'
          : `<a href="${waLink(`Hi SamjayHub! I'm interested in ${p.name} (GHS ${p.price}). Is it available?`)}"
              target="_blank" class="btn-whatsapp">
              ${icons.whatsapp}
              Order via WhatsApp
            </a>`
        }
      </div>
    </div>`;
}

// ─── DOMContentLoaded ────────────────────────────
document.addEventListener("DOMContentLoaded", async function () {
  // Load data from JSON files
  await loadData();

  // ─── Mobile Menu Toggle ──────────────────────
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
      mobileNav.classList.toggle("open");
      const isOpen = mobileNav.classList.contains("open");
      hamburger.innerHTML = isOpen
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18L18 6"/><path d="M6 6l12 12"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>';
    });
  }

  // ─── Hero Video Slideshow ────────────────────
  const videoWrap = document.querySelector(".hero-video-wrap");
  if (videoWrap) {
    const slides = videoWrap.querySelectorAll("video, .hero-slide");
    const dots = document.querySelectorAll(".hero-dot");
    if (slides.length > 1) {
      let current = 0;
      let timer = null;

      function goToSlide(index) {
        slides[current].classList.remove("active");
        if (dots[current]) dots[current].classList.remove("active");
        current = index;
        slides[current].classList.add("active");
        if (dots[current]) dots[current].classList.add("active");
      }

      function nextSlide() {
        goToSlide((current + 1) % slides.length);
      }

      function startAutoplay() {
        stopAutoplay();
        timer = setInterval(nextSlide, 5000);
      }

      function stopAutoplay() {
        if (timer) clearInterval(timer);
      }

      dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
          goToSlide(i);
          startAutoplay();
        });
      });

      goToSlide(0);
      startAutoplay();
    }
  }

  // ─── Dispatch event for page-specific scripts ──
  window.dispatchEvent(new Event('dataLoaded'));
});
