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
  Mail,
  FileSearch,
  Palette,
  Rocket,
  TestTube,
  Settings,
  CheckCheck,
  Lightbulb,
  BarChart3,
  ArrowUpRight,
  Star,
  Play,
  Newspaper,
  Building,
  Utensils,
  Heart
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
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
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                  alt="Professional website development services - business growth through digital presence"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-xs font-bold">
                          {i}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-medium">Join 500+ happy clients</p>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-xs text-slate-300 ml-1">4.9/5 rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">300%</p>
                    <p className="text-xs text-slate-500">Avg. ROI Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth Visual Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80" 
                  alt="Team collaboration on website development project"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&q=80" 
                  alt="Business growth through digital transformation"
                  className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80" 
                  alt="E-commerce website driving online sales"
                  className="rounded-xl shadow-lg w-full h-48 object-cover -mt-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" 
                  alt="Professional website design for modern businesses"
                  className="rounded-xl shadow-lg w-full h-48 object-cover mt-4"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                WHY INVEST IN A PROFESSIONAL WEBSITE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Your Website is Your Most Powerful Business Asset
              </h2>
              <div className="space-y-4">
                {[
                  { stat: "75%", text: "of consumers judge credibility based on website design" },
                  { stat: "68%", text: "of website visits now come from mobile devices" },
                  { stat: "47%", text: "of users expect pages to load in under 2 seconds" },
                  { stat: "88%", text: "of users won't return after a bad website experience" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600 min-w-[70px]">{item.stat}</div>
                    <p className="text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <GradientButton asChild>
                  <Link to="/contact">Get Your Website Audit - Free <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      {longDescription && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 bg-slate-200 text-slate-600 rounded-full text-sm font-semibold mb-4">
                  SERVICE OVERVIEW
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  What We Offer
                </h2>
              </div>
              <div className="prose prose-lg prose-slate max-w-none">
                {longDescription.split('\n\n').map((paragraph, idx) => {
                  // Check if paragraph starts with ** (bold title)
                  if (paragraph.startsWith('**')) {
                    const parts = paragraph.split('**');
                    return (
                      <div key={idx} className="mb-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{parts[1]}</h3>
                        <p className="text-slate-600 leading-relaxed">{parts[2]}</p>
                      </div>
                    );
                  }
                  // Check for bullet points
                  if (paragraph.includes('• ')) {
                    const lines = paragraph.split('\n');
                    return (
                      <ul key={idx} className="space-y-2 mb-6">
                        {lines.map((line, lineIdx) => (
                          <li key={lineIdx} className="flex items-start gap-2 text-slate-600">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{line.replace('• ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={idx} className="text-slate-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step-by-Step Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
              OUR PROVEN PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Build Your Website
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A transparent, milestone-driven approach that keeps you in control
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  step: "01", 
                  icon: FileSearch, 
                  title: "Discovery & Strategy", 
                  desc: "We analyze your business goals, target audience, and competitors to create a winning digital strategy.",
                  duration: "Week 1"
                },
                { 
                  step: "02", 
                  icon: Palette, 
                  title: "Design & Prototype", 
                  desc: "Our designers create stunning mockups and interactive prototypes for your approval before coding begins.",
                  duration: "Week 2-3"
                },
                { 
                  step: "03", 
                  icon: Code, 
                  title: "Development & Testing", 
                  desc: "We build your website with clean, optimized code and rigorous quality assurance testing.",
                  duration: "Week 3-6"
                },
                { 
                  step: "04", 
                  icon: Rocket, 
                  title: "Launch & Support", 
                  desc: "We deploy your website, provide training, and offer ongoing support to ensure continued success.",
                  duration: "Week 6+"
                },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl font-bold text-slate-200 group-hover:text-indigo-200 transition-colors">{item.step}</span>
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {item.duration}
                    </span>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* Use Cases Section - Premium Enhanced Design */}
      {useCases.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-50"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-200 rounded-full mb-6">
                <Target className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-700">REAL-WORLD APPLICATIONS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Common <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">Use Cases</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See how businesses like yours leverage our {title.toLowerCase()} services
              </p>
            </div>
            
            {/* Use Cases Grid - Premium Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
              {useCases.map((useCase, idx) => {
                const icons = [Building2, ShoppingCart, Rocket, Palette, Newspaper, GraduationCap, HeartPulse, Building, Utensils, Heart];
                const colors = [
                  "from-blue-500 to-indigo-600",
                  "from-orange-500 to-amber-600",
                  "from-purple-500 to-violet-600",
                  "from-pink-500 to-rose-600",
                  "from-teal-500 to-cyan-600",
                  "from-sky-500 to-blue-600",
                  "from-red-500 to-rose-600",
                  "from-amber-500 to-yellow-600",
                  "from-emerald-500 to-green-600",
                  "from-indigo-500 to-purple-600",
                ];
                const IconComponent = icons[idx % icons.length];
                const colorClass = colors[idx % colors.length];
                
                return (
                  <div
                    key={idx}
                    className="group relative"
                  >
                    {/* Animated Border Gradient */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-slate-100">
                      {/* Number Badge */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg z-10">
                        <span className="text-white font-bold text-sm">{idx + 1}</span>
                      </div>
                      
                      {/* Icon with Gradient Background */}
                      <div className={`w-14 h-14 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Use Case Title */}
                      <p className="text-slate-800 font-semibold leading-snug group-hover:text-slate-900 transition-colors">
                        {useCase}
                      </p>
                      
                      {/* Bottom Accent */}
                      <div className={`absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r ${colorClass} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-2xl">
                <div className="text-center sm:text-left">
                  <p className="text-white font-semibold text-lg">Have a unique use case?</p>
                  <p className="text-slate-400 text-sm">We build custom solutions for every business need</p>
                </div>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg hover:shadow-orange-500/25 whitespace-nowrap inline-flex items-center gap-2"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Real Business Case Scenarios Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how businesses transformed their growth with our {title.toLowerCase()}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                industry: "E-commerce Store",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
                challenge: "Outdated website with poor mobile experience causing 70% cart abandonment",
                solution: "Mobile-first redesign with optimized checkout flow",
                results: [
                  { metric: "Sales", before: "₹2L/mo", after: "₹8L/mo", change: "+300%" },
                  { metric: "Cart Abandonment", before: "70%", after: "25%", change: "-45%" },
                ]
              },
              {
                industry: "Healthcare Clinic",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&q=80",
                challenge: "No online presence, losing patients to competitors with digital booking",
                solution: "Professional website with online appointment booking system",
                results: [
                  { metric: "Patient Inquiries", before: "20/mo", after: "150/mo", change: "+650%" },
                  { metric: "Online Bookings", before: "0", after: "80%", change: "New" },
                ]
              },
              {
                industry: "Real Estate Agency",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
                challenge: "Basic WordPress site not generating quality leads",
                solution: "Custom property portal with advanced search and lead capture",
                results: [
                  { metric: "Qualified Leads", before: "15/mo", after: "120/mo", change: "+700%" },
                  { metric: "Avg. Time on Site", before: "45s", after: "4min", change: "+433%" },
                ]
              },
            ].map((caseStudy, idx) => (
              <Card key={idx} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={caseStudy.image} 
                    alt={`${caseStudy.industry} success story`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      {caseStudy.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-slate-500 mb-1">Challenge:</p>
                    <p className="text-slate-700 text-sm">{caseStudy.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-slate-500 mb-1">Solution:</p>
                    <p className="text-slate-700 text-sm">{caseStudy.solution}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-sm text-slate-500 mb-3">Results:</p>
                    <div className="space-y-2">
                      {caseStudy.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">{result.metric}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400 line-through">{result.before}</span>
                            <ArrowRight className="w-3 h-3 text-slate-400" />
                            <span className="text-slate-900 font-semibold">{result.after}</span>
                            <span className="text-green-600 font-bold text-xs">{result.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section - Enhanced Professional Design */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header with Glow Effect */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-orange-400 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              INDUSTRIES WE SERVE
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Trusted <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">Across Industries</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We deliver exceptional {title.toLowerCase()} solutions for businesses of all sizes and sectors
            </p>
          </div>
          
          {/* Industries Grid with Premium Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { icon: TrendingUp, name: "Startups", desc: "MVP to Scale", color: "from-emerald-500 to-teal-600", bgAccent: "bg-emerald-500/20" },
              { icon: Building2, name: "SMEs", desc: "Growth Solutions", color: "from-blue-500 to-indigo-600", bgAccent: "bg-blue-500/20" },
              { icon: Briefcase, name: "Enterprises", desc: "Enterprise Grade", color: "from-purple-500 to-violet-600", bgAccent: "bg-purple-500/20" },
              { icon: ShoppingCart, name: "E-commerce", desc: "Online Stores", color: "from-orange-500 to-amber-600", bgAccent: "bg-orange-500/20" },
              { icon: Factory, name: "Manufacturing", desc: "Industrial Tech", color: "from-slate-500 to-zinc-600", bgAccent: "bg-slate-400/20" },
              { icon: HeartPulse, name: "Healthcare", desc: "HIPAA Compliant", color: "from-red-500 to-rose-600", bgAccent: "bg-red-500/20" },
              { icon: GraduationCap, name: "Education", desc: "EdTech Solutions", color: "from-sky-500 to-cyan-600", bgAccent: "bg-sky-500/20" },
              { icon: Building2, name: "Real Estate", desc: "Property Portals", color: "from-amber-500 to-yellow-600", bgAccent: "bg-amber-500/20" },
              { icon: TrendingUp, name: "Finance", desc: "FinTech Ready", color: "from-green-500 to-emerald-600", bgAccent: "bg-green-500/20" },
              { icon: Globe, name: "Global Clients", desc: "Worldwide Reach", color: "from-indigo-500 to-purple-600", bgAccent: "bg-indigo-500/20" },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                {/* Card with Glassmorphism */}
                <div className="relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 text-center overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 ${industry.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Icon Container */}
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="relative font-bold text-white text-lg mb-1 group-hover:text-orange-200 transition-colors">{industry.name}</h3>
                  <p className="relative text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{industry.desc}</p>
                  
                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${industry.color} group-hover:w-full transition-all duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { value: "500+", label: "Clients Served" },
              { value: "25+", label: "Industries" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
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
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=60" 
            alt="Business growth background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Business Impact
            </h2>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
              Our {title.toLowerCase()} solutions deliver measurable ROI
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
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
          
          {/* Before/After Comparison */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-300 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                  Before Professional Website
                </h3>
                <ul className="space-y-3 text-indigo-100">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Slow loading times (5+ seconds)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Poor mobile experience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    No search engine visibility
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    High bounce rates (70%+)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Low lead generation
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  After Tech Vexor Website
                </h3>
                <ul className="space-y-3 text-indigo-100">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Lightning fast (&lt;2 seconds)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Perfect on all devices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Page 1 Google rankings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Engaging user experience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Consistent lead flow
                  </li>
                </ul>
              </div>
            </div>
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
            
            {/* Tech Stack Images */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: "Frontend", desc: "React, Next.js, Vue", image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&q=80" },
                { name: "Backend", desc: "Node.js, Python, PHP", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&q=80" },
                { name: "CMS", desc: "WordPress, Shopify", image: "https://images.unsplash.com/photo-1614332625575-6bef81fbd38e?w=300&q=80" },
                { name: "Cloud", desc: "AWS, Vercel, Azure", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80" },
              ].map((stack, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-xl">
                  <img 
                    src={stack.image} 
                    alt={stack.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <p className="text-white font-semibold">{stack.name}</p>
                    <p className="text-slate-400 text-xs">{stack.desc}</p>
                  </div>
                </div>
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
                { name: "E-commerce Solutions", href: "/services/ecommerce-development" },
                { name: "SEO Services", href: "/services/seo" },
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

      {/* Trust & Credibility Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Award, value: "500+", label: "Projects Delivered" },
                { icon: Users, value: "200+", label: "Happy Clients" },
                { icon: Globe, value: "20+", label: "Countries Served" },
                { icon: Star, value: "4.9/5", label: "Client Rating" },
              ].map((stat, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl shadow-sm">
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Enhanced Design */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.15),transparent_50%)] animate-pulse delay-1000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-400/30 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
              <span className="text-sm font-semibold text-orange-300">TRANSFORM YOUR FUTURE</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get a free consultation and discover how our <span className="text-white font-semibold">{title.toLowerCase()}</span> services can drive your success.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <GradientButton asChild size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-2xl shadow-orange-500/25 px-8 py-6 text-lg font-semibold group">
                <Link to={ctaHref} className="inline-flex items-center gap-2">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GradientButton>
              <Button
                size="lg"
                onClick={() => setQuoteDialogOpen(true)}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold shadow-xl group"
              >
                <MessageSquareQuote className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Instant Quote
              </Button>
            </div>
            
            {/* Contact Info Cards */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
              <a 
                href="tel:+917895849990" 
                className="group flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <div className="p-2 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg group-hover:rotate-12 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 group-hover:text-slate-600">Call Us Now</div>
                  <div className="font-semibold text-white group-hover:text-slate-900">+91 7895849990</div>
                </div>
              </a>
              
              <a 
                href="mailto:info@techvexor.com" 
                className="group flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <div className="p-2 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg group-hover:rotate-12 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 group-hover:text-slate-600">Email Us</div>
                  <div className="font-semibold text-white group-hover:text-slate-900">info@techvexor.com</div>
                </div>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-slate-400">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-slate-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-slate-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
