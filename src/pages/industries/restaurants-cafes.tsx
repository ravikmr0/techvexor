import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryRestaurantsCafes() {
  usePageTitle("Restaurants & Cafes Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Restaurants & Cafes"
        subtitle="Streamline operations and enhance dining experiences."
        description="Transform your food service business with digital ordering, inventory management, and customer engagement solutions."
        useCases={[
          "Online ordering and delivery integration",
          "Table management and reservations",
          "Inventory and supply chain management",
          "Customer loyalty programs",
          "Staff scheduling optimization",
        ]}
        outcomes={[
          "Increased order volume and revenue",
          "Reduced food waste and costs",
          "Enhanced customer satisfaction",
        ]}
      />
      <Footer />
    </div>
  );
}
