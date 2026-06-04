/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageSquareQuote, Check } from 'lucide-react';

import Navbar from './components/Navbar';
import HeroNodeGraph from './components/HeroNodeGraph';
import FeaturesGrid from './components/FeaturesGrid';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import LiveNotificationPill from './components/LiveNotificationPill';
import SubscriptionModal from './components/SubscriptionModal';
import ProjectsGallery from './components/ProjectsGallery';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Website Plan');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Global mouse tracking states for the interactive glowing orb following the cursor on the full website
  const [globalMouse, setGlobalMouse] = useState({ x: 0, y: 0 });
  const [isMouseActive, setIsMouseActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setGlobalMouse({ x: e.clientX, y: e.clientY });
      setIsMouseActive(true);
    };

    const handleMouseLeave = () => {
      setIsMouseActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Cinematic page loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const triggerStartInquiry = () => {
    setSelectedPlan('Website Plan');
    setModalOpen(true);
  };

  const triggerSelectPlan = (planName: string, priceLabel: string) => {
    setSelectedPlan(`${planName} (${priceLabel})`);
    setModalOpen(true);
  };

  const handleSynthesizeCallback = () => {
    setToastMessage("Virtual hardware emulator compilation parsed successfully.");
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div className="bg-dark-bg min-h-screen text-white relative bg-dots selection:bg-gold-base/30 selection:text-white overflow-x-hidden font-sans scroll-smooth">
      
      {/* Cinematic Logo Intro Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="cinematic-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-[#060606] z-[999] flex flex-col items-center justify-center p-6 select-none"
          >
            {/* Spinning gold particle rings */}
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-gold-base/10" />
              <div className="absolute inset-0 rounded-full border-t border-gold-base animate-spin" style={{ animationDuration: '1.5s' }} />
              <div className="absolute inset-2 rounded-full border border-gold-base/25" />
              <div className="absolute inset-2 rounded-full border-b border-gold-light animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
              <Sparkles className="w-5 h-5 text-gold-light animate-pulse" />
            </div>

            <motion.h4
              initial={{ tracking: '0.1em', opacity: 0 }}
              animate={{ tracking: '0.3em', opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="font-sans font-black text-xl lg:text-2xl text-white uppercase"
            >
              DOT PROJECTS
            </motion.h4>
            <p className="font-mono text-[7.5px] text-gold-base tracking-[0.35em] uppercase mt-2.5">
              Initializing Advanced Engineering Pipelines
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Landing Context */}
      {!loading && (
        <div className="flex flex-col min-h-screen relative z-10">
          
          {/* Header Navigation */}
          <Navbar onStartTrial={triggerStartInquiry} />

          {/* Spacer */}
          <div className="h-20" />

          {/* Interactive Core Hero Graph */}
          <main className="flex-1">
            <HeroNodeGraph 
              onStartTrial={triggerStartInquiry} 
              onSynthesize={handleSynthesizeCallback} 
            />

            {/* Core Capabilities - Why Choose Us Grid */}
            <FeaturesGrid />

            {/* Dynamic Interactive Projects Gallery */}
            <ProjectsGallery />

            {/* Premium Editorial Philosophical Manifesto Section */}
            <section id="philosophy" className="py-24 lg:py-36 relative w-full border-t border-white/5 bg-black/60 overflow-hidden text-center select-none">
              
              {/* Background circular lens blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-gold-base/5 blur-[120px] pointer-events-none" />

              <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
                <span className="w-10 h-10 rounded-full border border-gold-base/30 flex items-center justify-center bg-gold-base/5 mb-8 shadow-inner shadow-gold-base/10">
                  <MessageSquareQuote className="w-4 h-4 text-gold-light" />
                </span>

                {/* Customized Philosophical Statement */}
                <h3 className="font-serif italic font-normal text-white text-2xl md:text-3xl lg:text-4xl tracking-normal leading-relaxed mb-8 max-w-3xl">
                  "We believe that digital platforms and core electronics can be designed with exceptional aesthetic quality while remaining highly affordable and accessible for student prototypes and growing businesses."
                </h3>

                <div className="h-[1px] w-12 bg-gold-base/30 mb-4" />
                
                <span className="font-sans font-light text-[11px] uppercase tracking-[0.3em] text-gold-base">
                  DOT PROJECTS Architecture Guild // Principle IV
                </span>
              </div>
            </section>

            {/* Price Plans Section */}
            <PricingSection onSelectPlan={triggerSelectPlan} />
          </main>

          {/* Footer Coordinates Section */}
          <Footer />

          {/* Floating health notification */}
          <LiveNotificationPill />

          {/* Gateway popup */}
          <SubscriptionModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            selectedPlan={selectedPlan}
          />

          {/* Toast Alert feedback popup */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: 30, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                exit={{ opacity: 0, y: 20, x: '-50%' }}
                className="fixed bottom-24 left-1/2 z-50 px-5 py-3 border border-gold-base/30 bg-[#0d0d0d]/95 backdrop-blur-md rounded-full shadow-[0_0_30px_rgba(167,139,113,0.2)] text-xs text-gold-light font-sans tracking-wide flex items-center gap-3 select-none"
              >
                <div className="w-5 h-5 rounded-full bg-gold-base/20 border border-gold-base/40 flex items-center justify-center text-gold-base animate-pulse">
                  <Check className="w-3 h-3" />
                </div>
                <span>{toastMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Global Website Mouse-Following Atmospheric Glows */}
          <AnimatePresence>
            {isMouseActive && (
              <div className="hidden md:block fixed inset-0 pointer-events-none z-[80] overflow-hidden">
                {/* Primary soft gold light pool (Smooth delay spring) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: globalMouse.x - 140, 
                    y: globalMouse.y - 140
                  }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ type: 'spring', damping: 30, stiffness: 120, mass: 0.5 }}
                  className="absolute left-0 top-0 pointer-events-none rounded-full bg-gradient-to-r from-gold-base/15 to-gold-light/10 blur-[85px] w-70 h-70 mix-blend-screen"
                  style={{ willChange: 'transform' }}
                />
                {/* Direct center core ember spotlight (Faster reactive spring) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 0.75, 
                    scale: 1,
                    x: globalMouse.x - 24, 
                    y: globalMouse.y - 24
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 220, mass: 0.3 }}
                  className="absolute left-0 top-0 pointer-events-none rounded-full bg-gradient-to-r from-gold-light/35 to-white/20 blur-xl w-12 h-12"
                  style={{ willChange: 'transform' }}
                />
                {/* Geometric high-tech tracking alignment ring */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ 
                    opacity: 0.5, 
                    scale: 1,
                    x: globalMouse.x - 7, 
                    y: globalMouse.y - 7
                  }}
                  exit={{ opacity: 0, scale: 0.4 }}
                  transition={{ type: 'spring', damping: 15, stiffness: 350, mass: 0.15 }}
                  className="absolute left-0 top-0 pointer-events-none rounded-full border border-gold-light/60 w-3.5 h-3.5 flex items-center justify-center bg-black/5"
                  style={{ willChange: 'transform' }}
                >
                  <span className="w-1 h-1 rounded-full bg-gold-light" />
                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>
      )}
    </div>
  );
}
