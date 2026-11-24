"use client";

import Link from "next/link";
import { useState } from "react";
import { HERO_ROOMS, type RoomKey } from "@/data/catalog";

interface HeroSectionProps {
  onRoomChange?: (message: string) => void;
}

const ROOM_TABS: { key: RoomKey; label: string; icon: "house" | "layers" | "studio" }[] = [
  { key: "zion", label: "Zion Hills Villa", icon: "house" },
  { key: "chennai", label: "Chennai 1 BHK", icon: "layers" },
  { key: "rajajinagar", label: "Rajajinagar 3 BHK", icon: "house" },
  { key: "podcast", label: "Podcast Studio", icon: "studio" },
];

function TabIcon({ icon }: { icon: "house" | "layers" | "studio" }) {
  if (icon === "layers") {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        height={16}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
        width={16}
      >
        <path d="m12 3 9 5-9 5-9-5 9-5z" />
        <path d="m3 13 9 5 9-5" />
      </svg>
    );
  }
  if (icon === "studio") {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        height={16}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
        width={16}
      >
        <circle cx={9} cy={8} r={3.2} />
        <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
        <path d="M16 5.2a3.2 3.2 0 0 1 0 5.9M17.5 14.8c2 .7 3.5 2.5 3.5 5.2" />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={16}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      width={16}
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M9.5 20v-6h5v6" />
    </svg>
  );
}

export function HeroSection({ onRoomChange }: HeroSectionProps) {
  const [activeRoom, setActiveRoom] = useState<RoomKey>("zion");

  const room = HERO_ROOMS[activeRoom];

  const handleSelectRoom = (key: RoomKey) => {
    if (key === activeRoom) return;
    const next = HERO_ROOMS[key];
    setActiveRoom(key);
    onRoomChange?.(`This is ${next.project} in ${next.place}. Open it to see every room.`);
  };

  return (
    <section className="hp-hero" id="hp-hero">
      <span className="hp-tri hp-t1" />
      <span className="hp-tri hp-t2" />
      <span className="hp-tri hp-t3" />
      <div className="hp-wrap">
        <div className="hp-hg">
          <div className="hp-hg__copy">
            <div className="hp-tagpill">
              <i />
              Complete interior solutions — design to handover
            </div>
            <h1>
              Design. Build. Deliver. <em>Under one roof.</em>
            </h1>
            <p className="hp-lead">
              Transform your home or business with custom interior design and turnkey execution tailored to your vision —
              through thoughtful planning, innovative design, premium materials and flawless execution, from concept to
              completion.
            </p>
            <div className="hp-chr" style={{ marginTop: 22 }}>
              <div className="hp-chr-doll">
                <img
                  alt=""
                  className="hp-avatar-img"
                  height={128}
                  src="/assets/images/avatar-babell-wave.png?v=1"
                  width={128}
                />
              </div>
              <div className="hp-chr-bub">
                Welcome — I&apos;m <b>Babell</b>, your atelier concierge.{" "}
                <span className="hp-chr-bub__wide">Explore the commission on the right,</span>
                <span className="hp-chr-bub__narrow">Explore the commission just below,</span> or scroll on and
                I&apos;ll walk you through our process.
              </div>
            </div>
            <div className="hp-hb">
              <Link className="hp-gh" href="/contact" id="hp-hero-cta">
                Book a free consultation
              </Link>
              <a className="hp-gh2" href="#hp-how">
                See how it works →
              </a>
            </div>
          </div>

          <div className="hp-room-container">
            <div aria-label="Select room view" className="hp-room-tabs" role="tablist">
              {ROOM_TABS.map((tab) => {
                const isOn = activeRoom === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    aria-selected={isOn}
                    className={`hp-rtab${isOn ? " on" : ""}`}
                    data-room={tab.key}
                    role="tab"
                    onClick={() => handleSelectRoom(tab.key)}
                  >
                    <span className="hp-rtab-icon">
                      <TabIcon icon={tab.icon} />
                    </span>
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <Link className="hp-roomwrap" href={room.href} id="hp-room">
              <img
                alt={room.alt}
                decoding="async"
                fetchPriority="high"
                height={1200}
                id="hpRoomImg"
                sizes="(max-width: 960px) 100vw, 46vw"
                src={room.img}
                srcSet={room.srcset}
                width={1600}
              />
              <span className="hp-rlab" id="hpRoomPrompt">
                Tap any dot to explore details
              </span>
              <span id="hpHotspots">
                {room.spots.map((spot) => (
                  <span
                    key={`${activeRoom}-${spot.num}`}
                    className="hp-spot"
                    style={{ left: spot.left, top: spot.top }}
                    title={spot.t}
                  >
                    <span className="hp-hot__n">{spot.num}</span>
                  </span>
                ))}
              </span>
              <span className="hp-rcred" id="hpRoomCred">
                <b>{room.project}</b>
                <span>{room.place} · View this project →</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
