"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      lerp: 0.09,
      smoothWheel: true,
    });

    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const glow = document.querySelector<HTMLElement>(".hero-glow");
    if (glow) {
      lenis.on("scroll", (e: { scroll: number }) => {
        glow.style.transform = `translate(-50%, ${e.scroll * 0.22}px)`;
      });
    }

    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (ev) => {
        const id = a.getAttribute("href")!;
        if (id.length > 1) {
          const target = document.querySelector(id);
          if (target) {
            ev.preventDefault();
            lenis.scrollTo(target as HTMLElement, {
              offset: -70,
              duration: 1.4,
            });
          }
        }
      });
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
