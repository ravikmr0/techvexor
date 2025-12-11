import { Header } from "@/components/header";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { Footer } from "@/components/sections/footer";

export default function Cybersecurity() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailSection 
        title="Cybersecurity & Data Protection Services"
        subtitle="Comprehensive security solutions to protect your business"
        seo={{
          metaTitle: "Cybersecurity Services | Data Protection & Security Solutions | Tech Vexor",
          metaDescription: "Comprehensive cybersecurity services including threat assessment, penetration testing, SOC 2 & HIPAA compliance, and 24/7 security monitoring. Protect your business from cyber threats today.",
          metaKeywords: "cybersecurity services, data protection, penetration testing, security audit, SOC 2 compliance, HIPAA compliance, GDPR, threat assessment, security monitoring, incident response, zero trust security",
          ogImage: "https://techvexor.com/og-cybersecurity.jpg",
          ogType: "website",
          twitterCard: "summary_large_image",
          canonicalUrl: "https://techvexor.com/services/cybersecurity",
        }}
        description="We harden your systems with proactive security: threat modeling, secure architecture, and continuous defense to protect your business, customers, and reputation."
        longDescription="Cyber threats are evolving constantly, and businesses of all sizes are targets. Our cybersecurity team helps you build a robust security posture through risk assessment, security implementation, continuous monitoring, and incident response. We make enterprise-grade security accessible and practical for organizations of any size."
        features={[
          "Security risk assessments and audits",
          "Penetration testing and vulnerability scanning",
          "Zero Trust architecture implementation",
          "Identity and Access Management (IAM)",
          "Data encryption and key management",
          "Security Information and Event Management (SIEM)",
          "Endpoint Detection and Response (EDR)",
          "Security awareness training programs",
          "Incident response planning and execution",
          "Compliance (SOC 2, HIPAA, GDPR, PCI-DSS, ISO 27001)",
        ]}
        benefits={[
          "Reduce risk of data breaches and cyber attacks",
          "Meet regulatory compliance requirements",
          "Build customer trust with security certifications",
          "Minimize downtime from security incidents",
          "Protect intellectual property and trade secrets",
          "Avoid costly breach remediation and regulatory fines",
        ]}
        useCases={[
          "Security posture assessment and improvement",
          "Compliance certification preparation (SOC 2, HIPAA)",
          "Incident response and recovery",
          "Security operations center (SOC) services",
          "Cloud security implementation",
          "Application security testing (SAST/DAST)",
        ]}
        technologies={["SIEM", "EDR", "IAM", "Zero Trust", "Encryption", "Firewalls", "WAF", "DLP", "SOAR"]}
        faqs={[
          { question: "How often should we conduct security assessments?", answer: "We recommend annual comprehensive assessments, quarterly vulnerability scans, and continuous monitoring. High-risk industries or those handling sensitive data may need more frequent testing." },
          { question: "What compliance standards do you support?", answer: "We support SOC 2 Type I & II, HIPAA, GDPR, PCI-DSS, ISO 27001, NIST, and industry-specific regulations. We help you achieve and maintain compliance." },
          { question: "What happens if we experience a breach?", answer: "Our incident response team provides 24/7 support for containment, investigation, remediation, and recovery. We also help with regulatory notifications and stakeholder communications." },
        ]}
      />
      <Footer />
    </div>
  );
}