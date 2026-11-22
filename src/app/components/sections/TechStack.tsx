"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
} from "react-icons/si";

export default function TechStack() {
  const technologies = [
    {
      name: "React 19",
      icon: SiReact,
      badge: "Core UI",
      brandColor: "text-[#61DAFB]",
      note: "Component lifecycle, state synchronization, hooks architecture, and optimistic UI patterns.",
    },
    {
      name: "Next.js 16",
      icon: SiNextdotjs,
      badge: "Framework",
      brandColor: "text-white",
      note: "App Router, SSR, Server Components, Route Handlers, and static rendering optimization.",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      badge: "Strict Typing",
      brandColor: "text-[#3178C6]",
      note: "Compile-time safety, interface definitions, generative types, and robust refactoring.",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      badge: "Language",
      brandColor: "text-[#F7DF1E]",
      note: "ESNext syntax, asynchronous event loop, browser APIs, and high-performance algorithms.",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      badge: "Styling Engine",
      brandColor: "text-[#06B6D4]",
      note: "Utility design tokens, fluid layouts, custom themes, and zero-runtime stylesheet generation.",
    },
    {
      name: "HTML5 Semantic",
      icon: SiHtml5,
      badge: "DOM Standard",
      brandColor: "text-[#E34F26]",
      note: "Accessible DOM structure, WCAG a11y compliance, meta tags, and search engine discoverability.",
    },
    {
      name: "Modern CSS3",
      icon: SiCss,
      badge: "Layouts",
      brandColor: "text-[#1572B6]",
      note: "Subgrid, Flexbox, container queries, CSS variables, and GPU-accelerated keyframe animations.",
    },
    {
      name: "Git & DevOps",
      icon: SiGit,
      badge: "Workflow",
      brandColor: "text-[#F05032]",
      note: "Branching strategies, CI/CD pipeline triggers, atomic commit history, and code reviews.",
    },
  ];

  return (
    <section id="techstack" className="py-24 max-w-6xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-amber-400 bg-amber-950/60 border border-amber-800/50 px-3 py-1 rounded-full uppercase tracking-widest">
          Stack Architecture
        </span>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent mt-3 inline-block">
          Technical Arsenal
        </h2>
        <p className="mt-3 text-slate-400 text-sm max-w-lg mx-auto">
          Modern production tools selected for performance, maintainability, and enterprise reliability.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border border-slate-800 bg-[#161b22]/70 backdrop-blur-xl hover:border-amber-500/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300"
            >
              {/* Amber Glow Overlay on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-amber-500/10 rounded-2xl transition duration-300 pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-800/40 text-amber-400 group-hover:scale-110 group-hover:text-orange-300 transition-all duration-300">
                    <Icon size={26} className={item.brandColor} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-800/50 px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white group-hover:text-amber-200 transition-colors">
                  {item.name}
                </h3>
              </div>

              {/* Informative section below each tech stack element */}
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.note}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
