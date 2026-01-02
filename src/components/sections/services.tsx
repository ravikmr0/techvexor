import { useState } from "react";
import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code2,
  Shield,
  Settings,
  Brain,
  Cloud,
  Network,
  HeadsetIcon,
  ShoppingCart,
  MessageSquareQuote,
} from "lucide-react";
import { QuoteDialog } from "@/components/quote-dialog";

const services = [
  {
    icon: Code2,
    title: "IT & Software Development",
    description:
      "Custom software solutions, web & mobile app development, API integration",
    link: "/services/software-development",
    startingPrice: "₹50,000",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description:
      "Security audits, threat protection, compliance management, data security",
    link: "/services/cybersecurity",
    startingPrice: "₹45,000",
  },
  {
    icon: Settings,
    title: "Managed IT Services",
    description:
      "24/7 system monitoring, maintenance, IT infrastructure management",
    link: "/services/managed-services",
    startingPrice: "₹25,000/mo",
  },
  {
    icon: Brain,
    title: "Digital Transformation & AI",
    description:
      "AI integration, process automation, digital strategy consulting",
    link: "/services/digital-transformation",
    startingPrice: "₹75,000",
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Hosting",
    description: "Cloud migration, hosting solutions, scalable infrastructure",
    link: "/services/cloud-computing",
    startingPrice: "₹30,000/mo",
  },
  {
    icon: Network,
    title: "Networking & Infrastructure",
    description: "Network design, implementation, security & maintenance",
    link: "/services/networking",
    startingPrice: "₹40,000",
  },
  {
    icon: HeadsetIcon,
    title: "Tech Support & IT Outsourcing",
    description: "24/7 technical support, IT consulting, resource augmentation",
    link: "/services/tech-support",
    startingPrice: "₹15,000/mo",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Digital Solutions",
    description:
      "Online store development, payment integration, digital marketing",
    link: "/services/ecommerce",
    startingPrice: "₹35,000",
  },
];

export function Services() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleQuoteClick = (e: React.MouseEvent, serviceTitle: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedService(serviceTitle);
    setQuoteDialogOpen(true);
  };

  return (
    <section className="py-20 bg-slate-50">
      <QuoteDialog 
        open={quoteDialogOpen} 
        onOpenChange={setQuoteDialogOpen}
        serviceTitle={selectedService}
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive IT & AI Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From software development to AI integration, we provide end-to-end
            technology solutions for your business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow group flex flex-col"
            >
              <div className="mb-4 relative">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-indigo-500" />
                </div>
                <div className="absolute -inset-2 rounded-lg bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-3 flex-1">{service.description}</p>
              {service.startingPrice && (
                <div className="mb-4 py-2 px-3 bg-indigo-50 rounded-lg border border-indigo-100 inline-block">
                  <span className="text-xs text-slate-500">From </span>
                  <span className="text-lg font-bold text-indigo-600">{service.startingPrice}</span>
                </div>
              )}
              <div className="flex items-center justify-between mt-auto">
                <a
                  href={service.link}
                  className="text-sm font-medium text-indigo-500 hover:text-indigo-600 inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => handleQuoteClick(e, service.title)}
                  className="text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                >
                  <MessageSquareQuote className="w-3 h-3 mr-1" />
                  Quote
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <GradientButton asChild size="lg" className="group">
            <Link to="/services">
              <span>Explore All Services</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
