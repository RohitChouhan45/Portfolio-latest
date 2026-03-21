import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MailBuddy',
      desc: 'AI-powered email assistant with smart replies, categorization, and robust workflow automation tailored for bulk email handling.',
      image: '@/assets/Screenshot 2025-02-21 095053.png', // Minimalist email mockup style
      tech: ['React', 'Node.js', 'OpenAI API', 'Tailwind'],
      github: 'https://github.com/hxrjt/MailBuddy',
      live: '#'
    },
    {
      title: 'Finance tracker',
      desc: 'Track your financial health with ease! This tracker provides a monthly overview, spending analysis, and key metrics like your largest expense.',
      image: '@/assets/Screenshot 2025-02-21 095053.png', // Dynamic TV UI placeholder
      tech: ['JavaScript', 'React', 'Tailwind CSS'],
      github: 'https://github.com/RohitChouhan45/Finance-Tracker',
      live: 'https://financetrackerbyrohit.netlify.app/'
    },
    {
      title: 'LocalBiz',
      desc: 'LocalBiz Builder is a powerful, modern platform designed to help local businesses create and manage their professional websites instantly.',
      image: '@/assets/Screenshot 2025-07-12 014721.png', // E-commerce store aesthetic
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/RohitChouhan45/LocalBiz',
      live: 'https://librarybyrohit.netlify.app/'
    },
    {
      title: 'Nonogram',
      desc: 'A fully interactive Nonogram game I built, featuring dynamic grid solving and intuitive gameplay. Players use numerical clues to uncover pixel images through logical deduction.',
      image: '@/assets/Screenshot 2025-07-12 014721.png',
      tech: ['React', 'NextJS', 'Express.js', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/RohitChouhan45/LocalBiz',
      live: 'https://nonogrambyrohit.netlify.app/'
    },
    {
      title: 'Portfolio',
      desc: 'my personal portfolio showcasing my projects, skills, and experience as a Full Stack Developer and AI Enthusiast.',
      image: '@/assets/Screenshot 2025-07-12 014721.png',
      tech: ['React', 'NextJS', 'Express.js', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/RohitChouhan45/LocalBiz',
      live: 'https://portfoliobyrohit.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-24 w-full relative">
      <div className="container mx-auto px-6 max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-futuristic rounded-full"></div>
          </div>

          <a href="https://github.com/RohitChouhan45" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium">
            View full archive <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card group overflow-hidden flex flex-col h-full border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-secondary px-2 py-1 bg-secondary/10 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium border border-white/10 group/btn">
                    <Github size={16} className="group-hover/btn:scale-110 transition-transform" /> Code
                  </a>
                  <a href={project.live} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors text-sm font-medium border border-primary/30 text-primary-light group/btn">
                    <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
