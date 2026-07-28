/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-cyan-500/30 font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950"></div>
      <div className="fixed inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5aDQwVjBIMzl2NDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-[0.02]"></div>
      
      {/* Header */}
      <header className="relative z-10 container mx-auto px-6 lg:px-8 py-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-2xl font-semibold tracking-tighter text-white"
        >
          Zaguzov<span className="text-zinc-500">-IT</span>
        </motion.div>
        <motion.a 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          href="https://t.me/SergeiZaguzov" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
        >
          Связаться
        </motion.a>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 lg:px-8">
        <Hero />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}
