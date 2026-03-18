"use client";

import { useState, useMemo } from "react";
import { MessageCircle, X, ChevronRight, ChevronLeft, CheckCircle, Send } from "lucide-react";
import { clients } from "@/data/clients";

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
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
  };

  const handleClose = () => {
    setIsOpen(false);
    if (step === 3) resetForm();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setStep(3);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#C41E3A] text-white rounded-full shadow-lg shadow-[#C41E3A]/30 hover:bg-[#9B1B30] transition-all hover:scale-105 flex items-center justify-center ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        aria-label="Открыть чат поддержки"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="bg-[#C41E3A] px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold text-lg">Поддержка</h3>
            <p className="text-white/70 text-xs">Опишите вашу проблему</p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          {/* Step 1: Region & City */}
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
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 focus:border-[#C41E3A] bg-white"
                >
                  <option value="">Выберите регион</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
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
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 focus:border-[#C41E3A] bg-white disabled:bg-gray-50 disabled:text-gray-400"
                >
                  <option value="">
                    {region ? "Выберите город" : "Сначала выберите регион"}
                  </option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!region || !city}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C41E3A] text-white text-sm font-medium rounded-lg hover:bg-[#9B1B30] transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Далее
                <ChevronRight size={16} />
              </button>
            </div>
          )}

          {/* Step 2: Contact info & problem */}
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
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 focus:border-[#C41E3A]"
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
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 focus:border-[#C41E3A]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Опишите проблему
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Что произошло? Какой модуль затронут?"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/20 focus:border-[#C41E3A] resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center justify-center gap-1 px-4 py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={16} />
                  Назад
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!name || !contact || !message || isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C41E3A] text-white text-sm font-medium rounded-lg hover:bg-[#9B1B30] transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
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

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-[#1A1A2E] mb-2">
                Обращение отправлено
              </h4>
              <p className="text-sm text-gray-500 mb-6">
                Мы свяжемся с вами в ближайшее время
              </p>
              <button
                onClick={() => {
                  handleClose();
                  resetForm();
                }}
                className="px-6 py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Закрыть
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
