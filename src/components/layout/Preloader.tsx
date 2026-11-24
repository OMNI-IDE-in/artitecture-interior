"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const alreadySeen = document.documentElement.classList.contains("intro-seen");

    if (!preloader || alreadySeen) {
      document.body.classList.remove("intro-lock");
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const INTRO_MS = reduced ? 450 : 1200;

    const endIntro = () => {
      document.body.classList.remove("intro-lock");
      try {
        sessionStorage.setItem("babellIntroSeen", "1");
      } catch {
        // private mode
      }
    };

    const remaining = Math.max(0, INTRO_MS - performance.now());
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (remaining > 80) {
      document.body.classList.add("intro-lock");
      timer = setTimeout(endIntro, remaining);
    } else {
      endIntro();
    }

    const skipIntro = () => {
      setHidden(true);
      endIntro();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skipIntro();
        document.removeEventListener("keydown", onKey);
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      if (timer) clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleSkip = () => {
    setHidden(true);
    document.body.classList.remove("intro-lock");
    try {
      sessionStorage.setItem("babellIntroSeen", "1");
    } catch {
      // private mode
    }
  };

  return (
    <div
      id="preloader"
      className={`preloader${hidden ? " preloader--hidden" : ""}`}
      role="presentation"
      aria-hidden="true"
      onClick={handleSkip}
    >
      <div className="preloader__panel preloader__panel--top" />
      <div className="preloader__panel preloader__panel--bottom" />

      <div className="preloader__inner">
        <div className="preloader__mark">
          <img src="/assets/images/logo.webp?v=2" alt="" width={96} height={96} style={{ borderRadius: "50%" }} />
        </div>

        <div className="preloader__word">
          <span>B</span>
          <span>A</span>
          <span>B</span>
          <span>E</span>
          <span>L</span>
          <span>L</span>
        </div>

        <div className="preloader__rule" />

        <div className="preloader__sub">Group · Design Atelier</div>
      </div>
    </div>
  );
}
