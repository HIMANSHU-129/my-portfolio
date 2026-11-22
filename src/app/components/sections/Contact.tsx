"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Mail, 
  MapPin,
  Loader2,
  RefreshCw,
  AlertCircle
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formMode, setFormMode] = useState<"standard" | "json">("standard");
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    enquiryType: "Role Opening",
    budgetTimeline: "Immediate (< 2 weeks)",
    payloadMessage: "",
  });

  const enquiryTypes = [
    "Full-Time Role",
    "Frontend Contract",
    "System Architecture",
    "Open Source Collab",
  ];

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Failed to dispatch enquiry. Please try again.");
      }
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage("Network error while dispatching enquiry. Please check your connection or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmitStatus("idle");
    setFormData({
      senderName: "",
      senderEmail: "",
      enquiryType: "Role Opening",
      budgetTimeline: "Immediate (< 2 weeks)",
      payloadMessage: "",
    });
  };

  const directMailtoUrl = `mailto:himanshuthakur12907@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Enquiry] ${formData.enquiryType} from ${formData.senderName || "Visitor"}`
  )}&body=${encodeURIComponent(
    `Sender: ${formData.senderName}\nEmail: ${formData.senderEmail}\nType: ${formData.enquiryType}\n\nMessage:\n${formData.payloadMessage}`
  )}`;

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3.5 py-1 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5">
          <Terminal size={12} className="text-amber-400" />
          HTTP DISPATCH ENDPOINT
        </span>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent mt-3 inline-block">
          Initiate Engineering Contact
        </h2>
        <p className="mt-3 text-slate-400 text-sm max-w-lg mx-auto">
          Send a structured engineering payload or direct enquiry with typed parameters and instant JSON schema generation.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COLUMN: TELEMETRY & DEVELOPER CARD */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Dispatch Terminal Status */}
          <div className="p-7 rounded-2xl border border-slate-800 bg-[#0d1117]/80 backdrop-blur-xl shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>POST /api/enquiry</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                SSL 256-BIT
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Available for Engineering Roles
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you're looking for a frontend engineer to build Next.js applications, optimize performance bottlenecks, or ship production features, I respond within 24 hours.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs font-mono text-slate-300">
              <a
                href="mailto:himanshuthakur12907@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#161b22] border border-slate-800 hover:border-amber-500/50 hover:text-amber-300 transition-colors group"
              >
                <Mail size={16} className="text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="truncate">himanshuthakur12907@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#161b22] border border-slate-800 text-slate-400">
                <MapPin size={16} className="text-orange-400" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/HIMANSHU-129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#161b22] border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-amber-500/50 transition-colors"
                >
                  <FaGithub size={14} className="text-amber-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/profile-himanshu-singh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#161b22] border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-orange-500/50 transition-colors"
                >
                  <FaLinkedin size={14} className="text-orange-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <ShieldCheck size={12} /> VERIFIED
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: HIGH-LEVEL INTERACTIVE DEVELOPER CONSOLE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="rounded-2xl border border-slate-800 bg-[#0d1117] shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* macOS Developer Console Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#161b22] border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="text-slate-400 ml-2 font-semibold">enquiry_request.ts</span>
              </div>

              {/* View Mode Toggle: Interactive Form vs. Structured JSON Schema */}
              <div className="flex items-center gap-1 bg-[#090d13] p-1 rounded-lg border border-slate-800 text-[11px]">
                <button
                  type="button"
                  onClick={() => setFormMode("standard")}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    formMode === "standard"
                      ? "bg-amber-500 text-black font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Interactive UI
                </button>
                <button
                  type="button"
                  onClick={() => setFormMode("json")}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    formMode === "json"
                      ? "bg-amber-500 text-black font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  JSON Payload
                </button>
              </div>
            </div>

            {/* FORM BODY */}
            <div className="p-6 sm:p-8">
              {submitStatus === "success" ? (
                /* SUCCESS STATE CONFIRMATION */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-5"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 size={32} />
                  </div>

                  <div>
                    <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full uppercase tracking-wider">
                      STATUS 200 OK — DISPATCH VERIFIED
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-3">
                      Enquiry Successfully Received
                    </h3>
                    <p className="text-slate-400 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <span className="text-amber-300 font-medium">{formData.senderName}</span>. Your enquiry payload has been registered. Himanshu will review the details and reach out to <span className="text-amber-300 font-mono">{formData.senderEmail}</span> within 24 hours.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#161b22] hover:bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs transition-colors"
                    >
                      <RefreshCw size={13} />
                      <span>Send Another Dispatch</span>
                    </button>

                    <a
                      href={directMailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-500/40 bg-amber-950/30 hover:bg-amber-950/60 text-amber-300 font-mono text-xs transition-colors"
                    >
                      <Mail size={13} />
                      <span>Backup: Open Direct Email</span>
                    </a>
                  </div>
                </motion.div>
              ) : formMode === "standard" ? (
                /* INTERACTIVE UI FORM */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitStatus === "error" && (
                    <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/50 text-rose-300 text-xs font-mono flex items-center gap-2.5">
                      <AlertCircle size={16} className="text-rose-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Enquiry Type Chips */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      ENQUIRY_SCOPE:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {enquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, enquiryType: type })}
                          className={`px-3 py-2 rounded-lg text-xs font-mono border transition-all text-center ${
                            formData.enquiryType === type
                              ? "border-amber-400 bg-amber-950/40 text-amber-300 font-semibold shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                              : "border-slate-800 bg-[#161b22] text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="senderName" className="block text-xs font-mono text-slate-400 mb-1.5">
                        CLIENT_IDENTITY:
                      </label>
                      <input
                        id="senderName"
                        name="senderName"
                        type="text"
                        required
                        value={formData.senderName}
                        onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                        placeholder="e.g., Alex Reed / Tech Corp"
                        className="w-full bg-[#161b22] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-amber-400 focus:outline-none transition font-sans"
                      />
                    </div>

                    <div>
                      <label htmlFor="senderEmail" className="block text-xs font-mono text-slate-400 mb-1.5">
                        REPLY_COORDINATE:
                      </label>
                      <input
                        id="senderEmail"
                        name="senderEmail"
                        type="email"
                        required
                        value={formData.senderEmail}
                        onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-[#161b22] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-amber-400 focus:outline-none transition font-sans"
                      />
                    </div>
                  </div>

                  {/* Message Payload */}
                  <div>
                    <label htmlFor="payloadMessage" className="block text-xs font-mono text-slate-400 mb-1.5">
                      PAYLOAD_BODY (Role description, requirements, or scope):
                    </label>
                    <textarea
                      id="payloadMessage"
                      name="payloadMessage"
                      rows={4}
                      required
                      value={formData.payloadMessage}
                      onChange={(e) => setFormData({ ...formData, payloadMessage: e.target.value })}
                      placeholder="Outline project deliverables, team structure, timeline, or technical expectations..."
                      className="w-full bg-[#161b22] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-amber-400 focus:outline-none transition font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">
                      Direct HTTP API dispatch with 24h SLA response
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 hover:from-amber-300 hover:to-rose-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02] active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Dispatching Payload...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Dispatch Message_</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* JSON SCHEMA RAW PAYLOAD MODE */
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Generated POST Request Body</span>
                    <button
                      type="button"
                      onClick={handleCopyJson}
                      className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copied ? "Copied" : "Copy Payload"}</span>
                    </button>
                  </div>

                  <pre className="p-4 rounded-xl bg-[#161b22] border border-slate-800 font-mono text-xs text-amber-300/90 leading-relaxed overflow-x-auto">
                    <code>{JSON.stringify(formData, null, 2)}</code>
                  </pre>

                  <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200/90 font-mono">
                    💡 Tip: Switch back to &quot;Interactive UI&quot; to populate fields dynamically and dispatch directly.
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
