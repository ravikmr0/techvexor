import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryManufacturing() {
  usePageTitle("Manufacturing Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Manufacturing"
        subtitle="Smart factory solutions for operational excellence."
        description="Transform your manufacturing operations with AI-powered automation, predictive maintenance, and quality control systems."
        useCases={[
          "Predictive maintenance and asset optimization",
          "Quality control and defect detection",
          "Supply chain optimization",
          "Production scheduling and planning",
          "Energy management and sustainability",
        ]}
        outcomes={[
          "Reduced downtime and maintenance costs",
          "Improved product quality and yield",
          "Optimized production efficiency",
        ]}
      />
      <Footer />
    </div>
  );
}
