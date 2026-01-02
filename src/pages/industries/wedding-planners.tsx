import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryWeddingPlanners() {
  usePageTitle("Wedding Planners Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Wedding Planners"
        subtitle="Digital tools for wedding professionals."
        description="Streamline your wedding planning business with client management, vendor coordination, and event planning tools."
        useCases={[
          "Client portal and planning tools",
          "Vendor management and coordination",
          "Budget tracking and management",
          "Timeline and task management",
          "Portfolio and marketing",
        ]}
        outcomes={[
          "Streamlined planning process",
          "Better client communication",
          "Increased bookings",
        ]}
      />
      <Footer />
    </div>
  );
}
