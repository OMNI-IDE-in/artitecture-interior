"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { buildWhatsAppUrl, STUDIO } from "@/data/site";

const HP_GUIDE = [
  {
    sel: ".hp-hero",
    pose: "avatar-babell-wave.png?v=1",
    txt: "Four real commissions up there — select any tab to preview the residence.",
  },
  {
    sel: ".prb",
    pose: "avatar-babell-point.png?v=1",
    txt: "Four concerns we hear often — and how Babell Group eliminates each one.",
  },
  {
    sel: "#hp-how",
    pose: "avatar-babell-point.png?v=1",
    txt: "Eight structured stages, from private consultation through to white-glove handover.",
  },
  {
    sel: "#hp-quiz",
    pose: "avatar-babell-ask.png?v=1",
    txt: "Three quick questions to define your architectural direction.",
  },
  {
    sel: "#hp-pk",
    pose: "avatar-babell-thumb.png?v=1",
    txt: "Transparent starting tiers for every residence scale — published openly.",
  },
  {
    sel: "#hp-tst",
    pose: "avatar-babell-thumb.png?v=1",
    txt: "Real commissions, private clients. Read their perspectives.",
  },
  {
    sel: "#hp-faq",
    pose: "avatar-babell-ask.png?v=1",
    txt: "Most questions get answered right here.",
  },
  {
    sel: "#hp-go",
    pose: "avatar-babell-yay.png?v=1",
    txt: "Ready when you are — a principal designer will reach out.",
  },
];

export function MascotGuide({ customMessage }: { customMessage: string | null }) {
  const [dismissed, setDismissed] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [pose, setPose] = useState("avatar-babell-wave.png?v=1");
  const [guideText, setGuideText] = useState(
    "Welcome — I'm Babell. Scroll on and I'll guide you through our atelier process."
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolledPastHero(window.scrollY > 340);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (customMessage) {
      setGuideText(customMessage);
    }
  }, [customMessage]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const g = HP_GUIDE.find((x) => document.querySelector(x.sel) === en.target);
          if (!g) return;
          setPose(g.pose);
          setGuideText(g.txt);
        });
      },
      { threshold: 0.1, rootMargin: "-20% 0px -20% 0px" }
    );

    HP_GUIDE.forEach((g) => {
      const el = document.querySelector(g.sel);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  const handleActivate = () => {
    if (dismissed) {
      setDismissed(false);
    } else {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document
        .getElementById("hp-go")
        ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    }
  };

  const isHidden = dismissed || (!scrolledPastHero && !customMessage);

  return (
    <div id="hpMascot" className={isHidden ? "hide" : undefined}>
      <div className="hp-mbub" id="hpMbub">
        <button
          type="button"
          className="hp-mclose"
          id="hpMclose"
          aria-label="Hide guide"
          onClick={(e) => {
            e.stopPropagation();
            setDismissed(true);
          }}
        >
          ✕
        </button>
        <span id="hpMtxt">{guideText}</span>
      </div>
      <div
        className="hp-mdoll"
        id="hpMdoll"
        role="button"
        tabIndex={0}
        aria-label="Design guide"
        onClick={handleActivate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleActivate();
          }
        }}
      >
        <img
          src={`/assets/images/${pose}`}
          alt=""
          className="hp-avatar-img"
          id="hpMpose"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
}

export function StickyMobileCta() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const syncStickyHeight = () => {
      const h = bar.offsetHeight;
      if (h > 0) {
        document.documentElement.style.setProperty("--sticky-cta-h", `${h}px`);
      }
    };
    syncStickyHeight();
    window.addEventListener("resize", syncStickyHeight, { passive: true });
    let ro: ResizeObserver | undefined;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(syncStickyHeight);
      ro.observe(bar);
    }
    return () => {
      window.removeEventListener("resize", syncStickyHeight);
      ro?.disconnect();
    };
  }, []);

  return (
    <div className="hp-sticky" ref={barRef}>
      <a href={STUDIO.phonePrimaryHref}>📞 Call</a>
      <Link href="/contact" className="hp-st-t">
        Free consultation
      </Link>
      <a
        href={buildWhatsAppUrl("Hi! I'd like to know more about your interior design services.")}
        className="hp-st-g"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}
