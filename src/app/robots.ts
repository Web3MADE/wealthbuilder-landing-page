import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.VERCEL_ENV === "preview";

  return {
    rules: { userAgent: "*", allow: isPreview ? undefined : "/", disallow: isPreview ? "/" : "/api/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
