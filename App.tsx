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
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={appRef} className="min-h-screen relative text-gray-200 font-sans overflow-x-hidden">
      {/* 🖼️ Blurred + darkened background layer */}
      <div
        className="fixed inset-0 -z-20 bg-center bg-cover bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/image.jpg')`, // ✅ use /images.jpg (not Public/)
          filter: 'blur(8px) brightness(0.6)  hue-rotate(0deg)', // 👈 adds blur + reduces opacity
          transform: 'scale(1.1)', // avoids edge gaps due to blur
        }}
      />

      {/* 🌈 Optional soft gradient overlay for cinematic feel */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(214,4,74,0.15),rgba(0,0,0,0.85))]" />

      {/* 💡 Dynamic glowing gradient following mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-all duration-300"
        style={{
          background: `radial-gradient(1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(214, 4, 74, 0.3), transparent 40%)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* 🧠 Main content */}
      <div className="relative z-10 p-8">
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
