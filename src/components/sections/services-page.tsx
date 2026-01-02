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
            Comprehensive Digital Solutions
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto text-center mb-8">
            At Tech Vexor, we offer a wide range of cutting-edge digital
            services tailored to elevate your brand and drive business growth.
            Our expert team ensures that your digital presence stands out in a
            competitive market.
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
              Top 3 Services That Drive Results
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our most requested packages designed to accelerate your business growth with proven strategies and measurable outcomes.
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

                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-6 relative`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        <p className="text-white/90 text-sm">{service.subtitle}</p>
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
                  <Card key={si} className="p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                    <Link to={`/services/${svc.slug}`} className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 hover:text-indigo-600 transition-colors">{svc.title}</h3>
                      <p className="text-slate-600 mb-4">{svc.description}</p>
                      {svc.startingPrice && (
                        <div className="mb-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                          <p className="text-xs text-slate-500 mb-1">Starting from</p>
                          <p className="text-xl font-bold text-indigo-600">{svc.startingPrice}</p>
                          <p className="text-xs text-slate-400">*Market competitive rates</p>
                        </div>
                      )}
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
            Why Choose Tech Vexor?
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
