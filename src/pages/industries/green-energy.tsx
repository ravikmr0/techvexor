import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryGreenEnergy() {
  usePageTitle("Green Energy Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Green Energy"
        subtitle="Technology for sustainable energy."
        description="Accelerate your renewable energy business with monitoring, optimization, and customer management solutions."
        useCases={[
          "Energy production monitoring",
          "Grid integration and management",
          "Customer portal and billing",
          "Asset performance optimization",
          "Sustainability reporting",
        ]}
        outcomes={[
          "Optimized energy production",
          "Improved asset performance",
          "Better customer engagement",
        ]}
      />
      <Footer />
    </div>
  );
}
