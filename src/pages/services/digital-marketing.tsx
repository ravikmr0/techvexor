import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/quote-dialog";
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
  Search,
  BarChart3,
  Megaphone,
  MousePointerClick,
  Share2,
  Video,
  LineChart,
  PieChart,
  Rocket,
  DollarSign,
  Eye,
  ThumbsUp,
  Star,
  Play,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  ChevronRight,
  BadgeCheck,
  Layers,
  Settings,
  Lightbulb,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

const BASE_URL = "https://www.techvexor.com";
const SITE_NAME = "Tech Vexor";

// SEO Data
const seoData = {
  metaTitle: "Digital Marketing Services | SEO, PPC, Social Media Marketing | Tech Vexor",
  metaDescription: "Transform your business growth with Tech Vexor's comprehensive digital marketing services. Expert SEO, PPC advertising, social media marketing, content marketing, and email campaigns. Drive 200-400% traffic increase with data-driven strategies. Get a free consultation today!",
  metaKeywords: "digital marketing services, SEO services, PPC management, social media marketing, Google Ads, Facebook Ads, content marketing, email marketing, digital marketing agency, social media management, online marketing services, performance marketing, growth marketing, digital advertising, brand marketing, lead generation, conversion optimization",
  canonicalUrl: "https://www.techvexor.com/services/digital-marketing",
};

// Services Data
const digitalMarketingServices = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Dominate search rankings with our comprehensive SEO strategy including on-page, off-page, and technical optimization.",
    features: ["Keyword Research & Strategy", "On-Page Optimization", "Technical SEO Audits", "Link Building", "Local SEO"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Maximize ROI with targeted Google Ads, Bing Ads, and display advertising campaigns.",
    features: ["Google Ads Management", "Bing Ads", "Display Advertising", "Remarketing Campaigns", "Shopping Ads"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build brand awareness and engagement across Facebook, Instagram, LinkedIn, Twitter, and TikTok.",
    features: ["Content Strategy", "Community Management", "Paid Social Campaigns", "Influencer Marketing", "Analytics & Reporting"],
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Engage your audience with compelling blog posts, infographics, videos, and thought leadership content.",
    features: ["Blog Writing", "Video Content", "Infographics", "E-books & Whitepapers", "Podcast Production"],
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with automated email sequences and newsletters.",
    features: ["Email Campaign Design", "Automation Workflows", "A/B Testing", "Segmentation", "Analytics"],
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: Video,
    title: "Video Marketing",
    description: "Create viral video content for YouTube, TikTok, Instagram Reels, and more.",
    features: ["YouTube Marketing", "Short-Form Videos", "Video SEO", "Live Streaming", "Video Ads"],
    color: "from-red-500 to-rose-600",
  },
];

// Process Steps
const processSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    description: "We analyze your current digital presence, competitors, and market opportunities to create a baseline.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Custom marketing strategy aligned with your business goals, target audience, and budget.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute campaigns across chosen channels with optimized creatives and targeting.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Optimization & Scaling",
    description: "Continuous A/B testing, performance analysis, and scaling of winning strategies.",
    icon: TrendingUp,
  },
];

// ROI Statistics
const roiStats = [
  { value: "200-400%", label: "Traffic Increase", icon: TrendingUp },
  { value: "150%+", label: "Lead Generation", icon: Users },
  { value: "300%", label: "ROI on Ad Spend", icon: DollarSign },
  { value: "50%", label: "Cost Per Lead Reduction", icon: PieChart },
];

// Industries
const industries = [
  { icon: TrendingUp, name: "Startups", desc: "Launch & Scale" },
  { icon: Building2, name: "SMEs", desc: "Growth Focus" },
  { icon: Briefcase, name: "Enterprises", desc: "Brand Dominance" },
  { icon: ShoppingCart, name: "E-commerce", desc: "Sales Growth" },
  { icon: Factory, name: "Manufacturing", desc: "B2B Marketing" },
  { icon: HeartPulse, name: "Healthcare", desc: "Patient Acquisition" },
  { icon: GraduationCap, name: "Education", desc: "Student Enrollment" },
  { icon: Building2, name: "Real Estate", desc: "Property Leads" },
  { icon: Briefcase, name: "Finance", desc: "Trust Building" },
  { icon: Globe, name: "SaaS", desc: "User Acquisition" },
];

