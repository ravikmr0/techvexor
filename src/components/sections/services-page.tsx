import { useState } from "react";
import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, MessageSquareQuote, Globe, Megaphone, Users, ArrowRight, Star, Zap, TrendingUp } from "lucide-react";
import { serviceGroups } from "@/data/services-catalog";
import { QuoteDialog } from "@/components/quote-dialog";

const heroCTAs = [
  { label: "Talk to an Expert", href: "/contact" },
  { label: "See Case Studies", href: "/case-studies" },
];

const benefits = [
  "Industry Expertise – Experienced professionals delivering tailored solutions.",
  "Cutting-Edge Technology – Leveraging the latest tools and trends.",
  "Results-Driven Approach – Focused on business growth and ROI.",
  "Client-Centric Focus – Customized strategies for unique business needs.",
];

const featuredServices = [
  {
    slug: "website-development",
    title: "Website Development",
    subtitle: "Professional & SEO-Optimized",
    description: "Transform your online presence with stunning, high-performance websites that convert visitors into customers.",
    icon: Globe,
    gradient: "from-blue-600 via-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    price: "₹25,000",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    features: [
      "Custom Responsive Design",
      "E-commerce & CMS",
      "SEO Optimization",
      "Fast Loading Speed",
    ],
    badge: "Most Popular",
    badgeColor: "bg-blue-600",
  },
  {
    slug: "seo",
    title: "Digital Marketing",
    subtitle: "360° Growth Strategy",
    description: "Comprehensive digital marketing solutions including SEO, paid ads, social media, and content marketing.",
    icon: Megaphone,
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    bgGradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    price: "₹15,000/mo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
      "SEO & Content Strategy",
      "Google & Social Ads",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    badge: "Best ROI",
    badgeColor: "bg-purple-600",
  },
  {
    slug: "b2b-b2c-lead-gen",
    title: "Lead Generation",
    subtitle: "Quality Leads Guaranteed",
    description: "Performance-driven lead generation campaigns across B2B & B2C markets to fill your sales pipeline.",
    icon: Users,
    gradient: "from-emerald-600 via-green-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    price: "₹25,000/mo",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: [
      "Multi-Channel Funnels",
      "Lead Scoring & Qualification",
      "CRM Integration",
      "Performance Analytics",
    ],
    badge: "High Demand",
    badgeColor: "bg-emerald-600",
  },
];

const serviceImages: Record<string, string> = {
  // Core IT Services
  "software-development": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=75",
  "managed-services": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=75",
  "digital-transformation": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=75",
  "cloud-computing": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=75",
  "networking": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=75",
  "tech-support": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=75",
  "ecommerce": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=75",
  // Website & App Development
  "website-development": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=75",
  "web-application-development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=75",
  "mobile-app-development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=75",
  "erp-crm-solutions": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=75",
  "saas-development": "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=75",
  "api-integrations": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=75",
  "cloud-services": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=75",
  "it-consulting-strategy": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=75",
  "cybersecurity-data-protection": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=75",
  "it-support-maintenance": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=75",
  "software-testing-qa": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=75",
  "chatbot-ai-automation": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=75",
  // Digital Marketing
  "seo": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&q=75",
  "aso": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=75",
  "paid-ads": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=75",
  "social-management": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=75",
  "social-ads": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=75",
  "email-marketing": "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&q=75",
  "whatsapp-sms": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=75",
  "content-marketing": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=75",
  "video-marketing": "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&q=75",
  "orm": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=75",
  "influencer": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=75",
  "cro": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=75",
  "analytics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=75",
  // Design & Branding
  "brand-identity": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=75",
  "ui-ux": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=75",
  "graphic-design": "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=75",
  "infographics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=75",
  "product-packaging": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75",
  "brand-guidelines": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=75",
  "pitch-decks": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=75",
  "corporate-identity-kits": "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=75",
  // Video Production
  "corporate-films": "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&q=75",
  "explainer-videos": "https://images.unsplash.com/photo-1536240478700-b869ad10e2f6?w=400&q=75",
  "advertisement-videos": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=75",
  "training-elearning": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&q=75",
  "event-coverage": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=75",
  "short-form-video": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=75",
  "drone-shoots": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=75",
  "video-editing": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=75",
  "voiceover": "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&q=75",
  // Print & Production
  "business-cards": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=75",
  "catalogues-magazines": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=75",
  "corporate-stationery": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=75",
  "packaging-labels": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75",
  "merch-printing": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=75",
  "large-format": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=75",
  "pos-materials": "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=75",
  "vehicle-branding": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=75",
  // Photography
  "corporate-team-photography": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=75",
  "product-photography": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&q=75",
  "industrial-photography": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75",
  "food-photography": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=75",
  "real-estate-photography": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=75",
  "event-photography": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=75",
  "drone-photography": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=75",
  // Lead Generation & Business
  "b2b-b2c-lead-gen": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=75",
  "upvc-aluminium-pan-india-leads": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75",
  "international-lead-gen": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=75",
  "landing-pages-funnels": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=75",
  "performance-marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=75",
  "cold-email-outreach": "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&q=75",
  "franchise-dealer-development": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=75",
  // Call Center & Customer Support
  "call-center": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=75",
  "telesales": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=75",
  "appointment-scheduling": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&q=75",
  "customer-feedback": "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=400&q=75",
  "chat-support": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=75",
  "virtual-receptionist": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=75",
  // Business Services
  "business-consulting": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=75",
  "market-research": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=75",
  "data-entry-va": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=75",
  "hr-recruitment": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=75",
  "event-management": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=75",
  "corporate-training": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=75",
  "franchise-marketing": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=75",
  "ecommerce-setup": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=75",
  "payment-gateway": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=75",
  "whatsapp-chatbot": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=75",
  "local-seo-gmb": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&q=75",
};

