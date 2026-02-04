import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, Linkedin, Mail, Sparkles, Rocket, ArrowRight, Phone } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";
import { Helmet } from "react-helmet-async";

const teamMembers = [
  {
    name: "Sundar Tomar",
    role: "Co-Founder & Director",
    image: "/images/sundar.jpg",
    experience: "at Tech Vexor | Driving business growth through strategic leadership and fund management.",
    linkedin: "https://www.linkedin.com/company/techvexor/",
    email: "info@techvexor.com",
  },
  {
    name: "Ravi Kumar",
    role: "Founder & CEO",
    image: "/images/ravi.jpg",
    experience: "Leading Tech Vexor’s vision with a focus on technology, brand building, and sustainable business expansion.",
    linkedin: "https://www.linkedin.com/company/techvexor/",
    email: "info@techvexor.com",
  },
  {
    name: "Neha Sharma",
    role: "Chief Technology Officer",
    image: "/images/neha.jpeg",
    experience: "Driving innovation and technology strategy to accelerate business growth and digital transformation.",
    linkedin: "https://www.linkedin.com/company/techvexor/",
    email: "info@techvexor.com",
  },
];

const achievements = [
  {
    icon: Users,
    title: "100+ Happy Clients",
    description: "Trusted by businesses worldwide",
  },
  {
    icon: Target,
    title: "500+ Projects Delivered",
    description: "Successfully completed projects",
  },
  {
    icon: Award,
    title: "50+ Awards Won",
    description: "Industry recognition and excellence",
  },
  {
    icon: Globe,
    title: "25+ Countries Served",
    description: "Global reach and impact",
  },
];

export default function About() {
  usePageTitle("About Tech Vexor Digital Innovation Team");

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Tech Vexor | Our Story, Team & Mission | IT Solutions Company</title>
        <meta name="description" content="Learn about Tech Vexor - a forward-thinking technology company specializing in AI solutions, cloud computing, and digital transformation. Meet our team and discover our mission." />
        <meta name="keywords" content="about Tech Vexor, IT company Noida, technology team, AI solutions company, digital transformation experts, cloud computing services, software development team" />
        <link rel="canonical" href="https://www.techvexor.com/about" />
        <meta property="og:title" content="About Tech Vexor | Our Story, Team & Mission" />
        <meta property="og:description" content="Learn about Tech Vexor - a forward-thinking technology company specializing in AI solutions, cloud computing, and digital transformation." />
        <meta property="og:url" content="https://www.techvexor.com/about" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="About Tech Vexor | Our Story, Team & Mission" />
        <meta property="twitter:description" content="Learn about Tech Vexor - a forward-thinking technology company specializing in AI solutions, cloud computing, and digital transformation." />
      </Helmet>
      <Header />
  {/* Hero Section */}
  <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
              About Tech Vexor
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pioneering the Future with
              <span className="text-amber-200"> AI Innovation</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              We are a forward-thinking technology company specializing in AI
              solutions, cloud computing, and digital transformation. Our
              mission is to empower businesses with cutting-edge technology that
              drives growth and innovation.
            </p>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Founded on Innovation
                </h3>
                <p className="text-gray-600 mb-6">
                  Tech Vexor was founded in 2020 with a vision to bridge the gap
                  between traditional business operations and modern AI
                  technology. We started as a small team of passionate
                  developers and have grown into a trusted partner for
                  businesses worldwide.
                </p>
                <p className="text-gray-600">
                  Today, we continue to push the boundaries of what's possible
                  with AI, helping our clients stay ahead in an increasingly
                  digital world.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <achievement.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-shadow rounded-2xl border border-gray-100"
                >
                  <img
                    src={member.image}
                    alt={`${member.name} portrait`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-indigo-100"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-indigo-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
                <p className="text-gray-600">
                  We constantly explore new technologies and methodologies to
                  deliver cutting-edge solutions that give our clients a
                  competitive advantage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Client Success</h3>
                <p className="text-gray-600">
                  Your success is our success. We work closely with our clients
                  to understand their unique challenges and deliver tailored
                  solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Quality Excellence
                </h3>
                <p className="text-gray-600">
                  We maintain the highest standards in everything we do, from
                  code quality to customer service, ensuring exceptional results
                  every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Enhanced Design */}
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
              Let's discuss how our AI solutions can help you achieve your goals.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-2xl shadow-orange-500/25 px-8 py-6 text-lg font-semibold group"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold shadow-xl"
              >
                Schedule a Consultation
              </Button>
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
      <Footer />
    </div>
  );
}
