import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 bg-midnight-900 border-t border-surface-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with smooth reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-start mb-10"
        >
          <span className="section-label mb-3">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Background &amp; Mindset
          </h2>
          <div className="w-12 h-1 bg-accent-purple rounded-full mt-3" />
        </motion.div>

        {/* Clean, Readable Personal Narrative with staggered in-view reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-normal"
        >
          {personal.aboutParagraphs.map((paragraph, idx) => (
            <p key={idx} className="text-slate-300/90 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
