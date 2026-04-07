"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navigation = [
  { name: "Компании", href: "/company" },
  { name: "О продукте", href: "/product" },
  { name: "Внедрения", href: "/clients" },
  { name: "Услуги", href: "/services" },
  { name: "Версии", href: "/versions" },
  { name: "Кейсы", href: "/cases" },
  { name: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "navbar-glass py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors duration-200 ${
              scrolled
                ? "text-gray-700 hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
          >
            Главная
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-500 hover:text-gray-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+74957394807"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-gray-500 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
              title="(495) 739-48-07"
            >
              <Phone size={16} />
              <span className="hidden xl:inline">(495) 739-48-07</span>
            </a>
            <Link
              href="/contacts#form"
              className="btn-gradient px-5 py-2.5 text-sm font-semibold rounded-xl"
            >
              Оставить заявку
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X size={22} className={scrolled ? "text-gray-700" : "text-white"} />
            ) : (
              <Menu size={22} className={scrolled ? "text-gray-700" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 mt-2">
          <div className="px-6 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary-light/50 rounded-lg transition-all text-[16px]"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contacts#form"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center mt-4 btn-gradient px-5 py-3 font-semibold rounded-xl"
            >
              Оставить заявку
            </Link>
            <div className="pt-4 border-t border-gray-100 mt-4">
              <a href="tel:+74957394807" className="flex items-center gap-2 text-sm text-gray-500 px-4 py-2">
                <Phone size={14} /> (495) 739-48-07
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
