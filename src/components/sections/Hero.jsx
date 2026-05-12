import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, FileText } from 'lucide-react';
import Resume from '../../assets/Resume.pdf';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen w-full flex flex-col items-center justify-center p-8 px-4 sm:px-8 relative pt-20">

      {/* Decorative floating blur elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none animation-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] pointer-events-none animation-float"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-8"
        >
          <Terminal size={16} className="text-secondary" />
          <span className="text-sm font-medium tracking-wide">Building the future of the web</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Hi, I'm <br className="md:hidden" />
          <span className="text-gradient hover:opacity-80 transition-opacity cursor-pointer">Rohit Chouhan</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Full Stack Developer & AI Builder crafting intelligent software, automation systems, and scalable web applications.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a href="#projects" className="group px-8 py-4 rounded-full bg-primary text-white hover:bg-primary-dark transition-all duration-300 font-semibold w-full sm:w-auto shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] flex items-center justify-center gap-2">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full border border-glassBorder hover:bg-glass text-gray-200 transition-all duration-300 font-semibold w-full sm:w-auto glass-card flex items-center justify-center group hover:border-secondary/50">
            Contact Me
          </a>
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-glassBorder hover:bg-glass text-gray-200 transition-all duration-300 font-semibold w-full sm:w-auto glass-card flex items-center justify-center gap-2 group hover:border-secondary/50">
            <FileText size={18} className="text-secondary" />
            View Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
