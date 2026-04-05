import type { Metadata } from "next";
import Link from "next/link";
import {
  HeadphonesIcon,
  Clock,
  Shield,
  Server,
  Database,
  Phone,
  Mail,
  ChevronRight,
  CheckCircle,
  Wrench,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Сопровождение",
  description:
    "Сопровождение ПК «АДИС»: техническая поддержка, консультации, обновления, настройка и сопровождение эксплуатации.",
};

const supportDirections = [
  {
    title: "Техническая поддержка",
    description:
      "Консультации пользователей и технических специалистов по вопросам эксплуатации программного комплекса и его подсистем.",
    icon: HeadphonesIcon,
  },
  {
    title: "Обновления и сопровождение",
    description:
      "Поддержание актуального состояния программного комплекса, установка обновлений и рекомендации по развитию конфигурации.",
    icon: Server,
  },
  {
    title: "Администрирование и настройка",
    description:
      "Помощь в настройке серверной инфраструктуры, баз данных, справочников и параметров работы АРМ.",
    icon: Database,
  },
  {
    title: "Восстановление работоспособности",
    description:
      "Помощь при сбоях, диагностике причин инцидентов и восстановлении штатной работы системы и рабочих мест.",
    icon: Wrench,
  },
];

const supportSteps = [
  "Регистрация обращения и уточнение исходных данных",
  "Диагностика проблемы и определение требуемых действий",
  "Подготовка рекомендаций или выполнение работ по сопровождению",
  "Контроль результата и подтверждение восстановления работоспособности",
];

const channels = [
  {
    title: "Телефон",
    value: "(495) 739-48-07",
    href: "tel:+74957394807",
    icon: Phone,
  },
  {
    title: "Email",
    value: "nst@adis-nst.ru",
    href: "mailto:nst@adis-nst.ru",
    icon: Mail,
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="hero-dark min-h-screen flex items-center py-32 lg:py-40">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <span className="section-tag section-tag-light mb-4">Сопровождение</span>
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            Сопровождение
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mb-12">
            Поддержка эксплуатации ПК &laquo;АДИС&raquo;, консультации специалистов,
            сопровождение обновлений и помощь в восстановлении штатной работы системы.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, value: "с 1992", label: "опыт сопровождения" },
              { icon: Shield, value: "500+", label: "городов эксплуатации" },
              { icon: HeadphonesIcon, value: "2", label: "канала обращения" },
              { icon: Server, value: "24/7", label: "готовность к обработке инцидентов" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center"
              >
                <item.icon size={24} className="text-primary mx-auto mb-3" />
                <div className="text-2xl font-extrabold text-white mb-1">{item.value}</div>
                <div className="text-sm text-white/50">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Направления</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">
              Что входит в сопровождение
            </h2>
            <p className="text-lg text-gray-500 max-w-[640px] mx-auto mt-4 leading-relaxed">
              Комплекс работ по поддержанию устойчивой эксплуатации программного комплекса,
              сопровождению пользователей и развитию рабочей конфигурации.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportDirections.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-[#b0ccf5] bg-[#e8f0fe] card-hover"
              >
                <div className="w-12 h-12 gradient-bg-subtle rounded-lg flex items-center justify-center mb-5 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#dce0ea]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <div className="bg-[#e8f0fe] rounded-3xl border border-[#b0ccf5] p-8 lg:p-10">
              <span className="section-tag mb-4">Порядок работы</span>
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.02em] mb-6">
                Как организовано сопровождение
              </h2>
              <div className="space-y-4">
                {supportSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full gradient-bg text-white flex items-center justify-center font-bold shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-600 leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
                <span className="section-tag mb-4">Каналы связи</span>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Как обратиться</h3>
                <div className="space-y-4">
                  {channels.map((channel) => (
                    <a
                      key={channel.title}
                      href={channel.href}
                      className="flex items-center gap-4 rounded-2xl border border-gray-200 px-5 py-4 hover:border-[#b0ccf5] hover:bg-[#e8f0fe] transition-colors"
                    >
                      <div className="w-11 h-11 gradient-bg-subtle rounded-xl flex items-center justify-center text-primary shrink-0">
                        <channel.icon size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{channel.title}</div>
                        <div className="text-gray-900 font-semibold">{channel.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle size={22} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Обращение на сопровождение
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Для ускорения обработки обращения укажите регион, организацию,
                      контакты для связи и краткое описание ситуации.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contacts#form"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Оставить заявку
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-tag mb-4">Связь</span>
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-gray-900 leading-[1.2] tracking-[-0.03em] mb-5">
                Написать в сопровождение
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Оставьте обращение, и специалисты свяжутся с вами для уточнения
                параметров эксплуатации, текущей конфигурации и необходимых действий.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Clock, text: "Регистрация и первичная обработка обращений" },
                  { icon: Shield, text: "Поддержка устойчивой эксплуатации системы" },
                  { icon: Server, text: "Сопровождение серверной и прикладной части" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 gradient-bg-subtle rounded-lg flex items-center justify-center shrink-0 text-primary">
                      <item.icon size={20} />
                    </div>
                    <span className="text-[15px]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5] shadow-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
