import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-white/10 glass-card rounded-none z-10 relative mt-12 bg-background/50">
      <div className="container mx-auto px-6 text-center">
         <p className="text-gray-400 text-sm font-medium flex items-center justify-center gap-2">
           Built with <span className="text-primary animate-pulse">❤</span> by <span className="text-white hover:text-gradient transition-colors cursor-pointer">Rohit Chouhan</span> © {new Date().getFullYear()}
         </p>
      </div>
    </footer>
  );
};

export default Footer;
