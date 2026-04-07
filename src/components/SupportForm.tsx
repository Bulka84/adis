"use client";

import { useMemo, useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { clients } from "@/data/clients";

const CONTACT_EMAIL = "nst@adis-nst.ru";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

function buildMailtoUrl(subject: string, lines: string[]) {
  const query = [
    `subject=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(lines.join("\n"))}`,
  ].join("&");

  return `mailto:${CONTACT_EMAIL}?${query}`;
}

export default function SupportForm() {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const regions = useMemo(() => {
    const unique = [...new Set(clients.map((c) => c.region))];
    return unique.sort();
  }, []);

  const cities = useMemo(() => {
    if (!region) return [];
    const unique = [
      ...new Set(clients.filter((c) => c.region === region).map((c) => c.city)),
    ];
    return unique.sort();
  }, [region]);

  const resetForm = () => {
    setStep(1);
    setRegion("");
    setCity("");
    setName("");
    setContact("");
    setMessage("");
    setPolicyAccepted(false);
    setConsentAccepted(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const mailtoUrl = buildMailtoUrl("Обращение в техподдержку с сайта АДИС", [
      "Новое обращение в техподдержку с сайта.",
      "",
      `Регион: ${region || "-"}`,
      `Город: ${city || "-"}`,
      `Имя: ${name || "-"}`,
      `Контакт: ${contact || "-"}`,
      "",
      "Описание проблемы:",
      message || "-",
    ]);

    window.location.href = mailtoUrl;
    setIsSubmitting(false);
    setStep(3);
  };

  if (step === 3) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">
          Обращение отправлено
        </h4>
        <p className="text-sm text-gray-500 mb-6">
          Мы свяжемся с вами в ближайшее время
        </p>
        <button
          onClick={resetForm}
          className="px-6 py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Отправить ещё одно обращение
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Регион
            </label>
            <select
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);
                setCity("");
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
            >
              <option value="">Выберите регион</option>
              {regions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Город
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              disabled={!region}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white disabled:bg-gray-50 disabled:text-gray-400"
            >
              <option value="">
                {region ? "Выберите город" : "Сначала выберите регион"}
              </option>
              {cities.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!region || !city}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 btn-gradient text-sm font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Далее
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="text-xs text-gray-400 mb-1">
            {region}, {city}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Имя
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Телефон или email
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="+7 (___) ___-__-__ или email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Опишите проблему
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Что произошло? Какой модуль затронут?"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            />
          </div>

          <label className="flex items-start gap-3 text-xs text-gray-500">
            <input
              type="checkbox"
              checked={policyAccepted}
              onChange={(e) => setPolicyAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
            />
            <span>
              Я принимаю{" "}
              <a
                href={`${BASE_PATH}/documents/nst-ppd.pdf`}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-primary"
              >
                Политику обработки персональных данных
              </a>
            </span>
          </label>

          <label className="flex items-start gap-3 text-xs text-gray-500">
            <input
              type="checkbox"
              checked={consentAccepted}
              onChange={(e) => setConsentAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
            />
            <span>
              Я даю{" "}
              <a
                href={`${BASE_PATH}/documents/nst-spd.pdf`}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-primary"
              >
                согласие на обработку персональных данных
              </a>
            </span>
          </label>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="flex items-center justify-center gap-1 px-4 py-3 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={16} />
              Назад
            </button>
            <button
              onClick={handleSubmit}
              disabled={!name || !contact || !message || !policyAccepted || !consentAccepted || isSubmitting}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 btn-gradient text-sm font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Отправка..."
              ) : (
                <>
                  Отправить
                  <Send size={14} />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
