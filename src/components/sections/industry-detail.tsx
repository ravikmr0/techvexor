import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { usePageTitle } from "@/hooks/use-page-title";
import { CheckCircle, ArrowLeft, Target, TrendingUp, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";

interface IndustryDetailProps {
  title: string;
  description: string;
  longDescription?: string;
  useCases: string[];
  outcomes?: string[];
  keywords?: string[];
  subtitle?: string;
}

export function IndustryDetailSection({
  title,
  description,
  longDescription,
  useCases,
  outcomes = [],
  keywords = [],
  subtitle,
}: IndustryDetailProps) {
  usePageTitle(`${title} Software Solutions | AI & Digital Transformation | Tech Vexor`);

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${title} Technology Solutions`,
    "description": longDescription || description,
    "provider": {
      "@type": "Organization",
      "name": "Tech Vexor",
      "url": "https://techvexor.com"
    },
    "serviceType": "Software Development & AI Solutions",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${title} Solutions`,
      "itemListElement": useCases.map((useCase, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": useCase
        },
        "position": index + 1
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/industries" className="inline-flex items-center text-slate-300 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Industries
            </Link>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {title} <span className="text-indigo-400">Software Solutions</span>
            </h1>
            {subtitle && (
              <p className="text-xl text-slate-300 mb-4">{subtitle}</p>
            )}
            <p className="text-lg md:text-xl text-slate-300 mb-4">{description}</p>
            {longDescription && (
              <p className="text-base text-slate-400 mb-8 leading-relaxed">{longDescription}</p>
            )}
            <div className="flex flex-wrap items-center gap-4">
              <GradientButton asChild size="lg">
                <Link to="/contact">Get a Free Consultation</Link>
              </GradientButton>
              <Link to="/case-studies" className="text-slate-300 hover:text-white underline underline-offset-4">
                View Success Stories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">500+</div>
              <div className="text-sm text-slate-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">98%</div>
              <div className="text-sm text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">50+</div>
              <div className="text-sm text-slate-600">Industry Experts</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600">24/7</div>
              <div className="text-sm text-slate-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Use Cases */}
            <Card className="p-6 md:p-8 shadow-lg border-t-4 border-t-indigo-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Key Use Cases & Solutions</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Discover how our {title.toLowerCase()} technology solutions can transform your operations:
              </p>
              <ul className="space-y-4">
                {useCases.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Outcomes */}
            <Card className="p-6 md:p-8 shadow-lg border-t-4 border-t-green-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Business Outcomes & ROI</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Measurable results our {title.toLowerCase()} clients achieve:
              </p>
              <ul className="space-y-4">
                {outcomes.length > 0 ? (
                  outcomes.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-slate-700">
                      <Award className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start space-x-3 text-slate-700">
                      <Award className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>Operational efficiency improvements</span>
                    </li>
                    <li className="flex items-start space-x-3 text-slate-700">
                      <Award className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>Data-driven decision making</span>
                    </li>
                    <li className="flex items-start space-x-3 text-slate-700">
                      <Award className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>Revenue growth and cost reduction</span>
                    </li>
                  </>
                )}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Tech Vexor for {title}?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We combine deep industry expertise with cutting-edge technology to deliver solutions that drive real business results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-slate-400">
                Deep understanding of {title.toLowerCase()} challenges and best practices
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-slate-400">
                Tailored software and AI solutions built for your specific needs
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-slate-400">
                Track record of delivering measurable ROI for our clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your {title} Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <GradientButton asChild size="lg" className="bg-white text-indigo-600 hover:bg-slate-100">
              <Link to="/contact">Schedule a Free Consultation</Link>
            </GradientButton>
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Keywords for SEO (hidden) */}
      {keywords.length > 0 && (
        <div className="sr-only" aria-hidden="true">
          <p>Related topics: {keywords.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
