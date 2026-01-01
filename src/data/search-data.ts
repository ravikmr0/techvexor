import { serviceGroups, ServiceEntry } from "./services-catalog";
import { industryGroups, IndustryEntry } from "./industry-catalog";

export type SearchResultType =
  | "service"
  | "industry"
  | "project"
  | "pricing"
  | "case-study"
  | "page";

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  url: string;
  category?: string;
  tags?: string[];
  price?: string;
  keywords?: string[];
}

// Projects data
const projects = [
  {
    id: "proj-1",
    title: "AI-Powered Financial Analytics Platform",
    description:
      "A comprehensive financial analytics solution using machine learning algorithms to predict market trends and optimize investment strategies.",
    tags: ["AI & ML", "Finance", "Data Analytics"],
    category: "AI Solutions",
  },
  {
    id: "proj-2",
    title: "Healthcare Management System",
    description:
      "An integrated healthcare platform that streamlines patient management, appointment scheduling, and medical record keeping for hospitals and clinics.",
    tags: ["Healthcare", "Web Application", "Cloud"],
    category: "Software Development",
  },
  {
    id: "proj-3",
    title: "E-Commerce Mobile Application",
    description:
      "A feature-rich mobile shopping application with personalized recommendations, secure payment processing, and real-time inventory management.",
    tags: ["Mobile App", "E-Commerce", "UI/UX"],
    category: "Mobile Development",
  },
  {
    id: "proj-4",
    title: "Smart City Infrastructure Management",
    description:
      "An IoT-based solution for monitoring and managing urban infrastructure, including traffic systems, public utilities, and environmental sensors.",
    tags: ["IoT", "Smart City", "Infrastructure"],
    category: "IoT Solutions",
  },
  {
    id: "proj-5",
    title: "Secure Banking Portal",
    description:
      "A highly secure online banking platform with advanced encryption, multi-factor authentication, and real-time fraud detection capabilities.",
    tags: ["Cybersecurity", "Banking", "Web Application"],
    category: "Cybersecurity",
  },
  {
    id: "proj-6",
    title: "Supply Chain Management System",
    description:
      "A blockchain-based supply chain solution that ensures transparency, traceability, and efficiency across the entire logistics network.",
    tags: ["Blockchain", "Supply Chain", "Enterprise"],
    category: "Blockchain Solutions",
  },
];

