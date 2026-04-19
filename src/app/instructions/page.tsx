import type { Metadata } from "next";
import { FileText, ExternalLink, BookOpen, Archive, Smartphone, AlertTriangle } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";

export const metadata: Metadata = {
  title: "Инструкции",
  description: "Руководства пользователя ПК «АДИС»: общее руководство, подсистема «Архив», мобильный АРМ, действия в нештатных ситуациях.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const documents = [
  {
    title: "Руководство пользователя",
    description: "Основное руководство по работе с программным комплексом ПК «АДИС».",
    href: `${basePath}/documents/user-guide.pdf`,
    size: "5.1 МБ",
    icon: BookOpen,
  },
  {
    title: "Подсистема «Архив»",
    description: "Руководство по использованию архива вызовов, отчётов и статистики.",
    href: `${basePath}/documents/archive-guide.pdf`,
    size: "624 КБ",
    icon: Archive,
  },
  {
    title: "Мобильный АРМ",
    description: "Руководство пользователя мобильного АРМ выездной бригады.",
    href: `${basePath}/documents/mobile-arm-guide.pdf`,
    size: "1.1 МБ",
    icon: Smartphone,
  },
  {
    title: "Действия в нештатных ситуациях",
    description: "Инструкции для нештатных ситуаций и восстановления работоспособности.",
    href: `${basePath}/documents/instructions-emergency.pdf`,
    size: "253 КБ",
    icon: AlertTriangle,
  },
];

export default function InstructionsPage() {
  return (
    <>
      <section className="min-h-screen flex items-center py-32 lg:py-40 bg-[#e8ebf2]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-gray-900 leading-[1.1] tracking-[-0.03em] mb-6">
            Инструкции и руководства
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mb-12">
            Документация по работе с программным комплексом ПК &laquo;АДИС&raquo;.
            Все материалы доступны в формате PDF — откройте или скачайте для работы.
          </p>
        </div>
        <HeroScrollIndicator targetId="instructions-list" variant="light" />
      </section>

      <section id="instructions-list" className="py-24 bg-[#e8ebf2]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                className="group p-8 bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5] card-hover hover:border-primary/40 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 gradient-bg-subtle rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <doc.icon size={24} />
                  </div>
                  <ExternalLink
                    size={18}
                    className="text-gray-400 group-hover:text-primary transition-colors shrink-0 mt-2"
                  />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {doc.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <FileText size={14} className="text-primary" />
                  <span>PDF · {doc.size}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 p-8 md:p-10 bg-[#e8ebf2] border border-[#b0ccf5]/40 rounded-2xl text-center">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
              Не нашли нужную инструкцию?
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto mb-6">
              Обратитесь в службу технической поддержки — мы подготовим
              необходимые материалы и проконсультируем по работе с комплексом.
            </p>
            <a
              href="/support"
              className="inline-flex btn-gradient px-6 py-3 text-sm font-semibold rounded-xl"
            >
              Связаться с техподдержкой
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
