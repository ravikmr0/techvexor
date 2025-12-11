import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { CheckCircle, ArrowRight, Building2, Factory, Briefcase, ShoppingCart, Building, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { industryGroups } from "@/data/industry-catalog";

const groupIcons: Record<string, React.ReactNode> = {
  "Agriculture-Based": <Building2 className="w-6 h-6" />,
  "Manufacturing": <Factory className="w-6 h-6" />,
  "Services": <Briefcase className="w-6 h-6" />,
  "Retail & Wholesale": <ShoppingCart className="w-6 h-6" />,
  "Infrastructure & Public Sector": <Building className="w-6 h-6" />,
  "Additional Sectors": <Layers className="w-6 h-6" />,
};

export function IndustrySolutionsPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Industry Solutions by Tech Vexor",
    "description": "Comprehensive AI and software solutions for 100+ industries including agriculture, manufacturing, services, retail, and infrastructure.",
    "numberOfItems": industryGroups.reduce((acc, g) => acc + g.items.length, 0),
    "itemListElement": industryGroups.flatMap((group, gi) => 
      group.items.map((item, idx) => ({
        "@type": "ListItem",
        "position": gi * 20 + idx + 1,
        "item": {
          "@type": "Service",
          "name": `${item.title} Solutions`,
          "description": item.description,
          "url": `https://techvexor.com/industries/${item.slug}`
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-indigo-300 text-sm font-medium">100+ Industries Served</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Industry-Specific <span className="text-indigo-400">AI & Software Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Purpose-built technology solutions tailored to your sector. From agriculture to healthcare, 
            manufacturing to finance — we deliver proven use cases that accelerate digital transformation.
          </p>
          <p className="text-base text-slate-400 max-w-2xl mx-auto mb-8">
            Our industry experts combine deep domain knowledge with cutting-edge AI, IoT, and cloud technologies 
            to solve your most complex business challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <GradientButton asChild size="lg">
              <Link to="#use-cases">Explore All Industries</Link>
            </GradientButton>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">100+</div>
              <div className="text-sm text-slate-600">Industries Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">500+</div>
              <div className="text-sm text-slate-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">50+</div>
              <div className="text-sm text-slate-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">98%</div>
              <div className="text-sm text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Groups */}
      <section id="use-cases" className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          {industryGroups.map((group, gi) => (
            <div key={gi} className="scroll-mt-20" id={group.name.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                  {groupIcons[group.name] || <Layers className="w-6 h-6" />}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{group.name}</h2>
                  <p className="text-slate-600">{group.items.length} industry solutions</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((i, idx) => (
                  <Link key={idx} to={`/industries/${i.slug}`} className="group">
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 h-full border-l-4 border-l-transparent hover:border-l-indigo-500 group-hover:translate-y-[-2px]">
                      <h3 className="text-lg font-semibold mb-2 text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {i.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{i.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-indigo-600 font-medium">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          {i.useCases.length} use cases
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            We work with businesses across all sectors. Let's discuss how we can create a custom solution for your unique needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <GradientButton asChild size="lg" className="bg-white text-indigo-600 hover:bg-slate-100">
              <Link to="/contact">Contact Our Team</Link>
            </GradientButton>
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
