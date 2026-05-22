import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended", "Anthropic-AI"],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://nokta35.com/sitemap.xml",
    host: "https://nokta35.com",
  }
}
