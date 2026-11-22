"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { Globe, Laptop, Sparkles, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "StudySphere AI",
      category: "Full-Stack AI Application",
      tagline: "Academic Operating System for Students",
      description:
        "AI-powered academic productivity and study companion built with Next.js, Electron, Tailwind CSS, and Gemini AI to streamline student learning, flashcard generation, and note synthesis.",
      techNames: ["Next.js", "Electron", "TypeScript", "Gemini AI", "Tailwind CSS"],
      githubUrl: "https://github.com/HIMANSHU-129/studysphere-ai",
      demoUrl: "https://github.com/HIMANSHU-129/studysphere-ai#readme",
      demoLabel: "Live Showcase",
      isLive: true,
      status: "PRODUCTION BUILD",
      featured: true,
      icon: Globe,
      metrics: "Sub-Second AI Response • Electron Desktop Support",
    },
    {
      title: "Filee",
      category: "Native Desktop Utility",
      tagline: "Offline Privacy-Focused Windows File Converter",
      description:
        "Fast, local file conversions for images, documents, audio, and video with zero cloud dependencies. Supports Multi-Image to PDF and PDF to Image conversion locally on Windows with zero data telemetry.",
      techNames: ["Java", "Desktop App", "Offline-First", "Local Processing"],
      githubUrl: "https://github.com/HIMANSHU-129/Filee",
      demoUrl: "https://github.com/HIMANSHU-129/Filee/releases",
      demoLabel: "Download Release (v1.2)",
      isLive: true,
      status: "STABLE RELEASE",
      featured: true,
      icon: Laptop,
      metrics: "100% Offline • 0KB Cloud Telemetry",
    },
    {
      title: "Waste-Wise",
      category: "Web Platform",
      tagline: "Waste Classification & Eco Management Platform",
      description:
        "A TypeScript-based sustainable management solution to categorize, monitor, and encourage responsible waste management and ecological awareness through real-time data.",
      techNames: ["TypeScript", "Next.js", "Tailwind CSS", "Web Architecture"],
      githubUrl: "https://github.com/HIMANSHU-129/Waste-Wise",
      demoUrl: "https://github.com/HIMANSHU-129/Waste-Wise#readme",
      demoLabel: "View Demo",
      isLive: true,
      status: "ACTIVE REPO",
      featured: false,
      icon: Globe,
    },
    {
      title: "Task Manager Python",
      category: "Desktop Suite",
      tagline: "Productivity Task Management Suite",
      description:
        "A desktop task manager engineered with an intuitive UI/UX for smooth workflow organization, task tracking, state persistence, and daily productivity enhancement.",
      techNames: ["Python", "UI/UX Architecture", "Workflow Automation"],
      githubUrl: "https://github.com/HIMANSHU-129/task-manager-python",
      demoUrl: "https://github.com/HIMANSHU-129/task-manager-python#readme",
      demoLabel: "View Demo",
      isLive: true,
      status: "OPEN SOURCE",
      featured: false,
      icon: Laptop,
    },
    {
      title: "Recipe Portal",
      category: "Interactive Web Portal",
      tagline: "Interactive Culinary Discovery & Recipe Search",
      description:
        "Modern web portal with dynamic recipe search, ingredients filtering, and responsive dish cards designed for seamless user interaction and instantaneous client filtering.",
      techNames: ["JavaScript", "HTML5", "CSS3", "DOM API"],
      githubUrl: "https://github.com/HIMANSHU-129/Recipe-Portal",
      demoUrl: "https://github.com/HIMANSHU-129/Recipe-Portal#readme",
      demoLabel: "Live Preview",
      isLive: true,
      status: "BROWSER READY",
      featured: false,
      icon: Globe,
    },
    {
      title: "Royal Chess",
      category: "Browser Canvas Game",
      tagline: "Interactive Web-Based Chess Game",
      description:
        "Full-featured interactive web chess game with move validation, board state rendering, and responsive gameplay logic on all screen sizes with zero dependencies.",
      techNames: ["JavaScript", "HTML5 Canvas", "Game Engine", "DOM API"],
      githubUrl: "https://github.com/HIMANSHU-129/Royal-Chess",
      demoUrl: "https://github.com/HIMANSHU-129/Royal-Chess#readme",
      demoLabel: "Play / Demo",
      isLive: true,
      status: "BROWSER GAME",
      featured: false,
      icon: Globe,
    },
  ];

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5">
          <Sparkles size={12} className="text-amber-400" />
          Proof of Work & Deployments
        </span>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent mt-3 inline-block">
          Featured Engineering
        </h2>
        <p className="mt-3 text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
          Production applications, systems, and open-source software built by Himanshu Singh — with verified live demos and open repositories.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={`group relative p-7 rounded-2xl border ${
                project.featured
                  ? "border-amber-500/40 bg-[#161b22]/90 shadow-[0_0_30px_rgba(245,158,11,0.08)]"
                  : "border-slate-800 bg-[#161b22]/70"
              } backdrop-blur-xl hover:border-amber-500/60 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(245,158,11,0.18)] transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Glowing amber backdrop on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-rose-500/10 rounded-2xl pointer-events-none"></div>

              <div>
                {/* HUD Header Strip */}
                <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider font-semibold">
                      {project.status}
                    </span>
                  </div>

                  {project.featured ? (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2 py-0.5 rounded-full">
                      Flagship Project
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {project.category}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <Icon size={16} className="text-amber-400 shrink-0" />
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs font-mono text-amber-400/90 mb-3">
                  {project.tagline}
                </p>

                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="mb-4 px-3 py-1.5 rounded-lg bg-[#0d1117] border border-slate-800 text-[11px] font-mono text-amber-300/90 flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 relative z-10">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techNames.map((name) => (
                    <span
                      key={name}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0d1117] text-slate-300 border border-slate-800"
                    >
                      {name}
                    </span>
                  ))}
                </div>

                {/* DUAL ACTION BUTTONS: LIVE DEMO + GITHUB REPO */}
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-slate-950 transition-all font-mono shadow-[0_0_12px_rgba(245,158,11,0.25)] hover:scale-[1.02] active:scale-95"
                  >
                    {project.demoLabel.includes("Download") ? (
                      <FaDownload size={11} />
                    ) : (
                      <FaExternalLinkAlt size={10} />
                    )}
                    <span className="truncate">{project.demoLabel}</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#0d1117] hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all font-mono active:scale-95"
                  >
                    <FaGithub size={13} className="text-amber-400" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/HIMANSHU-129?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-amber-500/30 bg-[#161b22] text-amber-200 hover:text-black hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 hover:border-transparent transition shadow-[0_0_20px_rgba(245,158,11,0.2)] text-sm font-mono font-medium"
        >
          <FaGithub size={16} />
          <span>Explore All Repositories (@HIMANSHU-129)</span>
          <FaExternalLinkAlt size={12} className="ml-1" />
        </a>
      </div>
    </section>
  );
}
