import { serviceGroups, ServiceEntry } from "@/data/services-catalog";
import { industryGroups, IndustryEntry } from "@/data/industry-catalog";
import { products, categories } from "@/data/products-catalog";

export type SearchResultType = "service" | "project" | "product" | "industry" | "page";

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

// Electronics Products data
const electronicsProducts = [
  // Solar Energy Products
  { name: "Solar Panels (Mono PERC, Polycrystalline, Bifacial)", category: "Solar Energy", description: "High-efficiency solar panels for all applications" },
  { name: "Rooftop Solar Systems (Residential & Commercial)", category: "Solar Energy", description: "Complete rooftop solutions with installation support" },
  { name: "Solar Inverters (On-Grid / Off-Grid / Hybrid)", category: "Solar Energy", description: "Convert DC to AC power efficiently" },
  { name: "Solar Charge Controllers (PWM / MPPT)", category: "Solar Energy", description: "Optimize charging from solar panels" },
  { name: "Solar Batteries (Lithium-Ion, Tubular)", category: "Solar Energy", description: "Store solar energy for later use" },
  { name: "Solar Street Lights", category: "Solar Energy", description: "Autonomous outdoor lighting solutions" },
  { name: "Solar Water Heaters", category: "Solar Energy", description: "Hot water systems powered by solar energy" },
  { name: "Solar Pumps (Agriculture & Industrial Use)", category: "Solar Energy", description: "Water pumping solutions for farming and industry" },
  
  // Power Backup & Battery Solutions
  { name: "Inverter Batteries (Tubular / Flat Plate)", category: "Power Backup", description: "Long-lasting batteries for home inverters" },
  { name: "Lithium Battery Packs", category: "Power Backup", description: "Lightweight, high-density energy storage" },
  { name: "UPS Batteries", category: "Power Backup", description: "Reliable backup for computer systems" },
  { name: "Industrial Batteries", category: "Power Backup", description: "Heavy-duty batteries for industrial use" },
  { name: "SMF & VRLA Batteries", category: "Power Backup", description: "Maintenance-free sealed batteries" },
  { name: "Battery Chargers", category: "Power Backup", description: "Smart charging solutions for all battery types" },
  { name: "Battery Monitoring Systems", category: "Power Backup", description: "Real-time battery health monitoring" },
  
  // Inverters & Power Electronics
  { name: "Home Inverters", category: "Inverters & Power", description: "Reliable power backup for homes" },
  { name: "Commercial & Industrial Inverters", category: "Inverters & Power", description: "High-capacity inverters for businesses" },
  { name: "Online / Offline UPS Systems", category: "Inverters & Power", description: "Uninterruptible power supply solutions" },
  { name: "Servo Voltage Stabilizers", category: "Inverters & Power", description: "Protect equipment from voltage fluctuations" },
  { name: "Automatic Voltage Regulators (AVR)", category: "Inverters & Power", description: "Maintain stable voltage output" },
  { name: "Power Distribution Units (PDU)", category: "Inverters & Power", description: "Efficient power distribution for data centers" },
  
  // Electrical & Control Electronics
  { name: "Energy Meters (Smart & Digital)", category: "Electrical Controls", description: "Accurate energy consumption tracking" },
  { name: "Power Monitoring Devices", category: "Electrical Controls", description: "Real-time power quality analysis" },
  { name: "Circuit Breakers (MCB, MCCB)", category: "Electrical Controls", description: "Electrical circuit protection" },
  { name: "Surge Protection Devices (SPD)", category: "Electrical Controls", description: "Protect against voltage spikes" },
  { name: "Control Panels (Solar & Power Panels)", category: "Electrical Controls", description: "Centralized system control and monitoring" },
  
  // Industrial Energy Electronics
  { name: "EV Charging Stations (AC / DC)", category: "Industrial Energy", description: "Fast and slow charging for electric vehicles" },
  { name: "Power Conditioning Units", category: "Industrial Energy", description: "Clean and stable power output" },
  { name: "Load Management Systems", category: "Industrial Energy", description: "Optimize power consumption" },
  { name: "Energy Storage Systems (ESS)", category: "Industrial Energy", description: "Large-scale energy storage solutions" },
];

// Static pages for search
const staticPages = [
  { title: "Home", description: "Tech Vexor - AI-powered IT solutions and digital transformation", url: "/" },
  { title: "Services", description: "Explore our comprehensive IT, marketing, and design services", url: "/services" },
  { title: "Projects", description: "View our portfolio of successful client projects", url: "/projects" },
  { title: "Products", description: "Electronics products - Solar, Power & Energy Systems", url: "/products" },
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

  // Add electronics products from catalog (with individual URLs)
  products.forEach((product) => {
    const categoryName = categories.find(c => c.id === product.category)?.name || product.category;
    results.push({
      id: `product-${product.id}`,
      type: "product",
      title: product.name,
      description: product.description,
      url: `/products/${product.slug}`,
      category: categoryName,
      tags: product.keywords?.slice(0, 3),
      price: product.price,
    });
  });

  // Also add legacy electronics products for broader search coverage
  electronicsProducts.forEach((product, index) => {
    // Skip if already exists in products catalog
    const existsInCatalog = products.some(p => 
      p.name.toLowerCase().includes(product.name.toLowerCase().split(' ')[0])
    );
    if (!existsInCatalog) {
      results.push({
        id: `electronics-${index}`,
        type: "product",
        title: product.name,
        description: product.description,
        url: "/products",
        category: product.category,
      });
    }
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
    if (result.type === "product") score += 3;

    return { result, score };
  });

  // Filter and sort
  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.result);
}
