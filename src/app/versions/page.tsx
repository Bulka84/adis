import type { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";

export const metadata: Metadata = {
  title: "Версии",
  description: "История версий ПК «АДИС»: от версии 8.4 до актуальной версии 8.5 (Пакет обновления 2). Новые возможности и улучшения.",
};

const versions = [
  {
    version: "8.5 (Пакет обновления 2)", date: "2026", current: true,
    features: [
      "Приём и загрузка координат машин по протоколу ЕГТС (ГОСТ 33472-2015)",
      "АРМ формирования СЭМД и передачи в РЭМД",
    ],
  },
  {
    version: "8.5 (Пакет обновления 1)", date: "2025", current: false,
    features: [
      "Разработан функционал АРМ неотложной помощи (поликлиники)",
      "АРМ диспетчера медицинского округа",
      "Интеграция с различными програмными АТС",
    ],
  },
  {
    version: "8.5", date: "2024", current: false,
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
    version: "8.4 (Пакет обновления 1)", date: "2023", current: false,
    features: ["Исправления и улучшения стабильности", "Обновлённые справочники и классификаторы", "Улучшенная работа подсистемы «Аптека»"],
  },
  {
    version: "8.4", date: "2022", current: false,
    features: ["Новая подсистема интеграции с внешними информационными системами", "Поддержка сопряжения с навигационным оборудованием", "Расширенные возможности статистической обработки", "Обновлённый интерфейс диспетчера «03»", "Улучшенный алгоритм подбора бригад"],
  },
  {
    version: "8.1", date: "2018", current: false,
    features: ["Интеграция подсистемы «Аптека» с основным комплексом", "Поддержка удалённых подстанций", "Новые формы отчётности"],
  },
  {
    version: "8.0", date: "2015", current: false,
    features: ["Полная переработка архитектуры системы", "Переход на PostgreSQL", "Web-интерфейс для административных АРМ"],
  },
];

export default function VersionsPage() {
  return (
    <>
      <section className="bg-[#e8ebf2] min-h-screen flex items-center py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-gray-900 leading-[1.1] tracking-[-0.03em] mb-6">
            Версии ПК &laquo;АДИС&raquo;
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mb-12">
            История развития программного комплекса. Каждая новая версия
            расширяет возможности автоматизации и повышает удобство работы.
          </p>
        </div>
        <HeroScrollIndicator targetId="versions-timeline" variant="light" />
      </section>

      <section id="versions-timeline" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-violet to-gray-200 hidden md:block" />

            <div className="space-y-6">
              {versions.map((ver) => (
                <div key={ver.version} className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div className={`absolute left-[14px] w-5 h-5 rounded-full hidden md:block ${
                    ver.current
                      ? "gradient-bg shadow-[0_0_12px_rgba(37,99,235,0.5)]"
                      : "bg-white border-2 border-gray-300"
                  }`} style={{ top: "1.75rem" }} />

                  <div className={`p-8 rounded-2xl border ${
                    ver.current
                      ? "border-[#b0ccf5] bg-[#e8f0fe] shadow-md"
                      : "border-[#b0ccf5] bg-[#e8f0fe]"
                  } card-hover`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-extrabold text-gray-900">
                        Версия {ver.version}
                      </h3>
                      <span className="text-sm text-gray-400">{ver.date}</span>
                      {ver.current && (
                        <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full font-semibold">
                          Актуальная
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {ver.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-gray-500">
                          <CheckCircle size={16} className={`shrink-0 mt-0.5 ${ver.current ? "text-primary" : "text-gray-400"}`} />
                          <span className="text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
