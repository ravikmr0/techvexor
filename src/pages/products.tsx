import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Battery, Zap, Gauge, Factory, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";

const BASE_URL = "https://www.techvexor.com";
const SITE_NAME = "Tech Vexor";

// Product categories data
const productCategories = [
  {
    id: "solar",
    icon: Sun,
    title: "Solar Energy Products",
    emoji: "☀️",
    description: "Complete range of solar panels, systems, and accessories for residential, commercial, and industrial applications.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-50/50 to-orange-50/30",
    borderColor: "border-amber-500/20",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
    products: [
      { name: "Solar Panels (Mono PERC, Polycrystalline, Bifacial)", description: "High-efficiency solar panels for all applications", icon: "🔆" },
      { name: "Rooftop Solar Systems (Residential & Commercial)", description: "Complete rooftop solutions with installation support", icon: "🏠" },
      { name: "Solar Inverters (On-Grid / Off-Grid / Hybrid)", description: "Convert DC to AC power efficiently", icon: "⚡" },
      { name: "Solar Charge Controllers (PWM / MPPT)", description: "Optimize charging from solar panels", icon: "🎛️" },
      { name: "Solar Batteries (Lithium-Ion, Tubular)", description: "Store solar energy for later use", icon: "🔋" },
      { name: "Solar Junction Boxes", description: "Safe electrical connections for solar systems", icon: "📦" },
      { name: "Solar DC Cables", description: "High-quality cables for solar installations", icon: "🔌" },
      { name: "Solar Mounting Structures", description: "Durable mounting solutions for all roof types", icon: "🏗️" },
      { name: "Solar Combiner Boxes", description: "Combine multiple solar panel outputs", icon: "🔗" },
      { name: "Solar Street Lights", description: "Autonomous outdoor lighting solutions", icon: "💡" },
      { name: "Solar Water Heaters", description: "Hot water systems powered by solar energy", icon: "♨️" },
      { name: "Solar Pumps (Agriculture & Industrial Use)", description: "Water pumping solutions for farming and industry", icon: "💧" },
    ],
  },
  {
    id: "battery",
    icon: Battery,
    title: "Power Backup & Battery Solutions",
    emoji: "🔋",
    description: "Reliable power backup systems and battery solutions for uninterrupted power supply.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50/50 to-emerald-50/30",
    borderColor: "border-green-500/20",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    products: [
      { name: "Inverter Batteries (Tubular / Flat Plate)", description: "Long-lasting batteries for home inverters", icon: "🔋" },
      { name: "Lithium Battery Packs", description: "Lightweight, high-density energy storage", icon: "⚡" },
      { name: "UPS Batteries", description: "Reliable backup for computer systems", icon: "💻" },
      { name: "Industrial Batteries", description: "Heavy-duty batteries for industrial use", icon: "🏭" },
      { name: "SMF & VRLA Batteries", description: "Maintenance-free sealed batteries", icon: "🔒" },
      { name: "Battery Chargers", description: "Smart charging solutions for all battery types", icon: "🔌" },
      { name: "Battery Monitoring Systems", description: "Real-time battery health monitoring", icon: "📊" },
      { name: "Battery Racks & Cabinets", description: "Organized storage for battery systems", icon: "🗄️" },
    ],
  },
  {
    id: "inverters",
    icon: Zap,
    title: "Inverters & Power Electronics",
    emoji: "🔌",
    description: "Advanced inverters and power electronics for home, commercial, and industrial applications.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-blue-50/50 to-indigo-50/30",
    borderColor: "border-blue-500/20",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
    products: [
      { name: "Home Inverters", description: "Reliable power backup for homes", icon: "🏠" },
      { name: "Commercial & Industrial Inverters", description: "High-capacity inverters for businesses", icon: "🏢" },
      { name: "Online / Offline UPS Systems", description: "Uninterruptible power supply solutions", icon: "🔄" },
      { name: "Servo Voltage Stabilizers", description: "Protect equipment from voltage fluctuations", icon: "📈" },
      { name: "Automatic Voltage Regulators (AVR)", description: "Maintain stable voltage output", icon: "⚙️" },
      { name: "Power Distribution Units (PDU)", description: "Efficient power distribution for data centers", icon: "🔌" },
    ],
  },
  {
    id: "electrical",
    icon: Gauge,
    title: "Electrical & Control Electronics",
    emoji: "⚙️",
    description: "Smart metering, protection devices, and control panels for modern electrical systems.",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-gradient-to-br from-purple-50/50 to-violet-50/30",
    borderColor: "border-purple-500/20",
    iconBg: "bg-gradient-to-br from-purple-500 to-violet-500",
    products: [
      { name: "Energy Meters (Smart & Digital)", description: "Accurate energy consumption tracking", icon: "📊" },
      { name: "Power Monitoring Devices", description: "Real-time power quality analysis", icon: "📈" },
      { name: "Circuit Breakers (MCB, MCCB)", description: "Electrical circuit protection", icon: "🔒" },
      { name: "Surge Protection Devices (SPD)", description: "Protect against voltage spikes", icon: "⚡" },
      { name: "AC / DC Isolators", description: "Safe electrical isolation switches", icon: "🔌" },
      { name: "Control Panels (Solar & Power Panels)", description: "Centralized system control and monitoring", icon: "🎛️" },
    ],
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Energy Electronics",
    emoji: "🏭",
    description: "Industrial-grade energy solutions including EV charging and energy storage systems.",
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-gradient-to-br from-slate-100/50 to-slate-200/30",
    borderColor: "border-slate-500/20",
    iconBg: "bg-gradient-to-br from-slate-600 to-slate-800",
    products: [
      { name: "EV Charging Stations (AC / DC)", description: "Fast and slow charging for electric vehicles", icon: "🚗" },
      { name: "Power Conditioning Units", description: "Clean and stable power output", icon: "🔋" },
      { name: "Load Management Systems", description: "Optimize power consumption", icon: "📊" },
      { name: "Energy Storage Systems (ESS)", description: "Large-scale energy storage solutions", icon: "🏗️" },
    ],
  },
];

