import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryPhotography() {
  usePageTitle("Photography Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Photography"
        subtitle="Digital solutions for creative professionals."
        description="Streamline your photography business with booking systems, portfolio management, and client delivery tools."
        useCases={[
          "Online booking and scheduling",
          "Portfolio and gallery management",
          "Client proofing and delivery",
          "Invoice and payment processing",
          "Marketing and SEO tools",
        ]}
        outcomes={[
          "Streamlined client workflow",
          "Professional online presence",
          "Increased bookings",
        ]}
      />
      <Footer />
    </div>
  );
}
