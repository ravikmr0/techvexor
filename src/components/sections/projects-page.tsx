import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Phone, Mail, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Rocket, Code, Brain, Shield, Cloud, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Financial Analytics Platform",
    description:
      "A comprehensive financial analytics solution using machine learning algorithms to predict market trends and optimize investment strategies.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["AI & ML", "Finance", "Data Analytics"],
    category: "AI Solutions",
  },
  {
    title: "Healthcare Management System",
    description:
      "An integrated healthcare platform that streamlines patient management, appointment scheduling, and medical record keeping for hospitals and clinics.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["Healthcare", "Web Application", "Cloud"],
    category: "Software Development",
  },
  {
    title: "E-Commerce Mobile Application",
    description:
      "A feature-rich mobile shopping application with personalized recommendations, secure payment processing, and real-time inventory management.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tags: ["Mobile App", "E-Commerce", "UI/UX"],
    category: "Mobile Development",
  },
  {
    title: "Smart City Infrastructure Management",
    description:
      "An IoT-based solution for monitoring and managing urban infrastructure, including traffic systems, public utilities, and environmental sensors.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    tags: ["IoT", "Smart City", "Infrastructure"],
    category: "IoT Solutions",
  },
  {
    title: "Secure Banking Portal",
    description:
      "A highly secure online banking platform with advanced encryption, multi-factor authentication, and real-time fraud detection capabilities.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["Cybersecurity", "Banking", "Web Application"],
    category: "Cybersecurity",
  },
  {
    title: "Supply Chain Management System",
    description:
      "A blockchain-based supply chain solution that ensures transparency, traceability, and efficiency across the entire logistics network.",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
    tags: ["Blockchain", "Supply Chain", "Enterprise"],
    category: "Blockchain Solutions",
  },
];

const expertise = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to address your unique business challenges and requirements.",
  },
  {
    icon: Rocket,
    title: "Scalable Web & Mobile Applications",
    description:
      "Responsive, high-performance applications that deliver exceptional user experiences across all devices.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description:
      "Intelligent systems that analyze data, learn patterns, and make predictions to drive business growth.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description:
      "Robust security measures to protect your digital assets and ensure regulatory compliance.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Scalable cloud solutions and automated deployment pipelines for optimal performance and reliability.",
  },
];

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Rocket className="w-16 h-16 text-indigo-400 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Innovative Tech Solutions for a Digital Future
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
              Welcome to Tech Vexor Projects, where cutting-edge technology
              meets real-world solutions. We specialize in delivering top-tier
              IT services, including software development, web & mobile app
              solutions, AI & automation, and cloud computing.
            </p>
            <GradientButton size="lg">Explore Our Projects</GradientButton>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <item.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-indigo-500 hover:bg-indigo-600">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="text-indigo-500 hover:text-indigo-600 font-medium inline-flex items-center"
                  >
                    View Case Study
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <GradientButton size="lg">View All Projects</GradientButton>
          </div>
        </div>
      </section>

      {/* Call to Action - Premium Enhanced Design */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.15),transparent_50%)] animate-pulse delay-1000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-400/30 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
              <span className="text-sm font-semibold text-orange-300">TRANSFORM YOUR FUTURE</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Partner with Tech Vexor to leverage cutting-edge technology solutions tailored to your business needs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <GradientButton
                variant="secondary"
                size="lg"
                onClick={() => window.open("tel:+917895849990", "_self")}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-2xl shadow-orange-500/25 px-8 py-6 text-lg font-semibold group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get a Free Consultation
              </GradientButton>
              <GradientButton 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold shadow-xl"
              >
                Learn More
              </GradientButton>
            </div>
            
            {/* Contact Info Cards */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
              <a 
                href="tel:+917895849990" 
                className="group flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <div className="p-2 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg group-hover:rotate-12 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 group-hover:text-slate-600">Call Us Now</div>
                  <div className="font-semibold text-white group-hover:text-slate-900">+91 7895849990</div>
                </div>
              </a>
              
              <a 
                href="mailto:info@techvexor.com" 
                className="group flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <div className="p-2 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg group-hover:rotate-12 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 group-hover:text-slate-600">Email Us</div>
                  <div className="font-semibold text-white group-hover:text-slate-900">info@techvexor.com</div>
                </div>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-slate-400">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-slate-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-slate-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