// Pricing data - comprehensive catalog
const pricingItems = [
  // IT & Software Solutions
  { id: "price-website", name: "Website Development (Static/CMS)", price: "₹25,000–₹1,20,000", category: "IT & Software Solutions", features: ["Responsive UI", "Basic SEO & analytics", "Forms & integrations"] },
  { id: "price-ecommerce", name: "Custom/E‑commerce/Marketplace", price: "₹1,20,000–₹6,00,000+", category: "IT & Software Solutions", features: ["Catalog & payments", "Shipping/tax setup", "Performance & SEO"] },
  { id: "price-webapp", name: "Web Application Development", price: "₹2,00,000–₹12,00,000+", category: "IT & Software Solutions", features: ["TypeScript/React", "Secure APIs", "CI/CD & monitoring"] },
  { id: "price-mobile", name: "Mobile App Development (Android/iOS/Hybrid)", price: "₹3,00,000–₹15,00,000+", category: "IT & Software Solutions", features: ["Auth, push, in‑app", "Offline‑first", "Store publishing"] },
  { id: "price-erp", name: "ERP/CRM Solutions", price: "₹4,00,000–₹25,00,000+", category: "IT & Software Solutions", features: ["Data migration", "Workflows & training", "Integrations"] },
  { id: "price-saas", name: "SaaS Development", price: "₹6,00,000–₹30,00,000+", category: "IT & Software Solutions", features: ["Billing/subscriptions", "Admin consoles", "Observability"] },
  { id: "price-api", name: "API Development & Integrations", price: "₹1,00,000–₹6,00,000+", category: "IT & Software Solutions", features: ["Rate‑limits & caching", "Webhooks", "Docs & testing"] },
  { id: "price-cloud", name: "Cloud Services (AWS/Azure/GCP)", price: "₹25,000–₹2,50,000+", category: "IT & Software Solutions", features: ["IaC (Terraform)", "Monitoring & SRE", "Backup & DR"] },
  { id: "price-consulting", name: "IT Consulting & Strategy", price: "₹50,000–₹5,00,000", category: "IT & Software Solutions", features: ["Discovery & architecture", "Prioritized initiatives", "Change mgmt"] },
  { id: "price-cybersecurity", name: "Cybersecurity & Data Protection", price: "₹1,50,000–₹10,00,000+", category: "IT & Software Solutions", features: ["Threat modeling", "IAM & encryption", "Pentest & runbooks"] },
  { id: "price-amc", name: "IT Support & Maintenance (AMC)", price: "₹15,000–₹1,50,000/mo", category: "IT & Software Solutions", features: ["SLA helpdesk", "Patching/backup", "24×7 monitoring"] },
  { id: "price-qa", name: "Software Testing & QA", price: "₹80,000–₹6,00,000+", category: "IT & Software Solutions", features: ["Unit/E2E", "Perf & security", "CI gates"] },
  { id: "price-chatbot", name: "Chatbot & AI Automation", price: "₹1,50,000–₹12,00,000+", category: "IT & Software Solutions", features: ["Private data RAG", "Guardrails", "Analytics"] },
  
  // Digital Marketing
  { id: "price-seo", name: "SEO (On/Off/Technical)", price: "₹25,000–₹90,000/mo", category: "Digital Marketing", features: ["Technical fixes", "Content & schema", "Authority building"] },
  { id: "price-aso", name: "ASO (App Store Optimization)", price: "₹15,000–₹45,000/mo", category: "Digital Marketing", features: ["Metadata & visuals", "A/B testing", "Review strategy"] },
  { id: "price-paid-ads", name: "Paid Advertising (Search/Display/Programmatic)", price: "₹30,000–₹1,50,000/mo", category: "Digital Marketing", features: ["Account structure", "Creatives/LPs", "Attribution"] },
  { id: "price-social", name: "Social Media Management", price: "₹12,000–₹90,000/mo", category: "Digital Marketing", features: ["Calendars & design", "Scheduling & UGC", "Reporting"] },
  { id: "price-social-ads", name: "Social Media Advertising", price: "₹25,000–₹1,00,000/mo", category: "Digital Marketing", features: ["Audience & creatives", "Testing", "Optimization"] },
  { id: "price-email", name: "Email Marketing & Automation", price: "₹20,000–₹75,000/mo", category: "Digital Marketing", features: ["ESP setup", "Journeys", "Deliverability"] },
  { id: "price-whatsapp", name: "WhatsApp/SMS Marketing", price: "₹15,000–₹60,000/mo", category: "Digital Marketing", features: ["Opt‑ins & templates", "Segmentation", "Analytics"] },
  { id: "price-content", name: "Content Marketing & Copywriting", price: "₹25,000–₹1,00,000/mo", category: "Digital Marketing", features: ["Briefs", "Production", "Distribution"] },
  { id: "price-video-marketing", name: "Video Marketing (YouTube/Reels/TikTok)", price: "₹25,000–₹1,00,000/mo", category: "Digital Marketing", features: ["Programming", "Creative kits", "Analytics"] },
  { id: "price-orm", name: "Online Reputation Management (ORM)", price: "₹20,000–₹80,000/mo", category: "Digital Marketing", features: ["Monitoring", "Response playbooks", "Review gen"] },
  { id: "price-influencer", name: "Influencer Marketing", price: "₹30,000–₹1,50,000+/mo", category: "Digital Marketing", features: ["Discovery & contracts", "Briefs", "Measurement"] },
  { id: "price-cro", name: "Conversion Rate Optimization (CRO)", price: "₹35,000–₹1,20,000/mo", category: "Digital Marketing", features: ["Heuristics", "A/B testing", "Personalization"] },
  { id: "price-analytics", name: "Analytics, Tracking & Reporting", price: "₹20,000–₹1,00,000/mo", category: "Digital Marketing", features: ["GTM/GA4", "Attribution", "BI dashboards"] },
  
  // Branding & Design
  { id: "price-logo", name: "Logo & Brand Identity", price: "₹18,000–₹40,000", category: "Branding & Design", features: ["3–4 concepts", "Color/typography", "Assets & exports"] },
  { id: "price-brand-system", name: "Brand Identity System", price: "₹60,000–₹1,50,000", category: "Branding & Design", features: ["Logo suite", "Stationery & social kit", "Guidelines PDF"] },
  { id: "price-uiux", name: "UI/UX Design (Web/Apps)", price: "₹4,000–₹12,000/screen", category: "Branding & Design", features: ["Research & wires", "Components", "Prototypes"] },
  { id: "price-graphic", name: "Graphic Design (Print/Digital)", price: "₹10,000–₹60,000", category: "Branding & Design", features: ["Creatives", "Resize & variants", "Delivery packages"] },
  { id: "price-infographic", name: "Infographics & Illustrations", price: "₹12,000–₹60,000", category: "Branding & Design", features: ["Concept & layout", "Custom art", "Final exports"] },
  { id: "price-packaging", name: "Product & Packaging Design", price: "₹60,000–₹2,50,000", category: "Branding & Design", features: ["Concepts", "Dielines", "Print files"] },
  { id: "price-guidelines", name: "Brand Guidelines Development", price: "₹45,000–₹1,20,000", category: "Branding & Design", features: ["Voice & tone", "Visual rules", "Templates"] },
  { id: "price-pitch-deck", name: "Presentation & Pitch Deck", price: "₹25,000–₹1,20,000", category: "Branding & Design", features: ["Narrative", "Design", "Templates"] },
  
  // Video & Multimedia
  { id: "price-corporate-film", name: "Corporate Films & Brand Stories", price: "₹1,20,000–₹6,00,000+", category: "Video & Multimedia", features: ["Scripting", "Shoot", "Edit & color"] },
  { id: "price-explainer", name: "Explainer Videos (2D/3D/Motion)", price: "₹60,000–₹3,00,000+", category: "Video & Multimedia", features: ["Storyboard", "VO & music", "Mastering"] },
  { id: "price-commercial", name: "Advertisement & Commercial Videos", price: "₹2,00,000–₹12,00,000+", category: "Video & Multimedia", features: ["Concept", "Production", "Formats"] },
  { id: "price-training-video", name: "Training & E‑learning Videos", price: "₹80,000–₹4,00,000+", category: "Video & Multimedia", features: ["SME capture", "Modules", "LMS exports"] },
  { id: "price-event-coverage", name: "Event & Conference Coverage (Live)", price: "₹1,00,000–₹5,00,000+", category: "Video & Multimedia", features: ["Live switch", "Streaming", "Highlights"] },
  { id: "price-short-video", name: "Short‑form Video (Reels/Shorts/TikTok)", price: "₹40,000–₹1,50,000/mo", category: "Video & Multimedia", features: ["Hooks", "Editing", "Scheduling"] },
  { id: "price-drone", name: "Drone Shoot Services", price: "₹35,000–₹1,20,000", category: "Video & Multimedia", features: ["Licensed pilots", "4K/6K", "Compliance"] },
  { id: "price-post-production", name: "Video Editing & Post‑Production", price: "₹20,000–₹1,50,000", category: "Video & Multimedia", features: ["Edits", "Sound design", "Color grade"] },
  
  // Photography
  { id: "price-corporate-photo", name: "Corporate & Team Photography", price: "₹15,000–₹80,000", category: "Photography", features: ["On‑site studio", "Retouching", "Assets"] },
  { id: "price-product-photo", name: "Product Photography", price: "₹20,000–₹1,50,000", category: "Photography", features: ["Lighting", "Styling", "Retouching"] },
  { id: "price-industrial-photo", name: "Industrial & Manufacturing Photography", price: "₹40,000–₹2,00,000", category: "Photography", features: ["Access planning", "Safety", "4K/RAW"] },
  { id: "price-food-photo", name: "Food Photography", price: "₹20,000–₹90,000", category: "Photography", features: ["Styling", "Lighting", "Retouch"] },
  { id: "price-real-estate-photo", name: "Real Estate & Interior Photography", price: "₹25,000–₹1,20,000", category: "Photography", features: ["HDR", "Staging", "Delivery"] },
  
  // Customer Support
  { id: "price-call-center", name: "Inbound/Outbound Call Center", price: "₹18,000–₹45,000/agent/mo", category: "Customer Support", features: ["Dialers & CRM", "Scripts", "QA & reporting"] },
  { id: "price-telesales", name: "Tele‑sales & Lead Follow‑ups", price: "₹20,000–₹50,000/agent/mo", category: "Customer Support", features: ["Cadence", "Qualification", "Handover"] },
  { id: "price-chat-support", name: "WhatsApp/Chat Support", price: "₹18,000–₹45,000/agent/mo", category: "Customer Support", features: ["Bots + agents", "KB", "Analytics"] },
  
  // Lead Generation
  { id: "price-b2b-leads", name: "B2B & B2C Lead Generation", price: "₹30,000–₹1,50,000/mo", category: "Lead Generation", features: ["Paid + organic", "Funnels", "Scoring"] },
  { id: "price-intl-leads", name: "International Lead Generation", price: "₹60,000–₹2,00,000/mo", category: "Lead Generation", features: ["Geo routing", "Privacy", "Localization"] },
  { id: "price-landing-page", name: "Landing Pages & Funnels", price: "₹35,000–₹1,20,000", category: "Lead Generation", features: ["Design & copy", "Integrations", "Testing"] },
  
  // Value-Add Services
  { id: "price-business-consulting", name: "Business Consulting & Growth Strategy", price: "₹60,000–₹3,00,000", category: "Value-Add Services", features: ["Research", "Roadmaps", "PMO"] },
  { id: "price-market-research", name: "Market Research & Competitor Analysis", price: "₹45,000–₹2,00,000", category: "Value-Add Services", features: ["Surveys & interviews", "Competitive scans", "Insights"] },
  { id: "price-hr-support", name: "HR & Recruitment Support", price: "₹35,000–₹1,50,000", category: "Value-Add Services", features: ["ATS", "Assessments", "Onboarding"] },
  { id: "price-event-mgmt", name: "Event Management & Promotion", price: "₹60,000–₹5,00,000", category: "Value-Add Services", features: ["Concept", "Vendors", "Production"] },
  { id: "price-training", name: "Corporate Training (Digital/IT/Marketing)", price: "₹45,000–₹2,50,000", category: "Value-Add Services", features: ["Curriculum", "Labs", "Certification"] },
  { id: "price-payment-gateway", name: "Payment Gateway Integration", price: "₹25,000–₹1,00,000", category: "Value-Add Services", features: ["Razorpay/Stripe", "Subscriptions", "Reconciliation"] },
  { id: "price-whatsapp-bot", name: "WhatsApp Chatbot Automation", price: "₹60,000–₹2,50,000", category: "Value-Add Services", features: ["Templates", "APIs", "Analytics"] },
  { id: "price-local-seo", name: "Local SEO & Google My Business", price: "₹20,000–₹80,000", category: "Value-Add Services", features: ["Listings", "Reviews", "Posts"] },
];