export default function Products() {
  const location = useLocation();
  const [expandedCategory, setExpandedCategory] = useState<string | null>("solar");
  const metaTitle = "Electronics Products - Solar, Power & Energy Systems | Tech Vexor";
  const metaDescription = "Explore our comprehensive range of electronics products including solar panels, inverters, batteries, EV charging stations, and industrial energy solutions. Quality products for residential, commercial, and industrial applications.";
  const canonicalUrl = `${BASE_URL}${location.pathname}`;
  
  usePageTitle(metaTitle, { suffix: null });

  useEffect(() => {
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

    setMetaTag("description", metaDescription);
    setMetaTag("keywords", "solar panels, solar inverters, batteries, UPS, EV charging stations, power backup, energy storage, industrial electronics, power electronics");
    setMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    setLinkTag("canonical", canonicalUrl);

    setMetaTag("og:title", metaTitle, true);
    setMetaTag("og:description", metaDescription, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:url", canonicalUrl, true);
    setMetaTag("og:site_name", SITE_NAME, true);
    setMetaTag("og:locale", "en_US", true);

    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", metaTitle);
    setMetaTag("twitter:description", metaDescription);
    setMetaTag("twitter:site", "@techvexor");

    const productsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Tech Vexor Electronics Products",
      "description": metaDescription,
      "url": canonicalUrl,
      "numberOfItems": productCategories.length,
      "itemListElement": productCategories.map((category, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": category.title,
          "description": category.description,
        }
      }))
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
          "name": "Products",
          "item": canonicalUrl
        }
      ]
    };

    document.querySelectorAll('script[type="application/ld+json"][data-products-seo]').forEach(el => el.remove());

    [productsSchema, breadcrumbSchema].forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-products-seo", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[type="application/ld+json"][data-products-seo]').forEach(el => el.remove());
    };
  }, [canonicalUrl]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 border-indigo-500/30 hover:bg-indigo-500/30 px-6 py-2 text-sm">
                  ⚡ Premium Electronics Products
                </Badge>
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Solar, Power & Energy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500">
                  Solutions
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Comprehensive range of high-quality electronics products for residential, commercial, and industrial applications. From solar panels to EV charging stations.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <GradientButton asChild size="lg" className="text-lg px-8 py-6">
                  <Link to="/contact">Request Quote</Link>
                </GradientButton>
                <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 text-lg px-8 py-6">
                  <a href="#categories">Browse Categories</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-slate-700/50 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Products", icon: "📦" },
                { value: "50+", label: "Brands", icon: "🏆" },
                { value: "1000+", label: "Happy Clients", icon: "😊" },
                { value: "24/7", label: "Support", icon: "💬" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-300 font-medium">{stat.label}</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section id="categories" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Product Categories
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Explore our comprehensive range of electronics products designed for efficiency, reliability, and sustainability.
              </p>
            </motion.div>

            <div className="space-y-6">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`bg-slate-800/40 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/60 transition-all duration-300 overflow-hidden shadow-xl`}>
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full text-left"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              className={`p-4 rounded-2xl ${category.iconBg} shadow-lg`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <category.icon className="w-7 h-7 text-white" />
                            </motion.div>
                            <div>
                              <CardTitle className="text-2xl text-white flex items-center gap-3">
                                <span className="text-3xl">{category.emoji}</span>
                                {category.title}
                              </CardTitle>
                              <CardDescription className="text-slate-400 mt-2 text-base">
                                {category.description}
                              </CardDescription>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary" className="bg-slate-700/70 text-slate-200 px-4 py-1.5 text-sm">
                              {category.products.length} Products
                            </Badge>
                            <motion.div
                              animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-6 h-6 text-slate-400" />
                            </motion.div>
                          </div>
                        </div>
                      </CardHeader>
                    </button>

                    {expandedCategory === category.id && (
                      <CardContent className="pt-0 pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                          {category.products.map((product, productIndex) => (
                            <motion.div
                              key={productIndex}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: productIndex * 0.05 }}
                              className={`group relative p-5 rounded-xl ${category.bgColor} ${category.borderColor} border-2 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm`}
                            >
                              <div className="flex items-start gap-3">
                                <span className="text-3xl flex-shrink-0">{product.icon}</span>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                                    {product.name}
                                  </h4>
                                  <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Custom Solutions?
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Our team of experts can help you find the perfect products for your specific requirements. Get personalized recommendations and competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton asChild size="lg" className="text-lg px-8 py-6">
                  <Link to="/contact">Get in Touch</Link>
                </GradientButton>
                <Button variant="outline" size="lg" className="border-slate-400 text-white hover:bg-slate-700/50 hover:border-slate-300 text-lg px-8 py-6">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Download Catalog
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Products?
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Industry-leading quality, support, and value for all your energy needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Premium Quality",
                  description: "All products are sourced from certified manufacturers with quality assurance.",
                  icon: "✓",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Competitive Pricing",
                  description: "Best-in-class pricing with bulk order discounts available.",
                  icon: "💰",
                  gradient: "from-amber-500 to-orange-500"
                },
                {
                  title: "Expert Support",
                  description: "Technical consultation and after-sales support from our expert team.",
                  icon: "🛠️",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Fast Delivery",
                  description: "Pan-India delivery with logistics partners for timely shipping.",
                  icon: "🚚",
                  gradient: "from-purple-500 to-pink-500"
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 h-full text-center hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 overflow-hidden group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      <CardHeader className="relative">
                        <motion.div 
                          className="text-5xl mb-4 inline-block"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {feature.icon}
                        </motion.div>
                        <CardTitle className="text-xl text-white mb-2">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative">
                        <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
