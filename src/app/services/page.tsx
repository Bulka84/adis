import type { Metadata } from "next";
import Link from "next/link";
import { Settings, GraduationCap, Wrench, Database, Monitor, HeadphonesIcon, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Услуги и цены",
  description: "Услуги по внедрению и сопровождению ПК «АДИС»: анализ, инсталляция, настройка, обучение персонала, техническое сопровождение.",
};

const services = [
  { title: "Анализ и рекомендации", description: "Анализ имеющихся у заказчика технических средств и выдача рекомендаций по приобретению нового оборудования для реализации ПК «АДИС».", icon: Settings },
  { title: "Инсталляция ПО", description: "Инсталляция общесистемного программного обеспечения (Linux, UNIX, Windows) и настройка серверной инфраструктуры.", icon: Monitor },
  { title: "Настройка конфигурации", description: "Настройка ПК «АДИС» в зависимости от структуры диспетчерской службы СМП: централизованной, децентрализованной или смешанной.", icon: Wrench },
  { title: "Обучение медперсонала", description: "Подготовка медицинского персонала к работе с каждым типом автоматизированного рабочего места в оперативном режиме.", icon: GraduationCap },
  { title: "Обучение техперсонала", description: "Подготовка технического персонала СМП к обслуживанию и техническому сопровождению программного комплекса.", icon: HeadphonesIcon },
  { title: "Администрирование БД", description: "Адаптация и модификация баз данных, включая региональные справочники топографии и нормативно-справочной информации.", icon: Database },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-dark min-h-screen flex items-center py-32 lg:py-40">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <span className="section-tag section-tag-light mb-4">Услуги</span>
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            Услуги и цены
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mb-12">
            Процесс внедрения ПК &laquo;АДИС&raquo; сопровождается комплексом
            услуг, обеспечивающих полноценный запуск и эксплуатацию системы.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
            {[
              { icon: Settings, label: "Анализ и настройка" },
              { icon: GraduationCap, label: "Обучение персонала" },
              { icon: Wrench, label: "Техподдержка" },
              { icon: Monitor, label: "Инсталляция ПО" },
              { icon: Database, label: "Администрирование БД" },
              { icon: HeadphonesIcon, label: "Сопровождение" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <item.icon size={20} className="text-primary shrink-0" />
                <span className="text-sm text-white/80 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div key={service.title} className="p-7 bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5] card-hover">
                <div className="w-12 h-12 gradient-bg-subtle rounded-lg flex items-center justify-center mb-5 text-primary">
                  <service.icon size={24} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative gradient-bg rounded-3xl py-16 px-12 text-center overflow-hidden">
            <div className="absolute w-[300px] h-[300px] bg-white/15 rounded-full blur-[80px] -top-[100px] -right-[50px]" />
            <div className="absolute w-[250px] h-[250px] bg-white/10 rounded-full blur-[80px] -bottom-[80px] -left-[30px]" />
            <div className="relative z-[1]">
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-white leading-[1.2] mb-4">Стоимость</h2>
              <p className="text-lg text-white/80 max-w-[500px] mx-auto mb-8 leading-relaxed">
                Стоимость ПК &laquo;АДИС&raquo; формируется исходя из необходимого
                количества лицензий для серверов и рабочих станций.
              </p>
              <Link
                href="/contacts#form"
                className="btn-white inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl text-[15px]"
              >
                Запросить расчёт стоимости
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
