"use client";
import { useEffect } from "react";

export default function SmoothAnchors() {
  useEffect(() => {
    const duration = 600;
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    function animateTo(targetY: number) {
      const startY = window.scrollY;
      const dist = targetY - startY;
      let start: number | null = null;
      function step(ts: number) {
        if (start === null) start = ts;
        const t = Math.min((ts - start) / duration, 1);
        window.scrollTo(0, startY + dist * ease(t));
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const a = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      animateTo(el.getBoundingClientRect().top + window.scrollY);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