const defaultServiceImage = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&q=75";

export function ServicesPage() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleQuoteClick = (e: React.MouseEvent, serviceTitle: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedService(serviceTitle);
    setQuoteDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <QuoteDialog 
        open={quoteDialogOpen} 
        onOpenChange={setQuoteDialogOpen}
        serviceTitle={selectedService}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            IT Consulting Services & Tech Marketing Solutions
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto text-center mb-8">
            Leading IT consulting agency delivering comprehensive technology consulting services, 
            marketing technology solutions, cloud computing, AI/ML, and digital transformation. 
            Expert tech consulting for small businesses and enterprises with proven ROI.
          </p>
          <div className="flex items-center justify-center gap-3">
            <GradientButton asChild size="lg">
              <Link to="#complete-services-list">Explore Our Services</Link>
            </GradientButton>
            <Link to="#complete-services-list" className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
              Complete Services List
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services - Main 3 Packages */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Our Core Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Top IT Consulting & Tech Marketing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our expert IT consulting services and technology marketing solutions designed for businesses seeking 
              comprehensive tech consulting, cloud infrastructure, and digital transformation strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.slug}
                  className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${service.borderColor} hover:scale-[1.02]`}
                >
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 ${service.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 z-10`}>
                    <Star className="w-3 h-3" />
                    {service.badge}
                  </div>

                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-70`} />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          <p className="text-white/90 text-sm">{service.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 bg-gradient-to-b ${service.bgGradient}`}>
                    <p className="text-slate-600 mb-6">{service.description}</p>

                    {/* Price */}
                    <div className="mb-6 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                      <p className="text-xs text-slate-500 mb-1">Starting from</p>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {service.price}
                        </span>
                        <span className="text-sm text-slate-400">onwards</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, fi) => (
                        <li key={fi} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-700 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Button
                        onClick={(e) => handleQuoteClick(e, service.title)}
                        className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold py-3`}
                      >
                        <MessageSquareQuote className="w-4 h-4 mr-2" />
                        Get Free Quote
                      </Button>
                      <Link to={`/services/${service.slug}`} className="block">
                        <Button
                          variant="outline"
                          className="w-full border-2 hover:bg-slate-50 group/btn"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </div>
              );
            })}
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Projects Delivered", icon: TrendingUp },
              { value: "98%", label: "Client Satisfaction", icon: Star },
              { value: "150+", label: "Active Clients", icon: Users },
              { value: "24/7", label: "Support Available", icon: Zap },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="py-20" id="complete-services-list">
        <div className="container mx-auto px-4 space-y-16">
          {serviceGroups.map((group, gi) => (
            <div key={gi}>
              <h2 className="text-2xl font-bold mb-6">{group.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((svc, si) => (
                  <Card key={si} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    {/* Service Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={serviceImages[svc.slug] || defaultServiceImage}
                        alt={svc.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      {svc.startingPrice && (
                        <div className="absolute bottom-3 left-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                          From {svc.startingPrice}
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <Link to={`/services/${svc.slug}`} className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 hover:text-indigo-600 transition-colors">{svc.title}</h3>
                        <p className="text-slate-600 mb-4">{svc.description}</p>
                        <ul className="space-y-2 mb-4">
                          {svc.features.slice(0, 3).map((f, fi) => (
                            <li key={fi} className="flex items-start space-x-2 text-slate-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </Link>
                      <Button
                        onClick={(e) => handleQuoteClick(e, svc.title)}
                        className="w-full mt-auto bg-indigo-600 hover:bg-indigo-700 text-white"
                      >
                        <MessageSquareQuote className="w-4 h-4 mr-2" />
                        Quote Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Tech Vexor IT Consulting Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-indigo-500" />
                  <p className="text-slate-600">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
