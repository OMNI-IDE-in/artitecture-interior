"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { ProjectShot } from "@/data/catalog";

export function ProjectGalleryLightbox({ shots }: { shots: ProjectShot[] }) {
  const searchParams = useSearchParams();
  const imgParam = searchParams.get("img");

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const figureRefs = useRef<(HTMLElement | null)[]>([]);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lbRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef(0);

  const showAt = useCallback(
    (i: number) => {
      const len = shots.length;
      if (!len) return;
      setOpenIndex(((i % len) + len) % len);
    },
    [shots.length]
  );

  const openLightbox = useCallback(
    (i: number) => {
      lastFocusedRef.current = document.activeElement as HTMLElement | null;
      showAt(i);
      document.body.style.overflow = "hidden";
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    },
    [showAt]
  );

  const closeLightbox = useCallback(() => {
    setOpenIndex(null);
    document.body.style.overflow = "";
    lastFocusedRef.current?.focus();
  }, []);

  // Deep-link support (?img=tv-unit)
  useEffect(() => {
    if (!imgParam) return;
    const matchIdx = shots.findIndex(
      (s) => s.key === imgParam || s.full.includes(`/${imgParam}-`)
    );
    if (matchIdx >= 0) {
      figureRefs.current[matchIdx]?.scrollIntoView({ behavior: "auto", block: "center" });
      openLightbox(matchIdx);
    }
  }, [imgParam, shots, openLightbox]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showAt(openIndex + 1);
      if (e.key === "ArrowLeft") showAt(openIndex - 1);
      if (e.key === "Tab" && lbRef.current) {
        const f = lbRef.current.querySelectorAll<HTMLButtonElement>("button");
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex, closeLightbox, showAt]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const currentShot = openIndex !== null ? shots[openIndex] : null;

  return (
    <>
      <div className="proj-gallery">
        {shots.map((shot, idx) => (
          <figure
            key={`${shot.key}-${idx}`}
            ref={(el) => {
              figureRefs.current[idx] = el;
            }}
            className={`proj-shot reveal${shot.wide ? " proj-shot--wide" : ""}`}
          >
            <button
              type="button"
              aria-label={`View ${shot.caption} full size`}
              className="proj-shot__btn"
              data-caption={shot.caption}
              data-full={shot.full}
              onClick={() => openLightbox(idx)}
            >
              <img
                alt={shot.alt}
                decoding="async"
                height={600}
                loading={idx < 6 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                src={shot.src}
                srcSet={shot.srcset || undefined}
                width={800}
              />
              <span aria-hidden="true" className="proj-shot__zoom">
                <svg
                  fill="none"
                  height={18}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={18}
                >
                  <circle cx={11} cy={11} r={8} />
                  <line x1={21} x2={16.65} y1={21} y2={16.65} />
                  <line x1={11} x2={11} y1={8} y2={14} />
                  <line x1={8} x2={14} y1={11} y2={11} />
                </svg>
              </span>
            </button>
            <figcaption>{shot.label}</figcaption>
          </figure>
        ))}
      </div>

      <div
        ref={lbRef}
        className="plb"
        role="dialog"
        aria-modal="true"
        aria-label="Project image viewer"
        hidden={openIndex === null}
        onClick={(e) => {
          if (e.target === lbRef.current) closeLightbox();
        }}
        onTouchStart={(e) => {
          touchStartX.current = e.changedTouches[0].screenX;
        }}
        onTouchEnd={(e) => {
          if (openIndex === null) return;
          const diff = touchStartX.current - e.changedTouches[0].screenX;
          if (Math.abs(diff) > 50) showAt(openIndex + (diff > 0 ? 1 : -1));
        }}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="plb__close"
          aria-label="Close viewer"
          onClick={closeLightbox}
        >
          &#10005;
        </button>
        <button
          type="button"
          className="plb__nav plb__nav--prev"
          aria-label="Previous image"
          onClick={() => openIndex !== null && showAt(openIndex - 1)}
        >
          &#8249;
        </button>
        <figure className="plb__stage">
          {currentShot ? (
            <img className="plb__img" src={currentShot.full} alt={currentShot.caption} />
          ) : null}
          <figcaption className="plb__cap">
            <span className="plb__caption">{currentShot?.caption ?? ""}</span>
            <span className="plb__count">
              {openIndex !== null ? `${openIndex + 1} / ${shots.length}` : ""}
            </span>
          </figcaption>
        </figure>
        <button
          type="button"
          className="plb__nav plb__nav--next"
          aria-label="Next image"
          onClick={() => openIndex !== null && showAt(openIndex + 1)}
        >
          &#8250;
        </button>
      </div>
    </>
  );
}
