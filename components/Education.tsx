import React from "react";
import { motion } from "framer-motion";

// 🎓 Section Title
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#d6044a] rounded-full"></span>
  </h2>
);

// ✨ Education Item
const EducationItem: React.FC<{
  degree: string;
  institution: string;
  period: string;
  location: string;
  index: number;
}> = ({ degree, institution, period, location, index }) => {
  return (
    <motion.div
      className="relative pl-8 sm:pl-12 py-6 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* 🔥 Glowing vertical timeline line */}
      <div className="absolute left-2 sm:left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#ff007f] via-[#d6044a] to-[#ff007f] animate-pulse-glow"></div>

      {/* 🎯 Neon glowing dot */}
      <div className="absolute left-0 sm:left-2 top-6 w-4 h-4 rounded-full bg-[#ff007f] border-2 border-[#ff99cc] shadow-[0_0_15px_#ff007f] group-hover:scale-125 group-hover:shadow-[0_0_25px_#ff3399] transition-all duration-300"></div>

      {/* ✨ Hover Glass Swipe Reflection */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
        <div className="absolute top-0 left-[-150%] w-[200%] h-full bg-[linear-gradient(120deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_40%,rgba(255,255,255,0)_60%)] transform skew-x-[-20deg] group-hover:animate-glassSwipe"></div>
      </div>

      {/* 🧠 Card Content */}
      <div className="transition-transform duration-300 group-hover:translate-x-2 relative z-10 backdrop-blur-md rounded-xl p-4 border border-[#d6044a]/40 hover:border-[#ff007f]/60 hover:shadow-[0_0_25px_rgba(214,4,74,0.4)]">
        <p className="text-sm text-[#e13b78] mb-1">{period}</p>
        <h3 className="text-xl font-semibold text-white">{degree}</h3>
        <p className="text-gray-300">{institution}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </motion.div>
  );
};

// 🎓 Education Section
const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.Tech - Computer Science and Engineering",
      institution: "Sri Venkateshwara College of Engineering and Technology",
      period: "2022 - Present",
      location: "Puducherry",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Achariya Siksha Mandir - CBSE",
      period: "2021",
      location: "Puducherry",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Achariya Siksha Mandir - CBSE",
      period: "2019",
      location: "Puducherry",
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <style>{`
        @keyframes glassSwipe {
          0% { left: -150%; }
          50% { left: 100%; }
          100% { left: 150%; }
        }
        .group-hover\\:animate-glassSwipe {
          animation: glassSwipe 1.5s ease-in-out forwards;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.7; filter: drop-shadow(0 0 6px #d6044a); }
          50% { opacity: 1; filter: drop-shadow(0 0 12px #ff007f); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      <div className="text-center mb-8">
        <SectionTitle>Education</SectionTitle>
      </div>

      <div className="max-w-2xl mx-auto">
        {educationData.map((edu, i) => (
          <EducationItem
            key={i}
            index={i}
            degree={edu.degree}
            institution={edu.institution}
            period={edu.period}
            location={edu.location}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
