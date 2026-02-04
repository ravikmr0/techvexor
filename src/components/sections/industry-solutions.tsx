import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  ArrowRight, 
  Building2, 
  Factory, 
  Briefcase, 
  ShoppingCart, 
  Building, 
  Layers,
  Sparkles,
  Star,
  Zap,
  TrendingUp,
  Shield,
  Users,
  Target,
  Clock,
  Award,
  Rocket,
  BarChart3,
  Globe,
  Cpu,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import { industryGroups } from "@/data/industry-catalog";

// SEO Keywords: industry-specific solutions, industry software, industry automation, digital transformation, industry 4.0, business solutions, enterprise software, vertical solutions, sector-specific technology, industry innovation

const groupIcons: Record<string, any> = {
  "Agriculture-Based": Building2,
  "Manufacturing": Factory,
  "Services": Briefcase,
  "Retail & Wholesale": ShoppingCart,
  "Infrastructure & Public Sector": Building,
  "Additional Sectors": Layers,
};

const groupGradients: Record<string, { from: string; to: string; color: string }> = {
  "Agriculture-Based": { from: "from-green-600", to: "to-emerald-500", color: "green" },
  "Manufacturing": { from: "from-orange-600", to: "to-red-500", color: "orange" },
  "Services": { from: "from-blue-600", to: "to-cyan-500", color: "blue" },
  "Retail & Wholesale": { from: "from-purple-600", to: "to-pink-500", color: "purple" },
  "Infrastructure & Public Sector": { from: "from-slate-600", to: "to-zinc-500", color: "slate" },
  "Additional Sectors": { from: "from-indigo-600", to: "to-violet-500", color: "indigo" },
};

const groupImages: Record<string, string> = {
  "Agriculture-Based": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  "Manufacturing": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  "Services": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
  "Retail & Wholesale": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  "Infrastructure & Public Sector": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  "Additional Sectors": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
};

const groupPricing: Record<string, { startingPrice: string; originalPrice: string }> = {
  "Agriculture-Based": { startingPrice: "₹34,999", originalPrice: "₹69,999" },
  "Manufacturing": { startingPrice: "₹44,999", originalPrice: "₹89,999" },
  "Services": { startingPrice: "₹29,999", originalPrice: "₹59,999" },
  "Retail & Wholesale": { startingPrice: "₹39,999", originalPrice: "₹79,999" },
  "Infrastructure & Public Sector": { startingPrice: "₹54,999", originalPrice: "₹109,999" },
  "Additional Sectors": { startingPrice: "₹32,999", originalPrice: "₹64,999" },
};

