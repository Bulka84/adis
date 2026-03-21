import type { Metadata } from "next";
import { Star, Quote, MapPin, Calendar, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Кейсы и отзывы",
  description: "Кейсы внедрения ПК «АДИС» на станциях скорой медицинской помощи. Отзывы и благодарности заказчиков.",
};

const cases = [
  {
    city: "Архангельск", year: 2012, population: "355 000", workstations: 32,
    challenge: "Автоматизация крупной станции СМП с несколькими подстанциями в условиях северного климата.",
    solution: "Развёрнута полная конфигурация ПК «АДИС» с центральной диспетчерской и подстанциями, связанными через коммуникационный сервер.",
    results: ["Сокращение времени приёма вызова на 40%", "Автоматический контроль адреса", "Полная статистика по вызовам"],
  },
  {
    city: "Екатеринбург", year: 2005, population: "1 495 000", workstations: 50,
    challenge: "Организация централизованного управления бригадами СМП в городе-миллионнике с разветвлённой сетью подстанций.",
    solution: "Внедрена расширенная конфигурация с полным набором АРМ, включая АРМ административного аппарата для долгосрочного планирования.",
    results: ["50 автоматизированных рабочих мест", "Оптимизация распределения бригад", "Сокращение времени прибытия"],
  },
  {
    city: "Пермь", year: 2006, population: "1 055 000", workstations: 38,
    challenge: "Переход от ручного управления диспетчерской службой к полностью автоматизированной системе.",
    solution: "Поэтапное внедрение ПК «АДИС» с обучением персонала и адаптацией под существующую технологию управления.",
    results: ["Обучение всех диспетчеров за 2 смены", "Исключение дублирующих выездов", "Контроль работы бригад по времени"],
  },
];

const testimonials = [
  { quote: "Система позволила значительно сократить время обработки вызовов и повысить качество обслуживания населения. Особенно ценна функция автоматического подбора бригады.", author: "Главный врач станции СМП", city: "Архангельск", year: 2023 },
  { quote: "После внедрения ПК АДИС мы перешли на качественно новый уровень управления бригадами скорой помощи. Генератор отчётов даёт полную картину работы станции.", author: "Заместитель главного врача", city: "Екатеринбург", year: 2023 },
  { quote: "Простой интерфейс позволил обучить весь персонал за 2 смены. Система работает стабильно и надёжно уже более 15 лет без серьёзных сбоев.", author: "Старший диспетчер", city: "Пермь", year: 2022 },
  { quote: "Подсистема Аптека решила проблему учёта медикаментов на подстанциях. Теперь контроль расхода ведётся автоматически.", author: "Заведующая аптекой станции СМП", city: "Саратов", year: 2022 },
];

export default function CasesPage() {
  return (
    <>
      <section className="hero-dark min-h-screen flex items-center py-32 lg:py-40">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <span className="section-tag section-tag-light mb-4">Кейсы</span>
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            Кейсы и отзывы
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mb-12">
            Реальные результаты внедрения ПК &laquo;АДИС&raquo; на станциях
            скорой медицинской помощи по всей России.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, value: "3+", label: "кейса внедрений" },
              { icon: Star, value: "4.9", label: "средняя оценка" },
              { icon: Calendar, value: "20+", label: "лет опыта" },
              { icon: CheckCircle, value: "100%", label: "успешных запусков" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                <item.icon size={24} className="text-primary mx-auto mb-3" />
                <div className="text-2xl font-extrabold text-white mb-1">{item.value}</div>
                <div className="text-sm text-white/50">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Внедрения</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">Кейсы внедрений</h2>
          </div>
          <div className="space-y-6">
            {cases.map((item) => (
              <div key={item.city} className="bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5] overflow-hidden card-hover">
                <div className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bg" />
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <h3 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
                        <MapPin size={22} className="text-primary" />
                        {item.city}
                      </h3>
                      <span className="text-sm gradient-bg-subtle text-primary px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                        <Calendar size={14} />
                        с {item.year} года
                      </span>
                      <span className="text-sm text-gray-500">
                        Население: {item.population} | АРМ: {item.workstations}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Задача</h4>
                        <p className="text-gray-500 leading-relaxed text-[15px]">{item.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Решение</h4>
                        <p className="text-gray-500 leading-relaxed text-[15px]">{item.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Результаты</h4>
                        <ul className="space-y-2">
                          {item.results.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-gray-500">
                              <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                              <span className="text-sm">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#dce0ea]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Отзывы</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">Отзывы заказчиков</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-[#e8f0fe] p-8 rounded-2xl border border-[#b0ccf5] card-hover">
                <Quote size={32} className="text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-500 leading-relaxed mb-6 italic text-[15px]">
                  &laquo;{item.quote}&raquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{item.author}</div>
                    <div className="text-sm text-gray-400">{item.city}</div>
                  </div>
                  <div className="text-sm text-gray-400">{item.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
