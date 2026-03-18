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
  { name: "АРМ справочной и статистической служб", description: "Генератор отчётов, анализ за любой период", icon: BarChart3 },
  { name: "АРМ административного аппарата", description: "Стратегическое управление, долгосрочное планирование", icon: Server },
];

const subsystems = [
  { title: "Диспетчерская", description: "Подсистема оперативного режима — полный цикл обработки вызовов от приёма до завершения обслуживания.", icon: Monitor, color: "border-blue-200 bg-blue-50" },
  { title: "Архив", description: "Подсистема ведения архива — накопление, справочная и статистическая обработка информации по вызовам.", icon: Archive, color: "border-green-200 bg-green-50" },
  { title: "Аптека", description: "Подсистема учёта медикаментов — контроль расхода медсредств на станции, подстанциях и в сумках бригад.", icon: Pill, color: "border-purple-200 bg-purple-50" },
  { title: "НСИ", description: "Подсистема ведения справочников — адресные базы, классификаторы, нормативно-справочная информация.", icon: BookOpen, color: "border-orange-200 bg-orange-50" },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#E8F4FD] via-white to-[#FDF2F4] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-6">
            ПК &laquo;АДИС&raquo;
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Уникальный программный продукт, поддерживающий в полном объёме весь процесс
            обработки вызовов на станциях скорой медицинской помощи — от приёма вызова
            диспетчером &laquo;03&raquo; до статистической обработки накопленных данных.
          </p>
        </div>
      </section>

      {/* Subsystems */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-12">Подсистемы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsystems.map((item) => (
              <div key={item.title} className={`p-8 rounded-2xl border-2 ${item.color}`}>
                <div className="flex items-start gap-4">
                  <item.icon size={32} className="text-[#0066CC] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-6">Техническая реализация</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-600 leading-relaxed">
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
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-[#1A1A2E]">Надёжность:</strong> схемотехнические решения
                позволяют поддерживать работоспособность при отказах любых устройств.
                Переход на резервный сервер занимает не более 3 минут без потери информации.
              </p>
              <p>
                <strong className="text-[#1A1A2E]">Простота освоения:</strong> подготовка
                диспетчера — не более 2 часов. Через 2 смены работы под наблюдением
                диспетчер может работать самостоятельно.
              </p>
              <p>
                <strong className="text-[#1A1A2E]">Технологии:</strong> C, C++, PHP, JavaScript.
                СУБД PostgreSQL, MySQL. Серверная ОС — Linux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workstations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
            Автоматизированные рабочие места
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl">
            Полный набор АРМ покрывает все потребности диспетчерской службы СМП.
            Конкретный набор определяется технологией работы вашей станции.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workstations.map((ws) => (
              <div key={ws.name} className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#E8F4FD] rounded-xl flex items-center justify-center mb-4">
                  <ws.icon size={24} className="text-[#0066CC]" />
                </div>
                <h3 className="font-semibold text-[#1A1A2E] mb-2">{ws.name}</h3>
                <p className="text-sm text-gray-500">{ws.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
