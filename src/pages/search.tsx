import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { usePageTitle } from "@/hooks/use-page-title";
import {
  Search,
  FileText,
  Briefcase,
  DollarSign,
  Building2,
  Globe,
  ArrowRight,
  Filter,
  X,
  Package,
} from "lucide-react";
import { searchContent, SearchResult, SearchResultType } from "@/components/search/search-data";
import { cn } from "@/lib/utils";
import { SEO } from "@/components/seo/canonical-url";

const typeIcons: Record<SearchResultType, React.ReactNode> = {
  service: <Briefcase className="w-5 h-5" />,
  project: <FileText className="w-5 h-5" />,
  product: <Package className="w-5 h-5" />,
  industry: <Building2 className="w-5 h-5" />,
  page: <Globe className="w-5 h-5" />,
};

const typeLabels: Record<SearchResultType, string> = {
  service: "Services",
  project: "Projects",
  product: "Products",
  industry: "Industries",
  page: "Pages",
};

const typeColors: Record<SearchResultType, string> = {
  service: "bg-blue-100 text-blue-700 border-blue-200",
  project: "bg-purple-100 text-purple-700 border-purple-200",
  product: "bg-green-100 text-green-700 border-green-200",
  industry: "bg-orange-100 text-orange-700 border-orange-200",
  page: "bg-slate-100 text-slate-700 border-slate-200",
};

function ResultCard({ result }: { result: SearchResult }) {
  return (
    <Link to={result.url}>
      <Card className="hover:shadow-md transition-all duration-200 hover:border-indigo-200 group">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div
              className={cn(
                "p-2.5 rounded-lg border",
                typeColors[result.type]
              )}
            >
              {typeIcons[result.type]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {result.title}
                </h3>
                {result.price && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {result.price}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-slate-600 mt-1 line-clamp-2">
                {result.description}
              </p>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <Badge variant="secondary" className={cn("text-xs", typeColors[result.type])}>
                  {typeLabels[result.type]}
                </Badge>
                {result.category && (
                  <Badge variant="outline" className="text-xs">
                    {result.category}
                  </Badge>
                )}
                {result.tags?.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs text-slate-500">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<"all" | SearchResultType>("all");
  
  usePageTitle(query ? `Search: ${query}` : "Search");

  // Get all results
  const allResults = useMemo(() => {
    if (query.length < 1) return [];
    return searchContent(query, 50);
  }, [query]);

  // Filter by type
  const filteredResults = useMemo(() => {
    if (activeTab === "all") return allResults;
    return allResults.filter((r) => r.type === activeTab);
  }, [allResults, activeTab]);

  // Count by type
  const countByType = useMemo(() => {
    const counts: Record<string, number> = { all: allResults.length };
    allResults.forEach((r) => {
      counts[r.type] = (counts[r.type] || 0) + 1;
    });
    return counts;
  }, [allResults]);

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  // Update URL when query changes
  useEffect(() => {
    if (query !== initialQuery && query.length >= 1) {
      const timer = setTimeout(() => {
        setSearchParams({ q: query });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [query, initialQuery, setSearchParams]);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title={query ? `Search: ${query}` : "Search Tech Vexor"}
        description="Search across all Tech Vexor services, projects, pricing plans, and industries. Find exactly what you're looking for."
      />
      <Header />

      {/* Hero Search Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Search Everything
            </h1>
            <p className="text-slate-400 mb-8">
              Find services, projects, pricing plans, and industry solutions
            </p>
            
            {/* Search Form */}
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for services, projects, pricing..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full h-14 pl-14 pr-32 text-lg bg-white border-0 rounded-xl shadow-lg focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="w-6 h-6 absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400" />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-28 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700"
                >
                  Search
                </Button>
              </div>
            </form>

            {/* Quick Search Suggestions */}
            {!query && (
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="text-slate-500 text-sm">Popular:</span>
                {["Solar Panels", "AI Chatbot", "Mobile App", "Web Development", "Inverter", "EV Charger", "Healthcare"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-sm px-3 py-1 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-700 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {query.length >= 1 ? (
            <>
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {allResults.length} result{allResults.length !== 1 ? "s" : ""} for "{query}"
                  </h2>
                </div>
              </div>

              {/* Filter Tabs */}
              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="mb-6">
                <TabsList className="bg-white border border-slate-200 p-1 flex-wrap">
                  <TabsTrigger value="all" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                    All ({countByType.all || 0})
                  </TabsTrigger>
                  <TabsTrigger value="service" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Services ({countByType.service || 0})
                  </TabsTrigger>
                  <TabsTrigger value="product" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                    Products ({countByType.product || 0})
                  </TabsTrigger>
                  <TabsTrigger value="project" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                    Projects ({countByType.project || 0})
                  </TabsTrigger>
                  <TabsTrigger value="industry" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                    Industries ({countByType.industry || 0})
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Results Grid */}
              {filteredResults.length > 0 ? (
                <div className="grid gap-4">
                  {filteredResults.map((result) => (
                    <ResultCard key={result.id} result={result} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                  <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-900 mb-2">
                    No {activeTab !== "all" ? typeLabels[activeTab].toLowerCase() : "results"} found
                  </h3>
                  <p className="text-slate-500 mb-4">
                    Try adjusting your filters or search for something else
                  </p>
                  {activeTab !== "all" && (
                    <Button variant="outline" onClick={() => setActiveTab("all")}>
                      View All Results
                    </Button>
                  )}
                </div>
              )}
            </>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                Start your search
              </h2>
              <p className="text-slate-500 max-w-md mx-auto mb-8">
                Start typing to search across our services, projects, pricing plans, and industry solutions.
              </p>

              {/* Quick Links */}
              <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                <Link to="/services" className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group">
                  <Briefcase className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <h3 className="font-medium text-slate-900 group-hover:text-blue-600">Services</h3>
                  <p className="text-sm text-slate-500">Browse all services</p>
                </Link>
                <Link to="/products" className="p-4 bg-white rounded-xl border border-slate-200 hover:border-green-300 hover:shadow-md transition-all group">
                  <Package className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-medium text-slate-900 group-hover:text-green-600">Products</h3>
                  <p className="text-sm text-slate-500">Solar & energy products</p>
                </Link>
                <Link to="/projects" className="p-4 bg-white rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group">
                  <FileText className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <h3 className="font-medium text-slate-900 group-hover:text-purple-600">Projects</h3>
                  <p className="text-sm text-slate-500">View our portfolio</p>
                </Link>
                <Link to="/industries" className="p-4 bg-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all group">
                  <Building2 className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-medium text-slate-900 group-hover:text-orange-600">Industries</h3>
                  <p className="text-sm text-slate-500">Industry solutions</p>
                </Link>
                <Link to="/contact" className="p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all group">
                  <Globe className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                  <h3 className="font-medium text-slate-900 group-hover:text-slate-600">Contact</h3>
                  <p className="text-sm text-slate-500">Get in touch</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
