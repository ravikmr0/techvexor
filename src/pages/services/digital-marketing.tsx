import { Header } from "@/components/header";
import { ServiceDetailSection } from "@/components/sections/service-detail";
import { Footer } from "@/components/sections/footer";

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceDetailSection 
        title="Digital Marketing Services"
        subtitle="360° Growth Strategy for Your Business"
        seo={{
          metaTitle: "Digital Marketing Services | SEO, PPC, Social Media Marketing | Tech Vexor",
          metaDescription: "Comprehensive digital marketing solutions including SEO, paid ads (Google/Facebook), social media management, content marketing, and email marketing. Drive traffic, leads, and revenue with data-driven strategies. Starting at ₹15,000/mo.",
          metaKeywords: "digital marketing services, SEO services, PPC management, social media marketing, Google Ads, Facebook Ads, content marketing, email marketing, digital marketing agency Noida, social media management, online marketing services, performance marketing, growth marketing",
          ogImage: "https://www.techvexor.com/og-digital-marketing.jpg",
          ogType: "website",
          twitterCard: "summary_large_image",
          canonicalUrl: "https://www.techvexor.com/services/digital-marketing",
        }}
        description="Comprehensive digital marketing solutions including SEO, paid advertising, social media management, content marketing, and email campaigns. We create data-driven strategies that drive traffic, generate leads, and increase revenue for your business."
        longDescription="Our full-service digital marketing agency combines creativity with analytics to deliver measurable results. From organic growth through SEO to performance-driven paid campaigns, we handle every aspect of your online presence. Our team of experts uses cutting-edge tools and proven strategies to maximize your ROI across all digital channels."
        features={[
          "Search Engine Optimization (SEO) - On-page, Off-page, Technical",
          "Pay-Per-Click (PPC) Advertising - Google Ads, Bing Ads",
          "Social Media Marketing - Facebook, Instagram, LinkedIn, Twitter",
          "Social Media Advertising - Paid campaigns with targeting",
          "Content Marketing & Copywriting",
          "Email Marketing & Automation",
          "WhatsApp & SMS Marketing",
          "Video Marketing - YouTube, Reels, TikTok",
          "Conversion Rate Optimization (CRO)",
          "Marketing Analytics & Reporting",
          "App Store Optimization (ASO)",
          "Influencer Marketing Campaigns",
        ]}
        benefits={[
          "Increase website traffic and online visibility",
          "Generate high-quality leads and conversions",
          "Build brand awareness and authority",
          "Maximize ROI with data-driven campaigns",
          "Engage customers across multiple channels",
          "Scalable strategies that grow with your business",
        ]}
        useCases={[
          "E-commerce stores looking to increase sales",
          "B2B companies generating qualified leads",
          "Local businesses improving local search rankings",
          "Startups building brand awareness",
          "Enterprise companies scaling digital presence",
          "Service providers attracting new clients",
        ]}
        technologies={["Google Analytics", "Google Ads", "Facebook Business Manager", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Hootsuite"]}
        startingPrice="₹15,000/mo"
        faqs={[
          { 
            question: "How long does it take to see results from digital marketing?", 
            answer: "SEO typically shows results in 3-6 months, while PPC and social media ads can generate immediate traffic. Content marketing and email campaigns show progressive growth over 2-4 months. We provide monthly reports to track progress." 
          },
          { 
            question: "What's included in the ₹15,000/month package?", 
            answer: "Our starter package includes SEO optimization, social media management (2-3 platforms), content creation (blogs/posts), and basic analytics reporting. Custom packages available based on your specific needs and goals." 
          },
          { 
            question: "Do you provide transparent reporting?", 
            answer: "Yes! We provide detailed monthly reports with key metrics including traffic, rankings, conversions, ROI, and campaign performance. You'll have access to real-time dashboards and monthly strategy calls." 
          },
          { 
            question: "Can you work with our existing marketing team?", 
            answer: "Absolutely! We can collaborate with your in-house team or work independently. We're flexible and can complement your existing efforts or take full ownership of digital marketing." 
          },
        ]}
      />
      <Footer />
    </div>
  );
}
