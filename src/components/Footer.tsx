import { Send, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md relative z-10 pt-16 pb-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Бренд и описание */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-2xl font-semibold tracking-tighter text-white mb-4">
                Zaguzov<span className="text-zinc-500">-IT</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                Разработка инновационных IT-продуктов, сервисов речевой аналитики, систем оптимизации продаж и комплексных веб-платформ.
              </p>
            </div>
            <p className="text-zinc-600 text-xs mt-6 md:mt-0">
              © {new Date().getFullYear()} Zaguzov-IT. Все права защищены.
            </p>
          </div>

          {/* Контакты */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
              Связь с руководителем
            </h4>
            <a 
              href="https://t.me/SergeiZaguzov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all text-sm font-medium"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: @SergeiZaguzov</span>
            </a>
          </div>

          {/* Юридические реквизиты */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-zinc-500" />
              <span>Реквизиты</span>
            </h4>
            <div className="space-y-1.5 text-sm text-zinc-400 font-mono">
              <p className="text-zinc-200 font-sans font-medium mb-2">ИП Загузов Сергей Викторович</p>
              <p><span className="text-zinc-500">ИНН:</span> 220702399458</p>
              <p><span className="text-zinc-500">ОГРНИП:</span> 323237500398639</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

