// // Mobile menu functionality
// const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// const navLinks = document.querySelector('.nav-links');
// const backdrop = document.querySelector('.menu-backdrop');
// const navItems = document.querySelectorAll('.nav-links a');

// // Toggle mobile menu
// function toggleMenu() {
//   navLinks.classList.toggle('active');
//   mobileMenuBtn.classList.toggle('active');
//   backdrop.classList.toggle('active');
  
//   // Toggle aria-expanded for accessibility
//   const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
//   mobileMenuBtn.setAttribute('aria-expanded', !expanded);
  
//   // Toggle body scroll when menu is open
//   if (!expanded) {
//     document.body.style.overflow = 'hidden';
//   } else {
//     document.body.style.overflow = '';
//   }
// }

// // Close mobile menu
// function closeMenu() {
//   navLinks.classList.remove('active');
//   mobileMenuBtn.classList.remove('active');
//   backdrop.classList.remove('active');
//   mobileMenuBtn.setAttribute('aria-expanded', 'false');
//   document.body.style.overflow = '';
// }

// // Event listeners
// mobileMenuBtn.addEventListener('click', toggleMenu);
// backdrop.addEventListener('click', closeMenu);

// // Close menu when a nav item is clicked
// navItems.forEach(item => {
//   item.addEventListener('click', () => {
//     closeMenu();
    
//     // Set active class to clicked link
//     navItems.forEach(link => link.classList.remove('active'));
//     item.classList.add('active');
//   });
// });

// // Set active link based on current hash
// function setActiveLink() {
//   const currentHash = window.location.hash || '#home';
//   navItems.forEach(link => {
//     link.classList.remove('active');
//     if (link.getAttribute('href') === currentHash) {
//       link.classList.add('active');
//     }
//   });
// }

// // Initial setup
// setActiveLink();

// // Listen for hash changes
// window.addEventListener('hashchange', setActiveLink);

// // Smooth scroll to section when clicking nav links
// navItems.forEach(link => {
//   link.addEventListener('click', (e) => {
//     const targetId = link.getAttribute('href');
//     const targetSection = document.querySelector(targetId);
    
//     if (targetSection) {
//       e.preventDefault();
//       window.history.pushState(null, '', targetId);
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//       setActiveLink();
//     }
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const backdrop = document.querySelector('.menu-backdrop');
    
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
      backdrop.classList.toggle('active');
      
      // Toggle aria-expanded for accessibility
      const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuBtn.setAttribute('aria-expanded', !expanded);
    });
    
    // Close menu when clicking outside
    backdrop.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      backdrop.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
    
    // Set active link based on current page
    const currentPage = window.location.hash || '#home';
    document.querySelectorAll('.nav-links a').forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  });