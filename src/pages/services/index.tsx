import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { ServicesPage } from "@/components/sections/services-page";
import { Footer } from "@/components/sections/footer";
import { SEO } from "@/components/seo/canonical-url";

export default function Services() {
  usePageTitle("Services | Tech Vexor", { suffix: null });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Services | Tech Vexor"
        description="Explore Tech Vexor services for website development, mobile apps, AI solutions, SEO, and digital marketing."
        keywords="web development services, mobile app development, AI solutions, SEO services"
      />
      <Header />
      <ServicesPage />
      <Footer />
    </div>
  );
}