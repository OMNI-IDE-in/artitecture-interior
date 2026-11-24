import path from "node:path";
import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = isGitHubPages ? "/artitecture-interior" : "";
const siteOrigin = isGitHubPages ? "https://omni-ide-in.github.io" : "https://babellgroup.com";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: repoBasePath,
        trailingSlash: true,
      }
    : {
        async redirects() {
          return [
            { source: "/index.php", destination: "/", permanent: true },
            { source: "/about.php", destination: "/about", permanent: true },
            { source: "/services.php", destination: "/services", permanent: true },
            { source: "/portfolio.php", destination: "/portfolio", permanent: true },
            { source: "/contact.php", destination: "/contact", permanent: true },
            { source: "/blog/blog", destination: "/blog", permanent: true },
            { source: "/blog/blog/", destination: "/blog", permanent: true },
            {
              source: "/project.php",
              has: [{ type: "query", key: "p", value: "(?<slug>.*)" }],
              destination: "/projects/:slug",
              permanent: false,
            },
            { source: "/project.php", destination: "/portfolio", permanent: false },
          ];
        },
      }),
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
    NEXT_PUBLIC_SITE_ORIGIN: siteOrigin,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
