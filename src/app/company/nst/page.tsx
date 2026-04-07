import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, Cable, FlaskConical, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "ООО Фирма «НСТ»",
  description:
    "Описание деятельности ООО Фирма «Новые Системные Технологии» в рамках разработки и развития ПК «АДИС».",
};

const activities = [
  "Разработка компьютерного программного обеспечения.",
  "Планирование и проектирование компьютерных систем.",
  "Подготовка компьютерных систем к эксплуатации.",
  "Консультирование в области компьютерных технологий и систем.",
  "Создание и использование баз данных и информационных ресурсов.",
  "Обработка данных, предоставленных заказчиком.",
  "Администрирование баз данных.",
  "Научные исследования и разработки в области естественных и технических наук прочие.",
  "Деятельность в области связи на базе проводных технологий.",
];

const highlights = [
  {
    icon: Briefcase,
    title: "Основная роль",
    text:
      "ООО Фирма «Новые Системные Технологии» занимается разработкой, внедрением и обслуживанием собственного программного продукта ПК «АДИС».",
  },
  {
    icon: Cable,
    title: "Интеграции",
    text:
      "Компания разрабатывает средства взаимодействия с другими программно-аппаратными средствами, используемыми в работе служб скорой медицинской помощи.",
  },
  {
    icon: FlaskConical,
    title: "Развитие продукта",
    text:
      "Компания участвует в исследовательских и инженерных работах, связанных с развитием программного комплекса и сопутствующей инфраструктуры.",
  },
];

export default function NstCompanyPage() {
  return (
    <>
      <section className="hero-dark min-h-screen flex items-center py-32 lg:py-40">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <Link
            href="/company"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            К странице Компания
          </Link>
          <span className="section-tag section-tag-light mb-4">Компания</span>
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            ООО Фирма &laquo;Новые Системные Технологии&raquo;
          </h1>
          <p className="text-xl text-white/60 max-w-4xl leading-relaxed">
            Компания занимается разработкой, внедрением и обслуживанием собственного
            программного продукта ПК &laquo;АДИС&raquo;, а также разработкой средств
            взаимодействия с другими программно-аппаратными средствами, применяемыми
            в работе служб скорой медицинской помощи.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {highlights.map((item) => (
              <div key={item.title} className="bg-[#e8f0fe] border border-[#b0ccf5] rounded-2xl p-8">
                <div className="w-12 h-12 gradient-bg-subtle rounded-xl flex items-center justify-center text-primary mb-5">
                  <item.icon size={22} />
                </div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-500 leading-relaxed text-[15px]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#e8f0fe] border border-[#b0ccf5] rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gradient-bg-subtle rounded-xl flex items-center justify-center text-primary">
                <Wrench size={22} />
              </div>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">
                Основные направления деятельности
              </h2>
            </div>
            <div className="space-y-4">
              {activities.map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 border border-white p-5 text-gray-600 leading-relaxed text-[15px]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
