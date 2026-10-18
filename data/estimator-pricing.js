window.ESTIMATOR_PRICING = {
  approxUsdRate: 129,
  basePagesIncluded: 5,
  perExtraPage: { min: 1000, max: 2000 },
  siteTypes: [
    { id: "landing-page", label: "Landing Page", description: "A single focused page built to promote one product, service or event.", base: { min: 5000, max: 12000 } },
    { id: "portfolio", label: "Portfolio / Personal Website", description: "A personal site to showcase your work, skills or CV.", base: { min: 8000, max: 18000 } },
    { id: "small-business", label: "Small Business Website", description: "A multi-page site for a small business: services, about, contact.", base: { min: 15000, max: 35000 } },
    { id: "blog-news", label: "Blog / News Website", description: "A content-first site built around regularly published articles.", base: { min: 15000, max: 30000 } },
    { id: "ngo", label: "NGO / Nonprofit Website", description: "A site for an NGO or nonprofit: programmes, impact stories, donations.", base: { min: 20000, max: 45000 } },
    { id: "restaurant-hotel", label: "Restaurant / Hotel Website", description: "A site for a restaurant or hotel: menu, gallery, location, bookings.", base: { min: 15000, max: 35000 } },
    { id: "real-estate", label: "Real Estate Website", description: "A property listings site with search and filtering.", base: { min: 25000, max: 55000 } },
    { id: "church", label: "Church / Religious Organization Website", description: "A site for a church or religious organization: sermons, events, giving.", base: { min: 10000, max: 25000 } },
    { id: "medical-clinic", label: "Medical / Clinic Website", description: "A site for a clinic or medical practice: services, staff, appointments.", base: { min: 20000, max: 45000 } },
    { id: "school", label: "School / Institution Website", description: "A site for a school or institution: programmes, admissions, staff, news.", base: { min: 25000, max: 50000 } },
    { id: "corporate", label: "Corporate Website", description: "A larger, brand-focused site for an established company.", base: { min: 40000, max: 90000 } },
    { id: "ecommerce", label: "E-commerce Website", description: "An online store with a product catalogue, cart and checkout.", base: { min: 25000, max: 80000 } },
    { id: "booking", label: "Booking / Reservation Website", description: "A site built around scheduling appointments, rooms or reservations.", base: { min: 25000, max: 60000 } },
    { id: "trading-education", label: "Trading Education / Signals Website", description: "Courses, memberships, market commentary, signals and embedded charts.", base: { min: 25000, max: 60000 } },
    {
      id: "trading-portal",
      label: "Broker-style Trading Portal",
      description: "Client sign-up, KYC, wallet, dashboards and an integrated third-party terminal (MT5 WebTrader, cTrader, TradingView).",
      base: { min: 45000, max: 90000 },
      notice: "This covers the website and client portal build only. Offering forex broking, crypto trading or handling client funds may require a licence from the Capital Markets Authority (CMA) or Central Bank of Kenya (CBK) under Kenya's forex and Virtual Asset Service Providers rules. Market-data feeds, terminal and liquidity-provider licences and hosting are paid separately, and yearly maintenance is typically 15-20% of the build cost."
    },
    {
      id: "trading-engine",
      label: "Own Trading Engine / Exchange",
      description: "Order matching, liquidity, custody and security audits. Priced per project.",
      base: { min: 0, max: 0 },
      customQuote: true,
      notice: "A platform with its own order matching or custody of client funds is a large custom project (typically well into seven figures in KES) and usually needs regulatory licensing. Contact me for a scoped quote."
    },
    { id: "web-app", label: "Custom Web Application", description: "A custom system built around your workflow.", base: { min: 50000, max: 200000 } }
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
    { id: "seo-setup", label: "On-page SEO setup", cost: { min: 3000, max: 8000 } },

    { id: "trade-data", types: ["trading-education", "trading-portal"], label: "Live market data & charts", cost: { min: 5000, max: 12000 }, note: "TradingView widgets, watchlists, tickers. Data subscriptions are paid to the provider." },
    { id: "trade-binance-data", types: ["trading-education", "trading-portal"], label: "Binance live prices & charts", cost: { min: 6000, max: 15000 }, note: "Live tickers, candlestick charts and order book from Binance's public market data (no API key needed). Replaces the generic market data add-on if you use Binance." },
    { id: "trade-binance-connect", types: ["trading-portal"], label: "Binance account connection (portfolio view)", cost: { min: 20000, max: 45000 }, note: "Users link their own Binance API keys to see balances and trade history. Keys are encrypted and stored server-side, so a backend server is required (hosting paid separately)." },
    { id: "trade-binance-trade", types: ["trading-portal"], label: "Place Binance orders from your site", cost: { min: 35000, max: 80000 }, note: "Buy/sell orders, order status and error handling, tested on Binance Testnet first. May trigger licensing under Kenya's Virtual Asset Service Providers Act, so confirm before launch." },
    { id: "trade-membership", types: ["trading-education"], label: "Course & membership area", cost: { min: 12000, max: 25000 }, note: "Gated lessons, video content, member-only pages. Add Online payments for paid memberships." },
    { id: "trade-signals", types: ["trading-education"], label: "Signals feed & subscriptions", cost: { min: 15000, max: 35000 }, note: "Post trade signals, notify subscribers, manage paid plans." },
    { id: "trade-journal", types: ["trading-education", "trading-portal"], label: "Trading journal & analytics", cost: { min: 8000, max: 18000 }, note: "Performance stats, trade logs and charts." },
    { id: "trade-alerts", types: ["trading-education", "trading-portal"], label: "Price alerts & notifications", cost: { min: 5000, max: 12000 }, note: "Email, SMS or push alerts. SMS credits are paid to the SMS provider." },
    { id: "trade-referral", types: ["trading-education", "trading-portal"], label: "Referral / affiliate system", cost: { min: 10000, max: 20000 }, note: "Referral links, commission tracking and payouts." },
    { id: "trade-compliance", types: ["trading-education", "trading-portal"], label: "Risk disclosure & compliance pages", cost: { min: 3000, max: 8000 }, note: "Terms, risk warning and privacy pages. Have a lawyer review them." },

    { id: "trade-kyc", types: ["trading-portal"], label: "Trader accounts & KYC verification", cost: { min: 10000, max: 22000 }, note: "Registration, login, ID and selfie upload, admin approval. Includes login, so no need to also add User accounts." },
    { id: "trade-wallet", types: ["trading-portal"], label: "Wallet: deposits & withdrawals", cost: { min: 15000, max: 30000 }, note: "M-Pesa, card and bank funding with a transaction ledger. Includes payments, so no need to also add Online payments. Gateway fees are paid to the provider." },
    { id: "trade-terminal", types: ["trading-portal"], label: "Trading terminal integration", cost: { min: 15000, max: 35000 }, note: "Embed or link MT4/MT5 WebTrader, cTrader or similar. Terminal and broker licences are paid separately." },
    { id: "trade-dashboard", types: ["trading-portal"], label: "Client portfolio dashboard", cost: { min: 25000, max: 60000 }, note: "Positions, balance, P&L and history pulled from the broker or terminal API." },
    { id: "trade-copy", types: ["trading-portal"], label: "Copy trading / signals", cost: { min: 25000, max: 50000 }, note: "Follow traders, signal feed, subscriptions." },
    { id: "trade-admin", types: ["trading-portal"], label: "Trading admin back-office", cost: { min: 20000, max: 45000 }, note: "User management, approvals, reports. Includes an admin dashboard." },
    { id: "trade-security", types: ["trading-portal"], label: "Security hardening", cost: { min: 10000, max: 25000 }, note: "2FA, audit logs, rate limiting, encryption at rest." }
  ],
  design: [
    { id: "template", label: "Template-based design", cost: { min: 0, max: 0 } },
    { id: "custom", label: "Fully custom design", cost: { min: 5000, max: 15000 } }
  ]
};
