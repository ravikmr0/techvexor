import { Services } from "./sections/services";
import { WhyChooseUs } from "./sections/why-choose-us";
import { CaseStudies } from "./sections/case-studies";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Header } from "./header";
import { Hero } from "./sections/hero";
import { AIDemo } from "./sections/ai-demo";
import { UseCases } from "./sections/use-cases";
import { TrustBadges } from "./sections/trust-badges-new";
import { usePageTitle } from "@/hooks/use-page-title";
import { SEO } from "./seo/canonical-url";

// Comprehensive Organization Schema for Google
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.techvexor.com/#organization",
  "name": "Tech Vexor",
  "alternateName": ["TechVexor", "Tech Vexor Solutions", "Tech Vexor IT Company"],
  "url": "https://www.techvexor.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.techvexor.com/vexor1.svg",
    "width": 200,
    "height": 60
  },
  "image": "https://www.techvexor.com/vexor1.svg",
  "description": "Tech Vexor is a leading marketing technology company and IT consulting firm in Noida, Delhi NCR offering website development, digital marketing, lead generation, AI solutions, mobile app development, cloud services, and custom software development. Expert tech marketing consultants for B2B and business consulting services.",
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "Tech Vexor Team"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 62",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6139",
    "longitude": "77.3597"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-7895849990",
      "contactType": "sales",
      "areaServed": ["IN", "US", "GB", "AE", "AU"],
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-7895849990",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/techvexor",
    "https://www.linkedin.com/company/techvexor",
    "https://twitter.com/techvexor",
    "https://www.instagram.com/techvexor",
    "https://www.youtube.com/@techvexor"
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.3597"
    },
    "geoRadius": "50000"
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  }
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.techvexor.com/#website",
  "name": "Tech Vexor - IT Solutions Company",
  "url": "https://www.techvexor.com",
  "publisher": {
    "@id": "https://www.techvexor.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.techvexor.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.techvexor.com/#localbusiness",
  "name": "Tech Vexor - Best IT Company in Noida",
  "image": "https://www.techvexor.com/vexor1.svg",
  "url": "https://www.techvexor.com",
  "telephone": "+91-7895849990",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 62",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6139",
    "longitude": "77.3597"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Yogesh Chaudhary"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Tech Vexor delivered an exceptional website for our engineering consultancy. Highly professional team!"
    }
  ]
};

// Services Schema
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Tech Vexor Services",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Website Development",
      "description": "Professional website development services including responsive design, e-commerce, CMS, SEO optimization for businesses in Noida, Delhi NCR",
      "provider": { "@id": "https://www.techvexor.com/#organization" },
      "areaServed": "India",
      "url": "https://www.techvexor.com/services/website-development"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Digital Marketing",
      "description": "Complete digital marketing services including SEO, PPC, social media marketing, content marketing, email marketing for businesses",
      "provider": { "@id": "https://www.techvexor.com/#organization" },
      "areaServed": "Worldwide",
      "url": "https://www.techvexor.com/services/seo"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Lead Generation",
      "description": "B2B and B2C lead generation services with multi-channel funnels, CRM integration, and performance analytics",
      "provider": { "@id": "https://www.techvexor.com/#organization" },
      "areaServed": "Worldwide",
      "url": "https://www.techvexor.com/services/b2b-b2c-lead-gen"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "AI & Machine Learning Solutions",
      "description": "Custom AI chatbots, machine learning solutions, automation, predictive analytics for enterprise businesses",
      "provider": { "@id": "https://www.techvexor.com/#organization" },
      "areaServed": "Worldwide",
      "url": "https://www.techvexor.com/services/ai-ml"
    },
    {
      "@type": "Service",
      "position": 5,
      "name": "Mobile App Development",
      "description": "iOS and Android mobile app development, React Native, Flutter, cross-platform app development",
      "provider": { "@id": "https://www.techvexor.com/#organization" },
      "areaServed": "Worldwide",
      "url": "https://www.techvexor.com/services/mobile-apps"
    },
    {
      "@type": "Service",
      "position": 6,
      "name": "Cloud Solutions",
      "description": "AWS, Azure, Google Cloud consulting, migration, DevOps, and managed cloud services",
      "provider": { "@id": "https://www.techvexor.com/#organization" },
      "areaServed": "Worldwide",
      "url": "https://www.techvexor.com/services/cloud-solutions"
    }
  ]
};

// Combined Schema
const combinedSchema = [organizationSchema, websiteSchema, localBusinessSchema, servicesSchema];

// Comprehensive SEO Keywords for Google Ranking - Marketing & Tech Consulting Focus
const seoKeywords = `
IT company Noida, IT solutions company Noida, best IT company in Noida, 
marketing company, tech company, it consulting, marketing technology consultant,
marketing tech company, marketing technology company, tech consulting inc,
tech marketing companies, b-tech consulting group, b2b marketing consultant,
business marketing consulting services, b2b tech marketing agency, marketing it company,
technical marketing consultant, email marketing consulting, product marketing consulting,
industrial marketing consultants, it marketing companies, sales marketing consultants,
technology marketing group, technical marketing company, technology marketing companies,
tech marketing consultant, top marketing tech companies, marketing it consulting services,
tech company marketing strategy, marketing and technology consultancy,
website development company Noida, web development services Delhi NCR,
digital marketing agency Noida, SEO company Noida, digital marketing services India,
lead generation company, B2B lead generation services, B2C lead generation,
AI solutions company, machine learning services, AI chatbot development,
mobile app development company Noida, Android app development, iOS app development,
custom software development, software development company Noida,
cloud solutions provider, AWS consulting India, Azure services,
e-commerce website development, Shopify development, WooCommerce development,
React development company, Node.js development, full stack development,
UI/UX design services, graphic design company Noida,
social media marketing, Facebook ads, Google ads, PPC management,
content marketing services, email marketing, brand identity design,
cybersecurity services, IT consulting services,
web design company Delhi, website design Noida, responsive web design,
performance marketing agency, growth marketing, conversion optimization,
startup IT services, enterprise software development,
best digital marketing company India, top IT company Delhi NCR,
affordable website development, professional web services,
solar products supplier, solar panels India, solar inverters,
EV charging stations, power backup solutions, battery solutions
`.trim();

function Home() {
  usePageTitle("Best Marketing Technology Company & IT Consulting | Tech Vexor Noida");

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Best Marketing Technology Company & IT Consulting Firm in Noida | Tech Vexor"
        description="Tech Vexor is a leading tech marketing company and IT consulting firm offering B2B marketing consulting, technology consulting services, website development, digital marketing, AI solutions, and business marketing consulting services in Noida, Delhi NCR. Expert technical marketing consultants for your business growth."
        keywords={seoKeywords}
        schema={combinedSchema}
      />
      <Header />
      <Hero />
      <Services />
      <AIDemo />
      <UseCases />
      <WhyChooseUs />
      <TrustBadges />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
