import type { Metadata } from "next";
import { Monitor, Archive, Pill, BookOpen, Server, Shield, Cpu, Users, Radio, BarChart3, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "О продукте",
  description: "ПК «АДИС» — программный комплекс автоматизации диспетчерской службы станции скорой медицинской помощи. Полный состав подсистем и АРМ.",
};

const workstations = [
  { name: "АРМ диспетчера «03»", description: "Приём вызовов, регистрация, контроль адреса, определение профиля", icon: Monitor },
  { name: "АРМ старшего врача отдела «03»", description: "Контроль работы диспетчеров и качества медицинской помощи", icon: Stethoscope },
  { name: "АРМ диспетчера направления", description: "Назначение бригад, формирование списков предложений", icon: Users },
  { name: "АРМ старшего диспетчера", description: "Общий контроль оперативной обстановки и координация", icon: Shield },
  { name: "АРМ старшего врача смены", description: "Анализ временных показателей, контроль качества обслуживания", icon: BarChart3 },
  { name: "АРМ радиооператора", description: "Связь с бригадами, передача информации о вызовах", icon: Radio },
  { name: "АРМ диспетчера подстанции", description: "Управление бригадами на уровне подстанции", icon: Cpu },
  { name: "АРМ «Аптека станции»", description: "Учёт медикаментов и контроль движения медицинских средств на уровне станции.", icon: Pill },
  { name: "АРМ «Аптека подстанции»", description: "Ведение учёта медикаментов и контроль остатков на подстанции.", icon: Pill },
  { name: "АРМ «Заправка сумок»", description: "Комплектование и пополнение сумок бригад с фиксацией расхода медикаментов.", icon: Pill },
  { name: "АРМ «Контроль аптеки»", description: "Контроль движения, наличия и использования медицинских средств в подсистеме аптеки.", icon: Pill },
  { name: "АРМ справочной и статистической служб", description: "Генератор отчётов, анализ за любой период", icon: BarChart3 },
  { name: "АРМ оперативного дежурного", description: "Контроль оперативной обстановки по региону.", icon: Server },
  { name: "АРМ статистической и административной службы", description: "СМП регионального уровня показателей оперативности как по региону в целом, так и по отдельным районным станциям и отделениям СМП.", icon: BarChart3 },
];

const subsystems = [
  { title: "Диспетчерская", description: "Подсистема оперативного режима — полный цикл обработки вызовов от приёма до завершения обслуживания.", icon: Monitor },
  { title: "Архив", description: "Подсистема ведения архива — накопление, справочная и статистическая обработка информации по вызовам.", icon: Archive },
  { title: "Аптека", description: "Подсистема учёта медикаментов — контроль расхода медсредств на станции, подстанциях и в сумках бригад.", icon: Pill },
  { title: "НСИ", description: "Подсистема ведения справочников — адресные базы, классификаторы, нормативно-справочная информация.", icon: BookOpen },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark min-h-screen flex items-center py-32 lg:py-40">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <span className="section-tag section-tag-light mb-4">Продукт</span>
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            ПК &laquo;АДИС&raquo;
          </h1>
          <p className="text-xl text-white/60 max-w-3xl leading-relaxed mb-12">
            Уникальный программный продукт, поддерживающий в полном объёме весь процесс
            обработки вызовов на станциях скорой медицинской помощи — от приёма вызова
            диспетчером &laquo;03&raquo; до статистической обработки накопленных данных.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Monitor, value: "14+", label: "типов АРМ" },
              { icon: Server, value: "4", label: "подсистемы" },
              { icon: Shield, value: "3 мин", label: "переход на резерв" },
              { icon: Users, value: "16 часов", label: "подготовка диспетчера" },
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

      {/* Subsystems */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Состав</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">Подсистемы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsystems.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl border border-[#b0ccf5] bg-[#e8f0fe] card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-bg-subtle rounded-lg flex items-center justify-center shrink-0 text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-[#dce0ea]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Технологии</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">Техническая реализация</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-500 leading-relaxed text-[15px]">
              <p>
                ПК &laquo;АДИС&raquo; поставляется в различных конфигурациях, учитывающих
                специфику организации службы СМП малых, средних и больших городов.
              </p>
              <p>
                Адаптивные возможности позволяют настраивать систему на принятую технологию
                управления бригадами (централизованную, децентрализованную или смешанную).
              </p>
              <p>
                Подсистема центральной диспетчерской реализуется как локальная сеть ПК.
                Связь с удалёнными подстанциями — через коммуникационный сервер.
                На серверах устанавливается ОС Linux.
              </p>
            </div>
            <div className="space-y-6 text-gray-500 leading-relaxed text-[15px]">
              <p>
                <strong className="text-gray-900">Надёжность:</strong> схемотехнические решения
                позволяют поддерживать работоспособность при отказах любых устройств.
                Переход на резервный сервер занимает не более 3 минут без потери информации.
              </p>
              <p>
                <strong className="text-gray-900">Простота освоения:</strong> подготовка
                диспетчера — не более 16 часов. Через 2 смены работы под наблюдением
                диспетчер может работать самостоятельно.
              </p>
              <p>
                <strong className="text-gray-900">Технологии:</strong> C, C++, PHP, JavaScript.
                СУБД PostgreSQL, MySQL. Серверная ОС — Linux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workstations */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">АРМ</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">
              Автоматизированные рабочие места
            </h2>
            <p className="text-lg text-gray-500 max-w-[560px] mx-auto mt-4">
              Полный набор АРМ покрывает все потребности диспетчерской службы СМП.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workstations.map((ws, i) => (
              <div key={ws.name} className="relative p-7 bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5] card-hover module-card-top overflow-hidden">
                <div className="text-[32px] font-extrabold leading-none mb-3 gradient-text">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{ws.name}</h3>
                <p className="text-sm text-gray-500">{ws.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
