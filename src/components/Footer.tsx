/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  HelpCircle,
  Twitter,
  Github,
  GitBranch
} from 'lucide-react';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [planType, setPlanType] = useState('plan-prof');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-[#080808] text-gray-400 border-t border-white/5 py-16 lg:py-24 relative select-none">
      
      {/* Grid overlay dots in background */}
      <div className="absolute inset-0 bg-dots pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Contact Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] font-bold text-gold-base tracking-[0.25em] uppercase block mb-3">
            COLLABORATION & DISPATCH
          </span>
          <h2 className="font-serif italic text-3xl md:text-5xl text-white tracking-tight mb-4">
            Let's build something exceptional together
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Have a custom automation goal, embedded microcontroller challenge, or business web application to build? Get in touch and let us draft a highly optimized, beautiful technical solution.
          </p>
        </div>

        {/* Form and Coordinates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* Coordinates Column - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full text-left bg-white/[0.01] border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            
            <div className="space-y-8">
              {/* Brand descriptor */}
              <div className="space-y-4">
                <div href="#" className="flex items-center gap-2.5 group">
                  <span className="w-8 h-8 rounded-full border border-gold-base/50 flex items-center justify-center bg-gold-base/10 shadow-[0_0_15px_rgba(167,139,113,0.15)]">
                    <Sparkles className="w-4 h-4 text-gold-light" />
                  </span>
                  <span className="font-sans font-extrabold text-xl tracking-tight text-white uppercase">
                    DOT PROJECTS<span className="text-gold-base">.</span>
                  </span>
                </div>
                <p className="font-sans text-xs text-gray-400 leading-relaxed tracking-wide">
                  Providing premium hardware routing and high-fidelity digital platforms. We transform block diagrams and circuit ideas into pristine production realities.
                </p>
              </div>

              {/* Coordinates details */}
              <div className="space-y-6 pt-2">
                <div className="font-mono text-[9px] uppercase tracking-widest text-gold-base">
                  COMMUNICATION FREQUENCY
                </div>
                
                {/* Email Address */}
                <a 
                  href="mailto:support@dotdvn.me" 
                  className="flex items-center gap-4 group p-3.5 rounded-xl border border-white/5 bg-black/25 hover:border-gold-base/30 hover:bg-gold-base/5 transition-all duration-300"
                  id="contact_email_link"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-base/10 flex items-center justify-center border border-gold-base/20 group-hover:bg-gold-base/20 transition-all">
                    <Mail className="w-4 h-4 text-gold-light" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-gray-500 uppercase block">EMAIL ADDRESS</span>
                    <span className="font-sans text-sm font-bold text-white tracking-wide">support@dotdvn.me</span>
                  </div>
                </a>

                {/* Phone Call */}
                <a 
                  href="tel:8921546426" 
                  className="flex items-center gap-4 group p-3.5 rounded-xl border border-white/5 bg-black/25 hover:border-gold-base/30 hover:bg-gold-base/5 transition-all duration-300"
                  id="contact_phone_link"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-base/10 flex items-center justify-center border border-gold-base/20 group-hover:bg-gold-base/20 transition-all">
                    <Phone className="w-4 h-4 text-gold-light" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-gray-500 uppercase block">DIRECT HOTLINE</span>
                    <span className="font-sans text-sm font-bold text-white tracking-wide">8921546426</span>
                  </div>
                </a>

                {/* Public Domain */}
                <a 
                  href="https://dotprojects.dotdvn.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3.5 rounded-xl border border-white/5 bg-black/25 hover:border-gold-base/30 hover:bg-gold-base/5 transition-all duration-300"
                  id="contact_website_link"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-base/10 flex items-center justify-center border border-gold-base/20 group-hover:bg-gold-base/20 transition-all">
                    <Globe className="w-4 h-4 text-gold-light" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-gray-500 uppercase block">STABLE WEBSITE</span>
                    <span className="font-sans text-sm font-bold text-white tracking-wide">dotprojects.dotdvn.me</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Micro Metadata Indicator */}
            <div className="flex items-center gap-3 font-mono text-[8.5px] text-gray-600 border-t border-white/5 pt-6 mt-6">
              <GitBranch className="w-3 h-3 text-gold-base animate-pulse" />
              <span>STATION LATENCY: 0.04s // CHANNELS STABLE</span>
            </div>
          </div>

          {/* Contact Dispatch Form - 7 Cols */}
          <div className="lg:col-span-7 bg-white/[0.01] border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between" id="contact_form_area">
            
            <div className="mb-6">
              <h3 className="font-sans font-extrabold text-xl text-white tracking-tight mb-2 text-left">
                Submit Dispatch Inquiry
              </h3>
              <p className="font-sans text-xs text-gray-400 text-left">
                Directly communicate your project specs to Rohan & Devika. We reply under 12 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Input Name */}
                <div>
                  <label className="font-mono text-[8.5px] text-gray-500 uppercase block mb-2 font-bold tracking-wider">YOUR NAME</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Jayanth Sharma" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isSubmitted}
                    className="w-full bg-black/40 border border-white/10 rounded-md py-3 px-4 font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-base transition-colors"
                  />
                </div>

                {/* Input Email */}
                <div>
                  <label className="font-mono text-[8.5px] text-gray-500 uppercase block mb-2 font-bold tracking-wider">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    placeholder="E.g. jayanth@domain.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitted}
                    className="w-full bg-black/40 border border-white/10 rounded-md py-3 px-4 font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-base transition-colors"
                  />
                </div>
              </div>

              {/* Select targeted pricing tier target */}
              <div>
                <label className="font-mono text-[8.5px] text-gray-500 uppercase block mb-2 font-bold tracking-wider">INTERESTED TECHNICAL PLAN</label>
                <select
                  value={planType}
                  onChange={(e) => setPlanType(e.target.value)}
                  disabled={isSubmitted}
                  className="w-full bg-black/40 border border-white/10 rounded-md py-3 px-4 font-sans text-xs text-white focus:outline-none focus:border-gold-base transition-colors appearance-none cursor-pointer"
                >
                  <option value="plan-starter">Custom IoT Code Plan (IoT Code Making - Starting ₹399)</option>
                  <option value="plan-prof">Website Plan (Premium Website - Starting ₹1299)</option>
                  <option value="plan-advanced">App Plan (App Development - Starting ₹1699)</option>
                  <option value="plan-pcb">Custom PCB Plan (PCB Designing - Starts ₹499)</option>
                </select>
              </div>

              {/* Textarea inquiry */}
              <div>
                <label className="font-mono text-[8.5px] text-gray-500 uppercase block mb-2 font-bold tracking-wider">PROJECT DESCRIPTION & HARDWARE REQUIREMENTS</label>
                <textarea 
                  rows={4}
                  placeholder="Summarize your circuit needs, required sensors, web features, responsive specs, and presentation parameters..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={isSubmitted}
                  className="w-full bg-black/40 border border-white/10 rounded-md py-3 px-4 font-sans text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-base transition-colors resize-none"
                />
              </div>

              {/* Submission CTA with beautiful state transitions */}
              <button 
                type="submit"
                disabled={isSubmitted}
                className="w-full py-4 bg-white text-black hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(167,139,113,0.25)] font-sans text-xs font-bold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 isDisabled:opacity-50"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Transmit Secure inquiry</span>
              </button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex flex-col gap-1.5 p-4 border border-green-500/20 bg-green-950/25 rounded-md text-green-300 mt-3 text-xs font-sans text-left"
                    id="submit_success_receipt"
                  >
                    <div className="flex items-center gap-2 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-green-400" />
                      <span>Blueprints Transmitted Successfully!</span>
                    </div>
                    <span className="text-[11px] leading-relaxed opacity-80">
                      Thank you! We will reach out to you via <strong>support@dotdvn.me</strong> or give you a direct call under <strong>8921546426</strong>.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        <hr className="border-white/5 mb-10" />

        {/* Footer Bottom copyright alignment */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-sans text-[10px] text-gray-600 tracking-wider">
            <span>© 2026 DOT PROJECTS CO.</span>
            <span>//</span>
            <span>AFFORDABLE HARDWARE & DIGITAL EXPERT ROUTING</span>
          </div>
          
          <div className="flex gap-4 font-mono text-[9px] text-gray-500">
            <a href="#capabilities" className="hover:text-gold-light">SYSTEM_DRAFT</a>
            <span>•</span>
            <a href="#pricing" className="hover:text-gold-light">COST_INDEX</a>
            <span>•</span>
            <a href="mailto:support@dotdvn.me" className="hover:text-gold-light">SUPPORT_DIRECT</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
