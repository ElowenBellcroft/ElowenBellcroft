/* ==========================================
   ELOWEN BELLCROFT - MAIN JAVASCRIPT
   ========================================== */

/* Mobile Menu Toggle */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

/* Navbar Shadow on Scroll */
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }
});

/* Scroll Animations */
function handleScrollAnimations() {
  var elements = document.querySelectorAll(
    '.animate-fade-up, .animate-slide-left, .animate-slide-right'
  );

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach(function (element) {
    observer.observe(element);
  });
}

/* Initialize on DOM Load */
document.addEventListener('DOMContentLoaded', function () {
  handleScrollAnimations();

  /* Trigger hero animations immediately */
  var heroElements = document.querySelectorAll('#hero .animate-fade-up');
  heroElements.forEach(function (el) {
    setTimeout(function () {
      el.classList.add('visible');
    }, 300);
  });

  /* Trigger page hero animations */
  var pageHeroElements = document.querySelectorAll('.page-hero .animate-fade-up');
  pageHeroElements.forEach(function (el) {
    setTimeout(function () {
      el.classList.add('visible');
    }, 200);
  });
});