import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X, FileText, Briefcase, Package, Building2, Globe, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchContent, SearchResult, SearchResultType } from "./search-data";
import { cn } from "@/lib/utils";

const typeIcons: Record<SearchResultType, React.ReactNode> = {
  service: <Briefcase className="w-4 h-4" />,
  project: <FileText className="w-4 h-4" />,
  product: <Package className="w-4 h-4" />,
  industry: <Building2 className="w-4 h-4" />,
  page: <Globe className="w-4 h-4" />,
};

const typeLabels: Record<SearchResultType, string> = {
  service: "Service",
  project: "Project",
  product: "Product",
  industry: "Industry",
  page: "Page",
};

const typeColors: Record<SearchResultType, string> = {
  service: "bg-blue-100 text-blue-700",
  project: "bg-purple-100 text-purple-700",
  product: "bg-green-100 text-green-700",
  industry: "bg-orange-100 text-orange-700",
  page: "bg-slate-100 text-slate-700",
};

interface GlobalSearchProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function GlobalSearch({ variant = "desktop", className }: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Debounced search
  useEffect(() => {
    if (query.length < 1) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      const searchResults = searchContent(query, 8);
      setResults(searchResults);
      setSelectedIndex(-1);
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen || results.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            navigate(results[selectedIndex].url);
            setIsOpen(false);
            setQuery("");
          }
          break;
        case "Escape":
          setIsOpen(false);
          break;
      }
    },
    [isOpen, results, selectedIndex, navigate]
  );

  const handleResultClick = (result: SearchResult) => {
    navigate(result.url);
    setIsOpen(false);
    setQuery("");
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const isDesktop = variant === "desktop";

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search services, projects, products..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => query.length >= 1 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className={cn(
            "transition-all duration-200",
            isDesktop
              ? "pl-10 pr-8 bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500 w-full focus:ring-indigo-500 focus:border-indigo-500"
              : "pl-8 pr-8 py-1 h-8 text-sm bg-slate-800/50 border-slate-700 text-slate-300 placeholder:text-slate-500"
          )}
        />
        <Search
          className={cn(
            "absolute top-1/2 transform -translate-y-1/2 text-slate-500",
            isDesktop ? "w-4 h-4 left-3" : "w-3 h-3 left-2.5"
          )}
        />
        {query && (
          <button
            onClick={clearSearch}
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors",
              isDesktop ? "right-3" : "right-2"
            )}
          >
            <X className={isDesktop ? "w-4 h-4" : "w-3 h-3"} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div
          className={cn(
            "absolute z-50 mt-2 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden",
            isDesktop ? "w-[400px] right-0" : "w-[280px] right-0"
          )}
        >
          <div className="p-2 border-b border-slate-100 bg-slate-50">
            <span className="text-xs font-medium text-slate-500">
              {results.length} result{results.length !== 1 ? "s" : ""} found
            </span>
          </div>
          <ul className="max-h-[400px] overflow-y-auto">
            {results.map((result, index) => (
              <li key={result.id}>
                <button
                  onClick={() => handleResultClick(result)}
                  className={cn(
                    "w-full px-4 py-3 text-left transition-colors flex items-start gap-3 border-b border-slate-50 last:border-0",
                    selectedIndex === index
                      ? "bg-indigo-50"
                      : "hover:bg-slate-50"
                  )}
                >
                  <div
                    className={cn(
                      "p-1.5 rounded-md mt-0.5",
                      typeColors[result.type]
                    )}
                  >
                    {typeIcons[result.type]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900 text-sm truncate">
                        {result.title}
                      </span>
                      {result.price && (
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                          {result.price}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {result.description}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={cn(
                          "text-xs px-1.5 py-0.5 rounded",
                          typeColors[result.type]
                        )}
                      >
                        {typeLabels[result.type]}
                      </span>
                      {result.category && (
                        <span className="text-xs text-slate-400">
                          {result.category}
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                </button>
              </li>
            ))}
          </ul>
          <div className="p-2 border-t border-slate-100 bg-slate-50">
            <Link
              to={`/search?q=${encodeURIComponent(query)}`}
              onClick={() => {
                setIsOpen(false);
                setQuery("");
              }}
              className="text-xs text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1"
            >
              View all results for "{query}"
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}

      {/* No results state */}
      {isOpen && query.length >= 1 && results.length === 0 && (
        <div
          className={cn(
            "absolute z-50 mt-2 bg-white rounded-lg shadow-xl border border-slate-200 p-4",
            isDesktop ? "w-[400px] right-0" : "w-[280px] right-0"
          )}
        >
          <div className="text-center">
            <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-sm text-slate-600">No results found for "{query}"</p>
            <p className="text-xs text-slate-400 mt-1">
              Try searching for services, projects, or products
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
