// Main JavaScript functionality

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu?.contains(event.target);
    const isClickOnHamburger = hamburger?.contains(event.target);
    
    if (navMenu?.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger) {
      navMenu.classList.remove('active');
      hamburger?.classList.remove('active');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for the sticky header
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navMenu?.classList.contains('active')) {
          navMenu.classList.remove('active');
          hamburger?.classList.remove('active');
        }
      }
    });
  });