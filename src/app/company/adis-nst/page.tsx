import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, LifeBuoy, Mail, Phone, Settings2 } from "lucide-react";

export const metadata: Metadata = {
  title: "ООО «АДИС-НСТ»",
  description:
    "Описание деятельности ООО «АДИС-Новые Системные Технологии» в точном соответствии с документом.",
};

const activities = [
  "Разработка компьютерного программного обеспечения",
  "Консультационные услуги в области компьютерных технологий и систем",
  "Обработка данных, предоставленных заказчиком",
  "Создание и использование баз данных и информационных ресурсов",
  "Подготовка компьютерных систем к эксплуатации",
  "Администрирование баз данных",
  "Разработка, адаптация, модификация баз данных",
  "Установка, тестирование и сопровождение баз данных",
];

export default function AdisNstCompanyPage() {
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
            ООО &laquo;АДИС-Новые Системные Технологии&raquo;
          </h1>
          <p className="text-xl text-white/60 max-w-4xl leading-relaxed">
            ООО &laquo;АДИС-Новые Системные Технологии&raquo; занимается внедрением и
            обслуживанием программного продукта Программный комплекс автоматизации
            диспетчерской службы станции скорой медицинской помощи ПК &laquo;АДИС&raquo;
            (зарегистрирован в едином реестре российских программ для электронных
            вычислительных машин и баз данных за регистрационным номером 1591 на
            основании приказа Минкомсвязи России от 06.09.2016 № 426).
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#e8f0fe] border border-[#b0ccf5] rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gradient-bg-subtle rounded-xl flex items-center justify-center text-primary">
                <Settings2 size={22} />
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

      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#dce0ea] border border-white rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gradient-bg-subtle rounded-xl flex items-center justify-center text-primary">
                <LifeBuoy size={22} />
              </div>
              <h2 className="text-[clamp(28px,3.4vw,40px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">
                Связаться с поддержкой
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-8 max-w-3xl">
              По вопросам внедрения, сопровождения и эксплуатации ПК &laquo;АДИС&raquo;
              вы можете связаться со службой поддержки по электронной почте или по телефону.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:nst@adis-nst.ru"
                className="flex items-start gap-4 rounded-2xl bg-white border border-white p-6 hover:border-[#b0ccf5] transition-colors"
              >
                <div className="w-12 h-12 gradient-bg-subtle rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Электронная почта</div>
                  <div className="text-gray-900 font-medium">nst@adis-nst.ru</div>
                </div>
              </a>
              <a
                href="tel:+74957394807"
                className="flex items-start gap-4 rounded-2xl bg-white border border-white p-6 hover:border-[#b0ccf5] transition-colors"
              >
                <div className="w-12 h-12 gradient-bg-subtle rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Телефон / Факс</div>
                  <div className="text-gray-900 font-medium">8(495) 739 4807</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
