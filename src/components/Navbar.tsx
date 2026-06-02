/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onStartTrial: () => void;
}

export default function Navbar({ onStartTrial }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { name: string; href: string }[] = [
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Guild', href: '#guild' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 glass-panel border-x-0 border-t-0 bg-dark-bg/85 backdrop-blur-md">
        <div className="w-full px-6 md:px-10 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-full border border-gold-base/50 flex items-center justify-center bg-gold-base/10 shadow-[0_0_15px_rgba(167,139,113,0.15)] group-hover:scale-105 transition-transform duration-500">
              <Sparkles className="w-4 h-4 text-gold-light" />
            </span>
            <span className="font-sans font-black text-lg lg:text-xl tracking-wider text-white uppercase group-hover:text-gold-light transition-colors duration-300">
              DOT PROJECTS<span className="text-gold-base">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-gold-light transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Premium Inquiry Anchor Trigger Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onStartTrial}
              className="px-6 py-2.5 border border-gold-base/20 hover:border-gold-base rounded-md font-sans text-[11px] font-bold uppercase tracking-wider text-gold-base hover:text-white hover:bg-gold-base/10 transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              Get Prop Code
            </button>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-2.5 bg-white text-black hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(167,139,113,0.3)] rounded-md font-sans text-[11px] font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Contact Advisors
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-gold-light" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-20 left-0 w-full z-40 bg-[#080808]/95 backdrop-blur-lg border-b border-white/10 md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.length > 0 && (
                <>
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="font-sans text-[12px] font-bold uppercase tracking-widest text-gray-300 hover:text-gold-light transition-colors py-2 text-left"
                    >
                      {link.name}
                    </a>
                  ))}
                  <hr className="border-white/5 my-1" />
                </>
              )}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onStartTrial();
                  }}
                  className="w-full py-3 border border-white/10 rounded-md font-sans text-xs font-bold uppercase tracking-wider text-gray-300 hover:border-gold-base/50"
                >
                  Get Prop Code
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-3 bg-white text-black rounded-md font-sans text-xs font-bold uppercase tracking-wider hover:bg-gold-hover transition-colors"
                >
                  Contact Advisors
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
