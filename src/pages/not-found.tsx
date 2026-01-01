import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo/canonical-url";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved. Return to Tech Vexor's homepage to explore our IT solutions, AI services, and digital marketing offerings."
        noindex={true}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Graphic */}
            <div className="mb-8">
              <span className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                404
              </span>
            </div>
            
            {/* Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white">
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Link to="/services">
                  <Search className="w-4 h-4 mr-2" />
                  Explore Services
                </Link>
              </Button>
            </div>
            
            {/* Quick Links */}
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400 mb-4">Popular pages:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Services
                </Link>
                <Link to="/industries" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Industries
                </Link>
                <Link to="/ai-solutions" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  AI Solutions
                </Link>
                <Link to="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Case Studies
                </Link>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
