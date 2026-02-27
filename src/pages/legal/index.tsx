import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { usePageTitle } from "@/hooks/use-page-title";
import { SEO } from "@/components/seo/canonical-url";
import { Link } from "react-router-dom";

const legalLinks = [
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms & Conditions", href: "/legal/terms" },
  { name: "Data Security", href: "/legal/data-security" },
  { name: "AI Ethics", href: "/legal/ai-ethics" },
  { name: "Cancellation & Refunds", href: "/legal/cancellation-refunds" },
  { name: "Shipping & Returns", href: "/legal/shipping" },
];

export default function LegalIndex() {
  usePageTitle("Legal - Tech Vexor");

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Legal"
        description="Access Tech Vexor's legal policies including privacy, terms, data security, AI ethics, cancellations, and shipping."
      />
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal</h1>
            <p className="text-slate-600 mb-10">
              Review our policies and terms. If you have questions, please contact us.
            </p>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-lg text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
