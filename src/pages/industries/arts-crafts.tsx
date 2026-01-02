import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryArtsCrafts() {
  usePageTitle("Arts & Crafts Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Arts & Crafts"
        subtitle="Empowering creative businesses."
        description="Build your creative business with e-commerce, inventory management, and marketing solutions."
        useCases={[
          "E-commerce and marketplace integration",
          "Inventory and materials management",
          "Commission and custom order tracking",
          "Portfolio and gallery management",
          "Social media and marketing",
        ]}
        outcomes={[
          "Increased online sales",
          "Better inventory control",
          "Expanded market reach",
        ]}
      />
      <Footer />
    </div>
  );
}
