"use client";
import { useEffect } from "react";

export default function TallyLoader() {
  useEffect(() => {
    const w = window as unknown as { Tally?: { loadEmbeds: () => void } };
    if (w.Tally) {
      w.Tally.loadEmbeds();
    } else {
      document
        .querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]")
        .forEach((f) => {
          if (!f.src) {
            f.src = f.getAttribute("data-tally-src") || "";
          }
        });
    }
  }, []);

  return null;
}
