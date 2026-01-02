import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.techvexor.com";
const DEFAULT_IMAGE = "https://www.techvexor.com/vexor1.svg";
const SITE_NAME = "Tech Vexor";

/**
 * CanonicalUrl component that sets the canonical URL for the current page.
 * This removes query parameters to prevent duplicate content issues in search engines.
 */
export function CanonicalUrl() {
  const location = useLocation();
  
  // Build canonical URL without query parameters
  const canonicalUrl = `${BASE_URL}${location.pathname}`;
  
  // Remove trailing slash except for homepage
  const normalizedUrl = location.pathname === "/" 
    ? `${BASE_URL}/` 
    : canonicalUrl.replace(/\/$/, "");

  return (
    <Helmet>
      <link rel="canonical" href={normalizedUrl} />
    </Helmet>
  );
}

/**
 * Custom SEO component for pages that need specific meta tags
 */
interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  keywords?: string;
  type?: "website" | "article" | "product";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export function SEO({ 
  title, 
  description, 
  image = DEFAULT_IMAGE,
  noindex,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  schema
}: SEOProps) {
  const location = useLocation();
  
  const canonicalUrl = `${BASE_URL}${location.pathname}`;
  const normalizedUrl = location.pathname === "/" 
    ? `${BASE_URL}/` 
    : canonicalUrl.replace(/\/$/, "");

  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | #1 IT Solutions Company in Noida`;
  const metaDescription = description || "Tech Vexor is a leading IT solutions company offering custom software development, AI/ML solutions, cloud services, and digital marketing.";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={normalizedUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={normalizedUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title || SITE_NAME} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={normalizedUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* JSON-LD Schema */}
      {schema && Array.isArray(schema) ? (
        schema.map((s, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(s)}
          </script>
        ))
      ) : schema ? (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ) : null}
    </Helmet>
  );
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate service schema
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": service.provider || SITE_NAME
    },
    "areaServed": service.areaServed || "Worldwide"
  };
}

/**
 * Generate article schema for blog posts
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": DEFAULT_IMAGE
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
}
