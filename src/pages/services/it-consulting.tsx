import { Header } from "@/components/header";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { Footer } from "@/components/sections/footer";

export default function ITConsulting() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailSection 
        title="IT Consulting & Digital Strategy Services"
        subtitle="Strategic guidance to drive digital transformation"
        seo={{
          metaTitle: "IT Consulting Services | Digital Transformation & Technology Strategy | Tech Vexor",
          metaDescription: "Strategic IT consulting to drive digital transformation. Technology roadmaps, enterprise architecture reviews, and modernization strategies aligned with your business goals. Expert guidance available.",
          metaKeywords: "IT consulting, digital transformation, technology strategy, enterprise architecture, IT roadmap, legacy modernization, technology assessment, digital strategy consulting, IT governance, change management",
          ogImage: "https://www.techvexor.com/og-it-consulting.jpg",
          ogType: "website",
          twitterCard: "summary_large_image",
          canonicalUrl: "https://www.techvexor.com/services/it-consulting",
        }}
        description="We assess your current systems, identify gaps, and build a pragmatic plan to modernize and scale. From cloud readiness to data strategy, our consulting accelerates outcomes and reduces risk."
        longDescription="Technology decisions have lasting business impact. Our IT consultants bring decades of combined experience across industries to help you make informed decisions. We bridge the gap between business objectives and technology capabilities, ensuring your investments deliver measurable value and competitive advantage."
        features={[
          "Digital transformation strategy and roadmaps",
          "Technology stack assessment and recommendations",
          "Enterprise architecture design and review",
          "Legacy system modernization planning",
          "Vendor evaluation and selection support",
          "IT governance and process optimization",
          "Technology due diligence for M&A",
          "Cloud strategy and migration planning",
          "Security and compliance assessments",
          "Change management and adoption support",
        ]}
        benefits={[
          "Make confident technology decisions",
          "Align IT investments with business goals",
          "Reduce risk in digital initiatives",
          "Accelerate time-to-value for projects",
          "Build internal capabilities and knowledge",
          "Stay competitive with modern technology",
        ]}
        useCases={[
          "Digital transformation initiatives",
          "Technology stack modernization",
          "IT department optimization",
          "New product technology planning",
          "Post-merger technology integration",
          "Compliance and security improvements",
        ]}
        technologies={["Enterprise Architecture", "TOGAF", "Agile", "DevOps", "Cloud Native", "Microservices", "API-First"]}
        startingPrice="₹50,000"
        faqs={[
          { question: "When should I engage IT consultants?", answer: "Engage consultants for major technology decisions, digital transformation initiatives, when lacking internal expertise, or for objective third-party assessments of your current state." },
          { question: "How do you ensure recommendations are actionable?", answer: "We provide detailed implementation roadmaps with priorities, timelines, resource requirements, and success metrics - not just high-level advice. We can also support implementation." },
          { question: "Do you help with implementation?", answer: "Yes, we can support implementation through project management, technical guidance, hands-on development, or staff augmentation as needed." },
        ]}
      />
      <Footer />
    </div>
  );
}