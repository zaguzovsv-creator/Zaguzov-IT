import { useState } from 'react';
import { Send, FileText, Check, Copy } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyInn = () => {
    navigator.clipboard.writeText('220702399458');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md relative z-10 pt-12 sm:pt-16 pb-20 sm:pb-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-zinc-900">
          
          {/* Бренд и описание */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-2xl font-semibold tracking-tighter text-white mb-3 sm:mb-4">
                Zaguzov<span className="text-zinc-500">-IT</span>
              </div>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-sm">
                Разработка инновационных IT-продуктов, сервисов речевой аналитики, систем оптимизации продаж и комплексных веб-платформ.
              </p>
            </div>
            <p className="text-zinc-600 text-xs mt-6 md:mt-0">
              © {new Date().getFullYear()} Zaguzov-IT. Все права защищены.
            </p>
          </div>

          {/* Контакты */}
          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3 sm:mb-4">
              Связь с руководителем
            </h4>
            <a 
              href="https://t.me/SergeiZaguzov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all text-sm font-medium touch-manipulation active:scale-95"
            >
              <Send className="w-4 h-4 shrink-0" />
              <span>Telegram: @SergeiZaguzov</span>
            </a>
          </div>

          {/* Юридические реквизиты */}
          <div className="md:col-span-4">
            <h4 className="text-xs sm:text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-zinc-500" />
              <span>Реквизиты</span>
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-zinc-400 font-mono bg-zinc-900/40 p-3.5 sm:p-4 rounded-xl border border-zinc-800/60">
              <p className="text-zinc-200 font-sans font-medium mb-2">ИП Загузов Сергей Викторович</p>
              <div className="flex items-center justify-between gap-2">
                <p><span className="text-zinc-500">ИНН:</span> 220702399458</p>
                <button
                  onClick={handleCopyInn}
                  className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-[11px] font-sans flex items-center gap-1 transition-all touch-manipulation cursor-pointer shrink-0"
                  title="Скопировать ИНН"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Скопировано</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-zinc-400" />
                      <span>Скопировать ИНН</span>
                    </>
                  )}
                </button>
              </div>
              <p><span className="text-zinc-500">ОГРНИП:</span> 323237500398639</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}


