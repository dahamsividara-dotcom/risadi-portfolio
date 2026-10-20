import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-midnight-900/90 backdrop-blur-md border-b border-surface-border py-3.5 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-purple/20 text-accent-purple border border-accent-purple/40 flex items-center justify-center font-heading font-bold text-sm tracking-tight group-hover:bg-accent-purple group-hover:text-white transition-all duration-200">
              RV
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-white text-sm tracking-tight group-hover:text-accent-purple transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                AI &amp; Cybersecurity
              </span>
            </div>
          </a>

          {/* Minimal Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/80 px-2 py-1.5 rounded-full border border-surface-border backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-accent-purple/15 hover:shadow-[0_0_12px_rgba(139,92,246,0.2)] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Contact Button */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-surface rounded-lg border border-transparent hover:border-surface-border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-purple/50"
              title="GitHub Profile (opens in new tab)"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-accent-blue hover:bg-surface rounded-lg border border-transparent hover:border-surface-border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              title="LinkedIn Profile (opens in new tab)"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="hidden sm:flex btn-purple ml-1 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide items-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-surface transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-midnight-900/98 backdrop-blur-xl border-b border-surface-border px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-surface rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-surface-border flex items-center justify-between px-2 gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white rounded-lg bg-surface border border-surface-border hover:border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-medium"
                    aria-label="GitHub Profile"
                    title="GitHub Profile (opens in new tab)"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-accent-blue rounded-lg bg-surface border border-surface-border hover:border-accent-purple/50 transition-colors flex items-center gap-1.5 text-xs font-medium"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn Profile (opens in new tab)"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-purple px-4 py-2 rounded-lg text-xs font-semibold"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
