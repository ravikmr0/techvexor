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
  
  const metaTitle = "Electronics Products | Consumer Electronics, Electronic Devices & Product Electronics | Tech Vexor";
  const metaDescription = "Explore Tech Vexor's comprehensive electronics products catalog featuring consumer electronics products, electronic devices brands, electronics store product list, and product electronics. Browse electronics related products including electronic products industries, solar electronics, industrial electronics examples, and electronic products recycling. Premium electronics for all industries.";
  const canonicalUrl = `${BASE_URL}${location.pathname}`;
  
  // Comprehensive SEO Keywords for Electronics Products
  const metaKeywords = `electronics products, consumer electronics products, electronic devices brands, electronics store product list, products related, products of electrical engineering, product electronics, electronics products magazine, electronic products industries, electronics company, popular electronic device, electronics store business type, electronic products windows, b-electronics llc, electronics company b, b&b electronics products, electronics product based companies bangalore, product based electronics companies, electronics product based companies india, electronics product based companies chennai, electronics product based companies hyderabad, consumer electronics categories, c electronics manufacturing, c electronics manufacturing fort lauderdale, c electronics, c e electronics, c e electronics inc, d electronics, d f electronics inc, electronic products design, electronics discontinued, discontinued electronic components, electronic products llc, electronic products recycling and reuse act, electronic products and technology, electronic products recycling, f-s electronics, electronics f, f & l electronics, electronics start with f, g-electronic, g e products, g products, electronics gadgets start with g, h electronic brand, h products, h electronics, h b electronics, h.l. electronics, industrial electronics examples, electronic products industries inc, electronic products inc, j and p electronics, j e electronics, j r electronics, j electronic, electronics with k, electronics starting with k, k-products, consumer electronics ki, k-products company, l electronics brand, l t electronics inc, l product, l electronics, l electronic component, m&m electronics ltd, electronic products magazine, m&m electronics m.s.m. ltd, n and r electronics, n & t electronics, o electronics, electronic oems, old electronics company, obsolete electronics parts, electronics p, electronics start with p, qvc products electronics, electronics q, q products and services, q products reviews, q-products, r and electronics, r e electronics, r+l electronics, electronics company r, electronics start with s, electronics with s, electronic devices start with s, electronics with t, electronics consumer t, t p electronics, u electronics, u.s. electronics companies, u s electronics inc, universal electronics products, u.s. electronics manufacturing industry, electronics with v, electronics gadgets with v, electronic start with v, electronics gadgets start with v, v products llc, electronic with w, electronics gadgets start with w, wh electronics, x-cel electronics, x electronics, x products, x-products, x.p. electronics l.l.c, electronics gadgets start with y, electronics y, electronic start with y, z products inc, z electronics, z product, electronics start with o, 0 products, 0 electronics, zero-rated products, electronics products list, 1-source electronic components, 1 source electronics, 1 product companies, 2 products, two electronic products, two products same, two products electronic industry, two similar products, 3 products, 3 product elements, 3 products recalled, 3c electronic products, 3 popular products, 4 products, 4-electronics, 4 words consumer electronics brand, 4 elements product design, 4 consumer products, 5 products, 5 product recalls, 5 facts electronics, 5 products failed, 5 products made usa, 6 products, 6 electronic devices, 6 products technology, electronic product 6-7 store, electronics retailer 7, 7 electronic devices, 7 eleven products services, list electronics devices, 8 products, 8 electronic devices, 8 com electronics, 8 letter products, eight products technology, 9 elements products, electronics 9 volt batteries, 9 electronics, products released 1990, products use 9v batteries, solar panels, inverters, batteries, UPS, EV charging stations, power backup, energy storage, industrial electronics, power electronics`;
  
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
    setMetaTag("keywords", metaKeywords);
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
      "name": "Tech Vexor Electronics Products - Consumer Electronics & Product Electronics Store",
      "description": "Comprehensive electronics products catalog featuring consumer electronics products, electronic devices brands, electronics store product list, and electronic products industries",
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

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tech Vexor Electronics Products",
      "description": "Leading electronics products company offering consumer electronics, electronic devices brands, electronics store products, and industrial electronics examples",
      "url": BASE_URL,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210",
        "contactType": "sales",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/techvexor",
        "https://www.linkedin.com/company/techvexor",
        "https://twitter.com/techvexor"
      ]
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "Tech Vexor Electronics Store",
      "image": `${BASE_URL}/vexor-w.png`,
      "description": "Premium electronics store offering electronics products, consumer electronics products, electronic products industries, and product electronics",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
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

    [productsSchema, breadcrumbSchema, organizationSchema, localBusinessSchema].forEach(schema => {
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
                    Premium Electronics Products Store
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Premium Electronics Products &{" "}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
                      Consumer Electronics
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
                  Discover our extensive collection of <span className="text-amber-400 font-semibold">{allProducts.length}+</span> premium electronics products. From consumer electronics products to electronic devices brands — browse our electronics store product list for industrial electronics examples and electronic products industries.
                </motion.p>

                {/* Features Pills */}
                <motion.div 
                  className="flex flex-wrap gap-3 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {[
                    { icon: "🔌", text: "Consumer Electronics Products" },
                    { icon: "🏭", text: "Industrial Electronics" },
                    { icon: "⚡", text: "Electronic Devices Brands" },
                    { icon: "📦", text: "Product Electronics" },
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
                      Get Electronics Products Quote
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
                    Electronics Products Store
                  </h2>
                  <p className="text-slate-400">
                    Showing {filteredProducts.length} of {allProducts.length} electronics products - Browse consumer electronics, electronic devices brands & more
                  </p>
                </div>
                
                {/* Search Bar */}
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search electronics products..."
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
                <h3 className="text-2xl font-bold text-white mb-2">No electronics products found</h3>
                <p className="text-slate-400">Try adjusting your search or filter criteria for consumer electronics products</p>
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
                            alt={`${product.name} - Electronics Products`}
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
                Need Custom Electronics Products Solutions?
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Our team of experts can help you find the perfect electronics products for your specific requirements. Whether you need consumer electronics products, electronic devices brands, or industrial electronics examples — get personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton asChild size="lg" className="text-lg px-8 py-6">
                  <Link to="/contact">Get Electronics Products Quote</Link>
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
                Why Choose Our Electronics Products?
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Industry-leading consumer electronics products, electronic devices brands, and product electronics for all needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Premium Electronics Products",
                  description: "All electronics products are sourced from certified manufacturers with quality assurance.",
                  icon: "✓",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Competitive Products Pricing",
                  description: "Best-in-class pricing on electronics store product list with bulk order discounts.",
                  icon: "💰",
                  gradient: "from-amber-500 to-orange-500"
                },
                {
                  title: "Expert Electronics Support",
                  description: "Technical consultation and after-sales support for all electronic devices brands.",
                  icon: "🛠️",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Fast Products Delivery",
                  description: "Pan-India delivery of electronics products with logistics partners for timely shipping.",
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

        {/* SEO Content Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Comprehensive Electronics Products & Consumer Electronics Guide
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {/* Electronics Products Categories */}
                <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">Electronics Products Categories</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Explore our complete electronics products catalog featuring consumer electronics products, 
                    electronics related products, and products of electrical engineering. Our electronics store 
                    product list includes product electronics from leading electronic devices brands across 
                    consumer electronics categories.
                  </p>
                </div>

                {/* Electronic Products Industries */}
                <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Electronic Products Industries</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Tech Vexor serves electronic products industries with industrial electronics examples 
                    and electronic products industries inc solutions. From electronic products magazine 
                    featured items to electronic products llc grade equipment, we provide electronic 
                    products and technology for every sector.
                  </p>
                </div>

                {/* Product Based Electronics Companies */}
                <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-green-400 mb-4">Product Based Electronics Companies</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Partner with leading electronics product based companies in bangalore, electronics 
                    product based companies in india, electronics product based companies in chennai, 
                    and electronics product based companies in hyderabad. Our product based electronics 
                    companies deliver quality solutions.
                  </p>
                </div>

                {/* Electronics Manufacturing */}
                <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Electronics Manufacturing</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    From c electronics manufacturing to u.s. electronics manufacturing industry standards, 
                    we source from c electronics manufacturing fort lauderdale and global manufacturers. 
                    Our electronic products design meets c e electronics inc and d f electronics inc 
                    quality standards.
                  </p>
                </div>

                {/* Consumer Electronics */}
                <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-orange-400 mb-4">Consumer Electronics Solutions</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Browse consumer electronics categories including 3c electronic products, 4 consumer 
                    products, and 4 words consumer electronics brand options. From electronics consumer t 
                    to consumer electronics ki selections, find what are consumer electronics products 
                    that match your needs.
                  </p>
                </div>

                {/* Electronics Recycling */}
                <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Electronics Recycling & Sustainability</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We support electronic products recycling and reuse act compliance, electronic 
                    products recycling programs, and sustainable electronics disposal. Trade in 
                    discontinued electronic components and obsolete electronics parts responsibly 
                    with our old electronics company exchange program.
                  </p>
                </div>
              </div>

              {/* Electronics A-Z Section */}
              <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-slate-700 mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Electronics Products A-Z Directory</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-slate-300">
                  <div>
                    <span className="text-amber-400 font-bold">A-B:</span> Electronics related products, 
                    b-electronics llc, b&b electronics products
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold">C-D:</span> c electronics, c e electronics, 
                    d electronics, d f electronics inc
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold">E-F:</span> Electronic products llc, 
                    f-s electronics, f & l electronics
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold">G-H:</span> g-electronic, g e products, 
                    h electronics, h b electronics
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold">I-J:</span> Industrial electronics examples, 
                    j and p electronics, j e electronics
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold">K-L:</span> Electronics with k, k-products, 
                    l electronics brand, l t electronics inc
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold">M-N:</span> m&m electronics ltd, 
                    n and r electronics, n & t electronics
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold">O-P:</span> o electronics, electronic oems, 
                    electronics p, electronics start with p
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold">Q-R:</span> qvc products electronics, 
                    q-products, r and electronics, r e electronics
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold">S-T:</span> Electronics start with s, 
                    electronics with t, t p electronics
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold">U-V:</span> u electronics, u.s. electronics companies, 
                    electronics with v, v products llc
                  </div>
                  <div>
                    <span className="text-amber-400 font-bold">W-Z:</span> wh electronics, x-cel electronics, 
                    electronics y, z electronics, z products inc
                  </div>
                </div>
              </div>

              {/* Electronics Numbers Section */}
              <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Electronics Products by Numbers</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-amber-400 mb-2">Product Quantities</h4>
                    <p className="text-slate-300 text-sm">
                      0 products, 1 product companies, 1-source electronic components, 2 products, 
                      two electronic products, 3 products, 3c electronic products, 4 products, 
                      4-electronics, 5 products, 6 products, 6 electronic devices
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Electronics Facts & Devices</h4>
                    <p className="text-slate-300 text-sm">
                      5 facts electronics, 7 electronic devices, 8 electronic devices, 8 com electronics, 
                      list electronics devices, electronic product 6-7 store, electronics retailer 7, 
                      nine electronics, electronics 9 volt batteries
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Product Design Elements</h4>
                    <p className="text-slate-300 text-sm">
                      3 product elements, 4 elements product design, electronic products design, 
                      two products electronic industry, two similar products, 3 popular products, 
                      8 letter products, products use 9v batteries
                    </p>
                  </div>
                </div>
              </div>

              {/* Universal Electronics & Special Products */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-6 rounded-xl border border-indigo-700/50">
                  <h3 className="text-xl font-bold text-indigo-300 mb-4">Universal Electronics Products</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Our universal electronics products range covers u.s. electronics inc, u electronics, 
                    and universal electronics products for diverse applications. Whether you need 
                    products released 1990 vintage items or latest 2024 releases, our electronics 
                    store is your one-stop destination.
                  </p>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• x-products and x.p. electronics l.l.c solutions</li>
                    <li>• Electronics gadgets start with y collections</li>
                    <li>• z products inc and z product innovations</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 p-6 rounded-xl border border-amber-700/50">
                  <h3 className="text-xl font-bold text-amber-300 mb-4">Special Electronics Categories</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Find zero-rated products, products that are the same comparisons, and products 
                    recalled information. Browse our selection of a popular electronic device options 
                    and learn why an electronics store is an example of which business type - retail!
                  </p>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• Electronic products that run windows devices</li>
                    <li>• 5 products made usa quality items</li>
                    <li>• 7 eleven products services style convenience</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
