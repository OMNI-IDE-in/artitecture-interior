"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { buildWhatsAppUrl, PACKAGES, type PackageId } from "@/data/site";

const COMPARISON_GROUPS = [
  {
    group: "Kitchen & storage",
    rows: [
      { label: "Bedroom wardrobes", vals: ["1", "2", "3", "All"] },
      { label: "Walk-in wardrobe", vals: ["–", "–", "–", "If applicable"] },
      { label: "Shoe rack", vals: ["–", "✓", "–", "–"] },
      { label: "Crockery unit", vals: ["–", "–", "✓", "–"] },
      { label: "Custom storage solutions", vals: ["–", "–", "✓", "–"] },
      { label: "Custom furniture solutions", vals: ["–", "–", "–", "✓"] },
    ],
  },
  {
    group: "Living areas",
    rows: [
      { label: "Living & family lounge", vals: ["–", "–", "–", "✓"] },
      { label: "Pooja unit", vals: ["–", "Optional", "✓", "–"] },
      { label: "Bar unit", vals: ["–", "–", "–", "Optional"] },
      { label: "Home office", vals: ["–", "–", "–", "Optional"] },
    ],
  },
  {
    group: "Finishes",
    rows: [
      { label: "Decorative wall panelling", vals: ["–", "–", "✓", "✓"] },
      { label: "Lighting design", vals: ["Basic", "✓", "✓", "–"] },
      { label: "Premium hardware & accessories", vals: ["✓", "✓", "–", "✓"] },
    ],
  },
  {
    group: "Delivery",
    rows: [
      { label: "Professional installation", vals: ["✓", "–", "✓", "–"] },
      { label: "Project management", vals: ["✓", "✓", "✓", "End-to-end"] },
    ],
  },
] as const;

function renderCell(val: string) {
  if (val === "✓") {
    return (
      <span aria-label="Included" className="pkg-yes">
        ✓
      </span>
    );
  }
  if (val === "–") {
    return (
      <span aria-label="Not included" className="pkg-no">
        –
      </span>
    );
  }
  return <span className="pkg-val">{val}</span>;
}

