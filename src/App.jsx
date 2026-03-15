import React from 'react';
import CustomCursor from './components/ui/CustomCursor';
import ThreeBackground from './components/3d/ThreeBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';

import Contact from './components/sections/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-futuristic origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <CustomCursor />
      <ThreeBackground />
      
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
