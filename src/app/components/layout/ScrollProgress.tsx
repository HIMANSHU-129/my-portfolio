"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScroll(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2.5px] z-[9999] pointer-events-none bg-slate-900/40">
      <div
        className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 shadow-[0_0_8px_#f59e0b] transition-all duration-100 ease-out"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
