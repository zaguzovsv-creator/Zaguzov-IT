import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ExternalLink, Filter } from 'lucide-react';
import { projects, CATEGORIES } from '../data';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  const filteredProjects = selectedCategory === 'Все'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="pb-24 sm:pb-32 relative z-10 scroll-mt-24">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            <Filter className="w-4 h-4" />
            <span>Портфолио проектов</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Реализованные нами проекты
          </h2>
          <p className="text-zinc-400 mt-2 text-sm sm:text-lg max-w-xl">
            Продукты и веб-платформы, которые активно используются нашими клиентами.
          </p>
        </motion.div>

        {/* Category Pills (Horizontal scroll on mobile, wrap on desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 touch-manipulation cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-zinc-950 shadow-md shadow-white/10 scale-105'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid of Projects */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => {
            const isWide = (selectedCategory === 'Все') && (i === 0 || i === 6);

            return (
              <motion.a
                layout
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative flex flex-col p-2.5 sm:p-3 rounded-[1.75rem] sm:rounded-[2rem] bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-900/90 hover:border-zinc-700/80 transition-all duration-300 overflow-hidden active:scale-[0.99] touch-manipulation ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Gradient Highlight on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Screenshot Container */}
                <div className="relative w-full h-48 sm:h-60 md:h-64 lg:h-72 rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden bg-zinc-950 mb-4 border border-zinc-800/60 shadow-inner group-hover:border-zinc-700/80 transition-colors">
                  <div className="absolute inset-0 bg-zinc-900 animate-pulse pointer-events-none" />
                  <picture>
                    <source srcset={project.image} type="image/webp" />
                    <img 
                      src={project.imageJpg || project.image} 
                      alt={`Скриншот сервиса ${project.name}`} 
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                      loading={i < 3 ? "eager" : "lazy"}
                      {...(i < 3 ? { fetchPriority: "high" as const } : {})}
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallback) {
                          target.dataset.fallback = 'true';
                          target.src = project.imageJpg || project.image;
                        }
                      }}
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-85 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                  {/* Domain Tag Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono text-zinc-300 z-20 flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{project.domain}</span>
                  </div>

                  {/* Action Icon Button */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-900/90 backdrop-blur-md flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 translate-x-0 sm:-translate-x-2 sm:group-hover:translate-x-0 transition-all duration-300 border border-zinc-700 shadow-xl z-20">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-200" />
                  </div>

                  {/* Icon Badge */}
                  <div className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 p-2.5 sm:p-3 rounded-xl backdrop-blur-md border border-white/10 shadow-lg z-20 ${project.bg.replace('/10', '/40')}`}>
                    <project.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${project.color}`} strokeWidth={1.75} />
                  </div>
                </div>

                {/* Content */}
                <div className="px-3 sm:px-5 pb-4 sm:pb-5 pt-1 relative z-10 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-zinc-100 tracking-tight flex items-center gap-2">
                        {project.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-zinc-500 sm:hidden shrink-0" />
                    </div>
                    <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm md:text-base mb-4 line-clamp-3 sm:line-clamp-none">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/40">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-zinc-800/50 text-[11px] font-mono text-zinc-400 border border-zinc-700/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

