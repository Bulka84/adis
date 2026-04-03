"use client";

import { useEffect, useState } from "react";

/* ── Data from the real system screenshot ── */

const brigadeRows = [
  { num: 53, smp: 10, ps: 3, prf: "Ф", status: "доезд", statusColor: "#22c55e", datetime: "09:00 - 21:00", addr: "=ИЖЕВСК, ЛЕНИНГРАДСКАЯ, 84", bars: ["#22c55e","#22c55e","#22c55e","#22c55e"] },
  { num: 6, smp: 10, ps: 10, prf: "Ф", status: "обслуживание", statusColor: "#f59e0b", datetime: "09:00 - 16:00", addr: "=ИЖЕВСК, ЛОЗОВСКАЯ, 8", bars: ["#22c55e","#22c55e","#22c55e","#f59e0b","#f59e0b","#f59e0b","#ef4444","#ef4444"] },
  { num: 7104, smp: 7, ps: 1, prf: "Ф", status: "обслуживание", statusColor: "#f59e0b", datetime: "09:00 - 21:00", addr: "=УВА ПОС., +РБ УВА,", bars: ["#22c55e","#22c55e","#f59e0b","#f59e0b","#f59e0b","#ef4444","#ef4444","#ef4444","#ef4444"] },
  { num: 4105, smp: 4, ps: 1, prf: "Ф", status: "обслуживание", statusColor: "#f59e0b", datetime: "09:00 - 09:00", addr: "=ВОТКИНСК, ПАВЛОВА, 2", bars: [] },
  { num: 6107, smp: 6, ps: 1, prf: "Ф", status: "обслуживание", statusColor: "#f59e0b", datetime: "09:00 - 09:00", addr: "=САРАПУЛ, 3-Й ЗАГОРОДНЫЙ ПЕР. 6А", bars: [] },
];

const callRows = [
  { num: 74, prt: 3, prf: "Л", pvd: "02Л", status: "доезд", statusColor: "#22c55e", date: "08:16:08.40", addr: "=ИЖЕВСК, КИРОВА," },
  { num: 65, prt: 1, prf: "Л", pvd: "34Т", status: "обслуживание", statusColor: "#f59e0b", date: "08:08:08.40", addr: "=ИЖЕВСК, ПЕСОЧНАЯ," },
  { num: 57, prt: 1, prf: "Л", pvd: "34Т", status: "обслуживание", statusColor: "#f59e0b", date: "08:08:08.35", addr: "=ИЖЕВСК, ПЕСОЧНАЯ," },
  { num: 27, prt: 1, prf: "Л", pvd: "34Т", status: "обслуживание", statusColor: "#f59e0b", date: "07:07:07.46", addr: "=ИЖЕВСК, ПЕСОЧНАЯ," },
];

