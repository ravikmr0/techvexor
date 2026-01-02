import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryBeautySalonsSpas() {
  usePageTitle("Beauty Salons & Spas Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Beauty Salons & Spas"
        subtitle="Elevating beauty and wellness businesses."
        description="Transform your salon or spa with booking systems, client management, and marketing automation."
        useCases={[
          "Online booking and scheduling",
          "Client management and history",
          "Staff scheduling and commission tracking",
          "Loyalty and rewards programs",
          "Marketing and promotions",
        ]}
        outcomes={[
          "Increased bookings",
          "Better client retention",
          "Streamlined operations",
        ]}
      />
      <Footer />
    </div>
  );
}
