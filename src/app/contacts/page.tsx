import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с ООО Фирма «Новые Системные Технологии» для получения информации о ПК «АДИС». Москва, (495) 739-48-07.",
};

const contacts = [
  {
    icon: MapPin,
    title: "Адрес офиса",
    lines: ["г. Москва, ул. Космонавта Волкова, д.10, офис 512"],
  },
  {
    icon: MapPin,
    title: "Почтовый адрес",
    lines: ["123154, г. Москва, ул. Маршала Тухачевского, 32-2-401"],
  },
  {
    icon: Phone,
    title: "Телефон",
    lines: ["(495) 739-48-07"],
    href: "tel:+74957394807",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["nst@adis-nst.ru"],
    href: "mailto:nst@adis-nst.ru",
  },
];

export default function ContactsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#E8F4FD] via-white to-[#FDF2F4] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-6">
            Контакты
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Свяжитесь с нами для получения информации о ПК &laquo;АДИС&raquo;
            и обсуждения возможностей автоматизации вашей станции СМП.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-8">Наши координаты</h2>
              <div className="space-y-6 mb-10">
                {contacts.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E8F4FD] rounded-xl flex items-center justify-center shrink-0">
                      <item.icon size={22} className="text-[#0066CC]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{item.title}</div>
                      {item.lines.map((line) =>
                        item.href ? (
                          <a key={line} href={item.href} className="text-[#1A1A2E] font-medium hover:text-[#0066CC] transition-colors">
                            {line}
                          </a>
                        ) : (
                          <div key={line} className="text-[#1A1A2E]">{line}</div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-[#F8FAFB] rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={20} className="text-[#0066CC]" />
                  <h3 className="font-semibold text-[#1A1A2E]">Руководство</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Генеральный директор:</strong> Зинин Владимир Валерьевич,
                  действующий на основании Устава.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Обязательно указывайте свои координаты для связи.
                </p>
              </div>
            </div>

            {/* Form */}
            <div id="form">
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-8">Написать нам</h2>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
