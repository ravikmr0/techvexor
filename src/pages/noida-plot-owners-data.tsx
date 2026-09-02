import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePageTitle } from "@/hooks/use-page-title";
import { SEO } from "@/components/seo/canonical-url";
import { Download, ArrowRight, X } from "lucide-react";
import { useState } from "react";

// ⚠️ CHANGE THIS TO YOUR ACTUAL FILE PATH/NAME
// After uploading your PDF/Excel to public/files/, update this variable
const DATA_FILE = "/files/noida-plot-owners-data.xlsx";

export default function NoidaPlotOwnersData() {
  usePageTitle("Noida Plot Owners Data & Property Records");
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = DATA_FILE;
    link.download = "noida-plot-owners-data.xlsx";
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Validate form
      if (!formData.fullName.trim()) {
        setSubmitMessage("Please enter your full name");
        setIsSubmitting(false);
        return;
      }
      if (!formData.phoneNumber.trim()) {
        setSubmitMessage("Please enter your phone number");
        setIsSubmitting(false);
        return;
      }
      if (!formData.email.trim()) {
        setSubmitMessage("Please enter your email");
        setIsSubmitting(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setSubmitMessage("Please enter a valid email address");
        setIsSubmitting(false);
        return;
      }

      // Phone validation (basic)
      const phoneRegex = /^[0-9\-\+\(\)\ ]{7,}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        setSubmitMessage("Please enter a valid phone number");
        setIsSubmitting(false);
        return;
      }

      // Here you would typically send data to your backend
      // Example:
      // const response = await fetch("/api/leads", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData)
      // });

      setSubmitMessage("✓ Thank you! Your enquiry has been received. We'll contact you soon.");
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ fullName: "", phoneNumber: "", email: "" });
        setIsModalOpen(false);
        setSubmitMessage("");
      }, 2000);
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Noida Property Owner Details & Plot Owner Leads | Real Estate Leads"
        description="Find legitimate ways to generate Noida property owner and plot seller leads. Explore property search, real estate lead generation, and verified enquiry strategies for Noida & Greater Noida."
        noindex={false}
      />
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-[#0F172A]">
        {/* Subtle background gradient */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,181,216,0.15),transparent_50%)]" />

        {/* Hero Section - Compact */}
        <section className="relative py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Noida Property Owner Details & Plot Owner Leads
              </h1>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Find legitimate ways to generate Noida property owner and plot seller leads through proven real estate lead generation and verified enquiry strategies.
              </p>
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 border border-blue-500/30"
              >
                <Download className="w-5 h-5" />
                Download Now
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content - Compact Spacing */}
        <section className="relative py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-10">

              {/* Section 1: Property Owner Details */}
              <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/30 backdrop-blur">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Noida Property Owner Details
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Property-related information in Noida may include property location and sector, plot or property number, property type, ownership or registration information where publicly accessible, property status, and applicable authority or registry information.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  For verified ownership matters, users should rely on <span className="text-indigo-300 font-semibold">official government records, registration authorities, or authorized property-service platforms</span> rather than unverified databases.
                </p>
              </div>

              {/* Section 2: Property Search by Name */}
              <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/30 backdrop-blur">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Noida Property Search by Name
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  A <span className="text-indigo-300 font-semibold">Noida property search by name</span> may be useful when trying to verify a property transaction or identify records connected with a particular property owner. Availability depends on the relevant authority, record type, and applicable privacy rules.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  For real estate businesses, build databases using <span className="text-indigo-300 font-semibold">opt-in enquiries, property portals, public business listings, referrals, and advertising campaigns</span> instead of purchasing scraped personal contact databases.
                </p>
              </div>

              {/* Section 3: Plot Owner Leads - Compact Cards */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Noida Plot Owner Leads
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Real estate agencies and property consultants can generate legitimate <span className="text-indigo-300 font-semibold">Noida plot owner leads</span> through proven channels:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Method 1 */}
                  <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/40 hover:border-slate-600/50 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/50 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-indigo-300">1</span>
                      </div>
                      <h3 className="text-base font-bold text-white">Meta Lead Ads</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Target property owners and investors in selected Noida sectors and surrounding areas.
                    </p>
                  </div>

                  {/* Method 2 */}
                  <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/40 hover:border-slate-600/50 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/50 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-indigo-300">2</span>
                      </div>
                      <h3 className="text-base font-bold text-white">Google Search Ads</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                      Target high-intent searches:
                    </p>
                    <ul className="space-y-1 text-slate-400 text-xs">
                      <li>• Sell plot in Noida</li>
                      <li>• Property buyer in Noida</li>
                      <li>• Plot valuation Noida</li>
                    </ul>
                  </div>

                  {/* Method 3 */}
                  <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/40 hover:border-slate-600/50 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/50 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-indigo-300">3</span>
                      </div>
                      <h3 className="text-base font-bold text-white">Landing Pages</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                      Create dedicated conversion pages:
                    </p>
                    <ul className="space-y-1 text-slate-400 text-xs">
                      <li>• Noida Plot Selling Service</li>
                      <li>• Property Valuation</li>
                      <li>• Sell Property in Noida</li>
                    </ul>
                  </div>

                  {/* Method 4 */}
                  <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/40 hover:border-slate-600/50 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/50 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-indigo-300">4</span>
                      </div>
                      <h3 className="text-base font-bold text-white">Referral & Networking</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Build relationships with property consultants, builders, brokers, and local businesses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: Lead Generation Form - Premium CTA */}
              <div className="border-2 border-indigo-500/40 rounded-lg p-8 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 backdrop-blur">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Are you planning to sell your plot in Noida?
                  </h2>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    Get a professional property evaluation and connect with verified real estate specialists. Quick enquiry, no obligation.
                  </p>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 text-sm rounded-lg transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Generate Lead <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Section 5: Greater Noida */}
              <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/30 backdrop-blur">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Greater Noida Plot Owner Leads
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  For <span className="text-indigo-300 font-semibold">Greater Noida plot owner leads</span>, campaigns can be segmented by locality, property type, plot size, investment intent, and selling timeline.
                </p>
                <p className="text-slate-300 text-sm font-semibold mb-4">Suggested lead form fields:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {["Name", "Phone number", "Property location", "Plot size", "Property type", "Expected price", "Selling timeline", "Preferred contact"].map((field, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-indigo-400">•</span> {field}
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 6: Contact Numbers & Legal */}
              <div className="border border-amber-700/30 rounded-lg p-8 bg-amber-950/20 backdrop-blur">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Noida Property Owner Contact Numbers
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Searches for <span className="text-indigo-300 font-semibold">Noida plot owner contact numbers</span> or <span className="text-indigo-300 font-semibold">real estate leads databases</span> often lead to unverified or scraped datasets. Businesses should avoid using personal contact information obtained without lawful basis or consent.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Instead, generate <span className="text-indigo-300 font-semibold">fresh, permission-based leads</span> through advertising, enquiry forms, and property-owner campaigns. This produces more relevant prospects and reduces spam and inaccurate data risk.
                </p>
              </div>

              {/* Section 7: Real Estate Leads Strategy */}
              <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/30 backdrop-blur">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Noida Real Estate Leads
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  A properly structured lead-generation system combines <span className="text-indigo-300 font-semibold">Google Ads + Meta Ads + SEO + Landing Pages + CRM + WhatsApp/Call Follow-up</span> to capture people actively interested in buying, selling, or investing in Noida and Greater Noida properties.
                </p>
                <div className="bg-slate-800/40 rounded p-4 mt-4">
                  <p className="text-slate-300 text-xs font-semibold mb-2">Integrated Lead Generation Approach:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Google Ads", "Meta Ads", "SEO", "Landing Pages", "CRM", "Follow-up"].map((item) => (
                      <span key={item} className="px-3 py-1 rounded text-xs bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 8: Keywords & SEO */}
              <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/30 backdrop-blur">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Target Keywords for Property Search
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wide mb-3">Primary Keywords</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["Noida property owner details", "Noida property search by name", "Noida plot owners leads", "Greater Noida plot owners leads", "Noida property owner data", "Noida property leads", "Noida real estate leads"].map((keyword) => (
                      <div key={keyword} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-indigo-400 font-bold">→</span>
                        <span>{keyword}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wide mb-3">Long-Tail Keywords</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["Noida plot owners leads for sale", "Noida plot owner leads contact", "Noida property owner details online", "Noida property search by owner name", "Greater Noida plot owner leads", "Noida real estate leads database", "Noida property seller leads", "Noida plot seller leads", "Noida property investors leads", "Noida property owner enquiries"].map((keyword) => (
                      <div key={keyword} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-indigo-400 font-bold">→</span>
                        <span>{keyword}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-10 sm:py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center border-t border-slate-700/50 pt-10">
              <h2 className="text-3xl font-bold text-white mb-3">
                Ready to Generate Property Leads?
              </h2>
              <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto leading-relaxed">
                Download our comprehensive guide to real estate lead generation strategies for Noida and Greater Noida properties.
              </p>
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 border border-blue-500/30"
              >
                <Download className="w-5 h-5" />
                Download Guide <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Lead Generation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700/50 rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border-b border-slate-700/50 p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">Generate Your Lead</h3>
                  <p className="text-slate-400 text-sm mt-1">Fill in your details to get started</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors p-1"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="Enter your full name"
                      className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleFormChange}
                      placeholder="Enter your phone number"
                      className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email Id <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="Enter your email address"
                      className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Success/Error Message */}
                  {submitMessage && (
                    <div className={`p-3 rounded-lg text-sm ${submitMessage.startsWith("✓") ? "bg-green-500/20 text-green-300 border border-green-500/30" : "bg-red-500/20 text-red-300 border border-red-500/30"}`}>
                      {submitMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 mt-6 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  {/* Form Footer */}
                  <p className="text-xs text-slate-400 text-center pt-2">
                    We respect your privacy. Your information is secure and will not be shared.
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
