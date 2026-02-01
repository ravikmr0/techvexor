import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePageTitle } from "@/hooks/use-page-title";
import { ArrowRight, ExternalLink, Github, Globe } from "lucide-react";
import { SEO, generateBreadcrumbSchema } from "@/components/seo/canonical-url";

const projects = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    description:
      "A comprehensive e-commerce solution with AI-driven product recommendations, inventory management, and customer analytics.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "AI/ML", "E-commerce"],
    status: "Completed",
    client: "RetailTech Solutions",
  },
  {
    id: 2,
    title: "Smart Healthcare Management System",
    description:
      "An integrated healthcare platform featuring patient management, appointment scheduling, and AI-assisted diagnostics.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    tags: ["Healthcare", "AI", "React", "Python"],
    status: "In Progress",
    client: "MedCare Network",
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    description:
      "Real-time financial analytics and reporting dashboard with predictive modeling and risk assessment capabilities.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["FinTech", "Analytics", "Dashboard", "AI"],
    status: "Completed",
    client: "FinanceFlow Inc",
  },
  {
    id: 4,
    title: "Smart Manufacturing IoT Platform",
    description:
      "IoT-enabled manufacturing platform with predictive maintenance, quality control, and production optimization.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    tags: ["IoT", "Manufacturing", "Predictive Analytics", "Cloud"],
    status: "Completed",
    client: "Industrial Solutions Ltd",
  },
  {
    id: 5,
    title: "AI Customer Service Chatbot",
    description:
      "Intelligent chatbot system with natural language processing, sentiment analysis, and seamless human handoff.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    tags: ["AI", "NLP", "Chatbot", "Customer Service"],
    status: "In Progress",
    client: "ServicePro Global",
  },
  {
    id: 6,
    title: "Blockchain Supply Chain Tracker",
    description:
      "Blockchain-based supply chain management system ensuring transparency, traceability, and authenticity.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
    tags: ["Blockchain", "Supply Chain", "Transparency", "Security"],
    status: "Completed",
    client: "LogiChain Solutions",
  },
];

