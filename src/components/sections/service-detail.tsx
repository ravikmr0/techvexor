import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { usePageTitle } from "@/hooks/use-page-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, ArrowLeft, Zap, Target, Code, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceDetailProps {
  title: string;
  description: string;
  longDescription?: string;
  features: string[];
  benefits?: string[];
  useCases?: string[];
  technologies?: string[];
  faqs?: FAQ[];
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export function ServiceDetailSection({
  title,
  description,
  longDescription,
  features,
  benefits = [],
  useCases = [],
  technologies = [],
  faqs = [],
  subtitle,
  ctaLabel = "Get a Free Consultation",
  ctaHref = "/contact",
  metaTitle,
  metaDescription,
}: ServiceDetailProps) {
  usePageTitle(metaTitle || `${title} | Tech Vexor`);

  // Set meta description for SEO
  useEffect(() => {
    if (metaDescription) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", metaDescription);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = metaDescription;
        document.head.appendChild(meta);
      }
    }
  }, [metaDescription]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/services" className="inline-flex items-center text-slate-300 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
            {subtitle && (
              <p className="text-xl text-orange-400 font-medium mb-4">{subtitle}</p>
            )}
            <p className="text-lg md:text-xl text-slate-300 mb-4">{description}</p>
            {longDescription && (
              <p className="text-base text-slate-400 mb-8">{longDescription}</p>
            )}
            <div className="flex flex-wrap items-center gap-4">
              <GradientButton asChild size="lg">
                <Link to={ctaHref}>{ctaLabel}</Link>
              </GradientButton>
              <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                Explore All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">What We Deliver</h2>
              </div>
              <ul className="space-y-4">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 shadow-lg border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Key Benefits</h2>
              </div>
              <ul className="space-y-4">
                {benefits.length > 0 ? (
                  benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-slate-600">Tailored to your goals with measurable outcomes.</li>
                )}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      {useCases.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Common Use Cases</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See how businesses like yours leverage our {title.toLowerCase()} services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-orange-600 font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-slate-700 font-medium">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {technologies.length > 0 && (
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl md:text-4xl font-bold">Technologies We Use</h2>
              </div>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We leverage industry-leading tools and frameworks to deliver exceptional results
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 bg-slate-800 rounded-full text-slate-200 font-medium border border-slate-700 hover:border-orange-500 hover:text-orange-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <HelpCircle className="w-8 h-8 text-orange-500" />
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
                </div>
                <p className="text-lg text-slate-600">
                  Get answers to common questions about our {title.toLowerCase()} services
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="border border-slate-200 rounded-lg px-6 data-[state=open]:border-orange-300 data-[state=open]:shadow-md transition-all"
                  >
                    <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600 py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {title.toLowerCase()} services can help transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <GradientButton asChild size="lg" className="bg-white text-orange-600 hover:bg-slate-100">
              <Link to={ctaHref}>Schedule a Free Consultation</Link>
            </GradientButton>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 text-white border-2 border-white rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
