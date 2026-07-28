import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-24 pb-32 max-w-4xl relative z-10">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-8"
      >
        Создаем IT-продукты, <br className="hidden sm:block" />
        <span className="text-zinc-500">которые меняют бизнес.</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl"
      >
        Zaguzov-IT — это команда экспертов. Мы специализируемся на создании 
        высоконагруженных платформ, искусственном интеллекте, автоматизации 
        бизнес-процессов и глубокой аналитике данных.
      </motion.p>
    </section>
  );
}
