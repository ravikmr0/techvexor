import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { IndustrySolutionsPage as IndustrySolutions } from "@/components/sections/industry-solutions";
import { Footer } from "@/components/sections/footer";

export default function Industries() {
  usePageTitle("Industries - Vexor Technologies");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustrySolutions />
      <Footer />
    </div>
  );
}