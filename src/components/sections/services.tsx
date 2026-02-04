import { useState, useEffect } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Megaphone,
  Target,
  Check,
  Star,
  Zap,
  Crown,
  Sparkles,
  ArrowRight,
  MessageSquareQuote,
  TrendingUp,
  Users,
  BarChart3,
  Search,
  Palette,
  ShoppingCart,
  Smartphone,
  Mail,
  Share2,
  MousePointerClick,
  PhoneCall,
  FileText,
  PieChart,
} from "lucide-react";
import { QuoteDialog } from "@/components/quote-dialog";

// SEO Keywords embedded for search engines
// Website Development: custom website development, responsive web design, ecommerce website development, WordPress development, React website development, professional web design company, website design services, business website development, web application development, mobile-friendly website design
// Digital Marketing: digital marketing services, SEO services, social media marketing, PPC advertising, content marketing, email marketing, online marketing agency, digital advertising, brand marketing, search engine optimization
// Lead Generation: lead generation services, B2B lead generation, sales lead generation, qualified leads, lead nurturing, conversion optimization, marketing automation, sales funnel optimization, lead capture, customer acquisition

const servicePackages = [
  {
    id: "website-development",
    icon: Globe,
    title: "Website Development",
    subtitle: "Professional Web Design & Development",
    tagline: "Build Your Digital Empire",
    description: "Custom responsive websites, ecommerce stores, web applications & landing pages that convert visitors into customers",
    link: "/services/website-development",
    price: "₹24,999",
    originalPrice: "₹49,999",
    priceLabel: "Starting from",
    badge: "Most Popular",
    badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-500",
    glowColor: "blue",
    features: [
      { text: "Custom Responsive Design", icon: Palette },
      { text: "SEO Optimized Structure", icon: Search },
      { text: "Mobile-First Development", icon: Smartphone },
      { text: "E-commerce Integration", icon: ShoppingCart },
      { text: "CMS & Admin Panel", icon: FileText },
      { text: "SSL Security & Hosting", icon: Zap },
      { text: "5 Pages Included", icon: Globe },
      { text: "Contact Forms & Maps", icon: Mail },
    ],
    stats: [
      { value: "500+", label: "Websites Built" },
      { value: "99%", label: "Client Satisfaction" },
      { value: "48hr", label: "Quick Delivery" },
    ],
    keywords: ["website development", "web design", "responsive design", "ecommerce website", "WordPress development", "React website", "custom website", "business website", "professional web design", "web application"],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    subtitle: "360° Online Marketing Solutions",
    tagline: "Dominate Your Market",
    description: "Complete digital marketing solutions including SEO, social media, PPC advertising, content marketing & brand building",
    link: "/services/digital-marketing",
    price: "₹14,999",
    originalPrice: "₹34,999",
    priceLabel: "Monthly from",
    badge: "Best Value",
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-500",
    glowColor: "purple",
    features: [
      { text: "SEO & Keyword Research", icon: Search },
      { text: "Social Media Marketing", icon: Share2 },
      { text: "Google & Meta Ads", icon: MousePointerClick },
      { text: "Content Marketing", icon: FileText },
      { text: "Email Campaigns", icon: Mail },
      { text: "Analytics & Reporting", icon: PieChart },
      { text: "Brand Strategy", icon: Star },
      { text: "Competitor Analysis", icon: BarChart3 },
    ],
    stats: [
      { value: "10M+", label: "Reach Generated" },
      { value: "300%", label: "Avg ROI Increase" },
      { value: "50+", label: "Active Campaigns" },
    ],
    keywords: ["digital marketing", "SEO services", "social media marketing", "PPC advertising", "content marketing", "email marketing", "online marketing", "digital advertising", "brand marketing", "search engine optimization"],
  },
  {
    id: "lead-generation",
    icon: Target,
    title: "Lead Generation",
    subtitle: "Qualified Sales Leads & Conversion",
    tagline: "Fuel Your Sales Pipeline",
    description: "High-quality B2B & B2C lead generation, sales funnel optimization, conversion tracking & marketing automation",
    link: "/services/lead-generation",
    price: "₹19,999",
    originalPrice: "₹44,999",
    priceLabel: "Monthly from",
    badge: "High ROI",
    badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
    gradientFrom: "from-emerald-600",
    gradientTo: "to-teal-500",
    glowColor: "emerald",
    features: [
      { text: "Qualified Lead Capture", icon: Target },
      { text: "Sales Funnel Design", icon: TrendingUp },
      { text: "Landing Page Creation", icon: Globe },
      { text: "CRM Integration", icon: Users },
      { text: "Lead Scoring & Nurturing", icon: BarChart3 },
      { text: "Conversion Tracking", icon: PieChart },
      { text: "A/B Testing", icon: Zap },
      { text: "Weekly Lead Reports", icon: FileText },
    ],
    stats: [
      { value: "50K+", label: "Leads Generated" },
      { value: "45%", label: "Conversion Rate" },
      { value: "2X", label: "Sales Growth" },
    ],
    keywords: ["lead generation", "B2B leads", "sales leads", "qualified leads", "lead nurturing", "conversion optimization", "marketing automation", "sales funnel", "lead capture", "customer acquisition"],
  },
];

