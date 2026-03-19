import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportChat from "@/components/SupportChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

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
  authors: [{ name: "ООО Фирма «Новые Системные Технологии»" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://adis-nst.ru",
    siteName: "ПК «АДИС»",
    title: "ПК «АДИС» — Автоматизация скорой медицинской помощи",
    description:
      "Программный комплекс автоматизации диспетчерской службы СМП. 30+ лет на рынке, 50+ городов внедрений.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <SupportChat />
      </body>
    </html>
  );
}
