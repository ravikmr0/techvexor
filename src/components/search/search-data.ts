import { serviceGroups, ServiceEntry } from "@/data/services-catalog";
import { industryGroups, IndustryEntry } from "@/data/industry-catalog";

export type SearchResultType = "service" | "project" | "pricing" | "industry" | "page";

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  url: string;
  category?: string;
  tags?: string[];
  price?: string;
}

// Projects data
const projects = [
  {
    id: "proj-1",
    title: "AI-Powered E-commerce Platform",
    description: "Comprehensive e-commerce solution with AI-driven product recommendations, inventory management, and customer analytics.",
    tags: ["React", "Node.js", "AI/ML", "E-commerce"],
    client: "RetailTech Solutions",
  },
  {
    id: "proj-2",
    title: "Smart Healthcare Management System",
    description: "Integrated healthcare platform featuring patient management, appointment scheduling, and AI-assisted diagnostics.",
    tags: ["Healthcare", "AI", "React", "Python"],
    client: "MedCare Network",
  },
  {
    id: "proj-3",
    title: "Financial Analytics Dashboard",
    description: "Real-time financial analytics and reporting dashboard with predictive modeling and risk assessment.",
    tags: ["FinTech", "Analytics", "Dashboard", "AI"],
    client: "FinanceFlow Inc",
  },
  {
    id: "proj-4",
    title: "Smart Manufacturing IoT Platform",
    description: "IoT-enabled manufacturing platform with predictive maintenance, quality control, and production optimization.",
    tags: ["IoT", "Manufacturing", "Predictive Analytics", "Cloud"],
    client: "Industrial Solutions Ltd",
  },
  {
    id: "proj-5",
    title: "AI Customer Service Chatbot",
    description: "Intelligent chatbot system with natural language processing, sentiment analysis, and seamless human handoff.",
    tags: ["AI", "NLP", "Chatbot", "Customer Service"],
    client: "ServicePro Global",
  },
  {
    id: "proj-6",
    title: "Blockchain Supply Chain Tracker",
    description: "Blockchain-based supply chain management system ensuring transparency, traceability, and authenticity.",
    tags: ["Blockchain", "Supply Chain", "Transparency", "Security"],
    client: "LogiChain Solutions",
  },
];

