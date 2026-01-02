import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryLogisticsTransportation() {
  usePageTitle("Logistics & Transportation Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Logistics & Transportation"
        subtitle="Optimizing supply chains and delivery networks."
        description="Transform logistics operations with route optimization, fleet management, and real-time tracking solutions."
        useCases={[
          "Route optimization and planning",
          "Fleet management and tracking",
          "Warehouse management systems",
          "Demand forecasting",
          "Last-mile delivery optimization",
        ]}
        outcomes={[
          "Reduced transportation costs",
          "Improved delivery times",
          "Better fleet utilization",
        ]}
      />
      <Footer />
    </div>
  );
}
