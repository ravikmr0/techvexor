import { useParams, Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustryDetailSection } from "@/components/sections/industry-detail";
import { industryGroups, IndustryEntry } from "@/data/industry-catalog";

// Build an index from all industry groups
const industryIndex: Record<string, IndustryEntry> = {};
industryGroups.forEach(group => {
  group.items.forEach(item => {
    industryIndex[item.slug] = item;
  });
});

export default function IndustrySlugPage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the industry from the catalog
  const industry: IndustryEntry | undefined = slug ? industryIndex[slug] : undefined;

  usePageTitle(
    industry
      ? `${industry.title} Industry Solutions - Vexor Technologies`
      : "Industry Solutions - Vexor Technologies"
  );

  if (!industry) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Industry Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The industry you're looking for doesn't exist.
          </p>
          <Link className="text-indigo-600 underline" to="/industries">
            Back to Industries
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <IndustryDetailSection
        title={industry.title}
        subtitle={industry.description}
        description={industry.longDescription || industry.description}
        useCases={industry.useCases}
        outcomes={industry.outcomes}
      />
      <Footer />
    </div>
  );
}
