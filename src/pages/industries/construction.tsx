import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryConstruction() {
  usePageTitle("Construction Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Construction"
        subtitle="Digital solutions for construction projects."
        description="Transform your construction business with project management, BIM integration, and field operations tools."
        useCases={[
          "Project management and scheduling",
          "BIM and 3D modeling integration",
          "Field operations and inspections",
          "Equipment and asset tracking",
          "Safety and compliance management",
        ]}
        outcomes={[
          "On-time project delivery",
          "Reduced cost overruns",
          "Improved safety compliance",
        ]}
      />
      <Footer />
    </div>
  );
}
