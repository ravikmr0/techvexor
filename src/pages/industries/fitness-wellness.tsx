import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryFitnessWellness() {
  usePageTitle("Fitness & Wellness Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Fitness & Wellness"
        subtitle="Powering health and wellness businesses."
        description="Enable fitness businesses with member management, personalized training programs, and engagement tools."
        useCases={[
          "Member management and scheduling",
          "Personalized workout programs",
          "Progress tracking and analytics",
          "Virtual fitness classes",
          "Nutrition and wellness tracking",
        ]}
        outcomes={[
          "Increased member retention",
          "Enhanced engagement",
          "Streamlined operations",
        ]}
      />
      <Footer />
    </div>
  );
}
