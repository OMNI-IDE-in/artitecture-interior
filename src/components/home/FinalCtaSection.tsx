"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { STUDIO } from "@/data/site";

export function FinalCtaSection() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      nameRef.current?.focus();
      return;
    }
    if (!phone.trim()) {
      phoneRef.current?.focus();
      return;
    }
    setSubmitting(true);
    const params = new URLSearchParams({
      name: name.trim(),
      phone: phone.trim(),
      quick: "1",
    });
    router.push(`/contact?${params.toString()}#contactForm`);
  };

  return (
    <section className="hp-section" id="hp-go">
      <div className="hp-wrap">
        <div className="hp-cta">
          <div className="hp-kick" style={{ color: "var(--hp-sand)" }}>
            The first consultation is free
          </div>
          <h2>
            Tell us about your space. <em>We&apos;ll take it from there.</em>
          </h2>
          <div className="hp-chr" style={{ marginTop: 14 }}>
            <div className="hp-chr-doll">
              <img
                alt=""
                className="hp-avatar-img"
                height={128}
                src="/assets/images/avatar-babell-yay.png?v=1"
                width={128}
              />
            </div>
            <div className="hp-chr-bub">
              A name and a number is enough. The rest is a conversation, not a form.
            </div>
          </div>
          <p className="hp-lead" style={{ color: "rgba(255,255,255,.72)", maxWidth: "52ch" }}>
            Our team will understand your requirements, visit the site if required, discuss your ideas and prepare a
            customised design proposal and transparent quotation.
          </p>
          <form className="hp-cf" id="hpCtaForm" onSubmit={handleSubmit} noValidate>
            <div aria-hidden="true" className="form-hp">
              <label htmlFor="hp-cta-website">Website (leave blank)</label>
              <input autoComplete="off" id="hp-cta-website" name="website" tabIndex={-1} type="text" />
            </div>
            <label className="hp-sr" htmlFor="hp-cta-name">
              Your name
            </label>
            <input
              ref={nameRef}
              autoComplete="name"
              id="hp-cta-name"
              name="name"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="hp-sr" htmlFor="hp-cta-phone">
              Phone number
            </label>
            <input
              ref={phoneRef}
              autoComplete="tel"
              id="hp-cta-phone"
              name="phone"
              placeholder="Phone number"
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit" disabled={submitting}>
              {submitting ? "Taking you there…" : "Book free consultation"}
            </button>
          </form>
          <p className="hp-cn">
            Prefer to talk now? Call <a href={STUDIO.phonePrimaryHref}>{STUDIO.phonePrimary}</a> — {STUDIO.hours}.
          </p>
        </div>
      </div>
    </section>
  );
}
