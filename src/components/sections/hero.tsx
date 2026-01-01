import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Code, Rocket, Brain, Palette, TrendingUp, Shield, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const tags = ["Website", "Social Media", "Digital Marketing", "Performance Marketing"] as const;

  const services = [
    { icon: Code, title: "Web Development", color: "from-blue-500 to-cyan-500", description: "Custom Solutions" },
    { icon: Brain, title: "AI & Automation", color: "from-violet-500 to-purple-500", description: "Smart Systems" },
    { icon: Palette, title: "UI/UX Design", color: "from-pink-500 to-rose-500", description: "Beautiful Interfaces" },
    { icon: TrendingUp, title: "Digital Marketing", color: "from-orange-500 to-amber-500", description: "Growth Strategies" },
    { icon: Rocket, title: "Cloud Solutions", color: "from-green-500 to-emerald-500", description: "Scalable Infrastructure" },
    { icon: Shield, title: "Cybersecurity", color: "from-red-500 to-pink-500", description: "Protected Assets" },
  ];

  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  const stats = [
    { value: "120+", label: "Happy Clients" },
    { value: "96%", label: "Success Rate" },
    { value: "50+", label: "Projects" },
  ];

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 lg:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=60')] bg-cover bg-center" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-32 -left-32 h-64 w-64 sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px] rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-400/20 blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-64 w-64 sm:h-96 sm:w-96 lg:h-[600px] lg:w-[600px] rounded-full bg-gradient-to-br from-violet-600/25 to-purple-400/20 blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 sm:h-72 sm:w-72 lg:h-96 lg:w-96 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16 py-8 sm:py-12 lg:py-12 xl:py-16 min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-5rem)]">
          
          {/* Left Content - Text */}
          <div className="w-full text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-5 order-2 lg:order-1">
            
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold text-cyan-100 tracking-wide">
                Tech Vexor • AI Growth Agency
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-2xl leading-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Build Intelligent,{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  High-Converting
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>{" "}
              <br className="hidden sm:block" />
              Experiences
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We blend AI strategy, responsive web engineering, and performance marketing to accelerate demand generation across every channel.
            </motion.p>

            {/* Tags marquee - mobile optimized */}
            <motion.div
              className="overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm py-2 sm:py-2.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div
                className="flex items-center gap-2 sm:gap-3"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[0, 1].map((row) => (
                  <div key={row} className="flex items-center gap-2 sm:gap-3">
                    {tags.map((tag, index) => (
                      <span
                        key={`${row}-${index}`}
                        className="flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500/90 to-blue-500/90 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-white shadow-lg whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats row - mobile visible */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-[10px] sm:text-xs text-white/60 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>



            {/* CTA Buttons - mobile optimized */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <GradientButton asChild size="lg" className="w-full sm:w-auto text-sm sm:text-base shadow-2xl shadow-cyan-500/25 h-12 sm:h-14 px-6 sm:px-8 rounded-xl">
                  <Link to="/pricing" className="flex items-center justify-center gap-2">
                    Get Pricing
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </GradientButton>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 h-12 sm:h-14 px-6 sm:px-8 rounded-xl"
                >
                  <Link to="/services" className="flex items-center justify-center gap-2">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-white" />
                    Explore Services
                  </Link>
                </Button>
              </motion.div>
            </motion.div>


          </div>

          {/* Right Content - Interactive Card */}
          <div className="w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none order-1 lg:order-2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main card */}
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl shadow-2xl overflow-hidden">
                
                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: "radial-gradient(circle at center, #60a5fa 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                {/* Animated rings */}
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20"
                  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />

                {/* Service showcase */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      const isActive = index === activeService;
                      if (!isActive) return null;
                      
                      return (
                        <motion.div
                          key={index}
                          className="flex flex-col items-center justify-center text-center px-6"
                          initial={{ opacity: 0, y: 30, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -30, scale: 0.8 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div
                            className={`relative mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.color} p-4 sm:p-6 lg:p-8 shadow-2xl`}
                            animate={{
                              rotate: [0, 3, -3, 0],
                              scale: [1, 1.02, 1]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <Icon className="h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-white" strokeWidth={1.5} />
                            <motion.div
                              className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-white/30"
                              animate={{ opacity: [0, 0.5, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            {/* Floating particles */}
                            <motion.div
                              className="absolute -top-2 -right-2 h-3 w-3 rounded-full bg-white/50"
                              animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div
                              className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-white/40"
                              animate={{ y: [5, -5, 5], opacity: [0.4, 0.8, 0.4] }}
                              transition={{ duration: 2.5, repeat: Infinity }}
                            />
                          </motion.div>
                          
                          <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-white/60">
                            {service.description}
                          </p>
                          
                          <motion.div
                            className="mt-3 sm:mt-4 h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Navigation dots */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5">
                  {services.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`rounded-full transition-all duration-300 ${
                        index === activeService 
                          ? "w-6 sm:w-8 h-2 sm:h-2.5 bg-gradient-to-r from-cyan-400 to-blue-500" 
                          : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/30 hover:bg-white/50"
                      }`}
                      onClick={() => setActiveService(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`View ${services[index].title}`}
                    />
                  ))}
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-2xl sm:rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border-r-2 border-b-2 border-violet-400/30 rounded-br-2xl sm:rounded-br-3xl" />
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-4 sm:-inset-6 lg:-inset-8 rounded-3xl sm:rounded-[40px] bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-violet-500/20 blur-2xl sm:blur-3xl -z-10"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