export function PackagesSection() {
  const [activePkg, setActivePkg] = useState<PackageId>("2bhk");
  const [compareOpen, setCompareOpen] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % PACKAGES.length;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + PACKAGES.length) % PACKAGES.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = PACKAGES.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActivePkg(PACKAGES[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="hp-section" id="hp-pk">
      <div className="hp-wrap">
        <div className="hp-shead hp-reveal">
          <div className="hp-kick">Home interior packages</div>
          <h2>
            Transparent starting prices, <em>published openly.</em>
          </h2>
          <div className="hp-chr" style={{ marginTop: 16 }}>
            <div className="hp-chr-doll">
              <img
                alt=""
                className="hp-avatar-img"
                height={128}
                src="/assets/images/avatar-babell-thumb.png?v=1"
                width={128}
              />
            </div>
            <div className="hp-chr-bub">
              These are starting prices, not estimates. Yours gets fixed after we measure the site.
            </div>
          </div>
        </div>

        <div aria-label="Choose your home size" className="pkg-pick" role="tablist">
          <span className="pkg-pick__label">My home is a</span>
          <div className="pkg-pick__opts">
            {PACKAGES.map((pkg, idx) => {
              const isOn = activePkg === pkg.id;
              return (
                <button
                  key={pkg.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  type="button"
                  aria-controls={`pkg-panel-${pkg.id}`}
                  aria-selected={isOn}
                  className={`pkg-pick__btn${isOn ? " on" : ""}`}
                  data-pk={pkg.id}
                  id={`pkg-tab-${pkg.id}`}
                  role="tab"
                  tabIndex={isOn ? 0 : -1}
                  onClick={() => setActivePkg(pkg.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                >
                  {pkg.tabLabel}
                  {pkg.badge ? <> <i>{pkg.badge}</i></> : null}
                </button>
              );
            })}
          </div>
        </div>

        {PACKAGES.map((pkg) => {
          const isHidden = activePkg !== pkg.id;
          return (
            <div
              key={pkg.id}
              aria-labelledby={`pkg-tab-${pkg.id}`}
              className={`pkg-panel${isHidden ? " is-hidden" : ""}`}
              data-pk={pkg.id}
              id={`pkg-panel-${pkg.id}`}
              role="tabpanel"
            >
              <div className="pkg-panel__head">
                <div className="pkg-panel__id">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.subtitle}</p>
                </div>
                <div className="pkg-panel__price">
                  <span>Starting from</span>
                  <b>{pkg.price}</b>
                  <small>{pkg.warranty}</small>
                </div>
                <div className="pkg-panel__act">
                  <Link className="btn btn--accent" href={`/contact?package=${pkg.id}`}>
                    <span>Get this quoted</span>
                  </Link>
                  <a
                    className="btn btn--outline"
                    href={buildWhatsAppUrl(pkg.whatsappMsg)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>
              <div className="pkg-panel__body">
                {pkg.groups.map((grp) => (
                  <div key={grp.title} className="pkg-group">
                    <h4>{grp.title}</h4>
                    <ul>
                      {grp.items.map((it) => (
                        <li key={it.text}>
                          <svg
                            aria-hidden="true"
                            fill="none"
                            height={14}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            viewBox="0 0 24 24"
                            width={14}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>
                            {it.text}
                            {it.highlight ? <> <b>{it.highlight}</b></> : null}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="pkg-compare">
          <button
            type="button"
            aria-controls="pkgCompareWrap"
            aria-expanded={compareOpen}
            className="pkg-compare__toggle"
            id="pkgCompareBtn"
            onClick={() => setCompareOpen((prev) => !prev)}
          >
            <svg
              aria-hidden="true"
              fill="none"
              height={16}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              width={16}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
            <span>{compareOpen ? "Hide comparison" : "Compare all four side by side"}</span>
          </button>
          <div className="pkg-compare__wrap" hidden={!compareOpen} id="pkgCompareWrap">
            <p className="pkg-compare__all">
              <strong>In every package:</strong> Interior design consultation · 2D space planning · 3D design &amp;
              visualisation · Modular kitchen · TV unit · False ceiling
            </p>
            <div className="pkg-table__scroll">
              <table className="pkg-table">
                <caption className="hp-sr">Interior package comparison by home size</caption>
                <thead>
                  <tr>
                    <th scope="col">Included</th>
                    <th scope="col">
                      <span className="pkg-table__name">1 BHK</span>
                      <span className="pkg-table__price">₹5 Lakhs</span>
                    </th>
                    <th className="is-pop" scope="col">
                      <span className="pkg-table__name">2 BHK</span>
                      <span className="pkg-table__price">₹7 Lakhs</span>
                    </th>
                    <th scope="col">
                      <span className="pkg-table__name">3 BHK</span>
                      <span className="pkg-table__price">₹10 Lakhs</span>
                    </th>
                    <th scope="col">
                      <span className="pkg-table__name">4 BHK / Villa</span>
                      <span className="pkg-table__price">₹16 Lakhs</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_GROUPS.map((grp) => (
                    <FragmentGroup key={grp.group} group={grp.group} rows={grp.rows} />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td />
                    <td>
                      <Link className="pkg-table__cta" href="/contact?package=1bhk">
                        Get quoted
                      </Link>
                    </td>
                    <td className="is-pop">
                      <Link className="pkg-table__cta" href="/contact?package=2bhk">
                        Get quoted
                      </Link>
                    </td>
                    <td>
                      <Link className="pkg-table__cta" href="/contact?package=3bhk">
                        Get quoted
                      </Link>
                    </td>
                    <td>
                      <Link className="pkg-table__cta" href="/contact?package=4bhk">
                        Get quoted
                      </Link>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        <div className="hp-pknote">
          <h5>Please note</h5>
          <ul>
            <li>The above prices are starting estimates for standard interior packages.</li>
            <li>
              Final pricing may vary based on carpet area, material selection, design complexity, scope of work,
              customization, brand of hardware &amp; accessories, site conditions and client-specific requirements.
            </li>
            <li>
              The final quotation will be prepared after the design consultation, site measurement and material
              selection.
            </li>
            <li>
              Warranty is applicable on selected materials and hardware as per the respective manufacturer&apos;s
              warranty terms.
            </li>
            <li>
              Loose furniture, décor items, home appliances, electrical appliances, civil modifications and additional
              works are excluded unless specifically mentioned in the final quotation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FragmentGroup({
  group,
  rows,
}: {
  group: string;
  rows: readonly { readonly label: string; readonly vals: readonly string[] }[];
}) {
  return (
    <>
      <tr className="pkg-table__group">
        <th colSpan={5} scope="colgroup">
          {group}
        </th>
      </tr>
      {rows.map((r) => (
        <tr key={r.label}>
          <th scope="row">{r.label}</th>
          <td>{renderCell(r.vals[0])}</td>
          <td className="is-pop">{renderCell(r.vals[1])}</td>
          <td>{renderCell(r.vals[2])}</td>
          <td>{renderCell(r.vals[3])}</td>
        </tr>
      ))}
    </>
  );
}
