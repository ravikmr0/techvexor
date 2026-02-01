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
          "url": `https://www.techvexor.com/industries/${item.slug}`
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
            Industries Solutions & <span className="text-indigo-400">Technology Services</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Comprehensive industries technology solutions for reliance industries, alok industries, solar industries, 
            aarti industries, praj industries, and 100+ industries sectors. Expert industries services including 
            industries automation, industries growing, and industries digital transformation.
          </p>
          <p className="text-base text-slate-400 max-w-2xl mx-auto mb-8">
            From industries by revenue and industries by profit margin to industries hiring and industries booming right now, 
            Tech Vexor delivers cutting-edge industries technology, industries services, and industries solutions for 
            all industries types including manufacturing industries, creative industries, and industries near me.
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
              <div className="text-sm text-slate-600">Industries Solutions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">500+</div>
              <div className="text-sm text-slate-600">Industries Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">50+</div>
              <div className="text-sm text-slate-600">Industries Worldwide</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">98%</div>
              <div className="text-sm text-slate-600">Industries Satisfaction</div>
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

      {/* SEO Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
              Comprehensive Industries Solutions & Technology Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Industries Share Price & Market Leaders</h3>
                <div className="prose prose-slate max-w-none text-slate-600">
                  <p className="mb-3">
                    Tech Vexor serves major <strong>industries</strong> including <strong>reliance industries</strong>, 
                    <strong>alok industries</strong>, <strong>aarti industries</strong>, <strong>solar industries</strong>, 
                    <strong>praj industries</strong>, <strong>apar industries</strong>, <strong>tilaknagar industries</strong>, 
                    <strong>exide industries</strong>, <strong>vst industries</strong>, and <strong>supreme industries</strong>.
                  </p>
                  <p className="mb-3">
                    Our solutions support <strong>industries by revenue</strong>, <strong>industries by market cap</strong>, 
                    <strong>industries by profit margin</strong>, and <strong>industries by sector</strong> with specialized 
                    technology for <strong>reliance industries share</strong> tracking, <strong>alok industries share</strong> management, 
                    and comprehensive <strong>industries share price</strong> analytics.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Industries Types & Classifications</h3>
                <div className="prose prose-slate max-w-none text-slate-600">
                  <p className="mb-3">
                    We support <strong>industries definition</strong>, <strong>industries examples</strong>, 
                    <strong>industries list</strong>, <strong>industries names</strong>, <strong>industries meaning</strong>, 
                    <strong>industries abbreviation</strong>, and all <strong>industries types</strong> including 
                    <strong>manufacturing industries</strong>, <strong>creative industries</strong>, 
                    <strong>cottage industries</strong>, and <strong>agro based industries</strong>.
                  </p>
                  <p className="mb-3">
                    From <strong>industries growing in 2025</strong> to <strong>industries booming right now</strong>, 
                    we provide technology for <strong>industries currently hiring</strong>, 
                    <strong>industries hiring right now</strong>, and <strong>industries near me</strong> searches.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">Global Industries Coverage</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• <strong>Industries America</strong> & USA</li>
                  <li>• <strong>Industries Australia</strong></li>
                  <li>• <strong>Industries UK</strong></li>
                  <li>• <strong>Koch industries</strong></li>
                  <li>• <strong>Mitsubishi heavy industries</strong></li>
                  <li>• <strong>Dangote industries limited</strong></li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">Industries Services</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• <strong>Industries for the blind</strong></li>
                  <li>• <strong>Deseret industries</strong></li>
                  <li>• <strong>Goodwill industries</strong></li>
                  <li>• <strong>Motion industries</strong></li>
                  <li>• <strong>Turner industries</strong></li>
                  <li>• <strong>Pratt industries</strong></li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-800">Industries Technology</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• <strong>Industry 4.0</strong> solutions</li>
                  <li>• <strong>Industry 5.0</strong> technologies</li>
                  <li>• <strong>Industries using AI</strong></li>
                  <li>• <strong>Industries affected by AI</strong></li>
                  <li>• <strong>Industries safe from AI</strong></li>
                  <li>• <strong>Industries automation</strong></li>
                </ul>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Complete Industries Solutions Portfolio
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Industries Market & Finance</h4>
                  <p className="text-sm mb-4">
                    Specialized solutions for <strong>industries share price</strong> tracking covering 
                    <strong>reliance industries share price</strong>, <strong>alok industries share price</strong>, 
                    <strong>aarti industries share price</strong>, <strong>solar industries share price</strong>, 
                    <strong>praj industries share price</strong>, <strong>tilaknagar industries share price</strong>, 
                    <strong>vst industries share price</strong>, <strong>exide industries share price</strong>, 
                    <strong>supreme industries share price</strong>, and more. We serve <strong>industries ranked by revenue</strong>, 
                    <strong>industries by size</strong>, and <strong>industries by state</strong>.
                  </p>

                  <h4 className="font-semibold text-slate-800 mb-3">Industries Growth & Trends</h4>
                  <p className="text-sm">
                    Technology for <strong>industries growing</strong>, <strong>industries growing the fastest</strong>, 
                    <strong>industries expected to grow in the next 10 years</strong>, <strong>industries doing well in 2025</strong>, 
                    <strong>industries experiencing growth</strong>, <strong>industries projected to grow</strong>, 
                    <strong>industries on the rise</strong>, and <strong>industries that are growing</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Industries Employment & Hiring</h4>
                  <p className="text-sm mb-4">
                    Solutions supporting <strong>industries hiring</strong>, <strong>industries hiring near me</strong>, 
                    <strong>industries hiring the most right now</strong>, <strong>industries hiring in 2025</strong>, 
                    <strong>industries jobs</strong>, <strong>industries jobs near me</strong>, 
                    <strong>industries needing workers</strong>, <strong>industries desperate for workers</strong>, 
                    and <strong>industries with most job openings</strong>.
                  </p>

                  <h4 className="font-semibold text-slate-800 mb-3">Specialized Industries</h4>
                  <p className="text-sm">
                    We serve <strong>industries for mechanical engineers</strong>, <strong>industries for electrical engineers</strong>, 
                    <strong>industries for chemical engineers</strong>, <strong>industries for project management</strong>, 
                    <strong>heavy industries</strong>, <strong>cottage industries</strong>, <strong>global industries</strong>, 
                    <strong>operational industries</strong>, and <strong>industries llc</strong> businesses.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-3">Industries Technology Solutions</h4>
                <p className="text-sm text-slate-600 mb-3">
                  From <strong>industries 4.0</strong> and <strong>industry 4.0 technologies</strong> to 
                  <strong>industries 5.0</strong> and <strong>industry 5.0 meaning</strong>, Tech Vexor delivers 
                  comprehensive <strong>industries technology</strong> including <strong>industries automation</strong>, 
                  <strong>industries most affected by AI</strong>, <strong>industries least affected by AI</strong>, 
                  <strong>industries using AI the most</strong>, and <strong>industries unaffected by AI</strong>.
                </p>
                <p className="text-sm text-slate-600">
                  Our expertise spans <strong>industries and sectors</strong>, <strong>industries business</strong>, 
                  <strong>industries company</strong>, <strong>industries ltd</strong>, <strong>industries inc</strong>, 
                  <strong>industries vs enterprises</strong>, <strong>industries vs corporation</strong>, 
                  <strong>industries we serve</strong>, and all <strong>industries list in usa</strong> sectors. 
                  Whether you need solutions for <strong>industries most impacted by tariffs</strong>, 
                  <strong>industries resilient to recession</strong>, or <strong>industries with highest profit margins</strong>, 
                  we provide cutting-edge technology for <strong>industries to invest in</strong> and 
                  <strong>industries to work in</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Industries Solutions for Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Whether you're in manufacturing industries, creative industries, or any industries sector, 
            Tech Vexor delivers comprehensive industries technology and industries services. 
            From industries automation to industries digital transformation, we serve all industries types 
            including industries near me and industries globally.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <GradientButton asChild size="lg" className="bg-white text-indigo-600 hover:bg-slate-100">
              <Link to="/contact">Get Industries Solutions</Link>
            </GradientButton>
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Industries Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
