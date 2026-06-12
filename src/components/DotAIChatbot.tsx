/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Sparkles, User } from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

export default function DotAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Hello. I am Dot AI, the automated assistant for Dotprojects. How can I assist you with your engineering or digital requirements today?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = inputValue.trim();
    setInputValue('');
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API key not found.");
      }

      const promptContext = `You are Dot AI, the professional, futuristic automated assistant for Dotprojects, an engineering and digital agency founded by Devaan. You specialize in IoT, Web Apps, and Custom PCBs. Keep responses extremely concise (1-3 sentences maximum). Dotprojects services: Website Plan (starts ₹1299), App Plan (starts ₹1699), Custom IoT Code (starts ₹399), Custom PCB Design (starts ₹499). Contact: WhatsApp +91 8921546426 or email support@dotdvn.me. Respond to this user query: "${currentInput}"`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptContext }] }]
        })
      });

      const data = await response.json();
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, my neural networks are currently experiencing latency. Please try again.";

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiText,
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "I am unable to process requests at this time. Please ensure the API key is configured in the environment (.env) as VITE_GEMINI_API_KEY.",
      };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-gradient-to-r from-gold-base to-gold-light shadow-[0_0_20px_rgba(167,139,113,0.3)] flex items-center justify-center text-black cursor-pointer transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Bot className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-6 right-6 z-[100] w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] flex flex-col bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/5 bg-black/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gold-base/20 border border-gold-base/40 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gold-light" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#0a0a0a]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Dot AI <Sparkles className="w-3 h-3 text-gold-base" />
                  </h3>
                  <p className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">Online System</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'ai' && (
                    <div className="w-6 h-6 rounded-full bg-gold-base/10 border border-gold-base/20 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-gold-light" />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[75%] px-4 py-2.5 text-xs leading-relaxed rounded-2xl ${
                      msg.sender === 'user' 
                        ? 'bg-gold-base text-black rounded-tr-sm font-medium' 
                        : 'bg-white/5 text-gray-300 border border-white/5 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center ml-2 flex-shrink-0 mt-1">
                      <User className="w-3 h-3 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex w-full justify-start items-center">
                  <div className="w-6 h-6 rounded-full bg-gold-base/10 border border-gold-base/20 flex items-center justify-center mr-2 flex-shrink-0">
                    <Bot className="w-3 h-3 text-gold-light" />
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-black/20">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask Dot AI..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-12 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-base/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-1.5 w-8 h-8 rounded-full bg-gold-base hover:bg-gold-light flex items-center justify-center text-black disabled:opacity-50 disabled:hover:bg-gold-base transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
