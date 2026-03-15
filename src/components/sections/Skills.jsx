import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      domain: 'Frontend',
      skills: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'HTML/CSS', 'JavaScript'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      domain: 'Backend',
      skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'Authentication System'],
      color: 'from-green-500 to-emerald-400'
    },
    {
      domain: 'AI / Automation',
      skills: ['OpenAI APIs', 'LLM Integration', 'Workflow Automation', 'Python'],
      color: 'from-purple-500 to-indigo-400'
    },
    {
      domain: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      domain: 'DevOps & Tools',
      skills: ['Git/GitHub', 'Docker', 'Vercel', 'AWS Basic Services', 'CI/CD Pipelines'],
      color: 'from-pink-500 to-rose-400'
    }
  ];

  return (
    <section id="skills" className="py-24 w-full relative bg-black/20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-futuristic rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.domain}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 h-full flex flex-col group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-tr ${cat.color} animate-pulse`}></div>
                <h3 className="text-xl font-semibold text-white tracking-wide">{cat.domain}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm font-medium text-gray-300 group-hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