// FAQs
const faqs = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "Results vary by channel: PPC ads can generate traffic immediately, social media shows engagement within weeks, while SEO typically takes 3-6 months for significant ranking improvements. We provide monthly progress reports with clear KPIs to track growth from day one."
  },
  {
    question: "What's included in your digital marketing packages?",
    answer: "Our packages include comprehensive strategy development, channel-specific campaigns (SEO, PPC, Social Media), content creation, landing page optimization, A/B testing, analytics setup, monthly reporting, and dedicated account management. Custom packages available based on your needs."
  },
  {
    question: "How do you measure digital marketing ROI?",
    answer: "We track multiple KPIs including website traffic, conversion rates, cost per acquisition (CPA), customer lifetime value (CLV), return on ad spend (ROAS), and revenue attribution. Our detailed dashboards provide real-time visibility into campaign performance."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "Yes! We have experience across 50+ industries including e-commerce, healthcare, finance, real estate, education, SaaS, manufacturing, and professional services. Our team adapts strategies to your specific market dynamics and audience behavior."
  },
  {
    question: "What makes Tech Vexor different from other digital marketing agencies?",
    answer: "We combine data-driven strategies with creative excellence. Our team includes certified Google and Meta specialists, we use AI-powered tools for optimization, provide transparent pricing with no hidden costs, and maintain a 98% client retention rate."
  },
  {
    question: "Can you integrate with our existing marketing team?",
    answer: "Absolutely! We offer flexible engagement models - full-service management, specific channel expertise, or collaborative partnerships with your in-house team. We align with your existing workflows and communication preferences."
  },
  {
    question: "What platforms and tools do you use?",
    answer: "We leverage industry-leading tools including Google Analytics 4, Google Ads, Meta Business Suite, SEMrush, Ahrefs, HubSpot, Mailchimp, Hootsuite, and custom AI-powered analytics dashboards for comprehensive campaign management."
  },
  {
    question: "Do you offer local SEO and international marketing?",
    answer: "Yes, we provide both local SEO for businesses targeting specific geographic areas and international SEO/marketing for global expansion. Our strategies include multi-language campaigns and culturally-adapted content for different markets."
  },
  {
    question: "What's your pricing model for digital marketing services?",
    answer: "We offer flexible pricing: monthly retainers starting at ₹15,000/mo for small businesses, project-based pricing for specific campaigns, and performance-based models for qualifying clients. All packages include transparent reporting with no hidden fees."
  },
  {
    question: "How quickly can you start working on my campaigns?",
    answer: "We can begin within 48-72 hours of agreement. Our onboarding process includes a kickoff call, access setup, initial audit, and strategy presentation within the first week. Active campaigns typically launch within 2 weeks."
  },
];

// Technologies
const technologies = [
  "Google Analytics 4", "Google Ads", "Meta Business Suite", "SEMrush", "Ahrefs", 
  "HubSpot", "Mailchimp", "Hootsuite", "Buffer", "Canva Pro", "Adobe Creative Suite",
  "Hotjar", "Crazy Egg", "Zapier", "Salesforce", "Google Tag Manager"
];

