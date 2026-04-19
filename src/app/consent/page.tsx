import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, FileCheck2, FileText, Download } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";

export const metadata: Metadata = {
  title: "Согласие посетителя сайта на обработку персональных данных",
  description:
    "Согласие посетителя сайта на обработку персональных данных ООО «АДИС-Новые Системные Технологии».",
};

const sections = [
  {
    title: "1. Общие положения",
    content: [
      "Настоящим, оставляя свои данные на сайте adis-nst.ru, посетитель сайта подтверждает своё согласие на обработку персональных данных ООО «АДИС-Новые Системные Технологии».",
      "Согласие предоставляется на обработку персональных данных, указанных посетителем сайта в формах обратной связи, заявках, обращениях и иных электронных сообщениях, направляемых через сайт.",
    ],
  },
  {
    title: "2. Перечень персональных данных",
    content: [
      "К персональным данным, на обработку которых даётся согласие, могут относиться: фамилия, имя, отчество, телефон, адрес электронной почты, наименование организации, должность, регион, город и иные сведения, добровольно указанные посетителем сайта.",
      "Также согласие может распространяться на технические данные, автоматически передаваемые при использовании сайта, включая IP-адрес, сведения о браузере, cookie-файлы и иные данные, необходимые для корректной работы сайта.",
    ],
  },
  {
    title: "3. Цели обработки персональных данных",
    content: [
      "Персональные данные обрабатываются в целях рассмотрения заявок и обращений, предоставления консультаций, сопровождения эксплуатации программного комплекса, заключения и исполнения договоров, а также повышения качества обслуживания посетителей сайта.",
    ],
  },
  {
    title: "4. Действия с персональными данными",
    content: [
      "Посетитель сайта выражает согласие на совершение с персональными данными следующих действий: сбор, запись, систематизация, накопление, хранение, уточнение, использование, передача в случаях, предусмотренных законодательством Российской Федерации, обезличивание, блокирование, удаление и уничтожение.",
    ],
  },
  {
    title: "5. Срок действия согласия",
    content: [
      "Согласие действует с момента предоставления данных посетителем сайта и до достижения целей обработки персональных данных либо до момента отзыва согласия субъектом персональных данных, если иное не предусмотрено законодательством Российской Федерации.",
    ],
  },
  {
    title: "6. Отзыв согласия",
    content: [
      "Посетитель сайта вправе отозвать настоящее согласие путём направления письменного уведомления оператору персональных данных по адресу электронной почты nst@adis-nst.ru или по телефону (495) 739-48-07.",
      "Отзыв согласия не влияет на законность обработки, осуществлённой до момента получения отзыва.",
    ],
  },
];

export default function ConsentPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      <section className="bg-[#e8ebf2] min-h-screen flex items-center py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#e8f0fe] rounded-xl flex items-center justify-center">
              <CheckCircle2 size={24} className="text-primary" />
            </div>
            <FileCheck2 size={20} className="text-gray-500" />
          </div>
          <h1 className="text-[clamp(28px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em] mb-6">
            Согласие посетителя сайта на обработку персональных данных
          </h1>
          <p className="text-lg text-gray-500">
            ООО &laquo;АДИС-Новые Системные Технологии&raquo; &middot; Редакция от 01.01.2025
          </p>
        </div>
        <HeroScrollIndicator targetId="consent-content" variant="light" />
      </section>

      <section id="consent-content" className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
        <div className="mb-12 p-6 bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5]">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">Документ согласия</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 gradient-bg-subtle rounded-xl flex items-center justify-center text-primary shrink-0">
                <FileText size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 leading-snug">
                  Согласие посетителя сайта на обработку персональных данных
                </h3>
                <p className="text-sm text-gray-500 mt-1">PDF-документ</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`${basePath}/documents/nst-spd.pdf`}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2.5 btn-gradient rounded-xl text-sm font-semibold"
              >
                <FileText size={16} />
                Открыть
              </Link>
              <a
                href={`${basePath}/documents/nst-spd.pdf`}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Download size={16} />
                Скачать
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-extrabold text-gray-900 mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-500 leading-relaxed text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
