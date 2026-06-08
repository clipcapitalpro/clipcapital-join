"use client";
import { useEffect } from "react";

export default function TallyLoader() {
  useEffect(() => {
    const w = window as unknown as { Tally?: { loadEmbeds: () => void } };

    const tryLoad = () => {
      if (w.Tally) {
        w.Tally.loadEmbeds();
        return true;
      }
      return false;
    };

    if (tryLoad()) return;

    const interval = setInterval(() => {
      if (tryLoad()) clearInterval(interval);
    }, 200);
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
