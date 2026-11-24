import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioInteractive } from "@/components/portfolio/PortfolioInteractive";
import { buildWhatsAppUrl, DELIVERED_WORK_LIST, DESIGN_DISCIPLINES } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore photographed residential and commercial interior design commissions delivered by Babell Group.",
};

export default function PortfolioPage() {
  const photosWa = buildWhatsAppUrl("Hi! I'd like to see photos of your completed projects.");

  return (
    <main id="main">
      <section className="page-hero page-hero--image">
        <div aria-hidden="true" className="page-hero__media">
          <img
            alt=""
            decoding="async"
            fetchPriority="high"
            height={900}
            sizes="100vw"
            src="/assets/portfolio/zion-hills-villa/livinng-1600.webp"
            srcSet="/assets/portfolio/zion-hills-villa/livinng-400.webp 400w, /assets/portfolio/zion-hills-villa/livinng-800.webp 800w, /assets/portfolio/zion-hills-villa/livinng-1600.webp 1600w"
            width={1600}
          />
        </div>
        <div className="container">
          <span className="page-hero__label">Our Work</span>
          <h1 className="page-hero__title">
            Spaces That <em>Speak</em>
          </h1>
          <p className="page-hero__desc">
            From compact apartments to auditoriums, museums and restaurants — a look at the range of work we design and
            execute.
          </p>
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span>Portfolio</span>
          </div>
        </div>
      </section>

      <PortfolioInteractive />

      <section className="section section--cream">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Also Delivered
            </span>
            <h2 className="section-title">
              More Completed <em>Projects</em>
            </h2>
            <p className="section-subtitle mx-auto">
              Photography for these is still being curated. You&apos;re welcome to{" "}
              <a href={photosWa} rel="noopener noreferrer" target="_blank">
                ask for them on WhatsApp
              </a>
              .
            </p>
          </div>
          <ul className="pf-list">
            {DELIVERED_WORK_LIST.map((item) => (
              <li key={`${item.name}-${item.location}`} className="pf-list__item reveal">
                <span className="pf-list__type">{item.type}</span>
                <span className="pf-list__name">{item.name}</span>
                <span className="pf-list__loc">{item.location}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              What We Design
            </span>
            <h2 className="section-title">
              Four Disciplines, <em>One Studio</em>
            </h2>
            <p className="section-subtitle mx-auto">
              Every category below is designed and executed in-house — from the first layout through to installation.
            </p>
          </div>
          <div className="pf-cats">
            {DESIGN_DISCIPLINES.map((cat) => (
              <article key={cat.id} className="pf-cat reveal" id={cat.id}>
                <div className="pf-cat__media">
                  <img alt={cat.alt} height={480} loading="lazy" src={cat.image} width={640} />
                  <span className="pf-cat__badge">{cat.badge}</span>
                </div>
                <div className="pf-cat__body">
                  <h3 className="pf-cat__title">{cat.title}</h3>
                  <ul className="pf-cat__list">
                    {cat.items.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Like What You See?
            </span>
            <h2 className="section-title">
              Let&apos;s Design <em>Yours Next</em>
            </h2>
            <p className="section-subtitle mx-auto mb-3">
              Book a free consultation and we&apos;ll show you exactly what&apos;s possible in your space and budget.
            </p>
            <Link className="btn btn--accent btn--lg" href="/contact" id="portfolio-page-cta">
              <span>Start Your Project</span>
              <svg
                aria-hidden="true"
                fill="none"
                height={18}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={18}
              >
                <line x1={5} x2={19} y1={12} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
