import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";
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


export function TrustBadges() {
  const [api, setApi] = useState<any>(null);
  const timer = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 mb-6">
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600">Trusted Partners</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900" itemProp="name">
            Trusted by Industry Leaders
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-2" itemProp="description">
            Partnering with global <strong>Fortune 500 companies</strong> and <strong>enterprise leaders</strong> to deliver cutting-edge AI solutions and technology services
          </p>
          
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Trusted by companies across cloud computing, fintech, e-commerce, and enterprise sectors
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="region"
          aria-label="Partner companies carousel"
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, dragFree: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 pl-2 md:pl-4"
                >
                  <div className="flex items-center justify-center h-full">
                    <div
                      className="flex items-center justify-center bg-white rounded-xl p-4 h-24 sm:h-28 w-full 
                                 shadow-sm hover:shadow-md transition-all duration-300 
                                 hover:scale-105 border border-slate-100 group cursor-pointer"
                      title={`${client.name} - ${client.tier}`}
                      itemProp="client"
                    >
                      <picture>
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="h-8 sm:h-10 w-auto max-w-[120px] object-contain 
                                     transition-all duration-300 ease-in-out group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Mobile Scroll Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
            <span className="text-xs text-slate-500">Scroll to see more</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`h-1 rounded-full ${i === 0 ? 'w-6 bg-indigo-500' : 'w-1 bg-slate-300'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* SEO Trust Indicators */}
        <div className="sr-only">
          <h3>Tech Vexor - Trusted by Industry Leaders</h3>
          <p>Leading software development company providing AI solutions, cloud services, and enterprise software to Fortune 500 companies and global enterprises. Certified ISO 27001, GDPR compliant, with 500+ clients across 50+ countries.</p>
          <ul>
            {clients.map((client, i) => (
              <li key={i}>{client.name} - {client.tier}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
