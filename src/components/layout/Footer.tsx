import Link from "next/link";
import { buildWhatsAppUrl, STUDIO } from "@/data/site";

export function Footer() {
  const defaultWa = buildWhatsAppUrl("Hi! I'd like to schedule a private consultation with Babell Group.");

  return (
    <footer className="footer" id="footer">
      <div className="footer-cta">
        <div className="container">
          <div className="footer-cta__inner">
            <div className="footer-cta__content">
              <h2 className="footer-cta__title">
                Let&apos;s Design Something <em>Exceptional</em>
              </h2>
              <p className="footer-cta__text">
                Book a private consultation with Babell Group and receive a transparent quotation for your space
              </p>
            </div>
            <Link href="/contact" className="btn btn--accent btn--lg" id="footer-cta-btn">
              <span>Start Your Project</span>
              <svg
                width={20}
                height={20}
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
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <Link href="/" className="footer__logo">
                <img
                  src="/assets/images/logo.webp?v=2"
                  alt={STUDIO.name}
                  className="footer__logo-img"
                  width={52}
                  height={52}
                  style={{ borderRadius: "50%" }}
                />
                <div className="footer__logo-text">
                  <span className="footer__logo-brand">{STUDIO.shortName}</span>
                  <span className="footer__logo-sub">GROUP · DESIGN ATELIER</span>
                </div>
              </Link>
              <p className="footer__desc">
                Complete architectural interior design and white-glove turnkey execution for homes and flagship
                businesses — from concept and 3D visualisation to material curation and final handover.{" "}
                <strong>Design. Build. Deliver.</strong>
              </p>
              <div className="footer__social">
                <a
                  href={STUDIO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Instagram"
                >
                  <svg
                    width={18}
                    height={18}
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
                <a
                  href={STUDIO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Facebook"
                >
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href={defaultWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="WhatsApp"
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.02a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.36 9.36 0 0 1 6.65 2.76 9.32 9.32 0 0 1 2.75 6.65c0 5.18-4.22 9.41-9.4 9.41zM20.52 3.48A11.76 11.76 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.14 1.59 5.94L.07 24l6.33-1.66a11.85 11.85 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.48-8.42z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Maison</h4>
              <ul className="footer__links">
                <li>
                  <Link href="/about">Our Story</Link>
                </li>
                <li>
                  <Link href="/about#founders">Leadership</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/#hp-pk">Packages</Link>
                </li>
                <li>
                  <Link href="/#hp-faq">FAQs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__links">
                <li>
                  <Link href="/services#residential-interior-design">Residential Interiors</Link>
                </li>
                <li>
                  <Link href="/services#commercial-interior-design">Commercial Interiors</Link>
                </li>
                <li>
                  <Link href="/services#three-d-design-visualization">3D Design &amp; Visualization</Link>
                </li>
                <li>
                  <Link href="/services#modular-kitchen-design">Modular Kitchen Design</Link>
                </li>
                <li>
                  <Link href="/services#custom-furniture-wardrobe-design">Custom Furniture &amp; Wardrobes</Link>
                </li>
                <li>
                  <Link href="/services#turnkey-interior-execution">Turnkey Execution</Link>
                </li>
                <li>
                  <Link href="/services#renovation-remodeling">Renovation &amp; Remodeling</Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Get in Touch</h4>
              <ul className="footer__contact">
                {STUDIO.studios.map((s) => (
                  <li key={s.name}>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>
                      <strong>{s.name}</strong>
                      <br />
                      <a href={s.mapsUrl} target="_blank" rel="noopener noreferrer">
                        {s.address}
                      </a>
                    </span>
                  </li>
                ))}
                <li>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>
                    <a href={STUDIO.phonePrimaryHref}>{STUDIO.phonePrimary}</a>
                    <br />
                    <a href={STUDIO.phoneSecondaryHref}>{STUDIO.phoneSecondary}</a>
                  </span>
                </li>
                <li>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
                </li>
                <li>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{STUDIO.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__areas">
            <span className="footer__areas-label">Serving</span>
            <p>Bengaluru · Mumbai · Hyderabad · Chennai · Delhi NCR — and bespoke commissions across India</p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p>© 2026 Babell Group. All rights reserved.</p>
            <p className="footer__credit">Design. Build. Deliver.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
