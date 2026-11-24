import type { Metadata } from "next";
import Link from "next/link";
import { FOUNDERS, PORTFOLIO_CARDS, TRUST_METRICS, WHY_CHOOSE_US } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the leadership and architectural design-and-execution atelier behind Babell Group — luxury residential and flagship commercial interiors across India.",
};

function WhyIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "home":
      return (
        <svg aria-hidden="true" fill="none" height={19} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} viewBox="0 0 24 24" width={19}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5.5 9.5V20h13V9.5" />
          <path d="M9.5 20v-6h5v6" />
        </svg>
      );
    case "pen":
      return (
        <svg aria-hidden="true" fill="none" height={19} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} viewBox="0 0 24 24" width={19}>
          <path d="M14 3.5 20.5 10 11 19.5H4.5V13L14 3.5z" />
          <path d="m12.3 5.2 6.5 6.5" />
        </svg>
      );
    case "ruler":
      return (
        <svg aria-hidden="true" fill="none" height={19} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} viewBox="0 0 24 24" width={19}>
          <path d="M3 16.5 16.5 3 21 7.5 7.5 21 3 16.5z" />
          <path d="m7.5 12 2 2M11 8.5l2 2M14.5 5l2 2" />
        </svg>
      );
    case "layers":
      return (
        <svg aria-hidden="true" fill="none" height={19} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} viewBox="0 0 24 24" width={19}>
          <path d="m12 3 9 5-9 5-9-5 9-5z" />
          <path d="m3 13 9 5 9-5" />
        </svg>
      );
    case "receipt":
      return (
        <svg aria-hidden="true" fill="none" height={19} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} viewBox="0 0 24 24" width={19}>
          <path d="M5 3h14v18l-2.3-1.6L14.4 21 12 19.4 9.6 21l-2.3-1.6L5 21V3z" />
          <path d="M9 8h6M9 12h6" />
        </svg>
      );
    case "team":
      return (
        <svg aria-hidden="true" fill="none" height={19} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} viewBox="0 0 24 24" width={19}>
          <circle cx={9} cy={8} r={3.2} />
          <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
          <path d="M16 5.2a3.2 3.2 0 0 1 0 5.9M17.5 14.8c2 .7 3.5 2.5 3.5 5.2" />
        </svg>
      );
    case "clock":
      return (
        <svg aria-hidden="true" fill="none" height={19} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} viewBox="0 0 24 24" width={19}>
          <circle cx={12} cy={12} r={9} />
          <path d="M12 6.5V12l3.5 2" />
        </svg>
      );
    case "shield":
      return (
        <svg aria-hidden="true" fill="none" height={19} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} viewBox="0 0 24 24" width={19}>
          <path d="M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6l-7-3z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "heart":
      return (
        <svg aria-hidden="true" fill="none" height={19} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} viewBox="0 0 24 24" width={19}>
          <path d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.6 12 20 12 20z" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" fill="none" height={19} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} viewBox="0 0 24 24" width={19}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
        </svg>
      );
  }
}

