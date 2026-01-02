import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryEcommerce() {
  usePageTitle("E-commerce Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="E-commerce"
        subtitle="Scale your online business with intelligent solutions."
        description="Drive growth with AI-powered product recommendations, dynamic pricing, and seamless customer experiences across all touchpoints."
        useCases={[
          "Product recommendation engines",
          "Dynamic pricing optimization",
          "Cart abandonment recovery",
          "Customer segmentation and targeting",
          "Inventory and fulfillment optimization",
        ]}
        outcomes={[
          "Increased conversion rates",
          "Higher average order value",
          "Improved customer retention",
        ]}
      />
      <Footer />
    </div>
  );
}
