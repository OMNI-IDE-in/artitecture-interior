"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { buildWhatsAppUrl, QUIZ_PROFILES, QUIZ_STEPS } from "@/data/site";
import { assetUrl } from "@/lib/asset";

type ProfileKey = keyof typeof QUIZ_PROFILES;

const ROOM_LABELS: Record<string, string> = {
  kitchen: "the kitchen",
  living: "the living room",
  bedroom: "the bedroom",
  "whole-home": "the whole home",
};

export function StyleQuizSection() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [firstPick, setFirstPick] = useState<ProfileKey | null>(null);
  const [room, setRoom] = useState<string | null>(null);
  const [finishedProfile, setFinishedProfile] = useState<ProfileKey | null>(null);
  const resultRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleOption = (key: string, capture: "score" | "room") => {
    let nextScores = scores;
    let nextFirst = firstPick;
    let nextRoom = room;

    if (capture === "room") {
      nextRoom = key;
      setRoom(key);
    } else {
      nextScores = { ...scores, [key]: (scores[key] || 0) + 1 };
      setScores(nextScores);
      if (step === 0) {
        nextFirst = key as ProfileKey;
        setFirstPick(nextFirst);
      }
    }

    const nextStep = step + 1;
    if (nextStep < QUIZ_STEPS.length) {
      setStep(nextStep);
      return;
    }

    let best: ProfileKey = nextFirst || "aesthetic";
    let bestScore = -1;
    (Object.keys(nextScores) as ProfileKey[]).forEach((k) => {
      const s = nextScores[k] || 0;
      if (s > bestScore || (s === bestScore && k === nextFirst)) {
        best = k;
        bestScore = s;
      }
    });

    setFinishedProfile(best);
    setTimeout(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      resultRefs.current[best]?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "center",
      });
    }, 30);
  };

  const resetQuiz = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(0);
    setScores({});
    setFirstPick(null);
    setRoom(null);
    setFinishedProfile(null);
  };

  const roomLabel = room ? ROOM_LABELS[room] || "" : "";

  return (
    <section className="hp-section hp-band" id="hp-quiz">
      <div className="hp-wrap">
        <div className="hp-shead hp-reveal" style={{ textAlign: "center" }}>
          <div className="hp-kick">60-second style finder</div>
          <h2>
            Not sure what you like? <em>Let&apos;s narrow it down.</em>
          </h2>
          <div className="hp-chr" style={{ marginTop: 16, justifyContent: "center" }}>
            <div className="hp-chr-doll">
              <img
                alt=""
                className="hp-avatar-img"
                height={128}
                src={assetUrl("/assets/images/avatar-babell-ask.png?v=1")}
                width={128}
              />
            </div>
            <div className="hp-chr-bub">
              Three quick questions — then we&apos;ll talk it through properly at your consultation.
            </div>
          </div>
        </div>

        <div className="hp-quiz" id="hpQz">
          {QUIZ_STEPS.map((q, idx) => (
            <div
              key={q.label}
              className={`qz-step${finishedProfile === null && step === idx ? " on" : ""}`}
              data-step={idx}
            >
              <div className="hp-qn">{q.label}</div>
              <h3>{q.question}</h3>
              <div className="hp-qops">
                {q.options.map((opt) => (
                  <button
                    key={`${idx}-${opt.key}`}
                    type="button"
                    className="hp-qo"
                    data-capture={opt.capture}
                    data-key={opt.key}
                    onClick={() => handleOption(opt.key, opt.capture)}
                  >
                    <span aria-hidden="true" className="hp-qo__e">
                      {opt.emoji}
                    </span>
                    <span>{opt.text}</span>
                  </button>
                ))}
              </div>
              <div className="hp-qbar">
                <i style={{ width: q.progress }} />
              </div>
            </div>
          ))}

          {(Object.keys(QUIZ_PROFILES) as ProfileKey[]).map((key) => {
            const prof = QUIZ_PROFILES[key];
            const isOn = finishedProfile === key;
            const waMsg = `Hi! I used the style finder on your website. My priority is "${prof.title}"${
              roomLabel ? ` and I would like to start with ${roomLabel}` : ""
            }. I would like to book a free consultation.`;
            const bookHref = `/contact?style=${encodeURIComponent(key)}${
              room ? `&room=${encodeURIComponent(room)}` : ""
            }`;

            return (
              <div
                key={key}
                ref={(el) => {
                  resultRefs.current[key] = el;
                }}
                className={`qz-result${isOn ? " on" : ""}`}
                data-profile={key}
              >
                <div aria-hidden="true" className="hp-em">
                  {prof.emoji}
                </div>
                <div className="hp-qn">Your priority looks like</div>
                <h3>{prof.title}</h3>
                <p className="qz-result__lead">{prof.lead}</p>
                <p className="qz-result__room" data-room-line="" hidden={!roomLabel}>
                  {roomLabel ? `You would like to start with ${roomLabel}.` : ""}
                </p>
                <p>{prof.body}</p>
                <ul className="qz-does">
                  {prof.bullets.map((b) => (
                    <li key={b}>
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
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="hp-qcta">
                  <a
                    className="hp-btn"
                    data-wa=""
                    href={buildWhatsAppUrl(waMsg)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Discuss this on WhatsApp
                  </a>
                  <Link className="hp-gh2" data-book="" href={bookHref}>
                    Book a free consultation
                  </Link>
                </div>
                <p className="qz-retake">
                  <a data-retake="" href="#hp-quiz" onClick={resetQuiz}>
                    Start again
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
