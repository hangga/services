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

// ============================================================================
// CONFIGURASI KURS & TARIF
// ============================================================================

const CONFIG = {
    KURS_USD: 16500,
    RATE_IDR: {
        default: 300000, // Web & Android
        ios: 500000      // iOS khusus
    }
};

// ============================================================================
// JAM & DURASI (TIDAK ADA NILAI IDR MANUAL)
// ============================================================================

const PRICING_HOURS = {
    web: {
        va: {
            lite: { greybox: { hours: 12, duration: '7–10 days' }, blackbox: { hours: 15, duration: '8–11 days' } },
            standard: { greybox: { hours: 30, duration: '9–14 days' }, blackbox: { hours: 38, duration: '10–15 days' } },
            ultimate: { greybox: { hours: 60, duration: '12–20 days' }, blackbox: { hours: 75, duration: '15–23 days' } }
        },
        pt: {
            lite: { greybox: { hours: 25, duration: '9–12 days' }, blackbox: { hours: 30, duration: '10–13 days' } },
            standard: { greybox: { hours: 70, duration: '12–17 days' }, blackbox: { hours: 85, duration: '14–19 days' } },
            ultimate: { greybox: { hours: 120, duration: '15–22 days' }, blackbox: { hours: 150, duration: '17–25 days' } }
        }
    },
    android: {
        va: {
            lite: { greybox: { hours: 14, duration: '8–11 days' }, blackbox: { hours: 18, duration: '9–12 days' } },
            standard: { greybox: { hours: 35, duration: '10–15 days' }, blackbox: { hours: 44, duration: '11–16 days' } },
            ultimate: { greybox: { hours: 70, duration: '13–19 days' }, blackbox: { hours: 88, duration: '15–22 days' } }
        },
        pt: {
            lite: { greybox: { hours: 28, duration: '10–13 days' }, blackbox: { hours: 35, duration: '11–14 days' } },
            standard: { greybox: { hours: 78, duration: '13–18 days' }, blackbox: { hours: 98, duration: '15–20 days' } },
            ultimate: { greybox: { hours: 135, duration: '16–23 days' }, blackbox: { hours: 169, duration: '18–26 days' } }
        }
    },
    ios: {
        va: {
            lite: { greybox: { hours: 16, duration: '9–12 days' }, blackbox: { hours: 20, duration: '10–13 days' } },
            standard: { greybox: { hours: 40, duration: '11–16 days' }, blackbox: { hours: 50, duration: '12–17 days' } },
            ultimate: { greybox: { hours: 80, duration: '14–21 days' }, blackbox: { hours: 100, duration: '16–23 days' } }
        },
        pt: {
            lite: { greybox: { hours: 32, duration: '11–14 days' }, blackbox: { hours: 40, duration: '12–15 days' } },
            standard: { greybox: { hours: 85, duration: '14–19 days' }, blackbox: { hours: 106, duration: '16–21 days' } },
            ultimate: { greybox: { hours: 150, duration: '17–24 days' }, blackbox: { hours: 188, duration: '19–27 days' } }
        }
    }
};

// ============================================================================
// HITUNG HARGA OTOMATIS (HOURS × RATE)
// ============================================================================

function generatePricingData() {
    const result = {};
    for (const [platform, services] of Object.entries(PRICING_HOURS)) {
        const rate = platform === 'ios' ? CONFIG.RATE_IDR.ios : CONFIG.RATE_IDR.default;
        result[platform] = {};
        for (const [type, tiers] of Object.entries(services)) {
            result[platform][type] = {};
            for (const [tier, modes] of Object.entries(tiers)) {
                result[platform][type][tier] = {};
                for (const [mode, data] of Object.entries(modes)) {
                    const idr = data.hours * rate;
                    const usd = Math.round(idr / CONFIG.KURS_USD);
                    result[platform][type][tier][mode] = { ...data, idr, usd };
                }
            }
        }
    }
    return result;
}

let PRICING_DATA = generatePricingData();

// ============================================================================
// UTILITAS FORMAT
// ============================================================================

function formatPrice(value, currency = 'IDR') {
    return currency === 'USD'
        ? `$${value.toLocaleString('en-US')}`
        : `Rp ${value.toLocaleString('id-ID')}`;
}

function idrToUsd(idr) {
    return Math.round(idr * CONFIG.KURS_USD);
}

// ============================================================================
// UPDATE KURS - OTOMATIS REFRESH SEMUA DATA
// ============================================================================

function updateExchangeRate(newKurs) {
    CONFIG.KURS_USD = newKurs;
    PRICING_DATA = generatePricingData();
    generatePricingTables();
    calculatePrice();
    console.log(`Exchange rate updated → Rp ${newKurs}/USD`);
}

// ============================================================================
// GENERATE TABEL HARGA
// ============================================================================

