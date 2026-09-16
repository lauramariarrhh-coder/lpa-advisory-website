/* ==============================================
   LPA ADVISORY - NAVIGATION & INTERACTIVITY
   ============================================== */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
      });
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (nav && menuToggle && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
      nav.classList.remove('active');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar sticky shadow on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    } else {
      header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.03)';
    }
  }
});

// Fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .card, .path-card, .stage, .value').forEach(el => {
  el.style.opacity = '0';
  el.style.animation = 'fadeIn 0.6s ease-out forwards';
  observer.observe(el);
});

// Active nav link highlighting
function highlightActiveLink() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href === 'index.html' && currentPath === '/')) {
      link.style.color = '#1d6b5f';
      link.style.fontWeight = '700';
    }
  });
}

document.addEventListener('DOMContentLoaded', highlightActiveLink);
