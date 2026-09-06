// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Hero demo: button
const demoButton = document.getElementById('demoButton');
demoButton.addEventListener('click', () => {
  const wasAdded = demoButton.classList.contains('added');
  demoButton.classList.toggle('added');
  demoButton.textContent = wasAdded ? 'Add to cart' : 'Added ✓';
});

// Hero demo: switch
const demoSwitch = document.getElementById('demoSwitch');
demoSwitch.addEventListener('click', () => {
  const checked = demoSwitch.getAttribute('aria-checked') === 'true';
  demoSwitch.setAttribute('aria-checked', String(!checked));
});

// Hero demo: progress bar fills once on load
const demoProgress = document.getElementById('demoProgress');
window.addEventListener('load', () => {
  requestAnimationFrame(() => {
    setTimeout(() => { demoProgress.style.width = '72%'; }, 300);
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (dark/light mode)
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
}
function currentTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}
function toggleTheme() {
  setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
}
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

// Scroll reveal animations
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('revealed'));
}

// Nav shadow on scroll
const navEl = document.getElementById('nav');
function updateNavShadow() {
  if (window.scrollY > 8) navEl.classList.add('scrolled');
  else navEl.classList.remove('scrolled');
}
window.addEventListener('scroll', updateNavShadow, { passive: true });
updateNavShadow();
