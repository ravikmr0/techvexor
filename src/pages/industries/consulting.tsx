import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryConsulting() {
  usePageTitle("Consulting Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Consulting"
        subtitle="Empowering consultants with digital tools."
        description="Transform your consulting practice with project management, client collaboration, and analytics solutions."
        useCases={[
          "Project and engagement management",
          "Client portal and collaboration",
          "Knowledge management systems",
          "Resource planning and allocation",
          "Business intelligence dashboards",
        ]}
        outcomes={[
          "Improved project delivery",
          "Enhanced client relationships",
          "Better resource utilization",
        ]}
      />
      <Footer />
    </div>
  );
}
