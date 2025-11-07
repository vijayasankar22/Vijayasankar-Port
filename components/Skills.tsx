import React, { useRef, useEffect } from "react";
import {
  SiJavascript, SiReact, SiHtml5, SiCss3, SiBootstrap,
  SiTailwindcss, SiSpringboot, SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiMysql, SiMongodb, SiFirebase, SiPostgresql, SiDocker,
  SiHeroku, SiAwsamplify, SiGit, SiGithub, SiAndroidstudio,
  SiFigma, SiAdobephotoshop, SiPostman, SiJira
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { motion, useAnimation, useInView } from "framer-motion";

// 🌈 Section Title
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#d6044a] rounded-full"></span>
  </h2>
);

// ✨ Fade animation
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// 💎 Skill Card Component
const SkillCategory: React.FC<{ title: string; skills: { name: string; icon: JSX.Element }[]; index: number }> = ({
  title,
  skills,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.3, once: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  // Cursor glow tracking
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
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      animate={controls}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05, y: -10 }} // ✨ Smooth lift and scale
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative backdrop-blur-md bg-black/30 border border-[#d6044a]/40 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(214,4,74,0.2)] hover:shadow-[0_0_35px_rgba(214,4,74,0.4)] transition-all duration-500"
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

      {/* 💡 Cursor-following Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(
              180px circle at var(--mouse-x) var(--mouse-y),
              rgba(214,4,74,0.35),
              transparent 70%
            )
          `,
          mixBlendMode: "screen",
        }}
      ></div>

      {/* ✨ Hover Glass Reflection */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 left-[-150%] w-[200%] h-full bg-[linear-gradient(120deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_40%,rgba(255,255,255,0)_60%)] transform skew-x-[-20deg] group-hover:animate-glassSwipe"></div>
      </div>

      {/* 🧠 Content */}
      <div className="relative z-10 p-6">
        <h3 className="text-xl font-semibold text-[#e13b78] mb-4 tracking-wide">
          {title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-[#d6044a]/70 hover:text-white hover:border-[#d6044a]/70"
            >
              {skill.icon}
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Skills Data
const skillsData = {
  frontend: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Material UI", icon: <SiReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Responsive Design", icon: <SiCss3 /> },
  ],
  backend: [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "REST APIs", icon: <SiJsonwebtokens /> },
    { name: "JWT Authentication", icon: <SiJsonwebtokens /> },
    { name: "Microservices", icon: <SiSpringboot /> },
  ],
  database: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase (basic)", icon: <SiFirebase /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ],
  cloud: [
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Heroku", icon: <SiHeroku /> },
    { name: "AWS (basic)", icon: <SiAwsamplify /> },
  ],
  "Design & Tools": [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Agile/Scrum", icon: <SiJira /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "VS Code", icon: <VscVscode /> },
  ],
};

// 🧠 Main Section
const Skills: React.FC = () => {
  const categories = Object.entries(skillsData);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
        <SectionTitle>Technical Skills</SectionTitle>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12"
      >
        {categories.map(([key, skills], index) => (
          <SkillCategory
            key={key}
            title={key.replace(/^\w/, (c) => c.toUpperCase())}
            skills={skills}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
