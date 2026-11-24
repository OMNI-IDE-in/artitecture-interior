"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { PROCESS_PHASES } from "@/data/site";
import { assetUrl } from "@/lib/asset";

function PhaseIcon({ icon }: { icon: "compass" | "pen" | "wrench" | "key" }) {
  if (icon === "compass") {
    return (
      <svg
        fill="none"
        height={18}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
        width={18}
      >
        <circle cx={12} cy={12} r={8.5} />
        <path d="M14.6 9.4l-2.1 5.3-5.3 2.1 2.1-5.3 5.3-2.1z" />
      </svg>
    );
  }
  if (icon === "pen") {
    return (
      <svg
        fill="none"
        height={18}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
        width={18}
      >
        <path d="M14 3.5l6.5 6.5L11 19.5H4.5V13L14 3.5z" />
        <path d="M12.3 5.2l6.5 6.5" />
      </svg>
    );
  }
  if (icon === "wrench") {
    return (
      <svg
        fill="none"
        height={18}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
        width={18}
      >
        <path d="M14.9 6.5a3.8 3.8 0 00-5 5L4 17.4 6.6 20l5.9-5.9a3.8 3.8 0 005-5l-2.4 2.4-2-2 2.4-2.4z" />
      </svg>
    );
  }
  return (
    <svg
      fill="none"
      height={18}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      width={18}
    >
      <circle cx={7.5} cy={15.5} r={3.3} />
      <path d="M9.8 13.2L18.7 4.3M15.7 6.3l2.4 2.4M12.9 9.1l1.9 1.9" />
    </svg>
  );
}

export function JourneySection() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const jrnWrap = wrapRef.current;
    if (!jrnWrap) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const jrnSteps = Array.from(jrnWrap.querySelectorAll(".jrn-step"));
    const jrnPhases = Array.from(jrnWrap.querySelectorAll(".jrn-phase"));

    if (reduceMotion) {
      jrnSteps.forEach((s) => s.classList.add("jrn-step--lit"));
      jrnPhases.forEach((p) => p.classList.add("jrn-phase--lit"));
      jrnWrap.style.setProperty("--fill", "100");
      return;
    }

    const updateJrnFill = () => {
      const rect = jrnWrap.getBoundingClientRect();
      const startLine = window.innerHeight * 0.85;
      const endLine = window.innerHeight * 0.15;
      const span = rect.height + startLine - endLine;
      const pct = span > 0 ? Math.min(Math.max((startLine - rect.top) / span, 0), 1) : 0;
      jrnWrap.style.setProperty("--fill", (pct * 100).toFixed(1));

      const lightY = pct * rect.height;
      const markLit = (els: Element[], cls: string, ratio: number) => {
        els.forEach((el) => {
          const r = el.getBoundingClientRect();
          const trigger = r.top - rect.top + r.height * ratio;
          el.classList.toggle(cls, lightY >= trigger);
        });
      };
      markLit(jrnSteps, "jrn-step--lit", 0.4);
      markLit(jrnPhases, "jrn-phase--lit", 0.02);
    };

    window.addEventListener("scroll", updateJrnFill, { passive: true });
    window.addEventListener("resize", updateJrnFill, { passive: true });
    updateJrnFill();

    return () => {
      window.removeEventListener("scroll", updateJrnFill);
      window.removeEventListener("resize", updateJrnFill);
    };
  }, []);

  return (
    <section className="hp-section hp-dark hp-dark--photo" id="hp-how">
      <div aria-hidden="true" className="hp-dark__photo">
        <img
          alt=""
          decoding="async"
          height={900}
          loading="lazy"
          src={assetUrl("/assets/portfolio/chennai-1bhk/dining-night-1600.webp")}
          width={1600}
        />
      </div>
      <div className="hp-wrap">
        <div className="hp-shead hp-reveal">
          <div className="hp-kick">How it works</div>
          <h2>
            Our 8-step design &amp; <em>execution process.</em>
          </h2>
          <p className="hp-lead">
            A 100% client-centric process. Most residential projects are completed within 6–12 weeks after design
            approval and material finalisation.
          </p>
        </div>

        <div className="jrn-wrap" id="jrnWrap" ref={wrapRef}>
          <div aria-hidden="true" className="jrn-fill" id="jrnFill">
            <i className="jrn-fill__glow" />
          </div>
          <ol className="jrn">
            {PROCESS_PHASES.map((phase) => (
              <li key={phase.id} className={`jrn-phase ${phase.id} hp-reveal`}>
                <div className="jrn-phase__hd">
                  <span aria-hidden="true" className="jrn-phase__ic">
                    <PhaseIcon icon={phase.icon} />
                  </span>
                  <h3 className="jrn-phase__name">{phase.name}</h3>
                  <span className="jrn-phase__count">{phase.countLabel}</span>
                  <span aria-hidden="true" className="jrn-phase__rule" />
                </div>
                <ol className="jrn-steps">
                  {phase.steps.map((step) => (
                    <li key={step.num} className="jrn-step">
                      <span aria-hidden="true" className="jrn-step__dot" />
                      <span aria-hidden="true" className="jrn-step__num">
                        {step.num}
                      </span>
                      <div className="jrn-step__body">
                        <h4 className="jrn-step__t">{step.title}</h4>
                        <p className="jrn-step__d">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>

        <p className="jrn-foot">
          Every stage is handled in-house by our own design and execution team.{" "}
          <Link href="/contact?ref=process">Start with a free consultation →</Link>
        </p>
      </div>
    </section>
  );
}
