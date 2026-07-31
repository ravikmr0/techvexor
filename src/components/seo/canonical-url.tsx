import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getCanonicalUrl, getRobotsContent } from "@/seo/canonical";
import { getPageMetadata, siteMetadata } from "@/seo/metadata";
import { generateBreadcrumbSchema, generateOrganizationSchema, generateWebsiteSchema } from "@/seo/schema";

const DEFAULT_IMAGE = siteMetadata.defaultImage;
const SITE_NAME = siteMetadata.siteName;

/**
 * CanonicalUrl component that sets the canonical URL and consistent metadata for the current page.
 */
export function CanonicalUrl() {
  const location = useLocation();
  const metadata = getPageMetadata(location.pathname);
  const canonicalUrl = metadata.canonical;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.techvexor.com/" },
    { name: metadata.title, url: canonicalUrl },
  ]);

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={getRobotsContent(true)} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:site_name" content={metadata.openGraph.siteName} />
      <meta property="og:image" content={metadata.openGraph.images[0].url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.images[0]} />
      <script type="application/ld+json">
        {JSON.stringify(generateOrganizationSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(generateWebsiteSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}

/**
 * Custom SEO component for pages that need specific meta tags.
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
  schema,
}: SEOProps) {
  const location = useLocation();
  const metadata = getPageMetadata(location.pathname);
  const canonicalUrl = metadata.canonical;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : metadata.title;
  const metaDescription = description || metadata.description;
  const metaKeywords = keywords || metadata.keywords;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content={getRobotsContent(true)} />
      )}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title || SITE_NAME} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      {type === "article" && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === "article" && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === "article" && author && <meta property="article:author" content={author} />}
      {schema && Array.isArray(schema)
        ? schema.map((s, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(s)}
            </script>
          ))
        : schema
          ? (
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            )
          : null}
    </Helmet>
  );
}

/**
 * Generate breadcrumb schema.
 */
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

/**
 * Generate FAQ schema.
 */
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

/**
 * Generate service schema.
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
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: service.provider || SITE_NAME,
    },
    areaServed: service.areaServed || "Worldwide",
  };
}

/**
 * Generate article schema for blog posts.
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
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_IMAGE,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}
