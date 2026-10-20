import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Code, Smartphone, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillGroups } = portfolioData;

  const getGroupIcon = (title: string) => {
    if (title.includes('Cybersecurity')) return <Shield className="w-5 h-5 text-accent-purple" />;
    if (title.includes('AI')) return <Brain className="w-5 h-5 text-accent-purple" />;
    if (title.includes('Software')) return <Code className="w-5 h-5 text-accent-purple" />;
    if (title.includes('Mobile')) return <Smartphone className="w-5 h-5 text-accent-blue" />;
    return <Palette className="w-5 h-5 text-accent-blue" />;
  };

  return (
    <section id="skills" className="py-24 bg-midnight-900 border-t border-surface-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-start mb-14"
        >
          <span className="section-label mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl font-sans font-normal">
            Technologies and methodologies applied across projects, security operations labs, and academic coursework.
          </p>
          <div className="w-12 h-1 bg-accent-purple rounded-full mt-3" />
        </motion.div>

        {/* Clean Skill Group Cards with staggered in-view reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillGroups.map((group, idx) => {
            const isLearningArea = group.isLearningArea;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="card-dark p-6 sm:p-7 flex flex-col justify-start group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-midnight-950 border border-surface-border group-hover:border-accent-purple/40 transition-colors">
                    {getGroupIcon(group.title)}
                  </div>
                  {isLearningArea && (
                    <span className="px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue text-[11px] font-semibold border border-accent-blue/30 font-mono">
                      Exploring
                    </span>
                  )}
                </div>

                <h3 className="text-base font-heading font-bold text-white tracking-tight group-hover:text-accent-purple transition-colors">
                  {group.title}
                </h3>

                {group.description && (
                  <p className="text-xs text-slate-400 mt-1 mb-3 font-sans">
                    {group.description}
                  </p>
                )}

                {/* Skills pill chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-midnight-950 text-xs font-medium text-slate-300 border border-surface-border transition-colors hover:border-accent-purple/40 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
