import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";
import { SEO } from "@/components/seo/canonical-url";
import { sendContactEmail } from "@/lib/email";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sparkles,
  Building2,
  ArrowRight,
  Star,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

interface DemoFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  company?: string;
  message?: string;
}

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function BookDemo() {
  usePageTitle("Book Your Demo");

  const [formData, setFormData] = useState<DemoFormData>({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "validation">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (submitStatus === 'validation' || submitStatus === 'error') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.preferredDate || !formData.preferredTime) {
      setSubmitStatus("validation");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const emailData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: `Demo Booking Request

Full Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Additional Notes: ${formData.message || "None"}`,
      };

      const emailSent = await sendContactEmail(emailData);

      if (emailSent) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          preferredDate: "",
          preferredTime: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <SEO
        title="Book Your Demo | Tech Vexor"
        description="Schedule a personalized demo with Tech Vexor. Discover how our AI solutions, digital marketing, and custom software can transform your business."
      />
      <Header />
      <main className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.25),transparent_45%),radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)] bg-[#0F172A]" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">
                  Schedule Your Free Demo
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Book Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                  Demo
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Experience how Tech Vexor can revolutionize your business with AI-powered solutions.
                Schedule a personalized demo today!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
              {/* Left - Benefits */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-8 border border-white/10 shadow-2xl">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Why Book a Demo with Us?
                  </h2>
                  <div className="space-y-5">
                    {[
                      {
                        icon: Zap,
                        title: "Personalized Solutions",
                        desc: "Tailored demo based on your specific business needs and goals",
                      },
                      {
                        icon: Shield,
                        title: "Expert Consultation",
                        desc: "Get insights from our experienced team of tech professionals",
                      },
                      {
                        icon: Star,
                        title: "No Commitment",
                        desc: "Explore our solutions with zero obligations - your success is our priority",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                          <item.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-6 border border-white/10">
                  <p className="text-sm text-slate-400 mb-4">Trusted by leading companies</p>
                  <div className="flex items-center gap-6 opacity-60 grayscale">
                    <img
                      className="h-6"
                      src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                      alt="AWS"
                    />
                    <img
                      className="h-6"
                      src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg"
                      alt="Google Cloud"
                    />
                    <img
                      className="h-6"
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
                      alt="Azure"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 backdrop-blur-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-white mb-4">Need Immediate Assistance?</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+917895849990"
                      className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>+91 81433 79818</span>
                    </a>
                    <a
                      href="mailto:hello@techvexor.com"
                      className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>hello@techvexor.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="rounded-2xl p-[1px] bg-gradient-to-br from-cyan-500/60 via-blue-500/60 to-violet-500/60 shadow-2xl shadow-cyan-500/10">
                  <Card className="p-8 bg-slate-900/95 backdrop-blur-xl rounded-2xl border-0">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-xl font-semibold text-white">Schedule Your Demo</h2>
                    </div>

                    {submitStatus === "success" && (
                      <motion.div
                        className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-start space-x-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                        <div>
                          <p className="text-emerald-300 font-medium">Demo Request Submitted!</p>
                          <p className="text-emerald-400/80 text-sm">
                            Our team will contact you within 24 hours to confirm your slot.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === "validation" && (
                      <motion.div
                        className="mb-6 p-4 bg-amber-500/20 border border-amber-500/30 rounded-xl flex items-start space-x-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div>
                          <p className="text-amber-300 font-medium">Please fill all required fields</p>
                          <p className="text-amber-400/80 text-sm">
                            Name, phone, email, date, and time are required.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-start space-x-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                        <div>
                          <p className="text-red-300 font-medium">Submission Failed</p>
                          <p className="text-red-400/80 text-sm">
                            Please try again or contact us directly at hello@techvexor.com
                          </p>
                        </div>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Full Name */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                          <User className="w-4 h-4 text-cyan-400" />
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <Input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                          <Phone className="w-4 h-4 text-cyan-400" />
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                          <Mail className="w-4 h-4 text-cyan-400" />
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                          required
                        />
                      </div>

                      {/* Company (Optional) */}
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                          <Building2 className="w-4 h-4 text-cyan-400" />
                          Company Name <span className="text-slate-500">(Optional)</span>
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                        />
                      </div>

                      {/* Date & Time Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Preferred Date */}
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                            <Calendar className="w-4 h-4 text-cyan-400" />
                            Preferred Date <span className="text-red-400">*</span>
                          </label>
                          <Input
                            name="preferredDate"
                            type="date"
                            min={today}
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            className="bg-slate-800/50 border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500/20 [color-scheme:dark]"
                            required
                          />
                        </div>

                        {/* Preferred Time */}
                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                            <Clock className="w-4 h-4 text-cyan-400" />
                            Preferred Time <span className="text-red-400">*</span>
                          </label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="w-full h-10 px-3 rounded-md bg-slate-800/50 border border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none"
                            required
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="text-sm font-medium text-slate-300 mb-2 block">
                          Additional Notes <span className="text-slate-500">(Optional)</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project or any specific requirements..."
                          rows={3}
                          className="w-full px-3 py-2 rounded-md bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 hover:from-cyan-600 hover:via-blue-600 hover:to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Book Your Demo
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-slate-500 text-center">
                        By submitting, you agree to our{" "}
                        <a href="/terms" className="text-cyan-400 hover:underline">
                          Terms
                        </a>{" "}
                        and{" "}
                        <a href="/privacy-policy" className="text-cyan-400 hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
