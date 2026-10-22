import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CheckCircle2, Terminal, BookOpen, Clock, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  const { experience, education, certifications, practicalLearning, cybersecurityLearning } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-midnight-900 border-t border-surface-border relative">
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
            Trajectory &amp; Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Education &amp; Experience
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl font-sans font-normal">
            Verified academic qualifications, technical training credentials, and hands-on lab experience.
          </p>
          <div className="w-12 h-1 bg-accent-purple rounded-full mt-3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          
          {/* Left Column: Education & Work Experience (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-1">
                <GraduationCap className="w-4 h-4 text-accent-purple" />
                <span>Academic Education</span>
              </div>

              <div className="space-y-4">
                {education.map((item, idx) => (
                  <div
                    key={idx}
                    className="card-dark p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                          {item.degree}
                        </h3>
                        <div className="text-sm font-medium text-accent-purple mt-1">
                          {item.institution}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-accent-purple/10 text-xs font-semibold text-accent-purple border border-accent-purple/20 font-mono shrink-0 self-start">
                        {item.period}
                      </span>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-surface-border flex flex-wrap items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-midnight-950 border border-surface-border text-xs text-slate-300">
                        <span className="text-slate-500 font-mono">Award:</span>
                        <span className="font-semibold text-slate-200">{item.status}</span>
                      </div>
                    </div>

                    {item.details && (
                      <p className="mt-3.5 text-sm text-slate-300 leading-relaxed font-sans font-normal">
                        {item.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            {experience && experience.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-1">
                  <Briefcase className="w-4 h-4 text-accent-purple" />
                  <span>Work Experience</span>
                </div>

                <div className="space-y-4">
                  {experience.map((item, idx) => (
                    <div
                      key={idx}
                      className="card-dark p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-heading font-bold text-white">
                            {item.role}
                          </h3>
                          <div className="text-sm font-medium text-accent-purple mt-0.5">
                            {item.organization}
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-midnight-950 text-xs font-mono text-slate-300 border border-surface-border shrink-0">
                          {item.period}
                        </span>
                      </div>

                      <p className="mt-3 text-sm text-slate-300 leading-relaxed font-sans font-normal">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Certifications & Training & Practical Learning (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Verified Certifications & Training */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-1">
                <Award className="w-4 h-4 text-accent-blue" />
                <span>Verified Certifications &amp; Training</span>
              </div>

              <div className="card-dark p-6 sm:p-7 space-y-3.5">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-midnight-950/70 border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:border-surface-borderLight"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent-purple shrink-0 mt-1" />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm font-heading font-bold text-white">
                            {cert.title}
                          </h4>
                          {cert.url && (
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-accent-blue transition-colors inline-flex items-center"
                              title={`Official Course Website: ${cert.url}`}
                              aria-label={`Official website for ${cert.title} (opens in new tab)`}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5 font-medium flex items-center gap-2 flex-wrap">
                          {cert.url ? (
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-accent-blue transition-colors hover:underline underline-offset-2"
                            >
                              {cert.issuer}
                            </a>
                          ) : (
                            <span>{cert.issuer}</span>
                          )}
                          {cert.category && (
                            <span className="text-[10px] font-mono text-slate-500">
                              &bull; {cert.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto pl-7 sm:pl-0">
                      <span className="px-2.5 py-0.5 rounded-md bg-accent-purple/10 border border-accent-purple/25 text-xs font-mono font-medium text-accent-purple">
                        {cert.status}
                      </span>
                      {cert.year && (
                        <span className="px-2.5 py-0.5 rounded-md bg-midnight-900 border border-surface-border text-xs font-mono text-slate-400">
                          {cert.year}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Learning */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-1">
                <Terminal className="w-4 h-4 text-accent-purple" />
                <span>Practical Learning</span>
              </div>

              <div className="card-dark p-6 sm:p-7 space-y-3.5">
                {practicalLearning.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-midnight-950/70 border border-surface-border flex flex-col gap-2 transition-colors hover:border-surface-borderLight"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <Terminal className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-heading font-bold text-white">
                            {item.title}
                          </h4>
                          <div className="text-xs font-medium text-accent-blue mt-0.5">
                            {item.platform}
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-midnight-900 border border-surface-border shrink-0">
                        {item.type || 'Interactive Labs'}
                      </span>
                    </div>
                    {item.activity && (
                      <p className="text-xs text-slate-400 font-sans pl-6 leading-relaxed">
                        {item.activity}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Separate Cybersecurity Learning / Currently Learning Category */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-1">
                <BookOpen className="w-4 h-4 text-accent-blue" />
                <span>Cybersecurity Learning &bull; Currently Learning</span>
              </div>

              <div className="card-dark p-6 sm:p-7 space-y-3.5">
                {cybersecurityLearning.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl bg-midnight-950/70 border flex flex-col gap-2 transition-colors hover:border-surface-borderLight ${
                      item.isPendingVerification
                        ? 'border-sky-500/25 bg-sky-950/10'
                        : 'border-surface-border'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-accent-purple shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-heading font-bold text-white">
                            {item.title}
                          </h4>
                          <div className="text-xs font-medium text-slate-400 mt-0.5">
                            {item.provider}
                          </div>
                        </div>
                      </div>

                      <span
                        className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-medium border shrink-0 ${
                          item.isPendingVerification
                            ? 'text-sky-300 bg-sky-500/10 border-sky-500/30'
                            : 'text-amber-300/90 bg-amber-500/10 border-amber-500/20'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {item.note && (
                      <p className="text-xs text-slate-400 font-sans pl-6 leading-relaxed">
                        {item.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

