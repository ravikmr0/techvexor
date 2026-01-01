import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  FileText,
  Briefcase,
  Building2,
  FolderKanban,
  DollarSign,
  Award,
  ArrowRight,
  Command,
} from "lucide-react";
import {
  searchAll,
  searchGrouped,
  SearchResult,
  SearchResultType,
} from "@/data/search-data";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const typeIcons: Record<SearchResultType, React.ElementType> = {
  service: Briefcase,
  industry: Building2,
  project: FolderKanban,
  pricing: DollarSign,
  "case-study": Award,
  page: FileText,
};

const typeLabels: Record<SearchResultType, string> = {
  service: "Service",
  industry: "Industry",
  project: "Project",
  pricing: "Pricing",
  "case-study": "Case Study",
  page: "Page",
};

const typeColors: Record<SearchResultType, string> = {
  service: "bg-blue-100 text-blue-700",
  industry: "bg-emerald-100 text-emerald-700",
  project: "bg-purple-100 text-purple-700",
  pricing: "bg-amber-100 text-amber-700",
  "case-study": "bg-rose-100 text-rose-700",
  page: "bg-slate-100 text-slate-700",
};

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [open]);

  // Search with debounce
  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      const searchResults = searchAll(query, 15);
      setResults(searchResults);
      setSelectedIndex(0);
      setIsLoading(false);
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        handleSelect(results[selectedIndex]);
      } else if (e.key === "Escape") {
        onOpenChange(false);
      }
    },
    [results, selectedIndex, onOpenChange]
  );

  // Handle result selection
  const handleSelect = (result: SearchResult) => {
    onOpenChange(false);
    navigate(result.url);
  };

  // Highlight matching text
  const highlightMatch = (text: string, query: string) => {
    if (!query || query.length < 2) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-200 text-yellow-900 rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-4 py-3 border-b">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search services, projects, pricing, industries..."
              className="pl-10 pr-4 h-11 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
            />
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[400px]">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600" />
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => {
                const Icon = typeIcons[result.type];
                return (
                  <button
                    key={result.id}
                    onClick={() => handleSelect(result)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full px-4 py-3 flex items-start gap-3 text-left transition-colors ${
                      index === selectedIndex
                        ? "bg-slate-100"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`mt-0.5 p-1.5 rounded-md ${typeColors[result.type]}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-medium text-slate-900 truncate">
                          {highlightMatch(result.title, query)}
                        </span>
                        <Badge
                          variant="secondary"
                          className={`text-xs shrink-0 ${typeColors[result.type]}`}
                        >
                          {typeLabels[result.type]}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500 line-clamp-1">
                        {highlightMatch(result.description, query)}
                      </p>
                      {result.price && (
                        <p className="text-sm font-medium text-emerald-600 mt-1">
                          {result.price}
                        </p>
                      )}
                      {result.category && (
                        <p className="text-xs text-slate-400 mt-1">
                          {result.category}
                        </p>
                      )}
                    </div>
                    <ArrowRight
                      className={`h-4 w-4 mt-1 shrink-0 transition-opacity ${
                        index === selectedIndex
                          ? "opacity-100 text-slate-400"
                          : "opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          ) : query.length >= 2 ? (
            <div className="py-12 text-center">
              <Search className="h-10 w-10 mx-auto text-slate-300 mb-3" />
              <p className="text-slate-500">No results found for "{query}"</p>
              <p className="text-sm text-slate-400 mt-1">
                Try searching for services, industries, or pricing
              </p>
            </div>
          ) : (
            <div className="py-8 px-4">
              <p className="text-sm text-slate-500 mb-4 text-center">
                Quick searches
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Website Development",
                  "Mobile App",
                  "AI & ML",
                  "SEO",
                  "Cloud",
                  "E-commerce",
                  "Healthcare",
                  "Finance",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 text-sm bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </ScrollArea>

        <div className="px-4 py-2.5 border-t bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border rounded text-[10px] font-medium">
                ↑
              </kbd>
              <kbd className="px-1.5 py-0.5 bg-white border rounded text-[10px] font-medium">
                ↓
              </kbd>
              <span className="ml-1">Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border rounded text-[10px] font-medium">
                ↵
              </kbd>
              <span className="ml-1">Select</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border rounded text-[10px] font-medium">
                Esc
              </kbd>
              <span className="ml-1">Close</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Command className="h-3 w-3" />
            <span>K to open</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Hook to handle global keyboard shortcut
export function useSearchDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { open, setOpen };
}
