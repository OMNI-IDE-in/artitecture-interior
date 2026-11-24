import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { buildWhatsAppUrl, STUDIO } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a private interior architecture consultation with Babell Group at our Bengaluru or Mumbai ateliers.",
};

export default function ContactPage() {
  const defaultWa = buildWhatsAppUrl("Hi! I'd like to know more about your interior design services.");

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
            src="/assets/portfolio/zion-hills-villa/entry-lobby-1600.webp"
            srcSet="/assets/portfolio/zion-hills-villa/entry-lobby-400.webp 400w, /assets/portfolio/zion-hills-villa/entry-lobby-800.webp 800w, /assets/portfolio/zion-hills-villa/entry-lobby-1600.webp 1600w"
            width={1600}
          />
        </div>
        <div className="container">
          <span className="page-hero__label">Get in Touch</span>
          <h1 className="page-hero__title">
            Let&apos;s Start a <em>Conversation</em>
          </h1>
          <p className="page-hero__desc">
            Ready to transform your space? The first consultation is free — no obligation, no pressure.
          </p>
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="quick-contact reveal">
            <a className="quick-contact__item" href={STUDIO.phonePrimaryHref}>
              <span aria-hidden="true" className="quick-contact__icon">
                📞
              </span>
              <span className="quick-contact__label">Call us</span>
              <span className="quick-contact__value">{STUDIO.phonePrimary}</span>
            </a>
            <a
              className="quick-contact__item quick-contact__item--wa"
              href={defaultWa}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span aria-hidden="true" className="quick-contact__icon">
                💬
              </span>
              <span className="quick-contact__label">WhatsApp</span>
              <span className="quick-contact__value">Chat instantly</span>
            </a>
            <a className="quick-contact__item" href={STUDIO.phoneSecondaryHref}>
              <span aria-hidden="true" className="quick-contact__icon">
                ☎️
              </span>
              <span className="quick-contact__label">Alternate line</span>
              <span className="quick-contact__value">{STUDIO.phoneSecondary}</span>
            </a>
            <div className="quick-contact__item quick-contact__item--static">
              <span aria-hidden="true" className="quick-contact__icon">
                🕒
              </span>
              <span className="quick-contact__label">Studio hours</span>
              <span className="quick-contact__value">{STUDIO.hours}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal reveal--left">
              <span className="section-label">Our Studios</span>
              <h2 className="section-title">
                Come Say <em>Hello</em>
              </h2>
              <p className="section-subtitle mb-3">
                Two studios, one team. Drop in during working hours — or let us come to your site instead.
              </p>
              <div className="contact-info-cards">
                {STUDIO.studios.map((s) => (
                  <div key={s.name} className="contact-info-card">
                    <div className="contact-info-card__icon">
                      <svg
                        aria-hidden="true"
                        fill="none"
                        height={22}
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        width={22}
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="contact-info-card__title">{s.name}</h3>
                      <p className="contact-info-card__text">{s.address}</p>
                      <p className="contact-info-card__text" style={{ marginTop: 6 }}>
                        <a href={s.mapsUrl} rel="noopener noreferrer" target="_blank">
                          Get directions →
                        </a>
                      </p>
                    </div>
                  </div>
                ))}

                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      height={22}
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      width={22}
                    >
                      <rect height={20} rx={5} ry={5} width={20} x={2} y={2} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-info-card__title">Follow Our Work</h3>
                    <p className="contact-info-card__text">
                      <a href={STUDIO.instagram} rel="noopener noreferrer" target="_blank">
                        @babellgroup
                      </a>
                    </p>
                    <p className="contact-info-card__text" style={{ marginTop: 4 }}>
                      Latest commissions and architectural journals on Instagram
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      height={22}
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      width={22}
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx={12} cy={10} r={3} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-info-card__title">Areas We Serve</h3>
                    <p className="contact-info-card__text">
                      Bengaluru, Mumbai, Hyderabad, Chennai, Delhi NCR and surrounding regions.
                    </p>
                    <p className="contact-info-card__text" style={{ marginTop: 4 }}>
                      We also accept private commissions across India and internationally.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal reveal--right">
              <Suspense fallback={<div className="contact-form">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Find Us
            </span>
            <h2 className="section-title">
              Both Our <em>Studios</em>
            </h2>
          </div>
          <div className="map-grid">
            {STUDIO.studios.map((s) => (
              <div key={s.name} className="map-card reveal">
                <iframe
                  allowFullScreen
                  height={320}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={s.embedUrl}
                  style={{ border: 0 }}
                  title={`Map showing ${s.name}`}
                  width="100%"
                />
                <div className="map-card__body">
                  <h3 className="map-card__title">{s.name}</h3>
                  <p className="map-card__addr">{s.address}</p>
                  <a className="btn btn--outline btn--sm" href={s.mapsUrl} rel="noopener noreferrer" target="_blank">
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Still Deciding?
            </span>
            <h2 className="section-title">
              Answers to Common <em>Questions</em>
            </h2>
            <p className="section-subtitle mx-auto mb-3">
              Costs, timelines, materials, warranty and how to get started — all answered on our homepage.
            </p>
            <Link className="btn btn--primary" href="/#hp-faq">
              <span>Read the FAQs</span>
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
          </div>
        </div>
      </section>
    </main>
  );
}
