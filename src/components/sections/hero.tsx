import { Link } from "react-router-dom";
import { Phone, Code, Rocket, Brain, Palette, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Typing animation hook
function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    setDisplayed(currentWord.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

// Animated SVG background circuits
function AnimatedCircuits() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Horizontal lines */}
      <motion.line x1="0" y1="200" x2="1440" y2="200" stroke="rgba(34,211,238,0.05)" strokeWidth="1" strokeDasharray="12 8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, ease: "easeInOut" }} />
      <motion.line x1="0" y1="600" x2="1440" y2="600" stroke="rgba(139,92,246,0.05)" strokeWidth="1" strokeDasharray="12 8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }} />

      {/* Circuit path left */}
      <motion.path
        d="M0 450 L120 450 L120 300 L280 300 L280 180 L450 180 L450 300 L620 300"
        stroke="rgba(34,211,238,0.12)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="10 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.5, ease: "easeInOut", delay: 0.3 }}
      />
      {/* Circuit path right */}
      <motion.path
        d="M1440 300 L1300 300 L1300 450 L1150 450 L1150 550 L980 550 L980 450 L820 450"
        stroke="rgba(139,92,246,0.12)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="10 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.5, ease: "easeInOut", delay: 0.6 }}
      />
      {/* Circuit nodes */}
      {[
        { cx: 120, cy: 450, color: "rgba(34,211,238,0.5)", delay: 0.5 },
        { cx: 280, cy: 300, color: "rgba(34,211,238,0.5)", delay: 0.8 },
        { cx: 450, cy: 180, color: "rgba(52,211,153,0.6)", delay: 1.1 },
        { cx: 1300, cy: 300, color: "rgba(139,92,246,0.5)", delay: 0.7 },
        { cx: 1150, cy: 450, color: "rgba(139,92,246,0.5)", delay: 1.0 },
        { cx: 980, cy: 550, color: "rgba(96,165,250,0.6)", delay: 1.3 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r="5"
          fill={node.color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 0.7] }}
          transition={{ duration: 0.6, delay: node.delay }}
        >
          <animate attributeName="r" values="5;7;5" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
        </motion.circle>
      ))}

      {/* Flowing dot along left path */}
      <motion.circle r="4" fill="rgba(34,211,238,0.9)">
        <animateMotion
          path="M0 450 L120 450 L120 300 L280 300 L280 180 L450 180 L450 300 L620 300"
          dur="4s"
          repeatCount="indefinite"
          calcMode="linear"
        />
      </motion.circle>
      {/* Flowing dot along right path */}
      <motion.circle r="4" fill="rgba(139,92,246,0.9)">
        <animateMotion
          path="M1440 300 L1300 300 L1300 450 L1150 450 L1150 550 L980 550 L980 450 L820 450"
          dur="4.5s"
          repeatCount="indefinite"
          calcMode="linear"
        />
      </motion.circle>
    </svg>
  );
}

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
  const typedWord = useTypingEffect(["Digitally", "Intelligently", "Powerfully", "Efficiently"], 75, 2000);



  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* Animated circuit SVG background */}
      <AnimatedCircuits />

      {/* Floating dots */}
      {[
        { x: "8%", y: "20%", color: "bg-cyan-400/40", delay: 0 },
        { x: "85%", y: "15%", color: "bg-violet-400/40", delay: 0.6 },
        { x: "15%", y: "70%", color: "bg-emerald-400/30", delay: 1.2 },
        { x: "90%", y: "65%", color: "bg-blue-400/30", delay: 0.9 },
        { x: "50%", y: "8%", color: "bg-pink-400/30", delay: 1.5 },
        { x: "60%", y: "82%", color: "bg-cyan-400/30", delay: 0.3 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${dot.color}`}
          style={{ left: dot.x, top: dot.y }}
          animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3 + dot.delay, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-32 -left-32 h-64 w-64 sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px] rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/20 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-64 w-64 sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px] rounded-full bg-gradient-to-br from-violet-500/25 to-purple-500/15 blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-32 w-32 sm:h-48 sm:w-48 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 blur-3xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Hexagonal SVG decoration right side (desktop only) */}
      <motion.svg
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-[0.07] hidden lg:block"
        viewBox="0 0 600 800"
        fill="none"
        aria-hidden="true"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.07, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => {
            const x = col * 80 + (row % 2 === 0 ? 40 : 0);
            const y = row * 70;
            return (
              <motion.polygon
                key={`${row}-${col}`}
                points={`${x},${y - 30} ${x + 26},${y - 15} ${x + 26},${y + 15} ${x},${y + 30} ${x - 26},${y + 15} ${x - 26},${y - 15}`}
                stroke="rgba(34,211,238,0.8)"
                strokeWidth="0.8"
                fill="none"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 3 + (row + col) * 0.3, repeat: Infinity, delay: (row * col * 0.1) % 2 }}
              />
            );
          })
        )}
      </motion.svg>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16 py-20 sm:py-24 lg:py-32 min-h-[100svh]">

          {/* Left Content */}
          <div className="w-full text-center lg:text-left space-y-5 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">

            {/* Welcome Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl px-4 py-2 sm:px-5 sm:py-2.5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Animated SVG star */}
              <motion.svg
                width="18" height="18" viewBox="0 0 20 20" fill="none"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <motion.path
                  d="M10 2 L11.5 8 L18 10 L11.5 12 L10 18 L8.5 12 L2 10 L8.5 8 Z"
                  fill="none"
                  stroke="rgba(34,211,238,0.9)"
                  strokeWidth="1.2"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle cx="10" cy="10" r="2.5" fill="rgba(34,211,238,0.8)"
                  animate={{ r: [2.5, 3.2, 2.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.svg>
              <span className="text-xs sm:text-sm font-semibold text-cyan-100 tracking-wide">
                Welcome To Tech Vexor
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight">
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Transform Your
                </motion.span>
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  Business
                </motion.span>
                <motion.span
                  className="flex items-baseline gap-2 sm:gap-3 mt-1 flex-wrap justify-center lg:justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <span className="text-slate-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">with</span>
                  <span className="relative inline-flex items-center">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent min-w-[2ch]">
                      {typedWord}
                    </span>
                    {/* Blinking cursor */}
                    <motion.span
                      className="inline-block ml-1 w-[3px] h-[0.85em] bg-cyan-400 rounded-sm align-middle"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                    />
                    {/* Underline */}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500"
                      style={{ width: "100%" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </span>
                </motion.span>
              </h1>
            </motion.div>

            {/* Animated SVG wave divider */}
            <motion.svg
              width="240" height="12" viewBox="0 0 240 12" className="mx-auto lg:mx-0"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{ transformOrigin: "left" }}
            >
              <defs>
                <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0 6 Q30 2 60 6 Q90 10 120 6 Q150 2 180 6 Q210 10 240 6"
                stroke="url(#waveGrad)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 0.7 }}
              />
              <motion.circle cx="240" cy="6" r="4" fill="#8b5cf6"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
            </motion.svg>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-300/90 leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              We craft intelligent digital experiences that drive growth. From AI-powered solutions to performance marketing, we help brands scale faster.
            </motion.p>



            {/* Call Now - Mobile */}
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
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Main Card */}
              <div className="relative h-full w-full rounded-3xl sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl shadow-2xl overflow-hidden">

                {/* Inner Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />

                {/* Animated SVG Orbiting rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg className="absolute h-[90%] w-[90%]" viewBox="0 0 200 200" aria-hidden="true">
                    <motion.circle cx="100" cy="100" r="95" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"
                      strokeDasharray="8 4"
                      animate={{ rotate: 360 }} style={{ transformOrigin: "100px 100px" }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
                    <motion.circle cx="195" cy="100" r="4" fill="rgba(34,211,238,0.7)"
                      animate={{ rotate: 360 }} style={{ transformOrigin: "100px 100px" }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
                  </svg>
                  <svg className="absolute h-[70%] w-[70%]" viewBox="0 0 200 200" aria-hidden="true">
                    <motion.circle cx="100" cy="100" r="95" stroke="rgba(34,211,238,0.1)" strokeWidth="1" fill="none"
                      strokeDasharray="4 8"
                      animate={{ rotate: -360 }} style={{ transformOrigin: "100px 100px" }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
                    <motion.circle cx="195" cy="100" r="3.5" fill="rgba(139,92,246,0.7)"
                      animate={{ rotate: -360 }} style={{ transformOrigin: "100px 100px" }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
                  </svg>
                  <svg className="absolute h-[50%] w-[50%]" viewBox="0 0 200 200" aria-hidden="true">
                    <motion.circle cx="100" cy="100" r="95" stroke="rgba(139,92,246,0.15)" strokeWidth="1.5" fill="none"
                      animate={{ rotate: 360 }} style={{ transformOrigin: "100px 100px" }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                    <motion.circle cx="195" cy="100" r="3" fill="rgba(52,211,153,0.7)"
                      animate={{ rotate: 360 }} style={{ transformOrigin: "100px 100px" }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
                  </svg>
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
                          <motion.div
                            className={`relative mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.color} p-4 sm:p-6 shadow-2xl`}
                            animate={isActive ? { rotate: [0, 3, -3, 0], scale: [1, 1.05, 1] } : {}}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <Icon className="h-10 w-10 sm:h-14 sm:w-14 text-white" strokeWidth={1.5} />
                            <motion.div
                              className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-white/20"
                              animate={{ opacity: [0, 0.4, 0] }}
                              transition={{ duration: 2.5, repeat: Infinity }}
                            />
                            <motion.div
                              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white/60"
                              animate={{ y: [-5, -15, -5], opacity: [0.6, 1, 0.6] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>

                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1.5 sm:mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-400">
                            {service.description}
                          </p>

                          {/* Animated SVG accent bar */}
                          <motion.svg
                            width="64" height="8" viewBox="0 0 64 8" className="mt-4 sm:mt-5"
                            initial={{ scaleX: 0 }}
                            animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ transformOrigin: "center" }}
                          >
                            <defs>
                              <linearGradient id="accentBar" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#22d3ee" />
                                <stop offset="50%" stopColor="#60a5fa" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                              </linearGradient>
                            </defs>
                            <rect x="0" y="2" width="64" height="4" rx="2" fill="url(#accentBar)" />
                          </motion.svg>
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
          </div>
        </div>
      </div>
    </section>
  );
}
