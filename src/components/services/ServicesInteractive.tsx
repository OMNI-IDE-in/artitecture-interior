"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SERVICES } from "@/data/catalog";

type FilterCat = "all" | "residential" | "commercial" | "design";

export function ServicesInteractive() {
  const [filter, setFilter] = useState<FilterCat>("all");
  const [activeId, setActiveId] = useState<string>(SERVICES[0]?.id || "");
  const [progPct, setProgPct] = useState(0);
  const svcListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svcList = svcListRef.current;
    if (!svcList) return;

    const svcBlocks = Array.from(svcList.querySelectorAll<HTMLElement>(".service-detail"));

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    svcBlocks.forEach((block) => spy.observe(block));

    const updateProgress = () => {
      const rect = svcList.getBoundingClientRect();
      const total = svcList.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const pct = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;
      setProgPct(pct * 100);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      spy.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent, targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${targetId}`);
  };

  const anyVisible = SERVICES.some((s) => filter === "all" || s.category === filter);

  return (
    <section className="section svc-section">
      <div className="container">
        <div className="svc-layout">
          <aside className="svc-sidebar">
            <div className="svc-sidebar__inner">
              <div aria-hidden="true" className="svc-progress">
                <i id="svcProgBar" style={{ height: `${progPct}%` }} />
              </div>
              <nav aria-label="Jump to a service" className="svc-index" id="svcIndex">
                {SERVICES.map((svc) => {
                  const isMatch = filter === "all" || svc.category === filter;
                  const isOn = activeId === svc.id;
                  return (
                    <a
                      key={svc.id}
                      href={`#${svc.id}`}
                      data-cat={svc.category}
                      data-target={svc.id}
                      className={`svc-index__link${isOn ? " on" : ""}${
                        !isMatch ? " svc-index__link--muted" : ""
                      }`}
                      onClick={(e) => handleLinkClick(e, svc.id)}
                    >
                      <span className="svc-index__num">{svc.num}</span>
                      {svc.title}
                    </a>
                  );
                })}
              </nav>
              <div aria-label="Filter services by category" className="svc-filters" role="group">
                {(
                  [
                    { key: "all", label: "All Services" },
                    { key: "residential", label: "Residential" },
                    { key: "commercial", label: "Commercial" },
                    { key: "design", label: "Design & Visualization" },
                  ] as const
                ).map((btn) => (
                  <button
                    key={btn.key}
                    type="button"
                    className={`svc-filter-btn${filter === btn.key ? " on" : ""}`}
                    data-filter={btn.key}
                    onClick={() => setFilter(btn.key)}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="svc-list" id="svcList" ref={svcListRef}>
            {SERVICES.map((svc) => {
              const isMatch = filter === "all" || svc.category === filter;
              return (
                <article
                  key={svc.id}
                  id={svc.id}
                  data-cat={svc.category}
                  className={`service-detail reveal${!isMatch ? " service-detail--muted" : ""}`}
                >
                  <div className="service-detail__top">
                    <div className="service-detail__image">
                      <img
                        src={svc.image}
                        srcSet={svc.srcset || undefined}
                        sizes="(max-width: 900px) 100vw, 40vw"
                        alt={svc.imageAlt}
                        width={640}
                        height={640}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="service-detail__intro">
                      <span className="service-detail__number">{svc.num}</span>
                      <h2 className="service-detail__title">{svc.title}</h2>
                      <p className="service-detail__desc">{svc.desc}</p>
                      <p className="service-detail__detail">{svc.detail}</p>
                    </div>
                  </div>
                  <div className="service-detail__body">
                    <h3 className="service-detail__ftitle">Key features</h3>
                    <div className="service-detail__features">
                      {svc.features.map((feat, idx) => (
                        <div
                          key={feat}
                          className="service-detail__feature"
                          style={{ "--stagger": `${idx * 0.06}s` } as React.CSSProperties}
                        >
                          <svg
                            aria-hidden="true"
                            fill="none"
                            height={18}
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            width={18}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <div className="service-detail__actions">
                      <Link className="btn btn--primary" href={`/contact?service=${svc.id}`}>
                        <span>Get a Quote</span>
                        <svg
                          aria-hidden="true"
                          fill="none"
                          height={16}
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          width={16}
                        >
                          <line x1={5} x2={19} y1={12} y2={12} />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                      <a
                        className="btn btn--outline"
                        href={svc.whatsappHref}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>Ask on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
            <p className="pf-empty" id="svcEmpty" hidden={anyVisible}>
              No services match this category.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
