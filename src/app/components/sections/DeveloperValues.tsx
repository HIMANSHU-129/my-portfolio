"use client";

import { motion } from "framer-motion";
import { Zap, Eye, Package, RefreshCw } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "I learn fast, ship faster.",
    quote: "Speed is not recklessness — it is clarity.",
    body: "When I pick up a new tool or framework, I do not read documentation for a week. I build something with it. Learning by shipping means I arrive faster and understand deeper than someone who studied it.",
    accent: "amber",
    border: "border-amber-500/25",
    iconBg: "bg-amber-950/50 border-amber-800/40",
    iconColor: "text-amber-400",
    quoteColor: "text-amber-300",
    glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.13)]",
  },
  {
    icon: Eye,
    title: "Details are where the work is.",
    quote: "Users notice what you think they won't.",
    body: "The micro-interactions, the loading states, the error messages that actually make sense — that is where the gap between a decent developer and a great one lives. I obsess over these not because I am told to, but because I cannot not.",
    accent: "orange",
    border: "border-orange-500/25",
    iconBg: "bg-orange-950/50 border-orange-800/40",
    iconColor: "text-orange-400",
    quoteColor: "text-orange-300",
    glow: "hover:shadow-[0_0_40px_rgba(249,115,22,0.13)]",
  },
  {
    icon: Package,
    title: "Real projects over tutorials.",
    quote: "Shipping something imperfect beats the perfect project you never built.",
    body: "I have learned more from deploying Filee and fixing a production bug at midnight than from any course. Building real things with real constraints is the only honest way to grow as a developer.",
    accent: "rose",
    border: "border-rose-500/25",
    iconBg: "bg-rose-950/50 border-rose-800/40",
    iconColor: "text-rose-400",
    quoteColor: "text-rose-300",
    glow: "hover:shadow-[0_0_40px_rgba(251,113,133,0.13)]",
  },
  {
    icon: RefreshCw,
    title: "Good enough is never finished.",
    quote: "Every deployed codebase is still a draft.",
    body: "I revisit what I have built. I refactor when something itches. I read about why a pattern exists, not just how to use it. Continuous improvement is not a virtue — it is just what engineering actually requires.",
    accent: "amber",
    border: "border-amber-500/20",
    iconBg: "bg-amber-950/50 border-amber-800/40",
    iconColor: "text-amber-300",
    quoteColor: "text-amber-200",
    glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.10)]",
  },
];

const standFor = [
  { label: "Clean code over clever code" },
  { label: "Honest timelines over optimistic promises" },
  { label: "UX first, then architecture" },
  { label: "British English in the codebase comments" },
  { label: "Zero tolerance for console.log in production" },
  { label: "Semantic HTML as a foundation, not an afterthought" },
];

export default function DeveloperValues() {
  return (
    <section id="values" className="py-24 max-w-6xl mx-auto px-6 relative">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3.5 py-1 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          developer.values.ts
        </span>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent mt-4 inline-block">
          What I Stand For
        </h2>
        <p className="mt-3 text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
          Not a list of skills. Not a progress bar. These are the actual principles I build by — honestly held, consistently applied.
        </p>
      </motion.div>

      {/* 4 value cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-7 rounded-2xl border ${v.border} bg-[#161b22]/70 backdrop-blur-xl hover:-translate-y-1 ${v.glow} transition-all duration-300`}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-amber-500/6 rounded-2xl transition duration-500 pointer-events-none" />

              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-2.5 rounded-xl ${v.iconBg} border ${v.iconColor} group-hover:scale-110 transition-transform shrink-0`}>
                  <Icon size={20} className={v.iconColor} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-amber-100 transition-colors leading-snug">
                    {v.title}
                  </h3>
                  <p className={`font-mono text-xs mt-1 ${v.quoteColor} italic`}>
                    &ldquo;{v.quote}&rdquo;
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">{v.body}</p>
            </motion.div>
          );
        })}
      </div>

      {/* "I stand for" strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl border border-slate-800 bg-[#161b22]/50 backdrop-blur-md"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-4">
          // Additional principles
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {standFor.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0d1117] border border-slate-800 hover:border-amber-800/40 transition group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b] shrink-0" />
              <span className="text-xs text-slate-300 group-hover:text-slate-100 transition-colors">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
