import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle, 
  ArrowLeft, 
  Zap, 
  Target, 
  Code, 
  HelpCircle, 
  MessageSquareQuote,
  Building2,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Factory,
  TrendingUp,
  Globe,
  Award,
  Shield,
  Clock,
  Users,
  Sparkles,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { QuoteDialog } from "@/components/quote-dialog";

interface FAQ {
  question: string;
  answer: string;
}

interface SEOProps {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image";
  canonicalUrl?: string;
  noIndex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

interface ServiceDetailProps {
  title: string;
  description: string;
  longDescription?: string;
  features: string[];
  benefits?: string[];
  useCases?: string[];
  technologies?: string[];
  faqs?: FAQ[];
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  seo?: SEOProps;
  // Legacy props for backward compatibility
  metaTitle?: string;
  metaDescription?: string;
  startingPrice?: string; // Minimum market charges
}

const BASE_URL = "https://www.techvexor.com";
const DEFAULT_OG_IMAGE = "https://www.techvexor.com/og-services.jpg";
const SITE_NAME = "Tech Vexor";

export function ServiceDetailSection({
  title,
  description,
  longDescription,
  features,
  benefits = [],
  useCases = [],
  technologies = [],
  faqs = [],
  subtitle,
  ctaLabel = "Get a Free Consultation",
  ctaHref = "/contact",
  seo,
  metaTitle,
  metaDescription,
  startingPrice,
}: ServiceDetailProps) {
  const location = useLocation();
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  
  // Merge legacy props with new SEO props
  const finalMetaTitle = seo?.metaTitle || metaTitle || `${title} | ${SITE_NAME}`;
  const finalMetaDescription = seo?.metaDescription || metaDescription || description;
  const canonicalUrl = seo?.canonicalUrl || `${BASE_URL}${location.pathname}`;
  const ogImage = seo?.ogImage || DEFAULT_OG_IMAGE;
  const ogType = seo?.ogType || "website";
  const twitterCard = seo?.twitterCard || "summary_large_image";
  const metaKeywords = seo?.metaKeywords || "";
  
  usePageTitle(finalMetaTitle, { suffix: null });

  // Comprehensive SEO meta tags
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
    setMetaTag("description", finalMetaDescription);
    if (metaKeywords) {
      setMetaTag("keywords", metaKeywords);
    }
    if (seo?.author) {
      setMetaTag("author", seo.author);
    }
    if (seo?.noIndex) {
      setMetaTag("robots", "noindex, nofollow");
    } else {
      setMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    }

    // Canonical URL
    setLinkTag("canonical", canonicalUrl);

    // Open Graph tags
    setMetaTag("og:title", finalMetaTitle, true);
    setMetaTag("og:description", finalMetaDescription, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:url", canonicalUrl, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:image:width", "1200", true);
    setMetaTag("og:image:height", "630", true);
    setMetaTag("og:site_name", SITE_NAME, true);
    setMetaTag("og:locale", "en_US", true);

    // Twitter Card tags
    setMetaTag("twitter:card", twitterCard);
    setMetaTag("twitter:title", finalMetaTitle);
    setMetaTag("twitter:description", finalMetaDescription);
    setMetaTag("twitter:image", ogImage);
    setMetaTag("twitter:site", "@techvexor");
    setMetaTag("twitter:creator", "@techvexor");

    // Article metadata (if provided)
    if (seo?.publishedTime) {
      setMetaTag("article:published_time", seo.publishedTime, true);
    }
    if (seo?.modifiedTime) {
      setMetaTag("article:modified_time", seo.modifiedTime, true);
    }

    // JSON-LD Structured Data for Service
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title,
      "description": finalMetaDescription,
      "provider": {
        "@type": "Organization",
        "name": SITE_NAME,
        "url": BASE_URL,
        "logo": `${BASE_URL}/vexor1.svg`,
        "sameAs": [
          "https://twitter.com/techvexor",
          "https://linkedin.com/company/techvexor",
          "https://github.com/techvexor"
        ]
      },
      "serviceType": title,
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${title} Services`,
        "itemListElement": features.slice(0, 5).map((feature, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": feature
          },
          "position": index + 1
        }))
      },
      "url": canonicalUrl
    };

    // FAQ Schema if FAQs exist
    const faqSchema = faqs.length > 0 ? {
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
    } : null;

    // BreadcrumbList Schema
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
          "item": `${BASE_URL}/services`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": title,
          "item": canonicalUrl
        }
      ]
    };

    // Remove existing JSON-LD scripts
    document.querySelectorAll('script[type="application/ld+json"][data-service-seo]').forEach(el => el.remove());

    // Add Service Schema
    const serviceScript = document.createElement("script");
    serviceScript.type = "application/ld+json";
    serviceScript.setAttribute("data-service-seo", "true");
    serviceScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);

    // Add FAQ Schema if exists
    if (faqSchema) {
      const faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.setAttribute("data-service-seo", "true");
      faqScript.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(faqScript);
    }

    // Add Breadcrumb Schema
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.setAttribute("data-service-seo", "true");
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    // Cleanup on unmount
    return () => {
      document.querySelectorAll('script[type="application/ld+json"][data-service-seo]').forEach(el => el.remove());
    };
  }, [finalMetaTitle, finalMetaDescription, canonicalUrl, ogImage, ogType, twitterCard, metaKeywords, title, features, faqs, seo]);

  return (
    <div className="min-h-screen bg-white">
      <QuoteDialog 
        open={quoteDialogOpen} 
        onOpenChange={setQuoteDialogOpen}
        serviceTitle={title}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Link to="/services" className="inline-flex items-center text-slate-300 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>
          <div className="max-w-4xl">
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                <Award className="w-3.5 h-3.5" />
                500+ Projects Delivered
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                <Users className="w-3.5 h-3.5" />
                Trusted by Global Brands
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                <Shield className="w-3.5 h-3.5" />
                Enterprise-Grade Quality
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
            {subtitle && (
              <p className="text-xl text-orange-400 font-medium mb-4">{subtitle}</p>
            )}
            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">{description}</p>
            
            {startingPrice && (
              <div className="mb-8 inline-block">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                  <p className="text-sm text-slate-300 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-white">{startingPrice}</p>
                  <p className="text-xs text-slate-400 mt-1">*Market competitive rates</p>
                </div>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-4">
              <GradientButton asChild size="lg">
                <Link to={ctaHref}>{ctaLabel}</Link>
              </GradientButton>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setQuoteDialogOpen(true)}
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                <MessageSquareQuote className="w-4 h-4 mr-2" />
                Get Instant Quote
              </Button>
              <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                Explore All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      {longDescription && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold mb-4">
                  SERVICE OVERVIEW
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  What We Offer
                </h2>
              </div>
              <div className="prose prose-lg prose-slate max-w-none">
                {longDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-slate-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features & Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">What We Deliver</h2>
              </div>
              <ul className="space-y-4">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Key Benefits</h2>
              </div>
              <ul className="space-y-4">
                {benefits.length > 0 ? (
                  benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-slate-600">Tailored to your goals with measurable outcomes.</li>
                )}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      {useCases.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Common Use Cases</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See how businesses like yours leverage our {title.toLowerCase()} services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-orange-600 font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-slate-700 font-medium">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries We Serve Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We deliver exceptional {title.toLowerCase()} solutions for businesses of all sizes and sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, name: "Startups", desc: "MVP to Scale" },
              { icon: Building2, name: "SMEs", desc: "Growth Solutions" },
              { icon: Briefcase, name: "Enterprises", desc: "Enterprise Grade" },
              { icon: ShoppingCart, name: "E-commerce", desc: "Online Stores" },
              { icon: Factory, name: "Manufacturing", desc: "Industrial Tech" },
              { icon: HeartPulse, name: "Healthcare", desc: "HIPAA Compliant" },
              { icon: GraduationCap, name: "Education", desc: "EdTech Solutions" },
              { icon: Building2, name: "Real Estate", desc: "Property Portals" },
              { icon: TrendingUp, name: "Finance", desc: "FinTech Ready" },
              { icon: Globe, name: "Global Clients", desc: "Worldwide Reach" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="group p-5 bg-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-orange-200 group-hover:to-orange-100 transition-colors">
                  <industry.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{industry.name}</h3>
                <p className="text-xs text-slate-500">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tech Vexor Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
              WHY TECH VEXOR
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Us for {title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience, expertise, and excellence in every project we deliver
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: Award, 
                title: "Proven Expertise", 
                desc: "500+ successful projects delivered with 98% client satisfaction rate. Industry-recognized expertise since 2020." 
              },
              { 
                icon: Code, 
                title: "Latest Technology Stack", 
                desc: "We use cutting-edge frameworks and tools - React, Next.js, Node.js, AI/ML - to build future-proof solutions." 
              },
              { 
                icon: Shield, 
                title: "Enterprise-Grade Security", 
                desc: "ISO-compliant development practices with regular security audits, GDPR/HIPAA compliance, and data protection." 
              },
              { 
                icon: TrendingUp, 
                title: "Transparent Pricing", 
                desc: "No hidden costs. Clear milestones, detailed proposals, and flexible engagement models that suit your budget." 
              },
              { 
                icon: Globe, 
                title: "Global Delivery", 
                desc: "Serving clients in US, UK, Canada, India, and 20+ countries with seamless communication across time zones." 
              },
              { 
                icon: Clock, 
                title: "Long-Term Partnership", 
                desc: "Dedicated support, maintenance packages, and strategic guidance to ensure your continued success." 
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact / ROI Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Business Impact
            </h2>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
              Our {title.toLowerCase()} solutions deliver measurable ROI
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "200-400%", label: "Increase in Organic Traffic" },
              { value: "50-150%", label: "Higher Conversion Rates" },
              { value: "40%", label: "Reduced Bounce Rates" },
              { value: "3x", label: "Faster Time-to-Market" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm text-indigo-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {technologies.length > 0 && (
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl md:text-4xl font-bold">Technologies We Use</h2>
              </div>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We leverage industry-leading tools and frameworks to deliver exceptional results
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 bg-slate-800 rounded-full text-slate-200 font-medium border border-slate-700 hover:border-orange-500 hover:text-orange-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <HelpCircle className="w-8 h-8 text-orange-500" />
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
                </div>
                <p className="text-lg text-slate-600">
                  Get answers to common questions about our {title.toLowerCase()} services
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="border border-slate-200 rounded-lg px-6 bg-white data-[state=open]:border-orange-300 data-[state=open]:shadow-md transition-all"
                  >
                    <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600 py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Internal Links Section */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Explore Related Services</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Digital Marketing", href: "/services/digital-marketing" },
                { name: "AI & ML Solutions", href: "/services/ai-ml" },
                { name: "Mobile App Development", href: "/services/mobile-app-development" },
                { name: "Cloud Solutions", href: "/services/cloud-solutions" },
                { name: "Cybersecurity", href: "/services/cybersecurity" },
                { name: "Custom Software", href: "/services/custom-software" },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  to={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-orange-100 text-slate-700 hover:text-orange-700 rounded-full text-sm font-medium transition-colors"
                >
                  {link.name}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-4">Want to learn more about our services?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/blog" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1">
                  Read Our Blog <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/case-studies" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1">
                  View Case Studies <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how our {title.toLowerCase()} services can drive your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <GradientButton asChild size="lg" className="bg-white text-orange-600 hover:bg-slate-100">
              <Link to={ctaHref}>Schedule Free Consultation</Link>
            </GradientButton>
            <Button
              size="lg"
              onClick={() => setQuoteDialogOpen(true)}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600"
            >
              <MessageSquareQuote className="w-4 h-4 mr-2" />
              Get Instant Quote
            </Button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/90">
            <a href="tel:+919560968078" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              +91 95609 68078
            </a>
            <a href="mailto:info@techvexor.com" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              info@techvexor.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
