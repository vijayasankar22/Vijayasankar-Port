import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, GlobeIcon } from './icons';

const roles = ["Java Full Stack Developer", "Software Developer", "Android Developer", "Problem Solver"];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
  <section
  id="hero"
  className="min-h-screen flex flex-col justify-center items-center text-center bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat"
>

      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-fade-in-down">
          VIJAYASANKAR P
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#e13b78] mb-8 animate-fade-in-up">
          {`${roles[index].substring(0, subIndex)}`}
          <span className="animate-pulse">|</span>
        </h2>
        <div className="flex justify-center space-x-6 animate-fade-in">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#d6044a] transition-transform duration-300 hover:scale-125">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#d6044a] transition-transform duration-300 hover:scale-125">
            <LinkedinIcon />
          </a>
          <a href="mailto:vijayasankar2225@gmail.com" className="text-gray-400 hover:text-[#d6044a] transition-transform duration-300 hover:scale-125">
            <MailIcon />
          </a>
         
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e13b78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
