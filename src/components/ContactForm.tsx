"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const CONTACT_EMAIL = "nst@adis-nst.ru";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

function buildMailtoUrl(subject: string, lines: string[]) {
  const query = [
    `subject=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(lines.join("\n"))}`,
  ].join("&");

  return `mailto:${CONTACT_EMAIL}?${query}`;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const mailtoUrl = buildMailtoUrl("Заявка с сайта АДИС", [
      "Новая заявка с сайта.",
      "",
      `Имя: ${name || "-"}`,
      `Телефон: ${phone || "-"}`,
      `Email: ${email || "-"}`,
      `Организация: ${organization || "-"}`,
      "",
      "Сообщение:",
      message || "-",
    ]);

    window.location.href = mailtoUrl;
    setLoading(false);
    setSubmitted(true);
    e.currentTarget.reset();
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
        <p className="text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="Ваше имя"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Телефон *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          placeholder="ivanov@mail.ru"
        />
      </div>
      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">
          Организация
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          placeholder="Название станции СМП или организации"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
          placeholder="Опишите ваши задачи или вопросы"
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-gray-500">
        <input
          type="checkbox"
          name="policy"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
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
      <label className="flex items-start gap-3 text-sm text-gray-500">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20"
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
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3.5 btn-gradient font-semibold rounded-xl flex items-center justify-center gap-2 disabled:opacity-60"
      >
        <Send size={18} />
        {loading ? "Отправка..." : "Отправить заявку"}
      </button>
    </form>
  );
}
