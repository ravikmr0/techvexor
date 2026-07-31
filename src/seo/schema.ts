import { SITE_URL } from "./canonical";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tech Vexor",
    url: SITE_URL,
    logo: `${SITE_URL}/vexor1.svg`,
    sameAs: [
      "https://www.linkedin.com/company/techvexor",
      "https://twitter.com/techvexor",
      "https://github.com/techvexor",
    ],
    description:
      "Tech Vexor builds websites, AI solutions, digital marketing systems, and custom software for growth-focused businesses.",
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tech Vexor",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema(service: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Tech Vexor",
      url: SITE_URL,
    },
    url: service.url,
    areaServed: "Worldwide",
  };
}

export function generateProductSchema(product: { name: string; description: string; url: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    url: product.url,
    brand: {
      "@type": "Brand",
      name: "Tech Vexor",
    },
  };
}

export function generateArticleSchema(article: { title: string; description: string; url: string; image: string; datePublished: string; dateModified?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: "Tech Vexor",
    },
    publisher: {
      "@type": "Organization",
      name: "Tech Vexor",
      logo: `${SITE_URL}/vexor1.svg`,
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