// Pricing plans data
const pricingPlans = [
  // IT & Software
  { name: "Website Development (Static/CMS)", price: "₹25,000–₹1,20,000", category: "IT & Software", description: "Corporate, portfolio, CMS websites with responsive UI" },
  { name: "Custom/E-commerce/Marketplace", price: "₹1,20,000–₹6,00,000+", category: "IT & Software", description: "Commerce platforms with catalog, payments, and shipping" },
  { name: "Web Application Development", price: "₹2,00,000–₹12,00,000+", category: "IT & Software", description: "SPA/SSR applications with APIs and data integration" },
  { name: "Mobile App Development", price: "₹3,00,000–₹15,00,000+", category: "IT & Software", description: "Android/iOS/Hybrid apps with auth and push notifications" },
  { name: "ERP/CRM Solutions", price: "₹4,00,000–₹25,00,000+", category: "IT & Software", description: "Enterprise resource planning and CRM implementation" },
  { name: "SaaS Development", price: "₹6,00,000–₹30,00,000+", category: "IT & Software", description: "Multi-tenant MVP to scale with billing and subscriptions" },
  { name: "API Development & Integrations", price: "₹1,00,000–₹6,00,000+", category: "IT & Software", description: "OpenAPI, SDKs, webhooks, and documentation" },
  { name: "Cloud Services (AWS/Azure/GCP)", price: "₹25,000–₹2,50,000+", category: "IT & Software", description: "Setup, IaC, monitoring, and disaster recovery" },
  { name: "Cybersecurity & Data Protection", price: "₹1,50,000–₹10,00,000+", category: "IT & Software", description: "Threat modeling, IAM, encryption, and pentesting" },
  { name: "Chatbot & AI Automation", price: "₹1,50,000–₹12,00,000+", category: "IT & Software", description: "LLM/RAG bots with private data and analytics" },
  
  // Digital Marketing
  { name: "SEO (On/Off/Technical)", price: "₹25,000–₹90,000/mo", category: "Digital Marketing", description: "Technical fixes, content, schema, and authority building" },
  { name: "Paid Advertising", price: "₹30,000–₹1,50,000/mo", category: "Digital Marketing", description: "Search, display, and programmatic campaign management" },
  { name: "Social Media Management", price: "₹12,000–₹90,000/mo", category: "Digital Marketing", description: "Content calendars, scheduling, and community management" },
  { name: "Email Marketing & Automation", price: "₹20,000–₹75,000/mo", category: "Digital Marketing", description: "ESP setup, journeys, and deliverability optimization" },
  { name: "Content Marketing & Copywriting", price: "₹25,000–₹1,00,000/mo", category: "Digital Marketing", description: "Editorial production and distribution" },
  { name: "Influencer Marketing", price: "₹30,000–₹1,50,000+/mo", category: "Digital Marketing", description: "Creator discovery, contracts, and measurement" },
  
  // Branding & Design
  { name: "Logo & Brand Identity", price: "₹18,000–₹40,000", category: "Branding & Design", description: "Logo concepts with color and typography" },
  { name: "Brand Identity System", price: "₹60,000–₹1,50,000", category: "Branding & Design", description: "Complete brand system with guidelines" },
  { name: "UI/UX Design", price: "₹4,000–₹12,000/screen", category: "Branding & Design", description: "Research, wireframes, components, and prototypes" },
  { name: "Graphic Design", price: "₹10,000–₹60,000", category: "Branding & Design", description: "Campaign creatives and social media kits" },
  
  // Video & Multimedia
  { name: "Corporate Films & Brand Stories", price: "₹1,20,000–₹6,00,000+", category: "Video & Multimedia", description: "Script to edit with professional production" },
  { name: "Explainer Videos", price: "₹60,000–₹3,00,000+", category: "Video & Multimedia", description: "2D/3D/Whiteboard/Motion animation" },
  { name: "Video Editing & Post-Production", price: "₹20,000–₹1,50,000", category: "Video & Multimedia", description: "Editing, sound design, and color grading" },
];

// Static pages for search
const staticPages = [
  { title: "Home", description: "Tech Vexor - AI-powered IT solutions and digital transformation", url: "/" },
  { title: "Services", description: "Explore our comprehensive IT, marketing, and design services", url: "/services" },
  { title: "Projects", description: "View our portfolio of successful client projects", url: "/projects" },
  { title: "Pricing", description: "Transparent pricing for all our services", url: "/pricing" },
  { title: "Industries", description: "Industry-specific solutions for various sectors", url: "/industries" },
  { title: "Contact Us", description: "Get in touch with our team for a consultation", url: "/contact" },
  { title: "About Us", description: "Learn about Tech Vexor and our mission", url: "/about" },
  { title: "Careers", description: "Join our team and grow with us", url: "/careers" },
  { title: "Blog", description: "Latest insights and articles on technology and business", url: "/blog" },
  { title: "Case Studies", description: "In-depth analysis of our successful projects", url: "/case-studies" },
];

// Build searchable index
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
        tags: service.technologies || service.features?.slice(0, 3),
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
        tags: industry.keywords?.slice(0, 3),
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
      category: project.client,
      tags: project.tags,
    });
  });

  // Add pricing plans
  pricingPlans.forEach((plan, index) => {
    results.push({
      id: `pricing-${index}`,
      type: "pricing",
      title: plan.name,
      description: plan.description,
      url: "/pricing",
      category: plan.category,
      price: plan.price,
    });
  });

  // Add static pages
  staticPages.forEach((page, index) => {
    results.push({
      id: `page-${index}`,
      type: "page",
      title: page.title,
      description: page.description,
      url: page.url,
    });
  });

  return results;
}

