import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BrainCircuit, Code, Rocket } from 'lucide-react';

const About = () => {
  const cards = [
    {
      title: 'Education',
      desc: 'Final-year IT student at Arya College of Engineering & IT.',
      icon: <GraduationCap size={24} className="text-primary" />
    },
    {
      title: 'Full Stack',
      desc: 'Building responsive web apps with React, Node.js, and PostgreSQL.',
      icon: <Code size={24} className="text-secondary" />
    },
    {
      title: 'AI & Automation',
      desc: 'Integrating AI APIs and designing intelligent workflow systems.',
      icon: <BrainCircuit size={24} className="text-primary" />
    },
    {
      title: 'Cloud & DevOps',
      desc: 'Deploying scalable services and managing modern CI/CD pipelines.',
      icon: <Rocket size={24} className="text-secondary" />
    }
  ];

  return (
    <section id="about" className="py-24 w-full relative">
      <div className="container mx-auto px-6 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-gradient-futuristic rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              I am a final-year Information Technology  student driven by a passion for building <strong className="text-white font-medium">intelligent software</strong> and <strong className="text-white font-medium">scalable web applications</strong>.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              My technical journey involves navigating the robust ecosystems of <span className="text-primary font-medium">React</span> and <span className="text-secondary font-medium">Node.js</span>, while continuously exploring cutting-edge <span className="text-primary font-medium">AI integrations</span> and automation systems to streamline complex workflows.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Whether it's designing a seamless frontend architecture or optimizing database queries in PostgreSQL, my goal is to deliver world-class digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {cards.map((card, idx) => (
              <div key={idx} className="glass-card p-6 border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
