import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <footer className="bg-gray-950 pt-16 pb-0">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/[0.08]">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo variant="light" height={36} showLabel={false} />
            </div>
            <p className="text-sm text-white/45 leading-relaxed max-w-[340px]">
              Автоматизация диспетчерской службы скорой медицинской помощи с 1992 года.
              Программный комплекс в реестре российского ПО №1591.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Навигация</h4>
            <ul className="space-y-3">
              {[
                { name: "О продукте", href: "/product" },
                { name: "Внедрения", href: "/clients" },
                { name: "Услуги и цены", href: "/services" },
                { name: "Версии", href: "/versions" },
                { name: "Контакты", href: "/contacts" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/45 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+74957394807" className="flex items-start gap-2 text-sm text-white/45 hover:text-white transition-colors">
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>+7 (495) 739-48-07</span>
                </a>
              </li>
              <li>
                <a href="mailto:nst@adis-nst.ru" className="flex items-start gap-2 text-sm text-white/45 hover:text-white transition-colors">
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <span>nst@adis-nst.ru</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/45">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>г. Москва, ул. Космонавта Волкова, д.10, оф.512</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <p className="text-sm text-white/45">ООО Фирма &laquo;Новые Системные Технологии&raquo;</p>
              <p className="text-sm text-white/45 mt-1">ИНН / КПП: 7717026492 / 771701001</p>
              <a
                href={`${basePath}/documents/nst-ppd.pdf`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/45 hover:text-white transition-colors mt-2 inline-block"
              >
                Политика обработки персональных данных
              </a>
              <a
                href={`${basePath}/documents/nst-spd.pdf`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/45 hover:text-white transition-colors mt-2 inline-block"
              >
                Согласие посетителя сайта на обработку персональных данных
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/30">
            &copy; 1992&ndash;2026 ООО &laquo;АДИС-Новые Системные Технологии&raquo;
          </p>
          <p className="text-[13px] text-white/30">
            Генеральный директор: Зинин В.В.
          </p>
        </div>
      </div>
    </footer>
  );
}
