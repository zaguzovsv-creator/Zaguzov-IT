import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section className="pb-32 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-medium text-white tracking-tight">Реализованные нами проекты</h2>
        <p className="text-zinc-500 mt-2 text-lg">Продукты, которые активно используются нашими клиентами.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => {
          const isWide = i === 0 || i === 6;
          
          return (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative flex flex-col p-2 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-900/80 hover:border-zinc-700/80 transition-all overflow-hidden ${
                isWide ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative w-full h-48 sm:h-64 rounded-[1.5rem] overflow-hidden bg-zinc-950 mb-4 border border-zinc-800/50">
                <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                <img 
                  src={project.image} 
                  alt={`Скриншот сервиса ${project.name}`} 
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 border border-zinc-700 shadow-xl z-20">
                  <ArrowUpRight className="w-5 h-5 text-zinc-300" />
                </div>
                
                <div className={`absolute bottom-4 left-4 p-3 rounded-xl backdrop-blur-md border border-white/10 shadow-lg z-20 ${project.bg.replace('/10', '/40')}`}>
                  <project.icon className={`w-6 h-6 ${project.color}`} strokeWidth={1.5} />
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 relative z-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-medium text-zinc-100 mb-3 tracking-tight">{project.name}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base flex-grow max-w-lg">{project.desc}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
