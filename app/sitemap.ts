import type { MetadataRoute } from "next";
import { fakeData } from "@/utils/fake-db";
import { SITE_URL } from "@/utils/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/produit`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/informations-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const products: MetadataRoute.Sitemap = Object.entries(fakeData).flatMap(
    ([format, data]) => [
      {
        url: `${SITE_URL}/produit/${format}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      ...Object.keys(data.nuances).map((nuance) => ({
        url: `${SITE_URL}/produit/${format}/${encodeURIComponent(nuance)}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ]
  );

  return [...pages, ...products];
}
