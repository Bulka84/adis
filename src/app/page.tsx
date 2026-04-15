import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  HeartPulse,
  RussianRuble,
  Monitor,
  Archive,
  Pill,
  BookOpen,
  ChevronRight,
  Shield,
  Star,
} from "lucide-react";
import AnimatedCounters from "@/components/AnimatedCounters";
import HeroMapOverlay from "@/components/HeroMapOverlay";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import SupportForm from "@/components/SupportForm";

const subsystems = [
  {
    title: "Диспетчерская",
    description: "Полный цикл обработки вызовов: приём, регистрация, назначение бригады, контроль выполнения.",
    icon: Monitor,
  },
  {
    title: "Архив",
    description: "Накопление и статистическая обработка данных по обслуженным вызовам и работе бригад.",
    icon: Archive,
  },
  {
    title: "Аптека",
    description: "Учёт медикаментов на станции, подстанциях и в сумках бригад скорой помощи.",
    icon: Pill,
  },
  {
    title: "НСИ",
    description: "Ведение нормативно-справочной информации: адресные базы, классификаторы, справочники.",
    icon: BookOpen,
  },
];

const advantages = [
  {
    title: "Сокращение времени прибытия",
    description:
      "Автоматический подбор оптимальной бригады и маршрута, мгновенная передача вызова на подстанцию за 2-3 секунды.",
    icon: Clock,
  },
  {
    title: "Повышение качества медпомощи",
    description:
      "Формализованные алгоритмы диагностики, контроль обслуживания, звуковое воспроизведение диалога приёма.",
    icon: HeartPulse,
  },
  {
    title: "Сокращение затрат",
    description:
      "Рациональное управление ресурсами, оптимизация графиков бригад, контроль расхода медикаментов.",
    icon: RussianRuble,
  },
];

const testimonials = [
  {
    quote: "Система позволила значительно сократить время обработки вызовов и повысить качество обслуживания населения.",
    author: "Главный врач станции СМП",
    city: "Архангельск",
  },
  {
    quote: "После внедрения ПК АДИС мы перешли на качественно новый уровень управления бригадами скорой помощи.",
    author: "Заместитель главного врача",
    city: "Екатеринбург",
  },
  {
    quote: "Простой интерфейс позволил обучить весь персонал за 2 смены. Система работает стабильно и надёжно.",
    author: "Старший диспетчер",
    city: "Пермь",
  },
];

const geoRegions = [
  "Красноярск", "Ижевск", "Екатеринбург", "Пермь", "Магадан",
  "Ульяновск", "Кызыл", "Волгоград", "Иркутск",
  "Южно-Сахалинск", "Челябинск", "Петрозаводск", "Томск",
];