export default function AboutPage() {
  const featuredWork = PORTFOLIO_CARDS.slice(0, 3);

  return (
    <main id="main">
      <section className="page-hero page-hero--image">
        <div aria-hidden="true" className="page-hero__media">
          <picture>
            <source srcSet="/assets/images/about-team.webp" type="image/webp" />
            <img
              alt=""
              decoding="async"
              fetchPriority="high"
              height={900}
              src="/assets/images/about-team.jpg"
              width={1600}
            />
          </picture>
        </div>
        <div className="container">
          <span className="page-hero__label">About Us</span>
          <h1 className="page-hero__title">
            The Atelier Behind <em>Babell Group</em>
          </h1>
          <p className="page-hero__desc">
            A design and execution studio built on a simple idea — that every space should reflect the personality,
            lifestyle and aspirations of the people who use it.
          </p>
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span>About</span>
          </div>
        </div>
      </section>

      <section className="section" id="founders">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              The leadership behind it
            </span>
            <h2 className="section-title">
              Meet the <em>Principals</em>
            </h2>
            <p className="section-subtitle mx-auto">
              Two disciplines, one studio — design direction and execution management, both in-house.
            </p>
          </div>
          <div className="fdr">
            {FOUNDERS.map((founder, idx) => (
              <article
                key={founder.name}
                className={`fdr-card reveal reveal--delay-${idx + 1}`}
              >
                <div className="fdr-card__side">
                  <img
                    alt={founder.name}
                    className="fdr-card__photo"
                    height={96}
                    loading="lazy"
                    src={founder.photo}
                    width={96}
                  />
                  <div className="fdr-card__exp">
                    <b>{founder.exp}</b>
                    <span>experience</span>
                  </div>
                </div>
                <div className="fdr-card__body">
                  <h3 className="fdr-card__name">{founder.name}</h3>
                  <p className="fdr-card__role">{founder.role}</p>
                  <p className="fdr-card__bio">{founder.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="about-story">
            <div className="about-story__image reveal reveal--left">
              <img
                alt="Entry lobby designed and executed by Babell Group, Zion Hills villa"
                height={600}
                loading="lazy"
                sizes="(max-width: 860px) 100vw, 46vw"
                src="/assets/portfolio/zion-hills-villa/entry-lobby-800.webp"
                srcSet="/assets/portfolio/zion-hills-villa/entry-lobby-400.webp 400w, /assets/portfolio/zion-hills-villa/entry-lobby-800.webp 800w, /assets/portfolio/zion-hills-villa/entry-lobby-1600.webp 1600w"
                width={800}
              />
            </div>
            <div className="reveal reveal--right">
              <span className="section-label">Our Heritage</span>
              <h2 className="section-title">
                Our <em>Story</em>
              </h2>
              <blockquote className="about-pull">
                Every home and commercial flagship should carry timeless architectural calm, tailored craftsmanship, and
                unmistakable purpose.
              </blockquote>
              <p className="about-preview__text">
                Babell Group was established with a singular architectural standard —{" "}
                <strong>to craft enduring spaces that unite proportion, materiality, and precision execution</strong>.
              </p>
              <p className="about-preview__text">
                With expertise in residential interiors, commercial interiors, modular kitchens, custom furniture and
                turnkey interior execution, we transform ideas into inspiring spaces through innovative design,
                meticulous planning and quality craftsmanship. From concept development and 3D visualisation to
                material selection and final execution, we manage every stage with professionalism and attention to
                detail.
              </p>
              <p className="about-preview__text">
                Whether it&apos;s a modern apartment, luxury villa, office, retail showroom, café, restaurant, clinic or
                any commercial establishment, our goal is to deliver interiors that are timeless, functional and built
                around our clients&apos; unique needs.
              </p>
              <p className="about-preview__text">
                <strong>Design. Build. Deliver.</strong> It&apos;s more than our tagline — it&apos;s our promise to
                bring your vision to life with creativity, professionalism and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              What Guides Us
            </span>
            <h2 className="section-title">
              Mission &amp; <em>Vision</em>
            </h2>
          </div>
          <div className="mv-grid">
            <div className="mv-card reveal reveal--delay-1">
              <div aria-hidden="true" className="mv-card__icon">
                <svg
                  aria-hidden="true"
                  fill="none"
                  height={26}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.6}
                  viewBox="0 0 24 24"
                  width={26}
                >
                  <circle cx={12} cy={12} r={9} />
                  <circle cx={12} cy={12} r={5} />
                  <circle cx={12} cy={12} r={1.4} />
                </svg>
              </div>
              <h3 className="mv-card__title">Our Mission</h3>
              <p className="mv-card__text">
                To deliver exceptional interior design and execution solutions that combine creativity, functionality,
                quality and transparency — while creating spaces that enhance everyday living and business success.
              </p>
            </div>
            <div className="mv-card reveal reveal--delay-2">
              <div aria-hidden="true" className="mv-card__icon">
                <svg
                  aria-hidden="true"
                  fill="none"
                  height={26}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.6}
                  viewBox="0 0 24 24"
                  width={26}
                >
                  <circle cx={12} cy={12} r={9} />
                  <path d="m15.5 8.5-2.2 5.6-5.6 2.2 2.2-5.6 5.6-2.2z" />
                </svg>
              </div>
              <h3 className="mv-card__title">Our Vision</h3>
              <p className="mv-card__text">
                To become one of the most trusted and innovative interior design companies, recognised for creating
                inspiring residential and commercial spaces through exceptional design, superior craftsmanship and
                outstanding customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {TRUST_METRICS.map((m, idx) => {
              const numeric = m.num.replace(/\D/g, "");
              const suffix = m.num.replace(/\d/g, "");
              const delayClass = idx > 0 ? ` reveal--delay-${Math.min(idx, 3)}` : "";
              return (
                <div key={m.label} className={`stat-item reveal${delayClass}`}>
                  <div className="stat-item__number" data-count={numeric} data-suffix={suffix}>
                    0
                  </div>
                  <div className="stat-item__label">{m.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Why Babell Group
            </span>
            <h2 className="section-title">
              Why Clients <em>Choose Us</em>
            </h2>
            <p className="section-subtitle mx-auto">
              Ten reasons homeowners and businesses trust us with their spaces — from first sketch to final handover.
            </p>
          </div>
          <div className="why-grid">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={item.text}
                className={`why-item reveal reveal--delay-${(idx % 3) + 1}`}
              >
                <span aria-hidden="true" className="why-item__icon">
                  <WhyIcon icon={item.icon} />
                </span>
                <span className="why-item__text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              See it for yourself
            </span>
            <h2 className="section-title">
              Claims are easy. <em>Here&apos;s the work.</em>
            </h2>
            <p className="section-subtitle mx-auto">
              A few recently delivered projects — open any one for the full room-by-room gallery.
            </p>
          </div>
          <div className="abt-work">
            {featuredWork.map((item) => (
              <Link key={item.slug} className="abt-work__item reveal" href={`/projects/${item.slug}`}>
                <div className="abt-work__media">
                  <img
                    alt={item.alt}
                    height={600}
                    loading="lazy"
                    sizes="(max-width: 720px) 100vw, 32vw"
                    src={item.src}
                    srcSet={item.srcset}
                    width={800}
                  />
                  <span className="abt-work__count">{item.photoCount}</span>
                </div>
                <span className="abt-work__type">{item.typeLabel}</span>
                <h3 className="abt-work__name">{item.title}</h3>
              </Link>
            ))}
          </div>
          <p className="abt-work__more reveal">
            <Link href="/portfolio">See the full portfolio →</Link>
            <span>or</span>
            <Link href="/services">browse what we do →</Link>
          </p>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Ready to Begin?
            </span>
            <h2 className="section-title">
              Let&apos;s Design Your <em>Space</em>
            </h2>
            <p className="section-subtitle mx-auto mb-3">
              Book a free consultation with our design team and get a transparent quotation built around your
              requirements and budget.
            </p>
            <Link className="btn btn--accent btn--lg" href="/contact" id="about-page-cta">
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
