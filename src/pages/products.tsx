import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Battery, Zap, Gauge, Factory, ShoppingCart, Filter, Search, ExternalLink, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { QuoteDialog } from "@/components/quote-dialog";
import { products as catalogProducts, categories as catalogCategories, type Product } from "@/data/products-catalog";

const BASE_URL = "https://www.techvexor.com";
const SITE_NAME = "Tech Vexor";

// Category definitions with icons
const categoryIcons: Record<string, { icon: React.ComponentType<any>, color: string }> = {
  all: { icon: ShoppingCart, color: "slate" },
  solar: { icon: Sun, color: "amber" },
  battery: { icon: Battery, color: "green" },
  inverters: { icon: Zap, color: "blue" },
  electrical: { icon: Gauge, color: "purple" },
  industrial: { icon: Factory, color: "slate" },
};

const categories = catalogCategories.map(cat => ({
  ...cat,
  icon: categoryIcons[cat.id]?.icon || ShoppingCart,
  color: categoryIcons[cat.id]?.color || "slate"
}));

// Use products from catalog
const allProducts = catalogProducts;

export default function Products() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  
  const metaTitle = "Electronics Products - Solar, Power & Energy Systems | Tech Vexor";
  const metaDescription = "Explore our comprehensive range of electronics products including solar panels, inverters, batteries, EV charging stations, and industrial energy solutions. Quality products for residential, commercial, and industrial applications.";
  const canonicalUrl = `${BASE_URL}${location.pathname}`;
  
  usePageTitle(metaTitle, { suffix: null });

  // Filter products based on category and search
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat?.color || "slate";
  };

  const handleQuoteClick = (productName: string) => {
    setSelectedProduct(productName);
    setQuoteDialogOpen(true);
  };

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
      "numberOfItems": allProducts.length,
      "itemListElement": allProducts.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "INR",
            "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
          }
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

  return (
    <>
      <QuoteDialog 
        open={quoteDialogOpen} 
        onOpenChange={setQuoteDialogOpen}
        serviceTitle={selectedProduct}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[85vh] flex items-center">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
            
            {/* Animated Gradient Orbs */}
            <motion.div 
              className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                x: [0, -40, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            
            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-6"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                  </span>
                  <Badge className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 text-amber-200 border-amber-500/40 hover:bg-amber-500/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                    Premium Electronics Store
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Power Your Future with{" "}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
                      Solar Energy
                    </span>
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Discover our extensive collection of <span className="text-amber-400 font-semibold">{allProducts.length}+</span> premium electronics products. From solar panels to EV chargers — everything you need for sustainable energy solutions.
                </motion.p>

                {/* Features Pills */}
                <motion.div 
                  className="flex flex-wrap gap-3 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {[
                    { icon: "☀️", text: "Solar Panels" },
                    { icon: "🔋", text: "Batteries" },
                    { icon: "⚡", text: "Inverters" },
                    { icon: "🚗", text: "EV Chargers" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-slate-300 text-sm"
                    >
                      <span>{item.icon}</span>
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <GradientButton asChild size="lg" className="text-lg px-8 py-6 shadow-xl shadow-orange-500/20">
                    <Link to="/contact" className="flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Request Quote
                    </Link>
                  </GradientButton>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 text-lg px-8 py-6 backdrop-blur-sm"
                  >
                    <a href="#products" className="flex items-center gap-2">
                      <Filter className="w-5 h-5" />
                      Browse Products
                    </a>
                  </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    { value: "500+", label: "Products Sold" },
                    { value: "100%", label: "Genuine Products" },
                    { value: "5 Year", label: "Warranty" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center sm:text-left">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Content - Product Showcase */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden lg:block"
              >
                <div className="relative">
                  {/* Main Product Card */}
                  <motion.div 
                    className="relative z-10 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" 
                        alt="Solar Panels"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/90 text-white text-sm font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        In Stock
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-amber-400">★★★★★</span>
                        <span className="text-slate-400 text-sm">(128 reviews)</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Premium Mono PERC Solar Panel</h3>
                      <p className="text-slate-400 text-sm mb-4">High-efficiency 540W monocrystalline panel with 25-year warranty</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">₹18,500</span>
                          <span className="text-slate-500 text-sm ml-2">+ GST</span>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white" onClick={() => handleQuoteClick("Premium Mono PERC Solar Panel")}>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Product Cards */}
                  <motion.div 
                    className="absolute -top-8 -left-12 w-48 rounded-2xl overflow-hidden bg-slate-800/90 border border-white/10 backdrop-blur-xl shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" alt="Battery" className="w-full h-24 object-cover" />
                    <div className="p-3">
                      <p className="text-white text-sm font-semibold truncate">Lithium Battery</p>
                      <p className="text-amber-400 font-bold">₹32,000</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute -bottom-4 -right-8 w-52 rounded-2xl overflow-hidden bg-slate-800/90 border border-white/10 backdrop-blur-xl shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=400&q=80" alt="EV Charger" className="w-full h-28 object-cover" />
                    <div className="p-3">
                      <p className="text-white text-sm font-semibold truncate">EV Charging Station</p>
                      <p className="text-amber-400 font-bold">₹85,000</p>
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-white/5" />
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-white/5" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <a href="#products" className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <span className="text-sm">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-amber-400"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </a>
          </motion.div>
        </section>



        {/* Filters & Products Section */}
        <section id="products" className="py-24">
          <div className="container mx-auto px-4">
            {/* Search & Filter Header */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Our Products
                  </h2>
                  <p className="text-slate-400">
                    Showing {filteredProducts.length} of {allProducts.length} products
                  </p>
                </div>
                
                {/* Search Bar */}
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;
                  const count = category.id === "all" 
                    ? allProducts.length 
                    : allProducts.filter(p => p.category === category.id).length;
                  
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300
                        ${isActive 
                          ? `bg-${category.color}-500 text-white shadow-lg shadow-${category.color}-500/30` 
                          : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{category.name}</span>
                      <Badge variant="secondary" className={`${isActive ? 'bg-white/20' : 'bg-slate-700'} text-xs`}>
                        {count}
                      </Badge>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
                <p className="text-slate-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="bg-slate-800/40 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/60 transition-all duration-300 overflow-hidden group h-full flex flex-col">
                      {/* Product Image - Clickable */}
                      <Link to={`/products/${product.slug}`} className="block">
                        <div className="relative h-48 overflow-hidden bg-slate-700/30">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {product.inStock && (
                            <Badge className="absolute top-3 right-3 bg-green-500/90 text-white border-0">
                              In Stock
                            </Badge>
                          )}
                          <div className={`absolute top-3 left-3 px-2 py-1 rounded-lg bg-${getCategoryColor(product.category)}-500/90 text-white text-xs font-semibold`}>
                            {categories.find(c => c.id === product.category)?.name.split(' ')[0]}
                          </div>
                        </div>
                      </Link>

                      {/* Product Details */}
                      <CardHeader className="pb-3">
                        <Link to={`/products/${product.slug}`}>
                          <CardTitle className="text-lg text-white group-hover:text-amber-400 transition-colors line-clamp-2 cursor-pointer">
                            {product.name}
                          </CardTitle>
                        </Link>
                        <CardDescription className="text-slate-400 text-sm line-clamp-2">
                          {product.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col justify-end pt-0">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                              {product.price}
                            </div>
                            <div className="text-xs text-slate-500">+ GST</div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                            <span className="text-white font-semibold">{product.rating}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleQuoteClick(product.name);
                            }}
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Get Quote
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500"
                            asChild
                          >
                            <Link to={`/products/${product.slug}`}>
                              Details
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
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
