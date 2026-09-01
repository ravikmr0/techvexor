import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";
import { SEO } from "@/components/seo/canonical-url";
import { Download } from "lucide-react";

// ⚠️ CHANGE THIS TO YOUR ACTUAL FILE PATH/NAME
// After uploading your PDF to public/files/, update this variable
const PDF_FILE = "/files/noida-plot-owners-data.xlsx";

export default function NoidaSectorPlotOwnersData() {
  usePageTitle("Download Noida Sector Plot Owners Data");

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = PDF_FILE;
    link.download = "noida-plot-owners-data"; // Downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Download Noida Sector Plot Owners Data"
        description="Download Noida sector plot owners data including names, phone numbers, and addresses."
        noindex={false}
      />
      <Header />
      <main className="relative min-h-screen overflow-hidden">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,181,216,0.25),transparent_45%)] bg-[#0F172A]" />

        {/* Main Content Section */}
        <section className="py-24 sm:py-32 lg:py-40">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your PDF Is Ready
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-slate-300 mb-12 leading-relaxed">
                Click the button below to download your PDF with Noida sector plot owners data including names, phone numbers, and complete addresses.
              </p>

              {/* Download Button */}
              <div className="flex justify-center">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                >
                  <Download className="w-6 h-6" />
                  Download Now
                </Button>
              </div>

              {/* Additional Info */}
              <div className="mt-16 pt-12 border-t border-slate-700/50">
                <p className="text-sm text-slate-400">
                  📄 PDF file • No registration required • Instant download
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