export function Services() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleQuoteClick = (e: React.MouseEvent, serviceTitle: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedService(serviceTitle);
    setQuoteDialogOpen(true);
  };

  return (
    <section 
      className="relative py-24 overflow-hidden"
      aria-label="Our Premium Services - Website Development, Digital Marketing, Lead Generation"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* 3D Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top',
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <QuoteDialog 
        open={quoteDialogOpen} 
        onOpenChange={setQuoteDialogOpen}
        serviceTitle={selectedService}
      />
      
      <div className="container relative mx-auto px-4 z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90">Premium Services</span>
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Transform Your Business with
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Our Core Services
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our expertly crafted service packages designed to accelerate your growth.
            <span className="text-white font-semibold"> Website Development</span>,
            <span className="text-white font-semibold"> Digital Marketing</span> &
            <span className="text-white font-semibold"> Lead Generation</span> - all you need to succeed online.
          </p>
        </div>

        {/* 3D Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-7xl mx-auto perspective-1000">
          {servicePackages.map((service, index) => {
            const isHovered = hoveredCard === service.id;
            const Icon = service.icon;
            
            return (
              <article
                key={service.id}
                className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transform: isHovered ? 'translateY(-16px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* 3D Card Container */}
                <div 
                  className="relative h-full rounded-3xl overflow-hidden transition-all duration-500"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: isHovered 
                      ? `0 30px 60px -15px rgba(0,0,0,0.5), 0 0 40px -5px ${service.glowColor === 'blue' ? 'rgba(59,130,246,0.5)' : service.glowColor === 'purple' ? 'rgba(168,85,247,0.5)' : 'rgba(16,185,129,0.5)'}`
                      : '0 15px 30px -10px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transform: `perspective(1000px) rotateY(${isHovered ? '0deg' : '0deg'}) rotateX(${isHovered ? '0deg' : '0deg'})`,
                  }}
                >
                  {/* Animated Glow Border */}
                  <div 
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{
                      background: `linear-gradient(135deg, ${service.glowColor === 'blue' ? 'rgba(59,130,246,0.3)' : service.glowColor === 'purple' ? 'rgba(168,85,247,0.3)' : 'rgba(16,185,129,0.3)'} 0%, transparent 50%)`,
                    }}
                  />

                  {/* Badge */}
                  <div className={`absolute top-4 right-4 z-20 ${service.badgeColor} px-4 py-1.5 rounded-full shadow-lg`}>
                    <div className="flex items-center gap-1.5">
                      <Crown className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-bold text-white tracking-wide">{service.badge}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="relative p-8 flex flex-col h-full min-h-[700px]">
                    {/* Icon with 3D Effect */}
                    <div className="mb-6">
                      <div 
                        className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110`}
                        style={{
                          boxShadow: `0 15px 30px -5px ${service.glowColor === 'blue' ? 'rgba(59,130,246,0.5)' : service.glowColor === 'purple' ? 'rgba(168,85,247,0.5)' : 'rgba(16,185,129,0.5)'}`,
                        }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                        {/* Floating Ring */}
                        <div className="absolute -inset-2 rounded-2xl border-2 border-white/20 animate-pulse" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{service.subtitle}</span>
                      <h3 
                        className={`text-2xl md:text-3xl font-bold mt-2 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} bg-clip-text text-transparent`}
                        itemProp="name"
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/70 mt-1 font-medium">{service.tagline}</p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6" itemProp="description">
                      {service.description}
                    </p>

                    {/* Price Section */}
                    <div 
                      className="relative mb-6 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                      itemProp="offers"
                      itemScope
                      itemType="https://schema.org/Offer"
                    >
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-xs text-slate-400">{service.priceLabel}</span>
                        <span className="text-sm text-slate-500 line-through">{service.originalPrice}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span 
                          className={`text-4xl font-bold bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} bg-clip-text text-transparent`}
                          itemProp="price"
                        >
                          {service.price}
                        </span>
                        <span className="text-emerald-400 text-sm font-semibold">Save 50%</span>
                      </div>
                      <meta itemProp="priceCurrency" content="INR" />
                      {/* Animated Discount Tag */}
                      <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                        <span className="text-white text-xs font-bold">-50%</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 mb-6">
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, idx) => {
                          const FeatureIcon = feature.icon;
                          return (
                            <div 
                              key={idx}
                              className="flex items-center gap-3 group/feature"
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} bg-opacity-20 flex items-center justify-center flex-shrink-0 transition-transform group-hover/feature:scale-110`}>
                                <FeatureIcon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm text-slate-300 group-hover/feature:text-white transition-colors">{feature.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2 mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`text-lg font-bold bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} bg-clip-text text-transparent`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-slate-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3 mt-auto">
                      <Link
                        to={service.link}
                        className={`block w-full py-4 px-6 rounded-xl bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} text-white font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group/btn`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Get Started Now
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full py-4 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                        onClick={(e) => handleQuoteClick(e, service.title)}
                      >
                        <MessageSquareQuote className="w-4 h-4 mr-2" />
                        Request Custom Quote
                      </Button>
                    </div>

                    {/* Hidden SEO Keywords */}
                    <div className="sr-only" itemProp="keywords">
                      {service.keywords.join(", ")}
                    </div>
                  </div>
                </div>

                {/* 3D Shadow Effect */}
                <div 
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 rounded-full blur-2xl transition-all duration-500"
                  style={{
                    background: service.glowColor === 'blue' 
                      ? 'rgba(59,130,246,0.4)' 
                      : service.glowColor === 'purple' 
                        ? 'rgba(168,85,247,0.4)' 
                        : 'rgba(16,185,129,0.4)',
                    opacity: isHovered ? 1 : 0.5,
                  }}
                />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-1">Need a Custom Solution?</h3>
              <p className="text-slate-400 text-sm">Get all three services bundled together with special pricing</p>
            </div>
            <GradientButton asChild size="lg" className="group whitespace-nowrap">
              <Link to="/contact">
                <PhoneCall className="w-5 h-5 mr-2" />
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </GradientButton>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10 text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">98% Success Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
