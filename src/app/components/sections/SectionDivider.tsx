"use client";

export default function SectionDivider() {
  return (
    <div className="relative w-full h-16 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Subtle Warm Amber Divider Line */}
      <div className="absolute w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

      {/* Center minimalist glowing diamond */}
      <div className="absolute w-6 h-6 bg-amber-500/20 rounded-full blur-md animate-pulse"></div>
      <div className="absolute w-1.5 h-1.5 rotate-45 bg-amber-400 shadow-[0_0_8px_#f59e0b]"></div>
    </div>
  );
}
