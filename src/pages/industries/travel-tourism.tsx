import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryTravelTourism() {
  usePageTitle("Travel & Tourism Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Travel & Tourism"
        subtitle="Creating unforgettable travel experiences."
        description="Transform your travel business with personalized recommendations, seamless booking systems, and intelligent customer service."
        useCases={[
          "Personalized travel recommendations",
          "Dynamic pricing and revenue management",
          "Booking and reservation systems",
          "Customer service chatbots",
          "Loyalty and rewards programs",
        ]}
        outcomes={[
          "Increased bookings and revenue",
          "Enhanced customer experience",
          "Improved operational efficiency",
        ]}
      />
      <Footer />
    </div>
  );
}
