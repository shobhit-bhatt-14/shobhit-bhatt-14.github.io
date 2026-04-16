import type { MetadataRoute } from "next";
import { siteUrl } from "@/utils/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
