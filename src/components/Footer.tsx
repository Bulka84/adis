import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <Logo variant="light" height={38} />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Автоматизация диспетчерской службы скорой медицинской помощи с 1992 года.
              Программный комплекс в реестре российского ПО.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {[
                { name: "О продукте", href: "/product" },
                { name: "Внедрения", href: "/clients" },
                { name: "Услуги и цены", href: "/services" },
                { name: "Кейсы и отзывы", href: "/cases" },
                { name: "Версии", href: "/versions" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+74957394807" className="flex items-start gap-2 text-sm text-gray-400 hover:text-primary transition-colors">
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>(495) 739-48-07</span>
                </a>
              </li>
              <li>
                <a href="mailto:nst@adis-nst.ru" className="flex items-start gap-2 text-sm text-gray-400 hover:text-primary transition-colors">
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <span>nst@adis-nst.ru</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>г. Москва, ул. Космонавта Волкова, д.10, оф.512</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">
                ООО Фирма &laquo;Новые Системные Технологии&raquo;
              </li>
              <li className="text-sm text-gray-400">
                ИНН: 7717026492
              </li>
              <li className="text-sm text-gray-400">
                Реестр российского ПО №1591
              </li>
              <li className="mt-4">
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Политика обработки персональных данных
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#C41E3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 1992&ndash;2026 Фирма &laquo;Новые Системные Технологии&raquo;
          </p>
          <p className="text-sm text-gray-500">
            Генеральный директор: Зинин В.В.
          </p>
        </div>
      </div>
    </footer>
  );
}
