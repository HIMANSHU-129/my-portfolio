"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#090d13] mt-24 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-base font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent">
            Himanshu Singh
          </span>
          <p className="text-xs text-slate-500 mt-1 font-mono">
            © {currentYear} Himanshu Singh. High-performance Next.js & TypeScript Architecture.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <Link href="/resume" className="hover:text-amber-300 transition-colors">
            Resume / CV
          </Link>
          <Link href="/terms" className="hover:text-amber-400 transition-colors">
            Terms & Conditions
          </Link>
          <div className="flex items-center gap-4 pl-2 border-l border-slate-800">
            <a
              href="https://github.com/HIMANSHU-129"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/profile-himanshu-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:himanshuthakur12907@gmail.com"
              className="hover:text-amber-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
