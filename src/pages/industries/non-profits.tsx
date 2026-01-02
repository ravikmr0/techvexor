import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryNonProfits() {
  usePageTitle("Non-Profits Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Non-Profits"
        subtitle="Technology for social impact."
        description="Empower your non-profit with donor management, campaign optimization, and impact measurement tools."
        useCases={[
          "Donor management and CRM",
          "Fundraising campaign optimization",
          "Volunteer coordination",
          "Impact measurement and reporting",
          "Grant management",
        ]}
        outcomes={[
          "Increased donations and funding",
          "Better donor engagement",
          "Greater social impact",
        ]}
      />
      <Footer />
    </div>
  );
}
