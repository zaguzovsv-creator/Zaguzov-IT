import { motion } from 'motion/react';
import { ArrowDown, Send, Sparkles, ShieldCheck, Cpu } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-12 sm:pt-20 md:pt-28 pb-16 sm:pb-24 lg:pb-32 max-w-5xl relative z-10">
      {/* Studio Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-300 mb-6 sm:mb-8 backdrop-blur-md shadow-inner"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-zinc-400">IT-студия высокой степени надежности</span>
        <span className="text-zinc-600 hidden sm:inline">•</span>
        <span className="text-cyan-400 hidden sm:inline flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 inline" /> AI & Web Platform Architecture
        </span>
      </motion.div>

      {/* Hero Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.08] mb-6 sm:mb-8"
      >
        Создаем IT-продукты, <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          которые меняют бизнес.
        </span>
      </motion.h1>
      
      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-base sm:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal"
      >
        Zaguzov-IT — команда экспертов. Мы специализируемся на разработке
        высоконагруженных платформ, искусственном интеллекте, автоматизации 
        бизнес-процессов и сервисах речевой аналитики.
      </motion.p>

      {/* CTA Buttons - Responsive Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-14 sm:mb-20"
      >
        <a 
          href="https://t.me/SergeiZaguzov" 
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 sm:h-13 px-6 sm:px-7 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 font-medium text-base transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-white/5 active:scale-95 touch-manipulation"
        >
          <Send className="w-4 h-4 text-zinc-950" />
          <span>Обсудить проект</span>
        </a>

        <button 
          onClick={scrollToProjects}
          className="h-12 sm:h-13 px-6 sm:px-7 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700 font-medium text-base transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md active:scale-95 touch-manipulation cursor-pointer"
        >
          <span>Смотреть проекты</span>
          <ArrowDown className="w-4 h-4 text-zinc-400" />
        </button>
      </motion.div>

      {/* Studio Capabilities & Stats Bar (Responsive Grid) */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-zinc-900/80"
      >
        <div className="p-3.5 sm:p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/40 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-cyan-400 mb-1 sm:mb-2">
            <Cpu className="w-4 h-4" />
            <span className="text-xl sm:text-2xl font-semibold text-white tracking-tight">7+</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-medium">Работающих веб-продуктов</p>
        </div>

        <div className="p-3.5 sm:p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/40 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-emerald-400 mb-1 sm:mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xl sm:text-2xl font-semibold text-white tracking-tight">100%</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-medium">Индивидуальная архитектура</p>
        </div>

        <div className="col-span-2 sm:col-span-1 p-3.5 sm:p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/40 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-amber-400 mb-1 sm:mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-xl sm:text-2xl font-semibold text-white tracking-tight">AI & Speech</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-medium">Речевая аналитика и ИИ</p>
        </div>
      </motion.div>
    </section>
  );
}

