"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/data/site";

function StarRating({ stars }: { stars: number }) {
  const label = `${stars} out of 5 stars`;
  if (stars === 5) {
    return (
      <div aria-label={label} className="hp-tq__stars">
        ★★★★★
      </div>
    );
  }
  if (stars === 4.5) {
    return (
      <div aria-label={label} className="hp-tq__stars">
        ★★★★<span className="hp-star-half">★</span>
      </div>
    );
  }
  return (
    <div aria-label={label} className="hp-tq__stars">
      ★★★★<span className="hp-star-empty">★</span>
    </div>
  );
}

export function TestimonialsSection() {
  const totalSlides = TESTIMONIALS.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0) setCurrentSlide(totalSlides - 1);
      else if (index >= totalSlides) setCurrentSlide(0);
      else setCurrentSlide(index);
    },
    [totalSlides]
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || paused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [paused, totalSlides]);

  const progressPct = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <section className="hp-section testimonials-section" id="hp-tst">
      <div className="hp-wrap">
        <div className="hp-shead hp-reveal" style={{ textAlign: "center" }}>
          <div className="hp-kick">Client testimonials</div>
          <h2>
            What our clients <em>actually say.</em>
          </h2>
        </div>

        <div
          className="hp-tsl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="testimonial-slider">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={(e) => {
                touchStartX.current = e.changedTouches[0].screenX;
              }}
              onTouchEnd={(e) => {
                const diff = touchStartX.current - e.changedTouches[0].screenX;
                if (Math.abs(diff) > 50) {
                  goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
                }
              }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={`${t.name}-${idx}`}
                  className="testimonial-card"
                  aria-hidden={idx !== currentSlide}
                >
                  <figure className="hp-tq">
                    <StarRating stars={t.stars} />
                    <blockquote className="hp-tq__text">{t.quote}</blockquote>
                    <figcaption className="hp-tq__who">
                      <div aria-hidden="true" className="hp-tq__mono">
                        {t.initial}
                      </div>
                      <div>
                        <div className="hp-tq__name">{t.name}</div>
                        <div className="hp-tq__proj">{t.project}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="hp-tnav">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="testimonial-btn--prev"
              onClick={() => goToSlide(currentSlide - 1)}
            >
              <svg
                aria-hidden="true"
                fill="none"
                height={17}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={17}
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="hp-tprog">
              <div className="hp-tprog-track">
                <i id="hpTprogBar" style={{ width: `${progressPct}%` }} />
              </div>
              <span className="hp-tcount">
                <b id="hpTcur">{String(currentSlide + 1).padStart(2, "0")}</b> / {totalSlides}
              </span>
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              className="testimonial-btn--next"
              onClick={() => goToSlide(currentSlide + 1)}
            >
              <svg
                aria-hidden="true"
                fill="none"
                height={17}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={17}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
