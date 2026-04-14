"use client";

import { useState, useMemo } from "react";
import { MessageCircle, X, ChevronRight, ChevronLeft, CheckCircle, Send } from "lucide-react";
import { clients } from "@/data/clients";
import { submitSupportTicket } from "@/lib/support";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const SUPPORT_EMAIL = "nst@adis-nst.ru";

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [contractNumber, setContractNumber] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    setContractNumber("");
    setName("");
    setContact("");
    setMessage("");
    setAttachments([]);
    setConsentAccepted(false);
    setSubmitError("");
  };

  const handleClose = () => {
    setIsOpen(false);
    if (step === 4 || step === 5) resetForm();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitSupportTicket({
        source: "support_chat",
        subject: "Обращение в техподдержку с сайта АДИС",
        message,
        customerName: name,
        contact,
        region,
        city,
        contractNumber,
        attachments,
      });
      setStep(5);
    } catch (error) {
      const messageText =
        error instanceof Error ? error.message : "Не удалось отправить обращение. Попробуйте позже.";
      setSubmitError(messageText);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 gradient-bg text-white rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all hover:scale-105 flex items-center gap-2 px-5 py-3 text-sm font-semibold ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        aria-label="Обратиться в техподдержку"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">Обратиться в техподдержку</span>
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="gradient-bg px-5 py-4 flex items-center justify-between">
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
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-gray-900">
                Наличие действующего договора сопровождения?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 btn-gradient text-sm font-semibold rounded-xl"
                >
                  Да
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="w-full px-4 py-3 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Нет
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Region & City */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="text-xs text-gray-400">Договор сопровождения подтверждён</div>
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
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Номер договора
                </label>
                <input
                  type="text"
                  value={contractNumber}
                  onChange={(e) => setContractNumber(e.target.value)}
                  placeholder="Введите номер договора"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
                  onClick={() => setStep(3)}
                  disabled={!region || !city || !contractNumber.trim()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 btn-gradient text-sm font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Далее
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact info & problem */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="text-xs text-gray-400 mb-1">
                {region}, {city}
                <span className="block mt-1">Договор: {contractNumber}</span>
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
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Приложите скриншот, логи ошибки или другие файлы
                </label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setAttachments(Array.from(e.target.files ?? []))}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-[#e8f0fe] file:px-4 file:py-2.5 file:text-sm file:font-medium file:text-primary hover:file:bg-[#dbe8ff]"
                />
                {attachments.length > 0 ? (
                  <div className="mt-2 text-xs text-gray-400">
                    {attachments.map((file) => file.name).join(", ")}
                  </div>
                ) : null}
              </div>

              <label className="flex items-start gap-3 text-xs text-gray-500 leading-relaxed">
                <input
                  type="checkbox"
                  checked={consentAccepted}
                  onChange={(e) => setConsentAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20 shrink-0"
                />
                <span>
                  Отправляя эту форму, Вы выражаете свое{" "}
                  <a
                    href={`${BASE_PATH}/documents/nst-spd.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-primary"
                  >
                    согласие
                  </a>{" "}
                  с нашей политикой конфиденциальности{" "}
                  в области сбора и обработки личных данных. Ознакомиться с{" "}
                  <a
                    href={`${BASE_PATH}/documents/nst-ppd.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-primary"
                  >
                    политикой конфиденциальности
                  </a>
                  .
                </span>
              </label>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center justify-center gap-1 px-4 py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={16} />
                  Назад
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!name || !contact || !message || !consentAccepted || isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 btn-gradient text-sm font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
              {submitError ? (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2.5">
                  {submitError}
                </p>
              ) : null}
            </div>
          )}

          {/* Step 4: No contract */}
          {step === 4 && (
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-gray-900">
                Обратитесь в компанию по адресу электронной почты{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary hover:underline"
                >
                  {SUPPORT_EMAIL.toUpperCase()}
                </a>
              </h4>
              <button
                onClick={() => setStep(1)}
                className="w-full px-4 py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Назад
              </button>
            </div>
          )}

          {/* Step 5: Success */}
          {step === 5 && (
            <div className="text-center py-6">
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
