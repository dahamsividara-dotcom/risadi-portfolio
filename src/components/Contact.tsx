import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import {
  sendContactEmail,
  validateContactForm,
  type ContactFormData,
  type ValidationErrors,
} from '../services/emailService';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isConfigMissing, setIsConfigMissing] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedType('email');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedType('phone');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-specific validation error on change
    if (formErrors[field as keyof ValidationErrors]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    // Clear global error state when user modifies inputs
    if (status === 'error') {
      setStatus('idle');
      setStatusMessage('');
      setIsConfigMissing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return; // Prevent duplicate submissions

    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    setStatus('sending');
    setStatusMessage('');
    setIsConfigMissing(false);

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus('success');
      setStatusMessage(result.message || 'Your message has been delivered directly to Risadi Vidara.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setStatus('error');
      setStatusMessage(result.error || 'Failed to deliver message. Please try again.');
      setIsConfigMissing(Boolean(result.isConfigMissing));
    }
  };

  const handleResetSuccess = () => {
    setStatus('idle');
    setStatusMessage('');
    setIsConfigMissing(false);
    setFormErrors({});
  };

  const fallbackMailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
    formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 bg-midnight-900 border-t border-surface-border relative">
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
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Contact &amp; Inquiries
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-xl font-sans font-normal">
            Whether you want to discuss an engineering role, collaborative research, or project ideas, my inbox is open.
          </p>
          <div className="w-12 h-1 bg-accent-purple rounded-full mt-3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          
          {/* Left Column: Direct Contact & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-dark p-7 space-y-6">
              
              <div>
                <h3 className="text-lg font-heading font-bold text-white">
                  Direct Inquiries
                </h3>
                <p className="mt-1 text-sm text-slate-400 font-sans">
                  Available for engineering roles, technical collaboration, and discussions.
                </p>
              </div>

              {/* Email Card with Clickable mailto: and Copy Action */}
              <div className="p-4 rounded-xl bg-midnight-950 border border-surface-border flex items-center justify-between gap-3 hover:border-accent-purple/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden min-w-0">
                  <div className="p-2.5 rounded-lg bg-accent-purple/20 text-accent-purple border border-accent-purple/30 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-medium text-slate-200 hover:text-accent-blue transition-colors truncate block focus:outline-none focus:underline"
                      title={`Send email to ${personal.email}`}
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-surface hover:bg-slate-800 text-xs font-medium text-slate-300 border border-surface-border transition-colors flex items-center gap-1.5 shrink-0 focus:outline-none focus:ring-2 focus:ring-accent-purple/50"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card with Clickable tel: and Copy Action */}
              <div className="p-4 rounded-xl bg-midnight-950 border border-surface-border flex items-center justify-between gap-3 hover:border-accent-blue/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden min-w-0">
                  <div className="p-2.5 rounded-lg bg-accent-blue/20 text-accent-blue border border-accent-blue/30 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-mono">
                      Phone Number
                    </div>
                    <a
                      href={`tel:${personal.phoneTel}`}
                      className="text-sm font-medium text-slate-200 hover:text-accent-blue transition-colors block font-mono focus:outline-none focus:underline"
                      title={`Call ${personal.phone}`}
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-3 py-1.5 rounded-lg bg-surface hover:bg-slate-800 text-xs font-medium text-slate-300 border border-surface-border transition-colors flex items-center gap-1.5 shrink-0 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Profiles */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block font-mono">
                  Professional Profiles
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Risadi Vidara on GitHub (opens in new tab)"
                    title="GitHub: https://github.com/dahamsividara-dotcom"
                    className="p-3.5 rounded-xl bg-midnight-950 border border-surface-border hover:border-slate-700 transition-all flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent-purple/50"
                  >
                    <div className="p-2 rounded-lg bg-surface text-slate-300 group-hover:text-white transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-heading font-bold text-white flex items-center gap-1">
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-[11px] text-slate-400 font-sans">
                        Repositories
                      </div>
                    </div>
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Risadi Vidara on LinkedIn (opens in new tab)"
                    title="LinkedIn: https://www.linkedin.com/in/risadi-vidara-88713a361"
                    className="p-3.5 rounded-xl bg-midnight-950 border border-surface-border hover:border-accent-purple/50 transition-all flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                  >
                    <div className="p-2 rounded-lg bg-accent-purple/20 text-accent-purple transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-heading font-bold text-white flex items-center gap-1">
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-3 h-3 text-accent-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-[11px] text-slate-400 font-sans">
                        Network
                      </div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Website Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="card-dark p-7 sm:p-9">
              
              <div className="mb-6">
                <h3 className="text-lg font-heading font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-400 font-sans">
                  Submits directly from this page to <span className="text-accent-blue">{personal.email}</span> without opening an email client.
                </p>
              </div>

              {/* Success Notification Banner */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 sm:p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-1 text-left flex-1">
                      <h4 className="text-sm font-heading font-bold text-white">
                        Message Delivered Successfully
                      </h4>
                      <p className="text-xs text-emerald-200/90 leading-relaxed font-sans">
                        {statusMessage}
                      </p>
                      <button
                        type="button"
                        onClick={handleResetSuccess}
                        className="pt-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 inline-flex items-center gap-1 focus:outline-none"
                      >
                        Send another message &rarr;
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Notification Banner */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 sm:p-5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 flex items-start gap-3.5"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-1.5 text-left flex-1">
                      <h4 className="text-sm font-heading font-bold text-white">
                        {isConfigMissing ? 'Email Service Setup Pending' : 'Unable to Send Message'}
                      </h4>
                      <p className="text-xs text-rose-200/90 leading-relaxed font-sans">
                        {statusMessage}
                      </p>
                      
                      {/* Helpful Fallback Option */}
                      <div className="pt-2 mt-2 border-t border-rose-900/50 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                        <span className="text-slate-400">Alternative direct email option:</span>
                        <a
                          href={fallbackMailtoUrl}
                          className="text-accent-blue hover:underline font-medium inline-flex items-center gap-1"
                        >
                          Open in email client &rarr;
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Contact Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-sans">
                      Your Name <span className="text-accent-purple">*</span>
                    </label>
                    <input
                      type="text"
                      disabled={status === 'sending'}
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Jane Doe"
                      className={`w-full bg-midnight-950 border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed ${
                        formErrors.name
                          ? 'border-rose-500/70 focus:border-rose-500 bg-rose-950/10'
                          : 'border-surface-border focus:border-accent-purple'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 font-sans">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-sans">
                      Your Email <span className="text-accent-purple">*</span>
                    </label>
                    <input
                      type="email"
                      disabled={status === 'sending'}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="jane@organization.com"
                      className={`w-full bg-midnight-950 border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed ${
                        formErrors.email
                          ? 'border-rose-500/70 focus:border-rose-500 bg-rose-950/10'
                          : 'border-surface-border focus:border-accent-purple'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 font-sans">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-sans">
                    Subject
                  </label>
                  <input
                    type="text"
                    disabled={status === 'sending'}
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="Engineering Opportunity / Security Collaboration"
                    className="w-full bg-midnight-950 border border-surface-border focus:border-accent-purple focus:outline-none rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-sans">
                    Message <span className="text-accent-purple">*</span>
                  </label>
                  <textarea
                    rows={5}
                    disabled={status === 'sending'}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Hello Risadi, I would like to discuss..."
                    className={`w-full bg-midnight-950 border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors resize-none focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed ${
                      formErrors.message
                        ? 'border-rose-500/70 focus:border-rose-500 bg-rose-950/10'
                        : 'border-surface-border focus:border-accent-purple'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-rose-400 mt-1 font-sans">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button with Loading State */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-purple w-full py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-purple-soft disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message Directly</span>
                    </>
                  )}
                </button>

                <div className="text-[11px] text-slate-500 text-center pt-1 font-sans">
                  Delivered directly to {personal.email} without opening an email client.
                </div>
              </form>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

