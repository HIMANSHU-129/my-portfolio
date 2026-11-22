"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateMouse = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-[420px] h-[420px] rounded-full blur-[140px] opacity-15 bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-400 z-10 transition-transform duration-100 ease-out"
      style={{
        transform: `translate(${position.x - 210}px, ${position.y - 210}px)`,
      }}
    />
  );
}
