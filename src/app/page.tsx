import Link from "next/link";
import {
  Clock,
  HeartPulse,
  DollarSign,
  Monitor,
  Archive,
  Pill,
  BookOpen,
  MapPin,
  ChevronRight,
  Shield,
  Award,
  Users,
  Building2,
  Star,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import RussiaMap from "@/components/RussiaMap";
import HeroDashboard from "@/components/HeroDashboard";

const stats = [
  { value: "30+", label: "лет на рынке", icon: Award },
  { value: "50+", label: "городов внедрений", icon: MapPin },
  { value: "8.5", label: "актуальная версия", icon: Shield },
  { value: "№1591", label: "в реестре рос. ПО", icon: BookOpen },
];

const subsystems = [
  {
    title: "Диспетчерская",
    description: "Полный цикл обработки вызовов: приём, регистрация, назначение бригады, контроль выполнения.",
    icon: Monitor,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Архив",
    description: "Накопление и статистическая обработка данных по обслуженным вызовам и работе бригад.",
    icon: Archive,
    color: "bg-red-50 text-red-700",
  },
  {
    title: "Аптека",
    description: "Учёт медикаментов на станции, подстанциях и в сумках бригад скорой помощи.",
    icon: Pill,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "НСИ",
    description: "Ведение нормативно-справочной информации: адресные базы, классификаторы, справочники.",
    icon: BookOpen,
    color: "bg-amber-50 text-amber-700",
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
    icon: DollarSign,
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

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8F4FD] via-white to-[#F0F7FD]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066CC] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0066CC] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 backdrop-blur rounded-full text-xs sm:text-sm text-[#0066CC] font-medium mb-6 shadow-sm">
                <Shield size={16} />
                В реестре российского ПО — №1591
              </div>
              <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-[#1A1A2E] leading-tight mb-6">
                Автоматизация{" "}
                <span className="text-[#0066CC]">скорой помощи</span>{" "}
                с&nbsp;1992&nbsp;года
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                ПК &laquo;АДИС&raquo; &mdash; программный комплекс для диспетчерской
                службы станции СМП. Полный цикл обработки вызовов, управление
                бригадами, архив и статистика.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacts#form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0066CC] text-white font-semibold rounded-xl hover:bg-[#004C99] transition-all shadow-lg shadow-[#0066CC]/25 hover:shadow-xl hover:shadow-[#0066CC]/30"
                >
                  Оставить заявку
                  <ChevronRight size={20} className="ml-1" />
                </Link>
                <Link
                  href="/product"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#C41E3A] font-semibold rounded-xl border-2 border-[#C41E3A] hover:bg-[#C41E3A] hover:text-white transition-all"
                >
                  Подробнее о продукте
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <HeroDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-8 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#E8F4FD] rounded-xl mb-3">
                  <stat.icon size={24} className="text-[#0066CC]" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Product Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
              Подсистемы ПК &laquo;АДИС&raquo;
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Комплексное решение, покрывающее все потребности диспетчерской
              службы скорой медицинской помощи
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subsystems.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#0066CC]/20 hover:shadow-lg hover:shadow-[#0066CC]/5 transition-all group"
              >
                <div
                  className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">
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
              className="inline-flex items-center text-[#0066CC] font-medium hover:text-[#004C99] transition-colors"
            >
              Полное описание продукта
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dark CTA Banner */}
      <section className="bg-[#1A1A2E] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Бесплатная консультация
              </h3>
              <p className="text-gray-400 text-lg max-w-xl">
                Ответим на ваши вопросы и подготовим предложение по автоматизации вашей станции СМП.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacts#form"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#C41E3A] text-[#C41E3A] font-semibold rounded-xl hover:bg-[#C41E3A] hover:text-white transition-all"
              >
                Оставить заявку
              </Link>
              <a
                href="tel:+74957394807"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-300 font-medium rounded-xl border border-gray-600 hover:border-gray-400 hover:text-white transition-all"
              >
                <Phone size={18} />
                (495) 739-48-07
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 lg:py-28 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
              Эффект от внедрения
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Три ключевых направления, по которым достигается эффект от
              автоматизации диспетчерской службы
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#E8F4FD] rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={32} className="text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
                  География внедрений
                </h2>
                <span className="inline-flex items-center justify-center px-3 py-1 bg-[#C41E3A] text-white text-sm font-bold rounded-full">
                  573
                </span>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                ПК &laquo;АДИС&raquo; внедрён и успешно работает на станциях
                скорой медицинской помощи более чем в 50 городах России и Казахстана.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Building2 size={20} className="text-[#0066CC] shrink-0" />
                  <div>
                    <div className="text-2xl font-bold text-[#1A1A2E]">50+</div>
                    <div className="text-sm text-gray-500">городов</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-[#0066CC] shrink-0" />
                  <div>
                    <div className="text-2xl font-bold text-[#1A1A2E]">18M+</div>
                    <div className="text-sm text-gray-500">населения обслуживается</div>
                  </div>
                </div>
              </div>
              <Link
                href="/clients"
                className="inline-flex items-center text-[#0066CC] font-medium hover:text-[#004C99] transition-colors"
              >
                Посмотреть все внедрения
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
            <div className="bg-[#F8FAFB] rounded-2xl p-4">
              <RussiaMap />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
              Отзывы заказчиков
            </h2>
            <p className="text-lg text-gray-500">
              Что говорят специалисты скорой помощи о нашем продукте
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm"
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
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &laquo;{item.quote}&raquo;
                </p>
                <div>
                  <div className="font-medium text-[#1A1A2E]">{item.author}</div>
                  <div className="text-sm text-gray-400">{item.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Оставьте заявку, и мы подготовим предложение по автоматизации
                вашей станции скорой медицинской помощи с учётом её специфики.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 bg-[#E8F4FD] rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-[#0066CC]" />
                  </div>
                  <span>Обучение диспетчера — не более 2 часов</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 bg-[#E8F4FD] rounded-lg flex items-center justify-center shrink-0">
                    <Shield size={20} className="text-[#0066CC]" />
                  </div>
                  <span>Переход на резервный сервер — не более 3 минут</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 bg-[#E8F4FD] rounded-lg flex items-center justify-center shrink-0">
                    <HeartPulse size={20} className="text-[#0066CC]" />
                  </div>
                  <span>Сопровождение и техническая поддержка</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
