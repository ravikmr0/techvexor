import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { ServiceDetailSection } from "@/components/sections/service-detail";

export default function ServiceAIAndML() {
  return (
    <>
      <Header />
      <ServiceDetailSection
        title="AI & Machine Learning Development Services"
        subtitle="From prototyping to production-grade AI systems"
        seo={{
          metaTitle: "AI & Machine Learning Development Services | ML Solutions Company | Tech Vexor",
          metaDescription: "Expert AI and machine learning development services. Build predictive models, recommendation systems, NLP solutions, and computer vision applications with production-ready MLOps. Get a free consultation today.",
          metaKeywords: "AI development, machine learning services, ML solutions, predictive analytics, NLP development, computer vision, MLOps, AI consulting, deep learning, neural networks, data science services",
          ogImage: "https://techvexor.com/og-ai-ml-services.jpg",
          ogType: "website",
          twitterCard: "summary_large_image",
          canonicalUrl: "https://techvexor.com/services-ai-ml",
        }}
        description="We build and deploy end-to-end AI systems: data pipelines, model training, evaluation, and serving. Unlock predictions, recommendations, and automation that drive measurable business outcomes."
        longDescription="Our AI/ML team combines deep technical expertise with business acumen to deliver AI solutions that work in the real world. From initial data exploration to production deployment and monitoring, we handle the complete machine learning lifecycle with a focus on reliability, scalability, and measurable ROI."
        features={[
          "Data engineering and feature pipeline development",
          "Custom model development and training",
          "Model evaluation, validation, and A/B testing",
          "MLOps and continuous training/serving infrastructure",
          "Recommendation and personalization engines",
          "Demand forecasting and predictive analytics",
          "Natural Language Processing (NLP) solutions",
          "Computer vision and image recognition",
          "Anomaly detection and fraud prevention",
          "Responsible AI, explainability, and governance",
        ]}
        benefits={[
          "Measurable business impact from AI investments",
          "Operationalize models with robust MLOps practices",
          "Scalable, maintainable AI systems",
          "Reduce manual processes with intelligent automation",
          "Make data-driven decisions with predictive insights",
          "Stay competitive with cutting-edge AI capabilities",
        ]}
        useCases={[
          "Customer churn prediction",
          "Product recommendation systems",
          "Demand forecasting and inventory optimization",
          "Document processing and extraction",
          "Sentiment analysis and social listening",
          "Quality control and defect detection",
        ]}
        technologies={["Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLflow", "Kubeflow", "AWS SageMaker", "Hugging Face"]}
        faqs={[
          { question: "Do we need a lot of data to start with AI/ML?", answer: "It depends on the use case. Some problems require large datasets, while others can work with smaller, high-quality data. We assess your data and recommend the best approach, including data augmentation strategies." },
          { question: "How long does it take to build an ML model?", answer: "A proof-of-concept typically takes 4-8 weeks. Production-ready systems with MLOps take 3-6 months. We provide detailed timelines after understanding your specific requirements." },
          { question: "How do you ensure model accuracy over time?", answer: "We implement monitoring for data drift and model performance, with automated retraining pipelines and alerting to maintain accuracy as conditions change." },
        ]}
      />
      <Footer />
    </>
  );
}
