/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Grid, ArrowUp } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-cyan-500/30 font-sans relative overflow-x-hidden">
      {/* Dynamic Organic Interactive Background */}
      <InteractiveBackground />
      
      {/* Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/60 py-4 shadow-2xl' 
          : 'bg-transparent py-6 sm:py-8'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.a 
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="text-xl sm:text-2xl font-semibold tracking-tighter text-white flex items-center gap-1.5 cursor-pointer"
          >
            Zaguzov<span className="text-zinc-500">-IT</span>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, x: 10 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <a 
              href="https://t.me/SergeiZaguzov" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-zinc-950 text-xs sm:text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2 active:scale-95 touch-manipulation shadow-md"
            >
              <Send className="w-3.5 h-3.5 text-zinc-950" />
              <span>Связаться</span>
            </a>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
      </main>
      
      <Footer />

      {/* Mobile Floating Quick Action Bar (Visible only on smartphones) */}
      <div className={`sm:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-500 ${
        scrolled ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}>
        <div className="p-2 rounded-full bg-zinc-900/90 border border-zinc-700/80 backdrop-blur-xl shadow-2xl flex items-center gap-2 justify-between">
          <button
            onClick={scrollToProjects}
            className="flex-1 py-2.5 px-4 rounded-full bg-zinc-800 text-zinc-200 text-xs font-medium flex items-center justify-center gap-2 active:scale-95 touch-manipulation"
          >
            <Grid className="w-3.5 h-3.5 text-cyan-400" />
            <span>Проекты</span>
          </button>

          <a
            href="https://t.me/SergeiZaguzov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 rounded-full bg-cyan-500 text-zinc-950 text-xs font-semibold flex items-center justify-center gap-2 active:scale-95 touch-manipulation shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center active:scale-95 touch-manipulation shrink-0"
            aria-label="Наверх"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