export default function Projects() {
  usePageTitle("IT Projects & Technology Solutions Portfolio | Tech Vexor");

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.techvexor.com" },
    { name: "IT Projects", url: "https://www.techvexor.com/projects" }
  ]);

  // Organization schema for IT projects
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tech Vexor",
    "description": "Leading IT project management company specializing in technology projects, tech project management, and information technology solutions for businesses of all sizes.",
    "url": "https://www.techvexor.com",
    "sameAs": [
      "https://github.com/techvexor"
    ]
  };

  // Service schema for IT projects
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Project Management & Technology Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Tech Vexor"
    },
    "description": "Comprehensive IT projects including tech projects, information technology projects, technical projects, B.Tech IT projects, and enterprise technology solutions.",
    "areaServed": "Worldwide"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="IT Projects & Technology Solutions Portfolio | Tech Vexor - Tech Project Management"
        description="Explore Tech Vexor's IT projects portfolio featuring technology projects, tech project ideas, information technology projects, B.Tech IT final year projects, beginner tech projects, and enterprise technology solutions. Expert IT project management for all project types."
        keywords="it projects tech, technohead security it telecom projects llp, it is a technique that projects the positive, b tech it projects final year, it technician projects, it specializes in the construction of massive technology projects, it technology projects, tech mahindra it projects, information technology it projects, what are technical projects, technical project examples, it tech projects, projects for information technology students, tech projects ideas, it projects examples, it project technician, it projects types, it project and technology, tech project ideas, what does a tech project manager do, it projects for 2023, it projects for resume, it project architect, it project technologies, technology projects examples, information technology project topics, it projects for beginners, beginner tech projects, it technical projects, it business projects, it project tech lead citi, fun it projects, dt project ideas, diy technology projects, design and technology projects ideas, engineering technology projects, engineering technology project ideas, project it field technician, fun tech projects, final year projects for information technology, final year project ideas for information technology, fun technology projects, technology project, git project templates, github projects tutorial, github projects template, tech projects github, hi-tech projects, high tech projects, i t project management, it projects, it project technician jobs, it project management jobs remote, it project manager jobs usa, it project manager jobs utah, j tech prototyping, t.i. projects, jobs it project manager, it project information technology kya hai, tech projects, knit project tutorial, knit projects to sell, knit project ideas, knit projects for beginners, it project tech lead, it project tech lead citi salary, latest technology projects in computer science, it project la, it project lead, i.t projects, i.t project management, it tech project manager, it tech project manager salary, it project management trends, it project manager companies, mit managing complex technical projects, mit tech projects, mit project ideas, mit tech review, mit tech events, mit project teams, mit projects, mit technical project management, mit engineering projects, n tech projects, nano tech projects, it 200 project one technology hardware and software, technology used in project means, it ot projects, oit project management, it technical project manager, project technologies, qit projects, it projects reddit, r tech productions, its projects, technology projects, technology projects ideas, technicolor india dreamworks projects unit, unit tech jobs, unit projects, unit project ideas, it project venture, techwithtim projects, project x tech house, project z technology, it project types, project two the it professional, 2 it careers, 4 it based projects, 4 it jobs, technical it projects, 5 it jobs, 5 it careers, 5 tech projects, it project technology, it project information technology, tech 5 vs tech 7, 7 tech projects, 8 amazing projects, 8-2 project three systems thinking, technology project examples"
        schema={{
          "@context": "https://schema.org",
          "@graph": [breadcrumbSchema, organizationSchema, serviceSchema]
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900 [mask-image:linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.6))] -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 border-0 px-4 py-2 mb-6">
              IT Projects Portfolio
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              IT Projects & Technology
              <span className="text-amber-400"> Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              Explore our comprehensive portfolio of IT technology projects, tech project ideas, 
              and information technology solutions. From B.Tech IT final year projects to enterprise 
              technology implementations, we deliver innovative IT project management excellence.
            </p>
          </div>
        </div>
      </section>

      {/* IT Projects Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent">
                Technology Projects & Technical Project Examples
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Browse our IT tech projects portfolio featuring information technology project topics, 
                engineering technology projects, and high-tech projects delivered with expert IT project management.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${
                          project.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        } border-0`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mb-3">
                        {project.client}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex-1"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button size="sm" variant="outline" className="px-3">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Start Your IT Technology Project Today
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you need IT projects for beginners, B.Tech IT final year projects, 
              or enterprise technology solutions, our tech project managers are ready to help. 
              Let's discuss your IT project and technology requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Start Your IT Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              >
                View Technology Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">
              Comprehensive IT Projects & Technology Solutions
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                Tech Vexor delivers exceptional <strong>IT projects tech</strong> solutions across all industries. 
                Our <strong>information technology IT projects</strong> portfolio showcases expertise in 
                <strong>technical projects</strong>, <strong>technology projects examples</strong>, and 
                <strong>IT project management</strong> best practices.
              </p>
              <p className="text-slate-600 mb-4">
                Whether you're seeking <strong>B.Tech IT projects final year</strong> ideas, 
                <strong>beginner tech projects</strong>, or enterprise-level <strong>IT technology projects</strong>, 
                our team provides comprehensive <strong>tech project ideas</strong> and implementation support. 
                We specialize in <strong>engineering technology projects</strong>, <strong>fun tech projects</strong>, 
                and <strong>DIY technology projects</strong> that deliver measurable results.
              </p>
              <p className="text-slate-600 mb-4">
                Our <strong>IT project technician</strong> teams and <strong>IT tech project managers</strong> 
                bring expertise in <strong>latest technology projects in computer science</strong>, 
                <strong>GitHub projects templates</strong>, and <strong>high-tech projects</strong>. 
                From <strong>final year projects for information technology</strong> students to 
                <strong>IT business projects</strong> for enterprises, we cover all <strong>IT project types</strong>.
              </p>
              <p className="text-slate-600">
                Explore our <strong>technical project examples</strong> and see why businesses trust Tech Vexor 
                for their <strong>IT projects</strong> needs. Our <strong>technology project</strong> portfolio 
                demonstrates excellence in <strong>IT project and technology</strong> integration, 
                <strong>IT technical projects</strong>, and innovative <strong>tech projects ideas</strong> 
                that drive digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
