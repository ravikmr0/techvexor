import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryMarketingAdvertising() {
  usePageTitle("Marketing & Advertising Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Marketing & Advertising"
        subtitle="Data-driven marketing excellence."
        description="Leverage AI and automation to optimize campaigns, target audiences, and measure marketing ROI."
        useCases={[
          "Campaign management and optimization",
          "Audience segmentation and targeting",
          "Marketing automation",
          "Performance analytics and attribution",
          "Content personalization",
        ]}
        outcomes={[
          "Higher campaign ROI",
          "Better audience targeting",
          "Improved conversion rates",
        ]}
      />
      <Footer />
    </div>
  );
}
