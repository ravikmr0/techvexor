import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryLocalServices() {
  usePageTitle("Local Services Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Local Services"
        subtitle="Grow your local service business."
        description="Expand your reach and streamline operations with booking, scheduling, and local marketing solutions."
        useCases={[
          "Online booking and scheduling",
          "Local SEO and marketing",
          "Customer reviews and reputation management",
          "Mobile workforce management",
          "Invoicing and payments",
        ]}
        outcomes={[
          "Increased local visibility",
          "More customer bookings",
          "Streamlined operations",
        ]}
      />
      <Footer />
    </div>
  );
}
