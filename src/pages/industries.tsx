import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { IndustrySolutionsPage } from "@/components/sections/industry-solutions";
import { usePageTitle } from "@/hooks/use-page-title";
import { Helmet } from "react-helmet-async";

export default function Industries() {
  usePageTitle("Industry Solutions | AI & Software for 100+ Industries | Tech Vexor");

  return (
    <>
      <Helmet>
        <title>Industry Solutions | AI & Software for 100+ Industries | Tech Vexor</title>
        <meta name="description" content="Discover Tech Vexor's industry-specific IT solutions for healthcare, finance, retail, manufacturing, education, and 100+ more industries. Transform your business with tailored technology." />
        <meta name="keywords" content="industry solutions, IT solutions for healthcare, finance technology, retail software, manufacturing IT, education technology, industry-specific software, digital transformation by industry" />
        <link rel="canonical" href="https://www.techvexor.com/industries" />
        <meta property="og:title" content="Industry Solutions | AI & Software for 100+ Industries | Tech Vexor" />
        <meta property="og:description" content="Discover Tech Vexor's industry-specific IT solutions for healthcare, finance, retail, manufacturing, education, and 100+ more industries." />
        <meta property="og:url" content="https://www.techvexor.com/industries" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <IndustrySolutionsPage />
      <Footer />
    </>
  );
}
