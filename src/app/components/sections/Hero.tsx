"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Terminal, Code, Sparkles, Flame, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16"
    >
      {/* FLOATING DEVELOPER BADGES */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-28 left-20 animate-float">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-500/30 bg-[#161b22]/90 backdrop-blur shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span className="font-mono text-xs text-amber-300">Next.js 16 + React 19</span>
          </div>
        </div>

        <div className="absolute top-44 right-24 animate-float-delay">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-orange-500/30 bg-[#161b22]/90 backdrop-blur shadow-[0_0_15px_rgba(249,115,22,0.15)]">
            <Terminal size={14} className="text-orange-400" />
            <span className="font-mono text-xs text-orange-300">TypeScript Strict Mode</span>
          </div>
        </div>

        <div className="absolute bottom-32 left-28 animate-float-slow">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-rose-500/30 bg-[#161b22]/90 backdrop-blur shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <Flame size={14} className="text-rose-400" />
            <span className="font-mono text-xs text-rose-300">Sub-Second Core Vitals</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl w-full grid md:grid-cols-12 gap-12 items-center px-6 relative z-10">
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Available for Software Engineering Roles
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent">
              Himanshu Singh
            </span>
          </h1>

          {/* CODE TERMINAL SUBTITLE */}
          <div className="flex items-center gap-2 font-mono text-base sm:text-lg text-slate-300 bg-[#161b22]/80 border border-slate-800 px-4 py-2.5 rounded-xl w-fit">
            <span className="text-amber-400 select-none">$</span>
            <span className="typing-text text-amber-200">
              Frontend Engineer & App Architect
            </span>
          </div>

          <p className="text-slate-300 text-base leading-relaxed max-w-xl">
            I learn fast, ship faster, and obsess over the details that matter. 
            Frontend engineer specializing in <span className="text-amber-300 font-medium">React 19</span>, <span className="text-orange-300 font-medium">Next.js App Router</span>, 
            and <span className="text-rose-300 font-medium">TypeScript</span> — turning complex requirements into snappy, maintainable production software.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 hover:from-amber-300 hover:to-rose-300 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Explore Projects
            </a>

            <a
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-amber-500/40 bg-amber-950/20 hover:bg-amber-950/40 hover:border-amber-400 text-amber-200 font-mono text-sm transition-all shadow-[0_0_15px_rgba(245,158,11,0.15)] active:scale-95"
            >
              <FileText size={15} className="text-amber-400" />
              <span>Resume / CV</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg border border-slate-700 bg-[#161b22] hover:border-slate-500 hover:text-white text-slate-300 font-mono text-sm active:scale-95 transition-all"
            >
              &lt;DispatchEnquiry /&gt;
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-6 pt-4 text-slate-400 border-t border-slate-800/80">
            <a
              href="https://github.com/HIMANSHU-129"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-amber-400 transition group text-sm font-mono"
            >
              <FaGithub size={18} className="group-hover:text-amber-400 transition" />
              <span>github.com/HIMANSHU-129</span>
            </a>

            <a
              href="https://www.linkedin.com/in/profile-himanshu-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-400 transition group text-sm font-mono"
            >
              <FaLinkedin size={18} className="group-hover:text-orange-400 transition" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE DEVELOPER HUD PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative group">
            {/* Glowing Backdrop Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-rose-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition duration-300"></div>

            {/* Developer Card Container */}
            <div className="relative rounded-2xl p-2 bg-[#161b22] border border-slate-700/80 shadow-2xl backdrop-blur-xl">
              {/* Window Terminal Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 mb-2 font-mono text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-amber-300/80">himanshu_dev.tsx</span>
                <Sparkles size={12} className="text-amber-400" />
              </div>

              {/* Full Vibrant Color Photo */}
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/profile.jpg"
                  alt="Himanshu Singh"
                  width={290}
                  height={290}
                  priority
                  className="rounded-xl object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="mt-2.5 px-3 py-2 bg-[#0d1117] rounded-lg border border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-300">
                <span className="text-amber-400 font-semibold">● ACTIVE DEPLOY</span>
                <span className="text-emerald-400 font-semibold">100% READY</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
