"use client";

import { useState } from "react";
import { FAQS } from "@/data/site";

export function FaqSection() {
  const [openSet, setOpenSet] = useState<Record<number, boolean>>({});

  const toggle = (idx: number) => {
    setOpenSet((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="hp-section" id="hp-faq">
      <div className="hp-wrap">
        <div className="hp-shead hp-reveal" style={{ textAlign: "center" }}>
          <div className="hp-kick">Frequently asked questions</div>
          <h2>
            The things people ask us <em>before starting.</em>
          </h2>
        </div>

        <div className="hp-faqs">
          {FAQS.map((item, idx) => {
            const isOpen = !!openSet[idx];
            return (
              <div key={item.q} className={`hp-faq${isOpen ? " on" : ""}`}>
                <h3>
                  <button
                    type="button"
                    aria-controls={`faq-a-${idx}`}
                    aria-expanded={isOpen}
                    className="hp-faq__q"
                    id={`faq-q-${idx}`}
                    onClick={() => toggle(idx)}
                  >
                    {item.q}
                  </button>
                </h3>
                <div
                  aria-labelledby={`faq-q-${idx}`}
                  className="hp-faq__a"
                  id={`faq-a-${idx}`}
                  role="region"
                >
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