// Case Studies data
const caseStudies = [
  {
    id: "case-1",
    title: "AI-Powered Customer Service Revolution",
    client: "Global E-commerce Platform",
    industry: "E-commerce",
    description:
      "Developed AI chatbots with NLP for 85% faster response times and 60% cost reduction.",
    tags: ["AI Chatbot", "NLP", "Customer Service", "Automation"],
  },
  {
    id: "case-2",
    title: "Predictive Maintenance for Manufacturing",
    client: "Leading Automotive Manufacturer",
    industry: "Manufacturing",
    description:
      "IoT sensors and ML algorithms reduced downtime by 70% and maintenance costs by 45%.",
    tags: ["Predictive Analytics", "IoT", "Machine Learning", "Manufacturing"],
  },
  {
    id: "case-3",
    title: "Fraud Detection System for Banking",
    client: "Regional Banking Institution",
    industry: "Finance",
    description:
      "ML-based fraud detection with 98% accuracy and 75% fewer false positives.",
    tags: ["Machine Learning", "Finance", "Security", "Banking"],
  },
  {
    id: "case-4",
    title: "Digital Transformation for Retail Chain",
    client: "National Retail Chain",
    industry: "Retail",
    description:
      "Complete digital transformation with omnichannel commerce and inventory optimization.",
    tags: ["Digital Transformation", "Retail", "E-commerce", "Omnichannel"],
  },
  {
    id: "case-5",
    title: "Healthcare Data Analytics Platform",
    client: "Hospital Network",
    industry: "Healthcare",
    description:
      "Patient data analytics platform improving outcomes and operational efficiency.",
    tags: ["Healthcare", "Analytics", "Data Platform", "Medical"],
  },
  {
    id: "case-6",
    title: "Supply Chain Optimization with AI",
    client: "Global Logistics Company",
    industry: "Logistics",
    description:
      "AI-driven supply chain optimization reducing delivery times by 35% and costs by 25%.",
    tags: ["Supply Chain", "AI", "Logistics", "Optimization"],
  },
  {
    id: "case-7",
    title: "EdTech Platform Development",
    client: "Online Education Startup",
    industry: "Education",
    description:
      "Built scalable LMS with live classes, assessments, and 500K+ student capacity.",
    tags: ["EdTech", "LMS", "Education", "Web Application"],
  },
  {
    id: "case-8",
    title: "Fintech Payment Gateway",
    client: "Financial Services Startup",
    industry: "Fintech",
    description:
      "Secure payment processing system handling ₹100Cr+ monthly transactions.",
    tags: ["Fintech", "Payments", "Security", "API"],
  },
];