const partners = [
  {
    name: "Вегастар",
    href: "https://вегастар.рф",
    src: "/vegastar-logo.png",
    width: 496,
    height: 698,
    imageClassName: "h-12 md:h-16 w-auto",
  },
  {
    name: "Astra Linux",
    href: "https://astralinux.ru",
    src: "/astra-linux-logo.png",
    width: 318,
    height: 98,
    imageClassName: "h-6 md:h-8 w-auto",
  },
  {
    name: "РЕД СОФТ",
    href: "https://redos.red-soft.ru",
    src: "/redos-logo.png",
    width: 184,
    height: 74,
    imageClassName: "h-10 md:h-12 w-auto",
  },
  {
    name: "АГАТ-РТ",
    href: "https://agatrt.ru",
    src: "/agat-logo.png",
    width: 518,
    height: 96,
    imageClassName: "h-9 md:h-11 w-auto",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="hero-dark min-h-screen flex items-center justify-center pt-20">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />

        {/* Russia map background */}
        <div className="absolute inset-[-10%] pointer-events-none z-[1]"
          style={{
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 2%, rgba(0,0,0,0.2) 8%, black 20%, rgba(0,0,0,0.15) 55%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 2%, rgba(0,0,0,0.2) 8%, black 20%, rgba(0,0,0,0.15) 55%, transparent 70%)",
          }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/russia-map-3d.jpg`}
            alt=""
            fill
            className="object-cover opacity-70"
            style={{
              filter: "invert(1) brightness(1.8) sepia(1) hue-rotate(190deg) saturate(1.5) brightness(0.9) contrast(1.1)",
            }}
            priority
          />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          <HeroMapOverlay />
        </div>

        {/* Floating orbs */}
        <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[80px] opacity-25 -top-[150px] -right-[150px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute w-[400px] h-[400px] bg-violet-600 rounded-full blur-[80px] opacity-25 -bottom-[100px] -left-[100px] animate-[float_10s_ease-in-out_infinite_reverse]" />

        {/* Content */}
        <div className="relative z-[2] text-center max-w-[1200px] mx-auto px-6">
          <h1 className="text-[clamp(42px,6vw,72px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-5" style={{ textShadow: "0 2px 20px rgba(2,6,23,0.85), 0 0 50px rgba(2,6,23,0.6)" }}>
            Программный комплекс
            <br />
            <span className="text-red-500">АДИС</span>
          </h1>

          <p className="text-[clamp(16px,2vw,20px)] text-white/60 max-w-[580px] mx-auto mb-9 leading-relaxed" style={{ textShadow: "0 1px 12px rgba(2,6,23,0.7)" }}>
            Комплексная автоматизация диспетчерской службы
            <br />
            скорой медицинской помощи
          </p>

          {/* Animated Counters */}
          <AnimatedCounters />
        </div>

        <HeroScrollIndicator targetId="subsystems" />
      </section>

      {/* ===== Subsystems Section ===== */}
      <section id="subsystems" className="py-24 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Продукт</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">
              Подсистемы ПК &laquo;АДИС&raquo;
            </h2>
            <p className="text-lg text-gray-500 max-w-[560px] mx-auto mt-4 leading-relaxed">
              Комплексное решение, покрывающее все потребности диспетчерской
              службы скорой медицинской помощи
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subsystems.map((item) => (
              <div
                key={item.title}
                className="p-7 bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5] card-hover group"
              >
                <div className="w-12 h-12 gradient-bg-subtle rounded-lg flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/product"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Полное описание продукта
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Advantages Section ===== */}
      <section className="py-24 lg:py-28 bg-[#dce0ea]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Эффективность</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">
              Эффект от внедрения
            </h2>
            <p className="text-lg text-gray-500 max-w-[560px] mx-auto mt-4 leading-relaxed">
              Три ключевых направления, по которым достигается эффект от
              автоматизации диспетчерской службы
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="bg-[#e8f0fe] p-9 rounded-2xl border border-[#b0ccf5] card-hover"
              >
                <div className="w-12 h-12 gradient-bg-subtle rounded-lg flex items-center justify-center mb-5 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Geography Section (Dark) ===== */}
      <section className="py-24 lg:py-28 bg-gray-950 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-tag-light section-tag mb-4">География</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-white leading-[1.15] tracking-[-0.03em]">
              География внедрений
            </h2>
            <p className="text-lg text-white/60 max-w-[560px] mx-auto mt-4 leading-relaxed">
              ПК &laquo;АДИС&raquo; внедрён и работает на станциях СМП более чем в 500 городах
            </p>
          </div>

          {/* Region tags */}
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {geoRegions.map((region) => (
              <span
                key={region}
                className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all bg-white/[0.06] border-white/10 text-white/70 hover:bg-white/[0.12] hover:border-white/20 hover:text-white"
              >
                {region}
              </span>
            ))}
          </div>

          {/* Geo stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 text-center hover:bg-white/[0.08] hover:border-white/[0.15] transition-all">
              <div className="text-[42px] font-extrabold leading-none mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">500+</div>
              <div className="text-base font-semibold text-white mb-1">Городов</div>
              <div className="text-sm text-white/45">по всей России</div>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 text-center hover:bg-white/[0.08] hover:border-white/[0.15] transition-all">
              <div className="text-[42px] font-extrabold leading-none mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">570</div>
              <div className="text-base font-semibold text-white mb-1">Рабочих места</div>
              <div className="text-sm text-white/45">Активных АРМ</div>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 text-center hover:bg-white/[0.08] hover:border-white/[0.15] transition-all">
              <div className="text-[42px] font-extrabold leading-none mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">18M+</div>
              <div className="text-base font-semibold text-white mb-1">Населения</div>
              <div className="text-sm text-white/45">Обслуживается системой</div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/clients"
              className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors"
            >
              Посмотреть все внедрения
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="py-24 lg:py-28 bg-[#dce0ea]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Отзывы</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">
              Отзывы заказчиков
            </h2>
            <p className="text-lg text-gray-500 max-w-[560px] mx-auto mt-4">
              Что говорят специалисты скорой помощи о нашем продукте
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="bg-[#e8f0fe] p-8 rounded-2xl border border-[#b0ccf5] card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic text-[15px]">
                  &laquo;{item.quote}&raquo;
                </p>
                <div>
                  <div className="font-bold text-gray-900">{item.author}</div>
                  <div className="text-sm text-gray-400">{item.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Partners Section ===== */}
      <section className="py-10 lg:py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-6">
            <span className="section-tag mb-4">Партнёры</span>
            <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">
              Официальные партнёры
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[88px] items-center justify-center rounded-2xl border border-[#b0ccf5] bg-[#e8f0fe] p-4 text-center card-hover hover:border-primary/40 transition-colors"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${partner.src}`}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={partner.imageClassName}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Support Form Section ===== */}
      <section id="form" className="py-24 lg:py-28 bg-[#dce0ea]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-tag mb-4">Поддержка</span>
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-gray-900 leading-[1.2] tracking-[-0.03em] mb-5">
                Техническая поддержка
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Оставьте обращение, и мы поможем разобраться с вопросами
                сопровождения и эксплуатации программного комплекса.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Clock, text: "Подготовка диспетчера — не более 16 часов" },
                  { icon: Shield, text: "Переход на резервный сервер — не более 3 минут" },
                  { icon: HeartPulse, text: "Сопровождение и техническая поддержка" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 gradient-bg-subtle rounded-lg flex items-center justify-center shrink-0 text-primary">
                      <item.icon size={20} />
                    </div>
                    <span className="text-[15px]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5] shadow-lg p-8 self-start">
              <SupportForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
