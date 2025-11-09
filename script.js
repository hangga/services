// ============================================================================
// KONFIGURASI KURS - MUDAH DIUBAH
// ============================================================================

const KURS_USD = 16600; // Ganti nilai ini untuk update kurs USD to IDR

// ============================================================================
// PRICING DATA - SATU SUMBER DATA (HANYA SIMPAN IDR)
// ============================================================================

const PRICING_DATA = {
    web: {
        va: {
            lite: { 
                greybox: { hours: 12, duration: '7–10 days', idr: 3780000 }, 
                blackbox: { hours: 15, duration: '8–11 days', idr: 4725000 } 
            },
            standard: { 
                greybox: { hours: 30, duration: '9–14 days', idr: 9450000 }, 
                blackbox: { hours: 38, duration: '10–15 days', idr: 11970000 } 
            },
            ultimate: { 
                greybox: { hours: 60, duration: '12–20 days', idr: 18900000 }, 
                blackbox: { hours: 75, duration: '15–23 days', idr: 23625000 } 
            }
        },
        pt: {
            lite: { 
                greybox: { hours: 25, duration: '9–12 days', idr: 7875000 }, 
                blackbox: { hours: 30, duration: '10–13 days', idr: 9450000 } 
            },
            standard: { 
                greybox: { hours: 70, duration: '12–17 days', idr: 22050000 }, 
                blackbox: { hours: 85, duration: '14–19 days', idr: 26775000 } 
            },
            ultimate: { 
                greybox: { hours: 120, duration: '15–22 days', idr: 37800000 }, 
                blackbox: { hours: 150, duration: '17–25 days', idr: 47250000 } 
            }
        }
    },
    android: {
        va: {
            lite: { 
                greybox: { hours: 14, duration: '8–11 days', idr: 4935000 }, 
                blackbox: { hours: 18, duration: '9–12 days', idr: 6300000 } 
            },
            standard: { 
                greybox: { hours: 35, duration: '10–15 days', idr: 11025000 }, 
                blackbox: { hours: 44, duration: '11–16 days', idr: 13860000 } 
            },
            ultimate: { 
                greybox: { hours: 70, duration: '13–19 days', idr: 22050000 }, 
                blackbox: { hours: 88, duration: '15–22 days', idr: 27563000 } 
            }
        },
        pt: {
            lite: { 
                greybox: { hours: 28, duration: '10–13 days', idr: 9450000 }, 
                blackbox: { hours: 35, duration: '11–14 days', idr: 11813000 } 
            },
            standard: { 
                greybox: { hours: 78, duration: '13–18 days', idr: 25515000 }, 
                blackbox: { hours: 98, duration: '15–20 days', idr: 31500000 } 
            },
            ultimate: { 
                greybox: { hours: 135, duration: '16–23 days', idr: 41580000 }, 
                blackbox: { hours: 169, duration: '18–26 days', idr: 51975000 } 
            }
        }
    },
    ios: {
        va: {
            lite: { 
                greybox: { hours: 16, duration: '9–12 days', idr: 6300000 }, 
                blackbox: { hours: 20, duration: '10–13 days', idr: 7875000 } 
            },
            standard: { 
                greybox: { hours: 40, duration: '11–16 days', idr: 13860000 }, 
                blackbox: { hours: 50, duration: '12–17 days', idr: 17325000 } 
            },
            ultimate: { 
                greybox: { hours: 80, duration: '14–21 days', idr: 27720000 }, 
                blackbox: { hours: 100, duration: '16–23 days', idr: 34650000 } 
            }
        },
        pt: {
            lite: { 
                greybox: { hours: 32, duration: '11–14 days', idr: 11340000 }, 
                blackbox: { hours: 40, duration: '12–15 days', idr: 14175000 } 
            },
            standard: { 
                greybox: { hours: 85, duration: '14–19 days', idr: 29295000 }, 
                blackbox: { hours: 106, duration: '16–21 days', idr: 36225000 } 
            },
            ultimate: { 
                greybox: { hours: 150, duration: '17–24 days', idr: 51030000 }, 
                blackbox: { hours: 188, duration: '19–27 days', idr: 63788000 } 
            }
        }
    }
};

// ============================================================================
// FUNGSI BANTU YANG CEPAT
// ============================================================================

// Fungsi konversi IDR ke USD yang cepat
function idrToUsd(idr) {
    return Math.round(idr / KURS_USD);
}

// Fungsi format currency yang cepat
function formatPrice(idr, currency = 'IDR') {
    if (currency === 'USD') {
        const usd = idrToUsd(idr);
        return '$' + usd.toLocaleString('en-US');
    } else {
        return 'Rp ' + idr.toLocaleString('id-ID');
    }
}

