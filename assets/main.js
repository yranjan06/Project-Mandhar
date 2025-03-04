<script>
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
  </script>