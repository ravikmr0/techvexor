import type { MetadataRoute } from "next";

const siteUrl = "https://www.techvexor.com";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/services",
  "/industries",
  "/products",
  "/projects",
  "/blog",
  "/pricing",
  "/careers",
];

const serviceRoutes = [
  "/services/website-development",
  "/services/mobile-app-development",
  "/services/ui-ux-design",
  "/services/seo",
  "/services/digital-marketing",
  "/services/lead-generation",
  "/services/ai-solutions",
];

const industryRoutes = [
  "/industries/finance",
  "/industries/healthcare",
  "/industries/retail",
  "/industries/manufacturing",
  "/industries/education",
  "/industries/ecommerce",
];

const blogRoutes = [
  "/blog/ai-transformation-2025",
  "/blog/cloud-migration-guide",
  "/blog/cybersecurity-best-practices",
];

const productRoutes = [
  "/products/solar-panels-mono-perc",
  "/products/solar-panels-polycrystalline",
  "/products/on-grid-solar-inverter",
];

const projectRoutes = [
  "/projects/ai-powered-ecommerce-platform",
  "/projects/smart-healthcare-platform",
  "/projects/financial-analytics-dashboard",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...blogRoutes,
    ...productRoutes,
    ...projectRoutes,
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route.includes("/blog") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/services/") ? 0.9 : route.includes("/industries/") ? 0.85 : route.includes("/blog/") ? 0.8 : route.includes("/products/") ? 0.8 : route.includes("/projects/") ? 0.8 : 0.7,
  }));

  return routes;
}