// ============================================================================
// GENERATE TABEL PRICING YANG OPTIMAL
// ============================================================================

function generatePricingTables() {
    const platforms = ['web', 'android', 'ios'];
    
    platforms.forEach(platform => {
        const container = document.getElementById(`${platform}-pricing`);
        if (!container) return;

        // Kosongkan container
        container.innerHTML = '';
        
        // Generate tabel untuk VA dan PT
        container.appendChild(createTable('Vulnerability Assessment (VA)', platform, 'va'));
        container.appendChild(createTable('Penetration Testing (PT)', platform, 'pt'));
    });
}

function createTable(title, platform, serviceType) {
    // Buat container category
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'pricing-category';
    
    // Tambahkan judul
    const subtitle = document.createElement('h4');
    subtitle.className = 'pricing-subtitle';
    subtitle.textContent = title;
    categoryDiv.appendChild(subtitle);
    
    // Buat wrapper table
    const tableWrapper = document.createElement('div');
    tableWrapper.className = 'pricing-table-wrapper';
    
    // Buat table dengan innerHTML untuk performa optimal
    const table = document.createElement('table');
    table.className = 'pricing-table';
    table.innerHTML = `
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
        <tbody>
            ${generateTableRows(platform, serviceType)}
        </tbody>
    `;
    
    tableWrapper.appendChild(table);
    categoryDiv.appendChild(tableWrapper);
    
    return categoryDiv;
}

function generateTableRows(platform, serviceType) {
    const tiers = ['lite', 'standard', 'ultimate'];
    const modes = ['greybox', 'blackbox'];
    let rows = '';
    
    tiers.forEach(tier => {
        modes.forEach(mode => {
            const priceInfo = PRICING_DATA[platform]?.[serviceType]?.[tier]?.[mode];
            if (priceInfo) {
                const tierClass = `tier-${tier}`;
                const tierDisplay = tier.charAt(0).toUpperCase() + tier.slice(1);
                const modeDisplay = mode === 'greybox' ? 'Greybox' : 'Blackbox';
                
                rows += `
                    <tr>
                        <td><span class="tier-badge ${tierClass}">${tierDisplay}</span></td>
                        <td>${modeDisplay}</td>
                        <td>${priceInfo.hours}</td>
                        <td>${priceInfo.duration}</td>
                        <td>${formatPrice(priceInfo.idr, 'IDR')}</td>
                        <td>${formatPrice(priceInfo.idr, 'USD')}</td>
                    </tr>
                `;
            }
        });
    });
    
    return rows;
}

// ============================================================================
// PRICE CALCULATION YANG EFISIEN
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

    if (serviceType && platform && tier && mode) {
        let priceData;
        
        if (serviceType === 'va-pt') {
            const va = PRICING_DATA[platform]?.va?.[tier]?.[mode];
            const pt = PRICING_DATA[platform]?.pt?.[tier]?.[mode];
            if (va && pt) {
                priceData = {
                    hours: va.hours + pt.hours,
                    duration: `${va.duration.split('–')[0]}–${pt.duration.split('–')[1]}`,
                    idr: va.idr + pt.idr
                };
            }
        } else {
            priceData = PRICING_DATA[platform]?.[serviceType]?.[tier]?.[mode];
        }

        if (priceData && priceCalculation) {
            priceCalculation.style.display = 'block';
            
            // Update details
            if (calcServiceType) calcServiceType.textContent = 
                serviceType === 'va' ? 'Vulnerability Assessment' : 
                serviceType === 'pt' ? 'Penetration Testing' : 'VA + PT Bundle';
            
            if (calcPlatform) calcPlatform.textContent = 
                platform === 'web' ? 'Web Application' :
                platform === 'android' ? 'Android App' : 'iOS App';
            
            if (calcTier) calcTier.textContent = tier.charAt(0).toUpperCase() + tier.slice(1);
            if (calcMode) calcMode.textContent = mode === 'greybox' ? 'Greybox Testing' : 'Blackbox Testing';
            if (calcHours) calcHours.textContent = priceData.hours + ' hours';
            if (calcDuration) calcDuration.textContent = priceData.duration;
            
            // Format price
            if (calculatedPrice) {
                calculatedPrice.textContent = 
                    `${formatPrice(priceData.idr, 'IDR')} / ${formatPrice(priceData.idr, 'USD')}`;
            }
        } else {
            if (priceCalculation) priceCalculation.style.display = 'none';
        }
    } else {
        if (priceCalculation) priceCalculation.style.display = 'none';
    }
}

// ============================================================================
// FUNGSI UPDATE KURS YANG CEPAT
// ============================================================================