export default function DigitalMarketing() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  usePageTitle(seoData.metaTitle, { suffix: null });

  useEffect(() => {
    setIsVisible(true);
    
    // SEO Meta Tags
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

    setMetaTag("description", seoData.metaDescription);
    setMetaTag("keywords", seoData.metaKeywords);
    setMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setLinkTag("canonical", seoData.canonicalUrl);
    
    // Open Graph
    setMetaTag("og:title", seoData.metaTitle, true);
    setMetaTag("og:description", seoData.metaDescription, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:url", seoData.canonicalUrl, true);
    setMetaTag("og:image", `${BASE_URL}/og-digital-marketing.jpg`, true);
    setMetaTag("og:site_name", SITE_NAME, true);
    
    // Twitter
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", seoData.metaTitle);
    setMetaTag("twitter:description", seoData.metaDescription);

    // JSON-LD Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing Services",
      "description": seoData.metaDescription,
      "provider": {
        "@type": "Organization",
        "name": SITE_NAME,
        "url": BASE_URL,
      },
      "serviceType": "Digital Marketing",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "priceRange": "₹15,000 - ₹500,000/month"
      }
    };

    const faqSchema = {
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

    document.querySelectorAll('script[data-dm-seo]').forEach(el => el.remove());
    
    const serviceScript = document.createElement("script");
    serviceScript.type = "application/ld+json";
    serviceScript.setAttribute("data-dm-seo", "true");
    serviceScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-dm-seo", "true");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      document.querySelectorAll('script[data-dm-seo]').forEach(el => el.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <QuoteDialog 
        open={quoteDialogOpen} 
        onOpenChange={setQuoteDialogOpen}
        serviceTitle="Digital Marketing Services"
      />
      
      {/* Hero Section with Background Image */}
      <section 
        ref={heroRef}
        className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Digital Marketing Strategy Dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-indigo-900/80" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Link to="/services" className="inline-flex items-center text-slate-300 hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                  <Award className="w-3.5 h-3.5" />
                  Google Partner
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Meta Certified
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
                  <Star className="w-3.5 h-3.5" />
                  4.9/5 Rating
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Digital Marketing Services That <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Drive Growth</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                Transform your online presence with data-driven SEO, PPC, social media marketing, and content strategies. <strong className="text-white">We've helped 500+ businesses achieve 200-400% traffic growth.</strong>
              </p>
              
              {/* Pricing Badge */}
              <div className="inline-block mb-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                  <p className="text-sm text-slate-300 mb-1">Starting from</p>
                  <p className="text-4xl font-bold text-white">₹15,000<span className="text-lg font-normal text-slate-400">/month</span></p>
                  <p className="text-xs text-slate-400 mt-1">Transparent pricing • No hidden costs</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <GradientButton asChild size="lg" className="text-lg px-8">
                  <Link to="/contact">Get Free Consultation</Link>
                </GradientButton>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setQuoteDialogOpen(true)}
                  className="border-white/50 text-white hover:bg-white hover:text-slate-900 text-lg px-8"
                >
                  <MessageSquareQuote className="w-5 h-5 mr-2" />
                  Get Instant Quote
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-slate-400 mb-3">Trusted by leading brands worldwide</p>
                <div className="flex flex-wrap items-center gap-6 opacity-70">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-6 filter brightness-0 invert" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="h-5 filter brightness-0 invert" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" className="h-6 filter brightness-0 invert" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6 filter brightness-0 invert" />
                </div>
              </div>
            </div>
            
            {/* Hero Image/Video Card */}
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '300ms' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Marketing Analytics Dashboard showing growth metrics"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white">200%+</p>
                      <p className="text-xs text-slate-300">Avg Traffic Increase</p>
                    </div>
                    <div className="text-center border-x border-white/20">
                      <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
                      <p className="text-xs text-slate-300">Clients Served</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white">98%</p>
                      <p className="text-xs text-slate-300">Client Retention</p>
                    </div>
                  </div>
                </div>
                
                {/* Play Button for Video Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors group">
                    <Play className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">This Month</p>
                    <p className="text-lg font-bold text-slate-900">+156% Traffic</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border hidden md:block animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">ROAS</p>
                    <p className="text-lg font-bold text-slate-900">4.2x Return</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
              <Megaphone className="w-4 h-4" />
              COMPREHENSIVE DIGITAL MARKETING
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              360° Digital Marketing Solutions for Business Growth
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              In today's digital-first world, having a strong online presence isn't optional—it's essential. Tech Vexor's digital marketing services combine <strong>cutting-edge technology, data-driven strategies, and creative excellence</strong> to help businesses of all sizes dominate their markets. From startups seeking rapid growth to enterprises scaling globally, our proven methodologies deliver measurable results that impact your bottom line.
            </p>
          </div>
          
          {/* Why Digital Marketing Matters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-slate-50 to-white group">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Increase Visibility</h3>
              <p className="text-slate-600">93% of online experiences begin with a search engine. Be found where your customers are looking.</p>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-slate-50 to-white group">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Generate Quality Leads</h3>
              <p className="text-slate-600">Digital marketing generates 3x more leads than traditional methods at 62% lower cost per lead.</p>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-slate-50 to-white group">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Measure Everything</h3>
              <p className="text-slate-600">Track ROI in real-time with advanced analytics. Know exactly what's working and optimize continuously.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-6">
              <Layers className="w-4 h-4" />
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Full-Stack Digital Marketing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to build, grow, and dominate your online presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalMarketingServices.map((service, idx) => (
              <Card 
                key={idx}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={
                      idx === 0 ? "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80" :
                      idx === 1 ? "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80" :
                      idx === 2 ? "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80" :
                      idx === 3 ? "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80" :
                      idx === 4 ? "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80" :
                      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80"
                    }
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-white/90" />
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50 group/btn"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Visual Timeline */}
      <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-orange-400 rounded-full text-sm font-semibold mb-6 border border-orange-500/30">
              <Settings className="w-4 h-4" />
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Deliver Results
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our proven 4-step methodology ensures consistent, measurable growth for every client
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Connector Line */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-500 to-indigo-500" />
                )}
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all hover:bg-white/10">
                  {/* Step Number */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <step.icon className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Business Impact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
            alt="Business Growth Analytics"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
              <LineChart className="w-4 h-4" />
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Business Impact & ROI
            </h2>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
              Our digital marketing strategies deliver measurable outcomes that drive business growth
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {roiStats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm text-indigo-200">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Success Story Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Featured Success Story</h3>
                  <p className="text-indigo-200 text-sm">E-commerce Client | 6 Month Campaign</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-3xl font-bold text-white mb-1">342%</p>
                  <p className="text-sm text-indigo-200">Organic Traffic Growth</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-3xl font-bold text-white mb-1">₹2.4Cr</p>
                  <p className="text-sm text-indigo-200">Revenue Generated</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-3xl font-bold text-white mb-1">8.2x</p>
                  <p className="text-sm text-indigo-200">Return on Ad Spend</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              INDUSTRIES WE SERVE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted Across 50+ Industries
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From startups to Fortune 500 companies, we deliver digital marketing excellence across all sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="group p-5 bg-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-orange-200 group-hover:to-orange-100 transition-colors group-hover:scale-110">
                  <industry.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{industry.name}</h3>
                <p className="text-xs text-slate-500">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Tech Vexor Digital Marketing Team"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                    <ThumbsUp className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">98%</p>
                    <p className="text-sm text-slate-500">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                WHY TECH VEXOR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Us for Digital Marketing?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We combine data-driven strategies with creative excellence to deliver marketing that converts.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Award, title: "Certified Experts", desc: "Google & Meta certified professionals with 10+ years combined experience" },
                  { icon: BarChart3, title: "Data-Driven Approach", desc: "Every decision backed by analytics, A/B testing, and performance data" },
                  { icon: Shield, title: "Transparent Pricing", desc: "No hidden fees, clear milestones, and detailed monthly reports" },
                  { icon: Globe, title: "Global Reach", desc: "Serving clients in US, UK, Canada, India, and 20+ countries" },
                  { icon: Clock, title: "24/7 Support", desc: "Dedicated account managers with round-the-clock communication" },
                  { icon: Rocket, title: "Fast Results", desc: "See measurable improvements within 30 days of campaign launch" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">We Market Across All Major Platforms</h3>
            <p className="text-slate-600">Reach your audience wherever they spend their time online</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { icon: Facebook, name: "Facebook", color: "text-blue-600" },
              { icon: Instagram, name: "Instagram", color: "text-pink-600" },
              { icon: Linkedin, name: "LinkedIn", color: "text-blue-700" },
              { icon: Twitter, name: "X (Twitter)", color: "text-slate-800" },
              { icon: Youtube, name: "YouTube", color: "text-red-600" },
            ].map((platform, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <platform.icon className={`w-6 h-6 ${platform.color}`} />
                <span className="font-medium text-slate-700">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies & Tools We Use</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Industry-leading platforms for maximum campaign performance
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 bg-slate-800 rounded-full text-slate-200 font-medium border border-slate-700 hover:border-orange-500 hover:text-orange-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
                <HelpCircle className="w-4 h-4" />
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Get answers to common questions about our digital marketing services
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border border-slate-200 rounded-xl px-6 bg-white data-[state=open]:border-orange-300 data-[state=open]:shadow-md transition-all"
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

      {/* Internal Links Section */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Explore Related Services</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "SEO Services", href: "/services/seo" },
                { name: "AI & ML Solutions", href: "/services/ai-ml" },
                { name: "Web Development", href: "/services/custom-software" },
                { name: "Cloud Solutions", href: "/services/cloud-solutions" },
                { name: "Cybersecurity", href: "/services/cybersecurity" },
                { name: "Mobile Apps", href: "/services/mobile-app-development" },
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
              <p className="text-slate-600 mb-4">Want to learn more?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/blog" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1">
                  Read Our Blog <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/case-studies" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1">
                  View Case Studies <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-pink-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to 10x Your Digital Growth?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join 500+ businesses that have transformed their online presence with Tech Vexor. Get a free digital marketing audit worth ₹25,000 today!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <GradientButton asChild size="lg" className="bg-white text-orange-600 hover:bg-slate-100 text-lg px-8">
              <Link to="/contact">Get Free Consultation</Link>
            </GradientButton>
            <Button
              size="lg"
              onClick={() => setQuoteDialogOpen(true)}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8"
            >
              <MessageSquareQuote className="w-5 h-5 mr-2" />
              Get Instant Quote
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/90">
            <a href="tel:+917895849990" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              +91 7895849990
            </a>
            <a href="mailto:info@techvexor.com" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              info@techvexor.com
            </a>
          </div>
          
          {/* Trust Signals */}
          <div className="mt-10 pt-10 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="text-sm">500+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
