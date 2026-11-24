"use client";

import Link from "next/link";
import { useState } from "react";
import { PORTFOLIO_CARDS } from "@/data/site";

type CategoryFilter = "all" | "residential" | "commercial";

export function PortfolioInteractive() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const visibleCards = PORTFOLIO_CARDS.filter(
    (card) => filter === "all" || card.category === filter
  );

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="text-center reveal">
          <span className="section-label" style={{ justifyContent: "center" }}>
            Selected Projects
          </span>
          <h2 className="section-title">
            Recent <em>Work</em>
          </h2>
          <p className="section-subtitle mx-auto">
            Photographed projects, room by room. Open any one to see the full gallery.
          </p>
        </div>

        <div aria-label="Filter projects by type" className="portfolio-filters reveal" role="group">
          {(
            [
              { key: "all", label: "All Projects" },
              { key: "residential", label: "Residential Interiors" },
              { key: "commercial", label: "Commercial & Institutional" },
            ] as const
          ).map((btn) => {
            const active = filter === btn.key;
            return (
              <button
                key={btn.key}
                type="button"
                className={`portfolio-filter-btn${active ? " portfolio-filter-btn--active" : ""}`}
                aria-pressed={active}
                data-filter={btn.key}
                onClick={() => setFilter(btn.key)}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        <div className="pf-projects" id="pfProjects">
          {PORTFOLIO_CARDS.map((card) => {
            const match = filter === "all" || card.category === filter;
            return (
              <article
                key={card.slug}
                className="pf-card reveal"
                data-category={card.category}
                hidden={!match}
              >
                <Link className="pf-card__link" href={`/projects/${card.slug}`}>
                  <div className="pf-card__media">
                    <img
                      alt={card.alt}
                      decoding="async"
                      height={600}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src={card.src}
                      srcSet={card.srcset}
                      width={800}
                    />
                    <span className="pf-card__count">{card.photoCount}</span>
                  </div>
                  <div className="pf-card__body">
                    <span className="pf-card__type">{card.typeLabel}</span>
                    <h3 className="pf-card__name">{card.title}</h3>
                    <span className="pf-card__cta">
                      View project{" "}
                      <svg
                        aria-hidden="true"
                        fill="none"
                        height={15}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                        width={15}
                      >
                        <line x1={5} x2={19} y1={12} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <p className="pf-empty" hidden={visibleCards.length !== 0} id="pfEmpty">
          No photographed projects in this category yet — see the full list of delivered work below.
        </p>
      </div>
    </section>
  );
}
