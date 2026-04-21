import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с ООО «АДИС-Новые Системные Технологии» для получения информации о ПК «АДИС». Москва, +7 (495) 739-48-07.",
};

const contacts = [
  { icon: MapPin, title: "Адрес офиса", lines: ["г. Москва, ул. Космонавта Волкова, д.10, офис 512"] },
  { icon: MapPin, title: "Почтовый адрес", lines: ["123154, г. Москва, ул. Маршала Тухачевского, 32-2-401"] },
  { icon: Phone, title: "Телефон", lines: ["+7 (495) 739-48-07"], href: "tel:+74957394807" },
  { icon: Mail, title: "Email", lines: ["nst@adis-nst.ru"], href: "mailto:nst@adis-nst.ru" },
];

export default function ContactsPage() {
  return (
    <>
      <section className="bg-[#e8ebf2] min-h-screen flex items-center py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-gray-900 leading-[1.1] tracking-[-0.03em] mb-6">
            Контакты
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mb-12">
            Свяжитесь с нами для получения информации о ПК &laquo;АДИС&raquo;
            и обсуждения возможностей автоматизации вашей станции скорой медицинской помощи.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((item) => (
              <div key={item.title} className="bg-[#e8f0fe] border border-[#b0ccf5] rounded-2xl p-5">
                <item.icon size={24} className="text-primary mb-3" />
                <div className="text-sm text-gray-500 mb-1">{item.title}</div>
                {item.lines.map((line) =>
                  item.href ? (
                    <a key={line} href={item.href} className="text-gray-900 font-medium text-sm hover:text-primary transition-colors">{line}</a>
                  ) : (
                    <div key={line} className="text-gray-900 font-medium text-sm">{line}</div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        <HeroScrollIndicator targetId="contacts-content" variant="light" />
      </section>

      <section id="contacts-content" className="py-24">
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
            </div>

            {/* Form */}
            <div id="form" className="scroll-mt-28">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Написать нам</h2>
              <div className="bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5] shadow-lg p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
