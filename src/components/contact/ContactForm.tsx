"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { buildWhatsAppUrl, STUDIO } from "@/data/site";

const STYLE_LABELS: Record<string, string> = {
  aesthetic: "Design-led",
  comfort: "Comfort-led",
  storage: "Storage-led",
  calm: "Space-led",
};

const ROOM_LABELS: Record<string, string> = {
  kitchen: "Kitchen",
  living: "Living room",
  bedroom: "Bedroom",
  "whole-home": "Entire home",
};

export function ContactForm() {
  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [pkg, setPkg] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");

  const [statusMsg, setStatusMsg] = useState<{
    type: "success" | "error";
    text: string;
    waLink?: string;
  } | null>(null);

  useEffect(() => {
    const qName = searchParams.get("name");
    const qPhone = searchParams.get("phone");
    const qService = searchParams.get("service");
    const qPackage = searchParams.get("package");
    const qStyle = searchParams.get("style");
    const qRoom = searchParams.get("room");
    const qRef = searchParams.get("ref");

    if (qName) setName(qName);
    if (qPhone) setPhone(qPhone);
    if (qService) setService(qService);
    if (qPackage && ["1bhk", "2bhk", "3bhk", "4bhk"].includes(qPackage)) {
      setPkg(qPackage);
    }

    const notes: string[] = [];
    if (qStyle && STYLE_LABELS[qStyle]) {
      notes.push(`Style priority: ${STYLE_LABELS[qStyle]}`);
    }
    if (qRoom && ROOM_LABELS[qRoom]) {
      notes.push(`Starting room: ${ROOM_LABELS[qRoom]}`);
    }
    if (qRef && qRef.startsWith("project_")) {
      notes.push(`Inspired by project: ${qRef.replace("project_", "").replace(/-/g, " ")}`);
    }
    if (notes.length > 0) {
      setMessage((prev) => (prev ? prev : notes.join(" · ") + "\n"));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);

    if (website) {
      setStatusMsg({ type: "success", text: "Thank you for your enquiry." });
      return;
    }

    if (!name.trim() || !phone.trim()) {
      setStatusMsg({
        type: "error",
        text: "Please enter your name and phone number so our design team can reach you.",
      });
      return;
    }

    const summaryLines = [
      `Hi Babell Group! I'd like to book a consultation.`,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : "",
      city.trim() ? `City: ${city.trim()}` : "",
      service ? `Service: ${service}` : "",
      pkg ? `Package: ${pkg.toUpperCase()}` : "",
      budget ? `Budget: ${budget}` : "",
      message.trim() ? `Notes: ${message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const waLink = buildWhatsAppUrl(summaryLines);

    setStatusMsg({
      type: "success",
      text: `Thank you, ${name.trim()}! Your consultation request is ready. Continue directly on WhatsApp or call us on ${STUDIO.phonePrimary}.`,
      waLink,
    });

    setName("");
    setPhone("");
    setEmail("");
    setCity("");
    setService("");
    setPkg("");
    setBudget("");
    setMessage("");
  };

  const defaultWa = buildWhatsAppUrl("Hi! I'd like to know more about Babell Group's interior design services.");

  return (
    <form className="contact-form" id="contactForm" onSubmit={handleSubmit} noValidate>
      <h2 className="contact-form__title">Book a Free Consultation</h2>
      <p className="contact-form__subtitle">Fill in the details below and our team will get back to you.</p>

      {statusMsg ? (
        <div
          role="alert"
          style={{
            padding: "14px 16px",
            borderRadius: "10px",
            marginBottom: "18px",
            fontSize: "0.94rem",
            background: statusMsg.type === "success" ? "rgba(47, 88, 82, 0.1)" : "rgba(229, 57, 53, 0.1)",
            border: `1px solid ${statusMsg.type === "success" ? "#2F5852" : "#E53935"}`,
            color: "#161B19",
          }}
        >
          <p>{statusMsg.text}</p>
          {statusMsg.waLink ? (
            <p style={{ marginTop: "8px" }}>
              <a
                href={statusMsg.waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2F5852", fontWeight: 700, textDecoration: "underline" }}
              >
                Send these details on WhatsApp →
              </a>
            </p>
          ) : null}
        </div>
      ) : null}

      <div aria-hidden="true" className="form-hp">
        <label htmlFor="contact-website">Website (leave blank)</label>
        <input
          autoComplete="off"
          id="contact-website"
          name="website"
          tabIndex={-1}
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            autoComplete="name"
            className="form-input"
            id="contact-name"
            name="name"
            placeholder="Your name"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-phone">
            Phone Number <span aria-hidden="true">*</span>
          </label>
          <input
            autoComplete="tel"
            className="form-input"
            id="contact-phone"
            name="phone"
            placeholder={STUDIO.phonePrimary}
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">
            Email Address
          </label>
          <input
            autoComplete="email"
            className="form-input"
            id="contact-email"
            name="email"
            placeholder="your@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-city">
            City
          </label>
          <input
            autoComplete="address-level2"
            className="form-input"
            id="contact-city"
            list="city-suggestions"
            name="city"
            placeholder="e.g. Bengaluru"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <datalist id="city-suggestions">
            {STUDIO.areasServed.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-service">
            Service Required
          </label>
          <select
            className="form-select"
            id="contact-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select a service</option>
            <option value="residential-interior-design">Residential Interior Design</option>
            <option value="commercial-interior-design">Commercial Interior Design</option>
            <option value="three-d-design-visualization">3D Design &amp; Visualization</option>
            <option value="space-planning-consultation">Space Planning &amp; Interior Consultation</option>
            <option value="modular-kitchen-design">Modular Kitchen Design</option>
            <option value="custom-furniture-wardrobe-design">Custom Furniture &amp; Wardrobe Design</option>
            <option value="turnkey-interior-execution">Turnkey Interior Execution</option>
            <option value="renovation-remodeling">Renovation &amp; Remodeling</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-package">
            Package of Interest
          </label>
          <select
            className="form-select"
            id="contact-package"
            name="package"
            value={pkg}
            onChange={(e) => setPkg(e.target.value)}
          >
            <option value="">Not sure yet</option>
            <option value="1bhk">1 BHK package — from ₹5 Lakhs</option>
            <option value="2bhk">2 BHK package — from ₹7 Lakhs</option>
            <option value="3bhk">3 BHK package — from ₹10 Lakhs</option>
            <option value="4bhk">4 BHK / Villa package — from ₹16 Lakhs</option>
          </select>
        </div>

        <div className="form-group form-group--full">
          <label className="form-label" htmlFor="contact-budget">
            Approximate Budget
          </label>
          <select
            className="form-select"
            id="contact-budget"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Select budget range</option>
            <option value="under-5">Under ₹5 Lakhs</option>
            <option value="5-10">₹5 Lakhs – ₹10 Lakhs</option>
            <option value="10-16">₹10 Lakhs – ₹16 Lakhs</option>
            <option value="16-25">₹16 Lakhs – ₹25 Lakhs</option>
            <option value="25-plus">₹25 Lakhs+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div className="form-group form-group--full">
          <label className="form-label" htmlFor="contact-message">
            Tell Us About Your Project
          </label>
          <textarea
            className="form-textarea"
            id="contact-message"
            name="message"
            placeholder="Describe your space, style preferences, timeline and any specific requirements..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="form-submit">
        <button className="btn btn--accent btn--lg" id="contact-submit-btn" style={{ width: "100%" }} type="submit">
          <span>Send Enquiry</span>
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
            <line x1={22} x2={11} y1={2} y2={13} />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
        <p className="form-alt">
          Prefer WhatsApp?{" "}
          <a href={defaultWa} rel="noopener noreferrer" target="_blank">
            Message us directly →
          </a>
        </p>
      </div>
    </form>
  );
}
