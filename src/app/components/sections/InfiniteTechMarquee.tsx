"use client";

import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss, 
  SiGit, 
  SiGithub, 
  SiNodedotjs, 
  SiPostgresql, 
  SiMongodb, 
  SiFigma, 
  SiVercel, 
  SiElectron, 
  SiPython 
} from "react-icons/si";

export default function InfiniteTechMarquee() {
  const techLogos = [
    { name: "React 19", icon: SiReact, color: "hover:text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6]" },
    { name: "JavaScript", icon: SiJavascript, color: "hover:text-[#F7DF1E]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#38BDF8]" },
    { name: "Node.js", icon: SiNodedotjs, color: "hover:text-[#5FA04E]" },
    { name: "Python", icon: SiPython, color: "hover:text-[#3776AB]" },
    { name: "Electron", icon: SiElectron, color: "hover:text-[#47848F]" },
    { name: "Git", icon: SiGit, color: "hover:text-[#F05032]" },
    { name: "GitHub", icon: SiGithub, color: "hover:text-white" },
    { name: "HTML5", icon: SiHtml5, color: "hover:text-[#E34F26]" },
    { name: "CSS3", icon: SiCss, color: "hover:text-[#1572B6]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#4169E1]" },
    { name: "MongoDB", icon: SiMongodb, color: "hover:text-[#47A248]" },
    { name: "Vercel", icon: SiVercel, color: "hover:text-white" },
    { name: "Figma", icon: SiFigma, color: "hover:text-[#F24E1E]" },
  ];

  // Duplicate for seamless 100% infinite continuous loop
  const doubleList = [...techLogos, ...techLogos];

  return (
    <section className="py-12 relative overflow-hidden pointer-events-auto">
      {/* Subtle Label */}
      <div className="text-center mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-slate-400 bg-[#161b22]/90 border border-slate-800 px-3.5 py-1 rounded-full shadow-sm">
          Core Technologies & Tooling Ecosystem
        </span>
      </div>

      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090d14] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090d14] to-transparent z-10 pointer-events-none"></div>

      {/* Track 1: Leftward continuous scroll */}
      <div className="flex gap-6 overflow-hidden select-none py-2">
        <div className="flex gap-6 shrink-0 animate-marquee items-center">
          {doubleList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-800/80 bg-[#161b22]/70 backdrop-blur-md hover:border-amber-500/50 hover:bg-[#1f2632] hover:scale-105 transition-all duration-300 shadow-md cursor-default"
              >
                <Icon size={22} className={`text-slate-400 ${item.color} transition-colors duration-200`} />
                <span className="font-mono text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
