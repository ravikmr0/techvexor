import { Menu, X, Phone, ChevronRight, Briefcase, Building2, FolderKanban, Package, Users, Mail, LogIn, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { serviceGroups } from "@/data/services-catalog";
import { industryGroups } from "@/data/industry-catalog";
import { GlobalSearch } from "@/components/search/global-search";

const navItems = [
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Products", href: "/products", icon: Package },
  { label: "About Us", href: "/about", icon: Users },
  { label: "Contact Us", href: "/contact", icon: Mail },
  { label: "Book Your Demo", href: "/book-demo", icon: Sparkles },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5" 
          : "bg-gradient-to-b from-slate-900/80 to-transparent"
      }`}
    >
      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="relative">
              <img
                src="/vexor-w.svg"
                alt="Tech Vexor Logo"
                width="40"
                height="40"
                className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-violet-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                Tech Vexor
              </span>
              <span className="text-[10px] text-slate-400 -mt-0.5 hidden sm:block">AI Growth Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-end">
            {/* Search Bar - Desktop Only */}
            <div className="flex items-center max-w-xs w-full">
              <GlobalSearch variant="desktop" className="w-full" />
            </div>

            {/* Navigation Items */}
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-6 p-6 md:w-[500px] lg:w-[500px] grid-cols-2 ">
                      <div >
                        <h4 className="text-sm font-semibold text-slate-800 mb-3">Core Services</h4>
                        <ul className="space-y-2.5">
                          <li>
                            <Link to="/services/website-development" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Website Development
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/mobile-app-developmentt" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Mobile App Development
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/chatbot-ai-automation" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              AI & Automation
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/cloud-services" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Cloud Solutions
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-3">Marketing & Design</h4>
                        <ul className="space-y-2.5">
                          <li>
                            <Link to="/services/seo" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              SEO & Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/ui-ux" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              UI/UX Design
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/brand-identity" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Brand Identity
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/content-marketing" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Content Marketing
                            </Link>
                          </li>
                          <li className="pt-2 border-t border-slate-200">
                            <Link to="/services" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                              View All Services
                              <span className="text-xs">→</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-6 p-6 md:w-[500px] lg:w-[500px] grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-3">Business & Tech</h4>
                        <ul className="space-y-2.5">
                          <li>
                            <Link to="/industries/software-development" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Software Development
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/ecommerce-general" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              E-commerce
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/digital-marketing-ads" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/banks-credit-unions" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Finance & Banking
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/residential-commercial-real-estate" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Real Estate
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-3">Services & Retail</h4>
                        <ul className="space-y-2.5">
                          <li>
                            <Link to="/industries/hospitals-clinics" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Healthcare
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/schools" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Education
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/restaurants-catering" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Restaurants & Hospitality
                            </Link>
                          </li>
                          <li>
                            <Link to="/industries/food-processing" className="text-sm text-slate-600 hover:text-blue-600 transition-colors block">
                              Manufacturing
                            </Link>
                          </li>
                          <li className="pt-2 border-t border-slate-200">
                            <Link to="/industries" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                              View All Industries
                              <span className="text-xs">→</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Simple items */}
                {navItems.map((item, i) => (
                  <NavigationMenuItem key={i}>
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm rounded-md transition-colors ${isActive(item.href) ? "text-white bg-slate-800" : "text-slate-300 hover:text-white"}`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Action Buttons removed as per sequence */}
          </div>

          {/* Mobile Search and Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <GlobalSearch variant="mobile" className="w-full max-w-[140px]" />
            <button
              className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Professional Slide-in Design */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="lg:hidden fixed inset-y-0 right-0 w-full max-w-[320px] z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl shadow-black/50"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-violet-500/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative h-full flex flex-col">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Menu</h2>
                      <p className="text-xs text-slate-400">Navigate anywhere</p>
                    </div>
                  </div>
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-4 px-4">
                  <nav className="space-y-2">
                    {/* Main Categories */}
                    <motion.div custom={0} variants={itemVariants}>
                      <Link
                        to="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <span className="text-white font-semibold text-base">Services</span>
                          <p className="text-xs text-slate-400">Explore our offerings</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>

                    <motion.div custom={1} variants={itemVariants}>
                      <Link
                        to="/industries"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 hover:border-violet-500/40 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <span className="text-white font-semibold text-base">Industries</span>
                          <p className="text-xs text-slate-400">Solutions by sector</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>

                    {/* Divider */}
                    <div className="py-3">
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>

                    {/* Other Nav Items */}
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div key={index} custom={index + 2} variants={itemVariants}>
                          <Link
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-4 p-3.5 rounded-xl transition-all group ${
                              isActive(item.href) 
                                ? "bg-white/10 border border-white/20" 
                                : "hover:bg-white/5 border border-transparent"
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isActive(item.href) 
                                ? "bg-gradient-to-br from-cyan-500 to-blue-500" 
                                : "bg-white/5"
                            }`}>
                              <Icon className={`w-5 h-5 ${isActive(item.href) ? "text-white" : "text-slate-400"}`} />
                            </div>
                            <span className={`font-medium ${isActive(item.href) ? "text-white" : "text-slate-300"}`}>
                              {item.label}
                            </span>
                            {isActive(item.href) && (
                              <div className="ml-auto w-2 h-2 rounded-full bg-cyan-400" />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>
                </div>

                {/* Bottom CTA */}
                <div className="p-4 border-t border-white/10">
                  <motion.a
                    href="tel:+917895849990"
                    custom={navItems.length + 2}
                    variants={itemVariants}
                    className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-[0.98]"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call +91 78958 49990</span>
                  </motion.a>
                  <p className="text-center text-xs text-slate-500 mt-3">
                    Available Mon-Sat, 9AM-7PM IST
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
