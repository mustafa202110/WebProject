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
  // Scroll reveal animation
  const scrollElements = document.querySelectorAll('.book-card, .review-card, .blog-card, .promo-content');
  
  const elementInView = (el, scrollOffset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('revealed');
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove('revealed');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (!el.classList.contains('scroll-reveal')) {
        el.classList.add('scroll-reveal');
      }
      
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  // Add event listener for scroll
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Run once on page load
  handleScrollAnimation();
  
  // Book slider dots functionality (placeholder for future implementation)
  const sectionIndicators = document.querySelectorAll('.section-indicator span');
  
  if (sectionIndicators.length > 0) {
    sectionIndicators.forEach((indicator, index) => {
      indicator.addEventListener('click', function() {
        // For now, just update active state
        // In a real implementation, this would control a slider
        const parent = this.closest('.section-indicator');
        parent.querySelectorAll('span').forEach(dot => {
          dot.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }
  
  // Shopping cart functionality (simplified version)
  const wishlistIcon = document.querySelector('.wishlist-icon');
  if (wishlistIcon) {
    wishlistIcon.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Wishlist feature coming soon!');
    });
  }
  
  const searchIcon = document.querySelector('.search-icon');
  if (searchIcon) {
    searchIcon.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Search feature coming soon!');
    });
  }
});