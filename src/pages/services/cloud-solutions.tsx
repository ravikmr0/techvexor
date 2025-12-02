import { Header } from "@/components/header";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { Footer } from "@/components/sections/footer";

export default function CloudSolutions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailSection 
        title="Cloud Services & Infrastructure Solutions"
        subtitle="Migrate, optimize, and build cloud-native applications"
        metaTitle="Cloud Services | AWS, Azure, GCP Cloud Solutions & Migration"
        metaDescription="Expert cloud services including migration, infrastructure setup, DevOps, and cost optimization. AWS, Azure, and Google Cloud certified team for reliable cloud solutions."
        description="We design and implement secure, scalable cloud platforms across AWS, Azure, and GCP. Modernize workloads, automate delivery, and improve reliability while optimizing costs."
        longDescription="Cloud infrastructure is the foundation of modern digital businesses. Our certified cloud architects design and implement solutions that are secure, scalable, and cost-optimized. From lift-and-shift migrations to cloud-native architectures, we help you harness the full potential of cloud computing."
        features={[
          "Cloud architecture design and planning",
          "Migration from on-premises to cloud",
          "Multi-cloud and hybrid cloud strategies",
          "Infrastructure as Code (Terraform, CloudFormation, Pulumi)",
          "Container orchestration (Kubernetes, ECS, AKS)",
          "Serverless architecture implementation",
          "Cloud security and compliance (SOC 2, HIPAA, GDPR)",
          "Cost optimization and FinOps practices",
          "24/7 monitoring, alerting, and incident response",
          "Disaster recovery and business continuity planning",
        ]}
        benefits={[
          "Reduce infrastructure costs by 30-50%",
          "Scale instantly to meet demand spikes",
          "Improve reliability with 99.99% uptime SLAs",
          "Enhance security with cloud-native tools",
          "Accelerate deployment with automation",
          "Focus on business while we manage infrastructure",
        ]}
        useCases={[
          "Application hosting and deployment",
          "Data lakes and analytics platforms",
          "Machine learning infrastructure",
          "Disaster recovery solutions",
          "Development and testing environments",
          "Global content delivery and edge computing",
        ]}
        technologies={["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker", "CloudFormation", "Ansible"]}
        faqs={[
          { question: "Which cloud provider should I choose?", answer: "It depends on your specific needs. AWS offers the broadest services, Azure integrates well with Microsoft products, and GCP excels in data and ML. We help you choose based on your requirements and existing investments." },
          { question: "How much can I save by moving to the cloud?", answer: "Most organizations see 30-50% cost reduction through right-sizing, reserved instances, and eliminating over-provisioning. We provide detailed cost analysis and optimization recommendations." },
          { question: "Is the cloud secure for sensitive data?", answer: "Yes, major cloud providers offer enterprise-grade security. We implement additional controls for compliance with HIPAA, SOC 2, GDPR, PCI-DSS, and other standards." },
        ]}
      />
      <Footer />
    </div>
  );
}