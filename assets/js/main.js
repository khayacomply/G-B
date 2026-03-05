// Initialize WOW.js animations
new WOW().init();

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
  }
  
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
  
  // Form submission - redirect to WhatsApp
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      let message = '*New Inquiry from Glitz and Beautiful Salon*%0A%0A';
      
      formData.forEach((value, key) => {
        message += `*${key}:* ${value}%0A`;
      });
      
      // ✅ Fixed: Removed extra spaces in WhatsApp URL
      window.location.href = `https://wa.me/27711203281?text=${message}`;
    });
  });
  
  // Set minimum date to today for booking forms
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
  
  // ✅ NEW: Lazy-load hero video to prevent auto-download
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo && heroVideo.dataset.src) {
    // Only load video after a short delay (lets page render first)
    setTimeout(() => {
      heroVideo.src = heroVideo.dataset.src;
      heroVideo.load();
      heroVideo.play().catch(() => {}); // Silent fail if autoplay blocked
    }, 1500);
  }
});