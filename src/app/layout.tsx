import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportChat from "@/components/SupportChat";

export const metadata: Metadata = {
  title: {
    default: "ПК «АДИС» — Автоматизация скорой медицинской помощи",
    template: "%s | ПК «АДИС»",
  },
  description:
    "Программный комплекс автоматизации диспетчерской службы станции скорой медицинской помощи. Разработка и внедрение с 1992 года. 50+ городов России.",
  keywords: [
    "АДИС",
    "скорая помощь",
    "автоматизация СМП",
    "диспетчерская служба",
    "программный комплекс",
    "НСТ",
    "103",
  ],
  authors: [{ name: "ООО «АДИС-Новые Системные Технологии»" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://adis-nst.ru",
    siteName: "ПК «АДИС»",
    title: "ПК «АДИС» — Автоматизация скорой медицинской помощи",
    description:
      "Программный комплекс автоматизации диспетчерской службы СМП. 34 года на рынке, 500+ городов внедрений.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="theme-color" content="#e8ebf2" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <SupportChat />
      </body>
    </html>
  );
}
