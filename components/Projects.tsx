import React, { useEffect, useRef } from "react";
import { ExternalLinkIcon, GithubIcon } from "./icons";

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#d6044a] rounded-full"></span>
  </h2>
);

// 🧠 Project Card with Neon Orbit + Hover Glass Effect
const ProjectCard: React.FC<{
  title: string;
  description: string;
  tech: string[];
}> = ({ title, description, tech }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Track mouse for inner glow
  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className="group relative backdrop-blur-md bg-black/30 border border-[#d6044a]/40 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(214,4,74,0.2)] hover:shadow-[0_0_35px_rgba(214,4,74,0.4)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.05]"
    >
      {/* 🌀 Animated Orbiting Border */}
      <div
        className="absolute inset-0 rounded-2xl p-[2px] before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-[conic-gradient(from_0deg,rgba(214,4,74,0.9),rgba(255,0,180,0.6),rgba(214,4,74,0.9))] before:animate-spinGlow before:-z-10"
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      ></div>

      {/* 💡 Cursor-following radial glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(
              160px circle at var(--mouse-x) var(--mouse-y),
              rgba(214,4,74,0.3),
              transparent 70%
            )
          `,
          mixBlendMode: "screen",
        }}
      ></div>

      {/* ✨ Hover Glass Swipe Reflection */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 left-[-150%] w-[200%] h-full bg-[linear-gradient(120deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_40%,rgba(255,255,255,0)_60%)] transform skew-x-[-20deg] group-hover:animate-glassSwipe"></div>
      </div>

      {/* 🧠 Card Content */}
      <div className="relative z-10 flex flex-col h-full p-6">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 my-4">
            {tech.map((item) => (
              <span
                key={item}
                className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-white/10 backdrop-blur-sm hover:bg-[#d6044a]/60 hover:text-white transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 🌐 Links */}
        <div className="flex justify-end space-x-4 mt-auto">
          <a
            href="#"
            className="text-gray-400 hover:text-[#FF007F] transition-colors duration-300"
            aria-label="Source Code"
          >
            <GithubIcon />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#FF007F] transition-colors duration-300"
            aria-label="Live Demo"
          >
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <style>{`
        @keyframes spinGlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .before\\:animate-spinGlow::before {
          animation: spinGlow 6s linear infinite;
        }

        @keyframes glassSwipe {
          0% { left: -150%; }
          50% { left: 100%; }
          100% { left: 150%; }
        }
        .group-hover\\:animate-glassSwipe {
          animation: glassSwipe 1.5s ease-in-out forwards;
        }
      `}</style>

      <div className="text-center mb-8">
        <SectionTitle>Projects</SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6 md:px-12">
        <ProjectCard
          title="E-Commerce Website"
          description="A responsive e-commerce website for an online gift store using HTML, CSS, and JavaScript. Implemented product listing, cart functionality, and order placement workflow, enhancing UI/UX with responsive layouts."
          tech={["HTML", "CSS", "JavaScript"]}
        />

        <ProjectCard
          title="Self-Development Mobile App"
          description="A productivity-focused mobile application using Java and Android Studio. Integrated task management features to streamline daily activities, built using clean architecture principles for scalability."
          tech={["Java", "Android Studio"]}
        />

        <ProjectCard
          title="Late Tracker"
          description="A Next.js web app built for college students to record and monitor late arrivals using Firebase Firestore. Features real-time data sync, secure authentication, and modern responsive UI."
          tech={["Next.js", "Firebase Firestore", "Tailwind CSS", "React Hooks"]}
        />

        <ProjectCard
          title="Attendance Tracker"
          description="A college attendance tracking system built with Next.js and Firestore. Enables students and faculty to manage attendance data in real-time with analytics, export options, and secure access control."
          tech={["Next.js", "Firebase Firestore", "TypeScript", "Tailwind CSS"]}
        />
      </div>
    </section>
  );
};

export default Projects;
