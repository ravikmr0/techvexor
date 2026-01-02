import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuoteDialog } from "@/components/quote-dialog";
import { 
  getProductBySlug, 
  getRelatedProducts, 
  Product,
  categories 
} from "@/data/products-catalog";
import { 
  ChevronLeft, 
  Star, 
  ShoppingCart, 
  Phone, 
  Shield, 
  Truck, 
  Award,
  Check,
  Share2,
  Heart,
  Zap,
  Package,
  Clock
} from "lucide-react";

const BASE_URL = "https://www.techvexor.com";
const SITE_NAME = "Tech Vexor";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const foundProduct = getProductBySlug(slug);
      if (foundProduct) {
        setProduct(foundProduct);
        setRelatedProducts(getRelatedProducts(foundProduct, 4));
        setSelectedImage(0);
      }
      setLoading(false);
    }
  }, [slug]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24">
          <div className="container mx-auto px-4 py-20">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-700 rounded w-1/4 mb-8"></div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="h-96 bg-slate-700 rounded-2xl"></div>
                <div className="space-y-4">
                  <div className="h-10 bg-slate-700 rounded w-3/4"></div>
                  <div className="h-6 bg-slate-700 rounded w-1/2"></div>
                  <div className="h-20 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
            <p className="text-slate-400 mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/products">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const canonicalUrl = `${BASE_URL}/products/${product.slug}`;
  const categoryName = categories.find(c => c.id === product.category)?.name || product.category;

  // Generate structured data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.longDescription,
    "image": product.images,
    "sku": product.sku,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": "INR",
      "price": product.priceValue,
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": SITE_NAME
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
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
        "item": `${BASE_URL}/products`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": categoryName,
        "item": `${BASE_URL}/products?category=${product.category}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": product.name,
        "item": canonicalUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{product.metaTitle}</title>
        <meta name="title" content={product.metaTitle} />
        <meta name="description" content={product.metaDescription} />
        <meta name="keywords" content={product.keywords.join(", ")} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={product.metaTitle} />
        <meta property="og:description" content={product.metaDescription} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_IN" />
        <meta property="product:price:amount" content={product.priceValue.toString()} />
        <meta property="product:price:currency" content="INR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={product.metaTitle} />
        <meta name="twitter:description" content={product.metaDescription} />
        <meta name="twitter:image" content={product.images[0]} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <QuoteDialog 
        open={quoteDialogOpen} 
        onOpenChange={setQuoteDialogOpen}
        serviceTitle={product.name}
      />

      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24">
        {/* Breadcrumb */}
        <section className="py-4 border-b border-slate-800">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              <span>/</span>
              <span className="text-slate-300">{categoryName}</span>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Detail Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product Images */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700 mb-4">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                  />
                  {product.inStock && (
                    <Badge className="absolute top-4 left-4 bg-green-500/90 text-white border-0">
                      In Stock
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="icon" variant="secondary" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Thumbnail Images */}
                {product.images.length > 1 && (
                  <div className="flex gap-3">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === idx 
                            ? 'border-amber-500 ring-2 ring-amber-500/30' 
                            : 'border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Category Badge */}
                <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                  {categoryName}
                </Badge>

                {/* Product Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {product.name}
                </h1>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold">{product.rating}</span>
                  <span className="text-slate-400">({product.reviewCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                    {product.price}
                  </span>
                  <span className="text-slate-400">+ GST</span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  {product.longDescription}
                </p>

                {/* SKU & Brand */}
                <div className="flex flex-wrap gap-6 mb-8 text-sm">
                  <div>
                    <span className="text-slate-500">SKU:</span>
                    <span className="text-slate-300 ml-2">{product.sku}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Brand:</span>
                    <span className="text-slate-300 ml-2">{product.brand}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Warranty:</span>
                    <span className="text-green-400 ml-2">{product.warranty}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <GradientButton 
                    size="lg" 
                    className="flex-1 text-lg py-6"
                    onClick={() => setQuoteDialogOpen(true)}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Get Quote
                  </GradientButton>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1 border-slate-600 text-white hover:bg-slate-700 text-lg py-6"
                    asChild
                  >
                    <Link to="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us
                    </Link>
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: Shield, label: "100% Genuine", desc: "Authentic products" },
                    { icon: Truck, label: "Free Delivery", desc: "On orders above ₹10k" },
                    { icon: Award, label: "Warranty", desc: product.warranty },
                    { icon: Clock, label: "Fast Support", desc: "24/7 assistance" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-800/50 border border-slate-700">
                      <item.icon className="w-6 h-6 text-amber-400 mb-2" />
                      <span className="text-white text-sm font-medium">{item.label}</span>
                      <span className="text-slate-500 text-xs">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="w-full justify-start bg-slate-800/50 border border-slate-700 p-1 rounded-xl mb-8">
                <TabsTrigger value="specifications" className="px-6 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500">
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="features" className="px-6 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500">
                  Features
                </TabsTrigger>
                <TabsTrigger value="warranty" className="px-6 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500">
                  Warranty
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specifications">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Package className="w-5 h-5 text-amber-400" />
                      Technical Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.specifications.map((spec, idx) => (
                        <div 
                          key={idx}
                          className="flex justify-between items-center py-3 px-4 rounded-lg bg-slate-900/50 border border-slate-700"
                        >
                          <span className="text-slate-400">{spec.label}</span>
                          <span className="text-white font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-400" />
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 py-3 px-4 rounded-lg bg-slate-900/50 border border-slate-700"
                        >
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="warranty">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Shield className="w-5 h-5 text-amber-400" />
                      Warranty Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Award className="w-8 h-8 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white">{product.warranty}</h4>
                          <p className="text-slate-400">Manufacturer Warranty</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700">
                          <h5 className="text-white font-semibold mb-2">What's Covered</h5>
                          <ul className="text-slate-400 space-y-1 text-sm">
                            <li>• Manufacturing defects</li>
                            <li>• Component failures under normal use</li>
                            <li>• Performance degradation within specs</li>
                          </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700">
                          <h5 className="text-white font-semibold mb-2">How to Claim</h5>
                          <ul className="text-slate-400 space-y-1 text-sm">
                            <li>• Contact our support team</li>
                            <li>• Provide purchase invoice</li>
                            <li>• Describe the issue in detail</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">Related Products</h2>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700" asChild>
                  <Link to={`/products?category=${product.category}`}>
                    View All
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link to={`/products/${relatedProduct.slug}`}>
                      <Card className="bg-slate-800/40 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/60 transition-all duration-300 overflow-hidden group h-full">
                        <div className="relative h-48 overflow-hidden bg-slate-700/30">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {relatedProduct.inStock && (
                            <Badge className="absolute top-3 right-3 bg-green-500/90 text-white border-0">
                              In Stock
                            </Badge>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors">
                            {relatedProduct.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                              <span className="text-white ml-1">{relatedProduct.rating}</span>
                            </div>
                            <span className="text-slate-500 text-sm">({relatedProduct.reviewCount})</span>
                          </div>
                          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                            {relatedProduct.price}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Our experts are here to help you find the perfect solution for your needs. Get personalized recommendations and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton size="lg" className="px-8" asChild>
                <Link to="/contact">Get Expert Advice</Link>
              </GradientButton>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8">
                <Phone className="w-5 h-5 mr-2" />
                +91 120 4561234
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
