import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustrySports() {
  usePageTitle("Sports Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Sports"
        subtitle="Technology for sports organizations."
        description="Empower sports teams and organizations with analytics, fan engagement, and operations management solutions."
        useCases={[
          "Performance analytics and tracking",
          "Fan engagement platforms",
          "Ticketing and event management",
          "Membership and subscription management",
          "Sponsorship and revenue optimization",
        ]}
        outcomes={[
          "Improved team performance",
          "Enhanced fan experience",
          "Increased revenue streams",
        ]}
      />
      <Footer />
    </div>
  );
}
