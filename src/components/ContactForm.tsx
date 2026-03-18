"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="mx-auto text-accent mb-4" />
        <h3 className="text-xl font-semibold text-dark mb-2">Заявка отправлена!</h3>
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
          placeholder="email@example.com"
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
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
      >
        <Send size={18} />
        {loading ? "Отправка..." : "Отправить заявку"}
      </button>
      <p className="text-xs text-gray-400">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/privacy" className="underline hover:text-primary">
          политикой обработки персональных данных
        </a>
      </p>
    </form>
  );
}
