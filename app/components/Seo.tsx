import type { MetaFunction } from "@remix-run/react";

export type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  twitterHandle?: string;
};

/**
 * Reusable SEO helper – returns a proper Remix meta array
 */
export const Seo = ({
  title = "Alex Herrera | Full-Stack Developer",
  description = "Full-Stack Developer passionate about React, TypeScript, Node.js, and building fast, beautiful web experiences. Available for freelance & full-time roles.",
  image = "https://alexherrera.cl/me.png",
  url = "https://alexherrera.cl",
  twitterHandle = "@alexherrera_cl",
}: SeoProps = {}): ReturnType<MetaFunction> => {
  return [
    { title },
    { name: "description", content: description },

    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:locale", content: "en_US" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    ...(twitterHandle
      ? [{ name: "twitter:creator", content: twitterHandle }]
      : []),

    // Extras
    { name: "theme-color", content: "#000000" },
    { name: "author", content: "Alex Herrera" },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: url },
  ];
};

export const defaultSeo = Seo();
