import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Shield, Award, Star, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const clients = [
  { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg", tier: "Enterprise" },
  { name: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", tier: "Enterprise" },
  { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg", tier: "Enterprise" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", tier: "Enterprise" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", tier: "Fortune 500" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", tier: "Enterprise" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Adobe_logo_and_wordmark_%282017%29.svg", tier: "Fortune 500" },
  { name: "Vercel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vercel_logo_2025.svg", tier: "Startup" },
  { name: "Hostinger", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Hostinger_logo_horizontal.png", tier: "Growth" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg", tier: "Fortune 500" },
  { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg", tier: "Fortune 500" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg", tier: "Fortune 500" },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg", tier: "Growth" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", tier: "Fortune 500" },
  { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg", tier: "Fortune 500" },
  { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg", tier: "Growth" },
  { name: "Atlassian", logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/Atlassian-horizontal-blue-rgb.svg", tier: "Enterprise" },
  { name: "Snowflake", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg", tier: "Enterprise" },
  { name: "Databricks", logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png", tier: "Enterprise" },
  { name: "DigitalOcean", logo: "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-ar21.svg", tier: "Growth" }
];

const badges = [
  {
    icon: Shield,
    name: "ISO 27001",
    description: "Certified Security Management",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Award,
    name: "GDPR Compliant",
    description: "Data Protection Excellence",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Star,
    name: "AI Excellence",
    description: "Top-Rated Solutions Provider",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: CheckCircle,
    name: "Cloud Verified",
    description: "Enterprise-Grade Security",
    gradient: "from-emerald-500 to-emerald-600",
  },
];

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [api, setApi] = useState<any>(null);
  const timer = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const tick = () => {
      if (!paused) api.scrollNext();
    };
    timer.current = window.setInterval(tick, 2200);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [api, paused]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none" />

        <div
  className="mb-16"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
  <Carousel
    setApi={setApi}
    opts={{ align: "start", loop: true, dragFree: true }}
    className="px-8"
  >
    <CarouselContent>
      {clients.map((client, index) => (
        <CarouselItem
          key={index}
          className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
        >
          <div
            className="flex items-center justify-center bg-white rounded-2xl p-6 h-full 
                       shadow-sm hover:shadow-lg transition-all duration-300 
                       hover:scale-105 border border-gray-100"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-12 w-auto max-w-[150px] object-contain 
                         transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <Card
              key={index}
              className={`p-6 bg-gradient-to-br ${badge.gradient} hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {badge.name}
                </h3>
                <p className="text-sm text-white/80">{badge.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
