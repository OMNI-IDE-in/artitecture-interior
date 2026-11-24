"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, STUDIO } from "@/data/site";
import { assetUrl } from "@/lib/asset";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const isDarkHero = pathname !== "/";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/portfolio") {
      return pathname === "/portfolio" || pathname.startsWith("/projects/");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docHeight > 0 ? (y / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (!mobileOpen) return;
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleBtnRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && mobileNavRef.current) {
        const items = mobileNavRef.current.querySelectorAll<HTMLElement>("a[href], button");
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const onResize = () => {
      if (mobileOpen && window.innerWidth > 1024) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`header${scrolled ? " header--scrolled" : ""}${
          isDarkHero && !scrolled ? " header--dark-hero" : ""
        }`}
        id="header"
      >
        <div
          className="global-progress-bar"
          id="globalProgressBar"
          aria-hidden="true"
          style={{ width: `${scrollPct}%` }}
        />
        <nav className="nav container" aria-label="Primary">
          <Link href="/" className="nav__logo" id="nav-logo">
            <img
              src={assetUrl("/assets/images/logo.webp?v=2")}
              alt={STUDIO.name}
              className="nav__logo-img"
              width={48}
              height={48}
            />
            <div className="nav__logo-text">
              <span className="nav__brand">{STUDIO.shortName}</span>
              <span className="nav__sub">{STUDIO.subName}</span>
            </div>
          </Link>

          <ul className="nav__list" id="navList">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li className="nav__item" key={item.id}>
                  <Link
                    href={item.href}
                    className={`nav__link${active ? " nav__link--active" : ""}`}
                    aria-current={active ? "page" : undefined}
                    id={`nav-${item.id}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="nav__actions">
            <Link href="/contact" className="btn btn--primary btn--sm" id="nav-cta">
              <span>Book Consultation</span>
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <button
              ref={toggleBtnRef}
              type="button"
              className={`nav__toggle${mobileOpen ? " active" : ""}`}
              id="navToggle"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              aria-controls="mobileNav"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className="nav__toggle-bar" />
              <span className="nav__toggle-bar" />
              <span className="nav__toggle-bar" />
            </button>
          </div>
        </nav>
      </header>

      <div
        ref={mobileNavRef}
        className={`mobile-nav${mobileOpen ? " mobile-nav--open" : ""}`}
        id="mobileNav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="mobile-nav__bar">
          <Link href="/" className="mobile-nav__brand" onClick={() => setMobileOpen(false)}>
            <img src={assetUrl("/assets/images/logo.webp?v=2")} alt="" width={40} height={40} style={{ borderRadius: "50%" }} />
            <span>
              <b>BABELL</b>
              <i>Group</i>
            </span>
          </Link>
          <button
            ref={closeBtnRef}
            type="button"
            className="mobile-nav__close"
            id="navClose"
            aria-label="Close menu"
            onClick={() => {
              setMobileOpen(false);
              toggleBtnRef.current?.focus();
            }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="mobile-nav__content">
          <ul className="mobile-nav__list">
            {NAV_ITEMS.map((item, idx) => {
              const active = isActive(item.href);
              return (
                <li
                  className="mobile-nav__item"
                  key={item.id}
                  style={{ "--i": idx } as React.CSSProperties}
                >
                  <Link
                    href={item.href}
                    className={`mobile-nav__link${active ? " mobile-nav__link--active" : ""}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="mobile-nav__num">{String(idx + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/contact" className="mobile-nav__cta" onClick={() => setMobileOpen(false)}>
            <span>Book Free Consultation</span>
            <svg
              width={17}
              height={17}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <div className="mobile-nav__footer">
            <a href={STUDIO.phonePrimaryHref} className="mobile-nav__phone">
              {STUDIO.phonePrimary}
            </a>
            <a href={`mailto:${STUDIO.email}`} className="mobile-nav__email">
              {STUDIO.email}
            </a>
            <div className="mobile-nav__social">
              <a href={STUDIO.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href={STUDIO.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
