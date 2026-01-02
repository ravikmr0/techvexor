import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryFashionApparel() {
  usePageTitle("Fashion & Apparel Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Fashion & Apparel"
        subtitle="Digital innovation for fashion brands."
        description="Elevate your fashion business with e-commerce solutions, inventory management, and trend analytics."
        useCases={[
          "E-commerce and omnichannel sales",
          "Inventory and supply chain management",
          "Virtual try-on and sizing",
          "Trend forecasting and analytics",
          "Customer personalization",
        ]}
        outcomes={[
          "Increased online sales",
          "Reduced returns",
          "Better inventory management",
        ]}
      />
      <Footer />
    </div>
  );
}
