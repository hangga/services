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
// PRICING DATA - SINGLE SOURCE OF TRUTH
// ============================================================================

const PRICING_DATA = {
    web: {
        va: {
            lite: { 
                greybox: { hours: 12, duration: '7–10 days', idr: 3780000, usd: 576 }, 
                blackbox: { hours: 15, duration: '8–11 days', idr: 4725000, usd: 720 } 
            },
            standard: { 
                greybox: { hours: 30, duration: '9–14 days', idr: 9450000, usd: 1440 }, 
                blackbox: { hours: 38, duration: '10–15 days', idr: 11970000, usd: 1800 } 
            },
            ultimate: { 
                greybox: { hours: 60, duration: '12–20 days', idr: 18900000, usd: 2880 }, 
                blackbox: { hours: 75, duration: '15–23 days', idr: 23625000, usd: 3600 } 
            }
        },
        pt: {
            lite: { 
                greybox: { hours: 25, duration: '9–12 days', idr: 7875000, usd: 1440 }, 
                blackbox: { hours: 30, duration: '10–13 days', idr: 9450000, usd: 1728 } 
            },
            standard: { 
                greybox: { hours: 70, duration: '12–17 days', idr: 22050000, usd: 4320 }, 
                blackbox: { hours: 85, duration: '14–19 days', idr: 26775000, usd: 5220 } 
            },
            ultimate: { 
                greybox: { hours: 120, duration: '15–22 days', idr: 37800000, usd: 7200 }, 
                blackbox: { hours: 150, duration: '17–25 days', idr: 47250000, usd: 9000 } 
            }
        }
    },
    android: {
        va: {
            lite: { 
                greybox: { hours: 14, duration: '8–11 days', idr: 4935000, usd: 752 }, 
                blackbox: { hours: 18, duration: '9–12 days', idr: 6300000, usd: 960 } 
            },
            standard: { 
                greybox: { hours: 35, duration: '10–15 days', idr: 11025000, usd: 1680 }, 
                blackbox: { hours: 44, duration: '11–16 days', idr: 13860000, usd: 2112 } 
            },
            ultimate: { 
                greybox: { hours: 70, duration: '13–19 days', idr: 22050000, usd: 3360 }, 
                blackbox: { hours: 88, duration: '15–22 days', idr: 27563000, usd: 4200 } 
            }
        },
        pt: {
            lite: { 
                greybox: { hours: 28, duration: '10–13 days', idr: 9450000, usd: 1728 }, 
                blackbox: { hours: 35, duration: '11–14 days', idr: 11813000, usd: 2160 } 
            },
            standard: { 
                greybox: { hours: 78, duration: '13–18 days', idr: 25515000, usd: 4752 }, 
                blackbox: { hours: 98, duration: '15–20 days', idr: 31500000, usd: 5832 } 
            },
            ultimate: { 
                greybox: { hours: 135, duration: '16–23 days', idr: 41580000, usd: 7776 }, 
                blackbox: { hours: 169, duration: '18–26 days', idr: 51975000, usd: 9720 } 
            }
        }
    },
    ios: {
        va: {
            lite: { 
                greybox: { hours: 16, duration: '9–12 days', idr: 6300000, usd: 960 }, 
                blackbox: { hours: 20, duration: '10–13 days', idr: 7875000, usd: 1200 } 
            },
            standard: { 
                greybox: { hours: 40, duration: '11–16 days', idr: 13860000, usd: 2112 }, 
                blackbox: { hours: 50, duration: '12–17 days', idr: 17325000, usd: 2640 } 
            },
            ultimate: { 
                greybox: { hours: 80, duration: '14–21 days', idr: 27720000, usd: 4224 }, 
                blackbox: { hours: 100, duration: '16–23 days', idr: 34650000, usd: 5280 } 
            }
        },
        pt: {
            lite: { 
                greybox: { hours: 32, duration: '11–14 days', idr: 11340000, usd: 2160 }, 
                blackbox: { hours: 40, duration: '12–15 days', idr: 14175000, usd: 2700 } 
            },
            standard: { 
                greybox: { hours: 85, duration: '14–19 days', idr: 29295000, usd: 5616 }, 
                blackbox: { hours: 106, duration: '16–21 days', idr: 36225000, usd: 6912 } 
            },
            ultimate: { 
                greybox: { hours: 150, duration: '17–24 days', idr: 51030000, usd: 9504 }, 
                blackbox: { hours: 188, duration: '19–27 days', idr: 63788000, usd: 11880 } 
            }
        }
    }
};

