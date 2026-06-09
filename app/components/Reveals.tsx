"use client";
import { useEffect } from "react";

export default function Reveals() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(
              () => e.target.classList.add("in"),
              (i % 4) * 50
            );
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -10% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
