import Link from "next/link";
import { PROBLEMS } from "@/data/site";
import { assetUrl } from "@/lib/asset";

export function ProblemsSection() {
  return (
    <section className="hp-section">
      <div className="hp-wrap">
        <div className="hp-shead hp-reveal">
          <div className="hp-kick">Customer problems we solve</div>
          <h2>
            Designing a space shouldn&apos;t feel <em>overwhelming</em>.
          </h2>
          <div className="hp-chr" style={{ marginTop: 16 }}>
            <div className="hp-chr-doll">
              <img
                alt=""
                className="hp-avatar-img"
                height={128}
                src={assetUrl("/assets/images/avatar-babell-point.png?v=1")}
                width={128}
              />
            </div>
            <div className="hp-chr-bub">
              Four things clients tell us they worry about — and exactly how we deal with each one.
            </div>
          </div>
        </div>

        <div className="prb">
          {PROBLEMS.map((item) => (
            <article key={item.num} className="prb-row hp-reveal">
              <div aria-hidden="true" className="prb-row__n">
                {item.num}
              </div>
              <div className="prb-row__problem">
                <div className="prb-row__label">
                  <span aria-hidden="true" className="prb-row__ic">
                    {item.icon}
                  </span>
                  The problem
                </div>
                <h3>{item.title}</h3>
                <p>{item.problem}</p>
              </div>
              <div aria-hidden="true" className="prb-row__arrow">
                <svg
                  fill="none"
                  height={22}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                  width={22}
                >
                  <line x1={5} x2={19} y1={12} y2={12} />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <div className="prb-row__answer">
                <div className="prb-row__label prb-row__label--ans">How we handle it</div>
                <p>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="prb-foot">
          <Link href="/contact?ref=problems">Talk it through in a free consultation →</Link>
        </p>
      </div>
    </section>
  );
}
