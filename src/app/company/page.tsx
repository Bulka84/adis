import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";

export const metadata: Metadata = {
  title: "Компания",
  description:
    "Программный комплекс АДИС является результатом работы двух компаний: ООО «АДИС-Новые Системные Технологии» и ООО Фирма «Новые Системные Технологии».",
};

const companies = [
  {
    name: "ООО Фирма «Новые Системные Технологии»",
    short: "ООО Фирма «НСТ»",
    href: "/company/nst",
    text:
      "ООО Фирма «Новые Системные Технологии» занимается разработкой, внедрением и обслуживанием собственного программного продукта «Программный комплекс автоматизации диспетчерской службы станции скорой медицинской помощи ПК \"АДИС\".",
  },
  {
    name: "ООО «АДИС-Новые Системные Технологии»",
    short: "ООО «АДИС-НСТ»",
    href: "/company/adis-nst",
    text:
      "ООО «АДИС-Новые Системные Технологии» занимается внедрением и обслуживанием программного продукта Программный комплекс автоматизации диспетчерской службы станции скорой медицинской помощи ПК \"АДИС\".",
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="hero-dark min-h-screen py-24 lg:py-28">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mb-10 lg:mb-12">
            <p className="text-xl text-white/60 leading-relaxed">
              Программный комплекс автоматизации диспетчерской службы станции скорой
              медицинской помощи ПК &laquo;АДИС&raquo; является результатом работы
              ООО Фирма &laquo;Новые Системные Технологии&raquo; и
              ООО &laquo;АДИС-Новые Системные Технологии&raquo;.
            </p>
          </div>
          <div id="company-cards" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {companies.map((company) => (
              <Link
                key={company.name}
                href={company.href}
                className="group block rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm p-8 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-white/12 flex items-center justify-center text-white mb-5">
                  <Building2 size={22} />
                </div>
                <h2 className="text-2xl font-extrabold text-white mb-2 leading-tight">
                  {company.name}
                </h2>
                <p className="text-sm text-white/45 mb-4">{company.short}</p>
                <p className="text-white/70 leading-relaxed text-[15px] mb-6">
                  {company.text}
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-white/80 transition-colors">
                  Перейти к описанию
                  <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
        <HeroScrollIndicator targetId="company-cards" />
      </section>
    </>
  );
}
