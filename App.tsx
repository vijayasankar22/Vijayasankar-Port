import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (appRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        appRef.current.style.setProperty('--mouse-x', `${x}%`);
        appRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-black text-gray-200 font-sans overflow-x-hidden">
      {/* Interactive gradient background */}
      <div 
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(2200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(214, 4, 74, 0.25), transparent 100%)`
        }}
      />
      
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