export default function HeroDashboard() {
  const [clock, setClock] = useState("08:52:01");

  useEffect(() => {
    const updateClock = () => {
      setClock(new Date().toLocaleTimeString("ru-RU"));
    };

    const initialUpdate = window.setTimeout(updateClock, 0);
    const t = setInterval(() => {
      updateClock();
    }, 1000);

    return () => {
      clearTimeout(initialUpdate);
      clearInterval(t);
    };
  }, []);

  return (
    <div className="w-full max-w-[560px] ml-auto select-none relative">

      {/* ═══════ WINDOW 1: Список бригад ═══════ */}
      <div className="bg-[#2d2d3d] rounded-lg shadow-xl shadow-black/20 overflow-hidden text-[11px] leading-tight border border-gray-600/60">

        {/* Menu bar */}
        <div className="flex items-center flex-wrap gap-0 bg-[#3a3a4a] text-[10px] text-gray-300 font-medium border-b border-gray-600/50">
          {["СМП", "ОПЕРАТИВНАЯ ОБСТАНОВКА", "ФИЛЬТРЫ ПО БРИГАДАМ", "ФИЛЬТРЫ ПО ВЫЗОВАМ", "ГРАФИКИ И ОТЧЁТЫ", "ОКНА"].map((item, i) => (
            <span key={item} className={`px-2 py-1.5 cursor-default whitespace-nowrap ${i === 1 ? "bg-[#4a4a5a] text-white" : ""} transition-colors`}>
              {item}
            </span>
          ))}
        </div>

        {/* Title bar */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#353545] border-b border-gray-600/40 text-[9px]">
          <span className="text-blue-400 font-bold text-[11px]">+</span>
          <span className="text-gray-200 font-semibold">СПИСОК БРИГАД</span>
          <span className="text-gray-500">НАЙДЕНО ЗАПИСЕЙ:</span>
          <span className="text-yellow-400 font-bold">112</span>
          <span className="text-gray-500 ml-auto">ПОСЛЕДНЕЕ ОБНОВЛЕНИЕ:</span>
          <span className="text-yellow-400">{clock}</span>
          <span className="text-gray-600 ml-1">ОБНОВЛЕНИЕ ЧЕРЕЗ 7 С.</span>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[36px_28px_24px_20px_78px_70px_1fr] gap-0 px-3 py-1 bg-[#353545] border-b border-gray-600/40 text-[9px] text-gray-400 font-semibold uppercase">
          <span>№</span>
          <span>СМП</span>
          <span>П/С</span>
          <span>ПРФ</span>
          <span>Состояние</span>
          <span>Дата/Время</span>
          <span>Адрес</span>
        </div>

        {/* Rows */}
        {brigadeRows.map((r, i) => (
          <div key={r.num}>
            <div
              className={`grid grid-cols-[36px_28px_24px_20px_78px_70px_1fr] gap-0 px-3 py-[4px] items-center border-b border-gray-700/30 ${i === 0 ? "bg-blue-900/25" : ""}`}
            >
              <span className="text-white font-bold">{r.num}</span>
              <span className="text-gray-400">{r.smp}</span>
              <span className="text-gray-400">{r.ps}</span>
              <span className="text-gray-400">{r.prf}</span>
              <span style={{ color: r.statusColor }} className="font-medium text-[10px]">{r.status}</span>
              <span className="text-gray-500 text-[9px]">{r.datetime}</span>
              <span className="text-gray-300 text-[9px] truncate">{r.addr}</span>
            </div>
            {/* Color bar scale (shift timeline) */}
            {r.bars.length > 0 && (
              <div className="flex gap-[1px] px-3 pb-[3px] -mt-[1px]" style={{ paddingLeft: "calc(12px + 36px + 28px + 24px + 20px + 78px)" }}>
                {r.bars.map((color, j) => (
                  <div key={j} className="h-[4px] w-[7px] rounded-[1px]" style={{ backgroundColor: color }} />
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Extra space at bottom — will be covered by window 2 */}
        <div className="h-6 bg-[#2d2d3d]" />
      </div>

      {/* ═══════ WINDOW 2: Экстренные вызовы (overlapping) ═══════ */}
      <div className="relative -mt-10 ml-2 mr-1 bg-[#2d2d3d] rounded-lg shadow-2xl shadow-black/40 overflow-hidden text-[11px] leading-tight border border-gray-500/60 z-10">

        {/* Title bar with close button */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#404050] border-b border-gray-500/50 text-[9px]">
          <span className="text-blue-400 font-bold text-[11px]">▼</span>
          <span className="text-white font-semibold">ЭКСТРЕННЫЕ ВЫЗОВЫ</span>
          <span className="text-gray-400">НАЙДЕНО ЗАПИСЕЙ:</span>
          <span className="text-yellow-400 font-bold">4</span>
          <span className="text-gray-400 ml-auto">ПОСЛЕДНЕЕ ОБНОВЛЕНИЕ:</span>
          <span className="text-yellow-400">08:51:54</span>
          <span className="text-gray-500 ml-1">ОБНОВЛЕНИЕ ЧЕРЕЗ 1 СЕК.</span>
          <span className="text-gray-500 ml-2 cursor-default hover:text-white text-[12px] font-bold leading-none">×</span>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[30px_24px_22px_30px_78px_64px_1fr] gap-0 px-3 py-1 bg-[#353545] border-b border-gray-600/40 text-[9px] text-gray-400 font-semibold uppercase">
          <span>№</span>
          <span>ПРТ</span>
          <span>ПРФ</span>
          <span>ПВД</span>
          <span>Состояние</span>
          <span>Дата приёма</span>
          <span>Адрес</span>
        </div>

        {/* Rows */}
        {callRows.map((c) => (
          <div
            key={c.num}
            className="grid grid-cols-[30px_24px_22px_30px_78px_64px_1fr] gap-0 px-3 py-[4px] items-center border-b border-gray-700/30"
          >
            <span className="text-white font-bold">{c.num}</span>
            <span className="text-gray-400">{c.prt}</span>
            <span className="text-gray-400">{c.prf}</span>
            <span className="text-yellow-400 font-semibold text-[10px]">{c.pvd}</span>
            <span style={{ color: c.statusColor }} className="font-medium text-[10px]">{c.status}</span>
            <span className="text-gray-500 text-[9px]">{c.date}</span>
            <span className="text-gray-300 text-[9px] truncate">{c.addr}</span>
          </div>
        ))}

        {/* Status bar */}
        <div className="flex items-center justify-between px-3 py-1 bg-[#353545] text-[9px] border-t border-gray-600/40">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-medium">Подключено</span>
            </span>
            <span className="text-gray-500">Бригад: <span className="text-gray-300">112</span></span>
            <span className="text-gray-500">На вызове: <span className="text-yellow-400">4</span></span>
          </div>
          <span className="text-gray-400 font-semibold tracking-wider">ПК АДИС</span>
        </div>
      </div>
    </div>
  );
}
