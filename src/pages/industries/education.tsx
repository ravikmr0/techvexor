import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";

export default function IndustryEducation() {
  usePageTitle("Education Industry Solutions - Vexor Technologies");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title="Education"
        subtitle="Transforming learning with technology."
        description="Empower educators and students with AI-driven learning platforms, personalized education, and administrative automation."
        useCases={[
          "Personalized learning paths",
          "Student performance analytics",
          "Automated grading and feedback",
          "Virtual classrooms and collaboration",
          "Administrative workflow automation",
        ]}
        outcomes={[
          "Improved student engagement and outcomes",
          "Reduced administrative burden",
          "Scalable online learning delivery",
        ]}
      />
      <Footer />
    </div>
  );
}
