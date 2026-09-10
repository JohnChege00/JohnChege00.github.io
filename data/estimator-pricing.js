window.ESTIMATOR_PRICING = {
  approxUsdRate: 129,
  basePagesIncluded: 5,
  perExtraPage: { min: 1000, max: 2000 },
  siteTypes: [
    { id: "landing-page", label: "Landing Page", description: "A single focused page built to promote one product, service or event.", base: { min: 5000, max: 12000 } },
    { id: "portfolio", label: "Portfolio / Personal Website", description: "A personal site to showcase your work, skills or CV, like this one.", base: { min: 8000, max: 18000 } },
    { id: "small-business", label: "Small Business Website", description: "A multi-page site for a small business: services, about, contact.", base: { min: 15000, max: 35000 } },
    { id: "blog-news", label: "Blog / News Website", description: "A content-first site built around regularly published articles.", base: { min: 15000, max: 30000 } },
    { id: "school", label: "School / Institution Website", description: "A site for a school or institution: programmes, admissions, staff, news.", base: { min: 25000, max: 50000 } },
    { id: "corporate", label: "Corporate Website", description: "A larger, brand-focused site for an established company.", base: { min: 40000, max: 90000 } },
    { id: "ecommerce", label: "E-commerce Website", description: "An online store with a product catalogue, cart and checkout.", base: { min: 25000, max: 80000 } },
    { id: "booking", label: "Booking / Reservation Website", description: "A site built around scheduling appointments, rooms or reservations.", base: { min: 25000, max: 60000 } },
    { id: "web-app", label: "Custom Web Application", description: "A custom system built around your workflow, like a clearance or management system.", base: { min: 50000, max: 200000 } }
  ],
  addons: [
    { id: "cms-blog", label: "Blog / content management (CMS)", cost: { min: 5000, max: 10000 } },
    { id: "payments", label: "Online payments / e-commerce checkout", cost: { min: 10000, max: 25000 }, note: "M-Pesa/card transaction fees are charged by the payment provider, not included here." },
    { id: "accounts", label: "User accounts and login", cost: { min: 8000, max: 15000 } },
    { id: "admin-dashboard", label: "Admin dashboard", cost: { min: 10000, max: 20000 } },
    { id: "custom-dashboards", label: "Custom dashboards and reporting", cost: { min: 12000, max: 30000 } },
    { id: "booking-system", label: "Online booking / appointment system", cost: { min: 10000, max: 20000 } },
    { id: "email-setup", label: "Business email setup", cost: { min: 2000, max: 5000 }, note: "Email hosting itself (e.g. Google Workspace, Zoho Mail) is billed separately by the provider." },
    { id: "sms-integration", label: "SMS integration (e.g. Africa's Talking)", cost: { min: 5000, max: 12000 }, note: "SMS credits (roughly KES 0.25-1 per message) and Sender ID setup are paid directly to the SMS provider." },
    { id: "multilingual", label: "Multi-language support", cost: { min: 6000, max: 12000 } },
    { id: "api-integration", label: "Third-party API integration", cost: { min: 6000, max: 15000 } },
    { id: "document-verification", label: "OCR / QR / document verification", cost: { min: 10000, max: 20000 } },
    { id: "seo-setup", label: "On-page SEO setup", cost: { min: 3000, max: 8000 } }
  ],
  design: [
    { id: "template", label: "Template-based design", cost: { min: 0, max: 0 } },
    { id: "custom", label: "Fully custom design", cost: { min: 5000, max: 15000 } }
  ]
};
