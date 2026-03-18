import type { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Версии",
  description: "История версий ПК «АДИС»: от версии 8.4 до актуальной версии 8.5. Новые возможности и улучшения.",
};

const versions = [
  {
    version: "8.5",
    date: "2024",
    current: true,
    features: [
      "Обновлённый пользовательский интерфейс на всех АРМ",
      "Расширенная интеграция с навигационными системами",
      "Улучшенный генератор отчётов и выборок",
      "Поддержка работы с ГЛОНАСС/GPS-мониторингом бригад",
      "Оптимизация производительности на больших объёмах данных",
      "Расширенный API для интеграции с внешними системами",
    ],
  },
  {
    version: "8.4 (Пакет обновления 1)",
    date: "2023",
    current: false,
    features: [
      "Исправления и улучшения стабильности",
      "Обновлённые справочники и классификаторы",
      "Улучшенная работа подсистемы «Аптека»",
    ],
  },
  {
    version: "8.4",
    date: "2022",
    current: false,
    features: [
      "Новая подсистема интеграции с внешними информационными системами",
      "Поддержка сопряжения с навигационным оборудованием",
      "Расширенные возможности статистической обработки",
      "Обновлённый интерфейс диспетчера «03»",
      "Улучшенный алгоритм подбора бригад",
    ],
  },
  {
    version: "8.1",
    date: "2018",
    current: false,
    features: [
      "Интеграция подсистемы «Аптека» с основным комплексом",
      "Поддержка удалённых подстанций",
      "Новые формы отчётности",
    ],
  },
  {
    version: "8.0",
    date: "2015",
    current: false,
    features: [
      "Полная переработка архитектуры системы",
      "Переход на PostgreSQL",
      "Web-интерфейс для административных АРМ",
    ],
  },
];

export default function VersionsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#E8F4FD] via-white to-[#FDF2F4] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-6">
            Версии ПК &laquo;АДИС&raquo;
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            История развития программного комплекса. Каждая новая версия
            расширяет возможности автоматизации и повышает удобство работы.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-8">
              {versions.map((ver) => (
                <div key={ver.version} className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div className={`absolute left-4 w-5 h-5 rounded-full border-4 hidden md:block ${
                    ver.current
                      ? "bg-[#0066CC] border-[#E8F4FD]"
                      : "bg-white border-gray-300"
                  }`} style={{ top: "1.5rem" }} />

                  <div className={`p-8 rounded-2xl border-2 ${
                    ver.current
                      ? "border-[#0066CC]/30 bg-[#E8F4FD]/30"
                      : "border-gray-100 bg-white"
                  }`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-[#1A1A2E]">
                        Версия {ver.version}
                      </h3>
                      <span className="text-sm text-gray-400">{ver.date}</span>
                      {ver.current && (
                        <span className="text-xs bg-[#00A86B] text-white px-3 py-1 rounded-full font-medium">
                          Актуальная
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {ver.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle size={16} className={`shrink-0 mt-0.5 ${ver.current ? "text-[#0066CC]" : "text-gray-400"}`} />
                          <span className="text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Earlier versions note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <ArrowRight size={14} className="rotate-90" />
              Предыдущие версии: 7.6, 7.5, 7.4, 7.32 и более ранние (с 1992 года)
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
