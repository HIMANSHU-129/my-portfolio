"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaFilePdf, 
  FaArrowLeft, 
  FaGraduationCap, 
  FaCode, 
  FaAward, 
  FaTerminal, 
  FaMapMarkerAlt,
  FaCheckCircle
} from "react-icons/fa";
import { Sparkles, Globe, Laptop, ShieldCheck } from "lucide-react";

export default function ResumePage() {
  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d14] text-slate-100">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 pt-28 pb-16 w-full">
        {/* Navigation & Action Bar (Hidden during Print) */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-amber-300 transition-colors"
          >
            <FaArrowLeft size={10} /> Back to Portfolio
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 hidden sm:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Internships & Engineering Roles
            </span>

            {/* DOWNLOAD PDF / PRINT BUTTON */}
            <button
              onClick={handlePrintPdf}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 hover:from-amber-300 hover:to-rose-300 text-slate-950 font-bold font-mono text-xs shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              title="Prints or saves the resume cleanly as a PDF document"
            >
              <FaFilePdf size={13} />
              <span>Download PDF / Print</span>
            </button>
          </div>
        </div>

        {/* RESUME PAPER CONTAINER */}
        <div className="print-clean p-8 sm:p-12 rounded-2xl border border-slate-800 bg-[#161b22]/90 backdrop-blur-xl shadow-2xl space-y-10">
          {/* HEADER WITH PROFILE PHOTO */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-slate-800/80 pb-8">
            <div className="flex items-center gap-6">
              {/* Photo Frame */}
              <div className="relative group shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.25)] bg-[#0d1117]">
                  <Image
                    src="/profile.jpg"
                    alt="Himanshu Singh"
                    width={112}
                    height={112}
                    priority
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 bg-emerald-950 border border-emerald-500/50 rounded-full p-1" title="Active Developer">
                  <span className="block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
              </div>

              {/* Name & Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent">
                  Himanshu Singh
                </h1>
                <p className="text-sm sm:text-base font-mono text-amber-200/90 mt-1">
                  Frontend Engineer & Computer Engineering Student
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1.5 font-mono">
                  <FaMapMarkerAlt size={11} className="text-orange-400" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Contact Coordinates */}
            <div className="flex flex-col sm:items-end gap-2 text-xs font-mono text-slate-300 shrink-0">
              <a
                href="mailto:himanshuthakur12907@gmail.com"
                className="hover:text-amber-300 transition flex items-center gap-2"
              >
                <FaEnvelope size={12} className="text-amber-400" />
                <span>himanshuthakur12907@gmail.com</span>
              </a>
              <a
                href="https://github.com/HIMANSHU-129"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition flex items-center gap-2"
              >
                <FaGithub size={12} className="text-amber-400" />
                <span>github.com/HIMANSHU-129</span>
              </a>
              <a
                href="https://www.linkedin.com/in/profile-himanshu-singh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition flex items-center gap-2"
              >
                <FaLinkedin size={12} className="text-orange-400" />
                <span>linkedin.com/in/profile-himanshu-singh</span>
              </a>
            </div>
          </div>

          {/* PROFESSIONAL PROFILE SUMMARY */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 border-l-2 border-amber-400 pl-3">
              Professional Profile
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Second-year Computer Engineering undergraduate at Xavier Institute of Engineering with practical experience building modern web architectures, native desktop utilities, and AI-powered productivity suites. Specializes in <strong className="text-amber-200 font-semibold">React 19, Next.js App Router, TypeScript</strong>, and high-performance client systems. Driven by an obsession for sub-second page loads, zero visual shift (0.00 CLS), and shipping production-ready applications with zero fluff.
            </p>
          </section>

          {/* EDUCATION & ACADEMIC BACKGROUND */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 border-l-2 border-amber-400 pl-3 flex items-center gap-2">
              <FaGraduationCap size={14} className="text-amber-400" />
              <span>Education & Academic Background</span>
            </h2>

            <div className="space-y-3">
              {/* College Degree */}
              <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Xavier Institute of Engineering, Mahim — Mumbai
                    </h3>
                    <p className="text-xs text-amber-300 font-mono mt-0.5">
                      Bachelor of Technology (B.Tech) in Computer Engineering
                    </p>
                  </div>
                  <div className="text-right sm:text-right">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-amber-950/70 border border-amber-700/40 text-amber-200">
                      Second Year (2025 – 2026)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
                  Focus Areas: Data Structures & Algorithms, Object-Oriented Software Design, Database Systems, Computer Networks, and Modern Operating Systems.
                </p>
              </div>

              {/* HSC */}
              <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Bhavan&apos;s College, Andheri — Mumbai
                    </h3>
                    <p className="text-xs text-slate-300 font-mono mt-0.5">
                      Higher Secondary Certificate (HSC) — Science Stream
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-700/40 text-emerald-300">
                      Score: 79%
                    </span>
                  </div>
                </div>
              </div>

              {/* SSC */}
              <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      St. Xavier&apos;s High School, Borivali — Mumbai
                    </h3>
                    <p className="text-xs text-slate-300 font-mono mt-0.5">
                      Secondary School Certificate (SSC)
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-700/40 text-emerald-300">
                      Score: 89%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TECHNICAL ARSENAL */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 border-l-2 border-amber-400 pl-3 flex items-center gap-2">
              <FaCode size={14} className="text-amber-400" />
              <span>Technical Skills & Tooling</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-800">
                <span className="text-amber-300 font-semibold block mb-1.5">// Frontend & Frameworks</span>
                <p className="text-slate-300 leading-relaxed font-sans">
                  React 19, Next.js 16 (App Router, Server Components, SSR), TypeScript Strict Mode, JavaScript (ESNext), Tailwind CSS, HTML5 Canvas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-800">
                <span className="text-orange-300 font-semibold block mb-1.5">// Systems & Desktop</span>
                <p className="text-slate-300 leading-relaxed font-sans">
                  Electron desktop applications, Python, Java, Node.js runtime, REST API integration, offline-first architectures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-800">
                <span className="text-rose-300 font-semibold block mb-1.5">// Performance & Architecture</span>
                <p className="text-slate-300 leading-relaxed font-sans">
                  Core Web Vitals optimization (LCP, CLS, INP), code-splitting, optimistic UI mutations, layout stability.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1117] border border-slate-800">
                <span className="text-amber-300 font-semibold block mb-1.5">// Workflow & Tooling</span>
                <p className="text-slate-300 leading-relaxed font-sans">
                  Git version control, GitHub PR workflows, Turbopack, VS Code, Vercel deployments, npm/yarn.
                </p>
              </div>
            </div>
          </section>

          {/* FEATURED PROJECTS */}
          <section className="space-y-5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 border-l-2 border-amber-400 pl-3 flex items-center gap-2">
              <FaTerminal size={14} className="text-amber-400" />
              <span>Key Software Projects</span>
            </h2>

            {/* StudySphere AI */}
            <div className="p-5 rounded-xl bg-[#0d1117] border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Globe size={15} className="text-amber-400" />
                  <h3 className="text-sm font-bold text-white">StudySphere AI — Academic Operating System</h3>
                </div>
                <span className="font-mono text-[10px] text-amber-300 bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 rounded">
                  Next.js • Electron • TypeScript • Gemini AI
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Engineered an intelligent study suite for students that automates note synthesis, flashcards, and academic task tracking. Integrated Google Gemini AI models directly into a multi-platform Next.js & Electron runtime.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-1">
                GitHub: <a href="https://github.com/HIMANSHU-129/studysphere-ai" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">github.com/HIMANSHU-129/studysphere-ai</a>
              </div>
            </div>

            {/* Filee */}
            <div className="p-5 rounded-xl bg-[#0d1117] border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Laptop size={15} className="text-orange-400" />
                  <h3 className="text-sm font-bold text-white">Filee — Offline Windows File Converter</h3>
                </div>
                <span className="font-mono text-[10px] text-orange-300 bg-orange-950/60 border border-orange-800/40 px-2 py-0.5 rounded">
                  Java • Desktop Software • Privacy-First
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Engineered a standalone desktop document transformation tool executing 100% offline with zero cloud telemetry. Features multi-image to PDF batch aggregation, PDF-to-image extraction, and native Windows performance.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-1">
                GitHub: <a href="https://github.com/HIMANSHU-129/Filee" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">github.com/HIMANSHU-129/Filee</a>
              </div>
            </div>

            {/* Waste-Wise */}
            <div className="p-5 rounded-xl bg-[#0d1117] border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Globe size={15} className="text-emerald-400" />
                  <h3 className="text-sm font-bold text-white">Waste-Wise — Sustainability Tracking Platform</h3>
                </div>
                <span className="font-mono text-[10px] text-emerald-300 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                  TypeScript • Next.js • Tailwind CSS
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Engineered an eco-management web portal to monitor, categorize, and benchmark waste lifecycles to promote environmental accountability through interactive analytical visualizations.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-1">
                GitHub: <a href="https://github.com/HIMANSHU-129/Waste-Wise" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">github.com/HIMANSHU-129/Waste-Wise</a>
              </div>
            </div>
          </section>

          {/* INTERESTING FACTS & ENGINEERING PHILOSOPHY */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 border-l-2 border-amber-400 pl-3 flex items-center gap-2">
              <FaAward size={14} className="text-amber-400" />
              <span>Interesting Facts & Developer Mindset</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-3 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-[#0d1117] border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <FaCheckCircle size={12} className="text-amber-400" />
                  <span>Self-Taught Roots & Pragmatic Shipping</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Started building with raw HTML, CSS, and vanilla JS before adopting frameworks. Skips the &quot;tutorial purgatory&quot; to ship real, functioning software that solves practical daily problems.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0d1117] border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <ShieldCheck size={14} className="text-orange-400" />
                  <span>Privacy-First Product Philosophy</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Built <em>Filee</em> because online converters expose user files to external cloud servers. Prioritizes local-first storage, client confidentiality, and zero-telemetry architectures.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0d1117] border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Sparkles size={13} className="text-rose-400" />
                  <span>Obsession with Sub-Second Latency</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Enforces 0.00 Cumulative Layout Shift (CLS) and minimal client payloads across all projects. Believes design and performance are two sides of the exact same coin.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0d1117] border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <FaTerminal size={12} className="text-amber-400" />
                  <span>Second-Year Undergraduate Velocity</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Maintains continuous open-source velocity at Xavier Institute of Engineering, publishing production-ready desktop and web applications alongside formal engineering coursework.
                </p>
              </div>
            </div>
          </section>

          {/* FOOTER VALUES STRIP */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
            <span>&ldquo;I learn fast, ship faster, and obsess over details.&rdquo;</span>
            <span className="text-amber-300 font-semibold">Himanshu Singh • Portfolio Resume</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
