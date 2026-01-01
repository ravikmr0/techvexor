import { Header } from "@/components/header";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { Footer } from "@/components/sections/footer";

export default function CustomSoftware() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailSection 
        title="Custom Software Development Services"
        subtitle="Full-stack engineering for web, mobile, and enterprise platforms"
        seo={{
          metaTitle: "Custom Software Development Services | Bespoke Software Solutions | Tech Vexor",
          metaDescription: "Expert custom software development services. Build scalable, secure applications tailored to your business needs. Full-stack development from MVP to enterprise solutions. Free consultation available.",
          metaKeywords: "custom software development, bespoke software, web application development, mobile app development, enterprise software, SaaS development, full-stack development, software engineering services",
          ogImage: "https://www.techvexor.com/og-custom-software.jpg",
          ogType: "website",
          twitterCard: "summary_large_image",
          canonicalUrl: "https://www.techvexor.com/services/custom-software",
        }}
        description="We build secure, scalable products and platforms with modern stacks and exceptional UX. From MVPs to enterprise systems, we deliver end-to-end custom software solutions that drive business growth."
        longDescription="Our custom software development team transforms your ideas into powerful digital solutions. We combine deep technical expertise with business acumen to create software that solves real problems and delivers measurable ROI. Every project is built with scalability, security, and maintainability at its core."
        features={[
          "Product discovery, requirements analysis, and UX/UI design",
          "API-first and microservices architecture design",
          "Modern web applications (React, Next.js, Vue)",
          "Mobile app development (React Native, Flutter, Native)",
          "Enterprise software and legacy modernization",
          "Database design and optimization",
          "Quality engineering with automated testing",
          "DevOps, CI/CD pipelines, and observability",
          "Cloud deployment and infrastructure setup",
          "Ongoing maintenance and support",
        ]}
        benefits={[
          "Faster time-to-market with agile development",
          "Reduced operational costs through automation",
          "Scalable architecture that grows with your business",
          "Maintainable codebases with comprehensive documentation",
          "Solutions aligned to measurable business outcomes",
          "Lower total cost of ownership over time",
        ]}
        useCases={[
          "SaaS product development",
          "Enterprise resource planning systems",
          "Customer portals and dashboards",
          "E-commerce and marketplace platforms",
          "Workflow automation tools",
          "Data analytics and reporting systems",
        ]}
        technologies={["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "AWS", "Docker"]}
        faqs={[
          { question: "How long does custom software development take?", answer: "Timeline varies based on complexity. Simple MVPs take 2-3 months, medium projects 4-6 months, and complex enterprise systems 6-12+ months. We provide detailed estimates after requirements analysis." },
          { question: "What's your development process?", answer: "We follow agile methodology with 2-week sprints, regular demos, and continuous feedback. This ensures transparency and allows for adjustments throughout the project." },
          { question: "Do you provide post-launch support?", answer: "Yes, we offer comprehensive maintenance and support packages including bug fixes, feature enhancements, security updates, and 24/7 monitoring options." },
        ]}
      />
      <Footer />
    </div>
  );
}