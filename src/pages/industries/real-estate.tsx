import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryRealEstate() {
  usePageTitle("Real Estate Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Real Estate"
        subtitle="Digital transformation for property businesses."
        description="Leverage technology to streamline property management, enhance buyer experiences, and optimize real estate operations."
        useCases={[
          "Property listing and search platforms",
          "Virtual tours and 3D visualization",
          "Lead management and CRM",
          "Property valuation analytics",
          "Tenant management systems",
        ]}
        outcomes={[
          "Faster property transactions",
          "Improved lead conversion",
          "Enhanced tenant satisfaction",
        ]}
      />
      <Footer />
    </div>
  );
}
