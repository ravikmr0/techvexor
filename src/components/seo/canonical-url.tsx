import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.techvexor.com";

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
}

export function SEO({ title, description, image, noindex }: SEOProps) {
  const location = useLocation();
  
  const canonicalUrl = `${BASE_URL}${location.pathname}`;
  const normalizedUrl = location.pathname === "/" 
    ? `${BASE_URL}/` 
    : canonicalUrl.replace(/\/$/, "");

  return (
    <Helmet>
      <link rel="canonical" href={normalizedUrl} />
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {title && <meta property="twitter:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {description && <meta property="twitter:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="twitter:image" content={image} />}
      <meta property="og:url" content={normalizedUrl} />
      <meta property="twitter:url" content={normalizedUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