function updateExchangeRate(newKurs) {
    // Update kurs global
    window.KURS_USD = newKurs;
    
    // Regenerate tabel (sangat cepat dengan innerHTML)
    generatePricingTables();
    
    // Update calculation jika ada
    calculatePrice();
    
    console.log(`Kurs updated to: ${newKurs}`);
}

// ============================================================================
// MOBILE MENU TOGGLE
// ============================================================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    });
});

// ============================================================================
// PLATFORM SELECTION FUNCTIONALITY
// ============================================================================

const platformBtns = document.querySelectorAll('.platform-btn');
const pricingPlatforms = document.querySelectorAll('.pricing-platform');
const platformDescription = document.getElementById('platform-description');

const platformDescriptions = {
    web: "Web application security testing for websites, web apps, and APIs",
    android: "Comprehensive Android mobile app security testing", 
    ios: "iOS mobile app security testing for iPhone and iPad applications"
};

if (platformBtns.length > 0) {
    platformBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.dataset.platform;
            
            // Update active button
            platformBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update platform description
            if (platformDescription) {
                platformDescription.textContent = platformDescriptions[platform];
            }
            
            // Show corresponding pricing
            pricingPlatforms.forEach(platform => platform.classList.remove('active'));
            const target = document.getElementById(`${platform}-pricing`);
            if (target) target.classList.add('active');
        });
    });
}

// ============================================================================
// SMOOTH SCROLL FUNCTIONALITY
// ============================================================================

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

// ============================================================================
// SCROLL EFFECT TO NAVIGATION
// ============================================================================

let lastScroll = 0;
const nav = document.querySelector('.nav');

if (nav) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ============================================================================
// ANIMATION ON SCROLL
// ============================================================================

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

// Observe sections for animation
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

// ============================================================================
// DELVELIN CODE TABS
// ============================================================================

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length > 0) {
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
}

// ============================================================================
// LOADING ANIMATION
// ============================================================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================================================
// FORM SUBMISSION HANDLING
// ============================================================================

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("orderForm");
    
    // Initialize pricing system
    generatePricingTables();
    initializePriceCalculation();

    console.log('Pricing system loaded with kurs:', KURS_USD);

    if (form) {
        const submitBtn = form.querySelector(".submit-btn");
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwyfYJxxYoymFLACeVvVCUF1VDzJylPfiTHS0GI9iLLANar12qPd13QpZjnZEbyLgPz/exec";

        form.addEventListener("submit", async function(e) {
            e.preventDefault();
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "⏳ Submitting...";
            }

            // Ambil file input
            const ownershipProof = document.getElementById("ownershipProof")?.files[0];
            const additionalDocs = document.getElementById("additionalDocs")?.files[0];

            // Konversi file ke Base64
            async function toBase64(file) {
                return new Promise((resolve, reject) => {
                    if (!file) return resolve(null);
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result.split(",")[1]);
                    reader.onerror = (error) => reject(error);
                });
            }

            const ownershipProofBase64 = await toBase64(ownershipProof);
            const additionalDocsBase64 = await toBase64(additionalDocs);

            // Kumpulkan semua data
            const data = {
                serviceType: form.serviceType?.value || '',
                platform: form.platform?.value || '',
                testingTier: form.testingTier?.value || '',
                testingMode: form.testingMode?.value || '',
                domain: form.domain?.value || '',
                scope: form.scope?.value || '',
                credentials: form.credentials?.value || '',
                specialRequirements: form.specialRequirements?.value || '',
                fullName: form.fullName?.value || '',
                company: form.company?.value || '',
                email: form.email?.value || '',
                phone: form.phone?.value || '',
                timeline: form.timeline?.value || '',
                ownershipProofName: ownershipProof ? ownershipProof.name : "",
                ownershipProofData: ownershipProofBase64,
                additionalDocsName: additionalDocs ? additionalDocs.name : "",
                additionalDocsData: additionalDocsBase64,
                exchangeRate: KURS_USD
            };

            try {
                const response = await fetch(SCRIPT_URL, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },
                });
                const result = await response.json();

                if (result.status === "success") {
                    alert("✅ Order submitted successfully!");
                    form.reset();
                    if (priceCalculation) priceCalculation.style.display = 'none';
                } else {
                    alert("⚠️ Submission failed: " + result.message);
                }
            } catch (err) {
                alert("❌ Error sending data: " + err.message);
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "🚀 Submit Order Request";
                }
            }
        });
    }
});

// ============================================================================
// EXPORT UNTUK ADMIN (OPTIONAL)
// ============================================================================

if (typeof window !== 'undefined') {
    window.PricingSystem = {
        updateExchangeRate,
        getKurs: () => KURS_USD,
        formatPrice,
        idrToUsd,
        PRICING_DATA
    };
    
    console.log('Pricing System loaded. Use PricingSystem.updateExchangeRate(newKurs) to update exchange rate.');
}