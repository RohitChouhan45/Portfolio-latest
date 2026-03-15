import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Development Intern',
      company: 'Wisflux Tech Labs',
      period: 'July 2025 - August 2025',
      desc: [
        'Collaborated on building robust scalable web applications using React.js and Node.js.',
        'Engineered responsive layouts and optimized frontend performance by 30%.',
        'Implemented core authentication flows and backend services utilizing PostgreSQL.',
        'Actively participated in agile workflows, code reviews, and pair programming sessions.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 w-full relative">
      <div className="container mx-auto px-6 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-futuristic rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 py-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute -left-[45px] top-1 h-10 w-10 flex items-center justify-center rounded-full bg-background border border-primary/50 text-primary shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                <Briefcase size={20} />
              </div>

              <div className="glass-card p-8 group hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-lg text-secondary font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-gray-300">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.desc.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <span className="mr-3 text-secondary mt-1.5 opacity-70">▹</span>
                      <span className="leading-relaxed text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
