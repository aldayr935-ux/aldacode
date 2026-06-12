"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const selector = [
      ".service-card",
      ".portfolio-card",
      ".about__visual",
      ".about__content",
      ".contact__info",
      ".contact__form",
      ".section__header",
    ].join(", ");

    const elements = document.querySelectorAll<HTMLElement>(selector);

    elements.forEach((el) => {
      el.classList.add("reveal");
      const siblings = Array.from(el.parentElement?.children ?? []);
      const idx = siblings.indexOf(el);
      if (idx > 0 && idx <= 5) el.classList.add(`reveal-delay-${idx}`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
