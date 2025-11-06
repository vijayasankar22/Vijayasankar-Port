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

// Section Title
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#d6044a] rounded-full"></span>
  </h2>
);

// Fade animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Skill Category Card (transparent glassmorphism)
const SkillCategory: React.FC<{ title: string; skills: { name: string; icon: JSX.Element }[]; index: number }> = ({
  title,
  skills,
  index,
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.3, once: false });

  useEffect(() => {
    if (inView) controls.start("glow");
    else controls.start("idle");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      animate={controls}
      variants={{
        idle: { boxShadow: "0 0 10px rgba(214, 4, 74, 0)" },
        glow: {
          boxShadow: [
            "0 0 15px rgba(214, 4, 74, 0.1)",
            "0 0 25px rgba(214, 4, 74, 0.3)",
            "0 0 30px rgba(214, 4, 74, 0.5)",
            "0 0 25px rgba(214, 4, 74, 0.3)",
          ],
          transition: { duration: 1.8, repeat: Infinity, repeatType: "mirror" },
        },
      }}
      className="backdrop-blur-md bg-transparent p-6 rounded-2xl border border-[#d6044a]/40 shadow-[0_0_20px_rgba(214,4,74,0.15)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(214,4,74,0.4)] hover:-translate-y-2"
    >
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
  design: [
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

// Main Skills Section
const Skills: React.FC = () => {
  const categories = Object.entries(skillsData);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
