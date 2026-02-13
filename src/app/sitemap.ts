import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://roasted-beans-th.vercel.app";
  const locales = ["en", "th"];

  // Main pages for both locales
  const pages = [""];

  const sitemapEntries = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1.0 : 0.8,
    }))
  );

  return sitemapEntries;
}
