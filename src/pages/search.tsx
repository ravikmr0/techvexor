import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePageTitle } from "@/hooks/use-page-title";
import {
  Search,
  FileText,
  Briefcase,
  Building2,
  FolderKanban,
  DollarSign,
  Award,
  ArrowRight,
  Filter,
} from "lucide-react";
import {
  searchAll,
  searchGrouped,
  SearchResult,
  SearchResultType,
} from "@/data/search-data";

const typeIcons: Record<SearchResultType, React.ElementType> = {
  service: Briefcase,
  industry: Building2,
  project: FolderKanban,
  pricing: DollarSign,
  "case-study": Award,
  page: FileText,
};

const typeLabels: Record<SearchResultType, string> = {
  service: "Services",
  industry: "Industries",
  project: "Projects",
  pricing: "Pricing",
  "case-study": "Case Studies",
  page: "Pages",
};

const typeColors: Record<SearchResultType, string> = {
  service: "bg-blue-100 text-blue-700 border-blue-200",
  industry: "bg-emerald-100 text-emerald-700 border-emerald-200",
  project: "bg-purple-100 text-purple-700 border-purple-200",
  pricing: "bg-amber-100 text-amber-700 border-amber-200",
  "case-study": "bg-rose-100 text-rose-700 border-rose-200",
  page: "bg-slate-100 text-slate-700 border-slate-200",
};

function ResultCard({ result }: { result: SearchResult }) {
  const Icon = typeIcons[result.type];
  
  return (
    <Link to={result.url}>
      <Card className="group hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-start gap-4">
            <div className={`p-2.5 rounded-lg ${typeColors[result.type]}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                  {result.title}
                </h3>
                <Badge variant="secondary" className={`shrink-0 text-xs ${typeColors[result.type]}`}>
                  {typeLabels[result.type].replace(/s$/, "")}
                </Badge>
              </div>
              <p className="text-sm text-slate-600 line-clamp-2 mb-2">
                {result.description}
              </p>
              {result.price && (
                <p className="text-sm font-semibold text-emerald-600 mb-2">
                  {result.price}
                </p>
              )}
              <div className="flex items-center gap-2 flex-wrap">
                {result.category && (
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {result.category}
                  </span>
                )}
                {result.tags?.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all shrink-0" />
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
  const [activeTab, setActiveTab] = useState<string>("all");
  
  usePageTitle(query ? `Search: ${query}` : "Search");

  // Update URL when query changes
  useEffect(() => {
    if (query) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  }, [query, setSearchParams]);

  // Get grouped results
  const groupedResults = useMemo(() => {
    if (!query || query.length < 2) return null;
    return searchGrouped(query);
  }, [query]);

  // Get all results
  const allResults = useMemo(() => {
    if (!query || query.length < 2) return [];
    return searchAll(query, 50);
  }, [query]);

  // Count results by type
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: allResults.length };
    if (groupedResults) {
      Object.entries(groupedResults).forEach(([type, results]) => {
        c[type] = results.length;
      });
    }
    return c;
  }, [allResults, groupedResults]);

  // Filter results based on active tab
  const displayResults = useMemo(() => {
    if (activeTab === "all") return allResults;
    return allResults.filter((r) => r.type === activeTab);
  }, [allResults, activeTab]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        {/* Search Header */}
        <section className="bg-slate-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Search Everything
              </h1>
              <p className="text-slate-400 mb-8">
                Find services, pricing, projects, industries, case studies, and more
              </p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for services, pricing, industries..."
                  className="pl-12 pr-4 h-14 text-lg bg-white border-0 shadow-lg"
                  autoFocus
                />
              </div>
              {query && query.length >= 2 && (
                <p className="mt-4 text-slate-400 text-sm">
                  Found {allResults.length} result{allResults.length !== 1 ? "s" : ""} for "{query}"
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {query && query.length >= 2 ? (
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-8 flex flex-wrap gap-2 h-auto bg-transparent p-0">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white px-4 py-2 rounded-full bg-white border"
                  >
                    All ({counts.all})
                  </TabsTrigger>
                  {(Object.keys(typeLabels) as SearchResultType[]).map((type) => {
                    const Icon = typeIcons[type];
                    return (
                      <TabsTrigger
                        key={type}
                        value={type}
                        className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white px-4 py-2 rounded-full bg-white border flex items-center gap-2"
                        disabled={counts[type] === 0}
                      >
                        <Icon className="h-4 w-4" />
                        {typeLabels[type]} ({counts[type] || 0})
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                <TabsContent value={activeTab} className="mt-0">
                  {displayResults.length > 0 ? (
                    <div className="grid gap-4">
                      {displayResults.map((result) => (
                        <ResultCard key={result.id} result={result} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <Search className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                      <h3 className="text-lg font-medium text-slate-600 mb-2">
                        No results in this category
                      </h3>
                      <p className="text-slate-500">
                        Try searching in "All" or use different keywords
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            ) : (
              <div className="max-w-3xl mx-auto">
                {/* Popular Searches */}
                <div className="mb-12">
                  <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Popular Searches
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Website Development",
                      "Mobile App Development",
                      "AI & Machine Learning",
                      "SEO Services",
                      "Cloud Solutions",
                      "E-commerce",
                      "Healthcare",
                      "Finance",
                      "Digital Marketing",
                      "UI/UX Design",
                      "Cybersecurity",
                      "ERP/CRM",
                    ].map((term) => (
                      <Button
                        key={term}
                        variant="outline"
                        onClick={() => setQuery(term)}
                        className="rounded-full hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600"
                      >
                        {term}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link to="/services">
                    <Card className="hover:shadow-md hover:border-blue-300 transition-all cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className={`p-3 rounded-lg w-fit mb-4 ${typeColors.service}`}>
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Browse Services</h3>
                        <p className="text-sm text-slate-600">
                          Explore our complete catalog of IT and digital services
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/industries">
                    <Card className="hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className={`p-3 rounded-lg w-fit mb-4 ${typeColors.industry}`}>
                          <Building2 className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Industries</h3>
                        <p className="text-sm text-slate-600">
                          Find solutions tailored to your industry
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/pricing">
                    <Card className="hover:shadow-md hover:border-amber-300 transition-all cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className={`p-3 rounded-lg w-fit mb-4 ${typeColors.pricing}`}>
                          <DollarSign className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Pricing</h3>
                        <p className="text-sm text-slate-600">
                          View transparent pricing for all our services
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/projects">
                    <Card className="hover:shadow-md hover:border-purple-300 transition-all cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className={`p-3 rounded-lg w-fit mb-4 ${typeColors.project}`}>
                          <FolderKanban className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Projects</h3>
                        <p className="text-sm text-slate-600">
                          See our portfolio of successful projects
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/case-studies">
                    <Card className="hover:shadow-md hover:border-rose-300 transition-all cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className={`p-3 rounded-lg w-fit mb-4 ${typeColors["case-study"]}`}>
                          <Award className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Case Studies</h3>
                        <p className="text-sm text-slate-600">
                          Read about our client success stories
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/contact">
                    <Card className="hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className={`p-3 rounded-lg w-fit mb-4 bg-indigo-100 text-indigo-700`}>
                          <FileText className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Contact Us</h3>
                        <p className="text-sm text-slate-600">
                          Get in touch for custom solutions
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
