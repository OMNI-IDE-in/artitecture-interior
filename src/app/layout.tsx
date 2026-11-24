import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/layout/Preloader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { STUDIO } from "@/data/site";
import { assetUrl, BASE_PATH } from "@/lib/asset";

const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || STUDIO.url;
const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;
const OG_IMAGE_URL = `${SITE_ORIGIN}${assetUrl("/assets/images/og-share.jpg?v=3")}`;

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `${STUDIO.name} — Design. Build. Deliver. Architecture & Bespoke Interior Atelier`,
    template: `%s — ${STUDIO.name}`,
  },
  description:
    "Babell Group — complete architectural interior design and white-glove turnkey execution for luxury residences and commercial flagships across Bengaluru, Mumbai, and India.",
  authors: [{ name: STUDIO.name }],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: STUDIO.name,
    url: `${SITE_URL}/`,
    title: `${STUDIO.name} — Design. Build. Deliver. Architecture & Bespoke Interior Atelier`,
    description:
      "Babell Group — complete architectural interior design and white-glove turnkey execution for luxury residences and commercial flagships across Bengaluru, Mumbai, and India.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE_URL,
        secureUrl: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: `${STUDIO.name} — ${STUDIO.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${STUDIO.name} — Design. Build. Deliver. Architecture & Bespoke Interior Atelier`,
    description:
      "Babell Group — architectural interior design and turnkey execution across Bengaluru, Mumbai, and India.",
    images: [OG_IMAGE_URL],
  },
  icons: {
    icon: [
      { url: assetUrl("/favicon.ico"), sizes: "any" },
      { url: assetUrl("/assets/images/logo.svg"), type: "image/svg+xml" },
      { url: assetUrl("/assets/images/logo.png?v=2"), sizes: "512x512", type: "image/png" },
    ],
    shortcut: assetUrl("/favicon.ico"),
    apple: assetUrl("/assets/images/logo.png?v=2"),
  },
};

export const viewport: Viewport = {
  themeColor: "#1D3733",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: STUDIO.name,
  description:
    "Babell Group — architectural interior design and turnkey execution for residences and commercial flagships across Bengaluru, Mumbai, and India. Design. Build. Deliver.",
  url: STUDIO.url,
  telephone: STUDIO.phonePrimary,
  image: `${STUDIO.url}/assets/images/logo.png`,
  priceRange: "₹₹₹",
  openingHours: "Mo-Su 10:00-19:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 3, Maison Babell, 48 Lavelle Road, Shanthala Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  areaServed: STUDIO.areasServed.map((city) => ({ "@type": "City", name: city })),
  sameAs: [STUDIO.instagram, STUDIO.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(sessionStorage.getItem('babellIntroSeen')==='1'){document.documentElement.className+=' intro-seen';}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Preloader />
        <CustomCursor />
        <Header />
        <RevealObserver />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
