// ===========================================
// FLOWITEC WEBSITE IMAGE CONFIGURATION
// ===========================================
// Change these URLs to update images across the website
// All images should be placed in /public folder or use external URLs
// 
// To change an image:
// 1. Upload your image to /public folder (e.g., /public/my-image.jpg)
// 2. Update the URL below to '/my-image.jpg'
// OR use an external URL like 'https://example.com/image.jpg'
// ===========================================

export const SITE_IMAGES = {
  // ===== HOMEPAGE =====
  hero: {
    // Hero section background (video is separate - see /lib/mockData.js HERO_VIDEO_URL)
    poster: '/hero-poster.jpg',  // Fallback image when video doesn't load
  },

  // ===== ABOUT PAGE =====
  about: {
    hero: '/agriculture-1.jpg',           // About page hero background
    team: '/mining-1.jpg',                 // Team/office image
  },

  // ===== CAREERS PAGE =====
  careers: {
    hero: '/agriculture-1.jpg',            // Careers hero background
    lifeAtFlowitec: '/mining-1.jpg',       // Life at Flowitec section
  },

  // ===== SERVICES PAGE =====
  services: {
    hero: '/petrochemical-1.jpg',          // Services hero background
  },

  // ===== CONTACT PAGE =====
  contact: {
    hero: '/food-beverage-1.jpg',          // Contact hero background
    map: '/africa-map.jpg',                // Africa map image
  },

  // ===== PARTNERS PAGE =====
  partners: {
    hero: '/power-plant-1.jpg',            // Partners hero background
  },

  // ===== QUALITY PAGE =====
  quality: {
    hero: '/pharma-1.jpg',                 // Quality hero background
  },

  // ===== REFERENCES PAGE =====
  references: {
    hero: '/marine-1.jpg',                 // References/Projects hero background
  },

  // ===== INDUSTRIES =====
  // Note: Industry images are configured in /lib/industriesData.js
  // Each industry has: cover image, hero image

  // ===== PRODUCTS =====
  // Note: Product images are configured in /lib/productsData.js

  // ===== GENERAL/FALLBACK =====
  fallback: {
    industry: '/mining-1.jpg',             // Fallback for industries
    product: '/petrochemical-1.jpg',       // Fallback for products
    team: '/agriculture-1.jpg',            // Fallback for team/people
  }
};

// ===== LOGO =====
export const LOGO = {
  main: '/flowitec-logo.png',              // Main company logo
  favicon: '/flowitec-logo.png',           // Browser tab icon
  footer: '/flowitec-logo.png',            // Footer logo
};

// ===== PARTNER LOGOS =====
// Note: Partner logos are configured in /lib/mockData.js PARTNERS array
// Each partner has: { name, logo: '/partner-logo.jpg' }

// ===== VIDEO =====
export const VIDEOS = {
  heroVideo: '/hero-video.mp4',            // Homepage hero video
};

export default SITE_IMAGES;
