import type { Metadata } from "next";
import Link from "next/link";
import { Settings, GraduationCap, Wrench, Database, Monitor, HeadphonesIcon, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Услуги и цены",
  description: "Услуги по внедрению и сопровождению ПК «АДИС»: анализ, инсталляция, настройка, обучение персонала, техническое сопровождение.",
};

const services = [
  {
    title: "Анализ и рекомендации",
    description: "Анализ имеющихся у заказчика технических средств и выдача рекомендаций по приобретению нового оборудования для реализации ПК «АДИС».",
    icon: Settings,
  },
  {
    title: "Инсталляция ПО",
    description: "Инсталляция общесистемного программного обеспечения (Linux, UNIX, Windows) и настройка серверной инфраструктуры.",
    icon: Monitor,
  },
  {
    title: "Настройка конфигурации",
    description: "Настройка ПК «АДИС» в зависимости от структуры диспетчерской службы СМП: централизованной, децентрализованной или смешанной.",
    icon: Wrench,
  },
  {
    title: "Обучение медперсонала",
    description: "Подготовка медицинского персонала к работе с каждым типом автоматизированного рабочего места в оперативном режиме.",
    icon: GraduationCap,
  },
  {
    title: "Обучение техперсонала",
    description: "Подготовка технического персонала СМП к обслуживанию и техническому сопровождению программного комплекса.",
    icon: HeadphonesIcon,
  },
  {
    title: "Администрирование БД",
    description: "Адаптация и модификация баз данных, включая региональные справочники топографии и нормативно-справочной информации.",
    icon: Database,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#E8F4FD] via-white to-[#FDF2F4] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-6">
            Услуги и цены
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Процесс внедрения ПК &laquo;АДИС&raquo; сопровождается комплексом
            услуг, обеспечивающих полноценный запуск и эксплуатацию системы.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#0066CC]/20 transition-all">
                <div className="w-14 h-14 bg-[#E8F4FD] rounded-xl flex items-center justify-center mb-5">
                  <service.icon size={28} className="text-[#0066CC]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A2E] mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-20 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-6">Стоимость</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Стоимость ПК &laquo;АДИС&raquo; формируется исходя из необходимого
              количества лицензий для серверов и рабочих станций, а также
              требуемого функционала для конкретной станции скорой медицинской помощи.
            </p>
            <Link
              href="/contacts#form"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0066CC] text-white font-semibold rounded-xl hover:bg-[#004C99] transition-colors"
            >
              Запросить расчёт стоимости
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
