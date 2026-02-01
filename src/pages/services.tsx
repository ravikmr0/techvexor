import { ServicesPage } from "@/components/sections/services-page";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.techvexor.com";
const SITE_NAME = "Tech Vexor";

export default function Services() {
  const location = useLocation();
  const metaTitle = "IT Consulting Services & Tech Marketing Solutions | Tech Vexor - All IT Consultants";
  const metaDescription = "Leading IT consulting agency offering comprehensive tech consulting services, marketing technology solutions, cloud computing, AI/ML, cybersecurity, and digital transformation. Expert IT consulting services near you with proven results for small and enterprise businesses.";
  const canonicalUrl = `${BASE_URL}${location.pathname}`;
  
  usePageTitle(metaTitle, { suffix: null });

  useEffect(() => {
    // Helper to set or create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Helper to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (link) {
        link.href = href;
      } else {
        link = document.createElement("link");
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      }
    };

    // Basic meta tags
    setMetaTag("description", metaDescription);
    setMetaTag("keywords", "it consulting services, tech consulting, marketing technology consultant, it consulting agency, all it consulting, tech marketing, it consulting firms near me, it consulting services near me, business consulting services, deloitte it consulting, small it consulting firms, small tech consulting firms, it consulting services inc, it consulting llc, all tech consulting, marketing consulting services, cloud solutions, cybersecurity consulting, digital transformation, ai consulting, it services companies, tech consulting group, small business it consulting, it consulting san antonio, major it consulting firms, all tech marketing");
    setMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Canonical URL
    setLinkTag("canonical", canonicalUrl);

    // Open Graph tags
    setMetaTag("og:title", metaTitle, true);
    setMetaTag("og:description", metaDescription, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:url", canonicalUrl, true);
    setMetaTag("og:image", `${BASE_URL}/og-services.jpg`, true);
    setMetaTag("og:image:width", "1200", true);
    setMetaTag("og:image:height", "630", true);
    setMetaTag("og:site_name", SITE_NAME, true);
    setMetaTag("og:locale", "en_US", true);

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", metaTitle);
    setMetaTag("twitter:description", metaDescription);
    setMetaTag("twitter:image", `${BASE_URL}/og-services.jpg`);
    setMetaTag("twitter:site", "@techvexor");
    setMetaTag("twitter:creator", "@techvexor");

    // JSON-LD Structured Data
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Tech Vexor Services",
      "description": metaDescription,
      "url": canonicalUrl,
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "AI & Machine Learning Development",
            "url": `${BASE_URL}/services-ai-ml`,
            "description": "Build predictive models, recommendation systems, NLP solutions, and computer vision applications"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Custom Software Development",
            "url": `${BASE_URL}/services-custom-software`,
            "description": "Full-stack engineering for web, mobile, and enterprise platforms"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Cloud Services & Infrastructure",
            "url": `${BASE_URL}/services-cloud-solutions`,
            "description": "AWS, Azure, GCP cloud solutions, migration, and DevOps"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "name": "Cybersecurity & Data Protection",
            "url": `${BASE_URL}/services-cybersecurity`,
            "description": "Comprehensive security solutions including threat assessment and compliance"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Service",
            "name": "IT Consulting & Digital Strategy",
            "url": `${BASE_URL}/services-it-consulting`,
            "description": "Strategic guidance for digital transformation and technology roadmaps"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Service",
            "name": "AI Chatbot & Conversational AI",
            "url": `${BASE_URL}/services-ai-agents-chatbots`,
            "description": "LLM-powered chatbots and conversational AI solutions"
          }
        }
      ]
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": canonicalUrl
        }
      ]
    };

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": SITE_NAME,
      "url": BASE_URL,
      "logo": `${BASE_URL}/vexor1.svg`,
      "description": "AI Transformation & IT Consulting Agency specializing in technology consulting services, marketing technology, AI solutions, cloud infrastructure, cybersecurity, and digital business transformation for enterprises and small businesses",
      "sameAs": [
        "https://twitter.com/techvexor",
        "https://linkedin.com/company/techvexor",
        "https://github.com/techvexor"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "url": `${BASE_URL}/contact`
      }
    };

    // Remove existing JSON-LD scripts
    document.querySelectorAll('script[type="application/ld+json"][data-services-seo]').forEach(el => el.remove());

    // Add schemas
    [servicesSchema, breadcrumbSchema, organizationSchema].forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-services-seo", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[type="application/ld+json"][data-services-seo]').forEach(el => el.remove());
    };
  }, [canonicalUrl]);

  return (
    <>
      <Header />
      <ServicesPage />
      <Footer />
    </>
  );
}
