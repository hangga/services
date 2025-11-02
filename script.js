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

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add this to your existing script.js file

// Delvelin Code Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// ... rest of your existing JavaScript code


// Order

const pricingData = {
            web: {
                va: {
                    lite: { greybox: { hours: 12, duration: '2–3 days', idr: 3780000, usd: 576 }, blackbox: { hours: 15, duration: '3–4 days', idr: 4725000, usd: 720 } },
                    standard: { greybox: { hours: 30, duration: '4–6 days', idr: 9450000, usd: 1440 }, blackbox: { hours: 38, duration: '5–7 days', idr: 11970000, usd: 1800 } },
                    ultimate: { greybox: { hours: 60, duration: '7–10 days', idr: 18900000, usd: 2880 }, blackbox: { hours: 75, duration: '10–12 days', idr: 23625000, usd: 3600 } }
                },
                pt: {
                    lite: { greybox: { hours: 25, duration: '4–5 days', idr: 7875000, usd: 1440 }, blackbox: { hours: 30, duration: '5–6 days', idr: 9450000, usd: 1728 } },
                    standard: { greybox: { hours: 70, duration: '7–10 days', idr: 22050000, usd: 4320 }, blackbox: { hours: 85, duration: '9–12 days', idr: 26775000, usd: 5220 } },
                    ultimate: { greybox: { hours: 120, duration: '10–15 days', idr: 37800000, usd: 7200 }, blackbox: { hours: 150, duration: '12–18 days', idr: 47250000, usd: 9000 } }
                }
            },
            android: {
                va: {
                    lite: { greybox: { hours: 12, duration: '2–3 days', idr: 4200000, usd: 280 }, blackbox: { hours: 15, duration: '3–4 days', idr: 5250000, usd: 350 } },
                    standard: { greybox: { hours: 30, duration: '4–6 days', idr: 10500000, usd: 700 }, blackbox: { hours: 38, duration: '5–7 days', idr: 13300000, usd: 890 } },
                    ultimate: { greybox: { hours: 60, duration: '7–10 days', idr: 21000000, usd: 1400 }, blackbox: { hours: 75, duration: '10–12 days', idr: 26250000, usd: 1750 } }
                },
                pt: {
                    lite: { greybox: { hours: 25, duration: '4–5 days', idr: 8750000, usd: 580 }, blackbox: { hours: 30, duration: '5–6 days', idr: 10500000, usd: 700 } },
                    standard: { greybox: { hours: 70, duration: '7–10 days', idr: 24500000, usd: 1630 }, blackbox: { hours: 85, duration: '9–12 days', idr: 29750000, usd: 1980 } },
                    ultimate: { greybox: { hours: 120, duration: '10–15 days', idr: 42000000, usd: 2800 }, blackbox: { hours: 150, duration: '12–18 days', idr: 52500000, usd: 3500 } }
                }
            },
            ios: {
                va: {
                    lite: { greybox: { hours: 15, duration: '3–4 days', idr: 5940000, usd: 396 }, blackbox: { hours: 19, duration: '4–5 days', idr: 7590000, usd: 506 } },
                    standard: { greybox: { hours: 35, duration: '5–7 days', idr: 13860000, usd: 924 }, blackbox: { hours: 44, duration: '6–9 days', idr: 17380000, usd: 1159 } },
                    ultimate: { greybox: { hours: 65, duration: '8–12 days', idr: 26400000, usd: 1760 }, blackbox: { hours: 82, duration: '10–14 days', idr: 33000000, usd: 2200 } }
                },
                pt: {
                    lite: { greybox: { hours: 28, duration: '4–5 days', idr: 12320000, usd: 821 }, blackbox: { hours: 35, duration: '5–6 days', idr: 15400000, usd: 1027 } },
                    standard: { greybox: { hours: 75, duration: '7–10 days', idr: 29700000, usd: 1980 }, blackbox: { hours: 94, duration: '9–12 days', idr: 37000000, usd: 2466 } },
                    ultimate: { greybox: { hours: 130, duration: '10–15 days', idr: 52800000, usd: 3520 }, blackbox: { hours: 162, duration: '12–18 days', idr: 65000000, usd: 4333 } }
                }
            }
        };

        // Form elements
        const serviceTypeSelect = document.getElementById('serviceType');
        const platformSelect = document.getElementById('platform');
        const tierSelect = document.getElementById('testingTier');
        const modeSelect = document.getElementById('testingMode');
        const priceCalculation = document.getElementById('priceCalculation');
        const calculatedPrice = document.getElementById('calculatedPrice');
        const calcServiceType = document.getElementById('calcServiceType');
        const calcPlatform = document.getElementById('calcPlatform');
        const calcTier = document.getElementById('calcTier');
        const calcMode = document.getElementById('calcMode');
        const calcHours = document.getElementById('calcHours');
        const calcDuration = document.getElementById('calcDuration');

        // Calculate price function
        function calculatePrice() {
            const serviceType = serviceTypeSelect.value;
            const platform = platformSelect.value;
            const tier = tierSelect.value;
            const mode = modeSelect.value;

            // Check if all required fields are filled
            if (serviceType && platform && tier && mode) {
                let priceData;
                
                if (serviceType === 'va-pt') {
                    // For bundle, calculate VA + PT
                    const vaPrice = pricingData[platform]?.va?.[tier]?.[mode];
                    const ptPrice = pricingData[platform]?.pt?.[tier]?.[mode];
                    
                    if (vaPrice && ptPrice) {
                        priceData = {
                            hours: vaPrice.hours + ptPrice.hours,
                            duration: `${vaPrice.duration.split('–')[0]}–${ptPrice.duration.split('–')[1]}`,
                            idr: vaPrice.idr + ptPrice.idr,
                            usd: vaPrice.usd + ptPrice.usd
                        };
                    }
                } else {
                    priceData = pricingData[platform]?.[serviceType]?.[tier]?.[mode];
                }

                if (priceData) {
                    // Show calculation
                    priceCalculation.style.display = 'block';
                    
                    // Update calculation details
                    calcServiceType.textContent = serviceType === 'va' ? 'Vulnerability Assessment' : 
                                               serviceType === 'pt' ? 'Penetration Testing' : 'VA + PT Bundle';
                    calcPlatform.textContent = platform === 'web' ? 'Web Application' :
                                             platform === 'android' ? 'Android App' :
                                             platform === 'ios' ? 'iOS App' : platform;
                    calcTier.textContent = tier.charAt(0).toUpperCase() + tier.slice(1);
                    calcMode.textContent = mode === 'greybox' ? 'Greybox Testing' : 'Blackbox Testing';
                    calcHours.textContent = priceData.hours + ' hours';
                    calcDuration.textContent = priceData.duration;
                    
                    // Format and display price
                    const formattedIDR = 'Rp ' + priceData.idr.toLocaleString('id-ID');
                    const formattedUSD = '$' + priceData.usd.toLocaleString('en-US');
                    calculatedPrice.textContent = `${formattedIDR} / ${formattedUSD}`;
                } else {
                    priceCalculation.style.display = 'none';
                }
            } else {
                priceCalculation.style.display = 'none';
            }
        }

        // Add event listeners
        serviceTypeSelect.addEventListener('change', calculatePrice);
        platformSelect.addEventListener('change', calculatePrice);
        tierSelect.addEventListener('change', calculatePrice);
        modeSelect.addEventListener('change', calculatePrice);

        // Form submission handling
        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const serviceType = serviceTypeSelect.value;
            const platform = platformSelect.value;
            const tier = tierSelect.value;
            const mode = modeSelect.value;
            const domain = document.getElementById('domain').value;
            const scope = document.getElementById('scope').value;
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const ownershipProof = document.getElementById('ownershipProof').files.length;
            
            if (!serviceType || !platform || !tier || !mode || !domain || !scope || !fullName || !email || !ownershipProof) {
                alert('Please fill in all required fields');
                return;
            }
            
            // In a real implementation, you would send this data to a server
            // For now, we'll just show a success message
            alert('Thanks for your order! We\'ll contact you within 24 hours to confirm details and provide payment instructions.');
            
            // Reset form
            this.reset();
            priceCalculation.style.display = 'none';
        });