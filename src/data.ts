import { Mic, Activity, TrendingUp, BarChart3, Compass, Users, Truck } from 'lucide-react';

export const projects = [
  {
    id: 'voice-psychology',
    name: 'Психология голоса',
    url: 'https://voicepsychology.ru',
    desc: 'Сервис для аналитики речевых паттернов и эмоционального состояния пользователей в реальном времени.',
    icon: Mic,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fvoicepsychology.ru&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'detector-lghi',
    name: 'Детектор лжи',
    url: 'https://detectorlghi.ru',
    desc: 'Инструмент для анализа психофизиологических реакций в процессе общения, выявления лжи по голосу.',
    icon: Activity,
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fdetectorlghi.ru&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'sellers-cashback',
    name: 'SellersCashBack',
    url: 'https://sellerscashback.ru',
    desc: 'Платформа для выявления переплат за хранение и логистику на Wildberries и автоматизации возврата средств селлерам на маркетплейсах.',
    icon: TrendingUp,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fsellerscashback.ru&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'tm-limited',
    name: 'TM LIMITED',
    url: 'https://tmlimited.shop',
    desc: 'Сервис глубокой аналитики, оптимизации продаж для бренда TM LIMITED.',
    icon: BarChart3,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Ftmlimited.shop&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'your-best-way',
    name: 'Узнай свой путь',
    url: 'https://yourbestway.ru',
    desc: 'Сервис определения своего предназначения, психологических ориентиров.',
    icon: Compass,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fyourbestway.ru&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'amkar-junior',
    name: 'АмкарДжуниор',
    url: 'https://amkarjunior.ru',
    desc: 'Комплексная платформа детской футбольной школы с личными кабинетами для тренеров и родителей учеников.',
    icon: Users,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    image: '/amkar.png'
  },
  {
    id: 'stroy-tech',
    name: 'StroyTechnology',
    url: 'https://stroytechnology.site',
    desc: 'Комплексная платформа учёта и расчёта поставок нерудных материалов.',
    icon: Truck,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fstroytechnology.site&screenshot=true&meta=false&embed=screenshot.url&waitFor=3000'
  }
];
