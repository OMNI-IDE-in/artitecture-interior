import { TRUST_METRICS } from "@/data/site";

export function TrustBar() {
  return (
    <section aria-label="Why clients trust us" className="hp-trust">
      <div className="hp-trust-track">
        {[false, true].map((hidden, setIdx) => (
          <div key={setIdx} aria-hidden={hidden || undefined} className="hp-trust-set">
            {TRUST_METRICS.map((item) => (
              <span key={`${setIdx}-${item.label}`} style={{ display: "contents" }}>
                <div className="hp-trust-item">
                  <span className="hp-trust-num">{item.num}</span>
                  <span className="hp-trust-label">{item.label}</span>
                </div>
                <span aria-hidden="true" className="hp-trust-dot">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
