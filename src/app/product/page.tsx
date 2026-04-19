import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, Archive, Pill, BookOpen, Server, Shield, Users, ChevronRight } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { workstations } from "@/data/workstations";

export const metadata: Metadata = {
  title: "О продукте",
  description: "ПК «АДИС» — программный комплекс автоматизации диспетчерской службы станции скорой медицинской помощи. Полный состав подсистем и АРМ.",
};

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
      <section className="bg-[#e8ebf2] min-h-screen flex items-center py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-gray-900 leading-[1.1] tracking-[-0.03em] mb-6">
            ПК &laquo;АДИС&raquo;
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed mb-12">
            Уникальный программный продукт, поддерживающий в полном объёме весь процесс
            обработки вызовов на станциях скорой медицинской помощи — от приёма вызова
            диспетчером &laquo;03&raquo; до статистической обработки накопленных данных.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Monitor, value: "19+", label: "типов АРМ" },
              { icon: Server, value: "4", label: "подсистемы" },
              { icon: Shield, value: "3 мин", label: "переход на резерв" },
              { icon: Users, value: "16 часов", label: "подготовка диспетчера" },
            ].map((item) => (
              <div key={item.label} className="bg-[#e8f0fe] border border-[#b0ccf5] rounded-2xl p-5 text-center">
                <item.icon size={24} className="text-primary mx-auto mb-3" />
                <div className="text-2xl font-extrabold text-gray-900 mb-1">{item.value}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <HeroScrollIndicator targetId="product-subsystems" variant="light" />
      </section>

      {/* Subsystems */}
      <section id="product-subsystems" className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
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
      <section className="py-24 bg-[#e8ebf2]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
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
                СУБД PostgreSQL. Серверная ОС — Linux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workstations */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">
              Автоматизированные рабочие места
            </h2>
            <p className="text-lg text-gray-500 max-w-[560px] mx-auto mt-4">
              Полный набор АРМ покрывает все потребности диспетчерской службы СМП.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workstations.map((ws) => {
              return (
              <Link
                key={ws.slug}
                href={`/product/arms/${ws.slug}`}
                className="group relative p-7 bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5] card-hover module-card-top overflow-hidden block"
              >
                <div className="text-[32px] font-extrabold leading-none mb-3 gradient-text">
                  {String(ws.number).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{ws.name}</h3>
                <p className="text-sm text-gray-500">{ws.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors">
                  Подробнее
                  <ChevronRight size={16} />
                </div>
              </Link>
            )})}
          </div>
        </div>
      </section>
    </>
  );
}
