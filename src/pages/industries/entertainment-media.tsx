import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryEntertainmentMedia() {
  usePageTitle("Entertainment & Media Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Entertainment & Media"
        subtitle="Engaging audiences in the digital age."
        description="Transform content creation, distribution, and monetization with AI-powered solutions."
        useCases={[
          "Content recommendation engines",
          "Audience analytics and insights",
          "Digital rights management",
          "Streaming platform development",
          "Ad optimization and targeting",
        ]}
        outcomes={[
          "Increased viewer engagement",
          "Higher content monetization",
          "Better audience retention",
        ]}
      />
      <Footer />
    </div>
  );
}
