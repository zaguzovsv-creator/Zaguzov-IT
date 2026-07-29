import { Mic, Activity, TrendingUp, BarChart3, Compass, Users, Truck } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  url: string;
  domain: string;
  desc: string;
  category: string;
  tags: string[];
  icon: any;
  color: string;
  bg: string;
  image: string;
  imageJpg: string;
}

export const CATEGORIES = [
  'Все',
  'AI & Аналитика',
  'E-Commerce & Маркетплейсы',
  'Платформы & B2B'
] as const;

export const projects: Project[] = [
  {
    id: 'voice-psychology',
    name: 'Психология голоса',
    url: 'https://voicepsychology.ru',
    domain: 'voicepsychology.ru',
    desc: 'Сервис для аналитики речевых паттернов и эмоционального состояния пользователей в реальном времени.',
    category: 'AI & Аналитика',
    tags: ['AI', 'Speech Tech', 'Real-Time'],
    icon: Mic,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    image: '/voice-psychology.webp',
    imageJpg: '/voice-psychology.jpg'
  },
  {
    id: 'detector-lghi',
    name: 'Детектор лжи',
    url: 'https://detectorlghi.ru',
    domain: 'detectorlghi.ru',
    desc: 'Инструмент для анализа психофизиологических реакций в процессе общения, выявления лжи по голосу.',
    category: 'AI & Аналитика',
    tags: ['AI Voice', 'Psychology', 'Analytics'],
    icon: Activity,
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    image: '/detector-lghi.webp',
    imageJpg: '/detector-lghi.jpg'
  },
  {
    id: 'sellers-cashback',
    name: 'SellersCashBack',
    url: 'https://sellerscashback.ru',
    domain: 'sellerscashback.ru',
    desc: 'Платформа для выявления переплат за хранение и логистику на Wildberries и автоматизации возврата средств селлерам на маркетплейсах.',
    category: 'E-Commerce & Маркетплейсы',
    tags: ['Wildberries', 'FinTech', 'Automation'],
    icon: TrendingUp,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    image: '/sellers-cashback.webp',
    imageJpg: '/sellers-cashback.jpg'
  },
  {
    id: 'stroy-tech',
    name: 'StroyTechnology',
    url: 'https://stroytechnology.site',
    domain: 'stroytechnology.site',
    desc: 'Комплексная платформа учёта и расчёта поставок нерудных материалов.',
    category: 'Платформы & B2B',
    tags: ['B2B Logistics', 'Calculations', 'Enterprise'],
    icon: Truck,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    image: '/stroy-tech.webp',
    imageJpg: '/stroy-tech.jpg'
  },
  {
    id: 'your-best-way',
    name: 'Узнай свой путь',
    url: 'https://yourbestway.ru',
    domain: 'yourbestway.ru',
    desc: 'Сервис определения своего предназначения, психологических ориентиров.',
    category: 'AI & Аналитика',
    tags: ['Web SaaS', 'Personalization'],
    icon: Compass,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    image: '/your-best-way.webp',
    imageJpg: '/your-best-way.jpg'
  },
  {
    id: 'amkar-junior',
    name: 'АмкарДжуниор',
    url: 'https://amkarjunior.ru',
    domain: 'amkarjunior.ru',
    desc: 'Комплексная платформа детской футбольной школы с личными кабинетами для тренеров и родителей учеников.',
    category: 'Платформы & B2B',
    tags: ['Sports CRM', 'EdTech', 'Portal'],
    icon: Users,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    image: '/amkar-junior.webp',
    imageJpg: '/amkar-junior.jpg'
  },
  {
    id: 'tm-limited',
    name: 'TM LIMITED',
    url: 'https://tmlimited.shop',
    domain: 'tmlimited.shop',
    desc: 'Сервис глубокой аналитики, оптимизации продаж для бренда TM LIMITED.',
    category: 'E-Commerce & Маркетплейсы',
    tags: ['E-Commerce', 'Sales Tech', 'Retail'],
    icon: BarChart3,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    image: '/tm-limited.webp',
    imageJpg: '/tm-limited.jpg'
  }
];
