import type { Metadata } from "next";
import Link from "next/link";
import { ServicesInteractive } from "@/components/services/ServicesInteractive";
import { PROCESS_PHASES } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Residential interior design, commercial interiors, 3D visualization, modular kitchens, custom wardrobes, turnkey execution, and renovation services.",
};

export default function ServicesPage() {
  const allSteps = PROCESS_PHASES.flatMap((p) => p.steps);

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
            src="/assets/portfolio/chennai-1bhk/kitchen-1-1600.webp"
            srcSet="/assets/portfolio/chennai-1bhk/kitchen-1-400.webp 400w, /assets/portfolio/chennai-1bhk/kitchen-1-800.webp 800w, /assets/portfolio/chennai-1bhk/kitchen-1-1600.webp 1600w"
            width={1600}
          />
        </div>
        <div className="container">
          <span className="page-hero__label">Our Services</span>
          <h1 className="page-hero__title">
            Design Solutions <em>For Every Space</em>
          </h1>
          <p className="page-hero__desc">
            From concept to completion, we deliver end-to-end interior design and execution services for homes and
            businesses — all under one roof.
          </p>
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      <ServicesInteractive />

      <section className="section process-section">
        <div className="container">
          <div className="text-center reveal">
            <span
              className="section-label"
              style={{ justifyContent: "center", color: "var(--clr-terracotta-light)" }}
            >
              How It Works
            </span>
            <h2 className="section-title" style={{ color: "var(--clr-cream)" }}>
              Our 8-Step <em>Process</em>
            </h2>
            <p className="section-subtitle mx-auto" style={{ color: "rgba(245,240,232,.72)" }}>
              A 100% client-centric process. Most residential projects are completed within 6–12 weeks after design
              approval and material finalisation.
            </p>
          </div>
          <div className="process-grid">
            {allSteps.map((step, idx) => (
              <div
                key={step.num}
                className="process-step reveal"
                style={{ transitionDelay: `${(idx * 0.08).toFixed(2)}s` }}
              >
                <div className="process-step__number">{step.num}</div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Have a Project in Mind?
            </span>
            <h2 className="section-title">
              Let&apos;s Talk About <em>Your Space</em>
            </h2>
            <p className="section-subtitle mx-auto mb-3">
              The first consultation is free. We&apos;ll understand your requirements, visit the site if needed, and
              prepare a transparent quotation.
            </p>
            <Link className="btn btn--accent btn--lg" href="/contact">
              <span>Book Free Consultation</span>
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
