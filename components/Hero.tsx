"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const roles = [
  "Java Full Stack Developer",
  "Software Developer",
  "Android Developer",
  "Problem Solver",
];

const liveCodes = [
  `function greet() {
  console.log("Hello, I'm Vijay!");
}`,
  `const skills = ["Java", "React", "Spring Boot", "SQL"];
skills.map(skill => console.log("Learning:", skill));`,
  `async function build(project) {
  await code();
  deploy(project);
  console.log("Project Deployed 🚀");
}`,
  `const motivation = () => {
  while(true) keepCoding("💻");
};`,
  `if(debug) {
  fixBugs();
} else {
  optimizePerformance();
}`,
  `let dream = "FAANG Engineer";
setTimeout(() => console.log("Goal →", dream), 2025);`,
  `try {
  innovate();
} catch(error) {
  console.log("Learning from", error);
}`,
  `function success() {
  return hardWork() + passion() + consistency();
}`,
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [codeTexts, setCodeTexts] = useState(Array(liveCodes.length).fill(""));

  // Typing animation for roles
  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1800);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((p) => (p + 1) % roles.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((p) => p + (reverse ? -1 : 1)),
      reverse ? 60 : 100
    );
    return () => clearTimeout(t);
  }, [subIndex, index, reverse]);

  // Floating code animation
  useEffect(() => {
    const intervals = liveCodes.map((code, i) => {
      let idx = 0;
      const randomDelay = 30 + Math.random() * 40;
      const interval = setInterval(() => {
        setCodeTexts((prev) => {
          const updated = [...prev];
          updated[i] = code.slice(0, idx++);
          return updated;
        });
        if (idx > code.length) {
          clearInterval(interval);
          setTimeout(() => {
            setCodeTexts((prev) => {
              const reset = [...prev];
              reset[i] = "";
              return reset;
            });
          }, 3000);
        }
      }, randomDelay);
      return interval;
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>
        {`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Montserrat:wght@800&family=Source+Code+Pro:wght@400;600&display=swap');

/* Floating code background */
.live-code {
  position: absolute;
  font-family: 'Source Code Pro', monospace;
  font-size: 15px;
  color: #ff2f8a;
  white-space: pre;
  line-height: 1.6;
  user-select: none;
  pointer-events: none;
  opacity: 0.12;
  text-shadow:
    0 0 6px rgba(255, 64, 150, 0.2),
    0 0 12px rgba(255, 64, 150, 0.15);
  animation: floatLoop 14s ease-in-out infinite;
}

@keyframes floatLoop {
  0%   { transform: translateY(0px) rotate(-2deg); }
  25%  { transform: translateY(-10px) rotate(2deg); }
  50%  { transform: translateY(0px) rotate(-1deg); }
  75%  { transform: translateY(8px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(-2deg); }
}

/* 🌈 Glowing Gradient Name (white by default) */
.gradient-name {
  font-family: 'Poppins','Montserrat',sans-serif;
  text-transform: uppercase;
  font-size: clamp(2.5rem, 10vw, 5.5rem);
  font-weight: 800;
  color: #ffffff; /* ✅ White by default */
  position: relative;
  transition: transform 0.3s ease, text-shadow 0.3s ease, background 0.3s ease, color 0.3s ease;
}

/* Hover → gradient glow */
.gradient-name:hover {
  background: linear-gradient(90deg, #ff2f8a, #ff7ad9, #b48fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow:
    0 0 10px rgba(255, 64, 150, 0.6),
    0 0 20px rgba(255, 64, 150, 0.4),
    0 0 30px rgba(255, 64, 150, 0.3);
  transform: scale(1.05);
}
`}
      </style>

      {/* Floating Code Background */}
      {codeTexts.map((txt, i) => (
        <div
          key={i}
          className="live-code"
          style={{
            top: `${10 + (i * 10) % 80}%`,
            left: i % 2 === 0 ? `${5 + i * 7}%` : "auto",
            right: i % 2 !== 0 ? `${5 + (i * 7) % 20}%` : "auto",
            transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)`,
          }}
        >
          {txt}
          <span className="text-white animate-pulse">|</span>
        </div>
      ))}

      {/* Foreground Content */}
      <motion.div
        className="w-full z-10 backdrop-blur-[1px] m-0 p-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl md:text-4xl text-gray-200 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Hi, I'm
        </motion.h1>

        <motion.h1
          className="gradient-name"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2, type: "spring" }}
        >
          VIJAYASANKAR
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-[#ff2f8a] mt-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {roles[index].substring(0, subIndex)}
          <span className="animate-pulse">|</span>
        </motion.h2>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <a
            href="https://github.com/vijayasankar22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#ff2f8a] transition-transform duration-300 hover:scale-125"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/vijayasankarp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#ff2f8a] transition-transform duration-300 hover:scale-125"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:vijayasankar2225@gmail.com"
            className="text-gray-400 hover:text-[#ff2f8a] transition-transform duration-300 hover:scale-125"
          >
            <MailIcon />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.a
        href="#about"
        className="absolute bottom-10 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#ff2f8a]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.a>
    </section>
  );
};

export default Hero;
