import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Sparkles, ArrowRight, Code, Rocket, Brain, Palette, TrendingUp, Shield, Star, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const services = [
    { icon: Code, title: "Web Development", color: "from-blue-500 to-cyan-500", description: "Modern & Responsive" },
    { icon: Brain, title: "AI & Automation", color: "from-violet-500 to-purple-500", description: "Smart Solutions" },
    { icon: Palette, title: "UI/UX Design", color: "from-pink-500 to-rose-500", description: "Beautiful Interfaces" },
    { icon: TrendingUp, title: "Digital Marketing", color: "from-orange-500 to-amber-500", description: "Growth Focused" },
    { icon: Rocket, title: "Cloud Solutions", color: "from-green-500 to-emerald-500", description: "Scalable Infrastructure" },
    { icon: Shield, title: "Cybersecurity", color: "from-red-500 to-pink-500", description: "Enterprise Security" },
  ];

  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  const stats = [
    { value: "120+", label: "Clients" },
    { value: "96%", label: "Success" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=60')] bg-cover bg-center opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-32 -left-32 h-64 w-64 sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px] rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/20 blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-64 w-64 sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px] rounded-full bg-gradient-to-br from-violet-500/25 to-purple-500/15 blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-32 w-32 sm:h-48 sm:w-48 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16 py-20 sm:py-24 lg:py-32 min-h-[100svh]">
          
          {/* Left Content - Text Section */}
          <div className="w-full text-center lg:text-left space-y-5 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            
            {/* Top Badge - Hidden on phone */}
            <motion.div
              className="hidden sm:inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl px-4 py-2 sm:px-5 sm:py-2.5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold text-cyan-100 tracking-wide">
                AI Growth Agency
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            {/* Main Heading - Hidden on phone */}
            <motion.div
              className="hidden sm:block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Transform Your</span>
                <br />
                <span className="relative inline-block mt-1 sm:mt-2">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                    Digital Presence
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-1 sm:h-1.5 w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Description - Hidden on phone */}
            <motion.p
              className="hidden sm:block text-sm sm:text-base lg:text-lg xl:text-xl text-slate-300/90 leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We craft intelligent digital experiences that drive growth. From AI-powered solutions to performance marketing, we help brands scale faster.
            </motion.p>

            {/* Feature Pills - Hidden on phone */}
            <motion.div
              className="hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { icon: Zap, text: "Lightning Fast" },
                { icon: CheckCircle2, text: "Proven Results" },
                { icon: Star, text: "5-Star Rated" },
              ].map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-slate-300"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400" />
                  {item.text}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.98 }} 
                className="w-full sm:w-auto"
              >
                <GradientButton asChild size="lg" className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 shadow-2xl shadow-cyan-500/20 rounded-xl">
                  <Link to="/products" className="flex items-center gap-2">
                    View Products
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </GradientButton>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.98 }} 
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/30 rounded-xl"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Call Now - Mobile Prominent */}
            <motion.a
              href="tel:+917895849990"
              className="lg:hidden flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-emerald-400/70">Call Us Now</p>
                <p className="text-base font-semibold">+91 78958 49990</p>
              </div>
            </motion.a>

            {/* Stats Row */}
            <motion.div
              className="hidden sm:flex items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-10 pt-4 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Service Showcase */}
          <div className="w-full order-1 lg:order-2">
            <motion.div
              className="relative w-full max-w-[340px] sm:max-w-md mx-auto aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Outer Glow */}
              <motion.div
                className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-violet-500/20 blur-2xl sm:blur-3xl"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.08, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Main Card */}
              <div className="relative h-full w-full rounded-3xl sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl shadow-2xl overflow-hidden">
                
                {/* Inner Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />
                
                {/* Animated Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="absolute h-[85%] w-[85%] rounded-full border border-white/5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute h-[70%] w-[70%] rounded-full border border-cyan-500/10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute h-[55%] w-[55%] rounded-full border border-violet-500/15"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Service Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full px-6 sm:px-8">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      const isActive = index === activeService;
                      return (
                        <motion.div
                          key={index}
                          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 30,
                            scale: isActive ? 1 : 0.9,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Icon Container */}
                          <motion.div
                            className={`relative mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.color} p-4 sm:p-6 shadow-2xl`}
                            animate={isActive ? {
                              rotate: [0, 3, -3, 0],
                              scale: [1, 1.05, 1]
                            } : {}}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <Icon className="h-10 w-10 sm:h-14 sm:w-14 text-white" strokeWidth={1.5} />
                            <motion.div
                              className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-white/20"
                              animate={{ opacity: [0, 0.4, 0] }}
                              transition={{ duration: 2.5, repeat: Infinity }}
                            />
                            {/* Floating particles */}
                            <motion.div
                              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white/60"
                              animate={{ y: [-5, -15, -5], opacity: [0.6, 1, 0.6] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                          
                          {/* Service Title */}
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1.5 sm:mb-2">
                            {service.title}
                          </h3>
                          
                          {/* Service Description */}
                          <p className="text-sm sm:text-base text-slate-400">
                            {service.description}
                          </p>
                          
                          {/* Accent Line */}
                          <motion.div
                            className="mt-4 sm:mt-5 h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400"
                            initial={{ scaleX: 0 }}
                            animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.6 }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5">
                  {services.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`transition-all duration-300 rounded-full ${
                        index === activeService 
                          ? "w-7 sm:w-8 h-2.5 sm:h-3 bg-gradient-to-r from-cyan-400 to-blue-500" 
                          : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/20 hover:bg-white/40"
                      }`}
                      onClick={() => setActiveService(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`View ${services[index].title}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mobile Stats - Below Card - HIDDEN */}
            {/* <motion.div
              className="flex sm:hidden items-center justify-center gap-6 mt-6 pt-4 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
