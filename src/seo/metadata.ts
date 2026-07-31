import { getCanonicalUrl, SITE_URL } from "./canonical";

export const siteMetadata = {
  siteName: "Tech Vexor",
  title: "Tech Vexor | Web Development, AI, SEO & Digital Growth",
  description:
    "Tech Vexor delivers high-performance website development, AI solutions, SEO, digital marketing, and product engineering for growth-focused brands.",
  keywords:
    "website development, AI solutions, SEO services, digital marketing, software development, tech consulting",
  defaultImage: `${SITE_URL}/vexor1.svg`,
};

const pageDefinitions: Record<string, { title: string; description: string; keywords: string }> = {
  "/": {
    title: "Tech Vexor | Web Development, AI, SEO & Digital Growth",
    description:
      "Tech Vexor builds high-performing websites, AI solutions, and growth marketing systems for ambitious businesses.",
    keywords: "website development, AI automation, SEO agency, digital marketing, software solutions",
  },
  "/about": {
    title: "About Tech Vexor | AI, Web & Growth Experts",
    description:
      "Learn how Tech Vexor helps companies accelerate growth through custom software, AI automation, and digital strategy.",
    keywords: "about tech vexo, software agency, AI consulting, web agency",
  },
  "/contact": {
    title: "Contact Tech Vexor | Get a Free Consultation",
    description:
      "Reach Tech Vexor for website development, AI automation, SEO, and growth-focused digital services.",
    keywords: "contact tech vexo, website development consultation, AI service inquiry",
  },
  "/services": {
    title: "Services | Tech Vexor",
    description:
      "Explore Tech Vexor services including web development, mobile apps, AI solutions, SEO, and digital marketing.",
    keywords: "web development services, mobile app development, AI solutions, SEO services",
  },
  "/services/website-development": {
    title: "Website Development Services | Tech Vexor",
    description:
      "Build fast, responsive, SEO-ready websites with Tech Vexor's custom website development services.",
    keywords: "website development services, custom website design, responsive web development",
  },
  "/services/mobile-app-development": {
    title: "Mobile App Development Services | Tech Vexor",
    description:
      "Launch high-performing mobile apps for iOS and Android with Tech Vexor's product-driven development team.",
    keywords: "mobile app development, iOS app development, Android app development",
  },
  "/services/ui-ux-design": {
    title: "UI/UX Design Services | Tech Vexor",
    description:
      "Create intuitive, conversion-focused digital experiences with Tech Vexor's UI and UX design services.",
    keywords: "UI UX design, product design, user experience design",
  },
  "/services/seo": {
    title: "SEO Services | Tech Vexor",
    description:
      "Improve visibility with technical SEO, on-page optimization, link building, and content strategy from Tech Vexor.",
    keywords: "SEO services, technical SEO, local SEO, digital marketing",
  },
  "/services/digital-marketing": {
    title: "Digital Marketing Services | Tech Vexor",
    description:
      "Drive qualified traffic and higher conversions with performance marketing, social media, and paid media strategy.",
    keywords: "digital marketing services, social media marketing, performance marketing",
  },
  "/services/lead-generation": {
    title: "Lead Generation Services | Tech Vexor",
    description:
      "Generate qualified leads with data-driven campaigns, landing pages, automation, and conversion-focused funnel design.",
    keywords: "lead generation services, demand generation, B2B lead generation",
  },
  "/services/ai-solutions": {
    title: "AI Solutions Services | Tech Vexor",
    description:
      "Deploy AI automation, copilots, analytics, and workflow optimization with Tech Vexor's AI solutions team.",
    keywords: "AI solutions, automation services, AI consulting, AI implementation",
  },
  "/industries": {
    title: "Industries We Serve | Tech Vexor",
    description:
      "Discover how Tech Vexor supports industries such as healthcare, retail, finance, manufacturing, and more.",
    keywords: "industries, healthcare software, retail solutions, manufacturing digital transformation",
  },
  "/products": {
    title: "Products | Tech Vexor",
    description:
      "Browse Tech Vexor's solutions for energy, automation, digital platforms, and business growth.",
    keywords: "tech products, software products, AI products, energy products",
  },
  "/projects": {
    title: "Projects | Tech Vexor",
    description:
      "See how Tech Vexor delivers software, automation, and digital transformation projects for modern brands.",
    keywords: "tech projects, software development projects, AI implementation projects",
  },
  "/blog": {
    title: "Blog | Tech Vexor",
    description:
      "Read practical insights on AI, digital growth, software delivery, and performance marketing from Tech Vexor.",
    keywords: "AI blog, technology insights, digital marketing blog, software strategy",
  },
  "/pricing": {
    title: "Pricing | Tech Vexor",
    description:
      "Explore flexible pricing options for website development, AI services, SEO, and digital marketing support.",
    keywords: "SEO pricing, AI services pricing, website development pricing",
  },
  "/careers": {
    title: "Careers | Tech Vexor",
    description:
      "Explore career opportunities at Tech Vexor and join a team creating modern digital products and growth platforms.",
    keywords: "careers, tech jobs, digital jobs, AI jobs",
  },
};

function getPageDefinition(pathname: string) {
  const normalizedPath = pathname && pathname !== "/" ? pathname.replace(/\/$/, "") : "/";

  if (pageDefinitions[normalizedPath]) {
    return pageDefinitions[normalizedPath];
  }

  if (normalizedPath.startsWith("/services/")) {
    return {
      title: "Service Page | Tech Vexor",
      description:
        "Discover how Tech Vexor delivers specialized digital services tailored to modern business growth goals.",
      keywords: "technology services, custom solutions, growth services",
    };
  }

  if (normalizedPath.startsWith("/industries/")) {
    return {
      title: "Industry Solutions | Tech Vexor",
      description:
        "Explore tailored digital solutions for industries seeking better operations, visibility, and growth.",
      keywords: "industry solutions, sector growth, digital transformation",
    };
  }

  if (normalizedPath.startsWith("/blog/")) {
    return {
      title: "Blog Article | Tech Vexor",
      description:
        "Read Tech Vexor's insights on AI, software, growth, and digital transformation.",
      keywords: "blog article, technology insights, digital transformation strategies",
    };
  }

  if (normalizedPath.startsWith("/products/")) {
    return {
      title: "Product Details | Tech Vexor",
      description:
        "Explore Tech Vexor's product offerings built to support growth, automation, and modern operations.",
      keywords: "product details, technology products, business software",
    };
  }

  if (normalizedPath.startsWith("/case-studies/")) {
    return {
      title: "Case Study | Tech Vexor",
      description:
        "See how Tech Vexor delivers measurable outcomes for clients through smart digital initiatives.",
      keywords: "case studies, client success, digital transformation results",
    };
  }

  return pageDefinitions["/"];
}

export function getPageMetadata(pathname = "/") {
  const definition = getPageDefinition(pathname);
  const canonical = getCanonicalUrl(pathname);

  return {
    title: definition.title,
    description: definition.description,
    keywords: definition.keywords,
    canonical,
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
    openGraph: {
      title: definition.title,
      description: definition.description,
      url: canonical,
      type: "website",
      siteName: siteMetadata.siteName,
      images: [{ url: siteMetadata.defaultImage, width: 1200, height: 630, alt: siteMetadata.siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: definition.title,
      description: definition.description,
      images: [siteMetadata.defaultImage],
    },
  };
}
