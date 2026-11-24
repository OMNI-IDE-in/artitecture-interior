"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: "0px 0px 80px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    const hpRevealEls = document.querySelectorAll(".hp-reveal");
    const hpRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            hpRevealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: "0px 0px 80px 0px" }
    );
    hpRevealEls.forEach((el) => hpRevealObserver.observe(el));

    const avatarEls = document.querySelectorAll(".hp-chr");
    const avatarObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            avatarObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 60px 0px" }
    );
    avatarEls.forEach((el) => avatarObserver.observe(el));

    const statNumbers = document.querySelectorAll(".stat-item__number");
    const animateCounter = (element: Element) => {
      const target = parseInt(element.getAttribute("data-count") || "0", 10);
      const suffix = element.getAttribute("data-suffix") || "";
      const duration = 1200;
      const start = performance.now();

      const update = (currentTime: number) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        element.textContent = `${current}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent = `${target}${suffix}`;
        }
      };

      requestAnimationFrame(update);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    statNumbers.forEach((el) => counterObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      hpRevealObserver.disconnect();
      avatarObserver.disconnect();
      counterObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
