import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryPublishing() {
  usePageTitle("Publishing Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Publishing"
        subtitle="Digital transformation for publishers."
        description="Modernize your publishing operations with content management, distribution, and monetization solutions."
        useCases={[
          "Content management systems",
          "Digital publishing platforms",
          "Subscription and paywall management",
          "Audience analytics",
          "Multi-channel distribution",
        ]}
        outcomes={[
          "Increased digital revenue",
          "Better audience engagement",
          "Streamlined content workflow",
        ]}
      />
      <Footer />
    </div>
  );
}
