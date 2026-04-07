import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Компания",
  description:
    "Программный комплекс АДИС является результатом работы двух компаний: ООО «АДИС-Новые Системные Технологии» и ООО Фирма «Новые Системные Технологии».",
};

const companies = [
  {
    name: "ООО «АДИС-Новые Системные Технологии»",
    short: "ООО «АДИС-НСТ»",
    href: "/company/adis-nst",
    text:
      "ООО «АДИС-Новые Системные Технологии» занимается внедрением и обслуживанием программного продукта Программный комплекс автоматизации диспетчерской службы станции скорой медицинской помощи ПК \"АДИС\".",
  },
  {
    name: "ООО Фирма «Новые Системные Технологии»",
    short: "ООО Фирма «НСТ»",
    href: "/company/nst",
    text:
      "ООО Фирма «Новые Системные Технологии» занимается разработкой, внедрением и обслуживанием собственного программного продукта «Программный комплекс автоматизации диспетчерской службы станции скорой медицинской помощи ПК \"АДИС\".",
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="hero-dark min-h-screen flex items-center py-32 lg:py-40">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <span className="section-tag section-tag-light mb-4">Компания</span>
          <p className="text-xl text-white/60 max-w-4xl mb-12 leading-relaxed">
            Программный комплекс автоматизации диспетчерской службы станции скорой
            медицинской помощи ПК &laquo;АДИС&raquo; является результатом работы
            ООО &laquo;АДИС-Новые Системные Технологии&raquo; и ООО Фирма
            &laquo;Новые Системные Технологии&raquo;.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-tag mb-4">Организации</span>
            <h2 className="text-[clamp(28px,3.4vw,40px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">
              Описание компаний
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {companies.map((company) => (
              <Link
                key={company.name}
                href={company.href}
                className="group block rounded-3xl border border-[#b0ccf5] bg-[#e8f0fe] p-8 card-hover"
              >
                <div className="w-12 h-12 gradient-bg-subtle rounded-xl flex items-center justify-center text-primary mb-5">
                  <Building2 size={22} />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">
                  {company.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{company.short}</p>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-6">
                  {company.text}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:text-primary-dark transition-colors">
                  Перейти к описанию
                  <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
