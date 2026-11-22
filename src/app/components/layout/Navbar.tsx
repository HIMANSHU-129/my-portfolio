"use client";

import Link from "next/link";
import { FileText } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 z-50 transition-all">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <span className="font-mono text-xs text-amber-400 bg-amber-950/70 border border-amber-500/30 px-2 py-0.5 rounded">
            &lt;HS /&gt;
          </span>
          <span className="text-base font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent group-hover:opacity-90 transition">
            Himanshu Singh
          </span>
        </Link>

        {/* links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link href="/#home" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <Link href="/#techstack" className="hover:text-amber-400 transition-colors">
            Stack
          </Link>
          <Link href="/#journey" className="hover:text-amber-400 transition-colors">
            Journey
          </Link>
          <Link href="/#values" className="hover:text-amber-400 transition-colors">
            Values
          </Link>
          <Link href="/#projects" className="hover:text-amber-400 transition-colors">
            Projects
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors"
          >
            <FileText size={13} className="text-amber-400" />
            <span>Resume</span>
          </Link>
          <Link href="/terms" className="hover:text-amber-400 transition-colors">
            Terms
          </Link>
        </div>

        {/* connect button */}
        <a
          href="/#contact"
          className="px-4 py-2 rounded-lg border border-amber-500/50 text-xs font-mono font-medium text-amber-300 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 hover:text-black transition shadow-[0_0_12px_rgba(245,158,11,0.2)]"
        >
          POST /enquiry
        </a>
      </div>
    </nav>
  );
}
