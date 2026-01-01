import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { useParams, Link } from "react-router-dom";
import { serviceIndex } from "@/data/services-catalog";

const BASE_URL = "https://www.techvexor.com";

export default function ServiceDynamic() {
  const { slug } = useParams();
  const entry = slug ? serviceIndex[slug] : undefined;

  if (!entry) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl font-bold mb-2">Service not found</h1>
              <p className="text-slate-600 mb-6">Please choose from our catalog.</p>
              <Link className="text-indigo-600 underline" to="/services">Back to Services</Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  // Generate SEO keywords from features and technologies
  const generateKeywords = () => {
    const keywords = [entry.title.toLowerCase()];
    if (entry.technologies) {
      keywords.push(...entry.technologies.map(t => t.toLowerCase()));
    }
    if (entry.features) {
      // Extract key terms from first 3 features
      entry.features.slice(0, 3).forEach(f => {
        const words = f.toLowerCase().split(' ').filter(w => w.length > 4);
        keywords.push(...words.slice(0, 2));
      });
    }
    return [...new Set(keywords)].join(', ');
  };

  return (
    <>
      <Header />
      <ServiceDetailSection
        title={entry.title}
        description={entry.description}
        longDescription={entry.longDescription}
        features={entry.features}
        benefits={entry.benefits}
        useCases={entry.useCases}
        technologies={entry.technologies}
        faqs={entry.faqs}
        seo={{
          metaTitle: entry.metaTitle || `${entry.title} | Tech Vexor`,
          metaDescription: entry.metaDescription || entry.description,
          metaKeywords: entry.metaKeywords || generateKeywords(),
          ogImage: entry.ogImage || `${BASE_URL}/og-services.jpg`,
          ogType: "website",
          twitterCard: "summary_large_image",
          canonicalUrl: `${BASE_URL}/services/${slug}`,
        }}
      />
      <Footer />
    </>
  );
}
