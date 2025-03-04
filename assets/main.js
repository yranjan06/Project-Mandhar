// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Select essential DOM elements
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const backdrop = document.querySelector('.menu-backdrop');
    
    // Mobile menu toggle functionality
    mobileMenuBtn.addEventListener('click', () => {
        // Toggle active classes for menu, button, and backdrop
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        backdrop.classList.toggle('active');
        
        // Toggle aria-expanded for accessibility
        const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        mobileMenuBtn.setAttribute('aria-expanded', !expanded);
    });
    
    // Close menu when clicking outside (on backdrop)
    backdrop.addEventListener('click', () => {
        // Remove active states
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        backdrop.classList.remove('active');
        
        // Reset aria-expanded
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
    
    // Set active link based on current page
    const currentPage = window.location.hash || '#home';
    document.querySelectorAll('.nav-links a').forEach(link => {
        // Add 'active' class to the current page link
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});