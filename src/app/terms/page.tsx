import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ShieldCheck, ArrowLeft, FileText, Lock, Scale, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Himanshu Singh Portfolio",
  description: "Terms and conditions governing the use of this personal portfolio website.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d14] text-slate-100">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 pt-28 pb-16 w-full">
        {/* Back Link & Header */}
        <div className="mb-10 pb-6 border-b border-slate-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-amber-300 transition-colors mb-4"
          >
            <ArrowLeft size={12} /> Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-amber-400" />
              Legal & Usage Terms
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent mt-3">
            Terms and Conditions
          </h1>
          <p className="text-xs text-slate-400 mt-2 font-mono">
            Document Version: 1.1 • Last Reviewed: November 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="p-8 sm:p-12 rounded-2xl border border-slate-800 bg-[#161b22]/80 backdrop-blur-xl shadow-2xl space-y-8 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <Scale size={16} className="text-amber-400" />
              <h2>1. Acceptance of Terms</h2>
            </div>
            <p>
              By accessing and browsing this portfolio website (the &quot;Site&quot;), you acknowledge and agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue use of the Site.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <FileText size={16} className="text-orange-400" />
              <h2>2. Intellectual Property Rights</h2>
            </div>
            <p>
              Unless otherwise explicitly indicated, all written content, original UI designs, branding, and personal code architectures displayed on this Site are the intellectual property of Himanshu Singh. Open-source packages, third-party libraries, and icons referenced on the Site remain the property of their respective copyright holders under their respective licenses (e.g., MIT, Apache 2.0).
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <Lock size={16} className="text-rose-400" />
              <h2>3. Permitted and Prohibited Use</h2>
            </div>
            <p>
              This Site is provided for informational and recruitment evaluation purposes. You may review projects, read technical summaries, and submit messages via contact forms. You agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Engage in automated scraping or denial-of-service activities that disrupt site availability.</li>
              <li>Submit abusive, unsolicited promotional, or deceptive communications through the contact channels.</li>
              <li>Misrepresent ownership or authorship of the projects or source code presented here.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <ShieldCheck size={16} className="text-amber-400" />
              <h2>4. Accuracy of Information & Disclaimer of Warranties</h2>
            </div>
            <p>
              The materials and case studies on this Site are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied. While effort is made to maintain accurate technical descriptions and project links, no guarantee is made that external repositories or demonstration links will remain uninterrupted or error-free.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <Mail size={16} className="text-emerald-400" />
              <h2>5. Privacy and Direct Inquiries</h2>
            </div>
            <p>
              Information provided via the contact form or email (such as your name and email address) will only be used to respond to your specific query or discuss professional opportunities. Your personal contact data is not sold, rented, or distributed to third parties.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-800">
            <h2 className="text-base font-semibold text-white">
              6. Contact Information
            </h2>
            <p>
              If you have any questions or concerns regarding these Terms and Conditions, please communicate directly via email at{" "}
              <a
                href="mailto:himanshuthakur12907@gmail.com"
                className="text-amber-300 underline underline-offset-4 hover:text-amber-200"
              >
                himanshuthakur12907@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