// ============================================================================
// FORM ELEMENTS
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

// ============================================================================
// PRICING TABLE GENERATION
// ============================================================================

// Fungsi untuk generate tabel pricing dari data konstanta
function generatePricingTables() {
    const platforms = ['web', 'android', 'ios'];
    
    platforms.forEach(platform => {
        const platformElement = document.getElementById(`${platform}-pricing`);
        if (!platformElement) return;

        // Clear existing content
        platformElement.innerHTML = '';

        // Generate VA Table
        const vaTable = createPricingTable('Vulnerability Assessment (VA)', platform, 'va');
        platformElement.appendChild(vaTable);

        // Generate PT Table  
        const ptTable = createPricingTable('Penetration Testing (PT)', platform, 'pt');
        platformElement.appendChild(ptTable);
    });
}

// Fungsi untuk create individual pricing table
function createPricingTable(title, platform, serviceType) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'pricing-category';

    const subtitle = document.createElement('h4');
    subtitle.className = 'pricing-subtitle';
    subtitle.textContent = title;
    categoryDiv.appendChild(subtitle);

    const tableWrapper = document.createElement('div');
    tableWrapper.className = 'pricing-table-wrapper';

    const table = document.createElement('table');
    table.className = 'pricing-table';

    // Create table header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Tier</th>
            <th>Mode</th>
            <th>Est. Hours</th>
            <th>Duration</th>
            <th>Price (IDR)</th>
            <th>Price (USD)</th>
        </tr>
    `;
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    
    const tiers = ['lite', 'standard', 'ultimate'];
    const modes = ['greybox', 'blackbox'];

    tiers.forEach(tier => {
        modes.forEach(mode => {
            const priceInfo = PRICING_DATA[platform]?.[serviceType]?.[tier]?.[mode];
            if (priceInfo) {
                const row = document.createElement('tr');
                
                // Format tier badge
                const tierClass = `tier-${tier}`;
                const tierDisplay = tier.charAt(0).toUpperCase() + tier.slice(1);
                
                // Format prices
                const formattedIDR = 'Rp ' + priceInfo.idr.toLocaleString('id-ID');
                const formattedUSD = '$' + priceInfo.usd.toLocaleString('en-US');

                row.innerHTML = `
                    <td><span class="tier-badge ${tierClass}">${tierDisplay}</span></td>
                    <td>${mode === 'greybox' ? 'Greybox' : 'Blackbox'}</td>
                    <td>${priceInfo.hours}</td>
                    <td>${priceInfo.duration}</td>
                    <td>${formattedIDR}</td>
                    <td>${formattedUSD}</td>
                `;
                
                tbody.appendChild(row);
            }
        });
    });

    table.appendChild(tbody);
    tableWrapper.appendChild(table);
    categoryDiv.appendChild(tableWrapper);

    return categoryDiv;
}

// ============================================================================
// PRICE CALCULATION LOGIC
// ============================================================================

// Initialize price calculation
function initializePriceCalculation() {
    // Add event listeners untuk form calculation
    if (serviceTypeSelect) {
        serviceTypeSelect.addEventListener('change', calculatePrice);
    }
    if (platformSelect) {
        platformSelect.addEventListener('change', calculatePrice);
    }
    if (tierSelect) {
        tierSelect.addEventListener('change', calculatePrice);
    }
    if (modeSelect) {
        modeSelect.addEventListener('change', calculatePrice);
    }
    
    // Calculate initial price jika ada nilai yang sudah terisi
    calculatePrice();
}

// Calculate price function
function calculatePrice() {
    const serviceType = serviceTypeSelect?.value;
    const platform = platformSelect?.value;
    const tier = tierSelect?.value;
    const mode = modeSelect?.value;

    // Check jika semua required fields terisi
    if (serviceType && platform && tier && mode) {
        let priceData;
        
        if (serviceType === 'va-pt') {
            // Untuk bundle, calculate VA + PT
            const vaPrice = PRICING_DATA[platform]?.va?.[tier]?.[mode];
            const ptPrice = PRICING_DATA[platform]?.pt?.[tier]?.[mode];
            
            if (vaPrice && ptPrice) {
                priceData = {
                    hours: vaPrice.hours + ptPrice.hours,
                    duration: `${vaPrice.duration.split('–')[0]}–${ptPrice.duration.split('–')[1]}`,
                    idr: vaPrice.idr + ptPrice.idr,
                    usd: vaPrice.usd + ptPrice.usd
                };
            }
        } else {
            priceData = PRICING_DATA[platform]?.[serviceType]?.[tier]?.[mode];
        }

        if (priceData && priceCalculation && calculatedPrice) {
            // Show calculation
            priceCalculation.style.display = 'block';
            
            // Update calculation details
            if (calcServiceType) calcServiceType.textContent = serviceType === 'va' ? 'Vulnerability Assessment' : 
                                       serviceType === 'pt' ? 'Penetration Testing' : 'VA + PT Bundle';
            if (calcPlatform) calcPlatform.textContent = platform === 'web' ? 'Web Application' :
                                     platform === 'android' ? 'Android App' :
                                     platform === 'ios' ? 'iOS App' : platform;
            if (calcTier) calcTier.textContent = tier.charAt(0).toUpperCase() + tier.slice(1);
            if (calcMode) calcMode.textContent = mode === 'greybox' ? 'Greybox Testing' : 'Blackbox Testing';
            if (calcHours) calcHours.textContent = priceData.hours + ' hours';
            if (calcDuration) calcDuration.textContent = priceData.duration;
            
            // Format dan display price
            const formattedIDR = 'Rp ' + priceData.idr.toLocaleString('id-ID');
            const formattedUSD = '$' + priceData.usd.toLocaleString('en-US');
            calculatedPrice.textContent = `${formattedIDR} / ${formattedUSD}`;
        } else {
            if (priceCalculation) priceCalculation.style.display = 'none';
        }
    } else {
        if (priceCalculation) priceCalculation.style.display = 'none';
    }
}

// ============================================================================
// FORM SUBMISSION HANDLING
// ============================================================================

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("orderForm");
    
    // Initialize pricing tables dan calculation
    generatePricingTables();
    initializePriceCalculation();

    console.log('Pricing system initialized with data:', PRICING_DATA);

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
// UTILITY FUNCTIONS
// ============================================================================

// Refresh pricing tables ketika window resize (untuk responsive)
window.addEventListener('resize', () => {
    generatePricingTables();
});

// Safe initialization untuk semua components
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize animations
        if (sections.length > 0) {
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.filter = 'blur(5px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease, filter 0.6s ease';
                observer.observe(section);
            });
        }

        // Initialize platform buttons jika ada
        if (platformBtns.length > 0) {
            platformBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const platform = btn.dataset.platform;
                    
                    // Update active button
                    platformBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // Update platform description
                    if (platformDescription) {
                        platformDescription.textContent = platformDescriptions[platform] || 'Pick your platform to see the right pricing';
                    }
                    
                    // Show corresponding pricing
                    if (pricingPlatforms.length > 0) {
                        pricingPlatforms.forEach(platform => platform.classList.remove('active'));
                        const targetPlatform = document.getElementById(`${platform}-pricing`);
                        if (targetPlatform) targetPlatform.classList.add('active');
                    }
                    
                    // Smooth scroll to pricing section
                    const pricingSection = document.getElementById('pricing');
                    if (pricingSection) {
                        pricingSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Export pricing data untuk penggunaan di console debugging (opsional)
if (typeof window !== 'undefined') {
    window.PRICING_DATA = PRICING_DATA;
}