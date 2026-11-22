import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "./components/layout/CursorGlow";
import ScrollProgress from "./components/layout/ScrollProgress";
import InteractiveBackground from "./components/layout/InteractiveBackground";

export const metadata: Metadata = {
  title: "Himanshu Singh | Frontend Engineer & Next.js Architect",
  description:
    "Portfolio of Himanshu Singh — Frontend engineer specializing in React 19, Next.js App Router, and TypeScript. Building snappy, production-grade web systems.",
  keywords: [
    "Himanshu Singh",
    "Frontend Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Himanshu Singh", url: "https://github.com/HIMANSHU-129" }],
  creator: "Himanshu Singh",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://himanshu-singh.dev",
    title: "Himanshu Singh | Frontend Engineer & Next.js Architect",
    description:
      "Frontend engineer specializing in React 19, Next.js App Router, and TypeScript. I learn fast, ship faster, and obsess over details.",
    siteName: "Himanshu Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Singh | Frontend Engineer & Next.js Architect",
    description:
      "Frontend engineer specializing in React 19, Next.js App Router, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="bg-[#090d14] text-slate-100 relative overflow-x-hidden selection:bg-amber-500 selection:text-black min-h-screen"
      >
        <ScrollProgress />
        <CursorGlow />
        <InteractiveBackground />

        {/* Ambient Warm Gradient Glows */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent blur-[150px] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-[550px] h-[550px] bg-gradient-to-tl from-rose-500/10 via-orange-600/5 to-transparent blur-[150px] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-950/15 blur-[180px] rounded-full"></div>
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