// Keyword synonyms and related terms for better single-word search
const keywordSynonyms: Record<string, string[]> = {
  website: ["web", "site", "webpage", "landing", "portal", "static", "cms", "development"],
  web: ["website", "site", "portal", "application", "app"],
  marketing: ["digital marketing", "seo", "advertising", "social media", "content", "campaign", "promotion"],
  lead: ["leads", "lead generation", "conversion", "sales", "crm", "prospect"],
  leads: ["lead", "lead generation", "conversion", "sales", "crm", "prospect"],
  generation: ["lead generation", "leads", "automation", "ai"],
  seo: ["search engine", "optimization", "marketing", "ranking", "google"],
  app: ["application", "mobile", "android", "ios", "software"],
  mobile: ["app", "android", "ios", "application"],
  ecommerce: ["e-commerce", "shop", "store", "marketplace", "retail", "online"],
  "e-commerce": ["ecommerce", "shop", "store", "marketplace", "retail", "online"],
  ai: ["artificial intelligence", "machine learning", "ml", "chatbot", "automation"],
  chatbot: ["ai", "bot", "automation", "customer service", "support"],
  cloud: ["aws", "azure", "gcp", "hosting", "server", "infrastructure"],
  brand: ["branding", "identity", "logo", "design"],
  branding: ["brand", "identity", "logo", "design"],
  design: ["ui", "ux", "graphic", "branding", "creative"],
  video: ["animation", "explainer", "production", "multimedia"],
  social: ["social media", "facebook", "instagram", "linkedin", "twitter"],
  crm: ["customer", "relationship", "management", "lead", "sales"],
  erp: ["enterprise", "resource", "planning", "business"],
  security: ["cybersecurity", "protection", "encryption", "firewall"],
  data: ["analytics", "database", "storage", "backup"],
};

// Search function with fuzzy matching
export function searchContent(query: string, limit = 10): SearchResult[] {
  if (!query || query.trim().length < 1) return [];

  const searchIndex = buildSearchIndex();
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/);
  
  // Expand query with synonyms for single word searches
  const expandedTerms = new Set<string>(queryWords);
  queryWords.forEach((word) => {
    if (keywordSynonyms[word]) {
      keywordSynonyms[word].forEach((synonym) => expandedTerms.add(synonym.toLowerCase()));
    }
  });
  const allSearchTerms = Array.from(expandedTerms);

  // Score each result
  const scored = searchIndex.map((result) => {
    let score = 0;
    const titleLower = result.title.toLowerCase();
    const descLower = result.description.toLowerCase();
    const categoryLower = (result.category || "").toLowerCase();
    const tagsLower = (result.tags || []).map((t) => t.toLowerCase()).join(" ");
    const priceLower = (result.price || "").toLowerCase();
    
    // Create a combined searchable text
    const fullText = `${titleLower} ${descLower} ${categoryLower} ${tagsLower}`;

    // Exact title match - highest priority
    if (titleLower === lowerQuery) score += 100;
    // Title starts with query
    else if (titleLower.startsWith(lowerQuery)) score += 60;
    // Title contains full query
    else if (titleLower.includes(lowerQuery)) score += 40;

    // Check each original query word (higher priority)
    queryWords.forEach((word) => {
      if (word.length < 2) return; // Skip very short words
      
      // Title word match - highest for individual words
      if (titleLower.split(/\s+/).some(w => w === word)) score += 35;
      else if (titleLower.split(/\s+/).some(w => w.startsWith(word))) score += 25;
      else if (titleLower.includes(word)) score += 20;
      
      // Description contains word
      if (descLower.includes(word)) score += 12;
      
      // Category match
      if (categoryLower.includes(word)) score += 10;
      
      // Tags match
      if (tagsLower.includes(word)) score += 8;
    });
    
    // Check expanded synonyms (lower priority than direct matches)
    allSearchTerms.forEach((term) => {
      if (queryWords.includes(term)) return; // Skip original terms (already scored)
      if (term.length < 2) return;
      
      if (titleLower.includes(term)) score += 8;
      if (descLower.includes(term)) score += 5;
      if (categoryLower.includes(term)) score += 4;
      if (tagsLower.includes(term)) score += 3;
    });

    // Boost certain types for relevance
    if (result.type === "service") score += 5;
    if (result.type === "pricing") score += 3;

    return { result, score };
  });

  // Filter and sort
  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.result);
}