export function IndustrySolutionsPage() {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Industry Solutions by Tech Vexor",
    "description": "Comprehensive AI and software solutions for 100+ industries including agriculture, manufacturing, services, retail, and infrastructure.",
    "numberOfItems": industryGroups.reduce((acc, g) => acc + g.items.length, 0),
    "itemListElement": industryGroups.flatMap((group, gi) => 
      group.items.map((item, idx) => ({
        "@type": "ListItem",
        "position": gi * 20 + idx + 1,
        "item": {
          "@type": "Service",
          "name": `${item.title} Solutions`,
          "description": item.description,
          "url": `https://www.techvexor.com/industries/${item.slug}`
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
          {/* 3D Grid */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'center top',
            }}
          />
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
          
          {/* Particles */}
          {[...Array(30)].map((_, i) => (
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

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold text-white">100+ Industry-Specific Solutions</span>
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Transform Your Industry with
              <span className="block mt-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed">
              Cutting-edge <span className="text-white font-semibold">industry-specific software</span>, 
              <span className="text-white font-semibold"> automation</span>, and 
              <span className="text-white font-semibold"> digital transformation</span> solutions for agriculture, 
              manufacturing, services, retail, infrastructure, and more.
            </p>
            
            <p className="text-base text-slate-400 max-w-3xl mx-auto mb-10">
              From <strong>Industry 4.0</strong> and <strong>Industry 5.0 technologies</strong> to 
              <strong> vertical solutions</strong> and <strong>enterprise automation</strong> - 
              empower your business with sector-specific innovation, AI integration, and smart workflows.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <GradientButton asChild size="lg" className="group">
                <Link to="#use-cases">
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore All Industries
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GradientButton>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link to="/contact">
                  <Target className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-slate-900 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative inline-block mb-3">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  100+
                </div>
                <Sparkles className="absolute -top-2 -right-6 w-5 h-5 text-yellow-400 animate-pulse" />
              </div>
              <div className="text-sm text-slate-400 font-medium">Industry Solutions</div>
            </div>
            <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative inline-block mb-3">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  500+
                </div>
                <Award className="absolute -top-2 -right-6 w-5 h-5 text-yellow-400" />
              </div>
              <div className="text-sm text-slate-400 font-medium">Projects Delivered</div>
            </div>
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative inline-block mb-3">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  50+
                </div>
                <Globe className="absolute -top-2 -right-6 w-5 h-5 text-blue-400" />
              </div>
              <div className="text-sm text-slate-400 font-medium">Countries Served</div>
            </div>
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative inline-block mb-3">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  98%
                </div>
                <Star className="absolute -top-2 -right-6 w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="text-sm text-slate-400 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Groups with 3D Cards */}
      <section id="use-cases" className="relative py-24 bg-slate-950">
        <div className="container mx-auto px-4 space-y-24">
          {industryGroups.map((group, gi) => {
            const isHovered = hoveredGroup === group.name;
            const IconComponent = groupIcons[group.name] || Layers;
            const gradient = groupGradients[group.name] || { from: "from-indigo-600", to: "to-violet-500", color: "indigo" };
            const pricing = groupPricing[group.name] || { startingPrice: "₹29,999", originalPrice: "₹59,999" };
            const imageUrl = groupImages[group.name] || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80";
            
            return (
              <article 
                key={gi} 
                className={`scroll-mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${gi * 150}ms` }}
                id={group.name.toLowerCase().replace(/\s+/g, '-')}
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* Group Header Card with 3D Effect */}
                <div 
                  className="relative group mb-12"
                  onMouseEnter={() => setHoveredGroup(group.name)}
                  onMouseLeave={() => setHoveredGroup(null)}
                >
                  <div 
                    className="relative overflow-hidden rounded-3xl transition-all duration-500"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: isHovered 
                        ? `0 30px 60px -15px rgba(0,0,0,0.5), 0 0 40px -5px ${gradient.color === 'blue' ? 'rgba(59,130,246,0.5)' : gradient.color === 'purple' ? 'rgba(168,85,247,0.5)' : gradient.color === 'green' ? 'rgba(16,185,129,0.5)' : gradient.color === 'orange' ? 'rgba(249,115,22,0.5)' : 'rgba(99,102,241,0.5)'}`
                        : '0 15px 30px -10px rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transform: isHovered ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
                    }}
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <img 
                        src={imageUrl} 
                        alt={`${group.name} industry solutions`}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradient.from} ${gradient.to} mix-blend-multiply`} />
                    </div>

                    {/* Animated Glow */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${gradient.color === 'blue' ? 'rgba(59,130,246,0.3)' : gradient.color === 'purple' ? 'rgba(168,85,247,0.3)' : gradient.color === 'green' ? 'rgba(16,185,129,0.3)' : gradient.color === 'orange' ? 'rgba(249,115,22,0.3)' : 'rgba(99,102,241,0.3)'} 0%, transparent 50%)`,
                      }}
                    />

                    <div className="relative p-8 md:p-10">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        {/* Icon & Title */}
                        <div className="flex items-start gap-6 flex-1">
                          <div 
                            className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110`}
                            style={{
                              boxShadow: `0 15px 30px -5px ${gradient.color === 'blue' ? 'rgba(59,130,246,0.5)' : gradient.color === 'purple' ? 'rgba(168,85,247,0.5)' : gradient.color === 'green' ? 'rgba(16,185,129,0.5)' : gradient.color === 'orange' ? 'rgba(249,115,22,0.5)' : 'rgba(99,102,241,0.5)'}`,
                            }}
                          >
                            <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white" />
                            <div className="absolute -inset-2 rounded-2xl border-2 border-white/20 animate-pulse" />
                          </div>
                          
                          <div className="flex-1">
                            <h2 className={`text-2xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${gradient.from} ${gradient.to} bg-clip-text text-transparent`} itemProp="name">
                              {group.name}
                            </h2>
                            <p className="text-slate-300 text-sm md:text-base mb-3">
                              {group.items.length} specialized industry solutions with AI automation
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                                <Cpu className="w-3 h-3 text-blue-400" />
                                <span className="text-xs text-slate-300">AI-Powered</span>
                              </div>
                              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                                <Shield className="w-3 h-3 text-green-400" />
                                <span className="text-xs text-slate-300">Enterprise-Grade</span>
                              </div>
                              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                                <Clock className="w-3 h-3 text-yellow-400" />
                                <span className="text-xs text-slate-300">24/7 Support</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Box */}
                        <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 min-w-[200px]">
                          <div className="text-center">
                            <div className="text-xs text-slate-400 mb-1">Starting from</div>
                            <div className="flex items-baseline justify-center gap-2 mb-2">
                              <span className="text-sm text-slate-500 line-through">{pricing.originalPrice}</span>
                            </div>
                            <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradient.from} ${gradient.to} bg-clip-text text-transparent`}>
                              {pricing.startingPrice}
                            </div>
                            <div className="text-xs text-emerald-400 font-semibold mt-1">Save 50% Today</div>
                          </div>
                          <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                            <span className="text-white text-xs font-bold">-50%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industry Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item, idx) => (
                    <Link 
                      key={idx} 
                      to={`/industries/${item.slug}`} 
                      className="group/item"
                      itemProp="url"
                    >
                      <Card 
                        className="relative p-6 h-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group-hover/item:translate-y-[-4px] overflow-hidden"
                        style={{
                          boxShadow: '0 10px 25px -10px rgba(0,0,0,0.3)',
                        }}
                      >
                        {/* Hover Effect Border */}
                        <div 
                          className={`absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none`}
                          style={{
                            background: `linear-gradient(to right, ${gradient.color === 'blue' ? 'rgba(59,130,246,0.2)' : gradient.color === 'purple' ? 'rgba(168,85,247,0.2)' : gradient.color === 'green' ? 'rgba(16,185,129,0.2)' : gradient.color === 'orange' ? 'rgba(249,115,22,0.2)' : 'rgba(99,102,241,0.2)'} 0%, transparent 100%)`,
                            borderLeft: `3px solid ${gradient.color === 'blue' ? '#3b82f6' : gradient.color === 'purple' ? '#a855f7' : gradient.color === 'green' ? '#10b981' : gradient.color === 'orange' ? '#f97316' : '#6366f1'}`,
                          }}
                        />

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className={`text-lg font-semibold text-white group-hover/item:bg-gradient-to-r group-hover/item:${gradient.from} group-hover/item:${gradient.to} group-hover/item:bg-clip-text group-hover/item:text-transparent transition-all`} itemProp="name">
                              {item.title}
                            </h3>
                            <Package className={`w-5 h-5 text-slate-600 group-hover/item:text-${gradient.color}-400 transition-colors flex-shrink-0`} />
                          </div>
                          
                          <p className="text-slate-400 text-sm leading-relaxed mb-4" itemProp="description">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                                <span>{item.useCases.length} use cases</span>
                              </div>
                            </div>
                            <div className={`flex items-center gap-1 text-sm font-medium text-slate-400 group-hover/item:text-${gradient.color}-400 transition-colors`}>
                              <span>Learn more</span>
                              <ArrowRight className="w-4 h-4 group-hover/item:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
              Comprehensive Industries Solutions & Technology Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Industries Share Price & Market Leaders</h3>
                <div className="prose prose-slate max-w-none text-slate-600">
                  <p className="mb-3">
                    Tech Vexor serves major <strong>industries</strong> including <strong>reliance industries</strong>, 
                    <strong>alok industries</strong>, <strong>aarti industries</strong>, <strong>solar industries</strong>, 
                    <strong>praj industries</strong>, <strong>apar industries</strong>, <strong>tilaknagar industries</strong>, 
                    <strong>exide industries</strong>, <strong>vst industries</strong>, and <strong>supreme industries</strong>.
                  </p>
                  <p className="mb-3">
                    Our solutions support <strong>industries by revenue</strong>, <strong>industries by market cap</strong>, 
                    <strong>industries by profit margin</strong>, and <strong>industries by sector</strong> with specialized 
                    technology for <strong>reliance industries share</strong> tracking, <strong>alok industries share</strong> management, 
                    and comprehensive <strong>industries share price</strong> analytics.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Industries Types & Classifications</h3>
                <div className="prose prose-slate max-w-none text-slate-600">
                  <p className="mb-3">
                    We support <strong>industries definition</strong>, <strong>industries examples</strong>, 
                    <strong>industries list</strong>, <strong>industries names</strong>, <strong>industries meaning</strong>, 
                    <strong>industries abbreviation</strong>, and all <strong>industries types</strong> including 
                    <strong>manufacturing industries</strong>, <strong>creative industries</strong>, 
                    <strong>cottage industries</strong>, and <strong>agro based industries</strong>.
                  </p>
                  <p className="mb-3">
                    From <strong>industries growing in 2025</strong> to <strong>industries booming right now</strong>, 
                    we provide technology for <strong>industries currently hiring</strong>, 
                    <strong>industries hiring right now</strong>, and <strong>industries near me</strong> searches.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">Global Industries Coverage</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• <strong>Industries America</strong> & USA</li>
                  <li>• <strong>Industries Australia</strong></li>
                  <li>• <strong>Industries UK</strong></li>
                  <li>• <strong>Koch industries</strong></li>
                  <li>• <strong>Mitsubishi heavy industries</strong></li>
                  <li>• <strong>Dangote industries limited</strong></li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">Industries Services</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• <strong>Industries for the blind</strong></li>
                  <li>• <strong>Deseret industries</strong></li>
                  <li>• <strong>Goodwill industries</strong></li>
                  <li>• <strong>Motion industries</strong></li>
                  <li>• <strong>Turner industries</strong></li>
                  <li>• <strong>Pratt industries</strong></li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">Industries Technology</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• <strong>Industry 4.0</strong> solutions</li>
                  <li>• <strong>Industry 5.0</strong> technologies</li>
                  <li>• <strong>Industries using AI</strong></li>
                  <li>• <strong>Industries affected by AI</strong></li>
                  <li>• <strong>Industries safe from AI</strong></li>
                  <li>• <strong>Industries automation</strong></li>
                </ul>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Complete Industries Solutions Portfolio
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Industries Market & Finance</h4>
                  <p className="text-sm mb-4">
                    Specialized solutions for <strong>industries share price</strong> tracking covering 
                    <strong>reliance industries share price</strong>, <strong>alok industries share price</strong>, 
                    <strong>aarti industries share price</strong>, <strong>solar industries share price</strong>, 
                    <strong>praj industries share price</strong>, <strong>tilaknagar industries share price</strong>, 
                    <strong>vst industries share price</strong>, <strong>exide industries share price</strong>, 
                    <strong>supreme industries share price</strong>, and more. We serve <strong>industries ranked by revenue</strong>, 
                    <strong>industries by size</strong>, and <strong>industries by state</strong>.
                  </p>

                  <h4 className="font-semibold text-slate-800 mb-3">Industries Growth & Trends</h4>
                  <p className="text-sm">
                    Technology for <strong>industries growing</strong>, <strong>industries growing the fastest</strong>, 
                    <strong>industries expected to grow in the next 10 years</strong>, <strong>industries doing well in 2025</strong>, 
                    <strong>industries experiencing growth</strong>, <strong>industries projected to grow</strong>, 
                    <strong>industries on the rise</strong>, and <strong>industries that are growing</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Industries Employment & Hiring</h4>
                  <p className="text-sm mb-4">
                    Solutions supporting <strong>industries hiring</strong>, <strong>industries hiring near me</strong>, 
                    <strong>industries hiring the most right now</strong>, <strong>industries hiring in 2025</strong>, 
                    <strong>industries jobs</strong>, <strong>industries jobs near me</strong>, 
                    <strong>industries needing workers</strong>, <strong>industries desperate for workers</strong>, 
                    and <strong>industries with most job openings</strong>.
                  </p>

                  <h4 className="font-semibold text-slate-800 mb-3">Specialized Industries</h4>
                  <p className="text-sm">
                    We serve <strong>industries for mechanical engineers</strong>, <strong>industries for electrical engineers</strong>, 
                    <strong>industries for chemical engineers</strong>, <strong>industries for project management</strong>, 
                    <strong>heavy industries</strong>, <strong>cottage industries</strong>, <strong>global industries</strong>, 
                    <strong>operational industries</strong>, and <strong>industries llc</strong> businesses.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-3">Industries Technology Solutions</h4>
                <p className="text-sm text-slate-600 mb-3">
                  From <strong>industries 4.0</strong> and <strong>industry 4.0 technologies</strong> to 
                  <strong>industries 5.0</strong> and <strong>industry 5.0 meaning</strong>, Tech Vexor delivers 
                  comprehensive <strong>industries technology</strong> including <strong>industries automation</strong>, 
                  <strong>industries most affected by AI</strong>, <strong>industries least affected by AI</strong>, 
                  <strong>industries using AI the most</strong>, and <strong>industries unaffected by AI</strong>.
                </p>
                <p className="text-sm text-slate-600">
                  Our expertise spans <strong>industries and sectors</strong>, <strong>industries business</strong>, 
                  <strong>industries company</strong>, <strong>industries ltd</strong>, <strong>industries inc</strong>, 
                  <strong>industries vs enterprises</strong>, <strong>industries vs corporation</strong>, 
                  <strong>industries we serve</strong>, and all <strong>industries list in usa</strong> sectors. 
                  Whether you need solutions for <strong>industries most impacted by tariffs</strong>, 
                  <strong>industries resilient to recession</strong>, or <strong>industries with highest profit margins</strong>, 
                  we provide cutting-edge technology for <strong>industries to invest in</strong> and 
                  <strong>industries to work in</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span className="text-sm font-semibold text-white">Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Industry?
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Whether you need <strong>manufacturing automation</strong>, <strong>retail solutions</strong>, 
              <strong> service industry software</strong>, or <strong>infrastructure management</strong> - 
              we deliver cutting-edge technology tailored to your sector.
            </p>
            
            <p className="text-base text-white/80 mb-10 max-w-2xl mx-auto">
              Join 500+ businesses across 50+ countries leveraging our <strong>Industry 4.0</strong> and 
              <strong> AI-powered solutions</strong>. Get <strong>50% off</strong> on all packages today!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <GradientButton 
                asChild 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-slate-100 shadow-2xl"
              >
                <Link to="/contact">
                  <Target className="w-5 h-5 mr-2" />
                  Get Industry Solutions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </GradientButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link to="/services">
                  <Briefcase className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">300% Avg ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
