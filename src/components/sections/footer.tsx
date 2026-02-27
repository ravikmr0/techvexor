import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Phone,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "AI Solutions", href: "/ai-solutions" },
  { name: "Projects", href: "/projects" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog & Insights", href: "/blog" },
  { name: "Legal", href: "/legal" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

const contactInfo = {
  phone: "+91 7895849990",
};

const services = [
  { name: "IT Consulting", href: "/services/it-consulting" },
  { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  { name: "AI & Machine Learning Development", href: "/services/ai-ml" },
  { name: "AI Agent & Chatbot Design", href: "/services/ai-agents-chatbots" },
  { name: "Cybersecurity & Data Protection", href: "/services/cybersecurity" },
  {
    name: "Custom Software & Web Development",
    href: "/services/custom-software",
  },
];

const industries = [
  { name: "Finance – AI-powered risk assessment", href: "/industries/finance" },
  { name: "Healthcare – Smart AI diagnostics", href: "/industries/healthcare" },
  { name: "Retail – AI-driven customer insights", href: "/industries/retail" },
  {
    name: "Manufacturing – Intelligent automation",
    href: "/industries/manufacturing",
  },
  {
    name: "Education – AI-based learning solutions",
    href: "/industries/education",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/techvexor",
  },
  { name: "Twitter", icon: Twitter, href: "https://x.com/techvexor" },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/techvexor",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@techvexor",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "http://instagram.com/techvexor/",
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-16">
          {/* Quick Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="link"
              className="text-indigo-400 hover:text-indigo-300 pl-0 mt-4"
            >
              <Link to="/services">
                Explore All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Industry Solutions */}
          <div>
            <h3 className="text-xl font-bold mb-6">Industry Solutions</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link
                    to={industry.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="link"
              className="text-indigo-400 hover:text-indigo-300 pl-0 mt-4"
            >
              <Link to="/industries">
                See Industry Use Cases <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
            <p className="text-slate-300 mb-4 flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              {contactInfo.phone}
            </p>
            <Card className="p-4 bg-white/5 backdrop-blur-sm border-slate-800 mb-6">
              <p className="text-sm text-slate-300 mb-4">
                Stay Ahead with AI & IT Innovations – Join Our Exclusive
                Newsletter!
              </p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-slate-700 text-white placeholder:text-slate-500"
                />
                <Button className="bg-indigo-500 hover:bg-indigo-600">
                  Subscribe
                </Button>
              </div>
            </Card>

            <div className="space-y-4">
              <h4 className="font-semibold">
                Follow us for AI Insights & Tech Updates!
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat */}
        <div className="fixed bottom-4 right-4 z-50">
          <a
            href="https://wa.me/917895849990"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <Button className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </Button>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-slate-800 pt-8 pb-12">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-400">
            <span>ISO Certified</span>
            <span>•</span>
            <span>Google Cloud Partner</span>
            <span>•</span>
            <span>Microsoft Azure Certified</span>
            <span>•</span>
            <span>Trusted by 100+ Businesses</span>
            <span>•</span>
            <span>Award-Winning AI Solutions</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-400">
            <div>© 2025 Tech Vexor. All Rights Reserved.</div>
            <div className="flex space-x-4">
              <Link to="/legal/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/legal/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link to="/legal/data-security" className="hover:text-white">
                Data Security
              </Link>
              <Link to="/legal/ai-ethics" className="hover:text-white">
                AI Ethics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
