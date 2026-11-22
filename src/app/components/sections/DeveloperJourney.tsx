"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GitCommit, Terminal, Zap, Rocket, Code2, Layers } from "lucide-react";

const milestones = [
  {
    year: "2021",
    tag: "init",
    title: "First Line of Code",
    body: "Wrote my first HTML page — no frameworks, no tooling, just curiosity and a text editor. That curiosity never stopped.",
    icon: Terminal,
    accent: "amber",
    dot: "bg-amber-400",
    glow: "shadow-[0_0_16px_rgba(245,158,11,0.5)]",
    border: "border-amber-500/30",
    tagColor: "text-amber-300 bg-amber-950/60 border-amber-700/40",
  },
  {
    year: "2022",
    tag: "learn",
    title: "JavaScript — The Real Thing",
    body: "Went deep into vanilla JS: closures, the event loop, async/await, DOM manipulation. Stopped copy-pasting; started actually understanding.",
    icon: Code2,
    accent: "orange",
    dot: "bg-orange-400",
    glow: "shadow-[0_0_16px_rgba(249,115,22,0.5)]",
    border: "border-orange-500/30",
    tagColor: "text-orange-300 bg-orange-950/60 border-orange-700/40",
  },
  {
    year: "2022–23",
    tag: "build",
    title: "React, Components & State",
    body: "Picked up React and fell in love with component thinking. Built UI after UI — forms, dashboards, auth flows — until patterns clicked instinctively.",
    icon: Layers,
    accent: "amber",
    dot: "bg-amber-300",
    glow: "shadow-[0_0_16px_rgba(252,211,77,0.4)]",
    border: "border-amber-400/30",
    tagColor: "text-amber-200 bg-amber-950/60 border-amber-700/40",
  },
  {
    year: "2023",
    tag: "ship",
    title: "First Real Projects",
    body: "Built and shipped Filee (a drag-and-drop file manager), Task Manager, and Recipe Portal. Real users, real feedback, real edge cases. No tutorials to hide behind.",
    icon: GitCommit,
    accent: "rose",
    dot: "bg-rose-400",
    glow: "shadow-[0_0_16px_rgba(251,113,133,0.5)]",
    border: "border-rose-500/30",
    tagColor: "text-rose-300 bg-rose-950/60 border-rose-700/40",
  },
  {
    year: "2024",
    tag: "scale",
    title: "Next.js, TypeScript & Production Architecture",
    body: "Moved to Next.js App Router with TypeScript strict mode. Learned what performance actually means — not Lighthouse scores, but real UX impact at the architecture level.",
    icon: Zap,
    accent: "orange",
    dot: "bg-orange-300",
    glow: "shadow-[0_0_16px_rgba(249,115,22,0.5)]",
    border: "border-orange-500/30",
    tagColor: "text-orange-200 bg-orange-950/60 border-orange-700/40",
  },
  {
    year: "2025",
    tag: "open",
    title: "AI-Enhanced Apps & Open to Roles",
    body: "Built StudySphere AI — a full AI study platform. Currently open to frontend engineering roles where I can build fast, ship real things, and obsess over the details that actually matter.",
    icon: Rocket,
    accent: "amber",
    dot: "bg-amber-400",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.6)]",
    border: "border-amber-500/40",
    tagColor: "text-amber-300 bg-amber-950/60 border-amber-600/40",
    isLast: true,
  },
];

export default function DeveloperJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} id="journey" className="py-24 max-w-5xl mx-auto px-6 relative">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="font-mono text-xs text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3.5 py-1 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5">
          <Terminal size={12} className="text-amber-400" />
          git log --oneline
        </span>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent mt-4 inline-block">
          How I Got Here
        </h2>
        <p className="mt-3 text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
          Not a bootcamp grad. Not a theory student. I learned by building — one real project at a time.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Animated vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-amber-400 via-orange-400 to-rose-500 rounded-full"
          />
        </div>

        <div className="space-y-14">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row md:items-center gap-6 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot — desktop center, mobile left */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${m.dot} ${m.glow} border-2 border-slate-950`} />
                </div>

                {/* Year label — hidden on mobile, shown on tablet+ */}
                <div
                  className={`hidden md:flex md:w-1/2 ${
                    isEven ? "justify-end pr-10" : "justify-start pl-10"
                  } items-center`}
                >
                  <span className="font-mono text-3xl font-black text-slate-700 select-none">
                    {m.year}
                  </span>
                </div>

                {/* Card */}
                <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${isEven ? "md:pl-10" : "md:pr-10"}`}>
                  <div
                    className={`group relative p-6 rounded-2xl border ${m.border} bg-[#161b22]/70 backdrop-blur-xl hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(245,158,11,0.12)] transition-all duration-300`}
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-amber-500/8 rounded-2xl transition duration-500 pointer-events-none" />

                    {/* Top row */}
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-800/30 text-amber-400 group-hover:scale-110 transition-transform">
                          <Icon size={18} />
                        </div>
                        <div>
                          {/* Mobile year */}
                          <div className="font-mono text-xs text-slate-500 md:hidden mb-0.5">{m.year}</div>
                          <h3 className="text-base font-semibold text-white group-hover:text-amber-200 transition-colors leading-tight">
                            {m.title}
                          </h3>
                        </div>
                      </div>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded border uppercase tracking-widest shrink-0 ${m.tagColor}`}
                      >
                        {m.tag}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">{m.body}</p>

                    {m.isLast && (
                      <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
                          Available for Engineering Roles
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
