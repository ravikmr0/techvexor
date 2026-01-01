import { Services } from "./sections/services";
import { WhyChooseUs } from "./sections/why-choose-us";
import { CaseStudies } from "./sections/case-studies";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Header } from "./header";
import { Hero } from "./sections/hero";
import { AIDemo } from "./sections/ai-demo";
import { UseCases } from "./sections/use-cases";
import { TrustBadges } from "./sections/trust-badges";
import { usePageTitle } from "@/hooks/use-page-title";
import { SEO } from "./seo/canonical-url";

function Home() {
  usePageTitle("AI Transformation & Digital Growth Agency");

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Transformation & Digital Growth Agency"
        description="Tech Vexor is a leading IT solutions company in Noida offering custom website development, mobile app development, AI/ML solutions, cloud services, cybersecurity, and digital marketing. Transform your business with cutting-edge technology solutions."
        keywords="IT solutions company Noida, website development, mobile app development, AI ML solutions, digital marketing agency, cloud solutions, cybersecurity services, custom software development"
      />
      <Header />
      <Hero />
      <Services />
      <AIDemo />
      <UseCases />
      <WhyChooseUs />
      <TrustBadges />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
