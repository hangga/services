// Enhanced mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Enhanced scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Enhanced smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.filter = 'blur(0)';
        }
    });
}, observerOptions);

// Observe sections for enhanced animation
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.filter = 'blur(5px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease, filter 0.6s ease';
    observer.observe(section);
});

// Observe service cards with staggered animation
const serviceCards = document.querySelectorAll('.service-card, .mode-card, .tier-card');
serviceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.filter = 'blur(5px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, filter 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Platform selection functionality
const platformBtns = document.querySelectorAll('.platform-btn');
const pricingPlatforms = document.querySelectorAll('.pricing-platform');
const platformDescription = document.getElementById('platform-description');

const platformDescriptions = {
    web: "Web application security testing for websites, web apps, and APIs",
    android: "Comprehensive Android mobile app security testing", 
    ios: "iOS mobile app security testing for iPhone and iPad applications"
};

platformBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const platform = btn.dataset.platform;
        
        // Update active button
        platformBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update platform description
        platformDescription.textContent = platformDescriptions[platform];
        
        // Show corresponding pricing
        pricingPlatforms.forEach(platform => platform.classList.remove('active'));
        document.getElementById(`${platform}-pricing`).classList.add('active');
        
        // Smooth scroll to pricing section
        document.getElementById('pricing').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add parallax effect to hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});