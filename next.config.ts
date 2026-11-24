import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.php",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/services.php",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/portfolio.php",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/contact.php",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/blog/blog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/blog/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/project.php",
        has: [
          {
            type: "query",
            key: "p",
            value: "(?<slug>.*)",
          },
        ],
        destination: "/projects/:slug",
        permanent: false,
      },
      {
        source: "/project.php",
        destination: "/portfolio",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