// Pages data
const pages = [
  { id: "page-home", title: "Home", description: "Tech Vexor - IT Solutions & Services", url: "/" },
  { id: "page-services", title: "Services", description: "Our comprehensive IT services and solutions", url: "/services" },
  { id: "page-industries", title: "Industries", description: "Industry-specific solutions and expertise", url: "/industries" },
  { id: "page-projects", title: "Projects", description: "Our portfolio of successful projects", url: "/projects" },
  { id: "page-pricing", title: "Pricing", description: "Transparent pricing for all services", url: "/pricing" },
  { id: "page-case-studies", title: "Case Studies", description: "Success stories and client results", url: "/case-studies" },
  { id: "page-about", title: "About Us", description: "Learn about Tech Vexor", url: "/about" },
  { id: "page-contact", title: "Contact Us", description: "Get in touch with our team", url: "/contact" },
  { id: "page-careers", title: "Careers", description: "Join our team", url: "/careers" },
  { id: "page-blog", title: "Blog", description: "Insights and articles", url: "/blog" },
  { id: "page-ai-solutions", title: "AI Solutions", description: "AI and machine learning services", url: "/ai-solutions" },
];

// Build search index
export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Add services from catalog
  serviceGroups.forEach((group) => {
    group.items.forEach((service: ServiceEntry) => {
      results.push({
        id: `service-${service.slug}`,
        type: "service",
        title: service.title,
        description: service.description,
        url: `/services/${service.slug}`,
        category: group.name,
        tags: service.technologies,
        keywords: service.features?.slice(0, 5),
      });
    });
  });

  // Add industries from catalog
  industryGroups.forEach((group) => {
    group.items.forEach((industry: IndustryEntry) => {
      results.push({
        id: `industry-${industry.slug}`,
        type: "industry",
        title: industry.title,
        description: industry.description,
        url: `/industries/${industry.slug}`,
        category: group.name,
        tags: industry.useCases?.slice(0, 3),
        keywords: industry.keywords,
      });
    });
  });

  // Add projects
  projects.forEach((project) => {
    results.push({
      id: project.id,
      type: "project",
      title: project.title,
      description: project.description,
      url: "/projects",
      category: project.category,
      tags: project.tags,
    });
  });

  // Add pricing items
  pricingItems.forEach((item) => {
    results.push({
      id: item.id,
      type: "pricing",
      title: item.name,
      description: item.features.join(", "),
      url: "/pricing",
      category: item.category,
      price: item.price,
      tags: item.features,
    });
  });

  // Add case studies
  caseStudies.forEach((study) => {
    results.push({
      id: study.id,
      type: "case-study",
      title: study.title,
      description: study.description,
      url: "/case-studies",
      category: study.industry,
      tags: study.tags,
    });
  });

  // Add pages
  pages.forEach((page) => {
    results.push({
      id: page.id,
      type: "page",
      title: page.title,
      description: page.description,
      url: page.url,
    });
  });

  return results;
}

