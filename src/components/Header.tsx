"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const navigation = [
  { name: "О продукте", href: "/product" },
  { name: "Внедрения", href: "/clients" },
  { name: "Услуги", href: "/services" },
  { name: "Версии", href: "/versions" },
  { name: "Кейсы", href: "/cases" },
  { name: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden md:flex items-center justify-end gap-6 py-2 text-sm text-gray-500 border-b border-gray-50">
              <a href="tel:+74957394807" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Phone size={14} />
                <span>(495) 739-48-07</span>
              </a>
              <a href="mailto:nst@adis-nst.ru" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail size={14} />
                <span>nst@adis-nst.ru</span>
              </a>
            </div>
            <div className="flex items-center justify-between h-16">
              <Link href="/">
                <Logo variant="dark" size={38} />
              </Link>
              <nav className="hidden lg:flex items-center gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary-light rounded-lg transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="tel:+74957394807"
                  className="ml-3 w-10 h-10 bg-[#C41E3A] text-white rounded-full flex items-center justify-center hover:bg-[#9B1B30] transition-colors"
                  title="(495) 739-48-07"
                >
                  <Phone size={18} />
                </a>
                <Link
                  href="/contacts#form"
                  className="ml-3 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Оставить заявку
                </Link>
              </nav>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-primary"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
              <div className="px-4 py-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-primary-light rounded-lg transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contacts#form"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center mt-4 px-5 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Оставить заявку
                </Link>
                <div className="pt-4 border-t border-gray-100 mt-4 space-y-2">
                  <a href="tel:+74957394807" className="flex items-center gap-2 text-sm text-gray-500 px-4">
                    <Phone size={14} /> (495) 739-48-07
                  </a>
                  <a href="mailto:nst@adis-nst.ru" className="flex items-center gap-2 text-sm text-gray-500 px-4">
                    <Mail size={14} /> nst@adis-nst.ru
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
