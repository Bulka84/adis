import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с ООО Фирма «Новые Системные Технологии» для получения информации о ПК «АДИС». Москва, (495) 739-48-07.",
};

const contacts = [
  { icon: MapPin, title: "Адрес офиса", lines: ["г. Москва, ул. Космонавта Волкова, д.10, офис 512"] },
  { icon: MapPin, title: "Почтовый адрес", lines: ["123154, г. Москва, ул. Маршала Тухачевского, 32-2-401"] },
  { icon: Phone, title: "Телефон", lines: ["(495) 739-48-07"], href: "tel:+74957394807" },
  { icon: Mail, title: "Email", lines: ["nst@adis-nst.ru"], href: "mailto:nst@adis-nst.ru" },
];

export default function ContactsPage() {
  return (
    <>
      <section className="hero-dark py-32 lg:py-40">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <span className="section-tag section-tag-light mb-4">Контакты</span>
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            Контакты
          </h1>
          <p className="text-xl text-white/60 max-w-3xl">
            Свяжитесь с нами для получения информации о ПК &laquo;АДИС&raquo;
            и обсуждения возможностей автоматизации вашей станции СМП.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Наши координаты</h2>
              <div className="space-y-6 mb-10">
                {contacts.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-bg-subtle rounded-xl flex items-center justify-center shrink-0 text-primary">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{item.title}</div>
                      {item.lines.map((line) =>
                        item.href ? (
                          <a key={line} href={item.href} className="text-gray-900 font-medium hover:text-primary transition-colors">
                            {line}
                          </a>
                        ) : (
                          <div key={line} className="text-gray-900">{line}</div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 gradient-bg-subtle rounded-lg flex items-center justify-center text-primary">
                    <Clock size={16} />
                  </div>
                  <h3 className="font-bold text-gray-900">Руководство</h3>
                </div>
                <p className="text-gray-500 text-sm">
                  <strong className="text-gray-900">Генеральный директор:</strong> Зинин Владимир Валерьевич,
                  действующий на основании Устава.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Обязательно указывайте свои координаты для связи.
                </p>
              </div>
            </div>

            {/* Form */}
            <div id="form">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Написать нам</h2>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