// Search function
export function searchAll(query: string, limit: number = 20): SearchResult[] {
  if (!query || query.trim().length < 2) return [];

  const searchIndex = buildSearchIndex();
  const normalizedQuery = query.toLowerCase().trim();
  const queryTerms = normalizedQuery.split(/\s+/);

  const scoredResults = searchIndex.map((item) => {
    let score = 0;
    const titleLower = item.title.toLowerCase();
    const descLower = item.description.toLowerCase();
    const categoryLower = (item.category || "").toLowerCase();
    const tagsLower = (item.tags || []).map((t) => t.toLowerCase()).join(" ");
    const keywordsLower = (item.keywords || []).map((k) => k.toLowerCase()).join(" ");
    const priceLower = (item.price || "").toLowerCase();

    // Exact title match
    if (titleLower === normalizedQuery) {
      score += 100;
    }

    // Title starts with query
    if (titleLower.startsWith(normalizedQuery)) {
      score += 50;
    }

    // Title contains query
    if (titleLower.includes(normalizedQuery)) {
      score += 30;
    }

    // Check each query term
    queryTerms.forEach((term) => {
      if (titleLower.includes(term)) score += 20;
      if (descLower.includes(term)) score += 10;
      if (categoryLower.includes(term)) score += 15;
      if (tagsLower.includes(term)) score += 12;
      if (keywordsLower.includes(term)) score += 8;
      if (priceLower.includes(term)) score += 5;
    });

    // Boost certain types
    if (item.type === "service") score *= 1.2;
    if (item.type === "pricing") score *= 1.1;

    return { ...item, score };
  });

  return scoredResults
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// Get search results grouped by type
export function searchGrouped(query: string): Record<SearchResultType, SearchResult[]> {
  const results = searchAll(query, 50);
  
  const grouped: Record<SearchResultType, SearchResult[]> = {
    service: [],
    industry: [],
    project: [],
    pricing: [],
    "case-study": [],
    page: [],
  };

  results.forEach((result) => {
    if (grouped[result.type].length < 5) {
      grouped[result.type].push(result);
    }
  });

  return grouped;
}
