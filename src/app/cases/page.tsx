import type { Metadata } from "next";
import { Star, Quote, MapPin, Calendar, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Кейсы и отзывы",
  description: "Кейсы внедрения ПК «АДИС» на станциях скорой медицинской помощи. Отзывы и благодарности заказчиков.",
};

const cases = [
  {
    city: "Архангельск",
    year: 2012,
    population: "355 000",
    workstations: 32,
    challenge: "Автоматизация крупной станции СМП с несколькими подстанциями в условиях северного климата.",
    solution: "Развёрнута полная конфигурация ПК «АДИС» с центральной диспетчерской и подстанциями, связанными через коммуникационный сервер.",
    results: ["Сокращение времени приёма вызова на 40%", "Автоматический контроль адреса", "Полная статистика по вызовам"],
  },
  {
    city: "Екатеринбург",
    year: 2005,
    population: "1 495 000",
    workstations: 50,
    challenge: "Организация централизованного управления бригадами СМП в городе-миллионнике с разветвлённой сетью подстанций.",
    solution: "Внедрена расширенная конфигурация с полным набором АРМ, включая АРМ административного аппарата для долгосрочного планирования.",
    results: ["50 автоматизированных рабочих мест", "Оптимизация распределения бригад", "Сокращение времени прибытия"],
  },
  {
    city: "Пермь",
    year: 2006,
    population: "1 055 000",
    workstations: 38,
    challenge: "Переход от ручного управления диспетчерской службой к полностью автоматизированной системе.",
    solution: "Поэтапное внедрение ПК «АДИС» с обучением персонала и адаптацией под существующую технологию управления.",
    results: ["Обучение всех диспетчеров за 2 смены", "Исключение дублирующих выездов", "Контроль работы бригад по времени"],
  },
];

const testimonials = [
  {
    quote: "Система позволила значительно сократить время обработки вызовов и повысить качество обслуживания населения. Особенно ценна функция автоматического подбора бригады.",
    author: "Главный врач станции СМП",
    city: "Архангельск",
    year: 2023,
  },
  {
    quote: "После внедрения ПК АДИС мы перешли на качественно новый уровень управления бригадами скорой помощи. Генератор отчётов даёт полную картину работы станции.",
    author: "Заместитель главного врача",
    city: "Екатеринбург",
    year: 2023,
  },
  {
    quote: "Простой интерфейс позволил обучить весь персонал за 2 смены. Система работает стабильно и надёжно уже более 15 лет без серьёзных сбоев.",
    author: "Старший диспетчер",
    city: "Пермь",
    year: 2022,
  },
  {
    quote: "Подсистема Аптека решила проблему учёта медикаментов на подстанциях. Теперь контроль расхода ведётся автоматически.",
    author: "Заведующая аптекой станции СМП",
    city: "Астана",
    year: 2022,
  },
];

export default function CasesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#E8F4FD] via-white to-[#FDF2F4] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-6">
            Кейсы и отзывы
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Реальные результаты внедрения ПК &laquo;АДИС&raquo; на станциях
            скорой медицинской помощи по всей России и Казахстану.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-12">Кейсы внедрений</h2>
          <div className="space-y-8">
            {cases.map((item) => (
              <div key={item.city} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-[#1A1A2E] flex items-center gap-2">
                      <MapPin size={22} className="text-[#0066CC]" />
                      {item.city}
                    </h3>
                    <span className="text-sm bg-[#E8F4FD] text-[#0066CC] px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <Calendar size={14} />
                      с {item.year} года
                    </span>
                    <span className="text-sm text-gray-500">
                      Население: {item.population} | АРМ: {item.workstations}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Задача</h4>
                      <p className="text-gray-600 leading-relaxed">{item.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Решение</h4>
                      <p className="text-gray-600 leading-relaxed">{item.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Результаты</h4>
                      <ul className="space-y-2">
                        {item.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle size={16} className="text-[#00A86B] shrink-0 mt-0.5" />
                            <span className="text-sm">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-12">Отзывы заказчиков</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <Quote size={32} className="text-[#0066CC]/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &laquo;{item.quote}&raquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-[#1A1A2E]">{item.author}</div>
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