function generateTableRows(platform, type) {
    const tiers = ['lite', 'standard', 'ultimate'];
    const modes = ['greybox', 'blackbox'];
    let rows = '';

    for (const tier of tiers) {
        for (const mode of modes) {
            const item = PRICING_DATA[platform][type][tier][mode];
            rows += `
                <tr>
                    <td><span class="tier-badge tier-${tier}">${tier.charAt(0).toUpperCase() + tier.slice(1)}</span></td>
                    <td>${mode.charAt(0).toUpperCase() + mode.slice(1)}</td>
                    <td>${item.hours}</td>
                    <td>${item.duration}</td>
                    <td>${formatPrice(item.idr)}</td>
                    <td>${formatPrice(item.usd, 'USD')}</td>
                </tr>`;
        }
    }
    return rows;
}

function createTable(title, platform, type) {
    const div = document.createElement('div');
    div.className = 'pricing-category';
    div.innerHTML = `
        <h4 class="pricing-subtitle">${title}</h4>
        <div class="pricing-table-wrapper">
            <table class="pricing-table">
                <thead>
                    <tr>
                        <th>Tier</th>
                        <th>Mode</th>
                        <th>Est. Hours</th>
                        <th>Duration</th>
                        <th>Price (IDR)</th>
                        <th>Price (USD)</th>
                    </tr>
                </thead>
                <tbody>${generateTableRows(platform, type)}</tbody>
            </table>
        </div>`;
    return div;
}

function generatePricingTables() {
    ['web', 'android', 'ios'].forEach(platform => {
        const container = document.getElementById(`${platform}-pricing`);
        if (!container) return;
        container.innerHTML = '';
        container.appendChild(createTable('Vulnerability Assessment (VA)', platform, 'va'));
        container.appendChild(createTable('Penetration Testing (PT)', platform, 'pt'));
    });
}

// ============================================================================
// SISTEM PERHITUNGAN HARGA (FORM ORDER)
// ============================================================================

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

function initializePriceCalculation() {
    [serviceTypeSelect, platformSelect, tierSelect, modeSelect].forEach(select => {
        if (select) select.addEventListener('change', calculatePrice);
    });
    calculatePrice();
}

function calculatePrice() {
    if (!serviceTypeSelect || !platformSelect || !tierSelect || !modeSelect) return;
    const serviceType = serviceTypeSelect.value;
    const platform = platformSelect.value;
    const tier = tierSelect.value;
    const mode = modeSelect.value;

    let priceData = null;

    if (serviceType === 'va-pt') {
        const va = PRICING_DATA[platform]?.va?.[tier]?.[mode];
        const pt = PRICING_DATA[platform]?.pt?.[tier]?.[mode];
        if (va && pt) {
            priceData = {
                hours: va.hours + pt.hours,
                duration: `${va.duration.split('–')[0]}–${pt.duration.split('–')[1]}`,
                idr: va.idr + pt.idr,
                usd: idrToUsd(va.idr + pt.idr)
            };
        }
    } else {
        priceData = PRICING_DATA[platform]?.[serviceType]?.[tier]?.[mode];
    }

    if (priceData) {
        priceCalculation.style.display = 'block';
        calcServiceType.textContent =
            serviceType === 'va' ? 'Vulnerability Assessment' :
            serviceType === 'pt' ? 'Penetration Testing' : 'VA + PT Bundle';
        calcPlatform.textContent =
            platform === 'web' ? 'Web Application' :
            platform === 'android' ? 'Android App' : 'iOS App';
        calcTier.textContent = tier.charAt(0).toUpperCase() + tier.slice(1);
        calcMode.textContent = mode === 'greybox' ? 'Greybox Testing' : 'Blackbox Testing';
        calcHours.textContent = priceData.hours + ' hours';
        calcDuration.textContent = priceData.duration;
        calculatedPrice.textContent =
            `${formatPrice(priceData.idr)} / ${formatPrice(priceData.usd, 'USD')}`;
    } else {
        priceCalculation.style.display = 'none';
    }
}

// ============================================================================
// INISIALISASI SISTEM
// ============================================================================

document.addEventListener("DOMContentLoaded", function() {
    generatePricingTables();
    initializePriceCalculation();
    console.log(`Pricing System loaded — rate: Rp ${CONFIG.RATE_IDR.default}/hour, kurs: Rp ${CONFIG.KURS_USD}/USD`);
});

// ============================================================================
// EXPORT UNTUK ADMIN / DEBUG
// ============================================================================

if (typeof window !== 'undefined') {
    window.PricingSystem = {
        updateExchangeRate,
        getKurs: () => CONFIG.KURS_USD,
        getData: () => PRICING_DATA,
        formatPrice,
        idrToUsd
    };
    console.log('✅ PricingSystem ready — use PricingSystem.updateExchangeRate(newRate)');
}
